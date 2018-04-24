import styled from 'styled-components';
import { space, flex, flexDirection, alignItems, justifyContent, flexWrap, flexBasis, color, width, height } from 'styled-system';

const Box = styled.div`
  display: flex;

  ${space}
  ${color}

  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${flexBasis}
  ${alignItems}
  ${justifyContent}

  ${width}
  ${height}
`;

Box.defaultProps = {
  flex: 'none',
  align: 'center',
  justify: 'center'
};

export default Box;