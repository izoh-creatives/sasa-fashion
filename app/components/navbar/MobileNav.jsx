"use client";
import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "lucide-react";

import styles from "@/app/styles/navbar.module.scss";
import Logo from "./Logo";
import MobileLinks from "./MobileLinks";

const MobileNav = () => {
  //Variables
  const navRef = useRef(null);
  const [menuOpen, setOpen] = useState(false);

  //Open menu
  const openMenu = () => setOpen(true);
  //Close menu
  const closeMenu = () => setOpen(false);

  //Close menu when outside is clicked
  useEffect(() => {
    const closeOnClick = (e) => {
      if (!navRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", closeOnClick);

    return () => document.removeEventListener("mousedown", closeOnClick);
  }, []);

  return (
    <div className={`${styles.navbar} ${styles.mobileNav}`}>
      <Logo />
      {!menuOpen && (
        <MenuIcon
          onClick={openMenu}
          className={`${styles.mobileIcon} ${styles.MenuIcon}`}
        />
      )}
      <div
        ref={navRef}
        className={`${styles.mobileMenu} ${menuOpen && styles.openMenu}`}
      >
        {menuOpen && (
          <span
            onClick={closeMenu}
            className={`${styles.mobileIcon} ${styles.closeIcon}`}
          >
            X
          </span>
        )}
        <MobileLinks onClicked={closeMenu} />
      </div>
    </div>
  );
};

export default MobileNav;
