规范文档 0.0.1
==========

1、 目录结构
----------
    src （源文件）  
      +-- global （全局公用文件）  
        +-- css （全局css）  
        +-- img （全局img）  
        +-- js  （全局js）  
        +-- lib （第三方库文件）  
      +-- pages （页面）
        +-- pagename （页面（组）名称） 
          +-- static （当前页面css/js/img） 
    dist  (构建目录，结构同src)  
    test  (测试输出目录，结构同src)  

2、 构建
----------
使用fis3作为构建工具  
devDependencies：  

    fis-parser-less-2.x  
    fis3-hook-relative  
    fis3-optimizer-imagemin  
    fis3-optimizer-img-compressor  
    fis3-preprocessor-autoprefixer  

cmd:

    npm run buildTest

输出到test目录


    npm run build

输出到dist目录  

3、部分公共js方法
----------
    <div class="popup popup-xxx" id="popup-id">
        <h1>{{title}}</h1>
        <p data-html="text"></p>
        <a href="{{attr}}"></a>
    </div>

    Popup.show("popup-id", {
        title: "hello",
        text: "my<br>world!"
        attr: "http://www.10086.cn",
    });