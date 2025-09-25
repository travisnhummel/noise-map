/**
 * @generated SignedSource<<4f937783e89b71a850cb90b42f12a094>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AllNoiseQuery$variables = Record<PropertyKey, never>;
export type AllNoiseQuery$data = {
  readonly allNoise: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"NoiseRecordFragment">;
  }>;
};
export type AllNoiseQuery = {
  response: AllNoiseQuery$data;
  variables: AllNoiseQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllNoiseQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NoiseRecord",
        "kind": "LinkedField",
        "name": "allNoise",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NoiseRecordFragment"
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
    "name": "AllNoiseQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NoiseRecord",
        "kind": "LinkedField",
        "name": "allNoise",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "suburb",
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
            "name": "longitude",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "noiseLevel",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "timestamp",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1f2fbf0f6393af5f0334598a80d53c9a",
    "id": null,
    "metadata": {},
    "name": "AllNoiseQuery",
    "operationKind": "query",
    "text": "query AllNoiseQuery {\n  allNoise {\n    ...NoiseRecordFragment\n    id\n  }\n}\n\nfragment NoiseRecordFragment on NoiseRecord {\n  id\n  suburb\n  latitude\n  longitude\n  noiseLevel\n  timestamp\n}\n"
  }
};

(node as any).hash = "d25f476f803845e6fd4aff06776f76ea";

export default node;
