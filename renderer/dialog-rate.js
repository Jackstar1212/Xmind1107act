(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[9904],{7579:(t,e,r)=>{"use strict";var a=r(95318);Object.defineProperty(e,"X",{value:!0}),e.Z=void 0;var s=r(99492),o=a(r(24678)),i=r(24092),u={mixins:[a(r(7322)).default],data(){return{illustrationImageURL:this.$toResourceURL("static/assets/images/rate-dialog-illustration.svg"),fiveStarURL:this.$toResourceURL("static/assets/images/rate-dialog-five-star.svg")}},computed:{touchBarItems(){return[{type:"space",size:"flexible"},{type:"button",label:this.$T("Rate"),backgroundColor:"primary",click:"rateUs"},{type:"button",label:this.$T("Feedback"),click:"feedback"},{type:"space",size:"flexible"}].filter(Boolean)}},methods:{async feedback(){this.$store.commit("rateUs/updateRateMas",!1),await o.default.fetch(s.WINDOW_OPEN,{name:"feedback"}),setTimeout((()=>{window.close()}),0)},async rateUs(){this.$store.commit("rateUs/updateRateMas",!1),await(0,i.openExternal)("macappstore://itunes.apple.com/app/id1327661892?action=write-review"),setTimeout((()=>{window.close()}),0)}}};e.Z=u},7322:(t,e,r)=>{"use strict";var a=r(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(r(59713)),o=r(48932),i=r(99492),u=r(36414),n=a(r(24678));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,s.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={computed:{},watch:{touchBarItems(t){this.updateTouchBarItems(t)}},methods:{updateTouchBarItems(t){const e=t=>{const e=t.click;let r=this._touchBarRoutes[e];return r||(r={method:e,endpoint:(0,i.WINDOW_CALLBACK)(window.id,(0,u.hyphenate)(e))},this._touchBarRoutes[e]=r),r.unroute||(r.unroute=n.default.route(r.endpoint,this[e])),Object.assign({},t,{click:r.endpoint})};t=(t||this.touchBarItems||[]).map((t=>("button"!==t.type||"string"!=typeof t.click||o.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?"buttons"===t.type&&(t=l(l({},t),{},{buttons:t.buttons.map((t=>"string"!=typeof t.click||o.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?t:e(t)))})):t=e(t),t))),this.$store.commit("window/updateTouchBarItems",{items:t})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:t})=>t&&t())),this._touchBarRoutes={}}};e.default=d},47751:(t,e,r)=>{"use strict";var a=r(95318),s=a(r(2872)),o=a(r(17292));(0,s.default)(o.default,{name:"dialog-rate"})},24092:(t,e,r)=>{"use strict";var a=r(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.getPlatform=function(){return process.platform},e.getOSInfo=function(){return{platform:s.default.platform(),arch:s.default.arch(),release:s.default.release()}},e.openExternal=function(t){o.remote.shell.openExternal(t).catch((t=>{u.default.fetch(i.WINDOW_OPEN,{name:"dialog-problem",payload:{name:"OpenError",message:t.message||t,stack:t.stack,code:"OPEN_LINK"}})}))},e.copyToClipboard=function(t){o.clipboard.writeText(t)};var s=a(r(12087)),o=r(58933),i=r(99492),u=a(r(24678))},17292:(t,e,r)=>{"use strict";r.r(e),r.d(e,{__esModule:()=>a.X,default:()=>s});var a=r(7579);const s=(0,r(62236).Z)(a.Z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-window uk-window-dialog uk-window-default",attrs:{id:"app"}},[r("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating"},[r("window-control-button-group")],1),t._v(" "),r("div",{staticClass:"uk-window-body uk-flex uk-flex-row"},[r("div",{staticClass:"uk-preserve uk-background-cover uk-height-1-1",staticStyle:{width:"223px"},attrs:{"data-src":t.illustrationImageURL,"uk-svg":""}}),t._v(" "),r("div",{staticClass:"uk-panel uk-margin-large-left uk-margin-xlarge-top uk-margin-large-right uk-margin-large-bottom uk-flex uk-flex-column uk-width-expand"},[r("div",{staticClass:"uk-height-expand"},[r("h1",{staticClass:"uk-heading-primary uk-margin-xlarge-top uk-margin-small-bottom uk-text-bold"},[t._v("\n          "+t._s(t.$T("Enjoy XMind?"))+"\n        ")]),t._v(" "),r("h6",{staticClass:"uk-margin-small"},[t._v("\n          "+t._s(t.$T("Please share your love of XMind by rating us 5 stars on Mac App Store, or send feedback to us for making it better."))+"\n        ")]),t._v(" "),r("div",{staticClass:"uk-margin uk-button-group uk-flex-row-reverse"},[r("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:t.rateUs}},[t._v("\n            "+t._s(t.$T("Rate"))+"\n            "),r("span",{staticStyle:{"padding-bottom":"2px"},attrs:{"data-src":t.fiveStarURL,"uk-svg":""}})]),t._v(" "),r("button",{staticClass:"uk-button uk-button-default uk-margin-small-right",attrs:{type:"button",autofocus:""},on:{click:t.feedback}},[t._v("\n            "+t._s(t.$T("Feedback"))+"\n          ")])])])])])])}),[],!1,null,null,null).exports},76417:t=>{"use strict";t.exports=require("crypto")},58933:t=>{"use strict";t.exports=require("electron")},28614:t=>{"use strict";t.exports=require("events")},35747:t=>{"use strict";t.exports=require("fs")},12087:t=>{"use strict";t.exports=require("os")},85622:t=>{"use strict";t.exports=require("path")},87525:t=>{"use strict";t.exports=require("posthtml")},71191:t=>{"use strict";t.exports=require("querystring")},31669:t=>{"use strict";t.exports=require("util")}},t=>{"use strict";t.O(0,[8592,5586,4736,2872],(()=>{return e=47751,t(t.s=e);var e}));var e=t.O();module.exports=e}]);