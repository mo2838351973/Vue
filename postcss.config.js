const autoprefixer =require("autoprefixer");
module.exports = {
    plugins:[
        new autoprefixer({
            browsers:[
                "last 100 versions"
            ]
        })
    ]
}
