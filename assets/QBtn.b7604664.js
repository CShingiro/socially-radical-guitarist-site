import{k as te,c as d,h as g,g as D,_ as ce,A as de,l as z,C as fe,J as ve,G as ne,I as ge,r as V,p as me,$ as be,K as he,m as P,u as ye,E as ke}from"./index.263908b2.js";import{u as ae,a as re,v as pe,Q as xe}from"./vm.12fbd0b1.js";import{h as qe,c as K}from"./render.f7e069ba.js";const F="0 0 24 24",H=e=>e,Q=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Q,"ion-ios":Q,"ion-logo":Q,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(ue).join("|")+")"),$e=new RegExp("^("+Object.keys(le).join("|")+")"),U=new RegExp("^("+Object.keys(ie).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,Le=/^img:/,we=/^svguse:/,Be=/^ion-/,Ce=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=te({name:"QIcon",props:{...ae,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=D(),n=re(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let s,u=e.name;if(u==="none"||!u)return{none:!0};if(r.iconMapFn!==null){const o=r.iconMapFn(u);if(o!==void 0)if(o.icon!==void 0){if(u=o.icon,u==="none"||!u)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Re.test(u)===!0){const[o,y=F]=u.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(l=>{const[k,b,p]=l.split("@@");return g("path",{style:b,d:k,transform:p})})}}if(Le.test(u)===!0)return{img:!0,src:u.substring(4)};if(we.test(u)===!0){const[o,y=F]=u.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const h=u.match(Ee);if(h!==null)s=ue[h[1]](u);else if(Ce.test(u)===!0)s=u;else if(Be.test(u)===!0)s=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${u.substring(3)}`;else if(U.test(u)===!0){s="notranslate material-symbols";const o=u.match(U);o!==null&&(u=u.substring(6),s+=ie[o[1]]),q=u}else{s="notranslate material-icons";const o=u.match($e);o!==null&&(u=u.substring(2),s+=le[o[1]]),q=u}return{cls:s,content:q}});return()=>{const s={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?g(e.tag,s,qe(t.default)):f.value.img===!0?g(e.tag,s,K(t.default,[g("img",{src:f.value.src})])):f.value.svg===!0?g(e.tag,s,K(t.default,[g("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?g(e.tag,s,K(t.default,[g("svg",{viewBox:f.value.viewBox},[g("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(s.class+=" "+f.value.cls),g(e.tag,s,K(t.default,[f.value.content])))}}});function _e(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function Je(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ce(e);if(t)return t.$el||t}function Se(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function X(e,t,r,n){r.modifiers.stop===!0&&ne(e);const i=r.modifiers.color;let f=r.modifiers.center;f=f===!0||n===!0;const s=document.createElement("span"),u=document.createElement("span"),q=ge(e),{left:h,top:o,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),b=k/2,p=`${(y-k)/2}px`,c=f?p:`${q.left-h-b}px`,x=`${(l-k)/2}px`,S=f?x:`${q.top-o-b}px`;u.className="q-ripple__inner",_e(u,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${i?" text-"+i:""}`,s.setAttribute("dir","ltr"),s.appendChild(u),t.appendChild(s);const C=()=>{s.remove(),clearTimeout(_)};r.abort.push(C);let _=setTimeout(()=>{u.classList.add("q-ripple__inner--enter"),u.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,u.style.opacity=.2,_=setTimeout(()=>{u.classList.remove("q-ripple__inner--enter"),u.classList.add("q-ripple__inner--leave"),u.style.opacity=0,_=setTimeout(()=>{s.remove(),r.abort.splice(r.abort.indexOf(C),1)},275)},250)},50)}function G(e,{modifiers:t,value:r,arg:n}){const i=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Pe=de({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&X(i,e,n,i.qKeyEvent===!0)},keystart:Se(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&z(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&X(i,e,n,!0)},300)};G(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&G(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ve(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Te=Object.keys(oe),Ae={align:{type:String,validator:e=>Te.includes(e)}};function Oe(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function J(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Me(e,t){for(const r in t){const n=t[r],i=e[r];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,s)=>f!==i[s]))return!1}return!0}function Z(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function je(e,t){return Array.isArray(e)===!0?Z(e,t):Array.isArray(t)===!0?Z(t,e):e===t}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(je(e[r],t[r])===!1)return!1;return!0}const se={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Ye={...se,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ie({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=D(),{props:n,proxy:i,emit:f}=r,s=pe(r),u=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>s===!0&&n.disable!==!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>s===!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),o=d(()=>h.value!==null),y=d(()=>u.value===!0||o.value===!0),l=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=d(()=>u.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(o.value===!1)return-1;const{matched:v}=h.value,{length:E}=v,R=v[E-1];if(R===void 0)return-1;const w=i.$route.matched;if(w.length===0)return-1;const B=w.findIndex(Y.bind(null,R));if(B!==-1)return B;const I=J(v[E-2]);return E>1&&J(R)===I&&w[w.length-1].path!==I?w.findIndex(Y.bind(null,v[E-2])):B}),p=d(()=>o.value===!0&&b.value!==-1&&Me(i.$route.params,h.value.params)),c=d(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Ke(i.$route.params,h.value.params)),x=d(()=>o.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function C(v,{returnRouterError:E,to:R=n.to,replace:w=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const B=i.$router[w===!0?"replace":"push"](R);return E===!0?B:B.then(()=>{}).catch(()=>{})}function _(v){if(o.value===!0){const E=R=>C(v,R);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:o,hasHrefLink:u,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:p,linkIsExactActive:c,linkClass:x,linkAttrs:k,getLink:S,navigateToRouterLink:C,navigateOnClick:_}}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ne={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],ze=/[^\s]\/[^\s]/,De=["flat","outline","push","unelevated"];function Ve(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Fe={...ae,...se,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...De.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ae.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},He={...Fe,round:Boolean};function Ue(e){const t=re(e,Ne),r=Oe(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:s,navigateOnClick:u}=Ie({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>o.value===!0?e.tabindex||0:-1),l=d(()=>Ve(e,"standard")),k=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,s.value):Qe.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&ze.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=d(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:u,isActionable:o}}const{passiveCapture:$}=ye;let T=null,A=null,O=null;var Ze=te({name:"QBtn",props:{...He,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=D(),{classes:i,style:f,innerClasses:s,attributes:u,hasLink:q,linkTag:h,navigateOnClick:o,isActionable:y}=Ue(e),l=V(null),k=V(null);let b=null,p,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=d(()=>({center:e.round})),_=d(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const a={onClick:R,onKeydown:w,onMousedown:I};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${m}`]=B}return a}return{onClick:P}}),E=d(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...u.value,...v.value}));function R(a){if(l.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&l.value.contains(m)===!1&&m.contains(l.value)===!1){l.value.focus();const N=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",N,$),l.value!==null&&l.value.removeEventListener("blur",N,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",N,$),l.value.addEventListener("blur",N,$)}}o(a)}}function w(a){l.value!==null&&(r("keydown",a),z(a,[13,32])===!0&&A!==l.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(l.value.focus(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",L,!0),l.value.addEventListener("blur",L,$)),P(a)))}function B(a){l.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&M(),T=l.value,b=a.target,b.addEventListener("touchcancel",L,$),b.addEventListener("touchend",L,$)),p=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,p=!1},200)))}function I(a){l.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&O!==l.value&&(O!==null&&M(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",L,$)))}function L(a){if(l.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===l.value)){if(a!==void 0&&a.type==="keyup"){if(A===l.value&&z(a,[13,32])===!0){const m=new MouseEvent("click",a);m.qKeyEvent=!0,a.defaultPrevented===!0&&ke(m),a.cancelBubble===!0&&ne(m),l.value.dispatchEvent(m),P(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const m=k.value;a!==!0&&(T===l.value||O===l.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===l.value&&(b!==null&&(b.removeEventListener("touchcancel",L,$),b.removeEventListener("touchend",L,$)),T=b=null),O===l.value&&(document.removeEventListener("mouseup",L,$),O=null),A===l.value&&(document.removeEventListener("keyup",L,!0),l.value!==null&&l.value.removeEventListener("blur",L,$),A=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return me(()=>{M(!0)}),Object.assign(n,{click:a=>{y.value===!0&&R(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(g(W,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&a.push(g("span",{class:"block"},[e.label])),a=K(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(g(W,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[g("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},a)),e.loading!==null&&m.push(g(be,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(xe)])]:null)),he(g(h.value,E.value,m),[[Pe,S.value,void 0,C.value]])}}});export{W as Q,Ie as a,Ze as b,_e as c,Je as g,Ye as u};
