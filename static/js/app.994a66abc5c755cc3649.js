webpackJsonp([0],{"52Wd":function(t,n){},"7sfj":function(t,n){},Hjqg:function(t,n){},ITo8:function(t,n){},LeVu:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"navs"},[e("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),e("router-link",{attrs:{to:"/post"}},[t._v("列表页")]),t._v(" "),e("router-link",{attrs:{to:"/my"}},[t._v("个人中心")]),t._v(" "),e("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},a,!1,function(t){e("LeVu")},null,null).exports,r=e("/ocq"),l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var o=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"默认首页"}}},l,!1,function(t){e("52Wd")},"data-v-5b46f090",null).exports,c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[this._v(this._s(this.msg))]),this._v(" "),n("div",{staticClass:"navs"},[this._v("\n      about\n  ")])])},staticRenderFns:[]};var u=e("VU/8")({name:"About",data:function(){return{msg:"about页面"}}},c,!1,function(t){e("lNIT")},"data-v-6c5962c1",null).exports,v={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[this._v(this._s(this.msg))]),this._v(" "),n("div",{staticClass:"navs"},[this._v("\n      my\n  ")])])},staticRenderFns:[]};var d=e("VU/8")({name:"My",data:function(){return{msg:"My页面"}}},v,!1,function(t){e("zDmf")},"data-v-4d513d15",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},m=e("VU/8")(null,h,!1,null,null,null).exports,_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"postlist"},[e("router-link",{attrs:{to:{name:"m",params:{id:1}}}},[t._v("detail1")]),t._v(" "),e("router-link",{attrs:{to:{name:"m",params:{id:2}}}},[t._v("detail2")]),t._v(" "),e("router-link",{attrs:{to:{name:"m",params:{id:3}}}},[t._v("detail3")]),t._v(" "),e("router-link",{attrs:{to:{name:"m",params:{id:4}}}},[t._v("detail4")])],1)])},staticRenderFns:[]};var p=e("VU/8")({name:"List",data:function(){return{msg:"List页面"}}},_,!1,function(t){e("7sfj")},"data-v-06bc1dec",null).exports,f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[this._v(this._s(this.msg))]),this._v(" "),n("div",{staticClass:"navs"},[this._v("\n    参数id: "+this._s(this.$route.params.id)+"\n  ")])])},staticRenderFns:[]};var g=e("VU/8")({name:"Detail",data:function(){return{msg:"detail页面"}}},f,!1,function(t){e("NVSj")},"data-v-483e60fd",null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},V=e("VU/8")(null,C,!1,null,null,null).exports,k={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"postlist"},[e("router-link",{attrs:{to:{name:"detail",params:{id:1}}}},[t._v("detail1")]),t._v(" "),e("router-link",{attrs:{to:{name:"detail",params:{id:2}}}},[t._v("detail2")]),t._v(" "),e("router-link",{attrs:{to:{name:"detail",params:{id:3}}}},[t._v("detail3")]),t._v(" "),e("router-link",{attrs:{to:{name:"detail",params:{id:4}}}},[t._v("detail4")])],1)])},staticRenderFns:[]};var $=e("VU/8")({name:"List",data:function(){return{msg:"List页面"}}},k,!1,function(t){e("Hjqg")},"data-v-1dfe3a70",null).exports,E={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[this._v(this._s(this.msg))]),this._v(" "),n("div",{staticClass:"navs"},[this._v("\n    参数id: "+this._s(this.$route.params.id)+"\n  ")])])},staticRenderFns:[]};var x=e("VU/8")({name:"Detail",data:function(){return{msg:"detail页面"}}},E,!1,function(t){e("oMG9")},"data-v-3158f190",null).exports,F={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[this._v(this._s(this.msg))]),this._v(" "),n("div",{staticClass:"navs"},[this._v("\n      错误页面\n  ")])])},staticRenderFns:[]};var R=e("VU/8")({name:"My",data:function(){return{msg:"404Err页面"}}},F,!1,function(t){e("ITo8")},"data-v-2bf6f6d8",null).exports;s.a.use(r.a);var U=new r.a({routes:[{path:"/",component:o},{path:"/post",component:V,children:[{path:"/",component:$},{path:"detail",name:"detail",component:x}]},{path:"/my",component:d},{path:"/mh",component:m,children:[{path:"/",component:p},{path:"m",name:"m",component:g}]},{path:"/about",component:u},{path:"*",component:R}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:U,components:{App:i},template:"<App/>"})},NVSj:function(t,n){},lNIT:function(t,n){},oMG9:function(t,n){},zDmf:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.994a66abc5c755cc3649.js.map