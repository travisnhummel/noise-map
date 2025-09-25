import React, { useState } from "react";
import { commitMutation } from "react-relay";
import { relayEnvironment } from "../relay/Environment";
import { AddNoiseRecordMutation } from "../graphql/mutations/AddNoiseRecordMutation";
import { AddNoiseRecordMutation as AddNoiseRecordMutationType } from "../graphql/mutations/__generated__/AddNoiseRecordMutation.graphql";

export default function AddNoiseForm() {
  const [suburb, setSuburb] = useState("");
  const [noiseLevel, setNoiseLevel] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [timestamp, setTimestamp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    commitMutation<AddNoiseRecordMutationType>(relayEnvironment, {
      mutation: AddNoiseRecordMutation,
      variables: { suburb, noiseLevel, latitude, longitude },
      onCompleted: (response, errors) => {
        if (errors) {
          console.error(errors);
        } else {
          console.log("Inserted record:", response.addNoiseRecord);
          setSuburb("");
          setNoiseLevel(0);
          setLatitude(0);
          setLongitude(0);
          setTimestamp("");
        }
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Suburb"
        value={suburb}
        onChange={(e) => setSuburb(e.target.value)}
      />
      <input
        type="number"
        placeholder="Noise Level (dB)"
        value={noiseLevel}
        onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(parseFloat(e.target.value))}
      />
      <button type="submit">Add Noise Record</button>
    </form>
  );
}
