import css from "../styles/NavBar.module.css";

import React from "react";

export default function Navbar() {
    return (
        <div className={css.NavbarContainer}>
            <div className={css.buttonContainer}>
                <button className={css.button}>Home</button>

                <div className={css.projects}>
                    <button className={css.button}>Projects</button>
                    <ul className={css.ul}>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>

                <div className={css.products}>
                    <button className={css.button}>Products</button>
                    <ul className={css.ul}>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
