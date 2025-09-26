import { graphql } from "react-relay";

export const FlightRecordFragment = graphql`
  fragment FlightRecordFragment on FlightRecord {
    icao24
    callsign
    originCountry
    longitude
    latitude
    baroAltitude
    onGround
    velocity
    heading
    verticalRate
    category
  }
`;