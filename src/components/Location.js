import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Location extends Component {
    render() {
        return (
            <div className="location">
                <div className="location-text">Click to set Address</div>
                <div className="location-edit">
                    <FontAwesomeIcon icon={['fas', 'edit']} />
                </div>
            </div>
        )
    }
}
