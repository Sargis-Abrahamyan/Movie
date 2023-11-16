import { useState } from 'react';

export const useSideBar = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('Home');
 
  return {
    openSideBar,
    activeMenu,
    setOpenSideBar,
    setActiveMenu,
  };
};
