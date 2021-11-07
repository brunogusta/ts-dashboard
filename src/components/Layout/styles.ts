import styled from "styled-components";

export const GridTemplate = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template:
    "Aside MainHeader" 70px
    "Aside Content"
    "Footer Footer" 40px
    / 250px 1fr;
`;
