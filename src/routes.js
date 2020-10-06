import Details from "./page/Details.jsx";
import IncorrectPage from "./page/404.jsx";
import LandingPage from "./page/LandingPage.jsx";
import Experience from "./page/Experience";
import Context from "./page/Context.jsx";
import Skills from "./page/Skills";
import Download from "./page/Download";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/details/:id", Component: Details, name: "details" },
    { path: "/edit", Component: Context, name: "details" },
    { path: "/experience", Component: Experience, name: "experience" },
    { path: "/skills", Component: Skills, name: "Skills" },
    { path: "/preview", Component: Download, name: "download" },
    { path: "*", Component: IncorrectPage, name: "404" },
];
