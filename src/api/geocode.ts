export async function geocodeAddressRequest(address: string) {
  const graphqlApiUrl = "https://stuart-frontend-challenge.vercel.app/graphql";

  const headers = {
    "content-type": "application/json",
  };

  const body = {
    query: `query {
        geocode(address: "${address}") {
          latitude,
          longitude
        }
      }`,
    variables: {
      type: "post",
    },
  };

  const response = await fetch(graphqlApiUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });

  return await response.json();
}
