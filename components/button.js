import styled from 'styled-components';
import { space, color, borderRadius, border } from 'styled-system';

const Button = styled.button`
  display: flex;
  flex: none;

  border: 0;

  cursor: pointer;

  ${space}
  ${color}
  ${borderRadius}
`;

Button.defaultProps = {
  bg: 'grayscale.3',
  color: 'grayscale.1',
  py: 2,
  px: 3,
  borderRadius: 2
};

export default Button;