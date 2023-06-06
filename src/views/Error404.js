import { Link } from "react-router-dom";
import "../styles/404Page.css";

const Error404 = ({ rol }) => {
  return (
    <>
      <div class="error-page">
        <h1 class="h1Error">¡Vaya!</h1>
        <p class="zoom-area">
          No hemos podido encontrar la página que buscas. <b>:(</b>
        </p>
        <section class="error-container">
          <span>
            <span>4</span>
          </span>
          <span>0</span>
          <span>
            <span>4</span>
          </span>
        </section>
        <div class="link-container">
          <a
            target="_blank"
            href="/"
            class="more-link"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </>
  );
};
export default Error404;
