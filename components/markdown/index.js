import * as c from "../containers";
import * as t from "../text";
import styled from "styled-components";

const P = t.Text.extend`
  margin-bottom: 4rem;
  font-size: ${props => props.theme.fontSizes[2]}px;
  color: ${props => props.theme.colors.grayscale[1]};
`;

const H1 = t.H1.extend`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.accent};
`;
const H2 = t.H2.extend`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.grayscale[0]};
`;
const H3 = t.H3.extend`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.grayscale[0]};
`;
const H4 = t.H4.extend`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.grayscale[0]};
`;

const Code = c.Box.extend`
  justify-content: flex-start;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.grayscale[3]};
`;

const Ul = c.Box.withComponent("ul").extend`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4rem;
`;

const Li = styled.li`
  font-size: ${props => props.theme.fontSizes[2]}px;
`;

const Pre = styled.pre`
  display: flex;
  margin: 0 0 4rem 0;
`;

export { P, H1, H2, H3, H4, Code, Ul, Pre, Li };