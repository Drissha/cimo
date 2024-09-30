"use client";
import { useState, useRef, useEffect } from "react";
import Modal from "./components/modal";
import ModalPajak from "./components/modal_pajak";
import Navbar from "./components/nav";
import Image from "next/image";
import "./css/style.css";
import ModalBank from "./components/modal_bank";
import Link from "next/link";

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
  const [openModal, openModalSet] = useState(false);
  const [openModalBank, openModalBankSet] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    alt: string;
  } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAltPressed, setIsAltPressed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (alt: string) => {
    setSelectedImage({ alt });
    setIsModalOpen(true);
  };

  const handleImageClickPajak = () => {
    openModalSet(true);
  };

  const handleImageClickBank = () => {
    openModalBankSet(true);
  };

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAltPressed && scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust for scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Detect Alt key press and release to toggle cursor
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        setIsAltPressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.altKey) {
        setIsAltPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <main>
      <audio ref={audioRef}>
        <source src="/audio/cimo.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <Navbar />
      <div
        className="overflow-scroll w-100vw"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={{
          cursor: isAltPressed ? (isDragging ? "grabbing" : "grab") : "default",
        }}
      >
        <div className="w-[1912px] h-[912px] md:relative fixed bg-scroll h-[-webkit-fill-available] city">
          <div className="flex">
            <Image
              loader={imageLoader}
              src="bank.png"
              alt="gedung bank"
              width={250}
              height={250}
              className="absolute right-[13.6%] top-[1.5rem] cursor-pointer hover:scale-105"
              onClick={() => handleImageClickBank()}
            />

            <Link href="/drone">
              <Image
                loader={imageLoader}
                src="drone.png"
                alt="drone"
                width={350}
                height={350}
                className="absolute left-[8%] top-[6rem] cursor-pointer drone hover:left-[7%] hover:w-96"
              />
            </Link>
            <Image
              loader={imageLoader}
              src="mobil-merah.png"
              alt="mobil merah"
              width={90}
              height={90}
              className="absolute right-[55%] top-[50%] cursor-pointer car hover:top-[49%] hover:w-24"
              onClick={() => handleImageClick("mobil merah")}
            />

            <Image
              loader={imageLoader}
              src="mobil-hijau.png"
              alt="mobil hijau"
              width={90}
              height={90}
              className="absolute right-[63%] top-[90%] cursor-pointer car hover:top-[89%] hover:w-24"
              onClick={() => handleImageClick("mobil hijau")}
            />

            <Image
              loader={imageLoader}
              src="mobil-oren.png"
              alt="mobil oren"
              width={90}
              height={90}
              className="absolute right-[24%] top-[86%] cursor-pointer car hover:top-[85%] hover:w-24"
              onClick={() => handleImageClick("mobil oren")}
            />

            <Link href="/quest">
              <Image
                loader={imageLoader}
                src="entah.png"
                alt="gedung cafe"
                width={400}
                height={400}
                className="absolute left-[14.5%] top-[39%] cursor-pointer hover:scale-105"
              />
            </Link>

            <Image
              loader={imageLoader}
              src="Polisi.png"
              alt="polisi"
              width={120}
              height={120}
              className="absolute left-[40rem] top-[13rem] cursor-pointer hover:scale-105"
              onClick={() => handleImageClickPajak()}
            />

            <Image
              loader={imageLoader}
              src="roadblock.gif"
              alt="penutup jalan"
              width={100}
              height={100}
              className="absolute left-[64em] top-[32rem] cursor-pointer hover:scale-105"
              onClick={() => handleImageClick("blokade")}
            />

            <Image
              loader={imageLoader}
              src="beruang.gif"
              alt="Beruang"
              width={80}
              height={80}
              className="absolute left-[16rem] top-[46rem]"
            />

            <Image
              loader={imageLoader}
              src="neko.gif"
              alt="Kucing Cina"
              width={80}
              height={80}
              className="absolute right-[8rem] bottom-[6rem] cursor-pointer hover:scale-105"
              onClick={() => handleImageClick("kucing")}
            />

            <Image
              loader={imageLoader}
              src="speaker.gif"
              alt="Speaker"
              width={60}
              height={60}
              className="absolute right-[52.5rem] top-[25.5rem] cursor-pointer hover:scale-105"
              onClick={handlePlayAudio}
            />

            <Image
              loader={imageLoader}
              src="bebek.gif"
              alt="Bebek"
              width={80}
              height={80}
              className="absolute left-[60rem] bottom-[0rem]"
            />

            <Image
              loader={imageLoader}
              src="bebek.gif"
              alt="Bebek"
              width={60}
              height={60}
              className="absolute left-[62rem] bottom-[0rem]"
            />

            <Image
              loader={imageLoader}
              src="sandy.gif"
              alt="Tupai"
              width={50}
              height={50}
              className="absolute left-[39rem] top-[4rem]"
            />
          </div>

          <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedImage={selectedImage}
          />
          <ModalPajak open={openModal} onClose={() => openModalSet(false)} />
          <ModalBank
            open={openModalBank}
            onClose={() => openModalBankSet(false)}
          />
        </div>
      </div>
    </main>
  );
}
