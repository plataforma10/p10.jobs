import { warningBoxShadow, successBoxShadow, dangerBoxShadow, infoBoxShadow, 
    primaryBoxShadow, roseBoxShadow } from './sombras.jsx';
import { defaultFont } from '../base.jsx';

const card = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
};

const cardActions = {
    margin: "0 20px 10px",
    paddingTop: "10px",
    borderTop: "1px solid #eeeeee",
    height: "auto",
    ...defaultFont
};

const cardHeader = {
    margin: "-30px 15px 0",
    borderRadius: "3px",
    padding: "15px"
};

const cardTitle = {
    ...title,
    marginTop: ".625rem"
}; 

const cardLink = {
    "& + $cardLink": {
      marginLeft: "1.25rem"
    }
};  

const cardSubtitle = {
    marginBottom: "0",
    marginTop: "-.375rem"
};

const warningCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    ...warningBoxShadow
};

const successCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    ...successBoxShadow
};

const dangerCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    ...dangerBoxShadow
};

const infoCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
    ...infoBoxShadow
};

const primaryCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    ...primaryBoxShadow
};

const roseCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #ec407a, #d81b60)",
    ...roseBoxShadow
};

export { card, cardActions, cardHeader, cardTitle, cardLink, cardSubtitle, warningCardHeader, 
    successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader };