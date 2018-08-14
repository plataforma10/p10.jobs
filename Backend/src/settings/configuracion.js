var appsettings = require('./appsettings.json');

class Configuracion {
    Obtener(env) {
        var settings = appsettings[env];
        if(!env || !settings){
            return appsettings["default"];
        }
        return settings;
    }
}

module.exports = new Configuracion(); 