export const fetchGraphQL = async (query, variables) => {
  const response = await fetch(
    "https://www.stage.backcountry.com/api/public/ux/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const result = await response.json();
  return result.data;
};
