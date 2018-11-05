var axios = require('axios');
const FormData = require('form-data');
var fs = require('fs');

class Jira {
    async CrearIssue(nombre, apellido, email, archivo) {
        try {
            var response = await axios({
                method: 'post',
                url: `${process.env.JIRA}/rest/api/2/issue`,
                auth: {
                    username: process.env.AuthClientId,
                    password: process.env.AuthSecret
                },
                data: {
                    fields: {
                        project: {
                            id: process.env.JIRA_IdProyect
                        },
                        summary: apellido + ' ' + nombre + ' (' + email + ')',
                        description: email,
                        issuetype: {
                            id: process.env.JIRA_issuetype
                        }
                    }
                }
            });
            await this.AgregarArchivo(archivo, response.data.key);
        }
        catch (err) {
            throw err;
        }
    }

    async AgregarArchivo(archivo, taskKey) {
        try {
            const form = new FormData();
            form.append("file", fs.createReadStream(archivo.path));

            const headers = form.getHeaders();
            headers["X-Atlassian-Token"] = "no-check";

            await axios({
                method: 'post',
                url: `${process.env.JIRA}/rest/api/2/issue/${taskKey}/attachments`,
                auth: {
                    username: process.env.AuthClientId,
                    password: process.env.AuthSecret
                },
                data: form,
                headers: headers
            });
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new Jira();