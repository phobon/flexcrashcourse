import Content from "./content.md";
import * as c from "../../components";

const P = c.Text.extend`
  margin-bottom: 2rem;
`;

const H1 = c.H1.extend`
  margin-bottom: 0.5rem;

`;
const H2 = c.H2.extend`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
`;
const H3 = c.H3.extend`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const Code = c.Box.extend`
  margin-left: 2rem;
  justify-content: flex-start;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.grayscale[3]};
`;

const Ul = c.Box.withComponent("ul").extend`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const HowToCheat = () => (
  <c.Box mx={4}>
    <Content 
      components={{
        h1: H1, h2: H2, h3: H3, p: P, code: Code, ul: Ul
      }}
    />
  </c.Box>
);

export default HowToCheat;