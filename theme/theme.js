import borderWidths from "./borderwidths";
import breakpoints from "./breakpoints";
import easings from "./easings";
import fontSizes from "./fontsizes";
import fontWeights from "./fontweights";
import letterSpacings from "./letterspacings";
import radii from "./radii";
import shadows from "./shadows";
import space from "./space";
import { grayscale, colour } from "./palettes";
import textStyles from "./textstyles";

// Construct a base colors object to use in a theme.
const colors = {
    black: "#000",
    white: "#FFF",
    accent: "#7cc33d",
    grayscale: [
        grayscale.heavier,
        grayscale.heavy,
        grayscale.medium,        
        grayscale.light,
        grayscale.lighter
    ],
    guidance: {
        error: colour.red,
        warning: colour.yellow,
        success: colour.green
    }
};

// Construct a base theme with values we want.
const baseTheme = {
    borderWidths,
    breakpoints,
    easings,
    fontSizes,
    fontWeights,
    letterSpacings,
    radii,
    shadows,
    space,
    colors,
    textStyles
};

export default baseTheme;