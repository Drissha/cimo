"use client";
import Image from "next/image";
import ProgressBar from "./progressBar";
import Link from "next/link";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function Navbar() {
  return (
    <nav className="navbar md:relative stiky z-[99 !important] bg-black">
      <div className="flex items-center overflow-x-auto px-10 py-5">
        <div className="profile me-auto">
          <Link href="/">
            <div className="inline flex items-center">
              <span>
                <Image
                  loader={imageLoader}
                  src="/gif/logo_navbar.gif"
                  alt="Logo"
                  className="inline mx-3"
                  width={50}
                  height={50}
                />
              </span>
              <p className="font-trapp font-medium text-xl inline">
                <span className="text-[#FFC654]">C</span>{" "}
                <span className="text-[#ffffff]">i</span>{" "}
                <span className="text-[#AACC4C]">M</span>{" "}
                <span className="text-[#ffffff]">o</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="button-group flex">
          <button className="relative text-black bg-[#EECE61] py-2 px-5 rounded-sm button-nav mx-5">
            Petunjuk Keuangan
          </button>
          <button className="relative w-[400px] flex items-center justify-between text-black bg-[#9FB366] py-2 px-5 rounded-sm button-nav mx-5">
            <Image
              loader={imageLoader}
              src="babi.svg"
              alt="Penyimpanan"
              width={20}
              height={20}
              className="mx-1"
            />
            <span className="me-auto">4 / 10</span>
            <Image
              loader={imageLoader}
              src="invest.svg"
              alt="Penyimpanan"
              width={20}
              height={20}
              className="mx-1"
            />
            <span className="mx-2">0 / 3</span>
            <span className="ms-auto w-[30%]">
              Your Wish
              <ProgressBar progress={70} color="#FFC654" size={100} />
            </span>
          </button>
          <button className="relative flex items-center justify-between text-black bg-[#44BEF0] py-2 px-5 rounded-sm button-nav mx-5">
            <Image
              loader={imageLoader}
              src="dollar.svg"
              alt="dollar"
              width={20}
              height={20}
              className="mx-1"
            />
            Rp.9,000,000
          </button>
          <button className="relative flex items-center justify-between text-black bg-[#FFC654] py-2 px-5 rounded-sm button-nav mx-5">
            <Image
              loader={imageLoader}
              src="dollar-coin.png"
              alt="dollar coin"
              width={30}
              height={30}
              className="mx-1"
            />
            Rp.23,000,000
          </button>
        </div>
      </div>
    </nav>
  );
}
