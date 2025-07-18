// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Dikey yazı ve çizgi */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Grid alanı */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Açıklama */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 mt-10 lg:mt-0 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        {/* Profil görseli */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="h-[280px] flex items-center">
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt="Abu Said"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
