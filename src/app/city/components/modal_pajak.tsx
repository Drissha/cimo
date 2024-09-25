"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

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

interface TaxContent {
  type: string;
  payment: string;
  deduction: string;
  status: string;
  deductionType: string;
  date: string;
}

export default function ModalPajak({ open, onClose }: ModalProps) {
  const [currentContent, setCurrentContent] = useState<TaxContent>({
    type: "Tapera",
    payment: "Bank BNI",
    deduction: "Rp250,000,000",
    status: "Belum Bayar",
    deductionType: "Bulanan",
    date: "01 / 10 / 2024",
  });

  const [activeButton, setActiveButton] = useState<string>("Tapera");

  const handleButtonClick = (taxType: string) => {
    setActiveButton(taxType); // Set the active button
    switch (taxType) {
      case "Tapera":
        setCurrentContent({
          type: "Tapera",
          payment: "Bank BNI",
          deduction: "Rp250,000,000",
          status: "Belum Bayar",
          deductionType: "Bulanan",
          date: "01 / 10 / 2024",
        });
        break;
      case "BPJS":
        setCurrentContent({
          type: "BPJS",
          payment: "Bank Mandiri",
          deduction: "Rp150,000,000",
          status: "Belum Bayar",
          deductionType: "Tahunan",
          date: "01 / 11 / 2024",
        });
        break;
      case "Jiwasraya":
        setCurrentContent({
          type: "Jiwasraya",
          payment: "Bank BCA",
          deduction: "Rp100,000,000",
          status: "Belum Bayar",
          deductionType: "Bulanan",
          date: "01 / 12 / 2024",
        });
        break;
      case "Kendaraan":
        setCurrentContent({
          type: "Kendaraan",
          payment: "Bank CIMB",
          deduction: "Rp200,000,000",
          status: "Belum Bayar",
          deductionType: "Tahunan",
          date: "01 / 01 / 2025",
        });
        break;
      default:
        break;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-gray-900 bg-opacity-85" />

      {/* Modal Content */}
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex mx-auto min-h-full items-center justify-center p-4">
          <DialogPanel className="relative bg-[#080A0E] text-[#FFFFFF] rounded-lg shadow-xl">
            <div className="grid grid-cols-2">
              <div className="left p-10">
                <button
                  onClick={onClose}
                  className="flex items-center mb-5 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
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
                <h1 className="text-3xl">Bayar Pajak Dulu Gasieh !?</h1>
                <p>
                  <span className="flex items-center text-[#E65C5C] mt-3 me-10">
                    Pajak{" "}
                    <Image
                      loader={imageLoader}
                      src="pajak.png"
                      alt="pajak"
                      width={20}
                      height={20}
                      className="ms-2 w-[14px] h-[14px]"
                    />
                  </span>
                </p>
                <Image
                  loader={imageLoader}
                  src="polisi-pajak.gif"
                  alt="polisi"
                  width={400}
                  height={400}
                  className="ms-2 absolute left-[-3rem] bottom-[-7rem]"
                />
              </div>
              <div className="right rounded bg-[#272323] border border-2 border-[#000000]">
                <div className="judul-modal bg-[#DDE65C] w-full p-5 rounded-t">
                  <button
                    onClick={() => handleButtonClick("Tapera")}
                    className={`text-black rounded-lg px-4 py-2 mx-1 ${
                      activeButton === "Tapera"
                        ? "bg-[#FEC537] border-2 border-black"
                        : "bg-transparent hover:bg-[#FEC537]"
                    }`}
                  >
                    Tapera
                  </button>
                  <button
                    onClick={() => handleButtonClick("BPJS")}
                    className={`text-black rounded-lg px-4 py-2 mx-1 ${
                      activeButton === "BPJS"
                        ? "bg-[#FEC537] border-2 border-black"
                        : "bg-transparent hover:bg-[#FEC537]"
                    }`}
                  >
                    BPJS
                  </button>
                  <button
                    onClick={() => handleButtonClick("Jiwasraya")}
                    className={`text-black rounded-lg px-4 py-2 mx-1 ${
                      activeButton === "Jiwasraya"
                        ? "bg-[#FEC537] border-2 border-black"
                        : "bg-transparent hover:bg-[#FEC537]"
                    }`}
                  >
                    Jiwasraya
                  </button>
                  <button
                    onClick={() => handleButtonClick("Kendaraan")}
                    className={`text-black rounded-lg px-4 py-2 mx-1 ${
                      activeButton === "Kendaraan"
                        ? "bg-[#FEC537] border-2 border-black"
                        : "bg-transparent hover:bg-[#FEC537]"
                    }`}
                  >
                    Kendaraan
                  </button>
                </div>

                <div className="modal-content grid grid-cols-2 p-10">
                  <div>
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold">Jenis Pajak</h4>
                      <p className="text-sm">{currentContent.type}</p>
                    </div>
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold">Pembayaran</h4>
                      <p className="text-sm">{currentContent.payment}</p>
                    </div>
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold">Potongan</h4>
                      <p className="text-[#E65C5C] text-sm">
                        {currentContent.deduction}
                      </p>
                      <p className="text-xs">Dari Pendapatan Bulanan</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold">Status</h4>
                      <p className="text-sm">{currentContent.status}</p>
                    </div>
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold">Jenis Potongan</h4>
                      <p className="text-sm">{currentContent.deductionType}</p>
                    </div>
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold">Tanggal</h4>
                      <p className="text-sm">{currentContent.date}</p>
                    </div>
                  </div>
                  <button className="py-3 w-full bg-[#9FB366] text-[#262626] hover:text-white border border-2 border-black rounded-lg col-span-full mt-10">
                    Bayar Pajak
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
