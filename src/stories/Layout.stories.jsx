import { Box } from "../components/Box";
import { Flex } from "../components/Flex";
import { Card } from "../components/Card";

export default {
  title: "Design System/Layout",
};

export const Playground = () => (
  <Flex gap="1rem">
    <Box bg="#e0f2fe" p="1rem" radius="8px">
      Box 1
    </Box>

    <Box bg="#fef3c7" p="1rem" radius="8px">
      Box 2
    </Box>

    <Card>
      <h4>Card inside Flex</h4>
    </Card>
  </Flex>
);