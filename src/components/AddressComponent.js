import React, { Component } from "react";
import { LocationContext } from "../context/location-context";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class AddressComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 13.7174898,
      lng: 100.7320373,
      zoom: 15,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LocationContext.Consumer>
        {({ address, setAddress }) => {
          console.log(address);
          return (
            <div className="address-container">
              <Map center={position} zoom={this.state.zoom} setLatLng={(latlng)=>{
                    console.log(latlng);
                }}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} draggable autoPan onmove={(e)=>{
                    console.log(e.latlng);
                }}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
              {/* <div className="address">
                Text is: {address.address}
                {", ตำบล/แขวง: "}
                {address.subDistrict}
                {", อำเภอ/เขต: "}
                {address.district}
                {", จังหวัด: "}
                {address.province} {address.postNumber}
              </div>
              <label>Address</label>
              <br />
              <textarea
                name="address"
                value={address.address}
                onChange={setAddress}
                type="text"
              />
              <br />
              <label>ตำบล</label>
              <br />
              <input
                name="subDistrict"
                value={address.subDistrict}
                onChange={setAddress}
                type="text"
              />
              <br />
              <label>อำเภอ</label>
              <br />
              <input
                name="district"
                value={address.district}
                onChange={setAddress}
                type="text"
              />
              <br />
              <label>จังหวัด</label>
              <br />
              <input
                name="province"
                value={address.province}
                onChange={setAddress}
                type="text"
              />
              <br />
              <label>รหัสไปรษณีย์</label>
              <br />
              <input
                name="postNumber"
                value={address.postNumber}
                onChange={setAddress}
                type="text"
              />
              <br /> */}
            </div>
          );
        }}
      </LocationContext.Consumer>
    );
  }
}
