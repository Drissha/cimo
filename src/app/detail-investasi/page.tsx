"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
      <Navbar />
      <main>
        <div className="flex flex-row justify-between">
          <div className="heading-stats px-32 pt-32 mb-16">
            <h3 className="font-trapp text-5xl font-bold tracking-wide mb-4">
              Investasi Crypto
            </h3>
            <p className="font-poppins text-base font-medium  text-lg text-black-rgba">
              Investasi passive income yang kamu lakukan di crypto, ini adalah
              sejenis <br /> tabungan bukan trading dengan resiko tinggi.
            </p>
            <div className="progress flex flex-row gap-x-14 mt-6">
              <div className="flex flex-row gap-2 py-2.5">
                <span>
                  <Image
                    loader={imageLoader}
                    src="eth.png"
                    width={12}
                    height={12}
                    alt="Celengan GIF"
                  />
                </span>
                <p className="font-trapp font-thin py-1 ">
                  kami Tidak Menyarankan Untuk Melakukan Trading!
                </p>
              </div>
            </div>
          </div>
          <div className="image-investasi flex items-end">
            <Image
              src="/images/gif/investasi.gif"
              alt="Logo Footer"
              width={370}
              height={282}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="row bg-[#333333] border-2 border-black h-screen flex justify-center items-center">
            <div className="flex flex-row gap-0">
              <div className="card border-2 border-black h-[650px] flex flex-col justify-between">
                <div className="description py-12 pr-40 pl-12">
                  <div className="flex flex-row">
                    <h4 className="font-trapp font-semibold text-2xl">
                      Staking
                    </h4>
                    <span>
                      <Image
                        src="/images/arrow-navbar.png"
                        alt="Logo Footer"
                        width={15}
                        height={15}
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <p className="font-poppins font-thin text-black-rgba mb-12">
                    Kunci Aset Anda, Dapatkan Imbalan
                  </p>
                  <p className="font-poppins font-thin text-black-rgba">
                    Staking adalah proses mengunci aset <br /> kripto untuk
                    mendukung keamanan <br /> jaringan blockchain dan
                    mendapatkan <br /> imbalan. Bayangkan Anda sebagai <br />{" "}
                    pemegang saham yang ikut serta dalam <br />
                    menjalankan perusahaan. Semakin <br /> banyak saham yang
                    Anda miliki, semakin <br /> besar pula dividen yang Anda
                    dapatkan.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="row border-y-2 border-black bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Keuntungan Staking
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <div className="row border-b-2 border-black bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Resiko Staking
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <div className="row bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Cara Kerja Staking
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card border-2 border-black h-[650px] flex flex-col justify-between">
                <div className="description py-12 pr-40 pl-12">
                  <div className="flex flex-row">
                    <h4 className="font-trapp font-semibold text-2xl">
                      Yield Farming
                    </h4>
                    <span>
                      <Image
                        src="/images/arrow-navbar.png"
                        alt="Logo Footer"
                        width={15}
                        height={15}
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <p className="font-poppins font-thin text-black-rgba mb-12">
                    Tanam Aset Anda, Panen Imbalan
                  </p>
                  <p className="font-poppins font-thin text-black-rgba">
                    Yield farming adalah proses menyediakan <br /> likuiditas ke
                    dalam pool yang ada di <br /> platform DeFi (Decentralized
                    Finance). <br />
                    Dengan kata lain, Anda menyumbangkan <br /> aset kripto Anda
                    ke dalam sebuah &quot;kolam&quot; <br /> yang digunakan
                    untuk melakukan <br />
                    pertukaran aset.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="row border-y-2 border-black bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Keuntungan Yield Farming
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <div className="row border-b-2 border-black bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Resiko Yield Farming
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <div className="row bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Cara Kerja Yield Farming
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card border-2 border-black h-[650px] flex flex-col justify-between">
                <div className="description py-12 pr-40 pl-12">
                  <div className="flex flex-row">
                    <h4 className="font-trapp font-semibold text-2xl">
                      Lending
                    </h4>
                    <span>
                      <Image
                        src="/images/arrow-navbar.png"
                        alt="Logo Footer"
                        width={15}
                        height={15}
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <p className="font-poppins font-thin text-black-rgba mb-12">
                    Pinjamkan Aset Anda, Dapatkan Bunga
                  </p>
                  <p className="font-poppins font-thin text-black-rgba">
                    Lending adalah proses meminjamkan <br /> aset kripto Anda ke
                    platform DeFi. Mirip <br /> seperti menabung di bank, Anda
                    akan <br />
                    mendapatkan bunga atas aset yang <br /> Anda pinjamkan.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="row border-y-2 border-black bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Keuntungan Lending
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <div className="row border-b-2 border-black bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Resiko Lending
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                  <div className="row bg-[#3E3E3F] py-4 flex flex-row px-12">
                    <p className="font-poppins font-reguler text-xl">
                      Cara Kerja Lending
                    </p>
                    <span>
                      <Image
                        loader={imageLoader}
                        src="icon_dropdown.png"
                        width={24}
                        height={24}
                        alt="Celengan GIF"
                        className="py-2 ml-2"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-[#3E3E3F] border-b-2 border-x-2 border-black flex flex-row">
            <div className="col border-r-2 border-black w-[650px]">
              <div className="description py-24 px-24">
                <div className="flex flex-row">
                  <h4 className="font-trapp font-semibold text-2xl">CEX</h4>
                  <span>
                    <Image
                      src="/images/arrow-navbar.png"
                      alt="Logo Footer"
                      width={15}
                      height={15}
                      className="py-2 ml-2"
                    />
                  </span>
                </div>
                <p className="font-poppins font-thin text-black-rgba mb-12">
                  Centralized Exchange
                </p>
                <p className="font-poppins font-thin text-black-rgba">
                  CEX adalah platform pertukaran aset kripto <br /> yang
                  dioperasikan oleh perusahaan terpusat. <br /> Perusahaan ini
                  bertindak sebagai perantara <br /> antara pembeli dan penjual.
                </p>
                <div className="flex flex-row mt-8">
                  <span>
                    <Image
                      src="/images/package.png"
                      alt="Logo Footer"
                      width={24}
                      height={24}
                      className="py-2 me-2"
                    />
                  </span>
                  <p className="font-poppins font-thin text-white py-2">
                    Cex Terkenal
                  </p>
                </div>
                <p className="font-poppins font-thin text-black-rgba mb-12">
                  Binance, Coinbase, Gate
                </p>
              </div>
            </div>
            <div className="col border-r-2 border-black w-[605px] flex justify-center items-center">
              <div className="coin">
                <Image
                  src="/images/gif/coin.gif"
                  alt="Logo Footer"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="col border-r-2 border-black w-[650px]">
              <div className="description py-24 px-24">
                <div className="flex flex-row">
                  <h4 className="font-trapp font-semibold text-2xl">Dex</h4>
                  <span>
                    <Image
                      src="/images/arrow-navbar.png"
                      alt="Logo Footer"
                      width={15}
                      height={15}
                      className="py-2 ml-2"
                    />
                  </span>
                </div>
                <p className="font-poppins font-thin text-black-rgba mb-12">
                  Decentralized Exchange
                </p>
                <p className="font-poppins font-thin text-black-rgba">
                  DEX adalah platform pertukaran aset kripto <br /> yang
                  beroperasi secara desentralisasi, artinya <br /> tidak ada
                  pihak ketiga yang mengontrol <br /> platform. Semua transaksi
                  dilakukan secara <br /> langsung antara pengguna melalui smart{" "}
                  <br /> contract di blockchain.
                </p>
                <div className="flex flex-row mt-8">
                  <span>
                    <Image
                      src="/images/package.png"
                      alt="Logo Footer"
                      width={24}
                      height={24}
                      className="py-2 me-2"
                    />
                  </span>
                  <p className="font-poppins font-thin text-white py-2">
                    Dex Terkenal
                  </p>
                </div>
                <p className="font-poppins font-thin text-black-rgba mb-12">
                  Uniswap, PancakeSwap, Radiant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </main>
  );
}
