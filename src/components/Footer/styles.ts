import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  grid-area: Footer;
  background-color: ${(props) => props.theme.colors.secondary};
  border-top: solid 1px white;
`;
