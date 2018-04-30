import styled from "styled-components";
import PropTypes from "prop-types";
import { 
    space, 
    color,
    alignItems,
    justifyContent,
    flexDirection,
    flex,
    alignContent,
    justifySelf,
    alignSelf,
    order,
    flexWrap,
    flexBasis,
    fontSize, 
    borderRadius,
    width, 
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    borders,
    borderColor
 } from "styled-system";

const Box = styled.div`
    display: flex;

    ${borders}
    ${borderColor}

    ${space}    
    ${color}

    ${borderRadius}
    ${fontSize}

    ${alignItems}
    ${justifyContent}
    ${flexDirection}
    ${flex}
    ${alignContent}
    ${justifySelf}
    ${alignSelf}
    ${order}
    ${flexWrap}
    ${flexBasis}

    width: ${props => props.fullWidth ? "100%" : ""};
    height: ${props => props.fullHeight ? "100%" : ""};

    ${width}
    ${minWidth}
    ${maxWidth}
    ${height}
    ${minHeight}
    ${maxHeight}
`;

Box.defaultProps = {
    flex: "none",
    align: "center",
    justify: "center",
    borderRadius: 0
};

Box.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...borderRadius.propTypes,
    ...fontSize.propTypes,
    ...width.propTypes,
    ...height.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes,
    ...flexDirection.propTypes,
    ...flex.propTypes,
    ...alignContent.propTypes,
    ...justifySelf.propTypes,
    ...alignSelf.propTypes,
    ...order.propTypes,
    ...flexWrap.propTypes,
    ...flexBasis.propTypes
};

export default Box;