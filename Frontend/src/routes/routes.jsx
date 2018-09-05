import Home from "../views/home/home";
import Posicion from "../views/posicion/posicion.jsx";
import NotFound from "../views/notFound/NotFound.jsx";

var indexRoutes = [
    { path: "/", name: "Home", component: Home, exact: true },    
    { path: "/area/:area/:posicion", name: "Posicion", component: Posicion, exact: true},    
    { path: "/no-encontrado", name: "NoEncontrado", component: NotFound, exact: true}
];

export default indexRoutes;