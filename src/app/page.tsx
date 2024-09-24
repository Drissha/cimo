"use client";
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
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#79995A] rounded-lg transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative inline-block border-2 border-current px-7 py-3 text-sm font-bold uppercase tracking-widest rounded-lg bg-[#FFC654] transition-shadow group-focus:shadow-[#79995A]">
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
    </div>
  );
}
