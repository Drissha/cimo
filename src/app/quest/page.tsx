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

export default function Stats() {
  return (
    <main className="bg-[#252121] text-white">
      <nav className="w-full flex justify-between py-8 px-16">
        <div className="inline flex items-center gap-2">
          <span>
            <Image
              loader={imageLoader}
              src="panah_kembali.png"
              width={20}
              height={33}
              alt="Celengan GIF"
              className="inline mx-3 py-2"
            />
          </span>
          <p className="font-poppins font-medium text-xl inline">Kembali</p>
        </div>
      </nav>

      <main>
        <section className="flex flex-col">
          <div className="heading-stats px-32 pt-32 mb-16">
            <h3 className="font-trapp text-5xl font-bold tracking-wide mb-4">
              Barang Keinginan Kamu
            </h3>
            <p className="font-poppins text-base font-medium  text-lg text-black-rgba">
              Barang yang kamu inginkan, Hobby atau sekedar ingin.
            </p>
            <div className="progress flex flex-row gap-x-14 mt-6">
              <div className="flex flex-row gap-2 py-2.5">
                <span>
                  <Image
                    loader={imageLoader}
                    src="icon_pig.png"
                    width={20}
                    height={33}
                    alt="Celengan GIF"
                  />
                </span>
                <p className="font-trapp font-thin py-1">2 / 7</p>
              </div>
              <div className="flex flex-row gap-2 py-2.5">
                <span>
                  <Image
                    loader={imageLoader}
                    src="invesment_icon.png"
                    width={20}
                    height={33}
                    alt="Celengan GIF"
                  />
                </span>
                <p className="font-trapp font-thin py-1">Rp.9,000,000.000</p>
              </div>
              <div className="flex flex-col">
                <p className="font-trapp font-thin py-1">Keinginan</p>
                <span>
                  <Image
                    loader={imageLoader}
                    src="bar_keinginan.png"
                    width={156}
                    height={15}
                    alt="Celengan GIF"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="quest flex flex-col px-32">
            <div className="flex flex-col gap-16">
              {/*  card 1 */}
              <div className="card w-[1565px] h-[420px] bg-[#414042] border-4 border-black flex flex-row relative gap-x-28">
                <div className="col">
                  <div className="title flex flex-row">
                    <div className="title-card flex justify-center items-center w-[301px] h-[55px] bg-[#DC5D46] border-r-4 border-b-4 border-black">
                      <h4 className="font-poppins font-bold text-3xl text-black">
                        Games
                      </h4>
                    </div>
                    <div className="button w-[111px] h-[32px] bg-[#DDE65C] border-black border-2 my-2.5 mx-4 flex flex-row gap-x-4 items-center justify-center">
                      <Image
                        loader={imageLoader}
                        src="add_button.png"
                        width={18}
                        height={18}
                        alt="Add"
                        className="inline"
                      />
                      <Image
                        loader={imageLoader}
                        src="edit_button.png"
                        width={11}
                        height={10}
                        alt="Edit"
                        className="inline"
                      />
                      <Image
                        loader={imageLoader}
                        src="delete_button.png"
                        width={15}
                        height={16}
                        alt="Delete"
                        className="inline"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 gap-4">
                    <div className="card-stats w-[934px] h-[87px] bg-[#333333] border-y-2 border-r-2 border-black items-center flex flex-row relative">
                      <div className="flex flex-row gap-x-14 px-20">
                        <div className="flex flex-col">
                          <p className="font-trapp font-thin py-1 text-black-rgba">
                            Progress
                          </p>
                          <Image
                            loader={imageLoader}
                            src="progress_honkai.png"
                            width={100}
                            height={11}
                            alt="Progress Honkai"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_blue.png"
                              width={16}
                              height={28}
                              alt="Terkumpul Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Terkumpul
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.500,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_target.png"
                              width={16}
                              height={28}
                              alt="Target Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Target
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.700,000,000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="flex font-poppins font-semibold text-white text-2xl py-4">
                            Voucher Honkai
                          </p>
                        </div>
                      </div>
                      <Image
                        loader={imageLoader}
                        src="1.png"
                        width={18}
                        height={41}
                        alt="Honkai Progress"
                        className="absolute right-[-7px]"
                      />
                    </div>

                    <div className="card-stats w-[934px] h-[87px] bg-[#333333] border-y-2 border-r-2 border-black items-center flex flex-row relative">
                      <div className="flex flex-row gap-x-14 px-20">
                        <div className="flex flex-col">
                          <p className="font-trapp font-thin py-1 text-black-rgba">
                            Progress
                          </p>
                          <Image
                            loader={imageLoader}
                            src="progress_wukong.png"
                            width={100}
                            height={11}
                            alt="Progress Wukong"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_blue.png"
                              width={16}
                              height={28}
                              alt="Terkumpul Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Terkumpul
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.700,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_target.png"
                              width={16}
                              height={28}
                              alt="Target Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Target
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.700,000,000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="flex font-poppins font-semibold text-white text-2xl py-4">
                            Black Wukong
                          </p>
                        </div>
                      </div>
                      <Image
                        loader={imageLoader}
                        src="checked.png"
                        width={44}
                        height={44}
                        alt="Wukong Progress"
                        className="absolute right-[-22px]"
                      />
                    </div>

                    <div className="card-stats w-[934px] h-[87px] bg-[#333333] border-y-2 border-r-2 border-black items-center flex flex-row relative">
                      <div className="flex flex-row gap-x-14 px-20">
                        <div className="flex flex-col">
                          <p className="font-trapp font-thin py-1 text-black-rgba">
                            Progress
                          </p>
                          <Image
                            loader={imageLoader}
                            src="progress_roblox.png"
                            width={100}
                            height={11}
                            alt="Progress Roblox"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_blue.png"
                              width={16}
                              height={28}
                              alt="Terkumpul Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Terkumpul
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.100,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_target.png"
                              width={16}
                              height={28}
                              alt="Target Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Target
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.800,000,000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="flex font-poppins font-semibold text-white text-2xl py-4">
                            Roblox Skin
                          </p>
                        </div>
                      </div>
                      <Image
                        loader={imageLoader}
                        src="3.png"
                        width={30}
                        height={43}
                        alt="Roblox Progress"
                        className="absolute right-[-15px]"
                      />
                    </div>
                  </div>
                </div>
                <Image
                  loader={imageLoader}
                  src="wukong.png"
                  width={401}
                  height={466}
                  alt="Wukong"
                  className="absolute top-[-54px] right-[80px]"
                />
              </div>
              {/* card 2 */}
              <div className="card w-[1565px] h-[420px] bg-[#414042] border-4 border-black flex flex-row relative gap-x-28">
                <div className="col">
                  <div className="title flex flex-row">
                    <div className="title-card flex justify-center items-center w-[301px] h-[55px] bg-[#E89B3F] border-r-4 border-b-4 border-black">
                      <h4 className="font-poppins font-bold text-3xl text-black">
                        Fashion
                      </h4>
                    </div>
                    <div className="button w-[111px] h-[32px] bg-[#DDE65C] border-black border-2 my-2.5 mx-4 flex flex-row gap-x-4 items-center justify-center">
                      <Image
                        loader={imageLoader}
                        src="add_button.png"
                        width={18}
                        height={18}
                        alt="Add"
                        className="inline"
                      />
                      <Image
                        loader={imageLoader}
                        src="edit_button.png"
                        width={11}
                        height={10}
                        alt="Edit"
                        className="inline"
                      />
                      <Image
                        loader={imageLoader}
                        src="delete_button.png"
                        width={15}
                        height={16}
                        alt="Delete"
                        className="inline"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 gap-4">
                    <div className="card-stats w-[934px] h-[87px] bg-[#333333] border-y-2 border-r-2 border-black items-center flex flex-row relative">
                      <div className="flex flex-row gap-x-14 px-20">
                        <div className="flex flex-col">
                          <p className="font-trapp font-thin py-1 text-black-rgba">
                            Progress
                          </p>
                          <Image
                            loader={imageLoader}
                            src="progress_pancing.png"
                            width={100}
                            height={11}
                            alt="Progress Pancing"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_blue.png"
                              width={16}
                              height={28}
                              alt="Terkumpul Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Terkumpul
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.500,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_target.png"
                              width={16}
                              height={28}
                              alt="Target Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Target
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.700,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="flex font-poppins font-semibold text-white text-2xl py-4">
                            Nike Air Jordan
                          </p>
                        </div>
                      </div>
                      <Image
                        loader={imageLoader}
                        src="1.png"
                        width={18}
                        height={41}
                        alt="Progress Pancing"
                        className="absolute right-[-7px]"
                      />
                    </div>

                    <div className="card-stats w-[934px] h-[87px] bg-[#333333] border-y-2 border-r-2 border-black items-center flex flex-row relative">
                      <div className="flex flex-row gap-x-14 px-20">
                        <div className="flex flex-col">
                          <p className="font-trapp font-thin py-1 text-black-rgba">
                            Progress
                          </p>
                          <Image
                            loader={imageLoader}
                            src="progress_wukong.png"
                            width={100}
                            height={11}
                            alt="Progress Wukong"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_blue.png"
                              width={16}
                              height={28}
                              alt="Terkumpul Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Terkumpul
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.700,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_target.png"
                              width={16}
                              height={28}
                              alt="Target Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Target
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.700,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="flex font-poppins font-semibold text-white text-2xl py-4">
                            Batik Malaysa
                          </p>
                        </div>
                      </div>
                      <Image
                        loader={imageLoader}
                        src="checked.png"
                        width={44}
                        height={44}
                        alt="Checked"
                        className="absolute right-[-22px]"
                      />
                    </div>
                  </div>
                </div>
                <Image
                  loader={imageLoader}
                  src="jordan.png"
                  width={429}
                  height={413}
                  alt="Jordan"
                  className="pl-[88px]"
                />
              </div>
              {/* card 3 */}
              <div className="card w-[1565px] h-[420px] bg-[#414042] border-4 border-black flex flex-row relative gap-x-28">
                <div className="col">
                  <div className="flex flex-row">
                    <div className="title-card flex justify-center items-center w-[301px] h-[55px] bg-[#C4B332] border-r-4 border-b-4 border-black">
                      <h4 className="font-poppins font-bold text-3xl text-black">
                        Hobby
                      </h4>
                    </div>
                    <div className="button w-[111px] h-[32px] bg-[#DDE65C] border-black border-2 my-2.5 mx-4 flex flex-row gap-x-4 items-center justify-center">
                      <Image
                        loader={imageLoader}
                        src="add_button.png"
                        width={18}
                        height={18}
                        alt="Add"
                        className="inline"
                      />
                      <Image
                        loader={imageLoader}
                        src="edit_button.png"
                        width={11}
                        height={10}
                        alt="Edit"
                        className="inline"
                      />
                      <Image
                        loader={imageLoader}
                        src="delete_button.png"
                        width={15}
                        height={16}
                        alt="Delete"
                        className="inline"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 gap-4">
                    <div className="card-stats w-[934px] h-[87px] bg-[#333333] border-y-2 border-r-2 border-black items-center flex flex-row relative">
                      <div className="flex flex-row gap-x-14 px-20">
                        <div className="flex flex-col">
                          <p className="font-trapp font-thin py-1 text-black-rgba">
                            Progress
                          </p>
                          <Image
                            loader={imageLoader}
                            src="progress_pancing.png"
                            width={100}
                            height={11}
                            alt="Progress Kail Pancing"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_blue.png"
                              width={16}
                              height={28}
                              alt="Terkumpul Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Terkumpul
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.200,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_target.png"
                              width={16}
                              height={28}
                              alt="Target Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Target
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.500,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="flex font-poppins font-semibold text-white text-2xl py-4">
                            Kail Pancing
                          </p>
                        </div>
                      </div>
                      <Image
                        loader={imageLoader}
                        src="1.png"
                        width={18}
                        height={41}
                        alt="Kail Pancing Progress"
                        className="absolute right-[-7px]"
                      />
                    </div>

                    <div className="card-stats w-[934px] h-[87px] bg-[#333333] border-y-2 border-r-2 border-black items-center flex flex-row relative">
                      <div className="flex flex-row gap-x-14 px-20">
                        <div className="flex flex-col">
                          <p className="font-trapp font-thin py-1 text-black-rgba">
                            Progress
                          </p>
                          <Image
                            loader={imageLoader}
                            src="progress_akik.png"
                            width={100}
                            height={11}
                            alt="Progress Batu Akik"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_blue.png"
                              width={16}
                              height={28}
                              alt="Terkumpul Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Terkumpul
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.400,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row gap-2">
                            <Image
                              loader={imageLoader}
                              src="icon_pig_target.png"
                              width={16}
                              height={28}
                              alt="Target Icon"
                              className="py-1.5"
                            />
                            <p className="font-trapp font-thin py-1 text-black-rgba">
                              Target
                            </p>
                          </div>
                          <p className="font-poppins text-white font-light">
                            Rp.700,000.000
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="flex font-poppins font-semibold text-white text-2xl py-4">
                            Batu Akik
                          </p>
                        </div>
                      </div>
                      <Image
                        loader={imageLoader}
                        src="2.png"
                        width={30}
                        height={43}
                        alt="Batu Akik Progress"
                        className="absolute right-[-15px]"
                      />
                    </div>
                  </div>
                </div>
                <Image
                  loader={imageLoader}
                  src="pancingan.png"
                  width={429}
                  height={413}
                  alt="Pancingan"
                  className="pl-[88px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
