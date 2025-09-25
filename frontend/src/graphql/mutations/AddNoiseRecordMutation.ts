import { graphql } from "react-relay";
import { NoiseRecordFragment } from "../fragments/NoiseRecordFragment";

// Export the mutation
export const AddNoiseRecordMutation = graphql`
  mutation AddNoiseRecordMutation(
    $suburb: String!
    $noiseLevel: Float!
    $latitude: Float!
    $longitude: Float!
  ) {
    addNoiseRecord(
      suburb: $suburb
      noiseLevel: $noiseLevel
      latitude: $latitude
      longitude: $longitude
    ) {
      ...NoiseRecordFragment
    }
  }
`;
