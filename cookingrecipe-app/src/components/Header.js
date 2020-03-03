import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import logoImage from "../images/cooking.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 0 0 2%"
      }}
    >
      <img
        style={{
          width: "35px",
          height: "35px",
          margin: "15px"
        }}
        src={logoImage}
        alt="logo"
      />

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ padding: "0 2%" }}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to="/login">
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to="/addmenu">
          <MenuItem onClick={handleClose}>New Menu</MenuItem>
        </Link>
        {/* <Link style={{ color: "black", textDecoration: "none" }} to="/dashboard">
          <MenuItem onClick={handleClose}>Dash Board</MenuItem>
        </Link> */}
        <Link style={{ color: "black", textDecoration: "none" }} to="/logout">
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
    </header>
  );
}
