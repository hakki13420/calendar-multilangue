const path= require('path')
const HtmlWebpackplugin=require('html-webpack-plugin')

module.exports={
    mode:'development',
    entry:'/src/main.js',
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    devtool:'inline-source-map',
    devServer:{
        static:'./dist',
        port:2000
    },
    plugins:[
        new HtmlWebpackplugin({
            title:'calendar js',
            template:path.resolve(__dirname,'index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader','postcss-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/i,
                type:'asset/resource'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource'
            },
            {
                test:/\.(m?js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }

    
}