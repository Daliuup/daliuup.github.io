(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80013024"],{"12e7":function(t,e,o){"use strict";o("3662")},"19ca":function(t,e,o){},3662:function(t,e,o){},afe3:function(t,e,o){"use strict";o("19ca")},dded:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("br"),o("div",{staticStyle:{width:"200px",height:"200px","background-color":"blue"},on:{mouseenter:t.onMouseEnter}},[o("div",{staticStyle:{width:"100px",height:"100px","background-color":"red"},on:{click:t.innerBoxClicK}})]),o("button",[t._v("button1")]),o("button",{staticStyle:{float:"right"}},[t._v("button2")]),o("h2",[t._v("哈哈哈")]),o("h2",[t._v("哈哈哈1")]),o("h2",[t._v("哈哈哈2")]),o("h2",[t._v("哈哈哈3")]),o("h2",[t._v("哈哈哈4")]),o("h2",[t._v("哈哈哈5")]),o("h2",[t._v("哈哈哈6")]),o("h2",[t._v("哈哈哈7")]),o("h2",[t._v("哈哈哈8")]),o("h2",[t._v("哈哈哈9")]),o("h2",[t._v("哈哈哈10")]),o("h2",[t._v("哈哈哈11")]),o("h2",[t._v("哈哈哈12")]),o("h2",[t._v("哈哈哈13")]),o("h2",[t._v("哈哈哈14")]),o("h2",[t._v("哈哈哈15")]),o("h2",[t._v("哈哈哈16")]),o("h2",[t._v("哈哈哈17")]),o("h2",[t._v("哈哈哈18")]),o("h2",[t._v("哈哈哈19")]),o("h2",[t._v("哈哈哈20")]),o("h2",[t._v("哈哈哈21")]),o("h2",[t._v("哈哈哈22")]),o("h2",[t._v("哈哈哈23")]),o("h2",[t._v("哈哈哈24")]),o("h2",[t._v("哈哈哈25")]),o("h2",[t._v("哈哈哈26")]),o("h2",[t._v("哈哈哈27")]),o("h2",[t._v("哈哈哈28")]),o("h2",[t._v("哈哈哈29")]),o("h2",[t._v("哈哈哈30")]),o("h2",[t._v("哈哈哈31")]),o("h2",[t._v("哈哈哈32")]),o("h2",[t._v("哈哈哈33")]),o("h2",[t._v("哈哈哈34")]),o("h2",[t._v("哈哈哈35")]),o("h2",[t._v("哈哈哈36")]),o("h2",[t._v("哈哈哈37")]),o("h2",[t._v("哈哈哈38")]),o("h2",[t._v("哈哈哈39")]),o("h2",[t._v("哈哈哈40")]),o("h2",[t._v("哈哈哈41")]),o("h2",[t._v("哈哈哈42")]),o("h2",[t._v("哈哈哈43")]),o("h2",[t._v("哈哈哈44")]),o("h2",[t._v("哈哈哈45")]),o("h2",[t._v("哈哈哈46")]),o("h2",[t._v("哈哈哈47")]),o("h2",[t._v("哈哈哈48")]),o("h2",[t._v("哈哈哈49")]),o("h2",[t._v("哈哈哈50")]),o("hr"),o("move-box",{staticClass:"move-box"},[o("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n      headerDom\n      "),o("br"),t._v("\n      headerDom\n    ")]),o("div",{attrs:{slot:"default"},slot:"default"},[o("h2",[t._v("内容内容内容内容")]),o("h2",[t._v("内容内容内容")]),o("h2",[t._v("内容")]),o("h2",[t._v("内容内容内容")]),o("h2",[t._v("内容")]),o("h2",[t._v("内容内容内容内容内容")])]),o("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("底部步")])]),o("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"wrapper",staticClass:"drag-bar-wrapper"},[o("div",{ref:"header",staticClass:"drag-bar-header"},[t._t("header")],2),o("div",{staticClass:"drag-bar-content"},[t._t("default")],2),o("div",{staticClass:"drag-bar-footer"},[t._t("footer")],2)])},h=[],s={name:"MoveBox",data:function(){return{wrapperDom:null,headerDom:null,disX:0,disY:0,maxLeft:0,maxTop:0,ml:0,mr:0,mlr:0,mt:0,mb:0,mtb:0}},mounted:function(){var t=this;this.initDrag(),window.onresize=function(){return function(){var e=t.wrapperDom.getBoundingClientRect(),o=window.innerWidth-e.right-t.mr;o<0&&window.innerWidth>e.width+t.mlr&&(t.wrapperDom.style.left=e.left-t.ml+o+"px");var i=window.innerHeight-e.bottom-t.mb;i<0&&window.innerHeight>e.height+t.mtb&&(t.wrapperDom.style.top=e.top-t.mt+i+"px")}()}},methods:{initDrag:function(){this.wrapperDom=this.$refs.wrapper,this.headerDom=this.$refs.header;var t=getComputedStyle(this.wrapperDom,!1);this.ml=parseFloat(t.marginLeft),this.mr=parseFloat(t.marginRight),this.mlr=this.ml+this.mr,this.mt=parseFloat(t.marginTop),this.mb=parseFloat(t.marginBottom),this.mtb=this.mt+this.mb,this.headerDom.addEventListener("mousedown",this.onMousedown,!1)},onMousedown:function(t){var e=this.wrapperDom.getBoundingClientRect();this.disX=t.clientX-e.left,this.disY=t.clientY-e.top,this.maxLeft=window.innerWidth-e.width-this.mlr,this.maxTop=window.innerHeight-e.height-this.mtb,document.addEventListener("mousemove",this.onMousemove,!1),document.addEventListener("mouseup",this.onMouseup,!1),document.body.style.userSelect="none"},onMousemove:function(t){this.headerDom.style.cursor="move",document.body.style.cursor="move";var e=t.clientX-this.disX-this.ml,o=t.clientY-this.disY-this.mt;e<0?e=0:e>this.maxLeft&&(e=this.maxLeft),o<0?o=0:o>this.maxTop&&(o=this.maxTop),this.wrapperDom.style.left=e+"px",this.wrapperDom.style.top=o+"px"},onMouseup:function(){this.headerDom.style.cursor="default",document.body.style.cursor="default",document.removeEventListener("mousemove",this.onMousemove,!1),document.removeEventListener("mouseup",this.onMouseup,!1),document.body.style.userSelect="auto"}}},a=s,l=(o("afe3"),o("2877")),v=Object(l["a"])(a,r,h,!1,null,"536f465a",null),d=v.exports,m={name:"page001",components:{MoveBox:d},data:function(){return{objs:[{id:"001",label:"label001"},{id:"002",label:"label002"},{id:"003",label:"label003"},{id:"004",label:"label004"},{id:"005",label:"label005"},{id:"006",label:"label006"}],checked:[]}},methods:{onMouseEnter:function(){console.log("onMouseEnter")},innerBoxClicK:function(){console.log("innerBoxClicK")}}},u=m,c=(o("12e7"),Object(l["a"])(u,i,n,!1,null,"33848cd2",null));e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-80013024.14696a5d.js.map