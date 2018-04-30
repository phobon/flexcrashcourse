import styled from "styled-components";
import { space, width, height } from "styled-system";

const Vector = styled.svg`
    ${space}
    ${width}
    ${height}
`;

Vector.defaultProps = {
    width: 32,
    height: 32
};

export default Vector;