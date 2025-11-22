'use client';

import { createContext } from "react";

const NavContext = createContext({
  hideNav: false,
  setHideNav: (value: boolean) => { }
});

export default NavContext;
