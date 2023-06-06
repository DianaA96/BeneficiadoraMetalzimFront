import React from "react";
import "../styles/NoDataFound.css";

function NoDataFound() {
  return (
    <>
      <div class="empty-state">
        <div class="empty-state__icon">
          <img src={require("../assets/Logo/logo.svg").default} width={"100rem"} />
        </div>
        <div class="empty-state__message">
            ¡Lo sentimos!
        </div>
        <div class="empty-state__help">
            No hay información disponible por el momento.
        </div>
      </div>
    </>
  );
}
export default NoDataFound;
