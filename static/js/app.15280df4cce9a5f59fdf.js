webpackJsonp([1],{"/khK":function(t,e){},"1keI":function(t,e){},"37q6":function(t,e){},"62/s":function(t,e){},"75l9":function(t,e){t.exports={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},BaUe:function(t,e){},FXnb:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navs"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),n("router-link",{attrs:{to:"/bizhi"}},[t._v("壁纸")]),t._v(" "),n("router-link",{attrs:{to:"/manhua"}},[t._v("漫画")]),t._v(" "),t.isLoggedIn2?n("router-link",{attrs:{to:"/user/collectList"}},[t._v("收藏")]):t._e()],1)},staticRenderFns:[]};var a={name:"App",components:{Navbar:n("VU/8")({name:"Navbar",data:function(){return{isLoggedIn2:!1}},created:function(){this.isLoggedIn2=!!this.$getToken()}},r,!1,function(t){n("mXkJ")},null,null).exports},computed:{isRouteCached:function(){var t=["mhList","CollectList"];return console.log(t.includes(this.$route.name),this.$route.name),t.includes(this.$route.name)}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("keep-alive",[this.isRouteCached?e("router-view"):this._e()],1),this._v(" "),this.isRouteCached?this._e():e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("YRJM")},null,null).exports,l=n("/ocq"),c={name:"HelloWorld",data:function(){return{msg:"默认首页",isLoggedIn:!1}},created:function(){this.isLoggedIn=!!this.$getToken()},methods:{logout:function(){localStorage.removeItem("token"),window.location.href="/"}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.isLoggedIn?n("div",{staticClass:"user_bar"},[n("button",{staticClass:"btn",on:{click:function(e){return t.logout()}}},[t._v("退出")])]):n("div",{staticClass:"user_bar"},[n("router-link",{staticClass:"btn",attrs:{to:"/user/login"}},[t._v("登录")]),t._v(" "),n("router-link",{staticClass:"btn",attrs:{to:"/user/register"}},[t._v("注册")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tuijian"},[e("div",{staticClass:"tj_item"},[this._v("\n      公告内容\n      "),e("p",[this._v("\n          资源量不定期更新\n      ")])])])}]};var d=n("VU/8")(c,u,!1,function(t){n("XuA3")},"data-v-5fce11a0",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n      about\n  ")])])},staticRenderFns:[]};var p=n("VU/8")({name:"About",data:function(){return{msg:"about页面"}}},m,!1,function(t){n("1keI")},"data-v-c46243ba",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n      my\n  ")])])},staticRenderFns:[]};var v=n("VU/8")({name:"My",data:function(){return{msg:"My页面"}}},h,!1,function(t){n("FXnb")},"data-v-36091c92",null).exports,f={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},g=n("VU/8")(null,f,!1,null,null,null).exports,_=n("mtWM"),b=n.n(_),w={name:"mhList",data:function(){return{mhpicUrls:{}}},mounted:function(){this.getpicUrls()},methods:{getpicUrls:function(){var t=this,e=this.$getToken(),n=new URLSearchParams;n.append("token",e),b.a.post(this.$apiBaseUrl+"systuijian",n).then(function(e){if(0===e.data.code){var n=e.data.data;console.log("成功",n),t.mhpicUrls=n}else t.$refs.errorDialog.showError(e.data.msg)}).catch(function(t){console.error("请求错误",t)})}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mhmain"},this._l(this.mhpicUrls,function(t){return e("router-link",{key:t.url,attrs:{to:{name:"mh",params:{url:t.url}}}},[e("img",{staticClass:"mhitem",attrs:{src:t.url}})])}),1)},staticRenderFns:[]};var C=n("VU/8")(w,k,!1,function(t){n("37q6")},"data-v-ca93d538",null).exports,x=n("7t+N"),U=n.n(x),E={props:{errorMessage:{type:String,default:""}},data:function(){return{dialogVisible:!1,internalErrorMessage:""}},methods:{showError:function(t){this.internalErrorMessage=t,this.dialogVisible=!0},handleDialogClose:function(){this.dialogVisible=!1}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"错误信息",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},close:t.handleDialogClose}},[n("p",[t._v(t._s(t.internalErrorMessage))])])},staticRenderFns:[]},D=n("VU/8")(E,$,!1,null,null,null).exports,y={name:"Detail",components:{ErrorDialog:D},data:function(){return{isButtonDisabled:!1,showButton:!0,isLoggedIn2:!1,lastCall:0,isButtonVisible:!1,urlParam:null,imageUrls:[]}},created:function(){this.isLoggedIn2=!!localStorage.getItem("token"),this.urlParam=this.$route.params.url,console.log(this.urlParam),this.initializeImages()},mounted:function(){window.addEventListener("scroll",this.checkTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.checkTop)},methods:{initializeImages:function(){this.imageUrls.push(this.urlParam)},soucang:function(){var t=this;this.isButtonDisabled=!0;var e=this.$getToken(),n=new URLSearchParams;n.append("token",e),n.append("url",this.urlParam),b.a.post(this.$apiBaseUrl+"collect",n).then(function(e){console.log(e),0===e.data.code?t.showButton=!1:t.isButtonDisabled=!1}).catch(function(t){console.error("注册请求错误",t)}).finally(function(){t.isButtonDisabled=!1})},getmore:function(t){t<=10&&(t=10);for(var e=U()("img").last().attr("src"),n=e.substring(e.lastIndexOf("/")+1),s=n.match(/\d+/g).pop(),r=1;r<=t;r++){var a=s-0+r,i=String(a);if(s.length>String(a).length)for(;s.length>i.length;)i="0"+i;var o=new RegExp("(.*)"+s),l=n.replace(o,"$1"+i).replace(" ","%20"),c=e.replace(n,l);this.imageUrls.push(c)}},jump:function(t){var e=U()("img").last().attr("src"),n=e.substring(e.lastIndexOf("/")+1),s=n.match(/\d+/g).pop(),r=s-0+t,a=String(r);if(s.length>String(r).length)for(;s.length>a.length;)a="0"+a;var i=new RegExp("(.*)"+s),o=n.replace(i,"$1"+a).replace(" ","%20"),l=e.replace(n,o);this.imageUrls.push(l)},checkTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight,n=document.documentElement.scrollHeight;this.isButtonVisible=t>0;var s=Date.now();t+e+5>=n&&s-this.lastCall>1e3&&(this.getmore(10),this.lastCall=s)},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.isLoggedIn2&&t.showButton?n("button",{staticClass:"btn",attrs:{disabled:t.isButtonDisabled},on:{click:function(e){return t.soucang()}}},[t._v("收藏")]):t._e(),t._v(" "),n("div",{attrs:{id:"imgsdiv"}},t._l(t.imageUrls,function(t,e){return n("img",{key:e,attrs:{src:t,referrer:"no-referrer|origin|unsafe-url",onerror:"this.style.display='none'"}})}),0),t._v(" "),t.isButtonVisible?n("div",{staticClass:"bbutton",attrs:{id:"bbutton"},on:{click:t.scrollToTop}},[t._v("\n    ↑\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"loadmore"},[n("button",{staticClass:"btn",on:{click:function(e){return t.getmore(10)}}},[t._v("加载更多")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.getmore(100)}}},[t._v("加载100")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.jump(10)}}},[t._v("跳跃10")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.jump(100)}}},[t._v("跳跃100")])]),t._v(" "),n("error-dialog",{ref:"errorDialog"})],1)},staticRenderFns:[]};var P=n("VU/8")(y,I,!1,function(t){n("ex2J")},"data-v-6edf1fbf",null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},B=n("VU/8")(null,T,!1,null,null,null).exports,R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("div",{staticClass:"postlist"},[n("router-link",{attrs:{to:{name:"detail",params:{id:1}}}},[t._v("detail1")]),t._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:2}}}},[t._v("detail2")]),t._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:3}}}},[t._v("detail3")]),t._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:4}}}},[t._v("detail4")])],1)])},staticRenderFns:[]};var L=n("VU/8")({name:"List",data:function(){return{msg:"List页面"}}},R,!1,function(t){n("uHWP")},"data-v-8260786c",null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n    参数id: "+this._s(this.$route.params.id)+"\n  ")])])},staticRenderFns:[]};var M=n("VU/8")({name:"Detail",data:function(){return{msg:"detail页面"}}},V,!1,function(t){n("WCBf")},"data-v-33539c78",null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n      错误页面\n  ")])])},staticRenderFns:[]};var F=n("VU/8")({name:"My",data:function(){return{msg:"404Err页面"}}},j,!1,function(t){n("BaUe")},"data-v-01f6a3b6",null).exports,N=n("Gu7T"),S=n.n(N),A={components:{ErrorDialog:D},data:function(){return{lastCall:0,isButtonVisible:!1,paper:1,userPate:0,picUrls:[]}},mounted:function(){this.getmore(this.paper),1===this.paper&&this.getUserConf(),window.addEventListener("scroll",this.checkTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.checkTop)},methods:{getUserConf:function(){var t=this,e=this.$getToken(),n=new URLSearchParams;n.append("token",e),b.a.post(this.$apiBaseUrl+"getUserConf",n).then(function(e){0===e.data.code?(console.log("成功",e.data),t.userPate=parseInt(e.data.data.page)):t.$refs.errorDialog.showError(e.data.msg)}).catch(function(t){console.error("请求错误",t)})},paperAdd:function(t){this.paper+=t,this.userPate<=this.paper?this.$refs.errorDialog.showError("没有更多了!"):(console.log(this.userPate,this.paper),this.getmore(this.paper))},getmore:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return U.a.ajax({url:"https://ai.gmnsheng.cn/webh/web/imgs/pageIsWeb",method:"POST",data:{title:"",pageNum:e,pageSize:10,navigatePages:0}}).then(function(n){if(200!==n.code)return!1;var s=n.data.list.filter(function(t){return"重要通知"!==t.title}).map(function(t){return t.multiplefile});1===e&&s.splice(0,2);var r=[];s.forEach(function(t){r.push.apply(r,S()(t.split(",&~")))}),t.picUrls=[].concat(S()(t.picUrls),r)}).catch(function(t){return console.error("Error:",t),!1})},checkTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight,n=document.documentElement.scrollHeight;this.isButtonVisible=t>0;var s=Date.now();t+e+5>=n&&s-this.lastCall>1e3&&(this.paperAdd(1),this.lastCall=s)},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},t._l(t.picUrls,function(t){return n("img",{key:t,attrs:{src:t}})}),0),t._v(" "),t.isButtonVisible?n("div",{staticClass:"bbutton",attrs:{id:"bbutton"},on:{click:t.scrollToTop}},[t._v("\n    ↑\n  ")]):t._e(),t._v(" "),t.userPate>0?n("div",{staticClass:"loadmore"},[n("button",{staticClass:"btn",on:{click:function(e){return t.paperAdd(1)}}},[t._v("加一页")])]):t._e(),t._v(" "),n("error-dialog",{ref:"errorDialog"})],1)},staticRenderFns:[]};var q=n("VU/8")(A,H,!1,function(t){n("yAIV")},"data-v-fad70c40",null).exports,z={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},J=n("VU/8")(null,z,!1,null,null,null).exports,W=n("mvHQ"),O=n.n(W),X={components:{ErrorDialog:D},data:function(){return{isButtonDisabled:!1,credentials:{username:"",password:""},userInput:"",num1:Math.floor(10*Math.random()),num2:Math.floor(10*Math.random())}},computed:{captchaQuestion:function(){return this.num1+" + "+this.num2+" = ?"},captchaAnswer:function(){return this.num1+this.num2}},methods:{submitForm:function(){parseInt(this.userInput)===this.captchaAnswer?this.login():(this.$refs.errorDialog.showError("验证码错误，请重试！"),this.resetCaptcha())},resetCaptcha:function(){this.num1=Math.floor(10*Math.random()),this.num2=Math.floor(10*Math.random()),this.userInput=""},login:function(){var t=this;this.isButtonDisabled=!0;var e=new URLSearchParams;e.append("user_name",this.credentials.username),e.append("pwd",this.credentials.password),b.a.post(this.$apiBaseUrl+"login",e).then(function(e){if(0===e.data.code){console.log("登录成功",e.data);var n={data:e.data.data.token,expiry:(new Date).getTime()+864e5};localStorage.setItem("token",O()(n)),window.location.href="/"}else t.isButtonDisabled=!1,t.$refs.errorDialog.showError(e.data.msg),t.resetCaptcha()}).catch(function(t){console.error("登录请求错误",t)})}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("h1",[t._v("登录")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"username"}},[t._v("账号:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],attrs:{type:"text",id:"username",required:"",pattern:"[A-Za-z0-9]+",minlength:"2"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"password"}},[t._v("密码:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"password",id:"password",required:"",minlength:"1"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("p",[t._v("验证码: "+t._s(t.captchaQuestion))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入答案"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"submit",disabled:t.isButtonDisabled}},[t._v("登录")])]),t._v(" "),n("error-dialog",{ref:"errorDialog"})],1)},staticRenderFns:[]};var G=n("VU/8")(X,Q,!1,function(t){n("/khK")},"data-v-3456cead",null).exports,K={name:"CollectList",data:function(){return{kl:0,mhpicUrls:{},showContent:!1}},mounted:function(){this.getpicUrls()},watch:{kl:function(t){var e=(new Date).getHours();this.showContent=parseInt(t)===e}},methods:{getpicUrls:function(){var t=this,e=this.$getToken(),n=new URLSearchParams;n.append("token",e),b.a.post(this.$apiBaseUrl+"collectList",n).then(function(e){if(0===e.data.code){var n=e.data.data;console.log("成功",n),t.mhpicUrls=n}else t.$refs.errorDialog.showError(e.data.msg)}).catch(function(t){console.error("请求错误",t)})}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mhmain"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.kl,expression:"kl"}],attrs:{type:"number",id:"kl",required:"",min:"1",max:"50"},domProps:{value:t.kl},on:{input:function(e){e.target.composing||(t.kl=e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}]},t._l(t.mhpicUrls,function(e){return n("router-link",{key:e.url,attrs:{to:{name:"mh",params:{url:e.url}}}},[n("hr"),t._v(" "),n("p",{staticClass:"pic_id"},[t._v(t._s(e.id))]),t._v(" "),n("img",{staticClass:"mhitem",attrs:{src:e.url}})])}),1)])},staticRenderFns:[]};var Z=n("VU/8")(K,Y,!1,function(t){n("62/s")},"data-v-50ab6a93",null).exports,tt={components:{ErrorDialog:D},data:function(){return{isButtonDisabled:!1,credentials:{username:"",password:"",confirmPassword:""},userInput:"",num1:Math.floor(10*Math.random()),num2:Math.floor(10*Math.random())}},computed:{captchaQuestion:function(){return this.num1+" + "+this.num2+" = ?"},captchaAnswer:function(){return this.num1+this.num2}},methods:{resetCaptcha:function(){this.num1=Math.floor(10*Math.random()),this.num2=Math.floor(10*Math.random()),this.userInput=""},submitForm:function(){if(this.credentials.password!==this.credentials.confirmPassword)return this.$refs.errorDialog.showError("两次输入的密码不一致"),void this.resetCaptcha();parseInt(this.userInput)===this.captchaAnswer?this.register():(this.$refs.errorDialog.showError("验证码错误，请重试！"),this.resetCaptcha())},register:function(){var t=this;this.isButtonDisabled=!0;var e=new URLSearchParams;e.append("user_name",this.credentials.username),e.append("pwd",this.credentials.password),b.a.post(this.$apiBaseUrl+"register",e).then(function(e){if(0===e.data.code){console.log("成功",e.data);var n={data:e.data.data.token,expiry:(new Date).getTime()+864e5};localStorage.setItem("token",O()(n)),window.location.href="/"}else t.isButtonDisabled=!1,t.$refs.errorDialog.showError(e.data.msg),t.resetCaptcha()}).catch(function(t){console.error("注册请求错误",t)})}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("h1",[t._v("注册")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"username"}},[t._v("用户名:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],attrs:{type:"text",id:"username",required:"",minlength:"4"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"password"}},[t._v("密码:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"password",id:"password",required:"",minlength:"6"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"confirmPassword"}},[t._v("确认密码:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.confirmPassword,expression:"credentials.confirmPassword"}],attrs:{type:"password",id:"confirmPassword",required:"",minlength:"6"},domProps:{value:t.credentials.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.credentials,"confirmPassword",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("p",[t._v("验证码: "+t._s(t.captchaQuestion))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入答案"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"submit",disabled:t.isButtonDisabled}},[t._v("注册")])]),t._v(" "),n("error-dialog",{ref:"errorDialog"})],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("UqiP")},"data-v-565ea1a4",null).exports;s.default.use(l.a);var st=new l.a({routes:[{path:"/",component:d},{path:"/bizhi",name:"bizhi",component:q},{path:"/user",component:J,children:[{path:"login",component:G},{path:"collectList",name:"CollectList",component:Z},{path:"register",component:nt}]},{path:"/post",component:B,children:[{path:"/",component:L},{path:"detail",name:"detail",component:M}]},{path:"/my",component:v},{path:"/manhua",component:g,children:[{path:"/",name:"mhList",component:C},{path:"/mh",name:"mh",component:P}]},{path:"/about",component:p},{path:"*",component:F}]}),rt=n("zL8q"),at=n.n(rt);n("tvR6");s.default.component("error-dialog",D),s.default.use(at.a),s.default.config.productionTip=!1,s.default.prototype.$apiBaseUrl="http://jie.ueuo.com/api.php?act=",s.default.prototype.$getToken=function(){var t=localStorage.getItem("token");if(!t)return null;var e=JSON.parse(t),n=e.data,s=e.expiry;return(new Date).getTime()>=s?(localStorage.removeItem("token"),null):n},new s.default({el:"#app",router:st,components:{App:o},template:"<App/>"})},UqiP:function(t,e){},WCBf:function(t,e){},XuA3:function(t,e){},YRJM:function(t,e){},ex2J:function(t,e){},mXkJ:function(t,e){},tvR6:function(t,e){},uHWP:function(t,e){},yAIV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.15280df4cce9a5f59fdf.js.map