import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

async function fetchGraphQL(params: any, variables: any) {
  const response = await fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });
  return await response.json();
}

export const relayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
