// img
import ProfileImg from "../assets/basic_profile.svg";

// icon
import { FaHeart } from "react-icons/fa";

const Searchuserpage = () => {
  return (
    <div className="px-10 pt-14">
      <input
        id="user_search_input"
        type="search"
        className="w-full h-11 p-3 mb-11 border-1 border-indigo-800 bg-mpl_white rounded-full drop-shadow-md"
        placeholder="😀 친구를 찾아보세요 ㅋ"
      />

      <div className="profile flex justify-start">
        <figure className="profileImg mr-spacing_sm">
          <img src={ProfileImg} alt="프로필" width="45px" />
        </figure>

        <div className="w-full">
          <div className="flex">
            <h2 className="text-base text-mpl_black font-medium">레몬사탕</h2>
            <span className="flex items-center text-mpl_darkgray mx-2">
              <FaHeart className="text-mpl_pink mr-1" />
              <span>30</span>
            </span>
          </div>

          <div className="w-full text-sm text-mpl_darkgray flex items-center justify-start">
            <span className="w-48 block text-ellipsis whitespace-nowrap overflow-hidden">
              너의 밤이 또 가기전에 내게 말해줘 
            </span>
          </div>
        </div>

        <button className="w-1/4 p-1 bg-mpl_black text-mpl_white text-sm rounded-xl">
          팔로우
        </button>
      </div>
    </div>
  );
};

export default Searchuserpage;
