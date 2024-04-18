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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  logoutUser,
  setUserData,
  getAdminUsers,
} from "../../redux/actions/actions";
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
  const adminUsers = useSelector((state) => state.adminUsers);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);

  const handleIsAdmin = () => {
    const isAdmin = adminUsers.find(
      (element) => element.email === userData.email
    );
    if (isAdmin) {
      return true;
    }
    return false;
  };
  //console.log(handleIsAdmin());

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

  if (!login) {
    return (
      <Box sx={{ width: 250, bgcolor: "white" }}>
        <nav>
          <ListItem disablePadding>
            <img
              src="https://res.cloudinary.com/derot8znd/image/upload/v1713113177/png/a5xd2b9zcl7orbclcgnr.png"
              alt="isologo"
              class="w-15 h-8 object-cover pl-3"
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
              <ListItemText primary="Deliveloz" />
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
                to="/products"
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
                    fontWeight: "normal",
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
                component="a"
                onClick={() => loginModal()}
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 24 },
                  "& .MuiTypography-root": {
                    fontSize: ".95rem",
                    fontWeight: "normal",
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

  return (
    <Box sx={{ width: 250, bgcolor: "white" }}>
      <nav>
        <ListItem disablePadding>
          <img
            src="https://res.cloudinary.com/derot8znd/image/upload/v1713113177/png/a5xd2b9zcl7orbclcgnr.png"
            alt="isologo"
            class="w-15 h-8 object-cover pl-3"
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
            <ListItemText primary="Deliveloz" />
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
              to="/products"
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
                  fontWeight: "normal",
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
          {handleIsAdmin() == true ? (
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
          ) : (
            <div></div>
          )}

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/profile"
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
              <ListItemText primary="Dashboard de Usuario" />
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
