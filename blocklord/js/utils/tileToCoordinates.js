export const tile2long = (x) => {
    const lon = (x / Math.pow(2, 17) * 360 - 180) + 0.0025;
    return lon;
};

export const tile2lat = (y) => {
    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, 17);
    const lat = (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))) - 0.0025;
    return lat;
};



// WEBPACK FOOTER //
// ./src/utils/tileToCoordinates.js