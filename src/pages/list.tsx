import { Code, Flex } from "@chakra-ui/react";
import { fetchGraphQL } from "../services/graphql";
import { productSearchQuery } from "../queries/product-search.query";

export default function List({ data }) {
  return (
    <Flex>
      {data?.search?.edges?.map((product) => (
        <Code whiteSpace="pre">{JSON.stringify(product, 0, 2)}</Code>
      ))}
    </Flex>
  );
}

export async function getServerSideProps() {
  const data = await fetchGraphQL(productSearchQuery, {
    term: "jackets",
    first: 10,
    catalog: "BC",
  });

  return { props: { data } };
}
