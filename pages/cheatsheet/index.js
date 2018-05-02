import Content from "./content.md";
import { Box } from "../../components";

import * as md from "../../components/markdown";

const CheatSheet = () => (
  <Box mt="7rem" p={4}>
    <Content 
      components={{
        h1: md.H1, h2: md.H2, h3: md.H3, p: md.P, code: md.Code, ul: md.Ul, pre: md.Pre, li: md.Li
      }}
    />
  </Box>
);

export default CheatSheet;