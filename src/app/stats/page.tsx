"use client";
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
  return (
    <main className="bg-[#252121] text-white">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="h-screen grid grid-cols-2 justify-content-center items-center content-center px-40">
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
            <Image
              loader={imageLoader}
              src="stats.png"
              width={400}
              height={300}
              className="pt-24"
              alt="Statistik"
            />
          </div>

          <div className="col pt-[200px]">
            <div className="h-[800px] w-[680px] overflow-y-auto scrollbar-hide bg-[#252121] shadow-inner">
              <div className="p-4 space-y-16 justify-center">
                {/* Biaya Primer */}
                <div className="flex flex-row gap-4">
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/coin.gif"
                      width={80}
                      height={80}
                      alt="Coin GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-3xl font-bold tracking-wide">
                      Biaya Primer <br /> 50%- Rp2.500.000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Alokasikan setengah dari pendapatan Anda <br /> untuk
                      kebutuhan utama seperti:
                    </p>
                    <div className="card w-[400px] h-[100px] bg-[#414042] flex px-4 items-center border border-black border-2">
                      <p className="font-poppins font-bold text-white">
                        Makanan, tempat tinggal, transportasi <br /> Listrik,
                        air, dan kebutuhan sehari-hari lainnya
                      </p>
                    </div>
                  </div>
                </div>
                {/* Investasi Masa Depan */}
                <div className="flex flex-row gap-4">
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/dollar_persen.gif"
                      width={80}
                      height={80}
                      alt="Dollar Percent GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-3xl font-bold tracking-wide">
                      Investasi untuk Masa Depan <br /> 25% - Rp1.250.000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Investasikan dana ini untuk memperkuat masa <br /> depan
                      finansial Anda, termasuk:
                    </p>
                    <div className="card w-[400px] h-[220px] bg-[#414042] flex flex-col gap-4 px-4 py-6 border border-black border-2">
                      <p className="font-poppins font-bold text-white">
                        Pendidikan (10%) - Rp500.000: <br />{" "}
                        <span className="text-black-rgba">
                          Biaya kursus, pelatihan, atau pendidikan anak
                        </span>
                      </p>
                      <p className="font-poppins font-bold text-white">
                        Kesehatan (5%) - Rp250.000: <br />{" "}
                        <span className="text-black-rgba">
                          Asuransi kesehatan atau dana darurat medis
                        </span>
                      </p>
                      <p className="font-poppins font-bold text-white">
                        Masa Depan (10%) - Rp500.000: <br />{" "}
                        <span className="text-black-rgba">
                          Dana pensiun atau investasi jangka panjang
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Infaq / Sedekah */}
                <div className="flex flex-row gap-4">
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/celeng.gif"
                      width={80}
                      height={80}
                      alt="Celengan GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-3xl font-bold tracking-wide">
                      Infaq / Sedekah <br /> 2.5%- Rp125,000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Sumbangkan sebagian kecil penghasilan untuk <br /> zakat
                      atau infaq.
                    </p>
                    <div className="card w-[400px] h-[100px] bg-[#414042] flex px-4 items-center border border-black border-2">
                      <p className="font-poppins font-bold text-white">
                        Ke Orang terdekat yang sedang <br /> membutuhkan atau ke
                        masjid terdekat
                      </p>
                    </div>
                  </div>
                </div>
                {/* Pajak */}
                <div className="flex flex-row gap-4">
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/dollar.gif"
                      width={80}
                      height={80}
                      alt="Dollar GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-3xl font-bold tracking-wide">
                      Pajak <br /> 5%- Rp250.000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Bayar Pajak agar tidak terkena denda yang <br /> lebih
                      berat lagi nantinya
                    </p>
                    <div className="card w-[400px] h-[100px] bg-[#414042] flex px-4 items-center border border-black border-2">
                      <p className="font-poppins font-bold text-white">
                        Tapera, Bpjs, Dana Pensiun, Jiwasraya
                      </p>
                    </div>
                  </div>
                </div>
                {/* Investasi Lain */}
                <div className="flex flex-row gap-4">
                  <div className="col flex flex-col">
                    <Image
                      loader={imageLoader}
                      src="gif/celeng.gif"
                      width={80}
                      height={80}
                      alt="Celengan GIF"
                    />
                  </div>
                  <div className="col flex flex-col gap-2">
                    <h3 className="font-trapp text-3xl font-bold tracking-wide">
                      Investasi Lain <br /> 17.5% - Rp875.000
                    </h3>
                    <p className="font-poppins text-base font-light text-black-rgba">
                      Sisa dana ini dapat diinvestasikan sesuai <br /> dengan
                      tujuan jangka panjang:
                    </p>
                    <div className="card w-[400px] h-[260px] bg-[#414042] flex flex-col gap-4 px-4 py-6 border border-black border-2">
                      <p className="font-poppins font-bold text-white">
                        Saham: <br />{" "}
                        <span className="text-black-rgba">
                          Investasi di perusahaan yang stabil
                        </span>
                      </p>
                      <p className="font-poppins font-bold text-white">
                        Yield Farming Crypto: <br />{" "}
                        <span className="text-black-rgba">
                          Peluang hasil tinggi, dengan risiko yang lebih besar
                        </span>
                      </p>
                      <p className="font-poppins font-bold text-white">
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
