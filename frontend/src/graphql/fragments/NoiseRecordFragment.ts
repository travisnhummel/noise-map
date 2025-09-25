import { graphql } from "react-relay";

export const NoiseRecordFragment = graphql`
  fragment NoiseRecordFragment on NoiseRecord {
    id
    suburb
    latitude
    longitude
    noiseLevel
    timestamp
  }
`;