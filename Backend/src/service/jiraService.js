var axios = require('axios');
var config = require('../settings/configuracion').Obtener();

class Jira {
    async CrearIssue(nombre, apellido, email, archivo) {
        try{            
            console.log(config.JIRA);
            axios({
                method: 'post',
                url: `${config.JIRA}/rest/api/2/issue`,
                auth: {
                    username: config.AuthClientId,
                    password: config.AuthSecret
                },
                data: {
                    fields: {
                        project: {
                            id: '10006'
                        },
                        summary: apellido + ' ' + nombre + ' (' + email + ')',
                        description: email,
                        issuetype: {
                            id: '10002'
                        }
                    }
                }                
            }).then(response =>{
                return response.status;
            }).catch(err =>{
                return err.status;
            });
        }
        catch(err){
            return err;
        }
    }
}

module.exports = new Jira();