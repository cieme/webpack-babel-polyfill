const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "8",
                firefox: "40",
                chrome: "40",
                safari: "8",
            },
        },
    ],
];

module.exports = {
    presets
};