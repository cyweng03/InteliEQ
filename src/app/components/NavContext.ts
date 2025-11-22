'use client';

import { createContext } from "react";

const NavContext = createContext({
  hideNav: false,
  setHideNav: (_value: boolean) => { },
});


export default NavContext;
