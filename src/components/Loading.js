import React, { Component } from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <h4>room data loading...</h4>
                <img src={loadingGif} alt="loading gif"/>
            </div>
        )
    }
}
