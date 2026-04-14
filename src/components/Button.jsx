import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme, variant }) =>
    variant === "outline"
      ? "transparent"
      : theme?.colors?.primary || "#2563eb"};

  color: ${({ variant, theme }) =>
    variant === "outline"
      ? theme?.colors?.primary || "#2563eb"
      : "white"};

  border: ${({ variant, theme }) =>
    variant === "outline"
      ? `2px solid ${theme?.colors?.primary || "#2563eb"}`
      : "none"};

  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
`;