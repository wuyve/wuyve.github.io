// 00.js
// 代码实现了皮肤的切换和皮肤的本地存储功能,皮肤切换时通过修改head标签中link元素的href属性值来实现,也就是换了另一个样式表文件,本地存储则使用了HTML5本地存储window.localStorage的setItem()和getItem()来实现
var lists = document.getElementsByTagName('li')
// 把引入皮肤css路径的link标签对象取出来
var cssStyle = document.getElementById('skinCSS')
// 访问本地存储,获取上次设置的皮肤样式文件
var cssSavedName = getStorage('cssSavedName')
// 判断是否设置过并存储了皮肤文件,如果是,就是用设置过的,否则就是用默认的
if(cssSavedName && cssSavedName != null) {
    cssStyle.href = cssSavedName
} else {
    // 没有存储过就是用skin4
    cssStyle.href = 'css/skin4.css'
}
for(var i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', function () {
        // 根据单击的列表对象的id属性值来关联对应的样式表文件
        var cssName = 'css/' + this.id + '.css'
        // 变换 link标签中的href属性,切换样式文件
        cssStyle.href = cssName
        // 将用户选择的皮肤样式存入客户端
        setStorage('cssSavedName', cssName)
    })
}
// html5设置本地存储
function setStorage (name, value) {
    window.localStorage.setItem(name, value)
}
function getStorage (name) {
    var cssSavedName = window.localStorage.getItem(name)
    return cssSavedName
}