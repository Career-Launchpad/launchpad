/**
 * @flow
 * @relayHash 28386b158d3259b7d796e7d9d8c5e670
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OfferTable_offers$ref = any;
export type OffersPage_QueryVariables = {||};
export type OffersPage_QueryResponse = {|
  +store: ?{|
    +offers: ?{|
      +$fragmentRefs: OfferTable_offers$ref
    |}
  |}
|};
export type OffersPage_Query = {|
  variables: OffersPage_QueryVariables,
  response: OffersPage_QueryResponse,
|};
*/


/*
query OffersPage_Query {
  store {
    offers {
      ...OfferTable_offers
    }
    id
  }
}

fragment OfferTable_offers on offerConnection {
  edges {
    id
    position_type
    position_title
    location {
      state
    }
    company_name
    academic_year
    wage_type
    wage_value
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OffersPage_Query",
    "type": "query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "store",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "offers",
            "storageKey": null,
            "args": null,
            "concreteType": "offerConnection",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "OfferTable_offers",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OffersPage_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "store",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "offers",
            "storageKey": null,
            "args": null,
            "concreteType": "offerConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "offer",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "position_type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "position_title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "location",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "state",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "company_name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "academic_year",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "wage_type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "wage_value",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OffersPage_Query",
    "id": null,
    "text": "query OffersPage_Query {\n  store {\n    offers {\n      ...OfferTable_offers\n    }\n    id\n  }\n}\n\nfragment OfferTable_offers on offerConnection {\n  edges {\n    id\n    position_type\n    position_title\n    location {\n      state\n    }\n    company_name\n    academic_year\n    wage_type\n    wage_value\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7e3df4547801652a7bb09432d233237d';
module.exports = node;