import React from "react";

// img
import ProfileImg from "../../assets/basic_profile.svg";
import plyImg from "../../assets/plyimg.jpg";
import plybutton from "../../assets/plybutton.svg";

// icon
import { FaHeart } from "react-icons/fa";

const MainPlayList = () => {
  return (
    <main className="w-full h-48 drop-shadow-sm mb-11">
      <header className="flex items-center">
        <figure className="profileImg mr-spacing_xs">
          <img src={ProfileImg} alt="프로필" width="45px" />
        </figure>
        <div className="mr-spacing_xl">
          <h2 className="text-base text-mpl_black font-medium">여름에 듣기 좋은 노래</h2>
          <span className="text-sm text-mpl_darkgray">레몬사탕</span>
        </div>
        <span className="text-sm mr-spacing_sm">총 22곡</span>
        <span className="text-sm flex items-center">
          <FaHeart className="text-mpl_pink" />
          10
        </span>
      </header>
      <section className="relative mt-spacing_sm h-32 overflow-hidden">
        <img src={plyImg} alt="플레이리스트 썸네일" className="absolute -top-1/2 " />
        <button className="absolute z-10 top-[90px] left-2 opacity-90 ">
          <img src={plybutton} alt="플레이 버튼" />
        </button>
      </section>
    </main>
  );
};

export default MainPlayList;
