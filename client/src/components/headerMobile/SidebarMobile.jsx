import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/actions/actions";
import { smoothScrollToTop } from "../../functions/SmoothScroll";

export default function SidebarMobile() {
  const isVisible = useSelector((state) => state.sidebar.isVisible);
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(toggleSidebar(false));
    smoothScrollToTop();
  };
  return (
    <div
      className={`sideBar ${isVisible ? "visibleSidebar" : "invisibleSidebar"}`}
    >
      <ul className="text-base font-semibold ">
        <Link to={"/home"} onClick={handleLinkClick}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Inicio
          </li>
        </Link>

        <Link to={"/products"} onClick={handleLinkClick}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Productos
          </li>
        </Link>
        <Link to={"/about"} onClick={handleLinkClick}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Nosotros
          </li>
        </Link>
      </ul>
    </div>
  );
}
