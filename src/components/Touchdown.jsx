import React from "react";
import touchdownIMG1 from "./sanguine/sanguine_fashion_show_by_gameinart_dedhi1x.jpg";
import touchdownIMG2 from "./sanguine/dressedtokill-part1-runway.png";
import simonLindwallMen from "./sanguine/simon-lindwall-paris-fashionmodels-workfile222.jpg";
import simonLindwallWomen from "./sanguine/simon-lindwall-paris-fashionmodels-workfile2222.jpg";
import "./Touchdown.css";

export default function Touchdown() {
  return (
    <div
      style={{
        // height: "296vh",
        backgroundColor: "#1a1a1a",
        paddingLeft: "4rem",
        paddingRight: "4rem",
        position: "relative",
        paddingBottom: "4rem",
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src={touchdownIMG1}
          style={{ width: "100%" }}
        ></img>
        <div
          style={{
            position: "absolute",
            top: "86%",
            left: "6%",
            fontFamily: "aristotelicaDisplayRegular",
            fontSize: "2.4rem",
            color: "silver",
          }}
        >
          KOSM by Formless Lushka
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={touchdownIMG2}
          style={{
            width: "100%",
            border: "1px solid #1a1a1a",
            filter: "blur(2px)",
          }}
          className="py-4"
        ></img>
        <div
          style={{
            position: "absolute",
            top: "76%",
            left: "6%",
            fontFamily: "aristotelicaDisplayRegular",
            fontSize: "2rem",
            color: "silver",
          }}
        >
          Dreaming in Ankhalaqan <br /> Coming Soon
        </div>
      </div>
      <div
        style={{ position: "relative", width: "100%" }}
        className="py-4"
      >
        <img
          src={simonLindwallWomen}
          style={{ width: "100%" }}
        ></img>
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "6%",
            fontFamily: "aristotelicaDisplayRegular",
            fontSize: "2.4rem",
            color: "silver",
          }}
        >
          Sato's Three Lyrics <br />
          Available Now
        </div>
      </div>
      <div
        style={{ position: "relative", width: "100%" }}
        className="pt-4 pb-1"
      >
        <img
          src={simonLindwallMen}
          style={{ width: "100%" }}
        ></img>
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "6%",
            fontFamily: "aristotelicaDisplayRegular",
            fontSize: "2.4rem",
            color: "silver",
          }}
        >
          Kruger's Coterie <br />
          Available Now
        </div>
      </div>
    </div>
  );
}
