import React from "react";
import MenSuit1 from "./menSuit1.jpg";
import MenSuit2 from "./menSuit2.jpg";
import MenSuit3 from "./menSuit3.jpg";
import MenSuit4 from "./menSuit4.jpg";
import MenSuit5 from "./menSuit5.jpg";
import MenSuit6 from "./menSuit6.jpg";

export default function MenSuit({ submenus }) {
  return (
    <div class="">
    <div
      style={{
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
        backgroundColor: "#212121",
        padding: "1rem",
        paddingLeft: "9rem"
      }}
      class="lead text-light"
    >
      <button
        type="button"
        class="btn btn-outline-dark btn-lg mx-1 p-2 text-light"
      >
        {submenus[0]}
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-lg mx-1 p-2 text-light"
      >
        {submenus[1]}
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-lg mx-1 p-2 text-light"
      >
        {submenus[2]}
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-lg mx-1 p-2 text-light"
      >
        {submenus[3]}
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-lg mx-1 p-2 text-light"
      >
        {submenus[4]}
      </button>
    </div>

      <div class="container text-center">
        <div class="row m-2">
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src={MenSuit1}
              />
              <div class="card-img-overlay">
                <h4 class="card-title">name1</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src={MenSuit2}
              />
              <div class="card-img-overlay">
                <h4 class="card-title">name1</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src={MenSuit3}
              />
              <div class="card-img-overlay">
                <h4 class="card-title">name1</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="row m-2">
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src={MenSuit4}
              />
              <div class="card-img-overlay">
                <h4 class="card-title">name1</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src={MenSuit5}
              />
              <div class="card-img-overlay">
                <h4 class="card-title">name1</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src={MenSuit6}
              />
              <div class="card-img-overlay">
                <h4 class="card-title">name1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
