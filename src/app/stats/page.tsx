"use client";
import { useState } from "react";
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
        <nav className="w-full flex justify-between py-8 px-16">
          <div className="inline flex items-center">
            <span>
              <Image
                loader={imageLoader}
                src="/gif/logo_navbar.gif"
                alt="Logo Navbar"
                width={50}
                height={50}
                className="inline mx-3"
              />
            </span>
            <p className="font-trapp font-medium text-xl inline">
              <span className="text-[#FFC654]">C</span>{" "}
              <span className="text-[#AACC4C]">i</span> <span>M</span>{" "}
              <span className="text-[#27AAE1]">o</span>
            </p>
          </div>
          <div className="inline">
            <div className="flex gap-x-12">
              <div className="flex items-center">
                <p className="font-trapp font-medium text-xl inline">Panduan</p>
              </div>
              <div className="flex items-center">
                <p className="font-trapp font-medium text-xl inline">
                  Go To City
                </p>
                <span>
                  <Image
                    loader={imageLoader}
                    src="arrow-navbar.png"
                    alt="Arrow Navbar"
                    width={20}
                    height={20}
                    className="inline mx-3"
                  />
                </span>
              </div>
              <div>
                <button
                  type="button"
                  className="font-trapp font-bold text-lg text-gray-900 bg-[#FFC654] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg px-7 py-1.5 text-center"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
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

      <footer className="footer mt-60">
        <nav className="w-full flex justify-between items-end px-28">
          <div className="inline flex-1">
            <h5 className="font-trapp text-xl font-bold mb-5">
              City Of Money.
            </h5>
            <p className="font-poppins font-thin text-sm mb-5 text-black-rgba">
              Copyright All Right Reserve 2024
            </p>
            <Image
              src="/images/gif/logo_footer.gif"
              alt="Logo Footer"
              width={100}
              height={50}
            />
          </div>

          <div className="py-28 px-64">
            <div className="block mb-5">
              <p className="font-poppins font-medium text-sm inline">
                Visualisasi Kota
              </p>
              <span>
                <Image
                  src="/images/arrow-navbar.png"
                  alt="Arrow Navbar"
                  className="inline mx-3"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="block mb-5">
              <p className="font-poppins font-medium text-sm inline">
                Management Uang
              </p>
              <span>
                <Image
                  src="/images/arrow-navbar.png"
                  alt="Arrow Navbar"
                  className="inline mx-3"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="block mb-5">
              <p className="font-poppins font-medium text-sm inline">
                Tips Dan Trick
              </p>
              <span>
                <Image
                  src="/images/arrow-navbar.png"
                  alt="Arrow Navbar"
                  className="inline mx-3"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>

          <div className="developer py-28 px-20">
            <div className="block mb-3">
              <p className="font-poppins font-medium text-lg inline">
                Developers
              </p>
            </div>
            <div className="block mb-5">
              <p className="font-poppins font-medium text-sm inline">
                Teguh Iqbal Prayoga
              </p>
            </div>
            <div className="block mb-5">
              <p className="font-poppins font-medium text-sm inline">
                Rifqi Ahmad Abiyyi
              </p>
            </div>
            <div className="block mb-5">
              <p className="font-poppins font-medium text-sm inline">
                Rian Alfazri Khoirulah
              </p>
            </div>
          </div>
        </nav>
      </footer>
    </main>
  );
}
