var axios = require('axios');

class Jira {
    async CrearIssue(nombre, apellido, email, archivo) {
        try{            
            console.log(process.env.JIRA);
            axios({
                method: 'post',
                url: `${process.env.JIRA}/rest/api/2/issue`,
                auth: {
                    username: process.env.AuthClientId,
                    password: process.env.AuthSecret
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