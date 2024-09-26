"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
  selectedImage: { alt: string } | null; // Menambahkan selectedImage
}

export default function Modal({ open, onClose, selectedImage }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-gray-900 bg-opacity-85" />

      {/* Modal Content */}
      <div className="fixed inset-0 z-[100] overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="relative bg-[#080A0E] text-[#FFFFFF] rounded-lg p-[4rem] shadow-xl">
            <h1 className="text-3xl">Transaksi Keuangan Kamu</h1>
            <p>
              {selectedImage && selectedImage.alt === "mobil merah" ? (
                <span className="flex">
                  <span className="flex items-center text-[#B8C88D] me-10">
                    Masuk{" "}
                    <Image
                      loader={imageLoader}
                      src="arrow-masuk.png"
                      alt="Arrow masuk"
                      width={20}
                      height={20}
                      className="ms-2 w-[14px] h-[14px]"
                    />
                  </span>
                  02 / 10 / 2024
                </span>
              ) : selectedImage && selectedImage.alt === "mobil oren" ? (
                <span className="flex">
                  <span className="flex items-center text-[#FA5C52] me-10">
                    Keluar{" "}
                    <Image
                      loader={imageLoader}
                      src="arrow-keluar.png"
                      alt="Arrow keluar"
                      width={20}
                      height={20}
                      className="ms-2 w-[14px] h-[14px]"
                    />
                  </span>
                  02 / 10 / 2024
                </span>
              ) : selectedImage && selectedImage.alt === "blokade" ? (
                <span className="flex items-center text-[#FEC537] me-10">
                  Warning{" "}
                  <Image
                    loader={imageLoader}
                    src="Awas.gif"
                    alt="warning"
                    width={20}
                    height={20}
                    className="ms-2 w-[25px] h-[25px]"
                  />
                </span>
              ) : (
                <span className="flex">
                  <span className="flex items-center text-[#DDE65C] me-10">
                    Saving{" "}
                    <Image
                      loader={imageLoader}
                      src="babi-kuning.png"
                      alt="Save"
                      width={20}
                      height={20}
                      className="ms-2 w-[14px] h-[14px]"
                    />
                  </span>
                  02 / 10 / 2024
                </span>
              )}
            </p>

            {selectedImage && selectedImage.alt === "mobil merah" ? (
              <div className="grid grid-cols-2 items-center justify-items-center">
                <div className="left">
                  <Image
                    loader={imageLoader}
                    src="merah-parkir.png"
                    alt={selectedImage.alt}
                    width={400}
                    height={400}
                    className="ms-2"
                  />
                </div>
                <div className="right">
                  <div className="mb-5">
                    <h4>Sumber Transaksi</h4>
                    <p className="text-[#FA5C52]">Bank Niaga</p>
                  </div>
                  <div className="my-5">
                    <h4>Kode Transaksi</h4>
                    <p>D43dP054fR</p>
                  </div>
                  <div className="my-5">
                    <h4>Nama Pengirim</h4>
                    <p>Teguh Abbiyi</p>
                  </div>
                  <div className="my-5">
                    <h4>Nama Penerima</h4>
                    <p>Rifqi Alfazri</p>
                  </div>
                  <div className="my-5">
                    <h4>Nominal</h4>
                    <p>Rp. 3,000,000.00</p>
                  </div>
                  <div className="mt-5">
                    <h4>Note</h4>
                    <p>Pembayaran Umrah</p>
                  </div>
                </div>
              </div>
            ) : selectedImage && selectedImage.alt === "mobil oren" ? (
              <div className="grid grid-cols-2 items-center justify-items-center">
                <div className="left">
                  <Image
                    loader={imageLoader}
                    src="oren-parkir.png"
                    alt={selectedImage.alt}
                    width={400}
                    height={400}
                    className="ms-2"
                  />
                </div>
                <div className="right">
                  <div className="mb-5">
                    <h4>Sumber Transaksi</h4>
                    <p className="text-[#EF8F2D]">Bank Mandiri</p>
                  </div>
                  <div className="my-5">
                    <h4>Kode Transaksi</h4>
                    <p>D43dP054fR</p>
                  </div>
                  <div className="my-5">
                    <h4>Nama Pengirim</h4>
                    <p>Teguh Abbiyi</p>
                  </div>
                  <div className="my-5">
                    <h4>Nama Penerima</h4>
                    <p>Rifqi Alfazri</p>
                  </div>
                  <div className="my-5">
                    <h4>Nominal</h4>
                    <p>Rp. 3,000,000.00</p>
                  </div>
                  <div className="mt-5">
                    <h4>Note</h4>
                    <p>Pembayaran Umrah</p>
                  </div>
                </div>
              </div>
            ) : selectedImage && selectedImage.alt === "mobil hijau" ? (
              <div className="grid grid-cols-2 items-center justify-items-center">
                <div className="left">
                  <Image
                    loader={imageLoader}
                    src="hijau-parkir.png"
                    alt={selectedImage.alt}
                    width={400}
                    height={400}
                    className="ms-2 my-10"
                  />
                </div>
                <div className="right">
                  <div className="mb-5">
                    <h4>Sumber Transaksi</h4>
                    <p className="text-[#DDE65C]">Gopay</p>
                  </div>
                  <div className="my-5">
                    <h4>Nominal</h4>
                    <p>Rp. 200,000.00</p>
                  </div>
                  <div className="mt-5">
                    <h4>Untuk</h4>
                    <p>Dana Pendidikan </p>
                  </div>
                </div>
              </div>
            ) : selectedImage && selectedImage.alt === "blokade" ? (
              <div className="grid grid-cols-2 items-center justify-items-center">
                <div className="left">
                  <Image
                    loader={imageLoader}
                    src="blokade.png"
                    alt={selectedImage.alt}
                    width={400}
                    height={400}
                    className="ms-2 my-10"
                  />
                </div>
                <div className="right">
                  <div className="mb-5">
                    <p>
                      Sepertinya kamu banyak melakukan transaksi keluar
                      akhir-akhir ini
                    </p>
                  </div>
                  <div className="my-5">
                    <h4>Total Transaksi Keluar</h4>
                    <p>40 Kali</p>
                  </div>
                  <div className="mt-5">
                    <h4>Rentan Durasi</h4>
                    <p>2 Minggu </p>
                  </div>
                  <div className="bg-[#333333] p-3 mt-5 w-fit">
                    <p className="text-[#FEC537]">
                      #Apakah Kamu sedang ada masalah finansial ?
                    </p>
                  </div>
                  <div className="flex">
                    <button className="bg-[#9FB366] px-8 py-3 text-black mt-1 mr-1">
                      Ya
                    </button>
                    <button className="bg-[#FA5C52] px-8 py-3 text-black mt-1">
                      Tidak
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <h1>Item Tidak ada</h1>
            )}

            <button
              onClick={onClose}
              className="absolute top-[2rem] right-[2rem] rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
