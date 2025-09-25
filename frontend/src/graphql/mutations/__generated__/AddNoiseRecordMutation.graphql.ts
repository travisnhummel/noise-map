/**
 * @generated SignedSource<<3cf9037c91c35ea0113668b69d0863b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddNoiseRecordMutation$variables = {
  latitude: number;
  longitude: number;
  noiseLevel: number;
  suburb: string;
  timestamp: string;
};
export type AddNoiseRecordMutation$data = {
  readonly addNoiseRecord: {
    readonly " $fragmentSpreads": FragmentRefs<"NoiseRecordFragment">;
  } | null | undefined;
};
export type AddNoiseRecordMutation = {
  response: AddNoiseRecordMutation$data;
  variables: AddNoiseRecordMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "latitude"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "longitude"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "noiseLevel"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "suburb"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "timestamp"
},
v5 = [
  {
    "kind": "Variable",
    "name": "latitude",
    "variableName": "latitude"
  },
  {
    "kind": "Variable",
    "name": "longitude",
    "variableName": "longitude"
  },
  {
    "kind": "Variable",
    "name": "noiseLevel",
    "variableName": "noiseLevel"
  },
  {
    "kind": "Variable",
    "name": "suburb",
    "variableName": "suburb"
  },
  {
    "kind": "Variable",
    "name": "timestamp",
    "variableName": "timestamp"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddNoiseRecordMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "NoiseRecord",
        "kind": "LinkedField",
        "name": "addNoiseRecord",
        "plural": false,
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddNoiseRecordMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "NoiseRecord",
        "kind": "LinkedField",
        "name": "addNoiseRecord",
        "plural": false,
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
    "cacheID": "3da2c17680f369c5467bee3c7211f27e",
    "id": null,
    "metadata": {},
    "name": "AddNoiseRecordMutation",
    "operationKind": "mutation",
    "text": "mutation AddNoiseRecordMutation(\n  $suburb: String!\n  $noiseLevel: Float!\n  $latitude: Float!\n  $longitude: Float!\n  $timestamp: String!\n) {\n  addNoiseRecord(suburb: $suburb, noiseLevel: $noiseLevel, latitude: $latitude, longitude: $longitude, timestamp: $timestamp) {\n    ...NoiseRecordFragment\n    id\n  }\n}\n\nfragment NoiseRecordFragment on NoiseRecord {\n  id\n  suburb\n  latitude\n  longitude\n  noiseLevel\n  timestamp\n}\n"
  }
};
})();

(node as any).hash = "992ebcfd615563b9eb0be15bb653b34a";

export default node;
