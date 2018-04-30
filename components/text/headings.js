import styled from "styled-components";
import { space, color } from "styled-system";

const H1 = styled.h1`
    display: flex;
    flex: none;
    ${space}
    ${color}
`;

H1.defaultProps = {
    m: 0,
    p: 0,
    color: "grayscale.1"
};

const H2 = H1.withComponent("h2");
const H3 = H1.withComponent("h3");

const H4 = H1.withComponent("h4");
const H5 = H1.withComponent("h5");
const H6 = H1.withComponent("h6");

export {
    H1, H2, H3, H4, H5, H6
};