import { Code, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function List({ data }) {
  const router = useRouter();

  return (
    <Flex>
      <Text>{`Product ID: ${router.query.id}`}</Text>
      <Code whiteSpace="pre">{JSON.stringify(data, 0, 2)}</Code>
    </Flex>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://www.stage.backcountry.com/api/products/${params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}
