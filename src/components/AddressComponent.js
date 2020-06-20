import React, { Component } from 'react'
import {LocationContext} from '../context/location-context'

export default class AddressComponent extends Component {
    render() {
        return (
            <LocationContext.Consumer>
                {({address,setAddress})=>{
                    console.log(address);
                    return (
                        <div>
                            <div className="address">
                                Text is: {address.address}
                                {", ตำบล/แขวง: "}
                                {address.subDistrict}
                                {", อำเภอ/เขต: "}
                                {address.district}
                                {", จังหวัด: "}
                                {address.province}
                                {" "}
                                {address.postNumber}
                            </div>
                            <label>Address</label>
                            <br/>
                            <textarea 
                                name="address"
                                value={address.address} 
                                onChange={setAddress} 
                                type="text"/>
                        <br/>
                        <label>ตำบล</label>
                        <br/>
                            <input 
                                name="subDistrict"
                                value={address.subDistrict} 
                                onChange={setAddress} 
                                type="text"/>
                        <br/>
                        <label>อำเภอ</label>
                        <br/>
                            <input 
                                name="district"
                                value={address.district} 
                                onChange={setAddress} 
                                type="text"/>
                        <br/>
                        <label>จังหวัด</label>
                        <br/>
                            <input 
                                name="province"
                                value={address.province} 
                                onChange={setAddress} 
                                type="text"/>
                        <br/>
                        <label>รหัสไปรษณีย์</label>
                        <br/>
                            <input 
                                name="postNumber"
                                value={address.postNumber} 
                                onChange={setAddress} 
                                type="text"/>
                        <br/>
                        </div>
                    )
                }}
            </LocationContext.Consumer>
        )
    }
}
