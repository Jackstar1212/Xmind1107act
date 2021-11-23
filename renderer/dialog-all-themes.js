(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[2929],{7322:(e,t,n)=>{"use strict";var o=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(59713)),a=n(48932),i=n(99492),s=n(36414),u=o(n(24678));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={computed:{},watch:{touchBarItems(e){this.updateTouchBarItems(e)}},methods:{updateTouchBarItems(e){const t=e=>{const t=e.click;let n=this._touchBarRoutes[t];return n||(n={method:t,endpoint:(0,i.WINDOW_CALLBACK)(window.id,(0,s.hyphenate)(t))},this._touchBarRoutes[t]=n),n.unroute||(n.unroute=u.default.route(n.endpoint,this[t])),Object.assign({},e,{click:n.endpoint})};e=(e||this.touchBarItems||[]).map((e=>("button"!==e.type||"string"!=typeof e.click||a.WINDOW_ACTIONS.includes(e.click)||e.click.startsWith("command:")?"buttons"===e.type&&(e=l(l({},e),{},{buttons:e.buttons.map((e=>"string"!=typeof e.click||a.WINDOW_ACTIONS.includes(e.click)||e.click.startsWith("command:")?e:t(e)))})):e=t(e),e))),this.$store.commit("window/updateTouchBarItems",{items:e})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:e})=>e&&e())),this._touchBarRoutes={}}};t.default=d},61034:(e,t,n)=>{"use strict";var o=n(95318),r=o(n(59713)),a=o(n(71191)),i=o(n(2872)),s=o(n(6315)),u=o(n(35746)),c=n(90336),l=o(n(50426));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const h=a.default.parse(location.search.slice(1));(0,i.default)(l.default,{name:"dialog-all-themes",storeModules:{[c.SHARED]:m(m({},u.default),{},{remoteNamespace:(0,c.EDITOR_SHARED_WITH_ID)(h.editorId)}),themeEditor:s.default}})},74627:(e,t,n)=>{"use strict";var o=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.deleteTheme=async function(e,t){const n=i.default.join((0,r.getThemePath)(),e);a.default.existsSync(n)&&await a.default.remove(n);"function"==typeof t&&await t()},t.duplicateTheme=async function(e,t){const n="CUSTOM-"+(0,s.UUID)(),o=i.default.join((0,r.getThemePath)(),e),c=i.default.join((0,r.getThemePath)(),n);await new Promise(((e,t)=>(0,u.default)(o,c,(n=>{if(n)return t(n);e()}))));const d=await l(n);d.id=n,await a.default.writeFile(i.default.join(c,"content.json"),JSON.stringify(d)),await t(n)},t.genTheme=async function(e,t,n,o){const s=(0,r.getThemePath)(),u=i.default.join(s,e);await a.default.ensureDir(u);const c=i.default.join(u,"content.json"),l=i.default.join(u,"previews");await a.default.ensureDir(l),await t(c),await n(l),await o()},t.readTheme=l,t.getAllSkeletonThemesInfo=function(){return d},t.getRandomColorTheme=function(){const e=(0,c.getRandomColorThemeId)();return e?(0,c.getColorThemeDataById)(e):null},t.getThemeColorListById=function(e){const t=(0,c.getColorThemeDataById)(e);return t?t.colorList:null},Object.defineProperty(t,"getSkeletonThemeOrderInfo",{enumerable:!0,get:function(){return c.getSkeletonThemeOrderInfo}}),Object.defineProperty(t,"getColorThemeOrderInfo",{enumerable:!0,get:function(){return c.getColorThemeOrderInfo}}),Object.defineProperty(t,"getRandomColorThemeId",{enumerable:!0,get:function(){return c.getRandomColorThemeId}}),Object.defineProperty(t,"getColorThemeDataById",{enumerable:!0,get:function(){return c.getColorThemeDataById}}),Object.defineProperty(t,"getSkeletonThemePreviewById",{enumerable:!0,get:function(){return c.getSkeletonThemePreviewById}}),Object.defineProperty(t,"getColorThemePreviewById",{enumerable:!0,get:function(){return c.getColorThemePreviewById}}),Object.defineProperty(t,"getSkeletonThemeDataById",{enumerable:!0,get:function(){return c.getSkeletonThemeDataById}}),Object.defineProperty(t,"combineSkeletonTheme",{enumerable:!0,get:function(){return c.combineSkeletonTheme}}),Object.defineProperty(t,"combineColorTheme",{enumerable:!0,get:function(){return c.combineColorTheme}}),Object.defineProperty(t,"combineSkeletonStructureStyleToContent",{enumerable:!0,get:function(){return c.combineSkeletonStructureStyleToContent}}),Object.defineProperty(t,"snowballConstant",{enumerable:!0,get:function(){return c.snowballConstant}}),t.DEFAULT_COLOR_THEME_ID=t.DEFAULT_SKELETON_ID=void 0;var r=n(6921),a=o(n(2286)),i=o(n(85622)),s=n(36414),u=o(n(15720)),c=n(18999);function l(e){const t=(0,r.getThemePath)(),n=i.default.join(t,e),o=i.default.join(n,"content.json");return JSON.parse(a.default.readFileSync(o))}const d=((0,c.getSkeletonThemeOrderInfo)()||[]).reduce(((e,t)=>e.concat(t.idList.map((e=>({id:e,themeName:t.themeName}))))),[]),m=c.snowballConstant.DEFAULT_SKELETON_THEME_ID;t.DEFAULT_SKELETON_ID=m;const h=c.snowballConstant.DEFAULT_COLOR_THEME_ID;t.DEFAULT_COLOR_THEME_ID=h},48827:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var o=n(94015),r=n.n(o),a=n(23645),i=n.n(a)()(r());i.push([e.id,"\n.dark .custom-add[data-v-6bee0494] {\n  background: rgba(255, 255, 255, 0.1);\n}\n","",{version:3,sources:["webpack://./app/renderer/pages/dialog-all-themes/app.vue"],names:[],mappings:";AACA;EACE,oCAAoC;AACtC",sourcesContent:["\n.dark .custom-add[data-v-6bee0494] {\n  background: rgba(255, 255, 255, 0.1);\n}\n"],sourceRoot:""}]);const s=i},89326:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function s(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((o=o.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=n(90571),c=n(58933),l=s(n(71191)),d=n(96486),m=n(36414),h=n(90336),p=a(n(53305)),f=n(83450),v=n(74627),b=s(n(7322)),g=l.default.parse(window.location.search.slice(1)),T={cache:{},fetch:function(e){return i(this,void 0,void 0,(function*(){if(void 0===this.cache[e]){let t={};t=e.startsWith("CUSTOM-")?{content:v.readTheme(e)}:JSON.parse(yield p.load(`static/styles/themes/${e}.json`)),this.cache[e]=t}return this.cache[e]}))},get:function(e){return this.cache[e]}},y="EMPTY";t.default=u.createComponent({name:"all-themes",mixins:[b.default],setup(e,t){const n=u.getCurrentInstance(),o=t.root.$store,r=g.centralTopicStructureClass||"map-unbalance",a=u.ref(""),s=u.ref(""),l=u.ref(null),b=u.ref(g.activeThemeId||""),k=u.computed((()=>o.state.themeEditor.customThemes)),C=u.computed((()=>k.value.map((e=>(e.previewUrl=w(r,e.id),e))).sort(((e,t)=>t.createdAt-e.createdAt)))),w=(e,t)=>{if(t.startsWith("CUSTOM-")){const n=k.value.find((({id:e})=>e===t)),o=n&&n.createdAt;return p.toURLInAppData(`theme/${t}/previews/${e}.svg?t=${o}`)}return"theme-custom"===t?n.$toResourceURL("static/assets/images/theme-custom.svg"):n.$toResourceURL(`static/styles/theme_previews/${e}/${e}-${t}.svg`)},O=(e,t)=>{a.value=e,s.value=t,setTimeout((()=>{const t=document.querySelector("#themename-"+e);t&&t.focus()}),10)},x=d.debounce((()=>i(this,void 0,void 0,(function*(){const e="CUSTOM-"+m.UUID();o.handleCommand("themeEditor",{id:e,editorId:g.editorId,parentId:g.parentId,centralTopicStructureClass:g.centralTopicStructureClass,openType:"create-theme"}).then((()=>window.close()))}))),200),_=e=>i(this,void 0,void 0,(function*(){e.startsWith("CUSTOM-")&&(delete T.cache[e],yield T.fetch(e));const t=C.value.find((({id:t})=>t===e));return Object.assign(Object.assign({},t),yield T.fetch(e))})),I=u.computed((()=>[{type:"space",size:"flexible"},{type:"button",label:n.$T("Cancel"),click:"onCancel"},{type:"buttons",buttons:[{type:"button",label:n.$T("Choose"),click:"handleChooseTheme",enabled:b.value}]},{type:"space",size:"flexible"}])),j=u.computed((()=>n.$T("Create Theme")));return{themesContainerRef:l,touchBarItems:I,computedThemes:C,choosedCustomThemeId:b,openMenu:e=>{const{MenuItem:t,Menu:a}=c.remote,s=k.value.find((({id:t})=>t===e));if(!s)return;const u=new a;b.value=s.id,u.append(new t({label:n.$T("Edit"),click:()=>i(this,void 0,void 0,(function*(){o.handleCommand("themeEditor",{id:e,parentId:g.parentId,editorId:g.editorId,centralTopicStructureClass:r,openType:"loading-theme"}).then((()=>window.close()))}))})),u.append(new t({label:n.$T("Rename"),click:()=>O(e,s.name)})),u.append(new t({type:"separator"})),u.append(new t({label:n.$T("Duplicate"),click:()=>i(this,void 0,void 0,(function*(){yield v.duplicateTheme(e,(e=>{o.commit("themeEditor/saveCustomTheme",{id:e,name:s.name}),b.value=e,l.value.scrollTo({top:0,left:0,behavior:"smooth"})}))}))})),u.append(new t({label:n.$T("Delete"),click:()=>i(this,void 0,void 0,(function*(){const t=C.value.length?C.value.findIndex((t=>t.id===e)):-1;yield v.deleteTheme(e,(()=>{o.commit("themeEditor/removeCustomTheme",{id:e})})),-1===t||0===C.value.length?b.value=y:b.value=C.value.length>t?C.value[t].id:C.value[C.value.length-1].id}))})),u.popup({window:c.remote.getCurrentWindow()})},editThemeName:O,editingCustomThemeId:a,handleThemeRename:e=>{a.value&&(o.commit("themeEditor/renameCustomTheme",{id:a.value,name:e.target.value}),a.value="",s.value="")},handleChooseTheme:()=>i(this,void 0,void 0,(function*(){const e=b.value;if(e===y)return void x();const t=yield _(e);t&&(f.trackEvent({eventCategory:"AllThemes",eventAction:"changeTheme",eventName:e.startsWith("CUSTOM-")?"User Custom":t.name}),o.commit(`${h.SHARED}/setTargetTheme`,{themeData:t.content}),setTimeout((()=>{window.close()}),100))})),handleAddNewCustomTheme:x,createThemeText:j,onCancel:()=>{setTimeout((()=>{window.close()}),100)},onChooseClick:e=>{b.value=e}}}})},50426:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(89326),r=n.n(o),a={};for(const e in o)"default"!==e&&(a[e]=()=>o[e]);n.d(t,a);var i=n(67747);var s=function(e){n(2264)};const u=(0,n(62236).Z)(r(),i.s,i.x,!1,s,"data-v-6bee0494",null).exports},67747:(e,t,n)=>{"use strict";n.d(t,{s:()=>o,x:()=>r});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-window uk-window-dialog uk-window-default"},[n("div",{staticClass:"uk-window-expanded-title-bar"},[n("div",{staticClass:"uk-window-title-bar"},[n("div",{staticClass:"uk-window-title"},[e._v("\n        "+e._s(e.$T("Custom Themes"))+"\n      ")]),e._v(" "),n("window-control-button-group")],1)]),e._v(" "),n("div",{staticClass:"uk-window-body uk-flex uk-flex-column uk-child-separator uk-position-relative"},[n("div",{ref:"themesContainerRef",staticClass:"uk-height-1-1 uk-overflow-auto"},[n("div",{staticClass:"uk-flex uk-flex-wrap",staticStyle:{"margin-top":"-5px","padding-bottom":"18px"}},[n("div",{staticClass:"uk-flex uk-flex-column",staticStyle:{"margin-left":"30px",outline:"none"}},[n("div",{staticClass:"uk-card uk-card-default uk-card-selectable uk-background-cover uk-border-rounded uk-margin-small-bottom uk-overflow-hidden custom-add",class:{"uk-active":"EMPTY"===e.choosedCustomThemeId},staticStyle:{width:"203px",height:"121px","margin-top":"20px"},attrs:{title:e.$T("Create new theme based on current style.")},on:{click:e.handleAddNewCustomTheme}},[n("div",{staticClass:"uk-flex uk-flex-center uk-flex-middle",staticStyle:{color:"#b2b2b2",height:"100%"},attrs:{"uk-icon":"icon: zoom-plus; ratio: 3"}})]),e._v(" "),n("span",{staticClass:"uk-card-selectable-text uk-display-inline-block",staticStyle:{"font-size":"13px",height:"22px","line-height":"22px",overflow:"hidden","text-overflow":"ellipsis","max-width":"173px","align-self":"center"}},[e._v(e._s(e.createThemeText))])]),e._v(" "),e._l(e.computedThemes,(function(t){var o=t.id,r=t.name,a=t.previewUrl;return n("div",{key:o,staticClass:"uk-flex uk-flex-column",staticStyle:{"margin-left":"30px","margin-top":"20px",outline:"none"},attrs:{theme:o}},[n("div",{staticClass:"uk-card uk-card-default uk-card-selectable uk-background-cover uk-border-rounded uk-margin-small-bottom uk-overflow-hidden",class:{"uk-active":o===e.choosedCustomThemeId},staticStyle:{width:"203px",height:"121px"},attrs:{tabindex:"-1"},on:{click:function(t){return e.onChooseClick(o)},dblclick:function(){e.onChooseClick(o),e.handleChooseTheme()},contextmenu:function(t){return e.openMenu(o)}}},[n("img",{staticClass:"uk-width-1-1 uk-preserve",attrs:{draggable:"false","uk-svg":"",src:a,width:"203",height:"121",alt:""}})]),e._v(" "),e.editingCustomThemeId!==o?n("span",{staticClass:"uk-card-selectable-text uk-display-inline-block",staticStyle:{"font-size":"13px",height:"22px","line-height":"22px",overflow:"hidden","text-overflow":"ellipsis","max-width":"173px","align-self":"center"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.editThemeName(o,r)}}},[e._v(e._s(r))]):n("input",{staticClass:"uk-text-center uk-input",staticStyle:{"font-size":"13px",height:"22px","line-height":"22px","box-sizing":"border-box"},attrs:{id:"themename-"+o,type:"text",autofocus:e.editingCustomThemeId===o},domProps:{value:r},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),t.preventDefault(),e.handleThemeRename(t))},blur:function(t){return t.stopPropagation(),t.preventDefault(),e.handleThemeRename(t)},mousedown:function(t){return t.stopPropagation(),n=t,e.editingCustomThemeId!==o&&n.preventDefault();var n}}})])}))],2)])]),e._v(" "),n("div",{staticClass:"uk-window-button-bar"},[n("div",{staticClass:"uk-flex uk-flex-right uk-button-group"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button",disabled:!e.choosedCustomThemeId,autofocus:""},on:{click:e.handleChooseTheme}},[e._v("\n        "+e._s(e.$T("Apply"))+"\n      ")]),e._v(" "),n("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:e.onCancel}},[e._v("\n        "+e._s(e.$T("Cancel"))+"\n      ")])])])])},r=[]},2264:(e,t,n)=>{var o=n(48827);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45346).Z)("447a6812",o,!0,{})},76417:e=>{"use strict";e.exports=require("crypto")},58933:e=>{"use strict";e.exports=require("electron")},28614:e=>{"use strict";e.exports=require("events")},35747:e=>{"use strict";e.exports=require("fs")},15720:e=>{"use strict";e.exports=require("ncp")},12087:e=>{"use strict";e.exports=require("os")},85622:e=>{"use strict";e.exports=require("path")},87525:e=>{"use strict";e.exports=require("posthtml")},71191:e=>{"use strict";e.exports=require("querystring")},31669:e=>{"use strict";e.exports=require("util")}},e=>{"use strict";e.O(0,[8592,5586,4736,2872],(()=>{return t=61034,e(e.s=t);var t}));var t=e.O();module.exports=t}]);