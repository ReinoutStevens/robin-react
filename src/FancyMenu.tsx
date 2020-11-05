import React from "react";
import { Button, Menu } from "@material-ui/core";

export interface FancyMenuProps {
  children: React.ReactElement<{ onClick: () => void }>[];
}

const FancyMenu: React.FC<FancyMenuProps> = ({ children }) => {
  const [anchorElement, setAnchorElement] = React.useState<HTMLElement | null>(
    null
  );

  const onClose = () => {
    setAnchorElement(null);
  };

  const onButton = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(ev.currentTarget);
  };

  const augmented = React.Children.map(children, (MenuItem) => {
    const Clone = React.cloneElement(MenuItem, { onClick: onClose });
    return Clone;
  });
  return (
    <>
      <Menu open={!!anchorElement} anchorEl={anchorElement} onClose={onClose}>
        {augmented}
      </Menu>
      <Button onClick={onButton}>FancyMenu</Button>
    </>
  );
};

export default FancyMenu;
