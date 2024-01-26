import React from "react";
import { LOGO } from "../../images";
export function Header() {
  return (
    <div className="container">
      <header className="text-center p-4 p-lg-5">
        <img src={LOGO} alt="Logo icon" />
      </header>
    </div>
  );
}
