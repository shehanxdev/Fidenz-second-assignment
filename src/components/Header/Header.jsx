import React from "react";
import { LOGO } from "../../images";

export function Header() {
  return (
    <header className="text-center  d-flex justify-content-center align-items-center mt-5">
      <img src={LOGO} alt="Logo icon" />
    </header>
  );
}
