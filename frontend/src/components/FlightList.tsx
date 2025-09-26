import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import FlightMap from "./FlightMap";
import { AllFlightsQuery } from "../graphql/queries/AllFlightsQuery";
import { AllFlightsQuery as AllFlightsQueryType } from "../graphql/queries/__generated__/AllFlightsQuery.graphql";


export default function FlightList() {
  const data = useLazyLoadQuery<AllFlightsQueryType>(
      AllFlightsQuery,
      {},
      { fetchPolicy: "store-or-network" } // optional
    );

  return <FlightMap flightRefs={data.getFlightRecords} />;

}