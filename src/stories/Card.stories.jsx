import { Card } from "../components/Card";
import { Button } from "../components/Button";

export default {
  title: "Design System/Card",
  component: Card,
};

export const Playground = () => (
  <Card>
    <h3>Card Title</h3>
    <p>This is a reusable card component.</p>
    <Button style={{ marginTop: "1rem" }}>Action</Button>
  </Card>
);