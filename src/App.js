import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import WomenDress from "./components/women/WomenDress";
import WomenSkirt from "./components/women/WomenSkirt";
import WomenTop from "./components/women/WomenTop";
import WomenBra from "./components/women/WomenBra";
import WomenUnderwear from "./components/women/WomenUnderwear"
import MenSuit from "./components/men/MenSuit";
import MenTrousers from "./components/men/MenTrousers";
import MenShirt from "./components/men/MenShirt";
import MenBriefs from "./components/men/MenBriefs";
import MenTie from "./components/men/MenTie";
import Touchdown from "./components/Touchdown";
import Footer from "./components/Footer";
import FragrancesMen from "./components/fragrances/FragrancesMen";
import FragrancesWomen from "./components/fragrances/FragrancesWomen";
import FragrancesDevil from "./components/fragrances/FragrancesDevil";


const womenSubmenu = ["Dress", "Top", "Skirt", "Bra", "Underwear"];
const menSubmenu = ["Suit", "Shirt", "Trousers", "Briefs", "Tie"];
const fragrancesSubmenu = ["Men", "Women", "The Devil"]

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Landing />
              <Touchdown />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/women/dress"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <WomenDress submenus={womenSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/women/skirt"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <WomenSkirt submenus={womenSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/women/top"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <WomenTop submenus={womenSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/women/bra"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <WomenBra submenus={womenSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/women/underwear"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <WomenUnderwear submenus={womenSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/men/suit"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <MenSuit submenus={menSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/men/trousers"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <MenTrousers submenus={menSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/men/shirt"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <MenShirt submenus={menSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/men/briefs"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <MenBriefs submenus={menSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/men/tie"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <MenTie submenus={menSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/fragrances/men"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <FragrancesMen submenus={fragrancesSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/fragrances/women"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <FragrancesWomen submenus={fragrancesSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/fragrances/devil"
          element={
            <div style={{ backgroundColor: "#1A1A1A" }}>
              <NavBar />
              <FragrancesDevil submenus={fragrancesSubmenu} />
              <Footer />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
