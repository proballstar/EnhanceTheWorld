import React from "react";
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";

export default function Map({ location }) {
  return (
      <div className="map w-full h-full">
        <div className="google-map w-full h-full" style={{height: 400, width: 400}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID }}
        defaultCenter={location}
        defaultZoom={15}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
        />
      </GoogleMapReact>
      </div>
      </div>
    )
}
