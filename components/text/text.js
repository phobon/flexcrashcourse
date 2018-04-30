import styled from "styled-components";
import PropTypes from "prop-types";
import { space, color, fontSize, lineHeight, letterSpacing, fontWeight } from "styled-system";

const Text = styled.div`
    ${space}
    ${color}
    ${fontSize}
    ${lineHeight}
    ${letterSpacing}
    ${fontWeight}
`;

Text.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...fontSize.propTypes,
    ...lineHeight.propTypes,
    ...letterSpacing.propTypes,
    ...fontWeight.propTypes
};

Text.defaultProps = {
    color: "foreground",
    fontSize: 0
};

export default Text;