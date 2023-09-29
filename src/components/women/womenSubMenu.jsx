import React from "react";
import { Link } from "react-router-dom";
import womenDB from "./justWomenDB.json";
const womenSubmenu = ["Dress", "Top", "Skirt", "Bra", "Underwear"];

export default function WomenSubMenu(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          marginTop: "1rem",
          marginBottom: "1rem",
          backgroundColor: "#212121",
          padding: "1rem",
          paddingLeft: "9rem",
        }}
        class="lead text-light"
      >
        <Link to="/women/dress">
          <button
            type="button"
            class="btn btn-lg mx-1 p-2 text-light"
          >
            {womenSubmenu[0]}
          </button>
        </Link>
        <Link to="/women/top">
          <button
            type="button"
            class="btn btn-lg mx-1 p-2 text-light"
          >
            {womenSubmenu[1]}
          </button>
        </Link>
        <Link to="/women/skirt">
          <button
            type="button"
            class="btn btn-lg mx-1 p-2 text-light"
          >
            {womenSubmenu[2]}
          </button>
        </Link>
        <Link to="/women/bra">
          <button
            type="button"
            class="btn btn-lg mx-1 p-2 text-light"
          >
            {womenSubmenu[3]}
          </button>
        </Link>
        <Link to="/women/underwear">
          <button
            type="button"
            class="btn btn-lg mx-1 p-2 text-light"
          >
            {womenSubmenu[4]}
          </button>
        </Link>
      </div>
    </div>
  );
}
