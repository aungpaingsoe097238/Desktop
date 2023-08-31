(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Wc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Se={},zr=[],Ut=()=>{},_v=()=>!1,yv=/^on[^a-z]/,pa=t=>yv.test(t),Kc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Gc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vv=Object.prototype.hasOwnProperty,de=(t,e)=>vv.call(t,e),Y=Array.isArray,Wr=t=>ga(t)==="[object Map]",Ep=t=>ga(t)==="[object Set]",ae=t=>typeof t=="function",ze=t=>typeof t=="string",Qc=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",wp=t=>Ne(t)&&ae(t.then)&&ae(t.catch),Tp=Object.prototype.toString,ga=t=>Tp.call(t),Ev=t=>ga(t).slice(8,-1),Ip=t=>ga(t)==="[object Object]",Jc=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ao=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wv=/-(\w)/g,on=ma(t=>t.replace(wv,(e,n)=>n?n.toUpperCase():"")),Tv=/\B([A-Z])/g,gs=ma(t=>t.replace(Tv,"-$1").toLowerCase()),_a=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=ma(t=>t?`on${_a(t)}`:""),ti=(t,e)=>!Object.is(t,e),bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qh;const Ql=()=>qh||(qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ar(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?Rv(r):Ar(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ze(t))return t;if(Ne(t))return t}}const Iv=/;(?![^(]*\))/g,Av=/:([^]+)/,bv=/\/\*[^]*?\*\//g;function Rv(t){const e={};return t.replace(bv,"").split(Iv).forEach(n=>{if(n){const r=n.split(Av);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function or(t){let e="";if(ze(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=or(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sv=Wc(Pv);function Ap(t){return!!t||t===""}const zn=t=>ze(t)?t:t==null?"":Y(t)||Ne(t)&&(t.toString===Tp||!ae(t.toString))?JSON.stringify(t,bp,2):String(t),bp=(t,e)=>e&&e.__v_isRef?bp(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ep(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!Y(e)&&!Ip(e)?String(e):e;let bt;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pp(t){return new Rp(t)}function Cv(t,e=bt){e&&e.active&&e.effects.push(t)}function Xc(){return bt}function Sp(t){bt&&bt.cleanups.push(t)}const Yc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cp=t=>(t.w&Wn)>0,kp=t=>(t.n&Wn)>0,kv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wn},xv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Cp(s)&&!kp(s)?s.delete(t):e[n++]=s,s.w&=~Wn,s.n&=~Wn}e.length=n}},Uo=new WeakMap;let Ns=0,Wn=1;const Jl=30;let Vt;const hr=Symbol(""),Xl=Symbol("");class Zc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cv(this,r)}run(){if(!this.active)return this.fn();let e=Vt,n=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Un=!0,Wn=1<<++Ns,Ns<=Jl?kv(this):Hh(this),this.fn()}finally{Ns<=Jl&&xv(this),Wn=1<<--Ns,Vt=this.parent,Un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(Hh(this),this.onStop&&this.onStop(),this.active=!1)}}function Hh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Un=!0;const xp=[];function ms(){xp.push(Un),Un=!1}function _s(){const t=xp.pop();Un=t===void 0?!0:t}function Tt(t,e,n){if(Un&&Vt){let r=Uo.get(t);r||Uo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Yc()),Dp(s)}}function Dp(t,e){let n=!1;Ns<=Jl?kp(t)||(t.n|=Wn,n=!Cp(t)):n=!t.has(Vt),n&&(t.add(Vt),Vt.deps.push(t))}function yn(t,e,n,r,s,i){const o=Uo.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&Y(t)){const a=Number(r);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":Y(t)?Jc(n)&&l.push(o.get("length")):(l.push(o.get(hr)),Wr(t)&&l.push(o.get(Xl)));break;case"delete":Y(t)||(l.push(o.get(hr)),Wr(t)&&l.push(o.get(Xl)));break;case"set":Wr(t)&&l.push(o.get(hr));break}if(l.length===1)l[0]&&Yl(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Yl(Yc(a))}}function Yl(t,e){const n=Y(t)?t:[...t];for(const r of n)r.computed&&zh(r);for(const r of n)r.computed||zh(r)}function zh(t,e){(t!==Vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Dv(t,e){var n;return(n=Uo.get(t))==null?void 0:n.get(e)}const Ov=Wc("__proto__,__v_isRef,__isVue"),Op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qc)),Nv=eu(),Vv=eu(!1,!0),Mv=eu(!0),Wh=Lv();function Lv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(pe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ms();const r=pe(this)[e].apply(this,n);return _s(),r}}),t}function Uv(t){const e=pe(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function eu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?eE:Up:e?Lp:Mp).get(r))return r;const o=Y(r);if(!t){if(o&&de(Wh,s))return Reflect.get(Wh,s,i);if(s==="hasOwnProperty")return Uv}const l=Reflect.get(r,s,i);return(Qc(s)?Op.has(s):Ov(s))||(t||Tt(r,"get",s),e)?l:Ue(l)?o&&Jc(s)?l:l.value:Ne(l)?t?$p(l):Pi(l):l}}const Fv=Np(),$v=Np(!0);function Np(t=!1){return function(n,r,s,i){let o=n[r];if(es(o)&&Ue(o)&&!Ue(s))return!1;if(!t&&(!Fo(s)&&!es(s)&&(o=pe(o),s=pe(s)),!Y(n)&&Ue(o)&&!Ue(s)))return o.value=s,!0;const l=Y(n)&&Jc(r)?Number(r)<n.length:de(n,r),a=Reflect.set(n,r,s,i);return n===pe(i)&&(l?ti(s,o)&&yn(n,"set",r,s):yn(n,"add",r,s)),a}}function Bv(t,e){const n=de(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&yn(t,"delete",e,void 0),r}function jv(t,e){const n=Reflect.has(t,e);return(!Qc(e)||!Op.has(e))&&Tt(t,"has",e),n}function qv(t){return Tt(t,"iterate",Y(t)?"length":hr),Reflect.ownKeys(t)}const Vp={get:Nv,set:Fv,deleteProperty:Bv,has:jv,ownKeys:qv},Hv={get:Mv,set(t,e){return!0},deleteProperty(t,e){return!0}},zv=Ge({},Vp,{get:Vv,set:$v}),tu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function ro(t,e,n=!1,r=!1){t=t.__v_raw;const s=pe(t),i=pe(e);n||(e!==i&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=ya(s),l=r?tu:n?su:ni;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function so(t,e=!1){const n=this.__v_raw,r=pe(n),s=pe(t);return e||(t!==s&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function io(t,e=!1){return t=t.__v_raw,!e&&Tt(pe(t),"iterate",hr),Reflect.get(t,"size",t)}function Kh(t){t=pe(t);const e=pe(this);return ya(e).has.call(e,t)||(e.add(t),yn(e,"add",t,t)),this}function Gh(t,e){e=pe(e);const n=pe(this),{has:r,get:s}=ya(n);let i=r.call(n,t);i||(t=pe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ti(e,o)&&yn(n,"set",t,e):yn(n,"add",t,e),this}function Qh(t){const e=pe(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&yn(e,"delete",t,void 0),i}function Jh(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function oo(t,e){return function(r,s){const i=this,o=i.__v_raw,l=pe(o),a=e?tu:t?su:ni;return!t&&Tt(l,"iterate",hr),o.forEach((c,u)=>r.call(s,a(c),a(u),i))}}function ao(t,e,n){return function(...r){const s=this.__v_raw,i=pe(s),o=Wr(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...r),u=n?tu:e?su:ni;return!e&&Tt(i,"iterate",a?Xl:hr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function Wv(){const t={get(i){return ro(this,i)},get size(){return io(this)},has:so,add:Kh,set:Gh,delete:Qh,clear:Jh,forEach:oo(!1,!1)},e={get(i){return ro(this,i,!1,!0)},get size(){return io(this)},has:so,add:Kh,set:Gh,delete:Qh,clear:Jh,forEach:oo(!1,!0)},n={get(i){return ro(this,i,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:oo(!0,!1)},r={get(i){return ro(this,i,!0,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ao(i,!1,!1),n[i]=ao(i,!0,!1),e[i]=ao(i,!1,!0),r[i]=ao(i,!0,!0)}),[t,n,e,r]}const[Kv,Gv,Qv,Jv]=Wv();function nu(t,e){const n=e?t?Jv:Qv:t?Gv:Kv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,i)}const Xv={get:nu(!1,!1)},Yv={get:nu(!1,!0)},Zv={get:nu(!0,!1)},Mp=new WeakMap,Lp=new WeakMap,Up=new WeakMap,eE=new WeakMap;function tE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nE(t){return t.__v_skip||!Object.isExtensible(t)?0:tE(Ev(t))}function Pi(t){return es(t)?t:ru(t,!1,Vp,Xv,Mp)}function Fp(t){return ru(t,!1,zv,Yv,Lp)}function $p(t){return ru(t,!0,Hv,Zv,Up)}function ru(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Fn(t){return es(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function es(t){return!!(t&&t.__v_isReadonly)}function Fo(t){return!!(t&&t.__v_isShallow)}function Bp(t){return Fn(t)||es(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function va(t){return Lo(t,"__v_skip",!0),t}const ni=t=>Ne(t)?Pi(t):t,su=t=>Ne(t)?$p(t):t;function iu(t){Un&&Vt&&(t=pe(t),Dp(t.dep||(t.dep=Yc())))}function ou(t,e){t=pe(t);const n=t.dep;n&&Yl(n)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function ue(t){return jp(t,!1)}function rE(t){return jp(t,!0)}function jp(t,e){return Ue(t)?t:new sE(t,e)}class sE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:ni(e)}get value(){return iu(this),this._value}set value(e){const n=this.__v_isShallow||Fo(e)||es(e);e=n?e:pe(e),ti(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),ou(this))}}function Pe(t){return Ue(t)?t.value:t}const iE={get:(t,e,n)=>Pe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qp(t){return Fn(t)?t:new Proxy(t,iE)}class oE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>iu(this),()=>ou(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function aE(t){return new oE(t)}function Hp(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=cE(t,n);return e}class lE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Dv(pe(this._object),this._key)}}function cE(t,e,n){const r=t[e];return Ue(r)?r:new lE(t,e,n)}class uE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zc(e,()=>{this._dirty||(this._dirty=!0,ou(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=pe(this);return iu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hE(t,e,n=!1){let r,s;const i=ae(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new uE(r,s,i||!s,n)}function $n(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ea(i,e,n)}return s}function Ft(t,e,n,r){if(ae(t)){const i=$n(t,e,n,r);return i&&wp(i)&&i.catch(o=>{Ea(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}function Ea(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){$n(a,null,10,[t,o,l]);return}}dE(t,n,s,r)}function dE(t,e,n,r=!0){console.error(t)}let ri=!1,Zl=!1;const lt=[];let Qt=0;const Kr=[];let dn=null,sr=0;const zp=Promise.resolve();let au=null;function lu(t){const e=au||zp;return t?e.then(this?t.bind(this):t):e}function fE(t){let e=Qt+1,n=lt.length;for(;e<n;){const r=e+n>>>1;si(lt[r])<t?e=r+1:n=r}return e}function cu(t){(!lt.length||!lt.includes(t,ri&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?lt.push(t):lt.splice(fE(t.id),0,t),Wp())}function Wp(){!ri&&!Zl&&(Zl=!0,au=zp.then(Gp))}function pE(t){const e=lt.indexOf(t);e>Qt&&lt.splice(e,1)}function gE(t){Y(t)?Kr.push(...t):(!dn||!dn.includes(t,t.allowRecurse?sr+1:sr))&&Kr.push(t),Wp()}function Xh(t,e=ri?Qt+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function Kp(t){if(Kr.length){const e=[...new Set(Kr)];if(Kr.length=0,dn){dn.push(...e);return}for(dn=e,dn.sort((n,r)=>si(n)-si(r)),sr=0;sr<dn.length;sr++)dn[sr]();dn=null,sr=0}}const si=t=>t.id==null?1/0:t.id,mE=(t,e)=>{const n=si(t)-si(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gp(t){Zl=!1,ri=!0,lt.sort(mE);const e=Ut;try{for(Qt=0;Qt<lt.length;Qt++){const n=lt[Qt];n&&n.active!==!1&&$n(n,null,14)}}finally{Qt=0,lt.length=0,Kp(),ri=!1,au=null,(lt.length||Kr.length)&&Gp()}}function _E(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Se;d&&(s=n.map(f=>ze(f)?f.trim():f)),h&&(s=n.map(Gl))}let l,a=r[l=gl(e)]||r[l=gl(on(e))];!a&&i&&(a=r[l=gl(gs(e))]),a&&Ft(a,t,6,s);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ft(c,t,6,s)}}function Qp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ae(t)){const a=c=>{const u=Qp(c,e,!0);u&&(l=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(Ne(t)&&r.set(t,null),null):(Y(i)?i.forEach(a=>o[a]=null):Ge(o,i),Ne(t)&&r.set(t,o),o)}function wa(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,gs(e))||de(t,e))}let et=null,Ta=null;function $o(t){const e=et;return et=t,Ta=t&&t.type.__scopeId||null,e}function yE(t){Ta=t}function vE(){Ta=null}function br(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ld(-1);const i=$o(e);let o;try{o=t(...s)}finally{$o(i),r._d&&ld(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ml(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:y,inheritAttrs:v}=t;let E,R;const k=$o(t);try{if(n.shapeFlag&4){const x=s||r;E=Gt(u.call(x,x,h,i,f,d,y)),R=a}else{const x=e;E=Gt(x.length>1?x(i,{attrs:a,slots:l,emit:c}):x(i,null)),R=e.props?a:EE(a)}}catch(x){Hs.length=0,Ea(x,t,1),E=fe(Kn)}let M=E;if(R&&v!==!1){const x=Object.keys(R),{shapeFlag:J}=M;x.length&&J&7&&(o&&x.some(Kc)&&(R=wE(R,o)),M=ts(M,R))}return n.dirs&&(M=ts(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),E=M,$o(k),E}const EE=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},wE=(t,e)=>{const n={};for(const r in t)(!Kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function TE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Yh(r,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!wa(c,d))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Yh(r,o,c):!0:!!o;return!1}function Yh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wa(n,i))return!0}return!1}function IE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const AE=t=>t.__isSuspense;function bE(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):gE(t)}const lo={};function dr(t,e,n){return Jp(t,e,n)}function Jp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Se){var l;const a=Xc()===((l=Ke)==null?void 0:l.scope)?Ke:null;let c,u=!1,h=!1;if(Ue(t)?(c=()=>t.value,u=Fo(t)):Fn(t)?(c=()=>t,r=!0):Y(t)?(h=!0,u=t.some(x=>Fn(x)||Fo(x)),c=()=>t.map(x=>{if(Ue(x))return x.value;if(Fn(x))return ar(x);if(ae(x))return $n(x,a,2)})):ae(t)?e?c=()=>$n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ft(t,a,3,[f])}:c=Ut,e&&r){const x=c;c=()=>ar(x())}let d,f=x=>{d=k.onStop=()=>{$n(x,a,4)}},y;if(ai)if(f=Ut,e?n&&Ft(e,a,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const x=vw();y=x.__watcherHandles||(x.__watcherHandles=[])}else return Ut;let v=h?new Array(t.length).fill(lo):lo;const E=()=>{if(k.active)if(e){const x=k.run();(r||u||(h?x.some((J,$)=>ti(J,v[$])):ti(x,v)))&&(d&&d(),Ft(e,a,3,[x,v===lo?void 0:h&&v[0]===lo?[]:v,f]),v=x)}else k.run()};E.allowRecurse=!!e;let R;s==="sync"?R=E:s==="post"?R=()=>Et(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),R=()=>cu(E));const k=new Zc(c,R);e?n?E():v=k.run():s==="post"?Et(k.run.bind(k),a&&a.suspense):k.run();const M=()=>{k.stop(),a&&a.scope&&Gc(a.scope.effects,k)};return y&&y.push(M),M}function RE(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Xp(r,t):()=>r[t]:t.bind(r,r);let i;ae(e)?i=e:(i=e.handler,n=e);const o=Ke;ns(this);const l=Jp(s,i.bind(r),n);return o?ns(o):fr(),l}function Xp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ar(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))ar(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)ar(t[n],e);else if(Ep(t)||Wr(t))t.forEach(n=>{ar(n,e)});else if(Ip(t))for(const n in t)ar(t[n],e);return t}function ec(t,e){const n=et;if(n===null)return t;const r=Ca(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,a,c=Se]=e[i];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&ar(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(ms(),Ft(a,n,8,[t.el,l,t,e]),_s())}}function Ia(t,e){return ae(t)?(()=>Ge({name:t.name},e,{setup:t}))():t}const js=t=>!!t.type.__asyncLoader,Yp=t=>t.type.__isKeepAlive;function PE(t,e){Zp(t,"a",e)}function SE(t,e){Zp(t,"da",e)}function Zp(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yp(s.parent.vnode)&&CE(r,e,n,s),s=s.parent}}function CE(t,e,n,r){const s=Aa(e,t,r,!0);uu(()=>{Gc(r[e],s)},n)}function Aa(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ms(),ns(n);const l=Ft(e,n,t,o);return fr(),_s(),l});return r?s.unshift(i):s.push(i),i}}const An=t=>(e,n=Ke)=>(!ai||t==="sp")&&Aa(t,(...r)=>e(...r),n),kE=An("bm"),yt=An("m"),xE=An("bu"),DE=An("u"),OE=An("bum"),uu=An("um"),NE=An("sp"),VE=An("rtg"),ME=An("rtc");function LE(t,e=Ke){Aa("ec",t,e)}const eg="components";function UE(t,e){return $E(eg,t,!0,e)||t}const FE=Symbol.for("v-ndc");function $E(t,e,n=!0,r=!1){const s=et||Ke;if(s){const i=s.type;if(t===eg){const l=mw(i,!1);if(l&&(l===e||l===on(e)||l===_a(on(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[on(e)]||t[_a(on(e))])}function ln(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||ze(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function hu(t,e,n={},r,s){if(et.isCE||et.parent&&js(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),fe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),T();const o=i&&tg(i(n)),l=L(Ve,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function tg(t){return t.some(e=>jo(e)?!(e.type===Kn||e.type===Ve&&!tg(e.children)):!0)?t:null}const tc=t=>t?dg(t)?Ca(t)||t.proxy:tc(t.parent):null,qs=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tc(t.parent),$root:t=>tc(t.root),$emit:t=>t.emit,$options:t=>du(t),$forceUpdate:t=>t.f||(t.f=()=>cu(t.update)),$nextTick:t=>t.n||(t.n=lu.bind(t.proxy)),$watch:t=>RE.bind(t)}),_l=(t,e)=>t!==Se&&!t.__isScriptSetup&&de(t,e),BE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_l(r,e))return o[e]=1,r[e];if(s!==Se&&de(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,i[e];if(n!==Se&&de(n,e))return o[e]=4,n[e];nc&&(o[e]=0)}}const u=qs[e];let h,d;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Se&&de(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _l(s,e)?(s[e]=n,!0):r!==Se&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Se&&de(t,o)||_l(e,o)||(l=i[0])&&de(l,o)||de(r,o)||de(qs,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ed(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nc=!0;function jE(t){const e=du(t),n=t.proxy,r=t.ctx;nc=!1,e.beforeCreate&&td(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:y,activated:v,deactivated:E,beforeDestroy:R,beforeUnmount:k,destroyed:M,unmounted:x,render:J,renderTracked:$,renderTriggered:ge,errorCaptured:X,serverPrefetch:se,expose:be,inheritAttrs:rt,components:It,directives:Ct,filters:er}=e;if(c&&qE(c,r,null),o)for(const Ae in o){const ve=o[Ae];ae(ve)&&(r[Ae]=ve.bind(n))}if(s){const Ae=s.call(n,n);Ne(Ae)&&(t.data=Pi(Ae))}if(nc=!0,i)for(const Ae in i){const ve=i[Ae],un=ae(ve)?ve.bind(n,n):ae(ve.get)?ve.get.bind(n,n):Ut,bn=!ae(ve)&&ae(ve.set)?ve.set.bind(n):Ut,zt=xe({get:un,set:bn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>zt.value,set:vt=>zt.value=vt})}if(l)for(const Ae in l)ng(l[Ae],r,n,Ae);if(a){const Ae=ae(a)?a.call(n):a;Reflect.ownKeys(Ae).forEach(ve=>{Ro(ve,Ae[ve])})}u&&td(u,t,"c");function _e(Ae,ve){Y(ve)?ve.forEach(un=>Ae(un.bind(n))):ve&&Ae(ve.bind(n))}if(_e(kE,h),_e(yt,d),_e(xE,f),_e(DE,y),_e(PE,v),_e(SE,E),_e(LE,X),_e(ME,$),_e(VE,ge),_e(OE,k),_e(uu,x),_e(NE,se),Y(be))if(be.length){const Ae=t.exposed||(t.exposed={});be.forEach(ve=>{Object.defineProperty(Ae,ve,{get:()=>n[ve],set:un=>n[ve]=un})})}else t.exposed||(t.exposed={});J&&t.render===Ut&&(t.render=J),rt!=null&&(t.inheritAttrs=rt),It&&(t.components=It),Ct&&(t.directives=Ct)}function qE(t,e,n=Ut){Y(t)&&(t=rc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function td(t,e,n){Ft(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ng(t,e,n,r){const s=r.includes(".")?Xp(n,r):()=>n[r];if(ze(t)){const i=e[t];ae(i)&&dr(s,i)}else if(ae(t))dr(s,t.bind(n));else if(Ne(t))if(Y(t))t.forEach(i=>ng(i,e,n,r));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&dr(s,i,t)}}function du(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(c=>Bo(a,c,o,!0)),Bo(a,e,o)),Ne(e)&&i.set(e,a),a}function Bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Bo(t,i,n,!0),s&&s.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=HE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const HE={data:nd,props:rd,emits:rd,methods:Vs,computed:Vs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Vs,directives:Vs,watch:WE,provide:nd,inject:zE};function nd(t,e){return e?t?function(){return Ge(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function zE(t,e){return Vs(rc(t),rc(e))}function rc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?Ge(Object.create(null),t,e):e}function rd(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:Ge(Object.create(null),ed(t),ed(e??{})):e}function WE(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function rg(){return{app:null,config:{isNativeTag:_v,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KE=0;function GE(t,e){return function(r,s=null){ae(r)||(r=Ge({},r)),s!=null&&!Ne(s)&&(s=null);const i=rg(),o=new Set;let l=!1;const a=i.app={_uid:KE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ew,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ae(c.install)?(o.add(c),c.install(a,...u)):ae(c)&&(o.add(c),c(a,...u))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,u){return u?(i.components[c]=u,a):i.components[c]},directive(c,u){return u?(i.directives[c]=u,a):i.directives[c]},mount(c,u,h){if(!l){const d=fe(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Ca(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return i.provides[c]=u,a},runWithContext(c){ii=a;try{return c()}finally{ii=null}}};return a}}let ii=null;function Ro(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function Ot(t,e,n=!1){const r=Ke||et;if(r||ii){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ii._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}function QE(){return!!(Ke||et||ii)}function JE(t,e,n,r=!1){const s={},i={};Lo(i,Ra,1),t.propsDefaults=Object.create(null),sg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function XE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=pe(s),[a]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(wa(t.emitsOptions,d))continue;const f=e[d];if(a)if(de(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const y=on(d);s[y]=sc(a,l,y,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{sg(t,e,s,i)&&(c=!0);let u;for(const h in l)(!e||!de(e,h)&&((u=gs(h))===h||!de(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=sc(a,l,h,void 0,t,!0)):delete s[h]);if(i!==l)for(const h in i)(!e||!de(e,h))&&(delete i[h],c=!0)}c&&yn(t,"set","$attrs")}function sg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ao(a))continue;const c=e[a];let u;s&&de(s,u=on(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:wa(t.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(i){const a=pe(n),c=l||Se;for(let u=0;u<i.length;u++){const h=i[u];n[h]=sc(s,a,h,c[h],t,!de(c,h))}}return o}function sc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=de(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&ae(a)){const{propsDefaults:c}=s;n in c?r=c[n]:(ns(s),r=c[n]=a.call(null,e),fr())}else r=a}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===gs(n))&&(r=!0))}return r}function ig(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let a=!1;if(!ae(t)){const u=h=>{a=!0;const[d,f]=ig(h,e,!0);Ge(o,d),f&&l.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return Ne(t)&&r.set(t,zr),zr;if(Y(i))for(let u=0;u<i.length;u++){const h=on(i[u]);sd(h)&&(o[h]=Se)}else if(i)for(const u in i){const h=on(u);if(sd(h)){const d=i[u],f=o[h]=Y(d)||ae(d)?{type:d}:Ge({},d);if(f){const y=ad(Boolean,f.type),v=ad(String,f.type);f[0]=y>-1,f[1]=v<0||y<v,(y>-1||de(f,"default"))&&l.push(h)}}}const c=[o,l];return Ne(t)&&r.set(t,c),c}function sd(t){return t[0]!=="$"}function id(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function od(t,e){return id(t)===id(e)}function ad(t,e){return Y(e)?e.findIndex(n=>od(n,t)):ae(e)&&od(e,t)?0:-1}const og=t=>t[0]==="_"||t==="$stable",fu=t=>Y(t)?t.map(Gt):[Gt(t)],YE=(t,e,n)=>{if(e._n)return e;const r=br((...s)=>fu(e(...s)),n);return r._c=!1,r},ag=(t,e,n)=>{const r=t._ctx;for(const s in t){if(og(s))continue;const i=t[s];if(ae(i))e[s]=YE(s,i,r);else if(i!=null){const o=fu(i);e[s]=()=>o}}},lg=(t,e)=>{const n=fu(e);t.slots.default=()=>n},ZE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Lo(e,"_",n)):ag(e,t.slots={})}else t.slots={},e&&lg(t,e);Lo(t.slots,Ra,1)},ew=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Se;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(Ge(s,e),!n&&l===1&&delete s._):(i=!e.$stable,ag(e,s)),o=e}else e&&(lg(t,e),o={default:1});if(i)for(const l in s)!og(l)&&!(l in o)&&delete s[l]};function ic(t,e,n,r,s=!1){if(Y(t)){t.forEach((d,f)=>ic(d,e&&(Y(e)?e[f]:e),n,r,s));return}if(js(r)&&!s)return;const i=r.shapeFlag&4?Ca(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Se?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ze(c)?(u[c]=null,de(h,c)&&(h[c]=null)):Ue(c)&&(c.value=null)),ae(a))$n(a,l,12,[o,u]);else{const d=ze(a),f=Ue(a);if(d||f){const y=()=>{if(t.f){const v=d?de(h,a)?h[a]:u[a]:a.value;s?Y(v)&&Gc(v,i):Y(v)?v.includes(i)||v.push(i):d?(u[a]=[i],de(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,de(h,a)&&(h[a]=o)):f&&(a.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Et(y,n)):y()}}}const Et=bE;function tw(t){return nw(t)}function nw(t,e){const n=Ql();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ut,insertStaticContent:y}=t,v=(p,g,_,w=null,A=null,P=null,F=!1,D=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!Cs(p,g)&&(w=I(p),vt(p,A,P,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:S,ref:G,shapeFlag:H}=g;switch(S){case ba:E(p,g,_,w);break;case Kn:R(p,g,_,w);break;case Po:p==null&&k(g,_,w,F);break;case Ve:It(p,g,_,w,A,P,F,D,O);break;default:H&1?J(p,g,_,w,A,P,F,D,O):H&6?Ct(p,g,_,w,A,P,F,D,O):(H&64||H&128)&&S.process(p,g,_,w,A,P,F,D,O,N)}G!=null&&A&&ic(G,p&&p.ref,P,g||p,!g)},E=(p,g,_,w)=>{if(p==null)r(g.el=l(g.children),_,w);else{const A=g.el=p.el;g.children!==p.children&&c(A,g.children)}},R=(p,g,_,w)=>{p==null?r(g.el=a(g.children||""),_,w):g.el=p.el},k=(p,g,_,w)=>{[p.el,p.anchor]=y(p.children,g,_,w,p.el,p.anchor)},M=({el:p,anchor:g},_,w)=>{let A;for(;p&&p!==g;)A=d(p),r(p,_,w),p=A;r(g,_,w)},x=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),s(p),p=_;s(g)},J=(p,g,_,w,A,P,F,D,O)=>{F=F||g.type==="svg",p==null?$(g,_,w,A,P,F,D,O):se(p,g,A,P,F,D,O)},$=(p,g,_,w,A,P,F,D)=>{let O,S;const{type:G,props:H,shapeFlag:Q,transition:ne,dirs:le}=p;if(O=p.el=o(p.type,P,H&&H.is,H),Q&8?u(O,p.children):Q&16&&X(p.children,O,null,w,A,P&&G!=="foreignObject",F,D),le&&tr(p,null,w,"created"),ge(O,p,p.scopeId,F,w),H){for(const Ie in H)Ie!=="value"&&!Ao(Ie)&&i(O,Ie,null,H[Ie],P,p.children,w,A,st);"value"in H&&i(O,"value",null,H.value),(S=H.onVnodeBeforeMount)&&Kt(S,w,p)}le&&tr(p,null,w,"beforeMount");const Re=(!A||A&&!A.pendingBranch)&&ne&&!ne.persisted;Re&&ne.beforeEnter(O),r(O,g,_),((S=H&&H.onVnodeMounted)||Re||le)&&Et(()=>{S&&Kt(S,w,p),Re&&ne.enter(O),le&&tr(p,null,w,"mounted")},A)},ge=(p,g,_,w,A)=>{if(_&&f(p,_),w)for(let P=0;P<w.length;P++)f(p,w[P]);if(A){let P=A.subTree;if(g===P){const F=A.vnode;ge(p,F,F.scopeId,F.slotScopeIds,A.parent)}}},X=(p,g,_,w,A,P,F,D,O=0)=>{for(let S=O;S<p.length;S++){const G=p[S]=D?kn(p[S]):Gt(p[S]);v(null,G,g,_,w,A,P,F,D)}},se=(p,g,_,w,A,P,F)=>{const D=g.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:G}=g;O|=p.patchFlag&16;const H=p.props||Se,Q=g.props||Se;let ne;_&&nr(_,!1),(ne=Q.onVnodeBeforeUpdate)&&Kt(ne,_,g,p),G&&tr(g,p,_,"beforeUpdate"),_&&nr(_,!0);const le=A&&g.type!=="foreignObject";if(S?be(p.dynamicChildren,S,D,_,w,le,P):F||ve(p,g,D,null,_,w,le,P,!1),O>0){if(O&16)rt(D,g,H,Q,_,w,A);else if(O&2&&H.class!==Q.class&&i(D,"class",null,Q.class,A),O&4&&i(D,"style",H.style,Q.style,A),O&8){const Re=g.dynamicProps;for(let Ie=0;Ie<Re.length;Ie++){const $e=Re[Ie],Nt=H[$e],Or=Q[$e];(Or!==Nt||$e==="value")&&i(D,$e,Nt,Or,A,p.children,_,w,st)}}O&1&&p.children!==g.children&&u(D,g.children)}else!F&&S==null&&rt(D,g,H,Q,_,w,A);((ne=Q.onVnodeUpdated)||G)&&Et(()=>{ne&&Kt(ne,_,g,p),G&&tr(g,p,_,"updated")},w)},be=(p,g,_,w,A,P,F)=>{for(let D=0;D<g.length;D++){const O=p[D],S=g[D],G=O.el&&(O.type===Ve||!Cs(O,S)||O.shapeFlag&70)?h(O.el):_;v(O,S,G,null,w,A,P,F,!0)}},rt=(p,g,_,w,A,P,F)=>{if(_!==w){if(_!==Se)for(const D in _)!Ao(D)&&!(D in w)&&i(p,D,_[D],null,F,g.children,A,P,st);for(const D in w){if(Ao(D))continue;const O=w[D],S=_[D];O!==S&&D!=="value"&&i(p,D,S,O,F,g.children,A,P,st)}"value"in w&&i(p,"value",_.value,w.value)}},It=(p,g,_,w,A,P,F,D,O)=>{const S=g.el=p?p.el:l(""),G=g.anchor=p?p.anchor:l("");let{patchFlag:H,dynamicChildren:Q,slotScopeIds:ne}=g;ne&&(D=D?D.concat(ne):ne),p==null?(r(S,_,w),r(G,_,w),X(g.children,_,G,A,P,F,D,O)):H>0&&H&64&&Q&&p.dynamicChildren?(be(p.dynamicChildren,Q,_,A,P,F,D),(g.key!=null||A&&g===A.subTree)&&cg(p,g,!0)):ve(p,g,_,G,A,P,F,D,O)},Ct=(p,g,_,w,A,P,F,D,O)=>{g.slotScopeIds=D,p==null?g.shapeFlag&512?A.ctx.activate(g,_,w,F,O):er(g,_,w,A,P,F,O):kt(p,g,O)},er=(p,g,_,w,A,P,F)=>{const D=p.component=hw(p,w,A);if(Yp(p)&&(D.ctx.renderer=N),dw(D),D.asyncDep){if(A&&A.registerDep(D,_e),!p.el){const O=D.subTree=fe(Kn);R(null,O,g,_)}return}_e(D,p,g,_,A,P,F)},kt=(p,g,_)=>{const w=g.component=p.component;if(TE(p,g,_))if(w.asyncDep&&!w.asyncResolved){Ae(w,g,_);return}else w.next=g,pE(w.update),w.update();else g.el=p.el,w.vnode=g},_e=(p,g,_,w,A,P,F)=>{const D=()=>{if(p.isMounted){let{next:G,bu:H,u:Q,parent:ne,vnode:le}=p,Re=G,Ie;nr(p,!1),G?(G.el=le.el,Ae(p,G,F)):G=le,H&&bo(H),(Ie=G.props&&G.props.onVnodeBeforeUpdate)&&Kt(Ie,ne,G,le),nr(p,!0);const $e=ml(p),Nt=p.subTree;p.subTree=$e,v(Nt,$e,h(Nt.el),I(Nt),p,A,P),G.el=$e.el,Re===null&&IE(p,$e.el),Q&&Et(Q,A),(Ie=G.props&&G.props.onVnodeUpdated)&&Et(()=>Kt(Ie,ne,G,le),A)}else{let G;const{el:H,props:Q}=g,{bm:ne,m:le,parent:Re}=p,Ie=js(g);if(nr(p,!1),ne&&bo(ne),!Ie&&(G=Q&&Q.onVnodeBeforeMount)&&Kt(G,Re,g),nr(p,!0),H&&Ee){const $e=()=>{p.subTree=ml(p),Ee(H,p.subTree,p,A,null)};Ie?g.type.__asyncLoader().then(()=>!p.isUnmounted&&$e()):$e()}else{const $e=p.subTree=ml(p);v(null,$e,_,w,p,A,P),g.el=$e.el}if(le&&Et(le,A),!Ie&&(G=Q&&Q.onVnodeMounted)){const $e=g;Et(()=>Kt(G,Re,$e),A)}(g.shapeFlag&256||Re&&js(Re.vnode)&&Re.vnode.shapeFlag&256)&&p.a&&Et(p.a,A),p.isMounted=!0,g=_=w=null}},O=p.effect=new Zc(D,()=>cu(S),p.scope),S=p.update=()=>O.run();S.id=p.uid,nr(p,!0),S()},Ae=(p,g,_)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,XE(p,g.props,w,_),ew(p,g.children,_),ms(),Xh(),_s()},ve=(p,g,_,w,A,P,F,D,O=!1)=>{const S=p&&p.children,G=p?p.shapeFlag:0,H=g.children,{patchFlag:Q,shapeFlag:ne}=g;if(Q>0){if(Q&128){bn(S,H,_,w,A,P,F,D,O);return}else if(Q&256){un(S,H,_,w,A,P,F,D,O);return}}ne&8?(G&16&&st(S,A,P),H!==S&&u(_,H)):G&16?ne&16?bn(S,H,_,w,A,P,F,D,O):st(S,A,P,!0):(G&8&&u(_,""),ne&16&&X(H,_,w,A,P,F,D,O))},un=(p,g,_,w,A,P,F,D,O)=>{p=p||zr,g=g||zr;const S=p.length,G=g.length,H=Math.min(S,G);let Q;for(Q=0;Q<H;Q++){const ne=g[Q]=O?kn(g[Q]):Gt(g[Q]);v(p[Q],ne,_,null,A,P,F,D,O)}S>G?st(p,A,P,!0,!1,H):X(g,_,w,A,P,F,D,O,H)},bn=(p,g,_,w,A,P,F,D,O)=>{let S=0;const G=g.length;let H=p.length-1,Q=G-1;for(;S<=H&&S<=Q;){const ne=p[S],le=g[S]=O?kn(g[S]):Gt(g[S]);if(Cs(ne,le))v(ne,le,_,null,A,P,F,D,O);else break;S++}for(;S<=H&&S<=Q;){const ne=p[H],le=g[Q]=O?kn(g[Q]):Gt(g[Q]);if(Cs(ne,le))v(ne,le,_,null,A,P,F,D,O);else break;H--,Q--}if(S>H){if(S<=Q){const ne=Q+1,le=ne<G?g[ne].el:w;for(;S<=Q;)v(null,g[S]=O?kn(g[S]):Gt(g[S]),_,le,A,P,F,D,O),S++}}else if(S>Q)for(;S<=H;)vt(p[S],A,P,!0),S++;else{const ne=S,le=S,Re=new Map;for(S=le;S<=Q;S++){const At=g[S]=O?kn(g[S]):Gt(g[S]);At.key!=null&&Re.set(At.key,S)}let Ie,$e=0;const Nt=Q-le+1;let Or=!1,$h=0;const Ss=new Array(Nt);for(S=0;S<Nt;S++)Ss[S]=0;for(S=ne;S<=H;S++){const At=p[S];if($e>=Nt){vt(At,A,P,!0);continue}let Wt;if(At.key!=null)Wt=Re.get(At.key);else for(Ie=le;Ie<=Q;Ie++)if(Ss[Ie-le]===0&&Cs(At,g[Ie])){Wt=Ie;break}Wt===void 0?vt(At,A,P,!0):(Ss[Wt-le]=S+1,Wt>=$h?$h=Wt:Or=!0,v(At,g[Wt],_,null,A,P,F,D,O),$e++)}const Bh=Or?rw(Ss):zr;for(Ie=Bh.length-1,S=Nt-1;S>=0;S--){const At=le+S,Wt=g[At],jh=At+1<G?g[At+1].el:w;Ss[S]===0?v(null,Wt,_,jh,A,P,F,D,O):Or&&(Ie<0||S!==Bh[Ie]?zt(Wt,_,jh,2):Ie--)}}},zt=(p,g,_,w,A=null)=>{const{el:P,type:F,transition:D,children:O,shapeFlag:S}=p;if(S&6){zt(p.component.subTree,g,_,w);return}if(S&128){p.suspense.move(g,_,w);return}if(S&64){F.move(p,g,_,N);return}if(F===Ve){r(P,g,_);for(let H=0;H<O.length;H++)zt(O[H],g,_,w);r(p.anchor,g,_);return}if(F===Po){M(p,g,_);return}if(w!==2&&S&1&&D)if(w===0)D.beforeEnter(P),r(P,g,_),Et(()=>D.enter(P),A);else{const{leave:H,delayLeave:Q,afterLeave:ne}=D,le=()=>r(P,g,_),Re=()=>{H(P,()=>{le(),ne&&ne()})};Q?Q(P,le,Re):Re()}else r(P,g,_)},vt=(p,g,_,w=!1,A=!1)=>{const{type:P,props:F,ref:D,children:O,dynamicChildren:S,shapeFlag:G,patchFlag:H,dirs:Q}=p;if(D!=null&&ic(D,null,_,p,!0),G&256){g.ctx.deactivate(p);return}const ne=G&1&&Q,le=!js(p);let Re;if(le&&(Re=F&&F.onVnodeBeforeUnmount)&&Kt(Re,g,p),G&6)no(p.component,_,w);else{if(G&128){p.suspense.unmount(_,w);return}ne&&tr(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,_,A,N,w):S&&(P!==Ve||H>0&&H&64)?st(S,g,_,!1,!0):(P===Ve&&H&384||!A&&G&16)&&st(O,g,_),w&&xr(p)}(le&&(Re=F&&F.onVnodeUnmounted)||ne)&&Et(()=>{Re&&Kt(Re,g,p),ne&&tr(p,null,g,"unmounted")},_)},xr=p=>{const{type:g,el:_,anchor:w,transition:A}=p;if(g===Ve){Dr(_,w);return}if(g===Po){x(p);return}const P=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:F,delayLeave:D}=A,O=()=>F(_,P);D?D(p.el,P,O):O()}else P()},Dr=(p,g)=>{let _;for(;p!==g;)_=d(p),s(p),p=_;s(g)},no=(p,g,_)=>{const{bum:w,scope:A,update:P,subTree:F,um:D}=p;w&&bo(w),A.stop(),P&&(P.active=!1,vt(F,p,g,_)),D&&Et(D,g),Et(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},st=(p,g,_,w=!1,A=!1,P=0)=>{for(let F=P;F<p.length;F++)vt(p[F],g,_,w,A)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),B=(p,g,_)=>{p==null?g._vnode&&vt(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,_),Xh(),Kp(),g._vnode=p},N={p:v,um:vt,m:zt,r:xr,mt:er,mc:X,pc:ve,pbc:be,n:I,o:t};let W,Ee;return e&&([W,Ee]=e(N)),{render:B,hydrate:W,createApp:GE(B,W)}}function nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cg(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=kn(s[i]),l.el=o.el),n||cg(o,l)),l.type===ba&&(l.el=o.el)}}function rw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const a=t.length;for(r=0;r<a;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sw=t=>t.__isTeleport,Ve=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),Kn=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),Hs=[];let Mt=null;function T(t=!1){Hs.push(Mt=t?null:[])}function iw(){Hs.pop(),Mt=Hs[Hs.length-1]||null}let oi=1;function ld(t){oi+=t}function ug(t){return t.dynamicChildren=oi>0?Mt||zr:null,iw(),oi>0&&Mt&&Mt.push(t),t}function ie(t,e,n,r,s,i){return ug(m(t,e,n,r,s,i,!0))}function L(t,e,n,r,s){return ug(fe(t,e,n,r,s,!0))}function jo(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Ra="__vInternal",hg=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Ue(t)||ae(t)?{i:et,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hg(e),ref:e&&So(e),scopeId:Ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return l?(pu(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ze(n)?8:16),oi>0&&!o&&Mt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Mt.push(a),a}const fe=ow;function ow(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===FE)&&(t=Kn),jo(t)){const l=ts(t,e,!0);return n&&pu(l,n),oi>0&&!i&&Mt&&(l.shapeFlag&6?Mt[Mt.indexOf(t)]=l:Mt.push(l)),l.patchFlag|=-2,l}if(_w(t)&&(t=t.__vccOpts),e){e=aw(e);let{class:l,style:a}=e;l&&!ze(l)&&(e.class=or(l)),Ne(a)&&(Bp(a)&&!Y(a)&&(a=Ge({},a)),e.style=Ar(a))}const o=ze(t)?1:AE(t)?128:sw(t)?64:Ne(t)?4:ae(t)?2:0;return m(t,e,n,r,s,o,i,!0)}function aw(t){return t?Bp(t)||Ra in t?Ge({},t):t:null}function ts(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?lw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&hg(l),ref:e&&e.ref?n&&s?Y(s)?s.concat(So(e)):[s,So(e)]:So(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ts(t.ssContent),ssFallback:t.ssFallback&&ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Pa(t=" ",e=0){return fe(ba,null,t,e)}function Sa(t,e){const n=fe(Po,null,t);return n.staticCount=e,n}function U(t="",e=!1){return e?(T(),L(Kn,null,t)):fe(Kn,null,t)}function Gt(t){return t==null||typeof t=="boolean"?fe(Kn):Y(t)?fe(Ve,null,t.slice()):typeof t=="object"?kn(t):fe(ba,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ts(t)}function pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ra in e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[Pa(e)]):n=8);t.children=e,t.shapeFlag|=n}function lw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=or([e.class,r.class]));else if(s==="style")e.style=Ar([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Ft(t,e,7,[n,r])}const cw=rg();let uw=0;function hw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cw,i={uid:uw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ig(r,s),emitsOptions:Qp(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_E.bind(null,i),t.ce&&t.ce(i),i}let Ke=null,gu,Nr,cd="__VUE_INSTANCE_SETTERS__";(Nr=Ql()[cd])||(Nr=Ql()[cd]=[]),Nr.push(t=>Ke=t),gu=t=>{Nr.length>1?Nr.forEach(e=>e(t)):Nr[0](t)};const ns=t=>{gu(t),t.scope.on()},fr=()=>{Ke&&Ke.scope.off(),gu(null)};function dg(t){return t.vnode.shapeFlag&4}let ai=!1;function dw(t,e=!1){ai=e;const{props:n,children:r}=t.vnode,s=dg(t);JE(t,n,s,e),ZE(t,r);const i=s?fw(t,e):void 0;return ai=!1,i}function fw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=va(new Proxy(t.ctx,BE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?gw(t):null;ns(t),ms();const i=$n(r,t,0,[t.props,s]);if(_s(),fr(),wp(i)){if(i.then(fr,fr),e)return i.then(o=>{ud(t,o,e)}).catch(o=>{Ea(o,t,0)});t.asyncDep=i}else ud(t,i,e)}else fg(t,e)}function ud(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=qp(e)),fg(t,n)}let hd;function fg(t,e,n){const r=t.type;if(!t.render){if(!e&&hd&&!r.render){const s=r.template||du(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=r,c=Ge(Ge({isCustomElement:i,delimiters:l},o),a);r.render=hd(s,c)}}t.render=r.render||Ut}ns(t),ms(),jE(t),_s(),fr()}function pw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}}))}function gw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return pw(t)},slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qp(va(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function mw(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function _w(t){return ae(t)&&"__vccOpts"in t}const xe=(t,e)=>hE(t,e,ai);function pg(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!Y(e)?jo(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jo(n)&&(n=[n]),fe(t,e,n))}const yw=Symbol.for("v-scx"),vw=()=>Ot(yw),Ew="3.3.4",ww="http://www.w3.org/2000/svg",ir=typeof document<"u"?document:null,dd=ir&&ir.createElement("template"),Tw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ir.createElementNS(ww,t):ir.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ir.createTextNode(t),createComment:t=>ir.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ir.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dd.innerHTML=r?`<svg>${t}</svg>`:t;const l=dd.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Iw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Aw(t,e,n){const r=t.style,s=ze(n);if(n&&!s){if(e&&!ze(e))for(const i in e)n[i]==null&&oc(r,i,"");for(const i in n)oc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const fd=/\s*!important$/;function oc(t,e,n){if(Y(n))n.forEach(r=>oc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bw(t,e);fd.test(n)?t.setProperty(gs(r),n.replace(fd,""),"important"):t[r]=n}}const pd=["Webkit","Moz","ms"],yl={};function bw(t,e){const n=yl[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return yl[e]=r;r=_a(r);for(let s=0;s<pd.length;s++){const i=pd[s]+r;if(i in t)return yl[e]=i}return e}const gd="http://www.w3.org/1999/xlink";function Rw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gd,e.slice(6,e.length)):t.setAttributeNS(gd,e,n);else{const i=Sv(e);n==null||i&&!Ap(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Pw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ap(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ur(t,e,n,r){t.addEventListener(e,n,r)}function Sw(t,e,n,r){t.removeEventListener(e,n,r)}function Cw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,a]=kw(e);if(r){const c=i[e]=Ow(r,s);Ur(t,l,c,a)}else o&&(Sw(t,l,o,a),i[e]=void 0)}}const md=/(?:Once|Passive|Capture)$/;function kw(t){let e;if(md.test(t)){e={};let r;for(;r=t.match(md);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let vl=0;const xw=Promise.resolve(),Dw=()=>vl||(xw.then(()=>vl=0),vl=Date.now());function Ow(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(Nw(r,n.value),e,5,[r])};return n.value=t,n.attached=Dw(),n}function Nw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _d=/^on[a-z]/,Vw=(t,e,n,r,s=!1,i,o,l,a)=>{e==="class"?Iw(t,r,s):e==="style"?Aw(t,n,r):pa(e)?Kc(e)||Cw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mw(t,e,r,s))?Pw(t,e,r,i,o,l,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rw(t,e,r,s))};function Mw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&_d.test(e)&&ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_d.test(e)&&ze(n)?!1:e in t}const yd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>bo(e,n):e};function Lw(t){t.target.composing=!0}function vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ac={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=yd(s);const i=r||s.props&&s.props.type==="number";Ur(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Gl(l)),t._assign(l)}),n&&Ur(t,"change",()=>{t.value=t.value.trim()}),e||(Ur(t,"compositionstart",Lw),Ur(t,"compositionend",vd),Ur(t,"change",vd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=yd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Gl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Uw=["ctrl","shift","alt","meta"],Fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Uw.some(n=>t[`${n}Key`]&&!e.includes(n))},gg=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Fw[e[s]];if(i&&i(n,e))return}return t(n,...r)},$w=Ge({patchProp:Vw},Tw);let Ed;function Bw(){return Ed||(Ed=tw($w))}const jw=(...t)=>{const e=Bw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qw(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qw(t){return ze(t)?document.querySelector(t):t}var Hw=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let mg;const ka=t=>mg=t,_g=Symbol();function lc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zs||(zs={}));function zw(){const t=Pp(!0),e=t.run(()=>ue({}));let n=[],r=[];const s=va({install(i){ka(s),s._a=i,i.provide(_g,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Hw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const yg=()=>{};function wd(t,e,n,r=yg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Xc()&&Sp(s),s}function Vr(t,...e){t.slice().forEach(n=>{n(...e)})}const Ww=t=>t();function cc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];lc(s)&&lc(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!Fn(r)?t[n]=cc(s,r):t[n]=r}return t}const Kw=Symbol();function Gw(t){return!lc(t)||!t.hasOwnProperty(Kw)}const{assign:Cn}=Object;function Qw(t){return!!(Ue(t)&&t.effect)}function Jw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=s?s():{});const u=Hp(n.state.value[t]);return Cn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=va(xe(()=>{ka(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return a=vg(t,c,e,n,r,!0),a}function vg(t,e,n={},r,s,i){let o;const l=Cn({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],f;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),ue({});let v;function E(X){let se;c=u=!1,typeof X=="function"?(X(r.state.value[t]),se={type:zs.patchFunction,storeId:t,events:f}):(cc(r.state.value[t],X),se={type:zs.patchObject,payload:X,storeId:t,events:f});const be=v=Symbol();lu().then(()=>{v===be&&(c=!0)}),u=!0,Vr(h,se,r.state.value[t])}const R=i?function(){const{state:se}=n,be=se?se():{};this.$patch(rt=>{Cn(rt,be)})}:yg;function k(){o.stop(),h=[],d=[],r._s.delete(t)}function M(X,se){return function(){ka(r);const be=Array.from(arguments),rt=[],It=[];function Ct(_e){rt.push(_e)}function er(_e){It.push(_e)}Vr(d,{args:be,name:X,store:J,after:Ct,onError:er});let kt;try{kt=se.apply(this&&this.$id===t?this:J,be)}catch(_e){throw Vr(It,_e),_e}return kt instanceof Promise?kt.then(_e=>(Vr(rt,_e),_e)).catch(_e=>(Vr(It,_e),Promise.reject(_e))):(Vr(rt,kt),kt)}}const x={_p:r,$id:t,$onAction:wd.bind(null,d),$patch:E,$reset:R,$subscribe(X,se={}){const be=wd(h,X,se.detached,()=>rt()),rt=o.run(()=>dr(()=>r.state.value[t],It=>{(se.flush==="sync"?u:c)&&X({storeId:t,type:zs.direct,events:f},It)},Cn({},a,se)));return be},$dispose:k},J=Pi(x);r._s.set(t,J);const $=r._a&&r._a.runWithContext||Ww,ge=r._e.run(()=>(o=Pp(),$(()=>o.run(e))));for(const X in ge){const se=ge[X];if(Ue(se)&&!Qw(se)||Fn(se))i||(y&&Gw(se)&&(Ue(se)?se.value=y[X]:cc(se,y[X])),r.state.value[t][X]=se);else if(typeof se=="function"){const be=M(X,se);ge[X]=be,l.actions[X]=se}}return Cn(J,ge),Cn(pe(J),ge),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:X=>{E(se=>{Cn(se,X)})}}),r._p.forEach(X=>{Cn(J,o.run(()=>X({store:J,app:r._a,pinia:r,options:l})))}),y&&i&&n.hydrate&&n.hydrate(J.$state,y),c=!0,u=!0,J}function xa(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,a){const c=QE();return l=l||(c?Ot(_g,null):null),l&&ka(l),l=mg,l._s.has(r)||(i?vg(r,e,s,l):Jw(r,s,l)),l._s.get(r)}return o.$id=r,o}const Ht=xa("screen",()=>{const t=ue([]),e=xe(()=>t.value);return{windows:t,getWindows:e,setWindow:(o,l)=>{let a=0;const c=t.value.find(u=>u.window===o);for(const u of t.value)a+=u.zIndex;if(!c)t.value.push({window:o,data:l,x:300,y:40,zIndex:a});else for(const u of t.value)a+=u.zIndex},removeWidow:o=>{t.value=t.value.filter(l=>l.window!==o)},changeXY:(o,l,a)=>{const c=t.value.find((u,h)=>h===a);c.x=o,c.y=l},increseZindex:o=>{const l=t.value.find(a=>a.window===o);if(l){let a=0;for(const c of t.value)a+=c.zIndex;l.zIndex=a+10}}}}),Xw={class:"w-full fixed top-0 py-3 bg-primary text-white"},Yw={class:"w-[90%] mx-auto flex items-center justify-between"},Zw={class:"text-xl font-bold cursor-pointer"},eT={class:"text-xl font-bold"},tT={key:0,class:"absolute z-40 p-2 top-9 text-xl bg-primary text-white my-5 ms-[4%]"},nT={__name:"Header",setup(t){const e=ue(!1),n=ue(""),r=Ht(),s=()=>{const l=new Date,a=l.getDate().toString().padStart(2,"0"),u=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"][l.getMonth()],h=l.getFullYear(),d=l.getHours().toString().padStart(2,"0"),f=l.getMinutes().toString().padStart(2,"0"),y=l.getSeconds().toString().padStart(2,"0");return`${a}/${u}/${h} ${d}:${f}:${y}`};yt(()=>{n.value=s(),setInterval(()=>{n.value=s()},1e3)});const i=(l,a=null)=>{r.setWindow(l,a),e.value=!1},o=()=>{window.location.href="/"};return(l,a)=>(T(),ie(Ve,null,[m("nav",Xw,[m("div",Yw,[m("div",Zw,[m("div",{onClick:a[0]||(a[0]=c=>e.value=!e.value)},"Menu")]),m("div",eT,[m("div",null,zn(n.value),1)])])]),e.value?(T(),ie("div",tT,[m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[1]||(a[1]=c=>i("portfolio"))}," Portfolio "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[2]||(a[2]=c=>i("about"))}," About "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[3]||(a[3]=c=>i("skill"))}," Skill "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[4]||(a[4]=c=>i("contact"))}," Contact "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:a[5]||(a[5]=c=>o())}," Shutdown ")])):U("",!0)],64))}};const mu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rT=t=>(yE("data-v-d5fad5a6"),t=t(),vE(),t),sT={key:0,class:"h-screen flex justify-center flex-col items-center w-screen bg-[#ebd1ae]"},iT=rT(()=>m("div",{class:"text-4xl text-white"},"Loading...",-1)),oT={class:"progress-bar-container"},aT={key:1,class:"app"},lT={__name:"App",setup(t){const e=ue(!0),n=ue(0);return yt(()=>{const r=setInterval(()=>{n.value<100?n.value+=10:(clearInterval(r),e.value=!1)},200)}),(r,s)=>{const i=UE("routerView");return e.value?(T(),ie("div",sT,[iT,m("div",oT,[m("div",{class:"progress-bar",style:Ar({width:n.value+"%"})},null,4)])])):(T(),ie("div",aT,[fe(nT),fe(i,{class:"mt-12"})]))}}},cT=mu(lT,[["__scopeId","data-v-d5fad5a6"]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof window<"u";function uT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function El(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Ws=()=>{},$t=Array.isArray,hT=/\/$/,dT=t=>t.replace(hT,"");function wl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=mT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function fT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Td(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&rs(e.matched[r],n.matched[s])&&Eg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Eg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gT(t[n],e[n]))return!1;return!0}function gT(t,e){return $t(t)?Id(t,e):$t(e)?Id(e,t):t===e}function Id(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function _T(t){if(!t)if(Fr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dT(t)}const yT=/^[^#]+#/;function vT(t,e){return t.replace(yT,"#")+e}function ET(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Da=()=>({left:window.pageXOffset,top:window.pageYOffset});function wT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ET(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ad(t,e){return(history.state?history.state.position-e:-1)+t}const uc=new Map;function TT(t,e){uc.set(t,e)}function IT(t){const e=uc.get(t);return uc.delete(t),e}let AT=()=>location.protocol+"//"+location.host;function wg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),Td(a,"")}return Td(n,t)+r+s}function bT(t,e,n,r){let s=[],i=[],o=null;const l=({state:d})=>{const f=wg(t,location),y=n.value,v=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===y){o=null;return}E=v?d.position-v.position:0}else r(f);s.forEach(R=>{R(n.value,y,{delta:E,type:li.pop,direction:E?E>0?Ks.forward:Ks.back:Ks.unknown})})};function a(){o=n.value}function c(d){s.push(d);const f=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:Da()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function bd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Da():null}}function RT(t){const{history:e,location:n}=window,r={value:wg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:AT()+t+a;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(a,c){const u=we({},e.state,bd(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});i(a,u,!0),r.value=a}function l(a,c){const u=we({},s.value,e.state,{forward:a,scroll:Da()});i(u.current,u,!0);const h=we({},bd(r.value,a,null),{position:u.position+1},c);i(a,h,!1),r.value=a}return{location:r,state:s,push:l,replace:o}}function PT(t){t=_T(t);const e=RT(t),n=bT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:vT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ST(t){return typeof t=="string"||t&&typeof t=="object"}function Tg(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ig=Symbol("");var Rd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rd||(Rd={}));function ss(t,e){return we(new Error,{type:t,[Ig]:!0},e)}function hn(t,e){return t instanceof Error&&Ig in t&&(e==null||!!(t.type&e))}const Pd="[^/]+?",CT={sensitive:!1,strict:!1,start:!0,end:!0},kT=/[.+*?^${}()[\]/\\]/g;function xT(t,e){const n=we({},CT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(kT,"\\$&"),f+=40;else if(d.type===1){const{value:y,repeatable:v,optional:E,regexp:R}=d;i.push({name:y,repeatable:v,optional:E});const k=R||Pd;if(k!==Pd){f+=10;try{new RegExp(`(${k})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+x.message)}}let M=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(M=E&&c.length<2?`(?:/${M})`:"/"+M),E&&(M+="?"),s+=M,f+=20,E&&(f+=-8),v&&(f+=-20),k===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",y=i[d-1];h[y.name]=f&&y.repeatable?f.split("/"):f}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:y,repeatable:v,optional:E}=f,R=y in c?c[y]:"";if($t(R)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=$t(R)?R.join("/"):R;if(!k)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:l,stringify:a}}function DT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function OT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Sd(r))return 1;if(Sd(s))return-1}return s.length-r.length}function Sd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NT={type:0,value:""},VT=/[a-zA-Z0-9_]/;function MT(t){if(!t)return[[]];if(t==="/")return[[NT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,a,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:a==="("?n=2:VT.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function LT(t,e,n){const r=xT(MT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function UT(t,e){const n=[],r=new Map;e=xd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,y=FT(u);y.aliasOf=d&&d.record;const v=xd(e,u),E=[y];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of M)E.push(we({},y,{components:d?d.record.components:y.components,path:x,aliasOf:d?d.record:y}))}let R,k;for(const M of E){const{path:x}=M;if(h&&x[0]!=="/"){const J=h.record.path,$=J[J.length-1]==="/"?"":"/";M.path=h.record.path+(x&&$+x)}if(R=LT(M,h,v),d?d.alias.push(R):(k=k||R,k!==R&&k.alias.push(R),f&&u.name&&!kd(R)&&o(u.name)),y.children){const J=y.children;for(let $=0;$<J.length;$++)i(J[$],R,d&&d.children[$])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&a(R)}return k?()=>{o(k)}:Ws}function o(u){if(Tg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&OT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ag(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!kd(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},y,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ss(1,{location:u});v=d.record.name,f=we(Cd(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Cd(u.params,d.keys.map(k=>k.name))),y=d.stringify(f)}else if("path"in u)y=u.path,d=n.find(k=>k.re.test(y)),d&&(f=d.parse(y),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw ss(1,{location:u,currentLocation:h});v=d.record.name,f=we({},h.params,u.params),y=d.stringify(f)}const E=[];let R=d;for(;R;)E.unshift(R.record),R=R.parent;return{name:v,path:y,params:f,matched:E,meta:BT(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function Cd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function FT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$T(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $T(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function kd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function xd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ag(t,e){return e.children.some(n=>n===t||Ag(t,n))}const bg=/#/g,jT=/&/g,qT=/\//g,HT=/=/g,zT=/\?/g,Rg=/\+/g,WT=/%5B/g,KT=/%5D/g,Pg=/%5E/g,GT=/%60/g,Sg=/%7B/g,QT=/%7C/g,Cg=/%7D/g,JT=/%20/g;function _u(t){return encodeURI(""+t).replace(QT,"|").replace(WT,"[").replace(KT,"]")}function XT(t){return _u(t).replace(Sg,"{").replace(Cg,"}").replace(Pg,"^")}function hc(t){return _u(t).replace(Rg,"%2B").replace(JT,"+").replace(bg,"%23").replace(jT,"%26").replace(GT,"`").replace(Sg,"{").replace(Cg,"}").replace(Pg,"^")}function YT(t){return hc(t).replace(HT,"%3D")}function ZT(t){return _u(t).replace(bg,"%23").replace(zT,"%3F")}function eI(t){return t==null?"":ZT(t).replace(qT,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rg," "),o=i.indexOf("="),l=qo(o<0?i:i.slice(0,o)),a=o<0?null:qo(i.slice(o+1));if(l in e){let c=e[l];$t(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Dd(t){let e="";for(let n in t){const r=t[n];if(n=YT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&hc(i)):[r&&hc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rI=Symbol(""),Od=Symbol(""),Oa=Symbol(""),yu=Symbol(""),dc=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(ss(4,{from:n,to:e})):h instanceof Error?l(h):ST(h)?l(ss(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function Tl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(sI(l)){const c=(l.__vccOpts||l)[e];c&&s.push(xn(c,n,r,i,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=uT(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&xn(d,n,r,i,o)()}))}}return s}function sI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nd(t){const e=Ot(Oa),n=Ot(yu),r=xe(()=>e.resolve(Pe(t.to))),s=xe(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(rs.bind(null,u));if(d>-1)return d;const f=Vd(a[c-2]);return c>1&&Vd(u)===f&&h[h.length-1].path!==f?h.findIndex(rs.bind(null,a[c-2])):d}),i=xe(()=>s.value>-1&&lI(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Eg(n.params,r.value.params));function l(a={}){return aI(a)?e[Pe(t.replace)?"replace":"push"](Pe(t.to)).catch(Ws):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const iI=Ia({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nd,setup(t,{slots:e}){const n=Pi(Nd(t)),{options:r}=Ot(Oa),s=xe(()=>({[Md(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Md(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oI=iI;function aI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Md=(t,e,n)=>t??e??n,cI=Ia({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ot(dc),s=xe(()=>t.route||r.value),i=Ot(Od,0),o=xe(()=>{let c=Pe(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=xe(()=>s.value.matched[o.value]);Ro(Od,xe(()=>o.value+1)),Ro(rI,l),Ro(dc,s);const a=ue();return dr(()=>[a.value,l.value,t.name],([c,u,h],[d,f,y])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!rs(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return Ld(n.default,{Component:d,route:c});const f=h.props[u],y=f?f===!0?c.params:typeof f=="function"?f(c):f:null,E=pg(d,we({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Ld(n.default,{Component:E,route:c})||E}}});function Ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uI=cI;function hI(t){const e=UT(t.routes,t),n=t.parseQuery||tI,r=t.stringifyQuery||Dd,s=t.history,i=ks(),o=ks(),l=ks(),a=rE(Pn);let c=Pn;Fr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=El.bind(null,I=>""+I),h=El.bind(null,eI),d=El.bind(null,qo);function f(I,B){let N,W;return Tg(I)?(N=e.getRecordMatcher(I),W=B):W=I,e.addRoute(W,N)}function y(I){const B=e.getRecordMatcher(I);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(I=>I.record)}function E(I){return!!e.getRecordMatcher(I)}function R(I,B){if(B=we({},B||a.value),typeof I=="string"){const _=wl(n,I,B.path),w=e.resolve({path:_.path},B),A=s.createHref(_.fullPath);return we(_,w,{params:d(w.params),hash:qo(_.hash),redirectedFrom:void 0,href:A})}let N;if("path"in I)N=we({},I,{path:wl(n,I.path,B.path).path});else{const _=we({},I.params);for(const w in _)_[w]==null&&delete _[w];N=we({},I,{params:h(_)}),B.params=h(B.params)}const W=e.resolve(N,B),Ee=I.hash||"";W.params=u(d(W.params));const p=fT(r,we({},I,{hash:XT(Ee),path:W.path})),g=s.createHref(p);return we({fullPath:p,hash:Ee,query:r===Dd?nI(I.query):I.query||{}},W,{redirectedFrom:void 0,href:g})}function k(I){return typeof I=="string"?wl(n,I,a.value.path):we({},I)}function M(I,B){if(c!==I)return ss(8,{from:B,to:I})}function x(I){return ge(I)}function J(I){return x(we(k(I),{replace:!0}))}function $(I){const B=I.matched[I.matched.length-1];if(B&&B.redirect){const{redirect:N}=B;let W=typeof N=="function"?N(I):N;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=k(W):{path:W},W.params={}),we({query:I.query,hash:I.hash,params:"path"in W?{}:I.params},W)}}function ge(I,B){const N=c=R(I),W=a.value,Ee=I.state,p=I.force,g=I.replace===!0,_=$(N);if(_)return ge(we(k(_),{state:typeof _=="object"?we({},Ee,_.state):Ee,force:p,replace:g}),B||N);const w=N;w.redirectedFrom=B;let A;return!p&&pT(r,W,N)&&(A=ss(16,{to:w,from:W}),zt(W,W,!0,!1)),(A?Promise.resolve(A):be(w,W)).catch(P=>hn(P)?hn(P,2)?P:bn(P):ve(P,w,W)).then(P=>{if(P){if(hn(P,2))return ge(we({replace:g},k(P.to),{state:typeof P.to=="object"?we({},Ee,P.to.state):Ee,force:p}),B||w)}else P=It(w,W,!0,g,Ee);return rt(w,W,P),P})}function X(I,B){const N=M(I,B);return N?Promise.reject(N):Promise.resolve()}function se(I){const B=Dr.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(I):I()}function be(I,B){let N;const[W,Ee,p]=dI(I,B);N=Tl(W.reverse(),"beforeRouteLeave",I,B);for(const _ of W)_.leaveGuards.forEach(w=>{N.push(xn(w,I,B))});const g=X.bind(null,I,B);return N.push(g),st(N).then(()=>{N=[];for(const _ of i.list())N.push(xn(_,I,B));return N.push(g),st(N)}).then(()=>{N=Tl(Ee,"beforeRouteUpdate",I,B);for(const _ of Ee)_.updateGuards.forEach(w=>{N.push(xn(w,I,B))});return N.push(g),st(N)}).then(()=>{N=[];for(const _ of p)if(_.beforeEnter)if($t(_.beforeEnter))for(const w of _.beforeEnter)N.push(xn(w,I,B));else N.push(xn(_.beforeEnter,I,B));return N.push(g),st(N)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),N=Tl(p,"beforeRouteEnter",I,B),N.push(g),st(N))).then(()=>{N=[];for(const _ of o.list())N.push(xn(_,I,B));return N.push(g),st(N)}).catch(_=>hn(_,8)?_:Promise.reject(_))}function rt(I,B,N){l.list().forEach(W=>se(()=>W(I,B,N)))}function It(I,B,N,W,Ee){const p=M(I,B);if(p)return p;const g=B===Pn,_=Fr?history.state:{};N&&(W||g?s.replace(I.fullPath,we({scroll:g&&_&&_.scroll},Ee)):s.push(I.fullPath,Ee)),a.value=I,zt(I,B,N,g),bn()}let Ct;function er(){Ct||(Ct=s.listen((I,B,N)=>{if(!no.listening)return;const W=R(I),Ee=$(W);if(Ee){ge(we(Ee,{replace:!0}),W).catch(Ws);return}c=W;const p=a.value;Fr&&TT(Ad(p.fullPath,N.delta),Da()),be(W,p).catch(g=>hn(g,12)?g:hn(g,2)?(ge(g.to,W).then(_=>{hn(_,20)&&!N.delta&&N.type===li.pop&&s.go(-1,!1)}).catch(Ws),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ve(g,W,p))).then(g=>{g=g||It(W,p,!1),g&&(N.delta&&!hn(g,8)?s.go(-N.delta,!1):N.type===li.pop&&hn(g,20)&&s.go(-1,!1)),rt(W,p,g)}).catch(Ws)}))}let kt=ks(),_e=ks(),Ae;function ve(I,B,N){bn(I);const W=_e.list();return W.length?W.forEach(Ee=>Ee(I,B,N)):console.error(I),Promise.reject(I)}function un(){return Ae&&a.value!==Pn?Promise.resolve():new Promise((I,B)=>{kt.add([I,B])})}function bn(I){return Ae||(Ae=!I,er(),kt.list().forEach(([B,N])=>I?N(I):B()),kt.reset()),I}function zt(I,B,N,W){const{scrollBehavior:Ee}=t;if(!Fr||!Ee)return Promise.resolve();const p=!N&&IT(Ad(I.fullPath,0))||(W||!N)&&history.state&&history.state.scroll||null;return lu().then(()=>Ee(I,B,p)).then(g=>g&&wT(g)).catch(g=>ve(g,I,B))}const vt=I=>s.go(I);let xr;const Dr=new Set,no={currentRoute:a,listening:!0,addRoute:f,removeRoute:y,hasRoute:E,getRoutes:v,resolve:R,options:t,push:x,replace:J,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:_e.add,isReady:un,install(I){const B=this;I.component("RouterLink",oI),I.component("RouterView",uI),I.config.globalProperties.$router=B,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(a)}),Fr&&!xr&&a.value===Pn&&(xr=!0,x(s.location).catch(Ee=>{}));const N={};for(const Ee in Pn)Object.defineProperty(N,Ee,{get:()=>a.value[Ee],enumerable:!0});I.provide(Oa,B),I.provide(yu,Fp(N)),I.provide(dc,a);const W=I.unmount;Dr.add(I),I.unmount=function(){Dr.delete(I),Dr.size<1&&(c=Pn,Ct&&Ct(),Ct=null,a.value=Pn,xr=!1,Ae=!1),W()}}};function st(I){return I.reduce((B,N)=>B.then(()=>se(N)),Promise.resolve())}return no}function dI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(c=>rs(c,l))?r.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>rs(c,a))||s.push(a))}return[n,r,s]}function fI(){return Ot(Oa)}function Si(){return Ot(yu)}const kg="/assets/pc-609054bf.png",xg="/assets/about-496d3e3f.png",Dg="/assets/skill-b1993387.png",Og="/assets/contact-d5a2c51b.png";function pI(t){return Xc()?(Sp(t),!0):!1}function fn(t){return typeof t=="function"?t():Pe(t)}const Ng=typeof window<"u",gI=()=>{};var mI=Object.defineProperty,_I=Object.defineProperties,yI=Object.getOwnPropertyDescriptors,Ud=Object.getOwnPropertySymbols,vI=Object.prototype.hasOwnProperty,EI=Object.prototype.propertyIsEnumerable,Fd=(t,e,n)=>e in t?mI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,wI=(t,e)=>{for(var n in e||(e={}))vI.call(e,n)&&Fd(t,n,e[n]);if(Ud)for(var n of Ud(e))EI.call(e,n)&&Fd(t,n,e[n]);return t},TI=(t,e)=>_I(t,yI(e));function II(t,e={}){if(!Ue(t))return Hp(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const r in t.value)n[r]=aE(()=>({get(){return t.value[r]},set(s){var i;if((i=fn(e.replaceRef))!=null?i:!0)if(Array.isArray(t.value)){const l=[...t.value];l[r]=s,t.value=l}else{const l=TI(wI({},t.value),{[r]:s});Object.setPrototypeOf(l,Object.getPrototypeOf(t.value)),t.value=l}else t.value[r]=s}}));return n}function AI(t){var e;const n=fn(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Vg=Ng?window:void 0;function Il(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Vg):[e,n,r,s]=t,!e)return gI;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},l=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),a=dr(()=>[AI(e),fn(s)],([u,h])=>{o(),u&&i.push(...n.flatMap(d=>r.map(f=>l(u,d,f,h))))},{immediate:!0,flush:"post"}),c=()=>{a(),o()};return pI(c),c}var bI=Object.defineProperty,RI=Object.defineProperties,PI=Object.getOwnPropertyDescriptors,$d=Object.getOwnPropertySymbols,SI=Object.prototype.hasOwnProperty,CI=Object.prototype.propertyIsEnumerable,Bd=(t,e,n)=>e in t?bI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kI=(t,e)=>{for(var n in e||(e={}))SI.call(e,n)&&Bd(t,n,e[n]);if($d)for(var n of $d(e))CI.call(e,n)&&Bd(t,n,e[n]);return t},xI=(t,e)=>RI(t,PI(e));function Mg(t,e={}){var n,r;const{pointerTypes:s,preventDefault:i,stopPropagation:o,exact:l,onMove:a,onEnd:c,onStart:u,initialValue:h,axis:d="both",draggingElement:f=Vg,handle:y=t}=e,v=ue((n=fn(h))!=null?n:{x:0,y:0}),E=ue(),R=$=>s?s.includes($.pointerType):!0,k=$=>{fn(i)&&$.preventDefault(),fn(o)&&$.stopPropagation()},M=$=>{if(!R($)||fn(l)&&$.target!==fn(t))return;const ge=fn(t).getBoundingClientRect(),X={x:$.clientX-ge.left,y:$.clientY-ge.top};(u==null?void 0:u(X,$))!==!1&&(E.value=X,k($))},x=$=>{if(!R($)||!E.value)return;let{x:ge,y:X}=v.value;(d==="x"||d==="both")&&(ge=$.clientX-E.value.x),(d==="y"||d==="both")&&(X=$.clientY-E.value.y),v.value={x:ge,y:X},a==null||a(v.value,$),k($)},J=$=>{R($)&&E.value&&(E.value=void 0,c==null||c(v.value,$),k($))};if(Ng){const $={capture:(r=e.capture)!=null?r:!0};Il(y,"pointerdown",M,$),Il(f,"pointermove",x,$),Il(f,"pointerup",J,$)}return xI(kI({},II(v)),{position:v,isDragging:xe(()=>!!E.value),style:xe(()=>`left:${v.value.x}px;top:${v.value.y}px;`)})}const DI=Ia({__name:"draggable",props:{index:Number},setup(t){const{index:e}=t,n=Ht(),r=ue(null),s=xe(()=>n.getWindows.find((c,u)=>u===e)),{x:i,y:o,style:l}=Mg(r,{initialValue:{x:s.value.x,y:s.value.y}}),a=()=>{n.changeXY(i,o,e)};return dr([i,o],()=>{a()}),(c,u)=>(T(),ie("div",{ref_key:"el",ref:r,style:Ar([Pe(l),{zIndex:s.value.zIndex},{position:"fixed"}])},[hu(c.$slots,"window")],4))}}),Lg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfKSURBVHgB7d1bjF1lGQbgb81MESwZCFouCIpyIcSeVIKHGBMiEkRFxVpbJMRoVBJjvPJOExNjxECiUUmMRIiJUdtU44krDSJCgwoUaCmC5QJthVLsmU6Ps5dDQnD9P+ked2eGmW/mee7etddqmnbe/fXr3nvtCAAAAAAAAAAAAAAAAAAAAAAAAJhdTX3gHde1o9081ouvFRf04orqksXBSbVDcaTIEQ9088RfwI3dvOXnzeMB/6ehANJSYEhMgSGx5s2r23O6B0aG4v7yjLgwmElj3dA28b5untiJ7ws4CRMYElNgSEyBIbFm+dr2tuJAxGe6+fzzyws+fFWZR0eDPsbGynzXn8u8ZWt1QS92dOOJNlZ282Mbmj0BLzKBITEFhsQUGBIbmdh5P9rvhE+uKvOSJTGQXlvm4+P9H59vXn1mmVd9rMx7D5R5x/Yo/tdhqI1byzPi4wEvMoEhMQWGxBQYEmtWrG37bqE3fyMGcvREmfcfKfM8X3kHdmB/mX98e5mPHX3ZJZ/ths3rmtuCBcsEhsQUGBJTYEhsJKao3qAPVDubnbe/0bPKfGX1XvPf/brME3/e3+3mFavbe7t584bmiWDBMIEhMQWGxBQYEpvyDnyiV+b5/t7mmXbRxWV+cmmZ/761vA93Oxy/6OZla9sPdPOj65rtwbxlAkNiCgyJKTAkNuUdmJl1xZVl3rWzzLt3x7JubiL+2c0r1rT/Kq+I6hPZC96hKt/ZDcO9+GY3P7SheS7mEBMYElNgSEyBIbEpfx64vsfVnsPBDDpUbWx//EOZt/2jzL1eMAUT5XiqODAUb+vGLT9r9sYsMoEhMQWGxBQYEvM6cDKLF5f56uqu3ieqe5KNVTvzSPWUPXp6LGgHqvty/+qOMj/zTLyhODAeN1W/xOdiFpnAkJgCQ2IKDInZgeeZkepvtL7n1stUT+GnV9cPNTGvnV79n8JVV5f59vqbqZq4pjpiBwZOjQJDYgoMidmBF7j6nmbPH4sF7ZxzJj3lNTGHmMCQmAJDYgoMiSkwJKbAkJgCQ2IKDIl5HRj6OKP6vPShw/GfmENMYEhMgSExBYbE7MDQx/WfLvOPfhCXxhxiAkNiCgyJKTAkZgeGPup7ij28rnkq5hATGBJTYEhMgSExBYbEFBgSU2BITIEhsTn/OvDYWJl3bC/z4cMBr5jla9rPxzRqhmJ3cWAk7unGzT9pdvW73gSGxBQYElNgSGzO7cAPbSrz3XeV+cTxgFnTNPHDmE5tlY9H8e1UK9a0X+3mzeubm7vZBIbEFBgSU2BIbNZ34Ce3lfnO35d5YucoLLuozOdO/n2uMGc9W74KHI9ti9O6eWJFvqmbV1zbPt7NJjAkpsCQmAJDYrO+A2+8p//jn1pV5svfHTBvtNXrwL/5U5l/+dvqgl58vRtNYEhMgSExBYbEZn0H3j3Jt62+Z8Bvoql3iuer904fGy9zL2D29Kqf10veUuZ6B544fWk3m8CQmAJDYgoMic36DtybZAk97bQYyL6jZT46HpDGokl+3psmFnWzCQyJKTAkpsCQWPrvBx6vdmg7LwuJCQyJKTAkpsCQWP4duB3s/J3Plnmoego7d0kM5PCRMv/76TK3g77ZuroH2HnnlXnxGQEvMYEhMQWGxBQYEku/A09mV/Xtqt++pTqh2jm/8uUynzUaff10fZmf2BbT6oLXlfmLNwS8xASGxBQYElNgSGze78BnnV3mlcvLPDxc5jMXx0BWLitzb8DXpSez9OKAkzKBITEFhsQUGBKb9zvwq6p7DF33iZhWl17SP8NMMoEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSm/fvha7V94U+eDBm1KJFZb7g9WVumoBTZgJDYgoMiSkwJLbg7wvdTvM9rCaz6iNlfuelAafMBIbEFBgSU2BIbMHfF/rQWMyokeop8o0XBEwbExgSU2BITIEhMfeFhsRMYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxEZiio73ApglJjAkpsCQmAJDYiNtG/u6B5omzu7mnc+VF4yeXeZDR2Mg+/f1f3zxGQEL1p69k5zQRnGGCQyJKTAkpsCQ2MjEv6k3Fkea+GA33n1fecFl740p2bSp/+NvujBgwdr4l/6P9yLu7WYTGBJTYEhMgSGxkeGIG7sHxiPe380P3h/D3XzsWPkLLF1e5qYt89ZHy7z5ker86inkQ5fHQNpJHh8bK/PhAV+3hul08ECZH3y4zH99oMxtG+WnDZr4VjeawJCYAkNiCgyJNfWBlde2N3Rzr41bqgum9BnioeEyX39NucZe9q6+l7/w+ynsP/bC2v4/T+8qH//O98vf7/h4wJzVRvnzPHHgC924ZX1zazebwJCYAkNiCgyJNZOdsHRNu7Kbh5r4UnXK26O/v3XDxA77vW7eur55JKbRW1e3S7r5+HDc0c1Dbbw2YJa0TVTvTJhaP0xgSEyBITEFBgAAAAAAAAAAAAAAAAAAAAAAAOCU/RePsFqZef2t2wAAAABJRU5ErkJggg==",OI={class:"flex items-center gap-1 cursor-move"},NI=Sa('<div class="flex flex-col w-[30px] justify-between gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),VI=Sa('<div class="flex flex-col w-full gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),MI={class:"text-2xl text-primary"},LI=Sa('<div class="basis-1/2"><div class="flex flex-col gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div></div>',1),UI=m("div",{class:"flex flex-col w-full justify-between gap-1 mt-2"},[m("div",{class:"border border-primary"})],-1),Ci={__name:"windowHeader",props:{title:String,window:String},setup(t){const{title:e,window:n}=t,r=Ht(),s=()=>{r.removeWidow(n)};return(i,o)=>(T(),ie("div",null,[m("div",OI,[m("div",{class:"basis-1/2"},[m("div",{class:"flex gap-2 items-center h-[35px]"},[NI,m("div",{class:"border-2 border-primary h-[26px] w-[35px] cursor-pointer hover:bg-primary",onClick:s}),VI])]),m("div",MI,zn(t.title),1),LI]),UI]))}};/**
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
 */const Ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},FI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||h==null)throw new $I;const d=i<<2|l>>4;if(r.push(d),c!==64){const f=l<<4&240|c>>2;if(r.push(f),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BI=function(t){const e=Ug(t);return Fg.encodeByteArray(e,!0)},Ho=function(t){return BI(t).replace(/\./g,"")},$g=function(t){try{return Fg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qI=()=>jI().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$g(t[1]);return e&&JSON.parse(e)},Na=()=>{try{return qI()||HI()||zI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bg=t=>{var e,n;return(n=(e=Na())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jg=t=>{const e=Bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qg=()=>{var t;return(t=Na())===null||t===void 0?void 0:t.config},Hg=t=>{var e;return(e=Na())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class WI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),l].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function GI(){var t;const e=(t=Na())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const e0="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=e0,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?t0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cn(s,l,r)}}function t0(t,e){return t.replace(n0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const n0=/\{\$([^}]+)}/g;function r0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jd(i)&&jd(o)){if(!zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jd(t){return t!==null&&typeof t=="object"}/**
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
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function s0(t,e){const n=new i0(t,e);return n.subscribe.bind(n)}class i0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");o0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Al),s.error===void 0&&(s.error=Al),s.complete===void 0&&(s.complete=Al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Al(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rr="[DEFAULT]";/**
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
 */class a0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c0(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:l0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l0(t){return t===rr?void 0:t}function c0(t){return t.instantiationMode==="EAGER"}/**
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
 */class u0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new a0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const h0={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},d0=me.INFO,f0={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},p0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=f0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vu{constructor(e){this.name=e,this._logLevel=d0,this._logHandler=p0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const g0=(t,e)=>e.some(n=>t instanceof n);let qd,Hd;function m0(){return qd||(qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _0(){return Hd||(Hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wg=new WeakMap,fc=new WeakMap,Kg=new WeakMap,bl=new WeakMap,Eu=new WeakMap;function y0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wg.set(n,t)}).catch(()=>{}),Eu.set(e,t),e}function v0(t){if(fc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fc.set(t,e)}let pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E0(t){pc=t(pc)}function w0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rl(this),e,...n);return Kg.set(r,e.sort?e.sort():[e]),Bn(r)}:_0().includes(t)?function(...e){return t.apply(Rl(this),e),Bn(Wg.get(this))}:function(...e){return Bn(t.apply(Rl(this),e))}}function T0(t){return typeof t=="function"?w0(t):(t instanceof IDBTransaction&&v0(t),g0(t,m0())?new Proxy(t,pc):t)}function Bn(t){if(t instanceof IDBRequest)return y0(t);if(bl.has(t))return bl.get(t);const e=T0(t);return e!==t&&(bl.set(t,e),Eu.set(e,t)),e}const Rl=t=>Eu.get(t);function I0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Bn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Bn(o.result),a.oldVersion,a.newVersion,Bn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const A0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],Pl=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pl.get(e))return Pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=b0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||A0.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Pl.set(e,i),i}E0(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
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
 */class R0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(P0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function P0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gc="@firebase/app",Wd="0.9.15";/**
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
 */const _r=new vu("@firebase/app"),S0="@firebase/app-compat",C0="@firebase/analytics-compat",k0="@firebase/analytics",x0="@firebase/app-check-compat",D0="@firebase/app-check",O0="@firebase/auth",N0="@firebase/auth-compat",V0="@firebase/database",M0="@firebase/database-compat",L0="@firebase/functions",U0="@firebase/functions-compat",F0="@firebase/installations",$0="@firebase/installations-compat",B0="@firebase/messaging",j0="@firebase/messaging-compat",q0="@firebase/performance",H0="@firebase/performance-compat",z0="@firebase/remote-config",W0="@firebase/remote-config-compat",K0="@firebase/storage",G0="@firebase/storage-compat",Q0="@firebase/firestore",J0="@firebase/firestore-compat",X0="firebase",Y0="10.1.0";/**
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
 */const mc="[DEFAULT]",Z0={[gc]:"fire-core",[S0]:"fire-core-compat",[k0]:"fire-analytics",[C0]:"fire-analytics-compat",[D0]:"fire-app-check",[x0]:"fire-app-check-compat",[O0]:"fire-auth",[N0]:"fire-auth-compat",[V0]:"fire-rtdb",[M0]:"fire-rtdb-compat",[L0]:"fire-fn",[U0]:"fire-fn-compat",[F0]:"fire-iid",[$0]:"fire-iid-compat",[B0]:"fire-fcm",[j0]:"fire-fcm-compat",[q0]:"fire-perf",[H0]:"fire-perf-compat",[z0]:"fire-rc",[W0]:"fire-rc-compat",[K0]:"fire-gcs",[G0]:"fire-gcs-compat",[Q0]:"fire-fst",[J0]:"fire-fst-compat","fire-js":"fire-js",[X0]:"fire-js-all"};/**
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
 */const Wo=new Map,_c=new Map;function eA(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yr(t){const e=t.name;if(_c.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,t);for(const n of Wo.values())eA(n,t);return!0}function Va(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new ki("app","Firebase",tA);/**
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
 */class nA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Rr=Y0;function Gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=qg()),!n)throw jn.create("no-options");const i=Wo.get(s);if(i){if(zo(n,i.options)&&zo(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new u0(s);for(const a of _c.values())o.addComponent(a);const l=new nA(n,r,o);return Wo.set(s,l),l}function wu(t=mc){const e=Wo.get(t);if(!e&&t===mc&&qg())return Gg();if(!e)throw jn.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=Z0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(l.join(" "));return}yr(new Gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rA="firebase-heartbeat-database",sA=1,ci="firebase-heartbeat-store";let Sl=null;function Qg(){return Sl||(Sl=I0(rA,sA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Sl}async function iA(t){try{return await(await Qg()).transaction(ci).objectStore(ci).get(Jg(t))}catch(e){if(e instanceof cn)_r.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function Kd(t,e){try{const r=(await Qg()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Jg(t)),await r.done}catch(n){if(n instanceof cn)_r.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function Jg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oA=1024,aA=30*24*60*60*1e3;class lA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=aA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gd(),{heartbeatsToSend:n,unsentEntries:r}=cA(this._heartbeatsCache.heartbeats),s=Ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gd(){return new Date().toISOString().substring(0,10)}function cA(t,e=oA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qd(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hA(t){yr(new Gn("platform-logger",e=>new R0(e),"PRIVATE")),yr(new Gn("heartbeat",e=>new lA(e),"PRIVATE")),en(gc,Wd,t),en(gc,Wd,"esm2017"),en("fire-js","")}hA("");var dA="firebase",fA="10.1.0";/**
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
 */en(dA,fA,"app");const pA={apiKey:"AIzaSyAEwjoIl-E81MokY0kca3Ja6FI0OskM0U8",authDomain:"portfolio-alex-3fb76.firebaseapp.com",projectId:"portfolio-alex-3fb76",storageBucket:"portfolio-alex-3fb76.appspot.com",messagingSenderId:"26566659416",appId:"1:26566659416:web:c8d5ab20df4074625e292d",measurementId:"G-47XEF5R8MH"},Di=Gg(pA);var gA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Tu=Tu||{},te=gA||self;function Ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Oi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mA(t){return Object.prototype.hasOwnProperty.call(t,Cl)&&t[Cl]||(t[Cl]=++_A)}var Cl="closure_uid_"+(1e9*Math.random()>>>0),_A=0;function yA(t,e,n){return t.call.apply(t.bind,arguments)}function vA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=yA:ut=vA,ut.apply(null,arguments)}function co(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(r,o)}}function Yn(){this.s=this.s,this.o=this.o}var EA=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),EA!=0)&&mA(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Iu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ma(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var wA=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function ui(t){return/^[\s\xa0]*$/.test(t)}function La(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return La().indexOf(t)!=-1}function Au(t){return Au[" "](t),t}Au[" "]=function(){};function TA(t,e){var n=pb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var IA=Jt("Opera"),is=Jt("Trident")||Jt("MSIE"),Yg=Jt("Edge"),yc=Yg||is,Zg=Jt("Gecko")&&!(La().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),AA=La().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function em(){var t=te.document;return t?t.documentMode:void 0}var vc;e:{var kl="",xl=function(){var t=La();if(Zg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yg)return/Edge\/([\d\.]+)/.exec(t);if(is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AA)return/WebKit\/(\S+)/.exec(t);if(IA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xl&&(kl=xl?xl[1]:""),is){var Dl=em();if(Dl!=null&&Dl>parseFloat(kl)){vc=String(Dl);break e}}vc=kl}var Ec;if(te.document&&is){var Xd=em();Ec=Xd||parseInt(vc,10)||void 0}else Ec=void 0;var bA=Ec;function hi(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zg){e:{try{Au(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hi.$.h.call(this)}}Je(hi,ht);var RA={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ni="closure_listenable_"+(1e6*Math.random()|0),PA=0;function SA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++PA,this.fa=this.ia=!1}function Ua(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function CA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tm(t){const e={};for(const n in t)e[n]=t[n];return e}const Yd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Yd.length;i++)n=Yd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fa(t){this.src=t,this.g={},this.h=0}Fa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Tc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function wc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Xg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ua(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ru="closure_lm_"+(1e6*Math.random()|0),Ol={};function rm(t,e,n,r,s){if(r&&r.once)return im(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);return null}return n=Cu(n),t&&t[Ni]?t.O(e,n,Oi(r)?!!r.capture:!!r,s):sm(t,e,n,!1,r,s)}function sm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Oi(s)?!!s.capture:!!s,l=Su(t);if(l||(t[Ru]=l=new Fa(t)),n=l.add(e,n,r,o,i),n.proxy)return n;if(r=kA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(am(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kA(){function t(n){return e.call(t.src,t.listener,n)}const e=xA;return t}function im(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)im(t,e[i],n,r,s);return null}return n=Cu(n),t&&t[Ni]?t.P(e,n,Oi(r)?!!r.capture:!!r,s):sm(t,e,n,!0,r,s)}function om(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)om(t,e[i],n,r,s);else r=Oi(r)?!!r.capture:!!r,n=Cu(n),t&&t[Ni]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Tc(i,n,r,s),-1<n&&(Ua(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Su(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tc(e,n,r,s)),(n=-1<t?e[t]:null)&&Pu(n))}function Pu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ni])wc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(am(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Su(e))?(wc(n,t),n.h==0&&(n.src=null,e[Ru]=null)):Ua(t)}}}function am(t){return t in Ol?Ol[t]:Ol[t]="on"+t}function xA(t,e){if(t.fa)t=!0;else{e=new hi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Pu(t),t=n.call(r,e)}return t}function Su(t){return t=t[Ru],t instanceof Fa?t:null}var Nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cu(t){return typeof t=="function"?t:(t[Nl]||(t[Nl]=function(e){return t.handleEvent(e)}),t[Nl])}function Qe(){Yn.call(this),this.i=new Fa(this),this.S=this,this.J=null}Je(Qe,Yn);Qe.prototype[Ni]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){om(this,t,e,n,r)};function tt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var s=e;e=new ht(r,t),nm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=uo(o,r,!0,e)&&s}if(o=e.g=t,s=uo(o,r,!0,e)&&s,s=uo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=uo(o,r,!1,e)&&s}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ua(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&wc(t.i,o),s=l.call(a,r)!==!1&&s}}return s&&!r.defaultPrevented}var ku=te.JSON.stringify;class DA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function OA(){var t=xu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NA{constructor(){this.h=this.g=null}add(e,n){const r=lm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lm=new DA(()=>new VA,t=>t.reset());class VA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function LA(t){te.setTimeout(()=>{throw t},0)}let di,fi=!1,xu=new NA,cm=()=>{const t=te.Promise.resolve(void 0);di=()=>{t.then(UA)}};var UA=()=>{for(var t;t=OA();){try{t.h.call(t.g)}catch(n){LA(n)}var e=lm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fi=!1};function $a(t,e){Qe.call(this),this.h=t||1,this.g=e||te,this.j=ut(this.qb,this),this.l=Date.now()}Je($a,Qe);V=$a.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(Du(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Du(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){$a.$.N.call(this),Du(this),delete this.g};function Ou(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function um(t){t.g=Ou(()=>{t.g=null,t.i&&(t.i=!1,um(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FA extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:um(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Yn.call(this),this.h=t,this.g={}}Je(pi,Yn);var Zd=[];function hm(t,e,n,r){Array.isArray(n)||(n&&(Zd[0]=n.toString()),n=Zd);for(var s=0;s<n.length;s++){var i=rm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dm(t){bu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pu(e)},t),t.g={}}pi.prototype.N=function(){pi.$.N.call(this),dm(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ba(){this.g=!0}Ba.prototype.Ea=function(){this.g=!1};function $A(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",l=i.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function BA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function qr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qA(t,n)+(r?" "+r:"")})}function jA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ba.prototype.info=function(){};function qA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ku(n)}catch{return e}}var Pr={},ef=null;function ja(){return ef=ef||new Qe}Pr.Ta="serverreachability";function fm(t){ht.call(this,Pr.Ta,t)}Je(fm,ht);function gi(t){const e=ja();tt(e,new fm(e))}Pr.STAT_EVENT="statevent";function pm(t,e){ht.call(this,Pr.STAT_EVENT,t),this.stat=e}Je(pm,ht);function _t(t){const e=ja();tt(e,new pm(e,t))}Pr.Ua="timingevent";function gm(t,e){ht.call(this,Pr.Ua,t),this.size=e}Je(gm,ht);function Vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Nu(){}Nu.prototype.h=null;function tf(t){return t.h||(t.h=t.i())}function _m(){}var Mi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vu(){ht.call(this,"d")}Je(Vu,ht);function Mu(){ht.call(this,"c")}Je(Mu,ht);var Ic;function Ha(){}Je(Ha,Nu);Ha.prototype.g=function(){return new XMLHttpRequest};Ha.prototype.i=function(){return{}};Ic=new Ha;function Li(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pi(this),this.P=HA,t=yc?125:void 0,this.V=new $a(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ym}function ym(){this.i=null,this.g="",this.h=!1}var HA=45e3,Ac={},Ko={};V=Li.prototype;V.setTimeout=function(t){this.P=t};function bc(t,e,n){t.L=1,t.v=Wa(vn(e)),t.s=n,t.S=!0,vm(t,null)}function vm(t,e){t.G=Date.now(),Ui(t),t.A=vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Pm(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ym,t.g=Gm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new FA(ut(t.Pa,t,t.g),t.O)),hm(t.U,t.g,"readystatechange",t.nb),e=t.I?tm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),gi(),$A(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||yc||this.g&&(this.h.h||this.g.ja()||of(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?gi(3):gi(2)),za(this);var n=this.g.da();this.ca=n;t:if(Em(this)){var r=of(this.g);t="";var s=r.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),Gs(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ui(l)){var c=l;break t}}c=null}if(n=c)qr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rc(this,n);else{this.i=!1,this.o=3,_t(12),lr(this),Gs(this);break e}}this.S?(wm(this,u,o),yc&&this.i&&u==3&&(hm(this.U,this.V,"tick",this.mb),this.V.start())):(qr(this.j,this.m,o,null),Rc(this,o)),u==4&&lr(this),this.i&&!this.J&&(u==4?Hm(this.l,this):(this.i=!1,Ui(this)))}else hb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),lr(this),Gs(this)}}}catch{}finally{}};function Em(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wm(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=zA(t,n),s==Ko){e==4&&(t.o=4,_t(14),r=!1),qr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ac){t.o=4,_t(15),qr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qr(t.j,t.m,s,null),Rc(t,s);Em(t)&&s!=Ko&&s!=Ac&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ju(e),e.M=!0,_t(11))):(qr(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),Gs(t))}V.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.C<e.length&&(za(this),wm(this,t,e),this.i&&t!=4&&Ui(this))}};function zA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ko:(n=Number(e.substring(n,r)),isNaN(n)?Ac:(r+=1,r+n>e.length?Ko:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,lr(this)};function Ui(t){t.Y=Date.now()+t.P,Tm(t,t.P)}function Tm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vi(ut(t.lb,t),e)}function za(t){t.B&&(te.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jA(this.j,this.A),this.L!=2&&(gi(),_t(17)),lr(this),this.o=2,Gs(this)):Tm(this,this.Y-t)};function Gs(t){t.l.H==0||t.J||Hm(t.l,t)}function lr(t){za(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Du(t.V),dm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Rc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pc(n.i,t))){if(!t.K&&Pc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jo(n),Qa(n);else break e;Bu(n),_t(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vi(ut(n.ib,n),6e3));if(1>=km(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else cr(n,11)}else if((t.K||n.g==t)&&Jo(n),!ui(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Lu(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ce(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Km(r,r.J?r.pa:null,r.Y),o.K){xm(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(za(l),Ui(l)),r.g=o}else jm(r);0<n.j.length&&Ja(n)}else c[0]!="stop"&&c[0]!="close"||cr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?cr(n,7):$u(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}gi(4)}catch{}}function WA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ma(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Im(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KA(t),r=WA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pr){this.h=t.h,Go(this,t.j),this.s=t.s,this.g=t.g,Qo(this,t.m),this.l=t.l;var e=t.i,n=new mi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nf(this,n),this.o=t.o}else t&&(e=String(t).match(Am))?(this.h=!1,Go(this,e[1]||"",!0),this.s=Us(e[2]||""),this.g=Us(e[3]||"",!0),Qo(this,e[4]),this.l=Us(e[5]||"",!0),nf(this,e[6]||"",!0),this.o=Us(e[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,rf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?XA:JA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,ZA)),t.join("")};function vn(t){return new pr(t)}function Go(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nf(t,e,n){e instanceof mi?(t.i=e,eb(t.i,t.h)):(n||(e=Fs(e,YA)),t.i=new mi(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Wa(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rf=/[#\/\?@]/g,JA=/[#\?:]/g,XA=/[#\?]/g,YA=/[#\?@]/g,ZA=/#/g;function mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zn(t){t.g||(t.g=new Map,t.h=0,t.i&&GA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=mi.prototype;V.add=function(t,e){Zn(this),this.i=null,t=ys(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bm(t,e){Zn(t),e=ys(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Rm(t,e){return Zn(t),e=ys(t,e),t.g.has(e)}V.forEach=function(t,e){Zn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Zn(this);let e=[];if(typeof t=="string")Rm(this,t)&&(e=e.concat(this.g.get(ys(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Zn(this),this.i=null,t=ys(this,t),Rm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pm(t,e,n){bm(t,e),0<n.length&&(t.i=null,t.g.set(ys(t,e),Iu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ys(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eb(t,e){e&&!t.j&&(Zn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(bm(this,r),Pm(this,s,n))},t)),t.j=e}var tb=class{constructor(t,e){this.g=t,this.map=e}};function Sm(t){this.l=t||nb,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nb=10;function Cm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function km(t){return t.h?1:t.g?t.g.size:0}function Pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lu(t,e){t.g?t.g.add(e):t.h=e}function xm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sm.prototype.cancel=function(){if(this.i=Dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Iu(t.i)}var rb=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function sb(){this.g=new rb}function ib(t,e,n){const r=n||"";try{Im(t,function(s,i){let o=s;Oi(s)&&(o=ku(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ob(t,e){const n=new Ba;if(te.Image){const r=new Image;r.onload=co(ho,n,r,"TestLoadImage: loaded",!0,e),r.onerror=co(ho,n,r,"TestLoadImage: error",!1,e),r.onabort=co(ho,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=co(ho,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ho(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Fi(t){this.l=t.fc||null,this.j=t.ob||!1}Je(Fi,Nu);Fi.prototype.g=function(){return new Ka(this.l,this.j)};Fi.prototype.i=function(t){return function(){return t}}({});function Ka(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Ka,Qe);var Uu=0;V=Ka.prototype;V.open=function(t,e){if(this.readyState!=Uu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_i(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=Uu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Om(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Om(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$i(this):_i(this),this.readyState==3&&Om(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,$i(this))};V.Ya=function(t){this.g&&(this.response=t,$i(this))};V.ka=function(){this.g&&$i(this)};function $i(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_i(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ab=te.JSON.parse;function Fe(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nm,this.L=this.M=!1}Je(Fe,Qe);var Nm="",lb=/^https?$/i,cb=["POST","PUT"];V=Fe.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ic.g(),this.C=this.u?tf(this.u):tf(Ic),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=Xg(cb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lm(this),0<this.B&&((this.L=ub(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Ou(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sf(this,i)}};function ub(t){return is&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Tu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function sf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vm(t),Ga(t)}function Vm(t){t.F||(t.F=!0,tt(t,"complete"),tt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),Ga(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ga(this,!0)),Fe.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Mm(this):this.kb())};V.kb=function(){Mm(this)};function Mm(t){if(t.h&&typeof Tu<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)Ou(t.La,0,t);else if(tt(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Am)[1]||null;!s&&te.self&&te.self.location&&(s=te.self.location.protocol.slice(0,-1)),r=!lb.test(s?s.toLowerCase():"")}n=r}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var i=2<Xt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Vm(t)}}finally{Ga(t)}}}}function Ga(t,e){if(t.g){Lm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Lm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ab(e)}};function of(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hb(t){const e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ui(t[r]))continue;var n=MA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}CA(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Um(t){let e="";return bu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Um(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fm(t){this.Ga=0,this.j=[],this.l=new Ba,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xs("baseRetryDelayMs",5e3,t),this.hb=xs("retryDelaySeedMs",1e4,t),this.eb=xs("forwardChannelMaxRetries",2,t),this.xa=xs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Sm(t&&t.concurrentRequestLimit),this.Ja=new sb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=Fm.prototype;V.ra=8;V.H=1;function $u(t){if($m(t),t.H==3){var e=t.W++,n=vn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Bi(t,n),e=new Li(t,t.l,e),e.L=2,e.v=Wa(vn(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ui(e)}Wm(t)}function Qa(t){t.g&&(ju(t),t.g.cancel(),t.g=null)}function $m(t){Qa(t),t.u&&(te.clearTimeout(t.u),t.u=null),Jo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Ja(t){if(!Cm(t.i)&&!t.m){t.m=!0;var e=t.Na;di||cm(),fi||(di(),fi=!0),xu.add(e,t),t.C=0}}function db(t,e){return km(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vi(ut(t.Na,t,e),zm(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Li(this,this.l,t);let i=this.s;if(this.U&&(i?(i=tm(i),nm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bm(this,s,e),n=vn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),Bi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Um(i)))+"&"+e:this.o&&Fu(n,this.o,i)),Lu(this.i,s),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),s.aa=!0,bc(s,n,null)):bc(s,n,e),this.H=2}}else this.H==3&&(t?af(this,t):this.j.length==0||Cm(this.i)||af(this))};function af(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),Bi(t,r),t.o&&t.s&&Fu(r,t.o,t.s),n=new Li(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Bm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Lu(t.i,n),bc(n,r,e)}function Bi(t,e){t.na&&bu(t.na,function(n,r){Ce(e,r,n)}),t.h&&Im({},function(n,r){Ce(e,r,n)})}function Bm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ut(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let l=!0;for(let a=0;a<n;a++){let c=s[a].g;const u=s[a].map;if(c-=i,0>c)i=Math.max(0,s[a].g-100),l=!1;else try{ib(u,o,"req"+c+"_")}catch{r&&r(u)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function jm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;di||cm(),fi||(di(),fi=!0),xu.add(e,t),t.A=0}}function Bu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vi(ut(t.Ma,t),zm(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,qm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vi(ut(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),Qa(this),qm(this))};function ju(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function qm(t){t.g=new Li(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),Bi(t,e),t.o&&t.s&&Fu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Wa(vn(e)),n.s=null,n.S=!0,vm(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Qa(this),Bu(this),_t(19))};function Jo(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Hm(t,e){var n=null;if(t.g==e){Jo(t),ju(t),t.g=null;var r=2}else if(Pc(t.i,e))n=e.F,xm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ja(),tt(r,new gm(r,n)),Ja(t)}else jm(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&db(t,e)||r==2&&Bu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}}function zm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function cr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ut(t.pb,t);n||(n=new pr("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Go(n,"https"),Wa(n)),ob(n.toString(),r)}else _t(2);t.H=0,t.h&&t.h.za(e),Wm(t),$m(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function Wm(t){if(t.H=0,t.ma=[],t.h){const e=Dm(t.i);(e.length!=0||t.j.length!=0)&&(Jd(t.ma,e),Jd(t.ma,t.j),t.i.i.length=0,Iu(t.j),t.j.length=0),t.h.ya()}}function Km(t,e,n){var r=n instanceof pr?vn(n):new pr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Qo(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new pr(null);r&&Go(i,r),e&&(i.g=e),s&&Qo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),Bi(t,r),r}function Gm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Fe(new Fi({ob:!0})):new Fe(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qm(){}V=Qm.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Xo(){if(is&&!(10<=Number(bA)))throw Error("Environmental error: no available transport.")}Xo.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Qe.call(this),this.g=new Fm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ui(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ui(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}Je(St,Qe);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Km(t,null,t.Y),Ja(t)};St.prototype.close=function(){$u(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ku(t),t=n);e.j.push(new tb(e.fb++,t)),e.H==3&&Ja(e)};St.prototype.N=function(){this.g.h=null,delete this.j,$u(this.g),delete this.g,St.$.N.call(this)};function Jm(t){Vu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(Jm,Vu);function Xm(){Mu.call(this),this.status=1}Je(Xm,Mu);function vs(t){this.g=t}Je(vs,Qm);vs.prototype.Ba=function(){tt(this.g,"a")};vs.prototype.Aa=function(t){tt(this.g,new Jm(t))};vs.prototype.za=function(t){tt(this.g,new Xm)};vs.prototype.ya=function(){tt(this.g,"b")};function fb(){this.blockSize=-1}function Bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(Bt,fb);Bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Vl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Vl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Vl(this,r),s=0;break}}this.h=s,this.i+=e};Bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var pb={};function qu(t){return-128<=t&&128>t?TA(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Yt(t){if(isNaN(t)||!isFinite(t))return Gr;if(0>t)return Ze(Yt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Sc;return new Te(e,0)}function Ym(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(Ym(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yt(Math.pow(e,8)),r=Gr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Yt(Math.pow(e,i)),r=r.R(i).add(Yt(o))):(r=r.R(n),r=r.add(Yt(o)))}return r}var Sc=4294967296,Gr=qu(0),Cc=qu(1),lf=qu(16777216);V=Te.prototype;V.ea=function(){if(xt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Sc+r)*e,e*=Sc}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pn(this))return"0";if(xt(this))return"-"+Ze(this).toString(t);for(var e=Yt(Math.pow(t,6)),n=this,r="";;){var s=Zo(n,e).g;n=Yo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,pn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xt(t){return t.h==-1}V.X=function(t){return t=Yo(this,t),xt(t)?-1:pn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(Cc)}V.abs=function(){return xt(this)?Ze(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function Yo(t,e){return t.add(Ze(e))}V.R=function(t){if(pn(this)||pn(t))return Gr;if(xt(this))return xt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(xt(t))return Ze(this.R(Ze(t)));if(0>this.X(lf)&&0>t.X(lf))return Yt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(s)>>>16,a=t.D(s)&65535;n[2*r+2*s]+=o*a,fo(n,2*r+2*s),n[2*r+2*s+1]+=i*a,fo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*l,fo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*l,fo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function fo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ds(t,e){this.g=t,this.h=e}function Zo(t,e){if(pn(e))throw Error("division by zero");if(pn(t))return new Ds(Gr,Gr);if(xt(t))return e=Zo(Ze(t),e),new Ds(Ze(e.g),Ze(e.h));if(xt(e))return e=Zo(t,Ze(e)),new Ds(Ze(e.g),e.h);if(30<t.g.length){if(xt(t)||xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cc,r=e;0>=r.X(t);)n=cf(n),r=cf(r);var s=Mr(n,1),i=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!pn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Mr(r,1),n=Mr(n,1)}return e=Yo(t,s.R(e)),new Ds(s,e)}for(s=Gr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Yt(n),o=i.R(e);xt(o)||0<o.X(t);)n-=r,i=Yt(n),o=i.R(e);pn(i)&&(i=Cc),s=s.add(i),t=Yo(t,o)}return new Ds(s,t)}V.gb=function(t){return Zo(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function cf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}Xo.prototype.createWebChannel=Xo.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;qa.NO_ERROR=0;qa.TIMEOUT=8;qa.HTTP_ERROR=6;mm.COMPLETE="complete";_m.EventType=Mi;Mi.OPEN="a";Mi.CLOSE="b";Mi.ERROR="c";Mi.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;Bt.prototype.digest=Bt.prototype.l;Bt.prototype.reset=Bt.prototype.reset;Bt.prototype.update=Bt.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Yt;Te.fromString=Ym;var gb=function(){return new Xo},mb=function(){return ja()},Ml=qa,_b=mm,yb=Pr,uf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vb=Fi,po=_m,Eb=Fe,wb=Bt,Qr=Te;const hf="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let Es="10.1.0";/**
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
 */const vr=new vu("@firebase/firestore");function df(){return vr.logLevel}function z(t,...e){if(vr.logLevel<=me.DEBUG){const n=e.map(Hu);vr.debug(`Firestore (${Es}): ${t}`,...n)}}function En(t,...e){if(vr.logLevel<=me.ERROR){const n=e.map(Hu);vr.error(`Firestore (${Es}): ${t}`,...n)}}function os(t,...e){if(vr.logLevel<=me.WARN){const n=e.map(Hu);vr.warn(`Firestore (${Es}): ${t}`,...n)}}function Hu(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function De(t,e){t||ee()}function oe(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class Ib{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ab{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=i;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new Zm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new ot(e)}}class bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new Pb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Cb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class e_{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Cb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new He(0,0))}static max(){return new re(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends yi{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const kb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends yi{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return kb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new j(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[s+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new j(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new j(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ke.fromString(e))}static fromName(e){return new K(ke.fromString(e).popFirst(5))}static empty(){return new K(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ke(e.slice()))}}function xb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Qn(s,K.empty(),e)}function Db(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(re.min(),K.empty(),-1)}static max(){return new Qn(re.max(),K.empty(),-1)}}function Ob(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const Nb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ji(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Nb)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},a=>r(a))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let a=0;a<i;a++){const c=a;n(e[c]).next(u=>{o[c]=u,++l,l===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function qi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class zu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}zu.ae=-1;function Xa(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function Mb(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new go(this.root,e,this.comparator,!1)}getReverseIterator(){return new go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new go(this.root,e,this.comparator,!0)}}class go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pf(this.data.getIterator())}getIteratorFrom(e){return new pf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class pf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new dt(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class n_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n_("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(De(!!t),typeof t=="string"){let e=0;const n=Lb.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function Wu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ku(t){const e=t.mapValue.fields.__previous_value__;return Wu(e)?Ku(e):e}function vi(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class Ub{constructor(e,n,r,s,i,o,l,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wu(t)?4:Fb(t)?9007199254740991:10:ee()}function an(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jn(s.timestampValue),l=Jn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?ea(o)===ea(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ff(o)!==ff(l))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(l[a]===void 0||!an(o[a],l[a])))return!1;return!0}(t,e);default:return ee()}}function wi(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),a=je(o.integerValue||o.doubleValue);return l<a?-1:l>a?1:l===a?0:isNaN(l)?isNaN(a)?0:-1:1}(t,e);case 3:return gf(t.timestampValue,e.timestampValue);case 4:return gf(vi(t),vi(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Er(i),a=Er(o);return l.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),a=o.split("/");for(let c=0;c<l.length&&c<a.length;c++){const u=ye(l[c],a[c]);if(u!==0)return u}return ye(l.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(je(i.latitude),je(o.latitude));return l!==0?l:ye(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const l=i.values||[],a=o.values||[];for(let c=0;c<l.length&&c<a.length;++c){const u=ls(l[c],a[c]);if(u)return u}return ye(l.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===mo.mapValue&&o===mo.mapValue)return 0;if(i===mo.mapValue)return 1;if(o===mo.mapValue)return-1;const l=i.fields||{},a=Object.keys(l),c=o.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=ye(a[h],u[h]);if(d!==0)return d;const f=ls(l[a[h]],c[u[h]]);if(f!==0)return f}return ye(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Jn(t),r=Jn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function cs(t){return kc(t)}function kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kc(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function mf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xc(t){return!!t&&"integerValue"in t}function Gu(t){return!!t&&"arrayValue"in t}function _f(t){return!!t&&"nullValue"in t}function yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Co(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Qs(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Qs(this.value))}}function r_(t){const e=[];return ws(t.fields,(n,r)=>{const s=new ct([n]);if(Co(r)){const i=r_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,re.min(),re.min(),re.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,re.min(),re.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,re.min(),re.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Js{constructor(e,n="asc"){this.field=e,this.dir=n}}function $b(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class s_{}class qe extends s_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jb(e,n,r):n==="array-contains"?new zb(e,r):n==="in"?new Wb(e,r):n==="not-in"?new Kb(e,r):n==="array-contains-any"?new Gb(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qb(e,r):new Hb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends s_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new jt(e,n)}matches(e){return i_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function i_(t){return t.op==="and"}function o_(t){return Bb(t)&&i_(t)}function Bb(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function Dc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(o_(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function a_(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&a_(o,s.filters[l]),!0):!1}(t,e):void ee()}function l_(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(l_).join(" ,")+"}"}(t):"Filter"}class jb extends qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class qb extends qe{constructor(e,n){super(e,"in",n),this.keys=c_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hb extends qe{constructor(e,n){super(e,"not-in",n),this.keys=c_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function c_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class zb extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gu(n)&&wi(n.arrayValue,this.value)}}class Wb extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wi(this.value.arrayValue,n)}}class Kb extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wi(this.value.arrayValue,n)}}class Gb extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wi(this.value.arrayValue,r))}}/**
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
 */class Qb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.he=null}}function wf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Qb(t,e,n,r,s,i,o)}function Qu(t){const e=oe(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.he=n}return e.he}function Ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$b(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}function Oc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Jb(t,e,n,r,s,i,o,l){return new Hi(t,e,n,r,s,i,o,l)}function u_(t){return new Hi(t)}function Tf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function d_(t){return t.collectionGroup!==null}function Jr(t){const e=oe(t);if(e.Pe===null){e.Pe=[];const n=Xu(e),r=h_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Js(n)),e.Pe.push(new Js(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Js(ct.keyField(),i))}}}return e.Pe}function wn(t){const e=oe(t);if(!e.Ie)if(e.limitType==="F")e.Ie=wf(e.path,e.collectionGroup,Jr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Jr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Js(i.field,o))}const r=e.endAt?new ta(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ta(e.startAt.position,e.startAt.inclusive):null;e.Ie=wf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function Nc(t,e){e.getFirstInequalityField(),Xu(t);const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vc(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return Ju(wn(t),wn(e))&&t.limitType===e.limitType}function f_(t){return`${Qu(wn(t))}|lt:${t.limitType}`}function Mc(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>l_(s)).join(", ")}]`),Xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>cs(s)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,a){const c=vf(o,l,a);return o.inclusive?c<=0:c<0}(r.startAt,Jr(r),s)||r.endAt&&!function(o,l,a){const c=vf(o,l,a);return o.inclusive?c>=0:c>0}(r.endAt,Jr(r),s))}(t,e)}function Xb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function p_(t){return(e,n)=>{let r=!1;for(const s of Jr(t)){const i=Yb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Yb(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const a=o.data.field(i),c=l.data.field(i);return a!==null&&c!==null?ls(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
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
 */const Zb=new Me(K.comparator);function Tn(){return Zb}const g_=new Me(K.comparator);function $s(...t){let e=g_;for(const n of t)e=e.insert(n.key,n);return e}function m_(t){let e=g_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return Xs()}function __(){return Xs()}function Xs(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const eR=new Me(K.comparator),tR=new dt(K.comparator);function ce(...t){let e=tR;for(const n of t)e=e.add(n);return e}const nR=new dt(ye);function rR(){return nR}/**
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
 */function y_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function v_(t){return{integerValue:""+t}}function sR(t,e){return Mb(e)?v_(e):y_(t,e)}/**
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
 */class el{constructor(){this._=void 0}}function iR(t,e,n){return t instanceof na?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wu(i)&&(i=Ku(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ti?w_(t,e):t instanceof Ii?T_(t,e):function(s,i){const o=E_(s,i),l=If(o)+If(s.Te);return xc(o)&&xc(s.Te)?v_(l):y_(s.serializer,l)}(t,e)}function oR(t,e,n){return t instanceof Ti?w_(t,e):t instanceof Ii?T_(t,e):n}function E_(t,e){return t instanceof ra?function(r){return xc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class na extends el{}class Ti extends el{constructor(e){super(),this.elements=e}}function w_(t,e){const n=I_(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ii extends el{constructor(e){super(),this.elements=e}}function T_(t,e){let n=I_(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class ra extends el{constructor(e,n){super(),this.serializer=e,this.Te=n}}function If(t){return je(t.integerValue||t.doubleValue)}function I_(t){return Gu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof Ii&&s instanceof Ii?as(r.elements,s.elements,an):r instanceof ra&&s instanceof ra?an(r.Te,s.Te):r instanceof na&&s instanceof na}(t.transform,e.transform)}class lR{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function A_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yu(t.key,tn.none()):new zi(t.key,t.data,tn.none());{const n=t.data,r=Dt.empty();let s=new dt(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Lt(s.toArray()),tn.none())}}function cR(t,e,n){t instanceof zi?function(s,i,o){const l=s.value.clone(),a=bf(s.fieldTransforms,i,o.transformResults);l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!ko(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=bf(s.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(b_(s)),a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof zi?function(i,o,l,a){if(!ko(i.precondition,o))return l;const c=i.value.clone(),u=Rf(i.fieldTransforms,a,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,a){if(!ko(i.precondition,o))return l;const c=Rf(i.fieldTransforms,a,o),u=o.data;return u.setAll(b_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,l){return ko(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=E_(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function Af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,(i,o)=>aR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zi extends tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bf(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,oR(o,l,n[s]))}return r}function Rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iR(i,o,e))}return r}class Yu extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hR extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=__();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const a=A_(o,l);a!==null&&r.set(s.key,a),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Af(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Af(n,r))}}class Zu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return eR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zu(e,n,r,s)}}/**
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
 */class fR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,he;function gR(t){switch(t){default:return ee();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function R_(t){if(t===void 0)return En("GRPC error has no .code"),b.UNKNOWN;switch(t){case Be.OK:return b.OK;case Be.CANCELLED:return b.CANCELLED;case Be.UNKNOWN:return b.UNKNOWN;case Be.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Be.INTERNAL:return b.INTERNAL;case Be.UNAVAILABLE:return b.UNAVAILABLE;case Be.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Be.NOT_FOUND:return b.NOT_FOUND;case Be.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Be.ABORTED:return b.ABORTED;case Be.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Be.DATA_LOSS:return b.DATA_LOSS;default:return ee()}}(he=Be||(Be={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class eh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return _o}static getOrCreateInstance(){return _o===null&&(_o=new eh),_o}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let _o=null;/**
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
 */function mR(){return new TextEncoder}/**
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
 */const _R=new Qr([4294967295,4294967295],0);function Pf(t){const e=mR().encode(t),n=new wb;return n.update(e),new Uint8Array(n.digest())}function Sf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([s,i],0)]}class th{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Qr.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(Qr.fromNumber(r)));return s.compare(_R)===1&&(s=new Qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Pf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new th(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.de===0)return;const n=Pf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(re.min(),s,new Me(ye),Tn(),ce())}}class Wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wi(r,n,ce(),ce(),ce())}}/**
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
 */class xo{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class P_{constructor(e,n){this.targetId=e,this.pe=n}}class S_{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cf{constructor(){this.ye=0,this.we=xf(),this.Se=pt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ce(),n=ce(),r=ce();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Wi(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=xf()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class yR{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Tn(),this.$e=kf(),this.Ue=new Me(ye)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const l=o.target;if(Oc(l))if(i===0){const a=new K(l.path);this.ze(s,a,at.newNoDocument(a,re.min()))}else De(i===1);else{const a=this.et(s);if(a!==i){const c=this.tt(e,a);if(c.status!==0){this.Ye(s);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=eh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,y){var v,E,R,k,M,x;const J={localCacheCount:f,existenceFilterCount:y.count},$=y.unchangedNames;return $&&(J.bloomFilter={applied:h===0,hashCount:(v=$==null?void 0:$.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(k=(R=(E=$==null?void 0:$.bits)===null||E===void 0?void 0:E.bitmap)===null||R===void 0?void 0:R.length)!==null&&k!==void 0?k:0,padding:(x=(M=$==null?void 0:$.bits)===null||M===void 0?void 0:M.padding)!==null&&x!==void 0?x:0},d&&(J.bloomFilter.mightContain=d)),J}(c.status,(r=c.nt)!==null&&r!==void 0?r:null,a,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=r;let a,c;try{a=Er(i).toUint8Array()}catch(h){if(h instanceof n_)return os("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new th(a,o,l)}catch(h){return os(h instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&Oc(l.target)){const a=new K(l.target.path);this.Ke.get(a)!==null||this.ot(o,a)||this.ze(o,a,at.newNoDocument(a,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=ce();this.$e.forEach((i,o)=>{let l=!0;o.forEachWhile(a=>{const c=this.Xe(a);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new nl(e,n,this.Ue,this.Ke,r);return this.Ke=Tn(),this.$e=kf(),this.Ue=new Me(ye),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Cf,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new dt(ye),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Cf),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function kf(){return new Me(K.comparator)}function xf(){return new Me(K.comparator)}const vR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ER=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wR=(()=>({and:"AND",or:"OR"}))();class TR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lc(t,e){return t.useProto3Json||Xa(e)?e:{value:e}}function sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IR(t,e){return sa(t,e.toTimestamp())}function nn(t){return De(!!t),re.fromTimestamp(function(n){const r=Jn(n);return new He(r.seconds,r.nanos)}(t))}function nh(t,e){return function(r){return new ke(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function k_(t){const e=ke.fromString(t);return De(N_(e)),e}function Uc(t,e){return nh(t.databaseId,e.path)}function Ll(t,e){const n=k_(e);if(n.get(1)!==t.databaseId.projectId)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(x_(n))}function Fc(t,e){return nh(t.databaseId,e)}function AR(t){const e=k_(t);return e.length===4?ke.emptyPath():x_(e)}function $c(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function x_(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Df(t,e,n){return{name:Uc(t,e),fields:n.value.mapValue.fields}}function bR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(De(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(De(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const u=c.code===void 0?b.UNKNOWN:R_(c.code);return new j(u,c.message||"")}(o);n=new S_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ll(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):re.min(),l=new Dt({mapValue:{fields:r.document.fields}}),a=at.newFoundDocument(s,i,o,l),c=r.targetIds||[],u=r.removedTargetIds||[];n=new xo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ll(t,r.document),i=r.readTime?nn(r.readTime):re.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new xo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ll(t,r.document),i=r.removedTargetIds||[];n=new xo([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pR(s,i),l=r.targetId;n=new P_(l,o)}}return n}function RR(t,e){let n;if(e instanceof zi)n={update:Df(t,e.key,e.value)};else if(e instanceof Yu)n={delete:Uc(t,e.key)};else if(e instanceof Sr)n={update:Df(t,e.key,e.data),updateMask:VR(e.fieldMask)};else{if(!(e instanceof hR))return ee();n={verify:Uc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ti)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ii)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),increment:l.Te};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function PR(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(re.min())&&(o=nn(i)),new lR(o,s.transformResults||[])}(n,e))):[]}function SR(t,e){return{documents:[Fc(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length!==0)return O_(jt.create(a,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(h){return{field:$r(h.field),direction:DR(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Lc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(a){return{before:a.inclusive,values:a.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(e.endAt)),n}function kR(t){let e=AR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=D_(h);return d instanceof jt&&o_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Js(Br(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let l=null;n.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,Xa(d)?null:d}(n.limit));let a=null;n.startAt&&(a=function(h){const d=!!h.before,f=h.values||[];return new ta(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ta(f,d)}(n.endAt)),Jb(e,s,o,i,l,"F",a,c)}function xR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>D_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function DR(t){return vR[t]}function OR(t){return ER[t]}function NR(t){return wR[t]}function $r(t){return{fieldPath:t.canonicalString()}}function Br(t){return ct.fromServerFormat(t.fieldPath)}function O_(t){return t instanceof qe?function(n){if(n.op==="=="){if(yf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(_f(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(_f(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:OR(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(s=>O_(s));return r.length===1?r[0]:{compositeFilter:{op:NR(n.op),filters:r}}}(t):ee()}function VR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function N_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ln{constructor(e,n,r,s,i=re.min(),o=re.min(),l=pt.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=a}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MR{constructor(e){this.ct=e}}function LR(t){const e=kR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
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
 */class UR{constructor(){this.sn=new FR}addToCollectionParentIndex(e,n){return this.sn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Qn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(ke.comparator)).toArray()}}/**
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
 */class us{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new us(0)}static On(){return new us(-1)}}/**
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
 */class $R{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ys(r.mutation,s,Lt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$s();return i.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Tn();const o=Xs(),l=function(){return Xs()}();return n.forEach((a,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Sr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ys(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(a=>(a.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return l.set(c,new BR(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Xs();let s=new Me((o,l)=>o-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(a=>{const c=n.get(a);if(c===null)return;let u=r.get(a)||Lt.empty();u=l.applyToLocalView(c,u),r.set(a,u);const h=(s.get(l.batchId)||ce()).add(a);s=s.insert(l.batchId,h)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),c=a.key,u=a.value,h=__();u.forEach(d=>{if(!i.has(d)){const f=A_(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):d_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(ur());let l=-1,a=i;return o.next(c=>C.forEach(c,(u,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{a=a.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,a,c,ce())).next(u=>({batchId:l,changes:m_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=$s();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,l=>{const a=function(u,h){return new Hi(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((l,a)=>{const c=a.getKey();i.get(c)===null&&(i=i.insert(c,at.newInvalidDocument(c)))});let o=$s();return i.forEach((l,a)=>{const c=s.get(l);c!==void 0&&Ys(c.mutation,a,Lt.empty(),He.now()),Za(n,a)&&(o=o.insert(l,a))}),o})}}/**
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
 */class qR{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return C.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:LR(s.bundledQuery),readTime:nn(s.readTime)}}(n)),C.resolve()}}/**
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
 */class HR{constructor(){this.overlays=new Me(K.comparator),this.cr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=ur(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,c=a.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&a.largestBatchId>r&&s.set(a.getKey(),a)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=ur(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const l=ur(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((c,u)=>l.set(c,u)),!(l.size()>=s)););return C.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fR(n,r));let i=this.cr.get(n);i===void 0&&(i=ce(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class rh{constructor(){this.lr=new dt(We.hr),this.Pr=new dt(We.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new We(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new We(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new K(new ke([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new K(new ke([])),r=new We(n,e),s=new We(n,e+1);let i=ce();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return K.comparator(e.key,n.key)||ye(e.mr,n.mr)}static Ir(e,n){return ye(e.mr,n.mr)||K.comparator(e.key,n.key)}}/**
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
 */class zR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new dt(We.hr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.pr=this.pr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const l=this.yr(o.mr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(ye);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],l=>{r=r.add(l.mr)})}),C.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let l=new dt(ye);return this.pr.forEachWhile(a=>{const c=a.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(a.mr)),!0)},o),C.resolve(this.Sr(l))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return C.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new We(n,0),s=this.pr.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WR{constructor(e){this.Dr=e,this.docs=function(){return new Me(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,l=new K(o.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:c,value:{document:u}}=a.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ob(Db(u),r)<=0||(s.has(u.key)||Za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KR(this)}getSize(e){return C.resolve(this.size)}}class KR extends $R{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class GR{constructor(e){this.persistence=e,this.Cr=new Ts(n=>Qu(n),Ju),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new rh,this.targetCount=0,this.Or=us.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),C.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Ln(n),C.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Mr.containsKey(n))}}/**
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
 */class QR{constructor(e,n){this.Nr={},this.overlays={},this.Br=new zu(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new GR(this),this.indexManager=new UR,this.remoteDocumentCache=function(s){return new WR(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new MR(n),this.Qr=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new zR(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const s=new JR(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return C.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class JR extends Vb{constructor(e){super(),this.currentSequenceNumber=e}}class sh{constructor(e){this.persistence=e,this.Wr=new rh,this.Gr=null}static zr(e){return new sh(e)}get jr(){if(this.Gr)return this.Gr;throw ee()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.jr,r=>{const s=K.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return C.or([()=>C.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class ih{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ih(e,n.fromCache,r,s)}}/**
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
 */class XR{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(Tf(n))return C.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vc(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.Ki.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(a=>{const c=this.Gi(n,l);return this.zi(n,c,o,a.readTime)?this.$i(e,Vc(n,null,"F")):this.ji(e,c,n,a)}))})))}Ui(e,n,r,s){return Tf(n)||s.isEqual(re.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(df()<=me.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mc(n)),this.ji(e,o,n,xb(s,-1)))})}Gi(e,n){let r=new dt(p_(e));return n.forEach((s,i)=>{Za(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return df()<=me.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Mc(n)),this.Ki.getDocumentsMatchingQuery(e,n,Qn.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class YR{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Me(ye),this.Yi=new Ts(i=>Qu(i),Ju),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function ZR(t,e,n,r){return new YR(t,e,n,r)}async function V_(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let a=ce();for(const c of s){o.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}for(const c of i){l.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}return n.localDocuments.getDocuments(r,a).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:l}))})})}function eP(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(l,a,c,u){const h=c.batch,d=h.keys();let f=C.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(a,y)).next(v=>{const E=c.docVersions.get(y);De(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>l.mutationQueue.removeMutationBatch(a,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let a=ce();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(a=a.add(l.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function M_(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function tP(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const l=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;l.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(pt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(v,E,R){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,f,u)&&l.push(n.kr.updateTargetData(i,f))});let a=Tn(),c=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),l.push(nP(i,o,e.documentUpdates).next(u=>{a=u.ns,c=u.rs})),!r.isEqual(re.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(u)}return C.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,a,c)).next(()=>a)}).then(i=>(n.Ji=s,i))}function nP(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((l,a)=>{const c=i.get(l);a.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),a.isNoDocument()&&a.version.isEqual(re.min())?(e.removeEntry(l,a.readTime),o=o.insert(l,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),o=o.insert(l,a)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",a.version)}),{ns:o,rs:s}})}function rP(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sP(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Bc(t,e,n){const r=oe(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qi(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Of(t,e,n){const r=oe(t);let s=re.min(),i=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=oe(a),d=h.Yi.get(u);return d!==void 0?C.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(r,o,wn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,l.targetId).next(a=>{i=a})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:ce())).next(l=>(iP(r,Xb(e),l),{documents:l,ss:i})))}function iP(t,e,n){let r=t.Zi.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}class Nf{constructor(){this.activeTargetIds=rR()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oP{constructor(){this.Hs=new Nf,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Nf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aP{Ys(e){}shutdown(){}}/**
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
 */class Vf{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yo=null;function Ul(){return yo===null?yo=function(){return 268435456+Math.round(2147483648*Math.random())}():yo++,"0x"+yo.toString(16)}/**
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
 */const lP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cP{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const it="WebChannelConnection";class uP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const l=Ul(),a=this.mo(n,r);z("RestConnection",`Sending RPC '${n}' ${l}:`,a,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,i,o),this.po(n,a,c,s).then(u=>(z("RestConnection",`Received RPC '${n}' ${l}: `,u),u),u=>{throw os("RestConnection",`RPC '${n}' ${l} failed with error: `,u,"url: ",a,"request:",s),u})}yo(n,r,s,i,o,l){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=lP[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=Ul();return new Promise((o,l)=>{const a=new Eb;a.setWithCredentials(!0),a.listenOnce(_b.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ml.NO_ERROR:const u=a.getResponseJson();z(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ml.TIMEOUT:z(it,`RPC '${e}' ${i} timed out`),l(new j(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const h=a.getStatus();if(z(it,`RPC '${e}' ${i} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const R=E.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(R)>=0?R:b.UNKNOWN}(f.status);l(new j(y,f.message))}else l(new j(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new j(b.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{z(it,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);z(it,`RPC '${e}' ${i} sending request:`,s),a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=Ul(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gb(),l=mb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new vb({})),this.fo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");z(it,`Creating RPC '${e}' stream ${s}: ${u}`,a);const h=o.createWebChannel(u,a);let d=!1,f=!1;const y=new cP({so:E=>{f?z(it,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(z(it,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),z(it,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,R,k)=>{E.listen(R,M=>{try{k(M)}catch(x){setTimeout(()=>{throw x},0)}})};return v(h,po.EventType.OPEN,()=>{f||z(it,`RPC '${e}' stream ${s} transport opened.`)}),v(h,po.EventType.CLOSE,()=>{f||(f=!0,z(it,`RPC '${e}' stream ${s} transport closed`),y.Po())}),v(h,po.EventType.ERROR,E=>{f||(f=!0,os(it,`RPC '${e}' stream ${s} transport errored:`,E),y.Po(new j(b.UNAVAILABLE,"The operation could not be completed")))}),v(h,po.EventType.MESSAGE,E=>{var R;if(!f){const k=E.data[0];De(!!k);const M=k,x=M.error||((R=M[0])===null||R===void 0?void 0:R.error);if(x){z(it,`RPC '${e}' stream ${s} received error:`,x);const J=x.status;let $=function(se){const be=Be[se];if(be!==void 0)return R_(be)}(J),ge=x.message;$===void 0&&($=b.INTERNAL,ge="Unknown error status: "+J+" with message "+x.message),f=!0,y.Po(new j($,ge)),h.close()}else z(it,`RPC '${e}' stream ${s} received:`,k),y.Io(k)}}),v(l,yb.STAT_EVENT,E=>{E.stat===uf.PROXY?z(it,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===uf.NOPROXY&&z(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function Fl(){return typeof document<"u"?document:null}/**
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
 */function rl(t){return new TR(t,!0)}/**
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
 */class L_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class U_{constructor(e,n,r,s,i,o,l,a){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new L_(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new j(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hP extends U_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=bR(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?nn(o.readTime):re.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=$c(this.serializer),n.addTarget=function(i,o){let l;const a=o.target;if(l=Oc(a)?{documents:SR(i,a)}:{query:CR(i,a)},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=C_(i,o.resumeToken);const c=Lc(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){l.readTime=sa(i,o.snapshotVersion.toTimestamp());const c=Lc(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=xR(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=$c(this.serializer),n.removeTarget=e,this.Ho(n)}}class dP extends U_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=PR(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.u_(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=$c(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.Ho(n)}}/**
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
 */class fP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(b.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(b.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class pP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(En(n),this.d_=!1):z("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class gP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c.y_.add(4),await Ki(c),c.b_.set("Unknown"),c.y_.delete(4),await sl(c)}(this))})}),this.b_=new pP(r,s)}}async function sl(t){if(Cr(t))for(const e of t.w_)await e(!0)}async function Ki(t){for(const e of t.w_)await e(!1)}function F_(t,e){const n=oe(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),lh(n)?ah(n):Is(n).Uo()&&oh(n,e))}function $_(t,e){const n=oe(t),r=Is(n);n.p_.delete(e),r.Uo()&&B_(n,e),n.p_.size===0&&(r.Uo()?r.zo():Cr(n)&&n.b_.set("Unknown"))}function oh(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).i_(e)}function B_(t,e){t.D_.Be(e),Is(t).s_(e)}function ah(t){t.D_=new yR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.b_.A_()}function lh(t){return Cr(t)&&!Is(t).$o()&&t.p_.size>0}function Cr(t){return oe(t).y_.size===0}function j_(t){t.D_=void 0}async function mP(t){t.p_.forEach((e,n)=>{oh(t,e)})}async function _P(t,e){j_(t),lh(t)?(t.b_.m_(e),ah(t)):t.b_.set("Unknown")}async function yP(t,e,n){if(t.b_.set("Online"),e instanceof S_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.p_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.p_.delete(l),s.D_.removeTarget(l))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ia(t,r)}else if(e instanceof xo?t.D_.We(e):e instanceof P_?t.D_.Ze(e):t.D_.je(e),!n.isEqual(re.min()))try{const r=await M_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.D_.st(o);return l.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.p_.get(c);u&&i.p_.set(c,u.withResumeToken(a.resumeToken,o))}}),l.targetMismatches.forEach((a,c)=>{const u=i.p_.get(a);if(!u)return;i.p_.set(a,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),B_(i,a);const h=new Ln(u.target,a,c,u.sequenceNumber);oh(i,h)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await ia(t,r)}}async function ia(t,e,n){if(!qi(e))throw e;t.y_.add(1),await Ki(t),t.b_.set("Offline"),n||(n=()=>M_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await sl(t)})}function q_(t,e){return e().catch(n=>ia(t,n,e))}async function il(t){const e=oe(t),n=Xn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;vP(e);)try{const s=await rP(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,EP(e,s)}catch(s){await ia(e,s)}H_(e)&&z_(e)}function vP(t){return Cr(t)&&t.g_.length<10}function EP(t,e){t.g_.push(e);const n=Xn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function H_(t){return Cr(t)&&!Xn(t).$o()&&t.g_.length>0}function z_(t){Xn(t).start()}async function wP(t){Xn(t).l_()}async function TP(t){const e=Xn(t);for(const n of t.g_)e.a_(n.mutations)}async function IP(t,e,n){const r=t.g_.shift(),s=Zu.from(r,e,n);await q_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await il(t)}async function AP(t,e){e&&Xn(t).__&&await async function(r,s){if(function(o){return gR(o)&&o!==b.ABORTED}(s.code)){const i=r.g_.shift();Xn(r).Go(),await q_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await il(r)}}(t,e),H_(t)&&z_(t)}async function Mf(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n.y_.add(3),await Ki(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await sl(n)}async function bP(t,e){const n=oe(t);e?(n.y_.delete(2),await sl(n)):e||(n.y_.add(2),await Ki(n),n.b_.set("Unknown"))}function Is(t){return t.v_||(t.v_=function(n,r,s){const i=oe(n);return i.P_(),new hP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:mP.bind(null,t),uo:_P.bind(null,t),r_:yP.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),lh(t)?ah(t):t.b_.set("Unknown")):(await t.v_.stop(),j_(t))})),t.v_}function Xn(t){return t.C_||(t.C_=function(n,r,s){const i=oe(n);return i.P_(),new dP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:wP.bind(null,t),uo:AP.bind(null,t),c_:TP.bind(null,t),u_:IP.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await il(t)):(await t.C_.stop(),t.g_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class ch{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ch(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uh(t,e){if(En("AsyncQueue",`${e}: ${t}`),qi(t))return new j(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Lf{constructor(){this.F_=new Me(K.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):ee():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,o,l,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hs(e,n,Xr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RP{constructor(){this.x_=void 0,this.listeners=[]}}class PP{constructor(){this.queries=new Ts(e=>f_(e),Ya),this.onlineState="Unknown",this.O_=new Set}}async function SP(t,e){const n=oe(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new RP),s)try{i.x_=await n.onListen(r)}catch(o){const l=uh(o,`Initialization of query '${Mc(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&hh(n)}async function CP(t,e){const n=oe(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function kP(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.listeners)l.B_(s)&&(r=!0);o.x_=s}}r&&hh(n)}function xP(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function hh(t){t.O_.forEach(e=>{e.next()})}class DP{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class W_{constructor(e){this.key=e}}class K_{constructor(e){this.key=e}}class OP{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ce(),this.mutatedKeys=ce(),this.na=p_(e),this.ra=new Xr(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new Lf,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const a=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Za(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),E=!0):this._a(d,f)||(r.track({type:2,doc:f}),E=!0,(a&&this.na(f,a)>0||c&&this.na(f,c)<0)&&(l=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(a||c)&&(l=!0)),E&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:l,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((c,u)=>function(d,f){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return y(d)-y(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(r);const o=n?this.ua():[],l=this.ta.size===0&&this.current?1:0,a=l!==this.ea;return this.ea=l,i.length!==0||a?{snapshot:new hs(this.query,e.ra,s,i,e.mutatedKeys,l===0,a,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Lf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ce(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new K_(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new W_(r))}),n}ha(e){this.X_=e.ss,this.ta=ce();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return hs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class NP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VP{constructor(e){this.key=e,this.Ia=!1}}class MP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Ts(l=>f_(l),Ya),this.da=new Map,this.Aa=new Set,this.Ra=new Me(K.comparator),this.Va=new Map,this.ma=new rh,this.fa={},this.ga=new Map,this.pa=us.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function LP(t,e){const n=KP(t);let r,s;const i=n.Ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await sP(n.localStore,wn(e)),l=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await UP(n,e,r,l==="current",o.resumeToken),n.isPrimaryClient&&F_(n.remoteStore,o)}return s}async function UP(t,e,n,r,s){t.wa=(h,d,f)=>async function(v,E,R,k){let M=E.view.sa(R);M.zi&&(M=await Of(v.localStore,E.query,!1).then(({documents:$})=>E.view.sa($,M)));const x=k&&k.targetChanges.get(E.targetId),J=E.view.applyChanges(M,v.isPrimaryClient,x);return Ff(v,E.targetId,J.ca),J.snapshot}(t,h,d,f);const i=await Of(t.localStore,e,!0),o=new OP(e,i.ss),l=o.sa(i.documents),a=Wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,a);Ff(t,n,c.ca);const u=new NP(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function FP(t,e){const n=oe(t),r=n.Ea.get(e),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!Ya(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$_(n.remoteStore,r.targetId),jc(n,r.targetId)}).catch(ji)):(jc(n,r.targetId),await Bc(n.localStore,r.targetId,!0))}async function $P(t,e,n){const r=GP(t);try{const s=await function(o,l){const a=oe(o),c=He.now(),u=l.reduce((f,y)=>f.add(y.key),ce());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Tn(),v=ce();return a.Xi.getEntries(f,u).next(E=>{y=E,y.forEach((R,k)=>{k.isValidDocument()||(v=v.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const R=[];for(const k of l){const M=uR(k,h.get(k.key).overlayedDocument);M!=null&&R.push(new Sr(k.key,M,r_(M.value.mapValue),tn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,R,l)}).next(E=>{d=E;const R=E.applyToLocalDocumentSet(h,v);return a.documentOverlayCache.saveOverlays(f,E.batchId,R)})}).then(()=>({batchId:d.batchId,changes:m_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,a){let c=o.fa[o.currentUser.toKey()];c||(c=new Me(ye)),c=c.insert(l,a),o.fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Gi(r,s.changes),await il(r.remoteStore)}catch(s){const i=uh(s,"Failed to persist write");n.reject(i)}}async function G_(t,e){const n=oe(t);try{const r=await tP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?De(o.Ia):s.removedDocuments.size>0&&(De(o.Ia),o.Ia=!1))}),await Gi(n,r,e)}catch(r){await ji(r)}}function Uf(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const l=o.view.N_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const a=oe(o);a.onlineState=l;let c=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(l)&&(c=!0)}),c&&hh(a)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BP(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new Me(K.comparator);o=o.insert(i,at.newNoDocument(i,re.min()));const l=ce().add(i),a=new nl(re.min(),new Map,new Me(ye),o,l);await G_(r,a),r.Ra=r.Ra.remove(i),r.Va.delete(e),dh(r)}else await Bc(r.localStore,e,!1).then(()=>jc(r,e,n)).catch(ji)}async function jP(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await eP(n.localStore,e);J_(n,r,null),Q_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gi(n,s)}catch(s){await ji(s)}}async function qP(t,e,n){const r=oe(t);try{const s=await function(o,l){const a=oe(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,l).next(h=>(De(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,l)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);J_(r,e,n),Q_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gi(r,s)}catch(s){await ji(s)}}function Q_(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function J_(t,e,n){const r=oe(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||X_(t,r)})}function X_(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&($_(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),dh(t))}function Ff(t,e,n){for(const r of n)r instanceof W_?(t.ma.addReference(r.key,e),HP(t,r)):r instanceof K_?(z("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||X_(t,r.key)):ee()}function HP(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Aa.add(r),dh(t))}function dh(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new K(ke.fromString(e)),r=t.pa.next();t.Va.set(r,new VP(n)),t.Ra=t.Ra.insert(n,r),F_(t.remoteStore,new Ln(wn(u_(n.path)),r,"TargetPurposeLimboResolution",zu.ae))}}async function Gi(t,e,n){const r=oe(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((l,a)=>{o.push(r.wa(a,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=ih.qi(a.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(a,c){const u=oe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(c,d=>C.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>C.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!qi(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(d,v)}}}(r.localStore,i))}async function zP(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await V_(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(l=>{l.forEach(a=>{a.reject(new j(b.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gi(n,r.ts)}}function WP(t,e){const n=oe(t),r=n.Va.get(e);if(r&&r.Ia)return ce().add(r.key);{let s=ce();const i=n.da.get(e);if(!i)return s;for(const o of i){const l=n.Ea.get(o);s=s.unionWith(l.view.ia)}return s}}function KP(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=G_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BP.bind(null,e),e.Ta.r_=kP.bind(null,e.eventManager),e.Ta.Sa=xP.bind(null,e.eventManager),e}function GP(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qP.bind(null,e),e}class $f{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZR(this.persistence,new XR,e.initialUser,this.serializer)}createPersistence(e){return new QR(sh.zr,this.serializer)}createSharedClientState(e){return new oP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zP.bind(null,this.syncEngine),await bP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PP}()}createDatastore(e){const n=rl(e.databaseInfo.databaseId),r=function(i){return new uP(i)}(e.databaseInfo);return function(i,o,l,a){return new fP(i,o,l,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new gP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Uf(this.syncEngine,n,0),function(){return Vf.v()?new Vf:new aP}())}createSyncEngine(e,n){return function(s,i,o,l,a,c,u){const h=new MP(s,i,o,l,a,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=oe(n);z("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Ki(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class JP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=e_.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $l(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await V_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZP(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Mf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Mf(e.remoteStore,i)),t._onlineComponents=e}function YP(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await $l(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!YP(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await $l(t,new $f)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await $l(t,new $f);return t._offlineComponents}async function Y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Bf(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Bf(t,new QP))),t._onlineComponents}function eS(t){return Y_(t).then(e=>e.syncEngine)}async function tS(t){const e=await Y_(t),n=e.eventManager;return n.onListen=LP.bind(null,e.syncEngine),n.onUnlisten=FP.bind(null,e.syncEngine),n}function nS(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,a,c){const u=new JP({next:d=>{o.enqueueAndForget(()=>CP(i,h)),d.fromCache&&a.source==="server"?c.reject(new j(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new DP(l,u,{includeMetadataChanges:!0,W_:!0});return SP(i,h)}(await tS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Z_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jf=new Map;/**
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
 */function ey(t,e,n){if(!n)throw new j(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rS(t,e,n,r){if(e===!0&&r===!0)throw new j(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qf(t){if(!K.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hf(t){if(K.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function ds(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(t);throw new j(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class al{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tb;switch(r.type){case"firstParty":return new Rb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jf.get(n);r&&(z("ComponentProvider","Removing Datastore"),jf.delete(n),r.terminate())}(this),Promise.resolve()}}function sS(t,e,n,r={}){var s;const i=(t=ds(t,al))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=ot.MOCK_USER;else{l=zg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ot(c)}t._authCredentials=new Ib(new Zm(l,a))}}/**
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
 */class As{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new As(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Hn extends As{constructor(e,n,r){super(e,n,u_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new K(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function fh(t,e,...n){if(t=nt(t),ey("collection","path",e),t instanceof al){const r=ke.fromString(e,...n);return Hf(r),new Hn(t,null,r)}{if(!(t instanceof Pt||t instanceof Hn))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Hf(r),new Hn(t.firestore,null,r)}}function Bl(t,e,...n){if(t=nt(t),arguments.length===1&&(e=e_.V()),ey("doc","path",e),t instanceof al){const r=ke.fromString(e,...n);return qf(r),new Pt(t,null,new K(r))}{if(!(t instanceof Pt||t instanceof Hn))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return qf(r),new Pt(t.firestore,t instanceof Hn?t.converter:null,new K(r))}}/**
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
 */class iS{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new L_(this,"async_queue_retry"),this.Xa=()=>{const n=Fl();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new qn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!qi(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw En("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=ch.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&ee()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class ll extends al{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new iS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ny(this),this._firestoreClient.terminate()}}function ph(t,e){const n=typeof t=="object"?t:wu(),r=typeof t=="string"?t:e||"(default)",s=Va(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jg("firestore");i&&sS(s,...i)}return s}function ty(t){return t._firestoreClient||ny(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ny(t){var e,n,r;const s=t._freezeSettings(),i=function(l,a,c,u){return new Ub(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Z_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new XP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(pt.fromBase64String(e))}catch(n){throw new j(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ry{constructor(e){this._methodName=e}}/**
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
 */class mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const oS=/^__.*__$/;class aS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new zi(e,this.data,n,this.fieldTransforms)}}function sy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return oa(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(sy(this.uu)&&oS.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class lS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rl(e)}Ru(e,n,r,s=!1){return new _h({uu:e,methodName:n,Au:r,path:ct.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iy(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new lS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cS(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);ly("Data must be an object, but it was:",o,r);const l=oy(r,o);let a,c;if(i.merge)a=new Lt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=hS(e,h,n);if(!o.contains(d))throw new j(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fS(u,d)||u.push(d)}a=new Lt(u),c=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,c=o.fieldTransforms;return new aS(new Dt(l),a,c)}function uS(t,e,n,r=!1){return yh(n,t.Ru(r?4:3,e))}function yh(t,e){if(ay(t=nt(t)))return ly("Unsupported field value:",e,t),oy(t,e);if(t instanceof ry)return function(r,s){if(!sy(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let a=yh(l,s.Tu(o));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:sa(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(s.serializer,i)}}if(r instanceof mh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fs)return{bytesValue:C_(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${ol(r)}`)}(t,e)}function oy(t,e){const n={};return t_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,s)=>{const i=yh(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ay(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof mh||t instanceof fs||t instanceof Pt||t instanceof ry)}function ly(t,e,n){if(!ay(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ol(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function hS(t,e,n){if((e=nt(e))instanceof gh)return e._internalPath;if(typeof e=="string")return cy(t,e);throw oa("Field path arguments must be of type string or ",t,!1,void 0,n)}const dS=new RegExp("[~\\*/\\[\\]]");function cy(t,e,n){if(e.search(dS)>=0)throw oa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gh(...e.split("."))._internalPath}catch{throw oa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(i||o)&&(a+=" (found",i&&(a+=` in field ${r}`),o&&(a+=` in document ${s}`),a+=")"),new j(b.INVALID_ARGUMENT,l+t+a)}function fS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class uy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pS extends uy{data(){return super.data()}}function hy(t,e){return typeof e=="string"?cy(t,e):e instanceof gh?e._internalPath:e._delegate._internalPath}/**
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
 */function gS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vh{}class mS extends vh{}function Eh(t,e,...n){let r=[];e instanceof vh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(a=>a instanceof Th).length,l=i.filter(a=>a instanceof wh).length;if(o>1||o>0&&l>0)throw new j(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wh extends mS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wh(e,n,r)}_apply(e){const n=this._parse(e);return dy(e._query,n),new As(e.firestore,e.converter,Nc(e._query,n))}_parse(e){const n=iy(e.firestore);return function(i,o,l,a,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new j(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Kf(h,u);const f=[];for(const y of h)f.push(Wf(a,i,y));d={arrayValue:{values:f}}}else d=Wf(a,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Kf(h,u),d=uS(l,o,h,u==="in"||u==="not-in");return qe.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Th extends vh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Th(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const a of l)dy(o,a),o=Nc(o,a)}(e._query,n),new As(e.firestore,e.converter,Nc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Wf(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new j(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!d_(e)&&n.indexOf("/")!==-1)throw new j(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!K.isDocumentKey(r))throw new j(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mf(t,new K(r))}if(n instanceof Pt)return mf(t,n._key);throw new j(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function Kf(t,e){if(!Array.isArray(t)||t.length===0)throw new j(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dy(t,e){if(e.isInequality()){const r=Xu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new j(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=h_(t);i!==null&&_S(t,s,i)}const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _S(t,e,n){if(!n.isEqual(e))throw new j(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class yS{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new mh(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ku(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);De(N_(r));const s=new Ei(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||En(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ES extends uy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Do extends ES{data(e={}){return super.data(e)}}class wS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Do(this._firestore,this._userDataWriter,r.key,r,new vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const a=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const a=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),u=o.indexOf(l.doc.key)),{type:TS(l.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class IS extends yS{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Ih(t){t=ds(t,As);const e=ds(t.firestore,ll),n=ty(e),r=new IS(e);return gS(t._query),nS(n,t._query).then(s=>new wS(e,r,t,s))}function Gf(t,e,n){t=ds(t,Pt);const r=ds(t.firestore,ll),s=vS(t.converter,e,n);return fy(r,[cS(iy(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function AS(t){return fy(ds(t.firestore,ll),[new Yu(t._key,tn.none())])}function fy(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>$P(await eS(r),s,i)),i.promise}(ty(t),e)}(function(e,n=!0){(function(s){Es=s})(Rr),yr(new Gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ll(new Ab(r.getProvider("auth-internal")),new Sb(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),en(hf,"4.1.0",e),en(hf,"4.1.0","esm2017")})();const kr=xa("database",()=>{const t=ph(Di),e=ue([]),n=ue([]),r=ue([]),s=ue([]),i=xe(()=>e.value),o=xe(()=>n.value),l=xe(()=>s.value),a=xe(()=>r.value);return{data:e,about:n,skill:r,setAllData:async f=>{const y=Eh(fh(t,f));(await Ih(y)).forEach(E=>{e.value.find(k=>k===E.data())||(f=="about"&&n.value.push(E.data()),f=="skill"&&r.value.push(E.data()),f=="portfolio"&&s.value.push(E.data()))})},setData:async(f,y,v)=>{await Gf(Bl(t,f,y),v),e.value.push(v)},getAllData:i,getAboutData:o,getSkillData:a,getPortfolioData:l,deleteData:async(f,y)=>{await AS(Bl(t,f,`${y}`))},editData:async(f,y,v)=>{await Gf(Bl(t,f,y),v),e.value.push(v)}}}),bS={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},RS={class:"flex justify-start flex-wrap my-4"},PS=["onClick"],SS=["onClick"],CS=m("img",{src:Lg,class:"h-[80px] max-w-full cursor-pointer mx-auto",alt:""},null,-1),kS={class:"text-primary tracking-tighter"},py={__name:"portfolio",setup(t){const e=kr(),n=Ht(),r=(s,i)=>{n.setWindow(`portfolio-detail${i}`,s)};return(s,i)=>(T(),ie("div",bS,[fe(Ci,{onClick:i[0]||(i[0]=o=>Pe(n).increseZindex("portfolio")),title:"Portfolio",window:"portfolio"}),m("div",RS,[(T(!0),ie(Ve,null,ln(Pe(e).getPortfolioData,(o,l)=>(T(),ie("div",{class:"basis-1/3 lg:basis-1/5",key:l,onClick:a=>s.$emit("portfolioDetail",{folder:o,index:l})},[m("div",{class:"text-center hover:bg-hover m-2",onClick:a=>r(o,l)},[CS,m("div",kS,zn(o.name),1)],8,SS)],8,PS))),128))])]))}},xS={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},DS={class:"h-[70vh] overflow-auto"},OS=["src"],q={__name:"portfolioDetail",props:{index:Number},setup(t){const{index:e}=t,n=ph(Di),r=ue([]),s=Ht(),i=xe(()=>s.getWindows.find(o=>o.window===`portfolio-detail${e}`));return yt(async()=>{const o=Eh(fh(n,i.value.data.name));(await Ih(o)).forEach(a=>{r.value.push(a.data())})}),(o,l)=>(T(),ie("div",xS,[fe(Ci,{onClick:l[0]||(l[0]=a=>Pe(s).increseZindex(`portfolio-detail${t.index}`)),title:`${i.value.data.name}`,window:`portfolio-detail${t.index}`},null,8,["title","window"]),m("div",DS,[(T(!0),ie(Ve,null,ln(r.value,a=>(T(),ie("div",{key:a.id},[m("img",{src:a.url,class:"w-full",alt:""},null,8,OS)]))),128))])]))}},NS={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},VS={class:"overflow-auto h-[80vh] my-2"},MS=["src"],gy={__name:"about",props:{images:Array},setup(t){const e=Ht();return(n,r)=>(T(),ie("div",NS,[fe(Ci,{onClick:r[0]||(r[0]=s=>Pe(e).increseZindex("about")),title:"about.txt",window:"about"}),m("div",VS,[(T(!0),ie(Ve,null,ln(t.images,s=>(T(),ie("img",{key:s.id,src:s.url,class:"w-full",alt:""},null,8,MS))),128))])]))}},LS={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},US={class:"overflow-auto h-[80vh] my-2"},FS=["src"],my={__name:"skill",props:{images:Array},setup(t){const e=Ht();return(n,r)=>(T(),ie("div",LS,[fe(Ci,{onClick:r[0]||(r[0]=s=>Pe(e).increseZindex("skill")),title:"Skill",window:"skill"}),m("div",US,[(T(!0),ie(Ve,null,ln(t.images,s=>(T(),ie("img",{key:s.id,src:s.url,class:"w-full",alt:""},null,8,FS))),128))])]))}},$S="/assets/profile-7c63d0e2.png",BS="/assets/behance-b97737ca.png",jS="/assets/figma-c5b66026.png",qS="/assets/Linkedin-03521dc2.png",HS="/assets/nephophile-5211cc48.png",zS="/assets/udemy-7737c7a3.png",WS="/assets/yangon-4fed5cb4.png",KS="/assets/email-7cc3952c.png",GS={class:"w-screen lg:w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},QS=Sa('<div class="p-4"><div class="flex gap-3 mb-3"><div><img src="'+$S+'" class="w-full h-full object-cover rounded-md" alt=""></div><div><div class="flex flex-col gap-3"><div class="flex gap-3"><a href="https://www.behance.net/alexlynn3" target="_blank"><img src="'+BS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a><a href="https://www.figma.com/@alexlynn" target="_blank"><img src="'+jS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div><a href="https://www.linkedin.com/in/lynnhtetthant/" target="_blank"><img src="'+qS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div></div></div><div class="flex gap-3"><div class="flex flex-col gap-3"><div><img src="'+HS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></div><a href="https://www.udemy.com/user/lynn-htet-7/" target="_blank"><img src="'+zS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div><a href="https://goo.gl/maps/2f4fr1SSQ9whHkeK7" target="_blank"><img src="'+WS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a><a href="mailto:alexlynn@naver.com"><img src="'+KS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div></div>',1),_y={__name:"contact",setup(t){const e=Ht();return(n,r)=>(T(),ie("div",GS,[fe(Ci,{onClick:r[0]||(r[0]=s=>Pe(e).increseZindex("contact")),title:"Contact",window:"contact"}),QS]))}},JS={name:"PhStarBold"},XS={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"},YS=m("path",{fill:"currentColor",d:"M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"},null,-1),ZS=[YS];function eC(t,e,n,r,s,i){return T(),ie("svg",XS,ZS)}const aa=mu(JS,[["render",eC]]),tC={class:"text-primary text-2xl flex flex-col gap-4"},nC={class:"flex justify-center items-center gap-2"},rC=m("div",null,"Read Me",-1),sC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Alex Lynn."),m("div",null,[Pa(" A "),m("span",{class:"text-blue-900"},"UI/UX Desinger & Instructor")]),m("div",null,"Desinger based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),iC=Ia({__name:"info",setup(t){const e=ue(null),{x:n,y:r,style:s}=Mg(e,{initialValue:{x:40,y:100}});return(i,o)=>(T(),ie("div",{ref_key:"el",ref:e,style:Ar([Pe(s),{position:"fixed"}]),class:"bg-white border-2 border-e-4 border-b-4 py-4 px-9 border-primary rounded-xl"},[m("div",tC,[m("div",nC,[fe(aa),rC,fe(aa)]),sC])],4))}}),oC={class:"w-[90%] mx-auto h-screen flex justify-end"},aC={class:"flex flex-col gap-2 mt-5"},lC=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),cC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),uC=[lC,cC],hC=m("img",{src:xg,class:"w-[60px] mx-auto",alt:""},null,-1),dC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),fC=[hC,dC],pC=m("img",{src:Dg,class:"w-[60px] mx-auto",alt:""},null,-1),gC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),mC=[pC,gC],_C=m("img",{src:Og,class:"w-[60px] mx-auto",alt:""},null,-1),yC=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),vC=[_C,yC],EC={__name:"Desktop",setup(t){const e=Ht(),n=kr(),r=xe(()=>e.getWindows);yt(async()=>{await n.setAllData("about")}),yt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),yt(async()=>{await n.setAllData("skill")});const s=(o,l=null)=>{e.setWindow(o,l)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,l)=>(T(),ie("div",null,[m("div",oC,[m("div",aC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[0]||(l[0]=a=>s("portfolio"))},uC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[1]||(l[1]=a=>s("about"))},fC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[2]||(l[2]=a=>s("skill"))},mC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[3]||(l[3]=a=>s("contact"))},vC)])]),fe(iC),(T(!0),ie(Ve,null,ln(r.value,(a,c)=>(T(),L(DI,{key:c,index:c},{window:br(()=>[a.window==="portfolio"?(T(),L(py,{key:0,onPortfolioDetail:i})):U("",!0),a.window==="about"?(T(),L(gy,{key:1,images:Pe(n).getAboutData},null,8,["images"])):U("",!0),a.window==="skill"?(T(),L(my,{key:2,images:Pe(n).getSkillData},null,8,["images"])):U("",!0),a.window==="contact"?(T(),L(_y,{key:3})):U("",!0),a.window==="portfolio-detail0"?(T(),L(q,{key:4,index:"0"})):U("",!0),a.window==="portfolio-detail1"?(T(),L(q,{key:5,index:"1"})):U("",!0),a.window==="portfolio-detail2"?(T(),L(q,{key:6,index:"2"})):U("",!0),a.window==="portfolio-detail3"?(T(),L(q,{key:7,index:"3"})):U("",!0),a.window==="portfolio-detail4"?(T(),L(q,{key:8,index:"4"})):U("",!0),a.window==="portfolio-detail5"?(T(),L(q,{key:9,index:"5"})):U("",!0),a.window==="portfolio-detail6"?(T(),L(q,{key:10,index:"6"})):U("",!0),a.window==="portfolio-detail7"?(T(),L(q,{key:11,index:"7"})):U("",!0),a.window==="portfolio-detail8"?(T(),L(q,{key:12,index:"8"})):U("",!0),a.window==="portfolio-detail9"?(T(),L(q,{key:13,index:"9"})):U("",!0),a.window==="portfolio-detail10"?(T(),L(q,{key:14,index:"10"})):U("",!0),a.window==="portfolio-detail11"?(T(),L(q,{key:15,index:"11"})):U("",!0),a.window==="portfolio-detail12"?(T(),L(q,{key:16,index:"12"})):U("",!0),a.window==="portfolio-detail13"?(T(),L(q,{key:17,index:"13"})):U("",!0),a.window==="portfolio-detail14"?(T(),L(q,{key:18,index:"14"})):U("",!0),a.window==="portfolio-detail15"?(T(),L(q,{key:19,index:"15"})):U("",!0),a.window==="portfolio-detail16"?(T(),L(q,{key:20,index:"16"})):U("",!0),a.window==="portfolio-detail17"?(T(),L(q,{key:21,index:"17"})):U("",!0),a.window==="portfolio-detail18"?(T(),L(q,{key:22,index:"18"})):U("",!0),a.window==="portfolio-detail19"?(T(),L(q,{key:23,index:"19"})):U("",!0),a.window==="portfolio-detail20"?(T(),L(q,{key:24,index:"20"})):U("",!0),a.window==="portfolio-detail21"?(T(),L(q,{key:25,index:"21"})):U("",!0),a.window==="portfolio-detail22"?(T(),L(q,{key:26,index:"22"})):U("",!0),a.window==="portfolio-detail23"?(T(),L(q,{key:27,index:"23"})):U("",!0),a.window==="portfolio-detail24"?(T(),L(q,{key:28,index:"24"})):U("",!0),a.window==="portfolio-detail25"?(T(),L(q,{key:29,index:"25"})):U("",!0),a.window==="portfolio-detail26"?(T(),L(q,{key:30,index:"26"})):U("",!0),a.window==="portfolio-detail27"?(T(),L(q,{key:31,index:"27"})):U("",!0),a.window==="portfolio-detail28"?(T(),L(q,{key:32,index:"28"})):U("",!0),a.window==="portfolio-detail29"?(T(),L(q,{key:33,index:"29"})):U("",!0),a.window==="portfolio-detail30"?(T(),L(q,{key:34,index:"30"})):U("",!0)]),_:2},1032,["index"]))),128))]))}},wC={__name:"model",props:{index:Number},setup(t){const{index:e}=t,n=Ht(),r=xe(()=>n.getWindows.find((s,i)=>i===e));return(s,i)=>(T(),ie("div",{ref:"el",style:Ar([{zIndex:r.value.zIndex},{position:"fixed"}])},[hu(s.$slots,"window")],4))}},TC=m("div",{class:"text-[12px] text-center bg-white text-primary"}," For better performance, please view using computer ",-1),IC={class:"mx-auto flex justify-end"},AC={class:"w-full bg-white border-2 border-e-4 border-b-4 flex justify-center items-center p-2 border-primary rounded-xl mt-4 ms-1 me-1"},bC={class:"text-primary text-2xl flex flex-col gap-4"},RC={class:"flex justify-center items-center gap-2"},PC=m("div",null,"Read Me",-1),SC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Alex Lynn."),m("div",null,[Pa(" A "),m("span",{class:"text-blue-900"},"UI/UX Desinger & Instructor")]),m("div",null,"Desinger based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),CC={class:"flex flex-col"},kC=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),xC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),DC=[kC,xC],OC=m("img",{src:xg,class:"w-[60px] mx-auto",alt:""},null,-1),NC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),VC=[OC,NC],MC=m("img",{src:Dg,class:"w-[60px] mx-auto",alt:""},null,-1),LC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),UC=[MC,LC],FC=m("img",{src:Og,class:"w-[60px] mx-auto",alt:""},null,-1),$C=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),BC=[FC,$C],jC={__name:"Mobile",setup(t){const e=Ht(),n=kr(),r=xe(()=>e.getWindows);yt(async()=>{await n.setAllData("about")}),yt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),yt(async()=>{await n.setAllData("skill")});const s=(o,l=null)=>{e.setWindow(o,l)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,l)=>(T(),ie(Ve,null,[TC,m("div",IC,[m("div",AC,[m("div",bC,[m("div",RC,[fe(aa),PC,fe(aa)]),SC])]),m("div",CC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[0]||(l[0]=a=>s("portfolio"))},DC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[1]||(l[1]=a=>s("about"))},VC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[2]||(l[2]=a=>s("skill"))},UC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[3]||(l[3]=a=>s("contact"))},BC)]),(T(!0),ie(Ve,null,ln(r.value,(a,c)=>(T(),L(wC,{key:c,index:c},{window:br(()=>[a.window==="portfolio"?(T(),L(py,{key:0,onPortfolioDetail:i})):U("",!0),a.window==="about"?(T(),L(gy,{key:1,images:Pe(n).getAboutData},null,8,["images"])):U("",!0),a.window==="skill"?(T(),L(my,{key:2,images:Pe(n).getSkillData},null,8,["images"])):U("",!0),a.window==="contact"?(T(),L(_y,{key:3})):U("",!0),a.window==="portfolio-detail0"?(T(),L(q,{key:4,index:"0"})):U("",!0),a.window==="portfolio-detail1"?(T(),L(q,{key:5,index:"1"})):U("",!0),a.window==="portfolio-detail2"?(T(),L(q,{key:6,index:"2"})):U("",!0),a.window==="portfolio-detail3"?(T(),L(q,{key:7,index:"3"})):U("",!0),a.window==="portfolio-detail4"?(T(),L(q,{key:8,index:"4"})):U("",!0),a.window==="portfolio-detail5"?(T(),L(q,{key:9,index:"5"})):U("",!0),a.window==="portfolio-detail6"?(T(),L(q,{key:10,index:"6"})):U("",!0),a.window==="portfolio-detail7"?(T(),L(q,{key:11,index:"7"})):U("",!0),a.window==="portfolio-detail8"?(T(),L(q,{key:12,index:"8"})):U("",!0),a.window==="portfolio-detail9"?(T(),L(q,{key:13,index:"9"})):U("",!0),a.window==="portfolio-detail10"?(T(),L(q,{key:14,index:"10"})):U("",!0),a.window==="portfolio-detail11"?(T(),L(q,{key:15,index:"11"})):U("",!0),a.window==="portfolio-detail12"?(T(),L(q,{key:16,index:"12"})):U("",!0),a.window==="portfolio-detail13"?(T(),L(q,{key:17,index:"13"})):U("",!0),a.window==="portfolio-detail14"?(T(),L(q,{key:18,index:"14"})):U("",!0),a.window==="portfolio-detail15"?(T(),L(q,{key:19,index:"15"})):U("",!0),a.window==="portfolio-detail16"?(T(),L(q,{key:20,index:"16"})):U("",!0),a.window==="portfolio-detail17"?(T(),L(q,{key:21,index:"17"})):U("",!0),a.window==="portfolio-detail18"?(T(),L(q,{key:22,index:"18"})):U("",!0),a.window==="portfolio-detail19"?(T(),L(q,{key:23,index:"19"})):U("",!0),a.window==="portfolio-detail20"?(T(),L(q,{key:24,index:"20"})):U("",!0),a.window==="portfolio-detail21"?(T(),L(q,{key:25,index:"21"})):U("",!0),a.window==="portfolio-detail22"?(T(),L(q,{key:26,index:"22"})):U("",!0),a.window==="portfolio-detail23"?(T(),L(q,{key:27,index:"23"})):U("",!0),a.window==="portfolio-detail24"?(T(),L(q,{key:28,index:"24"})):U("",!0),a.window==="portfolio-detail25"?(T(),L(q,{key:29,index:"25"})):U("",!0),a.window==="portfolio-detail26"?(T(),L(q,{key:30,index:"26"})):U("",!0),a.window==="portfolio-detail27"?(T(),L(q,{key:31,index:"27"})):U("",!0),a.window==="portfolio-detail28"?(T(),L(q,{key:32,index:"28"})):U("",!0),a.window==="portfolio-detail29"?(T(),L(q,{key:33,index:"29"})):U("",!0),a.window==="portfolio-detail30"?(T(),L(q,{key:34,index:"30"})):U("",!0)]),_:2},1032,["index"]))),128))])],64))}},qC={key:0},HC={key:1},zC={__name:"Desktop",setup(t){const e=ue(window.innerWidth),n=ue(window.innerHeight),r=()=>{e.value=window.innerWidth,n.value=window.innerHeight};return yt(()=>{window.addEventListener("resize",r)}),uu(()=>{window.removeEventListener("resize",r)}),(s,i)=>e.value>760?(T(),ie("div",qC,[fe(EC)])):(T(),ie("div",HC,[fe(jC)]))}};function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WC=yy,vy=new ki("auth","Firebase",yy());/**
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
 */const la=new vu("@firebase/auth");function KC(t,...e){la.logLevel<=me.WARN&&la.warn(`Auth (${Rr}): ${t}`,...e)}function Oo(t,...e){la.logLevel<=me.ERROR&&la.error(`Auth (${Rr}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw bh(t,...e)}function rn(t,...e){return bh(t,...e)}function GC(t,e,n){const r=Object.assign(Object.assign({},WC()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function bh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vy.create(t,...e)}function Z(t,e,...n){if(!t)throw bh(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function In(t,e){t||gn(e)}/**
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
 */function qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QC(){return Qf()==="http:"||Qf()==="https:"}function Qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function JC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QC()||QI()||"connection"in navigator)?navigator.onLine:!0}function XC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||JI()}get(){return JC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rh(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ey{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZC=new Qi(3e4,6e4);function Ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bs(t,e,n,r,s={}){return wy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ey.fetch()(Ty(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function wy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YC),e);try{const s=new ek(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Eo(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw GC(t,u,c);qt(t,u)}}catch(s){if(s instanceof cn)throw s;qt(t,"network-request-failed",{message:String(s)})}}async function cl(t,e,n,r,s={}){const i=await bs(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ty(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Rh(t.config,s):`${t.config.apiScheme}://${s}`}class ek{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),ZC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function tk(t,e){return bs(t,"POST","/v1/accounts:delete",e)}async function nk(t,e){return bs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rk(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=Ph(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(jl(s.auth_time)),issuedAtTime:Zs(jl(s.iat)),expirationTime:Zs(jl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jl(t){return Number(t)*1e3}function Ph(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=$g(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sk(t){const e=Ph(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&ik(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ik({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Iy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ai(t,nk(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ck(i.providerUserInfo):[],l=lk(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Iy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ak(t){const e=nt(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ck(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uk(t,e){const n=await wy(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ty(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ey.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Sn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Iy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rk(this,e)}reload(){return ak(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ai(this,tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:x,isAnonymous:J,providerData:$,stsTokenManager:ge}=n;Z(M&&ge,e,"internal-error");const X=bi.fromJSON(this.name,ge);Z(typeof M=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),Z(typeof x=="boolean",e,"internal-error"),Z(typeof J=="boolean",e,"internal-error"),Sn(f,e.name),Sn(y,e.name),Sn(v,e.name),Sn(E,e.name),Sn(R,e.name),Sn(k,e.name);const se=new gr({uid:M,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:J,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:X,createdAt:R,lastLoginAt:k});return $&&Array.isArray($)&&(se.providerData=$.map(be=>Object.assign({},be))),E&&(se._redirectEventId=E),se}static async _fromIdTokenResponse(e,n,r=!1){const s=new bi;s.updateFromServerResponse(n);const i=new gr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ca(i),i}}/**
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
 */const Jf=new Map;function mn(t){In(t instanceof Function,"Expected a class definition");let e=Jf.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jf.set(t,e),e)}/**
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
 */class Ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ay.type="NONE";const Xf=Ay;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(mn(Xf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||mn(Xf);const o=No(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=gr._fromJSON(e,u);c!==i&&(l=h),i=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Yr(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Yr(i,e,r))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(by(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cy(e))return"Blackberry";if(ky(e))return"Webos";if(Sh(e))return"Safari";if((e.includes("chrome/")||Ry(e))&&!e.includes("edge/"))return"Chrome";if(Sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function by(t=ft()){return/firefox\//i.test(t)}function Sh(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ry(t=ft()){return/crios\//i.test(t)}function Py(t=ft()){return/iemobile/i.test(t)}function Sy(t=ft()){return/android/i.test(t)}function Cy(t=ft()){return/blackberry/i.test(t)}function ky(t=ft()){return/webos/i.test(t)}function ul(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hk(t=ft()){var e;return ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dk(){return XI()&&document.documentMode===10}function xy(t=ft()){return ul(t)||Sy(t)||ky(t)||Cy(t)||/windows phone/i.test(t)||Py(t)}function fk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dy(t,e=[]){let n;switch(t){case"Browser":n=Yf(ft());break;case"Worker":n=`${Yf(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}async function Oy(t,e){return bs(t,"GET","/v2/recaptchaConfig",Ji(t,e))}function Zf(t){return t!==void 0&&t.enterprise!==void 0}class Ny{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function pk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pk().appendChild(r)})}function gk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mk="https://www.google.com/recaptcha/enterprise.js?render=",_k="recaptcha-enterprise",yk="NO_RECAPTCHA";class My{constructor(e){this.type=_k,this.auth=Xi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Oy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ny(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;Zf(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(yk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Zf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Vy(mk+l).then(()=>{s(l,i,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function ep(t,e,n,r=!1){const s=new My(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class vk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Ek{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tp(this),this.idTokenSubscription=new tp(this),this.beforeStateQueue=new vk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}async initializeRecaptchaConfig(){const e=await Oy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ny(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new My(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xi(t){return nt(t)}class tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=s0(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function wk(t,e){const n=Va(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zo(i,e??{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function Tk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ik(t,e,n){const r=Xi(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ly(e),{host:o,port:l}=Ak(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||bk()}function Ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ak(t){const e=Ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:np(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:np(o)}}}function np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ch{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function Rk(t,e){return bs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ql(t,e){return cl(t,"POST","/v1/accounts:signInWithPassword",Ji(t,e))}/**
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
 */async function Pk(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}async function Sk(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}/**
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
 */class Ri extends Ch{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ep(e,r,"signInWithPassword");return ql(e,s)}else return ql(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ep(e,r,"signInWithPassword");return ql(e,i)}else return Promise.reject(s)});case"emailLink":return Pk(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Rk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sk(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zr(t,e){return cl(t,"POST","/v1/accounts:signInWithIdp",Ji(t,e))}/**
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
 */const Ck="http://localhost";class Tr extends Ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Tr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:Ck,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
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
 */function kk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xk(t){const e=Ms(Ls(t)).link,n=e?Ms(Ls(e)).deep_link_id:null,r=Ms(Ls(t)).deep_link_id;return(r?Ms(Ls(r)).link:null)||r||n||e||t}class kh{constructor(e){var n,r,s,i,o,l;const a=Ms(Ls(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=kk((s=a.mode)!==null&&s!==void 0?s:null);Z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=xk(e);try{return new kh(n)}catch{return null}}}/**
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
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kh.parseLink(n);return Z(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends Uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends Yi{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class On extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
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
 */class Nn extends Yi{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class Vn extends Yi{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gr._fromIdTokenResponse(e,r,s),o=rp(r);return new ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rp(r);return new ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ua extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ua(e,n,r,s)}}function Fy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(t,i,e,r):i})}async function Dk(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",r)}/**
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
 */async function Ok(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ai(t,Fy(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=Ph(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),ps._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function $y(t,e,n=!1){const r="signIn",s=await Fy(t,r,e),i=await ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Nk(t,e){return $y(Xi(t),e)}function Vk(t,e,n){return Nk(nt(t),Rs.credential(e,n))}function Mk(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function Lk(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}const ha="__sak";/**
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
 */class By{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Uk(){const t=ft();return Sh(t)||ul(t)}const Fk=1e3,$k=10;class jy extends By{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uk()&&fk(),this.fallbackToPolling=xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$k):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jy.type="LOCAL";const Bk=jy;/**
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
 */class qy extends By{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qy.type="SESSION";const Hy=qy;/**
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
 */function jk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await jk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hl.receivers=[];/**
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
 */function xh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=xh("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(d.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function Hk(t){sn().location.href=t}/**
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
 */function zy(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function zk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kk(){return zy()?self:null}/**
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
 */const Wy="firebaseLocalStorageDb",Gk=1,da="firebaseLocalStorage",Ky="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(t,e){return t.transaction([da],e?"readwrite":"readonly").objectStore(da)}function Qk(){const t=indexedDB.deleteDatabase(Wy);return new Zi(t).toPromise()}function Hc(){const t=indexedDB.open(Wy,Gk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(da,{keyPath:Ky})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(da)?e(r):(r.close(),await Qk(),e(await Hc()))})})}async function sp(t,e,n){const r=dl(t,!0).put({[Ky]:e,value:n});return new Zi(r).toPromise()}async function Jk(t,e){const n=dl(t,!1).get(e),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function ip(t,e){const n=dl(t,!0).delete(e);return new Zi(n).toPromise()}const Xk=800,Yk=3;class Gy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hl._getInstance(Kk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zk(),!this.activeServiceWorker)return;this.sender=new qk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await sp(e,ha,"1"),await ip(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Jk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dl(s,!1).getAll();return new Zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gy.type="LOCAL";const Zk=Gy;new Qi(3e4,6e4);/**
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
 */function e1(t,e){return e?mn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dh extends Ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t1(t){return $y(t.auth,new Dh(t),t.bypassAuthState)}function n1(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Ok(n,new Dh(t),t.bypassAuthState)}async function r1(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Dk(n,new Dh(t),t.bypassAuthState)}/**
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
 */class Qy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return n1;default:qt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const s1=new Qi(2e3,1e4);class Hr extends Qy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s1.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const i1="pendingRedirect",Vo=new Map;class o1 extends Qy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const r=await a1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(t,e){const n=u1(e),r=c1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function l1(t,e){Vo.set(t._key(),e)}function c1(t){return mn(t._redirectPersistence)}function u1(t){return No(i1,t.config.apiKey,t.name)}async function h1(t,e,n=!1){const r=Xi(t),s=e1(r,e),o=await new o1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const d1=10*60*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d1&&this.cachedEventUids.clear(),this.cachedEventUids.has(op(e))}saveEventToCache(e){this.cachedEventUids.add(op(e)),this.lastProcessedEventTime=Date.now()}}function op(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jy(t);default:return!1}}/**
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
 */async function g1(t,e={}){return bs(t,"GET","/v1/projects",e)}/**
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
 */const m1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_1=/^https?/;async function y1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g1(t);for(const n of e)try{if(v1(n))return}catch{}qt(t,"unauthorized-domain")}function v1(t){const e=qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_1.test(n))return!1;if(m1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const E1=new Qi(3e4,6e4);function ap(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w1(t){return new Promise((e,n)=>{var r,s,i;function o(){ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ap(),n(rn(t,"network-request-failed"))},timeout:E1.get()})}if(!((s=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const l=gk("iframefcb");return sn()[l]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},Vy(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function T1(t){return Mo=Mo||w1(t),Mo}/**
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
 */const I1=new Qi(5e3,15e3),A1="__/auth/iframe",b1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S1(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rh(e,b1):`https://${t.config.authDomain}/${A1}`,r={apiKey:e.apiKey,appName:t.name,v:Rr},s=P1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xi(r).slice(1)}`}async function C1(t){const e=await T1(t),n=sn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:S1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{i(o)},I1.get());function a(){sn().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const k1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x1=500,D1=600,O1="_blank",N1="http://localhost";class lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V1(t,e,n,r=x1,s=D1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},k1),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ft().toLowerCase();n&&(l=Ry(c)?O1:n),by(c)&&(e=e||N1,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(hk(c)&&l!=="_self")return M1(e||"",l),new lp(null);const h=window.open(e||"",l,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new lp(h)}function M1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const L1="__/auth/handler",U1="emulator/auth/handler",F1=encodeURIComponent("fac");async function cp(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rr,eventId:s};if(e instanceof Uy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",r0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Yi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${F1}=${encodeURIComponent(a)}`:"";return`${$1(t)}?${xi(l).slice(1)}${c}`}function $1({config:t}){return t.emulator?Rh(t,U1):`https://${t.authDomain}/${L1}`}/**
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
 */const Hl="webStorageSupport";class B1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hy,this._completeRedirectFn=h1,this._overrideRedirectResult=l1}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cp(e,n,r,qc(),s);return V1(e,o,xh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cp(e,n,r,qc(),s);return Hk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C1(e),r=new f1(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hl];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xy()||Sh()||ul()}}const j1=B1;var up="@firebase/auth",hp="1.1.0";/**
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
 */class q1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function H1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function z1(t){yr(new Gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dy(t)},c=new Ek(r,s,i,a);return Tk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Gn("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(r=>new q1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(up,hp,H1(t)),en(up,hp,"esm2017")}/**
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
 */const W1=5*60,K1=Hg("authIdTokenMaxAge")||W1;let dp=null;const G1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K1)return;const s=n==null?void 0:n.token;dp!==s&&(dp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Q1(t=wu()){const e=Va(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wk(t,{popupRedirectResolver:j1,persistence:[Zk,Bk,Hy]}),r=Hg("authTokenSyncURL");if(r){const i=G1(r);Lk(n,i,()=>i(n.currentUser)),Mk(n,o=>i(o))}const s=Bg("auth");return s&&Ik(n,`http://${s}`),n}z1("Browser");const J1=xa("auth",()=>{const t=ue(!1),e=xe(()=>t.value);return{auth:t,getAuth:e,setAuth:r=>{t.value=r}}}),X1={class:"flex h-screen justify-center items-center"},Y1={class:"w-full lg:w-[30%] mx-auto bg-white border-primary border-2 border-e-4 border-b-4 rounded-lg"},Z1=["onSubmit"],ex=m("div",{class:"text-3xl mx-auto"},"Login",-1),tx=m("div",{class:"text-end"},[m("button",{type:"submit",class:"bg-primary rounded-sm text-white px-3 py-2 shadow-sm"}," Submit ")],-1),nx={__name:"Login",setup(t){const e=Q1(Di),n=ue(null),r=ue(null),s=fI(),i=J1(),o=()=>{Vk(e,n.value,r.value).then(l=>{l.user.accessToken&&(i.setAuth(!0),s.push("/dashboard-portfolio"))}).catch(l=>{l.code,l.message,s.push("/login"),i.setAuth(!1)})};return(l,a)=>(T(),ie("div",X1,[m("div",Y1,[m("form",{onSubmit:gg(o,["prevent"]),class:"flex flex-col gap-3 p-3"},[ex,m("div",null,[ec(m("input",{type:"text",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your email","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},null,512),[[ac,n.value]])]),m("div",null,[ec(m("input",{type:"password",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your password","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[ac,r.value]])]),tx],40,Z1)])]))}};const rx={class:"flex h-screen overflow-auto justify-end me-[10%]"},sx={class:"w-[10%] fixed left-0 mt-1 h-screen overflow-auto bg-background"},ix={class:"flex flex-col mt-5"},ox={class:"w-[80%] ps-3"},ax={__name:"Sidebar",setup(t){const e=Si();return(n,r)=>(T(),ie("div",rx,[m("div",sx,[m("div",ix,[m("a",{href:"/dashboard-portfolio",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":Pe(e).fullPath==="/dashboard-portfolio"}])}," Portfolio ",2),m("a",{href:"/dashboard-about",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":Pe(e).fullPath==="/dashboard-about"}])}," About ",2),m("a",{href:"/dashboard-skill",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":Pe(e).fullPath==="/dashboard-skill"}])}," Skill ",2),m("a",{href:"/dashobard-contact",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":Pe(e).fullPath==="/dashboard-contact"}])}," Contact ",2)])]),m("div",ox,[hu(n.$slots,"content",{},void 0,!0)])]))}},fl=mu(ax,[["__scopeId","data-v-fd3c0b26"]]);/**
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
 */const Xy="firebasestorage.googleapis.com",Yy="storageBucket",lx=2*60*1e3,cx=10*60*1e3,ux=1e3;/**
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
 */class Le extends cn{constructor(e,n,r=0){super(zl(e),`Firebase Storage: ${n} (${zl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function zl(t){return"storage/"+t}function Oh(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Oe.UNKNOWN,t)}function hx(t){return new Le(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dx(t){return new Le(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Oe.UNAUTHENTICATED,t)}function px(){return new Le(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gx(t){return new Le(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Zy(){return new Le(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ev(){return new Le(Oe.CANCELED,"User canceled the upload/download.")}function mx(t){return new Le(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function _x(t){return new Le(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yx(){return new Le(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Yy+"' property when initializing the app?")}function tv(){return new Le(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vx(){return new Le(Oe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Ex(){return new Le(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wx(t){return new Le(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zc(t){return new Le(Oe.INVALID_ARGUMENT,t)}function nv(){return new Le(Oe.APP_DELETED,"The Firebase app was deleted.")}function Tx(t){return new Le(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ei(t,e){return new Le(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Os(t){throw new Le(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw _x(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},v=n===Xy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",R=new RegExp(`^https?://${v}/${s}/${E}`,"i"),M=[{regex:l,indices:a,postModify:i},{regex:f,indices:y,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<M.length;x++){const J=M[x],$=J.regex.exec(e);if($){const ge=$[J.indices.bucket];let X=$[J.indices.path];X||(X=""),r=new Rt(ge,X),J.postModify(r);break}}if(r==null)throw mx(e);return r}}class Ix{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ax(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(f,a())},E)}function d(){i&&clearTimeout(i)}function f(E,...R){if(c){d();return}if(E){d(),u.call(null,E,...R);return}if(a()||o){d(),u.call(null,E,...R);return}r<64&&(r*=2);let M;l===1?(l=2,M=0):M=(r+Math.random())*1e3,h(M)}let y=!1;function v(E){y||(y=!0,d(),!c&&(s!==null?(E||(l=2),clearTimeout(s),h(0)):E||(l=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function bx(t){t(!1)}/**
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
 */function Rx(t){return t!==void 0}function Px(t){return typeof t=="function"}function Sx(t){return typeof t=="object"&&!Array.isArray(t)}function pl(t){return typeof t=="string"||t instanceof String}function fp(t){return Nh()&&t instanceof Blob}function Nh(){return typeof Blob<"u"&&!GI()}function pp(t,e,n,r){if(r<e)throw zc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function eo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var mr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(mr||(mr={}));/**
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
 */function sv(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class Cx{constructor(e,n,r,s,i,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new wo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===mr.NO_ERROR,a=i.getStatus();if(!l||sv(a,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===mr.ABORT;r(!1,new wo(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;r(!0,new wo(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Rx(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=Oh();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?nv():ev();o(a)}else{const a=Zy();o(a)}};this.canceled_?n(!1,new wo(!1,null,!0)):this.backoffId_=Ax(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Dx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ox(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Nx(t,e,n,r,s,i,o=!0){const l=rv(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return Dx(c,e),kx(c,n),xx(c,i),Ox(c,r),new Cx(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Vx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Mx(...t){const e=Vx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Nh())return new Blob(t);throw new Le(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Lx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Ux(t){if(typeof atob>"u")throw wx("base-64");return atob(t)}/**
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
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wl{constructor(e,n){this.data=e,this.contentType=n||null}}function Fx(t,e){switch(t){case Zt.RAW:return new Wl(iv(e));case Zt.BASE64:case Zt.BASE64URL:return new Wl(ov(t,e));case Zt.DATA_URL:return new Wl(Bx(e),jx(e))}throw Oh()}function iv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $x(t){let e;try{e=decodeURIComponent(t)}catch{throw ei(Zt.DATA_URL,"Malformed data URL.")}return iv(e)}function ov(t,e){switch(t){case Zt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ux(e)}catch(s){throw s.message.includes("polyfill")?s:ei(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class av{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ei(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Bx(t){const e=new av(t);return e.base64?ov(Zt.BASE64,e.rest):$x(e.rest)}function jx(t){return new av(t).contentType}function qx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Mn{constructor(e,n){let r=0,s="";fp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(fp(this.data_)){const r=this.data_,s=Lx(r,e,n);return s===null?null:new Mn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mn(r,!0)}}static getBlob(...e){if(Nh()){const n=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(Mx.apply(null,n))}else{const n=e.map(o=>pl(o)?Fx(Zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Mn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function lv(t){let e;try{e=JSON.parse(t)}catch{return null}return Sx(e)?e:null}/**
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
 */function Hx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Wx(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Wx}}let To=null;function Kx(t){return!pl(t)||t.length<2?t:cv(t)}function uv(){if(To)return To;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return Kx(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),To=t,To}function Gx(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Qx(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Gx(r,t),r}function hv(t,e,n){const r=lv(e);return r===null?null:Qx(t,r,n)}function Jx(t,e,n,r){const s=lv(e);if(s===null||!pl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=eo(d,n,r),y=rv({alt:"media",token:c});return f+y})[0]}function dv(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ps{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _n(t){if(!t)throw Oh()}function Vh(t,e){function n(r,s){const i=hv(t,s,e);return _n(i!==null),i}return n}function Xx(t,e){function n(r,s){const i=hv(t,s,e);return _n(i!==null),Jx(i,s,t.host,t._protocol)}return n}function to(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=px():s=fx():n.getStatus()===402?s=dx(t.bucket):n.getStatus()===403?s=gx(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function fv(t){const e=to(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=hx(t.path)),i.serverResponse=s.serverResponse,i}return n}function Yx(t,e,n){const r=e.fullServerUrl(),s=eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Ps(s,i,Vh(t,n),o);return l.errorHandler=fv(e),l}function Zx(t,e,n){const r=e.fullServerUrl(),s=eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Ps(s,i,Xx(t,n),o);return l.errorHandler=fv(e),l}function eD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function pv(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eD(null,e)),r}function tD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let M="";for(let x=0;x<2;x++)M=M+Math.random().toString().slice(2);return M}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const c=pv(e,r,s),u=dv(c,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+a+"--",f=Mn.getBlob(h,r,d);if(f===null)throw tv();const y={name:c.fullPath},v=eo(i,t.host,t._protocol),E="POST",R=t.maxUploadRetryTime,k=new Ps(v,E,Vh(t,n),R);return k.urlParams=y,k.headers=o,k.body=f.uploadData(),k.errorHandler=to(e),k}class fa{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Mh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{_n(!1)}return _n(!!n&&(e||["active"]).indexOf(n)!==-1),n}function nD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=pv(e,r,s),l={name:o.fullPath},a=eo(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=dv(o,n),d=t.maxUploadRetryTime;function f(v){Mh(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{_n(!1)}return _n(pl(E)),E}const y=new Ps(a,c,f,d);return y.urlParams=l,y.headers=u,y.body=h,y.errorHandler=to(e),y}function rD(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const u=Mh(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{_n(!1)}h||_n(!1);const d=Number(h);return _n(!isNaN(d)),new fa(d,r.size(),u==="final")}const o="POST",l=t.maxUploadRetryTime,a=new Ps(n,o,i,l);return a.headers=s,a.errorHandler=to(e),a}const gp=256*1024;function sD(t,e,n,r,s,i,o,l){const a=new fa(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw vx();const c=a.total-a.current;let u=c;s>0&&(u=Math.min(u,s));const h=a.current,d=h+u;let f="";u===0?f="finalize":c===u?f="upload, finalize":f="upload";const y={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${a.current}`},v=r.slice(h,d);if(v===null)throw tv();function E(x,J){const $=Mh(x,["active","final"]),ge=a.current+u,X=r.size();let se;return $==="final"?se=Vh(e,i)(x,J):se=null,new fa(ge,X,$==="final",se)}const R="POST",k=e.maxUploadRetryTime,M=new Ps(n,R,E,k);return M.headers=y,M.body=v.uploadData(),M.progressCallback=l||null,M.errorHandler=to(t),M}const wt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Kl(t){switch(t){case"running":case"pausing":case"canceling":return wt.RUNNING;case"paused":return wt.PAUSED;case"success":return wt.SUCCESS;case"canceled":return wt.CANCELED;case"error":return wt.ERROR;default:return wt.ERROR}}/**
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
 */class iD{constructor(e,n,r){if(Px(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Lr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class oD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=mr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=mr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=mr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Os("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Os("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Os("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Os("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Os("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aD extends oD{initXhr(){this.xhr_.responseType="text"}}function jr(){return new aD}/**
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
 */class lD{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=uv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Oe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(sv(s.status,[]))if(i)s=Zy();else{this.sleepTime=Math.max(this.sleepTime*2,ux),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Oe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=nD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,jr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=rD(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,jr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=gp*this._chunkMultiplier,n=new fa(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=sD(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,jr,s,i,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){gp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Yx(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,jr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=tD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,jr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ev(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Kl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new iD(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Kl(this._state)){case wt.SUCCESS:Lr(this._resolve.bind(null,this.snapshot))();break;case wt.CANCELED:case wt.ERROR:const n=this._reject;Lr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Kl(this._state)){case wt.RUNNING:case wt.PAUSED:e.next&&Lr(e.next.bind(e,this.snapshot))();break;case wt.SUCCESS:e.complete&&Lr(e.complete.bind(e))();break;case wt.CANCELED:case wt.ERROR:e.error&&Lr(e.error.bind(e,this._error))();break;default:e.error&&Lr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ir{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ir(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cv(this._location.path)}get storage(){return this._service}get parent(){const e=Hx(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new Ir(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Tx(e)}}function cD(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new lD(t,new Mn(e),n)}function uD(t){t._throwIfRoot("getDownloadURL");const e=Zx(t.storage,t._location,uv());return t.storage.makeRequestWithTokens(e,jr).then(n=>{if(n===null)throw Ex();return n})}function hD(t,e){const n=zx(t._location.path,e),r=new Rt(t._location.bucket,n);return new Ir(t.storage,r)}/**
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
 */function dD(t){return/^[A-Za-z]+:\/\//.test(t)}function fD(t,e){return new Ir(t,e)}function gv(t,e){if(t instanceof Lh){const n=t;if(n._bucket==null)throw yx();const r=new Ir(n,n._bucket);return e!=null?gv(r,e):r}else return e!==void 0?hD(t,e):t}function pD(t,e){if(e&&dD(e)){if(t instanceof Lh)return fD(t,e);throw zc("To use ref(service, url), the first argument must be a Storage instance.")}else return gv(t,e)}function mp(t,e){const n=e==null?void 0:e[Yy];return n==null?null:Rt.makeFromBucketSpec(n,t)}function gD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:zg(s,t.app.options.projectId))}class Lh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Xy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lx,this._maxUploadRetryTime=cx,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ir(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Ix(nv());{const o=Nx(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _p="@firebase/storage",yp="0.11.2";/**
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
 */const mv="storage";function mD(t,e,n){return t=nt(t),cD(t,e,n)}function _D(t){return t=nt(t),uD(t)}function yD(t,e){return t=nt(t),pD(t,e)}function vD(t=wu(),e){t=nt(t);const r=Va(t,mv).getImmediate({identifier:e}),s=jg("storage");return s&&ED(r,...s),r}function ED(t,e,n,r={}){gD(t,e,n,r)}function wD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Lh(n,r,s,e,Rr)}function TD(){yr(new Gn(mv,wD,"PUBLIC").setMultipleInstances(!0)),en(_p,yp,""),en(_p,yp,"esm2017")}TD();let Io;const ID=new Uint8Array(16);function AD(){if(!Io&&(Io=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Io))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Io(ID)}const Xe=[];for(let t=0;t<256;++t)Xe.push((t+256).toString(16).slice(1));function bD(t,e=0){return(Xe[t[e+0]]+Xe[t[e+1]]+Xe[t[e+2]]+Xe[t[e+3]]+"-"+Xe[t[e+4]]+Xe[t[e+5]]+"-"+Xe[t[e+6]]+Xe[t[e+7]]+"-"+Xe[t[e+8]]+Xe[t[e+9]]+"-"+Xe[t[e+10]]+Xe[t[e+11]]+Xe[t[e+12]]+Xe[t[e+13]]+Xe[t[e+14]]+Xe[t[e+15]]).toLowerCase()}const RD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),vp={randomUUID:RD};function PD(t,e,n){if(vp.randomUUID&&!e&&!t)return vp.randomUUID();t=t||{};const r=t.random||(t.rng||AD)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return bD(r)}const Uh=xa("storage",()=>{const t=vD(Di),e=PD(),n=ue(null);return{setImage:async s=>{try{const i=yD(t,`about/${e}.jpg`),o=mD(i,s);return await new Promise((l,a)=>{o.on("state_changed",c=>{const u=c.bytesTransferred/c.totalBytes*100;switch(console.log("Upload is "+u+"% done"),c.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},c=>{a(c)},async()=>{const c=await _D(o.snapshot.ref);n.value=c,l()})}),n.value}catch(i){throw console.error("Error:",i),i}},url:n}}),SD={class:"my-5"},CD={class:"w-full text-md text-left bg-white text-black"},kD=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),xD={class:"px-6 border"},DD={class:"px-6 border"},OD=["src"],ND={class:"px-6 border"},VD={class:"flex items-center gap-3"},MD=["onClick"],LD=m("div",{class:"flex justify-center"},"added image",-1),UD={__name:"list",setup(t){const e=Uh(),n=kr(),r=ue(null),s=ue(null),i=Si(),o=ue(0);yt(async()=>{await n.setAllData("about"),o.value=n.getAboutData.length});const l=()=>{r.value.click()},a=async h=>{const d=h.target.files[0];o.value++,s.value=await e.setImage(d),c(o.value)},c=async h=>{await n.setData("about",`${h}`,{id:h,url:s.value}),window.location.href=`${i.fullPath}`},u=async h=>{await n.deleteData("about",h),window.location.href=`${i.fullPath}`};return(h,d)=>(T(),ie("div",null,[fe(fl,null,{content:br(()=>[m("div",SD,[m("table",CD,[kD,m("tbody",null,[(T(!0),ie(Ve,null,ln(Pe(n).getAboutData,f=>(T(),ie("tr",{class:"bg-white border-b",key:f.id},[m("td",xD,zn(f.id),1),m("td",DD,[m("img",{src:f.url,class:"h-[50px]",alt:""},null,8,OD)]),m("td",ND,[m("div",VD,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:y=>u(f.id)}," Delete ",8,MD)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:l},[LD,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:a,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},FD={class:"my-5"},$D={class:"w-full text-md text-left bg-white text-black"},BD=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Folder"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),jD={class:"px-6 border"},qD={class:"px-6 border"},HD={class:"flex gap-3 items-center"},zD=m("img",{src:Lg,class:"h-[50px]",alt:""},null,-1),WD={class:"px-6 border"},KD={class:"flex items-center gap-3"},GD=["href"],QD=["onClick"],JD={colspan:"3",class:"py-3 cursor-pointer"},XD=["onSubmit"],YD=m("button",{type:"submit",class:"flex justify-center bg-primary p-2"}," added folder ",-1),ZD={__name:"list",setup(t){const e=kr(),n=ue(0),r=ue(null),s=Si();yt(async()=>{await e.setAllData("portfolio"),n.value=e.getPortfolioData.length});const i=async()=>{n.value++,await e.setData("portfolio",`${n.value}`,{id:n.value,name:r.value}),window.location.href=`${s.fullPath}`},o=async l=>{await e.deleteData("portfolio",l),window.location.href=`${s.fullPath}`};return(l,a)=>(T(),ie("div",null,[fe(fl,null,{content:br(()=>[m("div",FD,[m("table",$D,[BD,m("tbody",null,[(T(!0),ie(Ve,null,ln(Pe(e).getPortfolioData,c=>(T(),ie("tr",{class:"bg-white border-b",key:c.id},[m("td",jD,zn(c.id),1),m("td",qD,[m("div",HD,[zD,Pa(" "+zn(c.name),1)])]),m("td",WD,[m("div",KD,[m("a",{href:`/dashboard-detail?name=${c.name}`,class:"cursor-pointer hover:bg-desktopHover"}," Edit ",8,GD),m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:u=>o(c.id)}," Delete ",8,QD)])])]))),128)),m("tr",null,[m("td",JD,[m("form",{onSubmit:gg(i,["prevent"]),class:"flex justify-center"},[ec(m("input",{type:"text",class:"px-2 border border-primary w-[20%]","onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c),required:"",placeholder:"Enter foler name"},null,512),[[ac,r.value]]),YD],40,XD)])])])])])]),_:1})]))}},eO={class:"my-5"},tO={class:"w-full text-md text-left bg-white text-black"},nO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),rO={class:"px-6 border"},sO={class:"px-6 border"},iO=["src"],oO={class:"px-6 border"},aO={class:"flex items-center gap-3"},lO=["onClick"],cO=m("div",{class:"flex justify-center"},"added image",-1),uO={__name:"list",setup(t){const e=Uh(),n=kr(),r=ue(null),s=ue(null),i=ue(0),o=Si();yt(async()=>{await n.setAllData("skill"),i.value=n.getSkillData.length});const l=()=>{r.value.click()},a=async h=>{const d=h.target.files[0];i.value++,s.value=await e.setImage(d),c(i.value)},c=async h=>{await n.setData("skill",`${h}`,{id:h,url:s.value}),window.location.href=`${o.fullPath}`},u=async h=>{await n.deleteData("skill",h),window.location.href=`${o.fullPath}`};return(h,d)=>(T(),ie("div",null,[fe(fl,null,{content:br(()=>[m("div",eO,[m("table",tO,[nO,m("tbody",null,[(T(!0),ie(Ve,null,ln(Pe(n).getSkillData,f=>(T(),ie("tr",{class:"bg-white border-b",key:f.id},[m("td",rO,zn(f.id),1),m("td",sO,[m("img",{src:f.url,class:"h-[50px]",alt:""},null,8,iO)]),m("td",oO,[m("div",aO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:y=>u(f.id)}," Delete ",8,lO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:l},[cO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:a,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},hO={class:"my-5"},dO={class:"w-full text-md text-left bg-white text-black"},fO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),pO={class:"px-6 border"},gO={class:"px-6 border"},mO=["src"],_O={class:"px-6 border"},yO={class:"flex items-center gap-3"},vO=["onClick"],EO=m("div",{class:"flex justify-center"},"added image",-1),wO={__name:"detail",setup(t){const e=Uh(),n=ph(Di),r=kr(),s=ue(null),i=ue(null),o=Si(),l=ue(0),a=ue([]);yt(async()=>{const f=Eh(fh(n,o.query.name));(await Ih(f)).forEach(v=>{a.value.push(v.data())}),l.value=a.value.length});const c=()=>{s.value.click()},u=async f=>{const y=f.target.files[0];l.value++,i.value=await e.setImage(y),h(l.value)},h=async f=>{await r.setData(o.query.name,`${f}`,{id:f,url:i.value}),window.location.href=`${o.fullPath}`},d=async f=>{await r.deleteData(o.query.name,f),window.location.href=`${o.fullPath}`};return(f,y)=>(T(),ie("div",null,[fe(fl,null,{content:br(()=>[m("div",hO,[m("table",dO,[fO,m("tbody",null,[(T(!0),ie(Ve,null,ln(a.value,v=>(T(),ie("tr",{class:"bg-white border-b",key:v.id},[m("td",pO,zn(v.id),1),m("td",gO,[m("img",{src:v.url,class:"h-[50px]",alt:""},null,8,mO)]),m("td",_O,[m("div",yO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:E=>d(v.id)}," Delete ",8,vO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:c},[EO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:u,ref_key:"imageInput",ref:s},null,544)])])])])])]),_:1})]))}},TO=[{path:"/",component:zC},{path:"/login",component:nx},{path:"/dashboard-about",component:UD},{path:"/dashboard-portfolio",component:ZD},{path:"/dashboard-detail",component:wO},{path:"/dashboard-skill",component:uO}],IO=hI({history:PT(),routes:TO}),AO=zw(),Fh=jw(cT);Fh.use(IO);Fh.use(AO);Fh.mount("#app");
