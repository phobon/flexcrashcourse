import styled from "styled-components";
import { space, color, fontSize } from "styled-system";

const Anchor = styled.a`
  ${space}
  ${color}
  ${fontSize}

  text-decoration: underline;
  cursor: pointer;
  color: blue;

  &:visited {
    color: purple;
  }
`;

export default Anchor;