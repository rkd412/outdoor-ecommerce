import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Fragment className={styles["nav-bar"]}>
      <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Products</Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
      </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
