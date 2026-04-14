import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  font-size: 14px;

  border: 1px solid
    ${({ error, theme }) =>
      error
        ? "#ef4444"
        : theme?.colors?.muted || "#6b7280"};

  color: ${({ theme }) => theme?.colors?.text || "#111"};

  outline: none;

  &:focus {
    border-color: ${({ theme }) =>
      theme?.colors?.primary || "#2563eb"};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;