import Image from "next/image";
import React from "react";
import styles from "./SideBar.module.css";
import DashboardSvg from "../svg/DashboardSvg";
import CategorySvg from "../svg/CategorySvg";
import ProductsSvg from "../svg/ProductsSvg";
import OrderSvg from "../svg/OrderSvg";
import UploadSvg from "../svg/UploadSvg";
import LogoWeb from "../svg/LogoWebSvg";
import RestaurantsSvg from "../svg/RestaurantsSvg";
import OfferSvg from "../svg/OfferSvg";
import LogoutSvg from "../svg/LogoutSvg";
import LeftSvg from "../svg/LeftSvg";

import { useRouter } from "next/router";

function SideBar() {
  let { push, pathname } = useRouter();
  const isActive = (p: string) => (pathname === p ? "active" : "");

  function handleCloseMenu() {}

  const handleLogout = async () => {
    // await logout();
    push("/admin/login");
  };

  return (
    <>
      <div className={`${styles.sidebar_box} `}>
        <ul>
          <div className={styles.sidebar_top}>
            <button onClick={handleCloseMenu}>
              <LeftSvg />
            </button>
            <div>
              <LogoWeb />
            </div>
          </div>
          <li
            onClick={() => {
              push("/admin");
              handleCloseMenu();
            }}
            className={styles[`${isActive("/admin")}`]}
          >
            <DashboardSvg />
            <span>{"Dashboard"}</span>
          </li>
          <li
            onClick={() => {
              push("/admin/products");
              handleCloseMenu();
            }}
            className={styles[`${isActive("/admin/products")}`]}
          >
            <ProductsSvg />
            <span>{"Products"}</span>
          </li>
          <li
            onClick={() => {
              push("/admin/restaurants");
              handleCloseMenu();
            }}
            className={styles[`${isActive("/admin/restaurants")}`]}
          >
            <RestaurantsSvg />
            <span>{"Restaurants"}</span>
          </li>
          <li
            onClick={() => {
              push("/admin/category");
              handleCloseMenu();
            }}
            className={styles[`${isActive("/admin/category")}`]}
          >
            <CategorySvg />
            <span>{"Category"}</span>
          </li>
          <li
            onClick={() => {
              push("/admin/orders");
              handleCloseMenu();
            }}
            className={styles[`${isActive("/admin/orders")}`]}
          >
            <OrderSvg />
            <span>{"Orders"}</span>
          </li>
          <li
            onClick={() => {
              push("/admin/orders/history");
              handleCloseMenu();
            }}
            className={styles[`${isActive("/admin/orders/history")}`]}
          >
            <UploadSvg />
            <span>{"History"}</span>
          </li>
          <li
            onClick={() => {
              push("//admin/offer");
              handleCloseMenu();
            }}
            className={styles[`${isActive("/admin/offer")}`]}
          >
            <OfferSvg />
            <span>{"Offers"}</span>
          </li>
          <li onClick={handleLogout}>
            <LogoutSvg />
            <span>{"Logout"}</span>
          </li>
        </ul>
        <div className={styles.sidebar_bottom}>
          <p>Version 1.0.0</p>
        </div>
      </div>
      {/* <div className={`${styles.sidebar_shadow} ${isMobile ? (isOpen ? styles.show : styles.hide) : styles.hide}`} /> */}
    </>
  );
}

export default SideBar;
