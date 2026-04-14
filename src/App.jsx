import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/GlobalStyle";
import { lightTheme, darkTheme } from "./theme/theme";

import { Button } from "./components/Button";
import { Input } from "./components/input";
import { Card } from "./components/Card";
import { Badge } from "./components/Badge";
import { Typography } from "./components/Typography";
import { Flex } from "./components/Flex";
import { Container } from "./components/Container";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Container>
        {/* 🔘 THEME TOGGLE */}
        <Button onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </Button>

        {/* 📦 CARD */}
        <Card style={{ marginTop: "2rem" }}>
          
          {/* 🧠 TYPOGRAPHY */}
          <Typography variant="h1">
            Design System
          </Typography>

          <Typography
            variant="body"
            style={{ marginTop: "1rem" }}
          >
            This is a scalable design system using styled-components.
          </Typography>

          {/* 🧾 INPUT */}
          <Input
            placeholder="Type something..."
            style={{ marginTop: "1rem" }}
          />

          {/* 🔘 BUTTON VARIANTS */}
          <Flex gap="1rem" style={{ marginTop: "1rem" }}>
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="small">Small</Button>
            <Button size="large">Large</Button>
          </Flex>

          {/* 🏷️ BADGE */}
          <Badge style={{ marginTop: "1rem" }}>
            Active
          </Badge>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;