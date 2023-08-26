(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function zc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pe={},qr=[],Ut=()=>{},fv=()=>!1,pv=/^on[^a-z]/,ga=t=>pv.test(t),Wc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gv=Object.prototype.hasOwnProperty,he=(t,e)=>gv.call(t,e),Q=Array.isArray,Hr=t=>ma(t)==="[object Map]",vp=t=>ma(t)==="[object Set]",re=t=>typeof t=="function",ze=t=>typeof t=="string",Gc=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Ep=t=>Oe(t)&&re(t.then)&&re(t.catch),wp=Object.prototype.toString,ma=t=>wp.call(t),mv=t=>ma(t).slice(8,-1),Tp=t=>ma(t)==="[object Object]",Qc=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bo=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_v=/-(\w)/g,sn=_a(t=>t.replace(_v,(e,n)=>n?n.toUpperCase():"")),yv=/\B([A-Z])/g,fs=_a(t=>t.replace(yv,"-$1").toLowerCase()),ya=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),pl=_a(t=>t?`on${ya(t)}`:""),ti=(t,e)=>!Object.is(t,e),Ro=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Uo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jh;const Gl=()=>jh||(jh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ps(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?Tv(r):ps(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ze(t))return t;if(Oe(t))return t}}const vv=/;(?![^(]*\))/g,Ev=/:([^]+)/,wv=/\/\*[^]*?\*\//g;function Tv(t){const e={};return t.replace(wv,"").split(vv).forEach(n=>{if(n){const r=n.split(Ev);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function or(t){let e="";if(ze(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=or(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Av=zc(Iv);function Ip(t){return!!t||t===""}const zn=t=>ze(t)?t:t==null?"":Q(t)||Oe(t)&&(t.toString===wp||!re(t.toString))?JSON.stringify(t,Ap,2):String(t),Ap=(t,e)=>e&&e.__v_isRef?Ap(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:vp(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!Q(e)&&!Tp(e)?String(e):e;let bt;class bp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rp(t){return new bp(t)}function bv(t,e=bt){e&&e.active&&e.effects.push(t)}function Jc(){return bt}function Pp(t){bt&&bt.cleanups.push(t)}const Xc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sp=t=>(t.w&Wn)>0,Cp=t=>(t.n&Wn)>0,Rv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wn},Pv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Sp(s)&&!Cp(s)?s.delete(t):e[n++]=s,s.w&=~Wn,s.n&=~Wn}e.length=n}},Fo=new WeakMap;let Ns=0,Wn=1;const Ql=30;let Vt;const hr=Symbol(""),Jl=Symbol("");class Yc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bv(this,r)}run(){if(!this.active)return this.fn();let e=Vt,n=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Un=!0,Wn=1<<++Ns,Ns<=Ql?Rv(this):qh(this),this.fn()}finally{Ns<=Ql&&Pv(this),Wn=1<<--Ns,Vt=this.parent,Un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(qh(this),this.onStop&&this.onStop(),this.active=!1)}}function qh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Un=!0;const kp=[];function gs(){kp.push(Un),Un=!1}function ms(){const t=kp.pop();Un=t===void 0?!0:t}function Tt(t,e,n){if(Un&&Vt){let r=Fo.get(t);r||Fo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Xc()),xp(s)}}function xp(t,e){let n=!1;Ns<=Ql?Cp(t)||(t.n|=Wn,n=!Sp(t)):n=!t.has(Vt),n&&(t.add(Vt),Vt.deps.push(t))}function _n(t,e,n,r,s,i){const o=Fo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Qc(n)&&a.push(o.get("length")):(a.push(o.get(hr)),Hr(t)&&a.push(o.get(Jl)));break;case"delete":Q(t)||(a.push(o.get(hr)),Hr(t)&&a.push(o.get(Jl)));break;case"set":Hr(t)&&a.push(o.get(hr));break}if(a.length===1)a[0]&&Xl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xl(Xc(l))}}function Xl(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&Hh(r);for(const r of n)r.computed||Hh(r)}function Hh(t,e){(t!==Vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Sv(t,e){var n;return(n=Fo.get(t))==null?void 0:n.get(e)}const Cv=zc("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gc)),kv=Zc(),xv=Zc(!1,!0),Dv=Zc(!0),zh=Ov();function Ov(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gs();const r=fe(this)[e].apply(this,n);return ms(),r}}),t}function Nv(t){const e=fe(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function Zc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Jv:Lp:e?Mp:Vp).get(r))return r;const o=Q(r);if(!t){if(o&&he(zh,s))return Reflect.get(zh,s,i);if(s==="hasOwnProperty")return Nv}const a=Reflect.get(r,s,i);return(Gc(s)?Dp.has(s):Cv(s))||(t||Tt(r,"get",s),e)?a:Le(a)?o&&Qc(s)?a:a.value:Oe(a)?t?Fp(a):Pi(a):a}}const Vv=Op(),Mv=Op(!0);function Op(t=!1){return function(n,r,s,i){let o=n[r];if(Yr(o)&&Le(o)&&!Le(s))return!1;if(!t&&(!$o(s)&&!Yr(s)&&(o=fe(o),s=fe(s)),!Q(n)&&Le(o)&&!Le(s)))return o.value=s,!0;const a=Q(n)&&Qc(r)?Number(r)<n.length:he(n,r),l=Reflect.set(n,r,s,i);return n===fe(i)&&(a?ti(s,o)&&_n(n,"set",r,s):_n(n,"add",r,s)),l}}function Lv(t,e){const n=he(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&_n(t,"delete",e,void 0),r}function Uv(t,e){const n=Reflect.has(t,e);return(!Gc(e)||!Dp.has(e))&&Tt(t,"has",e),n}function Fv(t){return Tt(t,"iterate",Q(t)?"length":hr),Reflect.ownKeys(t)}const Np={get:kv,set:Vv,deleteProperty:Lv,has:Uv,ownKeys:Fv},$v={get:Dv,set(t,e){return!0},deleteProperty(t,e){return!0}},Bv=Ge({},Np,{get:xv,set:Mv}),eu=t=>t,va=t=>Reflect.getPrototypeOf(t);function so(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=va(s),a=r?eu:n?ru:ni;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function io(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function oo(t,e=!1){return t=t.__v_raw,!e&&Tt(fe(t),"iterate",hr),Reflect.get(t,"size",t)}function Wh(t){t=fe(t);const e=fe(this);return va(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function Kh(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=va(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ti(e,o)&&_n(n,"set",t,e):_n(n,"add",t,e),this}function Gh(t){const e=fe(this),{has:n,get:r}=va(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&_n(e,"delete",t,void 0),i}function Qh(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&_n(t,"clear",void 0,void 0),n}function ao(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),l=e?eu:t?ru:ni;return!t&&Tt(a,"iterate",hr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function lo(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Hr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?eu:e?ru:ni;return!e&&Tt(i,"iterate",l?Jl:hr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function jv(){const t={get(i){return so(this,i)},get size(){return oo(this)},has:io,add:Wh,set:Kh,delete:Gh,clear:Qh,forEach:ao(!1,!1)},e={get(i){return so(this,i,!1,!0)},get size(){return oo(this)},has:io,add:Wh,set:Kh,delete:Gh,clear:Qh,forEach:ao(!1,!0)},n={get(i){return so(this,i,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:ao(!0,!1)},r={get(i){return so(this,i,!0,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=lo(i,!1,!1),n[i]=lo(i,!0,!1),e[i]=lo(i,!1,!0),r[i]=lo(i,!0,!0)}),[t,n,e,r]}const[qv,Hv,zv,Wv]=jv();function tu(t,e){const n=e?t?Wv:zv:t?Hv:qv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const Kv={get:tu(!1,!1)},Gv={get:tu(!1,!0)},Qv={get:tu(!0,!1)},Vp=new WeakMap,Mp=new WeakMap,Lp=new WeakMap,Jv=new WeakMap;function Xv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yv(t){return t.__v_skip||!Object.isExtensible(t)?0:Xv(mv(t))}function Pi(t){return Yr(t)?t:nu(t,!1,Np,Kv,Vp)}function Up(t){return nu(t,!1,Bv,Gv,Mp)}function Fp(t){return nu(t,!0,$v,Qv,Lp)}function nu(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Yv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Fn(t){return Yr(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function $o(t){return!!(t&&t.__v_isShallow)}function $p(t){return Fn(t)||Yr(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Ea(t){return Uo(t,"__v_skip",!0),t}const ni=t=>Oe(t)?Pi(t):t,ru=t=>Oe(t)?Fp(t):t;function su(t){Un&&Vt&&(t=fe(t),xp(t.dep||(t.dep=Xc())))}function iu(t,e){t=fe(t);const n=t.dep;n&&Xl(n)}function Le(t){return!!(t&&t.__v_isRef===!0)}function ue(t){return Bp(t,!1)}function Zv(t){return Bp(t,!0)}function Bp(t,e){return Le(t)?t:new eE(t,e)}class eE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:ni(e)}get value(){return su(this),this._value}set value(e){const n=this.__v_isShallow||$o(e)||Yr(e);e=n?e:fe(e),ti(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),iu(this))}}function De(t){return Le(t)?t.value:t}const tE={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jp(t){return Fn(t)?t:new Proxy(t,tE)}class nE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>su(this),()=>iu(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function rE(t){return new nE(t)}function qp(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=iE(t,n);return e}class sE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Sv(fe(this._object),this._key)}}function iE(t,e,n){const r=t[e];return Le(r)?r:new sE(t,e,n)}class oE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yc(e,()=>{this._dirty||(this._dirty=!0,iu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return su(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function aE(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new oE(r,s,i||!s,n)}function $n(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){wa(i,e,n)}return s}function Ft(t,e,n,r){if(re(t)){const i=$n(t,e,n,r);return i&&Ep(i)&&i.catch(o=>{wa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}function wa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){$n(l,null,10,[t,o,a]);return}}lE(t,n,s,r)}function lE(t,e,n,r=!0){console.error(t)}let ri=!1,Yl=!1;const lt=[];let Gt=0;const zr=[];let hn=null,sr=0;const Hp=Promise.resolve();let ou=null;function au(t){const e=ou||Hp;return t?e.then(this?t.bind(this):t):e}function cE(t){let e=Gt+1,n=lt.length;for(;e<n;){const r=e+n>>>1;si(lt[r])<t?e=r+1:n=r}return e}function lu(t){(!lt.length||!lt.includes(t,ri&&t.allowRecurse?Gt+1:Gt))&&(t.id==null?lt.push(t):lt.splice(cE(t.id),0,t),zp())}function zp(){!ri&&!Yl&&(Yl=!0,ou=Hp.then(Kp))}function uE(t){const e=lt.indexOf(t);e>Gt&&lt.splice(e,1)}function hE(t){Q(t)?zr.push(...t):(!hn||!hn.includes(t,t.allowRecurse?sr+1:sr))&&zr.push(t),zp()}function Jh(t,e=ri?Gt+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function Wp(t){if(zr.length){const e=[...new Set(zr)];if(zr.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((n,r)=>si(n)-si(r)),sr=0;sr<hn.length;sr++)hn[sr]();hn=null,sr=0}}const si=t=>t.id==null?1/0:t.id,dE=(t,e)=>{const n=si(t)-si(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Kp(t){Yl=!1,ri=!0,lt.sort(dE);const e=Ut;try{for(Gt=0;Gt<lt.length;Gt++){const n=lt[Gt];n&&n.active!==!1&&$n(n,null,14)}}finally{Gt=0,lt.length=0,Wp(),ri=!1,ou=null,(lt.length||zr.length)&&Kp()}}function fE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Pe;d&&(s=n.map(f=>ze(f)?f.trim():f)),h&&(s=n.map(Kl))}let a,l=r[a=pl(e)]||r[a=pl(sn(e))];!l&&i&&(l=r[a=pl(fs(e))]),l&&Ft(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(c,t,6,s)}}function Gp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const l=c=>{const u=Gp(c,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(Q(i)?i.forEach(l=>o[l]=null):Ge(o,i),Oe(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,fs(e))||he(t,e))}let et=null,Ia=null;function Bo(t){const e=et;return et=t,Ia=t&&t.type.__scopeId||null,e}function pE(t){Ia=t}function gE(){Ia=null}function _s(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ad(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&ad(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:y,inheritAttrs:v}=t;let E,b;const C=Bo(t);try{if(n.shapeFlag&4){const k=s||r;E=Kt(u.call(k,k,h,i,f,d,y)),b=l}else{const k=e;E=Kt(k.length>1?k(i,{attrs:l,slots:a,emit:c}):k(i,null)),b=e.props?l:mE(l)}}catch(k){Hs.length=0,wa(k,t,1),E=de(Kn)}let M=E;if(b&&v!==!1){const k=Object.keys(b),{shapeFlag:K}=M;k.length&&K&7&&(o&&k.some(Wc)&&(b=_E(b,o)),M=Zr(M,b))}return n.dirs&&(M=Zr(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),E=M,Bo(C),E}const mE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},_E=(t,e)=>{const n={};for(const r in t)(!Wc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ta(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xh(r,o,c):!0:!!o;return!1}function Xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function vE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const EE=t=>t.__isSuspense;function wE(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):hE(t)}const co={};function dr(t,e,n){return Qp(t,e,n)}function Qp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Pe){var a;const l=Jc()===((a=Ke)==null?void 0:a.scope)?Ke:null;let c,u=!1,h=!1;if(Le(t)?(c=()=>t.value,u=$o(t)):Fn(t)?(c=()=>t,r=!0):Q(t)?(h=!0,u=t.some(k=>Fn(k)||$o(k)),c=()=>t.map(k=>{if(Le(k))return k.value;if(Fn(k))return ar(k);if(re(k))return $n(k,l,2)})):re(t)?e?c=()=>$n(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Ft(t,l,3,[f])}:c=Ut,e&&r){const k=c;c=()=>ar(k())}let d,f=k=>{d=C.onStop=()=>{$n(k,l,4)}},y;if(ai)if(f=Ut,e?n&&Ft(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const k=gw();y=k.__watcherHandles||(k.__watcherHandles=[])}else return Ut;let v=h?new Array(t.length).fill(co):co;const E=()=>{if(C.active)if(e){const k=C.run();(r||u||(h?k.some((K,U)=>ti(K,v[U])):ti(k,v)))&&(d&&d(),Ft(e,l,3,[k,v===co?void 0:h&&v[0]===co?[]:v,f]),v=k)}else C.run()};E.allowRecurse=!!e;let b;s==="sync"?b=E:s==="post"?b=()=>Et(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),b=()=>lu(E));const C=new Yc(c,b);e?n?E():v=C.run():s==="post"?Et(C.run.bind(C),l&&l.suspense):C.run();const M=()=>{C.stop(),l&&l.scope&&Kc(l.scope.effects,C)};return y&&y.push(M),M}function TE(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Jp(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=Ke;es(this);const a=Qp(s,i.bind(r),n);return o?es(o):fr(),a}function Jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ar(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))ar(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)ar(t[n],e);else if(vp(t)||Hr(t))t.forEach(n=>{ar(n,e)});else if(Tp(t))for(const n in t)ar(t[n],e);return t}function Zl(t,e){const n=et;if(n===null)return t;const r=Ca(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Pe]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&ar(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(gs(),Ft(l,n,8,[t.el,a,t,e]),ms())}}function Aa(t,e){return re(t)?(()=>Ge({name:t.name},e,{setup:t}))():t}const js=t=>!!t.type.__asyncLoader,Xp=t=>t.type.__isKeepAlive;function IE(t,e){Yp(t,"a",e)}function AE(t,e){Yp(t,"da",e)}function Yp(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xp(s.parent.vnode)&&bE(r,e,n,s),s=s.parent}}function bE(t,e,n,r){const s=ba(e,t,r,!0);cu(()=>{Kc(r[e],s)},n)}function ba(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gs(),es(n);const a=Ft(e,n,t,o);return fr(),ms(),a});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=Ke)=>(!ai||t==="sp")&&ba(t,(...r)=>e(...r),n),RE=In("bm"),yt=In("m"),PE=In("bu"),SE=In("u"),CE=In("bum"),cu=In("um"),kE=In("sp"),xE=In("rtg"),DE=In("rtc");function OE(t,e=Ke){ba("ec",t,e)}const Zp="components";function NE(t,e){return ME(Zp,t,!0,e)||t}const VE=Symbol.for("v-ndc");function ME(t,e,n=!0,r=!1){const s=et||Ke;if(s){const i=s.type;if(t===Zp){const a=dw(i,!1);if(a&&(a===e||a===sn(e)||a===ya(sn(e))))return i}const o=Yh(s[t]||i[t],e)||Yh(s.appContext[t],e);return!o&&r?i:o}}function Yh(t,e){return t&&(t[e]||t[sn(e)]||t[ya(sn(e))])}function An(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function eg(t,e,n={},r,s){if(et.isCE||et.parent&&js(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),de("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),D();const o=i&&tg(i(n)),a=ie(Fe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function tg(t){return t.some(e=>qo(e)?!(e.type===Kn||e.type===Fe&&!tg(e.children)):!0)?t:null}const ec=t=>t?dg(t)?Ca(t)||t.proxy:ec(t.parent):null,qs=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ec(t.parent),$root:t=>ec(t.root),$emit:t=>t.emit,$options:t=>uu(t),$forceUpdate:t=>t.f||(t.f=()=>lu(t.update)),$nextTick:t=>t.n||(t.n=au.bind(t.proxy)),$watch:t=>TE.bind(t)}),ml=(t,e)=>t!==Pe&&!t.__isScriptSetup&&he(t,e),LE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ml(r,e))return o[e]=1,r[e];if(s!==Pe&&he(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,i[e];if(n!==Pe&&he(n,e))return o[e]=4,n[e];tc&&(o[e]=0)}}const u=qs[e];let h,d;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&he(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,he(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ml(s,e)?(s[e]=n,!0):r!==Pe&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Pe&&he(t,o)||ml(e,o)||(a=i[0])&&he(a,o)||he(r,o)||he(qs,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zh(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tc=!0;function UE(t){const e=uu(t),n=t.proxy,r=t.ctx;tc=!1,e.beforeCreate&&ed(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:y,activated:v,deactivated:E,beforeDestroy:b,beforeUnmount:C,destroyed:M,unmounted:k,render:K,renderTracked:U,renderTriggered:pe,errorCaptured:G,serverPrefetch:te,expose:be,inheritAttrs:rt,components:It,directives:Ct,filters:er}=e;if(c&&FE(c,r,null),o)for(const Ae in o){const ve=o[Ae];re(ve)&&(r[Ae]=ve.bind(n))}if(s){const Ae=s.call(n,n);Oe(Ae)&&(t.data=Pi(Ae))}if(tc=!0,i)for(const Ae in i){const ve=i[Ae],cn=re(ve)?ve.bind(n,n):re(ve.get)?ve.get.bind(n,n):Ut,bn=!re(ve)&&re(ve.set)?ve.set.bind(n):Ut,Ht=Ne({get:cn,set:bn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:vt=>Ht.value=vt})}if(a)for(const Ae in a)ng(a[Ae],r,n,Ae);if(l){const Ae=re(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(ve=>{Po(ve,Ae[ve])})}u&&ed(u,t,"c");function me(Ae,ve){Q(ve)?ve.forEach(cn=>Ae(cn.bind(n))):ve&&Ae(ve.bind(n))}if(me(RE,h),me(yt,d),me(PE,f),me(SE,y),me(IE,v),me(AE,E),me(OE,G),me(DE,U),me(xE,pe),me(CE,C),me(cu,k),me(kE,te),Q(be))if(be.length){const Ae=t.exposed||(t.exposed={});be.forEach(ve=>{Object.defineProperty(Ae,ve,{get:()=>n[ve],set:cn=>n[ve]=cn})})}else t.exposed||(t.exposed={});K&&t.render===Ut&&(t.render=K),rt!=null&&(t.inheritAttrs=rt),It&&(t.components=It),Ct&&(t.directives=Ct)}function FE(t,e,n=Ut){Q(t)&&(t=nc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ed(t,e,n){Ft(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ng(t,e,n,r){const s=r.includes(".")?Jp(n,r):()=>n[r];if(ze(t)){const i=e[t];re(i)&&dr(s,i)}else if(re(t))dr(s,t.bind(n));else if(Oe(t))if(Q(t))t.forEach(i=>ng(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&dr(s,i,t)}}function uu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>jo(l,c,o,!0)),jo(l,e,o)),Oe(e)&&i.set(e,l),l}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=$E[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $E={data:td,props:nd,emits:nd,methods:Vs,computed:Vs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Vs,directives:Vs,watch:jE,provide:td,inject:BE};function td(t,e){return e?t?function(){return Ge(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function BE(t,e){return Vs(nc(t),nc(e))}function nc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?Ge(Object.create(null),t,e):e}function nd(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:Ge(Object.create(null),Zh(t),Zh(e??{})):e}function jE(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function rg(){return{app:null,config:{isNativeTag:fv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qE=0;function HE(t,e){return function(r,s=null){re(r)||(r=Ge({},r)),s!=null&&!Oe(s)&&(s=null);const i=rg(),o=new Set;let a=!1;const l=i.app={_uid:qE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&re(c.install)?(o.add(c),c.install(l,...u)):re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=de(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ca(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ii=l;try{return c()}finally{ii=null}}};return l}}let ii=null;function Po(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function Ot(t,e,n=!1){const r=Ke||et;if(r||ii){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ii._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}function zE(){return!!(Ke||et||ii)}function WE(t,e,n,r=!1){const s={},i={};Uo(i,Pa,1),t.propsDefaults=Object.create(null),sg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function KE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ta(t.emitsOptions,d))continue;const f=e[d];if(l)if(he(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const y=sn(d);s[y]=rc(l,a,y,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{sg(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!he(e,h)&&((u=fs(h))===h||!he(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=rc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!he(e,h))&&(delete i[h],c=!0)}c&&_n(t,"set","$attrs")}function sg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(bo(l))continue;const c=e[l];let u;s&&he(s,u=sn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ta(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=fe(n),c=a||Pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=rc(s,l,h,c[h],t,!he(c,h))}}return o}function rc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(es(s),r=c[n]=l.call(null,e),fr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fs(n))&&(r=!0))}return r}function ig(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!re(t)){const u=h=>{l=!0;const[d,f]=ig(h,e,!0);Ge(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Oe(t)&&r.set(t,qr),qr;if(Q(i))for(let u=0;u<i.length;u++){const h=sn(i[u]);rd(h)&&(o[h]=Pe)}else if(i)for(const u in i){const h=sn(u);if(rd(h)){const d=i[u],f=o[h]=Q(d)||re(d)?{type:d}:Ge({},d);if(f){const y=od(Boolean,f.type),v=od(String,f.type);f[0]=y>-1,f[1]=v<0||y<v,(y>-1||he(f,"default"))&&a.push(h)}}}const c=[o,a];return Oe(t)&&r.set(t,c),c}function rd(t){return t[0]!=="$"}function sd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function id(t,e){return sd(t)===sd(e)}function od(t,e){return Q(e)?e.findIndex(n=>id(n,t)):re(e)&&id(e,t)?0:-1}const og=t=>t[0]==="_"||t==="$stable",hu=t=>Q(t)?t.map(Kt):[Kt(t)],GE=(t,e,n)=>{if(e._n)return e;const r=_s((...s)=>hu(e(...s)),n);return r._c=!1,r},ag=(t,e,n)=>{const r=t._ctx;for(const s in t){if(og(s))continue;const i=t[s];if(re(i))e[s]=GE(s,i,r);else if(i!=null){const o=hu(i);e[s]=()=>o}}},lg=(t,e)=>{const n=hu(e);t.slots.default=()=>n},QE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Uo(e,"_",n)):ag(e,t.slots={})}else t.slots={},e&&lg(t,e);Uo(t.slots,Pa,1)},JE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ag(e,s)),o=e}else e&&(lg(t,e),o={default:1});if(i)for(const a in s)!og(a)&&!(a in o)&&delete s[a]};function sc(t,e,n,r,s=!1){if(Q(t)){t.forEach((d,f)=>sc(d,e&&(Q(e)?e[f]:e),n,r,s));return}if(js(r)&&!s)return;const i=r.shapeFlag&4?Ca(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ze(c)?(u[c]=null,he(h,c)&&(h[c]=null)):Le(c)&&(c.value=null)),re(l))$n(l,a,12,[o,u]);else{const d=ze(l),f=Le(l);if(d||f){const y=()=>{if(t.f){const v=d?he(h,l)?h[l]:u[l]:l.value;s?Q(v)&&Kc(v,i):Q(v)?v.includes(i)||v.push(i):d?(u[l]=[i],he(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,he(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Et(y,n)):y()}}}const Et=wE;function XE(t){return YE(t)}function YE(t,e){const n=Gl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ut,insertStaticContent:y}=t,v=(p,g,_,w=null,I=null,R=null,L=!1,x=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!Cs(p,g)&&(w=T(p),vt(p,I,R,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:P,ref:z,shapeFlag:B}=g;switch(P){case Ra:E(p,g,_,w);break;case Kn:b(p,g,_,w);break;case So:p==null&&C(g,_,w,L);break;case Fe:It(p,g,_,w,I,R,L,x,O);break;default:B&1?K(p,g,_,w,I,R,L,x,O):B&6?Ct(p,g,_,w,I,R,L,x,O):(B&64||B&128)&&P.process(p,g,_,w,I,R,L,x,O,N)}z!=null&&I&&sc(z,p&&p.ref,R,g||p,!g)},E=(p,g,_,w)=>{if(p==null)r(g.el=a(g.children),_,w);else{const I=g.el=p.el;g.children!==p.children&&c(I,g.children)}},b=(p,g,_,w)=>{p==null?r(g.el=l(g.children||""),_,w):g.el=p.el},C=(p,g,_,w)=>{[p.el,p.anchor]=y(p.children,g,_,w,p.el,p.anchor)},M=({el:p,anchor:g},_,w)=>{let I;for(;p&&p!==g;)I=d(p),r(p,_,w),p=I;r(g,_,w)},k=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),s(p),p=_;s(g)},K=(p,g,_,w,I,R,L,x,O)=>{L=L||g.type==="svg",p==null?U(g,_,w,I,R,L,x,O):te(p,g,I,R,L,x,O)},U=(p,g,_,w,I,R,L,x)=>{let O,P;const{type:z,props:B,shapeFlag:W,transition:Z,dirs:oe}=p;if(O=p.el=o(p.type,R,B&&B.is,B),W&8?u(O,p.children):W&16&&G(p.children,O,null,w,I,R&&z!=="foreignObject",L,x),oe&&tr(p,null,w,"created"),pe(O,p,p.scopeId,L,w),B){for(const Ie in B)Ie!=="value"&&!bo(Ie)&&i(O,Ie,null,B[Ie],R,p.children,w,I,st);"value"in B&&i(O,"value",null,B.value),(P=B.onVnodeBeforeMount)&&Wt(P,w,p)}oe&&tr(p,null,w,"beforeMount");const Re=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;Re&&Z.beforeEnter(O),r(O,g,_),((P=B&&B.onVnodeMounted)||Re||oe)&&Et(()=>{P&&Wt(P,w,p),Re&&Z.enter(O),oe&&tr(p,null,w,"mounted")},I)},pe=(p,g,_,w,I)=>{if(_&&f(p,_),w)for(let R=0;R<w.length;R++)f(p,w[R]);if(I){let R=I.subTree;if(g===R){const L=I.vnode;pe(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},G=(p,g,_,w,I,R,L,x,O=0)=>{for(let P=O;P<p.length;P++){const z=p[P]=x?kn(p[P]):Kt(p[P]);v(null,z,g,_,w,I,R,L,x)}},te=(p,g,_,w,I,R,L)=>{const x=g.el=p.el;let{patchFlag:O,dynamicChildren:P,dirs:z}=g;O|=p.patchFlag&16;const B=p.props||Pe,W=g.props||Pe;let Z;_&&nr(_,!1),(Z=W.onVnodeBeforeUpdate)&&Wt(Z,_,g,p),z&&tr(g,p,_,"beforeUpdate"),_&&nr(_,!0);const oe=I&&g.type!=="foreignObject";if(P?be(p.dynamicChildren,P,x,_,w,oe,R):L||ve(p,g,x,null,_,w,oe,R,!1),O>0){if(O&16)rt(x,g,B,W,_,w,I);else if(O&2&&B.class!==W.class&&i(x,"class",null,W.class,I),O&4&&i(x,"style",B.style,W.style,I),O&8){const Re=g.dynamicProps;for(let Ie=0;Ie<Re.length;Ie++){const $e=Re[Ie],Nt=B[$e],xr=W[$e];(xr!==Nt||$e==="value")&&i(x,$e,Nt,xr,I,p.children,_,w,st)}}O&1&&p.children!==g.children&&u(x,g.children)}else!L&&P==null&&rt(x,g,B,W,_,w,I);((Z=W.onVnodeUpdated)||z)&&Et(()=>{Z&&Wt(Z,_,g,p),z&&tr(g,p,_,"updated")},w)},be=(p,g,_,w,I,R,L)=>{for(let x=0;x<g.length;x++){const O=p[x],P=g[x],z=O.el&&(O.type===Fe||!Cs(O,P)||O.shapeFlag&70)?h(O.el):_;v(O,P,z,null,w,I,R,L,!0)}},rt=(p,g,_,w,I,R,L)=>{if(_!==w){if(_!==Pe)for(const x in _)!bo(x)&&!(x in w)&&i(p,x,_[x],null,L,g.children,I,R,st);for(const x in w){if(bo(x))continue;const O=w[x],P=_[x];O!==P&&x!=="value"&&i(p,x,P,O,L,g.children,I,R,st)}"value"in w&&i(p,"value",_.value,w.value)}},It=(p,g,_,w,I,R,L,x,O)=>{const P=g.el=p?p.el:a(""),z=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:Z}=g;Z&&(x=x?x.concat(Z):Z),p==null?(r(P,_,w),r(z,_,w),G(g.children,_,z,I,R,L,x,O)):B>0&&B&64&&W&&p.dynamicChildren?(be(p.dynamicChildren,W,_,I,R,L,x),(g.key!=null||I&&g===I.subTree)&&cg(p,g,!0)):ve(p,g,_,z,I,R,L,x,O)},Ct=(p,g,_,w,I,R,L,x,O)=>{g.slotScopeIds=x,p==null?g.shapeFlag&512?I.ctx.activate(g,_,w,L,O):er(g,_,w,I,R,L,O):kt(p,g,O)},er=(p,g,_,w,I,R,L)=>{const x=p.component=aw(p,w,I);if(Xp(p)&&(x.ctx.renderer=N),lw(x),x.asyncDep){if(I&&I.registerDep(x,me),!p.el){const O=x.subTree=de(Kn);b(null,O,g,_)}return}me(x,p,g,_,I,R,L)},kt=(p,g,_)=>{const w=g.component=p.component;if(yE(p,g,_))if(w.asyncDep&&!w.asyncResolved){Ae(w,g,_);return}else w.next=g,uE(w.update),w.update();else g.el=p.el,w.vnode=g},me=(p,g,_,w,I,R,L)=>{const x=()=>{if(p.isMounted){let{next:z,bu:B,u:W,parent:Z,vnode:oe}=p,Re=z,Ie;nr(p,!1),z?(z.el=oe.el,Ae(p,z,L)):z=oe,B&&Ro(B),(Ie=z.props&&z.props.onVnodeBeforeUpdate)&&Wt(Ie,Z,z,oe),nr(p,!0);const $e=gl(p),Nt=p.subTree;p.subTree=$e,v(Nt,$e,h(Nt.el),T(Nt),p,I,R),z.el=$e.el,Re===null&&vE(p,$e.el),W&&Et(W,I),(Ie=z.props&&z.props.onVnodeUpdated)&&Et(()=>Wt(Ie,Z,z,oe),I)}else{let z;const{el:B,props:W}=g,{bm:Z,m:oe,parent:Re}=p,Ie=js(g);if(nr(p,!1),Z&&Ro(Z),!Ie&&(z=W&&W.onVnodeBeforeMount)&&Wt(z,Re,g),nr(p,!0),B&&Ee){const $e=()=>{p.subTree=gl(p),Ee(B,p.subTree,p,I,null)};Ie?g.type.__asyncLoader().then(()=>!p.isUnmounted&&$e()):$e()}else{const $e=p.subTree=gl(p);v(null,$e,_,w,p,I,R),g.el=$e.el}if(oe&&Et(oe,I),!Ie&&(z=W&&W.onVnodeMounted)){const $e=g;Et(()=>Wt(z,Re,$e),I)}(g.shapeFlag&256||Re&&js(Re.vnode)&&Re.vnode.shapeFlag&256)&&p.a&&Et(p.a,I),p.isMounted=!0,g=_=w=null}},O=p.effect=new Yc(x,()=>lu(P),p.scope),P=p.update=()=>O.run();P.id=p.uid,nr(p,!0),P()},Ae=(p,g,_)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,KE(p,g.props,w,_),JE(p,g.children,_),gs(),Jh(),ms()},ve=(p,g,_,w,I,R,L,x,O=!1)=>{const P=p&&p.children,z=p?p.shapeFlag:0,B=g.children,{patchFlag:W,shapeFlag:Z}=g;if(W>0){if(W&128){bn(P,B,_,w,I,R,L,x,O);return}else if(W&256){cn(P,B,_,w,I,R,L,x,O);return}}Z&8?(z&16&&st(P,I,R),B!==P&&u(_,B)):z&16?Z&16?bn(P,B,_,w,I,R,L,x,O):st(P,I,R,!0):(z&8&&u(_,""),Z&16&&G(B,_,w,I,R,L,x,O))},cn=(p,g,_,w,I,R,L,x,O)=>{p=p||qr,g=g||qr;const P=p.length,z=g.length,B=Math.min(P,z);let W;for(W=0;W<B;W++){const Z=g[W]=O?kn(g[W]):Kt(g[W]);v(p[W],Z,_,null,I,R,L,x,O)}P>z?st(p,I,R,!0,!1,B):G(g,_,w,I,R,L,x,O,B)},bn=(p,g,_,w,I,R,L,x,O)=>{let P=0;const z=g.length;let B=p.length-1,W=z-1;for(;P<=B&&P<=W;){const Z=p[P],oe=g[P]=O?kn(g[P]):Kt(g[P]);if(Cs(Z,oe))v(Z,oe,_,null,I,R,L,x,O);else break;P++}for(;P<=B&&P<=W;){const Z=p[B],oe=g[W]=O?kn(g[W]):Kt(g[W]);if(Cs(Z,oe))v(Z,oe,_,null,I,R,L,x,O);else break;B--,W--}if(P>B){if(P<=W){const Z=W+1,oe=Z<z?g[Z].el:w;for(;P<=W;)v(null,g[P]=O?kn(g[P]):Kt(g[P]),_,oe,I,R,L,x,O),P++}}else if(P>W)for(;P<=B;)vt(p[P],I,R,!0),P++;else{const Z=P,oe=P,Re=new Map;for(P=oe;P<=W;P++){const At=g[P]=O?kn(g[P]):Kt(g[P]);At.key!=null&&Re.set(At.key,P)}let Ie,$e=0;const Nt=W-oe+1;let xr=!1,Fh=0;const Ss=new Array(Nt);for(P=0;P<Nt;P++)Ss[P]=0;for(P=Z;P<=B;P++){const At=p[P];if($e>=Nt){vt(At,I,R,!0);continue}let zt;if(At.key!=null)zt=Re.get(At.key);else for(Ie=oe;Ie<=W;Ie++)if(Ss[Ie-oe]===0&&Cs(At,g[Ie])){zt=Ie;break}zt===void 0?vt(At,I,R,!0):(Ss[zt-oe]=P+1,zt>=Fh?Fh=zt:xr=!0,v(At,g[zt],_,null,I,R,L,x,O),$e++)}const $h=xr?ZE(Ss):qr;for(Ie=$h.length-1,P=Nt-1;P>=0;P--){const At=oe+P,zt=g[At],Bh=At+1<z?g[At+1].el:w;Ss[P]===0?v(null,zt,_,Bh,I,R,L,x,O):xr&&(Ie<0||P!==$h[Ie]?Ht(zt,_,Bh,2):Ie--)}}},Ht=(p,g,_,w,I=null)=>{const{el:R,type:L,transition:x,children:O,shapeFlag:P}=p;if(P&6){Ht(p.component.subTree,g,_,w);return}if(P&128){p.suspense.move(g,_,w);return}if(P&64){L.move(p,g,_,N);return}if(L===Fe){r(R,g,_);for(let B=0;B<O.length;B++)Ht(O[B],g,_,w);r(p.anchor,g,_);return}if(L===So){M(p,g,_);return}if(w!==2&&P&1&&x)if(w===0)x.beforeEnter(R),r(R,g,_),Et(()=>x.enter(R),I);else{const{leave:B,delayLeave:W,afterLeave:Z}=x,oe=()=>r(R,g,_),Re=()=>{B(R,()=>{oe(),Z&&Z()})};W?W(R,oe,Re):Re()}else r(R,g,_)},vt=(p,g,_,w=!1,I=!1)=>{const{type:R,props:L,ref:x,children:O,dynamicChildren:P,shapeFlag:z,patchFlag:B,dirs:W}=p;if(x!=null&&sc(x,null,_,p,!0),z&256){g.ctx.deactivate(p);return}const Z=z&1&&W,oe=!js(p);let Re;if(oe&&(Re=L&&L.onVnodeBeforeUnmount)&&Wt(Re,g,p),z&6)ro(p.component,_,w);else{if(z&128){p.suspense.unmount(_,w);return}Z&&tr(p,null,g,"beforeUnmount"),z&64?p.type.remove(p,g,_,I,N,w):P&&(R!==Fe||B>0&&B&64)?st(P,g,_,!1,!0):(R===Fe&&B&384||!I&&z&16)&&st(O,g,_),w&&Cr(p)}(oe&&(Re=L&&L.onVnodeUnmounted)||Z)&&Et(()=>{Re&&Wt(Re,g,p),Z&&tr(p,null,g,"unmounted")},_)},Cr=p=>{const{type:g,el:_,anchor:w,transition:I}=p;if(g===Fe){kr(_,w);return}if(g===So){k(p);return}const R=()=>{s(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:x}=I,O=()=>L(_,R);x?x(p.el,R,O):O()}else R()},kr=(p,g)=>{let _;for(;p!==g;)_=d(p),s(p),p=_;s(g)},ro=(p,g,_)=>{const{bum:w,scope:I,update:R,subTree:L,um:x}=p;w&&Ro(w),I.stop(),R&&(R.active=!1,vt(L,p,g,_)),x&&Et(x,g),Et(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},st=(p,g,_,w=!1,I=!1,R=0)=>{for(let L=R;L<p.length;L++)vt(p[L],g,_,w,I)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),F=(p,g,_)=>{p==null?g._vnode&&vt(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,_),Jh(),Wp(),g._vnode=p},N={p:v,um:vt,m:Ht,r:Cr,mt:er,mc:G,pc:ve,pbc:be,n:T,o:t};let q,Ee;return e&&([q,Ee]=e(N)),{render:F,hydrate:q,createApp:HE(F,q)}}function nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cg(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=kn(s[i]),a.el=o.el),n||cg(o,a)),a.type===Ra&&(a.el=o.el)}}function ZE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ew=t=>t.__isTeleport,Fe=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),Kn=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Hs=[];let Mt=null;function D(t=!1){Hs.push(Mt=t?null:[])}function tw(){Hs.pop(),Mt=Hs[Hs.length-1]||null}let oi=1;function ad(t){oi+=t}function ug(t){return t.dynamicChildren=oi>0?Mt||qr:null,tw(),oi>0&&Mt&&Mt.push(t),t}function se(t,e,n,r,s,i){return ug(m(t,e,n,r,s,i,!0))}function ie(t,e,n,r,s){return ug(de(t,e,n,r,s,!0))}function qo(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Pa="__vInternal",hg=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Le(t)||re(t)?{i:et,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hg(e),ref:e&&Co(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return a?(du(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),oi>0&&!o&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const de=nw;function nw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===VE)&&(t=Kn),qo(t)){const a=Zr(t,e,!0);return n&&du(a,n),oi>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(fw(t)&&(t=t.__vccOpts),e){e=rw(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=or(a)),Oe(l)&&($p(l)&&!Q(l)&&(l=Ge({},l)),e.style=ps(l))}const o=ze(t)?1:EE(t)?128:ew(t)?64:Oe(t)?4:re(t)?2:0;return m(t,e,n,r,s,o,i,!0)}function rw(t){return t?$p(t)||Pa in t?Ge({},t):t:null}function Zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?sw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hg(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(Co(e)):[s,Co(e)]:Co(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Sa(t=" ",e=0){return de(Ra,null,t,e)}function Si(t,e){const n=de(So,null,t);return n.staticCount=e,n}function ae(t="",e=!1){return e?(D(),ie(Kn,null,t)):de(Kn,null,t)}function Kt(t){return t==null||typeof t=="boolean"?de(Kn):Q(t)?de(Fe,null,t.slice()):typeof t=="object"?kn(t):de(Ra,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function du(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),du(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pa in e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[Sa(e)]):n=8);t.children=e,t.shapeFlag|=n}function sw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=or([e.class,r.class]));else if(s==="style")e.style=ps([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){Ft(t,e,7,[n,r])}const iw=rg();let ow=0;function aw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iw,i={uid:ow++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ig(r,s),emitsOptions:Gp(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fE.bind(null,i),t.ce&&t.ce(i),i}let Ke=null,fu,Dr,ld="__VUE_INSTANCE_SETTERS__";(Dr=Gl()[ld])||(Dr=Gl()[ld]=[]),Dr.push(t=>Ke=t),fu=t=>{Dr.length>1?Dr.forEach(e=>e(t)):Dr[0](t)};const es=t=>{fu(t),t.scope.on()},fr=()=>{Ke&&Ke.scope.off(),fu(null)};function dg(t){return t.vnode.shapeFlag&4}let ai=!1;function lw(t,e=!1){ai=e;const{props:n,children:r}=t.vnode,s=dg(t);WE(t,n,s,e),QE(t,r);const i=s?cw(t,e):void 0;return ai=!1,i}function cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ea(new Proxy(t.ctx,LE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?hw(t):null;es(t),gs();const i=$n(r,t,0,[t.props,s]);if(ms(),fr(),Ep(i)){if(i.then(fr,fr),e)return i.then(o=>{cd(t,o,e)}).catch(o=>{wa(o,t,0)});t.asyncDep=i}else cd(t,i,e)}else fg(t,e)}function cd(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=jp(e)),fg(t,n)}let ud;function fg(t,e,n){const r=t.type;if(!t.render){if(!e&&ud&&!r.render){const s=r.template||uu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ge(Ge({isCustomElement:i,delimiters:a},o),l);r.render=ud(s,c)}}t.render=r.render||Ut}es(t),gs(),UE(t),ms(),fr()}function uw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}}))}function hw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return uw(t)},slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jp(Ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function dw(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function fw(t){return re(t)&&"__vccOpts"in t}const Ne=(t,e)=>aE(t,e,ai);function pg(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!Q(e)?qo(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qo(n)&&(n=[n]),de(t,e,n))}const pw=Symbol.for("v-scx"),gw=()=>Ot(pw),mw="3.3.4",_w="http://www.w3.org/2000/svg",ir=typeof document<"u"?document:null,hd=ir&&ir.createElement("template"),yw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ir.createElementNS(_w,t):ir.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ir.createTextNode(t),createComment:t=>ir.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ir.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hd.innerHTML=r?`<svg>${t}</svg>`:t;const a=hd.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ew(t,e,n){const r=t.style,s=ze(n);if(n&&!s){if(e&&!ze(e))for(const i in e)n[i]==null&&ic(r,i,"");for(const i in n)ic(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const dd=/\s*!important$/;function ic(t,e,n){if(Q(n))n.forEach(r=>ic(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ww(t,e);dd.test(n)?t.setProperty(fs(r),n.replace(dd,""),"important"):t[r]=n}}const fd=["Webkit","Moz","ms"],_l={};function ww(t,e){const n=_l[e];if(n)return n;let r=sn(e);if(r!=="filter"&&r in t)return _l[e]=r;r=ya(r);for(let s=0;s<fd.length;s++){const i=fd[s]+r;if(i in t)return _l[e]=i}return e}const pd="http://www.w3.org/1999/xlink";function Tw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(pd,e.slice(6,e.length)):t.setAttributeNS(pd,e,n);else{const i=Av(e);n==null||i&&!Ip(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Iw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ip(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mr(t,e,n,r){t.addEventListener(e,n,r)}function Aw(t,e,n,r){t.removeEventListener(e,n,r)}function bw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Rw(e);if(r){const c=i[e]=Cw(r,s);Mr(t,a,c,l)}else o&&(Aw(t,a,o,l),i[e]=void 0)}}const gd=/(?:Once|Passive|Capture)$/;function Rw(t){let e;if(gd.test(t)){e={};let r;for(;r=t.match(gd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let yl=0;const Pw=Promise.resolve(),Sw=()=>yl||(Pw.then(()=>yl=0),yl=Date.now());function Cw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(kw(r,n.value),e,5,[r])};return n.value=t,n.attached=Sw(),n}function kw(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const md=/^on[a-z]/,xw=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?vw(t,r,s):e==="style"?Ew(t,n,r):ga(e)?Wc(e)||bw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dw(t,e,r,s))?Iw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tw(t,e,r,s))};function Dw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&md.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||md.test(e)&&ze(n)?!1:e in t}const _d=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>Ro(e,n):e};function Ow(t){t.target.composing=!0}function yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const oc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=_d(s);const i=r||s.props&&s.props.type==="number";Mr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Kl(a)),t._assign(a)}),n&&Mr(t,"change",()=>{t.value=t.value.trim()}),e||(Mr(t,"compositionstart",Ow),Mr(t,"compositionend",yd),Mr(t,"change",yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=_d(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Kl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Nw=["ctrl","shift","alt","meta"],Vw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nw.some(n=>t[`${n}Key`]&&!e.includes(n))},gg=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Vw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Mw=Ge({patchProp:xw},yw);let vd;function Lw(){return vd||(vd=XE(Mw))}const Uw=(...t)=>{const e=Lw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fw(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Fw(t){return ze(t)?document.querySelector(t):t}var $w=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let mg;const ka=t=>mg=t,_g=Symbol();function ac(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zs||(zs={}));function Bw(){const t=Rp(!0),e=t.run(()=>ue({}));let n=[],r=[];const s=Ea({install(i){ka(s),s._a=i,i.provide(_g,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!$w?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const yg=()=>{};function Ed(t,e,n,r=yg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Jc()&&Pp(s),s}function Or(t,...e){t.slice().forEach(n=>{n(...e)})}const jw=t=>t();function lc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ac(s)&&ac(r)&&t.hasOwnProperty(n)&&!Le(r)&&!Fn(r)?t[n]=lc(s,r):t[n]=r}return t}const qw=Symbol();function Hw(t){return!ac(t)||!t.hasOwnProperty(qw)}const{assign:Cn}=Object;function zw(t){return!!(Le(t)&&t.effect)}function Ww(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=qp(n.state.value[t]);return Cn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ea(Ne(()=>{ka(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=vg(t,c,e,n,r,!0),l}function vg(t,e,n={},r,s,i){let o;const a=Cn({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),ue({});let v;function E(G){let te;c=u=!1,typeof G=="function"?(G(r.state.value[t]),te={type:zs.patchFunction,storeId:t,events:f}):(lc(r.state.value[t],G),te={type:zs.patchObject,payload:G,storeId:t,events:f});const be=v=Symbol();au().then(()=>{v===be&&(c=!0)}),u=!0,Or(h,te,r.state.value[t])}const b=i?function(){const{state:te}=n,be=te?te():{};this.$patch(rt=>{Cn(rt,be)})}:yg;function C(){o.stop(),h=[],d=[],r._s.delete(t)}function M(G,te){return function(){ka(r);const be=Array.from(arguments),rt=[],It=[];function Ct(me){rt.push(me)}function er(me){It.push(me)}Or(d,{args:be,name:G,store:K,after:Ct,onError:er});let kt;try{kt=te.apply(this&&this.$id===t?this:K,be)}catch(me){throw Or(It,me),me}return kt instanceof Promise?kt.then(me=>(Or(rt,me),me)).catch(me=>(Or(It,me),Promise.reject(me))):(Or(rt,kt),kt)}}const k={_p:r,$id:t,$onAction:Ed.bind(null,d),$patch:E,$reset:b,$subscribe(G,te={}){const be=Ed(h,G,te.detached,()=>rt()),rt=o.run(()=>dr(()=>r.state.value[t],It=>{(te.flush==="sync"?u:c)&&G({storeId:t,type:zs.direct,events:f},It)},Cn({},l,te)));return be},$dispose:C},K=Pi(k);r._s.set(t,K);const U=r._a&&r._a.runWithContext||jw,pe=r._e.run(()=>(o=Rp(),U(()=>o.run(e))));for(const G in pe){const te=pe[G];if(Le(te)&&!zw(te)||Fn(te))i||(y&&Hw(te)&&(Le(te)?te.value=y[G]:lc(te,y[G])),r.state.value[t][G]=te);else if(typeof te=="function"){const be=M(G,te);pe[G]=be,a.actions[G]=te}}return Cn(K,pe),Cn(fe(K),pe),Object.defineProperty(K,"$state",{get:()=>r.state.value[t],set:G=>{E(te=>{Cn(te,G)})}}),r._p.forEach(G=>{Cn(K,o.run(()=>G({store:K,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(K.$state,y),c=!0,u=!0,K}function pu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=zE();return a=a||(c?Ot(_g,null):null),a&&ka(a),a=mg,a._s.has(r)||(i?vg(r,e,s,a):Ww(r,s,a)),a._s.get(r)}return o.$id=r,o}const an=pu("screen",()=>{const t=ue([]),e=Ne(()=>t.value);return{windows:t,getWindows:e,setWindow:(o,a)=>{let l=0;const c=t.value.find(u=>u.window===o);for(const u of t.value)l+=u.zIndex;if(!c)t.value.push({window:o,data:a,x:300,y:40,zIndex:l});else for(const u of t.value)l+=u.zIndex},removeWidow:o=>{t.value=t.value.filter(a=>a.window!==o)},changeXY:(o,a,l)=>{const c=t.value.find((u,h)=>h===l);c.x=o,c.y=a},increseZindex:o=>{const a=t.value.find(l=>l.window===o);if(a){let l=0;for(const c of t.value)l+=c.zIndex;a.zIndex=l+10}}}}),Kw={class:"w-full fixed top-0 py-3 bg-primary text-white"},Gw={class:"w-[90%] mx-auto flex items-center justify-between"},Qw={class:"text-xl font-bold cursor-pointer"},Jw={class:"text-xl font-bold"},Xw={key:0,class:"absolute z-40 p-2 top-9 text-xl bg-primary text-white my-5 ms-[4%]"},Yw={__name:"Header",setup(t){const e=ue(!1),n=ue(""),r=an(),s=()=>{const a=new Date,l=a.getDate().toString().padStart(2,"0"),u=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],h=a.getFullYear(),d=a.getHours().toString().padStart(2,"0"),f=a.getMinutes().toString().padStart(2,"0"),y=a.getSeconds().toString().padStart(2,"0");return`${l}/${u}/${h} ${d}:${f}:${y}`};yt(()=>{n.value=s(),setInterval(()=>{n.value=s()},1e3)});const i=(a,l=null)=>{r.setWindow(a,l),e.value=!1},o=()=>{window.location.href="/"};return(a,l)=>(D(),se(Fe,null,[m("nav",Kw,[m("div",Gw,[m("div",Qw,[m("div",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},"Menu")]),m("div",Jw,[m("div",null,zn(n.value),1)])])]),e.value?(D(),se("div",Xw,[m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:l[1]||(l[1]=c=>i("portfolio"))}," Portfolio "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:l[2]||(l[2]=c=>i("about"))}," About "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:l[3]||(l[3]=c=>i("skill"))}," Skill "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:l[4]||(l[4]=c=>i("contact"))}," Contact "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:l[5]||(l[5]=c=>o())}," Shutdown ")])):ae("",!0)],64))}};const gu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Zw=t=>(pE("data-v-c958fb2d"),t=t(),gE(),t),eT={key:0,class:"h-screen flex justify-center flex-col items-center w-screen bg-[#ebd1ae]"},tT=Zw(()=>m("div",{class:"text-4xl text-white"},"Loading...",-1)),nT={class:"progress-bar-container"},rT={key:1,class:"app"},sT={__name:"App",setup(t){const e=ue(!0),n=ue(0);return yt(()=>{const r=setInterval(()=>{n.value<100?n.value+=10:(clearInterval(r),e.value=!1)},200)}),(r,s)=>{const i=NE("routerView");return e.value?(D(),se("div",eT,[tT,m("div",nT,[m("div",{class:"progress-bar",style:ps({width:n.value+"%"})},null,4)])])):(D(),se("div",rT,[de(Yw),de(i,{class:"mt-12"})]))}}},iT=gu(sT,[["__scopeId","data-v-c958fb2d"]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof window<"u";function oT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function vl(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Ws=()=>{},$t=Array.isArray,aT=/\/$/,lT=t=>t.replace(aT,"");function El(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=dT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function cT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ts(e.matched[r],n.matched[s])&&Eg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Eg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hT(t[n],e[n]))return!1;return!0}function hT(t,e){return $t(t)?Td(t,e):$t(e)?Td(e,t):t===e}function Td(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function fT(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lT(t)}const pT=/^[^#]+#/;function gT(t,e){return t.replace(pT,"#")+e}function mT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xa=()=>({left:window.pageXOffset,top:window.pageYOffset});function _T(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Id(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function yT(t,e){cc.set(t,e)}function vT(t){const e=cc.get(t);return cc.delete(t),e}let ET=()=>location.protocol+"//"+location.host;function wg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),wd(l,"")}return wd(n,t)+r+s}function wT(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=wg(t,location),y=n.value,v=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===y){o=null;return}E=v?d.position-v.position:0}else r(f);s.forEach(b=>{b(n.value,y,{delta:E,type:li.pop,direction:E?E>0?Ks.forward:Ks.back:Ks.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:xa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Ad(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xa():null}}function TT(t){const{history:e,location:n}=window,r={value:wg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:ET()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=we({},e.state,Ad(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=we({},s.value,e.state,{forward:l,scroll:xa()});i(u.current,u,!0);const h=we({},Ad(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function IT(t){t=fT(t);const e=TT(t),n=wT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:gT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function AT(t){return typeof t=="string"||t&&typeof t=="object"}function Tg(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ig=Symbol("");var bd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bd||(bd={}));function ns(t,e){return we(new Error,{type:t,[Ig]:!0},e)}function un(t,e){return t instanceof Error&&Ig in t&&(e==null||!!(t.type&e))}const Rd="[^/]+?",bT={sensitive:!1,strict:!1,start:!0,end:!0},RT=/[.+*?^${}()[\]/\\]/g;function PT(t,e){const n=we({},bT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(RT,"\\$&"),f+=40;else if(d.type===1){const{value:y,repeatable:v,optional:E,regexp:b}=d;i.push({name:y,repeatable:v,optional:E});const C=b||Rd;if(C!==Rd){f+=10;try{new RegExp(`(${C})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+k.message)}}let M=v?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(M=E&&c.length<2?`(?:/${M})`:"/"+M),E&&(M+="?"),s+=M,f+=20,E&&(f+=-8),v&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",y=i[d-1];h[y.name]=f&&y.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:y,repeatable:v,optional:E}=f,b=y in c?c[y]:"";if($t(b)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=$t(b)?b.join("/"):b;if(!C)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=C}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function ST(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ST(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pd(r))return 1;if(Pd(s))return-1}return s.length-r.length}function Pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kT={type:0,value:""},xT=/[a-zA-Z0-9_]/;function DT(t){if(!t)return[[]];if(t==="/")return[[kT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:xT.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function OT(t,e,n){const r=PT(DT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NT(t,e){const n=[],r=new Map;e=kd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,y=VT(u);y.aliasOf=d&&d.record;const v=kd(e,u),E=[y];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of M)E.push(we({},y,{components:d?d.record.components:y.components,path:k,aliasOf:d?d.record:y}))}let b,C;for(const M of E){const{path:k}=M;if(h&&k[0]!=="/"){const K=h.record.path,U=K[K.length-1]==="/"?"":"/";M.path=h.record.path+(k&&U+k)}if(b=OT(M,h,v),d?d.alias.push(b):(C=C||b,C!==b&&C.alias.push(b),f&&u.name&&!Cd(b)&&o(u.name)),y.children){const K=y.children;for(let U=0;U<K.length;U++)i(K[U],b,d&&d.children[U])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return C?()=>{o(C)}:Ws}function o(u){if(Tg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&CT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ag(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Cd(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},y,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ns(1,{location:u});v=d.record.name,f=we(Sd(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&Sd(u.params,d.keys.map(C=>C.name))),y=d.stringify(f)}else if("path"in u)y=u.path,d=n.find(C=>C.re.test(y)),d&&(f=d.parse(y),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw ns(1,{location:u,currentLocation:h});v=d.record.name,f=we({},h.params,u.params),y=d.stringify(f)}const E=[];let b=d;for(;b;)E.unshift(b.record),b=b.parent;return{name:v,path:y,params:f,matched:E,meta:LT(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Sd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function VT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:MT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function MT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function kd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ag(t,e){return e.children.some(n=>n===t||Ag(t,n))}const bg=/#/g,UT=/&/g,FT=/\//g,$T=/=/g,BT=/\?/g,Rg=/\+/g,jT=/%5B/g,qT=/%5D/g,Pg=/%5E/g,HT=/%60/g,Sg=/%7B/g,zT=/%7C/g,Cg=/%7D/g,WT=/%20/g;function mu(t){return encodeURI(""+t).replace(zT,"|").replace(jT,"[").replace(qT,"]")}function KT(t){return mu(t).replace(Sg,"{").replace(Cg,"}").replace(Pg,"^")}function uc(t){return mu(t).replace(Rg,"%2B").replace(WT,"+").replace(bg,"%23").replace(UT,"%26").replace(HT,"`").replace(Sg,"{").replace(Cg,"}").replace(Pg,"^")}function GT(t){return uc(t).replace($T,"%3D")}function QT(t){return mu(t).replace(bg,"%23").replace(BT,"%3F")}function JT(t){return t==null?"":QT(t).replace(FT,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function XT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rg," "),o=i.indexOf("="),a=Ho(o<0?i:i.slice(0,o)),l=o<0?null:Ho(i.slice(o+1));if(a in e){let c=e[a];$t(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function xd(t){let e="";for(let n in t){const r=t[n];if(n=GT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&uc(i)):[r&&uc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ZT=Symbol(""),Dd=Symbol(""),Da=Symbol(""),_u=Symbol(""),hc=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ns(4,{from:n,to:e})):h instanceof Error?a(h):AT(h)?a(ns(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function wl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(eI(a)){const c=(a.__vccOpts||a)[e];c&&s.push(xn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=oT(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&xn(d,n,r,i,o)()}))}}return s}function eI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Od(t){const e=Ot(Da),n=Ot(_u),r=Ne(()=>e.resolve(De(t.to))),s=Ne(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ts.bind(null,u));if(d>-1)return d;const f=Nd(l[c-2]);return c>1&&Nd(u)===f&&h[h.length-1].path!==f?h.findIndex(ts.bind(null,l[c-2])):d}),i=Ne(()=>s.value>-1&&sI(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Eg(n.params,r.value.params));function a(l={}){return rI(l)?e[De(t.replace)?"replace":"push"](De(t.to)).catch(Ws):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const tI=Aa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Od,setup(t,{slots:e}){const n=Pi(Od(t)),{options:r}=Ot(Da),s=Ne(()=>({[Vd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),nI=tI;function rI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vd=(t,e,n)=>t??e??n,iI=Aa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ot(hc),s=Ne(()=>t.route||r.value),i=Ot(Dd,0),o=Ne(()=>{let c=De(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ne(()=>s.value.matched[o.value]);Po(Dd,Ne(()=>o.value+1)),Po(ZT,a),Po(hc,s);const l=ue();return dr(()=>[l.value,a.value,t.name],([c,u,h],[d,f,y])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ts(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Md(n.default,{Component:d,route:c});const f=h.props[u],y=f?f===!0?c.params:typeof f=="function"?f(c):f:null,E=pg(d,we({},y,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Md(n.default,{Component:E,route:c})||E}}});function Md(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oI=iI;function aI(t){const e=NT(t.routes,t),n=t.parseQuery||XT,r=t.stringifyQuery||xd,s=t.history,i=ks(),o=ks(),a=ks(),l=Zv(Pn);let c=Pn;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vl.bind(null,T=>""+T),h=vl.bind(null,JT),d=vl.bind(null,Ho);function f(T,F){let N,q;return Tg(T)?(N=e.getRecordMatcher(T),q=F):q=T,e.addRoute(q,N)}function y(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function v(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function b(T,F){if(F=we({},F||l.value),typeof T=="string"){const _=El(n,T,F.path),w=e.resolve({path:_.path},F),I=s.createHref(_.fullPath);return we(_,w,{params:d(w.params),hash:Ho(_.hash),redirectedFrom:void 0,href:I})}let N;if("path"in T)N=we({},T,{path:El(n,T.path,F.path).path});else{const _=we({},T.params);for(const w in _)_[w]==null&&delete _[w];N=we({},T,{params:h(_)}),F.params=h(F.params)}const q=e.resolve(N,F),Ee=T.hash||"";q.params=u(d(q.params));const p=cT(r,we({},T,{hash:KT(Ee),path:q.path})),g=s.createHref(p);return we({fullPath:p,hash:Ee,query:r===xd?YT(T.query):T.query||{}},q,{redirectedFrom:void 0,href:g})}function C(T){return typeof T=="string"?El(n,T,l.value.path):we({},T)}function M(T,F){if(c!==T)return ns(8,{from:F,to:T})}function k(T){return pe(T)}function K(T){return k(we(C(T),{replace:!0}))}function U(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:N}=F;let q=typeof N=="function"?N(T):N;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=C(q):{path:q},q.params={}),we({query:T.query,hash:T.hash,params:"path"in q?{}:T.params},q)}}function pe(T,F){const N=c=b(T),q=l.value,Ee=T.state,p=T.force,g=T.replace===!0,_=U(N);if(_)return pe(we(C(_),{state:typeof _=="object"?we({},Ee,_.state):Ee,force:p,replace:g}),F||N);const w=N;w.redirectedFrom=F;let I;return!p&&uT(r,q,N)&&(I=ns(16,{to:w,from:q}),Ht(q,q,!0,!1)),(I?Promise.resolve(I):be(w,q)).catch(R=>un(R)?un(R,2)?R:bn(R):ve(R,w,q)).then(R=>{if(R){if(un(R,2))return pe(we({replace:g},C(R.to),{state:typeof R.to=="object"?we({},Ee,R.to.state):Ee,force:p}),F||w)}else R=It(w,q,!0,g,Ee);return rt(w,q,R),R})}function G(T,F){const N=M(T,F);return N?Promise.reject(N):Promise.resolve()}function te(T){const F=kr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(T):T()}function be(T,F){let N;const[q,Ee,p]=lI(T,F);N=wl(q.reverse(),"beforeRouteLeave",T,F);for(const _ of q)_.leaveGuards.forEach(w=>{N.push(xn(w,T,F))});const g=G.bind(null,T,F);return N.push(g),st(N).then(()=>{N=[];for(const _ of i.list())N.push(xn(_,T,F));return N.push(g),st(N)}).then(()=>{N=wl(Ee,"beforeRouteUpdate",T,F);for(const _ of Ee)_.updateGuards.forEach(w=>{N.push(xn(w,T,F))});return N.push(g),st(N)}).then(()=>{N=[];for(const _ of p)if(_.beforeEnter)if($t(_.beforeEnter))for(const w of _.beforeEnter)N.push(xn(w,T,F));else N.push(xn(_.beforeEnter,T,F));return N.push(g),st(N)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),N=wl(p,"beforeRouteEnter",T,F),N.push(g),st(N))).then(()=>{N=[];for(const _ of o.list())N.push(xn(_,T,F));return N.push(g),st(N)}).catch(_=>un(_,8)?_:Promise.reject(_))}function rt(T,F,N){a.list().forEach(q=>te(()=>q(T,F,N)))}function It(T,F,N,q,Ee){const p=M(T,F);if(p)return p;const g=F===Pn,_=Lr?history.state:{};N&&(q||g?s.replace(T.fullPath,we({scroll:g&&_&&_.scroll},Ee)):s.push(T.fullPath,Ee)),l.value=T,Ht(T,F,N,g),bn()}let Ct;function er(){Ct||(Ct=s.listen((T,F,N)=>{if(!ro.listening)return;const q=b(T),Ee=U(q);if(Ee){pe(we(Ee,{replace:!0}),q).catch(Ws);return}c=q;const p=l.value;Lr&&yT(Id(p.fullPath,N.delta),xa()),be(q,p).catch(g=>un(g,12)?g:un(g,2)?(pe(g.to,q).then(_=>{un(_,20)&&!N.delta&&N.type===li.pop&&s.go(-1,!1)}).catch(Ws),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ve(g,q,p))).then(g=>{g=g||It(q,p,!1),g&&(N.delta&&!un(g,8)?s.go(-N.delta,!1):N.type===li.pop&&un(g,20)&&s.go(-1,!1)),rt(q,p,g)}).catch(Ws)}))}let kt=ks(),me=ks(),Ae;function ve(T,F,N){bn(T);const q=me.list();return q.length?q.forEach(Ee=>Ee(T,F,N)):console.error(T),Promise.reject(T)}function cn(){return Ae&&l.value!==Pn?Promise.resolve():new Promise((T,F)=>{kt.add([T,F])})}function bn(T){return Ae||(Ae=!T,er(),kt.list().forEach(([F,N])=>T?N(T):F()),kt.reset()),T}function Ht(T,F,N,q){const{scrollBehavior:Ee}=t;if(!Lr||!Ee)return Promise.resolve();const p=!N&&vT(Id(T.fullPath,0))||(q||!N)&&history.state&&history.state.scroll||null;return au().then(()=>Ee(T,F,p)).then(g=>g&&_T(g)).catch(g=>ve(g,T,F))}const vt=T=>s.go(T);let Cr;const kr=new Set,ro={currentRoute:l,listening:!0,addRoute:f,removeRoute:y,hasRoute:E,getRoutes:v,resolve:b,options:t,push:k,replace:K,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:cn,install(T){const F=this;T.component("RouterLink",nI),T.component("RouterView",oI),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>De(l)}),Lr&&!Cr&&l.value===Pn&&(Cr=!0,k(s.location).catch(Ee=>{}));const N={};for(const Ee in Pn)Object.defineProperty(N,Ee,{get:()=>l.value[Ee],enumerable:!0});T.provide(Da,F),T.provide(_u,Up(N)),T.provide(hc,l);const q=T.unmount;kr.add(T),T.unmount=function(){kr.delete(T),kr.size<1&&(c=Pn,Ct&&Ct(),Ct=null,l.value=Pn,Cr=!1,Ae=!1),q()}}};function st(T){return T.reduce((F,N)=>F.then(()=>te(N)),Promise.resolve())}return ro}function lI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>ts(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ts(c,l))||s.push(l))}return[n,r,s]}function cI(){return Ot(Da)}function Ci(){return Ot(_u)}const kg="/assets/pc-609054bf.png",xg="/assets/about-496d3e3f.png",Dg="/assets/skill-b1993387.png",Og="/assets/contact-d5a2c51b.png";function uI(t){return Jc()?(Pp(t),!0):!1}function dn(t){return typeof t=="function"?t():De(t)}const Ng=typeof window<"u",hI=()=>{};var dI=Object.defineProperty,fI=Object.defineProperties,pI=Object.getOwnPropertyDescriptors,Ld=Object.getOwnPropertySymbols,gI=Object.prototype.hasOwnProperty,mI=Object.prototype.propertyIsEnumerable,Ud=(t,e,n)=>e in t?dI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_I=(t,e)=>{for(var n in e||(e={}))gI.call(e,n)&&Ud(t,n,e[n]);if(Ld)for(var n of Ld(e))mI.call(e,n)&&Ud(t,n,e[n]);return t},yI=(t,e)=>fI(t,pI(e));function vI(t,e={}){if(!Le(t))return qp(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const r in t.value)n[r]=rE(()=>({get(){return t.value[r]},set(s){var i;if((i=dn(e.replaceRef))!=null?i:!0)if(Array.isArray(t.value)){const a=[...t.value];a[r]=s,t.value=a}else{const a=yI(_I({},t.value),{[r]:s});Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[r]=s}}));return n}function EI(t){var e;const n=dn(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Vg=Ng?window:void 0;function Tl(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Vg):[e,n,r,s]=t,!e)return hI;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=dr(()=>[EI(e),dn(s)],([u,h])=>{o(),u&&i.push(...n.flatMap(d=>r.map(f=>a(u,d,f,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return uI(c),c}var wI=Object.defineProperty,TI=Object.defineProperties,II=Object.getOwnPropertyDescriptors,Fd=Object.getOwnPropertySymbols,AI=Object.prototype.hasOwnProperty,bI=Object.prototype.propertyIsEnumerable,$d=(t,e,n)=>e in t?wI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,RI=(t,e)=>{for(var n in e||(e={}))AI.call(e,n)&&$d(t,n,e[n]);if(Fd)for(var n of Fd(e))bI.call(e,n)&&$d(t,n,e[n]);return t},PI=(t,e)=>TI(t,II(e));function Mg(t,e={}){var n,r;const{pointerTypes:s,preventDefault:i,stopPropagation:o,exact:a,onMove:l,onEnd:c,onStart:u,initialValue:h,axis:d="both",draggingElement:f=Vg,handle:y=t}=e,v=ue((n=dn(h))!=null?n:{x:0,y:0}),E=ue(),b=U=>s?s.includes(U.pointerType):!0,C=U=>{dn(i)&&U.preventDefault(),dn(o)&&U.stopPropagation()},M=U=>{if(!b(U)||dn(a)&&U.target!==dn(t))return;const pe=dn(t).getBoundingClientRect(),G={x:U.clientX-pe.left,y:U.clientY-pe.top};(u==null?void 0:u(G,U))!==!1&&(E.value=G,C(U))},k=U=>{if(!b(U)||!E.value)return;let{x:pe,y:G}=v.value;(d==="x"||d==="both")&&(pe=U.clientX-E.value.x),(d==="y"||d==="both")&&(G=U.clientY-E.value.y),v.value={x:pe,y:G},l==null||l(v.value,U),C(U)},K=U=>{b(U)&&E.value&&(E.value=void 0,c==null||c(v.value,U),C(U))};if(Ng){const U={capture:(r=e.capture)!=null?r:!0};Tl(y,"pointerdown",M,U),Tl(f,"pointermove",k,U),Tl(f,"pointerup",K,U)}return PI(RI({},vI(v)),{position:v,isDragging:Ne(()=>!!E.value),style:Ne(()=>`left:${v.value.x}px;top:${v.value.y}px;`)})}const SI=Aa({__name:"draggable",props:{index:Number},setup(t){const{index:e}=t,n=an(),r=ue(null),s=Ne(()=>n.getWindows.find((c,u)=>u===e)),{x:i,y:o,style:a}=Mg(r,{initialValue:{x:s.value.x,y:s.value.y}}),l=()=>{n.changeXY(i,o,e)};return dr([i,o],()=>{l()}),(c,u)=>(D(),se("div",{ref_key:"el",ref:r,style:ps([De(a),{zIndex:s.value.zIndex},{position:"fixed"}])},[eg(c.$slots,"window")],4))}}),Lg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfKSURBVHgB7d1bjF1lGQbgb81MESwZCFouCIpyIcSeVIKHGBMiEkRFxVpbJMRoVBJjvPJOExNjxECiUUmMRIiJUdtU44krDSJCgwoUaCmC5QJthVLsmU6Ps5dDQnD9P+ked2eGmW/mee7etddqmnbe/fXr3nvtCAAAAAAAAAAAAAAAAAAAAAAAAJhdTX3gHde1o9081ouvFRf04orqksXBSbVDcaTIEQ9088RfwI3dvOXnzeMB/6ehANJSYEhMgSGx5s2r23O6B0aG4v7yjLgwmElj3dA28b5untiJ7ws4CRMYElNgSEyBIbFm+dr2tuJAxGe6+fzzyws+fFWZR0eDPsbGynzXn8u8ZWt1QS92dOOJNlZ282Mbmj0BLzKBITEFhsQUGBIbmdh5P9rvhE+uKvOSJTGQXlvm4+P9H59vXn1mmVd9rMx7D5R5x/Yo/tdhqI1byzPi4wEvMoEhMQWGxBQYEmtWrG37bqE3fyMGcvREmfcfKfM8X3kHdmB/mX98e5mPHX3ZJZ/ths3rmtuCBcsEhsQUGBJTYEhsJKao3qAPVDubnbe/0bPKfGX1XvPf/brME3/e3+3mFavbe7t584bmiWDBMIEhMQWGxBQYEpvyDnyiV+b5/t7mmXbRxWV+cmmZ/761vA93Oxy/6OZla9sPdPOj65rtwbxlAkNiCgyJKTAkNuUdmJl1xZVl3rWzzLt3x7JubiL+2c0r1rT/Kq+I6hPZC96hKt/ZDcO9+GY3P7SheS7mEBMYElNgSEyBIbEpfx64vsfVnsPBDDpUbWx//EOZt/2jzL1eMAUT5XiqODAUb+vGLT9r9sYsMoEhMQWGxBQYEvM6cDKLF5f56uqu3ieqe5KNVTvzSPWUPXp6LGgHqvty/+qOMj/zTLyhODAeN1W/xOdiFpnAkJgCQ2IKDInZgeeZkepvtL7n1stUT+GnV9cPNTGvnV79n8JVV5f59vqbqZq4pjpiBwZOjQJDYgoMidmBF7j6nmbPH4sF7ZxzJj3lNTGHmMCQmAJDYgoMiSkwJKbAkJgCQ2IKDIl5HRj6OKP6vPShw/GfmENMYEhMgSExBYbE7MDQx/WfLvOPfhCXxhxiAkNiCgyJKTAkZgeGPup7ij28rnkq5hATGBJTYEhMgSExBYbEFBgSU2BITIEhsTn/OvDYWJl3bC/z4cMBr5jla9rPxzRqhmJ3cWAk7unGzT9pdvW73gSGxBQYElNgSGzO7cAPbSrz3XeV+cTxgFnTNPHDmE5tlY9H8e1UK9a0X+3mzeubm7vZBIbEFBgSU2BIbNZ34Ce3lfnO35d5YucoLLuozOdO/n2uMGc9W74KHI9ti9O6eWJFvqmbV1zbPt7NJjAkpsCQmAJDYrO+A2+8p//jn1pV5svfHTBvtNXrwL/5U5l/+dvqgl58vRtNYEhMgSExBYbEZn0H3j3Jt62+Z8Bvoql3iuer904fGy9zL2D29Kqf10veUuZ6B544fWk3m8CQmAJDYgoMic36DtybZAk97bQYyL6jZT46HpDGokl+3psmFnWzCQyJKTAkpsCQWPrvBx6vdmg7LwuJCQyJKTAkpsCQWP4duB3s/J3Plnmoego7d0kM5PCRMv/76TK3g77ZuroH2HnnlXnxGQEvMYEhMQWGxBQYEku/A09mV/Xtqt++pTqh2jm/8uUynzUaff10fZmf2BbT6oLXlfmLNwS8xASGxBQYElNgSGze78BnnV3mlcvLPDxc5jMXx0BWLitzb8DXpSez9OKAkzKBITEFhsQUGBKb9zvwq6p7DF33iZhWl17SP8NMMoEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSm/fvha7V94U+eDBm1KJFZb7g9WVumoBTZgJDYgoMiSkwJLbg7wvdTvM9rCaz6iNlfuelAafMBIbEFBgSU2BIbMHfF/rQWMyokeop8o0XBEwbExgSU2BITIEhMfeFhsRMYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxEZiio73ApglJjAkpsCQmAJDYiNtG/u6B5omzu7mnc+VF4yeXeZDR2Mg+/f1f3zxGQEL1p69k5zQRnGGCQyJKTAkpsCQ2MjEv6k3Fkea+GA33n1fecFl740p2bSp/+NvujBgwdr4l/6P9yLu7WYTGBJTYEhMgSGxkeGIG7sHxiPe380P3h/D3XzsWPkLLF1e5qYt89ZHy7z5ker86inkQ5fHQNpJHh8bK/PhAV+3hul08ECZH3y4zH99oMxtG+WnDZr4VjeawJCYAkNiCgyJNfWBlde2N3Rzr41bqgum9BnioeEyX39NucZe9q6+l7/w+ynsP/bC2v4/T+8qH//O98vf7/h4wJzVRvnzPHHgC924ZX1zazebwJCYAkNiCgyJNZOdsHRNu7Kbh5r4UnXK26O/v3XDxA77vW7eur55JKbRW1e3S7r5+HDc0c1Dbbw2YJa0TVTvTJhaP0xgSEyBITEFBgAAAAAAAAAAAAAAAAAAAAAAAOCU/RePsFqZef2t2wAAAABJRU5ErkJggg==",CI={class:"flex items-center gap-1 cursor-move"},kI=Si('<div class="flex flex-col w-[30px] justify-between gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),xI=Si('<div class="flex flex-col w-full gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),DI={class:"text-2xl text-primary"},OI=Si('<div class="basis-1/2"><div class="flex flex-col gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div></div>',1),NI=m("div",{class:"flex flex-col w-full justify-between gap-1 mt-2"},[m("div",{class:"border border-primary"})],-1),ki={__name:"windowHeader",props:{title:String,window:String},setup(t){const{title:e,window:n}=t,r=an(),s=()=>{r.removeWidow(n)};return(i,o)=>(D(),se("div",null,[m("div",CI,[m("div",{class:"basis-1/2"},[m("div",{class:"flex gap-2 items-center h-[35px]"},[kI,m("div",{class:"border-2 border-primary h-[26px] w-[35px] cursor-pointer hover:bg-primary",onClick:s}),xI])]),m("div",DI,zn(t.title),1),OI]),NI]))}};/**
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
 */const Ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},VI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new MI;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LI=function(t){const e=Ug(t);return Fg.encodeByteArray(e,!0)},zo=function(t){return LI(t).replace(/\./g,"")},$g=function(t){try{return Fg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FI=()=>UI().__FIREBASE_DEFAULTS__,$I=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$g(t[1]);return e&&JSON.parse(e)},Oa=()=>{try{return FI()||$I()||BI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bg=t=>{var e,n;return(n=(e=Oa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jg=t=>{const e=Bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qg=()=>{var t;return(t=Oa())===null||t===void 0?void 0:t.config},Hg=t=>{var e;return(e=Oa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),a].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function HI(){var t;const e=(t=Oa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GI(){try{return typeof indexedDB=="object"}catch{return!1}}function QI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const JI="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JI,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,r)}}function XI(t,e){return t.replace(YI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YI=/\{\$([^}]+)}/g;function ZI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bd(i)&&Bd(o)){if(!Wo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
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
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function e0(t,e){const n=new t0(t,e);return n.subscribe.bind(n)}class t0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");n0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Il),s.error===void 0&&(s.error=Il),s.complete===void 0&&(s.complete=Il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Il(){}/**
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
 */class r0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i0(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s0(t){return t===rr?void 0:t}function i0(t){return t.instantiationMode==="EAGER"}/**
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
 */class o0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new r0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const a0={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},l0=ge.INFO,c0={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},u0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=c0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=l0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const h0=(t,e)=>e.some(n=>t instanceof n);let jd,qd;function d0(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wg=new WeakMap,dc=new WeakMap,Kg=new WeakMap,Al=new WeakMap,vu=new WeakMap;function p0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wg.set(n,t)}).catch(()=>{}),vu.set(e,t),e}function g0(t){if(dc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dc.set(t,e)}let fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m0(t){fc=t(fc)}function _0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bl(this),e,...n);return Kg.set(r,e.sort?e.sort():[e]),Bn(r)}:f0().includes(t)?function(...e){return t.apply(bl(this),e),Bn(Wg.get(this))}:function(...e){return Bn(t.apply(bl(this),e))}}function y0(t){return typeof t=="function"?_0(t):(t instanceof IDBTransaction&&g0(t),h0(t,d0())?new Proxy(t,fc):t)}function Bn(t){if(t instanceof IDBRequest)return p0(t);if(Al.has(t))return Al.get(t);const e=y0(t);return e!==t&&(Al.set(t,e),vu.set(e,t)),e}const bl=t=>vu.get(t);function v0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Bn(o.result),l.oldVersion,l.newVersion,Bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const E0=["get","getKey","getAll","getAllKeys","count"],w0=["put","add","delete","clear"],Rl=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rl.get(e))return Rl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=w0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||E0.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Rl.set(e,i),i}m0(t=>({...t,get:(e,n,r)=>Hd(e,n)||t.get(e,n,r),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
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
 */class T0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function I0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pc="@firebase/app",zd="0.9.15";/**
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
 */const _r=new yu("@firebase/app"),A0="@firebase/app-compat",b0="@firebase/analytics-compat",R0="@firebase/analytics",P0="@firebase/app-check-compat",S0="@firebase/app-check",C0="@firebase/auth",k0="@firebase/auth-compat",x0="@firebase/database",D0="@firebase/database-compat",O0="@firebase/functions",N0="@firebase/functions-compat",V0="@firebase/installations",M0="@firebase/installations-compat",L0="@firebase/messaging",U0="@firebase/messaging-compat",F0="@firebase/performance",$0="@firebase/performance-compat",B0="@firebase/remote-config",j0="@firebase/remote-config-compat",q0="@firebase/storage",H0="@firebase/storage-compat",z0="@firebase/firestore",W0="@firebase/firestore-compat",K0="firebase",G0="10.1.0";/**
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
 */const gc="[DEFAULT]",Q0={[pc]:"fire-core",[A0]:"fire-core-compat",[R0]:"fire-analytics",[b0]:"fire-analytics-compat",[S0]:"fire-app-check",[P0]:"fire-app-check-compat",[C0]:"fire-auth",[k0]:"fire-auth-compat",[x0]:"fire-rtdb",[D0]:"fire-rtdb-compat",[O0]:"fire-fn",[N0]:"fire-fn-compat",[V0]:"fire-iid",[M0]:"fire-iid-compat",[L0]:"fire-fcm",[U0]:"fire-fcm-compat",[F0]:"fire-perf",[$0]:"fire-perf-compat",[B0]:"fire-rc",[j0]:"fire-rc-compat",[q0]:"fire-gcs",[H0]:"fire-gcs-compat",[z0]:"fire-fst",[W0]:"fire-fst-compat","fire-js":"fire-js",[K0]:"fire-js-all"};/**
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
 */const Ko=new Map,mc=new Map;function J0(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yr(t){const e=t.name;if(mc.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of Ko.values())J0(n,t);return!0}function Na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new xi("app","Firebase",X0);/**
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
 */class Y0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ar=G0;function Gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=qg()),!n)throw jn.create("no-options");const i=Ko.get(s);if(i){if(Wo(n,i.options)&&Wo(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new o0(s);for(const l of mc.values())o.addComponent(l);const a=new Y0(n,r,o);return Ko.set(s,a),a}function Eu(t=gc){const e=Ko.get(t);if(!e&&t===gc&&qg())return Gg();if(!e)throw jn.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=Q0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}yr(new Gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Z0="firebase-heartbeat-database",eA=1,ci="firebase-heartbeat-store";let Pl=null;function Qg(){return Pl||(Pl=v0(Z0,eA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Pl}async function tA(t){try{return await(await Qg()).transaction(ci).objectStore(ci).get(Jg(t))}catch(e){if(e instanceof ln)_r.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function Wd(t,e){try{const r=(await Qg()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Jg(t)),await r.done}catch(n){if(n instanceof ln)_r.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function Jg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nA=1024,rA=30*24*60*60*1e3;class sA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=rA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kd(),{heartbeatsToSend:n,unsentEntries:r}=iA(this._heartbeatsCache.heartbeats),s=zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Kd(){return new Date().toISOString().substring(0,10)}function iA(t,e=nA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GI()?QI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gd(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aA(t){yr(new Gn("platform-logger",e=>new T0(e),"PRIVATE")),yr(new Gn("heartbeat",e=>new sA(e),"PRIVATE")),Zt(pc,zd,t),Zt(pc,zd,"esm2017"),Zt("fire-js","")}aA("");var lA="firebase",cA="10.1.0";/**
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
 */Zt(lA,cA,"app");const uA={apiKey:"AIzaSyAKS1uKR-Vdhg_poUn3Sz47h_R8HV84Z8w",authDomain:"fb-testing-4d315.firebaseapp.com",databaseURL:"https://fb-testing-4d315-default-rtdb.firebaseio.com",projectId:"fb-testing-4d315",storageBucket:"fb-testing-4d315.appspot.com",messagingSenderId:"523525819842",appId:"1:523525819842:web:6b827f49670b8e543c5a5b"},Oi=Gg(uA);var hA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,wu=wu||{},Y=hA||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ni(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dA(t){return Object.prototype.hasOwnProperty.call(t,Sl)&&t[Sl]||(t[Sl]=++fA)}var Sl="closure_uid_"+(1e9*Math.random()>>>0),fA=0;function pA(t,e,n){return t.call.apply(t.bind,arguments)}function gA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=pA:ut=gA,ut.apply(null,arguments)}function uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Yn(){this.s=this.s,this.o=this.o}var mA=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),mA!=0)&&dA(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var _A=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function ui(t){return/^[\s\xa0]*$/.test(t)}function Ma(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return Ma().indexOf(t)!=-1}function Iu(t){return Iu[" "](t),t}Iu[" "]=function(){};function yA(t,e){var n=ub;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var vA=Qt("Opera"),rs=Qt("Trident")||Qt("MSIE"),Yg=Qt("Edge"),_c=Yg||rs,Zg=Qt("Gecko")&&!(Ma().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),EA=Ma().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function em(){var t=Y.document;return t?t.documentMode:void 0}var yc;e:{var Cl="",kl=function(){var t=Ma();if(Zg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yg)return/Edge\/([\d\.]+)/.exec(t);if(rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(EA)return/WebKit\/(\S+)/.exec(t);if(vA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kl&&(Cl=kl?kl[1]:""),rs){var xl=em();if(xl!=null&&xl>parseFloat(Cl)){yc=String(xl);break e}}yc=Cl}var vc;if(Y.document&&rs){var Jd=em();vc=Jd||parseInt(yc,10)||void 0}else vc=void 0;var wA=vc;function hi(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zg){e:{try{Iu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hi.$.h.call(this)}}Je(hi,ht);var TA={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vi="closure_listenable_"+(1e6*Math.random()|0),IA=0;function AA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++IA,this.fa=this.ia=!1}function La(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Au(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function bA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tm(t){const e={};for(const n in t)e[n]=t[n];return e}const Xd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Xd.length;i++)n=Xd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new AA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ec(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Xg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(La(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var bu="closure_lm_"+(1e6*Math.random()|0),Dl={};function rm(t,e,n,r,s){if(r&&r.once)return im(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);return null}return n=Su(n),t&&t[Vi]?t.O(e,n,Ni(r)?!!r.capture:!!r,s):sm(t,e,n,!1,r,s)}function sm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ni(s)?!!s.capture:!!s,a=Pu(t);if(a||(t[bu]=a=new Ua(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=RA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_A||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(am(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RA(){function t(n){return e.call(t.src,t.listener,n)}const e=PA;return t}function im(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)im(t,e[i],n,r,s);return null}return n=Su(n),t&&t[Vi]?t.P(e,n,Ni(r)?!!r.capture:!!r,s):sm(t,e,n,!0,r,s)}function om(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)om(t,e[i],n,r,s);else r=Ni(r)?!!r.capture:!!r,n=Su(n),t&&t[Vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wc(i,n,r,s),-1<n&&(La(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wc(e,n,r,s)),(n=-1<t?e[t]:null)&&Ru(n))}function Ru(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vi])Ec(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(am(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pu(e))?(Ec(n,t),n.h==0&&(n.src=null,e[bu]=null)):La(t)}}}function am(t){return t in Dl?Dl[t]:Dl[t]="on"+t}function PA(t,e){if(t.fa)t=!0;else{e=new hi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ru(t),t=n.call(r,e)}return t}function Pu(t){return t=t[bu],t instanceof Ua?t:null}var Ol="__closure_events_fn_"+(1e9*Math.random()>>>0);function Su(t){return typeof t=="function"?t:(t[Ol]||(t[Ol]=function(e){return t.handleEvent(e)}),t[Ol])}function Qe(){Yn.call(this),this.i=new Ua(this),this.S=this,this.J=null}Je(Qe,Yn);Qe.prototype[Vi]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){om(this,t,e,n,r)};function tt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var s=e;e=new ht(r,t),nm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ho(o,r,!0,e)&&s}if(o=e.g=t,s=ho(o,r,!0,e)&&s,s=ho(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ho(o,r,!1,e)&&s}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)La(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ec(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Cu=Y.JSON.stringify;class SA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function CA(){var t=ku;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kA{constructor(){this.h=this.g=null}add(e,n){const r=lm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lm=new SA(()=>new xA,t=>t.reset());class xA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function OA(t){Y.setTimeout(()=>{throw t},0)}let di,fi=!1,ku=new kA,cm=()=>{const t=Y.Promise.resolve(void 0);di=()=>{t.then(NA)}};var NA=()=>{for(var t;t=CA();){try{t.h.call(t.g)}catch(n){OA(n)}var e=lm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fi=!1};function Fa(t,e){Qe.call(this),this.h=t||1,this.g=e||Y,this.j=ut(this.qb,this),this.l=Date.now()}Je(Fa,Qe);V=Fa.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(xu(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Fa.$.N.call(this),xu(this),delete this.g};function Du(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function um(t){t.g=Du(()=>{t.g=null,t.i&&(t.i=!1,um(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VA extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:um(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Yn.call(this),this.h=t,this.g={}}Je(pi,Yn);var Yd=[];function hm(t,e,n,r){Array.isArray(n)||(n&&(Yd[0]=n.toString()),n=Yd);for(var s=0;s<n.length;s++){var i=rm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dm(t){Au(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ru(e)},t),t.g={}}pi.prototype.N=function(){pi.$.N.call(this),dm(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $a(){this.g=!0}$a.prototype.Ea=function(){this.g=!1};function MA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function LA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+FA(t,n)+(r?" "+r:"")})}function UA(t,e){t.info(function(){return"TIMEOUT: "+e})}$a.prototype.info=function(){};function FA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Cu(n)}catch{return e}}var br={},Zd=null;function Ba(){return Zd=Zd||new Qe}br.Ta="serverreachability";function fm(t){ht.call(this,br.Ta,t)}Je(fm,ht);function gi(t){const e=Ba();tt(e,new fm(e))}br.STAT_EVENT="statevent";function pm(t,e){ht.call(this,br.STAT_EVENT,t),this.stat=e}Je(pm,ht);function _t(t){const e=Ba();tt(e,new pm(e,t))}br.Ua="timingevent";function gm(t,e){ht.call(this,br.Ua,t),this.size=e}Je(gm,ht);function Mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var ja={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ou(){}Ou.prototype.h=null;function ef(t){return t.h||(t.h=t.i())}function _m(){}var Li={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nu(){ht.call(this,"d")}Je(Nu,ht);function Vu(){ht.call(this,"c")}Je(Vu,ht);var Tc;function qa(){}Je(qa,Ou);qa.prototype.g=function(){return new XMLHttpRequest};qa.prototype.i=function(){return{}};Tc=new qa;function Ui(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pi(this),this.P=$A,t=_c?125:void 0,this.V=new Fa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ym}function ym(){this.i=null,this.g="",this.h=!1}var $A=45e3,Ic={},Go={};V=Ui.prototype;V.setTimeout=function(t){this.P=t};function Ac(t,e,n){t.L=1,t.v=za(yn(e)),t.s=n,t.S=!0,vm(t,null)}function vm(t,e){t.G=Date.now(),Fi(t),t.A=yn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Pm(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ym,t.g=Gm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new VA(ut(t.Pa,t,t.g),t.O)),hm(t.U,t.g,"readystatechange",t.nb),e=t.I?tm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),gi(),MA(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||_c||this.g&&(this.h.h||this.g.ja()||sf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?gi(3):gi(2)),Ha(this);var n=this.g.da();this.ca=n;t:if(Em(this)){var r=sf(this.g);t="";var s=r.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),Gs(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ui(a)){var c=a;break t}}c=null}if(n=c)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bc(this,n);else{this.i=!1,this.o=3,_t(12),lr(this),Gs(this);break e}}this.S?(wm(this,u,o),_c&&this.i&&u==3&&(hm(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),bc(this,o)),u==4&&lr(this),this.i&&!this.J&&(u==4?Hm(this.l,this):(this.i=!1,Fi(this)))}else ab(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),lr(this),Gs(this)}}}catch{}finally{}};function Em(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wm(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=BA(t,n),s==Go){e==4&&(t.o=4,_t(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ic){t.o=4,_t(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),bc(t,s);Em(t)&&s!=Go&&s!=Ic&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bu(e),e.M=!0,_t(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),Gs(t))}V.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.C<e.length&&(Ha(this),wm(this,t,e),this.i&&t!=4&&Fi(this))}};function BA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Go:(n=Number(e.substring(n,r)),isNaN(n)?Ic:(r+=1,r+n>e.length?Go:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,lr(this)};function Fi(t){t.Y=Date.now()+t.P,Tm(t,t.P)}function Tm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mi(ut(t.lb,t),e)}function Ha(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(UA(this.j,this.A),this.L!=2&&(gi(),_t(17)),lr(this),this.o=2,Gs(this)):Tm(this,this.Y-t)};function Gs(t){t.l.H==0||t.J||Hm(t.l,t)}function lr(t){Ha(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,xu(t.V),dm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function bc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Rc(n.i,t))){if(!t.K&&Rc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xo(n),Ga(n);else break e;$u(n),_t(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Mi(ut(n.ib,n),6e3));if(1>=km(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else cr(n,11)}else if((t.K||n.g==t)&&Xo(n),!ui(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Mu(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Se(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Km(r,r.J?r.pa:null,r.Y),o.K){xm(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ha(a),Fi(a)),r.g=o}else jm(r);0<n.j.length&&Qa(n)}else c[0]!="stop"&&c[0]!="close"||cr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?cr(n,7):Fu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}gi(4)}catch{}}function jA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Im(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qA(t),r=jA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pr){this.h=t.h,Qo(this,t.j),this.s=t.s,this.g=t.g,Jo(this,t.m),this.l=t.l;var e=t.i,n=new mi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tf(this,n),this.o=t.o}else t&&(e=String(t).match(Am))?(this.h=!1,Qo(this,e[1]||"",!0),this.s=Us(e[2]||""),this.g=Us(e[3]||"",!0),Jo(this,e[4]),this.l=Us(e[5]||"",!0),tf(this,e[6]||"",!0),this.o=Us(e[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,nf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,nf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?KA:WA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,QA)),t.join("")};function yn(t){return new pr(t)}function Qo(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tf(t,e,n){e instanceof mi?(t.i=e,JA(t.i,t.h)):(n||(e=Fs(e,GA)),t.i=new mi(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function za(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nf=/[#\/\?@]/g,WA=/[#\?:]/g,KA=/[#\?]/g,GA=/[#\?@]/g,QA=/#/g;function mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zn(t){t.g||(t.g=new Map,t.h=0,t.i&&HA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=mi.prototype;V.add=function(t,e){Zn(this),this.i=null,t=ys(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bm(t,e){Zn(t),e=ys(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Rm(t,e){return Zn(t),e=ys(t,e),t.g.has(e)}V.forEach=function(t,e){Zn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Zn(this);let e=[];if(typeof t=="string")Rm(this,t)&&(e=e.concat(this.g.get(ys(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Zn(this),this.i=null,t=ys(this,t),Rm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pm(t,e,n){bm(t,e),0<n.length&&(t.i=null,t.g.set(ys(t,e),Tu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ys(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JA(t,e){e&&!t.j&&(Zn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(bm(this,r),Pm(this,s,n))},t)),t.j=e}var XA=class{constructor(t,e){this.g=t,this.map=e}};function Sm(t){this.l=t||YA,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YA=10;function Cm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function km(t){return t.h?1:t.g?t.g.size:0}function Rc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mu(t,e){t.g?t.g.add(e):t.h=e}function xm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sm.prototype.cancel=function(){if(this.i=Dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Tu(t.i)}var ZA=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function eb(){this.g=new ZA}function tb(t,e,n){const r=n||"";try{Im(t,function(s,i){let o=s;Ni(s)&&(o=Cu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function nb(t,e){const n=new $a;if(Y.Image){const r=new Image;r.onload=uo(fo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=uo(fo,n,r,"TestLoadImage: error",!1,e),r.onabort=uo(fo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=uo(fo,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function $i(t){this.l=t.fc||null,this.j=t.ob||!1}Je($i,Ou);$i.prototype.g=function(){return new Wa(this.l,this.j)};$i.prototype.i=function(t){return function(){return t}}({});function Wa(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Wa,Qe);var Lu=0;V=Wa.prototype;V.open=function(t,e){if(this.readyState!=Lu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_i(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=Lu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Om(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Om(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bi(this):_i(this),this.readyState==3&&Om(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Bi(this))};V.Ya=function(t){this.g&&(this.response=t,Bi(this))};V.ka=function(){this.g&&Bi(this)};function Bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_i(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rb=Y.JSON.parse;function Ue(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nm,this.L=this.M=!1}Je(Ue,Qe);var Nm="",sb=/^https?$/i,ib=["POST","PUT"];V=Ue.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tc.g(),this.C=this.u?ef(this.u):ef(Tc),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){rf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Y.FormData&&t instanceof Y.FormData,!(0<=Xg(ib,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lm(this),0<this.B&&((this.L=ob(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Du(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rf(this,i)}};function ob(t){return rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof wu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function rf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vm(t),Ka(t)}function Vm(t){t.F||(t.F=!0,tt(t,"complete"),tt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),Ka(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ka(this,!0)),Ue.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Mm(this):this.kb())};V.kb=function(){Mm(this)};function Mm(t){if(t.h&&typeof wu<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)Du(t.La,0,t);else if(tt(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Am)[1]||null;!s&&Y.self&&Y.self.location&&(s=Y.self.location.protocol.slice(0,-1)),r=!sb.test(s?s.toLowerCase():"")}n=r}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var i=2<Jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Vm(t)}}finally{Ka(t)}}}}function Ka(t,e){if(t.g){Lm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Lm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rb(e)}};function sf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ab(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ui(t[r]))continue;var n=DA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}bA(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Um(t){let e="";return Au(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Uu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Um(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fm(t){this.Ga=0,this.j=[],this.l=new $a,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xs("baseRetryDelayMs",5e3,t),this.hb=xs("retryDelaySeedMs",1e4,t),this.eb=xs("forwardChannelMaxRetries",2,t),this.xa=xs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Sm(t&&t.concurrentRequestLimit),this.Ja=new eb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=Fm.prototype;V.ra=8;V.H=1;function Fu(t){if($m(t),t.H==3){var e=t.W++,n=yn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),ji(t,n),e=new Ui(t,t.l,e),e.L=2,e.v=za(yn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Fi(e)}Wm(t)}function Ga(t){t.g&&(Bu(t),t.g.cancel(),t.g=null)}function $m(t){Ga(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Xo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Qa(t){if(!Cm(t.i)&&!t.m){t.m=!0;var e=t.Na;di||cm(),fi||(di(),fi=!0),ku.add(e,t),t.C=0}}function lb(t,e){return km(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Mi(ut(t.Na,t,e),zm(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ui(this,this.l,t);let i=this.s;if(this.U&&(i?(i=tm(i),nm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bm(this,s,e),n=yn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),ji(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Um(i)))+"&"+e:this.o&&Uu(n,this.o,i)),Mu(this.i,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.aa=!0,Ac(s,n,null)):Ac(s,n,e),this.H=2}}else this.H==3&&(t?of(this,t):this.j.length==0||Cm(this.i)||of(this))};function of(t,e){var n;e?n=e.m:n=t.W++;const r=yn(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),ji(t,r),t.o&&t.s&&Uu(r,t.o,t.s),n=new Ui(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Bm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Mu(t.i,n),Ac(n,r,e)}function ji(t,e){t.na&&Au(t.na,function(n,r){Se(e,r,n)}),t.h&&Im({},function(n,r){Se(e,r,n)})}function Bm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ut(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{tb(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function jm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;di||cm(),fi||(di(),fi=!0),ku.add(e,t),t.A=0}}function $u(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Mi(ut(t.Ma,t),zm(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,qm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Mi(ut(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),Ga(this),qm(this))};function Bu(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function qm(t){t.g=new Ui(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=yn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),ji(t,e),t.o&&t.s&&Uu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=za(yn(e)),n.s=null,n.S=!0,vm(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ga(this),$u(this),_t(19))};function Xo(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Hm(t,e){var n=null;if(t.g==e){Xo(t),Bu(t),t.g=null;var r=2}else if(Rc(t.i,e))n=e.F,xm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Ba(),tt(r,new gm(r,n)),Qa(t)}else jm(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&lb(t,e)||r==2&&$u(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}}function zm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function cr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ut(t.pb,t);n||(n=new pr("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Qo(n,"https"),za(n)),nb(n.toString(),r)}else _t(2);t.H=0,t.h&&t.h.za(e),Wm(t),$m(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function Wm(t){if(t.H=0,t.ma=[],t.h){const e=Dm(t.i);(e.length!=0||t.j.length!=0)&&(Qd(t.ma,e),Qd(t.ma,t.j),t.i.i.length=0,Tu(t.j),t.j.length=0),t.h.ya()}}function Km(t,e,n){var r=n instanceof pr?yn(n):new pr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Jo(r,r.m);else{var s=Y.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new pr(null);r&&Qo(i,r),e&&(i.g=e),s&&Jo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),ji(t,r),r}function Gm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new $i({ob:!0})):new Ue(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qm(){}V=Qm.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Yo(){if(rs&&!(10<=Number(wA)))throw Error("Environmental error: no available transport.")}Yo.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Qe.call(this),this.g=new Fm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ui(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ui(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}Je(St,Qe);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Km(t,null,t.Y),Qa(t)};St.prototype.close=function(){Fu(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cu(t),t=n);e.j.push(new XA(e.fb++,t)),e.H==3&&Qa(e)};St.prototype.N=function(){this.g.h=null,delete this.j,Fu(this.g),delete this.g,St.$.N.call(this)};function Jm(t){Nu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(Jm,Nu);function Xm(){Vu.call(this),this.status=1}Je(Xm,Vu);function vs(t){this.g=t}Je(vs,Qm);vs.prototype.Ba=function(){tt(this.g,"a")};vs.prototype.Aa=function(t){tt(this.g,new Jm(t))};vs.prototype.za=function(t){tt(this.g,new Xm)};vs.prototype.ya=function(){tt(this.g,"b")};function cb(){this.blockSize=-1}function Bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(Bt,cb);Bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Nl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Nl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Nl(this,r),s=0;break}}this.h=s,this.i+=e};Bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var ub={};function ju(t){return-128<=t&&128>t?yA(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Xt(t){if(isNaN(t)||!isFinite(t))return Wr;if(0>t)return Ze(Xt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Pc;return new Te(e,0)}function Ym(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(Ym(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xt(Math.pow(e,8)),r=Wr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Xt(Math.pow(e,i)),r=r.R(i).add(Xt(o))):(r=r.R(n),r=r.add(Xt(o)))}return r}var Pc=4294967296,Wr=ju(0),Sc=ju(1),af=ju(16777216);V=Te.prototype;V.ea=function(){if(xt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Pc+r)*e,e*=Pc}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(fn(this))return"0";if(xt(this))return"-"+Ze(this).toString(t);for(var e=Xt(Math.pow(t,6)),n=this,r="";;){var s=ea(n,e).g;n=Zo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,fn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function fn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xt(t){return t.h==-1}V.X=function(t){return t=Zo(this,t),xt(t)?-1:fn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(Sc)}V.abs=function(){return xt(this)?Ze(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function Zo(t,e){return t.add(Ze(e))}V.R=function(t){if(fn(this)||fn(t))return Wr;if(xt(this))return xt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(xt(t))return Ze(this.R(Ze(t)));if(0>this.X(af)&&0>t.X(af))return Xt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,po(n,2*r+2*s),n[2*r+2*s+1]+=i*l,po(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,po(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,po(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function po(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ds(t,e){this.g=t,this.h=e}function ea(t,e){if(fn(e))throw Error("division by zero");if(fn(t))return new Ds(Wr,Wr);if(xt(t))return e=ea(Ze(t),e),new Ds(Ze(e.g),Ze(e.h));if(xt(e))return e=ea(t,Ze(e)),new Ds(Ze(e.g),e.h);if(30<t.g.length){if(xt(t)||xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Sc,r=e;0>=r.X(t);)n=lf(n),r=lf(r);var s=Nr(n,1),i=Nr(r,1);for(r=Nr(r,2),n=Nr(n,2);!fn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Nr(r,1),n=Nr(n,1)}return e=Zo(t,s.R(e)),new Ds(s,e)}for(s=Wr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Xt(n),o=i.R(e);xt(o)||0<o.X(t);)n-=r,i=Xt(n),o=i.R(e);fn(i)&&(i=Sc),s=s.add(i),t=Zo(t,o)}return new Ds(s,t)}V.gb=function(t){return ea(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function lf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function Nr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}Yo.prototype.createWebChannel=Yo.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;ja.NO_ERROR=0;ja.TIMEOUT=8;ja.HTTP_ERROR=6;mm.COMPLETE="complete";_m.EventType=Li;Li.OPEN="a";Li.CLOSE="b";Li.ERROR="c";Li.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;Bt.prototype.digest=Bt.prototype.l;Bt.prototype.reset=Bt.prototype.reset;Bt.prototype.update=Bt.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Xt;Te.fromString=Ym;var hb=function(){return new Yo},db=function(){return Ba()},Vl=ja,fb=mm,pb=br,cf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gb=$i,go=_m,mb=Ue,_b=Bt,Kr=Te;const uf="@firebase/firestore";/**
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
 */const vr=new yu("@firebase/firestore");function hf(){return vr.logLevel}function j(t,...e){if(vr.logLevel<=ge.DEBUG){const n=e.map(qu);vr.debug(`Firestore (${Es}): ${t}`,...n)}}function vn(t,...e){if(vr.logLevel<=ge.ERROR){const n=e.map(qu);vr.error(`Firestore (${Es}): ${t}`,...n)}}function ss(t,...e){if(vr.logLevel<=ge.WARN){const n=e.map(qu);vr.warn(`Firestore (${Es}): ${t}`,...n)}}function qu(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function ke(t,e){t||X()}function ne(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Eb{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new Zm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new ot(e)}}class wb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ib{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ab{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new Ib(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class e_{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new He(0,0))}static max(){return new ee(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends yi{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const Rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends yi{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return Rb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ce.fromString(e))}static fromName(e){return new H(Ce.fromString(e).popFirst(5))}static empty(){return new H(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ce(e.slice()))}}function Pb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Qn(s,H.empty(),e)}function Sb(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(ee.min(),H.empty(),-1)}static max(){return new Qn(ee.max(),H.empty(),-1)}}function Cb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==kb)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Hi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Hu.ae=-1;function Ja(t){return t==null}function ta(t){return t===0&&1/t==-1/0}function Db(t){return typeof t=="number"&&Number.isInteger(t)&&!ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ff(this.data.getIterator())}getIteratorFrom(e){return new ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new dt(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n_("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(ke(!!t),typeof t=="string"){let e=0;const n=Ob.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function zu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wu(t){const e=t.mapValue.fields.__previous_value__;return zu(e)?Wu(e):e}function vi(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class Nb{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zu(t)?4:Vb(t)?9007199254740991:10:X()}function on(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jn(s.timestampValue),a=Jn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),a=je(i.doubleValue);return o===a?ta(o)===ta(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(df(o)!==df(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!on(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function wi(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=je(i.integerValue||i.doubleValue),l=je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return pf(t.timestampValue,e.timestampValue);case 4:return pf(vi(t),vi(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Er(i),l=Er(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ye(a[c],l[c]);if(u!==0)return u}return ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(je(i.latitude),je(o.latitude));return a!==0?a:ye(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=os(a[c],l[c]);if(u)return u}return ye(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===_o.mapValue&&o===_o.mapValue)return 0;if(i===_o.mapValue)return 1;if(o===_o.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ye(l[h],u[h]);if(d!==0)return d;const f=os(a[l[h]],c[u[h]]);if(f!==0)return f}return ye(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Jn(t),r=Jn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function as(t){return Cc(t)}function Cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Cc(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function gf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kc(t){return!!t&&"integerValue"in t}function Ku(t){return!!t&&"arrayValue"in t}function mf(t){return!!t&&"nullValue"in t}function _f(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Qs(this.value))}}function r_(t){const e=[];return ws(t.fields,(n,r)=>{const s=new ct([n]);if(ko(r)){const i=r_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new at(e,0,ee.min(),ee.min(),ee.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,ee.min(),ee.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,ee.min(),ee.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function yf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=os(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Js{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class s_{}class qe extends s_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ub(e,n,r):n==="array-contains"?new Bb(e,r):n==="in"?new jb(e,r):n==="not-in"?new qb(e,r):n==="array-contains-any"?new Hb(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fb(e,r):new $b(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends s_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new jt(e,n)}matches(e){return i_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function i_(t){return t.op==="and"}function o_(t){return Lb(t)&&i_(t)}function Lb(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function xc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+as(t.value);if(o_(t))return t.filters.map(e=>xc(e)).join(",");{const e=t.filters.map(n=>xc(n)).join(",");return`${t.op}(${e})`}}function a_(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&a_(o,s.filters[a]),!0):!1}(t,e):void X()}function l_(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(l_).join(" ,")+"}"}(t):"Filter"}class Ub extends qe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fb extends qe{constructor(e,n){super(e,"in",n),this.keys=c_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $b extends qe{constructor(e,n){super(e,"not-in",n),this.keys=c_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function c_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Bb extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ku(n)&&wi(n.arrayValue,this.value)}}class jb extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wi(this.value.arrayValue,n)}}class qb extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wi(this.value.arrayValue,n)}}class Hb extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wi(this.value.arrayValue,r))}}/**
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
 */class zb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Ef(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zb(t,e,n,r,s,i,o)}function Gu(t){const e=ne(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.he=n}return e.he}function Qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vf(t.startAt,e.startAt)&&vf(t.endAt,e.endAt)}function Dc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class zi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Wb(t,e,n,r,s,i,o,a){return new zi(t,e,n,r,s,i,o,a)}function u_(t){return new zi(t)}function wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ju(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function d_(t){return t.collectionGroup!==null}function Gr(t){const e=ne(t);if(e.Pe===null){e.Pe=[];const n=Ju(e),r=h_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Js(n)),e.Pe.push(new Js(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Js(ct.keyField(),i))}}}return e.Pe}function En(t){const e=ne(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Ef(e.path,e.collectionGroup,Gr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Gr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Js(i.field,o))}const r=e.endAt?new na(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new na(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ef(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function Oc(t,e){e.getFirstInequalityField(),Ju(t);const n=t.filters.concat([e]);return new zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nc(t,e,n){return new zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Qu(En(t),En(e))&&t.limitType===e.limitType}function f_(t){return`${Gu(En(t))}|lt:${t.limitType}`}function Vc(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>l_(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>as(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>as(s)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function Ya(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=yf(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Gr(r),s)||r.endAt&&!function(o,a,l){const c=yf(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Gr(r),s))}(t,e)}function Kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function p_(t){return(e,n)=>{let r=!1;for(const s of Gr(t)){const i=Gb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gb(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?os(l,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */const Qb=new Ve(H.comparator);function wn(){return Qb}const g_=new Ve(H.comparator);function $s(...t){let e=g_;for(const n of t)e=e.insert(n.key,n);return e}function m_(t){let e=g_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return Xs()}function __(){return Xs()}function Xs(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jb=new Ve(H.comparator),Xb=new dt(H.comparator);function le(...t){let e=Xb;for(const n of t)e=e.add(n);return e}const Yb=new dt(ye);function Zb(){return Yb}/**
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
 */function y_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ta(e)?"-0":e}}function v_(t){return{integerValue:""+t}}function eR(t,e){return Db(e)?v_(e):y_(t,e)}/**
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
 */class Za{constructor(){this._=void 0}}function tR(t,e,n){return t instanceof ra?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zu(i)&&(i=Wu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ti?w_(t,e):t instanceof Ii?T_(t,e):function(s,i){const o=E_(s,i),a=Tf(o)+Tf(s.Te);return kc(o)&&kc(s.Te)?v_(a):y_(s.serializer,a)}(t,e)}function nR(t,e,n){return t instanceof Ti?w_(t,e):t instanceof Ii?T_(t,e):n}function E_(t,e){return t instanceof sa?function(r){return kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ra extends Za{}class Ti extends Za{constructor(e){super(),this.elements=e}}function w_(t,e){const n=I_(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ii extends Za{constructor(e){super(),this.elements=e}}function T_(t,e){let n=I_(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class sa extends Za{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Tf(t){return je(t.integerValue||t.doubleValue)}function I_(t){return Ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof Ii&&s instanceof Ii?is(r.elements,s.elements,on):r instanceof sa&&s instanceof sa?on(r.Te,s.Te):r instanceof ra&&s instanceof ra}(t.transform,e.transform)}class sR{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class el{}function A_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xu(t.key,en.none()):new Wi(t.key,t.data,en.none());{const n=t.data,r=Dt.empty();let s=new dt(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new Lt(s.toArray()),en.none())}}function iR(t,e,n){t instanceof Wi?function(s,i,o){const a=s.value.clone(),l=Af(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Af(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(b_(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof Wi?function(i,o,a,l){if(!xo(i.precondition,o))return a;const c=i.value.clone(),u=bf(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,a,l){if(!xo(i.precondition,o))return a;const c=bf(i.fieldTransforms,l,o),u=o.data;return u.setAll(b_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=E_(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function If(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&is(r,s,(i,o)=>rR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wi extends el{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends el{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,nR(o,a,n[s]))}return r}function bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tR(i,o,e))}return r}class Xu extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aR extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=__();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=A_(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>If(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>If(n,r))}}class Yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return Jb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yu(e,n,r,s)}}/**
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
 */class cR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,ce;function hR(t){switch(t){default:return X();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function R_(t){if(t===void 0)return vn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Be.OK:return A.OK;case Be.CANCELLED:return A.CANCELLED;case Be.UNKNOWN:return A.UNKNOWN;case Be.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Be.INTERNAL:return A.INTERNAL;case Be.UNAVAILABLE:return A.UNAVAILABLE;case Be.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Be.NOT_FOUND:return A.NOT_FOUND;case Be.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Be.ABORTED:return A.ABORTED;case Be.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Be.DATA_LOSS:return A.DATA_LOSS;default:return X()}}(ce=Be||(Be={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Zu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return yo}static getOrCreateInstance(){return yo===null&&(yo=new Zu),yo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let yo=null;/**
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
 */function dR(){return new TextEncoder}/**
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
 */const fR=new Kr([4294967295,4294967295],0);function Rf(t){const e=dR().encode(t),n=new _b;return n.update(e),new Uint8Array(n.digest())}function Pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Kr.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(fR)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Rf(e),[r,s]=Pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new eh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Rf(e),[r,s]=Pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ki.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tl(ee.min(),s,new Ve(ye),wn(),le())}}class Ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ki(r,n,le(),le(),le())}}/**
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
 */class Do{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class P_{constructor(e,n){this.targetId=e,this.pe=n}}class S_{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sf{constructor(){this.ye=0,this.we=kf(),this.Se=pt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=le(),n=le(),r=le();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Ki(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=kf()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class pR{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=wn(),this.$e=Cf(),this.Ue=new Ve(ye)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Dc(a))if(i===0){const l=new H(a.path);this.ze(s,l,at.newNoDocument(l,ee.min()))}else ke(i===1);else{const l=this.et(s);if(l!==i){const c=this.tt(e,l);if(c.status!==0){this.Ye(s);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=Zu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,y){var v,E,b,C,M,k;const K={localCacheCount:f,existenceFilterCount:y.count},U=y.unchangedNames;return U&&(K.bloomFilter={applied:h===0,hashCount:(v=U==null?void 0:U.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(C=(b=(E=U==null?void 0:U.bits)===null||E===void 0?void 0:E.bitmap)===null||b===void 0?void 0:b.length)!==null&&C!==void 0?C:0,padding:(k=(M=U==null?void 0:U.bits)===null||M===void 0?void 0:M.padding)!==null&&k!==void 0?k:0},d&&(K.bloomFilter.mightContain=d)),K}(c.status,(r=c.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Er(i).toUint8Array()}catch(h){if(h instanceof n_)return ss("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new eh(l,o,a)}catch(h){return ss(h instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Dc(a.target)){const l=new H(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,at.newNoDocument(l,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=le();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new tl(e,n,this.Ue,this.Ke,r);return this.Ke=wn(),this.$e=Cf(),this.Ue=new Ve(ye),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Sf,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new dt(ye),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Sf),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Cf(){return new Ve(H.comparator)}function kf(){return new Ve(H.comparator)}const gR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_R=(()=>({and:"AND",or:"OR"}))();class yR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vR(t,e){return ia(t,e.toTimestamp())}function tn(t){return ke(!!t),ee.fromTimestamp(function(n){const r=Jn(n);return new He(r.seconds,r.nanos)}(t))}function th(t,e){return function(r){return new Ce(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function k_(t){const e=Ce.fromString(t);return ke(N_(e)),e}function Lc(t,e){return th(t.databaseId,e.path)}function Ml(t,e){const n=k_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(x_(n))}function Uc(t,e){return th(t.databaseId,e)}function ER(t){const e=k_(t);return e.length===4?Ce.emptyPath():x_(e)}function Fc(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function x_(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xf(t,e,n){return{name:Lc(t,e),fields:n.value.mapValue.fields}}function wR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ke(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:R_(c.code);return new $(u,c.message||"")}(o);n=new S_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ml(t,r.document.name),i=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):ee.min(),a=new Dt({mapValue:{fields:r.document.fields}}),l=at.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Do(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ml(t,r.document),i=r.readTime?tn(r.readTime):ee.min(),o=at.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Do([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ml(t,r.document),i=r.removedTargetIds||[];n=new Do([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uR(s,i),a=r.targetId;n=new P_(a,o)}}return n}function TR(t,e){let n;if(e instanceof Wi)n={update:xf(t,e.key,e.value)};else if(e instanceof Xu)n={delete:Lc(t,e.key)};else if(e instanceof Rr)n={update:xf(t,e.key,e.data),updateMask:xR(e.fieldMask)};else{if(!(e instanceof aR))return X();n={verify:Lc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ti)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ii)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function IR(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?tn(s.updateTime):tn(i);return o.isEqual(ee.min())&&(o=tn(i)),new sR(o,s.transformResults||[])}(n,e))):[]}function AR(t,e){return{documents:[Uc(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Uc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Uc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return O_(jt.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ur(h.field),direction:SR(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Mc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function RR(t){let e=ER(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=D_(h);return d instanceof jt&&o_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Js(Fr(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ja(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new na(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new na(f,d)}(n.endAt)),Wb(e,s,o,i,a,"F",l,c)}function PR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>D_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function SR(t){return gR[t]}function CR(t){return mR[t]}function kR(t){return _R[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Fr(t){return ct.fromServerFormat(t.fieldPath)}function O_(t){return t instanceof qe?function(n){if(n.op==="=="){if(_f(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(mf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_f(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(mf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:CR(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(s=>O_(s));return r.length===1?r[0]:{compositeFilter:{op:kR(n.op),filters:r}}}(t):X()}function xR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function N_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ln{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DR{constructor(e){this.ct=e}}function OR(t){const e=RR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nc(e,e.limit,"L"):e}/**
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
 */class NR{constructor(){this.sn=new VR}addToCollectionParentIndex(e,n){return this.sn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Qn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class VR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Ce.comparator)).toArray()}}/**
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
 */class ls{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new ls(0)}static On(){return new ls(-1)}}/**
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
 */class MR{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class LR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ys(r.mutation,s,Lt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$s();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=wn();const o=Xs(),a=function(){return Xs()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Rr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ys(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new LR(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xs();let s=new Ve((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Lt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||le()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=__();u.forEach(d=>{if(!i.has(d)){const f=A_(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return H.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):d_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(ur());let a=-1,l=i;return o.next(c=>S.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:m_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=$s();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const l=function(u,h){return new zi(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,at.newInvalidDocument(c)))});let o=$s();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Ys(c.mutation,l,Lt.empty(),He.now()),Ya(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class FR{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return S.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:OR(s.bundledQuery),readTime:tn(s.readTime)}}(n)),S.resolve()}}/**
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
 */class $R{constructor(){this.overlays=new Ve(H.comparator),this.cr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=ur(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=ur(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ur(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return S.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cR(n,r));let i=this.cr.get(n);i===void 0&&(i=le(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class nh{constructor(){this.lr=new dt(We.hr),this.Pr=new dt(We.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new We(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new We(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new H(new Ce([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new H(new Ce([])),r=new We(n,e),s=new We(n,e+1);let i=le();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return H.comparator(e.key,n.key)||ye(e.mr,n.mr)}static Ir(e,n){return ye(e.mr,n.mr)||H.comparator(e.key,n.key)}}/**
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
 */class BR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new dt(We.hr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(ye);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),S.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new We(new H(i),0);let a=new dt(ye);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.mr)),!0)},o),S.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return S.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new We(n,0),s=this.pr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jR{constructor(e){this.Dr=e,this.docs=function(){return new Ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wn();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Cb(Sb(u),r)<=0||(s.has(u.key)||Ya(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qR(this)}getSize(e){return S.resolve(this.size)}}class qR extends MR{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class HR{constructor(e){this.persistence=e,this.Cr=new Ts(n=>Gu(n),Qu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new nh,this.targetCount=0,this.Or=ls.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),S.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Ln(n),S.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Mr.containsKey(n))}}/**
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
 */class zR{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Hu(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new HR(this),this.indexManager=new NR,this.remoteDocumentCache=function(s){return new jR(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new DR(n),this.Qr=new FR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $R,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new BR(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new WR(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return S.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class WR extends xb{constructor(e){super(),this.currentSequenceNumber=e}}class rh{constructor(e){this.persistence=e,this.Wr=new nh,this.Gr=null}static zr(e){return new rh(e)}get jr(){if(this.Gr)return this.Gr;throw X()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.jr,r=>{const s=H.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return S.or([()=>S.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class sh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sh(e,n.fromCache,r,s)}}/**
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
 */class KR{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(wf(n))return S.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nc(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Nc(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,r,s){return wf(n)||s.isEqual(ee.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(hf()<=ge.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vc(n)),this.ji(e,o,n,Pb(s,-1)))})}Gi(e,n){let r=new dt(p_(e));return n.forEach((s,i)=>{Ya(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return hf()<=ge.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Vc(n)),this.Ki.getDocumentsMatchingQuery(e,n,Qn.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class GR{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Ve(ye),this.Yi=new Ts(i=>Gu(i),Qu),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function QR(t,e,n,r){return new GR(t,e,n,r)}async function V_(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=le();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function JR(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=S.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(l,y)).next(v=>{const E=c.docVersions.get(y);ke(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function M_(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function XR(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(pt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(v,E,b){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(i,f))});let l=wn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(YR(i,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!r.isEqual(ee.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ji=s,i))}function YR(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:s}})}function ZR(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eP(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function $c(t,e,n){const r=ne(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Df(t,e,n){const r=ne(t);let s=ee.min(),i=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ne(l),d=h.Yi.get(u);return d!==void 0?S.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(r,o,En(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:le())).next(a=>(tP(r,Kb(e),a),{documents:a,ss:i})))}function tP(t,e,n){let r=t.Zi.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}class Of{constructor(){this.activeTargetIds=Zb()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nP{constructor(){this.Hs=new Of,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Of,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rP{Ys(e){}shutdown(){}}/**
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
 */class Nf{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vo=null;function Ll(){return vo===null?vo=function(){return 268435456+Math.round(2147483648*Math.random())}():vo++,"0x"+vo.toString(16)}/**
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
 */const sP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iP{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const it="WebChannelConnection";class oP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=Ll(),l=this.mo(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,i,o),this.po(n,l,c,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ss("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=sP[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=Ll();return new Promise((o,a)=>{const l=new mb;l.setWithCredentials(!0),l.listenOnce(fb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vl.NO_ERROR:const u=l.getResponseJson();j(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Vl.TIMEOUT:j(it,`RPC '${e}' ${i} timed out`),a(new $(A.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const h=l.getStatus();if(j(it,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const b=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(f.status);a(new $(y,f.message))}else a(new $(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(A.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{j(it,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);j(it,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}wo(e,n,r){const s=Ll(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hb(),a=db(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new gb({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");j(it,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const y=new iP({so:E=>{f?j(it,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(j(it,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),j(it,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,b,C)=>{E.listen(b,M=>{try{C(M)}catch(k){setTimeout(()=>{throw k},0)}})};return v(h,go.EventType.OPEN,()=>{f||j(it,`RPC '${e}' stream ${s} transport opened.`)}),v(h,go.EventType.CLOSE,()=>{f||(f=!0,j(it,`RPC '${e}' stream ${s} transport closed`),y.Po())}),v(h,go.EventType.ERROR,E=>{f||(f=!0,ss(it,`RPC '${e}' stream ${s} transport errored:`,E),y.Po(new $(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,go.EventType.MESSAGE,E=>{var b;if(!f){const C=E.data[0];ke(!!C);const M=C,k=M.error||((b=M[0])===null||b===void 0?void 0:b.error);if(k){j(it,`RPC '${e}' stream ${s} received error:`,k);const K=k.status;let U=function(te){const be=Be[te];if(be!==void 0)return R_(be)}(K),pe=k.message;U===void 0&&(U=A.INTERNAL,pe="Unknown error status: "+K+" with message "+k.message),f=!0,y.Po(new $(U,pe)),h.close()}else j(it,`RPC '${e}' stream ${s} received:`,C),y.Io(C)}}),v(a,pb.STAT_EVENT,E=>{E.stat===cf.PROXY?j(it,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===cf.NOPROXY&&j(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function Ul(){return typeof document<"u"?document:null}/**
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
 */function nl(t){return new yR(t,!0)}/**
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
 */class L_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class U_{constructor(e,n,r,s,i,o,a,l){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new L_(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new $(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aP extends U_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=wR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?tn(o.readTime):ee.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Fc(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Dc(l)?{documents:AR(i,l)}:{query:bR(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=C_(i,o.resumeToken);const c=Mc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=ia(i,o.snapshotVersion.toTimestamp());const c=Mc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=PR(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Fc(this.serializer),n.removeTarget=e,this.Ho(n)}}class lP extends U_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=IR(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.u_(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Fc(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TR(this.serializer,r))};this.Ho(n)}}/**
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
 */class cP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new $(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(A.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(A.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class uP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(vn(n),this.d_=!1):j("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class hP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Pr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ne(l);c.y_.add(4),await Gi(c),c.b_.set("Unknown"),c.y_.delete(4),await rl(c)}(this))})}),this.b_=new uP(r,s)}}async function rl(t){if(Pr(t))for(const e of t.w_)await e(!0)}async function Gi(t){for(const e of t.w_)await e(!1)}function F_(t,e){const n=ne(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),ah(n)?oh(n):Is(n).Uo()&&ih(n,e))}function $_(t,e){const n=ne(t),r=Is(n);n.p_.delete(e),r.Uo()&&B_(n,e),n.p_.size===0&&(r.Uo()?r.zo():Pr(n)&&n.b_.set("Unknown"))}function ih(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).i_(e)}function B_(t,e){t.D_.Be(e),Is(t).s_(e)}function oh(t){t.D_=new pR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.b_.A_()}function ah(t){return Pr(t)&&!Is(t).$o()&&t.p_.size>0}function Pr(t){return ne(t).y_.size===0}function j_(t){t.D_=void 0}async function dP(t){t.p_.forEach((e,n)=>{ih(t,e)})}async function fP(t,e){j_(t),ah(t)?(t.b_.m_(e),oh(t)):t.b_.set("Unknown")}async function pP(t,e,n){if(t.b_.set("Online"),e instanceof S_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof Do?t.D_.We(e):e instanceof P_?t.D_.Ze(e):t.D_.je(e),!n.isEqual(ee.min()))try{const r=await M_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.p_.get(c);u&&i.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.p_.get(l);if(!u)return;i.p_.set(l,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),B_(i,l);const h=new Ln(u.target,l,c,u.sequenceNumber);ih(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!Hi(e))throw e;t.y_.add(1),await Gi(t),t.b_.set("Offline"),n||(n=()=>M_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await rl(t)})}function q_(t,e){return e().catch(n=>oa(t,n,e))}async function sl(t){const e=ne(t),n=Xn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;gP(e);)try{const s=await ZR(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,mP(e,s)}catch(s){await oa(e,s)}H_(e)&&z_(e)}function gP(t){return Pr(t)&&t.g_.length<10}function mP(t,e){t.g_.push(e);const n=Xn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function H_(t){return Pr(t)&&!Xn(t).$o()&&t.g_.length>0}function z_(t){Xn(t).start()}async function _P(t){Xn(t).l_()}async function yP(t){const e=Xn(t);for(const n of t.g_)e.a_(n.mutations)}async function vP(t,e,n){const r=t.g_.shift(),s=Yu.from(r,e,n);await q_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sl(t)}async function EP(t,e){e&&Xn(t).__&&await async function(r,s){if(function(o){return hR(o)&&o!==A.ABORTED}(s.code)){const i=r.g_.shift();Xn(r).Go(),await q_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sl(r)}}(t,e),H_(t)&&z_(t)}async function Vf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Pr(n);n.y_.add(3),await Gi(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await rl(n)}async function wP(t,e){const n=ne(t);e?(n.y_.delete(2),await rl(n)):e||(n.y_.add(2),await Gi(n),n.b_.set("Unknown"))}function Is(t){return t.v_||(t.v_=function(n,r,s){const i=ne(n);return i.P_(),new aP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:dP.bind(null,t),uo:fP.bind(null,t),r_:pP.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),ah(t)?oh(t):t.b_.set("Unknown")):(await t.v_.stop(),j_(t))})),t.v_}function Xn(t){return t.C_||(t.C_=function(n,r,s){const i=ne(n);return i.P_(),new lP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:_P.bind(null,t),uo:EP.bind(null,t),c_:yP.bind(null,t),u_:vP.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await sl(t)):(await t.C_.stop(),t.g_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class lh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new lh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Hi(t))return new $(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Mf{constructor(){this.F_=new Ve(H.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):X():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new cs(e,n,Qr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class TP{constructor(){this.x_=void 0,this.listeners=[]}}class IP{constructor(){this.queries=new Ts(e=>f_(e),Xa),this.onlineState="Unknown",this.O_=new Set}}async function AP(t,e){const n=ne(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new TP),s)try{i.x_=await n.onListen(r)}catch(o){const a=ch(o,`Initialization of query '${Vc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&uh(n)}async function bP(t,e){const n=ne(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function RP(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&uh(n)}function PP(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function uh(t){t.O_.forEach(e=>{e.next()})}class SP{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class W_{constructor(e){this.key=e}}class K_{constructor(e){this.key=e}}class CP{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=le(),this.mutatedKeys=le(),this.na=p_(e),this.ra=new Qr(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new Mf,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Ya(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),E=!0):this._a(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||c)&&(a=!0)),E&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((c,u)=>function(d,f){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return y(d)-y(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,i.length!==0||l?{snapshot:new cs(this.query,e.ra,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Mf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=le(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new K_(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new W_(r))}),n}ha(e){this.X_=e.ss,this.ta=le();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return cs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class kP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xP{constructor(e){this.key=e,this.Ia=!1}}class DP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Ts(a=>f_(a),Xa),this.da=new Map,this.Aa=new Set,this.Ra=new Ve(H.comparator),this.Va=new Map,this.ma=new nh,this.fa={},this.ga=new Map,this.pa=ls.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function OP(t,e){const n=qP(t);let r,s;const i=n.Ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await eP(n.localStore,En(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await NP(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&F_(n.remoteStore,o)}return s}async function NP(t,e,n,r,s){t.wa=(h,d,f)=>async function(v,E,b,C){let M=E.view.sa(b);M.zi&&(M=await Df(v.localStore,E.query,!1).then(({documents:U})=>E.view.sa(U,M)));const k=C&&C.targetChanges.get(E.targetId),K=E.view.applyChanges(M,v.isPrimaryClient,k);return Uf(v,E.targetId,K.ca),K.snapshot}(t,h,d,f);const i=await Df(t.localStore,e,!0),o=new CP(e,i.ss),a=o.sa(i.documents),l=Ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Uf(t,n,c.ca);const u=new kP(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function VP(t,e){const n=ne(t),r=n.Ea.get(e),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!Xa(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $c(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$_(n.remoteStore,r.targetId),Bc(n,r.targetId)}).catch(qi)):(Bc(n,r.targetId),await $c(n.localStore,r.targetId,!0))}async function MP(t,e,n){const r=HP(t);try{const s=await function(o,a){const l=ne(o),c=He.now(),u=a.reduce((f,y)=>f.add(y.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=wn(),v=le();return l.Xi.getEntries(f,u).next(E=>{y=E,y.forEach((b,C)=>{C.isValidDocument()||(v=v.add(b))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const b=[];for(const C of a){const M=oR(C,h.get(C.key).overlayedDocument);M!=null&&b.push(new Rr(C.key,M,r_(M.value.mapValue),en.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,b,a)}).next(E=>{d=E;const b=E.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,E.batchId,b)})}).then(()=>({batchId:d.batchId,changes:m_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Ve(ye)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Qi(r,s.changes),await sl(r.remoteStore)}catch(s){const i=ch(s,"Failed to persist write");n.reject(i)}}async function G_(t,e){const n=ne(t);try{const r=await XR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?ke(o.Ia):s.removedDocuments.size>0&&(ke(o.Ia),o.Ia=!1))}),await Qi(n,r,e)}catch(r){await qi(r)}}function Lf(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&uh(l)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LP(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new Ve(H.comparator);o=o.insert(i,at.newNoDocument(i,ee.min()));const a=le().add(i),l=new tl(ee.min(),new Map,new Ve(ye),o,a);await G_(r,l),r.Ra=r.Ra.remove(i),r.Va.delete(e),hh(r)}else await $c(r.localStore,e,!1).then(()=>Bc(r,e,n)).catch(qi)}async function UP(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await JR(n.localStore,e);J_(n,r,null),Q_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qi(n,s)}catch(s){await qi(s)}}async function FP(t,e,n){const r=ne(t);try{const s=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ke(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);J_(r,e,n),Q_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qi(r,s)}catch(s){await qi(s)}}function Q_(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function J_(t,e,n){const r=ne(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function Bc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||X_(t,r)})}function X_(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&($_(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),hh(t))}function Uf(t,e,n){for(const r of n)r instanceof W_?(t.ma.addReference(r.key,e),$P(t,r)):r instanceof K_?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||X_(t,r.key)):X()}function $P(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(j("SyncEngine","New document in limbo: "+n),t.Aa.add(r),hh(t))}function hh(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new H(Ce.fromString(e)),r=t.pa.next();t.Va.set(r,new xP(n)),t.Ra=t.Ra.insert(n,r),F_(t.remoteStore,new Ln(En(u_(n.path)),r,"TargetPurposeLimboResolution",Hu.ae))}}async function Qi(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=sh.qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(l,c){const u=ne(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(c,d=>S.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Hi(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(d,v)}}}(r.localStore,i))}async function BP(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await V_(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(l=>{l.reject(new $(A.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qi(n,r.ts)}}function jP(t,e){const n=ne(t),r=n.Va.get(e);if(r&&r.Ia)return le().add(r.key);{let s=le();const i=n.da.get(e);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function qP(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=G_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LP.bind(null,e),e.Ta.r_=RP.bind(null,e.eventManager),e.Ta.Sa=PP.bind(null,e.eventManager),e}function HP(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FP.bind(null,e),e}class Ff{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return QR(this.persistence,new KR,e.initialUser,this.serializer)}createPersistence(e){return new zR(rh.zr,this.serializer)}createSharedClientState(e){return new nP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BP.bind(null,this.syncEngine),await wP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IP}()}createDatastore(e){const n=nl(e.databaseInfo.databaseId),r=function(i){return new oP(i)}(e.databaseInfo);return function(i,o,a,l){return new cP(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new hP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lf(this.syncEngine,n,0),function(){return Nf.v()?new Nf:new rP}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new DP(s,i,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ne(n);j("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Gi(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class WP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class KP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=e_.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ch(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fl(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await V_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QP(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Vf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Vf(e.remoteStore,i)),t._onlineComponents=e}function GP(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function QP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!GP(n))throw n;ss("Error using user provided cache. Falling back to memory cache: "+n),await Fl(t,new Ff)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Fl(t,new Ff);return t._offlineComponents}async function Y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await $f(t,new zP))),t._onlineComponents}function JP(t){return Y_(t).then(e=>e.syncEngine)}async function XP(t){const e=await Y_(t),n=e.eventManager;return n.onListen=OP.bind(null,e.syncEngine),n.onUnlisten=VP.bind(null,e.syncEngine),n}function YP(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new WP({next:d=>{o.enqueueAndForget(()=>bP(i,h)),d.fromCache&&l.source==="server"?c.reject(new $(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new SP(a,u,{includeMetadataChanges:!0,W_:!0});return AP(i,h)}(await XP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Bf=new Map;/**
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
 */function ey(t,e,n){if(!n)throw new $(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZP(t,e,n,r){if(e===!0&&r===!0)throw new $(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jf(t){if(!H.isDocumentKey(t))throw new $(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qf(t){if(H.isDocumentKey(t))throw new $(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function il(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=il(t);throw new $(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Hf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ol{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yb;switch(r.type){case"firstParty":return new Tb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bf.get(n);r&&(j("ComponentProvider","Removing Datastore"),Bf.delete(n),r.terminate())}(this),Promise.resolve()}}function eS(t,e,n,r={}){var s;const i=(t=us(t,ol))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ot.MOCK_USER;else{a=zg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ot(c)}t._authCredentials=new vb(new Zm(a,l))}}/**
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
 */class As{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new As(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Hn extends As{constructor(e,n,r){super(e,n,u_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new H(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function dh(t,e,...n){if(t=nt(t),ey("collection","path",e),t instanceof ol){const r=Ce.fromString(e,...n);return qf(r),new Hn(t,null,r)}{if(!(t instanceof Pt||t instanceof Hn))throw new $(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return qf(r),new Hn(t.firestore,null,r)}}function $l(t,e,...n){if(t=nt(t),arguments.length===1&&(e=e_.V()),ey("doc","path",e),t instanceof ol){const r=Ce.fromString(e,...n);return jf(r),new Pt(t,null,new H(r))}{if(!(t instanceof Pt||t instanceof Hn))throw new $(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return jf(r),new Pt(t.firestore,t instanceof Hn?t.converter:null,new H(r))}}/**
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
 */class tS{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new L_(this,"async_queue_retry"),this.Xa=()=>{const n=Ul();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Ul();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new qn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Hi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=lh.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&X()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class al extends ol{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new tS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ny(this),this._firestoreClient.terminate()}}function fh(t,e){const n=typeof t=="object"?t:Eu(),r=typeof t=="string"?t:e||"(default)",s=Na(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jg("firestore");i&&eS(s,...i)}return s}function ty(t){return t._firestoreClient||ny(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ny(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new Nb(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Z_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new KP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(pt.fromBase64String(e))}catch(n){throw new $(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ph{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const nS=/^__.*__$/;class rS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wi(e,this.data,n,this.fieldTransforms)}}function sy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class mh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return aa(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(sy(this.uu)&&nS.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class sS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nl(e)}Ru(e,n,r,s=!1){return new mh({uu:e,methodName:n,Au:r,path:ct.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iy(t){const e=t._freezeSettings(),n=nl(t._databaseId);return new sS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iS(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);ly("Data must be an object, but it was:",o,r);const a=oy(r,o);let l,c;if(i.merge)l=new Lt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=aS(e,h,n);if(!o.contains(d))throw new $(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cS(u,d)||u.push(d)}l=new Lt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new rS(new Dt(a),l,c)}function oS(t,e,n,r=!1){return _h(n,t.Ru(r?4:3,e))}function _h(t,e){if(ay(t=nt(t)))return ly("Unsupported field value:",e,t),oy(t,e);if(t instanceof ry)return function(r,s){if(!sy(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=_h(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:ia(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(s.serializer,i)}}if(r instanceof gh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:C_(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:th(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${il(r)}`)}(t,e)}function oy(t,e){const n={};return t_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,s)=>{const i=_h(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ay(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof gh||t instanceof hs||t instanceof Pt||t instanceof ry)}function ly(t,e,n){if(!ay(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=il(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function aS(t,e,n){if((e=nt(e))instanceof ph)return e._internalPath;if(typeof e=="string")return cy(t,e);throw aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const lS=new RegExp("[~\\*/\\[\\]]");function cy(t,e,n){if(e.search(lS)>=0)throw aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ph(...e.split("."))._internalPath}catch{throw aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new $(A.INVALID_ARGUMENT,a+t+l)}function cS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class uy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uS extends uy{data(){return super.data()}}function hy(t,e){return typeof e=="string"?cy(t,e):e instanceof ph?e._internalPath:e._delegate._internalPath}/**
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
 */function hS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yh{}class dS extends yh{}function vh(t,e,...n){let r=[];e instanceof yh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof wh).length,a=i.filter(l=>l instanceof Eh).length;if(o>1||o>0&&a>0)throw new $(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Eh extends dS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Eh(e,n,r)}_apply(e){const n=this._parse(e);return dy(e._query,n),new As(e.firestore,e.converter,Oc(e._query,n))}_parse(e){const n=iy(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Wf(h,u);const f=[];for(const y of h)f.push(zf(l,i,y));d={arrayValue:{values:f}}}else d=zf(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Wf(h,u),d=oS(a,o,h,u==="in"||u==="not-in");return qe.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wh extends yh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)dy(o,l),o=Oc(o,l)}(e._query,n),new As(e.firestore,e.converter,Oc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zf(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new $(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!d_(e)&&n.indexOf("/")!==-1)throw new $(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!H.isDocumentKey(r))throw new $(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gf(t,new H(r))}if(n instanceof Pt)return gf(t,n._key);throw new $(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${il(n)}.`)}function Wf(t,e){if(!Array.isArray(t)||t.length===0)throw new $(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dy(t,e){if(e.isInequality()){const r=Ju(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new $(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=h_(t);i!==null&&fS(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fS(t,e,n){if(!n.isEqual(e))throw new $(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pS{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new gh(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ke(N_(r));const s=new Ei(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function gS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mS extends uy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends mS{data(e={}){return super.data(e)}}class _S{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Eo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new Eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Eo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Eo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:yS(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class vS extends pS{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Th(t){t=us(t,As);const e=us(t.firestore,al),n=ty(e),r=new vS(e);return hS(t._query),YP(n,t._query).then(s=>new _S(e,r,t,s))}function Kf(t,e,n){t=us(t,Pt);const r=us(t.firestore,al),s=gS(t.converter,e,n);return fy(r,[iS(iy(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function ES(t){return fy(us(t.firestore,al),[new Xu(t._key,en.none())])}function fy(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>MP(await JP(r),s,i)),i.promise}(ty(t),e)}(function(e,n=!0){(function(s){Es=s})(Ar),yr(new Gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new al(new Eb(r.getProvider("auth-internal")),new Ab(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Zt(uf,"4.1.0",e),Zt(uf,"4.1.0","esm2017")})();const Sr=pu("database",()=>{const t=fh(Oi),e=ue([]),n=ue([]),r=ue([]),s=ue([]),i=Ne(()=>e.value),o=Ne(()=>n.value),a=Ne(()=>s.value),l=Ne(()=>r.value);return{data:e,about:n,skill:r,setAllData:async f=>{const y=vh(dh(t,f));(await Th(y)).forEach(E=>{e.value.find(C=>C===E.data())||(f=="about"&&n.value.push(E.data()),f=="skill"&&r.value.push(E.data()),f=="portfolio"&&s.value.push(E.data()))})},setData:async(f,y,v)=>{await Kf($l(t,f,y),v),e.value.push(v)},getAllData:i,getAboutData:o,getSkillData:l,getPortfolioData:a,deleteData:async(f,y)=>{await ES($l(t,f,`${y}`))},editData:async(f,y,v)=>{await Kf($l(t,f,y),v),e.value.push(v)}}}),wS={class:"w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},TS={class:"flex justify-start flex-wrap my-4"},IS=["onClick"],AS=["onClick"],bS=m("img",{src:Lg,class:"h-[80px] max-w-full cursor-pointer mx-auto",alt:""},null,-1),RS={class:"text-primary"},PS={__name:"portfolio",setup(t){const e=Sr(),n=an(),r=(s,i)=>{n.setWindow(`portfolio-detail${i}`,s)};return(s,i)=>(D(),se("div",wS,[de(ki,{onClick:i[0]||(i[0]=o=>De(n).increseZindex("portfolio")),title:"Portfolio",window:"portfolio"}),m("div",TS,[(D(!0),se(Fe,null,An(De(e).getPortfolioData,(o,a)=>(D(),se("div",{class:"basis-1/5",key:a,onClick:l=>s.$emit("portfolioDetail",{folder:o,index:a})},[m("div",{class:"text-center hover:bg-hover m-2",onClick:l=>r(o,a)},[bS,m("div",RS,zn(o.name),1)],8,AS)],8,IS))),128))])]))}},SS={class:"w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},CS={class:"h-[70vh] overflow-auto"},kS=["src"],_e={__name:"portfolioDetail",props:{index:Number},setup(t){const{index:e}=t,n=fh(Oi),r=ue([]),s=an(),i=Ne(()=>s.getWindows.find(o=>o.window===`portfolio-detail${e}`));return yt(async()=>{const o=vh(dh(n,i.value.data.name));(await Th(o)).forEach(l=>{r.value.push(l.data())})}),(o,a)=>(D(),se("div",SS,[de(ki,{onClick:a[0]||(a[0]=l=>De(s).increseZindex(`portfolio-detail${t.index}`)),title:`${i.value.data.name}`,window:`portfolio-detail${t.index}`},null,8,["title","window"]),m("div",CS,[(D(!0),se(Fe,null,An(r.value,l=>(D(),se("div",{key:l.id},[m("img",{src:l.url,class:"w-full",alt:""},null,8,kS)]))),128))])]))}},xS={class:"w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},DS={class:"overflow-auto h-[85vh] my-2"},OS=["src"],NS={__name:"about",props:{images:Array},setup(t){const e=an();return(n,r)=>(D(),se("div",xS,[de(ki,{onClick:r[0]||(r[0]=s=>De(e).increseZindex("about")),title:"about.txt",window:"about"}),m("div",DS,[(D(!0),se(Fe,null,An(t.images,s=>(D(),se("img",{key:s.id,src:s.url,class:"w-full",alt:""},null,8,OS))),128))])]))}},VS={class:"w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},MS={class:"overflow-auto h-[85vh] my-2"},LS=["src"],US={__name:"skill",props:{images:Array},setup(t){const e=an();return(n,r)=>(D(),se("div",VS,[de(ki,{onClick:r[0]||(r[0]=s=>De(e).increseZindex("skill")),title:"Skill",window:"skill"}),m("div",MS,[(D(!0),se(Fe,null,An(t.images,s=>(D(),se("img",{key:s.id,src:s.url,class:"w-full",alt:""},null,8,LS))),128))])]))}},FS="/assets/profile-7c63d0e2.png",$S="/assets/behance-b97737ca.png",BS="/assets/figma-c5b66026.png",jS="/assets/Linkedin-03521dc2.png",qS="/assets/nephophile-5211cc48.png",HS="/assets/udemy-7737c7a3.png",zS="/assets/yangon-4fed5cb4.png",WS="/assets/email-7cc3952c.png",KS={class:"w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},GS=Si('<div class="flex gap-3 mb-3"><div><img src="'+FS+'" class="w-full h-full object-cover rounded-md" alt=""></div><div><div class="flex flex-col gap-3"><div class="flex gap-3"><a href="https://www.behance.net/alexlynn3" target="_blank"><img src="'+$S+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a><a href="https://www.figma.com/@alexlynn" target="_blank"><img src="'+BS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div><a href="https://www.linkedin.com/in/lynnhtetthant/" target="_blank"><img src="'+jS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div></div></div>',1),QS=Si('<div class="flex flex-col gap-3"><div><img src="'+qS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></div><a href="https://www.udemy.com/user/lynn-htet-7/" target="_blank"><img src="'+HS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div><a href="https://goo.gl/maps/2f4fr1SSQ9whHkeK7" target="_blank"><img src="'+zS+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a>',2),JS=m("img",{src:WS,class:"w-full cursor-pointer hover:opacity-80",alt:""},null,-1),XS=[JS],YS={__name:"contact",setup(t){const e=an(),n=()=>{const r="mailto:recipient@example.com?subject=Hello&body=This%20is%20the%20email%20body";window.open(r)};return(r,s)=>(D(),se("div",KS,[de(ki,{onClick:s[0]||(s[0]=i=>De(e).increseZindex("contact")),title:"Contact",window:"contact"}),m("div",{class:"p-4"},[GS,m("div",{class:"flex gap-3"},[QS,m("a",{href:n},XS)])])]))}},ZS={name:"PhStarBold"},eC={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"},tC=m("path",{fill:"currentColor",d:"M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"},null,-1),nC=[tC];function rC(t,e,n,r,s,i){return D(),se("svg",eC,nC)}const la=gu(ZS,[["render",rC]]),sC={class:"text-primary text-2xl flex flex-col gap-4"},iC={class:"flex justify-center items-center gap-2"},oC=m("div",null,"Read Me",-1),aC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Alex Lynn."),m("div",null,[Sa(" A "),m("span",{class:"text-blue-900"},"UI/UX Desinger & Instructor")]),m("div",null,"Desinger based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),lC=Aa({__name:"info",setup(t){const e=ue(null),{x:n,y:r,style:s}=Mg(e,{initialValue:{x:40,y:100}});return(i,o)=>(D(),se("div",{ref_key:"el",ref:e,style:ps([De(s),{position:"fixed"}]),class:"bg-white border-2 border-e-4 border-b-4 py-4 px-9 border-primary rounded-xl"},[m("div",sC,[m("div",iC,[de(la),oC,de(la)]),aC])],4))}}),cC={class:"w-[90%] mx-auto h-screen flex justify-end"},uC={class:"flex flex-col gap-2 mt-5"},hC=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),dC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),fC=[hC,dC],pC=m("img",{src:xg,class:"w-[60px] mx-auto",alt:""},null,-1),gC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),mC=[pC,gC],_C=m("img",{src:Dg,class:"w-[60px] mx-auto",alt:""},null,-1),yC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),vC=[_C,yC],EC=m("img",{src:Og,class:"w-[60px] mx-auto",alt:""},null,-1),wC=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),TC=[EC,wC],IC={__name:"Desktop",setup(t){const e=an(),n=Sr(),r=Ne(()=>e.getWindows);yt(async()=>{await n.setAllData("about")}),yt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),yt(async()=>{await n.setAllData("skill")});const s=(o,a=null)=>{e.setWindow(o,a)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,a)=>(D(),se("div",null,[m("div",cC,[m("div",uC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[0]||(a[0]=l=>s("portfolio"))},fC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[1]||(a[1]=l=>s("about"))},mC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[2]||(a[2]=l=>s("skill"))},vC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:a[3]||(a[3]=l=>s("contact"))},TC)])]),de(lC),(D(!0),se(Fe,null,An(r.value,(l,c)=>(D(),ie(SI,{key:c,index:c},{window:_s(()=>[l.window==="portfolio"?(D(),ie(PS,{key:0,onPortfolioDetail:i})):ae("",!0),l.window==="about"?(D(),ie(NS,{key:1,images:De(n).getAboutData},null,8,["images"])):ae("",!0),l.window==="skill"?(D(),ie(US,{key:2,images:De(n).getSkillData},null,8,["images"])):ae("",!0),l.window==="contact"?(D(),ie(YS,{key:3})):ae("",!0),l.window==="portfolio-detail0"?(D(),ie(_e,{key:4,index:"0"})):ae("",!0),l.window==="portfolio-detail1"?(D(),ie(_e,{key:5,index:"1"})):ae("",!0),l.window==="portfolio-detail2"?(D(),ie(_e,{key:6,index:"2"})):ae("",!0),l.window==="portfolio-detail3"?(D(),ie(_e,{key:7,index:"3"})):ae("",!0),l.window==="portfolio-detail4"?(D(),ie(_e,{key:8,index:"4"})):ae("",!0),l.window==="portfolio-detail5"?(D(),ie(_e,{key:9,index:"5"})):ae("",!0),l.window==="portfolio-detail6"?(D(),ie(_e,{key:10,index:"6"})):ae("",!0),l.window==="portfolio-detail7"?(D(),ie(_e,{key:11,index:"7"})):ae("",!0),l.window==="portfolio-detail8"?(D(),ie(_e,{key:12,index:"8"})):ae("",!0),l.window==="portfolio-detail9"?(D(),ie(_e,{key:13,index:"9"})):ae("",!0),l.window==="portfolio-detail10"?(D(),ie(_e,{key:14,index:"10"})):ae("",!0),l.window==="portfolio-detail11"?(D(),ie(_e,{key:15,index:"11"})):ae("",!0),l.window==="portfolio-detail12"?(D(),ie(_e,{key:16,index:"12"})):ae("",!0),l.window==="portfolio-detail13"?(D(),ie(_e,{key:17,index:"13"})):ae("",!0),l.window==="portfolio-detail14"?(D(),ie(_e,{key:18,index:"14"})):ae("",!0),l.window==="portfolio-detail15"?(D(),ie(_e,{key:19,index:"15"})):ae("",!0),l.window==="portfolio-detail16"?(D(),ie(_e,{key:20,index:"16"})):ae("",!0),l.window==="portfolio-detail17"?(D(),ie(_e,{key:21,index:"17"})):ae("",!0),l.window==="portfolio-detail18"?(D(),ie(_e,{key:22,index:"18"})):ae("",!0),l.window==="portfolio-detail19"?(D(),ie(_e,{key:23,index:"19"})):ae("",!0),l.window==="portfolio-detail20"?(D(),ie(_e,{key:24,index:"20"})):ae("",!0),l.window==="portfolio-detail21"?(D(),ie(_e,{key:25,index:"21"})):ae("",!0),l.window==="portfolio-detail22"?(D(),ie(_e,{key:26,index:"22"})):ae("",!0),l.window==="portfolio-detail23"?(D(),ie(_e,{key:27,index:"23"})):ae("",!0),l.window==="portfolio-detail24"?(D(),ie(_e,{key:28,index:"24"})):ae("",!0),l.window==="portfolio-detail25"?(D(),ie(_e,{key:29,index:"25"})):ae("",!0),l.window==="portfolio-detail26"?(D(),ie(_e,{key:30,index:"26"})):ae("",!0),l.window==="portfolio-detail27"?(D(),ie(_e,{key:31,index:"27"})):ae("",!0),l.window==="portfolio-detail28"?(D(),ie(_e,{key:32,index:"28"})):ae("",!0),l.window==="portfolio-detail29"?(D(),ie(_e,{key:33,index:"29"})):ae("",!0),l.window==="portfolio-detail30"?(D(),ie(_e,{key:34,index:"30"})):ae("",!0)]),_:2},1032,["index"]))),128))]))}},AC={class:"mx-auto flex justify-end"},bC={class:"w-full bg-white border-2 border-e-4 border-b-4 flex justify-center items-center p-2 border-primary rounded-xl mt-4 ms-1 me-1"},RC={class:"text-primary text-2xl flex flex-col gap-4"},PC={class:"flex justify-center items-center gap-2"},SC=m("div",null,"Read Me",-1),CC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Alex Lynn."),m("div",null,[Sa(" A "),m("span",{class:"text-blue-900"},"UI/UX Desinger & Instructor")]),m("div",null,"Desinger based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),kC={class:"flex flex-col"},xC=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),DC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),OC=[xC,DC],NC=m("img",{src:xg,class:"w-[60px] mx-auto",alt:""},null,-1),VC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),MC=[NC,VC],LC=m("img",{src:Dg,class:"w-[60px] mx-auto",alt:""},null,-1),UC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),FC=[LC,UC],$C=m("img",{src:Og,class:"w-[60px] mx-auto",alt:""},null,-1),BC=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),jC=[$C,BC],qC={__name:"Mobile",setup(t){const e=an(),n=Sr();Ne(()=>e.getWindows),yt(async()=>{await n.setAllData("about")}),yt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),yt(async()=>{await n.setAllData("skill")});const r=(s,i=null)=>{e.setWindow(s,i)};return(s,i)=>(D(),se("div",AC,[m("div",bC,[m("div",RC,[m("div",PC,[de(la),SC,de(la)]),CC])]),m("div",kC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:i[0]||(i[0]=o=>r("portfolio"))},OC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:i[1]||(i[1]=o=>r("about"))},MC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:i[2]||(i[2]=o=>r("skill"))},FC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:i[3]||(i[3]=o=>r("contact"))},jC)])]))}},HC={key:0},zC={key:1},WC={__name:"Desktop",setup(t){const e=ue(window.innerWidth),n=ue(window.innerHeight),r=()=>{e.value=window.innerWidth,n.value=window.innerHeight};return yt(()=>{window.addEventListener("resize",r)}),cu(()=>{window.removeEventListener("resize",r)}),(s,i)=>e.value>760?(D(),se("div",HC,[de(IC)])):(D(),se("div",zC,[de(qC)]))}};function Ih(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KC=py,gy=new xi("auth","Firebase",py());/**
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
 */const ca=new yu("@firebase/auth");function GC(t,...e){ca.logLevel<=ge.WARN&&ca.warn(`Auth (${Ar}): ${t}`,...e)}function No(t,...e){ca.logLevel<=ge.ERROR&&ca.error(`Auth (${Ar}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Ah(t,...e)}function nn(t,...e){return Ah(t,...e)}function QC(t,e,n){const r=Object.assign(Object.assign({},KC()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function Ah(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gy.create(t,...e)}function J(t,e,...n){if(!t)throw Ah(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function Tn(t,e){t||pn(e)}/**
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
 */function jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JC(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function XC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JC()||zI()||"connection"in navigator)?navigator.onLine:!0}function YC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=qI()||WI()}get(){return XC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bh(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class my{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ek=new Ji(3e4,6e4);function Xi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bs(t,e,n,r,s={}){return _y(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),my.fetch()(yy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function _y(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZC),e);try{const s=new tk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw QC(t,u,c);qt(t,u)}}catch(s){if(s instanceof ln)throw s;qt(t,"network-request-failed",{message:String(s)})}}async function ll(t,e,n,r,s={}){const i=await bs(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bh(t.config,s):`${t.config.apiScheme}://${s}`}class tk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),ek.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function nk(t,e){return bs(t,"POST","/v1/accounts:delete",e)}async function rk(t,e){return bs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sk(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=Rh(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(Bl(s.auth_time)),issuedAtTime:Zs(Bl(s.iat)),expirationTime:Zs(Bl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bl(t){return Number(t)*1e3}function Rh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=$g(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ik(t){const e=Rh(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&ok(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ok({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ua(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ai(t,rk(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uk(i.providerUserInfo):[],a=ck(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function lk(t){const e=nt(t);await ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ck(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uk(t){return t.map(e=>{var{providerId:n}=e,r=Ih(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hk(t,e){const n=await _y(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=yy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",my.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ik(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function Sn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ih(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sk(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ai(this,nk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:k,isAnonymous:K,providerData:U,stsTokenManager:pe}=n;J(M&&pe,e,"internal-error");const G=bi.fromJSON(this.name,pe);J(typeof M=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),J(typeof k=="boolean",e,"internal-error"),J(typeof K=="boolean",e,"internal-error"),Sn(f,e.name),Sn(y,e.name),Sn(v,e.name),Sn(E,e.name),Sn(b,e.name),Sn(C,e.name);const te=new gr({uid:M,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:K,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:G,createdAt:b,lastLoginAt:C});return U&&Array.isArray(U)&&(te.providerData=U.map(be=>Object.assign({},be))),E&&(te._redirectEventId=E),te}static async _fromIdTokenResponse(e,n,r=!1){const s=new bi;s.updateFromServerResponse(n);const i=new gr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ua(i),i}}/**
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
 */const Qf=new Map;function gn(t){Tn(t instanceof Function,"Expected a class definition");let e=Qf.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qf.set(t,e),e)}/**
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
 */class Ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ey.type="NONE";const Jf=Ey;/**
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
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(gn(Jf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||gn(Jf);const o=Vo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=gr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Jr(i,e,r))}}/**
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
 */function Xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Ry(e))return"Webos";if(Ph(e))return"Safari";if((e.includes("chrome/")||Ty(e))&&!e.includes("edge/"))return"Chrome";if(Ay(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wy(t=ft()){return/firefox\//i.test(t)}function Ph(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ty(t=ft()){return/crios\//i.test(t)}function Iy(t=ft()){return/iemobile/i.test(t)}function Ay(t=ft()){return/android/i.test(t)}function by(t=ft()){return/blackberry/i.test(t)}function Ry(t=ft()){return/webos/i.test(t)}function cl(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dk(t=ft()){var e;return cl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fk(){return KI()&&document.documentMode===10}function Py(t=ft()){return cl(t)||Ay(t)||Ry(t)||by(t)||/windows phone/i.test(t)||Iy(t)}function pk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sy(t,e=[]){let n;switch(t){case"Browser":n=Xf(ft());break;case"Worker":n=`${Xf(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${r}`}async function Cy(t,e){return bs(t,"GET","/v2/recaptchaConfig",Xi(t,e))}function Yf(t){return t!==void 0&&t.enterprise!==void 0}class ky{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function gk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gk().appendChild(r)})}function mk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _k="https://www.google.com/recaptcha/enterprise.js?render=",yk="recaptcha-enterprise",vk="NO_RECAPTCHA";class Dy{constructor(e){this.type=yk,this.auth=Yi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Cy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ky(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Yf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(vk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Yf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xy(_k+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Zf(t,e,n,r=!1){const s=new Dy(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Ek{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class wk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ep(this),this.idTokenSubscription=new ep(this),this.beforeStateQueue=new Ek(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ua(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}async initializeRecaptchaConfig(){const e=await Cy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ky(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Dy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yi(t){return nt(t)}class ep{constructor(e){this.auth=e,this.observer=null,this.addObserver=e0(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Tk(t,e){const n=Na(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wo(i,e??{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function Ik(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ak(t,e,n){const r=Yi(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Oy(e),{host:o,port:a}=bk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Rk()}function Oy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bk(t){const e=Oy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tp(o)}}}function tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function Pk(t,e){return bs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function jl(t,e){return ll(t,"POST","/v1/accounts:signInWithPassword",Xi(t,e))}/**
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
 */async function Sk(t,e){return ll(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}async function Ck(t,e){return ll(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}/**
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
 */class Ri extends Sh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Zf(e,r,"signInWithPassword");return jl(e,s)}else return jl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Zf(e,r,"signInWithPassword");return jl(e,i)}else return Promise.reject(s)});case"emailLink":return Sk(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Pk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ck(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xr(t,e){return ll(t,"POST","/v1/accounts:signInWithIdp",Xi(t,e))}/**
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
 */const kk="http://localhost";class Tr extends Sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ih(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Tr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:kk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
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
 */function xk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dk(t){const e=Ms(Ls(t)).link,n=e?Ms(Ls(e)).deep_link_id:null,r=Ms(Ls(t)).deep_link_id;return(r?Ms(Ls(r)).link:null)||r||n||e||t}class Ch{constructor(e){var n,r,s,i,o,a;const l=Ms(Ls(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=xk((s=l.mode)!==null&&s!==void 0?s:null);J(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Dk(e);try{return new Ch(n)}catch{return null}}}/**
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
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ch.parseLink(n);return J(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zi extends Ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends Zi{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class On extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
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
 */class Nn extends Zi{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class Vn extends Zi{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gr._fromIdTokenResponse(e,r,s),o=np(r);return new ds({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=np(r);return new ds({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ha extends ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ha(e,n,r,s)}}function Vy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,i,e,r):i})}async function Ok(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
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
 */async function Nk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ai(t,Vy(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=Rh(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),ds._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function My(t,e,n=!1){const r="signIn",s=await Vy(t,r,e),i=await ds._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Vk(t,e){return My(Yi(t),e)}function Mk(t,e,n){return Vk(nt(t),Rs.credential(e,n))}function Lk(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function Uk(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}const da="__sak";/**
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
 */class Ly{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fk(){const t=ft();return Ph(t)||cl(t)}const $k=1e3,Bk=10;class Uy extends Ly{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fk()&&pk(),this.fallbackToPolling=Py(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uy.type="LOCAL";const jk=Uy;/**
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
 */class Fy extends Ly{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fy.type="SESSION";const $y=Fy;/**
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
 */function qk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await qk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ul.receivers=[];/**
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
 */function kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=kh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function zk(t){rn().location.href=t}/**
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
 */function By(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function Wk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gk(){return By()?self:null}/**
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
 */const jy="firebaseLocalStorageDb",Qk=1,fa="firebaseLocalStorage",qy="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hl(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function Jk(){const t=indexedDB.deleteDatabase(jy);return new eo(t).toPromise()}function qc(){const t=indexedDB.open(jy,Qk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fa,{keyPath:qy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await Jk(),e(await qc()))})})}async function rp(t,e,n){const r=hl(t,!0).put({[qy]:e,value:n});return new eo(r).toPromise()}async function Xk(t,e){const n=hl(t,!1).get(e),r=await new eo(n).toPromise();return r===void 0?null:r.value}function sp(t,e){const n=hl(t,!0).delete(e);return new eo(n).toPromise()}const Yk=800,Zk=3;class Hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ul._getInstance(Gk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wk(),!this.activeServiceWorker)return;this.sender=new Hk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qc();return await rp(e,da,"1"),await sp(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=hl(s,!1).getAll();return new eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hy.type="LOCAL";const e1=Hy;new Ji(3e4,6e4);/**
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
 */function t1(t,e){return e?gn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xh extends Sh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function n1(t){return My(t.auth,new xh(t),t.bypassAuthState)}function r1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Nk(n,new xh(t),t.bypassAuthState)}async function s1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Ok(n,new xh(t),t.bypassAuthState)}/**
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
 */class zy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n1;case"linkViaPopup":case"linkViaRedirect":return s1;case"reauthViaPopup":case"reauthViaRedirect":return r1;default:qt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i1=new Ji(2e3,1e4);class jr extends zy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}jr.currentPopupAction=null;/**
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
 */const o1="pendingRedirect",Mo=new Map;class a1 extends zy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await l1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l1(t,e){const n=h1(e),r=u1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function c1(t,e){Mo.set(t._key(),e)}function u1(t){return gn(t._redirectPersistence)}function h1(t){return Vo(o1,t.config.apiKey,t.name)}async function d1(t,e,n=!1){const r=Yi(t),s=t1(r,e),o=await new a1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const f1=10*60*1e3;class p1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ip(e))}saveEventToCache(e){this.cachedEventUids.add(ip(e)),this.lastProcessedEventTime=Date.now()}}function ip(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wy(t);default:return!1}}/**
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
 */async function m1(t,e={}){return bs(t,"GET","/v1/projects",e)}/**
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
 */const _1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function v1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m1(t);for(const n of e)try{if(E1(n))return}catch{}qt(t,"unauthorized-domain")}function E1(t){const e=jc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!y1.test(n))return!1;if(_1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const w1=new Ji(3e4,6e4);function op(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T1(t){return new Promise((e,n)=>{var r,s,i;function o(){op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{op(),n(nn(t,"network-request-failed"))},timeout:w1.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const a=mk("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},xy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function I1(t){return Lo=Lo||T1(t),Lo}/**
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
 */const A1=new Ji(5e3,15e3),b1="__/auth/iframe",R1="emulator/auth/iframe",P1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C1(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bh(e,R1):`https://${t.config.authDomain}/${b1}`,r={apiKey:e.apiKey,appName:t.name,v:Ar},s=S1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Di(r).slice(1)}`}async function k1(t){const e=await I1(t),n=rn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:C1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{i(o)},A1.get());function l(){rn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const x1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D1=500,O1=600,N1="_blank",V1="http://localhost";class ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M1(t,e,n,r=D1,s=O1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},x1),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ft().toLowerCase();n&&(a=Ty(c)?N1:n),wy(c)&&(e=e||V1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(dk(c)&&a!=="_self")return L1(e||"",a),new ap(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new ap(h)}function L1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const U1="__/auth/handler",F1="emulator/auth/handler",$1=encodeURIComponent("fac");async function lp(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ar,eventId:s};if(e instanceof Ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ZI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Zi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${$1}=${encodeURIComponent(l)}`:"";return`${B1(t)}?${Di(a).slice(1)}${c}`}function B1({config:t}){return t.emulator?bh(t,F1):`https://${t.authDomain}/${U1}`}/**
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
 */const ql="webStorageSupport";class j1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$y,this._completeRedirectFn=d1,this._overrideRedirectResult=c1}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lp(e,n,r,jc(),s);return M1(e,o,kh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await lp(e,n,r,jc(),s);return zk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await k1(e),r=new p1(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ql,{type:ql},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ql];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Py()||Ph()||cl()}}const q1=j1;var cp="@firebase/auth",up="1.1.0";/**
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
 */class H1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function W1(t){yr(new Gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sy(t)},c=new wk(r,s,i,l);return Ik(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Gn("auth-internal",e=>{const n=Yi(e.getProvider("auth").getImmediate());return(r=>new H1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(cp,up,z1(t)),Zt(cp,up,"esm2017")}/**
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
 */const K1=5*60,G1=Hg("authIdTokenMaxAge")||K1;let hp=null;const Q1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>G1)return;const s=n==null?void 0:n.token;hp!==s&&(hp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J1(t=Eu()){const e=Na(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tk(t,{popupRedirectResolver:q1,persistence:[e1,jk,$y]}),r=Hg("authTokenSyncURL");if(r){const i=Q1(r);Uk(n,i,()=>i(n.currentUser)),Lk(n,o=>i(o))}const s=Bg("auth");return s&&Ak(n,`http://${s}`),n}W1("Browser");const X1={class:"flex h-screen justify-center items-center"},Y1={class:"w-full lg:w-[30%] mx-auto bg-white border-primary border-2 border-e-4 border-b-4 rounded-lg"},Z1=["onSubmit"],ex=m("div",{class:"text-3xl mx-auto"},"Login",-1),tx=m("div",{class:"text-end"},[m("button",{type:"submit",class:"bg-primary rounded-sm text-white px-3 py-2 shadow-sm"}," Submit ")],-1),nx={__name:"Login",setup(t){const e=J1(Oi),n=ue(null),r=ue(null),s=cI(),i=()=>{Mk(e,n.value,r.value).then(o=>{o.user.accessToken&&(s.push("/dashboard-portfolio"),n.value=null,r.value=null)}).catch(o=>{o.code,o.message,s.push("/login")})};return(o,a)=>(D(),se("div",X1,[m("div",Y1,[m("form",{onSubmit:gg(i,["prevent"]),class:"flex flex-col gap-3 p-3"},[ex,m("div",null,[Zl(m("input",{type:"text",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your email","onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l)},null,512),[[oc,n.value]])]),m("div",null,[Zl(m("input",{type:"password",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your password","onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l)},null,512),[[oc,r.value]])]),tx],40,Z1)])]))}};const rx={class:"flex h-screen overflow-auto justify-end me-[10%]"},sx={class:"w-[10%] fixed left-0 mt-1 h-screen overflow-auto bg-background"},ix={class:"flex flex-col mt-5"},ox={class:"w-[80%] ps-3"},ax={__name:"Sidebar",setup(t){const e=Ci();return(n,r)=>(D(),se("div",rx,[m("div",sx,[m("div",ix,[m("a",{href:"/dashboard-portfolio",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-portfolio"}])}," Portfolio ",2),m("a",{href:"/dashboard-about",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-about"}])}," About ",2),m("a",{href:"/dashboard-skill",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-skill"}])}," Skill ",2),m("a",{href:"/dashobard-contact",class:or(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":De(e).fullPath==="/dashboard-contact"}])}," Contact ",2)])]),m("div",ox,[eg(n.$slots,"content",{},void 0,!0)])]))}},dl=gu(ax,[["__scopeId","data-v-12b72cf3"]]);/**
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
 */const Ky="firebasestorage.googleapis.com",Gy="storageBucket",lx=2*60*1e3,cx=10*60*1e3,ux=1e3;/**
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
 */class Me extends ln{constructor(e,n,r=0){super(Hl(e),`Firebase Storage: ${n} (${Hl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xe||(xe={}));function Hl(t){return"storage/"+t}function Dh(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(xe.UNKNOWN,t)}function hx(t){return new Me(xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dx(t){return new Me(xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(xe.UNAUTHENTICATED,t)}function px(){return new Me(xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gx(t){return new Me(xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Qy(){return new Me(xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jy(){return new Me(xe.CANCELED,"User canceled the upload/download.")}function mx(t){return new Me(xe.INVALID_URL,"Invalid URL '"+t+"'.")}function _x(t){return new Me(xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yx(){return new Me(xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gy+"' property when initializing the app?")}function Xy(){return new Me(xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vx(){return new Me(xe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Ex(){return new Me(xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wx(t){return new Me(xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Hc(t){return new Me(xe.INVALID_ARGUMENT,t)}function Yy(){return new Me(xe.APP_DELETED,"The Firebase app was deleted.")}function Tx(t){return new Me(xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ei(t,e){return new Me(xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Os(t){throw new Me(xe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw _x(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},v=n===Ky?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",b=new RegExp(`^https?://${v}/${s}/${E}`,"i"),M=[{regex:a,indices:l,postModify:i},{regex:f,indices:y,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<M.length;k++){const K=M[k],U=K.regex.exec(e);if(U){const pe=U[K.indices.bucket];let G=U[K.indices.path];G||(G=""),r=new Rt(pe,G),K.postModify(r);break}}if(r==null)throw mx(e);return r}}class Ix{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ax(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(f,l())},E)}function d(){i&&clearTimeout(i)}function f(E,...b){if(c){d();return}if(E){d(),u.call(null,E,...b);return}if(l()||o){d(),u.call(null,E,...b);return}r<64&&(r*=2);let M;a===1?(a=2,M=0):M=(r+Math.random())*1e3,h(M)}let y=!1;function v(E){y||(y=!0,d(),!c&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function bx(t){t(!1)}/**
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
 */function Rx(t){return t!==void 0}function Px(t){return typeof t=="function"}function Sx(t){return typeof t=="object"&&!Array.isArray(t)}function fl(t){return typeof t=="string"||t instanceof String}function dp(t){return Oh()&&t instanceof Blob}function Oh(){return typeof Blob<"u"&&!HI()}function fp(t,e,n,r){if(r<e)throw Hc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Hc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function to(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Zy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */function ev(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class Cx{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new To(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===mr.NO_ERROR,l=i.getStatus();if(!a||ev(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===mr.ABORT;r(!1,new To(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new To(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Rx(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Dh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Yy():Jy();o(l)}else{const l=Qy();o(l)}};this.canceled_?n(!1,new To(!1,null,!0)):this.backoffId_=Ax(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class To{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Dx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ox(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Nx(t,e,n,r,s,i,o=!0){const a=Zy(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Dx(c,e),kx(c,n),xx(c,i),Ox(c,r),new Cx(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Vx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Mx(...t){const e=Vx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Oh())return new Blob(t);throw new Me(xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Lx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zl{constructor(e,n){this.data=e,this.contentType=n||null}}function Fx(t,e){switch(t){case Yt.RAW:return new zl(tv(e));case Yt.BASE64:case Yt.BASE64URL:return new zl(nv(t,e));case Yt.DATA_URL:return new zl(Bx(e),jx(e))}throw Dh()}function tv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $x(t){let e;try{e=decodeURIComponent(t)}catch{throw ei(Yt.DATA_URL,"Malformed data URL.")}return tv(e)}function nv(t,e){switch(t){case Yt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ux(e)}catch(s){throw s.message.includes("polyfill")?s:ei(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class rv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ei(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Bx(t){const e=new rv(t);return e.base64?nv(Yt.BASE64,e.rest):$x(e.rest)}function jx(t){return new rv(t).contentType}function qx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Mn{constructor(e,n){let r=0,s="";dp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(dp(this.data_)){const r=this.data_,s=Lx(r,e,n);return s===null?null:new Mn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mn(r,!0)}}static getBlob(...e){if(Oh()){const n=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(Mx.apply(null,n))}else{const n=e.map(o=>fl(o)?Fx(Yt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Mn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function sv(t){let e;try{e=JSON.parse(t)}catch{return null}return Sx(e)?e:null}/**
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
 */function Hx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function iv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Wx(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Wx}}let Io=null;function Kx(t){return!fl(t)||t.length<2?t:iv(t)}function ov(){if(Io)return Io;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return Kx(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),Io=t,Io}function Gx(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Qx(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Gx(r,t),r}function av(t,e,n){const r=sv(e);return r===null?null:Qx(t,r,n)}function Jx(t,e,n,r){const s=sv(e);if(s===null||!fl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=to(d,n,r),y=Zy({alt:"media",token:c});return f+y})[0]}function lv(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ps{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function mn(t){if(!t)throw Dh()}function Nh(t,e){function n(r,s){const i=av(t,s,e);return mn(i!==null),i}return n}function Xx(t,e){function n(r,s){const i=av(t,s,e);return mn(i!==null),Jx(i,s,t.host,t._protocol)}return n}function no(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=px():s=fx():n.getStatus()===402?s=dx(t.bucket):n.getStatus()===403?s=gx(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function cv(t){const e=no(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=hx(t.path)),i.serverResponse=s.serverResponse,i}return n}function Yx(t,e,n){const r=e.fullServerUrl(),s=to(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ps(s,i,Nh(t,n),o);return a.errorHandler=cv(e),a}function Zx(t,e,n){const r=e.fullServerUrl(),s=to(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ps(s,i,Xx(t,n),o);return a.errorHandler=cv(e),a}function eD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function uv(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eD(null,e)),r}function tD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let M="";for(let k=0;k<2;k++)M=M+Math.random().toString().slice(2);return M}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=uv(e,r,s),u=lv(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Mn.getBlob(h,r,d);if(f===null)throw Xy();const y={name:c.fullPath},v=to(i,t.host,t._protocol),E="POST",b=t.maxUploadRetryTime,C=new Ps(v,E,Nh(t,n),b);return C.urlParams=y,C.headers=o,C.body=f.uploadData(),C.errorHandler=no(e),C}class pa{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Vh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{mn(!1)}return mn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function nD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=uv(e,r,s),a={name:o.fullPath},l=to(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=lv(o,n),d=t.maxUploadRetryTime;function f(v){Vh(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{mn(!1)}return mn(fl(E)),E}const y=new Ps(l,c,f,d);return y.urlParams=a,y.headers=u,y.body=h,y.errorHandler=no(e),y}function rD(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const u=Vh(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{mn(!1)}h||mn(!1);const d=Number(h);return mn(!isNaN(d)),new pa(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Ps(n,o,i,a);return l.headers=s,l.errorHandler=no(e),l}const pp=256*1024;function sD(t,e,n,r,s,i,o,a){const l=new pa(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw vx();const c=l.total-l.current;let u=c;s>0&&(u=Math.min(u,s));const h=l.current,d=h+u;let f="";u===0?f="finalize":c===u?f="upload, finalize":f="upload";const y={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw Xy();function E(k,K){const U=Vh(k,["active","final"]),pe=l.current+u,G=r.size();let te;return U==="final"?te=Nh(e,i)(k,K):te=null,new pa(pe,G,U==="final",te)}const b="POST",C=e.maxUploadRetryTime,M=new Ps(n,b,E,C);return M.headers=y,M.body=v.uploadData(),M.progressCallback=a||null,M.errorHandler=no(t),M}const wt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wl(t){switch(t){case"running":case"pausing":case"canceling":return wt.RUNNING;case"paused":return wt.PAUSED;case"success":return wt.SUCCESS;case"canceled":return wt.CANCELED;case"error":return wt.ERROR;default:return wt.ERROR}}/**
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
 */function Vr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class oD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=mr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=mr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=mr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Os("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Os("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Os("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Os("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Os("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aD extends oD{initXhr(){this.xhr_.responseType="text"}}function $r(){return new aD}/**
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
 */class lD{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ov(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(xe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(ev(s.status,[]))if(i)s=Qy();else{this.sleepTime=Math.max(this.sleepTime*2,ux),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(xe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=nD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,$r,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=rD(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,$r,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=pp*this._chunkMultiplier,n=new pa(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=sD(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,$r,s,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){pp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Yx(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,$r,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=tD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,$r,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Jy(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Wl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new iD(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Wl(this._state)){case wt.SUCCESS:Vr(this._resolve.bind(null,this.snapshot))();break;case wt.CANCELED:case wt.ERROR:const n=this._reject;Vr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Wl(this._state)){case wt.RUNNING:case wt.PAUSED:e.next&&Vr(e.next.bind(e,this.snapshot))();break;case wt.SUCCESS:e.complete&&Vr(e.complete.bind(e))();break;case wt.CANCELED:case wt.ERROR:e.error&&Vr(e.error.bind(e,this._error))();break;default:e.error&&Vr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ir{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ir(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iv(this._location.path)}get storage(){return this._service}get parent(){const e=Hx(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new Ir(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Tx(e)}}function cD(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new lD(t,new Mn(e),n)}function uD(t){t._throwIfRoot("getDownloadURL");const e=Zx(t.storage,t._location,ov());return t.storage.makeRequestWithTokens(e,$r).then(n=>{if(n===null)throw Ex();return n})}function hD(t,e){const n=zx(t._location.path,e),r=new Rt(t._location.bucket,n);return new Ir(t.storage,r)}/**
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
 */function dD(t){return/^[A-Za-z]+:\/\//.test(t)}function fD(t,e){return new Ir(t,e)}function hv(t,e){if(t instanceof Mh){const n=t;if(n._bucket==null)throw yx();const r=new Ir(n,n._bucket);return e!=null?hv(r,e):r}else return e!==void 0?hD(t,e):t}function pD(t,e){if(e&&dD(e)){if(t instanceof Mh)return fD(t,e);throw Hc("To use ref(service, url), the first argument must be a Storage instance.")}else return hv(t,e)}function gp(t,e){const n=e==null?void 0:e[Gy];return n==null?null:Rt.makeFromBucketSpec(n,t)}function gD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:zg(s,t.app.options.projectId))}class Mh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ky,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lx,this._maxUploadRetryTime=cx,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=gp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=gp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ir(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Ix(Yy());{const o=Nx(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const mp="@firebase/storage",_p="0.11.2";/**
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
 */const dv="storage";function mD(t,e,n){return t=nt(t),cD(t,e,n)}function _D(t){return t=nt(t),uD(t)}function yD(t,e){return t=nt(t),pD(t,e)}function vD(t=Eu(),e){t=nt(t);const r=Na(t,dv).getImmediate({identifier:e}),s=jg("storage");return s&&ED(r,...s),r}function ED(t,e,n,r={}){gD(t,e,n,r)}function wD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Mh(n,r,s,e,Ar)}function TD(){yr(new Gn(dv,wD,"PUBLIC").setMultipleInstances(!0)),Zt(mp,_p,""),Zt(mp,_p,"esm2017")}TD();let Ao;const ID=new Uint8Array(16);function AD(){if(!Ao&&(Ao=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ao))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ao(ID)}const Xe=[];for(let t=0;t<256;++t)Xe.push((t+256).toString(16).slice(1));function bD(t,e=0){return(Xe[t[e+0]]+Xe[t[e+1]]+Xe[t[e+2]]+Xe[t[e+3]]+"-"+Xe[t[e+4]]+Xe[t[e+5]]+"-"+Xe[t[e+6]]+Xe[t[e+7]]+"-"+Xe[t[e+8]]+Xe[t[e+9]]+"-"+Xe[t[e+10]]+Xe[t[e+11]]+Xe[t[e+12]]+Xe[t[e+13]]+Xe[t[e+14]]+Xe[t[e+15]]).toLowerCase()}const RD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),yp={randomUUID:RD};function PD(t,e,n){if(yp.randomUUID&&!e&&!t)return yp.randomUUID();t=t||{};const r=t.random||(t.rng||AD)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return bD(r)}const Lh=pu("storage",()=>{const t=vD(Oi),e=PD(),n=ue(null);return{setImage:async s=>{try{const i=yD(t,`about/${e}.jpg`),o=mD(i,s);return await new Promise((a,l)=>{o.on("state_changed",c=>{const u=c.bytesTransferred/c.totalBytes*100;switch(console.log("Upload is "+u+"% done"),c.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},c=>{l(c)},async()=>{const c=await _D(o.snapshot.ref);n.value=c,a()})}),n.value}catch(i){throw console.error("Error:",i),i}},url:n}}),SD={class:"my-5"},CD={class:"w-full text-md text-left bg-white text-black"},kD=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),xD={class:"px-6 border"},DD={class:"px-6 border"},OD=["src"],ND={class:"px-6 border"},VD={class:"flex items-center gap-3"},MD=["onClick"],LD=m("div",{class:"flex justify-center"},"added image",-1),UD={__name:"list",setup(t){const e=Lh(),n=Sr(),r=ue(null),s=ue(null),i=Ci(),o=ue(0);yt(async()=>{await n.setAllData("about"),o.value=n.getAboutData.length});const a=()=>{r.value.click()},l=async h=>{const d=h.target.files[0];o.value++,s.value=await e.setImage(d),c(o.value)},c=async h=>{await n.setData("about",`${h}`,{id:h,url:s.value}),window.location.href=`${i.fullPath}`},u=async h=>{await n.deleteData("about",h),window.location.href=`${i.fullPath}`};return(h,d)=>(D(),se("div",null,[de(dl,null,{content:_s(()=>[m("div",SD,[m("table",CD,[kD,m("tbody",null,[(D(!0),se(Fe,null,An(De(n).getAboutData,f=>(D(),se("tr",{class:"bg-white border-b",key:f.id},[m("td",xD,zn(f.id),1),m("td",DD,[m("img",{src:f.url,class:"h-[50px]",alt:""},null,8,OD)]),m("td",ND,[m("div",VD,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:y=>u(f.id)}," Delete ",8,MD)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:a},[LD,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:l,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},FD={class:"my-5"},$D={class:"w-full text-md text-left bg-white text-black"},BD=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Folder"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),jD={class:"px-6 border"},qD={class:"px-6 border"},HD={class:"flex gap-3 items-center"},zD=m("img",{src:Lg,class:"h-[50px]",alt:""},null,-1),WD={class:"px-6 border"},KD={class:"flex items-center gap-3"},GD=["href"],QD=m("div",{class:"cursor-pointer hover:bg-desktopHover"}," Delete ",-1),JD={colspan:"3",class:"py-3 cursor-pointer"},XD=["onSubmit"],YD=m("button",{type:"submit",class:"flex justify-center bg-primary p-2"}," added folder ",-1),ZD={__name:"list",setup(t){const e=Sr(),n=ue(0),r=ue(null),s=Ci();yt(async()=>{await e.setAllData("portfolio"),n.value=e.getPortfolioData.length});const i=async()=>{n.value++,await e.setData("portfolio",`${n.value}`,{id:n.value,name:r.value}),window.location.href=`${s.fullPath}`};return(o,a)=>(D(),se("div",null,[de(dl,null,{content:_s(()=>[m("div",FD,[m("table",$D,[BD,m("tbody",null,[(D(!0),se(Fe,null,An(De(e).getPortfolioData,l=>(D(),se("tr",{class:"bg-white border-b",key:l.id},[m("td",jD,zn(l.id),1),m("td",qD,[m("div",HD,[zD,Sa(" "+zn(l.name),1)])]),m("td",WD,[m("div",KD,[m("a",{href:`/dashboard-detail?name=${l.name}`,class:"cursor-pointer hover:bg-desktopHover"}," Edit ",8,GD),QD])])]))),128)),m("tr",null,[m("td",JD,[m("form",{onSubmit:gg(i,["prevent"]),class:"flex justify-center"},[Zl(m("input",{type:"text",class:"px-2 border border-primary w-[20%]","onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),required:"",placeholder:"Enter foler name"},null,512),[[oc,r.value]]),YD],40,XD)])])])])])]),_:1})]))}},eO={class:"my-5"},tO={class:"w-full text-md text-left bg-white text-black"},nO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),rO={class:"px-6 border"},sO={class:"px-6 border"},iO=["src"],oO={class:"px-6 border"},aO={class:"flex items-center gap-3"},lO=["onClick"],cO=m("div",{class:"flex justify-center"},"added image",-1),uO={__name:"list",setup(t){const e=Lh(),n=Sr(),r=ue(null),s=ue(null),i=ue(0),o=Ci();yt(async()=>{await n.setAllData("skill"),i.value=n.getSkillData.length});const a=()=>{r.value.click()},l=async h=>{const d=h.target.files[0];i.value++,s.value=await e.setImage(d),c(i.value)},c=async h=>{await n.setData("skill",`${h}`,{id:h,url:s.value}),window.location.href=`${o.fullPath}`},u=async h=>{await n.deleteData("skill",h),window.location.href=`${o.fullPath}`};return(h,d)=>(D(),se("div",null,[de(dl,null,{content:_s(()=>[m("div",eO,[m("table",tO,[nO,m("tbody",null,[(D(!0),se(Fe,null,An(De(n).getSkillData,f=>(D(),se("tr",{class:"bg-white border-b",key:f.id},[m("td",rO,zn(f.id),1),m("td",sO,[m("img",{src:f.url,class:"h-[50px]",alt:""},null,8,iO)]),m("td",oO,[m("div",aO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:y=>u(f.id)}," Delete ",8,lO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:a},[cO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:l,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},hO={class:"my-5"},dO={class:"w-full text-md text-left bg-white text-black"},fO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),pO={class:"px-6 border"},gO={class:"px-6 border"},mO=["src"],_O={class:"px-6 border"},yO={class:"flex items-center gap-3"},vO=["onClick"],EO=m("div",{class:"flex justify-center"},"added image",-1),wO={__name:"detail",setup(t){const e=Lh(),n=fh(Oi),r=Sr(),s=ue(null),i=ue(null),o=Ci(),a=ue(0),l=ue([]);yt(async()=>{const f=vh(dh(n,o.query.name));(await Th(f)).forEach(v=>{l.value.push(v.data())}),a.value=l.value.length});const c=()=>{s.value.click()},u=async f=>{const y=f.target.files[0];a.value++,i.value=await e.setImage(y),h(a.value)},h=async f=>{await r.setData(o.query.name,`${f}`,{id:f,url:i.value}),window.location.href=`${o.fullPath}`},d=async f=>{await r.deleteData(o.query.name,f),window.location.href=`${o.fullPath}`};return(f,y)=>(D(),se("div",null,[de(dl,null,{content:_s(()=>[m("div",hO,[m("table",dO,[fO,m("tbody",null,[(D(!0),se(Fe,null,An(l.value,v=>(D(),se("tr",{class:"bg-white border-b",key:v.id},[m("td",pO,zn(v.id),1),m("td",gO,[m("img",{src:v.url,class:"h-[50px]",alt:""},null,8,mO)]),m("td",_O,[m("div",yO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:E=>d(v.id)}," Delete ",8,vO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:c},[EO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:u,ref_key:"imageInput",ref:s},null,544)])])])])])]),_:1})]))}},TO=[{path:"/",component:WC},{path:"/login",component:nx},{path:"/dashboard-about",component:UD},{path:"/dashboard-portfolio",component:ZD},{path:"/dashboard-detail",component:wO},{path:"/dashboard-skill",component:uO}],IO=aI({history:IT(),routes:TO}),AO=Bw(),Uh=Uw(iT);Uh.use(IO);Uh.use(AO);Uh.mount("#app");
