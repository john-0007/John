var gulp=require("gulp"),
    watch=require("gulp-watch"),
    browsersync=require("browser-sync").create();

gulp.task("watch",function(){
    browsersync.init({
   notify:false,
    server:{
        baseDir:"app"
    }
});
    watch("./app/index.html",function(){
        browsersync.reload();
    });
    
    watch("./app/assets/styles/**/*.css",function(){
        gulp.start("cssInject");
    });
    watch("./app/assets/scripts/**/*.js",function(){
        gulp.start("refreshScript");
    });
});

gulp.task("cssInject",["styles"],function(){
   return gulp.src("./app/temp/styles/style.css")
          .pipe(browsersync.stream());
});

gulp.task("refreshScript",["script"],function(){
    browsersync.reload();
});


