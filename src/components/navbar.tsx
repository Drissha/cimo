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
    <nav className="w-full flex justify-between py-8 px-16">
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
            <span className="text-[#AACC4C]">i</span> <span>M</span>{" "}
            <span className="text-[#27AAE1]">o</span>
          </p>
        </div>
      </Link>
      <div className="inline">
        <div className="flex gap-x-12">
          <div className="flex items-center">
            <Link href="/stats">
              <p className="font-trapp font-medium text-xl inline">Panduan</p>
            </Link>
          </div>
          <div className="flex items-center">
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
