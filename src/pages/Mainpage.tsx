// components
import MainPlayList from "../components/mainpage/MainPlaylist";
import navBar from "../assets/nav.svg";

const Mainpage = () => {
  return (
    <div className="px-10 pt-14">
      <header className="flex pb-14 justify-between items-center">
        <h1 className=" text-2xl text-sky uppercase font-bold">mpl</h1>
        <nav className="">
          <img src={navBar} alt="네비게이션바" />
        </nav>
      </header>

      <section>
        <MainPlayList />
        <MainPlayList />
        <MainPlayList />
      </section>
    </div>
  );
};

export default Mainpage;
