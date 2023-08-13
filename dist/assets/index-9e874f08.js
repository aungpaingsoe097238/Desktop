(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ml(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ie={},Ur=[],Vt=()=>{},sv=()=>!1,iv=/^on[^a-z]/,la=t=>iv.test(t),Ll=t=>t.startsWith("onUpdate:"),ze=Object.assign,Ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,ae=(t,e)=>ov.call(t,e),G=Array.isArray,Fr=t=>ua(t)==="[object Map]",dp=t=>ua(t)==="[object Set]",re=t=>typeof t=="function",Be=t=>typeof t=="string",Fl=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",fp=t=>Ce(t)&&re(t.then)&&re(t.catch),pp=Object.prototype.toString,ua=t=>pp.call(t),av=t=>ua(t).slice(8,-1),gp=t=>ua(t)==="[object Object]",Bl=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Eo=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cv=/-(\w)/g,tn=ha(t=>t.replace(cv,(e,n)=>n?n.toUpperCase():"")),lv=/\B([A-Z])/g,cs=ha(t=>t.replace(lv,"-$1").toLowerCase()),da=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),ac=ha(t=>t?`on${da(t)}`:""),Js=(t,e)=>!Object.is(t,e),wo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Oo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Dh;const $c=()=>Dh||(Dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ls(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?fv(r):ls(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Be(t))return t;if(Ce(t))return t}}const uv=/;(?![^(]*\))/g,hv=/:([^]+)/,dv=/\/\*[^]*?\*\//g;function fv(t){const e={};return t.replace(dv,"").split(uv).forEach(n=>{if(n){const r=n.split(hv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $l(t){let e="";if(Be(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=$l(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gv=Ml(pv);function mp(t){return!!t||t===""}const Ti=t=>Be(t)?t:t==null?"":G(t)||Ce(t)&&(t.toString===pp||!re(t.toString))?JSON.stringify(t,_p,2):String(t),_p=(t,e)=>e&&e.__v_isRef?_p(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:dp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!G(e)&&!gp(e)?String(e):e;let wt;class yp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function vp(t){return new yp(t)}function mv(t,e=wt){e&&e.active&&e.effects.push(t)}function jl(){return wt}function Ep(t){wt&&wt.cleanups.push(t)}const ql=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wp=t=>(t.w&jn)>0,Tp=t=>(t.n&jn)>0,_v=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jn},yv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];wp(s)&&!Tp(s)?s.delete(t):e[n++]=s,s.w&=~jn,s.n&=~jn}e.length=n}},No=new WeakMap;let Cs=0,jn=1;const jc=30;let Dt;const or=Symbol(""),qc=Symbol("");class Hl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mv(this,r)}run(){if(!this.active)return this.fn();let e=Dt,n=Vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Vn=!0,jn=1<<++Cs,Cs<=jc?_v(this):Oh(this),this.fn()}finally{Cs<=jc&&yv(this),jn=1<<--Cs,Dt=this.parent,Vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Oh(this),this.onStop&&this.onStop(),this.active=!1)}}function Oh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vn=!0;const Ip=[];function us(){Ip.push(Vn),Vn=!1}function hs(){const t=Ip.pop();Vn=t===void 0?!0:t}function yt(t,e,n){if(Vn&&Dt){let r=No.get(t);r||No.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ql()),Ap(s)}}function Ap(t,e){let n=!1;Cs<=jc?Tp(t)||(t.n|=jn,n=!wp(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function pn(t,e,n,r,s,i){const o=No.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Bl(n)&&a.push(o.get("length")):(a.push(o.get(or)),Fr(t)&&a.push(o.get(qc)));break;case"delete":G(t)||(a.push(o.get(or)),Fr(t)&&a.push(o.get(qc)));break;case"set":Fr(t)&&a.push(o.get(or));break}if(a.length===1)a[0]&&Hc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hc(ql(c))}}function Hc(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&Nh(r);for(const r of n)r.computed||Nh(r)}function Nh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function vv(t,e){var n;return(n=No.get(t))==null?void 0:n.get(e)}const Ev=Ml("__proto__,__v_isRef,__isVue"),bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fl)),wv=zl(),Tv=zl(!1,!0),Iv=zl(!0),Vh=Av();function Av(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const r=ce(this)[e].apply(this,n);return hs(),r}}),t}function bv(t){const e=ce(this);return yt(e,"has",t),e.hasOwnProperty(t)}function zl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?$v:kp:e?Cp:Sp).get(r))return r;const o=G(r);if(!t){if(o&&ae(Vh,s))return Reflect.get(Vh,s,i);if(s==="hasOwnProperty")return bv}const a=Reflect.get(r,s,i);return(Fl(s)?bp.has(s):Ev(s))||(t||yt(r,"get",s),e)?a:De(a)?o&&Bl(s)?a:a.value:Ce(a)?t?Dp(a):Ii(a):a}}const Rv=Rp(),Pv=Rp(!0);function Rp(t=!1){return function(n,r,s,i){let o=n[r];if(Kr(o)&&De(o)&&!De(s))return!1;if(!t&&(!Vo(s)&&!Kr(s)&&(o=ce(o),s=ce(s)),!G(n)&&De(o)&&!De(s)))return o.value=s,!0;const a=G(n)&&Bl(r)?Number(r)<n.length:ae(n,r),c=Reflect.set(n,r,s,i);return n===ce(i)&&(a?Js(s,o)&&pn(n,"set",r,s):pn(n,"add",r,s)),c}}function Sv(t,e){const n=ae(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pn(t,"delete",e,void 0),r}function Cv(t,e){const n=Reflect.has(t,e);return(!Fl(e)||!bp.has(e))&&yt(t,"has",e),n}function kv(t){return yt(t,"iterate",G(t)?"length":or),Reflect.ownKeys(t)}const Pp={get:wv,set:Rv,deleteProperty:Sv,has:Cv,ownKeys:kv},xv={get:Iv,set(t,e){return!0},deleteProperty(t,e){return!0}},Dv=ze({},Pp,{get:Tv,set:Pv}),Wl=t=>t,fa=t=>Reflect.getPrototypeOf(t);function Yi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);n||(e!==i&&yt(s,"get",e),yt(s,"get",i));const{has:o}=fa(s),a=r?Wl:n?Ql:Xs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Zi(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return e||(t!==s&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function eo(t,e=!1){return t=t.__v_raw,!e&&yt(ce(t),"iterate",or),Reflect.get(t,"size",t)}function Mh(t){t=ce(t);const e=ce(this);return fa(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function Lh(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=fa(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Js(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function Uh(t){const e=ce(this),{has:n,get:r}=fa(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function Fh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function to(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),c=e?Wl:t?Ql:Xs;return!t&&yt(a,"iterate",or),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function no(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=Fr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Wl:e?Ql:Xs;return!e&&yt(i,"iterate",c?qc:or),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:this}}function Ov(){const t={get(i){return Yi(this,i)},get size(){return eo(this)},has:Zi,add:Mh,set:Lh,delete:Uh,clear:Fh,forEach:to(!1,!1)},e={get(i){return Yi(this,i,!1,!0)},get size(){return eo(this)},has:Zi,add:Mh,set:Lh,delete:Uh,clear:Fh,forEach:to(!1,!0)},n={get(i){return Yi(this,i,!0)},get size(){return eo(this,!0)},has(i){return Zi.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:to(!0,!1)},r={get(i){return Yi(this,i,!0,!0)},get size(){return eo(this,!0)},has(i){return Zi.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=no(i,!1,!1),n[i]=no(i,!0,!1),e[i]=no(i,!1,!0),r[i]=no(i,!0,!0)}),[t,n,e,r]}const[Nv,Vv,Mv,Lv]=Ov();function Kl(t,e){const n=e?t?Lv:Mv:t?Vv:Nv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const Uv={get:Kl(!1,!1)},Fv={get:Kl(!1,!0)},Bv={get:Kl(!0,!1)},Sp=new WeakMap,Cp=new WeakMap,kp=new WeakMap,$v=new WeakMap;function jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qv(t){return t.__v_skip||!Object.isExtensible(t)?0:jv(av(t))}function Ii(t){return Kr(t)?t:Gl(t,!1,Pp,Uv,Sp)}function xp(t){return Gl(t,!1,Dv,Fv,Cp)}function Dp(t){return Gl(t,!0,xv,Bv,kp)}function Gl(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Mn(t){return Kr(t)?Mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Kr(t){return!!(t&&t.__v_isReadonly)}function Vo(t){return!!(t&&t.__v_isShallow)}function Op(t){return Mn(t)||Kr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function pa(t){return Oo(t,"__v_skip",!0),t}const Xs=t=>Ce(t)?Ii(t):t,Ql=t=>Ce(t)?Dp(t):t;function Jl(t){Vn&&Dt&&(t=ce(t),Ap(t.dep||(t.dep=ql())))}function Xl(t,e){t=ce(t);const n=t.dep;n&&Hc(n)}function De(t){return!!(t&&t.__v_isRef===!0)}function Re(t){return Np(t,!1)}function Hv(t){return Np(t,!0)}function Np(t,e){return De(t)?t:new zv(t,e)}class zv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Xs(e)}get value(){return Jl(this),this._value}set value(e){const n=this.__v_isShallow||Vo(e)||Kr(e);e=n?e:ce(e),Js(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xs(e),Xl(this))}}function He(t){return De(t)?t.value:t}const Wv={get:(t,e,n)=>He(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return De(s)&&!De(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vp(t){return Mn(t)?t:new Proxy(t,Wv)}class Kv{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Jl(this),()=>Xl(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function Gv(t){return new Kv(t)}function Mp(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=Jv(t,n);return e}class Qv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return vv(ce(this._object),this._key)}}function Jv(t,e,n){const r=t[e];return De(r)?r:new Qv(t,e,n)}class Xv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Hl(e,()=>{this._dirty||(this._dirty=!0,Xl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ce(this);return Jl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yv(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=Vt):(r=t.get,s=t.set),new Xv(r,s,i||!s,n)}function Ln(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ga(i,e,n)}return s}function Mt(t,e,n,r){if(re(t)){const i=Ln(t,e,n,r);return i&&fp(i)&&i.catch(o=>{ga(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}function ga(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}Zv(t,n,s,r)}function Zv(t,e,n,r=!0){console.error(t)}let Ys=!1,zc=!1;const it=[];let zt=0;const Br=[];let cn=null,er=0;const Lp=Promise.resolve();let Yl=null;function Zl(t){const e=Yl||Lp;return t?e.then(this?t.bind(this):t):e}function eE(t){let e=zt+1,n=it.length;for(;e<n;){const r=e+n>>>1;Zs(it[r])<t?e=r+1:n=r}return e}function eu(t){(!it.length||!it.includes(t,Ys&&t.allowRecurse?zt+1:zt))&&(t.id==null?it.push(t):it.splice(eE(t.id),0,t),Up())}function Up(){!Ys&&!zc&&(zc=!0,Yl=Lp.then(Bp))}function tE(t){const e=it.indexOf(t);e>zt&&it.splice(e,1)}function nE(t){G(t)?Br.push(...t):(!cn||!cn.includes(t,t.allowRecurse?er+1:er))&&Br.push(t),Up()}function Bh(t,e=Ys?zt+1:0){for(;e<it.length;e++){const n=it[e];n&&n.pre&&(it.splice(e,1),e--,n())}}function Fp(t){if(Br.length){const e=[...new Set(Br)];if(Br.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((n,r)=>Zs(n)-Zs(r)),er=0;er<cn.length;er++)cn[er]();cn=null,er=0}}const Zs=t=>t.id==null?1/0:t.id,rE=(t,e)=>{const n=Zs(t)-Zs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bp(t){zc=!1,Ys=!0,it.sort(rE);const e=Vt;try{for(zt=0;zt<it.length;zt++){const n=it[zt];n&&n.active!==!1&&Ln(n,null,14)}}finally{zt=0,it.length=0,Fp(),Ys=!1,Yl=null,(it.length||Br.length)&&Bp()}}function sE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ie;d&&(s=n.map(f=>Be(f)?f.trim():f)),h&&(s=n.map(Bc))}let a,c=r[a=ac(e)]||r[a=ac(tn(e))];!c&&i&&(c=r[a=ac(cs(e))]),c&&Mt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(l,t,6,s)}}function $p(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=$p(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):ze(o,i),Ce(t)&&r.set(t,o),o)}function ma(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,cs(e))||ae(t,e))}let Xe=null,_a=null;function Mo(t){const e=Xe;return Xe=t,_a=t&&t.type.__scopeId||null,e}function iE(t){_a=t}function oE(){_a=null}function Ai(t,e=Xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yh(-1);const i=Mo(e);let o;try{o=t(...s)}finally{Mo(i),r._d&&Yh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:_,inheritAttrs:v}=t;let y,R;const C=Mo(t);try{if(n.shapeFlag&4){const k=s||r;y=Ht(u.call(k,k,h,i,f,d,_)),R=c}else{const k=e;y=Ht(k.length>1?k(i,{attrs:c,slots:a,emit:l}):k(i,null)),R=e.props?c:aE(c)}}catch(k){Fs.length=0,ga(k,t,1),y=ve(qn)}let V=y;if(R&&v!==!1){const k=Object.keys(R),{shapeFlag:W}=V;k.length&&W&7&&(o&&k.some(Ll)&&(R=cE(R,o)),V=Gr(V,R))}return n.dirs&&(V=Gr(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),y=V,Mo(C),y}const aE=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},cE=(t,e)=>{const n={};for(const r in t)(!Ll(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$h(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ma(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$h(r,o,l):!0:!!o;return!1}function $h(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ma(n,i))return!0}return!1}function uE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hE=t=>t.__isSuspense;function dE(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):nE(t)}const ro={};function ar(t,e,n){return jp(t,e,n)}function jp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){var a;const c=jl()===((a=qe)==null?void 0:a.scope)?qe:null;let l,u=!1,h=!1;if(De(t)?(l=()=>t.value,u=Vo(t)):Mn(t)?(l=()=>t,r=!0):G(t)?(h=!0,u=t.some(k=>Mn(k)||Vo(k)),l=()=>t.map(k=>{if(De(k))return k.value;if(Mn(k))return nr(k);if(re(k))return Ln(k,c,2)})):re(t)?e?l=()=>Ln(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Mt(t,c,3,[f])}:l=Vt,e&&r){const k=l;l=()=>nr(k())}let d,f=k=>{d=C.onStop=()=>{Ln(k,c,4)}},_;if(ni)if(f=Vt,e?n&&Mt(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const k=ow();_=k.__watcherHandles||(k.__watcherHandles=[])}else return Vt;let v=h?new Array(t.length).fill(ro):ro;const y=()=>{if(C.active)if(e){const k=C.run();(r||u||(h?k.some((W,L)=>Js(W,v[L])):Js(k,v)))&&(d&&d(),Mt(e,c,3,[k,v===ro?void 0:h&&v[0]===ro?[]:v,f]),v=k)}else C.run()};y.allowRecurse=!!e;let R;s==="sync"?R=y:s==="post"?R=()=>mt(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),R=()=>eu(y));const C=new Hl(l,R);e?n?y():v=C.run():s==="post"?mt(C.run.bind(C),c&&c.suspense):C.run();const V=()=>{C.stop(),c&&c.scope&&Ul(c.scope.effects,C)};return _&&_.push(V),V}function fE(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?qp(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=qe;Qr(this);const a=jp(s,i.bind(r),n);return o?Qr(o):cr(),a}function qp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function nr(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))nr(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)nr(t[n],e);else if(dp(t)||Fr(t))t.forEach(n=>{nr(n,e)});else if(gp(t))for(const n in t)nr(t[n],e);return t}function jh(t,e){const n=Xe;if(n===null)return t;const r=Ia(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&nr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(us(),Mt(c,n,8,[t.el,a,t,e]),hs())}}function ya(t,e){return re(t)?(()=>ze({name:t.name},e,{setup:t}))():t}const Ls=t=>!!t.type.__asyncLoader,Hp=t=>t.type.__isKeepAlive;function pE(t,e){zp(t,"a",e)}function gE(t,e){zp(t,"da",e)}function zp(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hp(s.parent.vnode)&&mE(r,e,n,s),s=s.parent}}function mE(t,e,n,r){const s=va(e,t,r,!0);Wp(()=>{Ul(r[e],s)},n)}function va(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Qr(n);const a=Mt(e,n,t,o);return cr(),hs(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=qe)=>(!ni||t==="sp")&&va(t,(...r)=>e(...r),n),_E=En("bm"),dr=En("m"),yE=En("bu"),vE=En("u"),EE=En("bum"),Wp=En("um"),wE=En("sp"),TE=En("rtg"),IE=En("rtc");function AE(t,e=qe){va("ec",t,e)}const Kp="components";function bE(t,e){return PE(Kp,t,!0,e)||t}const RE=Symbol.for("v-ndc");function PE(t,e,n=!0,r=!1){const s=Xe||qe;if(s){const i=s.type;if(t===Kp){const a=rw(i,!1);if(a&&(a===e||a===tn(e)||a===da(tn(e))))return i}const o=qh(s[t]||i[t],e)||qh(s.appContext[t],e);return!o&&r?i:o}}function qh(t,e){return t&&(t[e]||t[tn(e)]||t[da(tn(e))])}function ds(t,e,n,r){let s;const i=n&&n[r];if(G(t)||Be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Gp(t,e,n={},r,s){if(Xe.isCE||Xe.parent&&Ls(Xe.parent)&&Xe.parent.isCE)return e!=="default"&&(n.name=e),ve("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ne();const o=i&&Qp(i(n)),a=xt(je,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Qp(t){return t.some(e=>Uo(e)?!(e.type===qn||e.type===je&&!Qp(e.children)):!0)?t:null}const Wc=t=>t?og(t)?Ia(t)||t.proxy:Wc(t.parent):null,Us=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wc(t.parent),$root:t=>Wc(t.root),$emit:t=>t.emit,$options:t=>tu(t),$forceUpdate:t=>t.f||(t.f=()=>eu(t.update)),$nextTick:t=>t.n||(t.n=Zl.bind(t.proxy)),$watch:t=>fE.bind(t)}),lc=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ae(t,e),SE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(lc(r,e))return o[e]=1,r[e];if(s!==Ie&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==Ie&&ae(n,e))return o[e]=4,n[e];Kc&&(o[e]=0)}}const u=Us[e];let h,d;if(u)return e==="$attrs"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return lc(s,e)?(s[e]=n,!0):r!==Ie&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ae(t,o)||lc(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(Us,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hh(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kc=!0;function CE(t){const e=tu(t),n=t.proxy,r=t.ctx;Kc=!1,e.beforeCreate&&zh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:v,deactivated:y,beforeDestroy:R,beforeUnmount:C,destroyed:V,unmounted:k,render:W,renderTracked:L,renderTriggered:le,errorCaptured:K,serverPrefetch:ee,expose:we,inheritAttrs:et,components:vt,directives:bt,filters:Jn}=e;if(l&&kE(l,r,null),o)for(const Ee in o){const fe=o[Ee];re(fe)&&(r[Ee]=fe.bind(n))}if(s){const Ee=s.call(n,n);Ce(Ee)&&(t.data=Ii(Ee))}if(Kc=!0,i)for(const Ee in i){const fe=i[Ee],sn=re(fe)?fe.bind(n,n):re(fe.get)?fe.get.bind(n,n):Vt,Tn=!re(fe)&&re(fe.set)?fe.set.bind(n):Vt,$t=Ne({get:sn,set:Tn});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>$t.value,set:gt=>$t.value=gt})}if(a)for(const Ee in a)Jp(a[Ee],r,n,Ee);if(c){const Ee=re(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(fe=>{To(fe,Ee[fe])})}u&&zh(u,t,"c");function he(Ee,fe){G(fe)?fe.forEach(sn=>Ee(sn.bind(n))):fe&&Ee(fe.bind(n))}if(he(_E,h),he(dr,d),he(yE,f),he(vE,_),he(pE,v),he(gE,y),he(AE,K),he(IE,L),he(TE,le),he(EE,C),he(Wp,k),he(wE,ee),G(we))if(we.length){const Ee=t.exposed||(t.exposed={});we.forEach(fe=>{Object.defineProperty(Ee,fe,{get:()=>n[fe],set:sn=>n[fe]=sn})})}else t.exposed||(t.exposed={});W&&t.render===Vt&&(t.render=W),et!=null&&(t.inheritAttrs=et),vt&&(t.components=vt),bt&&(t.directives=bt)}function kE(t,e,n=Vt){G(t)&&(t=Gc(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Ct(s.from||r,s.default,!0):i=Ct(s.from||r):i=Ct(s),De(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zh(t,e,n){Mt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jp(t,e,n,r){const s=r.includes(".")?qp(n,r):()=>n[r];if(Be(t)){const i=e[t];re(i)&&ar(s,i)}else if(re(t))ar(s,t.bind(n));else if(Ce(t))if(G(t))t.forEach(i=>Jp(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&ar(s,i,t)}}function tu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Lo(c,l,o,!0)),Lo(c,e,o)),Ce(e)&&i.set(e,c),c}function Lo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Lo(t,i,n,!0),s&&s.forEach(o=>Lo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xE={data:Wh,props:Kh,emits:Kh,methods:ks,computed:ks,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:ks,directives:ks,watch:OE,provide:Wh,inject:DE};function Wh(t,e){return e?t?function(){return ze(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function DE(t,e){return ks(Gc(t),Gc(e))}function Gc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function ks(t,e){return t?ze(Object.create(null),t,e):e}function Kh(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:ze(Object.create(null),Hh(t),Hh(e??{})):e}function OE(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function Xp(){return{app:null,config:{isNativeTag:sv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NE=0;function VE(t,e){return function(r,s=null){re(r)||(r=ze({},r)),s!=null&&!Ce(s)&&(s=null);const i=Xp(),o=new Set;let a=!1;const c=i.app={_uid:NE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ve(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ia(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ei=c;try{return l()}finally{ei=null}}};return c}}let ei=null;function To(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function Ct(t,e,n=!1){const r=qe||Xe;if(r||ei){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ei._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}function ME(){return!!(qe||Xe||ei)}function LE(t,e,n,r=!1){const s={},i={};Oo(i,wa,1),t.propsDefaults=Object.create(null),Yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function UE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ma(t.emitsOptions,d))continue;const f=e[d];if(c)if(ae(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const _=tn(d);s[_]=Qc(c,a,_,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{Yp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=cs(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Qc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&pn(t,"set","$attrs")}function Yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Eo(c))continue;const l=e[c];let u;s&&ae(s,u=tn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ma(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ce(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Qc(s,c,h,l[h],t,!ae(l,h))}}return o}function Qc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&re(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Qr(s),r=l[n]=c.call(null,e),cr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}function Zp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[d,f]=Zp(h,e,!0);ze(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&r.set(t,Ur),Ur;if(G(i))for(let u=0;u<i.length;u++){const h=tn(i[u]);Gh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=tn(u);if(Gh(h)){const d=i[u],f=o[h]=G(d)||re(d)?{type:d}:ze({},d);if(f){const _=Xh(Boolean,f.type),v=Xh(String,f.type);f[0]=_>-1,f[1]=v<0||_<v,(_>-1||ae(f,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&r.set(t,l),l}function Gh(t){return t[0]!=="$"}function Qh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Jh(t,e){return Qh(t)===Qh(e)}function Xh(t,e){return G(e)?e.findIndex(n=>Jh(n,t)):re(e)&&Jh(e,t)?0:-1}const eg=t=>t[0]==="_"||t==="$stable",nu=t=>G(t)?t.map(Ht):[Ht(t)],FE=(t,e,n)=>{if(e._n)return e;const r=Ai((...s)=>nu(e(...s)),n);return r._c=!1,r},tg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eg(s))continue;const i=t[s];if(re(i))e[s]=FE(s,i,r);else if(i!=null){const o=nu(i);e[s]=()=>o}}},ng=(t,e)=>{const n=nu(e);t.slots.default=()=>n},BE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Oo(e,"_",n)):tg(e,t.slots={})}else t.slots={},e&&ng(t,e);Oo(t.slots,wa,1)},$E=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,tg(e,s)),o=e}else e&&(ng(t,e),o={default:1});if(i)for(const a in s)!eg(a)&&!(a in o)&&delete s[a]};function Jc(t,e,n,r,s=!1){if(G(t)){t.forEach((d,f)=>Jc(d,e&&(G(e)?e[f]:e),n,r,s));return}if(Ls(r)&&!s)return;const i=r.shapeFlag&4?Ia(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Be(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):De(l)&&(l.value=null)),re(c))Ln(c,a,12,[o,u]);else{const d=Be(c),f=De(c);if(d||f){const _=()=>{if(t.f){const v=d?ae(h,c)?h[c]:u[c]:c.value;s?G(v)&&Ul(v,i):G(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,mt(_,n)):_()}}}const mt=dE;function jE(t){return qE(t)}function qE(t,e){const n=$c();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Vt,insertStaticContent:_}=t,v=(p,g,m,E=null,T=null,b=null,M=!1,x=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!As(p,g)&&(E=w(p),gt(p,T,b,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:P,ref:H,shapeFlag:B}=g;switch(P){case Ea:y(p,g,m,E);break;case qn:R(p,g,m,E);break;case Io:p==null&&C(g,m,E,M);break;case je:vt(p,g,m,E,T,b,M,x,D);break;default:B&1?W(p,g,m,E,T,b,M,x,D):B&6?bt(p,g,m,E,T,b,M,x,D):(B&64||B&128)&&P.process(p,g,m,E,T,b,M,x,D,O)}H!=null&&T&&Jc(H,p&&p.ref,b,g||p,!g)},y=(p,g,m,E)=>{if(p==null)r(g.el=a(g.children),m,E);else{const T=g.el=p.el;g.children!==p.children&&l(T,g.children)}},R=(p,g,m,E)=>{p==null?r(g.el=c(g.children||""),m,E):g.el=p.el},C=(p,g,m,E)=>{[p.el,p.anchor]=_(p.children,g,m,E,p.el,p.anchor)},V=({el:p,anchor:g},m,E)=>{let T;for(;p&&p!==g;)T=d(p),r(p,m,E),p=T;r(g,m,E)},k=({el:p,anchor:g})=>{let m;for(;p&&p!==g;)m=d(p),s(p),p=m;s(g)},W=(p,g,m,E,T,b,M,x,D)=>{M=M||g.type==="svg",p==null?L(g,m,E,T,b,M,x,D):ee(p,g,T,b,M,x,D)},L=(p,g,m,E,T,b,M,x)=>{let D,P;const{type:H,props:B,shapeFlag:z,transition:Y,dirs:se}=p;if(D=p.el=o(p.type,b,B&&B.is,B),z&8?u(D,p.children):z&16&&K(p.children,D,null,E,T,b&&H!=="foreignObject",M,x),se&&Xn(p,null,E,"created"),le(D,p,p.scopeId,M,E),B){for(const ye in B)ye!=="value"&&!Eo(ye)&&i(D,ye,null,B[ye],b,p.children,E,T,tt);"value"in B&&i(D,"value",null,B.value),(P=B.onVnodeBeforeMount)&&qt(P,E,p)}se&&Xn(p,null,E,"beforeMount");const Te=(!T||T&&!T.pendingBranch)&&Y&&!Y.persisted;Te&&Y.beforeEnter(D),r(D,g,m),((P=B&&B.onVnodeMounted)||Te||se)&&mt(()=>{P&&qt(P,E,p),Te&&Y.enter(D),se&&Xn(p,null,E,"mounted")},T)},le=(p,g,m,E,T)=>{if(m&&f(p,m),E)for(let b=0;b<E.length;b++)f(p,E[b]);if(T){let b=T.subTree;if(g===b){const M=T.vnode;le(p,M,M.scopeId,M.slotScopeIds,T.parent)}}},K=(p,g,m,E,T,b,M,x,D=0)=>{for(let P=D;P<p.length;P++){const H=p[P]=x?Pn(p[P]):Ht(p[P]);v(null,H,g,m,E,T,b,M,x)}},ee=(p,g,m,E,T,b,M)=>{const x=g.el=p.el;let{patchFlag:D,dynamicChildren:P,dirs:H}=g;D|=p.patchFlag&16;const B=p.props||Ie,z=g.props||Ie;let Y;m&&Yn(m,!1),(Y=z.onVnodeBeforeUpdate)&&qt(Y,m,g,p),H&&Xn(g,p,m,"beforeUpdate"),m&&Yn(m,!0);const se=T&&g.type!=="foreignObject";if(P?we(p.dynamicChildren,P,x,m,E,se,b):M||fe(p,g,x,null,m,E,se,b,!1),D>0){if(D&16)et(x,g,B,z,m,E,T);else if(D&2&&B.class!==z.class&&i(x,"class",null,z.class,T),D&4&&i(x,"style",B.style,z.style,T),D&8){const Te=g.dynamicProps;for(let ye=0;ye<Te.length;ye++){const Ve=Te[ye],kt=B[Ve],Rr=z[Ve];(Rr!==kt||Ve==="value")&&i(x,Ve,kt,Rr,T,p.children,m,E,tt)}}D&1&&p.children!==g.children&&u(x,g.children)}else!M&&P==null&&et(x,g,B,z,m,E,T);((Y=z.onVnodeUpdated)||H)&&mt(()=>{Y&&qt(Y,m,g,p),H&&Xn(g,p,m,"updated")},E)},we=(p,g,m,E,T,b,M)=>{for(let x=0;x<g.length;x++){const D=p[x],P=g[x],H=D.el&&(D.type===je||!As(D,P)||D.shapeFlag&70)?h(D.el):m;v(D,P,H,null,E,T,b,M,!0)}},et=(p,g,m,E,T,b,M)=>{if(m!==E){if(m!==Ie)for(const x in m)!Eo(x)&&!(x in E)&&i(p,x,m[x],null,M,g.children,T,b,tt);for(const x in E){if(Eo(x))continue;const D=E[x],P=m[x];D!==P&&x!=="value"&&i(p,x,P,D,M,g.children,T,b,tt)}"value"in E&&i(p,"value",m.value,E.value)}},vt=(p,g,m,E,T,b,M,x,D)=>{const P=g.el=p?p.el:a(""),H=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:Y}=g;Y&&(x=x?x.concat(Y):Y),p==null?(r(P,m,E),r(H,m,E),K(g.children,m,H,T,b,M,x,D)):B>0&&B&64&&z&&p.dynamicChildren?(we(p.dynamicChildren,z,m,T,b,M,x),(g.key!=null||T&&g===T.subTree)&&rg(p,g,!0)):fe(p,g,m,H,T,b,M,x,D)},bt=(p,g,m,E,T,b,M,x,D)=>{g.slotScopeIds=x,p==null?g.shapeFlag&512?T.ctx.activate(g,m,E,M,D):Jn(g,m,E,T,b,M,D):Rt(p,g,D)},Jn=(p,g,m,E,T,b,M)=>{const x=p.component=YE(p,E,T);if(Hp(p)&&(x.ctx.renderer=O),ZE(x),x.asyncDep){if(T&&T.registerDep(x,he),!p.el){const D=x.subTree=ve(qn);R(null,D,g,m)}return}he(x,p,g,m,T,b,M)},Rt=(p,g,m)=>{const E=g.component=p.component;if(lE(p,g,m))if(E.asyncDep&&!E.asyncResolved){Ee(E,g,m);return}else E.next=g,tE(E.update),E.update();else g.el=p.el,E.vnode=g},he=(p,g,m,E,T,b,M)=>{const x=()=>{if(p.isMounted){let{next:H,bu:B,u:z,parent:Y,vnode:se}=p,Te=H,ye;Yn(p,!1),H?(H.el=se.el,Ee(p,H,M)):H=se,B&&wo(B),(ye=H.props&&H.props.onVnodeBeforeUpdate)&&qt(ye,Y,H,se),Yn(p,!0);const Ve=cc(p),kt=p.subTree;p.subTree=Ve,v(kt,Ve,h(kt.el),w(kt),p,T,b),H.el=Ve.el,Te===null&&uE(p,Ve.el),z&&mt(z,T),(ye=H.props&&H.props.onVnodeUpdated)&&mt(()=>qt(ye,Y,H,se),T)}else{let H;const{el:B,props:z}=g,{bm:Y,m:se,parent:Te}=p,ye=Ls(g);if(Yn(p,!1),Y&&wo(Y),!ye&&(H=z&&z.onVnodeBeforeMount)&&qt(H,Te,g),Yn(p,!0),B&&pe){const Ve=()=>{p.subTree=cc(p),pe(B,p.subTree,p,T,null)};ye?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ve()):Ve()}else{const Ve=p.subTree=cc(p);v(null,Ve,m,E,p,T,b),g.el=Ve.el}if(se&&mt(se,T),!ye&&(H=z&&z.onVnodeMounted)){const Ve=g;mt(()=>qt(H,Te,Ve),T)}(g.shapeFlag&256||Te&&Ls(Te.vnode)&&Te.vnode.shapeFlag&256)&&p.a&&mt(p.a,T),p.isMounted=!0,g=m=E=null}},D=p.effect=new Hl(x,()=>eu(P),p.scope),P=p.update=()=>D.run();P.id=p.uid,Yn(p,!0),P()},Ee=(p,g,m)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,UE(p,g.props,E,m),$E(p,g.children,m),us(),Bh(),hs()},fe=(p,g,m,E,T,b,M,x,D=!1)=>{const P=p&&p.children,H=p?p.shapeFlag:0,B=g.children,{patchFlag:z,shapeFlag:Y}=g;if(z>0){if(z&128){Tn(P,B,m,E,T,b,M,x,D);return}else if(z&256){sn(P,B,m,E,T,b,M,x,D);return}}Y&8?(H&16&&tt(P,T,b),B!==P&&u(m,B)):H&16?Y&16?Tn(P,B,m,E,T,b,M,x,D):tt(P,T,b,!0):(H&8&&u(m,""),Y&16&&K(B,m,E,T,b,M,x,D))},sn=(p,g,m,E,T,b,M,x,D)=>{p=p||Ur,g=g||Ur;const P=p.length,H=g.length,B=Math.min(P,H);let z;for(z=0;z<B;z++){const Y=g[z]=D?Pn(g[z]):Ht(g[z]);v(p[z],Y,m,null,T,b,M,x,D)}P>H?tt(p,T,b,!0,!1,B):K(g,m,E,T,b,M,x,D,B)},Tn=(p,g,m,E,T,b,M,x,D)=>{let P=0;const H=g.length;let B=p.length-1,z=H-1;for(;P<=B&&P<=z;){const Y=p[P],se=g[P]=D?Pn(g[P]):Ht(g[P]);if(As(Y,se))v(Y,se,m,null,T,b,M,x,D);else break;P++}for(;P<=B&&P<=z;){const Y=p[B],se=g[z]=D?Pn(g[z]):Ht(g[z]);if(As(Y,se))v(Y,se,m,null,T,b,M,x,D);else break;B--,z--}if(P>B){if(P<=z){const Y=z+1,se=Y<H?g[Y].el:E;for(;P<=z;)v(null,g[P]=D?Pn(g[P]):Ht(g[P]),m,se,T,b,M,x,D),P++}}else if(P>z)for(;P<=B;)gt(p[P],T,b,!0),P++;else{const Y=P,se=P,Te=new Map;for(P=se;P<=z;P++){const Et=g[P]=D?Pn(g[P]):Ht(g[P]);Et.key!=null&&Te.set(Et.key,P)}let ye,Ve=0;const kt=z-se+1;let Rr=!1,Ch=0;const Is=new Array(kt);for(P=0;P<kt;P++)Is[P]=0;for(P=Y;P<=B;P++){const Et=p[P];if(Ve>=kt){gt(Et,T,b,!0);continue}let jt;if(Et.key!=null)jt=Te.get(Et.key);else for(ye=se;ye<=z;ye++)if(Is[ye-se]===0&&As(Et,g[ye])){jt=ye;break}jt===void 0?gt(Et,T,b,!0):(Is[jt-se]=P+1,jt>=Ch?Ch=jt:Rr=!0,v(Et,g[jt],m,null,T,b,M,x,D),Ve++)}const kh=Rr?HE(Is):Ur;for(ye=kh.length-1,P=kt-1;P>=0;P--){const Et=se+P,jt=g[Et],xh=Et+1<H?g[Et+1].el:E;Is[P]===0?v(null,jt,m,xh,T,b,M,x,D):Rr&&(ye<0||P!==kh[ye]?$t(jt,m,xh,2):ye--)}}},$t=(p,g,m,E,T=null)=>{const{el:b,type:M,transition:x,children:D,shapeFlag:P}=p;if(P&6){$t(p.component.subTree,g,m,E);return}if(P&128){p.suspense.move(g,m,E);return}if(P&64){M.move(p,g,m,O);return}if(M===je){r(b,g,m);for(let B=0;B<D.length;B++)$t(D[B],g,m,E);r(p.anchor,g,m);return}if(M===Io){V(p,g,m);return}if(E!==2&&P&1&&x)if(E===0)x.beforeEnter(b),r(b,g,m),mt(()=>x.enter(b),T);else{const{leave:B,delayLeave:z,afterLeave:Y}=x,se=()=>r(b,g,m),Te=()=>{B(b,()=>{se(),Y&&Y()})};z?z(b,se,Te):Te()}else r(b,g,m)},gt=(p,g,m,E=!1,T=!1)=>{const{type:b,props:M,ref:x,children:D,dynamicChildren:P,shapeFlag:H,patchFlag:B,dirs:z}=p;if(x!=null&&Jc(x,null,m,p,!0),H&256){g.ctx.deactivate(p);return}const Y=H&1&&z,se=!Ls(p);let Te;if(se&&(Te=M&&M.onVnodeBeforeUnmount)&&qt(Te,g,p),H&6)Xi(p.component,m,E);else{if(H&128){p.suspense.unmount(m,E);return}Y&&Xn(p,null,g,"beforeUnmount"),H&64?p.type.remove(p,g,m,T,O,E):P&&(b!==je||B>0&&B&64)?tt(P,g,m,!1,!0):(b===je&&B&384||!T&&H&16)&&tt(D,g,m),E&&Ar(p)}(se&&(Te=M&&M.onVnodeUnmounted)||Y)&&mt(()=>{Te&&qt(Te,g,p),Y&&Xn(p,null,g,"unmounted")},m)},Ar=p=>{const{type:g,el:m,anchor:E,transition:T}=p;if(g===je){br(m,E);return}if(g===Io){k(p);return}const b=()=>{s(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:x}=T,D=()=>M(m,b);x?x(p.el,b,D):D()}else b()},br=(p,g)=>{let m;for(;p!==g;)m=d(p),s(p),p=m;s(g)},Xi=(p,g,m)=>{const{bum:E,scope:T,update:b,subTree:M,um:x}=p;E&&wo(E),T.stop(),b&&(b.active=!1,gt(M,p,g,m)),x&&mt(x,g),mt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},tt=(p,g,m,E=!1,T=!1,b=0)=>{for(let M=b;M<p.length;M++)gt(p[M],g,m,E,T)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),U=(p,g,m)=>{p==null?g._vnode&&gt(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,m),Bh(),Fp(),g._vnode=p},O={p:v,um:gt,m:$t,r:Ar,mt:Jn,mc:K,pc:fe,pbc:we,n:w,o:t};let j,pe;return e&&([j,pe]=e(O)),{render:U,hydrate:j,createApp:VE(U,j)}}function Yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rg(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||rg(o,a)),a.type===Ea&&(a.el=o.el)}}function HE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const zE=t=>t.__isTeleport,je=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),Fs=[];let Ot=null;function ne(t=!1){Fs.push(Ot=t?null:[])}function WE(){Fs.pop(),Ot=Fs[Fs.length-1]||null}let ti=1;function Yh(t){ti+=t}function sg(t){return t.dynamicChildren=ti>0?Ot||Ur:null,WE(),ti>0&&Ot&&Ot.push(t),t}function ge(t,e,n,r,s,i){return sg(A(t,e,n,r,s,i,!0))}function xt(t,e,n,r,s){return sg(ve(t,e,n,r,s,!0))}function Uo(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const wa="__vInternal",ig=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||De(t)||re(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ig(e),ref:e&&Ao(e),scopeId:_a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return a?(su(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),ti>0&&!o&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const ve=KE;function KE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===RE)&&(t=qn),Uo(t)){const a=Gr(t,e,!0);return n&&su(a,n),ti>0&&!i&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(t)]=a:Ot.push(a)),a.patchFlag|=-2,a}if(sw(t)&&(t=t.__vccOpts),e){e=GE(e);let{class:a,style:c}=e;a&&!Be(a)&&(e.class=$l(a)),Ce(c)&&(Op(c)&&!G(c)&&(c=ze({},c)),e.style=ls(c))}const o=Be(t)?1:hE(t)?128:zE(t)?64:Ce(t)?4:re(t)?2:0;return A(t,e,n,r,s,o,i,!0)}function GE(t){return t?Op(t)||wa in t?ze({},t):t:null}function Gr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?QE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ig(a),ref:e&&e.ref?n&&s?G(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ru(t=" ",e=0){return ve(Ea,null,t,e)}function Ta(t,e){const n=ve(Io,null,t);return n.staticCount=e,n}function an(t="",e=!1){return e?(ne(),xt(qn,null,t)):ve(qn,null,t)}function Ht(t){return t==null||typeof t=="boolean"?ve(qn):G(t)?ve(je,null,t.slice()):typeof t=="object"?Pn(t):ve(Ea,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function su(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),su(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(wa in e)?e._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),r&64?(n=16,e=[ru(e)]):n=8);t.children=e,t.shapeFlag|=n}function QE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$l([e.class,r.class]));else if(s==="style")e.style=ls([e.style,r.style]);else if(la(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){Mt(t,e,7,[n,r])}const JE=Xp();let XE=0;function YE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||JE,i={uid:XE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(r,s),emitsOptions:$p(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sE.bind(null,i),t.ce&&t.ce(i),i}let qe=null,iu,Pr,Zh="__VUE_INSTANCE_SETTERS__";(Pr=$c()[Zh])||(Pr=$c()[Zh]=[]),Pr.push(t=>qe=t),iu=t=>{Pr.length>1?Pr.forEach(e=>e(t)):Pr[0](t)};const Qr=t=>{iu(t),t.scope.on()},cr=()=>{qe&&qe.scope.off(),iu(null)};function og(t){return t.vnode.shapeFlag&4}let ni=!1;function ZE(t,e=!1){ni=e;const{props:n,children:r}=t.vnode,s=og(t);LE(t,n,s,e),BE(t,r);const i=s?ew(t,e):void 0;return ni=!1,i}function ew(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pa(new Proxy(t.ctx,SE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?nw(t):null;Qr(t),us();const i=Ln(r,t,0,[t.props,s]);if(hs(),cr(),fp(i)){if(i.then(cr,cr),e)return i.then(o=>{ed(t,o,e)}).catch(o=>{ga(o,t,0)});t.asyncDep=i}else ed(t,i,e)}else ag(t,e)}function ed(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Vp(e)),ag(t,n)}let td;function ag(t,e,n){const r=t.type;if(!t.render){if(!e&&td&&!r.render){const s=r.template||tu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ze(ze({isCustomElement:i,delimiters:a},o),c);r.render=td(s,l)}}t.render=r.render||Vt}Qr(t),us(),CE(t),hs(),cr()}function tw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return yt(t,"get","$attrs"),e[n]}}))}function nw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return tw(t)},slots:t.slots,emit:t.emit,expose:e}}function Ia(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vp(pa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Us)return Us[n](t)},has(e,n){return n in e||n in Us}}))}function rw(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function sw(t){return re(t)&&"__vccOpts"in t}const Ne=(t,e)=>Yv(t,e,ni);function cg(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!G(e)?Uo(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Uo(n)&&(n=[n]),ve(t,e,n))}const iw=Symbol.for("v-scx"),ow=()=>Ct(iw),aw="3.3.4",cw="http://www.w3.org/2000/svg",tr=typeof document<"u"?document:null,nd=tr&&tr.createElement("template"),lw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?tr.createElementNS(cw,t):tr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tr.createTextNode(t),createComment:t=>tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{nd.innerHTML=r?`<svg>${t}</svg>`:t;const a=nd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hw(t,e,n){const r=t.style,s=Be(n);if(n&&!s){if(e&&!Be(e))for(const i in e)n[i]==null&&Xc(r,i,"");for(const i in n)Xc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const rd=/\s*!important$/;function Xc(t,e,n){if(G(n))n.forEach(r=>Xc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dw(t,e);rd.test(n)?t.setProperty(cs(r),n.replace(rd,""),"important"):t[r]=n}}const sd=["Webkit","Moz","ms"],uc={};function dw(t,e){const n=uc[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return uc[e]=r;r=da(r);for(let s=0;s<sd.length;s++){const i=sd[s]+r;if(i in t)return uc[e]=i}return e}const id="http://www.w3.org/1999/xlink";function fw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(id,e.slice(6,e.length)):t.setAttributeNS(id,e,n);else{const i=gv(e);n==null||i&&!mp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function pw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=mp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function gw(t,e,n,r){t.removeEventListener(e,n,r)}function mw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=_w(e);if(r){const l=i[e]=Ew(r,s);xr(t,a,l,c)}else o&&(gw(t,a,o,c),i[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function _w(t){let e;if(od.test(t)){e={};let r;for(;r=t.match(od);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let hc=0;const yw=Promise.resolve(),vw=()=>hc||(yw.then(()=>hc=0),hc=Date.now());function Ew(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mt(ww(r,n.value),e,5,[r])};return n.value=t,n.attached=vw(),n}function ww(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ad=/^on[a-z]/,Tw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?uw(t,r,s):e==="style"?hw(t,n,r):la(e)?Ll(e)||mw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(t,e,r,s))?pw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fw(t,e,r,s))};function Iw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ad.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ad.test(e)&&Be(n)?!1:e in t}const cd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>wo(e,n):e};function Aw(t){t.target.composing=!0}function ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ud={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=cd(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bc(a)),t._assign(a)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",Aw),xr(t,"compositionend",ld),xr(t,"change",ld))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=cd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Bc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},bw=["ctrl","shift","alt","meta"],Rw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bw.some(n=>t[`${n}Key`]&&!e.includes(n))},Pw=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Rw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Sw=ze({patchProp:Tw},lw);let hd;function Cw(){return hd||(hd=jE(Sw))}const kw=(...t)=>{const e=Cw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xw(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xw(t){return Be(t)?document.querySelector(t):t}var Dw=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let lg;const Aa=t=>lg=t,ug=Symbol();function Yc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Bs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bs||(Bs={}));function Ow(){const t=vp(!0),e=t.run(()=>Re({}));let n=[],r=[];const s=pa({install(i){Aa(s),s._a=i,i.provide(ug,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Dw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const hg=()=>{};function dd(t,e,n,r=hg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&jl()&&Ep(s),s}function Sr(t,...e){t.slice().forEach(n=>{n(...e)})}const Nw=t=>t();function Zc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Yc(s)&&Yc(r)&&t.hasOwnProperty(n)&&!De(r)&&!Mn(r)?t[n]=Zc(s,r):t[n]=r}return t}const Vw=Symbol();function Mw(t){return!Yc(t)||!t.hasOwnProperty(Vw)}const{assign:Rn}=Object;function Lw(t){return!!(De(t)&&t.effect)}function Uw(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Mp(n.state.value[t]);return Rn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=pa(Ne(()=>{Aa(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=dg(t,l,e,n,r,!0),c}function dg(t,e,n={},r,s,i){let o;const a=Rn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),Re({});let v;function y(K){let ee;l=u=!1,typeof K=="function"?(K(r.state.value[t]),ee={type:Bs.patchFunction,storeId:t,events:f}):(Zc(r.state.value[t],K),ee={type:Bs.patchObject,payload:K,storeId:t,events:f});const we=v=Symbol();Zl().then(()=>{v===we&&(l=!0)}),u=!0,Sr(h,ee,r.state.value[t])}const R=i?function(){const{state:ee}=n,we=ee?ee():{};this.$patch(et=>{Rn(et,we)})}:hg;function C(){o.stop(),h=[],d=[],r._s.delete(t)}function V(K,ee){return function(){Aa(r);const we=Array.from(arguments),et=[],vt=[];function bt(he){et.push(he)}function Jn(he){vt.push(he)}Sr(d,{args:we,name:K,store:W,after:bt,onError:Jn});let Rt;try{Rt=ee.apply(this&&this.$id===t?this:W,we)}catch(he){throw Sr(vt,he),he}return Rt instanceof Promise?Rt.then(he=>(Sr(et,he),he)).catch(he=>(Sr(vt,he),Promise.reject(he))):(Sr(et,Rt),Rt)}}const k={_p:r,$id:t,$onAction:dd.bind(null,d),$patch:y,$reset:R,$subscribe(K,ee={}){const we=dd(h,K,ee.detached,()=>et()),et=o.run(()=>ar(()=>r.state.value[t],vt=>{(ee.flush==="sync"?u:l)&&K({storeId:t,type:Bs.direct,events:f},vt)},Rn({},c,ee)));return we},$dispose:C},W=Ii(k);r._s.set(t,W);const L=r._a&&r._a.runWithContext||Nw,le=r._e.run(()=>(o=vp(),L(()=>o.run(e))));for(const K in le){const ee=le[K];if(De(ee)&&!Lw(ee)||Mn(ee))i||(_&&Mw(ee)&&(De(ee)?ee.value=_[K]:Zc(ee,_[K])),r.state.value[t][K]=ee);else if(typeof ee=="function"){const we=V(K,ee);le[K]=we,a.actions[K]=ee}}return Rn(W,le),Rn(ce(W),le),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:K=>{y(ee=>{Rn(ee,K)})}}),r._p.forEach(K=>{Rn(W,o.run(()=>K({store:W,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(W.$state,_),l=!0,u=!0,W}function ou(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ME();return a=a||(l?Ct(ug,null):null),a&&Aa(a),a=lg,a._s.has(r)||(i?dg(r,e,s,a):Uw(r,s,a)),a._s.get(r)}return o.$id=r,o}const wn=ou("screen",()=>{const t=Re([]),e=Ne(()=>t.value);return{windows:t,getWindows:e,setWindow:(o,a)=>{const l=t.value.find(u=>u.window===o);l?l.zIndex=0+10:t.value.push({window:o,data:a,x:300,y:40,zIndex:0})},removeWidow:o=>{t.value=t.value.filter(a=>a.window!==o)},changeXY:(o,a,c)=>{const l=t.value.find((u,h)=>h===c);l.x=o,l.y=a},increseZindex:o=>{const a=t.value.find(c=>c.window===o);if(a){let c=0;for(const l of t.value)c+=l.zIndex;a.zIndex=c+10}}}}),Fw={class:"w-full fixed top-0 py-3 bg-primary text-white"},Bw={class:"w-[90%] mx-auto flex items-center justify-between"},$w={class:"text-xl font-bold cursor-pointer"},jw={class:"text-xl font-bold"},qw={key:0,class:"absolute z-40 p-2 top-9 text-xl bg-primary text-white my-5 ms-[4%]"},Hw=A("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer"}," Shutdown ",-1),zw={__name:"Header",setup(t){const e=Re(!1),n=Re(""),r=wn(),s=()=>{const o=new Date,a=o.getDate().toString().padStart(2,"0"),l=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"][o.getMonth()],u=o.getFullYear(),h=o.getHours().toString().padStart(2,"0"),d=o.getMinutes().toString().padStart(2,"0"),f=o.getSeconds().toString().padStart(2,"0");return`${a}/${l}/${u} ${h}:${d}:${f}`};dr(()=>{n.value=s(),setInterval(()=>{n.value=s()},1e3)});const i=(o,a=null)=>{r.setWindow(o,a),e.value=!1};return(o,a)=>(ne(),ge(je,null,[A("nav",Fw,[A("div",Bw,[A("div",$w,[A("div",{onClick:a[0]||(a[0]=c=>e.value=!e.value)},"Menu")]),A("div",jw,Ti(n.value),1)])]),e.value?(ne(),ge("div",qw,[A("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[1]||(a[1]=c=>i("portfolio"))}," Portfolio "),A("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[2]||(a[2]=c=>i("about"))}," About "),A("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[3]||(a[3]=c=>i("skill"))}," Skill "),A("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[4]||(a[4]=c=>i("contact"))}," Contact "),Hw])):an("",!0)],64))}};const au=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ww=t=>(iE("data-v-c958fb2d"),t=t(),oE(),t),Kw={key:0,class:"h-screen flex justify-center flex-col items-center w-screen bg-[#ebd1ae]"},Gw=Ww(()=>A("div",{class:"text-4xl text-white"},"Loading...",-1)),Qw={class:"progress-bar-container"},Jw={key:1,class:"app"},Xw={__name:"App",setup(t){const e=Re(!0),n=Re(0);return dr(()=>{const r=setInterval(()=>{n.value<100?n.value+=10:(clearInterval(r),e.value=!1)},200)}),(r,s)=>{const i=bE("routerView");return e.value?(ne(),ge("div",Kw,[Gw,A("div",Qw,[A("div",{class:"progress-bar",style:ls({width:n.value+"%"})},null,4)])])):(ne(),ge("div",Jw,[ve(zw),ve(i,{class:"mt-12"})]))}}},Yw=au(Xw,[["__scopeId","data-v-c958fb2d"]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof window<"u";function Zw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function dc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Lt(s)?s.map(t):t(s)}return n}const $s=()=>{},Lt=Array.isArray,eT=/\/$/,tT=t=>t.replace(eT,"");function fc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=iT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function nT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jr(e.matched[r],n.matched[s])&&fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sT(t[n],e[n]))return!1;return!0}function sT(t,e){return Lt(t)?pd(t,e):Lt(e)?pd(e,t):t===e}function pd(t,e){return Lt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ri;(function(t){t.pop="pop",t.push="push"})(ri||(ri={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function oT(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tT(t)}const aT=/^[^#]+#/;function cT(t,e){return t.replace(aT,"#")+e}function lT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ba=()=>({left:window.pageXOffset,top:window.pageYOffset});function uT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=lT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gd(t,e){return(history.state?history.state.position-e:-1)+t}const el=new Map;function hT(t,e){el.set(t,e)}function dT(t){const e=el.get(t);return el.delete(t),e}let fT=()=>location.protocol+"//"+location.host;function pg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),fd(c,"")}return fd(n,t)+r+s}function pT(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=pg(t,location),_=n.value,v=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===_){o=null;return}y=v?d.position-v.position:0}else r(f);s.forEach(R=>{R(n.value,_,{delta:y,type:ri.pop,direction:y?y>0?js.forward:js.back:js.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:ba()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function md(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ba():null}}function gT(t){const{history:e,location:n}=window,r={value:pg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:fT()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,md(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:ba()});i(u.current,u,!0);const h=me({},md(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function mT(t){t=oT(t);const e=gT(t),n=pT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:cT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _T(t){return typeof t=="string"||t&&typeof t=="object"}function gg(t){return typeof t=="string"||typeof t=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mg=Symbol("");var _d;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_d||(_d={}));function Xr(t,e){return me(new Error,{type:t,[mg]:!0},e)}function on(t,e){return t instanceof Error&&mg in t&&(e==null||!!(t.type&e))}const yd="[^/]+?",yT={sensitive:!1,strict:!1,start:!0,end:!0},vT=/[.+*?^${}()[\]/\\]/g;function ET(t,e){const n=me({},yT,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(vT,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:v,optional:y,regexp:R}=d;i.push({name:_,repeatable:v,optional:y});const C=R||yd;if(C!==yd){f+=10;try{new RegExp(`(${C})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+k.message)}}let V=v?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(V=y&&l.length<2?`(?:/${V})`:"/"+V),y&&(V+="?"),s+=V,f+=20,y&&(f+=-8),v&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",_=i[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:v,optional:y}=f,R=_ in l?l[_]:"";if(Lt(R)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=Lt(R)?R.join("/"):R;if(!C)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=C}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function wT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function TT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vd(r))return 1;if(vd(s))return-1}return s.length-r.length}function vd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IT={type:0,value:""},AT=/[a-zA-Z0-9_]/;function bT(t){if(!t)return[[]];if(t==="/")return[[IT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:AT.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function RT(t,e,n){const r=ET(bT(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function PT(t,e){const n=[],r=new Map;e=Td({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,_=ST(u);_.aliasOf=d&&d.record;const v=Td(e,u),y=[_];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of V)y.push(me({},_,{components:d?d.record.components:_.components,path:k,aliasOf:d?d.record:_}))}let R,C;for(const V of y){const{path:k}=V;if(h&&k[0]!=="/"){const W=h.record.path,L=W[W.length-1]==="/"?"":"/";V.path=h.record.path+(k&&L+k)}if(R=RT(V,h,v),d?d.alias.push(R):(C=C||R,C!==R&&C.alias.push(R),f&&u.name&&!wd(R)&&o(u.name)),_.children){const W=_.children;for(let L=0;L<W.length;L++)i(W[L],R,d&&d.children[L])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return C?()=>{o(C)}:$s}function o(u){if(gg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&TT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!_g(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wd(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},_,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Xr(1,{location:u});v=d.record.name,f=me(Ed(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&Ed(u.params,d.keys.map(C=>C.name))),_=d.stringify(f)}else if("path"in u)_=u.path,d=n.find(C=>C.re.test(_)),d&&(f=d.parse(_),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw Xr(1,{location:u,currentLocation:h});v=d.record.name,f=me({},h.params,u.params),_=d.stringify(f)}const y=[];let R=d;for(;R;)y.unshift(R.record),R=R.parent;return{name:v,path:_,params:f,matched:y,meta:kT(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ed(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ST(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function CT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kT(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Td(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function _g(t,e){return e.children.some(n=>n===t||_g(t,n))}const yg=/#/g,xT=/&/g,DT=/\//g,OT=/=/g,NT=/\?/g,vg=/\+/g,VT=/%5B/g,MT=/%5D/g,Eg=/%5E/g,LT=/%60/g,wg=/%7B/g,UT=/%7C/g,Tg=/%7D/g,FT=/%20/g;function cu(t){return encodeURI(""+t).replace(UT,"|").replace(VT,"[").replace(MT,"]")}function BT(t){return cu(t).replace(wg,"{").replace(Tg,"}").replace(Eg,"^")}function tl(t){return cu(t).replace(vg,"%2B").replace(FT,"+").replace(yg,"%23").replace(xT,"%26").replace(LT,"`").replace(wg,"{").replace(Tg,"}").replace(Eg,"^")}function $T(t){return tl(t).replace(OT,"%3D")}function jT(t){return cu(t).replace(yg,"%23").replace(NT,"%3F")}function qT(t){return t==null?"":jT(t).replace(DT,"%2F")}function Fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function HT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(vg," "),o=i.indexOf("="),a=Fo(o<0?i:i.slice(0,o)),c=o<0?null:Fo(i.slice(o+1));if(a in e){let l=e[a];Lt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Id(t){let e="";for(let n in t){const r=t[n];if(n=$T(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(r)?r.map(i=>i&&tl(i)):[r&&tl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Lt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const WT=Symbol(""),Ad=Symbol(""),Ra=Symbol(""),lu=Symbol(""),nl=Symbol("");function bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Xr(4,{from:n,to:e})):h instanceof Error?a(h):_T(h)?a(Xr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function pc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(KT(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Zw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Sn(d,n,r,i,o)()}))}}return s}function KT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bd(t){const e=Ct(Ra),n=Ct(lu),r=Ne(()=>e.resolve(He(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Jr.bind(null,u));if(d>-1)return d;const f=Rd(c[l-2]);return l>1&&Rd(u)===f&&h[h.length-1].path!==f?h.findIndex(Jr.bind(null,c[l-2])):d}),i=Ne(()=>s.value>-1&&XT(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&fg(n.params,r.value.params));function a(c={}){return JT(c)?e[He(t.replace)?"replace":"push"](He(t.to)).catch($s):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const GT=ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bd,setup(t,{slots:e}){const n=Ii(bd(t)),{options:r}=Ct(Ra),s=Ne(()=>({[Pd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Pd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),QT=GT;function JT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Lt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pd=(t,e,n)=>t??e??n,YT=ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ct(nl),s=Ne(()=>t.route||r.value),i=Ct(Ad,0),o=Ne(()=>{let l=He(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);To(Ad,Ne(()=>o.value+1)),To(WT,a),To(nl,s);const c=Re();return ar(()=>[c.value,a.value,t.name],([l,u,h],[d,f,_])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Jr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Sd(n.default,{Component:d,route:l});const f=h.props[u],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,y=cg(d,me({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Sd(n.default,{Component:y,route:l})||y}}});function Sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ZT=YT;function eI(t){const e=PT(t.routes,t),n=t.parseQuery||HT,r=t.stringifyQuery||Id,s=t.history,i=bs(),o=bs(),a=bs(),c=Hv(An);let l=An;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dc.bind(null,w=>""+w),h=dc.bind(null,qT),d=dc.bind(null,Fo);function f(w,U){let O,j;return gg(w)?(O=e.getRecordMatcher(w),j=U):j=w,e.addRoute(j,O)}function _(w){const U=e.getRecordMatcher(w);U&&e.removeRoute(U)}function v(){return e.getRoutes().map(w=>w.record)}function y(w){return!!e.getRecordMatcher(w)}function R(w,U){if(U=me({},U||c.value),typeof w=="string"){const m=fc(n,w,U.path),E=e.resolve({path:m.path},U),T=s.createHref(m.fullPath);return me(m,E,{params:d(E.params),hash:Fo(m.hash),redirectedFrom:void 0,href:T})}let O;if("path"in w)O=me({},w,{path:fc(n,w.path,U.path).path});else{const m=me({},w.params);for(const E in m)m[E]==null&&delete m[E];O=me({},w,{params:h(m)}),U.params=h(U.params)}const j=e.resolve(O,U),pe=w.hash||"";j.params=u(d(j.params));const p=nT(r,me({},w,{hash:BT(pe),path:j.path})),g=s.createHref(p);return me({fullPath:p,hash:pe,query:r===Id?zT(w.query):w.query||{}},j,{redirectedFrom:void 0,href:g})}function C(w){return typeof w=="string"?fc(n,w,c.value.path):me({},w)}function V(w,U){if(l!==w)return Xr(8,{from:U,to:w})}function k(w){return le(w)}function W(w){return k(me(C(w),{replace:!0}))}function L(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:O}=U;let j=typeof O=="function"?O(w):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=C(j):{path:j},j.params={}),me({query:w.query,hash:w.hash,params:"path"in j?{}:w.params},j)}}function le(w,U){const O=l=R(w),j=c.value,pe=w.state,p=w.force,g=w.replace===!0,m=L(O);if(m)return le(me(C(m),{state:typeof m=="object"?me({},pe,m.state):pe,force:p,replace:g}),U||O);const E=O;E.redirectedFrom=U;let T;return!p&&rT(r,j,O)&&(T=Xr(16,{to:E,from:j}),$t(j,j,!0,!1)),(T?Promise.resolve(T):we(E,j)).catch(b=>on(b)?on(b,2)?b:Tn(b):fe(b,E,j)).then(b=>{if(b){if(on(b,2))return le(me({replace:g},C(b.to),{state:typeof b.to=="object"?me({},pe,b.to.state):pe,force:p}),U||E)}else b=vt(E,j,!0,g,pe);return et(E,j,b),b})}function K(w,U){const O=V(w,U);return O?Promise.reject(O):Promise.resolve()}function ee(w){const U=br.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(w):w()}function we(w,U){let O;const[j,pe,p]=tI(w,U);O=pc(j.reverse(),"beforeRouteLeave",w,U);for(const m of j)m.leaveGuards.forEach(E=>{O.push(Sn(E,w,U))});const g=K.bind(null,w,U);return O.push(g),tt(O).then(()=>{O=[];for(const m of i.list())O.push(Sn(m,w,U));return O.push(g),tt(O)}).then(()=>{O=pc(pe,"beforeRouteUpdate",w,U);for(const m of pe)m.updateGuards.forEach(E=>{O.push(Sn(E,w,U))});return O.push(g),tt(O)}).then(()=>{O=[];for(const m of p)if(m.beforeEnter)if(Lt(m.beforeEnter))for(const E of m.beforeEnter)O.push(Sn(E,w,U));else O.push(Sn(m.beforeEnter,w,U));return O.push(g),tt(O)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),O=pc(p,"beforeRouteEnter",w,U),O.push(g),tt(O))).then(()=>{O=[];for(const m of o.list())O.push(Sn(m,w,U));return O.push(g),tt(O)}).catch(m=>on(m,8)?m:Promise.reject(m))}function et(w,U,O){a.list().forEach(j=>ee(()=>j(w,U,O)))}function vt(w,U,O,j,pe){const p=V(w,U);if(p)return p;const g=U===An,m=Dr?history.state:{};O&&(j||g?s.replace(w.fullPath,me({scroll:g&&m&&m.scroll},pe)):s.push(w.fullPath,pe)),c.value=w,$t(w,U,O,g),Tn()}let bt;function Jn(){bt||(bt=s.listen((w,U,O)=>{if(!Xi.listening)return;const j=R(w),pe=L(j);if(pe){le(me(pe,{replace:!0}),j).catch($s);return}l=j;const p=c.value;Dr&&hT(gd(p.fullPath,O.delta),ba()),we(j,p).catch(g=>on(g,12)?g:on(g,2)?(le(g.to,j).then(m=>{on(m,20)&&!O.delta&&O.type===ri.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(O.delta&&s.go(-O.delta,!1),fe(g,j,p))).then(g=>{g=g||vt(j,p,!1),g&&(O.delta&&!on(g,8)?s.go(-O.delta,!1):O.type===ri.pop&&on(g,20)&&s.go(-1,!1)),et(j,p,g)}).catch($s)}))}let Rt=bs(),he=bs(),Ee;function fe(w,U,O){Tn(w);const j=he.list();return j.length?j.forEach(pe=>pe(w,U,O)):console.error(w),Promise.reject(w)}function sn(){return Ee&&c.value!==An?Promise.resolve():new Promise((w,U)=>{Rt.add([w,U])})}function Tn(w){return Ee||(Ee=!w,Jn(),Rt.list().forEach(([U,O])=>w?O(w):U()),Rt.reset()),w}function $t(w,U,O,j){const{scrollBehavior:pe}=t;if(!Dr||!pe)return Promise.resolve();const p=!O&&dT(gd(w.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Zl().then(()=>pe(w,U,p)).then(g=>g&&uT(g)).catch(g=>fe(g,w,U))}const gt=w=>s.go(w);let Ar;const br=new Set,Xi={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,hasRoute:y,getRoutes:v,resolve:R,options:t,push:k,replace:W,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:sn,install(w){const U=this;w.component("RouterLink",QT),w.component("RouterView",ZT),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>He(c)}),Dr&&!Ar&&c.value===An&&(Ar=!0,k(s.location).catch(pe=>{}));const O={};for(const pe in An)Object.defineProperty(O,pe,{get:()=>c.value[pe],enumerable:!0});w.provide(Ra,U),w.provide(lu,xp(O)),w.provide(nl,c);const j=w.unmount;br.add(w),w.unmount=function(){br.delete(w),br.size<1&&(l=An,bt&&bt(),bt=null,c.value=An,Ar=!1,Ee=!1),j()}}};function tt(w){return w.reduce((U,O)=>U.then(()=>ee(O)),Promise.resolve())}return Xi}function tI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Jr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Jr(l,c))||s.push(c))}return[n,r,s]}function nI(){return Ct(Ra)}function Ig(){return Ct(lu)}const rI="/assets/pc-609054bf.png",sI="/assets/about-txt-b66adf07.png",Ag="/assets/porpleicon1-p-500-17f0850b.png";function iI(t){return jl()?(Ep(t),!0):!1}function ln(t){return typeof t=="function"?t():He(t)}const bg=typeof window<"u",oI=()=>{};var aI=Object.defineProperty,cI=Object.defineProperties,lI=Object.getOwnPropertyDescriptors,Cd=Object.getOwnPropertySymbols,uI=Object.prototype.hasOwnProperty,hI=Object.prototype.propertyIsEnumerable,kd=(t,e,n)=>e in t?aI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dI=(t,e)=>{for(var n in e||(e={}))uI.call(e,n)&&kd(t,n,e[n]);if(Cd)for(var n of Cd(e))hI.call(e,n)&&kd(t,n,e[n]);return t},fI=(t,e)=>cI(t,lI(e));function pI(t,e={}){if(!De(t))return Mp(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const r in t.value)n[r]=Gv(()=>({get(){return t.value[r]},set(s){var i;if((i=ln(e.replaceRef))!=null?i:!0)if(Array.isArray(t.value)){const a=[...t.value];a[r]=s,t.value=a}else{const a=fI(dI({},t.value),{[r]:s});Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[r]=s}}));return n}function gI(t){var e;const n=ln(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Rg=bg?window:void 0;function gc(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Rg):[e,n,r,s]=t,!e)return oI;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),c=ar(()=>[gI(e),ln(s)],([u,h])=>{o(),u&&i.push(...n.flatMap(d=>r.map(f=>a(u,d,f,h))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return iI(l),l}var mI=Object.defineProperty,_I=Object.defineProperties,yI=Object.getOwnPropertyDescriptors,xd=Object.getOwnPropertySymbols,vI=Object.prototype.hasOwnProperty,EI=Object.prototype.propertyIsEnumerable,Dd=(t,e,n)=>e in t?mI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,wI=(t,e)=>{for(var n in e||(e={}))vI.call(e,n)&&Dd(t,n,e[n]);if(xd)for(var n of xd(e))EI.call(e,n)&&Dd(t,n,e[n]);return t},TI=(t,e)=>_I(t,yI(e));function Pg(t,e={}){var n,r;const{pointerTypes:s,preventDefault:i,stopPropagation:o,exact:a,onMove:c,onEnd:l,onStart:u,initialValue:h,axis:d="both",draggingElement:f=Rg,handle:_=t}=e,v=Re((n=ln(h))!=null?n:{x:0,y:0}),y=Re(),R=L=>s?s.includes(L.pointerType):!0,C=L=>{ln(i)&&L.preventDefault(),ln(o)&&L.stopPropagation()},V=L=>{if(!R(L)||ln(a)&&L.target!==ln(t))return;const le=ln(t).getBoundingClientRect(),K={x:L.clientX-le.left,y:L.clientY-le.top};(u==null?void 0:u(K,L))!==!1&&(y.value=K,C(L))},k=L=>{if(!R(L)||!y.value)return;let{x:le,y:K}=v.value;(d==="x"||d==="both")&&(le=L.clientX-y.value.x),(d==="y"||d==="both")&&(K=L.clientY-y.value.y),v.value={x:le,y:K},c==null||c(v.value,L),C(L)},W=L=>{R(L)&&y.value&&(y.value=void 0,l==null||l(v.value,L),C(L))};if(bg){const L={capture:(r=e.capture)!=null?r:!0};gc(_,"pointerdown",V,L),gc(f,"pointermove",k,L),gc(f,"pointerup",W,L)}return TI(wI({},pI(v)),{position:v,isDragging:Ne(()=>!!y.value),style:Ne(()=>`left:${v.value.x}px;top:${v.value.y}px;`)})}const II=ya({__name:"draggable",props:{index:Number},setup(t){const{index:e}=t,n=wn(),r=Re(null),s=Ne(()=>n.getWindows.find((l,u)=>u===e)),{x:i,y:o,style:a}=Pg(r,{initialValue:{x:s.value.x,y:s.value.y}}),c=()=>{n.changeXY(i,o,e)};return ar([i,o],()=>{c()}),(l,u)=>(ne(),ge("div",{ref_key:"el",ref:r,style:ls([He(a),{zIndex:s.value.zIndex},{position:"fixed"}])},[Gp(l.$slots,"window")],4))}}),AI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfKSURBVHgB7d1bjF1lGQbgb81MESwZCFouCIpyIcSeVIKHGBMiEkRFxVpbJMRoVBJjvPJOExNjxECiUUmMRIiJUdtU44krDSJCgwoUaCmC5QJthVLsmU6Ps5dDQnD9P+ked2eGmW/mee7etddqmnbe/fXr3nvtCAAAAAAAAAAAAAAAAAAAAAAAAJhdTX3gHde1o9081ouvFRf04orqksXBSbVDcaTIEQ9088RfwI3dvOXnzeMB/6ehANJSYEhMgSGx5s2r23O6B0aG4v7yjLgwmElj3dA28b5untiJ7ws4CRMYElNgSEyBIbFm+dr2tuJAxGe6+fzzyws+fFWZR0eDPsbGynzXn8u8ZWt1QS92dOOJNlZ282Mbmj0BLzKBITEFhsQUGBIbmdh5P9rvhE+uKvOSJTGQXlvm4+P9H59vXn1mmVd9rMx7D5R5x/Yo/tdhqI1byzPi4wEvMoEhMQWGxBQYEmtWrG37bqE3fyMGcvREmfcfKfM8X3kHdmB/mX98e5mPHX3ZJZ/ths3rmtuCBcsEhsQUGBJTYEhsJKao3qAPVDubnbe/0bPKfGX1XvPf/brME3/e3+3mFavbe7t584bmiWDBMIEhMQWGxBQYEpvyDnyiV+b5/t7mmXbRxWV+cmmZ/761vA93Oxy/6OZla9sPdPOj65rtwbxlAkNiCgyJKTAkNuUdmJl1xZVl3rWzzLt3x7JubiL+2c0r1rT/Kq+I6hPZC96hKt/ZDcO9+GY3P7SheS7mEBMYElNgSEyBIbEpfx64vsfVnsPBDDpUbWx//EOZt/2jzL1eMAUT5XiqODAUb+vGLT9r9sYsMoEhMQWGxBQYEvM6cDKLF5f56uqu3ieqe5KNVTvzSPWUPXp6LGgHqvty/+qOMj/zTLyhODAeN1W/xOdiFpnAkJgCQ2IKDInZgeeZkepvtL7n1stUT+GnV9cPNTGvnV79n8JVV5f59vqbqZq4pjpiBwZOjQJDYgoMidmBF7j6nmbPH4sF7ZxzJj3lNTGHmMCQmAJDYgoMiSkwJKbAkJgCQ2IKDIl5HRj6OKP6vPShw/GfmENMYEhMgSExBYbE7MDQx/WfLvOPfhCXxhxiAkNiCgyJKTAkZgeGPup7ij28rnkq5hATGBJTYEhMgSExBYbEFBgSU2BITIEhsTn/OvDYWJl3bC/z4cMBr5jla9rPxzRqhmJ3cWAk7unGzT9pdvW73gSGxBQYElNgSGzO7cAPbSrz3XeV+cTxgFnTNPHDmE5tlY9H8e1UK9a0X+3mzeubm7vZBIbEFBgSU2BIbNZ34Ce3lfnO35d5YucoLLuozOdO/n2uMGc9W74KHI9ti9O6eWJFvqmbV1zbPt7NJjAkpsCQmAJDYrO+A2+8p//jn1pV5svfHTBvtNXrwL/5U5l/+dvqgl58vRtNYEhMgSExBYbEZn0H3j3Jt62+Z8Bvoql3iuer904fGy9zL2D29Kqf10veUuZ6B544fWk3m8CQmAJDYgoMic36DtybZAk97bQYyL6jZT46HpDGokl+3psmFnWzCQyJKTAkpsCQWPrvBx6vdmg7LwuJCQyJKTAkpsCQWP4duB3s/J3Plnmoego7d0kM5PCRMv/76TK3g77ZuroH2HnnlXnxGQEvMYEhMQWGxBQYEku/A09mV/Xtqt++pTqh2jm/8uUynzUaff10fZmf2BbT6oLXlfmLNwS8xASGxBQYElNgSGze78BnnV3mlcvLPDxc5jMXx0BWLitzb8DXpSez9OKAkzKBITEFhsQUGBKb9zvwq6p7DF33iZhWl17SP8NMMoEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSm/fvha7V94U+eDBm1KJFZb7g9WVumoBTZgJDYgoMiSkwJLbg7wvdTvM9rCaz6iNlfuelAafMBIbEFBgSU2BIbMHfF/rQWMyokeop8o0XBEwbExgSU2BITIEhMfeFhsRMYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxEZiio73ApglJjAkpsCQmAJDYiNtG/u6B5omzu7mnc+VF4yeXeZDR2Mg+/f1f3zxGQEL1p69k5zQRnGGCQyJKTAkpsCQ2MjEv6k3Fkea+GA33n1fecFl740p2bSp/+NvujBgwdr4l/6P9yLu7WYTGBJTYEhMgSGxkeGIG7sHxiPe380P3h/D3XzsWPkLLF1e5qYt89ZHy7z5ker86inkQ5fHQNpJHh8bK/PhAV+3hul08ECZH3y4zH99oMxtG+WnDZr4VjeawJCYAkNiCgyJNfWBlde2N3Rzr41bqgum9BnioeEyX39NucZe9q6+l7/w+ynsP/bC2v4/T+8qH//O98vf7/h4wJzVRvnzPHHgC924ZX1zazebwJCYAkNiCgyJNZOdsHRNu7Kbh5r4UnXK26O/v3XDxA77vW7eur55JKbRW1e3S7r5+HDc0c1Dbbw2YJa0TVTvTJhaP0xgSEyBITEFBgAAAAAAAAAAAAAAAAAAAAAAAOCU/RePsFqZef2t2wAAAABJRU5ErkJggg==",bI={class:"flex items-center gap-1 cursor-move"},RI=Ta('<div class="flex flex-col w-[30px] justify-between gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),PI=Ta('<div class="flex flex-col w-full gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),SI={class:"text-2xl text-primary"},CI=Ta('<div class="basis-1/2"><div class="flex flex-col gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div></div>',1),kI=A("div",{class:"flex flex-col w-full justify-between gap-1 mt-2"},[A("div",{class:"border border-primary"})],-1),bi={__name:"windowHeader",props:{title:String,window:String},setup(t){const{title:e,window:n}=t,r=wn(),s=()=>{r.removeWidow(n)};return(i,o)=>(ne(),ge("div",null,[A("div",bI,[A("div",{class:"basis-1/2"},[A("div",{class:"flex gap-2 items-center h-[35px]"},[RI,A("div",{class:"border-2 border-primary h-[26px] w-[35px] cursor-pointer hover:bg-primary",onClick:s}),PI])]),A("div",SI,Ti(t.title),1),CI]),kI]))}},xI={class:"flex justify-center my-4"},DI=["onClick"],OI=["onClick"],NI=A("img",{src:AI,class:"h-[80px] max-w-full cursor-pointer mx-auto",alt:""},null,-1),VI={class:"text-primary"},MI={__name:"portfolio",setup(t){const e=wn(),n=Re([{name:"FolderOne"},{name:"FolderTwo"},{name:"FolderThree"},{name:"FolderFour"}]),r=(s,i)=>{e.setWindow(`portfolio-detail${i}`,s)};return(s,i)=>(ne(),ge("div",{onClick:i[0]||(i[0]=o=>He(e).increseZindex("portfolio")),class:"w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},[ve(bi,{title:"Portfolio",window:"portfolio"}),A("div",xI,[(ne(!0),ge(je,null,ds(n.value,(o,a)=>(ne(),ge("div",{class:"basis-1/4",key:a,onClick:c=>s.$emit("portfolioDetail",{folder:o,index:a})},[A("div",{class:"text-center hover:bg-hover m-2",onClick:c=>r(o,a)},[NI,A("div",VI,Ti(o.name),1)],8,OI)],8,DI))),128))])]))}},LI="/assets/img1-5e5affc9.jpg",UI="/assets/img2-9ce2a787.jpg",FI=A("div",{class:"h-[70vh] overflow-auto"},[A("img",{src:LI,class:"w-full",alt:""}),A("img",{src:UI,class:"w-full",alt:""})],-1),so={__name:"portfolioDetail",props:{index:Number},setup(t){const{index:e}=t,n=wn(),r=Ne(()=>n.getWindows.find(s=>s.window===`portfolio-detail${e}`));return(s,i)=>(ne(),ge("div",{onClick:i[0]||(i[0]=o=>He(n).increseZindex(`portfolio-detail${t.index}`)),class:"w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},[ve(bi,{title:`${r.value.data.name}`,window:`portfolio-detail${t.index}`},null,8,["title","window"]),FI]))}},BI={class:"overflow-auto h-[85vh] my-2"},$I=["src"],jI={__name:"about",props:{images:Array},setup(t){const e=wn();return(n,r)=>(ne(),ge("div",{onClick:r[0]||(r[0]=s=>He(e).increseZindex("about")),class:"w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},[ve(bi,{title:"about.txt",window:"about"}),A("div",BI,[(ne(!0),ge(je,null,ds(t.images,s=>(ne(),ge("img",{key:s.id,src:s.url,class:"w-full",alt:""},null,8,$I))),128))])]))}},qI={class:"overflow-auto h-[85vh] my-2"},HI=["src"],zI={__name:"skill",props:{images:Array},setup(t){const e=wn();return(n,r)=>(ne(),ge("div",{onClick:r[0]||(r[0]=s=>He(e).increseZindex("skill")),class:"w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},[ve(bi,{title:"Skill",window:"skill"}),A("div",qI,[(ne(!0),ge(je,null,ds(t.images,s=>(ne(),ge("img",{key:s.id,src:s.url,class:"w-full",alt:""},null,8,HI))),128))])]))}},WI={__name:"contact",setup(t){const e=wn();return(n,r)=>(ne(),ge("div",{onClick:r[0]||(r[0]=s=>He(e).increseZindex("contact")),class:"w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},[ve(bi,{title:"Contact",window:"contact"})]))}},KI={name:"PhStarBold"},GI={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"},QI=A("path",{fill:"currentColor",d:"M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"},null,-1),JI=[QI];function XI(t,e,n,r,s,i){return ne(),ge("svg",GI,JI)}const Od=au(KI,[["render",XI]]),YI={class:"text-primary text-2xl flex flex-col gap-4"},ZI={class:"flex justify-center items-center gap-2"},eA=A("div",null,"Read Me",-1),tA=A("div",{class:"flex flex-col gap-3"},[A("div",null,"Hi, My name is Alex Lynn."),A("div",null,[ru(" A "),A("span",{class:"text-blue-900"},"UI/UX Desinger & Instructor")]),A("div",null,"Desinger based in Myanmar."),A("div",null,"Reach out to discuss on projects!")],-1),nA=ya({__name:"info",setup(t){const e=Re(null),{x:n,y:r,style:s}=Pg(e,{initialValue:{x:40,y:100}});return(i,o)=>(ne(),ge("div",{ref_key:"el",ref:e,style:ls([He(s),{position:"fixed"}]),class:"bg-white border-2 border-e-4 border-b-4 py-4 px-9 border-primary rounded-xl"},[A("div",YI,[A("div",ZI,[ve(Od),eA,ve(Od)]),tA])],4))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new sA;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iA=function(t){const e=Sg(t);return Cg.encodeByteArray(e,!0)},Bo=function(t){return iA(t).replace(/\./g,"")},kg=function(t){try{return Cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=()=>oA().__FIREBASE_DEFAULTS__,cA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kg(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return aA()||cA()||lA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xg=t=>{var e,n;return(n=(e=Pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dg=t=>{const e=xg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Og=()=>{var t;return(t=Pa())===null||t===void 0?void 0:t.config},Ng=t=>{var e;return(e=Pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bo(JSON.stringify(n)),Bo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function dA(){var t;const e=(t=Pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mA(){try{return typeof indexedDB=="object"}catch{return!1}}function _A(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yA,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new rn(s,a,r)}}function vA(t,e){return t.replace(EA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const EA=/\{\$([^}]+)}/g;function wA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Nd(i)&&Nd(o)){if(!$o(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TA(t,e){const n=new IA(t,e);return n.subscribe.bind(n)}class IA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PA(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RA(t){return t===Zn?void 0:t}function PA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const CA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},kA=ue.INFO,xA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},DA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=kA,this._logHandler=DA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const OA=(t,e)=>e.some(n=>t instanceof n);let Vd,Md;function NA(){return Vd||(Vd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VA(){return Md||(Md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mg=new WeakMap,rl=new WeakMap,Lg=new WeakMap,_c=new WeakMap,hu=new WeakMap;function MA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mg.set(n,t)}).catch(()=>{}),hu.set(e,t),e}function LA(t){if(rl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});rl.set(t,e)}let sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UA(t){sl=t(sl)}function FA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yc(this),e,...n);return Lg.set(r,e.sort?e.sort():[e]),Un(r)}:VA().includes(t)?function(...e){return t.apply(yc(this),e),Un(Mg.get(this))}:function(...e){return Un(t.apply(yc(this),e))}}function BA(t){return typeof t=="function"?FA(t):(t instanceof IDBTransaction&&LA(t),OA(t,NA())?new Proxy(t,sl):t)}function Un(t){if(t instanceof IDBRequest)return MA(t);if(_c.has(t))return _c.get(t);const e=BA(t);return e!==t&&(_c.set(t,e),hu.set(e,t)),e}const yc=t=>hu.get(t);function $A(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jA=["get","getKey","getAll","getAllKeys","count"],qA=["put","add","delete","clear"],vc=new Map;function Ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return vc.set(e,i),i}UA(t=>({...t,get:(e,n,r)=>Ld(e,n)||t.get(e,n,r),has:(e,n)=>!!Ld(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const il="@firebase/app",Ud="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new uu("@firebase/app"),WA="@firebase/app-compat",KA="@firebase/analytics-compat",GA="@firebase/analytics",QA="@firebase/app-check-compat",JA="@firebase/app-check",XA="@firebase/auth",YA="@firebase/auth-compat",ZA="@firebase/database",e0="@firebase/database-compat",t0="@firebase/functions",n0="@firebase/functions-compat",r0="@firebase/installations",s0="@firebase/installations-compat",i0="@firebase/messaging",o0="@firebase/messaging-compat",a0="@firebase/performance",c0="@firebase/performance-compat",l0="@firebase/remote-config",u0="@firebase/remote-config-compat",h0="@firebase/storage",d0="@firebase/storage-compat",f0="@firebase/firestore",p0="@firebase/firestore-compat",g0="firebase",m0="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="[DEFAULT]",_0={[il]:"fire-core",[WA]:"fire-core-compat",[GA]:"fire-analytics",[KA]:"fire-analytics-compat",[JA]:"fire-app-check",[QA]:"fire-app-check-compat",[XA]:"fire-auth",[YA]:"fire-auth-compat",[ZA]:"fire-rtdb",[e0]:"fire-rtdb-compat",[t0]:"fire-fn",[n0]:"fire-fn-compat",[r0]:"fire-iid",[s0]:"fire-iid-compat",[i0]:"fire-fcm",[o0]:"fire-fcm-compat",[a0]:"fire-perf",[c0]:"fire-perf-compat",[l0]:"fire-rc",[u0]:"fire-rc-compat",[h0]:"fire-gcs",[d0]:"fire-gcs-compat",[f0]:"fire-fst",[p0]:"fire-fst-compat","fire-js":"fire-js",[g0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map,al=new Map;function y0(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(al.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of jo.values())y0(n,t);return!0}function Sa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new Ri("app","Firebase",v0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=m0;function Ug(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ol,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(n||(n=Og()),!n)throw Fn.create("no-options");const i=jo.get(s);if(i){if($o(n,i.options)&&$o(r,i.config))return i;throw Fn.create("duplicate-app",{appName:s})}const o=new SA(s);for(const c of al.values())o.addComponent(c);const a=new E0(n,r,o);return jo.set(s,a),a}function du(t=ol){const e=jo.get(t);if(!e&&t===ol&&Og())return Ug();if(!e)throw Fn.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=_0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(a.join(" "));return}pr(new Hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="firebase-heartbeat-database",T0=1,si="firebase-heartbeat-store";let Ec=null;function Fg(){return Ec||(Ec=$A(w0,T0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),Ec}async function I0(t){try{return await(await Fg()).transaction(si).objectStore(si).get(Bg(t))}catch(e){if(e instanceof rn)fr.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function Fd(t,e){try{const r=(await Fg()).transaction(si,"readwrite");await r.objectStore(si).put(e,Bg(t)),await r.done}catch(n){if(n instanceof rn)fr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function Bg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=1024,b0=30*24*60*60*1e3;class R0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new S0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=b0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bd(),{heartbeatsToSend:n,unsentEntries:r}=P0(this._heartbeatsCache.heartbeats),s=Bo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bd(){return new Date().toISOString().substring(0,10)}function P0(t,e=A0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$d(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$d(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class S0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mA()?_A().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await I0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $d(t){return Bo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){pr(new Hn("platform-logger",e=>new HA(e),"PRIVATE")),pr(new Hn("heartbeat",e=>new R0(e),"PRIVATE")),Jt(il,Ud,t),Jt(il,Ud,"esm2017"),Jt("fire-js","")}C0("");var k0="firebase",x0="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(k0,x0,"app");const D0={apiKey:"AIzaSyAKS1uKR-Vdhg_poUn3Sz47h_R8HV84Z8w",authDomain:"fb-testing-4d315.firebaseapp.com",databaseURL:"https://fb-testing-4d315-default-rtdb.firebaseio.com",projectId:"fb-testing-4d315",storageBucket:"fb-testing-4d315.appspot.com",messagingSenderId:"523525819842",appId:"1:523525819842:web:6b827f49670b8e543c5a5b"},fu=Ug(D0);var O0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,pu=pu||{},X=O0||self;function Ca(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function N0(t){return Object.prototype.hasOwnProperty.call(t,wc)&&t[wc]||(t[wc]=++V0)}var wc="closure_uid_"+(1e9*Math.random()>>>0),V0=0;function M0(t,e,n){return t.call.apply(t.bind,arguments)}function L0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=M0:at=L0,at.apply(null,arguments)}function io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var U0=0;Gn.prototype.s=!1;Gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),U0!=0)&&N0(this)};Gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $g=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ca(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var F0=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",()=>{},e),X.removeEventListener("test",()=>{},e)}catch{}return t}();function ii(t){return/^[\s\xa0]*$/.test(t)}function ka(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return ka().indexOf(t)!=-1}function mu(t){return mu[" "](t),t}mu[" "]=function(){};function B0(t,e){var n=Db;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $0=Wt("Opera"),Yr=Wt("Trident")||Wt("MSIE"),jg=Wt("Edge"),cl=jg||Yr,qg=Wt("Gecko")&&!(ka().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),j0=ka().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function Hg(){var t=X.document;return t?t.documentMode:void 0}var ll;e:{var Tc="",Ic=function(){var t=ka();if(qg)return/rv:([^\);]+)(\)|;)/.exec(t);if(jg)return/Edge\/([\d\.]+)/.exec(t);if(Yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(j0)return/WebKit\/(\S+)/.exec(t);if($0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ic&&(Tc=Ic?Ic[1]:""),Yr){var Ac=Hg();if(Ac!=null&&Ac>parseFloat(Tc)){ll=String(Ac);break e}}ll=Tc}var ul;if(X.document&&Yr){var qd=Hg();ul=qd||parseInt(ll,10)||void 0}else ul=void 0;var q0=ul;function oi(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qg){e:{try{mu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:H0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oi.$.h.call(this)}}Ke(oi,ct);var H0={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ci="closure_listenable_"+(1e6*Math.random()|0),z0=0;function W0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++z0,this.fa=this.ia=!1}function xa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _u(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function K0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function zg(t){const e={};for(const n in t)e[n]=t[n];return e}const Hd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Hd.length;i++)n=Hd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Da(t){this.src=t,this.g={},this.h=0}Da.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new W0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function hl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=$g(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var yu="closure_lm_"+(1e6*Math.random()|0),bc={};function Kg(t,e,n,r,s){if(r&&r.once)return Qg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kg(t,e[i],n,r,s);return null}return n=wu(n),t&&t[Ci]?t.O(e,n,Si(r)?!!r.capture:!!r,s):Gg(t,e,n,!1,r,s)}function Gg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Si(s)?!!s.capture:!!s,a=Eu(t);if(a||(t[yu]=a=new Da(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=G0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)F0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Xg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function G0(){function t(n){return e.call(t.src,t.listener,n)}const e=Q0;return t}function Qg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qg(t,e[i],n,r,s);return null}return n=wu(n),t&&t[Ci]?t.P(e,n,Si(r)?!!r.capture:!!r,s):Gg(t,e,n,!0,r,s)}function Jg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Jg(t,e[i],n,r,s);else r=Si(r)?!!r.capture:!!r,n=wu(n),t&&t[Ci]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dl(i,n,r,s),-1<n&&(xa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,r,s)),(n=-1<t?e[t]:null)&&vu(n))}function vu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ci])hl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Eu(e))?(hl(n,t),n.h==0&&(n.src=null,e[yu]=null)):xa(t)}}}function Xg(t){return t in bc?bc[t]:bc[t]="on"+t}function Q0(t,e){if(t.fa)t=!0;else{e=new oi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&vu(t),t=n.call(r,e)}return t}function Eu(t){return t=t[yu],t instanceof Da?t:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wu(t){return typeof t=="function"?t:(t[Rc]||(t[Rc]=function(e){return t.handleEvent(e)}),t[Rc])}function We(){Gn.call(this),this.i=new Da(this),this.S=this,this.J=null}Ke(We,Gn);We.prototype[Ci]=!0;We.prototype.removeEventListener=function(t,e,n,r){Jg(this,t,e,n,r)};function Ye(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var s=e;e=new ct(r,t),Wg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=oo(o,r,!0,e)&&s}if(o=e.g=t,s=oo(o,r,!0,e)&&s,s=oo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=oo(o,r,!1,e)&&s}We.prototype.N=function(){if(We.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)xa(n[r]);delete t.g[e],t.h--}}this.J=null};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function oo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&hl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Tu=X.JSON.stringify;class J0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function X0(){var t=Iu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Y0{constructor(){this.h=this.g=null}add(e,n){const r=Yg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Yg=new J0(()=>new Z0,t=>t.reset());class Z0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tb(t){X.setTimeout(()=>{throw t},0)}let ai,ci=!1,Iu=new Y0,Zg=()=>{const t=X.Promise.resolve(void 0);ai=()=>{t.then(nb)}};var nb=()=>{for(var t;t=X0();){try{t.h.call(t.g)}catch(n){tb(n)}var e=Yg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ci=!1};function Oa(t,e){We.call(this),this.h=t||1,this.g=e||X,this.j=at(this.qb,this),this.l=Date.now()}Ke(Oa,We);N=Oa.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ye(this,"tick"),this.ga&&(Au(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Au(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Oa.$.N.call(this),Au(this),delete this.g};function bu(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function em(t){t.g=bu(()=>{t.g=null,t.i&&(t.i=!1,em(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rb extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:em(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(t){Gn.call(this),this.h=t,this.g={}}Ke(li,Gn);var zd=[];function tm(t,e,n,r){Array.isArray(n)||(n&&(zd[0]=n.toString()),n=zd);for(var s=0;s<n.length;s++){var i=Kg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function nm(t){_u(t.g,function(e,n){this.g.hasOwnProperty(n)&&vu(e)},t),t.g={}}li.prototype.N=function(){li.$.N.call(this),nm(this)};li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Na(){this.g=!0}Na.prototype.Ea=function(){this.g=!1};function sb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ib(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Mr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ab(t,n)+(r?" "+r:"")})}function ob(t,e){t.info(function(){return"TIMEOUT: "+e})}Na.prototype.info=function(){};function ab(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Tu(n)}catch{return e}}var wr={},Wd=null;function Va(){return Wd=Wd||new We}wr.Ta="serverreachability";function rm(t){ct.call(this,wr.Ta,t)}Ke(rm,ct);function ui(t){const e=Va();Ye(e,new rm(e))}wr.STAT_EVENT="statevent";function sm(t,e){ct.call(this,wr.STAT_EVENT,t),this.stat=e}Ke(sm,ct);function pt(t){const e=Va();Ye(e,new sm(e,t))}wr.Ua="timingevent";function im(t,e){ct.call(this,wr.Ua,t),this.size=e}Ke(im,ct);function ki(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Ma={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},om={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ru(){}Ru.prototype.h=null;function Kd(t){return t.h||(t.h=t.i())}function am(){}var xi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pu(){ct.call(this,"d")}Ke(Pu,ct);function Su(){ct.call(this,"c")}Ke(Su,ct);var fl;function La(){}Ke(La,Ru);La.prototype.g=function(){return new XMLHttpRequest};La.prototype.i=function(){return{}};fl=new La;function Di(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new li(this),this.P=cb,t=cl?125:void 0,this.V=new Oa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cm}function cm(){this.i=null,this.g="",this.h=!1}var cb=45e3,pl={},qo={};N=Di.prototype;N.setTimeout=function(t){this.P=t};function gl(t,e,n){t.L=1,t.v=Fa(gn(e)),t.s=n,t.S=!0,lm(t,null)}function lm(t,e){t.G=Date.now(),Oi(t),t.A=gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),_m(n.i,"t",r),t.C=0,n=t.l.J,t.h=new cm,t.g=Um(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rb(at(t.Pa,t,t.g),t.O)),tm(t.U,t.g,"readystatechange",t.nb),e=t.I?zg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ui(),sb(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Kt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Kt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||cl||this.g&&(this.h.h||this.g.ja()||Xd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ui(3):ui(2)),Ua(this);var n=this.g.da();this.ca=n;t:if(um(this)){var r=Xd(this.g);t="";var s=r.length,i=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),qs(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ib(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ii(a)){var l=a;break t}}l=null}if(n=l)Mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ml(this,n);else{this.i=!1,this.o=3,pt(12),rr(this),qs(this);break e}}this.S?(hm(this,u,o),cl&&this.i&&u==3&&(tm(this.U,this.V,"tick",this.mb),this.V.start())):(Mr(this.j,this.m,o,null),ml(this,o)),u==4&&rr(this),this.i&&!this.J&&(u==4?Nm(this.l,this):(this.i=!1,Oi(this)))}else Cb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),rr(this),qs(this)}}}catch{}finally{}};function um(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function hm(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=lb(t,n),s==qo){e==4&&(t.o=4,pt(14),r=!1),Mr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==pl){t.o=4,pt(15),Mr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Mr(t.j,t.m,s,null),ml(t,s);um(t)&&s!=qo&&s!=pl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nu(e),e.M=!0,pt(11))):(Mr(t.j,t.m,n,"[Invalid Chunked Response]"),rr(t),qs(t))}N.mb=function(){if(this.g){var t=Kt(this.g),e=this.g.ja();this.C<e.length&&(Ua(this),hm(this,t,e),this.i&&t!=4&&Oi(this))}};function lb(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qo:(n=Number(e.substring(n,r)),isNaN(n)?pl:(r+=1,r+n>e.length?qo:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,rr(this)};function Oi(t){t.Y=Date.now()+t.P,dm(t,t.P)}function dm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ki(at(t.lb,t),e)}function Ua(t){t.B&&(X.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ob(this.j,this.A),this.L!=2&&(ui(),pt(17)),rr(this),this.o=2,qs(this)):dm(this,this.Y-t)};function qs(t){t.l.H==0||t.J||Nm(t.l,t)}function rr(t){Ua(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Au(t.V),nm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ml(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_l(n.i,t))){if(!t.K&&_l(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wo(n),ja(n);else break e;Ou(n),pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ki(at(n.ib,n),6e3));if(1>=Em(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else sr(n,11)}else if((t.K||n.g==t)&&Wo(n),!ii(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Cu(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ae(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Lm(r,r.J?r.pa:null,r.Y),o.K){wm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ua(a),Oi(a)),r.g=o}else Dm(r);0<n.j.length&&qa(n)}else l[0]!="stop"&&l[0]!="close"||sr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sr(n,7):Du(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ui(4)}catch{}}function ub(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ca(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ca(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function fm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ca(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hb(t),r=ub(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var pm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function db(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function lr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof lr){this.h=t.h,Ho(this,t.j),this.s=t.s,this.g=t.g,zo(this,t.m),this.l=t.l;var e=t.i,n=new hi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gd(this,n),this.o=t.o}else t&&(e=String(t).match(pm))?(this.h=!1,Ho(this,e[1]||"",!0),this.s=Os(e[2]||""),this.g=Os(e[3]||"",!0),zo(this,e[4]),this.l=Os(e[5]||"",!0),Gd(this,e[6]||"",!0),this.o=Os(e[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,Qd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,Qd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?gb:pb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,_b)),t.join("")};function gn(t){return new lr(t)}function Ho(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gd(t,e,n){e instanceof hi?(t.i=e,yb(t.i,t.h)):(n||(e=Ns(e,mb)),t.i=new hi(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Fa(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qd=/[#\/\?@]/g,pb=/[#\?:]/g,gb=/[#\?]/g,mb=/[#\?@]/g,_b=/#/g;function hi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&db(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=hi.prototype;N.add=function(t,e){Qn(this),this.i=null,t=fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gm(t,e){Qn(t),e=fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function mm(t,e){return Qn(t),e=fs(t,e),t.g.has(e)}N.forEach=function(t,e){Qn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){Qn(this);let e=[];if(typeof t=="string")mm(this,t)&&(e=e.concat(this.g.get(fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Qn(this),this.i=null,t=fs(this,t),mm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function _m(t,e,n){gm(t,e),0<n.length&&(t.i=null,t.g.set(fs(t,e),gu(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yb(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(gm(this,r),_m(this,s,n))},t)),t.j=e}var vb=class{constructor(t,e){this.g=t,this.map=e}};function ym(t){this.l=t||Eb,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Eb=10;function vm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Em(t){return t.h?1:t.g?t.g.size:0}function _l(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cu(t,e){t.g?t.g.add(e):t.h=e}function wm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ym.prototype.cancel=function(){if(this.i=Tm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return gu(t.i)}var wb=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function Tb(){this.g=new wb}function Ib(t,e,n){const r=n||"";try{fm(t,function(s,i){let o=s;Si(s)&&(o=Tu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Ab(t,e){const n=new Na;if(X.Image){const r=new Image;r.onload=io(ao,n,r,"TestLoadImage: loaded",!0,e),r.onerror=io(ao,n,r,"TestLoadImage: error",!1,e),r.onabort=io(ao,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=io(ao,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ao(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ni(t){this.l=t.fc||null,this.j=t.ob||!1}Ke(Ni,Ru);Ni.prototype.g=function(){return new Ba(this.l,this.j)};Ni.prototype.i=function(t){return function(){return t}}({});function Ba(t,e){We.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ku,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Ba,We);var ku=0;N=Ba.prototype;N.open=function(t,e){if(this.readyState!=ku)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=ku};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Im(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Im(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vi(this):di(this),this.readyState==3&&Im(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Vi(this))};N.Ya=function(t){this.g&&(this.response=t,Vi(this))};N.ka=function(){this.g&&Vi(this)};function Vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bb=X.JSON.parse;function Oe(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Am,this.L=this.M=!1}Ke(Oe,We);var Am="",Rb=/^https?$/i,Pb=["POST","PUT"];N=Oe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fl.g(),this.C=this.u?Kd(this.u):Kd(fl),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Jd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=$g(Pb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pm(this),0<this.B&&((this.L=Sb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=bu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Jd(this,i)}};function Sb(t){return Yr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof pu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bm(t),$a(t)}function bm(t){t.F||(t.F=!0,Ye(t,"complete"),Ye(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),$a(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$a(this,!0)),Oe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Rm(this):this.kb())};N.kb=function(){Rm(this)};function Rm(t){if(t.h&&typeof pu<"u"&&(!t.C[1]||Kt(t)!=4||t.da()!=2)){if(t.v&&Kt(t)==4)bu(t.La,0,t);else if(Ye(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(pm)[1]||null;!s&&X.self&&X.self.location&&(s=X.self.location.protocol.slice(0,-1)),r=!Rb.test(s?s.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var i=2<Kt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",bm(t)}}finally{$a(t)}}}}function $a(t,e){if(t.g){Pm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Kt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bb(e)}};function Xd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Am:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Cb(t){const e={};t=(t.g&&2<=Kt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ii(t[r]))continue;var n=eb(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}K0(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sm(t){let e="";return _u(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Sm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cm(t){this.Ga=0,this.j=[],this.l=new Na,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rs("baseRetryDelayMs",5e3,t),this.hb=Rs("retryDelaySeedMs",1e4,t),this.eb=Rs("forwardChannelMaxRetries",2,t),this.xa=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ym(t&&t.concurrentRequestLimit),this.Ja=new Tb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Cm.prototype;N.ra=8;N.H=1;function Du(t){if(km(t),t.H==3){var e=t.W++,n=gn(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Mi(t,n),e=new Di(t,t.l,e),e.L=2,e.v=Fa(gn(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Um(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Oi(e)}Mm(t)}function ja(t){t.g&&(Nu(t),t.g.cancel(),t.g=null)}function km(t){ja(t),t.u&&(X.clearTimeout(t.u),t.u=null),Wo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function qa(t){if(!vm(t.i)&&!t.m){t.m=!0;var e=t.Na;ai||Zg(),ci||(ai(),ci=!0),Iu.add(e,t),t.C=0}}function kb(t,e){return Em(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ki(at(t.Na,t,e),Vm(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Di(this,this.l,t);let i=this.s;if(this.U&&(i?(i=zg(i),Wg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xm(this,s,e),n=gn(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),Mi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Sm(i)))+"&"+e:this.o&&xu(n,this.o,i)),Cu(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,gl(s,n,null)):gl(s,n,e),this.H=2}}else this.H==3&&(t?Yd(this,t):this.j.length==0||vm(this.i)||Yd(this))};function Yd(t,e){var n;e?n=e.m:n=t.W++;const r=gn(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),Mi(t,r),t.o&&t.s&&xu(r,t.o,t.s),n=new Di(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=xm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Cu(t.i,n),gl(n,r,e)}function Mi(t,e){t.na&&_u(t.na,function(n,r){Ae(e,r,n)}),t.h&&fm({},function(n,r){Ae(e,r,n)})}function xm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?at(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Ib(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Dm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ai||Zg(),ci||(ai(),ci=!0),Iu.add(e,t),t.A=0}}function Ou(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ki(at(t.Ma,t),Vm(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,Om(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ki(at(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),ja(this),Om(this))};function Nu(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function Om(t){t.g=new Di(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),Mi(t,e),t.o&&t.s&&xu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Fa(gn(e)),n.s=null,n.S=!0,lm(n,t)}N.ib=function(){this.v!=null&&(this.v=null,ja(this),Ou(this),pt(19))};function Wo(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function Nm(t,e){var n=null;if(t.g==e){Wo(t),Nu(t),t.g=null;var r=2}else if(_l(t.i,e))n=e.F,wm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Va(),Ye(r,new im(r,n)),qa(t)}else Dm(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&kb(t,e)||r==2&&Ou(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}}function Vm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=at(t.pb,t);n||(n=new lr("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Ho(n,"https"),Fa(n)),Ab(n.toString(),r)}else pt(2);t.H=0,t.h&&t.h.za(e),Mm(t),km(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function Mm(t){if(t.H=0,t.ma=[],t.h){const e=Tm(t.i);(e.length!=0||t.j.length!=0)&&(jd(t.ma,e),jd(t.ma,t.j),t.i.i.length=0,gu(t.j),t.j.length=0),t.h.ya()}}function Lm(t,e,n){var r=n instanceof lr?gn(n):new lr(n);if(r.g!="")e&&(r.g=e+"."+r.g),zo(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new lr(null);r&&Ho(i,r),e&&(i.g=e),s&&zo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),Mi(t,r),r}function Um(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Oe(new Ni({ob:!0})):new Oe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Fm(){}N=Fm.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Ko(){if(Yr&&!(10<=Number(q0)))throw Error("Environmental error: no available transport.")}Ko.prototype.g=function(t,e){return new At(t,e)};function At(t,e){We.call(this),this.g=new Cm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}Ke(At,We);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Lm(t,null,t.Y),qa(t)};At.prototype.close=function(){Du(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tu(t),t=n);e.j.push(new vb(e.fb++,t)),e.H==3&&qa(e)};At.prototype.N=function(){this.g.h=null,delete this.j,Du(this.g),delete this.g,At.$.N.call(this)};function Bm(t){Pu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(Bm,Pu);function $m(){Su.call(this),this.status=1}Ke($m,Su);function ps(t){this.g=t}Ke(ps,Fm);ps.prototype.Ba=function(){Ye(this.g,"a")};ps.prototype.Aa=function(t){Ye(this.g,new Bm(t))};ps.prototype.za=function(t){Ye(this.g,new $m)};ps.prototype.ya=function(){Ye(this.g,"b")};function xb(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(Ut,xb);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Pc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Pc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Pc(this,r),s=0;break}}this.h=s,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function _e(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Db={};function Vu(t){return-128<=t&&128>t?B0(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function Gt(t){if(isNaN(t)||!isFinite(t))return $r;if(0>t)return Je(Gt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=yl;return new _e(e,0)}function jm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Je(jm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gt(Math.pow(e,8)),r=$r,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Gt(Math.pow(e,i)),r=r.R(i).add(Gt(o))):(r=r.R(n),r=r.add(Gt(o)))}return r}var yl=4294967296,$r=Vu(0),vl=Vu(1),Zd=Vu(16777216);N=_e.prototype;N.ea=function(){if(Pt(this))return-Je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:yl+r)*e,e*=yl}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(un(this))return"0";if(Pt(this))return"-"+Je(this).toString(t);for(var e=Gt(Math.pow(t,6)),n=this,r="";;){var s=Qo(n,e).g;n=Go(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,un(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}N.X=function(t){return t=Go(this,t),Pt(t)?-1:un(t)?0:1};function Je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _e(n,~t.h).add(vl)}N.abs=function(){return Pt(this)?Je(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function Go(t,e){return t.add(Je(e))}N.R=function(t){if(un(this)||un(t))return $r;if(Pt(this))return Pt(t)?Je(this).R(Je(t)):Je(Je(this).R(t));if(Pt(t))return Je(this.R(Je(t)));if(0>this.X(Zd)&&0>t.X(Zd))return Gt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,co(n,2*r+2*s),n[2*r+2*s+1]+=i*c,co(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,co(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,co(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _e(n,0)};function co(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ps(t,e){this.g=t,this.h=e}function Qo(t,e){if(un(e))throw Error("division by zero");if(un(t))return new Ps($r,$r);if(Pt(t))return e=Qo(Je(t),e),new Ps(Je(e.g),Je(e.h));if(Pt(e))return e=Qo(t,Je(e)),new Ps(Je(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vl,r=e;0>=r.X(t);)n=ef(n),r=ef(r);var s=Cr(n,1),i=Cr(r,1);for(r=Cr(r,2),n=Cr(n,2);!un(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Cr(r,1),n=Cr(n,1)}return e=Go(t,s.R(e)),new Ps(s,e)}for(s=$r;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Gt(n),o=i.R(e);Pt(o)||0<o.X(t);)n-=r,i=Gt(n),o=i.R(e);un(i)&&(i=vl),s=s.add(i),t=Go(t,o)}return new Ps(s,t)}N.gb=function(t){return Qo(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _e(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _e(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _e(n,this.h^t.h)};function ef(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _e(n,t.h)}function Cr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new _e(s,t.h)}Ko.prototype.createWebChannel=Ko.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;Ma.NO_ERROR=0;Ma.TIMEOUT=8;Ma.HTTP_ERROR=6;om.COMPLETE="complete";am.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";We.prototype.listen=We.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=Gt;_e.fromString=jm;var Ob=function(){return new Ko},Nb=function(){return Va()},Sc=Ma,Vb=om,Mb=wr,tf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Lb=Ni,lo=am,Ub=Oe,Fb=Ut,jr=_e;const nf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new uu("@firebase/firestore");function rf(){return gr.logLevel}function $(t,...e){if(gr.logLevel<=ue.DEBUG){const n=e.map(Mu);gr.debug(`Firestore (${gs}): ${t}`,...n)}}function mn(t,...e){if(gr.logLevel<=ue.ERROR){const n=e.map(Mu);gr.error(`Firestore (${gs}): ${t}`,...n)}}function Zr(t,...e){if(gr.logLevel<=ue.WARN){const n=e.map(Mu);gr.warn(`Firestore (${gs}): ${t}`,...n)}}function Mu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Pe(t,e){t||J()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class $b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jb{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new qm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new rt(e)}}class qb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new qb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new zb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Kb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Fe(0,0))}static max(){return new Z(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends fi{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const Gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends fi{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return Gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(be.fromString(e))}static fromName(e){return new q(be.fromString(e).popFirst(5))}static empty(){return new q(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new be(e.slice()))}}function Qb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new zn(s,q.empty(),e)}function Jb(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(Z.min(),q.empty(),-1)}static max(){return new zn(Z.max(),q.empty(),-1)}}function Xb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Yb)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Lu.ae=-1;function Ha(t){return t==null}function Jo(t){return t===0&&1/t==-1/0}function eR(t){return typeof t=="number"&&Number.isInteger(t)&&!Jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uo(this.root,e,this.comparator,!0)}}class uo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new of(this.data.getIterator())}getIteratorFrom(e){return new of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new lt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wm("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const tR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=tR.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fu(t){const e=t.mapValue.fields.__previous_value__;return Uu(e)?Fu(e):e}function pi(t){const e=Wn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:rR(t)?9007199254740991:10:J()}function nn(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Wn(s.timestampValue),a=Wn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),a=Le(i.doubleValue);return o===a?Jo(o)===Jo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(sf(o)!==sf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nn(o[c],a[c])))return!1;return!0}(t,e);default:return J()}}function mi(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return af(t.timestampValue,e.timestampValue);case 4:return af(pi(t),pi(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,o){const a=mr(i),c=mr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=de(a[l],c[l]);if(u!==0)return u}return de(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(Le(i.latitude),Le(o.latitude));return a!==0?a:de(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ts(a[l],c[l]);if(u)return u}return de(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ho.mapValue&&o===ho.mapValue)return 0;if(i===ho.mapValue)return 1;if(o===ho.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=de(c[h],u[h]);if(d!==0)return d;const f=ts(a[c[h]],l[u[h]]);if(f!==0)return f}return de(c.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function af(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Wn(t),r=Wn(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function ns(t){return El(t)}function El(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=El(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${El(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function cf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wl(t){return!!t&&"integerValue"in t}function Bu(t){return!!t&&"arrayValue"in t}function lf(t){return!!t&&"nullValue"in t}function uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bo(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Hs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(Hs(this.value))}}function Km(t){const e=[];return ms(t.fields,(n,r)=>{const s=new ot([n]);if(bo(r)){const i=Km(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,Z.min(),Z.min(),Z.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,Z.min(),Z.min(),St.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Z.min(),Z.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.position=e,this.inclusive=n}}function hf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n="asc"){this.field=e,this.dir=n}}function sR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{}class Ue extends Gm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oR(e,n,r):n==="array-contains"?new lR(e,r):n==="in"?new uR(e,r):n==="not-in"?new hR(e,r):n==="array-contains-any"?new dR(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aR(e,r):new cR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ts(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ft extends Gm{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ft(e,n)}matches(e){return Qm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Qm(t){return t.op==="and"}function Jm(t){return iR(t)&&Qm(t)}function iR(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function Tl(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(Jm(t))return t.filters.map(e=>Tl(e)).join(",");{const e=t.filters.map(n=>Tl(n)).join(",");return`${t.op}(${e})`}}function Xm(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(t,e):t instanceof Ft?function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xm(o,s.filters[a]),!0):!1}(t,e):void J()}function Ym(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof Ft?function(n){return n.op.toString()+" {"+n.getFilters().map(Ym).join(" ,")+"}"}(t):"Filter"}class oR extends Ue{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class aR extends Ue{constructor(e,n){super(e,"in",n),this.keys=Zm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cR extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Zm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class lR extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bu(n)&&mi(n.arrayValue,this.value)}}class uR extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mi(this.value.arrayValue,n)}}class hR extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mi(this.value.arrayValue,n)}}class dR extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function ff(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fR(t,e,n,r,s,i,o)}function $u(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.he=n}return e.he}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!df(t.startAt,e.startAt)&&df(t.endAt,e.endAt)}function Il(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function pR(t,e,n,r,s,i,o,a){return new Fi(t,e,n,r,s,i,o,a)}function e_(t){return new Fi(t)}function pf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function t_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function n_(t){return t.collectionGroup!==null}function qr(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=qu(e),r=t_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new zs(n)),e.Pe.push(new zs(ot.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new zs(ot.keyField(),i))}}}return e.Pe}function _n(t){const e=te(t);if(!e.Ie)if(e.limitType==="F")e.Ie=ff(e.path,e.collectionGroup,qr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of qr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new zs(i.field,o))}const r=e.endAt?new Xo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Xo(e.startAt.position,e.startAt.inclusive):null;e.Ie=ff(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function Al(t,e){e.getFirstInequalityField(),qu(t);const n=t.filters.concat([e]);return new Fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bl(t,e,n){return new Fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function za(t,e){return ju(_n(t),_n(e))&&t.limitType===e.limitType}function r_(t){return`${$u(_n(t))}|lt:${t.limitType}`}function Rl(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ym(s)).join(", ")}]`),Ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ns(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ns(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function Wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=hf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,qr(r),s)||r.endAt&&!function(o,a,c){const l=hf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,qr(r),s))}(t,e)}function gR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s_(t){return(e,n)=>{let r=!1;for(const s of qr(t)){const i=mR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mR(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ts(c,l):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new ke(q.comparator);function yn(){return _R}const i_=new ke(q.comparator);function Vs(...t){let e=i_;for(const n of t)e=e.insert(n.key,n);return e}function o_(t){let e=i_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return Ws()}function a_(){return Ws()}function Ws(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const yR=new ke(q.comparator),vR=new lt(q.comparator);function ie(...t){let e=vR;for(const n of t)e=e.add(n);return e}const ER=new lt(de);function wR(){return ER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jo(e)?"-0":e}}function l_(t){return{integerValue:""+t}}function TR(t,e){return eR(e)?l_(e):c_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this._=void 0}}function IR(t,e,n){return t instanceof Yo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uu(i)&&(i=Fu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof _i?h_(t,e):t instanceof yi?d_(t,e):function(s,i){const o=u_(s,i),a=gf(o)+gf(s.Te);return wl(o)&&wl(s.Te)?l_(a):c_(s.serializer,a)}(t,e)}function AR(t,e,n){return t instanceof _i?h_(t,e):t instanceof yi?d_(t,e):n}function u_(t,e){return t instanceof Zo?function(r){return wl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yo extends Ka{}class _i extends Ka{constructor(e){super(),this.elements=e}}function h_(t,e){const n=f_(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends Ka{constructor(e){super(),this.elements=e}}function d_(t,e){let n=f_(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class Zo extends Ka{constructor(e,n){super(),this.serializer=e,this.Te=n}}function gf(t){return Le(t.integerValue||t.doubleValue)}function f_(t){return Bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?es(r.elements,s.elements,nn):r instanceof Zo&&s instanceof Zo?nn(r.Te,s.Te):r instanceof Yo&&s instanceof Yo}(t.transform,e.transform)}class RR{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ga{}function p_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hu(t.key,Xt.none()):new Bi(t.key,t.data,Xt.none());{const n=t.data,r=St.empty();let s=new lt(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Tr(t.key,r,new Nt(s.toArray()),Xt.none())}}function PR(t,e,n){t instanceof Bi?function(s,i,o){const a=s.value.clone(),c=_f(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(s,i,o){if(!Ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=_f(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(g_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof Bi?function(i,o,a,c){if(!Ro(i.precondition,o))return a;const l=i.value.clone(),u=yf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(i,o,a,c){if(!Ro(i.precondition,o))return a;const l=yf(i.fieldTransforms,c,o),u=o.data;return u.setAll(g_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function SR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=u_(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&es(r,s,(i,o)=>bR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends Ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tr extends Ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function g_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _f(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,AR(o,a,n[s]))}return r}function yf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,IR(i,o,e))}return r}class Hu extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CR extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=a_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=p_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>mf(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>mf(n,r))}}class zu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return yR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,oe;function OR(t){switch(t){default:return J();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function m_(t){if(t===void 0)return mn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Me.OK:return I.OK;case Me.CANCELLED:return I.CANCELLED;case Me.UNKNOWN:return I.UNKNOWN;case Me.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Me.INTERNAL:return I.INTERNAL;case Me.UNAVAILABLE:return I.UNAVAILABLE;case Me.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Me.NOT_FOUND:return I.NOT_FOUND;case Me.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Me.ABORTED:return I.ABORTED;case Me.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Me.DATA_LOSS:return I.DATA_LOSS;default:return J()}}(oe=Me||(Me={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fo}static getOrCreateInstance(){return fo===null&&(fo=new Wu),fo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=new jr([4294967295,4294967295],0);function vf(t){const e=NR().encode(t),n=new Fb;return n.update(e),new Uint8Array(n.digest())}function Ef(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class Ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=jr.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(VR)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ku(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qa(Z.min(),s,new ke(de),yn(),ie())}}class $i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $i(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class __{constructor(e,n){this.targetId=e,this.pe=n}}class y_{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wf{constructor(){this.ye=0,this.we=If(),this.Se=ht.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ie(),n=ie(),r=ie();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new $i(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=If()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class MR{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=yn(),this.$e=Tf(),this.Ue=new ke(de)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Il(a))if(i===0){const c=new q(a.path);this.ze(s,c,st.newNoDocument(c,Z.min()))}else Pe(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(e,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=Wu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,_){var v,y,R,C,V,k;const W={localCacheCount:f,existenceFilterCount:_.count},L=_.unchangedNames;return L&&(W.bloomFilter={applied:h===0,hashCount:(v=L==null?void 0:L.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(C=(R=(y=L==null?void 0:L.bits)===null||y===void 0?void 0:y.bitmap)===null||R===void 0?void 0:R.length)!==null&&C!==void 0?C:0,padding:(k=(V=L==null?void 0:L.bits)===null||V===void 0?void 0:V.padding)!==null&&k!==void 0?k:0},d&&(W.bloomFilter.mightContain=d)),W}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=mr(i).toUint8Array()}catch(h){if(h instanceof Wm)return Zr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new Ku(c,o,a)}catch(h){return Zr(h instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return l.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Il(a.target)){const c=new q(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,st.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=ie();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new Qa(e,n,this.Ue,this.Ke,r);return this.Ke=yn(),this.$e=Tf(),this.Ue=new ke(de),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new wf,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new lt(de),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new wf),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Tf(){return new ke(q.comparator)}function If(){return new ke(q.comparator)}const LR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),UR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),FR=(()=>({and:"AND",or:"OR"}))();class BR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pl(t,e){return t.useProto3Json||Ha(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $R(t,e){return ea(t,e.toTimestamp())}function Yt(t){return Pe(!!t),Z.fromTimestamp(function(n){const r=Wn(n);return new Fe(r.seconds,r.nanos)}(t))}function Gu(t,e){return function(r){return new be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function E_(t){const e=be.fromString(t);return Pe(A_(e)),e}function Sl(t,e){return Gu(t.databaseId,e.path)}function Cc(t,e){const n=E_(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(w_(n))}function Cl(t,e){return Gu(t.databaseId,e)}function jR(t){const e=E_(t);return e.length===4?be.emptyPath():w_(e)}function kl(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function w_(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Af(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function qR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Pe(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:m_(l.code);return new F(u,l.message||"")}(o);n=new y_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cc(t,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):Z.min(),a=new St({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Po(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cc(t,r.document),i=r.readTime?Yt(r.readTime):Z.min(),o=st.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cc(t,r.document),i=r.removedTargetIds||[];n=new Po([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DR(s,i),a=r.targetId;n=new __(a,o)}}return n}function HR(t,e){let n;if(e instanceof Bi)n={update:Af(t,e.key,e.value)};else if(e instanceof Hu)n={delete:Sl(t,e.key)};else if(e instanceof Tr)n={update:Af(t,e.key,e.data),updateMask:ZR(e.fieldMask)};else{if(!(e instanceof CR))return J();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$R(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function zR(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Yt(s.updateTime):Yt(i);return o.isEqual(Z.min())&&(o=Yt(i)),new RR(o,s.transformResults||[])}(n,e))):[]}function WR(t,e){return{documents:[Cl(t,e.path)]}}function KR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return I_(Ft.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Or(h.field),direction:JR(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Pl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function GR(t){let e=jR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=T_(h);return d instanceof Ft&&Jm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new zs(Nr(_.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ha(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Xo(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Xo(f,d)}(n.endAt)),pR(e,s,o,i,a,"F",c,l)}function QR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function T_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Nr(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Nr(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ft.create(n.compositeFilter.filters.map(r=>T_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function JR(t){return LR[t]}function XR(t){return UR[t]}function YR(t){return FR[t]}function Or(t){return{fieldPath:t.canonicalString()}}function Nr(t){return ot.fromServerFormat(t.fieldPath)}function I_(t){return t instanceof Ue?function(n){if(n.op==="=="){if(uf(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NAN"}};if(lf(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uf(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NAN"}};if(lf(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(n.field),op:XR(n.op),value:n.value}}}(t):t instanceof Ft?function(n){const r=n.getFilters().map(s=>I_(s));return r.length===1?r[0]:{compositeFilter:{op:YR(n.op),filters:r}}}(t):J()}function ZR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.ct=e}}function tP(t){const e=GR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.sn=new rP}addToCollectionParentIndex(e,n){return this.sn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(zn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class rP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new rs(0)}static On(){return new rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ks(r.mutation,s,Nt.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Vs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=yn();const o=Ws(),a=function(){return Ws()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Tr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ks(u.mutation,l,u.mutation.getFieldMask(),Fe.now())):o.set(l.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new iP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ws();let s=new ke((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Nt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=a_();u.forEach(d=>{if(!i.has(d)){const f=p_(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):n_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(ir());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:o_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Vs();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(u,h){return new Fi(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,st.newInvalidDocument(l)))});let o=Vs();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ks(l.mutation,c,Nt.empty(),Fe.now()),Wa(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return S.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:tP(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.overlays=new ke(q.comparator),this.cr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=ir(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ir(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ir(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xR(n,r));let i=this.cr.get(n);i===void 0&&(i=ie(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.lr=new lt($e.hr),this.Pr=new lt($e.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new $e(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new q(new be([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new q(new be([])),r=new $e(n,e),s=new $e(n,e+1);let i=ie();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return q.comparator(e.key,n.key)||de(e.mr,n.mr)}static Ir(e,n){return de(e.mr,n.mr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new lt($e.hr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(de);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),S.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new $e(new q(i),0);let a=new lt(de);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),S.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return S.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new $e(n,0),s=this.pr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.Dr=e,this.docs=function(){return new ke(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=yn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Xb(Jb(u),r)<=0||(s.has(u.key)||Wa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hP(this)}getSize(e){return S.resolve(this.size)}}class hP extends sP{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.persistence=e,this.Cr=new _s(n=>$u(n),ju),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Qu,this.targetCount=0,this.Or=rs.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),S.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Ln(n),S.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Lu(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new dP(this),this.indexManager=new nP,this.remoteDocumentCache=function(s){return new uP(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new eP(n),this.Qr=new aP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new lP(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new pP(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return S.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class pP extends Zb{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.Wr=new Qu,this.Gr=null}static zr(e){return new Ju(e)}get jr(){if(this.Gr)return this.Gr;throw J()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.jr,r=>{const s=q.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return S.or([()=>S.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(pf(n))return S.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bl(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(e,bl(n,null,"F")):this.ji(e,l,n,c)}))})))}Ui(e,n,r,s){return pf(n)||s.isEqual(Z.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(rf()<=ue.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rl(n)),this.ji(e,o,n,Qb(s,-1)))})}Gi(e,n){let r=new lt(s_(e));return n.forEach((s,i)=>{Wa(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return rf()<=ue.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Rl(n)),this.Ki.getDocumentsMatchingQuery(e,n,zn.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new ke(de),this.Yi=new _s(i=>$u(i),ju),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oP(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function _P(t,e,n,r){return new mP(t,e,n,r)}async function b_(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ie();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function yP(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=S.resolve();return d.forEach(_=>{f=f.next(()=>u.getEntry(c,_)).next(v=>{const y=l.docVersions.get(_);Pe(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ie();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function R_(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function vP(t,e){const n=te(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ht.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(v,y,R){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(i,f))});let c=yn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(EP(i,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(Z.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function EP(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=yn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function wP(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TP(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Nn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function xl(t,e,n){const r=te(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ui(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function bf(t,e,n){const r=te(t);let s=Z.min(),i=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=te(c),d=h.Yi.get(u);return d!==void 0?S.resolve(h.Ji.get(d)):h.kr.getTargetData(l,u)}(r,o,_n(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:ie())).next(a=>(IP(r,gR(e),a),{documents:a,ss:i})))}function IP(t,e,n){let r=t.Zi.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}class Rf{constructor(){this.activeTargetIds=wR()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AP{constructor(){this.Hs=new Rf,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Rf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po=null;function kc(){return po===null?po=function(){return 268435456+Math.round(2147483648*Math.random())}():po++,"0x"+po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class SP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=kc(),c=this.mo(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Zr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=RP[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=kc();return new Promise((o,a)=>{const c=new Ub;c.setWithCredentials(!0),c.listenOnce(Vb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sc.NO_ERROR:const u=c.getResponseJson();$(nt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Sc.TIMEOUT:$(nt,`RPC '${e}' ${i} timed out`),a(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const h=c.getStatus();if($(nt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(y){const R=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(R)>=0?R:I.UNKNOWN}(f.status);a(new F(_,f.message))}else a(new F(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(I.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{$(nt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(nt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(e,n,r){const s=kc(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ob(),a=Nb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Lb({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(nt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const _=new PP({so:y=>{f?$(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||($(nt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),$(nt,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},oo:()=>h.close()}),v=(y,R,C)=>{y.listen(R,V=>{try{C(V)}catch(k){setTimeout(()=>{throw k},0)}})};return v(h,lo.EventType.OPEN,()=>{f||$(nt,`RPC '${e}' stream ${s} transport opened.`)}),v(h,lo.EventType.CLOSE,()=>{f||(f=!0,$(nt,`RPC '${e}' stream ${s} transport closed`),_.Po())}),v(h,lo.EventType.ERROR,y=>{f||(f=!0,Zr(nt,`RPC '${e}' stream ${s} transport errored:`,y),_.Po(new F(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,lo.EventType.MESSAGE,y=>{var R;if(!f){const C=y.data[0];Pe(!!C);const V=C,k=V.error||((R=V[0])===null||R===void 0?void 0:R.error);if(k){$(nt,`RPC '${e}' stream ${s} received error:`,k);const W=k.status;let L=function(ee){const we=Me[ee];if(we!==void 0)return m_(we)}(W),le=k.message;L===void 0&&(L=I.INTERNAL,le="Unknown error status: "+W+" with message "+k.message),f=!0,_.Po(new F(L,le)),h.close()}else $(nt,`RPC '${e}' stream ${s} received:`,C),_.Io(C)}}),v(a,Mb.STAT_EVENT,y=>{y.stat===tf.PROXY?$(nt,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===tf.NOPROXY&&$(nt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}function xc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new BR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new P_(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new F(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CP extends S_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=qR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Yt(o.readTime):Z.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=kl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Il(c)?{documents:WR(i,c)}:{query:KR(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=v_(i,o.resumeToken);const l=Pl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=ea(i,o.snapshotVersion.toTimestamp());const l=Pl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=QR(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=kl(this.serializer),n.removeTarget=e,this.Ho(n)}}class kP extends S_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=zR(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.u_(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=kl(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HR(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(I.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class DP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(mn(n),this.d_=!1):$("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Ir(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=te(c);l.y_.add(4),await ji(l),l.b_.set("Unknown"),l.y_.delete(4),await Xa(l)}(this))})}),this.b_=new DP(r,s)}}async function Xa(t){if(Ir(t))for(const e of t.w_)await e(!0)}async function ji(t){for(const e of t.w_)await e(!1)}function C_(t,e){const n=te(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),eh(n)?Zu(n):ys(n).Uo()&&Yu(n,e))}function k_(t,e){const n=te(t),r=ys(n);n.p_.delete(e),r.Uo()&&x_(n,e),n.p_.size===0&&(r.Uo()?r.zo():Ir(n)&&n.b_.set("Unknown"))}function Yu(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).i_(e)}function x_(t,e){t.D_.Be(e),ys(t).s_(e)}function Zu(t){t.D_=new MR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.b_.A_()}function eh(t){return Ir(t)&&!ys(t).$o()&&t.p_.size>0}function Ir(t){return te(t).y_.size===0}function D_(t){t.D_=void 0}async function NP(t){t.p_.forEach((e,n)=>{Yu(t,e)})}async function VP(t,e){D_(t),eh(t)?(t.b_.m_(e),Zu(t)):t.b_.set("Unknown")}async function MP(t,e,n){if(t.b_.set("Online"),e instanceof y_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof Po?t.D_.We(e):e instanceof __?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Z.min()))try{const r=await R_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(ht.EMPTY_BYTE_STRING,u.snapshotVersion)),x_(i,c);const h=new Nn(u.target,c,l,u.sequenceNumber);Yu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!Ui(e))throw e;t.y_.add(1),await ji(t),t.b_.set("Offline"),n||(n=()=>R_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Xa(t)})}function O_(t,e){return e().catch(n=>ta(t,n,e))}async function Ya(t){const e=te(t),n=Kn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;LP(e);)try{const s=await wP(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,UP(e,s)}catch(s){await ta(e,s)}N_(e)&&V_(e)}function LP(t){return Ir(t)&&t.g_.length<10}function UP(t,e){t.g_.push(e);const n=Kn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function N_(t){return Ir(t)&&!Kn(t).$o()&&t.g_.length>0}function V_(t){Kn(t).start()}async function FP(t){Kn(t).l_()}async function BP(t){const e=Kn(t);for(const n of t.g_)e.a_(n.mutations)}async function $P(t,e,n){const r=t.g_.shift(),s=zu.from(r,e,n);await O_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ya(t)}async function jP(t,e){e&&Kn(t).__&&await async function(r,s){if(function(o){return OR(o)&&o!==I.ABORTED}(s.code)){const i=r.g_.shift();Kn(r).Go(),await O_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ya(r)}}(t,e),N_(t)&&V_(t)}async function Sf(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Ir(n);n.y_.add(3),await ji(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Xa(n)}async function qP(t,e){const n=te(t);e?(n.y_.delete(2),await Xa(n)):e||(n.y_.add(2),await ji(n),n.b_.set("Unknown"))}function ys(t){return t.v_||(t.v_=function(n,r,s){const i=te(n);return i.P_(),new CP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:NP.bind(null,t),uo:VP.bind(null,t),r_:MP.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),eh(t)?Zu(t):t.b_.set("Unknown")):(await t.v_.stop(),D_(t))})),t.v_}function Kn(t){return t.C_||(t.C_=function(n,r,s){const i=te(n);return i.P_(),new kP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:FP.bind(null,t),uo:jP.bind(null,t),c_:BP.bind(null,t),u_:$P.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ya(t)):(await t.C_.stop(),t.g_.length>0&&($("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new th(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nh(t,e){if(mn("AsyncQueue",`${e}: ${t}`),Ui(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.F_=new ke(q.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):J():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ss(e,n,Hr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&za(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.x_=void 0,this.listeners=[]}}class zP{constructor(){this.queries=new _s(e=>r_(e),za),this.onlineState="Unknown",this.O_=new Set}}async function WP(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new HP),s)try{i.x_=await n.onListen(r)}catch(o){const a=nh(o,`Initialization of query '${Rl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&rh(n)}async function KP(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function GP(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&rh(n)}function QP(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function rh(t){t.O_.forEach(e=>{e.next()})}class JP{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.key=e}}class L_{constructor(e){this.key=e}}class XP{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ie(),this.mutatedKeys=ie(),this.na=s_(e),this.ra=new Hr(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new Cf,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Wa(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?_!==v&&(r.track({type:3,doc:f}),y=!0):this._a(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.na(f,c)>0||l&&this.na(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((l,u)=>function(d,f){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return _(d)-_(f)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new ss(this.query,e.ra,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Cf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ie(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new L_(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new M_(r))}),n}ha(e){this.X_=e.ss,this.ta=ie();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return ss.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class YP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZP{constructor(e){this.key=e,this.Ia=!1}}class eS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new _s(a=>r_(a),za),this.da=new Map,this.Aa=new Set,this.Ra=new ke(q.comparator),this.Va=new Map,this.ma=new Qu,this.fa={},this.ga=new Map,this.pa=rs.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function tS(t,e){const n=hS(t);let r,s;const i=n.Ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await TP(n.localStore,_n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await nS(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&C_(n.remoteStore,o)}return s}async function nS(t,e,n,r,s){t.wa=(h,d,f)=>async function(v,y,R,C){let V=y.view.sa(R);V.zi&&(V=await bf(v.localStore,y.query,!1).then(({documents:L})=>y.view.sa(L,V)));const k=C&&C.targetChanges.get(y.targetId),W=y.view.applyChanges(V,v.isPrimaryClient,k);return xf(v,y.targetId,W.ca),W.snapshot}(t,h,d,f);const i=await bf(t.localStore,e,!0),o=new XP(e,i.ss),a=o.sa(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);xf(t,n,l.ca);const u=new YP(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),l.snapshot}async function rS(t,e){const n=te(t),r=n.Ea.get(e),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!za(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),k_(n.remoteStore,r.targetId),Dl(n,r.targetId)}).catch(Li)):(Dl(n,r.targetId),await xl(n.localStore,r.targetId,!0))}async function sS(t,e,n){const r=dS(t);try{const s=await function(o,a){const c=te(o),l=Fe.now(),u=a.reduce((f,_)=>f.add(_.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=yn(),v=ie();return c.Xi.getEntries(f,u).next(y=>{_=y,_.forEach((R,C)=>{C.isValidDocument()||(v=v.add(R))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,_)).next(y=>{h=y;const R=[];for(const C of a){const V=SR(C,h.get(C.key).overlayedDocument);V!=null&&R.push(new Tr(C.key,V,Km(V.value.mapValue),Xt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,R,a)}).next(y=>{d=y;const R=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,y.batchId,R)})}).then(()=>({batchId:d.batchId,changes:o_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new ke(de)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await qi(r,s.changes),await Ya(r.remoteStore)}catch(s){const i=nh(s,"Failed to persist write");n.reject(i)}}async function U_(t,e){const n=te(t);try{const r=await vP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Pe(o.Ia):s.removedDocuments.size>0&&(Pe(o.Ia),o.Ia=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function kf(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=te(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(l=!0)}),l&&rh(c)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iS(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new ke(q.comparator);o=o.insert(i,st.newNoDocument(i,Z.min()));const a=ie().add(i),c=new Qa(Z.min(),new Map,new ke(de),o,a);await U_(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(e),sh(r)}else await xl(r.localStore,e,!1).then(()=>Dl(r,e,n)).catch(Li)}async function oS(t,e){const n=te(t),r=e.batch.batchId;try{const s=await yP(n.localStore,e);B_(n,r,null),F_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function aS(t,e,n){const r=te(t);try{const s=await function(o,a){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Pe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);B_(r,e,n),F_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function F_(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function B_(t,e,n){const r=te(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function Dl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||$_(t,r)})}function $_(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(k_(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),sh(t))}function xf(t,e,n){for(const r of n)r instanceof M_?(t.ma.addReference(r.key,e),cS(t,r)):r instanceof L_?($("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||$_(t,r.key)):J()}function cS(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||($("SyncEngine","New document in limbo: "+n),t.Aa.add(r),sh(t))}function sh(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new q(be.fromString(e)),r=t.pa.next();t.Va.set(r,new ZP(n)),t.Ra=t.Ra.insert(n,r),C_(t.remoteStore,new Nn(_n(e_(n.path)),r,"TargetPurposeLimboResolution",Lu.ae))}}async function qi(t,e,n){const r=te(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Xu.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=te(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,d=>S.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ui(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),_=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(_);u.Ji=u.Ji.insert(d,v)}}}(r.localStore,i))}async function lS(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await b_(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new F(I.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.ts)}}function uS(t,e){const n=te(t),r=n.Va.get(e);if(r&&r.Ia)return ie().add(r.key);{let s=ie();const i=n.da.get(e);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function hS(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=U_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iS.bind(null,e),e.Ta.r_=GP.bind(null,e.eventManager),e.Ta.Sa=QP.bind(null,e.eventManager),e}function dS(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aS.bind(null,e),e}class Df{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _P(this.persistence,new gP,e.initialUser,this.serializer)}createPersistence(e){return new fP(Ju.zr,this.serializer)}createSharedClientState(e){return new AP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lS.bind(null,this.syncEngine),await qP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zP}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=function(i){return new SP(i)}(e.databaseInfo);return function(i,o,a,c){return new xP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new OP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kf(this.syncEngine,n,0),function(){return Pf.v()?new Pf:new bP}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new eS(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);$("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await ji(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=Hm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await b_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Of(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _S(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Sf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Sf(e.remoteStore,i)),t._onlineComponents=e}function mS(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function _S(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!mS(n))throw n;Zr("Error using user provided cache. Falling back to memory cache: "+n),await Dc(t,new Df)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Dc(t,new Df);return t._offlineComponents}async function j_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Of(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Of(t,new fS))),t._onlineComponents}function yS(t){return j_(t).then(e=>e.syncEngine)}async function vS(t){const e=await j_(t),n=e.eventManager;return n.onListen=tS.bind(null,e.syncEngine),n.onUnlisten=rS.bind(null,e.syncEngine),n}function ES(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new pS({next:d=>{o.enqueueAndForget(()=>KP(i,h)),d.fromCache&&c.source==="server"?l.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new JP(a,u,{includeMetadataChanges:!0,W_:!0});return WP(i,h)}(await vS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wS(t,e,n,r){if(e===!0&&r===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Za(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Za(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bb;switch(r.type){case"firstParty":return new Hb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nf.get(n);r&&($("ComponentProvider","Removing Datastore"),Nf.delete(n),r.terminate())}(this),Promise.resolve()}}function TS(t,e,n,r={}){var s;const i=(t=is(t,ec))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=rt.MOCK_USER;else{a=Vg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new rt(l)}t._authCredentials=new $b(new qm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class $n extends vs{constructor(e,n,r){super(e,n,e_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new q(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function IS(t,e,...n){if(t=Ze(t),H_("collection","path",e),t instanceof ec){const r=be.fromString(e,...n);return Mf(r),new $n(t,null,r)}{if(!(t instanceof It||t instanceof $n))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Mf(r),new $n(t.firestore,null,r)}}function Oc(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=Hm.V()),H_("doc","path",e),t instanceof ec){const r=be.fromString(e,...n);return Vf(r),new It(t,null,new q(r))}{if(!(t instanceof It||t instanceof $n))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Vf(r),new It(t.firestore,t instanceof $n?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new P_(this,"async_queue_retry"),this.Xa=()=>{const n=xc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Bn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Ui(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=th.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&J()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class tc extends ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new AS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||W_(this),this._firestoreClient.terminate()}}function bS(t,e){const n=typeof t=="object"?t:du(),r=typeof t=="string"?t:e||"(default)",s=Sa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dg("firestore");i&&TS(s,...i)}return s}function z_(t){return t._firestoreClient||W_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function W_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new nR(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,q_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new gS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(ht.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=/^__.*__$/;class PS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}function G_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ah{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return na(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(G_(this.uu)&&RS.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class SS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}Ru(e,n,r,s=!1){return new ah({uu:e,methodName:n,Au:r,path:ot.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Q_(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new SS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CS(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);Y_("Data must be an object, but it was:",o,r);const a=J_(r,o);let c,l;if(i.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=xS(e,h,n);if(!o.contains(d))throw new F(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);OS(u,d)||u.push(d)}c=new Nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new PS(new St(a),c,l)}function kS(t,e,n,r=!1){return ch(n,t.Ru(r?4:3,e))}function ch(t,e){if(X_(t=Ze(t)))return Y_("Unsupported field value:",e,t),J_(t,e);if(t instanceof K_)return function(r,s){if(!G_(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ch(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:ea(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(s.serializer,i)}}if(r instanceof oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:v_(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${Za(r)}`)}(t,e)}function J_(t,e){const n={};return zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=ch(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function X_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof oh||t instanceof os||t instanceof It||t instanceof K_)}function Y_(t,e,n){if(!X_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Za(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function xS(t,e,n){if((e=Ze(e))instanceof ih)return e._internalPath;if(typeof e=="string")return Z_(t,e);throw na("Field path arguments must be of type string or ",t,!1,void 0,n)}const DS=new RegExp("[~\\*/\\[\\]]");function Z_(t,e,n){if(e.search(DS)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ih(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function na(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new F(I.INVALID_ARGUMENT,a+t+c)}function OS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ty("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NS extends ey{data(){return super.data()}}function ty(t,e){return typeof e=="string"?Z_(t,e):e instanceof ih?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}class MS extends lh{}function LS(t,e,...n){let r=[];e instanceof lh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof hh).length,a=i.filter(c=>c instanceof uh).length;if(o>1||o>0&&a>0)throw new F(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class uh extends MS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new uh(e,n,r)}_apply(e){const n=this._parse(e);return ny(e._query,n),new vs(e.firestore,e.converter,Al(e._query,n))}_parse(e){const n=Q_(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ff(h,u);const f=[];for(const _ of h)f.push(Uf(c,i,_));d={arrayValue:{values:f}}}else d=Uf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ff(h,u),d=kS(a,o,h,u==="in"||u==="not-in");return Ue.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hh extends lh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)ny(o,c),o=Al(o,c)}(e._query,n),new vs(e.firestore,e.converter,Al(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Uf(t,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new F(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n_(e)&&n.indexOf("/")!==-1)throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!q.isDocumentKey(r))throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cf(t,new q(r))}if(n instanceof It)return cf(t,n._key);throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Za(n)}.`)}function Ff(t,e){if(!Array.isArray(t)||t.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ny(t,e){if(e.isInequality()){const r=qu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new F(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=t_(t);i!==null&&US(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function US(t,e,n){if(!n.isEqual(e))throw new F(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class FS{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new oh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=Wn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Pe(A_(r));const s=new gi(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $S extends ey{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ty("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class So extends $S{data(e={}){return super.data(e)}}class jS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new go(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new So(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new So(s._firestore,s._userDataWriter,a.doc.key,a.doc,new go(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new So(s._firestore,s._userDataWriter,a.doc.key,a.doc,new go(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:qS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class HS extends FS{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function zS(t){t=is(t,vs);const e=is(t.firestore,tc),n=z_(e),r=new HS(e);return VS(t._query),ES(n,t._query).then(s=>new jS(e,r,t,s))}function Bf(t,e,n){t=is(t,It);const r=is(t.firestore,tc),s=BS(t.converter,e,n);return ry(r,[CS(Q_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xt.none())])}function WS(t){return ry(is(t.firestore,tc),[new Hu(t._key,Xt.none())])}function ry(t,e){return function(r,s){const i=new Bn;return r.asyncQueue.enqueueAndForget(async()=>sS(await yS(r),s,i)),i.promise}(z_(t),e)}(function(e,n=!0){(function(s){gs=s})(Er),pr(new Hn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new tc(new jb(r.getProvider("auth-internal")),new Wb(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Jt(nf,"4.1.0",e),Jt(nf,"4.1.0","esm2017")})();const dh=ou("database",()=>{const t=bS(fu),e=Re([]),n=Re([]),r=Re([]),s=Ne(()=>e.value),i=Ne(()=>n.value),o=Ne(()=>r.value);return{data:e,about:n,skill:r,setAllData:async h=>{const d=LS(IS(t,h));(await zS(d)).forEach(_=>{e.value.find(y=>y===_.data())||(h=="about"&&n.value.push(_.data()),h=="skill"&&r.value.push(_.data()))})},setData:async(h,d,f)=>{await Bf(Oc(t,h,d),f),e.value.push(f)},getAllData:s,getAboutData:i,getSkillData:o,deleteData:async(h,d)=>{await WS(Oc(t,h,`${d}`))},editData:async(h,d,f)=>{await Bf(Oc(t,h,d),f),e.value.push(f)}}}),KS={class:"w-[90%] mx-auto h-screen flex justify-end"},GS={class:"flex flex-col gap-2 mt-5"},QS=A("img",{src:rI,class:"w-[60px] mx-auto",alt:""},null,-1),JS=A("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),XS=[QS,JS],YS=A("img",{src:sI,class:"w-[60px] mx-auto",alt:""},null,-1),ZS=A("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),eC=[YS,ZS],tC=A("img",{src:Ag,class:"w-[60px] mx-auto",alt:""},null,-1),nC=A("div",{class:"px-3 bg-white text-primary"},"Skill",-1),rC=[tC,nC],sC=A("img",{src:Ag,class:"w-[60px] mx-auto",alt:""},null,-1),iC=A("div",{class:"px-3 bg-white text-primary"},"Contact",-1),oC=[sC,iC],aC={__name:"Desktop",setup(t){const e=wn(),n=dh(),r=Ne(()=>e.getWindows);dr(async()=>{await n.setAllData("about")}),dr(async()=>{await n.setAllData("skill")});const s=(o,a=null)=>{e.setWindow(o,a)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,a)=>(ne(),ge("div",null,[A("div",KS,[A("div",GS,[A("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[0]||(a[0]=c=>s("portfolio"))},XS),A("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[1]||(a[1]=c=>s("about"))},eC),A("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[2]||(a[2]=c=>s("skill"))},rC),A("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[3]||(a[3]=c=>s("contact"))},oC)])]),ve(nA),(ne(!0),ge(je,null,ds(r.value,(c,l)=>(ne(),xt(II,{key:l,index:l},{window:Ai(()=>[c.window==="portfolio"?(ne(),xt(MI,{key:0,onPortfolioDetail:i})):an("",!0),c.window==="about"?(ne(),xt(jI,{key:1,images:He(n).getAboutData},null,8,["images"])):an("",!0),c.window==="skill"?(ne(),xt(zI,{key:2,images:He(n).getSkillData},null,8,["images"])):an("",!0),c.window==="contact"?(ne(),xt(WI,{key:3})):an("",!0),c.window==="portfolio-detail0"?(ne(),xt(so,{key:4,index:"0"})):an("",!0),c.window==="portfolio-detail1"?(ne(),xt(so,{key:5,index:"1"})):an("",!0),c.window==="portfolio-detail2"?(ne(),xt(so,{key:6,index:"2"})):an("",!0),c.window==="portfolio-detail3"?(ne(),xt(so,{key:7,index:"3"})):an("",!0)]),_:2},1032,["index"]))),128))]))}};function fh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cC=sy,iy=new Ri("auth","Firebase",sy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new uu("@firebase/auth");function lC(t,...e){ra.logLevel<=ue.WARN&&ra.warn(`Auth (${Er}): ${t}`,...e)}function Co(t,...e){ra.logLevel<=ue.ERROR&&ra.error(`Auth (${Er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw ph(t,...e)}function Zt(t,...e){return ph(t,...e)}function uC(t,e,n){const r=Object.assign(Object.assign({},cC()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iy.create(t,...e)}function Q(t,e,...n){if(!t)throw ph(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function vn(t,e){t||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hC(){return $f()==="http:"||$f()==="https:"}function $f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hC()||fA()||"connection"in navigator)?navigator.onLine:!0}function fC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=hA()||pA()}get(){return dC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new Hi(3e4,6e4);function zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,r,s={}){return ay(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Pi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),oy.fetch()(cy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ay(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pC),e);try{const s=new mC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw uC(t,u,l);Bt(t,u)}}catch(s){if(s instanceof rn)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function nc(t,e,n,r,s={}){const i=await Es(t,e,n,r,s);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function cy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gh(t.config,s):`${t.config.apiScheme}://${s}`}class mC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),gC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function yC(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vC(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=mh(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gs(Nc(s.auth_time)),issuedAtTime:Gs(Nc(s.iat)),expirationTime:Gs(Nc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function mh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const s=kg(n);return s?JSON.parse(s):(Co("Failed to decode base64 JWT payload"),null)}catch(s){return Co("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function EC(t){const e=mh(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&wC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vi(t,yC(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bC(i.providerUserInfo):[],a=AC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ly(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function IC(t){const e=Ze(t);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bC(t){return t.map(e=>{var{providerId:n}=e,r=fh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){const n=await ay(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=cy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",oy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ei;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ly(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vC(this,e)}reload(){return IC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vi(this,_C(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:k,isAnonymous:W,providerData:L,stsTokenManager:le}=n;Q(V&&le,e,"internal-error");const K=Ei.fromJSON(this.name,le);Q(typeof V=="string",e,"internal-error"),bn(h,e.name),bn(d,e.name),Q(typeof k=="boolean",e,"internal-error"),Q(typeof W=="boolean",e,"internal-error"),bn(f,e.name),bn(_,e.name),bn(v,e.name),bn(y,e.name),bn(R,e.name),bn(C,e.name);const ee=new ur({uid:V,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:W,photoURL:_,phoneNumber:f,tenantId:v,stsTokenManager:K,createdAt:R,lastLoginAt:C});return L&&Array.isArray(L)&&(ee.providerData=L.map(we=>Object.assign({},we))),y&&(ee._redirectEventId=y),ee}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ei;s.updateFromServerResponse(n);const i=new ur({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sa(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;function dn(t){vn(t instanceof Function,"Expected a class definition");let e=jf.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uy.type="NONE";const qf=uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(dn(qf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dn(qf);const o=ko(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ur._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gy(e))return"Blackberry";if(my(e))return"Webos";if(_h(e))return"Safari";if((e.includes("chrome/")||dy(e))&&!e.includes("edge/"))return"Chrome";if(py(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hy(t=ut()){return/firefox\//i.test(t)}function _h(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dy(t=ut()){return/crios\//i.test(t)}function fy(t=ut()){return/iemobile/i.test(t)}function py(t=ut()){return/android/i.test(t)}function gy(t=ut()){return/blackberry/i.test(t)}function my(t=ut()){return/webos/i.test(t)}function rc(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PC(t=ut()){var e;return rc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SC(){return gA()&&document.documentMode===10}function _y(t=ut()){return rc(t)||py(t)||my(t)||gy(t)||/windows phone/i.test(t)||fy(t)}function CC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t,e=[]){let n;switch(t){case"Browser":n=Hf(ut());break;case"Worker":n=`${Hf(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${r}`}async function vy(t,e){return Es(t,"GET","/v2/recaptchaConfig",zi(t,e))}function zf(t){return t!==void 0&&t.enterprise!==void 0}class Ey{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kC().appendChild(r)})}function xC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DC="https://www.google.com/recaptcha/enterprise.js?render=",OC="recaptcha-enterprise",NC="NO_RECAPTCHA";class Ty{constructor(e){this.type=OC,this.auth=Wi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{vy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ey(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;zf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(NC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&zf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wy(DC+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wf(t,e,n,r=!1){const s=new Ty(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kf(this),this.idTokenSubscription=new Kf(this),this.beforeStateQueue=new VC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}async initializeRecaptchaConfig(){const e=await vy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ey(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ty(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wi(t){return Ze(t)}class Kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=TA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t,e){const n=Sa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($o(i,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function UC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FC(t,e,n){const r=Wi(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Iy(e),{host:o,port:a}=BC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$C()}function Iy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BC(t){const e=Iy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gf(o)}}}function Gf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $C(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function jC(t,e){return Es(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(t,e){return nc(t,"POST","/v1/accounts:signInWithPassword",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return nc(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}async function HC(t,e){return nc(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends yh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Wf(e,r,"signInWithPassword");return Vc(e,s)}else return Vc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Wf(e,r,"signInWithPassword");return Vc(e,i)}else return Promise.reject(s)});case"emailLink":return qC(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return jC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HC(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e){return nc(t,"POST","/v1/accounts:signInWithIdp",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class yr extends yh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KC(t){const e=xs(Ds(t)).link,n=e?xs(Ds(e)).deep_link_id:null,r=xs(Ds(t)).deep_link_id;return(r?xs(Ds(r)).link:null)||r||n||e||t}class vh{constructor(e){var n,r,s,i,o,a;const c=xs(Ds(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=WC((s=c.mode)!==null&&s!==void 0?s:null);Q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KC(e);try{return new vh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.providerId=ws.PROVIDER_ID}static credential(e,n){return wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vh.parseLink(n);return Q(r,"argument-error"),wi._fromEmailAndCode(e,r.code,r.tenantId)}}ws.PROVIDER_ID="password";ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Ay{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ki{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ki{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ki{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ur._fromIdTokenResponse(e,r,s),o=Qf(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends rn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ia.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ia(e,n,r,s)}}function by(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ia._fromErrorAndOperation(t,i,e,r):i})}async function GC(t,e,n=!1){const r=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await vi(t,by(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=mh(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e,n=!1){const r="signIn",s=await by(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function JC(t,e){return Ry(Wi(t),e)}function XC(t,e,n){return JC(Ze(t),ws.credential(e,n))}function YC(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function ZC(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}const oa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oa,"1"),this.storage.removeItem(oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(){const t=ut();return _h(t)||rc(t)}const tk=1e3,nk=10;class Sy extends Py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ek()&&CC(),this.fallbackToPolling=_y(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);SC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sy.type="LOCAL";const rk=Sy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends Py{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cy.type="SESSION";const ky=Cy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await sk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Eh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function ok(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ck(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lk(){return xy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="firebaseLocalStorageDb",uk=1,aa="firebaseLocalStorage",Oy="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([aa],e?"readwrite":"readonly").objectStore(aa)}function hk(){const t=indexedDB.deleteDatabase(Dy);return new Gi(t).toPromise()}function Nl(){const t=indexedDB.open(Dy,uk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(aa,{keyPath:Oy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(aa)?e(r):(r.close(),await hk(),e(await Nl()))})})}async function Jf(t,e,n){const r=ic(t,!0).put({[Oy]:e,value:n});return new Gi(r).toPromise()}async function dk(t,e){const n=ic(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function Xf(t,e){const n=ic(t,!0).delete(e);return new Gi(n).toPromise()}const fk=800,pk=3;class Ny{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(lk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ak(),!this.activeServiceWorker)return;this.sender=new ik(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await Jf(e,oa,"1"),await Xf(e,oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ic(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ny.type="LOCAL";const gk=Ny;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){return e?dn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends yh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _k(t){return Ry(t.auth,new wh(t),t.bypassAuthState)}function yk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),QC(n,new wh(t),t.bypassAuthState)}async function vk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),GC(n,new wh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _k;case"linkViaPopup":case"linkViaRedirect":return vk;case"reauthViaPopup":case"reauthViaRedirect":return yk;default:Bt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Hi(2e3,1e4);class Lr extends Vy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ek.get())};e()}}Lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="pendingRedirect",xo=new Map;class Tk extends Vy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await Ik(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ik(t,e){const n=Rk(e),r=bk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ak(t,e){xo.set(t._key(),e)}function bk(t){return dn(t._redirectPersistence)}function Rk(t){return ko(wk,t.config.apiKey,t.name)}async function Pk(t,e,n=!1){const r=Wi(t),s=mk(r,e),o=await new Tk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=10*60*1e3;class Ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!My(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yf(e))}saveEventToCache(e){this.cachedEventUids.add(Yf(e)),this.lastProcessedEventTime=Date.now()}}function Yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function My({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return My(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ok=/^https?/;async function Nk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xk(t);for(const n of e)try{if(Vk(n))return}catch{}Bt(t,"unauthorized-domain")}function Vk(t){const e=Ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ok.test(n))return!1;if(Dk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new Hi(3e4,6e4);function Zf(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Lk(t){return new Promise((e,n)=>{var r,s,i;function o(){Zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zf(),n(Zt(t,"network-request-failed"))},timeout:Mk.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=xC("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},wy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Do=null,e})}let Do=null;function Uk(t){return Do=Do||Lk(t),Do}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=new Hi(5e3,15e3),Bk="__/auth/iframe",$k="emulator/auth/iframe",jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hk(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gh(e,$k):`https://${t.config.authDomain}/${Bk}`,r={apiKey:e.apiKey,appName:t.name,v:Er},s=qk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pi(r).slice(1)}`}async function zk(t){const e=await Uk(t),n=en().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:Hk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},Fk.get());function c(){en().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,Gk=600,Qk="_blank",Jk="http://localhost";class ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xk(t,e,n,r=Kk,s=Gk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Wk),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ut().toLowerCase();n&&(a=dy(l)?Qk:n),hy(l)&&(e=e||Jk,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(PC(l)&&a!=="_self")return Yk(e||"",a),new ep(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new ep(h)}function Yk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="__/auth/handler",e1="emulator/auth/handler",t1=encodeURIComponent("fac");async function tp(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Er,eventId:s};if(e instanceof Ay){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ki){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${t1}=${encodeURIComponent(c)}`:"";return`${n1(t)}?${Pi(a).slice(1)}${l}`}function n1({config:t}){return t.emulator?gh(t,e1):`https://${t.authDomain}/${Zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="webStorageSupport";class r1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ky,this._completeRedirectFn=Pk,this._overrideRedirectResult=Ak}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tp(e,n,r,Ol(),s);return Xk(e,o,Eh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tp(e,n,r,Ol(),s);return ok(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zk(e),r=new Ck(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mc];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Nk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _y()||_h()||rc()}}const s1=r1;var np="@firebase/auth",rp="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function a1(t){pr(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yy(t)},l=new MC(r,s,i,c);return UC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new Hn("auth-internal",e=>{const n=Wi(e.getProvider("auth").getImmediate());return(r=>new i1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(np,rp,o1(t)),Jt(np,rp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=5*60,l1=Ng("authIdTokenMaxAge")||c1;let sp=null;const u1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>l1)return;const s=n==null?void 0:n.token;sp!==s&&(sp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function h1(t=du()){const e=Sa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LC(t,{popupRedirectResolver:s1,persistence:[gk,rk,ky]}),r=Ng("authTokenSyncURL");if(r){const i=u1(r);ZC(n,i,()=>i(n.currentUser)),YC(n,o=>i(o))}const s=xg("auth");return s&&FC(n,`http://${s}`),n}a1("Browser");const d1={class:"flex h-screen justify-center items-center"},f1={class:"w-full lg:w-[30%] mx-auto bg-white border-primary border-2 border-e-4 border-b-4 rounded-lg"},p1=["onSubmit"],g1=A("div",{class:"text-3xl mx-auto"},"Login",-1),m1=A("div",{class:"text-end"},[A("button",{type:"submit",class:"bg-primary rounded-sm text-white px-3 py-2 shadow-sm"}," Submit ")],-1),_1={__name:"Login",setup(t){const e=h1(fu),n=Re(null),r=Re(null),s=nI(),i=()=>{XC(e,n.value,r.value).then(o=>{o.user.accessToken&&(s.push("/dashboard-portfolio"),n.value=null,r.value=null)}).catch(o=>{o.code,o.message,s.push("/login")})};return(o,a)=>(ne(),ge("div",d1,[A("div",f1,[A("form",{onSubmit:Pw(i,["prevent"]),class:"flex flex-col gap-3 p-3"},[g1,A("div",null,[jh(A("input",{type:"text",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your email","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},null,512),[[ud,n.value]])]),A("div",null,[jh(A("input",{type:"password",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your password","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[ud,r.value]])]),m1],40,p1)])]))}};const y1={},v1={class:"flex h-screen overflow-auto justify-end me-[10%]"},E1=Ta('<div class="w-[10%] fixed left-0 mt-1 h-screen overflow-auto bg-background" data-v-7828ccb5><div class="flex flex-col mt-5" data-v-7828ccb5><a href="/dashboard-portfolio" class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl" data-v-7828ccb5> Portfolio </a><a href="/dashboard-about" class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl" data-v-7828ccb5> About </a><a href="/dashboard-skill" class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl" data-v-7828ccb5> Skill </a><a href="/" class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl" data-v-7828ccb5> Contact </a></div></div>',1),w1={class:"w-[80%] ps-3"};function T1(t,e){return ne(),ge("div",v1,[E1,A("div",w1,[Gp(t.$slots,"content",{},void 0,!0)])])}const Th=au(y1,[["render",T1],["__scopeId","data-v-7828ccb5"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="firebasestorage.googleapis.com",Uy="storageBucket",I1=2*60*1e3,A1=10*60*1e3,b1=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends rn{constructor(e,n,r=0){super(Lc(e),`Firebase Storage: ${n} (${Lc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Lc(t){return"storage/"+t}function Ih(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Se.UNKNOWN,t)}function R1(t){return new xe(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function P1(t){return new xe(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function S1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Se.UNAUTHENTICATED,t)}function C1(){return new xe(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function k1(t){return new xe(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Fy(){return new xe(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function By(){return new xe(Se.CANCELED,"User canceled the upload/download.")}function x1(t){return new xe(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function D1(t){return new xe(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function O1(){return new xe(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Uy+"' property when initializing the app?")}function $y(){return new xe(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function N1(){return new xe(Se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function V1(){return new xe(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function M1(t){return new xe(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vl(t){return new xe(Se.INVALID_ARGUMENT,t)}function jy(){return new xe(Se.APP_DELETED,"The Firebase app was deleted.")}function L1(t){return new xe(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qs(t,e){return new xe(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ss(t){throw new xe(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw D1(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},v=n===Ly?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",R=new RegExp(`^https?://${v}/${s}/${y}`,"i"),V=[{regex:a,indices:c,postModify:i},{regex:f,indices:_,postModify:l},{regex:R,indices:{bucket:1,path:2},postModify:l}];for(let k=0;k<V.length;k++){const W=V[k],L=W.regex.exec(e);if(L){const le=L[W.indices.bucket];let K=L[W.indices.path];K||(K=""),r=new Tt(le,K),W.postModify(r);break}}if(r==null)throw x1(e);return r}}class U1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(f,c())},y)}function d(){i&&clearTimeout(i)}function f(y,...R){if(l){d();return}if(y){d(),u.call(null,y,...R);return}if(c()||o){d(),u.call(null,y,...R);return}r<64&&(r*=2);let V;a===1?(a=2,V=0):V=(r+Math.random())*1e3,h(V)}let _=!1;function v(y){_||(_=!0,d(),!l&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function B1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){return t!==void 0}function j1(t){return typeof t=="function"}function q1(t){return typeof t=="object"&&!Array.isArray(t)}function oc(t){return typeof t=="string"||t instanceof String}function ip(t){return Ah()&&t instanceof Blob}function Ah(){return typeof Blob<"u"&&!dA()}function op(t,e,n,r){if(r<e)throw Vl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Vl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hr||(hr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new _o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===hr.NO_ERROR,c=i.getStatus();if(!a||Hy(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===hr.ABORT;r(!1,new _o(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new _o(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());$1(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ih();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?jy():By();o(c)}else{const c=Fy();o(c)}};this.canceled_?n(!1,new _o(!1,null,!0)):this.backoffId_=F1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&B1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function z1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function W1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function K1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Q1(t,e,n,r,s,i,o=!0){const a=qy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return K1(l,e),z1(l,n),W1(l,i),G1(l,r),new H1(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function X1(...t){const e=J1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ah())return new Blob(t);throw new xe(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Y1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){if(typeof atob>"u")throw M1("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uc{constructor(e,n){this.data=e,this.contentType=n||null}}function ex(t,e){switch(t){case Qt.RAW:return new Uc(zy(e));case Qt.BASE64:case Qt.BASE64URL:return new Uc(Wy(t,e));case Qt.DATA_URL:return new Uc(nx(e),rx(e))}throw Ih()}function zy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tx(t){let e;try{e=decodeURIComponent(t)}catch{throw Qs(Qt.DATA_URL,"Malformed data URL.")}return zy(e)}function Wy(t,e){switch(t){case Qt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Qs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Qs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z1(e)}catch(s){throw s.message.includes("polyfill")?s:Qs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ky{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Qs(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nx(t){const e=new Ky(t);return e.base64?Wy(Qt.BASE64,e.rest):tx(e.rest)}function rx(t){return new Ky(t).contentType}function sx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n){let r=0,s="";ip(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ip(this.data_)){const r=this.data_,s=Y1(r,e,n);return s===null?null:new On(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new On(r,!0)}}static getBlob(...e){if(Ah()){const n=e.map(r=>r instanceof On?r.data_:r);return new On(X1.apply(null,n))}else{const n=e.map(o=>oc(o)?ex(Qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new On(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t){let e;try{e=JSON.parse(t)}catch{return null}return q1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ox(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Qy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e){return e}class dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ax}}let yo=null;function cx(t){return!oc(t)||t.length<2?t:Qy(t)}function Jy(){if(yo)return yo;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(i,o){return cx(o)}const n=new dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new dt("size");return s.xform=r,t.push(s),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),yo=t,yo}function lx(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Tt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ux(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return lx(r,t),r}function Xy(t,e,n){const r=Gy(e);return r===null?null:ux(t,r,n)}function hx(t,e,n,r){const s=Gy(e);if(s===null||!oc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Qi(d,n,r),_=qy({alt:"media",token:l});return f+_})[0]}function Yy(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ts{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){if(!t)throw Ih()}function bh(t,e){function n(r,s){const i=Xy(t,s,e);return fn(i!==null),i}return n}function dx(t,e){function n(r,s){const i=Xy(t,s,e);return fn(i!==null),hx(i,s,t.host,t._protocol)}return n}function Ji(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=C1():s=S1():n.getStatus()===402?s=P1(t.bucket):n.getStatus()===403?s=k1(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Zy(t){const e=Ji(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=R1(t.path)),i.serverResponse=s.serverResponse,i}return n}function fx(t,e,n){const r=e.fullServerUrl(),s=Qi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ts(s,i,bh(t,n),o);return a.errorHandler=Zy(e),a}function px(t,e,n){const r=e.fullServerUrl(),s=Qi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ts(s,i,dx(t,n),o);return a.errorHandler=Zy(e),a}function gx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ev(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gx(null,e)),r}function mx(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let V="";for(let k=0;k<2;k++)V=V+Math.random().toString().slice(2);return V}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=ev(e,r,s),u=Yy(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=On.getBlob(h,r,d);if(f===null)throw $y();const _={name:l.fullPath},v=Qi(i,t.host,t._protocol),y="POST",R=t.maxUploadRetryTime,C=new Ts(v,y,bh(t,n),R);return C.urlParams=_,C.headers=o,C.body=f.uploadData(),C.errorHandler=Ji(e),C}class ca{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Rh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{fn(!1)}return fn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function _x(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=ev(e,r,s),a={name:o.fullPath},c=Qi(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Yy(o,n),d=t.maxUploadRetryTime;function f(v){Rh(v);let y;try{y=v.getResponseHeader("X-Goog-Upload-URL")}catch{fn(!1)}return fn(oc(y)),y}const _=new Ts(c,l,f,d);return _.urlParams=a,_.headers=u,_.body=h,_.errorHandler=Ji(e),_}function yx(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=Rh(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{fn(!1)}h||fn(!1);const d=Number(h);return fn(!isNaN(d)),new ca(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Ts(n,o,i,a);return c.headers=s,c.errorHandler=Ji(e),c}const ap=256*1024;function vx(t,e,n,r,s,i,o,a){const c=new ca(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw N1();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const _={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},v=r.slice(h,d);if(v===null)throw $y();function y(k,W){const L=Rh(k,["active","final"]),le=c.current+u,K=r.size();let ee;return L==="final"?ee=bh(e,i)(k,W):ee=null,new ca(le,K,L==="final",ee)}const R="POST",C=e.maxUploadRetryTime,V=new Ts(n,R,y,C);return V.headers=_,V.body=v.uploadData(),V.progressCallback=a||null,V.errorHandler=Ji(t),V}const _t={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Fc(t){switch(t){case"running":case"pausing":case"canceling":return _t.RUNNING;case"paused":return _t.PAUSED;case"success":return _t.SUCCESS;case"canceled":return _t.CANCELED;case"error":return _t.ERROR;default:return _t.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,r){if(j1(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class wx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Tx extends wx{initXhr(){this.xhr_.responseType="text"}}function Vr(){return new Tx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Jy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Hy(s.status,[]))if(i)s=Fy();else{this.sleepTime=Math.max(this.sleepTime*2,b1),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Se.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=_x(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Vr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=yx(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Vr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ap*this._chunkMultiplier,n=new ca(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=vx(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Vr,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ap*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=fx(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Vr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=mx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Vr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=By(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Fc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new Ex(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Fc(this._state)){case _t.SUCCESS:kr(this._resolve.bind(null,this.snapshot))();break;case _t.CANCELED:case _t.ERROR:const n=this._reject;kr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Fc(this._state)){case _t.RUNNING:case _t.PAUSED:e.next&&kr(e.next.bind(e,this.snapshot))();break;case _t.SUCCESS:e.complete&&kr(e.complete.bind(e))();break;case _t.CANCELED:case _t.ERROR:e.error&&kr(e.error.bind(e,this._error))();break;default:e.error&&kr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vr(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qy(this._location.path)}get storage(){return this._service}get parent(){const e=ix(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new vr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw L1(e)}}function Ax(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Ix(t,new On(e),n)}function bx(t){t._throwIfRoot("getDownloadURL");const e=px(t.storage,t._location,Jy());return t.storage.makeRequestWithTokens(e,Vr).then(n=>{if(n===null)throw V1();return n})}function Rx(t,e){const n=ox(t._location.path,e),r=new Tt(t._location.bucket,n);return new vr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){return/^[A-Za-z]+:\/\//.test(t)}function Sx(t,e){return new vr(t,e)}function tv(t,e){if(t instanceof Ph){const n=t;if(n._bucket==null)throw O1();const r=new vr(n,n._bucket);return e!=null?tv(r,e):r}else return e!==void 0?Rx(t,e):t}function Cx(t,e){if(e&&Px(e)){if(t instanceof Ph)return Sx(t,e);throw Vl("To use ref(service, url), the first argument must be a Storage instance.")}else return tv(t,e)}function cp(t,e){const n=e==null?void 0:e[Uy];return n==null?null:Tt.makeFromBucketSpec(n,t)}function kx(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Vg(s,t.app.options.projectId))}class Ph{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ly,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=I1,this._maxUploadRetryTime=A1,this._requests=new Set,s!=null?this._bucket=Tt.makeFromBucketSpec(s,this._host):this._bucket=cp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=cp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){op("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){op("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new U1(jy());{const o=Q1(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const lp="@firebase/storage",up="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="storage";function xx(t,e,n){return t=Ze(t),Ax(t,e,n)}function Dx(t){return t=Ze(t),bx(t)}function Ox(t,e){return t=Ze(t),Cx(t,e)}function Nx(t=du(),e){t=Ze(t);const r=Sa(t,nv).getImmediate({identifier:e}),s=Dg("storage");return s&&Vx(r,...s),r}function Vx(t,e,n,r={}){kx(t,e,n,r)}function Mx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ph(n,r,s,e,Er)}function Lx(){pr(new Hn(nv,Mx,"PUBLIC").setMultipleInstances(!0)),Jt(lp,up,""),Jt(lp,up,"esm2017")}Lx();let vo;const Ux=new Uint8Array(16);function Fx(){if(!vo&&(vo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!vo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vo(Ux)}const Ge=[];for(let t=0;t<256;++t)Ge.push((t+256).toString(16).slice(1));function Bx(t,e=0){return(Ge[t[e+0]]+Ge[t[e+1]]+Ge[t[e+2]]+Ge[t[e+3]]+"-"+Ge[t[e+4]]+Ge[t[e+5]]+"-"+Ge[t[e+6]]+Ge[t[e+7]]+"-"+Ge[t[e+8]]+Ge[t[e+9]]+"-"+Ge[t[e+10]]+Ge[t[e+11]]+Ge[t[e+12]]+Ge[t[e+13]]+Ge[t[e+14]]+Ge[t[e+15]]).toLowerCase()}const $x=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),hp={randomUUID:$x};function jx(t,e,n){if(hp.randomUUID&&!e&&!t)return hp.randomUUID();t=t||{};const r=t.random||(t.rng||Fx)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return Bx(r)}const rv=ou("storage",()=>{const t=Nx(fu),e=jx(),n=Re(null);return{setImage:async s=>{try{const i=Ox(t,`about/${e}.jpg`),o=xx(i,s);return await new Promise((a,c)=>{o.on("state_changed",l=>{const u=l.bytesTransferred/l.totalBytes*100;switch(console.log("Upload is "+u+"% done"),l.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},l=>{c(l)},async()=>{const l=await Dx(o.snapshot.ref);n.value=l,a()})}),n.value}catch(i){throw console.error("Error:",i),i}},url:n}}),qx={class:"my-5"},Hx={class:"w-full text-md text-left bg-white text-black"},zx=A("thead",{class:"border bg-primary text-white"},[A("tr",null,[A("th",{scope:"col",class:"px-6 border py-3"},"#"),A("th",{scope:"col",class:"px-6 border py-3"},"Image"),A("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),Wx={class:"px-6 border"},Kx={class:"px-6 border"},Gx=["src"],Qx={class:"px-6 border"},Jx={class:"flex items-center gap-3"},Xx=["onClick"],Yx=A("div",{class:"flex justify-center"},"added image",-1),Zx={__name:"list",setup(t){const e=rv(),n=dh(),r=Re(null),s=Re(null),i=Re(0),o=Ig();dr(async()=>{await n.setAllData("about"),i.value=n.getAboutData.length});const a=()=>{r.value.click()},c=async h=>{const d=h.target.files[0];i.value++,s.value=await e.setImage(d),l(i.value)},l=async h=>{await n.setData("about",`${h}`,{id:h,url:s.value}),window.location.href=`${o.fullPath}`},u=async h=>{await n.deleteData("about",h),window.location.href=`${o.fullPath}`};return(h,d)=>(ne(),ge("div",null,[ve(Th,null,{content:Ai(()=>[A("div",qx,[A("table",Hx,[zx,A("tbody",null,[(ne(!0),ge(je,null,ds(He(n).getAboutData,f=>(ne(),ge("tr",{class:"bg-white border-b",key:f.id},[A("td",Wx,Ti(f.id),1),A("td",Kx,[A("img",{src:f.url,class:"h-[50px]",alt:""},null,8,Gx)]),A("td",Qx,[A("div",Jx,[A("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:_=>u(f.id)}," Delete ",8,Xx)])])]))),128)),A("tr",null,[A("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:a},[Yx,A("input",{type:"file",accept:"image/*",class:"hidden",onChange:c,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},eD={__name:"list",setup(t){return(e,n)=>(ne(),ge("div",null,[ve(Th,null,{content:Ai(()=>[ru(" Portfolio ")]),_:1})]))}},tD={class:"my-5"},nD={class:"w-full text-md text-left bg-white text-black"},rD=A("thead",{class:"border bg-primary text-white"},[A("tr",null,[A("th",{scope:"col",class:"px-6 border py-3"},"#"),A("th",{scope:"col",class:"px-6 border py-3"},"Image"),A("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),sD={class:"px-6 border"},iD={class:"px-6 border"},oD=["src"],aD={class:"px-6 border"},cD={class:"flex items-center gap-3"},lD=["onClick"],uD=A("div",{class:"flex justify-center"},"added image",-1),hD={__name:"list",setup(t){const e=rv(),n=dh(),r=Re(null),s=Re(null),i=Re(0),o=Ig();dr(async()=>{await n.setAllData("skill"),i.value=n.getSkillData.length});const a=()=>{r.value.click()},c=async h=>{const d=h.target.files[0];i.value++,s.value=await e.setImage(d),l(i.value)},l=async h=>{await n.setData("skill",`${h}`,{id:h,url:s.value}),window.location.href=`${o.fullPath}`},u=async h=>{await n.deleteData("skill",h),window.location.href=`${o.fullPath}`};return(h,d)=>(ne(),ge("div",null,[ve(Th,null,{content:Ai(()=>[A("div",tD,[A("table",nD,[rD,A("tbody",null,[(ne(!0),ge(je,null,ds(He(n).getSkillData,f=>(ne(),ge("tr",{class:"bg-white border-b",key:f.id},[A("td",sD,Ti(f.id),1),A("td",iD,[A("img",{src:f.url,class:"h-[50px]",alt:""},null,8,oD)]),A("td",aD,[A("div",cD,[A("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:_=>u(f.id)}," Delete ",8,lD)])])]))),128)),A("tr",null,[A("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:a},[uD,A("input",{type:"file",accept:"image/*",class:"hidden",onChange:c,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},dD=[{path:"/",component:aC},{path:"/login",component:_1},{path:"/dashboard-about",component:Zx},{path:"/dashboard-portfolio",component:eD},{path:"/dashboard-skill",component:hD}],fD=eI({history:mT(),routes:dD}),pD=Ow(),Sh=kw(Yw);Sh.use(fD);Sh.use(pD);Sh.mount("#app");
