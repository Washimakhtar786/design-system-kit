import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/GlobalStyle";
import { lightTheme, darkTheme } from "./theme/theme";

import { Button } from "./components/Button";
import { Input } from "./components/input";
import { Card } from "./components/Card";
import { Badge } from "./components/Badge";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div style={{ padding: "2rem" }}>
        {/* ✅ FIXED BUTTON */}
        <Button onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </Button>

        <Card style={{ marginTop: "2rem" }}>
          <h2>Design System</h2>

          <Input
            placeholder="Type something..."
            style={{ marginTop: "1rem" }}
          />

          <Badge
            style={{ marginTop: "1rem", display: "block" }}
          >
            Active
          </Badge>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;