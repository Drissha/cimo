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

export default function Modal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-gray-900 bg-opacity-85" />

      {/* Modal Content */}
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="relative bg-[#080A0E] text-[#FFFFFF] rounded-lg p-[4rem] shadow-xl">
            <h1 className="text-3xl">Transaksi Keuangan Kamu</h1>
            <p className="flex">
              <span className="flex items-center text-[#B8C88D] me-10">
                Masuk{" "}
                <Image
                  loader={imageLoader}
                  src="arrow-masuk.png"
                  alt="Picture of the author"
                  width={20}
                  height={20}
                  className="ms-2 w-[14px] h-[14px]"
                />
              </span>
              02 / 10 / 2024
            </p>
            <div className="grid grid-cols-2 items-center justify-items-center">
              <div className="left">
                <Image
                  loader={imageLoader}
                  src="merah-parkir.png"
                  alt="Picture of the author"
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
              <button
                onClick={onClose}
                className="absolute top-[2rem] right-[2rem] rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
// onClick={onClose}
