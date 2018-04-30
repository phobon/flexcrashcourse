import Box from "./box";

const Flex = Box.extend``;
Flex.defaultProps = Object.assign({}, Flex.defaultProps, { flex: "1 1 auto" });

export default Flex;