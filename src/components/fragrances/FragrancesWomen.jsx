import React from "react";
import fragrancesWomen1 from "./fragrancesWomen1.jpg";
import fragrancesWomen2 from "./fragrancesWomen2.jpg";
import fragrancesWomen3 from "./fragrancesWomen3.jpg";
import fragrancesWomen4 from "./fragrancesWomen4.jpg";
import fragrancesWomen5 from "./fragrancesWomen5.jpg";
import fragrancesWomen6 from "./fragrancesWomen6.jpg";

export default function FragrancesWomen({ submenus }) {
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
                src={fragrancesWomen1}
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
                src={fragrancesWomen2}
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
                src={fragrancesWomen3}
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
                src={fragrancesWomen4}
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
                src={fragrancesWomen5}
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
                src={fragrancesWomen6}
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
