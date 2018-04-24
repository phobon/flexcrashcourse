export const grayscale = {    
    white: "#FFF",
    black: "#000",
    lighter: "#f6f6f6",
    light: "#d7d7d7",
    medium: "#a1a1a1",
    heavy: "#6c6c6c",
    heavier: "#3f3f3f"
};

export const colour = {
    transparent: "transparent",
    indigo: "#264653",
    green: "#2a9d8f",
    yellow: "#e9c46a",
    sand: "#f4a261",
    red: "#e76f51"
};

const colours = [ colour.indigo, colour.green, colour.yellow, colour.sand, colour.red ];

export function colourFromType(colourType) {
    switch (colourType) {
        case "indigo":
        return colour.indigo;
        case "green":
        return colour.green;
        case "yellow":
        return colour.yellow;
        case "sand":
        return colour.sand;        
    }

    return colour.red;
}

export function randomColour() {
    const r = Math.floor(Math.random() * colours.length);
    return colours[r];
}