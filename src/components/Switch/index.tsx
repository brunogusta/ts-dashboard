import React from "react";
import { Container, SwitchLabel, SwitchEdited } from "./styles";

const Switch: React.FC = () => (
  <Container>
    <SwitchLabel>Light</SwitchLabel>
    <SwitchEdited
      uncheckedIcon={false}
      checked
      onChange={() => "mudou"}
      checkedIcon={false}
    />
    <SwitchLabel>Dark</SwitchLabel>
  </Container>
);

export default Switch;
