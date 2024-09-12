"use client";
import { useState } from "react";
import Modal from "./components/modal";
import Navbar from "./components/nav";
import Image from "next/image";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function City() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <main className="relative bg-fixed w-full h-5/6">
        <Image
          loader={imageLoader}
          src="gedung-bank.png"
          alt="Picture of the author"
          width={150}
          height={150}
          className="absolute right-[20%] top-[10rem] cursor-pointer"
        />
        <Image
          loader={imageLoader}
          src="mobil-merah.png"
          alt="Picture of the author"
          width={80}
          height={80}
          className="absolute right-[40%] top-[25rem] cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  );
}
