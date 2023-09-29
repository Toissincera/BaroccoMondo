import React from "react";
import menTie1 from "./menTie1.jpg";
import menTie2 from "./menTie2.jpg";
import menTie3 from "./menTie3.jpg";

export default function MenTie({ submenus }) {
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
                src={menTie1}
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
                src={menTie2}
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
                src={menTie3}
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
