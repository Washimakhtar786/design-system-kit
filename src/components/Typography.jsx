import styled from "styled-components";

export const Typography = styled.p`
  margin: 0;

  font-size: ${({ variant, theme }) => {
    switch (variant) {
      case "h1":
        return "32px";
      case "h2":
        return "24px";
      case "h3":
        return "20px";
      case "h4":
        return "18px";
      case "body":
      default:
        return theme?.fontSizes?.base || "16px";
    }
  }};

  font-weight: ${({ variant }) => {
    if (variant === "h1" || variant === "h2") return 700;
    if (variant === "h3" || variant === "h4") return 600;
    return 400;
  }};

  color: ${({ theme }) => theme?.colors?.text || "#111"};
`;