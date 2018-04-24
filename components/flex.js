import Box from './box';

const Flex = Box.extend``;
Flex.defaultProps = {
  flex: '1 1 auto',
  align: 'center',
  justify: 'center'
};

export default Flex;