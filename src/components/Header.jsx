import { Link } from "react-router-dom";
import cat from "../assets/cat.svg";

function Header() {
  return (
    <div className="flex justify-between border p-4 m-4">
      <div className="">
        <img className="size-[60px]" src={cat} alt="icon" />
      </div>
      <div className="m-1 p-1 border">내 페이지</div>
      <div>
        <ul className="flex">
          <li className="m-1 p-1 border">
            <Link to="/">MainPage</Link>
          </li>
          <li className="m-1 p-1 border">
            <Link to="/FirstPage">FirstPage</Link>
          </li>
          <li className="m-1 p-1 border">
            <Link to="/SecondPage">SecondPage</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
