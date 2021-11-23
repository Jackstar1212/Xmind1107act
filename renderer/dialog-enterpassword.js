(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[7920],{60524:(t,e,s)=>{"use strict";var r=s(95318);Object.defineProperty(e,"X",{value:!0}),e.Z=void 0;var o=r(s(71191)),i=s(99492),n=r(s(24678)),a={mixins:[r(s(7322)).default],data:function(){return{fileName:"",hint:"",passwordModel:"",errorCount:0,text:""}},computed:{disabled(){return!this.passwordModel},showHint(){return this.errorCount>2?this.hint:""},touchBarItems(){return[{type:"space",size:"flexible"},{type:"button",label:this.$T("Cancel"),click:"cancel"},{type:"button",label:this.$T("OK"),backgroundColor:"primary",click:"confirm"},{type:"space",size:"flexible"}]}},mounted(){const t=o.default.parse(window.location.search.slice(1));this.fileName=t.filename||"",this.hint=t.hint||"",this.errorCount=parseInt(t.errEncryptCount)||0,this.text="merge"===t.type?this.$T("Enter the password to merge this file"):this.$T("Enter the password to open this file")},methods:{confirm(){this.disabled||this.$safeRun((()=>{n.default.fetch((0,i.WINDOW_SUBMIT_RESULT)(window.id),{password:this.passwordModel}).then((()=>window.close()))}))},cancel(){this.$safeRun((()=>{n.default.fetch((0,i.WINDOW_SUBMIT_RESULT)(window.id),{password:null}).then((()=>window.close()))}))}}};e.Z=a},7322:(t,e,s)=>{"use strict";var r=s(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(s(59713)),i=s(48932),n=s(99492),a=s(36414),u=r(s(24678));function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){(0,o.default)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={computed:{},watch:{touchBarItems(t){this.updateTouchBarItems(t)}},methods:{updateTouchBarItems(t){const e=t=>{const e=t.click;let s=this._touchBarRoutes[e];return s||(s={method:e,endpoint:(0,n.WINDOW_CALLBACK)(window.id,(0,a.hyphenate)(e))},this._touchBarRoutes[e]=s),s.unroute||(s.unroute=u.default.route(s.endpoint,this[e])),Object.assign({},t,{click:s.endpoint})};t=(t||this.touchBarItems||[]).map((t=>("button"!==t.type||"string"!=typeof t.click||i.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?"buttons"===t.type&&(t=l(l({},t),{},{buttons:t.buttons.map((t=>"string"!=typeof t.click||i.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?t:e(t)))})):t=e(t),t))),this.$store.commit("window/updateTouchBarItems",{items:t})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:t})=>t&&t())),this._touchBarRoutes={}}};e.default=d},58052:(t,e,s)=>{"use strict";var r=s(95318),o=r(s(2872)),i=r(s(29565));(0,o.default)(i.default,{name:"dialog-enterpassword"})},29565:(t,e,s)=>{"use strict";s.r(e),s.d(e,{__esModule:()=>r.X,default:()=>o});var r=s(60524);const o=(0,s(62236).Z)(r.Z,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-window uk-window-dialog",attrs:{id:"app"}},[s("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating"},[s("window-control-button-group")],1),t._v(" "),s("div",{staticClass:"uk-window-body uk-padding"},[s("h1",[t._v(t._s(t.text))]),t._v(" "),s("p",[t._v(t._s(t.$T("File name:")+" "+t.fileName))]),t._v(" "),s("form",{staticClass:"uk-form-stacked uk-margin-large-top"},[s("div",{staticClass:"uk-margin"},[s("label",{staticClass:"uk-form-label"},[t._v(t._s(t.$T("Password:")))]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordModel,expression:"passwordModel"}],staticClass:"uk-input",attrs:{type:"password",autofocus:""},domProps:{value:t.passwordModel},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.confirm(e)},input:function(e){e.target.composing||(t.passwordModel=e.target.value)}}})])])]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.showHint&&t.errorCount,expression:"!showHint && errorCount"}],staticClass:"uk-text-danger uk-margin-remove"},[t._v("\n      "+t._s(t.$T("The password is not correct. Please try again."))+"\n    ")]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.showHint,expression:"showHint"}],staticClass:"uk-text-muted uk-margin-remove"},[t._v("\n      "+t._s(t.$T("Password Hint:")+" "+t.showHint)+"\n    ")])]),t._v(" "),s("div",{staticClass:"uk-window-button-bar"},[s("div",{staticClass:"uk-button-group"},[s("button",{staticClass:"uk-button uk-button-primary",attrs:{disabled:t.disabled},on:{click:t.confirm}},[t._v("\n        "+t._s(t.$T("OK"))+"\n      ")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-default",on:{click:t.cancel}},[t._v("\n        "+t._s(t.$T("Cancel"))+"\n      ")])])])])}),[],!1,null,null,null).exports},76417:t=>{"use strict";t.exports=require("crypto")},58933:t=>{"use strict";t.exports=require("electron")},28614:t=>{"use strict";t.exports=require("events")},35747:t=>{"use strict";t.exports=require("fs")},12087:t=>{"use strict";t.exports=require("os")},85622:t=>{"use strict";t.exports=require("path")},87525:t=>{"use strict";t.exports=require("posthtml")},71191:t=>{"use strict";t.exports=require("querystring")},31669:t=>{"use strict";t.exports=require("util")}},t=>{"use strict";t.O(0,[8592,5586,4736,2872],(()=>{return e=58052,t(t.s=e);var e}));var e=t.O();module.exports=e}]);