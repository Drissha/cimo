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

export default function Navbar() {
  return (
    <nav className="w-full md:flex block justify-between py-8 px-16">
      <Link href="/">
        <div className="inline flex items-center mb-3 md:mb-0">
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
      <div className="inline">
        <div className="flex md:gap-x-12">
          <div className="flex items-center mx-auto md:mx-0">
            <Link href="/stats">
              <p className="font-trapp font-medium text-xl inline">Panduan</p>
            </Link>
          </div>
          <div className="flex items-center mx-auto md:mx-0">
            <p className="font-trapp font-medium text-xl inline">
              <Link href="/city">Go To City</Link>
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
  );
}
