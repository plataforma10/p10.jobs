var axios = require('axios');
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);

class Jira {
    CrearIssue(nombre, apellido, email, archivo){
        return axios.post(`${config.JIRA}/rest/api/2/issue`, bodyData)
            .then((response) => {
                return {
                    status: 200,
                    data: true
                }
            })
            .catch((err) => {
                err.data = [];
                return err;
            });
    }
}

module.exports = new Jira();

var bodyData = {
    "issueUpdates": [
      {
        "update": {
          "worklog": [
            {
              "add": {
                "started": "2011-07-05T11:05:00.000+0000",
                "timeSpent": "60m"
              }
            }
          ]
        },
        "fields": {
          "project": {
            "id": "10000"
          },
          "summary": "something's wrong",
          "issuetype": {
            "id": "10000"
          },
          "assignee": {
            "name": "homer"
          },
          "reporter": {
            "name": "smithers"
          },
          "priority": {
            "id": "20000"
          },
          "labels": [
            "bugfix",
            "blitz_test"
          ],
          "timetracking": {
            "originalEstimate": "10",
            "remainingEstimate": "5"
          },
          "security": {
            "id": "10000"
          },
          "versions": [
            {
              "id": "10000"
            }
          ],
          "environment": "environment",
          "description": "description",
          "duedate": "2011-03-11",
          "fixVersions": [
            {
              "id": "10001"
            }
          ],
          "components": [
            {
              "id": "10000"
            }
          ],
          "customfield_30000": [
            "10000",
            "10002"
          ],
          "customfield_80000": {
            "value": "red"
          },
          "customfield_20000": "06/Jul/11 3:25 PM",
          "customfield_40000": "this is a text field",
          "customfield_70000": [
            "jira-administrators",
            "jira-software-users"
          ],
          "customfield_60000": "jira-software-users",
          "customfield_50000": "this is a text area. big text.",
          "customfield_10000": "09/Jun/81"
        }
      },
      {
        "update": {},
        "fields": {
          "project": {
            "id": "1000"
          },
          "summary": "something's very wrong",
          "issuetype": {
            "id": "10000"
          },
          "assignee": {
            "name": "jerry"
          },
          "reporter": {
            "name": "kosecki"
          },
          "priority": {
            "id": "20000"
          },
          "labels": [
            "new_release"
          ],
          "timetracking": {
            "originalEstimate": "15",
            "remainingEstimate": "5"
          },
          "security": {
            "id": "10000"
          },
          "versions": [
            {
              "id": "10000"
            }
          ],
          "environment": "environment",
          "description": "description",
          "duedate": "2011-04-16",
          "fixVersions": [
            {
              "id": "10001"
            }
          ],
          "components": [
            {
              "id": "10000"
            }
          ],
          "customfield_30000": [
            "10000",
            "10002"
          ],
          "customfield_80000": {
            "value": "red"
          },
          "customfield_20000": "06/Jul/11 3:25 PM",
          "customfield_40000": "this is a text field",
          "customfield_70000": [
            "jira-administrators",
            "jira-software-users"
          ],
          "customfield_60000": "jira-software-users",
          "customfield_50000": "this is a text area. big text.",
          "customfield_10000": "09/Jun/81"
        }
      }
    ]
  };