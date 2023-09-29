import React from "react";
import womenDB from "./justWomenDB.json";
import WomenDress1 from "./womenDress1.jpg";
import WomenDress2 from "./womenDress2.jpg";
import WomenDress3 from "./womenDress3.jpg";
import WomenDress4 from "./womenDress4.jpg";
import WomenDress5 from "./womenDress5.jpg";
import WomenDress6 from "./womenDress6.jpg";

export default function WomenDress({ submenus }) {
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
                src={WomenDress1}
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
                src={WomenDress2}
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
                src={WomenDress3}
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
                src={WomenDress4}
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
                src={WomenDress5}
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
                src={WomenDress6}
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
