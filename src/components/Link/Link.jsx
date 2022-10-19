import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
