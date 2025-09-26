import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { FlightRecordFragment$key } from "../graphql/fragments/__generated__/FlightRecordFragment.graphql";
import { useFragment } from "react-relay";
import { FlightRecordFragment } from "../graphql/fragments/FlightRecordFragment";
import FlightMarker from "./FlightMarker";

type FlightMapProps = {
  flightRefs: ReadonlyArray<FlightRecordFragment$key>; 
};

export default function FlightMap({ flightRefs }: FlightMapProps) {
  const center: LatLngExpression = [-33.8688, 151.2093]; // Sydney Airport lat/lon
  return (
    <MapContainer center={center} zoom={10} style={{ height: "80vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flightRefs.map(ref => (
        <FlightMarker recordRef={ref} />
      ))}
    </MapContainer>
  );
}
