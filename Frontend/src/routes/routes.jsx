import Home from "../components/views/home";
import Area from "../components/views/area";
import Posicion from "../components/views/posicion";
import NotFound from "../components/views/notFound";

var indexRoutes = [
    { path: "/", name: "Home", component: Home, exact: true },    
    { path: "/area/:area", name: "Area", component: Area, exact: true},    
    { path: "/area/:area/:posicion", name: "Posicion", component: Posicion, exact: true},    
    { path: "/no-encontrado", name: "NoEncontrado", component: NotFound, exact: true}
];

export default indexRoutes;