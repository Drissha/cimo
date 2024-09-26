import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="w-full flex justify-between items-end px-28">
        <div className="inline flex-1">
          <h5 className="font-trapp text-xl font-bold mb-5">City Of Money.</h5>
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
  );
}
