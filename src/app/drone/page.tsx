"use client";
import Image from "next/image";
import Link from "next/link";

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
      <nav className="w-full flex justify-between py-8 px-16">
        <div className="inline flex items-center gap-2">
          <span>
            <Link href="city">
              <Image
                loader={imageLoader}
                src="panah_kembali.png"
                width={20}
                height={20}
                className=""
                alt="Statistik"
              />
            </Link>
          </span>
          <p className="font-poppins font-medium text-xl inline">Kembali</p>
        </div>
      </nav>

      <section className="h-screen flex flex-col">
        <div className="heading-stats px-32 pt-24">
          <h3 className="font-trapp text-5xl font-bold tracking-wide mb-4">
            Overview Keuangan Kamu
          </h3>
          <div className="flex flex-row">
            <p className="font-poppins text-base font-medium  text-lg text-black-rgba">
              Bulan <span className="text-white">September</span> 2024
            </p>
            <span>
              <Image
                loader={imageLoader}
                src="icon_dropdown.png"
                width={20}
                height={20}
                className=""
                alt="Statistik"
              />
            </span>
          </div>
        </div>

        <div className="overview flex flex-row bg-[#333333] h-max border-2 border-black mt-12">
          <div className="pendapatan-investasi flex flex-col">
            <div className="row border-r-2 border-black w-[960px] h-[416px]">
              <h3 className="font-trapp text-3xl font-bold tracking-wide px-[90px] py-8">
                Pendapatan dan Pengeluaran
              </h3>
              <div className="flex flex-row flex justify-center items-center gap-16">
                <div className="pendapatan w-[358px] h-[265px] bg-[#3E3E3F] border-2 border-black flex justify-center items-center">
                  <div>
                    <div className="flex flex-row">
                      <p className="font-trapp text-xl font-semibold text-[#B0D05B]">
                        Pendapatan
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="arrow_income.png"
                          width={14}
                          height={14}
                          className="py-1.5 ml-2"
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <p className="font-trapp text-xl font-medium text-white pt-2">
                      Rp. 940.000.000
                    </p>
                    <Image
                      loader={imageLoader}
                      src="bar_pendapatan.png"
                      width={265}
                      height={24}
                      className="mt-2"
                      alt="Statistik"
                    />
                    <div className="flex flex-row gap-2 pt-4">
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_kuning.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Bank BNI
                        </p>
                      </div>
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_biru.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Dana
                        </p>
                      </div>
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_hijau.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Gopay
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row pt-4">
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_oranye.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Sea Bank
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pengeluaran w-[358px] h-[265px] bg-[#3E3E3F] border-2 border-black flex justify-center items-center">
                  <div>
                    <div className="flex flex-row items-center">
                      <p className="font-trapp text-xl font-semibold text-[#FA5C52]">
                        Pengeluaran
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="arrow_outcome.png"
                          width={14}
                          height={14}
                          className="py-1.5 ml-2"
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <p className="font-trapp text-xl font-medium text-white pt-2">
                      Rp. 540.000.000
                    </p>
                    <Image
                      loader={imageLoader}
                      src="bar_pengeluaran.png"
                      width={265}
                      height={24}
                      className="mt-2"
                      alt="Statistik"
                    />
                    <div className="flex flex-row gap-2 pt-4">
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_kuning.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Bank BNI
                        </p>
                      </div>
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_biru.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Dana
                        </p>
                      </div>
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_hijau.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Gopay
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row pt-4 gap-2">
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_oranye.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Sea Bank
                        </p>
                      </div>
                      <div className="bni flex flex-row">
                        <Image
                          loader={imageLoader}
                          src="bon_kuning.png"
                          width={20}
                          height={20}
                          className=""
                          alt="Statistik"
                        />
                        <p className="font-poppins font-medium text-white">
                          Bank Jago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-t-2 border-r-2 border-black">
              <h3 className="font-trapp text-3xl font-bold tracking-wide px-[90px] py-8">
                Pendapatan dan Pengeluaran
              </h3>
              <div className="flex flex-row">
                <div className="col bg-[#3E3E3F] w-[319px] h-[264px] border-r-2 border-t-2 border-black">
                  <div className="stats flex justify-center pt-12 pb-6">
                    <Image
                      loader={imageLoader}
                      src="chart_usaha_mandiri.png"
                      width={156}
                      height={68}
                      className=""
                      alt="Statistik"
                    />
                  </div>
                  <div className="px-6">
                    <div className="flex flex-row">
                      <span>
                        <Image
                          loader={imageLoader}
                          src="package.png"
                          width={20}
                          height={20}
                          className="mr-2"
                          alt="Statistik"
                        />
                      </span>
                      <p className="font-poppins font-medium text-white text-xl">
                        Usaha Mandiri
                      </p>
                    </div>
                    <p className="font-poppins font-medium text-white pt-2">
                      Rp. 540.000.000
                    </p>
                    <p className="text-[#A7D920] font-poppins font-medium pt-2 ">
                      +15%
                    </p>
                  </div>
                </div>
                <div className="col bg-[#3E3E3F] w-[319px] h-[264px] border-r-2 border-t-2 border-black">
                  <div className="stats flex justify-center py-[58px]">
                    <Image
                      loader={imageLoader}
                      src="chart_saham.png"
                      width={171}
                      height={22}
                      className=""
                      alt="Statistik"
                    />
                  </div>
                  <div className="px-6">
                    <div className="flex flex-row">
                      <span>
                        <Image
                          loader={imageLoader}
                          src="bon_biru.png"
                          width={20}
                          height={20}
                          className="mr-2"
                          alt="Statistik"
                        />
                      </span>
                      <p className="font-poppins font-medium text-white text-xl">
                        Saham
                      </p>
                    </div>
                    <p className="font-poppins font-medium text-white pt-2">
                      Rp. 200.000.000
                    </p>
                    <p className="text-[#A7D920] font-poppins font-medium pt-2 ">
                      +4%
                    </p>
                  </div>
                </div>
                <div className="col bg-[#3E3E3F] w-[319px] h-[264px] border-t-2 border-black">
                  <div className="stats flex justify-center py-8">
                    <Image
                      loader={imageLoader}
                      src="chart_crypto.png"
                      width={155}
                      height={69}
                      className=""
                      alt="Statistik"
                    />
                  </div>
                  <div className="px-6">
                    <div className="flex flex-row">
                      <span>
                        <Image
                          loader={imageLoader}
                          src="eth.png"
                          width={14}
                          height={14}
                          className="mr-2"
                          alt="Statistik"
                        />
                      </span>
                      <p className="font-poppins font-medium text-white text-xl">
                        Crypto
                      </p>
                    </div>
                    <p className="font-poppins font-medium text-white pt-2">
                      Rp. 300.000.000
                    </p>
                    <p className="text-[#A7D920] font-poppins font-medium pt-2 ">
                      +49%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kemajuan-tabungan">
            <h3 className="font-trapp text-3xl font-bold tracking-wide pl-4 py-8">
              Kemajuan Tabungan
            </h3>
            <div className="flex flex-col py-8 gap-4 pl-4">
              <div className="card px-4 border-2 border-black bg-[#3E3E3F]">
                <div className="flex flex-row gap-x-48">
                  <div className="flex flex-col">
                    <p className="flex font-poppins font-semibold text-white text-xl py-6">
                      Rumah
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-16">
                    <div className="flex flex-col">
                      <p className="font-trapp font-thin py-1 text-black-rgba">
                        Progress
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="progress_roblox.png"
                          width={100}
                          height={11}
                          className=""
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_blue.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin text-sm py-1 text-black-rgba">
                          Terkumpul
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.100,000.000
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_target.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin py-1 text-sm text-black-rgba">
                          Target
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.700,000.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card px-4 border-2 border-black bg-[#3E3E3F]">
                <div className="flex flex-row gap-x-48">
                  <div className="flex flex-col">
                    <p className="flex font-poppins font-semibold text-white text-xl py-6">
                      Sehatan
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-16">
                    <div className="flex flex-col">
                      <p className="font-trapp font-thin py-1 text-black-rgba">
                        Progress
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="progress_roblox.png"
                          width={100}
                          height={11}
                          className=""
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_blue.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin text-sm py-1 text-black-rgba">
                          Terkumpul
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.120,000.000
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_target.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin py-1 text-sm text-black-rgba">
                          Target
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.860,000.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card px-4 border-2 border-black bg-[#3E3E3F]">
                <div className="flex flex-row gap-x-48">
                  <div className="flex flex-col">
                    <p className="flex font-poppins font-semibold text-white text-xl py-6">
                      Sekolah
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-16">
                    <div className="flex flex-col">
                      <p className="font-trapp font-thin py-1 text-black-rgba">
                        Progress
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="progress_roblox.png"
                          width={100}
                          height={11}
                          className=""
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_blue.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin text-sm py-1 text-black-rgba">
                          Terkumpul
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.40,000.000
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_target.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin py-1 text-sm text-black-rgba">
                          Target
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.500,000.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card px-4 border-2 border-black bg-[#3E3E3F]">
                <div className="flex flex-row gap-x-48">
                  <div className="flex flex-col">
                    <p className="flex font-poppins font-semibold text-white text-xl py-6">
                      Darurat
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-16">
                    <div className="flex flex-col">
                      <p className="font-trapp font-thin py-1 text-black-rgba">
                        Progress
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="progress_roblox.png"
                          width={100}
                          height={11}
                          className=""
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_blue.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin text-sm py-1 text-black-rgba">
                          Terkumpul
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.30,000.000
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_target.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin py-1 text-sm text-black-rgba">
                          Target
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.100,000.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card px-4 border-2 border-black bg-[#3E3E3F]">
                <div className="flex flex-row gap-x-48">
                  <div className="flex flex-col">
                    <p className="flex font-poppins font-semibold text-white text-xl py-6">
                      Hobby
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-16">
                    <div className="flex flex-col">
                      <p className="font-trapp font-thin py-1 text-black-rgba">
                        Progress
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="progress_roblox.png"
                          width={100}
                          height={11}
                          className=""
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_blue.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin text-sm py-1 text-black-rgba">
                          Terkumpul
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.160,000.000
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_target.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin py-1 text-sm text-black-rgba">
                          Target
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.460,000.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card px-4 border-2 border-black bg-[#3E3E3F]">
                <div className="flex flex-row gap-x-48">
                  <div className="flex flex-col">
                    <p className="flex font-poppins font-semibold text-white text-xl py-6">
                      Akhirat
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-16">
                    <div className="flex flex-col">
                      <p className="font-trapp font-thin py-1 text-black-rgba">
                        Progress
                      </p>
                      <span>
                        <Image
                          loader={imageLoader}
                          src="progress_roblox.png"
                          width={100}
                          height={11}
                          className=""
                          alt="Statistik"
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_blue.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin text-sm py-1 text-black-rgba">
                          Terkumpul
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.160,000.000
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <span>
                          <Image
                            loader={imageLoader}
                            src="icon_pig_target.png"
                            width={20}
                            height={20}
                            className=""
                            alt="Statistik"
                          />
                        </span>
                        <p className="font-trapp font-thin py-1 text-sm text-black-rgba">
                          Target
                        </p>
                      </div>
                      <p className="font-poppins text-white text-sm font-light">
                        Rp.460,000.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
