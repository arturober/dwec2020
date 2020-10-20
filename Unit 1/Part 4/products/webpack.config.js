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
    // mode: 'production',
    context: path.join(__dirname, 'js'),
    entry: {
        products: './products.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    } // dist/product.bundle
        
        
}
