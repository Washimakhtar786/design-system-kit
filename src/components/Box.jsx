import styled from "styled-components";

export const Box = styled.div`
  padding: ${({ p, theme }) => theme.spacing[p] || p || 0};
  margin: ${({ m }) => m || 0};

  width: ${({ w }) => w || "auto"};
  height: ${({ h }) => h || "auto"};

  background: ${({ bg }) => bg || "transparent"};

  border-radius: ${({ radius }) => radius || 0};
`;