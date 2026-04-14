import styled from "styled-components";

export const Flex = styled.div`
  display: flex;

  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  flex-direction: ${({ direction }) => direction || "row"};

  gap: ${({ gap, theme }) => theme.spacing[gap] || gap || 0};
`;