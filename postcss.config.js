
module.exports={
    
    plugins: [
        // require('autoprefixer')({
        //     grid:true
        // }),
        require('postcss-import'),

      
        require('postcss-cssnext')({
            features:{
                autoprefixer:{
                    grid: true,
                },
                customProperties:false,
                calc:false,
            }
        })
    ]
}