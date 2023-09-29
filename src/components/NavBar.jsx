import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import BaroccoVECTOR from "./baroccoVECTOR.png";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-sm navbar-dark px-4"
      aria-label="Third navbar example"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div
        class="container-fluid"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none" }}
        >
          <a
            class="navbar-brand"
            href="#"
          >
            <img
              src={BaroccoVECTOR}
              style={{ height: "3.6rem", margin: "0rem 1rem" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </Link>

        <div
          class="collapse navbar-collapse"
          id="navbarsExample03"
        >
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle lead"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Women
              </a>
              <ul class="dropdown-menu border-secondary rounded">
                <Link
                  to="/women/dress"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Dress
                    </a>
                  </li>
                </Link>
                <Link
                  to="/women/skirt"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Skirt
                    </a>
                  </li>
                </Link>
                <Link
                  to="/women/top"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Top
                    </a>
                  </li>
                </Link>
                <Link
                  to="/women/bra"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Bra
                    </a>
                  </li>
                </Link>
                <Link
                  to="/women/underwear"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Underwear
                    </a>
                  </li>
                </Link>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle lead"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Men
              </a>
              <ul class="dropdown-menu border-secondary rounded">
                <Link
                  to="/men/suit"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Suit
                    </a>
                  </li>
                </Link>
                <Link
                  to="/men/trousers"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Trouser
                    </a>
                  </li>
                </Link>
                <Link
                  to="/men/shirt"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Shirt
                    </a>
                  </li>
                </Link>
                <Link
                  to="/men/briefs"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Briefs
                    </a>
                  </li>
                </Link>
                <Link
                  to="/men/tie"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      Tie
                    </a>
                  </li>
                </Link>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle lead"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fragrances
              </a>
              <ul class="dropdown-menu border-secondary rounded">
                <Link
                  to="/fragrances/men"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      For Men
                    </a>
                  </li>
                </Link>
                <Link
                  to="/fragrances/women"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      For Women
                    </a>
                  </li>
                </Link>
                <Link
                  to="/fragrances/devil"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    <a
                      class="dropdown-item lead"
                      href="#"
                    >
                      For The Devil
                    </a>
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
