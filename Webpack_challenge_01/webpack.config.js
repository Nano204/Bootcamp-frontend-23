const HtmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("lodash");
const path = require("path");

const config = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        config.mode = "development";
        config.output = {
            filename: "main.js",
            path: path.resolve(__dirname, "build"),
        };
    }

    if (argv.mode === "production") {
        config.mode = "production";
        config.output = {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
        };
    }

    return config;
};
