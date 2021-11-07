import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  grid-area: MainHeader;
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom: solid 1px white;
`;
