import { toggleSidebar } from "../../redux/actions/actions";
import Menu from "../icons/Menu";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavListDrawer from "../navbar/NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "../icons/HomeIcon";
import ProductIcon from "../icons/ProductIcon";
import { Link } from "react-router-dom";

import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

export default function HeaderMobile({ openLoginModal, openRegisterModal }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 shadow-lg block md:hidden z-40 bg-white select-none">
      <div className="container flex justify-between items-center h-20">
        <IconButton color="inherit" size="large" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>

        <Link to={"/home"}>
          <h1 className="text-sundown-500">Deliveloz</h1>
        </Link>
      </div>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer
          setOpen={setOpen}
          openLoginModal={openLoginModal}
          openRegisterModal={openRegisterModal}
        />
      </Drawer>
    </div>
  );
}
