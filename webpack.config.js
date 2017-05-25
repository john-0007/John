var path=require("path");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
    entry:{
        App:"./app/assets/scripts/app.js"
    },
    output:{
        path:path.resolve(__dirname,"./app/temp/scripts"),
        filename:"app.js",
        publicPath:"scripts/"
    },
    module:{
        rules:[
            {
                loader:ExtractTextPlugin.extract({
                    loader:"css-laoder"
                }),
                test:/\.css$/
                
            }
        ]
    },
    
    plugins:[
        new ExtractTextPlugin("style.css")
    ]
};