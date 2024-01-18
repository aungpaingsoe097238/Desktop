(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Hc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pe={},Qr=[],Ft=()=>{},fv=()=>!1,pv=/^on[^a-z]/,ga=t=>pv.test(t),zc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gv=Object.prototype.hasOwnProperty,ge=(t,e)=>gv.call(t,e),J=Array.isArray,Yr=t=>ma(t)==="[object Map]",mp=t=>ma(t)==="[object Set]",oe=t=>typeof t=="function",ze=t=>typeof t=="string",Kc=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",_p=t=>Ne(t)&&oe(t.then)&&oe(t.catch),yp=Object.prototype.toString,ma=t=>yp.call(t),mv=t=>ma(t).slice(8,-1),vp=t=>ma(t)==="[object Object]",Gc=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bo=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_v=/-(\w)/g,cn=_a(t=>t.replace(_v,(e,n)=>n?n.toUpperCase():"")),yv=/\B([A-Z])/g,ys=_a(t=>t.replace(yv,"-$1").toLowerCase()),ya=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=_a(t=>t?`on${ya(t)}`:""),oi=(t,e)=>!Object.is(t,e),Ro=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Uo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fh;const Gl=()=>Fh||(Fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rr(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?Tv(r):Rr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ze(t))return t;if(Ne(t))return t}}const vv=/;(?![^(]*\))/g,Ev=/:([^]+)/,wv=/\/\*[^]*?\*\//g;function Tv(t){const e={};return t.replace(wv,"").split(vv).forEach(n=>{if(n){const r=n.split(Ev);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function lr(t){let e="";if(ze(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const r=lr(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Av=Hc(Iv);function Ep(t){return!!t||t===""}const Ot=t=>ze(t)?t:t==null?"":J(t)||Ne(t)&&(t.toString===yp||!oe(t.toString))?JSON.stringify(t,wp,2):String(t),wp=(t,e)=>e&&e.__v_isRef?wp(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:mp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!J(e)&&!vp(e)?String(e):e;let bt;class Tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ip(t){return new Tp(t)}function bv(t,e=bt){e&&e.active&&e.effects.push(t)}function Qc(){return bt}function Ap(t){bt&&bt.cleanups.push(t)}const Yc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},bp=t=>(t.w&Kn)>0,Rp=t=>(t.n&Kn)>0,Rv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},Sv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];bp(s)&&!Rp(s)?s.delete(t):e[n++]=s,s.w&=~Kn,s.n&=~Kn}e.length=n}},Fo=new WeakMap;let Fs=0,Kn=1;const Ql=30;let Mt;const fr=Symbol(""),Yl=Symbol("");class Jc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bv(this,r)}run(){if(!this.active)return this.fn();let e=Mt,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,Fn=!0,Kn=1<<++Fs,Fs<=Ql?Rv(this):$h(this),this.fn()}finally{Fs<=Ql&&Sv(this),Kn=1<<--Fs,Mt=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&($h(this),this.onStop&&this.onStop(),this.active=!1)}}function $h(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const Sp=[];function vs(){Sp.push(Fn),Fn=!1}function Es(){const t=Sp.pop();Fn=t===void 0?!0:t}function Tt(t,e,n){if(Fn&&Mt){let r=Fo.get(t);r||Fo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Yc()),Pp(s)}}function Pp(t,e){let n=!1;Fs<=Ql?Rp(t)||(t.n|=Kn,n=!bp(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function En(t,e,n,r,s,i){const o=Fo.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&J(t)){const a=Number(r);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":J(t)?Gc(n)&&l.push(o.get("length")):(l.push(o.get(fr)),Yr(t)&&l.push(o.get(Yl)));break;case"delete":J(t)||(l.push(o.get(fr)),Yr(t)&&l.push(o.get(Yl)));break;case"set":Yr(t)&&l.push(o.get(fr));break}if(l.length===1)l[0]&&Jl(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Jl(Yc(a))}}function Jl(t,e){const n=J(t)?t:[...t];for(const r of n)r.computed&&Bh(r);for(const r of n)r.computed||Bh(r)}function Bh(t,e){(t!==Mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Pv(t,e){var n;return(n=Fo.get(t))==null?void 0:n.get(e)}const Cv=Hc("__proto__,__v_isRef,__isVue"),Cp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kc)),kv=Xc(),xv=Xc(!1,!0),Dv=Xc(!0),jh=Ov();function Ov(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=me(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vs();const r=me(this)[e].apply(this,n);return Es(),r}}),t}function Nv(t){const e=me(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function Xc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Yv:Np:e?Op:Dp).get(r))return r;const o=J(r);if(!t){if(o&&ge(jh,s))return Reflect.get(jh,s,i);if(s==="hasOwnProperty")return Nv}const l=Reflect.get(r,s,i);return(Kc(s)?Cp.has(s):Cv(s))||(t||Tt(r,"get",s),e)?l:Le(l)?o&&Gc(s)?l:l.value:Ne(l)?t?Mp(l):Di(l):l}}const Vv=kp(),Mv=kp(!0);function kp(t=!1){return function(n,r,s,i){let o=n[r];if(rs(o)&&Le(o)&&!Le(s))return!1;if(!t&&(!$o(s)&&!rs(s)&&(o=me(o),s=me(s)),!J(n)&&Le(o)&&!Le(s)))return o.value=s,!0;const l=J(n)&&Gc(r)?Number(r)<n.length:ge(n,r),a=Reflect.set(n,r,s,i);return n===me(i)&&(l?oi(s,o)&&En(n,"set",r,s):En(n,"add",r,s)),a}}function Lv(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&En(t,"delete",e,void 0),r}function Uv(t,e){const n=Reflect.has(t,e);return(!Kc(e)||!Cp.has(e))&&Tt(t,"has",e),n}function Fv(t){return Tt(t,"iterate",J(t)?"length":fr),Reflect.ownKeys(t)}const xp={get:kv,set:Vv,deleteProperty:Lv,has:Uv,ownKeys:Fv},$v={get:Dv,set(t,e){return!0},deleteProperty(t,e){return!0}},Bv=Ge({},xp,{get:xv,set:Mv}),Zc=t=>t,va=t=>Reflect.getPrototypeOf(t);function io(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(e!==i&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=va(s),l=r?Zc:n?nu:ai;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function oo(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(t!==s&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ao(t,e=!1){return t=t.__v_raw,!e&&Tt(me(t),"iterate",fr),Reflect.get(t,"size",t)}function qh(t){t=me(t);const e=me(this);return va(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function Hh(t,e){e=me(e);const n=me(this),{has:r,get:s}=va(n);let i=r.call(n,t);i||(t=me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?oi(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function zh(t){const e=me(this),{has:n,get:r}=va(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&En(e,"delete",t,void 0),i}function Wh(){const t=me(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function lo(t,e){return function(r,s){const i=this,o=i.__v_raw,l=me(o),a=e?Zc:t?nu:ai;return!t&&Tt(l,"iterate",fr),o.forEach((c,u)=>r.call(s,a(c),a(u),i))}}function co(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=Yr(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...r),u=n?Zc:e?nu:ai;return!e&&Tt(i,"iterate",a?Yl:fr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:this}}function jv(){const t={get(i){return io(this,i)},get size(){return ao(this)},has:oo,add:qh,set:Hh,delete:zh,clear:Wh,forEach:lo(!1,!1)},e={get(i){return io(this,i,!1,!0)},get size(){return ao(this)},has:oo,add:qh,set:Hh,delete:zh,clear:Wh,forEach:lo(!1,!0)},n={get(i){return io(this,i,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:lo(!0,!1)},r={get(i){return io(this,i,!0,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=co(i,!1,!1),n[i]=co(i,!0,!1),e[i]=co(i,!1,!0),r[i]=co(i,!0,!0)}),[t,n,e,r]}const[qv,Hv,zv,Wv]=jv();function eu(t,e){const n=e?t?Wv:zv:t?Hv:qv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const Kv={get:eu(!1,!1)},Gv={get:eu(!1,!0)},Qv={get:eu(!0,!1)},Dp=new WeakMap,Op=new WeakMap,Np=new WeakMap,Yv=new WeakMap;function Jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xv(t){return t.__v_skip||!Object.isExtensible(t)?0:Jv(mv(t))}function Di(t){return rs(t)?t:tu(t,!1,xp,Kv,Dp)}function Vp(t){return tu(t,!1,Bv,Gv,Op)}function Mp(t){return tu(t,!0,$v,Qv,Np)}function tu(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function $n(t){return rs(t)?$n(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function $o(t){return!!(t&&t.__v_isShallow)}function Lp(t){return $n(t)||rs(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Ea(t){return Uo(t,"__v_skip",!0),t}const ai=t=>Ne(t)?Di(t):t,nu=t=>Ne(t)?Mp(t):t;function ru(t){Fn&&Mt&&(t=me(t),Pp(t.dep||(t.dep=Yc())))}function su(t,e){t=me(t);const n=t.dep;n&&Jl(n)}function Le(t){return!!(t&&t.__v_isRef===!0)}function de(t){return Up(t,!1)}function Zv(t){return Up(t,!0)}function Up(t,e){return Le(t)?t:new eE(t,e)}class eE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:ai(e)}get value(){return ru(this),this._value}set value(e){const n=this.__v_isShallow||$o(e)||rs(e);e=n?e:me(e),oi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ai(e),su(this))}}function De(t){return Le(t)?t.value:t}const tE={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fp(t){return $n(t)?t:new Proxy(t,tE)}class nE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ru(this),()=>su(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function rE(t){return new nE(t)}function $p(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=iE(t,n);return e}class sE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Pv(me(this._object),this._key)}}function iE(t,e,n){const r=t[e];return Le(r)?r:new sE(t,e,n)}class oE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jc(e,()=>{this._dirty||(this._dirty=!0,su(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return ru(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function aE(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=Ft):(r=t.get,s=t.set),new oE(r,s,i||!s,n)}function Bn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){wa(i,e,n)}return s}function $t(t,e,n,r){if(oe(t)){const i=Bn(t,e,n,r);return i&&_p(i)&&i.catch(o=>{wa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($t(t[i],e,n,r));return s}function wa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Bn(a,null,10,[t,o,l]);return}}lE(t,n,s,r)}function lE(t,e,n,r=!0){console.error(t)}let li=!1,Xl=!1;const ut=[];let Yt=0;const Jr=[];let pn=null,or=0;const Bp=Promise.resolve();let iu=null;function ou(t){const e=iu||Bp;return t?e.then(this?t.bind(this):t):e}function cE(t){let e=Yt+1,n=ut.length;for(;e<n;){const r=e+n>>>1;ci(ut[r])<t?e=r+1:n=r}return e}function au(t){(!ut.length||!ut.includes(t,li&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?ut.push(t):ut.splice(cE(t.id),0,t),jp())}function jp(){!li&&!Xl&&(Xl=!0,iu=Bp.then(Hp))}function uE(t){const e=ut.indexOf(t);e>Yt&&ut.splice(e,1)}function hE(t){J(t)?Jr.push(...t):(!pn||!pn.includes(t,t.allowRecurse?or+1:or))&&Jr.push(t),jp()}function Kh(t,e=li?Yt+1:0){for(;e<ut.length;e++){const n=ut[e];n&&n.pre&&(ut.splice(e,1),e--,n())}}function qp(t){if(Jr.length){const e=[...new Set(Jr)];if(Jr.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((n,r)=>ci(n)-ci(r)),or=0;or<pn.length;or++)pn[or]();pn=null,or=0}}const ci=t=>t.id==null?1/0:t.id,dE=(t,e)=>{const n=ci(t)-ci(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hp(t){Xl=!1,li=!0,ut.sort(dE);const e=Ft;try{for(Yt=0;Yt<ut.length;Yt++){const n=ut[Yt];n&&n.active!==!1&&Bn(n,null,14)}}finally{Yt=0,ut.length=0,qp(),li=!1,iu=null,(ut.length||Jr.length)&&Hp()}}function fE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Pe;d&&(s=n.map(f=>ze(f)?f.trim():f)),h&&(s=n.map(Kl))}let l,a=r[l=gl(e)]||r[l=gl(cn(e))];!a&&i&&(a=r[l=gl(ys(e))]),a&&$t(a,t,6,s);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,$t(c,t,6,s)}}function zp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!oe(t)){const a=c=>{const u=zp(c,e,!0);u&&(l=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(Ne(t)&&r.set(t,null),null):(J(i)?i.forEach(a=>o[a]=null):Ge(o,i),Ne(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,ys(e))||ge(t,e))}let tt=null,Ia=null;function Bo(t){const e=tt;return tt=t,Ia=t&&t.type.__scopeId||null,e}function pE(t){Ia=t}function gE(){Ia=null}function tn(t,e=tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sd(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ml(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:y,inheritAttrs:v}=t;let E,C;const k=Bo(t);try{if(n.shapeFlag&4){const x=s||r;E=Qt(u.call(x,x,h,i,f,d,y)),C=a}else{const x=e;E=Qt(x.length>1?x(i,{attrs:a,slots:l,emit:c}):x(i,null)),C=e.props?a:mE(a)}}catch(x){Qs.length=0,wa(x,t,1),E=ae(Gn)}let U=E;if(C&&v!==!1){const x=Object.keys(C),{shapeFlag:te}=U;x.length&&te&7&&(o&&x.some(zc)&&(C=_E(C,o)),U=ss(U,C))}return n.dirs&&(U=ss(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),E=U,Bo(k),E}const mE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},_E=(t,e)=>{const n={};for(const r in t)(!zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Gh(r,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ta(c,d))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Gh(r,o,c):!0:!!o;return!1}function Gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function vE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const EE=t=>t.__isSuspense;function wE(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):hE(t)}const uo={};function pr(t,e,n){return Wp(t,e,n)}function Wp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Pe){var l;const a=Qc()===((l=Ke)==null?void 0:l.scope)?Ke:null;let c,u=!1,h=!1;if(Le(t)?(c=()=>t.value,u=$o(t)):$n(t)?(c=()=>t,r=!0):J(t)?(h=!0,u=t.some(x=>$n(x)||$o(x)),c=()=>t.map(x=>{if(Le(x))return x.value;if($n(x))return cr(x);if(oe(x))return Bn(x,a,2)})):oe(t)?e?c=()=>Bn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),$t(t,a,3,[f])}:c=Ft,e&&r){const x=c;c=()=>cr(x())}let d,f=x=>{d=k.onStop=()=>{Bn(x,a,4)}},y;if(di)if(f=Ft,e?n&&$t(e,a,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const x=pw();y=x.__watcherHandles||(x.__watcherHandles=[])}else return Ft;let v=h?new Array(t.length).fill(uo):uo;const E=()=>{if(k.active)if(e){const x=k.run();(r||u||(h?x.some((te,H)=>oi(te,v[H])):oi(x,v)))&&(d&&d(),$t(e,a,3,[x,v===uo?void 0:h&&v[0]===uo?[]:v,f]),v=x)}else k.run()};E.allowRecurse=!!e;let C;s==="sync"?C=E:s==="post"?C=()=>Et(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),C=()=>au(E));const k=new Jc(c,C);e?n?E():v=k.run():s==="post"?Et(k.run.bind(k),a&&a.suspense):k.run();const U=()=>{k.stop(),a&&a.scope&&Wc(a.scope.effects,k)};return y&&y.push(U),U}function TE(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Kp(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Ke;is(this);const l=Wp(s,i.bind(r),n);return o?is(o):gr(),l}function Kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function cr(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))cr(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)cr(t[n],e);else if(mp(t)||Yr(t))t.forEach(n=>{cr(n,e)});else if(vp(t))for(const n in t)cr(t[n],e);return t}function Zl(t,e){const n=tt;if(n===null)return t;const r=Pa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,a,c=Pe]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&cr(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(vs(),$t(a,n,8,[t.el,l,t,e]),Es())}}function Aa(t,e){return oe(t)?(()=>Ge({name:t.name},e,{setup:t}))():t}const Ks=t=>!!t.type.__asyncLoader,Gp=t=>t.type.__isKeepAlive;function IE(t,e){Qp(t,"a",e)}function AE(t,e){Qp(t,"da",e)}function Qp(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Gp(s.parent.vnode)&&bE(r,e,n,s),s=s.parent}}function bE(t,e,n,r){const s=ba(e,t,r,!0);lu(()=>{Wc(r[e],s)},n)}function ba(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vs(),is(n);const l=$t(e,n,t,o);return gr(),Es(),l});return r?s.unshift(i):s.push(i),i}}const bn=t=>(e,n=Ke)=>(!di||t==="sp")&&ba(t,(...r)=>e(...r),n),RE=bn("bm"),yt=bn("m"),SE=bn("bu"),PE=bn("u"),CE=bn("bum"),lu=bn("um"),kE=bn("sp"),xE=bn("rtg"),DE=bn("rtc");function OE(t,e=Ke){ba("ec",t,e)}const Yp="components";function Jp(t,e){return VE(Yp,t,!0,e)||t}const NE=Symbol.for("v-ndc");function VE(t,e,n=!0,r=!1){const s=tt||Ke;if(s){const i=s.type;if(t===Yp){const l=hw(i,!1);if(l&&(l===e||l===cn(e)||l===ya(cn(e))))return i}const o=Qh(s[t]||i[t],e)||Qh(s.appContext[t],e);return!o&&r?i:o}}function Qh(t,e){return t&&(t[e]||t[cn(e)]||t[ya(cn(e))])}function Sr(t,e,n,r){let s;const i=n&&n[r];if(J(t)||ze(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function cu(t,e,n={},r,s){if(tt.isCE||tt.parent&&Ks(tt.parent)&&tt.parent.isCE)return e!=="default"&&(n.name=e),ae("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),I();const o=i&&Xp(i(n)),l=M(je,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Xp(t){return t.some(e=>qo(e)?!(e.type===Gn||e.type===je&&!Xp(e.children)):!0)?t:null}const ec=t=>t?cg(t)?Pa(t)||t.proxy:ec(t.parent):null,Gs=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ec(t.parent),$root:t=>ec(t.root),$emit:t=>t.emit,$options:t=>uu(t),$forceUpdate:t=>t.f||(t.f=()=>au(t.update)),$nextTick:t=>t.n||(t.n=ou.bind(t.proxy)),$watch:t=>TE.bind(t)}),_l=(t,e)=>t!==Pe&&!t.__isScriptSetup&&ge(t,e),ME={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_l(r,e))return o[e]=1,r[e];if(s!==Pe&&ge(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=3,i[e];if(n!==Pe&&ge(n,e))return o[e]=4,n[e];tc&&(o[e]=0)}}const u=Gs[e];let h,d;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&ge(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _l(s,e)?(s[e]=n,!0):r!==Pe&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Pe&&ge(t,o)||_l(e,o)||(l=i[0])&&ge(l,o)||ge(r,o)||ge(Gs,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yh(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tc=!0;function LE(t){const e=uu(t),n=t.proxy,r=t.ctx;tc=!1,e.beforeCreate&&Jh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:y,activated:v,deactivated:E,beforeDestroy:C,beforeUnmount:k,destroyed:U,unmounted:x,render:te,renderTracked:H,renderTriggered:fe,errorCaptured:Y,serverPrefetch:se,expose:be,inheritAttrs:it,components:It,directives:Ct,filters:nr}=e;if(c&&UE(c,r,null),o)for(const Ae in o){const ve=o[Ae];oe(ve)&&(r[Ae]=ve.bind(n))}if(s){const Ae=s.call(n,n);Ne(Ae)&&(t.data=Di(Ae))}if(tc=!0,i)for(const Ae in i){const ve=i[Ae],dn=oe(ve)?ve.bind(n,n):oe(ve.get)?ve.get.bind(n,n):Ft,Rn=!oe(ve)&&oe(ve.set)?ve.set.bind(n):Ft,Wt=xe({get:dn,set:Rn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:vt=>Wt.value=vt})}if(l)for(const Ae in l)Zp(l[Ae],r,n,Ae);if(a){const Ae=oe(a)?a.call(n):a;Reflect.ownKeys(Ae).forEach(ve=>{So(ve,Ae[ve])})}u&&Jh(u,t,"c");function _e(Ae,ve){J(ve)?ve.forEach(dn=>Ae(dn.bind(n))):ve&&Ae(ve.bind(n))}if(_e(RE,h),_e(yt,d),_e(SE,f),_e(PE,y),_e(IE,v),_e(AE,E),_e(OE,Y),_e(DE,H),_e(xE,fe),_e(CE,k),_e(lu,x),_e(kE,se),J(be))if(be.length){const Ae=t.exposed||(t.exposed={});be.forEach(ve=>{Object.defineProperty(Ae,ve,{get:()=>n[ve],set:dn=>n[ve]=dn})})}else t.exposed||(t.exposed={});te&&t.render===Ft&&(t.render=te),it!=null&&(t.inheritAttrs=it),It&&(t.components=It),Ct&&(t.directives=Ct)}function UE(t,e,n=Ft){J(t)&&(t=nc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Nt(s.from||r,s.default,!0):i=Nt(s.from||r):i=Nt(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Jh(t,e,n){$t(J(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zp(t,e,n,r){const s=r.includes(".")?Kp(n,r):()=>n[r];if(ze(t)){const i=e[t];oe(i)&&pr(s,i)}else if(oe(t))pr(s,t.bind(n));else if(Ne(t))if(J(t))t.forEach(i=>Zp(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&pr(s,i,t)}}function uu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(c=>jo(a,c,o,!0)),jo(a,e,o)),Ne(e)&&i.set(e,a),a}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=FE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const FE={data:Xh,props:Zh,emits:Zh,methods:$s,computed:$s,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:$s,directives:$s,watch:BE,provide:Xh,inject:$E};function Xh(t,e){return e?t?function(){return Ge(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function $E(t,e){return $s(nc(t),nc(e))}function nc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function $s(t,e){return t?Ge(Object.create(null),t,e):e}function Zh(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:Ge(Object.create(null),Yh(t),Yh(e??{})):e}function BE(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function eg(){return{app:null,config:{isNativeTag:fv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jE=0;function qE(t,e){return function(r,s=null){oe(r)||(r=Ge({},r)),s!=null&&!Ne(s)&&(s=null);const i=eg(),o=new Set;let l=!1;const a=i.app={_uid:jE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(a,...u)):oe(c)&&(o.add(c),c(a,...u))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,u){return u?(i.components[c]=u,a):i.components[c]},directive(c,u){return u?(i.directives[c]=u,a):i.directives[c]},mount(c,u,h){if(!l){const d=ae(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Pa(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return i.provides[c]=u,a},runWithContext(c){ui=a;try{return c()}finally{ui=null}}};return a}}let ui=null;function So(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=Ke||tt;if(r||ui){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ui._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function HE(){return!!(Ke||tt||ui)}function zE(t,e,n,r=!1){const s={},i={};Uo(i,Sa,1),t.propsDefaults=Object.create(null),tg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function WE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=me(s),[a]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ta(t.emitsOptions,d))continue;const f=e[d];if(a)if(ge(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const y=cn(d);s[y]=rc(a,l,y,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{tg(t,e,s,i)&&(c=!0);let u;for(const h in l)(!e||!ge(e,h)&&((u=ys(h))===h||!ge(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=rc(a,l,h,void 0,t,!0)):delete s[h]);if(i!==l)for(const h in i)(!e||!ge(e,h))&&(delete i[h],c=!0)}c&&En(t,"set","$attrs")}function tg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(bo(a))continue;const c=e[a];let u;s&&ge(s,u=cn(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:Ta(t.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(i){const a=me(n),c=l||Pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=rc(s,a,h,c[h],t,!ge(c,h))}}return o}function rc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ge(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&oe(a)){const{propsDefaults:c}=s;n in c?r=c[n]:(is(s),r=c[n]=a.call(null,e),gr())}else r=a}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ys(n))&&(r=!0))}return r}function ng(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let a=!1;if(!oe(t)){const u=h=>{a=!0;const[d,f]=ng(h,e,!0);Ge(o,d),f&&l.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return Ne(t)&&r.set(t,Qr),Qr;if(J(i))for(let u=0;u<i.length;u++){const h=cn(i[u]);ed(h)&&(o[h]=Pe)}else if(i)for(const u in i){const h=cn(u);if(ed(h)){const d=i[u],f=o[h]=J(d)||oe(d)?{type:d}:Ge({},d);if(f){const y=rd(Boolean,f.type),v=rd(String,f.type);f[0]=y>-1,f[1]=v<0||y<v,(y>-1||ge(f,"default"))&&l.push(h)}}}const c=[o,l];return Ne(t)&&r.set(t,c),c}function ed(t){return t[0]!=="$"}function td(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function nd(t,e){return td(t)===td(e)}function rd(t,e){return J(e)?e.findIndex(n=>nd(n,t)):oe(e)&&nd(e,t)?0:-1}const rg=t=>t[0]==="_"||t==="$stable",hu=t=>J(t)?t.map(Qt):[Qt(t)],KE=(t,e,n)=>{if(e._n)return e;const r=tn((...s)=>hu(e(...s)),n);return r._c=!1,r},sg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rg(s))continue;const i=t[s];if(oe(i))e[s]=KE(s,i,r);else if(i!=null){const o=hu(i);e[s]=()=>o}}},ig=(t,e)=>{const n=hu(e);t.slots.default=()=>n},GE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),Uo(e,"_",n)):sg(e,t.slots={})}else t.slots={},e&&ig(t,e);Uo(t.slots,Sa,1)},QE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(Ge(s,e),!n&&l===1&&delete s._):(i=!e.$stable,sg(e,s)),o=e}else e&&(ig(t,e),o={default:1});if(i)for(const l in s)!rg(l)&&!(l in o)&&delete s[l]};function sc(t,e,n,r,s=!1){if(J(t)){t.forEach((d,f)=>sc(d,e&&(J(e)?e[f]:e),n,r,s));return}if(Ks(r)&&!s)return;const i=r.shapeFlag&4?Pa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Pe?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ze(c)?(u[c]=null,ge(h,c)&&(h[c]=null)):Le(c)&&(c.value=null)),oe(a))Bn(a,l,12,[o,u]);else{const d=ze(a),f=Le(a);if(d||f){const y=()=>{if(t.f){const v=d?ge(h,a)?h[a]:u[a]:a.value;s?J(v)&&Wc(v,i):J(v)?v.includes(i)||v.push(i):d?(u[a]=[i],ge(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,ge(h,a)&&(h[a]=o)):f&&(a.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Et(y,n)):y()}}}const Et=wE;function YE(t){return JE(t)}function JE(t,e){const n=Gl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ft,insertStaticContent:y}=t,v=(p,g,_,w=null,A=null,R=null,F=!1,D=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!Os(p,g)&&(w=T(p),vt(p,A,R,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:P,ref:G,shapeFlag:z}=g;switch(P){case Ra:E(p,g,_,w);break;case Gn:C(p,g,_,w);break;case Po:p==null&&k(g,_,w,F);break;case je:It(p,g,_,w,A,R,F,D,O);break;default:z&1?te(p,g,_,w,A,R,F,D,O):z&6?Ct(p,g,_,w,A,R,F,D,O):(z&64||z&128)&&P.process(p,g,_,w,A,R,F,D,O,N)}G!=null&&A&&sc(G,p&&p.ref,R,g||p,!g)},E=(p,g,_,w)=>{if(p==null)r(g.el=l(g.children),_,w);else{const A=g.el=p.el;g.children!==p.children&&c(A,g.children)}},C=(p,g,_,w)=>{p==null?r(g.el=a(g.children||""),_,w):g.el=p.el},k=(p,g,_,w)=>{[p.el,p.anchor]=y(p.children,g,_,w,p.el,p.anchor)},U=({el:p,anchor:g},_,w)=>{let A;for(;p&&p!==g;)A=d(p),r(p,_,w),p=A;r(g,_,w)},x=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),s(p),p=_;s(g)},te=(p,g,_,w,A,R,F,D,O)=>{F=F||g.type==="svg",p==null?H(g,_,w,A,R,F,D,O):se(p,g,A,R,F,D,O)},H=(p,g,_,w,A,R,F,D)=>{let O,P;const{type:G,props:z,shapeFlag:Q,transition:ne,dirs:ce}=p;if(O=p.el=o(p.type,R,z&&z.is,z),Q&8?u(O,p.children):Q&16&&Y(p.children,O,null,w,A,R&&G!=="foreignObject",F,D),ce&&rr(p,null,w,"created"),fe(O,p,p.scopeId,F,w),z){for(const Ie in z)Ie!=="value"&&!bo(Ie)&&i(O,Ie,null,z[Ie],R,p.children,w,A,ot);"value"in z&&i(O,"value",null,z.value),(P=z.onVnodeBeforeMount)&&Gt(P,w,p)}ce&&rr(p,null,w,"beforeMount");const Re=(!A||A&&!A.pendingBranch)&&ne&&!ne.persisted;Re&&ne.beforeEnter(O),r(O,g,_),((P=z&&z.onVnodeMounted)||Re||ce)&&Et(()=>{P&&Gt(P,w,p),Re&&ne.enter(O),ce&&rr(p,null,w,"mounted")},A)},fe=(p,g,_,w,A)=>{if(_&&f(p,_),w)for(let R=0;R<w.length;R++)f(p,w[R]);if(A){let R=A.subTree;if(g===R){const F=A.vnode;fe(p,F,F.scopeId,F.slotScopeIds,A.parent)}}},Y=(p,g,_,w,A,R,F,D,O=0)=>{for(let P=O;P<p.length;P++){const G=p[P]=D?xn(p[P]):Qt(p[P]);v(null,G,g,_,w,A,R,F,D)}},se=(p,g,_,w,A,R,F)=>{const D=g.el=p.el;let{patchFlag:O,dynamicChildren:P,dirs:G}=g;O|=p.patchFlag&16;const z=p.props||Pe,Q=g.props||Pe;let ne;_&&sr(_,!1),(ne=Q.onVnodeBeforeUpdate)&&Gt(ne,_,g,p),G&&rr(g,p,_,"beforeUpdate"),_&&sr(_,!0);const ce=A&&g.type!=="foreignObject";if(P?be(p.dynamicChildren,P,D,_,w,ce,R):F||ve(p,g,D,null,_,w,ce,R,!1),O>0){if(O&16)it(D,g,z,Q,_,w,A);else if(O&2&&z.class!==Q.class&&i(D,"class",null,Q.class,A),O&4&&i(D,"style",z.style,Q.style,A),O&8){const Re=g.dynamicProps;for(let Ie=0;Ie<Re.length;Ie++){const Fe=Re[Ie],Vt=z[Fe],Mr=Q[Fe];(Mr!==Vt||Fe==="value")&&i(D,Fe,Vt,Mr,A,p.children,_,w,ot)}}O&1&&p.children!==g.children&&u(D,g.children)}else!F&&P==null&&it(D,g,z,Q,_,w,A);((ne=Q.onVnodeUpdated)||G)&&Et(()=>{ne&&Gt(ne,_,g,p),G&&rr(g,p,_,"updated")},w)},be=(p,g,_,w,A,R,F)=>{for(let D=0;D<g.length;D++){const O=p[D],P=g[D],G=O.el&&(O.type===je||!Os(O,P)||O.shapeFlag&70)?h(O.el):_;v(O,P,G,null,w,A,R,F,!0)}},it=(p,g,_,w,A,R,F)=>{if(_!==w){if(_!==Pe)for(const D in _)!bo(D)&&!(D in w)&&i(p,D,_[D],null,F,g.children,A,R,ot);for(const D in w){if(bo(D))continue;const O=w[D],P=_[D];O!==P&&D!=="value"&&i(p,D,P,O,F,g.children,A,R,ot)}"value"in w&&i(p,"value",_.value,w.value)}},It=(p,g,_,w,A,R,F,D,O)=>{const P=g.el=p?p.el:l(""),G=g.anchor=p?p.anchor:l("");let{patchFlag:z,dynamicChildren:Q,slotScopeIds:ne}=g;ne&&(D=D?D.concat(ne):ne),p==null?(r(P,_,w),r(G,_,w),Y(g.children,_,G,A,R,F,D,O)):z>0&&z&64&&Q&&p.dynamicChildren?(be(p.dynamicChildren,Q,_,A,R,F,D),(g.key!=null||A&&g===A.subTree)&&og(p,g,!0)):ve(p,g,_,G,A,R,F,D,O)},Ct=(p,g,_,w,A,R,F,D,O)=>{g.slotScopeIds=D,p==null?g.shapeFlag&512?A.ctx.activate(g,_,w,F,O):nr(g,_,w,A,R,F,O):kt(p,g,O)},nr=(p,g,_,w,A,R,F)=>{const D=p.component=ow(p,w,A);if(Gp(p)&&(D.ctx.renderer=N),aw(D),D.asyncDep){if(A&&A.registerDep(D,_e),!p.el){const O=D.subTree=ae(Gn);C(null,O,g,_)}return}_e(D,p,g,_,A,R,F)},kt=(p,g,_)=>{const w=g.component=p.component;if(yE(p,g,_))if(w.asyncDep&&!w.asyncResolved){Ae(w,g,_);return}else w.next=g,uE(w.update),w.update();else g.el=p.el,w.vnode=g},_e=(p,g,_,w,A,R,F)=>{const D=()=>{if(p.isMounted){let{next:G,bu:z,u:Q,parent:ne,vnode:ce}=p,Re=G,Ie;sr(p,!1),G?(G.el=ce.el,Ae(p,G,F)):G=ce,z&&Ro(z),(Ie=G.props&&G.props.onVnodeBeforeUpdate)&&Gt(Ie,ne,G,ce),sr(p,!0);const Fe=ml(p),Vt=p.subTree;p.subTree=Fe,v(Vt,Fe,h(Vt.el),T(Vt),p,A,R),G.el=Fe.el,Re===null&&vE(p,Fe.el),Q&&Et(Q,A),(Ie=G.props&&G.props.onVnodeUpdated)&&Et(()=>Gt(Ie,ne,G,ce),A)}else{let G;const{el:z,props:Q}=g,{bm:ne,m:ce,parent:Re}=p,Ie=Ks(g);if(sr(p,!1),ne&&Ro(ne),!Ie&&(G=Q&&Q.onVnodeBeforeMount)&&Gt(G,Re,g),sr(p,!0),z&&Ee){const Fe=()=>{p.subTree=ml(p),Ee(z,p.subTree,p,A,null)};Ie?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=ml(p);v(null,Fe,_,w,p,A,R),g.el=Fe.el}if(ce&&Et(ce,A),!Ie&&(G=Q&&Q.onVnodeMounted)){const Fe=g;Et(()=>Gt(G,Re,Fe),A)}(g.shapeFlag&256||Re&&Ks(Re.vnode)&&Re.vnode.shapeFlag&256)&&p.a&&Et(p.a,A),p.isMounted=!0,g=_=w=null}},O=p.effect=new Jc(D,()=>au(P),p.scope),P=p.update=()=>O.run();P.id=p.uid,sr(p,!0),P()},Ae=(p,g,_)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,WE(p,g.props,w,_),QE(p,g.children,_),vs(),Kh(),Es()},ve=(p,g,_,w,A,R,F,D,O=!1)=>{const P=p&&p.children,G=p?p.shapeFlag:0,z=g.children,{patchFlag:Q,shapeFlag:ne}=g;if(Q>0){if(Q&128){Rn(P,z,_,w,A,R,F,D,O);return}else if(Q&256){dn(P,z,_,w,A,R,F,D,O);return}}ne&8?(G&16&&ot(P,A,R),z!==P&&u(_,z)):G&16?ne&16?Rn(P,z,_,w,A,R,F,D,O):ot(P,A,R,!0):(G&8&&u(_,""),ne&16&&Y(z,_,w,A,R,F,D,O))},dn=(p,g,_,w,A,R,F,D,O)=>{p=p||Qr,g=g||Qr;const P=p.length,G=g.length,z=Math.min(P,G);let Q;for(Q=0;Q<z;Q++){const ne=g[Q]=O?xn(g[Q]):Qt(g[Q]);v(p[Q],ne,_,null,A,R,F,D,O)}P>G?ot(p,A,R,!0,!1,z):Y(g,_,w,A,R,F,D,O,z)},Rn=(p,g,_,w,A,R,F,D,O)=>{let P=0;const G=g.length;let z=p.length-1,Q=G-1;for(;P<=z&&P<=Q;){const ne=p[P],ce=g[P]=O?xn(g[P]):Qt(g[P]);if(Os(ne,ce))v(ne,ce,_,null,A,R,F,D,O);else break;P++}for(;P<=z&&P<=Q;){const ne=p[z],ce=g[Q]=O?xn(g[Q]):Qt(g[Q]);if(Os(ne,ce))v(ne,ce,_,null,A,R,F,D,O);else break;z--,Q--}if(P>z){if(P<=Q){const ne=Q+1,ce=ne<G?g[ne].el:w;for(;P<=Q;)v(null,g[P]=O?xn(g[P]):Qt(g[P]),_,ce,A,R,F,D,O),P++}}else if(P>Q)for(;P<=z;)vt(p[P],A,R,!0),P++;else{const ne=P,ce=P,Re=new Map;for(P=ce;P<=Q;P++){const At=g[P]=O?xn(g[P]):Qt(g[P]);At.key!=null&&Re.set(At.key,P)}let Ie,Fe=0;const Vt=Q-ce+1;let Mr=!1,Mh=0;const Ds=new Array(Vt);for(P=0;P<Vt;P++)Ds[P]=0;for(P=ne;P<=z;P++){const At=p[P];if(Fe>=Vt){vt(At,A,R,!0);continue}let Kt;if(At.key!=null)Kt=Re.get(At.key);else for(Ie=ce;Ie<=Q;Ie++)if(Ds[Ie-ce]===0&&Os(At,g[Ie])){Kt=Ie;break}Kt===void 0?vt(At,A,R,!0):(Ds[Kt-ce]=P+1,Kt>=Mh?Mh=Kt:Mr=!0,v(At,g[Kt],_,null,A,R,F,D,O),Fe++)}const Lh=Mr?XE(Ds):Qr;for(Ie=Lh.length-1,P=Vt-1;P>=0;P--){const At=ce+P,Kt=g[At],Uh=At+1<G?g[At+1].el:w;Ds[P]===0?v(null,Kt,_,Uh,A,R,F,D,O):Mr&&(Ie<0||P!==Lh[Ie]?Wt(Kt,_,Uh,2):Ie--)}}},Wt=(p,g,_,w,A=null)=>{const{el:R,type:F,transition:D,children:O,shapeFlag:P}=p;if(P&6){Wt(p.component.subTree,g,_,w);return}if(P&128){p.suspense.move(g,_,w);return}if(P&64){F.move(p,g,_,N);return}if(F===je){r(R,g,_);for(let z=0;z<O.length;z++)Wt(O[z],g,_,w);r(p.anchor,g,_);return}if(F===Po){U(p,g,_);return}if(w!==2&&P&1&&D)if(w===0)D.beforeEnter(R),r(R,g,_),Et(()=>D.enter(R),A);else{const{leave:z,delayLeave:Q,afterLeave:ne}=D,ce=()=>r(R,g,_),Re=()=>{z(R,()=>{ce(),ne&&ne()})};Q?Q(R,ce,Re):Re()}else r(R,g,_)},vt=(p,g,_,w=!1,A=!1)=>{const{type:R,props:F,ref:D,children:O,dynamicChildren:P,shapeFlag:G,patchFlag:z,dirs:Q}=p;if(D!=null&&sc(D,null,_,p,!0),G&256){g.ctx.deactivate(p);return}const ne=G&1&&Q,ce=!Ks(p);let Re;if(ce&&(Re=F&&F.onVnodeBeforeUnmount)&&Gt(Re,g,p),G&6)so(p.component,_,w);else{if(G&128){p.suspense.unmount(_,w);return}ne&&rr(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,_,A,N,w):P&&(R!==je||z>0&&z&64)?ot(P,g,_,!1,!0):(R===je&&z&384||!A&&G&16)&&ot(O,g,_),w&&Nr(p)}(ce&&(Re=F&&F.onVnodeUnmounted)||ne)&&Et(()=>{Re&&Gt(Re,g,p),ne&&rr(p,null,g,"unmounted")},_)},Nr=p=>{const{type:g,el:_,anchor:w,transition:A}=p;if(g===je){Vr(_,w);return}if(g===Po){x(p);return}const R=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:F,delayLeave:D}=A,O=()=>F(_,R);D?D(p.el,R,O):O()}else R()},Vr=(p,g)=>{let _;for(;p!==g;)_=d(p),s(p),p=_;s(g)},so=(p,g,_)=>{const{bum:w,scope:A,update:R,subTree:F,um:D}=p;w&&Ro(w),A.stop(),R&&(R.active=!1,vt(F,p,g,_)),D&&Et(D,g),Et(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ot=(p,g,_,w=!1,A=!1,R=0)=>{for(let F=R;F<p.length;F++)vt(p[F],g,_,w,A)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),$=(p,g,_)=>{p==null?g._vnode&&vt(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,_),Kh(),qp(),g._vnode=p},N={p:v,um:vt,m:Wt,r:Nr,mt:nr,mc:Y,pc:ve,pbc:be,n:T,o:t};let W,Ee;return e&&([W,Ee]=e(N)),{render:$,hydrate:W,createApp:qE($,W)}}function sr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function og(t,e,n=!1){const r=t.children,s=e.children;if(J(r)&&J(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=xn(s[i]),l.el=o.el),n||og(o,l)),l.type===Ra&&(l.el=o.el)}}function XE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const a=t.length;for(r=0;r<a;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ZE=t=>t.__isTeleport,je=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),Qs=[];let Lt=null;function I(t=!1){Qs.push(Lt=t?null:[])}function ew(){Qs.pop(),Lt=Qs[Qs.length-1]||null}let hi=1;function sd(t){hi+=t}function ag(t){return t.dynamicChildren=hi>0?Lt||Qr:null,ew(),hi>0&&Lt&&Lt.push(t),t}function le(t,e,n,r,s,i){return ag(m(t,e,n,r,s,i,!0))}function M(t,e,n,r,s){return ag(ae(t,e,n,r,s,!0))}function qo(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const Sa="__vInternal",lg=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Le(t)||oe(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lg(e),ref:e&&Co(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return l?(du(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ze(n)?8:16),hi>0&&!o&&Lt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Lt.push(a),a}const ae=tw;function tw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===NE)&&(t=Gn),qo(t)){const l=ss(t,e,!0);return n&&du(l,n),hi>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag|=-2,l}if(dw(t)&&(t=t.__vccOpts),e){e=nw(e);let{class:l,style:a}=e;l&&!ze(l)&&(e.class=lr(l)),Ne(a)&&(Lp(a)&&!J(a)&&(a=Ge({},a)),e.style=Rr(a))}const o=ze(t)?1:EE(t)?128:ZE(t)?64:Ne(t)?4:oe(t)?2:0;return m(t,e,n,r,s,o,i,!0)}function nw(t){return t?Lp(t)||Sa in t?Ge({},t):t:null}function ss(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?rw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&lg(l),ref:e&&e.ref?n&&s?J(s)?s.concat(Co(e)):[s,Co(e)]:Co(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ss(t.ssContent),ssFallback:t.ssFallback&&ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function jn(t=" ",e=0){return ae(Ra,null,t,e)}function ws(t,e){const n=ae(Po,null,t);return n.staticCount=e,n}function L(t="",e=!1){return e?(I(),M(Gn,null,t)):ae(Gn,null,t)}function Qt(t){return t==null||typeof t=="boolean"?ae(Gn):J(t)?ae(je,null,t.slice()):typeof t=="object"?xn(t):ae(Ra,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ss(t)}function du(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),du(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Sa in e)?e._ctx=tt:s===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[jn(e)]):n=8);t.children=e,t.shapeFlag|=n}function rw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=lr([e.class,r.class]));else if(s==="style")e.style=Rr([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){$t(t,e,7,[n,r])}const sw=eg();let iw=0;function ow(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sw,i={uid:iw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ng(r,s),emitsOptions:zp(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fE.bind(null,i),t.ce&&t.ce(i),i}let Ke=null,fu,Lr,id="__VUE_INSTANCE_SETTERS__";(Lr=Gl()[id])||(Lr=Gl()[id]=[]),Lr.push(t=>Ke=t),fu=t=>{Lr.length>1?Lr.forEach(e=>e(t)):Lr[0](t)};const is=t=>{fu(t),t.scope.on()},gr=()=>{Ke&&Ke.scope.off(),fu(null)};function cg(t){return t.vnode.shapeFlag&4}let di=!1;function aw(t,e=!1){di=e;const{props:n,children:r}=t.vnode,s=cg(t);zE(t,n,s,e),GE(t,r);const i=s?lw(t,e):void 0;return di=!1,i}function lw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ea(new Proxy(t.ctx,ME));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?uw(t):null;is(t),vs();const i=Bn(r,t,0,[t.props,s]);if(Es(),gr(),_p(i)){if(i.then(gr,gr),e)return i.then(o=>{od(t,o,e)}).catch(o=>{wa(o,t,0)});t.asyncDep=i}else od(t,i,e)}else ug(t,e)}function od(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Fp(e)),ug(t,n)}let ad;function ug(t,e,n){const r=t.type;if(!t.render){if(!e&&ad&&!r.render){const s=r.template||uu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=r,c=Ge(Ge({isCustomElement:i,delimiters:l},o),a);r.render=ad(s,c)}}t.render=r.render||Ft}is(t),vs(),LE(t),Es(),gr()}function cw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}}))}function uw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cw(t)},slots:t.slots,emit:t.emit,expose:e}}function Pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fp(Ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}}))}function hw(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function dw(t){return oe(t)&&"__vccOpts"in t}const xe=(t,e)=>aE(t,e,di);function hg(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!J(e)?qo(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qo(n)&&(n=[n]),ae(t,e,n))}const fw=Symbol.for("v-scx"),pw=()=>Nt(fw),gw="3.3.4",mw="http://www.w3.org/2000/svg",ar=typeof document<"u"?document:null,ld=ar&&ar.createElement("template"),_w={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ar.createElementNS(mw,t):ar.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ar.createTextNode(t),createComment:t=>ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ld.innerHTML=r?`<svg>${t}</svg>`:t;const l=ld.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vw(t,e,n){const r=t.style,s=ze(n);if(n&&!s){if(e&&!ze(e))for(const i in e)n[i]==null&&ic(r,i,"");for(const i in n)ic(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const cd=/\s*!important$/;function ic(t,e,n){if(J(n))n.forEach(r=>ic(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ew(t,e);cd.test(n)?t.setProperty(ys(r),n.replace(cd,""),"important"):t[r]=n}}const ud=["Webkit","Moz","ms"],yl={};function Ew(t,e){const n=yl[e];if(n)return n;let r=cn(e);if(r!=="filter"&&r in t)return yl[e]=r;r=ya(r);for(let s=0;s<ud.length;s++){const i=ud[s]+r;if(i in t)return yl[e]=i}return e}const hd="http://www.w3.org/1999/xlink";function ww(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hd,e.slice(6,e.length)):t.setAttributeNS(hd,e,n);else{const i=Av(e);n==null||i&&!Ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Tw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ep(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Br(t,e,n,r){t.addEventListener(e,n,r)}function Iw(t,e,n,r){t.removeEventListener(e,n,r)}function Aw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,a]=bw(e);if(r){const c=i[e]=Pw(r,s);Br(t,l,c,a)}else o&&(Iw(t,l,o,a),i[e]=void 0)}}const dd=/(?:Once|Passive|Capture)$/;function bw(t){let e;if(dd.test(t)){e={};let r;for(;r=t.match(dd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ys(t.slice(2)),e]}let vl=0;const Rw=Promise.resolve(),Sw=()=>vl||(Rw.then(()=>vl=0),vl=Date.now());function Pw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$t(Cw(r,n.value),e,5,[r])};return n.value=t,n.attached=Sw(),n}function Cw(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const fd=/^on[a-z]/,kw=(t,e,n,r,s=!1,i,o,l,a)=>{e==="class"?yw(t,r,s):e==="style"?vw(t,n,r):ga(e)?zc(e)||Aw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xw(t,e,r,s))?Tw(t,e,r,i,o,l,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ww(t,e,r,s))};function xw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&fd.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fd.test(e)&&ze(n)?!1:e in t}const pd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>Ro(e,n):e};function Dw(t){t.target.composing=!0}function gd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const oc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=pd(s);const i=r||s.props&&s.props.type==="number";Br(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Kl(l)),t._assign(l)}),n&&Br(t,"change",()=>{t.value=t.value.trim()}),e||(Br(t,"compositionstart",Dw),Br(t,"compositionend",gd),Br(t,"change",gd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=pd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Kl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ow=["ctrl","shift","alt","meta"],Nw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ow.some(n=>t[`${n}Key`]&&!e.includes(n))},dg=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Nw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Vw=Ge({patchProp:kw},_w);let md;function Mw(){return md||(md=YE(Vw))}const Lw=(...t)=>{const e=Mw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uw(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uw(t){return ze(t)?document.querySelector(t):t}var Fw=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let fg;const Ca=t=>fg=t,pg=Symbol();function ac(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ys;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ys||(Ys={}));function $w(){const t=Ip(!0),e=t.run(()=>de({}));let n=[],r=[];const s=Ea({install(i){Ca(s),s._a=i,i.provide(pg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Fw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const gg=()=>{};function _d(t,e,n,r=gg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qc()&&Ap(s),s}function Ur(t,...e){t.slice().forEach(n=>{n(...e)})}const Bw=t=>t();function lc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ac(s)&&ac(r)&&t.hasOwnProperty(n)&&!Le(r)&&!$n(r)?t[n]=lc(s,r):t[n]=r}return t}const jw=Symbol();function qw(t){return!ac(t)||!t.hasOwnProperty(jw)}const{assign:kn}=Object;function Hw(t){return!!(Le(t)&&t.effect)}function zw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=s?s():{});const u=$p(n.state.value[t]);return kn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ea(xe(()=>{Ca(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return a=mg(t,c,e,n,r,!0),a}function mg(t,e,n={},r,s,i){let o;const l=kn({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],f;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),de({});let v;function E(Y){let se;c=u=!1,typeof Y=="function"?(Y(r.state.value[t]),se={type:Ys.patchFunction,storeId:t,events:f}):(lc(r.state.value[t],Y),se={type:Ys.patchObject,payload:Y,storeId:t,events:f});const be=v=Symbol();ou().then(()=>{v===be&&(c=!0)}),u=!0,Ur(h,se,r.state.value[t])}const C=i?function(){const{state:se}=n,be=se?se():{};this.$patch(it=>{kn(it,be)})}:gg;function k(){o.stop(),h=[],d=[],r._s.delete(t)}function U(Y,se){return function(){Ca(r);const be=Array.from(arguments),it=[],It=[];function Ct(_e){it.push(_e)}function nr(_e){It.push(_e)}Ur(d,{args:be,name:Y,store:te,after:Ct,onError:nr});let kt;try{kt=se.apply(this&&this.$id===t?this:te,be)}catch(_e){throw Ur(It,_e),_e}return kt instanceof Promise?kt.then(_e=>(Ur(it,_e),_e)).catch(_e=>(Ur(It,_e),Promise.reject(_e))):(Ur(it,kt),kt)}}const x={_p:r,$id:t,$onAction:_d.bind(null,d),$patch:E,$reset:C,$subscribe(Y,se={}){const be=_d(h,Y,se.detached,()=>it()),it=o.run(()=>pr(()=>r.state.value[t],It=>{(se.flush==="sync"?u:c)&&Y({storeId:t,type:Ys.direct,events:f},It)},kn({},a,se)));return be},$dispose:k},te=Di(x);r._s.set(t,te);const H=r._a&&r._a.runWithContext||Bw,fe=r._e.run(()=>(o=Ip(),H(()=>o.run(e))));for(const Y in fe){const se=fe[Y];if(Le(se)&&!Hw(se)||$n(se))i||(y&&qw(se)&&(Le(se)?se.value=y[Y]:lc(se,y[Y])),r.state.value[t][Y]=se);else if(typeof se=="function"){const be=U(Y,se);fe[Y]=be,l.actions[Y]=se}}return kn(te,fe),kn(me(te),fe),Object.defineProperty(te,"$state",{get:()=>r.state.value[t],set:Y=>{E(se=>{kn(se,Y)})}}),r._p.forEach(Y=>{kn(te,o.run(()=>Y({store:te,app:r._a,pinia:r,options:l})))}),y&&i&&n.hydrate&&n.hydrate(te.$state,y),c=!0,u=!0,te}function ka(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,a){const c=HE();return l=l||(c?Nt(pg,null):null),l&&Ca(l),l=fg,l._s.has(r)||(i?mg(r,e,s,l):zw(r,s,l)),l._s.get(r)}return o.$id=r,o}const zt=ka("screen",()=>{const t=de([]),e=xe(()=>t.value);return{windows:t,getWindows:e,setWindow:(o,l)=>{let a=0;const c=t.value.find(u=>u.window===o);for(const u of t.value)a+=u.zIndex;if(!c)t.value.push({window:o,data:l,x:200,y:40,zIndex:a});else for(const u of t.value)a+=u.zIndex},removeWidow:o=>{t.value=t.value.filter(l=>l.window!==o)},changeXY:(o,l,a)=>{const c=t.value.find((u,h)=>h===a);c.x=o,c.y=l},increseZindex:o=>{const l=t.value.find(a=>a.window===o);if(l){let a=0;for(const c of t.value)a+=c.zIndex;l.zIndex=a+10}}}}),xa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ww={name:"MaterialSymbolsFullscreen"},Kw={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Gw=m("path",{fill:"currentColor",d:"M5 19v-5h2v3h3v2H5Zm0-9V5h5v2H7v3H5Zm9 9v-2h3v-3h2v5h-5Zm3-9V7h-3V5h5v5h-2Z"},null,-1),Qw=[Gw];function Yw(t,e,n,r,s,i){return I(),le("svg",Kw,Qw)}const Jw=xa(Ww,[["render",Yw]]),Xw={class:"w-full fixed top-0 py-3 bg-primary text-white"},Zw={class:"w-[90%] mx-auto flex items-center justify-between"},eT={class:"text-xl font-bold"},tT={class:"text-xl font-bold flex items-center gap-3"},nT={key:0,class:"absolute z-40 p-2 top-9 text-xl bg-primary text-white my-5 ms-[4%]"},rT={__name:"Header",setup(t){const e=de(!1),n=de(""),r=zt(),s=()=>{const a=new Date,c=a.getDate().toString().padStart(2,"0"),h=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],d=a.getFullYear(),f=a.getHours().toString().padStart(2,"0"),y=a.getMinutes().toString().padStart(2,"0"),v=a.getSeconds().toString().padStart(2,"0");return`${c}/${h}/${d} ${f}:${y}:${v}`};yt(()=>{n.value=s(),setInterval(()=>{n.value=s()},1e3)});const i=(a,c=null)=>{r.setWindow(a,c),e.value=!1},o=()=>{window.location.href="/"},l=()=>{const a=window.document,c=a.documentElement,u=c.requestFullscreen||c.mozRequestFullScreen||c.webkitRequestFullScreen||c.msRequestFullscreen,h=a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen;!a.fullscreenElement&&!a.mozFullScreenElement&&!a.webkitFullscreenElement&&!a.msFullscreenElement?u.call(c):h.call(a)};return(a,c)=>(I(),le(je,null,[m("nav",Xw,[m("div",Zw,[m("div",eT,[m("div",{class:"cursor-pointer hover:opacity-70",onClick:c[0]||(c[0]=u=>e.value=!e.value)},"Menu")]),m("div",tT,[m("div",null,Ot(n.value),1),m("div",null,[m("div",{onClick:l,class:"text-xl hover:opacity-70 font-bold cursor-pointer"},[ae(Jw,{class:"text-4xl"})])])])])]),e.value?(I(),le("div",nT,[m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[1]||(c[1]=u=>i("portfolio"))}," Portfolio "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[2]||(c[2]=u=>i("about"))}," About "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[3]||(c[3]=u=>i("skill"))}," Skill "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[4]||(c[4]=u=>i("contact"))}," Contact "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[5]||(c[5]=u=>o())}," Shutdown ")])):L("",!0)],64))}};const sT=t=>(pE("data-v-c958fb2d"),t=t(),gE(),t),iT={key:0,class:"h-screen flex justify-center flex-col items-center w-screen bg-[#ebd1ae]"},oT=sT(()=>m("div",{class:"text-4xl text-white"},"Loading...",-1)),aT={class:"progress-bar-container"},lT={key:1,class:"app"},cT={__name:"App",setup(t){const e=de(!0),n=de(0);return yt(()=>{const r=setInterval(()=>{n.value<100?n.value+=10:(clearInterval(r),e.value=!1)},200)}),(r,s)=>{const i=Jp("routerView");return e.value?(I(),le("div",iT,[oT,m("div",aT,[m("div",{class:"progress-bar",style:Rr({width:n.value+"%"})},null,4)])])):(I(),le("div",lT,[ae(rT),ae(i,{class:"mt-12"})]))}}},uT=xa(cT,[["__scopeId","data-v-c958fb2d"]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const jr=typeof window<"u";function hT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function El(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const Js=()=>{},Bt=Array.isArray,dT=/\/$/,fT=t=>t.replace(dT,"");function wl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=_T(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function pT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&os(e.matched[r],n.matched[s])&&_g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mT(t[n],e[n]))return!1;return!0}function mT(t,e){return Bt(t)?vd(t,e):Bt(e)?vd(e,t):t===e}function vd(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _T(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function yT(t){if(!t)if(jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fT(t)}const vT=/^[^#]+#/;function ET(t,e){return t.replace(vT,"#")+e}function wT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Da=()=>({left:window.pageXOffset,top:window.pageYOffset});function TT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ed(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function IT(t,e){cc.set(t,e)}function AT(t){const e=cc.get(t);return cc.delete(t),e}let bT=()=>location.protocol+"//"+location.host;function yg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),yd(a,"")}return yd(n,t)+r+s}function RT(t,e,n,r){let s=[],i=[],o=null;const l=({state:d})=>{const f=yg(t,location),y=n.value,v=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===y){o=null;return}E=v?d.position-v.position:0}else r(f);s.forEach(C=>{C(n.value,y,{delta:E,type:fi.pop,direction:E?E>0?Xs.forward:Xs.back:Xs.unknown})})};function a(){o=n.value}function c(d){s.push(d);const f=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:Da()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function wd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Da():null}}function ST(t){const{history:e,location:n}=window,r={value:yg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:bT()+t+a;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(a,c){const u=we({},e.state,wd(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});i(a,u,!0),r.value=a}function l(a,c){const u=we({},s.value,e.state,{forward:a,scroll:Da()});i(u.current,u,!0);const h=we({},wd(r.value,a,null),{position:u.position+1},c);i(a,h,!1),r.value=a}return{location:r,state:s,push:l,replace:o}}function PT(t){t=yT(t);const e=ST(t),n=RT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:ET.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CT(t){return typeof t=="string"||t&&typeof t=="object"}function vg(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Eg=Symbol("");var Td;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Td||(Td={}));function as(t,e){return we(new Error,{type:t,[Eg]:!0},e)}function fn(t,e){return t instanceof Error&&Eg in t&&(e==null||!!(t.type&e))}const Id="[^/]+?",kT={sensitive:!1,strict:!1,start:!0,end:!0},xT=/[.+*?^${}()[\]/\\]/g;function DT(t,e){const n=we({},kT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(xT,"\\$&"),f+=40;else if(d.type===1){const{value:y,repeatable:v,optional:E,regexp:C}=d;i.push({name:y,repeatable:v,optional:E});const k=C||Id;if(k!==Id){f+=10;try{new RegExp(`(${k})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+x.message)}}let U=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(U=E&&c.length<2?`(?:/${U})`:"/"+U),E&&(U+="?"),s+=U,f+=20,E&&(f+=-8),v&&(f+=-20),k===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",y=i[d-1];h[y.name]=f&&y.repeatable?f.split("/"):f}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:y,repeatable:v,optional:E}=f,C=y in c?c[y]:"";if(Bt(C)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=Bt(C)?C.join("/"):C;if(!k)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:l,stringify:a}}function OT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function NT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=OT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ad(r))return 1;if(Ad(s))return-1}return s.length-r.length}function Ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VT={type:0,value:""},MT=/[a-zA-Z0-9_]/;function LT(t){if(!t)return[[]];if(t==="/")return[[VT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,a,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:a==="("?n=2:MT.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function UT(t,e,n){const r=DT(LT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FT(t,e){const n=[],r=new Map;e=Sd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,y=$T(u);y.aliasOf=d&&d.record;const v=Sd(e,u),E=[y];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of U)E.push(we({},y,{components:d?d.record.components:y.components,path:x,aliasOf:d?d.record:y}))}let C,k;for(const U of E){const{path:x}=U;if(h&&x[0]!=="/"){const te=h.record.path,H=te[te.length-1]==="/"?"":"/";U.path=h.record.path+(x&&H+x)}if(C=UT(U,h,v),d?d.alias.push(C):(k=k||C,k!==C&&k.alias.push(C),f&&u.name&&!Rd(C)&&o(u.name)),y.children){const te=y.children;for(let H=0;H<te.length;H++)i(te[H],C,d&&d.children[H])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&a(C)}return k?()=>{o(k)}:Js}function o(u){if(vg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&NT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!wg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Rd(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},y,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw as(1,{location:u});v=d.record.name,f=we(bd(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&bd(u.params,d.keys.map(k=>k.name))),y=d.stringify(f)}else if("path"in u)y=u.path,d=n.find(k=>k.re.test(y)),d&&(f=d.parse(y),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw as(1,{location:u,currentLocation:h});v=d.record.name,f=we({},h.params,u.params),y=d.stringify(f)}const E=[];let C=d;for(;C;)E.unshift(C.record),C=C.parent;return{name:v,path:y,params:f,matched:E,meta:jT(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function bd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $T(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:BT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function BT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Rd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Sd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wg(t,e){return e.children.some(n=>n===t||wg(t,n))}const Tg=/#/g,qT=/&/g,HT=/\//g,zT=/=/g,WT=/\?/g,Ig=/\+/g,KT=/%5B/g,GT=/%5D/g,Ag=/%5E/g,QT=/%60/g,bg=/%7B/g,YT=/%7C/g,Rg=/%7D/g,JT=/%20/g;function pu(t){return encodeURI(""+t).replace(YT,"|").replace(KT,"[").replace(GT,"]")}function XT(t){return pu(t).replace(bg,"{").replace(Rg,"}").replace(Ag,"^")}function uc(t){return pu(t).replace(Ig,"%2B").replace(JT,"+").replace(Tg,"%23").replace(qT,"%26").replace(QT,"`").replace(bg,"{").replace(Rg,"}").replace(Ag,"^")}function ZT(t){return uc(t).replace(zT,"%3D")}function eI(t){return pu(t).replace(Tg,"%23").replace(WT,"%3F")}function tI(t){return t==null?"":eI(t).replace(HT,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ig," "),o=i.indexOf("="),l=Ho(o<0?i:i.slice(0,o)),a=o<0?null:Ho(i.slice(o+1));if(l in e){let c=e[l];Bt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Pd(t){let e="";for(let n in t){const r=t[n];if(n=ZT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(i=>i&&uc(i)):[r&&uc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sI=Symbol(""),Cd=Symbol(""),Oa=Symbol(""),gu=Symbol(""),hc=Symbol("");function Ns(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(as(4,{from:n,to:e})):h instanceof Error?l(h):CT(h)?l(as(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function Tl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(iI(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Dn(c,n,r,i,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=hT(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Dn(d,n,r,i,o)()}))}}return s}function iI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kd(t){const e=Nt(Oa),n=Nt(gu),r=xe(()=>e.resolve(De(t.to))),s=xe(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(os.bind(null,u));if(d>-1)return d;const f=xd(a[c-2]);return c>1&&xd(u)===f&&h[h.length-1].path!==f?h.findIndex(os.bind(null,a[c-2])):d}),i=xe(()=>s.value>-1&&cI(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&_g(n.params,r.value.params));function l(a={}){return lI(a)?e[De(t.replace)?"replace":"push"](De(t.to)).catch(Js):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const oI=Aa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kd,setup(t,{slots:e}){const n=Di(kd(t)),{options:r}=Nt(Oa),s=xe(()=>({[Dd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Dd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:hg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),aI=oI;function lI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dd=(t,e,n)=>t??e??n,uI=Aa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(hc),s=xe(()=>t.route||r.value),i=Nt(Cd,0),o=xe(()=>{let c=De(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=xe(()=>s.value.matched[o.value]);So(Cd,xe(()=>o.value+1)),So(sI,l),So(hc,s);const a=de();return pr(()=>[a.value,l.value,t.name],([c,u,h],[d,f,y])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!os(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return Od(n.default,{Component:d,route:c});const f=h.props[u],y=f?f===!0?c.params:typeof f=="function"?f(c):f:null,E=hg(d,we({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Od(n.default,{Component:E,route:c})||E}}});function Od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hI=uI;function dI(t){const e=FT(t.routes,t),n=t.parseQuery||nI,r=t.stringifyQuery||Pd,s=t.history,i=Ns(),o=Ns(),l=Ns(),a=Zv(Pn);let c=Pn;jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=El.bind(null,T=>""+T),h=El.bind(null,tI),d=El.bind(null,Ho);function f(T,$){let N,W;return vg(T)?(N=e.getRecordMatcher(T),W=$):W=T,e.addRoute(W,N)}function y(T){const $=e.getRecordMatcher(T);$&&e.removeRoute($)}function v(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function C(T,$){if($=we({},$||a.value),typeof T=="string"){const _=wl(n,T,$.path),w=e.resolve({path:_.path},$),A=s.createHref(_.fullPath);return we(_,w,{params:d(w.params),hash:Ho(_.hash),redirectedFrom:void 0,href:A})}let N;if("path"in T)N=we({},T,{path:wl(n,T.path,$.path).path});else{const _=we({},T.params);for(const w in _)_[w]==null&&delete _[w];N=we({},T,{params:h(_)}),$.params=h($.params)}const W=e.resolve(N,$),Ee=T.hash||"";W.params=u(d(W.params));const p=pT(r,we({},T,{hash:XT(Ee),path:W.path})),g=s.createHref(p);return we({fullPath:p,hash:Ee,query:r===Pd?rI(T.query):T.query||{}},W,{redirectedFrom:void 0,href:g})}function k(T){return typeof T=="string"?wl(n,T,a.value.path):we({},T)}function U(T,$){if(c!==T)return as(8,{from:$,to:T})}function x(T){return fe(T)}function te(T){return x(we(k(T),{replace:!0}))}function H(T){const $=T.matched[T.matched.length-1];if($&&$.redirect){const{redirect:N}=$;let W=typeof N=="function"?N(T):N;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=k(W):{path:W},W.params={}),we({query:T.query,hash:T.hash,params:"path"in W?{}:T.params},W)}}function fe(T,$){const N=c=C(T),W=a.value,Ee=T.state,p=T.force,g=T.replace===!0,_=H(N);if(_)return fe(we(k(_),{state:typeof _=="object"?we({},Ee,_.state):Ee,force:p,replace:g}),$||N);const w=N;w.redirectedFrom=$;let A;return!p&&gT(r,W,N)&&(A=as(16,{to:w,from:W}),Wt(W,W,!0,!1)),(A?Promise.resolve(A):be(w,W)).catch(R=>fn(R)?fn(R,2)?R:Rn(R):ve(R,w,W)).then(R=>{if(R){if(fn(R,2))return fe(we({replace:g},k(R.to),{state:typeof R.to=="object"?we({},Ee,R.to.state):Ee,force:p}),$||w)}else R=It(w,W,!0,g,Ee);return it(w,W,R),R})}function Y(T,$){const N=U(T,$);return N?Promise.reject(N):Promise.resolve()}function se(T){const $=Vr.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(T):T()}function be(T,$){let N;const[W,Ee,p]=fI(T,$);N=Tl(W.reverse(),"beforeRouteLeave",T,$);for(const _ of W)_.leaveGuards.forEach(w=>{N.push(Dn(w,T,$))});const g=Y.bind(null,T,$);return N.push(g),ot(N).then(()=>{N=[];for(const _ of i.list())N.push(Dn(_,T,$));return N.push(g),ot(N)}).then(()=>{N=Tl(Ee,"beforeRouteUpdate",T,$);for(const _ of Ee)_.updateGuards.forEach(w=>{N.push(Dn(w,T,$))});return N.push(g),ot(N)}).then(()=>{N=[];for(const _ of p)if(_.beforeEnter)if(Bt(_.beforeEnter))for(const w of _.beforeEnter)N.push(Dn(w,T,$));else N.push(Dn(_.beforeEnter,T,$));return N.push(g),ot(N)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),N=Tl(p,"beforeRouteEnter",T,$),N.push(g),ot(N))).then(()=>{N=[];for(const _ of o.list())N.push(Dn(_,T,$));return N.push(g),ot(N)}).catch(_=>fn(_,8)?_:Promise.reject(_))}function it(T,$,N){l.list().forEach(W=>se(()=>W(T,$,N)))}function It(T,$,N,W,Ee){const p=U(T,$);if(p)return p;const g=$===Pn,_=jr?history.state:{};N&&(W||g?s.replace(T.fullPath,we({scroll:g&&_&&_.scroll},Ee)):s.push(T.fullPath,Ee)),a.value=T,Wt(T,$,N,g),Rn()}let Ct;function nr(){Ct||(Ct=s.listen((T,$,N)=>{if(!so.listening)return;const W=C(T),Ee=H(W);if(Ee){fe(we(Ee,{replace:!0}),W).catch(Js);return}c=W;const p=a.value;jr&&IT(Ed(p.fullPath,N.delta),Da()),be(W,p).catch(g=>fn(g,12)?g:fn(g,2)?(fe(g.to,W).then(_=>{fn(_,20)&&!N.delta&&N.type===fi.pop&&s.go(-1,!1)}).catch(Js),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ve(g,W,p))).then(g=>{g=g||It(W,p,!1),g&&(N.delta&&!fn(g,8)?s.go(-N.delta,!1):N.type===fi.pop&&fn(g,20)&&s.go(-1,!1)),it(W,p,g)}).catch(Js)}))}let kt=Ns(),_e=Ns(),Ae;function ve(T,$,N){Rn(T);const W=_e.list();return W.length?W.forEach(Ee=>Ee(T,$,N)):console.error(T),Promise.reject(T)}function dn(){return Ae&&a.value!==Pn?Promise.resolve():new Promise((T,$)=>{kt.add([T,$])})}function Rn(T){return Ae||(Ae=!T,nr(),kt.list().forEach(([$,N])=>T?N(T):$()),kt.reset()),T}function Wt(T,$,N,W){const{scrollBehavior:Ee}=t;if(!jr||!Ee)return Promise.resolve();const p=!N&&AT(Ed(T.fullPath,0))||(W||!N)&&history.state&&history.state.scroll||null;return ou().then(()=>Ee(T,$,p)).then(g=>g&&TT(g)).catch(g=>ve(g,T,$))}const vt=T=>s.go(T);let Nr;const Vr=new Set,so={currentRoute:a,listening:!0,addRoute:f,removeRoute:y,hasRoute:E,getRoutes:v,resolve:C,options:t,push:x,replace:te,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:_e.add,isReady:dn,install(T){const $=this;T.component("RouterLink",aI),T.component("RouterView",hI),T.config.globalProperties.$router=$,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>De(a)}),jr&&!Nr&&a.value===Pn&&(Nr=!0,x(s.location).catch(Ee=>{}));const N={};for(const Ee in Pn)Object.defineProperty(N,Ee,{get:()=>a.value[Ee],enumerable:!0});T.provide(Oa,$),T.provide(gu,Vp(N)),T.provide(hc,a);const W=T.unmount;Vr.add(T),T.unmount=function(){Vr.delete(T),Vr.size<1&&(c=Pn,Ct&&Ct(),Ct=null,a.value=Pn,Nr=!1,Ae=!1),W()}}};function ot(T){return T.reduce(($,N)=>$.then(()=>se(N)),Promise.resolve())}return so}function fI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(c=>os(c,l))?r.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>os(c,a))||s.push(a))}return[n,r,s]}function pI(){return Nt(Oa)}function Oi(){return Nt(gu)}const Sg="/assets/pc-609054bf.png",Pg="/assets/about-496d3e3f.png",Cg="/assets/skill-b1993387.png",kg="/assets/contact-d5a2c51b.png";function gI(t){return Qc()?(Ap(t),!0):!1}function gn(t){return typeof t=="function"?t():De(t)}const xg=typeof window<"u",mI=()=>{};var _I=Object.defineProperty,yI=Object.defineProperties,vI=Object.getOwnPropertyDescriptors,Nd=Object.getOwnPropertySymbols,EI=Object.prototype.hasOwnProperty,wI=Object.prototype.propertyIsEnumerable,Vd=(t,e,n)=>e in t?_I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,TI=(t,e)=>{for(var n in e||(e={}))EI.call(e,n)&&Vd(t,n,e[n]);if(Nd)for(var n of Nd(e))wI.call(e,n)&&Vd(t,n,e[n]);return t},II=(t,e)=>yI(t,vI(e));function AI(t,e={}){if(!Le(t))return $p(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const r in t.value)n[r]=rE(()=>({get(){return t.value[r]},set(s){var i;if((i=gn(e.replaceRef))!=null?i:!0)if(Array.isArray(t.value)){const l=[...t.value];l[r]=s,t.value=l}else{const l=II(TI({},t.value),{[r]:s});Object.setPrototypeOf(l,Object.getPrototypeOf(t.value)),t.value=l}else t.value[r]=s}}));return n}function bI(t){var e;const n=gn(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Dg=xg?window:void 0;function Il(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Dg):[e,n,r,s]=t,!e)return mI;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},l=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),a=pr(()=>[bI(e),gn(s)],([u,h])=>{o(),u&&i.push(...n.flatMap(d=>r.map(f=>l(u,d,f,h))))},{immediate:!0,flush:"post"}),c=()=>{a(),o()};return gI(c),c}var RI=Object.defineProperty,SI=Object.defineProperties,PI=Object.getOwnPropertyDescriptors,Md=Object.getOwnPropertySymbols,CI=Object.prototype.hasOwnProperty,kI=Object.prototype.propertyIsEnumerable,Ld=(t,e,n)=>e in t?RI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xI=(t,e)=>{for(var n in e||(e={}))CI.call(e,n)&&Ld(t,n,e[n]);if(Md)for(var n of Md(e))kI.call(e,n)&&Ld(t,n,e[n]);return t},DI=(t,e)=>SI(t,PI(e));function Og(t,e={}){var n,r;const{pointerTypes:s,preventDefault:i,stopPropagation:o,exact:l,onMove:a,onEnd:c,onStart:u,initialValue:h,axis:d="both",draggingElement:f=Dg,handle:y=t}=e,v=de((n=gn(h))!=null?n:{x:0,y:0}),E=de(),C=H=>s?s.includes(H.pointerType):!0,k=H=>{gn(i)&&H.preventDefault(),gn(o)&&H.stopPropagation()},U=H=>{if(!C(H)||gn(l)&&H.target!==gn(t))return;const fe=gn(t).getBoundingClientRect(),Y={x:H.clientX-fe.left,y:H.clientY-fe.top};(u==null?void 0:u(Y,H))!==!1&&(E.value=Y,k(H))},x=H=>{if(!C(H)||!E.value)return;let{x:fe,y:Y}=v.value;(d==="x"||d==="both")&&(fe=H.clientX-E.value.x),(d==="y"||d==="both")&&(Y=H.clientY-E.value.y),v.value={x:fe,y:Y},a==null||a(v.value,H),k(H)},te=H=>{C(H)&&E.value&&(E.value=void 0,c==null||c(v.value,H),k(H))};if(xg){const H={capture:(r=e.capture)!=null?r:!0};Il(y,"pointerdown",U,H),Il(f,"pointermove",x,H),Il(f,"pointerup",te,H)}return DI(xI({},AI(v)),{position:v,isDragging:xe(()=>!!E.value),style:xe(()=>`left:${v.value.x}px;top:${v.value.y}px;`)})}const OI=Aa({__name:"draggable",props:{index:Number},setup(t){const{index:e}=t,n=zt(),r=de(null),s=xe(()=>n.getWindows.find((c,u)=>u===e)),{x:i,y:o,style:l}=Og(r,{initialValue:{x:s.value.x,y:s.value.y}}),a=()=>{n.changeXY(i,o,e)};return pr([i,o],()=>{a()}),(c,u)=>(I(),le("div",{ref_key:"el",ref:r,style:Rr([De(l),{zIndex:s.value.zIndex},{position:"fixed"}])},[cu(c.$slots,"window")],4))}}),Ng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfKSURBVHgB7d1bjF1lGQbgb81MESwZCFouCIpyIcSeVIKHGBMiEkRFxVpbJMRoVBJjvPJOExNjxECiUUmMRIiJUdtU44krDSJCgwoUaCmC5QJthVLsmU6Ps5dDQnD9P+ked2eGmW/mee7etddqmnbe/fXr3nvtCAAAAAAAAAAAAAAAAAAAAAAAAJhdTX3gHde1o9081ouvFRf04orqksXBSbVDcaTIEQ9088RfwI3dvOXnzeMB/6ehANJSYEhMgSGx5s2r23O6B0aG4v7yjLgwmElj3dA28b5untiJ7ws4CRMYElNgSEyBIbFm+dr2tuJAxGe6+fzzyws+fFWZR0eDPsbGynzXn8u8ZWt1QS92dOOJNlZ282Mbmj0BLzKBITEFhsQUGBIbmdh5P9rvhE+uKvOSJTGQXlvm4+P9H59vXn1mmVd9rMx7D5R5x/Yo/tdhqI1byzPi4wEvMoEhMQWGxBQYEmtWrG37bqE3fyMGcvREmfcfKfM8X3kHdmB/mX98e5mPHX3ZJZ/ths3rmtuCBcsEhsQUGBJTYEhsJKao3qAPVDubnbe/0bPKfGX1XvPf/brME3/e3+3mFavbe7t584bmiWDBMIEhMQWGxBQYEpvyDnyiV+b5/t7mmXbRxWV+cmmZ/761vA93Oxy/6OZla9sPdPOj65rtwbxlAkNiCgyJKTAkNuUdmJl1xZVl3rWzzLt3x7JubiL+2c0r1rT/Kq+I6hPZC96hKt/ZDcO9+GY3P7SheS7mEBMYElNgSEyBIbEpfx64vsfVnsPBDDpUbWx//EOZt/2jzL1eMAUT5XiqODAUb+vGLT9r9sYsMoEhMQWGxBQYEvM6cDKLF5f56uqu3ieqe5KNVTvzSPWUPXp6LGgHqvty/+qOMj/zTLyhODAeN1W/xOdiFpnAkJgCQ2IKDInZgeeZkepvtL7n1stUT+GnV9cPNTGvnV79n8JVV5f59vqbqZq4pjpiBwZOjQJDYgoMidmBF7j6nmbPH4sF7ZxzJj3lNTGHmMCQmAJDYgoMiSkwJKbAkJgCQ2IKDIl5HRj6OKP6vPShw/GfmENMYEhMgSExBYbE7MDQx/WfLvOPfhCXxhxiAkNiCgyJKTAkZgeGPup7ij28rnkq5hATGBJTYEhMgSExBYbEFBgSU2BITIEhsTn/OvDYWJl3bC/z4cMBr5jla9rPxzRqhmJ3cWAk7unGzT9pdvW73gSGxBQYElNgSGzO7cAPbSrz3XeV+cTxgFnTNPHDmE5tlY9H8e1UK9a0X+3mzeubm7vZBIbEFBgSU2BIbNZ34Ce3lfnO35d5YucoLLuozOdO/n2uMGc9W74KHI9ti9O6eWJFvqmbV1zbPt7NJjAkpsCQmAJDYrO+A2+8p//jn1pV5svfHTBvtNXrwL/5U5l/+dvqgl58vRtNYEhMgSExBYbEZn0H3j3Jt62+Z8Bvoql3iuer904fGy9zL2D29Kqf10veUuZ6B544fWk3m8CQmAJDYgoMic36DtybZAk97bQYyL6jZT46HpDGokl+3psmFnWzCQyJKTAkpsCQWPrvBx6vdmg7LwuJCQyJKTAkpsCQWP4duB3s/J3Plnmoego7d0kM5PCRMv/76TK3g77ZuroH2HnnlXnxGQEvMYEhMQWGxBQYEku/A09mV/Xtqt++pTqh2jm/8uUynzUaff10fZmf2BbT6oLXlfmLNwS8xASGxBQYElNgSGze78BnnV3mlcvLPDxc5jMXx0BWLitzb8DXpSez9OKAkzKBITEFhsQUGBKb9zvwq6p7DF33iZhWl17SP8NMMoEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSm/fvha7V94U+eDBm1KJFZb7g9WVumoBTZgJDYgoMiSkwJLbg7wvdTvM9rCaz6iNlfuelAafMBIbEFBgSU2BIbMHfF/rQWMyokeop8o0XBEwbExgSU2BITIEhMfeFhsRMYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxEZiio73ApglJjAkpsCQmAJDYiNtG/u6B5omzu7mnc+VF4yeXeZDR2Mg+/f1f3zxGQEL1p69k5zQRnGGCQyJKTAkpsCQ2MjEv6k3Fkea+GA33n1fecFl740p2bSp/+NvujBgwdr4l/6P9yLu7WYTGBJTYEhMgSGxkeGIG7sHxiPe380P3h/D3XzsWPkLLF1e5qYt89ZHy7z5ker86inkQ5fHQNpJHh8bK/PhAV+3hul08ECZH3y4zH99oMxtG+WnDZr4VjeawJCYAkNiCgyJNfWBlde2N3Rzr41bqgum9BnioeEyX39NucZe9q6+l7/w+ynsP/bC2v4/T+8qH//O98vf7/h4wJzVRvnzPHHgC924ZX1zazebwJCYAkNiCgyJNZOdsHRNu7Kbh5r4UnXK26O/v3XDxA77vW7eur55JKbRW1e3S7r5+HDc0c1Dbbw2YJa0TVTvTJhaP0xgSEyBITEFBgAAAAAAAAAAAAAAAAAAAAAAAOCU/RePsFqZef2t2wAAAABJRU5ErkJggg==",NI={class:"flex items-center gap-1 cursor-move"},VI=ws('<div class="flex flex-col w-[30px] justify-between gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),MI=ws('<div class="flex flex-col w-full gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),LI={class:"text-2xl text-primary"},UI=ws('<div class="basis-1/2"><div class="flex flex-col gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div></div>',1),FI=m("div",{class:"flex flex-col w-full justify-between gap-1 mt-2"},[m("div",{class:"border border-primary"})],-1),Ni={__name:"windowHeader",props:{title:String,window:String},setup(t){const{title:e,window:n}=t,r=zt(),s=()=>{r.removeWidow(n)};return(i,o)=>(I(),le("div",null,[m("div",NI,[m("div",{class:"basis-1/2"},[m("div",{class:"flex gap-2 items-center h-[35px]"},[VI,m("div",{class:"border-2 border-primary h-[26px] w-[35px] cursor-pointer hover:bg-primary",onClick:s}),MI])]),m("div",LI,Ot(t.title),1),UI]),FI]))}};/**
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
 */const Vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$I=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||h==null)throw new BI;const d=i<<2|l>>4;if(r.push(d),c!==64){const f=l<<4&240|c>>2;if(r.push(f),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jI=function(t){const e=Vg(t);return Mg.encodeByteArray(e,!0)},zo=function(t){return jI(t).replace(/\./g,"")},Lg=function(t){try{return Mg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HI=()=>qI().__FIREBASE_DEFAULTS__,zI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lg(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return HI()||zI()||WI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ug=t=>{var e,n;return(n=(e=mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fg=t=>{const e=Ug(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$g=()=>{var t;return(t=mu())===null||t===void 0?void 0:t.config},Bg=t=>{var e;return(e=mu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),l].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function QI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const e0="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=e0,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?t0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hn(s,l,r)}}function t0(t,e){return t.replace(n0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const n0=/\{\$([^}]+)}/g;function r0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ud(i)&&Ud(o)){if(!Wo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ud(t){return t!==null&&typeof t=="object"}/**
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
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function s0(t,e){const n=new i0(t,e);return n.subscribe.bind(n)}class i0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");o0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Al),s.error===void 0&&(s.error=Al),s.complete===void 0&&(s.complete=Al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Al(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class a0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c0(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:l0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l0(t){return t===ir?void 0:t}function c0(t){return t.instantiationMode==="EAGER"}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const h0={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},d0=he.INFO,f0={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},p0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=f0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=d0,this._logHandler=p0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const g0=(t,e)=>e.some(n=>t instanceof n);let Fd,$d;function m0(){return Fd||(Fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _0(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qg=new WeakMap,dc=new WeakMap,Hg=new WeakMap,bl=new WeakMap,yu=new WeakMap;function y0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qg.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function v0(t){if(dc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dc.set(t,e)}let fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E0(t){fc=t(fc)}function w0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rl(this),e,...n);return Hg.set(r,e.sort?e.sort():[e]),qn(r)}:_0().includes(t)?function(...e){return t.apply(Rl(this),e),qn(qg.get(this))}:function(...e){return qn(t.apply(Rl(this),e))}}function T0(t){return typeof t=="function"?w0(t):(t instanceof IDBTransaction&&v0(t),g0(t,m0())?new Proxy(t,fc):t)}function qn(t){if(t instanceof IDBRequest)return y0(t);if(bl.has(t))return bl.get(t);const e=T0(t);return e!==t&&(bl.set(t,e),yu.set(e,t)),e}const Rl=t=>yu.get(t);function I0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=qn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(qn(o.result),a.oldVersion,a.newVersion,qn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const A0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],Sl=new Map;function Bd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sl.get(e))return Sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=b0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||A0.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Sl.set(e,i),i}E0(t=>({...t,get:(e,n,r)=>Bd(e,n)||t.get(e,n,r),has:(e,n)=>!!Bd(e,n)||t.has(e,n)}));/**
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
 */class R0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function S0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pc="@firebase/app",jd="0.9.25";/**
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
 */const vr=new _u("@firebase/app"),P0="@firebase/app-compat",C0="@firebase/analytics-compat",k0="@firebase/analytics",x0="@firebase/app-check-compat",D0="@firebase/app-check",O0="@firebase/auth",N0="@firebase/auth-compat",V0="@firebase/database",M0="@firebase/database-compat",L0="@firebase/functions",U0="@firebase/functions-compat",F0="@firebase/installations",$0="@firebase/installations-compat",B0="@firebase/messaging",j0="@firebase/messaging-compat",q0="@firebase/performance",H0="@firebase/performance-compat",z0="@firebase/remote-config",W0="@firebase/remote-config-compat",K0="@firebase/storage",G0="@firebase/storage-compat",Q0="@firebase/firestore",Y0="@firebase/firestore-compat",J0="firebase",X0="10.7.1";/**
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
 */const gc="[DEFAULT]",Z0={[pc]:"fire-core",[P0]:"fire-core-compat",[k0]:"fire-analytics",[C0]:"fire-analytics-compat",[D0]:"fire-app-check",[x0]:"fire-app-check-compat",[O0]:"fire-auth",[N0]:"fire-auth-compat",[V0]:"fire-rtdb",[M0]:"fire-rtdb-compat",[L0]:"fire-fn",[U0]:"fire-fn-compat",[F0]:"fire-iid",[$0]:"fire-iid-compat",[B0]:"fire-fcm",[j0]:"fire-fcm-compat",[q0]:"fire-perf",[H0]:"fire-perf-compat",[z0]:"fire-rc",[W0]:"fire-rc-compat",[K0]:"fire-gcs",[G0]:"fire-gcs-compat",[Q0]:"fire-fst",[Y0]:"fire-fst-compat","fire-js":"fire-js",[J0]:"fire-js-all"};/**
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
 */const Ko=new Map,mc=new Map;function eA(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Er(t){const e=t.name;if(mc.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of Ko.values())eA(n,t);return!0}function Na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new Vi("app","Firebase",tA);/**
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
 */class nA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const Pr=X0;function zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(n||(n=$g()),!n)throw Hn.create("no-options");const i=Ko.get(s);if(i){if(Wo(n,i.options)&&Wo(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const o=new u0(s);for(const a of mc.values())o.addComponent(a);const l=new nA(n,r,o);return Ko.set(s,l),l}function vu(t=gc){const e=Ko.get(t);if(!e&&t===gc&&$g())return zg();if(!e)throw Hn.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=Z0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(l.join(" "));return}Er(new Qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rA="firebase-heartbeat-database",sA=1,pi="firebase-heartbeat-store";let Pl=null;function Wg(){return Pl||(Pl=I0(rA,sA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Pl}async function iA(t){try{return await(await Wg()).transaction(pi).objectStore(pi).get(Kg(t))}catch(e){if(e instanceof hn)vr.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function qd(t,e){try{const r=(await Wg()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,Kg(t)),await r.done}catch(n){if(n instanceof hn)vr.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function Kg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oA=1024,aA=30*24*60*60*1e3;class lA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=aA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hd(),{heartbeatsToSend:r,unsentEntries:s}=cA(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hd(){return new Date().toISOString().substring(0,10)}function cA(t,e=oA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zd(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hA(t){Er(new Qn("platform-logger",e=>new R0(e),"PRIVATE")),Er(new Qn("heartbeat",e=>new lA(e),"PRIVATE")),nn(pc,jd,t),nn(pc,jd,"esm2017"),nn("fire-js","")}hA("");var dA="firebase",fA="10.7.1";/**
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
 */nn(dA,fA,"app");const pA={apiKey:"AIzaSyAWCfFV1wT4ghgBKy42MLx_SPBPXX4Rgug",authDomain:"portfolio-d2e2c.firebaseapp.com",databaseURL:"https://portfolio-d2e2c-default-rtdb.firebaseio.com",projectId:"portfolio-d2e2c",storageBucket:"portfolio-d2e2c.appspot.com",messagingSenderId:"494212111153",appId:"1:494212111153:web:0b50c6e178bab976d7ee10",measurementId:"G-SP24KZSMTZ"},Li=zg(pA);var gA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Eu=Eu||{},ee=gA||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ui(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mA(t){return Object.prototype.hasOwnProperty.call(t,Cl)&&t[Cl]||(t[Cl]=++_A)}var Cl="closure_uid_"+(1e9*Math.random()>>>0),_A=0;function yA(t,e,n){return t.call.apply(t.bind,arguments)}function vA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=yA:ht=vA,ht.apply(null,arguments)}function ho(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var EA=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),EA!=0)&&mA(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var wA=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ee.addEventListener("test",n,e),ee.removeEventListener("test",n,e)}catch{}return t}();function gi(t){return/^[\s\xa0]*$/.test(t)}function Ma(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return Ma().indexOf(t)!=-1}function Tu(t){return Tu[" "](t),t}Tu[" "]=function(){};function TA(t,e){var n=pb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var IA=Jt("Opera"),ls=Jt("Trident")||Jt("MSIE"),Qg=Jt("Edge"),_c=Qg||ls,Yg=Jt("Gecko")&&!(Ma().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),AA=Ma().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function Jg(){var t=ee.document;return t?t.documentMode:void 0}var yc;e:{var kl="",xl=function(){var t=Ma();if(Yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Qg)return/Edge\/([\d\.]+)/.exec(t);if(ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AA)return/WebKit\/(\S+)/.exec(t);if(IA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xl&&(kl=xl?xl[1]:""),ls){var Dl=Jg();if(Dl!=null&&Dl>parseFloat(kl)){yc=String(Dl);break e}}yc=kl}var vc;if(ee.document&&ls){var Kd=Jg();vc=Kd||parseInt(yc,10)||void 0}else vc=void 0;var bA=vc;function mi(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Yg){e:{try{Tu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mi.$.h.call(this)}}Ye(mi,dt);var RA={2:"touch",3:"pen",4:"mouse"};mi.prototype.h=function(){mi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fi="closure_listenable_"+(1e6*Math.random()|0),SA=0;function PA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++SA,this.fa=this.ia=!1}function La(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Iu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function CA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Xg(t){const e={};for(const n in t)e[n]=t[n];return e}const Gd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Gd.length;i++)n=Gd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new PA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ec(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Gg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(La(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Au="closure_lm_"+(1e6*Math.random()|0),Ol={};function em(t,e,n,r,s){if(r&&r.once)return nm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)em(t,e[i],n,r,s);return null}return n=Su(n),t&&t[Fi]?t.O(e,n,Ui(r)?!!r.capture:!!r,s):tm(t,e,n,!1,r,s)}function tm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ui(s)?!!s.capture:!!s,l=Ru(t);if(l||(t[Au]=l=new Ua(t)),n=l.add(e,n,r,o,i),n.proxy)return n;if(r=kA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(sm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kA(){function t(n){return e.call(t.src,t.listener,n)}const e=xA;return t}function nm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nm(t,e[i],n,r,s);return null}return n=Su(n),t&&t[Fi]?t.P(e,n,Ui(r)?!!r.capture:!!r,s):tm(t,e,n,!0,r,s)}function rm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);else r=Ui(r)?!!r.capture:!!r,n=Su(n),t&&t[Fi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wc(i,n,r,s),-1<n&&(La(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ru(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wc(e,n,r,s)),(n=-1<t?e[t]:null)&&bu(n))}function bu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fi])Ec(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ru(e))?(Ec(n,t),n.h==0&&(n.src=null,e[Au]=null)):La(t)}}}function sm(t){return t in Ol?Ol[t]:Ol[t]="on"+t}function xA(t,e){if(t.fa)t=!0;else{e=new mi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bu(t),t=n.call(r,e)}return t}function Ru(t){return t=t[Au],t instanceof Ua?t:null}var Nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Su(t){return typeof t=="function"?t:(t[Nl]||(t[Nl]=function(e){return t.handleEvent(e)}),t[Nl])}function Qe(){Zn.call(this),this.i=new Ua(this),this.S=this,this.J=null}Ye(Qe,Zn);Qe.prototype[Fi]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){rm(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var s=e;e=new dt(r,t),Zg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=fo(o,r,!0,e)&&s}if(o=e.g=t,s=fo(o,r,!0,e)&&s,s=fo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=fo(o,r,!1,e)&&s}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)La(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Ec(t.i,o),s=l.call(a,r)!==!1&&s}}return s&&!r.defaultPrevented}var Pu=ee.JSON.stringify;class DA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function OA(){var t=Cu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NA{constructor(){this.h=this.g=null}add(e,n){const r=im.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var im=new DA(()=>new VA,t=>t.reset());class VA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function LA(t){ee.setTimeout(()=>{throw t},0)}let _i,yi=!1,Cu=new NA,om=()=>{const t=ee.Promise.resolve(void 0);_i=()=>{t.then(UA)}};var UA=()=>{for(var t;t=OA();){try{t.h.call(t.g)}catch(n){LA(n)}var e=im;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yi=!1};function Fa(t,e){Qe.call(this),this.h=t||1,this.g=e||ee,this.j=ht(this.qb,this),this.l=Date.now()}Ye(Fa,Qe);V=Fa.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(ku(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ku(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Fa.$.N.call(this),ku(this),delete this.g};function xu(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function am(t){t.g=xu(()=>{t.g=null,t.i&&(t.i=!1,am(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FA extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:am(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(t){Zn.call(this),this.h=t,this.g={}}Ye(vi,Zn);var Qd=[];function lm(t,e,n,r){Array.isArray(n)||(n&&(Qd[0]=n.toString()),n=Qd);for(var s=0;s<n.length;s++){var i=em(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function cm(t){Iu(t.g,function(e,n){this.g.hasOwnProperty(n)&&bu(e)},t),t.g={}}vi.prototype.N=function(){vi.$.N.call(this),cm(this)};vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $a(){this.g=!0}$a.prototype.Ea=function(){this.g=!1};function $A(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",l=i.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function BA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qA(t,n)+(r?" "+r:"")})}function jA(t,e){t.info(function(){return"TIMEOUT: "+e})}$a.prototype.info=function(){};function qA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Pu(n)}catch{return e}}var Cr={},Yd=null;function Ba(){return Yd=Yd||new Qe}Cr.Ta="serverreachability";function um(t){dt.call(this,Cr.Ta,t)}Ye(um,dt);function Ei(t){const e=Ba();nt(e,new um(e))}Cr.STAT_EVENT="statevent";function hm(t,e){dt.call(this,Cr.STAT_EVENT,t),this.stat=e}Ye(hm,dt);function _t(t){const e=Ba();nt(e,new hm(e,t))}Cr.Ua="timingevent";function dm(t,e){dt.call(this,Cr.Ua,t),this.size=e}Ye(dm,dt);function $i(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var ja={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Du(){}Du.prototype.h=null;function Jd(t){return t.h||(t.h=t.i())}function pm(){}var Bi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ou(){dt.call(this,"d")}Ye(Ou,dt);function Nu(){dt.call(this,"c")}Ye(Nu,dt);var Tc;function qa(){}Ye(qa,Du);qa.prototype.g=function(){return new XMLHttpRequest};qa.prototype.i=function(){return{}};Tc=new qa;function ji(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new vi(this),this.P=HA,t=_c?125:void 0,this.V=new Fa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var HA=45e3,mm={},Ic={};V=ji.prototype;V.setTimeout=function(t){this.P=t};function Ac(t,e,n){t.L=1,t.A=za(wn(e)),t.u=n,t.S=!0,_m(t,null)}function _m(t,e){t.G=Date.now(),qi(t),t.B=wn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),bm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new gm,t.g=Wm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new FA(ht(t.Pa,t,t.g),t.O)),lm(t.U,t.g,"readystatechange",t.nb),e=t.I?Xg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ei(),$A(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||_c||this.g&&(this.h.h||this.g.ja()||tf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ei(3):Ei(2)),Ha(this);var n=this.g.da();this.ca=n;t:if(ym(this)){var r=tf(this.g);t="";var s=r.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Zs(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gi(l)){var c=l;break t}}c=null}if(n=c)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bc(this,n);else{this.i=!1,this.s=3,_t(12),ur(this),Zs(this);break e}}this.S?(vm(this,u,o),_c&&this.i&&u==3&&(lm(this.U,this.V,"tick",this.mb),this.V.start())):(Kr(this.j,this.m,o,null),bc(this,o)),u==4&&ur(this),this.i&&!this.J&&(u==4?jm(this.l,this):(this.i=!1,qi(this)))}else hb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ur(this),Zs(this)}}}catch{}finally{}};function ym(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function vm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=zA(t,n),s==Ic){e==4&&(t.s=4,_t(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==mm){t.s=4,_t(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,s,null),bc(t,s);ym(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,_t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$u(e),e.M=!0,_t(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),ur(t),Zs(t))}V.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.o<e.length&&(Ha(this),vm(this,t,e),this.i&&t!=4&&qi(this))}};function zA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ic:(n=Number(e.substring(n,r)),isNaN(n)?mm:(r+=1,r+n>e.length?Ic:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,ur(this)};function qi(t){t.Y=Date.now()+t.P,Em(t,t.P)}function Em(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=$i(ht(t.lb,t),e)}function Ha(t){t.C&&(ee.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(jA(this.j,this.B),this.L!=2&&(Ei(),_t(17)),ur(this),this.s=2,Zs(this)):Em(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||jm(t.l,t)}function ur(t){Ha(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ku(t.V),cm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function bc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Rc(n.i,t))){if(!t.K&&Rc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Yo(n),Qa(n);else break e;Fu(n),_t(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=$i(ht(n.ib,n),6e3));if(1>=Pm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else hr(n,11)}else if((t.K||n.g==t)&&Yo(n),!gi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Vu(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ce(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=zm(r,r.J?r.pa:null,r.Y),o.K){Cm(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.C&&(Ha(l),qi(l)),r.g=o}else $m(r);0<n.j.length&&Ya(n)}else c[0]!="stop"&&c[0]!="close"||hr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hr(n,7):Uu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ei(4)}catch{}}function WA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function wm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KA(t),r=WA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mr){this.h=t.h,Go(this,t.j),this.s=t.s,this.g=t.g,Qo(this,t.m),this.l=t.l;var e=t.i,n=new wi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xd(this,n),this.o=t.o}else t&&(e=String(t).match(Tm))?(this.h=!1,Go(this,e[1]||"",!0),this.s=qs(e[2]||""),this.g=qs(e[3]||"",!0),Qo(this,e[4]),this.l=qs(e[5]||"",!0),Xd(this,e[6]||"",!0),this.o=qs(e[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}mr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hs(e,Zd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hs(e,Zd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hs(n,n.charAt(0)=="/"?JA:YA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hs(n,ZA)),t.join("")};function wn(t){return new mr(t)}function Go(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xd(t,e,n){e instanceof wi?(t.i=e,eb(t.i,t.h)):(n||(e=Hs(e,XA)),t.i=new wi(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function za(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zd=/[#\/\?@]/g,YA=/[#\?:]/g,JA=/[#\?]/g,XA=/[#\?@]/g,ZA=/#/g;function wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function er(t){t.g||(t.g=new Map,t.h=0,t.i&&GA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=wi.prototype;V.add=function(t,e){er(this),this.i=null,t=Ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Im(t,e){er(t),e=Ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Am(t,e){return er(t),e=Ts(t,e),t.g.has(e)}V.forEach=function(t,e){er(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){er(this);let e=[];if(typeof t=="string")Am(this,t)&&(e=e.concat(this.g.get(Ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return er(this),this.i=null,t=Ts(this,t),Am(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function bm(t,e,n){Im(t,e),0<n.length&&(t.i=null,t.g.set(Ts(t,e),wu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eb(t,e){e&&!t.j&&(er(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Im(this,r),bm(this,s,n))},t)),t.j=e}var tb=class{constructor(t,e){this.g=t,this.map=e}};function Rm(t){this.l=t||nb,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nb=10;function Sm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pm(t){return t.h?1:t.g?t.g.size:0}function Rc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vu(t,e){t.g?t.g.add(e):t.h=e}function Cm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Rm.prototype.cancel=function(){if(this.i=km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function km(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return wu(t.i)}var rb=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function sb(){this.g=new rb}function ib(t,e,n){const r=n||"";try{wm(t,function(s,i){let o=s;Ui(s)&&(o=Pu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ob(t,e){const n=new $a;if(ee.Image){const r=new Image;r.onload=ho(po,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ho(po,n,r,"TestLoadImage: error",!1,e),r.onabort=ho(po,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ho(po,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function po(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wa(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(Wa,Du);Wa.prototype.g=function(){return new Ka(this.l,this.j)};Wa.prototype.i=function(t){return function(){return t}}({});function Ka(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Mu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Ka,Qe);var Mu=0;V=Ka.prototype;V.open=function(t,e){if(this.readyState!=Mu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ti(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=Mu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hi(this):Ti(this),this.readyState==3&&xm(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Hi(this))};V.Ya=function(t){this.g&&(this.response=t,Hi(this))};V.ka=function(){this.g&&Hi(this)};function Hi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ti(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ti(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ab=ee.JSON.parse;function Ue(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dm,this.L=this.M=!1}Ye(Ue,Qe);var Dm="",lb=/^https?$/i,cb=["POST","PUT"];V=Ue.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tc.g(),this.C=this.u?Jd(this.u):Jd(Tc),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ef(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ee.FormData&&t instanceof ee.FormData,!(0<=Gg(cb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vm(this),0<this.B&&((this.L=ub(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=xu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ef(this,i)}};function ub(t){return ls&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Eu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function ef(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Om(t),Ga(t)}function Om(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Ga(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ga(this,!0)),Ue.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Nm(this):this.kb())};V.kb=function(){Nm(this)};function Nm(t){if(t.h&&typeof Eu<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)xu(t.La,0,t);else if(nt(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Tm)[1]||null;!s&&ee.self&&ee.self.location&&(s=ee.self.location.protocol.slice(0,-1)),r=!lb.test(s?s.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var i=2<Xt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Om(t)}}finally{Ga(t)}}}}function Ga(t,e){if(t.g){Vm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Vm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ab(e)}};function tf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hb(t){const e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(gi(t[r]))continue;var n=MA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}CA(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mm(t){let e="";return Iu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Lu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Mm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Lm(t){this.Ga=0,this.j=[],this.l=new $a,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vs("baseRetryDelayMs",5e3,t),this.hb=Vs("retryDelaySeedMs",1e4,t),this.eb=Vs("forwardChannelMaxRetries",2,t),this.xa=Vs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Rm(t&&t.concurrentRequestLimit),this.Ja=new sb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=Lm.prototype;V.ra=8;V.H=1;function Uu(t){if(Um(t),t.H==3){var e=t.W++,n=wn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),zi(t,n),e=new ji(t,t.l,e),e.L=2,e.A=za(wn(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.A,n=!0),n||(e.g=Wm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),qi(e)}Hm(t)}function Qa(t){t.g&&($u(t),t.g.cancel(),t.g=null)}function Um(t){Qa(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Yo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function Ya(t){if(!Sm(t.i)&&!t.m){t.m=!0;var e=t.Na;_i||om(),yi||(_i(),yi=!0),Cu.add(e,t),t.C=0}}function db(t,e){return Pm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=$i(ht(t.Na,t,e),qm(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ji(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Xg(i),Zg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Fm(this,s,e),n=wn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Mm(i)))+"&"+e:this.o&&Lu(n,this.o,i)),Vu(this.i,s),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),s.aa=!0,Ac(s,n,null)):Ac(s,n,e),this.H=2}}else this.H==3&&(t?nf(this,t):this.j.length==0||Sm(this.i)||nf(this))};function nf(t,e){var n;e?n=e.m:n=t.W++;const r=wn(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),zi(t,r),t.o&&t.s&&Lu(r,t.o,t.s),n=new ji(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Fm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vu(t.i,n),Ac(n,r,e)}function zi(t,e){t.na&&Iu(t.na,function(n,r){Ce(e,r,n)}),t.h&&wm({},function(n,r){Ce(e,r,n)})}function Fm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let l=!0;for(let a=0;a<n;a++){let c=s[a].g;const u=s[a].map;if(c-=i,0>c)i=Math.max(0,s[a].g-100),l=!1;else try{ib(u,o,"req"+c+"_")}catch{r&&r(u)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $m(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;_i||om(),yi||(_i(),yi=!0),Cu.add(e,t),t.A=0}}function Fu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=$i(ht(t.Ma,t),qm(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,Bm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=$i(ht(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),Qa(this),Bm(this))};function $u(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function Bm(t){t.g=new ji(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),zi(t,e),t.o&&t.s&&Lu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=za(wn(e)),n.u=null,n.S=!0,_m(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Qa(this),Fu(this),_t(19))};function Yo(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function jm(t,e){var n=null;if(t.g==e){Yo(t),$u(t),t.g=null;var r=2}else if(Rc(t.i,e))n=e.F,Cm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ba(),nt(r,new dm(r,n)),Ya(t)}else $m(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&db(t,e)||r==2&&Fu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function qm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function hr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new mr("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Go(n,"https"),za(n)),ob(n.toString(),r)}else _t(2);t.H=0,t.h&&t.h.za(e),Hm(t),Um(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function Hm(t){if(t.H=0,t.ma=[],t.h){const e=km(t.i);(e.length!=0||t.j.length!=0)&&(Wd(t.ma,e),Wd(t.ma,t.j),t.i.i.length=0,wu(t.j),t.j.length=0),t.h.ya()}}function zm(t,e,n){var r=n instanceof mr?wn(n):new mr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Qo(r,r.m);else{var s=ee.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new mr(null);r&&Go(i,r),e&&(i.g=e),s&&Qo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),zi(t,r),r}function Wm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ue(new Wa({ob:n})):new Ue(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Km(){}V=Km.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Jo(){if(ls&&!(10<=Number(bA)))throw Error("Environmental error: no available transport.")}Jo.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Qe.call(this),this.g=new Lm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!gi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}Ye(Pt,Qe);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zm(t,null,t.Y),Ya(t)};Pt.prototype.close=function(){Uu(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pu(t),t=n);e.j.push(new tb(e.fb++,t)),e.H==3&&Ya(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,Uu(this.g),delete this.g,Pt.$.N.call(this)};function Gm(t){Ou.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Gm,Ou);function Qm(){Nu.call(this),this.status=1}Ye(Qm,Nu);function Is(t){this.g=t}Ye(Is,Km);Is.prototype.Ba=function(){nt(this.g,"a")};Is.prototype.Aa=function(t){nt(this.g,new Gm(t))};Is.prototype.za=function(t){nt(this.g,new Qm)};Is.prototype.ya=function(){nt(this.g,"b")};function fb(){this.blockSize=-1}function jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(jt,fb);jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Vl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Vl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Vl(this,r),s=0;break}}this.h=s,this.i+=e};jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var pb={};function Bu(t){return-128<=t&&128>t?TA(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return Xr;if(0>t)return Ze(Zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Sc;return new Te(e,0)}function Ym(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(Ym(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),r=Xr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Zt(Math.pow(e,i)),r=r.R(i).add(Zt(o))):(r=r.R(n),r=r.add(Zt(o)))}return r}var Sc=4294967296,Xr=Bu(0),Pc=Bu(1),rf=Bu(16777216);V=Te.prototype;V.ea=function(){if(xt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Sc+r)*e,e*=Sc}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mn(this))return"0";if(xt(this))return"-"+Ze(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,r="";;){var s=Zo(n,e).g;n=Xo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,mn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xt(t){return t.h==-1}V.X=function(t){return t=Xo(this,t),xt(t)?-1:mn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(Pc)}V.abs=function(){return xt(this)?Ze(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function Xo(t,e){return t.add(Ze(e))}V.R=function(t){if(mn(this)||mn(t))return Xr;if(xt(this))return xt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(xt(t))return Ze(this.R(Ze(t)));if(0>this.X(rf)&&0>t.X(rf))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(s)>>>16,a=t.D(s)&65535;n[2*r+2*s]+=o*a,go(n,2*r+2*s),n[2*r+2*s+1]+=i*a,go(n,2*r+2*s+1),n[2*r+2*s+1]+=o*l,go(n,2*r+2*s+1),n[2*r+2*s+2]+=i*l,go(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function go(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ms(t,e){this.g=t,this.h=e}function Zo(t,e){if(mn(e))throw Error("division by zero");if(mn(t))return new Ms(Xr,Xr);if(xt(t))return e=Zo(Ze(t),e),new Ms(Ze(e.g),Ze(e.h));if(xt(e))return e=Zo(t,Ze(e)),new Ms(Ze(e.g),e.h);if(30<t.g.length){if(xt(t)||xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pc,r=e;0>=r.X(t);)n=sf(n),r=sf(r);var s=Fr(n,1),i=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!mn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Fr(r,1),n=Fr(n,1)}return e=Xo(t,s.R(e)),new Ms(s,e)}for(s=Xr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Zt(n),o=i.R(e);xt(o)||0<o.X(t);)n-=r,i=Zt(n),o=i.R(e);mn(i)&&(i=Pc),s=s.add(i),t=Xo(t,o)}return new Ms(s,t)}V.gb=function(t){return Zo(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function sf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function Fr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}Jo.prototype.createWebChannel=Jo.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;ja.NO_ERROR=0;ja.TIMEOUT=8;ja.HTTP_ERROR=6;fm.COMPLETE="complete";pm.EventType=Bi;Bi.OPEN="a";Bi.CLOSE="b";Bi.ERROR="c";Bi.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;jt.prototype.digest=jt.prototype.l;jt.prototype.reset=jt.prototype.reset;jt.prototype.update=jt.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Zt;Te.fromString=Ym;var gb=function(){return new Jo},mb=function(){return Ba()},Ml=ja,_b=fm,yb=Cr,of={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},mo=pm,vb=Ue,Eb=jt,Zr=Te;const af="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let As="10.7.0";/**
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
 */const wr=new _u("@firebase/firestore");function Ls(){return wr.logLevel}function j(t,...e){if(wr.logLevel<=he.DEBUG){const n=e.map(ju);wr.debug(`Firestore (${As}): ${t}`,...n)}}function Tn(t,...e){if(wr.logLevel<=he.ERROR){const n=e.map(ju);wr.error(`Firestore (${As}): ${t}`,...n)}}function cs(t,...e){if(wr.logLevel<=he.WARN){const n=e.map(ju);wr.warn(`Firestore (${As}): ${t}`,...n)}}function ju(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Se(t,e){t||Z()}function ie(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class Tb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ib{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=i;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new Jm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new lt(e)}}class Ab{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ab(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new Rb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Pb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Pb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function us(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Ii{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const Cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ii{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return Cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[s+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new q(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ke.fromString(e))}static fromName(e){return new K(ke.fromString(e).popFirst(5))}static empty(){return new K(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ke(e.slice()))}}function kb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Yn(s,K.empty(),e)}function xb(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(re.min(),K.empty(),-1)}static max(){return new Yn(re.max(),K.empty(),-1)}}function Db(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ob="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Ob)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},a=>r(a))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let a=0;a<i;a++){const c=a;n(e[c]).next(u=>{o[c]=u,++l,l===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ki(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}qu._e=-1;function Ja(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function Vb(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cf(this.data.getIterator())}getIteratorFrom(e){return new cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new rt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class e_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new e_("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Mb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=Mb.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function Hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zu(t){const e=t.mapValue.fields.__previous_value__;return Hu(e)?zu(e):e}function Ai(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class Lb{constructor(e,n,r,s,i,o,l,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:Ub(t)?9007199254740991:10:Z()}function un(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ai(t).isEqual(Ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jn(s.timestampValue),l=Jn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),l=Be(i.doubleValue);return o===l?ea(o)===ea(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(lf(o)!==lf(l))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(l[a]===void 0||!un(o[a],l[a])))return!1;return!0}(t,e);default:return Z()}}function Ri(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Be(i.integerValue||i.doubleValue),a=Be(o.integerValue||o.doubleValue);return l<a?-1:l>a?1:l===a?0:isNaN(l)?isNaN(a)?0:-1:1}(t,e);case 3:return uf(t.timestampValue,e.timestampValue);case 4:return uf(Ai(t),Ai(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Tr(i),a=Tr(o);return l.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),a=o.split("/");for(let c=0;c<l.length&&c<a.length;c++){const u=ye(l[c],a[c]);if(u!==0)return u}return ye(l.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Be(i.latitude),Be(o.latitude));return l!==0?l:ye(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const l=i.values||[],a=o.values||[];for(let c=0;c<l.length&&c<a.length;++c){const u=hs(l[c],a[c]);if(u)return u}return ye(l.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===yo.mapValue&&o===yo.mapValue)return 0;if(i===yo.mapValue)return 1;if(o===yo.mapValue)return-1;const l=i.fields||{},a=Object.keys(l),c=o.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=ye(a[h],u[h]);if(d!==0)return d;const f=hs(l[a[h]],c[u[h]]);if(f!==0)return f}return ye(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function uf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Jn(t),r=Jn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function ds(t){return Cc(t)}function Cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Cc(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function hf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kc(t){return!!t&&"integerValue"in t}function Wu(t){return!!t&&"arrayValue"in t}function df(t){return!!t&&"nullValue"in t}function ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ei(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(ei(this.value))}}function t_(t){const e=[];return bs(t.fields,(n,r)=>{const s=new et([n]);if(ko(r)){const i=t_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,re.min(),re.min(),re.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,re.min(),re.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,re.min(),re.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function pf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=hs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class n_{}class qe extends n_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bb(e,n,r):n==="array-contains"?new Hb(e,r):n==="in"?new zb(e,r):n==="not-in"?new Wb(e,r):n==="array-contains-any"?new Kb(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jb(e,r):new qb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends n_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new qt(e,n)}matches(e){return r_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function r_(t){return t.op==="and"}function s_(t){return $b(t)&&r_(t)}function $b(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function xc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(s_(t))return t.filters.map(e=>xc(e)).join(",");{const e=t.filters.map(n=>xc(n)).join(",");return`${t.op}(${e})`}}function i_(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(t,e):t instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&i_(o,s.filters[l]),!0):!1}(t,e):void Z()}function o_(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(o_).join(" ,")+"}"}(t):"Filter"}class Bb extends qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class jb extends qe{constructor(e,n){super(e,"in",n),this.keys=a_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qb extends qe{constructor(e,n){super(e,"not-in",n),this.keys=a_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Hb extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wu(n)&&Ri(n.arrayValue,this.value)}}class zb extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class Wb extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ri(this.value.arrayValue,n)}}class Kb extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
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
 */class Gb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ce=null}}function mf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Gb(t,e,n,r,s,i,o)}function Ku(t){const e=ie(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.ce=n}return e.ce}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!i_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gf(t.startAt,e.startAt)&&gf(t.endAt,e.endAt)}function Dc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Qb(t,e,n,r,s,i,o,l){return new Gi(t,e,n,r,s,i,o,l)}function l_(t){return new Gi(t)}function _f(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function c_(t){return t.collectionGroup!==null}function ti(t){const e=ie(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(et.comparator);return o.filters.forEach(a=>{a.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new na(i,r))}),n.has(et.keyField().canonicalString())||e.le.push(new na(et.keyField(),r))}return e.le}function rn(t){const e=ie(t);return e.he||(e.he=Yb(e,ti(t))),e.he}function Yb(t,e){if(t.limitType==="F")return mf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new na(s.field,i)});const n=t.endAt?new ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ta(t.startAt.position,t.startAt.inclusive):null;return mf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oc(t,e){const n=t.filters.concat([e]);return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nc(t,e,n){return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Gu(rn(t),rn(e))&&t.limitType===e.limitType}function u_(t){return`${Ku(rn(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>o_(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ds(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,a){const c=pf(o,l,a);return o.inclusive?c<=0:c<0}(r.startAt,ti(r),s)||r.endAt&&!function(o,l,a){const c=pf(o,l,a);return o.inclusive?c>=0:c>0}(r.endAt,ti(r),s))}(t,e)}function Jb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function h_(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=Xb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Xb(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const a=o.data.field(i),c=l.data.field(i);return a!==null&&c!==null?hs(a,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zm(this.inner)}size(){return this.innerSize}}/**
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
 */const Zb=new Ve(K.comparator);function In(){return Zb}const d_=new Ve(K.comparator);function zs(...t){let e=d_;for(const n of t)e=e.insert(n.key,n);return e}function f_(t){let e=d_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return ni()}function p_(){return ni()}function ni(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const eR=new Ve(K.comparator),tR=new rt(K.comparator);function ue(...t){let e=tR;for(const n of t)e=e.add(n);return e}const nR=new rt(ye);function rR(){return nR}/**
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
 */function g_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function m_(t){return{integerValue:""+t}}function sR(t,e){return Vb(e)?m_(e):g_(t,e)}/**
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
 */class el{constructor(){this._=void 0}}function iR(t,e,n){return t instanceof ra?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hu(i)&&(i=zu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Si?y_(t,e):t instanceof Pi?v_(t,e):function(s,i){const o=__(s,i),l=yf(o)+yf(s.Ie);return kc(o)&&kc(s.Ie)?m_(l):g_(s.serializer,l)}(t,e)}function oR(t,e,n){return t instanceof Si?y_(t,e):t instanceof Pi?v_(t,e):n}function __(t,e){return t instanceof sa?function(r){return kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ra extends el{}class Si extends el{constructor(e){super(),this.elements=e}}function y_(t,e){const n=E_(e);for(const r of t.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class Pi extends el{constructor(e){super(),this.elements=e}}function v_(t,e){let n=E_(e);for(const r of t.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class sa extends el{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function yf(t){return Be(t.integerValue||t.doubleValue)}function E_(t){return Wu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Si&&s instanceof Si||r instanceof Pi&&s instanceof Pi?us(r.elements,s.elements,un):r instanceof sa&&s instanceof sa?un(r.Ie,s.Ie):r instanceof ra&&s instanceof ra}(t.transform,e.transform)}class lR{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function w_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qu(t.key,sn.none()):new Qi(t.key,t.data,sn.none());{const n=t.data,r=Dt.empty();let s=new rt(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kr(t.key,r,new Ut(s.toArray()),sn.none())}}function cR(t,e,n){t instanceof Qi?function(s,i,o){const l=s.value.clone(),a=Ef(s.fieldTransforms,i,o.transformResults);l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ef(s.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(T_(s)),a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Qi?function(i,o,l,a){if(!xo(i.precondition,o))return l;const c=i.value.clone(),u=wf(i.fieldTransforms,a,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,o,l,a){if(!xo(i.precondition,o))return l;const c=wf(i.fieldTransforms,a,o),u=o.data;return u.setAll(T_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,l){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=__(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function vf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&us(r,s,(i,o)=>aR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qi extends tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ef(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,oR(o,l,n[s]))}return r}function wf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iR(i,o,e))}return r}class Qu extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hR extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=p_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const a=w_(o,l);a!==null&&r.set(s.key,a),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>vf(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>vf(n,r))}}class Yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return eR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yu(e,n,r,s)}}/**
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
 */var $e,pe;function gR(t){switch(t){default:return Z();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function I_(t){if(t===void 0)return Tn("GRPC error has no .code"),b.UNKNOWN;switch(t){case $e.OK:return b.OK;case $e.CANCELLED:return b.CANCELLED;case $e.UNKNOWN:return b.UNKNOWN;case $e.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case $e.INTERNAL:return b.INTERNAL;case $e.UNAVAILABLE:return b.UNAVAILABLE;case $e.UNAUTHENTICATED:return b.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case $e.NOT_FOUND:return b.NOT_FOUND;case $e.ALREADY_EXISTS:return b.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return b.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case $e.ABORTED:return b.ABORTED;case $e.OUT_OF_RANGE:return b.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return b.UNIMPLEMENTED;case $e.DATA_LOSS:return b.DATA_LOSS;default:return Z()}}(pe=$e||($e={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const _R=new Zr([4294967295,4294967295],0);function Tf(t){const e=mR().encode(t),n=new Eb;return n.update(e),new Uint8Array(n.digest())}function If(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([s,i],0)]}class Ju{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Zr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Zr.fromNumber(r)));return s.compare(_R)===1&&(s=new Zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ju(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Yi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(re.min(),s,new Ve(ye),In(),ue())}}class Yi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yi(r,n,ue(),ue(),ue())}}/**
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
 */class Do{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class A_{constructor(e,n){this.targetId=e,this.fe=n}}class b_{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Af{constructor(){this.ge=0,this.pe=Rf(),this.ye=pt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ue(),n=ue(),r=ue();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Yi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Rf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Se(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class yR{constructor(e){this.Le=e,this.ke=new Map,this.qe=In(),this.Qe=bf(),this.Ke=new Ve(ye)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Dc(i))if(r===0){const o=new K(i.path);this.We(n,o,ct.newNoDocument(o,re.min()))}else Se(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),a=l?this.et(l,e,o):1;if(a!==0){this.He(n);const c=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(a){if(a instanceof e_)return cs("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{l=new Ju(o,s,i)}catch(a){return cs(a instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return l.Te===0?null:l}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Dc(l.target)){const a=new K(l.target.path);this.qe.get(a)!==null||this.st(o,a)||this.We(o,a,ct.newNoDocument(a,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ue();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(a=>{const c=this.Ye(a);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new nl(e,n,this.Ke,this.qe,r);return this.qe=In(),this.Qe=bf(),this.Ke=new Ve(ye),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Af,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new rt(ye),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Af),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function bf(){return new Ve(K.comparator)}function Rf(){return new Ve(K.comparator)}const vR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ER=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wR=(()=>({and:"AND",or:"OR"}))();class TR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IR(t,e){return ia(t,e.toTimestamp())}function on(t){return Se(!!t),re.fromTimestamp(function(n){const r=Jn(n);return new He(r.seconds,r.nanos)}(t))}function Xu(t,e){return function(r){return new ke(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function S_(t){const e=ke.fromString(t);return Se(x_(e)),e}function Mc(t,e){return Xu(t.databaseId,e.path)}function Ll(t,e){const n=S_(e);if(n.get(1)!==t.databaseId.projectId)throw new q(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(P_(n))}function Lc(t,e){return Xu(t.databaseId,e)}function AR(t){const e=S_(t);return e.length===4?ke.emptyPath():P_(e)}function Uc(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sf(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function bR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Se(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const u=c.code===void 0?b.UNKNOWN:I_(c.code);return new q(u,c.message||"")}(o);n=new b_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ll(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):re.min(),l=new Dt({mapValue:{fields:r.document.fields}}),a=ct.newFoundDocument(s,i,o,l),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Do(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ll(t,r.document),i=r.readTime?on(r.readTime):re.min(),o=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Do([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ll(t,r.document),i=r.removedTargetIds||[];n=new Do([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pR(s,i),l=r.targetId;n=new A_(l,o)}}return n}function RR(t,e){let n;if(e instanceof Qi)n={update:Sf(t,e.key,e.value)};else if(e instanceof Qu)n={delete:Mc(t,e.key)};else if(e instanceof kr)n={update:Sf(t,e.key,e.data),updateMask:VR(e.fieldMask)};else{if(!(e instanceof hR))return Z();n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function SR(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?on(s.updateTime):on(i);return o.isEqual(re.min())&&(o=on(i)),new lR(o,s.transformResults||[])}(n,e))):[]}function PR(t,e){return{documents:[Lc(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Lc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Lc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length!==0)return k_(qt.create(a,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(h){return{field:Hr(h.field),direction:DR(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Vc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(a){return{before:a.inclusive,values:a.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(e.endAt)),n}function kR(t){let e=AR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=C_(h);return d instanceof qt&&s_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new na(zr(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let l=null;n.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,Ja(d)?null:d}(n.limit));let a=null;n.startAt&&(a=function(h){const d=!!h.before,f=h.values||[];return new ta(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ta(f,d)}(n.endAt)),Qb(e,s,o,i,l,"F",a,c)}function xR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>C_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function DR(t){return vR[t]}function OR(t){return ER[t]}function NR(t){return wR[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function zr(t){return et.fromServerFormat(t.fieldPath)}function k_(t){return t instanceof qe?function(n){if(n.op==="=="){if(ff(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(df(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ff(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(df(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:OR(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(s=>k_(s));return r.length===1?r[0]:{compositeFilter:{op:NR(n.op),filters:r}}}(t):Z()}function VR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Un{constructor(e,n,r,s,i=re.min(),o=re.min(),l=pt.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=a}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MR{constructor(e){this.ut=e}}function LR(t){const e=kR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nc(e,e.limit,"L"):e}/**
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
 */class UR{constructor(){this.on=new FR}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Yn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(ke.comparator)).toArray()}}/**
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
 */class fs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new fs(0)}static Nn(){return new fs(-1)}}/**
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
 */class $R{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ri(r.mutation,s,Ut.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zs();return i.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=In();const o=ni(),l=function(){return ni()}();return n.forEach((a,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof kr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ri(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(a=>(a.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return l.set(c,new BR(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new Ve((o,l)=>o-l),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(a=>{const c=n.get(a);if(c===null)return;let u=r.get(a)||Ut.empty();u=l.applyToLocalView(c,u),r.set(a,u);const h=(s.get(l.batchId)||ue()).add(a);s=s.insert(l.batchId,h)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),c=a.key,u=a.value,h=p_();u.forEach(d=>{if(!i.has(d)){const f=w_(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):c_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(dr());let l=-1,a=i;return o.next(c=>S.forEach(c,(u,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{a=a.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,a,c,ue())).next(u=>({batchId:l,changes:f_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zs();return this.indexManager.getCollectionParents(e,i).next(l=>S.forEach(l,a=>{const c=function(h,d){return new Gi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((a,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,ct.newInvalidDocument(u)))});let l=zs();return o.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ri(u.mutation,c,Ut.empty(),He.now()),Za(n,c)&&(l=l.insert(a,c))}),l})}}/**
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
 */class qR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:LR(s.bundledQuery),readTime:on(s.readTime)}}(n)),S.resolve()}}/**
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
 */class HR{constructor(){this.overlays=new Ve(K.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,c=a.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&a.largestBatchId>r&&s.set(a.getKey(),a)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=dr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const l=dr(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((c,u)=>l.set(c,u)),!(l.size()>=s)););return S.resolve(l)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fR(n,r));let i=this.lr.get(n);i===void 0&&(i=ue(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class Zu{constructor(){this.hr=new rt(We.Pr),this.Ir=new rt(We.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new We(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new We(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new K(new ke([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new K(new ke([])),r=new We(n,e),s=new We(n,e+1);let i=ue();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return K.comparator(e.key,n.key)||ye(e.gr,n.gr)}static Tr(e,n){return ye(e.gr,n.gr)||K.comparator(e.key,n.key)}}/**
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
 */class zR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new rt(We.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.yr=this.yr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const l=this.wr(o.gr);i.push(l)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ye);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],l=>{r=r.add(l.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let l=new rt(ye);return this.yr.forEachWhile(a=>{const c=a.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(a.gr)),!0)},o),S.resolve(this.br(l))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new We(n,0),s=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WR{constructor(e){this.Cr=e,this.docs=function(){return new Ve(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=In();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=In();const o=n.path,l=new K(o.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:c,value:{document:u}}=a.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Db(xb(u),r)<=0||(s.has(u.key)||Za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KR(this)}getSize(e){return S.resolve(this.size)}}class KR extends $R{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class GR{constructor(e){this.persistence=e,this.Fr=new Rs(n=>Ku(n),Gu),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Zu,this.targetCount=0,this.Nr=fs.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
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
 */class QR{constructor(e,n){this.Br={},this.overlays={},this.Lr=new qu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new GR(this),this.indexManager=new UR,this.remoteDocumentCache=function(s){return new WR(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new MR(n),this.Kr=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new zR(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new YR(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class YR extends Nb{constructor(e){super(),this.currentSequenceNumber=e}}class eh{constructor(e){this.persistence=e,this.Gr=new Zu,this.zr=null}static jr(e){return new eh(e)}get Hr(){if(this.zr)return this.zr;throw Z()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const s=K.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class th{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new th(e,n.fromCache,r,s)}}/**
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
 */class JR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JR;return this.Hi(e,n,o).next(l=>{if(i.result=l,this.$i)return this.Ji(e,n,o,l.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Ls()<=he.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Ls()<=he.DEBUG&&j("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ls()<=he.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):S.resolve())}zi(e,n){if(_f(n))return S.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nc(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Gi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(a=>{const c=this.Yi(n,l);return this.Zi(n,c,o,a.readTime)?this.zi(e,Nc(n,null,"F")):this.Xi(e,c,n,a)}))})))}ji(e,n,r,s){return _f(n)||s.isEqual(re.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?S.resolve(null):(Ls()<=he.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.Xi(e,o,n,kb(s,-1)).next(l=>l))})}Yi(e,n){let r=new rt(h_(e));return n.forEach((s,i)=>{Za(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Ls()<=he.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",qr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Yn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ZR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ve(ye),this.ns=new Rs(i=>Ku(i),Gu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function eS(t,e,n,r){return new ZR(t,e,n,r)}async function D_(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let a=ue();for(const c of s){o.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}for(const c of i){l.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}return n.localDocuments.getDocuments(r,a).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:l}))})})}function tS(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(l,a,c,u){const h=c.batch,d=h.keys();let f=S.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(a,y)).next(v=>{const E=c.docVersions.get(y);Se(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>l.mutationQueue.removeMutationBatch(a,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let a=ue();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(a=a.add(l.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function O_(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function nS(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const l=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;l.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(pt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(v,E,C){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,u)&&l.push(n.qr.updateTargetData(i,f))});let a=In(),c=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),l.push(rS(i,o,e.documentUpdates).next(u=>{a=u.us,c=u.cs})),!r.isEqual(re.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(u)}return S.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,a,c)).next(()=>a)}).then(i=>(n.ts=s,i))}function rS(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=In();return n.forEach((l,a)=>{const c=i.get(l);a.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),a.isNoDocument()&&a.version.isEqual(re.min())?(e.removeEntry(l,a.readTime),o=o.insert(l,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),o=o.insert(l,a)):j("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",a.version)}),{us:o,cs:s}})}function sS(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iS(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Fc(t,e,n){const r=ie(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ki(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Pf(t,e,n){const r=ie(t);let s=re.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(a,c,u){const h=ie(a),d=h.ns.get(u);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,l.targetId).next(a=>{i=a})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:ue())).next(l=>(oS(r,Jb(e),l),{documents:l,ls:i})))}function oS(t,e,n){let r=t.rs.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Cf{constructor(){this.activeTargetIds=rR()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aS{constructor(){this.eo=new Cf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lS{ro(e){}shutdown(){}}/**
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
 */class kf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vo=null;function Ul(){return vo===null?vo=function(){return 268435456+Math.round(2147483648*Math.random())}():vo++,"0x"+vo.toString(16)}/**
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
 */const cS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uS{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const at="WebChannelConnection";class hS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const l=Ul(),a=this.So(n,r);j("RestConnection",`Sending RPC '${n}' ${l}:`,a,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,a,c,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${l}: `,u),u),u=>{throw cs("RestConnection",`RPC '${n}' ${l} failed with error: `,u,"url: ",a,"request:",s),u})}Co(n,r,s,i,o,l){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=cS[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Ul();return new Promise((o,l)=>{const a=new vb;a.setWithCredentials(!0),a.listenOnce(_b.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ml.NO_ERROR:const u=a.getResponseJson();j(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ml.TIMEOUT:j(at,`RPC '${e}' ${i} timed out`),l(new q(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const h=a.getStatus();if(j(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const C=E.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(C)>=0?C:b.UNKNOWN}(f.status);l(new q(y,f.message))}else l(new q(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new q(b.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(at,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);j(at,`RPC '${e}' ${i} sending request:`,s),a.send(n,"POST",c,r,15)})}vo(e,n,r){const s=Ul(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gb(),l=mb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");j(at,`Creating RPC '${e}' stream ${s}: ${u}`,a);const h=o.createWebChannel(u,a);let d=!1,f=!1;const y=new uS({co:E=>{f?j(at,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(j(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),j(at,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},lo:()=>h.close()}),v=(E,C,k)=>{E.listen(C,U=>{try{k(U)}catch(x){setTimeout(()=>{throw x},0)}})};return v(h,mo.EventType.OPEN,()=>{f||j(at,`RPC '${e}' stream ${s} transport opened.`)}),v(h,mo.EventType.CLOSE,()=>{f||(f=!0,j(at,`RPC '${e}' stream ${s} transport closed`),y.Ro())}),v(h,mo.EventType.ERROR,E=>{f||(f=!0,cs(at,`RPC '${e}' stream ${s} transport errored:`,E),y.Ro(new q(b.UNAVAILABLE,"The operation could not be completed")))}),v(h,mo.EventType.MESSAGE,E=>{var C;if(!f){const k=E.data[0];Se(!!k);const U=k,x=U.error||((C=U[0])===null||C===void 0?void 0:C.error);if(x){j(at,`RPC '${e}' stream ${s} received error:`,x);const te=x.status;let H=function(se){const be=$e[se];if(be!==void 0)return I_(be)}(te),fe=x.message;H===void 0&&(H=b.INTERNAL,fe="Unknown error status: "+te+" with message "+x.message),f=!0,y.Ro(new q(H,fe)),h.close()}else j(at,`RPC '${e}' stream ${s} received:`,k),y.Vo(k)}}),v(l,yb.STAT_EVENT,E=>{E.stat===of.PROXY?j(at,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===of.NOPROXY&&j(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function Fl(){return typeof document<"u"?document:null}/**
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
 */class N_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class V_{constructor(e,n,r,s,i,o,l,a){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new N_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new q(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dS extends V_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=bR(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?on(o.readTime):re.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Uc(this.serializer),n.addTarget=function(i,o){let l;const a=o.target;if(l=Dc(a)?{documents:PR(i,a)}:{query:CR(i,a)},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=R_(i,o.resumeToken);const c=Vc(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){l.readTime=ia(i,o.snapshotVersion.toTimestamp());const c=Vc(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=xR(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Uc(this.serializer),n.removeTarget=e,this.e_(n)}}class fS extends V_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=SR(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.I_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Uc(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.e_(n)}}/**
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
 */class pS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new q(b.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(b.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(b.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class gS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Tn(n),this.f_=!1):j("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class mS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{xr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c.C_.add(4),await Ji(c),c.M_.set("Unknown"),c.C_.delete(4),await sl(c)}(this))})}),this.M_=new gS(r,s)}}async function sl(t){if(xr(t))for(const e of t.v_)await e(!0)}async function Ji(t){for(const e of t.v_)await e(!1)}function M_(t,e){const n=ie(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),sh(n)?rh(n):Ss(n).Ho()&&nh(n,e))}function L_(t,e){const n=ie(t),r=Ss(n);n.D_.delete(e),r.Ho()&&U_(n,e),n.D_.size===0&&(r.Ho()?r.Zo():xr(n)&&n.M_.set("Unknown"))}function nh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).u_(e)}function U_(t,e){t.x_.Oe(e),Ss(t).c_(e)}function rh(t){t.x_=new yR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.M_.g_()}function sh(t){return xr(t)&&!Ss(t).jo()&&t.D_.size>0}function xr(t){return ie(t).C_.size===0}function F_(t){t.x_=void 0}async function _S(t){t.D_.forEach((e,n)=>{nh(t,e)})}async function yS(t,e){F_(t),sh(t)?(t.M_.w_(e),rh(t)):t.M_.set("Unknown")}async function vS(t,e,n){if(t.M_.set("Online"),e instanceof b_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.D_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.D_.delete(l),s.x_.removeTarget(l))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof Do?t.x_.$e(e):e instanceof A_?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(re.min()))try{const r=await O_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.x_.it(o);return l.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(a.resumeToken,o))}}),l.targetMismatches.forEach((a,c)=>{const u=i.D_.get(a);if(!u)return;i.D_.set(a,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),U_(i,a);const h=new Un(u.target,a,c,u.sequenceNumber);nh(i,h)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!Ki(e))throw e;t.C_.add(1),await Ji(t),t.M_.set("Offline"),n||(n=()=>O_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await sl(t)})}function $_(t,e){return e().catch(n=>oa(t,n,e))}async function il(t){const e=ie(t),n=Xn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ES(e);)try{const s=await sS(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,wS(e,s)}catch(s){await oa(e,s)}B_(e)&&j_(e)}function ES(t){return xr(t)&&t.b_.length<10}function wS(t,e){t.b_.push(e);const n=Xn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function B_(t){return xr(t)&&!Xn(t).jo()&&t.b_.length>0}function j_(t){Xn(t).start()}async function TS(t){Xn(t).E_()}async function IS(t){const e=Xn(t);for(const n of t.b_)e.P_(n.mutations)}async function AS(t,e,n){const r=t.b_.shift(),s=Yu.from(r,e,n);await $_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await il(t)}async function bS(t,e){e&&Xn(t).h_&&await async function(r,s){if(function(o){return gR(o)&&o!==b.ABORTED}(s.code)){const i=r.b_.shift();Xn(r).Yo(),await $_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await il(r)}}(t,e),B_(t)&&j_(t)}async function xf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=xr(n);n.C_.add(3),await Ji(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await sl(n)}async function RS(t,e){const n=ie(t);e?(n.C_.delete(2),await sl(n)):e||(n.C_.add(2),await Ji(n),n.M_.set("Unknown"))}function Ss(t){return t.O_||(t.O_=function(n,r,s){const i=ie(n);return i.A_(),new dS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:_S.bind(null,t),Io:yS.bind(null,t),a_:vS.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),sh(t)?rh(t):t.M_.set("Unknown")):(await t.O_.stop(),F_(t))})),t.O_}function Xn(t){return t.N_||(t.N_=function(n,r,s){const i=ie(n);return i.A_(),new fS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:TS.bind(null,t),Io:bS.bind(null,t),T_:IS.bind(null,t),I_:AS.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await il(t)):(await t.N_.stop(),t.b_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ih(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Ki(t))return new q(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Df{constructor(){this.B_=new Ve(K.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Z():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,s,i,o,l,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,n,es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class SS{constructor(){this.k_=void 0,this.listeners=[]}}class PS{constructor(){this.queries=new Rs(e=>u_(e),Xa),this.onlineState="Unknown",this.q_=new Set}}async function CS(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new SS),s)try{i.k_=await n.onListen(r)}catch(o){const l=oh(o,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&ah(n)}async function kS(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xS(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.listeners)l.K_(s)&&(r=!0);o.k_=s}}r&&ah(n)}function DS(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ah(t){t.q_.forEach(e=>{e.next()})}class OS{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class q_{constructor(e){this.key=e}}class H_{constructor(e){this.key=e}}class NS{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ue(),this.mutatedKeys=ue(),this._a=h_(e),this.aa=new es(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Df,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const a=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Za(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),E=!0):this.ha(d,f)||(r.track({type:2,doc:f}),E=!0,(a&&this._a(f,a)>0||c&&this._a(f,c)<0)&&(l=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(a||c)&&(l=!0)),E&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:l,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,y){const v=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return v(f)-v(y)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const l=n&&!s?this.Ia():[],a=this.oa.size===0&&this.current&&!s?1:0,c=a!==this.sa;return this.sa=a,o.length!==0||c?{snapshot:new ps(this.query,e.aa,i,o,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:l}:{Ta:l}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Df,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ue(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new H_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new q_(r))}),n}da(e){this.ia=e.ls,this.oa=ue();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ps.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class VS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MS{constructor(e){this.key=e,this.Ra=!1}}class LS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Rs(l=>u_(l),Xa),this.fa=new Map,this.ga=new Set,this.pa=new Ve(K.comparator),this.ya=new Map,this.wa=new Zu,this.Sa={},this.ba=new Map,this.Da=fs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function US(t,e){const n=GS(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await iS(n.localStore,rn(e)),l=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await FS(n,e,r,l==="current",o.resumeToken),n.isPrimaryClient&&M_(n.remoteStore,o)}return s}async function FS(t,e,n,r,s){t.va=(h,d,f)=>async function(v,E,C,k){let U=E.view.ca(C);U.Zi&&(U=await Pf(v.localStore,E.query,!1).then(({documents:fe})=>E.view.ca(fe,U)));const x=k&&k.targetChanges.get(E.targetId),te=k&&k.targetMismatches.get(E.targetId)!=null,H=E.view.applyChanges(U,v.isPrimaryClient,x,te);return Nf(v,E.targetId,H.Ta),H.snapshot}(t,h,d,f);const i=await Pf(t.localStore,e,!0),o=new NS(e,i.ls),l=o.ca(i.documents),a=Yi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,a);Nf(t,n,c.Ta);const u=new VS(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function $S(t,e){const n=ie(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Xa(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),L_(n.remoteStore,r.targetId),$c(n,r.targetId)}).catch(Wi)):($c(n,r.targetId),await Fc(n.localStore,r.targetId,!0))}async function BS(t,e,n){const r=QS(t);try{const s=await function(o,l){const a=ie(o),c=He.now(),u=l.reduce((f,y)=>f.add(y.key),ue());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=In(),v=ue();return a.ss.getEntries(f,u).next(E=>{y=E,y.forEach((C,k)=>{k.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const C=[];for(const k of l){const U=uR(k,h.get(k.key).overlayedDocument);U!=null&&C.push(new kr(k.key,U,t_(U.value.mapValue),sn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,l)}).next(E=>{d=E;const C=E.applyToLocalDocumentSet(h,v);return a.documentOverlayCache.saveOverlays(f,E.batchId,C)})}).then(()=>({batchId:d.batchId,changes:f_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,a){let c=o.Sa[o.currentUser.toKey()];c||(c=new Ve(ye)),c=c.insert(l,a),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Xi(r,s.changes),await il(r.remoteStore)}catch(s){const i=oh(s,"Failed to persist write");n.reject(i)}}async function z_(t,e){const n=ie(t);try{const r=await nS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Se(o.Ra):s.removedDocuments.size>0&&(Se(o.Ra),o.Ra=!1))}),await Xi(n,r,e)}catch(r){await Wi(r)}}function Of(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const l=o.view.Q_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const a=ie(o);a.onlineState=l;let c=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(l)&&(c=!0)}),c&&ah(a)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jS(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Ve(K.comparator);o=o.insert(i,ct.newNoDocument(i,re.min()));const l=ue().add(i),a=new nl(re.min(),new Map,new Ve(ye),o,l);await z_(r,a),r.pa=r.pa.remove(i),r.ya.delete(e),lh(r)}else await Fc(r.localStore,e,!1).then(()=>$c(r,e,n)).catch(Wi)}async function qS(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await tS(n.localStore,e);K_(n,r,null),W_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(n,s)}catch(s){await Wi(s)}}async function HS(t,e,n){const r=ie(t);try{const s=await function(o,l){const a=ie(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,l).next(h=>(Se(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,l)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);K_(r,e,n),W_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xi(r,s)}catch(s){await Wi(s)}}function W_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function K_(t,e,n){const r=ie(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function $c(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||G_(t,r)})}function G_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(L_(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),lh(t))}function Nf(t,e,n){for(const r of n)r instanceof q_?(t.wa.addReference(r.key,e),zS(t,r)):r instanceof H_?(j("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||G_(t,r.key)):Z()}function zS(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ga.add(r),lh(t))}function lh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new K(ke.fromString(e)),r=t.Da.next();t.ya.set(r,new MS(n)),t.pa=t.pa.insert(n,r),M_(t.remoteStore,new Un(rn(l_(n.path)),r,"TargetPurposeLimboResolution",qu._e))}}async function Xi(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((l,a)=>{o.push(r.va(a,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=th.Qi(a.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(a,c){const u=ie(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(c,d=>S.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ki(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,v)}}}(r.localStore,i))}async function WS(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await D_(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(l=>{l.forEach(a=>{a.reject(new q(b.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(n,r._s)}}function KS(t,e){const n=ie(t),r=n.ya.get(e);if(r&&r.Ra)return ue().add(r.key);{let s=ue();const i=n.fa.get(e);if(!i)return s;for(const o of i){const l=n.ma.get(o);s=s.unionWith(l.view.ua)}return s}}function GS(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=z_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jS.bind(null,e),e.Va.a_=xS.bind(null,e.eventManager),e.Va.Fa=DS.bind(null,e.eventManager),e}function QS(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HS.bind(null,e),e}class Vf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eS(this.persistence,new XR,e.initialUser,this.serializer)}createPersistence(e){return new QR(eh.jr,this.serializer)}createSharedClientState(e){return new aS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Of(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WS.bind(null,this.syncEngine),await RS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PS}()}createDatastore(e){const n=rl(e.databaseInfo.databaseId),r=function(i){return new hS(i)}(e.databaseInfo);return function(i,o,l,a){return new pS(i,o,l,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new mS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Of(this.syncEngine,n,0),function(){return kf.D()?new kf:new lS}())}createSyncEngine(e,n){return function(s,i,o,l,a,c,u){const h=new LS(s,i,o,l,a,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ie(n);j("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ji(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class JS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $l(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await D_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eP(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>xf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>xf(e.remoteStore,i)),t._onlineComponents=e}function ZS(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await $l(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZS(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await $l(t,new Vf)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await $l(t,new Vf);return t._offlineComponents}async function Q_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Mf(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Mf(t,new YS))),t._onlineComponents}function tP(t){return Q_(t).then(e=>e.syncEngine)}async function nP(t){const e=await Q_(t),n=e.eventManager;return n.onListen=US.bind(null,e.syncEngine),n.onUnlisten=$S.bind(null,e.syncEngine),n}function rP(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,a,c){const u=new JS({next:d=>{o.enqueueAndForget(()=>kS(i,h)),d.fromCache&&a.source==="server"?c.reject(new q(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new OS(l,u,{includeMetadataChanges:!0,J_:!0});return CS(i,h)}(await nP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Y_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Lf=new Map;/**
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
 */function J_(t,e,n){if(!n)throw new q(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sP(t,e,n,r){if(e===!0&&r===!0)throw new q(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uf(t){if(!K.isDocumentKey(t))throw new q(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ff(t){if(K.isDocumentKey(t))throw new q(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function gs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(t);throw new q(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class $f{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class al{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $f({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $f(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wb;switch(r.type){case"firstParty":return new bb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lf.get(n);r&&(j("ComponentProvider","Removing Datastore"),Lf.delete(n),r.terminate())}(this),Promise.resolve()}}function iP(t,e,n,r={}){var s;const i=(t=gs(t,al))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=lt.MOCK_USER;else{l=jg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(c)}t._authCredentials=new Tb(new Jm(l,a))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Wn extends Ps{constructor(e,n,r){super(e,n,l_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new K(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function ch(t,e,...n){if(t=st(t),J_("collection","path",e),t instanceof al){const r=ke.fromString(e,...n);return Ff(r),new Wn(t,null,r)}{if(!(t instanceof St||t instanceof Wn))throw new q(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Ff(r),new Wn(t.firestore,null,r)}}function Bl(t,e,...n){if(t=st(t),arguments.length===1&&(e=Xm.newId()),J_("doc","path",e),t instanceof al){const r=ke.fromString(e,...n);return Uf(r),new St(t,null,new K(r))}{if(!(t instanceof St||t instanceof Wn))throw new q(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Uf(r),new St(t.firestore,t instanceof Wn?t.converter:null,new K(r))}}/**
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
 */class oP{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new N_(this,"async_queue_retry"),this.iu=()=>{const n=Fl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new zn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ki(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=ih.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&Z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class ll extends al{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new oP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Z_(this),this._firestoreClient.terminate()}}function uh(t,e){const n=typeof t=="object"?t:vu(),r=typeof t=="string"?t:e||"(default)",s=Na(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Fg("firestore");i&&iP(s,...i)}return s}function X_(t){return t._firestoreClient||Z_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Z_(t){var e,n,r;const s=t._freezeSettings(),i=function(l,a,c,u){return new Lb(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Y_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new XS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(pt.fromBase64String(e))}catch(n){throw new q(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ey{constructor(e){this._methodName=e}}/**
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
 */class dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const aP=/^__.*__$/;class lP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qi(e,this.data,n,this.fieldTransforms)}}function ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class fh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new fh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return aa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(ty(this.Iu)&&aP.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class cP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rl(e)}pu(e,n,r,s=!1){return new fh({Iu:e,methodName:n,gu:r,path:et.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ny(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new cP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uP(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);iy("Data must be an object, but it was:",o,r);const l=ry(r,o);let a,c;if(i.merge)a=new Ut(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=dP(e,h,n);if(!o.contains(d))throw new q(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);pP(u,d)||u.push(d)}a=new Ut(u),c=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,c=o.fieldTransforms;return new lP(new Dt(l),a,c)}function hP(t,e,n,r=!1){return ph(n,t.pu(r?4:3,e))}function ph(t,e){if(sy(t=st(t)))return iy("Unsupported field value:",e,t),ry(t,e);if(t instanceof ey)return function(r,s){if(!ty(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let a=ph(l,s.Vu(o));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:ia(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(s.serializer,i)}}if(r instanceof dh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ms)return{bytesValue:R_(s.serializer,r._byteString)};if(r instanceof St){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${ol(r)}`)}(t,e)}function ry(t,e){const n={};return Zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,s)=>{const i=ph(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof dh||t instanceof ms||t instanceof St||t instanceof ey)}function iy(t,e,n){if(!sy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ol(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function dP(t,e,n){if((e=st(e))instanceof hh)return e._internalPath;if(typeof e=="string")return oy(t,e);throw aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const fP=new RegExp("[~\\*/\\[\\]]");function oy(t,e,n){if(e.search(fP)>=0)throw aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch{throw aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(i||o)&&(a+=" (found",i&&(a+=` in field ${r}`),o&&(a+=` in document ${s}`),a+=")"),new q(b.INVALID_ARGUMENT,l+t+a)}function pP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ay{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ly("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gP extends ay{data(){return super.data()}}function ly(t,e){return typeof e=="string"?oy(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}/**
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
 */function mP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gh{}class _P extends gh{}function mh(t,e,...n){let r=[];e instanceof gh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(a=>a instanceof yh).length,l=i.filter(a=>a instanceof _h).length;if(o>1||o>0&&l>0)throw new q(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _h extends _P{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _h(e,n,r)}_apply(e){const n=this._parse(e);return cy(e._query,n),new Ps(e.firestore,e.converter,Oc(e._query,n))}_parse(e){const n=ny(e.firestore);return function(i,o,l,a,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new q(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){jf(h,u);const f=[];for(const y of h)f.push(Bf(a,i,y));d={arrayValue:{values:f}}}else d=Bf(a,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||jf(h,u),d=hP(l,o,h,u==="in"||u==="not-in");return qe.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class yh extends gh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const a of l)cy(o,a),o=Oc(o,a)}(e._query,n),new Ps(e.firestore,e.converter,Oc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Bf(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new q(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!c_(e)&&n.indexOf("/")!==-1)throw new q(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!K.isDocumentKey(r))throw new q(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hf(t,new K(r))}if(n instanceof St)return hf(t,n._key);throw new q(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function jf(t,e){if(!Array.isArray(t)||t.length===0)throw new q(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yP{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new dh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ai(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Se(x_(r));const s=new bi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EP extends ay{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ly("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends EP{data(e={}){return super.data(e)}}class wP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Eo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new Eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const a=new Oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const a=new Oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),u=o.indexOf(l.doc.key)),{type:TP(l.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class IP extends yP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function vh(t){t=gs(t,Ps);const e=gs(t.firestore,ll),n=X_(e),r=new IP(e);return mP(t._query),rP(n,t._query).then(s=>new wP(e,r,t,s))}function qf(t,e,n){t=gs(t,St);const r=gs(t.firestore,ll),s=vP(t.converter,e,n);return uy(r,[uP(ny(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,sn.none())])}function AP(t){return uy(gs(t.firestore,ll),[new Qu(t._key,sn.none())])}function uy(t,e){return function(r,s){const i=new zn;return r.asyncQueue.enqueueAndForget(async()=>BS(await tP(r),s,i)),i.promise}(X_(t),e)}(function(e,n=!0){(function(s){As=s})(Pr),Er(new Qn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ll(new Ib(r.getProvider("auth-internal")),new Sb(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),nn(af,"4.4.0",e),nn(af,"4.4.0","esm2017")})();const Dr=ka("database",()=>{const t=uh(Li),e=de([]),n=de([]),r=de([]),s=de([]),i=xe(()=>e.value),o=xe(()=>n.value),l=xe(()=>s.value),a=xe(()=>r.value);return{data:e,about:n,skill:r,setAllData:async f=>{const y=mh(ch(t,f));(await vh(y)).forEach(E=>{e.value.find(k=>k===E.data())||(f=="about"&&n.value.push(E.data()),f=="skill"&&r.value.push(E.data()),f=="portfolio"&&s.value.push(E.data()))})},setData:async(f,y,v)=>{await qf(Bl(t,f,y),v),e.value.push(v)},getAllData:i,getAboutData:o,getSkillData:a,getPortfolioData:l,deleteData:async(f,y)=>{await AP(Bl(t,f,`${y}`))},editData:async(f,y,v)=>{await qf(Bl(t,f,y),v),e.value.push(v)}}}),bP={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},RP={class:"flex h-[50vh] justify-start flex-wrap my-4"},SP=["onClick"],PP=["onClick"],CP=m("img",{src:Ng,class:"h-[80px] max-w-full cursor-pointer mx-auto",alt:""},null,-1),kP={class:"text-primary tracking-tighter"},hy={__name:"portfolio",setup(t){Dr();const e=zt(),n=de([{name:"Coursia",image:"/portfolio/coursia/image1.png",video:"/portfolio/coursia/coursia.webm",desc:`Udmey Style Video Learning Platform တစ်ခုဖြစ်ပါသည်။ဒီ Project မှာ Back-End အတွက် Laravel နှင့် Front-End အတွက် Vue.js, Nuxt.js တို့ကို
    အသုံးပြု၍ Develop လုပ်ထားပါသည်။ဒါ့အပြင် Video Service အတွက် Alibaba VOD ကိုအသုံးပြုထားပြီး Aliplayer ကိုလည်း Learning Page မှာထည့်သွင်း အသုံးပြုထားပါသည်။
    အကြောင်းအမျိုးမျိုးကြောင့် Release လုပ်လို့မရသေးပမဲ့ အကောင်းဆုံးဖန်တည်းထားသောလက်ယာတွေထဲက တစ်ခုဖြစ်ပါသည်။
    `,techs:"PHP, Laravel, MySQL, JavaScript, Vue.js, Nuxt3, Alibaba Oss, Alibaba VOD",link:"https://demo.coursia.ai"},{name:"Winfinance",image:"/portfolio/winfinance/image.jpg",video:"/portfolio/winfinance/winf.webm",desc:`Loan Management Platform project တစ်ခုဖြစ်ပါသည်။ဒီ Project မှာ Front-End ကော Back-End ကောကိုတာ၀န်ယူ Maintain လုပ်ခဲ့ရပါသည်။
    Odoo api များကို handle လုပ်ခြင်း Mobile platform အတွက် api ထုတ်ပေးခြင်းများဆောင်ရွက်ခဲ့ပါသည်။`,techs:"PHP, Laravel, MySQL, JavaScript, Vue.js, Alibaba Oss",link:"https://play.google.com/store/apps/details?id=mm.com.winfinance.app&pcampaignid=web_share"},{name:"SoulKingDom",image:"/portfolio/soulking/image.png",video:"/portfolio/soulking/soulking.webm",desc:"ဒီ Project မှာ Front-End ပိုင်းကိုသာတာ၀န်ယူ Maintain လုပ်ခဲ့ပါတယ်။လက်ရှိတော့ Go Live မှာပါ။",techs:"Go, Next.js, PostgressSQL",link:"https://soulkingdom.net"},{name:"Pet Heaven",image:"/portfolio/pet/pet.png",video:"/portfolio/pet/pet.webm",desc:"SG ကကျောင်းသူတစ်ယောက်အတွက် ရေးပေးခဲ့သော Static Site တစ်ခုဖြစ်ပါသည်။ Ui only ပါ။",techs:"React.js, React Redux",link:"https://pet-uwn7.onrender.com"},{name:"ELG",image:"/portfolio/elg/elg.png",video:"/portfolio/elg/elg.webm",desc:`Online Video Learning Platform ဖြစ်ပြီး ္Profile Site, User Site, Admin Panel သုံးခုလုံးကိုတာ၀န်ယူရေးသားထားသော Project ဖြစ်သည်။
     API ပိုင်းကိုတော့ပါ၀င်ရေးသားခဲ့ခြင်းမရှိပါ။   
    `,techs:"Vue, PrimeVue, BootStrap, TailWind, Laravel, MySQL, AWS S3",link:"https://demo.eglearningguide.com"}]),r=(s,i)=>{e.setWindow(`portfolio-detail${i}`,s)};return(s,i)=>(I(),le("div",bP,[ae(Ni,{onClick:i[0]||(i[0]=o=>De(e).increseZindex("portfolio")),title:"Portfolio",window:"portfolio"}),m("div",RP,[(I(!0),le(je,null,Sr(n.value,(o,l)=>(I(),le("div",{class:"basis-1/3 lg:basis-1/5",key:l,onClick:a=>s.$emit("portfolioDetail",{folder:o,index:l})},[m("div",{class:"text-center hover:bg-hover m-2",onClick:a=>r(o,l)},[CP,m("div",kP,Ot(o.name),1)],8,PP)],8,SP))),128))])]))}},xP={class:"w-screen lg:w-[70vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},DP={class:"h-[80vh] overflow-auto"},OP={class:"p-3"},NP={class:"text-3xl"},VP={class:"my-5"},MP={class:"mt-3"},LP=["href"],UP={class:"my-10 flex gap-3"},FP={class:"basis-1/2"},$P=["src"],BP={class:"basis-1/2"},jP=["src"],B={__name:"portfolioDetail",props:{index:Number},setup(t){const{index:e}=t,n=uh(Li),r=de([]),s=zt(),i=xe(()=>s.getWindows.find(o=>o.window===`portfolio-detail${e}`));return yt(async()=>{const o=mh(ch(n,i.value.data.name));(await vh(o)).forEach(a=>{r.value.push(a.data())})}),(o,l)=>(I(),le("div",xP,[ae(Ni,{onClick:l[0]||(l[0]=a=>De(s).increseZindex(`portfolio-detail${t.index}`)),title:`${i.value.data.name}`,window:`portfolio-detail${t.index}`},null,8,["title","window"]),m("div",DP,[m("div",OP,[m("div",NP,Ot(i.value.data.name),1),m("div",VP," Description: "+Ot(i.value.data.desc),1),m("div",null," Technologies: "+Ot(i.value.data.techs),1),m("div",MP,[jn(" Link: "),m("a",{href:i.value.data.link,class:"cursor-pointer text-blue-500 underline",target:"_blank"},Ot(i.value.data.link),9,LP)]),m("div",UP,[m("div",FP,[m("img",{src:i.value.data.image,class:"border border-primary"},null,8,$P)]),m("div",BP,[m("video",{src:i.value.data.video,class:"border border-primary",controls:""},null,8,jP)])])])])]))}},qP={class:"w-screen lg:w-[70vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},HP={class:"overflow-auto max-h-[80vh] my-2"},zP={class:"flex flex-col gap-5 text-xl"},WP=ws('<div class="text-4xl uppercase"> Aung Paing Soe @alpha </div><div class="text-3xl"> Profile </div><div class="opacity-70"> With over 2+ years of experience in both back-end and front-end development, I specialize in creating responsive designs and real-time applications. I also have expertise in server deployment, and I&#39;m a quick learner. </div><div class="text-4xl"> Working Experience </div><div class="text-3xl"> Full-Stack Developer </div><div> Jan,2023 - Present </div>',6),KP=m("div",null,[m("ul",{class:"text-md opacity-70"},[m("li",null," - Spearheading the development and maintenance of both web back-end and front-end systems. "),m("li",null," - Creating and overseeing the development of a Video Learning Platform, while also maintaining a Loan Management Platform. "),m("li",null," - Handling deployment and maintenance processes on servers to ensure seamless functionality. "),m("li",null," - Engaging in discussions with system analysts and end-users to understand and address user requirements effectively. "),m("li",null," - Mentoring interns and junior team members, actively contributing to their skill improvement and professional development. ")])],-1),GP=m("div",{class:"text-3xl"}," Junior Web Developer ",-1),QP=m("div",null," Feb,2022 - 2023,Jan ",-1),YP=m("div",null,[m("ul",{class:"text-md opacity-70"},[m("li",null," - Overseeing the maintenance of one or more e-commerce platforms. "),m("li",null," - Maintaining a delivery platform. ")])],-1),JP=m("div",{class:"text-3xl"}," IT Assistant ",-1),XP=m("div",null," Jan,2019 - Feb,2022 ",-1),ZP=m("div",null,[m("ul",{class:"text-md opacity-70"},[m("li",null," - Overseeing the maintenance of one or more e-commerce platforms. "),m("li",null," - Maintaining a delivery platform. ")])],-1),dy={__name:"about",props:{images:Array},setup(t){const e=zt();return(n,r)=>{const s=Jp("diV");return I(),le("div",qP,[ae(Ni,{onClick:r[0]||(r[0]=i=>De(e).increseZindex("about")),title:"about.txt",window:"about"}),m("div",HP,[m("div",zP,[WP,ae(s,null,{default:tn(()=>[jn(" UMG Myanmar ")]),_:1}),KP,GP,QP,ae(s,null,{default:tn(()=>[jn(" Marathon Myanmar ")]),_:1}),YP,JP,XP,ae(s,null,{default:tn(()=>[jn(" Marathon Myanmar ")]),_:1}),ZP])])])}}},eC={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},tC=ws('<div class="overflow-auto h-[80vh] my-2"><div><div class="text-3xl">My Skills</div><div class="text-xl mt-3"> Front-End Development </div><div class="mt-3 opacity-70"> Expect in building responsive and interactive UIs using HTML5, CSS3, SASS, Tailwind CSS, and Bootstrap 5. Vue.js Master: Developed complex single-page applications using Vue.js, Vuex, Vueuse, and Pinia. ReactJS Pro: Leveraged ReactJS and Redux Toolkit to build performant and scalable web applications. React Native Enthusiast: Created native mobile apps for iOS and Android using React Native. CSS Frameworks: Proficient in Tailwind CSS, Bootstrap 5, and PrimeVue for rapid UI development. Motion Design: Utilized Framer Motion to create smooth and engaging animations. </div><div class="text-xl mt-3"> Back-End Development </div><div class="mt-3 opacity-70"> PHP Expert: Developed server-side applications using PHP and Laravel, with experience in REST APIs and database integrations. Node.js Pro: Built real-time applications and microservices using Node.js and Express.js. </div><div class="text-xl mt-3"> Version Control and Deployment </div><div class="mt-3 opacity-70"> Git Savvy: Experienced with Git, Github, Bitbucket, and Gitlab for version control and collaboration. Deployment Master: Deployed and maintained applications on various platforms, including cloud servers. </div><div class="mt-3 text-xl"> Project Management &amp; Collaboration </div><div class="mt-3 opacity-70"> Agile Adept: Utilized Jira to manage project workflows, prioritize tasks, and track progress effectively. </div></div></div>',1),fy={__name:"skill",props:{images:Array},setup(t){const e=zt();return(n,r)=>(I(),le("div",eC,[ae(Ni,{onClick:r[0]||(r[0]=s=>De(e).increseZindex("skill")),title:"Skill",window:"skill"}),tC]))}},nC="/assets/profile-e8b18b5f.png",rC="/assets/facebook-f3c7c23a.png",sC="/assets/github-1fb8bd95.png",iC="/assets/Linkedin-b8733550.png",oC="/assets/instagram-f5ba81e4.png",aC="/assets/yangon-4fed5cb4.png",lC="/assets/email-880a9a5d.png",cC={class:"w-screen lg:w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},uC=ws('<div class="p-4"><div class="flex gap-3 mb-3"><div><img src="'+nC+'" class="w-full h-full object-cover rounded-md" alt=""></div><div><div class="flex flex-col gap-3"><div class="flex gap-3"><a href="https://www.facebook.com/aung.p.soe.5437" target="_blank"><img src="'+rC+'" class="w-full cursor-pointer hover:opacity-80 rounded-lg border-primary border" alt=""></a><a href="https://github.com/aungpaingsoe097238" target="_blank"><img src="'+sC+'" class="w-full cursor-pointer hover:opacity-80 rounded-lg border border-primary" alt=""></a></div><a href="https://www.linkedin.com/in/aungpaingsoe097238" target="_blank"><img src="'+iC+'" class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg" alt=""></a></div></div></div><div class="flex gap-3"><div class="flex flex-col gap-3"><a href="https://www.instagram.com/aung.p.soe.532/" target="_blank"><img src="'+oC+'" class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg" alt=""></a></div><a href="https://goo.gl/maps/2f4fr1SSQ9whHkeK7" target="_blank"><img src="'+aC+'" class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg" alt=""></a><a href="mailto:aungpaingsoe097238@gmail.com"><img src="'+lC+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div></div>',1),py={__name:"contact",setup(t){const e=zt();return(n,r)=>(I(),le("div",cC,[ae(Ni,{onClick:r[0]||(r[0]=s=>De(e).increseZindex("contact")),title:"Contact",window:"contact"}),uC]))}},hC={name:"PhStarBold"},dC={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"},fC=m("path",{fill:"currentColor",d:"M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"},null,-1),pC=[fC];function gC(t,e,n,r,s,i){return I(),le("svg",dC,pC)}const la=xa(hC,[["render",gC]]),mC={class:"text-primary text-2xl flex flex-col gap-4"},_C={class:"flex justify-center items-center gap-2"},yC=m("div",null,"Read Me",-1),vC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Aung Paing Soe."),m("div",null,[jn(" A "),m("span",{class:"text-blue-900"},"Full-Stack Web Developer")]),m("div",null,"Developer based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),EC=Aa({__name:"info",setup(t){const e=de(null),{x:n,y:r,style:s}=Og(e,{initialValue:{x:40,y:100}});return(i,o)=>(I(),le("div",{ref_key:"el",ref:e,style:Rr([De(s),{position:"fixed"}]),class:"bg-white border-2 border-e-4 border-b-4 py-4 px-9 border-primary rounded-xl"},[m("div",mC,[m("div",_C,[ae(la),yC,ae(la)]),vC])],4))}}),wC={class:"w-[90%] mx-auto h-screen flex justify-end"},TC={class:"flex flex-col gap-2 mt-5"},IC=m("img",{src:Sg,class:"w-[60px] mx-auto",alt:""},null,-1),AC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),bC=[IC,AC],RC=m("img",{src:Pg,class:"w-[60px] mx-auto",alt:""},null,-1),SC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),PC=[RC,SC],CC=m("img",{src:Cg,class:"w-[60px] mx-auto",alt:""},null,-1),kC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),xC=[CC,kC],DC=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),OC=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),NC=[DC,OC],VC=m("div",{class:"text-black fixed bottom-1 start-5"},[m("span",{class:"italic"},"Development By"),m("a",{href:"#",target:"_black",class:"cursor-pointer text-primary hover:text-hover"}," @Aung Paing Soe")],-1),MC={__name:"Desktop",setup(t){const e=zt(),n=Dr(),r=xe(()=>e.getWindows);yt(async()=>{await n.setAllData("about")}),yt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),yt(async()=>{await n.setAllData("skill")});const s=(o,l=null)=>{e.setWindow(o,l)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,l)=>(I(),le("div",null,[m("div",wC,[m("div",TC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[0]||(l[0]=a=>s("portfolio"))},bC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[1]||(l[1]=a=>s("about"))},PC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[2]||(l[2]=a=>s("skill"))},xC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[3]||(l[3]=a=>s("contact"))},NC)]),VC]),ae(EC),(I(!0),le(je,null,Sr(r.value,(a,c)=>(I(),M(OI,{key:c,index:c},{window:tn(()=>[a.window==="portfolio"?(I(),M(hy,{key:0,onPortfolioDetail:i})):L("",!0),a.window==="about"?(I(),M(dy,{key:1,images:De(n).getAboutData},null,8,["images"])):L("",!0),a.window==="skill"?(I(),M(fy,{key:2,images:De(n).getSkillData},null,8,["images"])):L("",!0),a.window==="contact"?(I(),M(py,{key:3})):L("",!0),a.window==="portfolio-detail0"?(I(),M(B,{key:4,index:"0"})):L("",!0),a.window==="portfolio-detail1"?(I(),M(B,{key:5,index:"1"})):L("",!0),a.window==="portfolio-detail2"?(I(),M(B,{key:6,index:"2"})):L("",!0),a.window==="portfolio-detail3"?(I(),M(B,{key:7,index:"3"})):L("",!0),a.window==="portfolio-detail4"?(I(),M(B,{key:8,index:"4"})):L("",!0),a.window==="portfolio-detail5"?(I(),M(B,{key:9,index:"5"})):L("",!0),a.window==="portfolio-detail6"?(I(),M(B,{key:10,index:"6"})):L("",!0),a.window==="portfolio-detail7"?(I(),M(B,{key:11,index:"7"})):L("",!0),a.window==="portfolio-detail8"?(I(),M(B,{key:12,index:"8"})):L("",!0),a.window==="portfolio-detail9"?(I(),M(B,{key:13,index:"9"})):L("",!0),a.window==="portfolio-detail10"?(I(),M(B,{key:14,index:"10"})):L("",!0),a.window==="portfolio-detail11"?(I(),M(B,{key:15,index:"11"})):L("",!0),a.window==="portfolio-detail12"?(I(),M(B,{key:16,index:"12"})):L("",!0),a.window==="portfolio-detail13"?(I(),M(B,{key:17,index:"13"})):L("",!0),a.window==="portfolio-detail14"?(I(),M(B,{key:18,index:"14"})):L("",!0),a.window==="portfolio-detail15"?(I(),M(B,{key:19,index:"15"})):L("",!0),a.window==="portfolio-detail16"?(I(),M(B,{key:20,index:"16"})):L("",!0),a.window==="portfolio-detail17"?(I(),M(B,{key:21,index:"17"})):L("",!0),a.window==="portfolio-detail18"?(I(),M(B,{key:22,index:"18"})):L("",!0),a.window==="portfolio-detail19"?(I(),M(B,{key:23,index:"19"})):L("",!0),a.window==="portfolio-detail20"?(I(),M(B,{key:24,index:"20"})):L("",!0),a.window==="portfolio-detail21"?(I(),M(B,{key:25,index:"21"})):L("",!0),a.window==="portfolio-detail22"?(I(),M(B,{key:26,index:"22"})):L("",!0),a.window==="portfolio-detail23"?(I(),M(B,{key:27,index:"23"})):L("",!0),a.window==="portfolio-detail24"?(I(),M(B,{key:28,index:"24"})):L("",!0),a.window==="portfolio-detail25"?(I(),M(B,{key:29,index:"25"})):L("",!0),a.window==="portfolio-detail26"?(I(),M(B,{key:30,index:"26"})):L("",!0),a.window==="portfolio-detail27"?(I(),M(B,{key:31,index:"27"})):L("",!0),a.window==="portfolio-detail28"?(I(),M(B,{key:32,index:"28"})):L("",!0),a.window==="portfolio-detail29"?(I(),M(B,{key:33,index:"29"})):L("",!0),a.window==="portfolio-detail30"?(I(),M(B,{key:34,index:"30"})):L("",!0)]),_:2},1032,["index"]))),128))]))}},LC={__name:"model",props:{index:Number},setup(t){const{index:e}=t,n=zt(),r=xe(()=>n.getWindows.find((s,i)=>i===e));return(s,i)=>(I(),le("div",{ref:"el",style:Rr([{zIndex:r.value.zIndex},{position:"fixed"}])},[cu(s.$slots,"window")],4))}},UC=m("div",{class:"text-[12px] text-center bg-white text-primary"}," For better performance, please view using computer ",-1),FC={class:"mx-auto flex justify-end"},$C={class:"w-full bg-white border-2 border-e-4 border-b-4 flex justify-center items-center p-2 border-primary rounded-xl mt-4 ms-1 me-1"},BC={class:"text-primary text-2xl flex flex-col gap-4"},jC={class:"flex justify-center items-center gap-2"},qC=m("div",null,"Read Me",-1),HC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Aung Paing Soe."),m("div",null,[jn(" A "),m("span",{class:"text-blue-900"},"Full-Stack Web Developer")]),m("div",null,"Developer based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),zC={class:"flex flex-col"},WC=m("img",{src:Sg,class:"w-[60px] mx-auto",alt:""},null,-1),KC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),GC=[WC,KC],QC=m("img",{src:Pg,class:"w-[60px] mx-auto",alt:""},null,-1),YC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),JC=[QC,YC],XC=m("img",{src:Cg,class:"w-[60px] mx-auto",alt:""},null,-1),ZC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),ek=[XC,ZC],tk=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),nk=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),rk=[tk,nk],sk={__name:"Mobile",setup(t){const e=zt(),n=Dr(),r=xe(()=>e.getWindows);yt(async()=>{await n.setAllData("about")}),yt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),yt(async()=>{await n.setAllData("skill")});const s=(o,l=null)=>{e.setWindow(o,l)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,l)=>(I(),le(je,null,[UC,m("div",FC,[m("div",$C,[m("div",BC,[m("div",jC,[ae(la),qC,ae(la)]),HC])]),m("div",zC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[0]||(l[0]=a=>s("portfolio"))},GC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[1]||(l[1]=a=>s("about"))},JC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[2]||(l[2]=a=>s("skill"))},ek),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[3]||(l[3]=a=>s("contact"))},rk)]),(I(!0),le(je,null,Sr(r.value,(a,c)=>(I(),M(LC,{key:c,index:c},{window:tn(()=>[a.window==="portfolio"?(I(),M(hy,{key:0,onPortfolioDetail:i})):L("",!0),a.window==="about"?(I(),M(dy,{key:1,images:De(n).getAboutData},null,8,["images"])):L("",!0),a.window==="skill"?(I(),M(fy,{key:2,images:De(n).getSkillData},null,8,["images"])):L("",!0),a.window==="contact"?(I(),M(py,{key:3})):L("",!0),a.window==="portfolio-detail0"?(I(),M(B,{key:4,index:"0"})):L("",!0),a.window==="portfolio-detail1"?(I(),M(B,{key:5,index:"1"})):L("",!0),a.window==="portfolio-detail2"?(I(),M(B,{key:6,index:"2"})):L("",!0),a.window==="portfolio-detail3"?(I(),M(B,{key:7,index:"3"})):L("",!0),a.window==="portfolio-detail4"?(I(),M(B,{key:8,index:"4"})):L("",!0),a.window==="portfolio-detail5"?(I(),M(B,{key:9,index:"5"})):L("",!0),a.window==="portfolio-detail6"?(I(),M(B,{key:10,index:"6"})):L("",!0),a.window==="portfolio-detail7"?(I(),M(B,{key:11,index:"7"})):L("",!0),a.window==="portfolio-detail8"?(I(),M(B,{key:12,index:"8"})):L("",!0),a.window==="portfolio-detail9"?(I(),M(B,{key:13,index:"9"})):L("",!0),a.window==="portfolio-detail10"?(I(),M(B,{key:14,index:"10"})):L("",!0),a.window==="portfolio-detail11"?(I(),M(B,{key:15,index:"11"})):L("",!0),a.window==="portfolio-detail12"?(I(),M(B,{key:16,index:"12"})):L("",!0),a.window==="portfolio-detail13"?(I(),M(B,{key:17,index:"13"})):L("",!0),a.window==="portfolio-detail14"?(I(),M(B,{key:18,index:"14"})):L("",!0),a.window==="portfolio-detail15"?(I(),M(B,{key:19,index:"15"})):L("",!0),a.window==="portfolio-detail16"?(I(),M(B,{key:20,index:"16"})):L("",!0),a.window==="portfolio-detail17"?(I(),M(B,{key:21,index:"17"})):L("",!0),a.window==="portfolio-detail18"?(I(),M(B,{key:22,index:"18"})):L("",!0),a.window==="portfolio-detail19"?(I(),M(B,{key:23,index:"19"})):L("",!0),a.window==="portfolio-detail20"?(I(),M(B,{key:24,index:"20"})):L("",!0),a.window==="portfolio-detail21"?(I(),M(B,{key:25,index:"21"})):L("",!0),a.window==="portfolio-detail22"?(I(),M(B,{key:26,index:"22"})):L("",!0),a.window==="portfolio-detail23"?(I(),M(B,{key:27,index:"23"})):L("",!0),a.window==="portfolio-detail24"?(I(),M(B,{key:28,index:"24"})):L("",!0),a.window==="portfolio-detail25"?(I(),M(B,{key:29,index:"25"})):L("",!0),a.window==="portfolio-detail26"?(I(),M(B,{key:30,index:"26"})):L("",!0),a.window==="portfolio-detail27"?(I(),M(B,{key:31,index:"27"})):L("",!0),a.window==="portfolio-detail28"?(I(),M(B,{key:32,index:"28"})):L("",!0),a.window==="portfolio-detail29"?(I(),M(B,{key:33,index:"29"})):L("",!0),a.window==="portfolio-detail30"?(I(),M(B,{key:34,index:"30"})):L("",!0)]),_:2},1032,["index"]))),128))])],64))}},ik={key:0},ok={key:1},ak={__name:"Desktop",setup(t){const e=de(window.innerWidth),n=de(window.innerHeight),r=()=>{e.value=window.innerWidth,n.value=window.innerHeight};return yt(()=>{window.addEventListener("resize",r)}),lu(()=>{window.removeEventListener("resize",r)}),(s,i)=>e.value>760?(I(),le("div",ik,[ae(MC)])):(I(),le("div",ok,[ae(sk)]))}};function Eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lk=gy,my=new Vi("auth","Firebase",gy());/**
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
 */const ca=new _u("@firebase/auth");function ck(t,...e){ca.logLevel<=he.WARN&&ca.warn(`Auth (${Pr}): ${t}`,...e)}function No(t,...e){ca.logLevel<=he.ERROR&&ca.error(`Auth (${Pr}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw wh(t,...e)}function an(t,...e){return wh(t,...e)}function uk(t,e,n){const r=Object.assign(Object.assign({},lk()),{[e]:n});return new Vi("auth","Firebase",r).create(e,{appName:t.name})}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return my.create(t,...e)}function X(t,e,...n){if(!t)throw wh(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function An(t,e){t||_n(e)}/**
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
 */function Bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hk(){return Hf()==="http:"||Hf()==="https:"}function Hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hk()||QI()||"connection"in navigator)?navigator.onLine:!0}function fk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=GI()||YI()}get(){return dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Th(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _y{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gk=new Zi(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,s={}){return yy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),_y.fetch()(vy(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function yy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pk),e);try{const s=new _k(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw wo(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw uk(t,u,c);Ht(t,u)}}catch(s){if(s instanceof hn)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function cl(t,e,n,r,s={}){const i=await tr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Th(t.config,s):`${t.config.apiScheme}://${s}`}function mk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _k{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function zf(t){return t!==void 0&&t.enterprise!==void 0}class yk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vk(t,e){return tr(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
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
 */async function Ek(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function wk(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tk(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=Ih(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(jl(s.auth_time)),issuedAtTime:si(jl(s.iat)),expirationTime:si(jl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jl(t){return Number(t)*1e3}function Ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lg(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ik(t){const e=Ih(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&Ak(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ak({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ey{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ua(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ci(t,wk(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pk(i.providerUserInfo):[],l=Sk(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ey(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Rk(t){const e=st(t);await ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Pk(t){return t.map(e=>{var{providerId:n}=e,r=Eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ck(t,e){const n=await yy(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_y.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kk(t,e){return tr(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
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
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ik(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ck(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ki;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function Cn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ey(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tk(this,e)}reload(){return Rk(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ci(this,Ek(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:x,isAnonymous:te,providerData:H,stsTokenManager:fe}=n;X(U&&fe,e,"internal-error");const Y=ki.fromJSON(this.name,fe);X(typeof U=="string",e,"internal-error"),Cn(h,e.name),Cn(d,e.name),X(typeof x=="boolean",e,"internal-error"),X(typeof te=="boolean",e,"internal-error"),Cn(f,e.name),Cn(y,e.name),Cn(v,e.name),Cn(E,e.name),Cn(C,e.name),Cn(k,e.name);const se=new _r({uid:U,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:te,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:Y,createdAt:C,lastLoginAt:k});return H&&Array.isArray(H)&&(se.providerData=H.map(be=>Object.assign({},be))),E&&(se._redirectEventId=E),se}static async _fromIdTokenResponse(e,n,r=!1){const s=new ki;s.updateFromServerResponse(n);const i=new _r({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ua(i),i}}/**
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
 */const Wf=new Map;function yn(t){An(t instanceof Function,"Expected a class definition");let e=Wf.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wf.set(t,e),e)}/**
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
 */class wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wy.type="NONE";const Kf=wy;/**
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
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(yn(Kf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||yn(Kf);const o=Vo(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=_r._fromJSON(e,u);c!==i&&(l=h),i=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new ts(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ts(i,e,r))}}/**
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
 */function Gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ty(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ry(e))return"Blackberry";if(Sy(e))return"Webos";if(Ah(e))return"Safari";if((e.includes("chrome/")||Iy(e))&&!e.includes("edge/"))return"Chrome";if(by(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ty(t=ft()){return/firefox\//i.test(t)}function Ah(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Iy(t=ft()){return/crios\//i.test(t)}function Ay(t=ft()){return/iemobile/i.test(t)}function by(t=ft()){return/android/i.test(t)}function Ry(t=ft()){return/blackberry/i.test(t)}function Sy(t=ft()){return/webos/i.test(t)}function ul(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xk(t=ft()){var e;return ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dk(){return JI()&&document.documentMode===10}function Py(t=ft()){return ul(t)||by(t)||Sy(t)||Ry(t)||/windows phone/i.test(t)||Ay(t)}function Ok(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Cy(t,e=[]){let n;switch(t){case"Browser":n=Gf(ft());break;case"Worker":n=`${Gf(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pr}/${r}`}/**
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
 */class Nk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Vk(t,e={}){return tr(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const Mk=6;class Lk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Mk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Uk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qf(this),this.idTokenSubscription=new Qf(this),this.beforeStateQueue=new Nk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=my,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ua(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vk(this),n=new Lk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ck(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cs(t){return st(t)}class Qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=s0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Fk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ky(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Fk().appendChild(r)})}function $k(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Bk="https://www.google.com/recaptcha/enterprise.js?render=",jk="recaptcha-enterprise",qk="NO_RECAPTCHA";class Hk{constructor(e){this.type=jk,this.auth=Cs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{vk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new yk(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;zf(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(qk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&zf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ky(Bk+l).then(()=>{s(l,i,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Yf(t,e,n,r=!1){const s=new Hk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Yf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function zk(t,e){const n=Na(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wo(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function Wk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Kk(t,e,n){const r=Cs(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=xy(e),{host:o,port:l}=Gk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Qk()}function xy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gk(t){const e=xy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xf(o)}}}function Xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function Yk(t,e){return tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jk(t,e){return cl(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
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
 */async function Xk(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function Zk(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
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
 */class xi extends bh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jf(e,n,"signInWithPassword",Jk);case"emailLink":return Xk(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jf(e,r,"signUpPassword",Yk);case"emailLink":return Zk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ns(t,e){return cl(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
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
 */const e1="http://localhost";class Ar extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:e1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
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
 */function t1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n1(t){const e=Bs(js(t)).link,n=e?Bs(js(e)).deep_link_id:null,r=Bs(js(t)).deep_link_id;return(r?Bs(js(r)).link:null)||r||n||e||t}class Rh{constructor(e){var n,r,s,i,o,l;const a=Bs(js(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=t1((s=a.mode)!==null&&s!==void 0?s:null);X(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=n1(e);try{return new Rh(n)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rh.parseLink(n);return X(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends Dy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class On extends eo{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Vn extends eo{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class Mn extends eo{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _r._fromIdTokenResponse(e,r,s),o=Zf(r);return new _s({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zf(r);return new _s({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ha extends hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ha(e,n,r,s)}}function Oy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,i,e,r):i})}async function r1(t,e,n=!1){const r=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",r)}/**
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
 */async function s1(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ci(t,Oy(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Ih(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),_s._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function Ny(t,e,n=!1){const r="signIn",s=await Oy(t,r,e),i=await _s._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function i1(t,e){return Ny(Cs(t),e)}/**
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
 */async function o1(t){const e=Cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function a1(t,e,n){return i1(st(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&o1(t),r})}function l1(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function c1(t,e,n){return st(t).beforeAuthStateChanged(e,n)}const da="__sak";/**
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
 */class Vy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function u1(){const t=ft();return Ah(t)||ul(t)}const h1=1e3,d1=10;class My extends Vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=u1()&&Ok(),this.fallbackToPolling=Py(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Dk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,d1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}My.type="LOCAL";const f1=My;/**
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
 */class Ly extends Vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ly.type="SESSION";const Uy=Ly;/**
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
 */function p1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await p1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hl.receivers=[];/**
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
 */function Sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=Sh("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(d.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function m1(t){ln().location.href=t}/**
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
 */function Fy(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function _1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function v1(){return Fy()?self:null}/**
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
 */const $y="firebaseLocalStorageDb",E1=1,fa="firebaseLocalStorage",By="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function w1(){const t=indexedDB.deleteDatabase($y);return new to(t).toPromise()}function jc(){const t=indexedDB.open($y,E1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fa,{keyPath:By})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await w1(),e(await jc()))})})}async function ep(t,e,n){const r=dl(t,!0).put({[By]:e,value:n});return new to(r).toPromise()}async function T1(t,e){const n=dl(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function tp(t,e){const n=dl(t,!0).delete(e);return new to(n).toPromise()}const I1=800,A1=3;class jy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>A1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hl._getInstance(v1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await ep(e,da,"1"),await tp(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>T1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dl(s,!1).getAll();return new to(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jy.type="LOCAL";const b1=jy;new Zi(3e4,6e4);/**
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
 */function R1(t,e){return e?yn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ph extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S1(t){return Ny(t.auth,new Ph(t),t.bypassAuthState)}function P1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),s1(n,new Ph(t),t.bypassAuthState)}async function C1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),r1(n,new Ph(t),t.bypassAuthState)}/**
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
 */class qy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S1;case"linkViaPopup":case"linkViaRedirect":return C1;case"reauthViaPopup":case"reauthViaRedirect":return P1;default:Ht(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k1=new Zi(2e3,1e4);class Gr extends qy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k1.get())};e()}}Gr.currentPopupAction=null;/**
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
 */const x1="pendingRedirect",Mo=new Map;class D1 extends qy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await O1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O1(t,e){const n=M1(e),r=V1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function N1(t,e){Mo.set(t._key(),e)}function V1(t){return yn(t._redirectPersistence)}function M1(t){return Vo(x1,t.config.apiKey,t.name)}async function L1(t,e,n=!1){const r=Cs(t),s=R1(r,e),o=await new D1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const U1=10*60*1e3;class F1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(np(e))}saveEventToCache(e){this.cachedEventUids.add(np(e)),this.lastProcessedEventTime=Date.now()}}function np(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hy(t);default:return!1}}/**
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
 */async function B1(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
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
 */const j1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q1=/^https?/;async function H1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B1(t);for(const n of e)try{if(z1(n))return}catch{}Ht(t,"unauthorized-domain")}function z1(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!q1.test(n))return!1;if(j1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const W1=new Zi(3e4,6e4);function rp(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function K1(t){return new Promise((e,n)=>{var r,s,i;function o(){rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rp(),n(an(t,"network-request-failed"))},timeout:W1.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const l=$k("iframefcb");return ln()[l]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},ky(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function G1(t){return Lo=Lo||K1(t),Lo}/**
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
 */const Q1=new Zi(5e3,15e3),Y1="__/auth/iframe",J1="emulator/auth/iframe",X1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ex(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Th(e,J1):`https://${t.config.authDomain}/${Y1}`,r={apiKey:e.apiKey,appName:t.name,v:Pr},s=Z1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function tx(t){const e=await G1(t),n=ln().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:ex(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},Q1.get());function a(){ln().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const nx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rx=500,sx=600,ix="_blank",ox="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ax(t,e,n,r=rx,s=sx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},nx),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ft().toLowerCase();n&&(l=Iy(c)?ix:n),Ty(c)&&(e=e||ox,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(xk(c)&&l!=="_self")return lx(e||"",l),new sp(null);const h=window.open(e||"",l,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new sp(h)}function lx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cx="__/auth/handler",ux="emulator/auth/handler",hx=encodeURIComponent("fac");async function ip(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pr,eventId:s};if(e instanceof Dy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",r0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof eo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${hx}=${encodeURIComponent(a)}`:"";return`${dx(t)}?${Mi(l).slice(1)}${c}`}function dx({config:t}){return t.emulator?Th(t,ux):`https://${t.authDomain}/${cx}`}/**
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
 */const ql="webStorageSupport";class fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uy,this._completeRedirectFn=L1,this._overrideRedirectResult=N1}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ip(e,n,r,Bc(),s);return ax(e,o,Sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ip(e,n,r,Bc(),s);return m1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tx(e),r=new F1(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ql,{type:ql},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ql];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Py()||Ah()||ul()}}const px=fx;var op="@firebase/auth",ap="1.5.1";/**
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
 */class gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _x(t){Er(new Qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cy(t)},c=new Uk(r,s,i,a);return Wk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new Qn("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new gx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(op,ap,mx(t)),nn(op,ap,"esm2017")}/**
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
 */const yx=5*60,vx=Bg("authIdTokenMaxAge")||yx;let lp=null;const Ex=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vx)return;const s=n==null?void 0:n.token;lp!==s&&(lp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wx(t=vu()){const e=Na(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zk(t,{popupRedirectResolver:px,persistence:[b1,f1,Uy]}),r=Bg("authTokenSyncURL");if(r){const i=Ex(r);c1(n,i,()=>i(n.currentUser)),l1(n,o=>i(o))}const s=Ug("auth");return s&&Kk(n,`http://${s}`),n}_x("Browser");const Tx=ka("auth",()=>{const t=de(!1),e=xe(()=>t.value);return{auth:t,getAuth:e,setAuth:r=>{t.value=r}}}),Ix={class:"flex h-screen justify-center items-center"},Ax={class:"w-full lg:w-[30%] mx-auto bg-white border-primary border-2 border-e-4 border-b-4 rounded-lg"},bx=["onSubmit"],Rx=m("div",{class:"text-3xl mx-auto"},"Login",-1),Sx=m("div",{class:"text-end"},[m("button",{type:"submit",class:"bg-primary rounded-sm text-white px-3 py-2 shadow-sm"}," Submit ")],-1),Px={__name:"Login",setup(t){const e=wx(Li),n=de(null),r=de(null),s=pI(),i=Tx(),o=()=>{a1(e,n.value,r.value).then(l=>{const a=l.user;a.accessToken&&(i.setAuth(!0),localStorage.setItem("token",a.accessToken),s.push("/dashboard-portfolio"))}).catch(l=>{l.code,l.message,s.push("/login"),i.setAuth(!1)})};return(l,a)=>(I(),le("div",Ix,[m("div",Ax,[m("form",{onSubmit:dg(o,["prevent"]),class:"flex flex-col gap-3 p-3"},[Rx,m("div",null,[Zl(m("input",{type:"text",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your email","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},null,512),[[oc,n.value]])]),m("div",null,[Zl(m("input",{type:"password",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your password","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[oc,r.value]])]),Sx],40,bx)])]))}};const Cx={class:"flex h-screen overflow-auto justify-end me-[10%]"},kx={class:"w-[10%] fixed left-0 mt-1 h-screen overflow-auto bg-background"},xx={class:"flex flex-col mt-5"},Dx={class:"w-[80%] ps-3"},Ox={__name:"Sidebar",setup(t){const e=Oi(),n=()=>{localStorage.removeItem("token"),window.location.href="/"};return(r,s)=>(I(),le("div",Cx,[m("div",kx,[m("div",xx,[m("a",{href:"/dashboard-portfolio",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-portfolio"}])}," Portfolio ",2),m("a",{href:"/dashboard-about",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-about"}])}," About ",2),m("a",{href:"/dashboard-skill",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-skill"}])}," Skill ",2),m("a",{href:"/dashobard-contact",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-contact"}])}," Contact ",2),m("div",{class:"border border-primary rounded-md p-2 m-2 text-xl hover:bg-primary cursor-pointer",onClick:s[0]||(s[0]=i=>n())}," Logout ")])]),m("div",Dx,[cu(r.$slots,"content",{},void 0,!0)])]))}},fl=xa(Ox,[["__scopeId","data-v-cc9f2995"]]);/**
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
 */const zy="firebasestorage.googleapis.com",Wy="storageBucket",Nx=2*60*1e3,Vx=10*60*1e3,Mx=1e3;/**
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
 */class Me extends hn{constructor(e,n,r=0){super(Hl(e),`Firebase Storage: ${n} (${Hl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Hl(t){return"storage/"+t}function Ch(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(Oe.UNKNOWN,t)}function Lx(t){return new Me(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ux(t){return new Me(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(Oe.UNAUTHENTICATED,t)}function $x(){return new Me(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Bx(t){return new Me(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ky(){return new Me(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gy(){return new Me(Oe.CANCELED,"User canceled the upload/download.")}function jx(t){return new Me(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function qx(t){return new Me(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hx(){return new Me(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wy+"' property when initializing the app?")}function Qy(){return new Me(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zx(){return new Me(Oe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Wx(){return new Me(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kx(t){return new Me(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qc(t){return new Me(Oe.INVALID_ARGUMENT,t)}function Yy(){return new Me(Oe.APP_DELETED,"The Firebase app was deleted.")}function Gx(t){return new Me(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ii(t,e){return new Me(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Us(t){throw new Me(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw qx(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},v=n===zy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",C=new RegExp(`^https?://${v}/${s}/${E}`,"i"),U=[{regex:l,indices:a,postModify:i},{regex:f,indices:y,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<U.length;x++){const te=U[x],H=te.regex.exec(e);if(H){const fe=H[te.indices.bucket];let Y=H[te.indices.path];Y||(Y=""),r=new Rt(fe,Y),te.postModify(r);break}}if(r==null)throw jx(e);return r}}class Qx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Yx(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(f,a())},E)}function d(){i&&clearTimeout(i)}function f(E,...C){if(c){d();return}if(E){d(),u.call(null,E,...C);return}if(a()||o){d(),u.call(null,E,...C);return}r<64&&(r*=2);let U;l===1?(l=2,U=0):U=(r+Math.random())*1e3,h(U)}let y=!1;function v(E){y||(y=!0,d(),!c&&(s!==null?(E||(l=2),clearTimeout(s),h(0)):E||(l=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function Jx(t){t(!1)}/**
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
 */function Xx(t){return t!==void 0}function Zx(t){return typeof t=="function"}function eD(t){return typeof t=="object"&&!Array.isArray(t)}function pl(t){return typeof t=="string"||t instanceof String}function cp(t){return kh()&&t instanceof Blob}function kh(){return typeof Blob<"u"}function up(t,e,n,r){if(r<e)throw qc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function no(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Jy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var yr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yr||(yr={}));/**
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
 */function Xy(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class tD{constructor(e,n,r,s,i,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new To(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===yr.NO_ERROR,a=i.getStatus();if(!l||Xy(a,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===yr.ABORT;r(!1,new To(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;r(!0,new To(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Xx(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=Ch();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Yy():Gy();o(a)}else{const a=Ky();o(a)}};this.canceled_?n(!1,new To(!1,null,!0)):this.backoffId_=Yx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class To{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function iD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oD(t,e,n,r,s,i,o=!0){const l=Jy(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return sD(c,e),nD(c,n),rD(c,i),iD(c,r),new tD(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function aD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lD(...t){const e=aD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kh())return new Blob(t);throw new Me(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function uD(t){if(typeof atob>"u")throw Kx("base-64");return atob(t)}/**
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
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zl{constructor(e,n){this.data=e,this.contentType=n||null}}function hD(t,e){switch(t){case en.RAW:return new zl(Zy(e));case en.BASE64:case en.BASE64URL:return new zl(ev(t,e));case en.DATA_URL:return new zl(fD(e),pD(e))}throw Ch()}function Zy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dD(t){let e;try{e=decodeURIComponent(t)}catch{throw ii(en.DATA_URL,"Malformed data URL.")}return Zy(e)}function ev(t,e){switch(t){case en.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ii(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ii(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=uD(e)}catch(s){throw s.message.includes("polyfill")?s:ii(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class tv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ii(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=gD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function fD(t){const e=new tv(t);return e.base64?ev(en.BASE64,e.rest):dD(e.rest)}function pD(t){return new tv(t).contentType}function gD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ln{constructor(e,n){let r=0,s="";cp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(cp(this.data_)){const r=this.data_,s=cD(r,e,n);return s===null?null:new Ln(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ln(r,!0)}}static getBlob(...e){if(kh()){const n=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(lD.apply(null,n))}else{const n=e.map(o=>pl(o)?hD(en.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Ln(s,!0)}}uploadData(){return this.data_}}/**
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
 */function nv(t){let e;try{e=JSON.parse(t)}catch{return null}return eD(e)?e:null}/**
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
 */function mD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _D(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function rv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function yD(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||yD}}let Io=null;function vD(t){return!pl(t)||t.length<2?t:rv(t)}function sv(){if(Io)return Io;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return vD(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),Io=t,Io}function ED(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function wD(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return ED(r,t),r}function iv(t,e,n){const r=nv(e);return r===null?null:wD(t,r,n)}function TD(t,e,n,r){const s=nv(e);if(s===null||!pl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=no(d,n,r),y=Jy({alt:"media",token:c});return f+y})[0]}function ov(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class xs{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function vn(t){if(!t)throw Ch()}function xh(t,e){function n(r,s){const i=iv(t,s,e);return vn(i!==null),i}return n}function ID(t,e){function n(r,s){const i=iv(t,s,e);return vn(i!==null),TD(i,s,t.host,t._protocol)}return n}function ro(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$x():s=Fx():n.getStatus()===402?s=Ux(t.bucket):n.getStatus()===403?s=Bx(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function av(t){const e=ro(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Lx(t.path)),i.serverResponse=s.serverResponse,i}return n}function AD(t,e,n){const r=e.fullServerUrl(),s=no(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new xs(s,i,xh(t,n),o);return l.errorHandler=av(e),l}function bD(t,e,n){const r=e.fullServerUrl(),s=no(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new xs(s,i,ID(t,n),o);return l.errorHandler=av(e),l}function RD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lv(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RD(null,e)),r}function SD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let U="";for(let x=0;x<2;x++)U=U+Math.random().toString().slice(2);return U}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const c=lv(e,r,s),u=ov(c,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+a+"--",f=Ln.getBlob(h,r,d);if(f===null)throw Qy();const y={name:c.fullPath},v=no(i,t.host,t._protocol),E="POST",C=t.maxUploadRetryTime,k=new xs(v,E,xh(t,n),C);return k.urlParams=y,k.headers=o,k.body=f.uploadData(),k.errorHandler=ro(e),k}class pa{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Dh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{vn(!1)}return vn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function PD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=lv(e,r,s),l={name:o.fullPath},a=no(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ov(o,n),d=t.maxUploadRetryTime;function f(v){Dh(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{vn(!1)}return vn(pl(E)),E}const y=new xs(a,c,f,d);return y.urlParams=l,y.headers=u,y.body=h,y.errorHandler=ro(e),y}function CD(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const u=Dh(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{vn(!1)}h||vn(!1);const d=Number(h);return vn(!isNaN(d)),new pa(d,r.size(),u==="final")}const o="POST",l=t.maxUploadRetryTime,a=new xs(n,o,i,l);return a.headers=s,a.errorHandler=ro(e),a}const hp=256*1024;function kD(t,e,n,r,s,i,o,l){const a=new pa(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw zx();const c=a.total-a.current;let u=c;s>0&&(u=Math.min(u,s));const h=a.current,d=h+u;let f="";u===0?f="finalize":c===u?f="upload, finalize":f="upload";const y={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${a.current}`},v=r.slice(h,d);if(v===null)throw Qy();function E(x,te){const H=Dh(x,["active","final"]),fe=a.current+u,Y=r.size();let se;return H==="final"?se=xh(e,i)(x,te):se=null,new pa(fe,Y,H==="final",se)}const C="POST",k=e.maxUploadRetryTime,U=new xs(n,C,E,k);return U.headers=y,U.body=v.uploadData(),U.progressCallback=l||null,U.errorHandler=ro(t),U}const wt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wl(t){switch(t){case"running":case"pausing":case"canceling":return wt.RUNNING;case"paused":return wt.PAUSED;case"success":return wt.SUCCESS;case"canceled":return wt.CANCELED;case"error":return wt.ERROR;default:return wt.ERROR}}/**
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
 */class xD{constructor(e,n,r){if(Zx(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function $r(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class DD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Us("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Us("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Us("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Us("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Us("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OD extends DD{initXhr(){this.xhr_.responseType="text"}}function Wr(){return new OD}/**
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
 */class ND{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=sv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Oe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Xy(s.status,[]))if(i)s=Ky();else{this.sleepTime=Math.max(this.sleepTime*2,Mx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Oe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=PD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Wr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=CD(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Wr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=hp*this._chunkMultiplier,n=new pa(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=kD(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Wr,s,i,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){hp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=AD(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Wr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=SD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Wr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Gy(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Wl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new xD(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Wl(this._state)){case wt.SUCCESS:$r(this._resolve.bind(null,this.snapshot))();break;case wt.CANCELED:case wt.ERROR:const n=this._reject;$r(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Wl(this._state)){case wt.RUNNING:case wt.PAUSED:e.next&&$r(e.next.bind(e,this.snapshot))();break;case wt.SUCCESS:e.complete&&$r(e.complete.bind(e))();break;case wt.CANCELED:case wt.ERROR:e.error&&$r(e.error.bind(e,this._error))();break;default:e.error&&$r(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class br{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new br(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rv(this._location.path)}get storage(){return this._service}get parent(){const e=mD(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new br(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Gx(e)}}function VD(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ND(t,new Ln(e),n)}function MD(t){t._throwIfRoot("getDownloadURL");const e=bD(t.storage,t._location,sv());return t.storage.makeRequestWithTokens(e,Wr).then(n=>{if(n===null)throw Wx();return n})}function LD(t,e){const n=_D(t._location.path,e),r=new Rt(t._location.bucket,n);return new br(t.storage,r)}/**
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
 */function UD(t){return/^[A-Za-z]+:\/\//.test(t)}function FD(t,e){return new br(t,e)}function cv(t,e){if(t instanceof Oh){const n=t;if(n._bucket==null)throw Hx();const r=new br(n,n._bucket);return e!=null?cv(r,e):r}else return e!==void 0?LD(t,e):t}function $D(t,e){if(e&&UD(e)){if(t instanceof Oh)return FD(t,e);throw qc("To use ref(service, url), the first argument must be a Storage instance.")}else return cv(t,e)}function dp(t,e){const n=e==null?void 0:e[Wy];return n==null?null:Rt.makeFromBucketSpec(n,t)}function BD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:jg(s,t.app.options.projectId))}class Oh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=zy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nx,this._maxUploadRetryTime=Vx,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=dp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=dp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){up("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){up("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new br(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Qx(Yy());{const o=oD(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const fp="@firebase/storage",pp="0.12.0";/**
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
 */const uv="storage";function jD(t,e,n){return t=st(t),VD(t,e,n)}function qD(t){return t=st(t),MD(t)}function HD(t,e){return t=st(t),$D(t,e)}function zD(t=vu(),e){t=st(t);const r=Na(t,uv).getImmediate({identifier:e}),s=Fg("storage");return s&&WD(r,...s),r}function WD(t,e,n,r={}){BD(t,e,n,r)}function KD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Oh(n,r,s,e,Pr)}function GD(){Er(new Qn(uv,KD,"PUBLIC").setMultipleInstances(!0)),nn(fp,pp,""),nn(fp,pp,"esm2017")}GD();let Ao;const QD=new Uint8Array(16);function YD(){if(!Ao&&(Ao=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ao))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ao(QD)}const Je=[];for(let t=0;t<256;++t)Je.push((t+256).toString(16).slice(1));function JD(t,e=0){return Je[t[e+0]]+Je[t[e+1]]+Je[t[e+2]]+Je[t[e+3]]+"-"+Je[t[e+4]]+Je[t[e+5]]+"-"+Je[t[e+6]]+Je[t[e+7]]+"-"+Je[t[e+8]]+Je[t[e+9]]+"-"+Je[t[e+10]]+Je[t[e+11]]+Je[t[e+12]]+Je[t[e+13]]+Je[t[e+14]]+Je[t[e+15]]}const XD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),gp={randomUUID:XD};function hv(t,e,n){if(gp.randomUUID&&!e&&!t)return gp.randomUUID();t=t||{};const r=t.random||(t.rng||YD)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return JD(r)}const Nh=ka("storage",()=>{const t=zD(Li),e=hv(),n=de(null);return{setImage:async s=>{try{const i=HD(t,`about/${e}.jpg`),o=jD(i,s);return await new Promise((l,a)=>{o.on("state_changed",c=>{const u=c.bytesTransferred/c.totalBytes*100;switch(console.log("Upload is "+u+"% done"),c.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},c=>{a(c)},async()=>{const c=await qD(o.snapshot.ref);n.value=c,l()})}),n.value}catch(i){throw console.error("Error:",i),i}},url:n}}),ZD={class:"my-5"},eO={class:"w-full text-md text-left bg-white text-black"},tO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),nO={class:"px-6 border"},rO={class:"px-6 border"},sO=["src"],iO={class:"px-6 border"},oO={class:"flex items-center gap-3"},aO=["onClick"],lO=m("div",{class:"flex justify-center"},"added image",-1),cO={__name:"list",setup(t){const e=Nh(),n=Dr(),r=de(null),s=de(null),i=Oi(),o=de(0);yt(async()=>{await n.setAllData("about"),o.value=n.getAboutData.length});const l=()=>{r.value.click()},a=async h=>{const d=h.target.files[0];o.value++,s.value=await e.setImage(d),c(o.value)},c=async h=>{await n.setData("about",`${h}`,{id:h,url:s.value}),window.location.href=`${i.fullPath}`},u=async h=>{await n.deleteData("about",h),window.location.href=`${i.fullPath}`};return(h,d)=>(I(),le("div",null,[ae(fl,null,{content:tn(()=>[m("div",ZD,[m("table",eO,[tO,m("tbody",null,[(I(!0),le(je,null,Sr(De(n).getAboutData,f=>(I(),le("tr",{class:"bg-white border-b",key:f.id},[m("td",nO,Ot(f.id),1),m("td",rO,[m("img",{src:f.url,class:"h-[50px]",alt:""},null,8,sO)]),m("td",iO,[m("div",oO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:y=>u(f.id)}," Delete ",8,aO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:l},[lO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:a,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},uO={class:"my-5"},hO={class:"w-full text-md text-left bg-white text-black"},dO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Folder"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),fO={class:"px-6 border"},pO={class:"px-6 border"},gO={class:"flex gap-3 items-center"},mO=m("img",{src:Ng,class:"h-[50px]",alt:""},null,-1),_O={class:"px-6 border"},yO={class:"flex items-center gap-3"},vO=["href"],EO=["onClick"],wO={colspan:"3",class:"py-3 cursor-pointer"},TO=["onSubmit"],IO=m("button",{type:"submit",class:"flex justify-center bg-primary p-2"}," added folder ",-1),AO={__name:"list",setup(t){const e=Dr(),n=de(null),r=Oi(),s=hv();yt(async()=>{await e.setAllData("portfolio")});const i=async()=>{await e.setData("portfolio",`${s}`,{id:s,name:n.value}),window.location.href=`${r.fullPath}`},o=async l=>{await e.deleteData("portfolio",l),window.location.href=`${r.fullPath}`};return(l,a)=>(I(),le("div",null,[ae(fl,null,{content:tn(()=>[m("div",uO,[m("table",hO,[dO,m("tbody",null,[(I(!0),le(je,null,Sr(De(e).getPortfolioData,c=>(I(),le("tr",{class:"bg-white border-b",key:c.id},[m("td",fO,Ot(c.id),1),m("td",pO,[m("div",gO,[mO,jn(" "+Ot(c.name),1)])]),m("td",_O,[m("div",yO,[m("a",{href:`/dashboard-detail?name=${c.name}`,class:"cursor-pointer hover:bg-desktopHover"}," Edit ",8,vO),m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:u=>o(c.id)}," Delete ",8,EO)])])]))),128)),m("tr",null,[m("td",wO,[m("form",{onSubmit:dg(i,["prevent"]),class:"flex justify-center"},[Zl(m("input",{type:"text",class:"px-2 border border-primary w-[20%]","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),required:"",placeholder:"Enter foler name"},null,512),[[oc,n.value]]),IO],40,TO)])])])])])]),_:1})]))}},bO={class:"my-5"},RO={class:"w-full text-md text-left bg-white text-black"},SO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),PO={class:"px-6 border"},CO={class:"px-6 border"},kO=["src"],xO={class:"px-6 border"},DO={class:"flex items-center gap-3"},OO=["onClick"],NO=m("div",{class:"flex justify-center"},"added image",-1),VO={__name:"list",setup(t){const e=Nh(),n=Dr(),r=de(null),s=de(null),i=de(0),o=Oi();yt(async()=>{await n.setAllData("skill"),i.value=n.getSkillData.length});const l=()=>{r.value.click()},a=async h=>{const d=h.target.files[0];i.value++,s.value=await e.setImage(d),c(i.value)},c=async h=>{await n.setData("skill",`${h}`,{id:h,url:s.value}),window.location.href=`${o.fullPath}`},u=async h=>{await n.deleteData("skill",h),window.location.href=`${o.fullPath}`};return(h,d)=>(I(),le("div",null,[ae(fl,null,{content:tn(()=>[m("div",bO,[m("table",RO,[SO,m("tbody",null,[(I(!0),le(je,null,Sr(De(n).getSkillData,f=>(I(),le("tr",{class:"bg-white border-b",key:f.id},[m("td",PO,Ot(f.id),1),m("td",CO,[m("img",{src:f.url,class:"h-[50px]",alt:""},null,8,kO)]),m("td",xO,[m("div",DO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:y=>u(f.id)}," Delete ",8,OO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:l},[NO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:a,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},MO={class:"my-5"},LO={class:"w-full text-md text-left bg-white text-black"},UO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),FO={class:"px-6 border"},$O={class:"px-6 border"},BO=["src"],jO={class:"px-6 border"},qO={class:"flex items-center gap-3"},HO=["onClick"],zO=m("div",{class:"flex justify-center"},"added image",-1),WO={__name:"detail",setup(t){const e=Nh(),n=uh(Li),r=Dr(),s=de(null),i=de(null),o=Oi(),l=de(0),a=de([]);yt(async()=>{const f=mh(ch(n,o.query.name));(await vh(f)).forEach(v=>{a.value.push(v.data())}),l.value=a.value.length});const c=()=>{s.value.click()},u=async f=>{const y=f.target.files[0];l.value++,i.value=await e.setImage(y),h(l.value)},h=async f=>{await r.setData(o.query.name,`${f}`,{id:f,url:i.value}),window.location.href=`${o.fullPath}`},d=async f=>{await r.deleteData(o.query.name,f),window.location.href=`${o.fullPath}`};return(f,y)=>(I(),le("div",null,[ae(fl,null,{content:tn(()=>[m("div",MO,[m("table",LO,[UO,m("tbody",null,[(I(!0),le(je,null,Sr(a.value,v=>(I(),le("tr",{class:"bg-white border-b",key:v.id},[m("td",FO,Ot(v.id),1),m("td",$O,[m("img",{src:v.url,class:"h-[50px]",alt:""},null,8,BO)]),m("td",jO,[m("div",qO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:E=>d(v.id)}," Delete ",8,HO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:c},[zO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:u,ref_key:"imageInput",ref:s},null,544)])])])])])]),_:1})]))}},KO=[{path:"/",component:ak},{path:"/login",component:Px},{path:"/dashboard-about",component:cO,meta:{requiresAuth:!0}},{path:"/dashboard-portfolio",component:AO,meta:{requiresAuth:!0}},{path:"/dashboard-detail",component:WO,meta:{requiresAuth:!0}},{path:"/dashboard-skill",component:VO,meta:{requiresAuth:!0}}],dv=dI({history:PT(),routes:KO}),GO=(t,e,n)=>{const r=localStorage.getItem("token");t.matched.some(s=>s.meta.requiresAuth)?r?n():n("/login"):n()};dv.beforeEach((t,e,n)=>{GO(t,e,n)});const QO=$w(),Vh=Lw(uT);Vh.use(dv);Vh.use(QO);Vh.mount("#app");
