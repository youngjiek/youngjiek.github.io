webpackJsonp([1],{"75l9":function(t,e){t.exports={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},CwZS:function(t,e){},Hjqg:function(t,e){},ITo8:function(t,e){},JEGP:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),s={name:"Navbar",data:function(){return{isLoggedIn2:!1}},created:function(){console.log("导航token",localStorage.getItem("token")),this.isLoggedIn2=!!localStorage.getItem("token")}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navs"},[e("router-link",{attrs:{to:"/"}},[this._v("首页")]),this._v(" "),this.isLoggedIn2?e("router-link",{attrs:{to:"/bizhi"}},[this._v("壁纸")]):this._e(),this._v(" "),e("router-link",{attrs:{to:"/manhua"}},[this._v("漫画")])],1)},staticRenderFns:[]};var i={name:"App",components:{Navbar:n("VU/8")(s,a,!1,function(t){n("aJnf")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("keep-live",[e("router-view")],1)],1)},staticRenderFns:[]};var l=n("VU/8")(i,o,!1,function(t){n("lddl")},null,null).exports,c=n("/ocq"),u={name:"HelloWorld",data:function(){return{msg:"默认首页",isLoggedIn:!1}},created:function(){this.isLoggedIn=!!localStorage.getItem("token")},methods:{logout:function(){localStorage.removeItem("token"),window.location.href="/"}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.isLoggedIn?n("div",{staticClass:"user_bar"},[n("button",{staticClass:"btn",on:{click:function(e){return t.logout()}}},[t._v("退出")])]):n("div",{staticClass:"user_bar"},[n("router-link",{staticClass:"btn",attrs:{to:"/user/login"}},[t._v("登录")]),t._v(" "),n("router-link",{staticClass:"btn",attrs:{to:"/user/register"}},[t._v("注册")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tuijian"},[e("div",{staticClass:"tj_item"},[e("div",{staticClass:"item_div"})]),this._v(" "),e("div",{staticClass:"tj_item"},[e("div",{staticClass:"item_div"})]),this._v(" "),e("div",{staticClass:"tj_item"},[e("div",{staticClass:"item_div"})])])}]};var m=n("VU/8")(u,d,!1,function(t){n("trTc")},"data-v-0879ae10",null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n      about\n  ")])])},staticRenderFns:[]};var h=n("VU/8")({name:"About",data:function(){return{msg:"about页面"}}},p,!1,function(t){n("lNIT")},"data-v-6c5962c1",null).exports,v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n      my\n  ")])])},staticRenderFns:[]};var f=n("VU/8")({name:"My",data:function(){return{msg:"My页面"}}},v,!1,function(t){n("zDmf")},"data-v-4d513d15",null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},_=n("VU/8")(null,g,!1,null,null,null).exports,b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("div",{staticClass:"postlist"},[n("router-link",{attrs:{to:{name:"mh",params:{url:"https://img.alicdn.com/imgextra/i4/O1CN01melXau1il47065d8j_!!6000000004452-2-tps-887-200.png"}}}},[t._v("detail1")]),t._v(" "),n("router-link",{attrs:{target:"_blank",to:{name:"mh",params:{url:2}}}},[t._v("detail2")]),t._v(" "),n("router-link",{attrs:{to:{name:"mh",params:{url:3}}}},[t._v("detail3")]),t._v(" "),n("router-link",{attrs:{to:{name:"mh",params:{url:4}}}},[t._v("detail4")])],1)])},staticRenderFns:[]};var w=n("VU/8")({name:"List",data:function(){return{msg:"List页面"}}},b,!1,function(t){n("O6O9")},"data-v-00dfcdb8",null).exports,k=n("7t+N"),C=n.n(k),x={name:"Detail",data:function(){return{isButtonVisible:!1,urlParam:null}},created:function(){this.urlParam=this.$route.params.url,console.log(this.urlParam)},mounted:function(){window.addEventListener("scroll",this.checkTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.checkTop)},methods:{getmore:function(t){t<=10&&(t=10);for(var e=C()("img").last().attr("src"),n=e.substring(e.lastIndexOf("/")+1),r=n.match(/\d+/g).pop(),s=1;s<=t;s++){var a=r-0+s,i=String(a);if(r.length>String(a).length)for(;r.length>i.length;)i="0"+i;var o=new RegExp("(.*)"+r),l=n.replace(o,"$1"+i).replace(" ","%20"),c=e.replace(n,l);C()("#imgsdiv img").last().after('<img referrer="no-referrer|origin|unsafe-url" src="'+c+'" >')}},jump:function(t){var e=C()("img").last().attr("src"),n=e.substring(e.lastIndexOf("/")+1),r=n.match(/\d+/g).pop(),s=r-0+t,a=String(s);if(r.length>String(s).length)for(;r.length>a.length;)a="0"+a;var i=new RegExp("(.*)"+r),o=n.replace(i,"$1"+a).replace(" ","%20"),l=e.replace(n,o);C()("#imgsdiv img").last().after('<img referrer="no-referrer|origin|unsafe-url" src="'+l+'" alt="">')},checkTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight,n=document.documentElement.scrollHeight;this.isButtonVisible=t>0,t+e+5>=n&&this.getmore(10)},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{attrs:{id:"imgsdiv"}},[n("img",{attrs:{referrer:"no-referrer|origin|unsafe-url",src:t.urlParam}})]),t._v(" "),t.isButtonVisible?n("div",{staticClass:"bbutton",attrs:{id:"bbutton"},on:{click:t.scrollToTop}},[t._v("\n    ↑\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"loadmore"},[n("button",{staticClass:"btn",on:{click:function(e){return t.getmore(10)}}},[t._v("加载更多")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.getmore(100)}}},[t._v("加载100")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.jump(10)}}},[t._v("跳跃10")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.jump(50)}}},[t._v("跳跃50")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.jump(100)}}},[t._v("跳跃100")])])])},staticRenderFns:[]};var I=n("VU/8")(x,E,!1,function(t){n("OO7A")},"data-v-fd30acc8",null).exports,$={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},j=n("VU/8")(null,$,!1,null,null,null).exports,P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("div",{staticClass:"postlist"},[n("router-link",{attrs:{to:{name:"detail",params:{id:1}}}},[t._v("detail1")]),t._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:2}}}},[t._v("detail2")]),t._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:3}}}},[t._v("detail3")]),t._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:4}}}},[t._v("detail4")])],1)])},staticRenderFns:[]};var T=n("VU/8")({name:"List",data:function(){return{msg:"List页面"}}},P,!1,function(t){n("Hjqg")},"data-v-1dfe3a70",null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n    参数id: "+this._s(this.$route.params.id)+"\n  ")])])},staticRenderFns:[]};var y=n("VU/8")({name:"Detail",data:function(){return{msg:"detail页面"}}},U,!1,function(t){n("oMG9")},"data-v-3158f190",null).exports,M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"navs"},[this._v("\n      错误页面\n  ")])])},staticRenderFns:[]};var V=n("VU/8")({name:"My",data:function(){return{msg:"404Err页面"}}},M,!1,function(t){n("ITo8")},"data-v-2bf6f6d8",null).exports,D=n("Gu7T"),R=n.n(D),F=n("mtWM"),S=n.n(F),L={props:{errorMessage:{type:String,default:""}},data:function(){return{dialogVisible:!1,internalErrorMessage:""}},methods:{showError:function(t){this.internalErrorMessage=t,this.dialogVisible=!0},handleDialogClose:function(){this.dialogVisible=!1}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"错误信息",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},close:t.handleDialogClose}},[n("p",[t._v(t._s(t.internalErrorMessage))])])},staticRenderFns:[]},A=n("VU/8")(L,N,!1,null,null,null).exports,O={components:{ErrorDialog:A},data:function(){return{isButtonVisible:!1,paper:1,userPate:0,picUrls:[]}},mounted:function(){this.getmore(this.paper),1===this.paper&&this.getUserConf(),window.addEventListener("scroll",this.checkTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.checkTop)},methods:{getUserConf:function(){var t=this,e=localStorage.getItem("token"),n=new URLSearchParams;n.append("token",e),S.a.post(this.$apiBaseUrl+"getUserConf",n).then(function(e){0===e.data.code?(console.log("成功",e.data),t.userPate=parseInt(e.data.data.page)):t.$refs.errorDialog.showError(e.data.msg)}).catch(function(t){console.error("请求错误",t)})},paperAdd:function(t){this.paper+=t,this.userPate<=this.paper?this.$refs.errorDialog.showError("没有更多了!"):(console.log(this.userPate,this.paper),this.getmore(this.paper))},getmore:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return C.a.ajax({url:"https://ai.gmnsheng.cn/webh/web/imgs/pageIsWeb",method:"POST",data:{title:"",pageNum:e,pageSize:10,navigatePages:0}}).then(function(n){if(200!==n.code)return!1;var r=n.data.list.filter(function(t){return"重要通知"!==t.title}).map(function(t){return t.multiplefile});1===e&&r.splice(0,2);var s=[];r.forEach(function(t){s.push.apply(s,R()(t.split(",&~")))}),t.picUrls=[].concat(R()(t.picUrls),s)}).catch(function(t){return console.error("Error:",t),!1})},checkTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight,n=document.documentElement.scrollHeight;this.isButtonVisible=t>0,t+e+5>=n&&this.paperAdd(1)},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},t._l(t.picUrls,function(t){return n("img",{key:t,attrs:{src:t}})}),0),t._v(" "),t.isButtonVisible?n("div",{staticClass:"bbutton",attrs:{id:"bbutton"},on:{click:t.scrollToTop}},[t._v("\n    ↑\n  ")]):t._e(),t._v(" "),t.userPate>0?n("div",{staticClass:"loadmore"},[n("button",{staticClass:"btn",on:{click:function(e){return t.paperAdd(1)}}},[t._v("加一页")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.paperAdd(10)}}},[t._v("跳10页")]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){return t.paperAdd(50)}}},[t._v("跳50页")])]):t._e(),t._v(" "),n("error-dialog",{ref:"errorDialog"})],1)},staticRenderFns:[]};var H=n("VU/8")(O,B,!1,function(t){n("CwZS")},null,null).exports,q={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},z=n("VU/8")(null,q,!1,null,null,null).exports,G={components:{ErrorDialog:A},data:function(){return{credentials:{username:"",password:""},userInput:"",num1:Math.floor(10*Math.random()),num2:Math.floor(10*Math.random())}},computed:{captchaQuestion:function(){return this.num1+" + "+this.num2+" = ?"},captchaAnswer:function(){return this.num1+this.num2}},methods:{submitForm:function(){parseInt(this.userInput)===this.captchaAnswer?this.login():(this.$refs.errorDialog.showError("验证码错误，请重试！"),this.resetCaptcha())},resetCaptcha:function(){this.num1=Math.floor(10*Math.random()),this.num2=Math.floor(10*Math.random()),this.userInput=""},login:function(){var t=this,e=new URLSearchParams;e.append("user_name",this.credentials.username),e.append("pwd",this.credentials.password),S.a.post(this.$apiBaseUrl+"login",e).then(function(e){if(0===e.data.code){console.log("登录成功",e.data);var n=e.data.data.token;localStorage.setItem("token",n),window.location.href="/"}else t.$refs.errorDialog.showError(e.data.msg),t.resetCaptcha()}).catch(function(t){console.error("登录请求错误",t)})}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("h1",[t._v("登录")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"username"}},[t._v("账号:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],attrs:{type:"text",id:"username",required:"",pattern:"[A-Za-z0-9]+",minlength:"2"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"password"}},[t._v("密码:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"password",id:"password",required:"",minlength:"1"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("p",[t._v("验证码: "+t._s(t.captchaQuestion))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入答案"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),n("error-dialog",{ref:"errorDialog"})],1)},staticRenderFns:[]};var Q=n("VU/8")(G,J,!1,function(t){n("S7lj")},"data-v-4d805ce3",null).exports,W={components:{ErrorDialog:A},data:function(){return{credentials:{username:"",password:"",confirmPassword:""},userInput:"",num1:Math.floor(10*Math.random()),num2:Math.floor(10*Math.random())}},computed:{captchaQuestion:function(){return this.num1+" + "+this.num2+" = ?"},captchaAnswer:function(){return this.num1+this.num2}},methods:{resetCaptcha:function(){this.num1=Math.floor(10*Math.random()),this.num2=Math.floor(10*Math.random()),this.userInput=""},submitForm:function(){if(this.credentials.password!==this.credentials.confirmPassword)return this.$refs.errorDialog.showError("两次输入的密码不一致"),void this.resetCaptcha();parseInt(this.userInput)===this.captchaAnswer?this.register():(this.$refs.errorDialog.showError("验证码错误，请重试！"),this.resetCaptcha())},register:function(){var t=this,e=new URLSearchParams;e.append("user_name",this.credentials.username),e.append("pwd",this.credentials.password),S.a.post(this.$apiBaseUrl+"register",e).then(function(e){if(0===e.data.code){console.log("成功",e.data);var n=e.data.data.token;localStorage.setItem("token",n),window.location.href="/"}else t.$refs.errorDialog.showError(e.data.msg),t.resetCaptcha()}).catch(function(t){console.error("注册请求错误",t)})}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("h1",[t._v("注册")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"username"}},[t._v("用户名:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],attrs:{type:"text",id:"username",required:"",minlength:"4"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"password"}},[t._v("密码:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"password",id:"password",required:"",minlength:"6"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"confirmPassword"}},[t._v("确认密码:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.confirmPassword,expression:"credentials.confirmPassword"}],attrs:{type:"password",id:"confirmPassword",required:"",minlength:"6"},domProps:{value:t.credentials.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.credentials,"confirmPassword",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input_row"},[n("p",[t._v("验证码: "+t._s(t.captchaQuestion))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入答案"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("注册")])]),t._v(" "),n("error-dialog",{ref:"errorDialog"})],1)},staticRenderFns:[]};var X=n("VU/8")(W,Z,!1,function(t){n("JEGP")},"data-v-d0ad9ad8",null).exports;r.default.use(c.a);var K=new c.a({routes:[{path:"/",component:m},{path:"/bizhi",component:H},{path:"/user",component:z,children:[{path:"login",component:Q},{path:"register",component:X}]},{path:"/post",component:j,children:[{path:"/",component:T},{path:"detail",name:"detail",component:y}]},{path:"/my",component:f},{path:"/manhua",component:_,children:[{path:"/",component:w},{path:"/mh",name:"mh",component:I}]},{path:"/about",component:h},{path:"*",component:V}]}),Y=n("zL8q"),tt=n.n(Y);n("tvR6");r.default.component("error-dialog",A),r.default.use(tt.a),r.default.config.productionTip=!1,r.default.prototype.$apiBaseUrl="http://jie.ueuo.com/api.php?act=",new r.default({el:"#app",router:K,components:{App:l},template:"<App/>"})},O6O9:function(t,e){},OO7A:function(t,e){},S7lj:function(t,e){},aJnf:function(t,e){},lNIT:function(t,e){},lddl:function(t,e){},oMG9:function(t,e){},trTc:function(t,e){},tvR6:function(t,e){},zDmf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12b47b3894588653ef76.js.map