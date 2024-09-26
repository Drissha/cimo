"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function Stats() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  // Function to handle card click
  const handleClick = (index: number) => {
    setActiveCardIndex(index);
  };

  const getBgColor = (index: number) => {
    return activeCardIndex === index ? "#363536" : "#252121";
  };

  // Helper function to render card content
  const renderCardContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="after-stats flex flex-col">
            <div className="flex flex-row">
              <span>
                <Image
                  loader={imageLoader}
                  src="/gif/coin.gif"
                  alt="Logo Navbar"
                  width={50}
                  height={50}
                  className="inline"
                />
              </span>
              <p className="font-trapp font-reguler text-2xl text-white py-2.5">
                Biaya Primer
              </p>
            </div>
            <div className="card bg-[#414042] flex flex-row w-[400px] border-2 border-black ml-8 p-4 gap-16 mt-4">
              <p className="font-trapp font-bold text-white py-2">Makanan</p>
              <div className="flex flex-col">
                <p className="font-trapp font-bold text-white">850.000</p>
                <Image
                  loader={imageLoader}
                  src="/bar_keinginan.png"
                  alt="Logo Navbar"
                  width={300}
                  height={15}
                  className="inline"
                />
              </div>
            </div>
            <div className="card bg-[#414042] flex flex-row w-[400px] border-2 border-black ml-8 p-4 gap-16 mt-4">
              <p className="font-trapp font-bold text-white py-2">Makanan</p>
              <div className="flex flex-col">
                <p className="font-trapp font-bold text-white">850.000</p>
                <Image
                  loader={imageLoader}
                  src="/bar_keinginan.png"
                  alt="Logo Navbar"
                  width={300}
                  height={15}
                  className="inline"
                />
              </div>
            </div>
            <div className="card bg-[#414042] flex flex-row w-[400px] border-2 border-black ml-8 p-4 gap-16 mt-4">
              <p className="font-trapp font-bold text-white py-2">Makanan</p>
              <div className="flex flex-col">
                <p className="font-trapp font-bold text-white">850.000</p>
                <Image
                  loader={imageLoader}
                  src="/bar_keinginan.png"
                  alt="Logo Navbar"
                  width={300}
                  height={15}
                  className="inline"
                />
              </div>
            </div>
            <div className="card bg-[#414042] flex flex-row w-[400px] border-2 border-black ml-8 p-4 gap-16 mt-4">
              <p className="font-trapp font-bold text-white py-2">Makanan</p>
              <div className="flex flex-col">
                <p className="font-trapp font-bold text-white">850.000</p>
                <Image
                  loader={imageLoader}
                  src="/bar_keinginan.png"
                  alt="Logo Navbar"
                  width={300}
                  height={15}
                  className="inline"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <Image
            loader={imageLoader}
            src="stats.png"
            width={400}
            height={300}
            className="pt-24"
            alt="Statistik"
          />
        );
      // You can add more cases for other cards here...
      default:
        return null;
    }
  };

  return (
    <main className="bg-[#252121] text-white">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="h-screen grid grid-cols-2 justify-content-center items-center content-center px-40 pt-40">
          <div className="col flex flex-col pb-[200px]">
            <div className="heading-stats">
              <h3 className="font-trapp text-5xl font-bold tracking-wide mb-8">
                Atur Pemasukan Bulanan <br /> Anda dengan Bijak
              </h3>
              <p className="font-poppins text-base font-light text-black-rgba">
                Pengelolaan keuangan yang baik dapat membantu mencapai <br />{" "}
                kesejahteraan finansial. Dengan pendapatan{" "}
                <span className="font-poppins text-base font-light text-white">
                  Rp5 juta per bulan,
                </span>
                <br /> berikut panduan sederhana untuk mengalokasikan dana Anda:
              </p>
            </div>
            {activeCardIndex === null ? (
              <Image
                loader={imageLoader}
                src="stats.png"
                width={400}
                height={300}
                className="pt-24"
                alt="Statistik"
              />
            ) : (
              <div className="pt-24">{renderCardContent(activeCardIndex)}</div>
            )}
          </div>

          <div className="col">
            <div className="h-[800px] w-[680px] overflow-y-auto scrollbar-hide bg-[#252121] shadow-inner">
              <div className="p-4 space-y-16 justify-center">
                {/* Biaya Primer */}
                <div
                  className="flex flex-row gap-4 p-8"
                  style={{ backgroundColor: getBgColor(0) }}
                  onClick={() => handleClick(0)}
                >
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/coin.gif"
                      width={60}
                      height={60}
                      alt="Coin GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-xl font-bold tracking-wide">
                      Biaya Primer <br />{" "}
                      <span className="text-medium">50%- Rp2.500.000</span>
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Alokasikan setengah dari pendapatan Anda <br /> untuk
                      kebutuhan utama seperti:
                    </p>
                    <div className="card w-[400px] h-[80px] bg-[#414042] flex px-4 items-center border border-black border-2">
                      <p className="font-poppins text-sm font-medium text-white">
                        Makanan, tempat tinggal, transportasi <br /> Listrik,
                        air, dan kebutuhan sehari-hari lainnya
                      </p>
                    </div>
                  </div>
                </div>
                {/* Investasi Masa Depan */}
                <div
                  className="flex flex-row gap-4 p-8"
                  style={{ backgroundColor: getBgColor(1) }}
                  onClick={() => handleClick(1)}
                >
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/dollar_persen.gif"
                      width={60}
                      height={60}
                      alt="Dollar Percent GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-xl font-bold tracking-wide">
                      Investasi untuk Masa Depan <br /> 25% - Rp1.250.000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Investasikan dana ini untuk memperkuat masa <br /> depan
                      finansial Anda, termasuk:
                    </p>
                    <div className="card w-[400px] h-[200px] bg-[#414042] flex flex-col gap-4 px-4 py-6 border border-black border-2">
                      <p className="font-poppins text-sm font-medium text-white">
                        Pendidikan (10%) - Rp500.000: <br />{" "}
                        <span className="text-black-rgba">
                          Biaya kursus, pelatihan, atau pendidikan anak
                        </span>
                      </p>
                      <p className="font-poppins text-sm font-medium text-white">
                        Kesehatan (5%) - Rp250.000: <br />{" "}
                        <span className="text-black-rgba">
                          Asuransi kesehatan atau dana darurat medis
                        </span>
                      </p>
                      <p className="font-poppins text-sm font-medium text-white">
                        Masa Depan (10%) - Rp500.000: <br />{" "}
                        <span className="text-black-rgba">
                          Dana pensiun atau investasi jangka panjang
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Infaq / Sedekah */}
                <div
                  className="flex flex-row gap-4 p-8"
                  style={{ backgroundColor: getBgColor(2) }}
                  onClick={() => handleClick(2)}
                >
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/celeng.gif"
                      width={60}
                      height={60}
                      alt="Celengan GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-xl font-bold tracking-wide">
                      Infaq / Sedekah <br /> 2.5%- Rp125,000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Sumbangkan sebagian kecil penghasilan untuk <br /> zakat
                      atau infaq.
                    </p>
                    <div className="card w-[400px] h-[80px] bg-[#414042] flex px-4 items-center border border-black border-2">
                      <p className="font-poppins text-sm font-medium text-white">
                        Ke Orang terdekat yang sedang <br /> membutuhkan atau ke
                        masjid terdekat
                      </p>
                    </div>
                  </div>
                </div>
                {/* Pajak */}
                <div
                  className="flex flex-row gap-4 p-8"
                  style={{ backgroundColor: getBgColor(3) }}
                  onClick={() => handleClick(3)}
                >
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/dollar.gif"
                      width={60}
                      height={60}
                      alt="Dollar GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-xl font-bold tracking-wide">
                      Pajak <br /> 5%- Rp250.000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Bayar Pajak agar tidak terkena denda yang <br /> lebih
                      berat lagi nantinya
                    </p>
                    <div className="card w-[400px] h-[80px] bg-[#414042] flex px-4 items-center border border-black border-2">
                      <p className="font-poppins text-sm font-medium text-white">
                        Tapera, Bpjs, Dana Pensiun, Jiwasraya
                      </p>
                    </div>
                  </div>
                </div>
                {/* Investasi Lain */}
                <div
                  className="flex flex-row gap-4 p-8"
                  style={{ backgroundColor: getBgColor(5) }}
                  onClick={() => handleClick(5)}
                >
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/celeng.gif"
                      width={60}
                      height={60}
                      alt="Celengan GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-xl font-bold tracking-wide">
                      Investasi Lain <br /> 17.5% - Rp875.000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Sisa dana ini dapat diinvestasikan sesuai <br /> dengan
                      tujuan jangka panjang:
                    </p>
                    <div className="card w-[400px] h-[230px] bg-[#414042] flex flex-col gap-4 px-4 py-6 border border-black border-2">
                      <p className="font-poppins text-sm font-medium text-white">
                        Saham: <br />{" "}
                        <span className="text-black-rgba">
                          Investasi di perusahaan yang stabil
                        </span>
                      </p>
                      <p className="font-poppins text-sm font-medium text-white">
                        Yield Farming Crypto: <br />{" "}
                        <span className="text-black-rgba">
                          Peluang hasil tinggi, dengan risiko yang lebih <br />{" "}
                          besar
                        </span>
                      </p>
                      <p className="font-poppins text-sm font-medium text-white">
                        Buka Usaha Sendiri: <br />{" "}
                        <span className="text-black-rgba">
                          Memulai bisnis kecil untuk menambah <br /> sumber
                          penghasilan
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


      <Footer />

    </main>
  );
}
