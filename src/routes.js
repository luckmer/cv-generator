import Details from "./page/Details";
import IncorrectPage from "./page/404";
import LandingPage from "./page/LandingPage";
import Context from "./page/Context";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/details/:id", Component: Details, name: "details" },
    { path: "/edit/:id", Component: Context, name: "details" },
    { path: "*", Component: IncorrectPage, name: "404" },
];
