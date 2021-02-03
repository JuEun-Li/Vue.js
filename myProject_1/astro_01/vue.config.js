module.exports = {  
    lintOnSave: false,
    outputDir: "../src/main/webapp/WEB-INF/views/index.html",  
    indexPath: "../src/main/resources/static",  
    devServer: {  
      proxy: "http://localhost:8088"  
    },  
    chainWebpack: config => {  
      const svgRule = config.module.rule("svg");    
      svgRule.uses.clear();    
      svgRule.use("vue-svg-loader").loader("vue-svg-loader");  
    }  
  };