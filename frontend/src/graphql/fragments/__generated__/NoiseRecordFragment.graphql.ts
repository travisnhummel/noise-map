/**
 * @generated SignedSource<<56edac37ba074bee3d9f79bdcafd3bb6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NoiseRecordFragment$data = {
  readonly id: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly noiseLevel: number;
  readonly suburb: string;
  readonly timestamp: string;
  readonly " $fragmentType": "NoiseRecordFragment";
};
export type NoiseRecordFragment$key = {
  readonly " $data"?: NoiseRecordFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NoiseRecordFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NoiseRecordFragment",
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
  "type": "NoiseRecord",
  "abstractKey": null
};

(node as any).hash = "e303fddb98ed4c25bdffe6a74af3eccb";

export default node;
