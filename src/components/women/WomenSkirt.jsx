import React from "react";
import womenSkirt1 from "./womenSkirt1.jpg";
import womenSkirt2 from "./womenSkirt2.jpg";
import womenSkirt3 from "./womenSkirt3.jpg";




export default function WomenSkirt({ submenus }) {
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
                src={womenSkirt1}
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
                src={womenSkirt2}
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
                src={womenSkirt3}
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
