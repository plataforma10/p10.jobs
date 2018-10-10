class Configuracion {
    Obtener() {
        return {
            PORT: process.env.PORT || 8081,
            CMS: process.env.CMS || "http://dev06:1337",
            UPLOAD: process.env.UPLOAD || "http://localhost:1337",
            FRONT: process.env.FRONT || "http://localhost:8080",
            CACHE_AREAS: process.env.CACHE_AREAS || 600,
            CACHE_HEADER: process.env.CACHE_HEADER || 600,
            JIRA: process.env.JIRA || "https://plataforma10.atlassian.net",
            AuthClientId: process.env.Usuario,
            AuthSecret: process.env.Password,
        };
    }
}

module.exports = new Configuracion(); 