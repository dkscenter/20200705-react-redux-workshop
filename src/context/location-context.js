import React from 'react';

export const location = {
    address: {
        address: "478/70 ซอยลาดกระบัง 24/1",
        subDistrict: "ลาดกระบัง",
        district: "ลาดกระบัง",
        province: "กรุงเทพมหานคร",
        postNumber: "10520"
    }
};
  
export const LocationContext = React.createContext({
    location,
});