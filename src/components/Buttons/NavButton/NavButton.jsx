import React from "react";
import { NavLink } from "react-router-dom";
import { BaseButton } from "../BaseButton/BaseButton";

export const NavButton = ({ name, to }) => {
  return (
    <NavLink to={to}>
      <BaseButton name={name} />
    </NavLink>
  );
};
