import styled from "styled-components";

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.primary}33;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;