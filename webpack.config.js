// Importing required modules
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Exporting the Webpack configuration object
module.exports = {
  // Output configuration
  output: {
    // Specify the output directory for bundled files
    path: path.join(__dirname, "/dist"),
    // Specify the filename for the bundled JavaScript file
    filename: "index.bundle.js",
  },

  // Development server configuration
  devServer: {
    // Specify the port for the development server
    port: 3000,
    // Enable hot module replacement for faster development
    hot: true,
  },

  // Module configuration, specifying how different files should be processed
  module: {
    // Rules for file processing
    rules: [
      {
        // Use Babel to transpile JavaScript and JSX files
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Process CSS files using style-loader and css-loader
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpg|gif|svg)$/, // Define the file types to optimize
        use: [
          {
            loader: "file-loader", // Use file-loader to handle image files
            options: {
              name: "images/[name].[ext]", // Output path and filename
            },
          },
          {
            loader: "image-webpack-loader", // Use image-webpack-loader for image optimization
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65, // Adjust the image quality as needed
              },
              optipng: {
                enabled: false, // Disable optipng (PNG optimizer) if not needed
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },

  // Plugins configuration
  plugins: [
    // Use HtmlWebpackPlugin to generate an HTML file and inject the bundled script
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
