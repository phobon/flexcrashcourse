import { Box, Flex } from "../containers";

const BoxItem = Box.extend`
  background-color: purple;
  font-size: ${props => props.theme.fontSizes[3]}px;
  color: ${props => props.theme.colors.white};
  padding: 0 ${props => props.theme.space[4]}px;
  margin: ${props => props.theme.space[2]}px;
  min-width: 20rem;
  min-height: 20rem;
`;

const FlexItem = BoxItem.extend`
  flex: 1 1 auto;
  background-color: orange;
`;

export {
  BoxItem, FlexItem
};