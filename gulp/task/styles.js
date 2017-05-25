    var gulp=require("gulp"),    
    postcss=require("gulp-postcss"),
    autoprefixer=require("autoprefixer"),
    cssImport=require("postcss-import");

gulp.task("styles",function(){
     return gulp.src("./app/assets/styles/style.css")
           .pipe(postcss([cssImport,autoprefixer]))
           .on("error",function(errorInfo){
             this.emit("end");
         console.log(errorInfo.toString());
     })
           .pipe(gulp.dest("./app/temp/styles"));
});
