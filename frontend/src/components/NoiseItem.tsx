import React from "react";
import { useFragment } from "react-relay/hooks";
import { NoiseRecordFragment } from "../graphql/fragments/NoiseRecordFragment";
import { NoiseRecordFragment$key } from "../graphql/fragments/__generated__/NoiseRecordFragment.graphql";

type Props = {
  recordRef: NoiseRecordFragment$key;
};

export default function NoiseItem({ recordRef }: Props) {
  const record = useFragment(NoiseRecordFragment, recordRef);

  return (
    <li>
      {record.suburb}: {record.noiseLevel} dB (Lat: {record.latitude}, Lng: {record.longitude})
    </li>
  );
}
