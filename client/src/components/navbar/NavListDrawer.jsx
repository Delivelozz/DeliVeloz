import { Box } from "@mui/system";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser, setUserData } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export default function NavListDrawer({
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

  return (
    <Box sx={{ width: 250, bgcolor: "white" }}>
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
                  fontWeight: "bold",
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
              to="/products"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary="Productos" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/about"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Nosotros" />
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
              to="/admin"
              onClick={() => setOpen(false)}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard de administrador" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard de usuario" />
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
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => loginModal()}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                "& .MuiTypography-root": {
                  fontSize: ".95rem",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Iniciar Sesión" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
