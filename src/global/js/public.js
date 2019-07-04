"use strict";

/**
* document.querySelectorAll 封装
*/
var $$ = function(selector, parent) {
    parent = parent || document;
    return parent.querySelectorAll(selector);
}

/**
* 定义弹框的方法
* @type {Object}
* @member {function} show
* @member {function} hide
*/
var Popup = (function(){
    return {
        wrapper: null,
        cur: null,
        /**
        * 显示弹框
        * @param {string} id: 将要显示弹框的id
        * @param {object} data: 要传给弹框的数据，渲染模板
        */
        show: function(id, data) {
            // 如果wrapper未初始化，则先初始化
            if(!this.wrapper) {
                this.wrapper = document.createElement("div");
                this.wrapper.className = "popupWrapper";
                document.body.appendChild(this.wrapper);
            }
            // 如果未传入ID，或者为当前popup.id，或者popup不存在则返回
            if(!id || !document.getElementById(id)) return;
            // 如果当前有显示弹框，先隐藏
            if(this.cur) this.hide();
            // 获取要显示的弹框，并渲染模板数据
            this.cur = document.getElementById(id);
            // if(data) render(this.cur, data); // 暂时去掉此功能
            // 显示遮罩和弹出层
            this.wrapper.classList.add("is-show");
            this.wrapper.appendChild(this.cur);
        },
        /**
        * 隐藏弹框
        */
        hide: function() {
            this.wrapper.classList.remove("is-show");
            document.body.appendChild(this.cur);
            this.cur = null;
        }
    };
    /*
    * 为已存在的dom元素渲染模板数据（非innerHTML）
    * @param {element} node: 要渲染的元素
    * @param {object} data: 数据
    */
    // 暂时去掉此功能
    /*function render(node, data) {
        if(!node || !data) return;

        var textNode = getTextTemplateNode(node),
            htmlNode = getHtmlTemplateNode(node);
            
        textNode.forEach(function(item){
            item.nodeValue = template(item._template, data);
        });
        htmlNode.forEach(function(item){
            var key = item.getAttribute("data-tplHtml");
            item.innerHTML = data[key] || "";
        });
        // 获取所有文本和属性节点
        function getTextTemplateNode(node) {
            if(node.nodeType == 3) { // 当前为文本节点并且包含模板
                if(node._template) {
                    return [node];
                }
                else if(/\{\{\s*\w+?\s*\}\}/.test(node.nodeValue)) {
                    node._template = node.nodeValue;
                    return [node];
                }
                else return [];   
            }
            else if(node.nodeType == 1){ // 当前为元素节点
                var attr = Array.from(node.attributes || []).filter(function(item){
                    if(/\{\{\s*\w+?\s*\}\}/.test(item.nodeValue)) {
                        item._template = item.nodeValue;
                        return true;
                    }
                    else if(item._template) {
                        return true;
                    }
                    return false;
                });
                return Array.from(node.childNodes).reduce(function(accumulator, cur){
                        return accumulator.concat(getTextTemplateNode(cur));
                    }, attr);
            }
            else return [];
        }
        // 填充为HTML
        function getHtmlTemplateNode(node) {
            return Array.from(node.querySelectorAll("[data-tplHtml]"));
        }
        // 替换
        function template(str, data) {
            return str.replace(/\{\{\s*(\w+?)\s*\}\}/g, function(match, key) {
                return data[key] || "";
            });
        }
    }*/
})();


// loading弹出
var Popupp = (function(){
    return {
        wrapperr: null,
        /**
        * 显示弹框
        * @param {string} id: 将要显示弹框的id
        * @param {object} data: 要传给弹框的数据，渲染模板
        */
        show: function(id, data) {
            this.wrapperr = document.createElement("div");
            this.wrapperr.className = "popupWrapperr";
            document.body.appendChild(this.wrapperr);
            this.cur = document.getElementById(id);
            this.wrapperr.classList.add("is-show");
            this.wrapperr.appendChild(this.cur);
        },
        hide: function(){
            this.wrapperr.remove();
        }

    };
})();
/**
* Loading的方法
* @type {Object}
* @member {function} show
* @member {function} hide
*/
var Loading = (function() {
    var box;
    
    function show() {
        
            box = document.createElement("div");
            box.id = "_popup-Loading";
            box.className = "popup-Loading";
            document.body.appendChild(box);
        Popupp.show("_popup-Loading");
        
    }
    function hide() {
        Popupp.hide();
    }
    return {
        show: show,
        hide: hide
    }
})();
/**
* Toast的方法
* @type {Object}
* @member {function} show
*/
var Toast = (function(){
    var box = document.createElement("div");
    box.className = "toast";
    return {
        /**
        * @param {object} opt 参数
        * opt.delay: toast显示的时间，默认1500ms
        * opt.info: toast提示文字（必填）
        * opt.ico： toast的图标图片的url（可选）
        */
        show: function(opt){
            if(!opt || !opt.info) return;
            opt.delay = opt.delay || 1500;
            box.innerHTML = "<span>" + opt.info + "<\/span>";
            if(opt.ico) {
                box.innerHTML = "<i style=\"background-image:url("+opt.ico+")\"><\/i>" + box.innerHTML;
            }
            document.body.appendChild(box);
            setTimeout(function(){
                box.classList.add("is-show")
            }, 0);
            setTimeout(function(){
                box.classList.remove("is-show");
                setTimeout(function(){
                    document.body.removeChild(box)
                }, 500);
            }, opt.delay);
        }
    }
})();

// loading 模拟2秒后加载完成
function loading() {
    setTimeout(function(){
        Loading.hide()
     }, 2000)
}