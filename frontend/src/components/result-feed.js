import React, { Component } from 'react';
import { ResultBody } from './components/result-body.js'

class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="main-body">
                <ResultBody
                    name="Jam"
                    handle="@karthikkalyan90"
                    tweet="traffic jam on i-10" />
            </div>
        );
    }
}

export default Feed