import Details from "./page/Details";
import IncorrectPage from "./page/404";
import LandingPage from "./page/LandingPage";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "*", Component: IncorrectPage, name: "404" },
    { path: "/details/:id ", Component: Details, name: "details" },
];
