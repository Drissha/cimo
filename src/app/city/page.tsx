"use client";
import { useState } from "react";
import Modal from "./components/modal";
import Navbar from "./components/nav";
import Image from "next/image";
import "./css/style.css";

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
      <main className="md:relative fixed bg-scroll md:w-full w-[1912px] md:h-[100vh] h-[930px] city">
        <div className="flex overflow-scroll">
          <Image
            loader={imageLoader}
            src="bank.png"
            alt="gedung bank"
            width={250}
            height={250}
            className="absolute right-[13.6%] top-[2rem] cursor-pointer hover:scale-105 overflow-scroll"
          />

          <Image
            loader={imageLoader}
            src="drone.png"
            alt="drone"
            width={350}
            height={350}
            className="absolute left-[8%] top-[6rem] cursor-pointer drone hover:left-[7%] hover:w-96"
          />

          <Image
            loader={imageLoader}
            src="mobil-merah.png"
            alt="mobil merah"
            width={90}
            height={90}
            className="absolute right-[55%] top-[50%] cursor-pointer car hover:top-[49%] hover:w-24"
            onClick={() => setIsModalOpen(true)}
          />

          <Image
            loader={imageLoader}
            src="mobil-hijau.png"
            alt="mobil hijau"
            width={90}
            height={90}
            className="absolute right-[63%] top-[90%] cursor-pointer car hover:top-[89%] hover:w-24"
            onClick={() => setIsModalOpen(true)}
          />

          <Image
            loader={imageLoader}
            src="mobil-oren.png"
            alt="mobil oren"
            width={90}
            height={90}
            className="absolute right-[24%] top-[86%] cursor-pointer car hover:top-[85%] hover:w-24"
            onClick={() => setIsModalOpen(true)}
          />

          <Image
            loader={imageLoader}
            src="entah.png"
            alt="gedung cafe"
            width={400}
            height={400}
            className="absolute left-[14.5%] top-[39%] cursor-pointer hover:scale-105"
          />
        </div>

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  );
}
