import styled from "styled-components";

export const Typography = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};

  ${({ variant, theme }) => {
    switch (variant) {
      case "h1":
        return `
          font-size: 32px;
          font-weight: bold;
        `;
      case "h2":
        return `
          font-size: ${theme.fontSizes.heading};
          font-weight: 600;
        `;
      case "body":
      default:
        return `
          font-size: ${theme.fontSizes.base};
        `;
    }
  }}
`;