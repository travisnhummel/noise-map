import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import { AllNoiseQuery } from "../graphql/queries/AllNoiseQuery";
import { AllNoiseQuery as AllNoiseQueryType } from "../graphql/queries/__generated__/AllNoiseQuery.graphql";
import NoiseItem from "./NoiseItem";

export default function NoiseList() {
  const data = useLazyLoadQuery<AllNoiseQueryType>(
    AllNoiseQuery,
    {},
    { fetchPolicy: "store-or-network" } // optional
  );

  if (!data || !data.allNoise) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.allNoise.map((recordRef, index) => {
        return <NoiseItem key={index} recordRef={recordRef} />
      })}
    </ul>
  );
}
