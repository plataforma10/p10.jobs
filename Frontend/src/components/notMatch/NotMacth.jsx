import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class NotMatch extends Component {

    render() {
        return (
            <Redirect to="/no-encontrado"/>
        )
    };
}

export default NotMatch;
