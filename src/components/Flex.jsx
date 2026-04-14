import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: ${({ gap }) => gap || "1rem"};
`;