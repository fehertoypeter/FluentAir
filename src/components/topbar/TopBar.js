// TopBar.js
import React, { useContext } from "react";
import { TopBarContext } from "./TopBarContext";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import "./TopBar.css";

const TopBar = ({ testModeOn }) => {
  const { content } = useContext(TopBarContext);

  return (
    <div className="top-bar frosted-glass">
      {content}
      <ProfileMenu />
      {!testModeOn && <ProfileMenu />}
    </div>
  );
};

export default TopBar;

/*
TOP BAR Beállíása bárhonnan

-------- Ezeket kell importálni: --------

import React, { useContext, useEffect } from "react";
import { TopBarContext } from "../../components/topbar/TopBarContext";

-------- Ezt a komponensen belülre rakjuk ! --------

  const { setContent } = useContext(TopBarContext);

  useEffect(() => {
    setContent(
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Dashboard-Page</span>
      </div>
    );
    // Az oldallelépéskor visszaállítjuk az eredeti tartalmat
    return () => setContent(null);
  }, [setContent]);


*/
