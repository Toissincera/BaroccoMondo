import { Link } from "react-router-dom";
import baroccoMondoVECTOR from "./baroccoVECTOR.png";

export default function Footer() {
  return (
    <div style={{ width: "100%", backgroundColor: "#1a1a1a" }}>
      <div
        class="container"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 pb-5">
          <p
            class="col-md-4 mb-0 lead"
            style={{ color: "whitesmoke" }}
          >
            © 2023 La Dolca Golla Ltd.
          </p>

            <a
              href="#top"
              class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <div class="bi me-2">
                <img
                  src={baroccoMondoVECTOR}
                  style={{ height: "3rem" }}
                ></img>
              </div>
            </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a
                href="#top"
                class="nav-link px-2 text-body-secondary"
              >
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#top"
                class="nav-link px-2 text-body-secondary"
              >
                Get Involved
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#top"
                class="nav-link px-2 text-body-secondary"
              >
                Legal
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
