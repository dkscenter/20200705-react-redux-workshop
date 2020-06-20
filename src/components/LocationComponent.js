import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

export default class LocationComponent extends Component {
    render() {
        return (
            <Link to="/address">
            <div className="location">
                <div className="location-text">Click to set Address</div>
                <div className="location-edit">
                    <FontAwesomeIcon icon={['fas', 'edit']} />
                </div>
            </div>
            </Link>
        )
    }
}
