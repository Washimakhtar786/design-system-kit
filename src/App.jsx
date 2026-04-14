import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyle } from "./theme/GlobalStyle";

import { Button } from "./components/Button";
import { Input } from "./components/input";
import { Card } from "./components/Card";
import { Typography } from "./components/Typography";
import { Box } from "./components/Box";
import { Flex } from "./components/Flex";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState("button");

  const renderComponent = () => {
    switch (active) {
      case "button":
        return (
          <Flex gap="sm">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
          </Flex>
        );

      case "input":
        return (
          <Box style={{ width: "100%" }}>
            <Input placeholder="Type here..." />
            <Input
              error
              placeholder="Error input"
              style={{ marginTop: "1rem" }}
            />
          </Box>
        );

      case "card":
        return (
          <Card style={{ width: "300px" }}>
            <Typography variant="h3">Card Title</Typography>
            <Typography variant="body" style={{ marginTop: "1rem" }}>
              This is a reusable card component.
            </Typography>
          </Card>
        );

      case "typography":
        return (
          <Box>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="body">
              This is body text
            </Typography>
          </Box>
        );

      default:
        return <div>Select component</div>;
    }
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Flex style={{ height: "100vh" }}>
        {/* Sidebar */}
        <Box
          bg={isDark ? "#1f2937" : "#ffffff"}
          style={{
            width: "250px",
            borderRight: "1px solid #e5e7eb",
            padding: "1rem",
          }}
        >
          <Typography variant="h3">Components</Typography>

          <Box style={{ marginTop: "1rem" }}>
            <div onClick={() => setActive("button")}>Button</div>
            <div onClick={() => setActive("input")}>Input</div>
            <div onClick={() => setActive("card")}>Card</div>
            <div onClick={() => setActive("typography")}>
              Typography
            </div>
          </Box>

          <Button
            style={{ marginTop: "2rem" }}
            onClick={() => setIsDark(!isDark)}
          >
            Toggle {isDark ? "Light" : "Dark"}
          </Button>
        </Box>

        {/* Preview Area */}
        <Box
          bg={isDark ? "#111827" : "#f9fafb"}
          style={{
            flex: 1,
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderComponent()}
        </Box>
      </Flex>
    </ThemeProvider>
  );
}

export default App;