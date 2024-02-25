//自己封装一个ajax请求函数
function requestPost(url,data={},callback) {
    $.ajax({
        url:url,
        method:'POST',
        data:data,
        success:function (ret) {
            if(ret.code==0){//0成功,-1报错
                callback(true,ret.data);
            }else{
                callback(false,ret.msg);
            }
        },
        error:function (ret) {
            callback(false,'网络错误');
        }
    });
    return;
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
$(function () {
    $("div").last().empty();
})