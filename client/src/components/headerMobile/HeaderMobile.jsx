import { toggleSidebar } from "../../redux/actions/actions";
import Menu from "../icons/Menu";
import { useDispatch } from "react-redux";

export default function HeaderMobile() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="sticky top-0 shadow-lg block md:hidden z-40 bg-white select-none">
      <div className="container flex justify-between items-center h-20">
        <div className="cursor-pointer" onClick={handleClick}>
          <Menu height={22} color={"#222"} width={22} />
        </div>
        <h1 className="text-sundown-500">Deliveloz</h1>
        <img
          src="https://res.cloudinary.com/derot8znd/image/upload/v1712286915/Otros/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju_g2ngxd.webp"
          alt=""
          className="object-cover w-10 h-10 min-w-10 min-h-10 cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
}
