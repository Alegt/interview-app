import { Code, Flex } from "@chakra-ui/react";

export default function List({ data }) {
  return (
    <Flex>
      {data.products.map((product) => (
        <Code whiteSpace="pre">{JSON.stringify(product, 0, 2)}</Code>
      ))}
    </Flex>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.stage.backcountry.com/api/products/search/jackets"
  );
  const data = await res.json();

  return { props: { data } };
}
