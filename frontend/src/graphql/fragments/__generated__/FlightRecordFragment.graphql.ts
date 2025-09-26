/**
 * @generated SignedSource<<80c1e9285b6ab7755536b188beacfdf6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FlightRecordFragment$data = {
  readonly baroAltitude: number | null | undefined;
  readonly callsign: string | null | undefined;
  readonly category: number | null | undefined;
  readonly heading: number | null | undefined;
  readonly icao24: string;
  readonly latitude: number | null | undefined;
  readonly longitude: number | null | undefined;
  readonly onGround: boolean | null | undefined;
  readonly originCountry: string | null | undefined;
  readonly velocity: number | null | undefined;
  readonly verticalRate: number | null | undefined;
  readonly " $fragmentType": "FlightRecordFragment";
};
export type FlightRecordFragment$key = {
  readonly " $data"?: FlightRecordFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FlightRecordFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FlightRecordFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "icao24",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "callsign",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "originCountry",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "longitude",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "latitude",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "baroAltitude",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "onGround",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "velocity",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "heading",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verticalRate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
      "storageKey": null
    }
  ],
  "type": "FlightRecord",
  "abstractKey": null
};

(node as any).hash = "ec6414610ceb4d692855bda774a59c5c";

export default node;
