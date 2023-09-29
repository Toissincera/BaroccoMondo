import React from "react";
import fragrancesDevil1 from "./fragrancesDevil1.jpg";
import fragrancesDevil2 from "./fragrancesDevil2.jpg";
import fragrancesDevil3 from "./fragrancesDevil3.jpg";
import fragrancesDevil4 from "./fragrancesDevil4.jpg";

export default function FragrancesDevil({ submenus }) {
  return (
    <div class="">
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
    </div>

      <div class="container text-center">
        <div class="row m-2">
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src={fragrancesDevil1}
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
                src={fragrancesDevil2}
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
                src={fragrancesDevil3}
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
                src={fragrancesDevil4}
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
