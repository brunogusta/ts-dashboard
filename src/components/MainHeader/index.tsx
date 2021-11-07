import React, { useMemo } from "react";
import { Container, Welcome, Profile, UserName } from "./styles";
import emojis from "../../utils/emojis";
import Switch from "../Switch";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Switch />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Bruno Gustavo</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
