import React, { Fragment, useState } from "react";
import { Button, IconButton, Menu } from "@material-ui/core";

export interface ButtonWithMenuProps {
  children: (closeMenuFunction: () => void) => React.ReactNode;
  enabled: boolean;
  menuId: string;
  textButton?: { text: string };
  iconButton?: { icon: React.ReactNode };
}

export function ButtonWithMenu(props: ButtonWithMenuProps) {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const handleToggleMenuButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElement(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorElement(null);
  };

  let button;
  if (props.textButton) {
    button = (
      <Button
        disabled={!props.enabled}
        aria-haspopup="true"
        onClick={handleToggleMenuButtonClick}
      >
        {props.textButton.text}
      </Button>
    );
  } else if (props.iconButton) {
    button = (
      <IconButton
        size="small"
        aria-haspopup="true"
        onClick={handleToggleMenuButtonClick}
        disabled={!props.enabled}
      >
        {props.iconButton.icon}
      </IconButton>
    );
  } else {
    button = <></>;
  }

  return (
    <Fragment>
      {button}
      <Menu
        id={props.menuId}
        onClose={closeMenu}
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
      >
        {props.children(closeMenu)}
      </Menu>
    </Fragment>
  );
}
