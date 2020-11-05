import React from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";

const StandardMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const toggleOpen = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    setAnchorEl(ev.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <>
      <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
        <MenuItem onClick={onClose}>Bonjour</MenuItem>
        <MenuItem onClick={onClose}>Dag</MenuItem>
      </Menu>
      <Button onClick={toggleOpen}>Standard Menu</Button>
    </>
  );
};

export default StandardMenu;
