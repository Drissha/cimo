import { useState } from "react";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="w-full md:flex block justify-between py-8 xl:px-16">
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
        <div className="flex md:gap-x-14">
          <div className="relative flex items-center mx-auto md:mx-0">
            <p
              className="font-trapp font-medium text-xl inline cursor-pointer"
              onClick={toggleDropdown}
            >
              Investasi
            </p>
            <span>
              <Image
                src="/images/icon_dropdown.png"
                alt="Arrow"
                className="inline mx-3 mb-2"
                width={25}
                height={25}
                onClick={toggleDropdown}
              />
            </span>
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-40 bg-[#333333] border-2 border-black shadow-md rounded-md">
                <ul>
                  <li className="px-4 py-2">
                    <Link href="/investasi/opportunity">
                      <div className="flex flex-row">
                        <span>
                          <Image
                            src="/images/package.png"
                            alt="Arrow"
                            className="inline mr-2"
                            width={20}
                            height={20}
                            onClick={toggleDropdown}
                          />
                        </span>
                        <p className="font-poppins font-medium text-sm py-2">
                          Usaha Mandiri
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="px-4 py-2">
                    <Link href="/investasi/opportunity">
                      <div className="flex flex-row">
                        <span>
                          <Image
                            src="/images/bon_biru.png"
                            alt="Arrow"
                            className="inline mr-4 py-2"
                            width={14}
                            height={14}
                            onClick={toggleDropdown}
                          />
                        </span>
                        <p className="font-poppins font-medium text-sm py-2">
                          Saham
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="px-4 py-2">
                    <Link href="/investasi/opportunity">
                      <div className="flex flex-row">
                        <span>
                          <Image
                            src="/images/eth.png"
                            alt="Arrow"
                            className="inline mr-4"
                            width={12}
                            height={12}
                            onClick={toggleDropdown}
                          />
                        </span>
                        <p className="font-poppins font-medium text-sm py-2">
                          Crypto
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
        </div>
      </div>
    </nav>
  );
}
