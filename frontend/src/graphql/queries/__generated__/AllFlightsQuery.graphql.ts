/**
 * @generated SignedSource<<df104f7b1c062796aa037bb0a301b7c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AllFlightsQuery$variables = Record<PropertyKey, never>;
export type AllFlightsQuery$data = {
  readonly getFlightRecords: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"FlightRecordFragment">;
  }>;
};
export type AllFlightsQuery = {
  response: AllFlightsQuery$data;
  variables: AllFlightsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllFlightsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FlightRecord",
        "kind": "LinkedField",
        "name": "getFlightRecords",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FlightRecordFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllFlightsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FlightRecord",
        "kind": "LinkedField",
        "name": "getFlightRecords",
        "plural": true,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a3e991ff2887a20c5c3222c44c3a916b",
    "id": null,
    "metadata": {},
    "name": "AllFlightsQuery",
    "operationKind": "query",
    "text": "query AllFlightsQuery {\n  getFlightRecords {\n    ...FlightRecordFragment\n  }\n}\n\nfragment FlightRecordFragment on FlightRecord {\n  icao24\n  callsign\n  originCountry\n  longitude\n  latitude\n  baroAltitude\n  onGround\n  velocity\n  heading\n  verticalRate\n  category\n}\n"
  }
};

(node as any).hash = "969daac9408a7d33273fb1e26e0bbe0d";

export default node;
