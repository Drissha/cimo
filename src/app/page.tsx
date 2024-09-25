"use client";
import { DemoBeamsConnecting_Converge } from "@/components/BeamConnection";
import { TextRevealCardDemo } from "@/components/TextReveal";
import Image from "next/image";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      <header className="relative h-screen bg-[url('../../public/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <nav className="w-full flex justify-between py-8 px-16">
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
                    src="/images/arrow-navbar.png"
                    alt="Arrow"
                    className="inline mx-3"
                    width={15}
                    height={15}
                  />
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </nav>
        <div className="px-16 py-16">
          <h1 className="font-trapp text-8xl font-bold">
            Manage your{" "}
            <span className="font-trapp text-yellow-500 text-8xl font-bold">
              money
            </span>
            <br />
            like build a city
          </h1>
          <p className="font-poppins font-light py-5 text-black-rgba">
            Bangun pondasi keuanganmu, satu
            <br />
            keputusan finansial pada satu waktu.
          </p>

          <a
            className="group relative inline-block focus:outline-none focus:ring text-black my-5"
            href="#"
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FFFFFF] rounded-[8px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative inline-block border-2 border-current px-7 py-3 text-sm font-bold uppercase tracking-widest rounded-[8px] bg-[#FFC654] transition-shadow group-focus:shadow-[#79995A]">
              <p className="font-trapp">Bangun Kotamu</p>
            </span>
          </a>
        </div>
      </header>

      <section className="h-screen grid grid-rows-2">
        <div className="grid grid-cols-2">
          <div className="col-1"></div>
          <div className="col-2 content-center grid justify-items-center">
            <h2 className="font-trapp text-5xl font-bold">
              Kembangkan Kotamu
              <br />
              Dan Raih Tujuan Untuk
              <br />
              Pembagian Keuangan
              <br />
              Yang Efektif
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="col-1">
            <Image
              loader={imageLoader}
              src="drone-homepage.png"
              alt="Drone"
              width={500}
              height={500}
              className="flex inline-flex me-20"
            />
            <p className="font-poppins text-base font-light flex inline-flex text-black-rgba">
              Rancang strategi keuangan yang baik sambil menikmati <br />{" "}
              pengalaman bermain yang seru. Membagi antara <br /> berbagai
              kebutuhan yang kamu butuhkan dan <br /> kebutuhan yang kamu
              inginkan, serta sebagai pengingat <br />
              akan berbagai hal terkait keuangan yang sering kamu <br />{" "}
              lupakan.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <div className="row grid grid-cols-3 gap-x-56 flex items-center justify-center">
          <div className="col-1 px-32">
            <h3 className="font-trapp text-5xl font-bold tracking-wide mb-12">
              Tujuan City Of Money.
            </h3>
            <p className="font-poppins text-base font-light text-black-rgba">
              Membangun kota mu sendiri sebagai bagian dari program tabunganmu
              Membangun kota mu sendiri sebagai bagian dari program tabunganmu
              Membangun kota mu sendiri sebagai bagian dari program tabunganmu
              Membangun kota mu sendiri sebagai bagian dari
            </p>
          </div>
          <div className="col-2">
            <Image
              loader={imageLoader}
              src="/gif/menara_bank.gif"
              alt="Menara Bank"
              width={300}
              height={300}
            />
          </div>
          <div className="col-3 grid grid-rows-3 gap-y-24">
            <div className="row-1">
              <Image
                loader={imageLoader}
                src="200k.png"
                alt="200K"
                width={186}
                height={53}
              />
              <p className="font-poppins text-base font-light text-black-rgba">
                Orang terjebak dalam judi <br /> online di Indonesia
              </p>
            </div>
            <div className="row-2">
              <Image
                loader={imageLoader}
                src="40_persen.png"
                alt="40 Persen"
                width={135}
                height={53}
              />
              <p className="font-poppins text-base font-light text-black-rgba">
                Generasi muda (19-34 tahun) <br /> menggunakan pinjaman online{" "}
                <br /> untuk gaya hidup.
              </p>
            </div>
            <div className="row-3">
              <Image
                loader={imageLoader}
                src="30_persen.png"
                alt="30 Persen"
                width={135}
                height={53}
              />
              <p className="font-poppins text-base font-light text-black-rgba">
                Masyarakat Indonesia tidak memiliki <br /> dana cadangan yang
                cukup untuk <br /> bertahan lebih dari satu bulan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex gap-1.5 items-center justify-center mt-28">
        <div
          className="card w-[390px] h-[443px] bg-cover bg-center flex items-center justify-center content-center"
          style={{ backgroundImage: "url('/images/card1.png')" }}
        >
          <div>
            <h4 className="font-trapp text-3xl font-bold tracking-wide mb-14">
              Tracking <br /> Pengeluaran dan <br /> Pemasukan.
            </h4>
            <p className="font-poppins text-base font-light text-black-rgba">
              Pantau arus kas dari <br /> berbagai rekening bankmu <br /> secara
              real-time dalam satu <br />
              dashboard yang mudah <br /> diakses.
            </p>
          </div>
        </div>

        <div className="card w-[390px] h-[443px] bg-[#272323] flex items-center justify-center content-center">
          <div>
            <h4 className="font-trapp text-3xl font-bold tracking-wide mb-14">
              Manage Uang <br /> dengan Formula <br /> yang Dianjurkan
            </h4>
            <p className="font-poppins text-base font-light text-black-rgba">
              Atur keuanganmu dengan <br /> formula dan pembagian <br /> yang
              tepat, sehingga tujuan <br />
              keuanganmu lebih mudah <br /> tercapai.
            </p>
          </div>
        </div>

        <div
          className="card w-[390px] h-[443px] bg-cover bg-center flex items-center justify-center content-center px-16"
          style={{ backgroundImage: "url('/images/card3.png')" }}
        >
          <div>
            <h4 className="font-trapp text-3xl font-bold tracking-wide mb-14">
              Gamify Menjadi Lebih <br /> Menyenangkan
            </h4>
            <p className="font-poppins text-base font-light text-black-rgba">
              Ubah proses manajemen <br /> keuangan yang membosankan <br />{" "}
              menjadi pengalaman bermain <br />
              yang menyenangkan dan <br /> mendidik.
            </p>
          </div>
        </div>

        <div className="card w-[390px] h-[443px] bg-[#272323] flex items-center justify-center px-16">
          <div>
            <h4 className="font-trapp text-3xl font-bold tracking-wide mb-14">
              Level Up <br /> Financial Skills
            </h4>
            <p className="font-poppins text-base font-light text-black-rgba">
              Tingkatkan keterampilan keuanganmu melalui tantangan dan misi yang
              semakin kompleks, menambah wawasan dan kemampuanmu dalam mengelola
              uang.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen grid grid-cols-2 gap-x-20 justify-items-center">
        <div className="col-1">
          <Image
            loader={imageLoader}
            src="gif/jagung_emas.gif"
            alt="30 Persen"
            width={500}
            height={500}
          />
        </div>
        <div className="col-2 items-center">
          <h3 className="font-trapp text-5xl font-bold tracking-wide mb-14 text-white">
            Investasikan{" "}
            <span className="text-black-rgba">
              sisa <br /> keuanganmu dengan <br /> pilihan yang
            </span>{" "}
            bijak
          </h3>
          <div className="grid grid-rows-3 gap-12">
            <a
              className="group relative inline-block focus:outline-none focus:ring text-black"
              href="#"
            >
              <span className="w-[340px] relative rounded-[8px] inline-block border-2 border-current px-7 py-4 text-sm font-bold uppercase tracking-widest bg-[#FFC654] shadow-[8px_8px_0px_0px_#40413F] transition-transform group-hover:shadow-none">
                <p className="font-trapp text-lg inline">
                  Bangun Usaha Mandiri{" "}
                  <span>
                    <Image
                      loader={imageLoader}
                      src="arow_black.png"
                      alt="30 Persen"
                      width={135}
                      height={53}
                      className="inline w-[17px]"
                    />
                  </span>
                </p>
              </span>
            </a>

            <a
              className="group relative inline-block focus:outline-none focus:ring text-black"
              href="#"
            >
              <span className="w-[340px] relative inline-block border-2 border-current px-7 py-4 text-sm font-bold uppercase tracking-widest rounded-[8px] bg-[#7DD2E3] shadow-[8px_8px_0px_0px_#40413F] transition-transform group-hover:shadow-none">
                <p className="font-trapp text-lg">
                  Yield Farming Crypto{" "}
                  <span>
                    <Image
                      loader={imageLoader}
                      src="arow_black.png"
                      alt="30 Persen"
                      width={135}
                      height={53}
                      className="inline w-[17px]"
                    />
                  </span>
                </p>
              </span>
            </a>

            <a
              className="group relative inline-block focus:outline-none focus:ring text-black"
              href="#"
            >
              <span className="w-[340px] relative inline-block border-2 border-current px-7 py-4 text-sm font-bold uppercase tracking-widest rounded-[8px] bg-[#EC584F] shadow-[8px_8px_0px_0px_#40413F] transition-transform group-hover:shadow-none">
                <p className="font-trapp text-lg">
                  Holding Saham{" "}
                  <span>
                    <Image
                      loader={imageLoader}
                      src="arow_black.png"
                      alt="30 Persen"
                      width={135}
                      height={53}
                      className="inline w-[17px]"
                    />
                  </span>
                </p>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="h-[850px] bg-[#252121]">
        <div className="row grid grid-rows-1">
          <h3 className="font-trapp text-5xl font-bold tracking-wide mb-14 pt-28 text-center text-black-rgba">
            Dengan <span className="text-white">Element</span> <br /> Mudah
            Berinteraksi
          </h3>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-1 grid grid-cols-2 gap-x-5">
            <div className="flex items-center justify-end">
              <div className="grid grid-rows-2 gap-y-5">
                <Image
                  src="/images/element_mobil.png"
                  alt="Element Mobil"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/element_drone.png"
                  alt="Element Drone"
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <div className="flex items-center justify-start">
              <div className="grid grid-rows-2 gap-y-5">
                <Image
                  src="/images/element_gedung.png"
                  alt="Element Gedung"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/element_orang.png"
                  alt="Element Orang"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>

          <div className="col-2">
            <Image
              src="/images/mobil.png"
              alt="Mobil"
              className="pt-24"
              width={570}
              height={350}
            />
          </div>

          <div className="col-3 flex items-center justify-center">
            <div>
              <h4 className="font-trapp text-3xl mb-16">Mobil</h4>
              <p className="font-poppins text-base font-light text-black-rgba">
                Menggambarkan aliran transaksi <br />
                keuangan, bergerak mengikuti <br />
                pemasukan dan pengeluaran dari <br />
                berbagai bank, membantu kamu <br />
                memantau keuangan dengan mudah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen ">
        <h3 className="font-trapp text-5xl font-bold tracking-wide mb-14 pt-40 text-black-rgba text-center">
          Semua Dalam Satu <br /> <span className="text-white">Kota</span> Yang
          Sama
        </h3>
        <div className="flex items-center justify-center">
          <DemoBeamsConnecting_Converge />
        </div>
      </section>

      <div className="row grid-rows-1 px-40">
        <h3 className="font-trapp text-5xl font-bold tracking-wide text-black-rgba">
          Pertanyaan Yang <br /> <span className="text-white">Sering</span>{" "}
          Ditanyakan
        </h3>
      </div>

      <section className="h-[500px] flex gap-1.5 items-start justify-center mt-28">
        <div className="card w-[390px] h-[443px] bg-[url('/images/card_kincir.png')] flex items-center justify-center content-center">
          <div>
            <h4 className="font-trapp text-3xl font-semibold tracking-wide mb-14">
              Bagaimana cara City <br /> Of Money membantu <br /> saya mengatur{" "}
              <br /> keuangan?
            </h4>
            <p className="font-poppins text-base font-light text-black-rgba">
              City Of Money menyediakan <br /> tools dan panduan untuk <br />{" "}
              memantau dan mengelola <br /> uangmu secara efektif.
            </p>
          </div>
        </div>

        <div className="card w-[390px] h-[443px] bg-[#272323] flex items-center justify-center content-center">
          <div>
            <h4 className="font-trapp text-3xl font-semibold tracking-wide mb-14">
              Apakah saya bisa <br /> menghubungkan <br /> beberapa akun <br />{" "}
              bank sekaligus?
            </h4>
            <p className="font-poppins text-base font-light text-black-rgba">
              Ya, kamu bisa menghubungkan <br /> beberapa akun bank untuk <br />{" "}
              melihat semua transaksi di satu <br /> tempat.
            </p>
          </div>
        </div>

        <div className="card w-[390px] h-[443px] bg-[#272323] flex items-center justify-center content-center px-14">
          <div>
            <h4 className="font-trapp text-3xl font-semibold tracking-wide mb-14">
              Apakah saya bisa <br /> menentukan tujuan <br /> keuangan saya
              sendiri?
            </h4>
            <p className="font-poppins text-base font-light text-black-rgba">
              Sangat cocok! Game ini <br /> dirancang untuk siapa saja <br />{" "}
              yang ingin belajar mengelola <br /> keuangan dengan cara yang{" "}
              <br /> menyenangkan.
            </p>
          </div>
        </div>

        <div className="card w-[390px] h-[443px] bg-[url('/images/card_kuda.png')] flex justify-start">
          <div>
            <h4 className="font-trapp text-3xl font-bold tracking-wide py-20 pl-20">
              Manage, <br /> Gamify, <br /> Grow.
            </h4>
          </div>
        </div>
      </section>

      <section className="h-[450px] grid grid-rows-1 justify-center items-center">
        <h1 className="font-trapp text-6xl font-semibold text-center">
          <TextRevealCardDemo />
        </h1>
      </section>

      <section className="h-screen grid grid-rows-1 justify-center items-center">
        <div className="bg-[url('/images/bg_biru.png')] w-[1596px] h-[626px] grid grid-cols-2">
          <div className="flex items-center justify-start">
            <div className="ps-32">
              <h4 className="font-trapp font-semibold text-5xl text-[#2E2B2B] mb-5">
                Menabung Lebih <br /> Menyenangkan <br /> dengan Simulasi.
              </h4>
              <p className="font-poppins text-base font-light text-[#1B1A1ABF] mb-8">
                Membangun kota mu sendiri sebagai bagian dari program <br />{" "}
                tabunganmu. Membangun kota mu sendiri sebagai bagian <br /> dari
                program tabunganmu. Membangun kota mu sendiri <br /> sebagai
                bagian dari program tabunganmu. Membangun <br /> kota mu sendiri
                sebagai bagian dari.
              </p>

              <a
                className="group relative inline-block focus:outline-none focus:ring text-black"
                href="#"
              >
                <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest rounded-[6px] bg-[#FFC654]">
                  <p className="font-trapp inline">
                    Bangun Kotamu Mandiri{" "}
                    <span>
                      <Image
                        src="/images/arow_black.png"
                        className="inline w-[17px]"
                        alt="arrow"
                        width={17}
                        height={17}
                      />
                    </span>
                  </p>
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Image
              src="/images/gif/gedung_for_biru.gif"
              className="mt-[-166px] pe-24"
              alt="Gedung Animation"
              width={500}
              height={626}
            />
          </div>
        </div>
      </section>

      <footer className="footer">
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
    </div>
  );
}
