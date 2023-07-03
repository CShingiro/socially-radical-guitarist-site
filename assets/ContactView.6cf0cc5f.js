import{i as Be,a2 as qe,w as L,o as ie,l as ue,g as G,r as $,c as V,a3 as Pe,a4 as Re,a5 as Te,s as fe,m as W,x as Fe,a6 as _e,k as Oe,h as q,B as ee,Z as $e,a7 as Ie,u as Ne,C as he,I as De,L as je,K as Ue,M as ze,N as Le,O as be,a0 as K,d as J,a8 as Ze,R as pe}from"./index.276f401c.js";import{Q as ye,b as Ke,d as Qe}from"./QBtn.40547d31.js";import{Q as He}from"./QSpinner.382a146c.js";import{u as Ye,a as We}from"./use-dark.cbc18b14.js";import{h as te,c as Ae}from"./render.28c40589.js";import{Q as Je}from"./QVideo.89a824d5.js";import{Q as Xe}from"./QPage.7c3f5477.js";import{a as Ge}from"./index.2cf0d985.js";import"./use-ratio.5dc5edb7.js";function et({validate:e,resetValidation:t,requiresQForm:i}){const u=Be(qe,!1);if(u!==!1){const{props:d,proxy:s}=G();Object.assign(s,{validate:e,resetValidation:t}),L(()=>d.disable,c=>{c===!0?(typeof t=="function"&&t(),u.unbindComponent(s)):u.bindComponent(s)}),ie(()=>{d.disable!==!0&&u.bindComponent(s)}),ue(()=>{d.disable!==!0&&u.unbindComponent(s)})}else i===!0&&console.error("Parent QForm not found on useFormChild()!")}const xe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ke=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,we=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,oe=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>xe.test(e),hexaColor:e=>ke.test(e),hexOrHexaColor:e=>we.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>oe.test(e),rgbOrRgbaColor:e=>le.test(e)||oe.test(e),hexOrRgbColor:e=>xe.test(e)||le.test(e),hexaOrRgbaColor:e=>ke.test(e)||oe.test(e),anyColor:e=>we.test(e)||le.test(e)||oe.test(e)},tt=[!0,!1,"ondemand"],lt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>tt.includes(e)}};function ot(e,t){const{props:i,proxy:u}=G(),d=$(!1),s=$(null),c=$(null);et({validate:_,resetValidation:v});let h=0,k;const b=V(()=>i.rules!==void 0&&i.rules!==null&&i.rules.length!==0),w=V(()=>i.disable!==!0&&b.value===!0),m=V(()=>i.error===!0||d.value===!0),Q=V(()=>typeof i.errorMessage=="string"&&i.errorMessage.length!==0?i.errorMessage:s.value);L(()=>i.modelValue,()=>{U()}),L(()=>i.reactiveRules,D=>{D===!0?k===void 0&&(k=L(()=>i.rules,()=>{U(!0)})):k!==void 0&&(k(),k=void 0)},{immediate:!0}),L(e,D=>{D===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,w.value===!0&&i.lazyRules!=="ondemand"&&t.value===!1&&N())});function v(){h++,t.value=!1,c.value=null,d.value=!1,s.value=null,N.cancel()}function _(D=i.modelValue){if(w.value!==!0)return!0;const P=++h,F=t.value!==!0?()=>{c.value=!0}:()=>{},A=(S,C)=>{S===!0&&F(),d.value=S,s.value=C||null,t.value=!1},E=[];for(let S=0;S<i.rules.length;S++){const C=i.rules[S];let I;if(typeof C=="function"?I=C(D,se):typeof C=="string"&&se[C]!==void 0&&(I=se[C](D)),I===!1||typeof I=="string")return A(!0,I),!1;I!==!0&&I!==void 0&&E.push(I)}return E.length===0?(A(!1),!0):(t.value=!0,Promise.all(E).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return P===h&&A(!1),!0;const C=S.find(I=>I===!1||typeof I=="string");return P===h&&A(C!==void 0,C),C===void 0},S=>(P===h&&(console.error(S),A(!0)),!1)))}function U(D){w.value===!0&&i.lazyRules!=="ondemand"&&(c.value===!0||i.lazyRules!==!0&&D!==!0)&&N()}const N=Pe(_,0);return ue(()=>{k!==void 0&&k(),N.cancel()}),Object.assign(u,{resetValidation:v,validate:_}),Re(u,"hasError",()=>m.value),{isDirtyModel:c,hasRules:b,hasError:m,errorMessage:Q,validate:_,resetValidation:v}}const Ce=/^on[A-Z]/;function at(e,t){const i={listeners:$({}),attributes:$({})};function u(){const d={},s={};for(const c in e)c!=="class"&&c!=="style"&&Ce.test(c)===!1&&(d[c]=e[c]);for(const c in t.props)Ce.test(c)===!0&&(s[c]=t.props[c]);i.attributes.value=d,i.listeners.value=s}return Te(u),u(),i}let de,ae=0;const j=new Array(256);for(let e=0;e<256;e++)j[e]=(e+256).toString(16).substring(1);const nt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const i=new Uint8Array(t);return e.getRandomValues(i),i}}return t=>{const i=[];for(let u=t;u>0;u--)i.push(Math.floor(Math.random()*256));return i}})(),Se=4096;function rt(){(de===void 0||ae+16>Se)&&(ae=0,de=nt(Se));const e=Array.prototype.slice.call(de,ae,ae+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,j[e[0]]+j[e[1]]+j[e[2]]+j[e[3]]+"-"+j[e[4]]+j[e[5]]+"-"+j[e[6]]+j[e[7]]+"-"+j[e[8]]+j[e[9]]+"-"+j[e[10]]+j[e[11]]+j[e[12]]+j[e[13]]+j[e[14]]+j[e[15]]}let ce=[],it=[];function ge(e){it.length===0?e():ce.push(e)}function ut(e){ce=ce.filter(t=>t!==e)}function ve(e){return e===void 0?`f_${rt()}`:e}function me(e){return e!=null&&(""+e).length!==0}const st={...Ye,...lt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},dt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ft(){const{props:e,attrs:t,proxy:i,vnode:u}=G();return{isDark:We(e,i.$q),editable:V(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:$(!1),focused:$(!1),hasPopupOpen:!1,splitAttrs:at(t,u),targetUid:$(ve(e.for)),rootRef:$(null),targetRef:$(null),controlRef:$(null)}}function ct(e){const{props:t,emit:i,slots:u,attrs:d,proxy:s}=G(),{$q:c}=s;let h=null;e.hasValue===void 0&&(e.hasValue=V(()=>me(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{i("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:a}),Object.assign(e,{clearValue:f,onControlFocusin:r,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=V(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,x=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(x!==void 0?" / "+x:"")}}));const{isDirtyModel:k,hasRules:b,hasError:w,errorMessage:m,resetValidation:Q}=ot(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?V(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):V(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=V(()=>t.bottomSlots===!0||t.hint!==void 0||b.value===!0||t.counter===!0||t.error!==null),U=V(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),N=V(()=>`q-field row no-wrap items-start q-field--${U.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(P.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),D=V(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),P=V(()=>t.labelSlot===!0||t.label!==void 0),F=V(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),A=V(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=V(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});L(()=>t.for,l=>{e.targetUid.value=ve(l)});function S(){const l=document.activeElement;let x=e.targetRef!==void 0&&e.targetRef.value;x&&(l===null||l.id!==e.targetUid.value)&&(x.hasAttribute("tabindex")===!0||(x=x.querySelector("[tabindex]")),x&&x!==l&&x.focus({preventScroll:!0}))}function C(){ge(S)}function I(){ut(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function r(l){h!==null&&(clearTimeout(h),h=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,i("focus",l))}function a(l,x){h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,i("blur",l)),x!==void 0&&x())})}function f(l){fe(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),i("update:modelValue",null),i("clear",t.modelValue),W(()=>{Q(),c.platform.is.mobile!==!0&&(k.value=!1)})}function n(){const l=[];return u.prepend!==void 0&&l.push(q("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ee},u.prepend())),l.push(q("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},p())),w.value===!0&&t.noErrorIcon===!1&&l.push(R("error",[q(ye,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(R("inner-loading-append",u.loading!==void 0?u.loading():[q(He,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(R("inner-clearable-append",[q(ye,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:f})])),u.append!==void 0&&l.push(q("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ee},u.append())),e.getInnerAppend!==void 0&&l.push(R("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function p(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(q("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):u.rawControl!==void 0?l.push(u.rawControl()):u.control!==void 0&&l.push(q("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(A.value))),P.value===!0&&l.push(q("div",{class:F.value},te(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(q("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(te(u.default))}function g(){let l,x;w.value===!0?m.value!==null?(l=[q("div",{role:"alert"},m.value)],x=`q--slot-error-${m.value}`):(l=te(u.error),x="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[q("div",t.hint)],x=`q--slot-hint-${t.hint}`):(l=te(u.hint),x="q--slot-hint"));const H=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&H===!1&&l===void 0)return;const M=q("div",{key:x,class:"q-field__messages col"},l);return q("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:ee},[t.hideBottomSpace===!0?M:q($e,{name:"q-transition--field-message"},()=>M),H===!0?q("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function R(l,x){return x===null?null:q("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},x)}let y=!1;return Fe(()=>{y=!0}),_e(()=>{y===!0&&t.autofocus===!0&&s.focus()}),ie(()=>{Oe.value===!0&&t.for===void 0&&(e.targetUid.value=ve()),t.autofocus===!0&&s.focus()}),ue(()=>{h!==null&&clearTimeout(h)}),Object.assign(s,{focus:C,blur:I}),function(){const x=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return q("label",{ref:e.rootRef,class:[N.value,d.class],style:d.style,...x},[u.before!==void 0?q("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ee},u.before()):null,q("div",{class:"q-field__inner relative-position col self-stretch"},[q("div",{ref:e.controlRef,class:D.value,tabindex:-1,...e.controlEvents},n()),_.value===!0?g():null]),u.after!==void 0?q("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ee},u.after()):null])}}const Me={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},re={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ee=Object.keys(re);Ee.forEach(e=>{re[e].regex=new RegExp(re[e].pattern)});const vt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ee.join("")+"])|(.)","g"),Ve=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),mt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function gt(e,t,i,u){let d,s,c,h,k,b;const w=$(null),m=$(v());function Q(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,U),L(()=>e.mask,r=>{if(r!==void 0)N(m.value,!0);else{const a=C(m.value);U(),e.modelValue!==a&&t("update:modelValue",a)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&N(m.value,!0)}),L(()=>e.unmaskedValue,()=>{w.value===!0&&N(m.value)});function v(){if(U(),w.value===!0){const r=E(C(e.modelValue));return e.fillMask!==!1?I(r):r}return e.modelValue}function _(r){if(r<d.length)return d.slice(-r);let a="",f=d;const n=f.indexOf(T);if(n>-1){for(let p=r-f.length;p>0;p--)a+=T;f=f.slice(0,n)+a+f.slice(n)}return f}function U(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&Q(),w.value===!1){h=void 0,d="",s="";return}const r=Me[e.mask]===void 0?e.mask:Me[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",f=a.replace(Ve,"\\$&"),n=[],p=[],g=[];let R=e.reverseFillMask===!0,y="",l="";r.replace(vt,(O,o,B,Y,Z)=>{if(Y!==void 0){const z=re[Y];g.push(z),l=z.negate,R===!0&&(p.push("(?:"+l+"+)?("+z.pattern+"+)?(?:"+l+"+)?("+z.pattern+"+)?"),R=!1),p.push("(?:"+l+"+)?("+z.pattern+")?")}else if(B!==void 0)y="\\"+(B==="\\"?"":B),g.push(B),n.push("([^"+y+"]+)?"+y+"?");else{const z=o!==void 0?o:Z;y=z==="\\"?"\\\\\\\\":z.replace(Ve,"\\\\$&"),g.push(z),n.push("([^"+y+"]+)?"+y+"?")}});const x=new RegExp("^"+n.join("")+"("+(y===""?".":"[^"+y+"]")+"+)?"+(y===""?"":"["+y+"]*")+"$"),H=p.length-1,M=p.map((O,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+O):o===H?new RegExp("^"+O+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+O));c=g,h=O=>{const o=x.exec(e.reverseFillMask===!0?O:O.slice(0,g.length+1));o!==null&&(O=o.slice(1).join(""));const B=[],Y=M.length;for(let Z=0,z=O;Z<Y;Z++){const X=M[Z].exec(z);if(X===null)break;z=z.slice(X.shift().length),B.push(...X)}return B.length!==0?B.join(""):O},d=g.map(O=>typeof O=="string"?O:T).join(""),s=d.split(T).join(a)}function N(r,a,f){const n=u.value,p=n.selectionEnd,g=n.value.length-p,R=C(r);a===!0&&U();const y=E(R),l=e.fillMask!==!1?I(y):y,x=m.value!==l;n.value!==l&&(n.value=l),x===!0&&(m.value=l),document.activeElement===n&&W(()=>{if(l===s){const M=e.reverseFillMask===!0?s.length:0;n.setSelectionRange(M,M,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const M=n.selectionEnd;let O=p-1;for(let o=k;o<=O&&o<M;o++)d[o]!==T&&O++;P.right(n,O);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)>-1){const M=e.reverseFillMask===!0?p===0?l.length>y.length?1:0:Math.max(0,l.length-(l===s?0:Math.min(y.length,g)+1))+1:p;n.setSelectionRange(M,M,"forward");return}if(e.reverseFillMask===!0)if(x===!0){const M=Math.max(0,l.length-(l===s?0:Math.min(y.length,g+1)));M===1&&p===1?n.setSelectionRange(M,M,"forward"):P.rightReverse(n,M)}else{const M=l.length-g;n.setSelectionRange(M,M,"backward")}else if(x===!0){const M=Math.max(0,d.indexOf(T),Math.min(y.length,p)-1);P.right(n,M)}else{const M=p-1;P.right(n,M)}});const H=e.unmaskedValue===!0?C(l):l;String(e.modelValue)!==H&&i(H,!0)}function D(r,a,f){const n=E(C(r.value));a=Math.max(0,d.indexOf(T),Math.min(n.length,a)),k=a,r.setSelectionRange(a,f,"forward")}const P={left(r,a){const f=d.slice(a-1).indexOf(T)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(d[n]===T){a=n,f===!0&&a++;break}if(n<0&&d[a]!==void 0&&d[a]!==T)return P.right(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},right(r,a){const f=r.value.length;let n=Math.min(f,a+1);for(;n<=f;n++)if(d[n]===T){a=n;break}else d[n-1]===T&&(a=n);if(n>f&&d[a-1]!==void 0&&d[a-1]!==T)return P.left(r,f);r.setSelectionRange(a,a,"forward")},leftReverse(r,a){const f=_(r.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(f[n-1]===T){a=n;break}else if(f[n]===T&&(a=n,n===0))break;if(n<0&&f[a]!==void 0&&f[a]!==T)return P.rightReverse(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},rightReverse(r,a){const f=r.value.length,n=_(f),p=n.slice(0,a+1).indexOf(T)===-1;let g=Math.min(f,a+1);for(;g<=f;g++)if(n[g-1]===T){a=g,a>0&&p===!0&&a--;break}if(g>f&&n[a-1]!==void 0&&n[a-1]!==T)return P.leftReverse(r,f);r.setSelectionRange(a,a,"forward")}};function F(r){t("click",r),b=void 0}function A(r){if(t("keydown",r),Ie(r)===!0)return;const a=u.value,f=a.selectionStart,n=a.selectionEnd;if(r.shiftKey||(b=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&b===void 0&&(b=a.selectionDirection==="forward"?f:n);const p=P[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),p(a,b===f?n:f),r.shiftKey){const g=a.selectionStart;a.setSelectionRange(Math.min(b,g),Math.max(b,g),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&f===n?(P.left(a,f),a.setSelectionRange(a.selectionStart,n,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&f===n&&(P.rightReverse(a,n),a.setSelectionRange(f,a.selectionEnd,"forward"))}function E(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return S(r);const a=c;let f=0,n="";for(let p=0;p<a.length;p++){const g=r[f],R=a[p];if(typeof R=="string")n+=R,g===R&&f++;else if(g!==void 0&&R.regex.test(g))n+=R.transform!==void 0?R.transform(g):g,f++;else return n}return n}function S(r){const a=c,f=d.indexOf(T);let n=r.length-1,p="";for(let g=a.length-1;g>=0&&n>-1;g--){const R=a[g];let y=r[n];if(typeof R=="string")p=R+p,y===R&&n--;else if(y!==void 0&&R.regex.test(y))do p=(R.transform!==void 0?R.transform(y):y)+p,n--,y=r[n];while(f===g&&y!==void 0&&R.regex.test(y));else return p}return p}function C(r){return typeof r!="string"||h===void 0?typeof r=="number"?h(""+r):r:h(r)}function I(r){return s.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?s.slice(0,-r.length)+r:r+s.slice(r.length)}return{innerValue:m,hasMask:w,moveCursorForPaste:D,updateMaskValue:N,onMaskedKeydown:A,onMaskedClick:F}}const ht={name:String};function bt(e){return V(()=>e.name||e.for)}function pt(e,t){function i(){const u=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(s=>{d.items.add(s)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?V(()=>{if(e.type==="file")return i()}):V(i)}const yt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,xt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,kt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,wt=/[a-z0-9_ -]$/i;function Ct(e){return function(i){if(i.type==="compositionend"||i.type==="change"){if(i.target.qComposing!==!0)return;i.target.qComposing=!1,e(i)}else i.type==="compositionupdate"&&i.target.qComposing!==!0&&typeof i.data=="string"&&(Ne.is.firefox===!0?wt.test(i.data)===!1:yt.test(i.data)===!0||xt.test(i.data)===!0||kt.test(i.data)===!0)===!0&&(i.target.qComposing=!0)}}var ne=Ae({name:"QInput",inheritAttrs:!1,props:{...st,...mt,...ht,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...dt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:i}){const{proxy:u}=G(),{$q:d}=u,s={};let c=NaN,h,k,b=null,w;const m=$(null),Q=bt(e),{innerValue:v,hasMask:_,moveCursorForPaste:U,updateMaskValue:N,onMaskedKeydown:D,onMaskedClick:P}=gt(e,t,y,m),F=pt(e,!0),A=V(()=>me(v.value)),E=Ct(g),S=ft(),C=V(()=>e.type==="textarea"||e.autogrow===!0),I=V(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),r=V(()=>{const o={...S.splitAttrs.listeners.value,onInput:g,onPaste:p,onChange:x,onBlur:H,onFocus:he};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=E,_.value===!0&&(o.onKeydown=D,o.onClick=P),e.autogrow===!0&&(o.onAnimationend=R),o}),a=V(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Q.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});L(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),L(()=>e.modelValue,o=>{if(_.value===!0){if(k===!0&&(k=!1,String(o)===c))return;N(o)}else v.value!==o&&(v.value=o,e.type==="number"&&s.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete s.value));e.autogrow===!0&&W(l)}),L(()=>e.autogrow,o=>{o===!0?W(l):m.value!==null&&i.rows>0&&(m.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&W(l)});function f(){ge(()=>{const o=document.activeElement;m.value!==null&&m.value!==o&&(o===null||o.id!==S.targetUid.value)&&m.value.focus({preventScroll:!0})})}function n(){m.value!==null&&m.value.select()}function p(o){if(_.value===!0&&e.reverseFillMask!==!0){const B=o.target;U(B,B.selectionStart,B.selectionEnd)}t("paste",o)}function g(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const B=o.target.value;if(o.target.qComposing===!0){s.value=B;return}if(_.value===!0)N(B,!1,o.inputType);else if(y(B),I.value===!0&&o.target===document.activeElement){const{selectionStart:Y,selectionEnd:Z}=o.target;Y!==void 0&&Z!==void 0&&W(()=>{o.target===document.activeElement&&B.indexOf(o.target.value)===0&&o.target.setSelectionRange(Y,Z)})}e.autogrow===!0&&l()}function R(o){t("animationend",o),l()}function y(o,B){w=()=>{b=null,e.type!=="number"&&s.hasOwnProperty("value")===!0&&delete s.value,e.modelValue!==o&&c!==o&&(c=o,B===!0&&(k=!0),t("update:modelValue",o),W(()=>{c===o&&(c=NaN)})),w=void 0},e.type==="number"&&(h=!0,s.value=o),e.debounce!==void 0?(b!==null&&clearTimeout(b),s.value=o,b=setTimeout(w,e.debounce)):w()}function l(){requestAnimationFrame(()=>{const o=m.value;if(o!==null){const B=o.parentNode.style,{scrollTop:Y}=o,{overflowY:Z,maxHeight:z}=d.platform.is.firefox===!0?{}:window.getComputedStyle(o),X=Z!==void 0&&Z!=="scroll";X===!0&&(o.style.overflowY="hidden"),B.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",X===!0&&(o.style.overflowY=parseInt(z,10)<o.scrollHeight?"auto":"hidden"),B.marginBottom="",o.scrollTop=Y}})}function x(o){E(o),b!==null&&(clearTimeout(b),b=null),w!==void 0&&w(),t("change",o.target.value)}function H(o){o!==void 0&&he(o),b!==null&&(clearTimeout(b),b=null),w!==void 0&&w(),h=!1,k=!1,delete s.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=v.value!==void 0?v.value:"")})}function M(){return s.hasOwnProperty("value")===!0?s.value:v.value!==void 0?v.value:""}ue(()=>{H()}),ie(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:v,fieldClass:V(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:V(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:y,hasValue:A,floatingLabel:V(()=>A.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||me(e.displayValue)),getControl:()=>q(C.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...r.value,...e.type!=="file"?{value:M()}:F.value}),getShadowControl:()=>q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[q("span",{class:"invisible"},M()),q("span",e.shadowText)])});const O=ct(S);return Object.assign(u,{focus:f,select:n,getNativeElement:()=>m.value}),Re(u,"nativeEl",()=>m.value),O}}),St=Ae({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:i}){const u=G(),d=$(null);let s=0;const c=[];function h(v){const _=typeof v=="boolean"?v:e.noErrorFocus!==!0,U=++s,N=(F,A)=>{i("validation"+(F===!0?"Success":"Error"),A)},D=F=>{const A=F.validate();return typeof A.then=="function"?A.then(E=>({valid:E,comp:F}),E=>({valid:!1,comp:F,err:E})):Promise.resolve({valid:A,comp:F})};return(e.greedy===!0?Promise.all(c.map(D)).then(F=>F.filter(A=>A.valid!==!0)):c.reduce((F,A)=>F.then(()=>D(A).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(F=>[F])).then(F=>{if(F===void 0||F.length===0)return U===s&&N(!0),!0;if(U===s){const{comp:A,err:E}=F[0];if(E!==void 0&&console.error(E),N(!1,A),_===!0){const S=F.find(({comp:C})=>typeof C.focus=="function"&&Ke(C.$)===!1);S!==void 0&&S.comp.focus()}}return!1})}function k(){s++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function b(v){v!==void 0&&fe(v);const _=s+1;h().then(U=>{_===s&&U===!0&&(e.onSubmit!==void 0?i("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function w(v){v!==void 0&&fe(v),i("reset"),W(()=>{k(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){ge(()=>{if(d.value===null)return;const v=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),_=>_.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}De(qe,{bindComponent(v){c.push(v)},unbindComponent(v){const _=c.indexOf(v);_>-1&&c.splice(_,1)}});let Q=!1;return Fe(()=>{Q=!0}),_e(()=>{Q===!0&&e.autofocus===!0&&m()}),ie(()=>{e.autofocus===!0&&m()}),Object.assign(u.proxy,{validate:h,resetValidation:k,submit:b,reset:w,focus:m,getValidationComponents:()=>c}),()=>q("form",{class:"q-form",ref:d,onSubmit:b,onReset:w},te(t.default))}});const Mt={class:"q-pa-md"},Vt=K("div",{class:"col-12"},[K("h1",{class:"romade-italic text-center gt-xs"},"Contact Form"),K("h3",{class:"romade-italic text-center lt-sm"},"Contact Form")],-1),qt=K("div",{class:"col-12"},[K("h6",{class:"text-center"},[pe(" To Those that have web development inquiries, please refer them to "),K("a",{href:"https://sociallyradicalwebdesign.com"},"Socially Radical Web Design "),pe(". ")])],-1),Rt=K("div",{class:"col-12"},[K("h1",{class:"romade-italic text-center gt-xs"}," Message from our Sponsors "),K("h3",{class:"romade-italic text-center lt-sm"}," Message from our Sponsors ")],-1),Ft={class:"col-12"},Nt=je({__name:"ContactView",setup(e){const t=$(""),i=$(""),u=$(""),d=$(""),s=Ue({}),c=()=>{s.firstName=t.value,s.lastName=i.value,s.email=u.value,s.message=d.value,Ge.post("https://sociallyradicalguitarist.com/messages",s).then(function(h){h&&(t.value="",i.value="",u.value="",d.value="",alert("Your message has been received. Wait patiently for a reply."))}).catch(function(h){t.value="",i.value="",u.value="",d.value="",alert("Sorry, there was an error."+h+". Please wait until the problem is fixed and come back")})};return(h,k)=>(ze(),Le(Xe,{class:"row inline items-center justify-evenly"},{default:be(()=>[K("div",Mt,[Vt,qt,J(St,{onSubmit:Ze(c,["prevent"])},{default:be(()=>[J(ne,{name:"firstname",label:"First Name",type:"text",modelValue:t.value,"onUpdate:modelValue":k[0]||(k[0]=b=>t.value=b),"bg-color":"black","label-color":"white",filled:"",dark:"",color:"white",required:""},null,8,["modelValue"]),J(ne,{name:"lastname",label:"Last Name",type:"text",modelValue:i.value,"onUpdate:modelValue":k[1]||(k[1]=b=>i.value=b),"bg-color":"black","label-color":"white",filled:"",dark:"",color:"white",required:""},null,8,["modelValue"]),J(ne,{name:"email",label:"Email",type:"email",modelValue:u.value,"onUpdate:modelValue":k[2]||(k[2]=b=>u.value=b),"bg-color":"black","label-color":"white",filled:"",dark:"",color:"white",required:""},null,8,["modelValue"]),J(ne,{name:"Email Message",label:"Message",type:"textarea",modelValue:d.value,"onUpdate:modelValue":k[3]||(k[3]=b=>d.value=b),"bg-color":"black","label-color":"white",filled:"",dark:"",color:"white",required:""},null,8,["modelValue"]),J(Qe,{"no-caps":"",class:"romade-italic text-h4",label:"Submit",type:"submit",color:"black"})]),_:1},8,["onSubmit"]),Rt,K("div",Ft,[J(Je,{src:"https://rumble.com/embed/vybvym/?pub=4",ratio:16/9})])])]),_:1}))}});export{Nt as default};
