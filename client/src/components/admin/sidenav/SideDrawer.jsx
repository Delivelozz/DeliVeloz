import { Box } from "@mui/system";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FeedIcon from "@mui/icons-material/Feed";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser, setUserData } from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export default function SideDrawer({
  setOpen,
  openRegisterModal,
  openLoginModal,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.userData);

  const logOut = () => {
    dispatch(logoutUser());
    dispatch(setUserData({ email: "", password: "" }));
    setOpen();
    navigate("/home");
  };

  const loginModal = () => {
    setOpen();
    openLoginModal();
  };

  // ? ---------------------------------------- Return

  return (
    <Box sx={{ width: 250, bgcolor: "white" }}>
      <nav>
        <ListItem disablePadding>
          <img
            src="https://res.cloudinary.com/derot8znd/image/upload/v1713113177/png/a5xd2b9zcl7orbclcgnr.png"
            alt="isologo"
            className="w-15 h-8 object-cover pl-3"
          />
          <ListItemButton
            component={Link}
            to="/home"
            onClick={() => setOpen(false)}
            sx={{
              "& .MuiTypography-root": {
                fontSize: "1.3rem",
                fontWeight: "normal",
                color: "#E74C4C",
              },
            }}
          >
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </nav>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/home"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard de administrador" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/products"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de Productos" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/news"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de Novedades" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/users"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de Usuarios" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/products/addProduct"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Añadir Producto" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/news/addNew"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Añadir Novedad" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => logOut()}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "normal",
                },
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
