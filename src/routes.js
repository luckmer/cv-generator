import Details from "./page/Details.jsx";
import IncorrectPage from "./page/404.jsx";
import LandingPage from "./page/LandingPage.jsx";
import Context from "./page/Context.jsx";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/details/:id", Component: Details, name: "details" },
    { path: "/edit/:id", Component: Context, name: "details" },
    { path: "*", Component: IncorrectPage, name: "404" },
];
