import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import { useEffect } from "react";
import { ShoppingCart } from "@mui/icons-material";
import SignedInMenu from "./SignedInMenu";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Store", path: "/store" },
  { title: "Contact", path: "/contact" },
];
const accountLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);

  useEffect(() => {
    console.log("Basket Items:", basket?.items);
  }, [basket]);

  const itemCount =
    basket?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Super Mart
          </Typography>
          {!isMobile && (
            <List sx={{ display: "flex" }}>
              {navLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { color: "secondary.main" },
                    "&:active": { color: "text.secondary" },
                  }}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            component={Link}
            to="/basket"
            color="inherit"
            sx={{ mr: isMobile ? 2 : 0 }}
          >
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {user ? (
            <SignedInMenu />
          ) : (
            <List sx={{ display: "flex" }}>
              {accountLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { color: "secondary.main" },
                    "&:active": { color: "text.secondary" },
                  }}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          )}
          {!isMobile && (
            <Switch checked={darkMode} onChange={handleThemeChange} />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
