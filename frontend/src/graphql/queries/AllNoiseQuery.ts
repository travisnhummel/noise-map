import { graphql } from "react-relay";
import { NoiseRecordFragment } from "../fragments/NoiseRecordFragment";

// This is the query we will use in NoiseList.tsx
export const AllNoiseQuery = graphql`
  query AllNoiseQuery {
    allNoise {
      ...NoiseRecordFragment
    }
  }
`;
