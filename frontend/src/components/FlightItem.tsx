
import React from "react";
import { useFragment } from "react-relay/hooks";
import { FlightRecordFragment } from "../graphql/fragments/FlightRecordFragment";
import { FlightRecordFragment$key } from "../graphql/fragments/__generated__/FlightRecordFragment.graphql";

type FlightItemProps = {
  recordRef: FlightRecordFragment$key;
};

export default function FlightItem({ recordRef }: FlightItemProps) {
  const record = useFragment(
    FlightRecordFragment,
    recordRef
  );

  return (
    <li key={record.icao24}>
      {record.callsign} ({record.icao24}) — {record.latitude}, {record.longitude} — Alt: {record.baroAltitude}m
    </li>
  );
}
