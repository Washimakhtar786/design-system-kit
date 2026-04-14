import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) =>
    theme?.colors?.background || "#ffffff"};

  border: 1px solid
    ${({ theme }) => theme?.colors?.muted || "#e5e7eb"};

  border-radius: 10px;
  padding: 1.5rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  }
`;