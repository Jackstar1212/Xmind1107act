(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[7726],{6324:(t,s,e)=>{"use strict";var o=e(95318);Object.defineProperty(s,"X",{value:!0}),s.Z=void 0;var r=o(e(71191)),a=e(48932),i=e(99492),n=o(e(24678)),d=o(e(7322));const u=a.WINDOW_SETTINGS["dialog-setpassword"],l=r.default.parse(window.location.search.slice(1)),c=/^[a-zA-Z0-9_!\-()?[\]#$^&*+=`~ ]{1,128}$/;var w={mixins:[d.default],data:()=>({oldPassword:l.oldPassword,confirmOldPassword:"",newPassword:"",confirmNewPassword:"",passwordHint:l.passwordHint,newPasswordHint:"",newPasswordConfirmed:!0}),computed:{canSetPassword(){return""!==this.newPassword&&this.newPasswordConfirmed&&(!this.oldPassword||this.oldPasswordConfirmed)&&this.validPassword},canRemovePassword(){return""!==this.oldPassword&&this.oldPasswordConfirmed},oldPasswordConfirmed(){return this.oldPassword===this.confirmOldPassword},contentDefaultHeight(){let t=u.height;return this.oldPassword&&(t+=61),t},touchBarItems(){return[this.oldPassword?{type:"button",label:this.$T("Remove"),click:"removePassword"}:null,{type:"space",size:"flexible"},{type:"button",label:this.$T("Cancel"),click:"close"},this.canSetPassword?{type:"button",label:this.$T("Set"),click:"submitForm"}:null,{type:"space",size:"flexible"}].filter(Boolean)},validPassword(){return this.newPassword&&c.test(this.newPassword)},errorHint(){return this.validPassword||!this.newPassword?"":this.$T("Your password contains invalid characters.")}},created(){this.newPasswordHint=this.passwordHint},mounted(){this.shrinkDialog()},methods:{checkNewPasswordConfirm(){this.newPassword===this.confirmNewPassword?this.newPasswordConfirmed=!0:this.newPasswordConfirmed=!1},shrinkDialog(){window.resizeTo(u.width,this.contentDefaultHeight)},cancel:function(){window.close()},submitForm(t){t&&t.preventDefault(),this.newPassword&&this.newPasswordConfirmed&&(!this.oldPassword||this.oldPasswordConfirmed)&&this.validPassword&&this.$safeRun((async()=>{await n.default.fetch((0,i.WINDOW_SUBMIT_RESULT)(window.id),{action:"set",newPassword:this.newPassword,newPasswordHint:this.newPasswordHint.slice(0,45)}),setTimeout((()=>{window.close()}),0)}))},removePassword:function(){this.$safeRun((async()=>{await n.default.fetch((0,i.WINDOW_SUBMIT_RESULT)(window.id),{action:"remove"}),setTimeout((()=>{window.close()}),0)}))}}};s.Z=w},7322:(t,s,e)=>{"use strict";var o=e(95318);Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=o(e(59713)),a=e(48932),i=e(99492),n=e(36414),d=o(e(24678));function u(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);s&&(o=o.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?u(Object(e),!0).forEach((function(s){(0,r.default)(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var c={computed:{},watch:{touchBarItems(t){this.updateTouchBarItems(t)}},methods:{updateTouchBarItems(t){const s=t=>{const s=t.click;let e=this._touchBarRoutes[s];return e||(e={method:s,endpoint:(0,i.WINDOW_CALLBACK)(window.id,(0,n.hyphenate)(s))},this._touchBarRoutes[s]=e),e.unroute||(e.unroute=d.default.route(e.endpoint,this[s])),Object.assign({},t,{click:e.endpoint})};t=(t||this.touchBarItems||[]).map((t=>("button"!==t.type||"string"!=typeof t.click||a.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?"buttons"===t.type&&(t=l(l({},t),{},{buttons:t.buttons.map((t=>"string"!=typeof t.click||a.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?t:s(t)))})):t=s(t),t))),this.$store.commit("window/updateTouchBarItems",{items:t})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:t})=>t&&t())),this._touchBarRoutes={}}};s.default=c},55446:(t,s,e)=>{"use strict";var o=e(95318),r=o(e(2872)),a=o(e(30331));(0,r.default)(a.default,{name:"dialog-setpassword"})},30331:(t,s,e)=>{"use strict";e.r(s),e.d(s,{__esModule:()=>o.X,default:()=>r});var o=e(6324);const r=(0,e(62236).Z)(o.Z,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"uk-window uk-window-dialog"},[e("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating"},[e("window-control-button-group")],1),t._v(" "),e("div",{staticClass:"uk-window-body uk-margin-large-left uk-margin-xlarge-top uk-margin-large-right uk-margin-large-bottom uk-overflow-hidden"},[e("h1",{staticClass:"uk-margin-small-bottom"},[t._v("\n      "+t._s(t.$T("Set a password to protect this file."))+"\n    ")]),t._v(" "),e("div",[t._v("\n      "+t._s(t.$T("If you forgot the password, the file can't be opened in any way."))+"\n    ")]),t._v(" "),e("form",{staticClass:"uk-form-stacked uk-margin-large-top",staticStyle:{padding:"0 2px"},attrs:{id:"password_form"},on:{submit:t.submitForm}},[e("div",{staticClass:"uk-form-aligned"},[t.oldPassword?e("div",{staticClass:"uk-margin "},[e("label",{staticClass:"uk-form-label",staticStyle:{width:"180px"}},[t._v(t._s(t.$T("Old Password:")))]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmOldPassword,expression:"confirmOldPassword"}],staticClass:"uk-input",class:{"uk-form-danger":!t.oldPasswordConfirmed},attrs:{type:"password",autofocus:t.oldPassword},domProps:{value:t.confirmOldPassword},on:{input:function(s){s.target.composing||(t.confirmOldPassword=s.target.value)}}})])]):t._e()]),t._v(" "),e("div",{staticClass:"uk-form-aligned"},[e("div",{staticClass:"uk-margin"},[e("label",{staticClass:"uk-form-label",staticStyle:{width:"180px"}},[t._v(t._s(t.$T("New Password:")))]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],staticClass:"uk-input",attrs:{type:"password",autofocus:!t.oldPassword},domProps:{value:t.newPassword},on:{blur:function(s){return t.checkNewPasswordConfirm()},input:[function(s){s.target.composing||(t.newPassword=s.target.value)},function(){t.confirmNewPassword&&t.checkNewPasswordConfirm()}]}})])])]),t._v(" "),e("div",{staticClass:"uk-form-aligned"},[e("div",{staticClass:"uk-margin"},[e("label",{staticClass:"uk-form-label",staticStyle:{width:"180px"}},[t._v(t._s(t.$T("Confirm Password:")))]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmNewPassword,expression:"confirmNewPassword"}],staticClass:"uk-input",class:{"uk-form-danger":!t.newPasswordConfirmed},attrs:{type:"password"},domProps:{value:t.confirmNewPassword},on:{input:[function(s){s.target.composing||(t.confirmNewPassword=s.target.value)},function(s){return t.checkNewPasswordConfirm()}]}})])])]),t._v(" "),e("div",{staticClass:"uk-form-aligned"},[e("div",{staticClass:"uk-margin"},[e("label",{staticClass:"uk-form-label",staticStyle:{width:"180px"}},[t._v(t._s(t.$T("Password Hint (Optional):")))]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPasswordHint,expression:"newPasswordHint"}],staticClass:"uk-input",attrs:{type:"text"},domProps:{value:t.newPasswordHint},on:{input:function(s){s.target.composing||(t.newPasswordHint=s.target.value)}}})])])]),t._v(" "),t.errorHint?e("p",{staticClass:"uk-text-danger"},[t._v("\n        "+t._s(t.errorHint)+"\n      ")]):t._e()])]),t._v(" "),e("div",{staticClass:"uk-window-button-bar"},[e("div",{staticClass:"uk-button-group"},[e("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit",form:"password_form",disabled:!t.canSetPassword}},[t._v("\n        "+t._s(t.$T("Set"))+"\n      ")]),t._v(" "),t.oldPassword?e("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button",disabled:!t.canRemovePassword},on:{click:t.removePassword}},[t._v("\n        "+t._s(t.$T("Remove"))+"\n      ")]):t._e(),t._v(" "),e("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:t.cancel}},[t._v("\n        "+t._s(t.$T("Cancel"))+"\n      ")])])])])}),[],!1,null,null,null).exports},76417:t=>{"use strict";t.exports=require("crypto")},58933:t=>{"use strict";t.exports=require("electron")},28614:t=>{"use strict";t.exports=require("events")},35747:t=>{"use strict";t.exports=require("fs")},12087:t=>{"use strict";t.exports=require("os")},85622:t=>{"use strict";t.exports=require("path")},87525:t=>{"use strict";t.exports=require("posthtml")},71191:t=>{"use strict";t.exports=require("querystring")},31669:t=>{"use strict";t.exports=require("util")}},t=>{"use strict";t.O(0,[8592,5586,4736,2872],(()=>{return s=55446,t(t.s=s);var s}));var s=t.O();module.exports=s}]);