import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  grid-area: Aside;
  background-color: ${(props) => props.theme.colors.secondary};
  border-right: solid 1px white;
`;
