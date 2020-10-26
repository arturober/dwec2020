const path = require('path');

module.exports = {
    devServer: {
        contentBase: __dirname, // Raíz del servidor(directorio del proyecto)
        publicPath: '/dist/', // Ruta donde están los bundles generados
        compress: true, // Habilitar compresión gzip
        port: 8080 // Puerto donde ejecutaremos el servidor
    },
    mode: 'development',
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: { // Esto generará vendors.bundle.js
                    test: /[\\/]node_modules[\\/]/, // sólo código dentro de node_modules
                    name: "vendors", // Generará vendors.bundle.js
                    chunks: 'all'
                }  
            }
        }
    }
};
