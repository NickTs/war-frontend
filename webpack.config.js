var path = require('path');

module.exports = {
    mode: "none",
    entry: {
        "public/en": "./src/public/en/index.jsx",
        "public/ru": "./src/public/ru/index.jsx",
        "private/en": "./src/private/en/index.jsx",
        "private/ru": "./src/private/ru/index.jsx",    },
    output:{
        path: path.resolve(__dirname, './'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/',
        filename: "[name]/bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react", {
                        'plugins': ['@babel/plugin-proposal-class-properties']}]    // используемые плагины
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}