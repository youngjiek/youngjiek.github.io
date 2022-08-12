//配置

//服务端地址
var base_url = "http://yjk.ueuo.com/";



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