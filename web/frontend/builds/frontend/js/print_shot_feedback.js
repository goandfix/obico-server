(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={print_shot_feedback:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/frontend/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([4,"chunk-vendors"]),n()})({0:function(t,e){},1807:function(t,e,n){"use strict";n("99af");e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(){return"/api/v1/gcodes/"},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWS:function(t){return"/ws/web/".concat(t,"/")},printerSharedWS:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(r){return n}},a=function(t,e){return localStorage.setItem(t,e)}},4:function(t,e,n){t.exports=n("84bc")},"502a":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return l}));n("caad"),n("b0c0"),n("d3b7"),n("25f0"),n("2532");var r=n("c1df"),a=n.n(r),o=n("9b02"),i=n.n(o),s=function(t){return t?a()(t):null},c=function(t){return t.ended_at=s(t.cancelled_at||t.finished_at),t.started_at=s(t.started_at),t.uploaded_at=s(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},u=function(t){return t.name=t.name||"Printer #"+t.id.toString(),t.created_at=s(t.created_at),t.isOffline=null===i()(t,"status",null),t.isPaused=i()(t,"status.state.flags.paused",!1),t.isIdle="Operational"===i()(t,"status.state.text",""),t.isDisconnected=i()(t,"status.state.flags.closedOrError",!0),t.isPrinting=!t.isDisconnected&&"Operational"!==i()(t,"status.state.text",""),t.hasError=i()(t,"status.state.flags.error")||i()(t,"status.state.text","").toLowerCase().includes("error"),t.alertUnacknowledged=i()(t,"current_print.alerted_at")&&a()(i()(t,"current_print.alerted_at")).isAfter(a()(i()(t,"current_print.alert_acknowledged_at")||0)),t},l=function(t,e){var n=Math.round(t.length*e);return i()(t[n],"fields.normalized_p",0)}},5237:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-dark text-white"},[r("img",{staticClass:"card-img",attrs:{src:n("6e05"),alt:"The Detective is still working"}}),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-overlay",staticStyle:{"background-color":"rgba(0,0,0,0.6)"}},[n("h5",{staticClass:"card-title text-center",staticStyle:{padding:"70px 0"}},[t._v("The Detective is still busy working on your time-lapse")])])}],o={name:"DetectiveWorking"},i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},"6e05":function(t,e,n){t.exports=n.p+"img/detective-working.gif"},"785f":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var r=n("0122"),a=/(?:^|[-_/])(\w)/g,o="root",i="anonymous component",s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,c=function(t){var e=s.exec(t);return e?e.slice(1):[]},u=function(t,e){var n=c(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},l=function(t){if(!t)return i;if(t.$root===t)return o;if(!t.$options)return i;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=u(e,".vue");return n.replace(a,(function(t,e){return e?e.toUpperCase():""}))}return i},d=function t(e,n,a,o,i,s){var c=0;for(var u in n){if(c+=1,c>s)break;"object"==Object(r["a"])(n[u])?i>o&&t(e,n[u],a+"."+u,o+1,i,s):e[a+"."+u]=n[u]}},p=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(n,r,a){if(window.Sentry){var o={},i=r;if(r._original&&(i=r._original),i)try{o.componentName=l(i),d(o,JSON.parse(JSON.stringify(i.$options.propsData)),"props",0,2,10)}catch(s){console.log("Unable to extract metadata from Vue component.")}a&&(o.lifecycleHook=a),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",o),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof e&&e.call(t,n,r,a),t.util&&t.util.warn("Error in ".concat(a,': "').concat(n.toString(),'"'),r),console.error(n)}};e["a"]=p},"7a8a":function(t,e,n){"use strict";var r=n("c8fe"),a=n.n(r);a.a},"84bc":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f357"),o=n("785f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"printshots-container row justify-content-center"},[n("div",{staticClass:"col-sm-12 col-lg-6"},[n("div",{staticClass:"card"},[t._m(0),n("loading",{attrs:{active:null===t.print,"is-full-page":!0}}),null!==t.print?n("div",[t.print.access_consented_at?n("div",[n("div",[n("vue-slick-carousel",{ref:"carousel",attrs:{arrows:!0,dots:!0},on:{afterChange:t.onNextShot},scopedSlots:t._u([{key:"customPaging",fn:function(e){return[n("div",{class:t.pageClass(e)},[t._v("•")])]}}],null,!1,3226812120)},t._l(this.shots,(function(e,r){return n("print-shot-card",{key:r,attrs:{shot:e},on:{shotChanged:t.onShotChanged}})})),1)],1),n("br"),n("div",{staticClass:"card-body p-3"},[n("a",{attrs:{href:"/prints/"}},[n("i",{staticClass:"fas fa-chevron-left"}),t._v(" Time-lapse ")])])]):n("consent",{attrs:{print:this.print},on:{"continue-btn-pressed":this.consentBtnPressed}})],1):t._e()],1)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"card-header text-center"},[t._v(" F "),n("i",{staticClass:"fas fa-search focused-feedback-icon"}),t._v("CUSED FEEDBACK ")])}],c=n("bc3a"),u=n.n(c),l=n("c1df"),d=n.n(l),p=n("c707"),f=n.n(p),h=n("51f5"),v=n.n(h),m=n("a7ab"),b=n.n(m),g=(n("7b8d"),n("6a2c"),n("9062")),_=n.n(g),w=(n("e40d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body consent-section"},[n("div",[t._v(" Number of snapshots: "),n("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.print.printshotfeedback_set.length))])]),n("p",[t._v(" Estimated time to finish: "),n("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.estimatedFeedbackTime))])]),t._m(0),n("br"),n("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:!t.consentChecked,type:"button"},on:{click:function(e){return t.$emit("continue-btn-pressed")}}},[t._v("Start Focused Feedback")]),n("br"),n("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.consentChecked,expression:"consentChecked"}],staticClass:"custom-control-input",attrs:{type:"checkbox",name:"consented",id:"consented-checkbox"},domProps:{checked:Array.isArray(t.consentChecked)?t._i(t.consentChecked,null)>-1:t.consentChecked},on:{change:function(e){var n=t.consentChecked,r=e.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=t._i(n,o);r.checked?i<0&&(t.consentChecked=n.concat([o])):i>-1&&(t.consentChecked=n.slice(0,i).concat(n.slice(i+1)))}else t.consentChecked=a}}}),t._m(1)]),n("br"),n("div",[n("span",{staticClass:"text-muted"},[t._v("File:")]),t._v(" "+t._s(t.print.filename)+" ")]),n("div",[n("span",{staticClass:"text-muted"},[t._v("Printed:")]),t._v(" "+t._s(t.print.started_at.fromNow())+" ")]),n("br"),t.print.video_url?n("video-box",{attrs:{videoUrl:t.print.video_url,posterUrl:t.print.poster_url,fullScreenBtn:!1}}):n("div",[n("detective-working")],1)],1)}),k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-muted font-weight-light"},[t._v(" Help The Detective get better by giving her in-depth feedback on the snapshots of the print. You will earn "),n("strong",{staticClass:"text-light"},[t._v("2 non-expirable Detective Hours")]),t._v(" after you finish this Focused Feedback. "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/"}},[t._v("Learn more. "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"custom-control-label",staticStyle:{"font-size":"16px"},attrs:{for:"consented-checkbox"}},[t._v(" I grant The Spaghetti Detective team members the permission to review the time-lapse video of the print shown on this page. "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#you-need-to-grant-permission-to-tsd-team-to-review-your-time-lapse"}},[t._v("Why is this necessary? "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])}],y=n("c1ee"),C=n("5237"),x={name:"Consent",props:{print:Object},components:{VideoBox:y["a"],DetectiveWorking:C["a"]},data:function(){return{consentChecked:!1}},computed:{estimatedFeedbackTime:function(){var t=12*this.print.printshotfeedback_set.length;return t<60?"".concat(t," seconds"):d.a.duration(t,"seconds").humanize()}}},S=x,O=(n("c6d8"),n("2877")),$=Object(O["a"])(S,w,k,!1,null,"abf6b24c",null),j=$.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"card-img-top",attrs:{src:t.shot.image_url}}),n("div",{staticClass:"px-3 pt-4"},[n("b-form-group",{attrs:{label:"Do you see any spaghetti in this picture?"}},[n("b-form-radio-group",{attrs:{options:t.options},on:{change:t.updateShot},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1),t._m(0)],1)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",{staticClass:"text-muted"},[t._v(" Not sure? Look at "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#spaghetti-examples"}},[t._v("some examples. "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])}],D=n("1807"),T=n("8226"),E=n("2924"),F={name:"PrintShotCard",components:{BFormGroup:T["a"],BFormRadioGroup:E["a"]},props:{shot:Object},data:function(){return{answer:this.shot.answer,options:[{text:"Yes",value:"LOOKS_BAD"},{text:"No",value:"LOOKS_OK"},{text:"I am not sure",value:"UNDECIDED"}]}},methods:{updateShot:function(t){var e=this;u.a.put(D["a"].printShotFeedback(this.shot.id,this.shot.print_id),{answer:t}).then((function(t){var n=t.data,r=n.instance,a=n.credited_dhs;e.$emit("shotChanged",r),a>0&&e.$swal({title:"You are awesome!",html:"<p>The Detective just got a little smarter because of your feedback!</p><p>You just earned 2 non-expirable Detective Hours - Yay!</p>",confirmButtonText:"I'm done!",showCancelButton:!0,cancelButtonText:"Change feedback"}).then((function(t){t.isConfirmed&&(window.location.href="/prints/")}))}))}}},U=F,A=Object(O["a"])(U,B,P,!1,null,null,null),N=A.exports,W=n("502a"),I={name:"PrintShotFeedbackApp",components:{Consent:j,Loading:_.a,PrintShotCard:N,VueSlickCarousel:b.a},props:{config:{default:function(){},type:Object}},data:function(){return{shots:[],currentShot:0,print:null}},computed:{},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;u.a.get(D["a"].print(this.config.printId)).then((function(e){t.print=Object(W["b"])(e.data),t.shots=f()(t.print.printshotfeedback_set,"id")}))},updatePrint:function(t){var e=this;u.a.patch(D["a"].print(this.print.id),t).then((function(t){return e.print=t.data}))},consentBtnPressed:function(){this.updatePrint({access_consented_at:d()()})},onShotChanged:function(t){var e=v()(this.shots,(function(e){return e.id==t.id}));this.$set(this.shots,e,t),this.$refs.carousel.next()},onNextShot:function(t){this.currentShot=t},pageClass:function(t){return t===this.currentShot?"page-visiting":this.shots[t].answered_at?"text-success":"page-unvisited"}}},H=I,M=(n("9292"),Object(O["a"])(H,i,s,!1,null,"e28dbba8",null)),z=M.exports;Object(o["a"])(r["default"]),r["default"].use(a["a"]),new r["default"]({components:{App:z}}).$mount("#print-shot-feedback-mount")},"8f60":function(t,e,n){},9292:function(t,e,n){"use strict";var r=n("f44b"),a=n.n(r);a.a},c1ee:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-top"},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-default-skin vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!0},on:{timeupdate:t.onTimeUpdate}}),t.fullscreenBtn?n("a",{staticClass:"fullscreen-btn",attrs:{role:"button"},on:{click:function(e){return t.$emit("fullscreen")}}},[n("i",{staticClass:"fa fa-expand fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()],1)},a=[],o=n("d6d3"),i={name:"VideoBox",components:{videoPlayer:o["videoPlayer"]},props:{videoUrl:String,posterUrl:String,fullscreenBtn:{default:function(){return!0},type:Boolean},fluid:{type:Boolean,default:function(){return!0}},autoplay:{type:Boolean,default:function(){return!1}}},computed:{playerOptions:function(){return{muted:!0,preload:"none",language:"en",playbackRates:[.5,1,1.5,2],fluid:this.fluid,fill:!this.fluid,autoplay:this.autoplay,sources:[{type:"video/mp4",src:this.videoUrl}],controlBar:{fullscreenToggle:!1},poster:this.posterUrl}}},methods:{onTimeUpdate:function(t){this.$emit("timeupdate",t.currentTime()/t.duration())}}},s=i,c=(n("7a8a"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,"2ae6d05e",null);e["a"]=u.exports},c6d8:function(t,e,n){"use strict";var r=n("8f60"),a=n.n(r);a.a},c8fe:function(t,e,n){},f357:function(t,e,n){"use strict";var r=n("f3f3"),a=n("a026"),o=n("5886"),i=n("3c33"),s=function(t,e,n){var o=document.createElement("div"),i=new a["default"]({render:function(n){return n(t,{props:e})}}).$mount(o);return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(i.$el)},onDestroy:function(){i.$destroy(),o.remove()}}))},c=function(t,e,n){return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},u=function(t,e){t.use(o["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),a=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),u=function(e,n){if(!Object(i["a"])(n,!1)){var a=Object(r["a"])(Object(r["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(a).then((function(t){t.value&&(Object(i["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=s,t.prototype.$swal["openModalWithElement"]=c,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=a,t.prototype.$swal["DismissableToast"]=u};e["a"]={install:u}},f44b:function(t,e,n){}});
//# sourceMappingURL=print_shot_feedback.js.map