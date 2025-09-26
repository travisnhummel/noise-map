import { graphql } from 'react-relay';

export const AllFlightsQuery = graphql`
  query AllFlightsQuery {
    getFlightRecords {
      ...FlightRecordFragment
    }
  }
`;
