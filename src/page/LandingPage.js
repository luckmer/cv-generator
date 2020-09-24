import React, { useContext } from "react";

import { StoreContext } from "../store/index";

function LandingPage() {
    const a = useContext(StoreContext);
    console.log(a);
    return <div>LandingPage</div>;
}

export default LandingPage;
