//配置

//服务端地址
var base_url = "http://yjk.ueuo.com";

function page_index() {
    var data = {"name":$(location).attr("href")};
    var url = base_url + "/api/home/index.php";
    requestPost(url,{data},function (res,dataormsg) {
        if(res){
            let main = dataormsg.main;

            var view_list = '';
            for(var i in main){
                let row = main[i];
                console.log(row.content);
                view_list += "<li>";
                view_list += "<div class=\"post\">\n";
                view_list += "<h1 class=\"title\">";
                view_list += row.title + "</h1>";
                view_list += "<span class=\"facebook\"><a href=\"#\"></a></span>\n" +
                  "            <div class=\"meta\">\n" +
                  "              <ul>\n" +
                  "                <li class=\"admin\"><a href=\"#\"> " + row.nick_name + " </a></li>\n" +
                  "                <li class=\"date\">" + row.created_at + "</li>\n" +
                  "                <li class=\"category\"><a href=\"#\">类别</a></li>\n" +
                  "                <li class=\"comments\"><a href=\"#\">0</a></li>\n" +
                  "              </ul>\n" +
                  "             </div>\n" +
                  "         <span class=\"main-border\"></span>";
                if(row.pic){
                    view_list += "<img class=\"post-image\" src=\""+ row.pic +"\" alt=\"post image\" height=\"214\" />\n";
                }
                view_list += "<p class=\"content_row\">" + row.content + "</p></div>";
                view_list += "</li>";
            }

            $('.pageing').append(view_list);
            $(".pageing").quickPager({
                pageSize: 5,
            });
            // location.reload()
        }else{
            alert('---'+ dataormsg)
        }
    });

}

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