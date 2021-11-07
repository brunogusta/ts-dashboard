import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  grid-area: Content;
  background-color: ${(props) => props.theme.colors.primary};
`;
