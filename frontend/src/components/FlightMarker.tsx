import { useFragment } from "react-relay";
import { FlightRecordFragment } from "../graphql/fragments/FlightRecordFragment";
import { FlightRecordFragment$key } from "../graphql/fragments/__generated__/FlightRecordFragment.graphql";

import { Marker, Popup, Circle } from "react-leaflet";
import { LatLngExpression } from "leaflet";

type FlightMarkerProps = {
  recordRef: FlightRecordFragment$key;
};

export default function FlightMarker({ recordRef }: FlightMarkerProps) {
  const flight = useFragment(FlightRecordFragment, recordRef);

  if (flight.latitude == null || flight.longitude == null) {
    return null;
  }

  const position: LatLngExpression = [flight.latitude, flight.longitude];

  const noiseRadius = flight.baroAltitude
    ? Math.max(500, 2000 - flight.baroAltitude * 2)
    : 500;

  return (
    <>
      <Marker position={position}>
        <Popup>
          {flight.callsign} ({flight.icao24})<br />
          Altitude: {flight.baroAltitude?.toFixed(1)} m<br />
          Velocity: {flight.velocity?.toFixed(1)} m/s
        </Popup>
      </Marker>

      <Circle
        center={position}
        radius={noiseRadius}
        pathOptions={{ color: "red", opacity: 0.3, fillOpacity: 0.1 }}
      />
    </>
  );
}
