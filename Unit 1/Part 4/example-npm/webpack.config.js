var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Raíz del servidor(directorio del proyecto)
        publicPath: '/dist/', // Ruta donde están los bundles generados
        compress: true, // Habilitar compresión gzip
        port: 8080 // Puerto donde ejecutaremos el servidor
    },
    mode: 'development',
    devtool: 'source-map',
    context: path.join(__dirname, 'js'),
    entry: {
        index: './index.js',
        index2: './index2.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../index.html',
            chunks: ['index', 'commons', 'vendors']
        }), // Generates default index.html
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index2.html',
            template: '../index2.html',
            chunks: ['index2', 'commons', 'vendors']
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "all",
                    name: "commons", // Generará commons.bundle.js
                    minChunks: 2, // Mínimo archivos deben importar módulo para que se incluya aquí
                    minSize: 0 // Tamaño mínimo del código compartido para que se genere el trozo
                },
                vendors: { // Esto generará vendors.bundle.js
                    test: /[\\/]node_modules[\\/]/, // sólo código dentro de node_modules
                    name: "vendors", // Generará vendors.bundle.js
                    chunks: 'all'
                }
                    
            }
        }
    }


};