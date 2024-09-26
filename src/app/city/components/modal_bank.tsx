"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import ProgressBar from "./progressBar";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalPajak({ open, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "statistik" | "perbandingan"
  >("overview");

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="modal-content grid grid-cols-2 gap-4 my-5">
            <div className="bg-[#414042] p-5 rounded-xl">
              <h5>Total tabungan flat saat ini</h5>
              <p className="text-[#DDE65C]">Rp. 24,000,000</p>
              <div className="mt-5">
                <h5>Target Tabungan</h5>
                <p className="opacity-75">Rp. 200,000,000</p>
                <div className="mt-5">
                  <ProgressBar progress={60} color="#DDE65C" size={70} />
                </div>
                <button className="relative flex items-center mt-5 justify-between text-black bg-[#DDE65C] py-2 px-5 rounded-sm button-nav">
                  Setor Tabungan
                </button>
              </div>
            </div>
            <div className="bg-[#414042] p-5 rounded-xl row-span-2">
              <h5>Investasi yang kamu lakukan</h5>
              <div className="mt-5">
                <div className="bg-[#545355] p-5 rounded-xl border-2 border-black">
                  <h5>Usaha Mandiri</h5>
                  <p className="text-[#DDE65C]">Rp. 40,000,000</p>
                  <div className="flex items-center mt-2">
                    <p className="opacity-75 hover:opacity-100 cursor-pointer">
                      Lihat Selengkapnya
                    </p>
                    <Image
                      loader={imageLoader}
                      src="arrow-masuk2.png"
                      alt="Arrow masuk"
                      width={20}
                      height={20}
                      className="ms-2 w-[14px] h-[14px]"
                    />
                  </div>
                </div>
                <div className="bg-[#545355] p-5 my-3 rounded-xl border-2 border-black">
                  <h5>Saham</h5>
                  <p className="text-[#DDE65C]">Rp. 14,000,000</p>
                  <div className="flex items-center mt-2">
                    <p className="opacity-75 hover:opacity-100 cursor-pointer">
                      Lihat Selengkapnya
                    </p>
                    <Image
                      loader={imageLoader}
                      src="arrow-masuk2.png"
                      alt="Arrow masuk"
                      width={20}
                      height={20}
                      className="ms-2 w-[14px] h-[14px]"
                    />
                  </div>
                </div>
                <div className="bg-[#545355] p-5 rounded-xl border-2 border-black">
                  <h5>Crypto</h5>
                  <p className="text-[#DDE65C]">Rp. 4,000,000</p>
                  <div className="flex items-center mt-2">
                    <p className="opacity-75 hover:opacity-100 cursor-pointer">
                      Lihat Selengkapnya
                    </p>
                    <Image
                      loader={imageLoader}
                      src="arrow-masuk2.png"
                      alt="Arrow masuk"
                      width={20}
                      height={20}
                      className="ms-2 w-[14px] h-[14px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#414042] p-5 rounded-xl">
              <h5>Tabungan yang bisa ditarik untuk saat ini</h5>
              <p>Rp. 10,000,000</p>

              <button className="relative flex items-center mt-5 justify-between text-black bg-[#E6645C] py-2 px-5 rounded-sm button-nav">
                Tarik Tabungan
              </button>
            </div>
          </div>
        );
      case "statistik":
        return (
          <div className="modal-content mt-10">
            <Image
              loader={imageLoader}
              src="grafik.png"
              alt="grafik"
              width={600}
              height={600}
              className="mt-auto mr-auto w-full"
            />
          </div>
        );
      case "perbandingan":
        return (
          <div className="modal-content grid grid-cols-2 gap-4 my-5">
            <div className="bg-[#414042] p-5 rounded-xl">
              <h5>Perbandingan Tabungan</h5>
              <p className="text-[#DDE65C]">Rp. 24,000,000</p>
              {/* You can add comparison data here */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-gray-900 bg-opacity-85" />

      {/* Modal Content */}
      <div className="fixed inset-0 z-[100] overflow-y-auto">
        <div className="flex w-[80%] m-auto min-h-full items-center justify-center p-4">
          <DialogPanel className="relative bg-[#272323] text-[#FFFFFF] rounded-lg shadow-xl">
            <div className="grid grid-cols-2">
              <div className="left">
                <button
                  onClick={onClose}
                  className="flex p-10 items-center mb-5 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <Image
                    loader={imageLoader}
                    src="arrow-back.png"
                    alt="kembali"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Kembali
                </button>
                <Image
                  loader={imageLoader}
                  src="popup-bank.png"
                  alt="Bank"
                  width={600}
                  height={600}
                  className="mt-auto mr-auto w-full"
                />
                <Image
                  loader={imageLoader}
                  src="juan.gif"
                  alt="Kuda"
                  width={130}
                  height={130}
                  className="absolute left-[18%] bottom-[0%]"
                />
              </div>
              <div className="right rounded bg-[#272323] py-10 pr-10">
                <h3 className="text-3xl mb-3">Tabungan Kamu</h3>
                <p>
                  Ini adalah uang Investasi dan uang Tabungan kamu, jika perlu
                  ditarik sewaktu-waktu kamu bisa menariknya
                </p>
                <div className="judul-modal flex w-full mt-5 rounded-t border-b-2 border-[#565353]">
                  <p
                    onClick={() => setActiveTab("overview")}
                    className={`text-white px-5 py-3 cursor-pointer ${
                      activeTab === "overview"
                        ? "border-b-2 border-[#DDE65C]"
                        : "hover:border-b-2 border-transparent"
                    }`}
                  >
                    Overview
                  </p>
                  <p
                    onClick={() => setActiveTab("statistik")}
                    className={`text-white px-5 py-3 cursor-pointer ${
                      activeTab === "statistik"
                        ? "border-b-2 border-[#DDE65C]"
                        : "hover:border-b-2 border-transparent"
                    }`}
                  >
                    Statistik
                  </p>
                  <p
                    onClick={() => setActiveTab("perbandingan")}
                    className={`text-white px-5 py-3 cursor-pointer ${
                      activeTab === "perbandingan"
                        ? "border-b-2 border-[#DDE65C]"
                        : "hover:border-b-2 border-transparent"
                    }`}
                  >
                    Perbandingan
                  </p>
                  <div className="w-full "></div>
                </div>
                {renderContent()}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
