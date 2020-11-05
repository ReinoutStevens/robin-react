import React from "react";
import { Menu, Button, MenuItem, MenuItemProps } from "@material-ui/core";

export interface MenuContextProps {
  onClose: () => void;
}

export const MenuContext = React.createContext<MenuContextProps>({
  onClose: () => {
    throw new Error("Missing MenuContext");
  },
});

export const ManagedMenu: React.FC = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const onClose = () => {
    setAnchorEl(null);
  };

  const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(ev.currentTarget);
  };
  const context = {
    onClose: onClose,
  };
  return (
    <>
      <MenuContext.Provider value={context}>
        <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={onClose}>
          {children}
        </Menu>
      </MenuContext.Provider>
      <Button onClick={onClick}>Managed Menu</Button>
    </>
  );
};


// beetje klooie met typescript typings hier
export const ManagedMenuItem: React.FC<MenuItemProps> = React.forwardRef(
  (props, ref) => {
    const menuContext = React.useContext(MenuContext);
    const propHack = {
      ...props,
      onClick: menuContext.onClose,
    };
    return <MenuItem ref={ref} {...(propHack as any)} />;
  }
);
