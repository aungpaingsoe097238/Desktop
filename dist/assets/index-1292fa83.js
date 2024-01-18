(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gc(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Se={},Yr=[],Pt=()=>{},pv=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kc=t=>t.startsWith("onUpdate:"),at=Object.assign,Qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gv=Object.prototype.hasOwnProperty,ge=(t,e)=>gv.call(t,e),ne=Array.isArray,Jr=t=>ga(t)==="[object Map]",fp=t=>ga(t)==="[object Set]",oe=t=>typeof t=="function",Ke=t=>typeof t=="string",ys=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",pp=t=>(Me(t)||oe(t))&&oe(t.then)&&oe(t.catch),gp=Object.prototype.toString,ga=t=>gp.call(t),mv=t=>ga(t).slice(8,-1),mp=t=>ga(t)==="[object Object]",Yc=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,To=Gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_v=/-(\w)/g,un=ma(t=>t.replace(_v,(e,n)=>n?n.toUpperCase():"")),yv=/\B([A-Z])/g,vs=ma(t=>t.replace(yv,"-$1").toLowerCase()),_a=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=ma(t=>t?`on${_a(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Yl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fh;const _p=()=>Fh||(Fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rr(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?Tv(r):Rr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Me(t))return t}const vv=/;(?![^(]*\))/g,Ev=/:([^]+)/,wv=/\/\*[^]*?\*\//g;function Tv(t){const e={};return t.replace(wv,"").split(vv).forEach(n=>{if(n){const r=n.split(Ev);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function lr(t){let e="";if(Ke(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=lr(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Av=Gc(Iv);function yp(t){return!!t||t===""}const Mt=t=>Ke(t)?t:t==null?"":ne(t)||Me(t)&&(t.toString===gp||!oe(t.toString))?JSON.stringify(t,vp,2):String(t),vp=(t,e)=>e&&e.__v_isRef?vp(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ml(r,i)+" =>"]=s,n),{})}:fp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ml(n))}:ys(e)?ml(e):Me(e)&&!ne(e)&&!mp(e)?String(e):e,ml=(t,e="")=>{var n;return ys(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class Ep{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function wp(t){return new Ep(t)}function bv(t,e=St){e&&e.active&&e.effects.push(t)}function Jc(){return St}function Tp(t){St&&St.cleanups.push(t)}let fr;class Xc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,bv(this,s)}get dirty(){if(this._dirtyLevel===1){Sr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Rv(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Pr()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=$n,n=fr;try{return $n=!0,fr=this,this._runnings++,$h(this),this.fn()}finally{Bh(this),this._runnings--,fr=n,$n=e}}stop(){var e;this.active&&($h(this),Bh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Rv(t){return t.value}function $h(t){t._trackId++,t._depsLength=0}function Bh(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ip(t.deps[e],t);t.deps.length=t._depsLength}}function Ip(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let $n=!0,Jl=0;const Ap=[];function Sr(){Ap.push($n),$n=!1}function Pr(){const t=Ap.pop();$n=t===void 0?!0:t}function Zc(){Jl++}function eu(){for(Jl--;!Jl&&Xl.length;)Xl.shift()()}function bp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ip(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Xl=[];function Rp(t,e,n){Zc();for(const r of t.keys())if(t.get(r)===r._trackId){if(r._dirtyLevel<e&&!(r._runnings&&!r.allowRecurse)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(r._shouldSchedule=!0,r.trigger())}r.scheduler&&r._shouldSchedule&&(!r._runnings||r.allowRecurse)&&(r._shouldSchedule=!1,Xl.push(r.scheduler))}eu()}const Sp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Mo=new WeakMap,pr=Symbol(""),Zl=Symbol("");function bt(t,e,n){if($n&&fr){let r=Mo.get(t);r||Mo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Sp(()=>r.delete(n))),bp(fr,s)}}function yn(t,e,n,r,s,i){const o=Mo.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&ne(t)){const a=Number(r);o.forEach((c,u)=>{(u==="length"||!ys(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":ne(t)?Yc(n)&&l.push(o.get("length")):(l.push(o.get(pr)),Jr(t)&&l.push(o.get(Zl)));break;case"delete":ne(t)||(l.push(o.get(pr)),Jr(t)&&l.push(o.get(Zl)));break;case"set":Jr(t)&&l.push(o.get(pr));break}Zc();for(const a of l)a&&Rp(a,2);eu()}function Sv(t,e){var n;return(n=Mo.get(t))==null?void 0:n.get(e)}const Pv=Gc("__proto__,__v_isRef,__isVue"),Pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ys)),jh=Cv();function Cv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=me(this);for(let i=0,o=this.length;i<o;i++)bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sr(),Zc();const r=me(this)[e].apply(this,n);return eu(),Pr(),r}}),t}function kv(t){const e=me(this);return bt(e,"has",t),e.hasOwnProperty(t)}class Cp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?qv:Op:i?Dp:xp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ne(e);if(!s){if(o&&ge(jh,n))return Reflect.get(jh,n,r);if(n==="hasOwnProperty")return kv}const l=Reflect.get(e,n,r);return(ys(n)?Pp.has(n):Pv(n))||(s||bt(e,"get",n),i)?l:ze(l)?o&&Yc(n)?l:l.value:Me(l)?s?Vp(l):Pi(l):l}}class kp extends Cp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const a=ss(i);if(!Lo(r)&&!ss(r)&&(i=me(i),r=me(r)),!ne(e)&&ze(i)&&!ze(r))return a?!1:(i.value=r,!0)}const o=ne(e)&&Yc(n)?Number(n)<e.length:ge(e,n),l=Reflect.set(e,n,r,s);return e===me(s)&&(o?Kn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),l}deleteProperty(e,n){const r=ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ys(n)||!Pp.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",ne(e)?"length":pr),Reflect.ownKeys(e)}}class xv extends Cp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dv=new kp,Ov=new xv,Nv=new kp(!0),tu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function no(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(Kn(e,i)&&bt(s,"get",e),bt(s,"get",i));const{has:o}=ya(s),l=r?tu:n?su:si;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function ro(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(Kn(t,s)&&bt(r,"has",t),bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function so(t,e=!1){return t=t.__v_raw,!e&&bt(me(t),"iterate",pr),Reflect.get(t,"size",t)}function qh(t){t=me(t);const e=me(this);return ya(e).has.call(e,t)||(e.add(t),yn(e,"add",t,t)),this}function Hh(t,e){e=me(e);const n=me(this),{has:r,get:s}=ya(n);let i=r.call(n,t);i||(t=me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Kn(e,o)&&yn(n,"set",t,e):yn(n,"add",t,e),this}function zh(t){const e=me(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&yn(e,"delete",t,void 0),i}function Wh(){const t=me(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function io(t,e){return function(r,s){const i=this,o=i.__v_raw,l=me(o),a=e?tu:t?su:si;return!t&&bt(l,"iterate",pr),o.forEach((c,u)=>r.call(s,a(c),a(u),i))}}function oo(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=Jr(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...r),u=n?tu:e?su:si;return!e&&bt(i,"iterate",a?Zl:pr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vv(){const t={get(i){return no(this,i)},get size(){return so(this)},has:ro,add:qh,set:Hh,delete:zh,clear:Wh,forEach:io(!1,!1)},e={get(i){return no(this,i,!1,!0)},get size(){return so(this)},has:ro,add:qh,set:Hh,delete:zh,clear:Wh,forEach:io(!1,!0)},n={get(i){return no(this,i,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:io(!0,!1)},r={get(i){return no(this,i,!0,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oo(i,!1,!1),n[i]=oo(i,!0,!1),e[i]=oo(i,!1,!0),r[i]=oo(i,!0,!0)}),[t,n,e,r]}const[Mv,Lv,Uv,Fv]=Vv();function nu(t,e){const n=e?t?Fv:Uv:t?Lv:Mv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const $v={get:nu(!1,!1)},Bv={get:nu(!1,!0)},jv={get:nu(!0,!1)},xp=new WeakMap,Dp=new WeakMap,Op=new WeakMap,qv=new WeakMap;function Hv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zv(t){return t.__v_skip||!Object.isExtensible(t)?0:Hv(mv(t))}function Pi(t){return ss(t)?t:ru(t,!1,Dv,$v,xp)}function Np(t){return ru(t,!1,Nv,Bv,Dp)}function Vp(t){return ru(t,!0,Ov,jv,Op)}function ru(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Bn(t){return ss(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function ss(t){return!!(t&&t.__v_isReadonly)}function Lo(t){return!!(t&&t.__v_isShallow)}function Mp(t){return Bn(t)||ss(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function va(t){return Vo(t,"__v_skip",!0),t}const si=t=>Me(t)?Pi(t):t,su=t=>Me(t)?Vp(t):t;class Lp{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Xc(()=>e(this._value),()=>Uo(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return(!e._cacheable||e.effect.dirty)&&Kn(e._value,e._value=e.effect.run())&&Uo(e,2),iu(e),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Wv(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=Pt):(r=t.get,s=t.set),new Lp(r,s,i||!s,n)}function iu(t){$n&&fr&&(t=me(t),bp(fr,t.dep||(t.dep=Sp(()=>t.dep=void 0,t instanceof Lp?t:void 0))))}function Uo(t,e=2,n){t=me(t);const r=t.dep;r&&Rp(r,e)}function ze(t){return!!(t&&t.__v_isRef===!0)}function fe(t){return Up(t,!1)}function Gv(t){return Up(t,!0)}function Up(t,e){return ze(t)?t:new Kv(t,e)}class Kv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:si(e)}get value(){return iu(this),this._value}set value(e){const n=this.__v_isShallow||Lo(e)||ss(e);e=n?e:me(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:si(e),Uo(this,2))}}function xe(t){return ze(t)?t.value:t}const Qv={get:(t,e,n)=>xe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fp(t){return Bn(t)?t:new Proxy(t,Qv)}class Yv{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>iu(this),()=>Uo(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function Jv(t){return new Yv(t)}function $p(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Zv(t,n);return e}class Xv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Sv(me(this._object),this._key)}}function Zv(t,e,n){const r=t[e];return ze(r)?r:new Xv(t,e,n)}/**
* @vue/runtime-core v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ea(i,e,n)}return s}function Bt(t,e,n,r){if(oe(t)){const i=jn(t,e,n,r);return i&&pp(i)&&i.catch(o=>{Ea(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}function Ea(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){jn(a,null,10,[t,o,l]);return}}eE(t,n,s,r)}function eE(t,e,n,r=!0){console.error(t)}let ii=!1,ec=!1;const ft=[];let Jt=0;const Xr=[];let kn=null,ar=0;const Bp=Promise.resolve();let ou=null;function au(t){const e=ou||Bp;return t?e.then(this?t.bind(this):t):e}function tE(t){let e=Jt+1,n=ft.length;for(;e<n;){const r=e+n>>>1,s=ft[r],i=oi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function lu(t){(!ft.length||!ft.includes(t,ii&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?ft.push(t):ft.splice(tE(t.id),0,t),jp())}function jp(){!ii&&!ec&&(ec=!0,ou=Bp.then(Hp))}function nE(t){const e=ft.indexOf(t);e>Jt&&ft.splice(e,1)}function rE(t){ne(t)?Xr.push(...t):(!kn||!kn.includes(t,t.allowRecurse?ar+1:ar))&&Xr.push(t),jp()}function Gh(t,e,n=ii?Jt+1:0){for(;n<ft.length;n++){const r=ft[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ft.splice(n,1),n--,r()}}}function qp(t){if(Xr.length){const e=[...new Set(Xr)].sort((n,r)=>oi(n)-oi(r));if(Xr.length=0,kn){kn.push(...e);return}for(kn=e,ar=0;ar<kn.length;ar++)kn[ar]();kn=null,ar=0}}const oi=t=>t.id==null?1/0:t.id,sE=(t,e)=>{const n=oi(t)-oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hp(t){ec=!1,ii=!0,ft.sort(sE);const e=Pt;try{for(Jt=0;Jt<ft.length;Jt++){const n=ft[Jt];n&&n.active!==!1&&jn(n,null,14)}}finally{Jt=0,ft.length=0,qp(),ii=!1,ou=null,(ft.length||Xr.length)&&Hp()}}function iE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Se;d&&(s=n.map(p=>Ke(p)?p.trim():p)),h&&(s=n.map(Yl))}let l,a=r[l=gl(e)]||r[l=gl(un(e))];!a&&i&&(a=r[l=gl(vs(e))]),a&&Bt(a,t,6,s);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Bt(c,t,6,s)}}function zp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!oe(t)){const a=c=>{const u=zp(c,e,!0);u&&(l=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(Me(t)&&r.set(t,null),null):(ne(i)?i.forEach(a=>o[a]=null):at(o,i),Me(t)&&r.set(t,o),o)}function wa(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,vs(e))||ge(t,e))}let We=null,Ta=null;function Fo(t){const e=We;return We=t,Ta=t&&t.type.__scopeId||null,e}function oE(t){Ta=t}function aE(){Ta=null}function nn(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sd(-1);const i=Fo(e);let o;try{o=t(...s)}finally{Fo(i),r._d&&sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _l(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:E}=t;let v,R;const x=Fo(t);try{if(n.shapeFlag&4){const B=s||r,Z=B;v=Yt(u.call(Z,B,h,i,p,d,_)),R=a}else{const B=e;v=Yt(B.length>1?B(i,{attrs:a,slots:l,emit:c}):B(i,null)),R=e.props?a:lE(a)}}catch(B){Gs.length=0,Ea(B,t,1),v=le(Qn)}let D=v;if(R&&E!==!1){const B=Object.keys(R),{shapeFlag:Z}=D;B.length&&Z&7&&(o&&B.some(Kc)&&(R=cE(R,o)),D=is(D,R))}return n.dirs&&(D=is(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),v=D,Fo(x),v}const lE=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},cE=(t,e)=>{const n={};for(const r in t)(!Kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function uE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Kh(r,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!wa(c,d))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Kh(r,o,c):!0:!!o;return!1}function Kh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wa(n,i))return!0}return!1}function hE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wp="components";function Gp(t,e){return fE(Wp,t,!0,e)||t}const dE=Symbol.for("v-ndc");function fE(t,e,n=!0,r=!1){const s=We||rt;if(s){const i=s.type;if(t===Wp){const l=ow(i,!1);if(l&&(l===e||l===un(e)||l===_a(un(e))))return i}const o=Qh(s[t]||i[t],e)||Qh(s.appContext[t],e);return!o&&r?i:o}}function Qh(t,e){return t&&(t[e]||t[un(e)]||t[_a(un(e))])}const pE=t=>t.__isSuspense;function gE(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):rE(t)}const mE=Symbol.for("v-scx"),_E=()=>Lt(mE),ao={};function gr(t,e,n){return Kp(t,e,n)}function Kp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:l}=Se){if(e&&i){const j=e;e=(...W)=>{j(...W),Z()}}const a=rt,c=j=>r===!0?j:cr(j,r===!1?1:void 0);let u,h=!1,d=!1;if(ze(t)?(u=()=>t.value,h=Lo(t)):Bn(t)?(u=()=>c(t),h=!0):ne(t)?(d=!0,h=t.some(j=>Bn(j)||Lo(j)),u=()=>t.map(j=>{if(ze(j))return j.value;if(Bn(j))return c(j);if(oe(j))return jn(j,a,2)})):oe(t)?e?u=()=>jn(t,a,2):u=()=>(p&&p(),Bt(t,a,3,[_])):u=Pt,e&&r){const j=u;u=()=>cr(j())}let p,_=j=>{p=D.onStop=()=>{jn(j,a,4),p=D.onStop=void 0}},E;if(Sa)if(_=Pt,e?n&&Bt(e,a,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const j=_E();E=j.__watcherHandles||(j.__watcherHandles=[])}else return Pt;let v=d?new Array(t.length).fill(ao):ao;const R=()=>{if(!(!D.active||!D.dirty))if(e){const j=D.run();(r||h||(d?j.some((W,X)=>Kn(W,v[X])):Kn(j,v)))&&(p&&p(),Bt(e,a,3,[j,v===ao?void 0:d&&v[0]===ao?[]:v,_]),v=j)}else D.run()};R.allowRecurse=!!e;let x;s==="sync"?x=R:s==="post"?x=()=>It(R,a&&a.suspense):(R.pre=!0,a&&(R.id=a.uid),x=()=>lu(R));const D=new Xc(u,Pt,x),B=Jc(),Z=()=>{D.stop(),B&&Qc(B.effects,D)};return e?n?R():v=D.run():s==="post"?It(D.run.bind(D),a&&a.suspense):D.run(),E&&E.push(Z),Z}function yE(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?Qp(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Ci(this),l=Kp(s,i.bind(r),n);return o(),l}function Qp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function cr(t,e,n=0,r){if(!Me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ze(t))cr(t.value,e,n,r);else if(ne(t))for(let s=0;s<t.length;s++)cr(t[s],e,n,r);else if(fp(t)||Jr(t))t.forEach(s=>{cr(s,e,n,r)});else if(mp(t))for(const s in t)cr(t[s],e,n,r);return t}function tc(t,e){if(We===null)return t;const n=Pa(We)||We.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,a=Se]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&cr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(Sr(),Bt(a,n,8,[t.el,l,t,e]),Pr())}}/*! #__NO_SIDE_EFFECTS__ */function Ia(t,e){return oe(t)?(()=>at({name:t.name},e,{setup:t}))():t}const zs=t=>!!t.type.__asyncLoader,Yp=t=>t.type.__isKeepAlive;function vE(t,e){Jp(t,"a",e)}function EE(t,e){Jp(t,"da",e)}function Jp(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yp(s.parent.vnode)&&wE(r,e,n,s),s=s.parent}}function wE(t,e,n,r){const s=Aa(e,t,r,!0);cu(()=>{Qc(r[e],s)},n)}function Aa(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sr();const l=Ci(n),a=Bt(e,n,t,o);return l(),Pr(),a});return r?s.unshift(i):s.push(i),i}}const An=t=>(e,n=rt)=>(!Sa||t==="sp")&&Aa(t,(...r)=>e(...r),n),TE=An("bm"),wt=An("m"),IE=An("bu"),AE=An("u"),bE=An("bum"),cu=An("um"),RE=An("sp"),SE=An("rtg"),PE=An("rtc");function CE(t,e=rt){Aa("ec",t,e)}function Cr(t,e,n,r){let s;const i=n&&n[r];if(ne(t)||Ke(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function uu(t,e,n={},r,s){if(We.isCE||We.parent&&zs(We.parent)&&We.parent.isCE)return e!=="default"&&(n.name=e),le("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),I();const o=i&&Xp(i(n)),l=V(qe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Xp(t){return t.some(e=>Bo(e)?!(e.type===Qn||e.type===qe&&!Xp(e.children)):!0)?t:null}const nc=t=>t?ug(t)?Pa(t)||t.proxy:nc(t.parent):null,Ws=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,lu(t.update)}),$nextTick:t=>t.n||(t.n=au.bind(t.proxy)),$watch:t=>yE.bind(t)}),yl=(t,e)=>t!==Se&&!t.__isScriptSetup&&ge(t,e),kE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(yl(r,e))return o[e]=1,r[e];if(s!==Se&&ge(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=3,i[e];if(n!==Se&&ge(n,e))return o[e]=4,n[e];rc&&(o[e]=0)}}const u=Ws[e];let h,d;if(u)return e==="$attrs"&&bt(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Se&&ge(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return yl(s,e)?(s[e]=n,!0):r!==Se&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Se&&ge(t,o)||yl(e,o)||(l=i[0])&&ge(l,o)||ge(r,o)||ge(Ws,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yh(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function xE(t){const e=hu(t),n=t.proxy,r=t.ctx;rc=!1,e.beforeCreate&&Jh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:E,deactivated:v,beforeDestroy:R,beforeUnmount:x,destroyed:D,unmounted:B,render:Z,renderTracked:j,renderTriggered:W,errorCaptured:X,serverPrefetch:G,expose:_e,inheritAttrs:Oe,components:$e,directives:Ze,filters:rr}=e;if(c&&DE(c,r,null),o)for(const Ae in o){const Ee=o[Ae];oe(Ee)&&(r[Ae]=Ee.bind(n))}if(s){const Ae=s.call(n,n);Me(Ae)&&(t.data=Pi(Ae))}if(rc=!0,i)for(const Ae in i){const Ee=i[Ae],fn=oe(Ee)?Ee.bind(n,n):oe(Ee.get)?Ee.get.bind(n,n):Pt,bn=!oe(Ee)&&oe(Ee.set)?Ee.set.bind(n):Pt,Gt=ke({get:fn,set:bn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Tt=>Gt.value=Tt})}if(l)for(const Ae in l)Zp(l[Ae],r,n,Ae);if(a){const Ae=oe(a)?a.call(n):a;Reflect.ownKeys(Ae).forEach(Ee=>{Ao(Ee,Ae[Ee])})}u&&Jh(u,t,"c");function ye(Ae,Ee){ne(Ee)?Ee.forEach(fn=>Ae(fn.bind(n))):Ee&&Ae(Ee.bind(n))}if(ye(TE,h),ye(wt,d),ye(IE,p),ye(AE,_),ye(vE,E),ye(EE,v),ye(CE,X),ye(PE,j),ye(SE,W),ye(bE,x),ye(cu,B),ye(RE,G),ne(_e))if(_e.length){const Ae=t.exposed||(t.exposed={});_e.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>n[Ee],set:fn=>n[Ee]=fn})})}else t.exposed||(t.exposed={});Z&&t.render===Pt&&(t.render=Z),Oe!=null&&(t.inheritAttrs=Oe),$e&&(t.components=$e),Ze&&(t.directives=Ze)}function DE(t,e,n=Pt){ne(t)&&(t=sc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Jh(t,e,n){Bt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zp(t,e,n,r){const s=r.includes(".")?Qp(n,r):()=>n[r];if(Ke(t)){const i=e[t];oe(i)&&gr(s,i)}else if(oe(t))gr(s,t.bind(n));else if(Me(t))if(ne(t))t.forEach(i=>Zp(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&gr(s,i,t)}}function hu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(c=>$o(a,c,o,!0)),$o(a,e,o)),Me(e)&&i.set(e,a),a}function $o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$o(t,i,n,!0),s&&s.forEach(o=>$o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=OE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const OE={data:Xh,props:Zh,emits:Zh,methods:Us,computed:Us,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Us,directives:Us,watch:VE,provide:Xh,inject:NE};function Xh(t,e){return e?t?function(){return at(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function NE(t,e){return Us(sc(t),sc(e))}function sc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?at(Object.create(null),t,e):e}function Zh(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:at(Object.create(null),Yh(t),Yh(e??{})):e}function VE(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=vt(t[r],e[r]);return n}function eg(){return{app:null,config:{isNativeTag:pv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ME=0;function LE(t,e){return function(r,s=null){oe(r)||(r=at({},r)),s!=null&&!Me(s)&&(s=null);const i=eg(),o=new WeakSet;let l=!1;const a=i.app={_uid:ME++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(a,...u)):oe(c)&&(o.add(c),c(a,...u))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,u){return u?(i.components[c]=u,a):i.components[c]},directive(c,u){return u?(i.directives[c]=u,a):i.directives[c]},mount(c,u,h){if(!l){const d=le(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Pa(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return i.provides[c]=u,a},runWithContext(c){ai=a;try{return c()}finally{ai=null}}};return a}}let ai=null;function Ao(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=rt||We;if(r||ai){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ai._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function UE(){return!!(rt||We||ai)}function FE(t,e,n,r=!1){const s={},i={};Vo(i,Ra,1),t.propsDefaults=Object.create(null),tg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Np(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $E(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=me(s),[a]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(wa(t.emitsOptions,d))continue;const p=e[d];if(a)if(ge(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const _=un(d);s[_]=ic(a,l,_,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{tg(t,e,s,i)&&(c=!0);let u;for(const h in l)(!e||!ge(e,h)&&((u=vs(h))===h||!ge(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ic(a,l,h,void 0,t,!0)):delete s[h]);if(i!==l)for(const h in i)(!e||!ge(e,h))&&(delete i[h],c=!0)}c&&yn(t,"set","$attrs")}function tg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(To(a))continue;const c=e[a];let u;s&&ge(s,u=un(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:wa(t.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(i){const a=me(n),c=l||Se;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ic(s,a,h,c[h],t,!ge(c,h))}}return o}function ic(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ge(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&oe(a)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Ci(s);r=c[n]=a.call(null,e),u()}}else r=a}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===vs(n))&&(r=!0))}return r}function ng(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let a=!1;if(!oe(t)){const u=h=>{a=!0;const[d,p]=ng(h,e,!0);at(o,d),p&&l.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return Me(t)&&r.set(t,Yr),Yr;if(ne(i))for(let u=0;u<i.length;u++){const h=un(i[u]);ed(h)&&(o[h]=Se)}else if(i)for(const u in i){const h=un(u);if(ed(h)){const d=i[u],p=o[h]=ne(d)||oe(d)?{type:d}:at({},d);if(p){const _=rd(Boolean,p.type),E=rd(String,p.type);p[0]=_>-1,p[1]=E<0||_<E,(_>-1||ge(p,"default"))&&l.push(h)}}}const c=[o,l];return Me(t)&&r.set(t,c),c}function ed(t){return t[0]!=="$"}function td(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function nd(t,e){return td(t)===td(e)}function rd(t,e){return ne(e)?e.findIndex(n=>nd(n,t)):oe(e)&&nd(e,t)?0:-1}const rg=t=>t[0]==="_"||t==="$stable",du=t=>ne(t)?t.map(Yt):[Yt(t)],BE=(t,e,n)=>{if(e._n)return e;const r=nn((...s)=>du(e(...s)),n);return r._c=!1,r},sg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rg(s))continue;const i=t[s];if(oe(i))e[s]=BE(s,i,r);else if(i!=null){const o=du(i);e[s]=()=>o}}},ig=(t,e)=>{const n=du(e);t.slots.default=()=>n},jE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),Vo(e,"_",n)):sg(e,t.slots={})}else t.slots={},e&&ig(t,e);Vo(t.slots,Ra,1)},qE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Se;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(at(s,e),!n&&l===1&&delete s._):(i=!e.$stable,sg(e,s)),o=e}else e&&(ig(t,e),o={default:1});if(i)for(const l in s)!rg(l)&&o[l]==null&&delete s[l]};function oc(t,e,n,r,s=!1){if(ne(t)){t.forEach((d,p)=>oc(d,e&&(ne(e)?e[p]:e),n,r,s));return}if(zs(r)&&!s)return;const i=r.shapeFlag&4?Pa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Se?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ke(c)?(u[c]=null,ge(h,c)&&(h[c]=null)):ze(c)&&(c.value=null)),oe(a))jn(a,l,12,[o,u]);else{const d=Ke(a),p=ze(a);if(d||p){const _=()=>{if(t.f){const E=d?ge(h,a)?h[a]:u[a]:a.value;s?ne(E)&&Qc(E,i):ne(E)?E.includes(i)||E.push(i):d?(u[a]=[i],ge(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,ge(h,a)&&(h[a]=o)):p&&(a.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,It(_,n)):_()}}}const It=gE;function HE(t){return zE(t)}function zE(t,e){const n=_p();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Pt,insertStaticContent:_}=t,E=(f,g,y,A=null,w=null,k=null,L=void 0,C=null,O=!!g.dynamicChildren)=>{if(f===g)return;f&&!Ds(f,g)&&(A=T(f),Tt(f,w,k,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:P,ref:$,shapeFlag:J}=g;switch(P){case ba:v(f,g,y,A);break;case Qn:R(f,g,y,A);break;case bo:f==null&&x(g,y,A,L);break;case qe:$e(f,g,y,A,w,k,L,C,O);break;default:J&1?Z(f,g,y,A,w,k,L,C,O):J&6?Ze(f,g,y,A,w,k,L,C,O):(J&64||J&128)&&P.process(f,g,y,A,w,k,L,C,O,K)}$!=null&&w&&oc($,f&&f.ref,k,g||f,!g)},v=(f,g,y,A)=>{if(f==null)r(g.el=l(g.children),y,A);else{const w=g.el=f.el;g.children!==f.children&&c(w,g.children)}},R=(f,g,y,A)=>{f==null?r(g.el=a(g.children||""),y,A):g.el=f.el},x=(f,g,y,A)=>{[f.el,f.anchor]=_(f.children,g,y,A,f.el,f.anchor)},D=({el:f,anchor:g},y,A)=>{let w;for(;f&&f!==g;)w=d(f),r(f,y,A),f=w;r(g,y,A)},B=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),s(f),f=y;s(g)},Z=(f,g,y,A,w,k,L,C,O)=>{g.type==="svg"?L="svg":g.type==="math"&&(L="mathml"),f==null?j(g,y,A,w,k,L,C,O):G(f,g,w,k,L,C,O)},j=(f,g,y,A,w,k,L,C)=>{let O,P;const{props:$,shapeFlag:J,transition:Q,dirs:se}=f;if(O=f.el=o(f.type,k,$&&$.is,$),J&8?u(O,f.children):J&16&&X(f.children,O,null,A,w,vl(f,k),L,C),se&&sr(f,null,A,"created"),W(O,f,f.scopeId,L,A),$){for(const be in $)be!=="value"&&!To(be)&&i(O,be,null,$[be],k,f.children,A,w,ct);"value"in $&&i(O,"value",null,$.value,k),(P=$.onVnodeBeforeMount)&&Qt(P,A,f)}se&&sr(f,null,A,"beforeMount");const ue=WE(w,Q);ue&&Q.beforeEnter(O),r(O,g,y),((P=$&&$.onVnodeMounted)||ue||se)&&It(()=>{P&&Qt(P,A,f),ue&&Q.enter(O),se&&sr(f,null,A,"mounted")},w)},W=(f,g,y,A,w)=>{if(y&&p(f,y),A)for(let k=0;k<A.length;k++)p(f,A[k]);if(w){let k=w.subTree;if(g===k){const L=w.vnode;W(f,L,L.scopeId,L.slotScopeIds,w.parent)}}},X=(f,g,y,A,w,k,L,C,O=0)=>{for(let P=O;P<f.length;P++){const $=f[P]=C?xn(f[P]):Yt(f[P]);E(null,$,g,y,A,w,k,L,C)}},G=(f,g,y,A,w,k,L)=>{const C=g.el=f.el;let{patchFlag:O,dynamicChildren:P,dirs:$}=g;O|=f.patchFlag&16;const J=f.props||Se,Q=g.props||Se;let se;if(y&&ir(y,!1),(se=Q.onVnodeBeforeUpdate)&&Qt(se,y,g,f),$&&sr(g,f,y,"beforeUpdate"),y&&ir(y,!0),P?_e(f.dynamicChildren,P,C,y,A,vl(g,w),k):L||Ee(f,g,C,null,y,A,vl(g,w),k,!1),O>0){if(O&16)Oe(C,g,J,Q,y,A,w);else if(O&2&&J.class!==Q.class&&i(C,"class",null,Q.class,w),O&4&&i(C,"style",J.style,Q.style,w),O&8){const ue=g.dynamicProps;for(let be=0;be<ue.length;be++){const Ve=ue[be],Qe=J[Ve],Ut=Q[Ve];(Ut!==Qe||Ve==="value")&&i(C,Ve,Qe,Ut,w,f.children,y,A,ct)}}O&1&&f.children!==g.children&&u(C,g.children)}else!L&&P==null&&Oe(C,g,J,Q,y,A,w);((se=Q.onVnodeUpdated)||$)&&It(()=>{se&&Qt(se,y,g,f),$&&sr(g,f,y,"updated")},A)},_e=(f,g,y,A,w,k,L)=>{for(let C=0;C<g.length;C++){const O=f[C],P=g[C],$=O.el&&(O.type===qe||!Ds(O,P)||O.shapeFlag&70)?h(O.el):y;E(O,P,$,null,A,w,k,L,!0)}},Oe=(f,g,y,A,w,k,L)=>{if(y!==A){if(y!==Se)for(const C in y)!To(C)&&!(C in A)&&i(f,C,y[C],null,L,g.children,w,k,ct);for(const C in A){if(To(C))continue;const O=A[C],P=y[C];O!==P&&C!=="value"&&i(f,C,P,O,L,g.children,w,k,ct)}"value"in A&&i(f,"value",y.value,A.value,L)}},$e=(f,g,y,A,w,k,L,C,O)=>{const P=g.el=f?f.el:l(""),$=g.anchor=f?f.anchor:l("");let{patchFlag:J,dynamicChildren:Q,slotScopeIds:se}=g;se&&(C=C?C.concat(se):se),f==null?(r(P,y,A),r($,y,A),X(g.children||[],y,$,w,k,L,C,O)):J>0&&J&64&&Q&&f.dynamicChildren?(_e(f.dynamicChildren,Q,y,w,k,L,C),(g.key!=null||w&&g===w.subTree)&&og(f,g,!0)):Ee(f,g,y,$,w,k,L,C,O)},Ze=(f,g,y,A,w,k,L,C,O)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?w.ctx.activate(g,y,A,L,O):rr(g,y,A,w,k,L,O):Dt(f,g,O)},rr=(f,g,y,A,w,k,L)=>{const C=f.component=tw(f,A,w);if(Yp(f)&&(C.ctx.renderer=K),nw(C),C.asyncDep){if(w&&w.registerDep(C,ye),!f.el){const O=C.subTree=le(Qn);R(null,O,g,y)}}else ye(C,f,g,y,w,k,L)},Dt=(f,g,y)=>{const A=g.component=f.component;if(uE(f,g,y))if(A.asyncDep&&!A.asyncResolved){Ae(A,g,y);return}else A.next=g,nE(A.update),A.effect.dirty=!0,A.update();else g.el=f.el,A.vnode=g},ye=(f,g,y,A,w,k,L)=>{const C=()=>{if(f.isMounted){let{next:$,bu:J,u:Q,parent:se,vnode:ue}=f;{const Ur=ag(f);if(Ur){$&&($.el=ue.el,Ae(f,$,L)),Ur.asyncDep.then(()=>{f.isUnmounted||C()});return}}let be=$,Ve;ir(f,!1),$?($.el=ue.el,Ae(f,$,L)):$=ue,J&&Io(J),(Ve=$.props&&$.props.onVnodeBeforeUpdate)&&Qt(Ve,se,$,ue),ir(f,!0);const Qe=_l(f),Ut=f.subTree;f.subTree=Qe,E(Ut,Qe,h(Ut.el),T(Ut),f,w,k),$.el=Qe.el,be===null&&hE(f,Qe.el),Q&&It(Q,w),(Ve=$.props&&$.props.onVnodeUpdated)&&It(()=>Qt(Ve,se,$,ue),w)}else{let $;const{el:J,props:Q}=g,{bm:se,m:ue,parent:be}=f,Ve=zs(g);if(ir(f,!1),se&&Io(se),!Ve&&($=Q&&Q.onVnodeBeforeMount)&&Qt($,be,g),ir(f,!0),J&&Ne){const Qe=()=>{f.subTree=_l(f),Ne(J,f.subTree,f,w,null)};Ve?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Qe()):Qe()}else{const Qe=f.subTree=_l(f);E(null,Qe,y,A,f,w,k),g.el=Qe.el}if(ue&&It(ue,w),!Ve&&($=Q&&Q.onVnodeMounted)){const Qe=g;It(()=>Qt($,be,Qe),w)}(g.shapeFlag&256||be&&zs(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&It(f.a,w),f.isMounted=!0,g=y=A=null}},O=f.effect=new Xc(C,Pt,()=>lu(P),f.scope),P=f.update=()=>{O.dirty&&O.run()};P.id=f.uid,ir(f,!0),P()},Ae=(f,g,y)=>{g.component=f;const A=f.vnode.props;f.vnode=g,f.next=null,$E(f,g.props,A,y),qE(f,g.children,y),Sr(),Gh(f),Pr()},Ee=(f,g,y,A,w,k,L,C,O=!1)=>{const P=f&&f.children,$=f?f.shapeFlag:0,J=g.children,{patchFlag:Q,shapeFlag:se}=g;if(Q>0){if(Q&128){bn(P,J,y,A,w,k,L,C,O);return}else if(Q&256){fn(P,J,y,A,w,k,L,C,O);return}}se&8?($&16&&ct(P,w,k),J!==P&&u(y,J)):$&16?se&16?bn(P,J,y,A,w,k,L,C,O):ct(P,w,k,!0):($&8&&u(y,""),se&16&&X(J,y,A,w,k,L,C,O))},fn=(f,g,y,A,w,k,L,C,O)=>{f=f||Yr,g=g||Yr;const P=f.length,$=g.length,J=Math.min(P,$);let Q;for(Q=0;Q<J;Q++){const se=g[Q]=O?xn(g[Q]):Yt(g[Q]);E(f[Q],se,y,null,w,k,L,C,O)}P>$?ct(f,w,k,!0,!1,J):X(g,y,A,w,k,L,C,O,J)},bn=(f,g,y,A,w,k,L,C,O)=>{let P=0;const $=g.length;let J=f.length-1,Q=$-1;for(;P<=J&&P<=Q;){const se=f[P],ue=g[P]=O?xn(g[P]):Yt(g[P]);if(Ds(se,ue))E(se,ue,y,null,w,k,L,C,O);else break;P++}for(;P<=J&&P<=Q;){const se=f[J],ue=g[Q]=O?xn(g[Q]):Yt(g[Q]);if(Ds(se,ue))E(se,ue,y,null,w,k,L,C,O);else break;J--,Q--}if(P>J){if(P<=Q){const se=Q+1,ue=se<$?g[se].el:A;for(;P<=Q;)E(null,g[P]=O?xn(g[P]):Yt(g[P]),y,ue,w,k,L,C,O),P++}}else if(P>Q)for(;P<=J;)Tt(f[P],w,k,!0),P++;else{const se=P,ue=P,be=new Map;for(P=ue;P<=Q;P++){const Rt=g[P]=O?xn(g[P]):Yt(g[P]);Rt.key!=null&&be.set(Rt.key,P)}let Ve,Qe=0;const Ut=Q-ue+1;let Ur=!1,Mh=0;const xs=new Array(Ut);for(P=0;P<Ut;P++)xs[P]=0;for(P=se;P<=J;P++){const Rt=f[P];if(Qe>=Ut){Tt(Rt,w,k,!0);continue}let Kt;if(Rt.key!=null)Kt=be.get(Rt.key);else for(Ve=ue;Ve<=Q;Ve++)if(xs[Ve-ue]===0&&Ds(Rt,g[Ve])){Kt=Ve;break}Kt===void 0?Tt(Rt,w,k,!0):(xs[Kt-ue]=P+1,Kt>=Mh?Mh=Kt:Ur=!0,E(Rt,g[Kt],y,null,w,k,L,C,O),Qe++)}const Lh=Ur?GE(xs):Yr;for(Ve=Lh.length-1,P=Ut-1;P>=0;P--){const Rt=ue+P,Kt=g[Rt],Uh=Rt+1<$?g[Rt+1].el:A;xs[P]===0?E(null,Kt,y,Uh,w,k,L,C,O):Ur&&(Ve<0||P!==Lh[Ve]?Gt(Kt,y,Uh,2):Ve--)}}},Gt=(f,g,y,A,w=null)=>{const{el:k,type:L,transition:C,children:O,shapeFlag:P}=f;if(P&6){Gt(f.component.subTree,g,y,A);return}if(P&128){f.suspense.move(g,y,A);return}if(P&64){L.move(f,g,y,K);return}if(L===qe){r(k,g,y);for(let J=0;J<O.length;J++)Gt(O[J],g,y,A);r(f.anchor,g,y);return}if(L===bo){D(f,g,y);return}if(A!==2&&P&1&&C)if(A===0)C.beforeEnter(k),r(k,g,y),It(()=>C.enter(k),w);else{const{leave:J,delayLeave:Q,afterLeave:se}=C,ue=()=>r(k,g,y),be=()=>{J(k,()=>{ue(),se&&se()})};Q?Q(k,ue,be):be()}else r(k,g,y)},Tt=(f,g,y,A=!1,w=!1)=>{const{type:k,props:L,ref:C,children:O,dynamicChildren:P,shapeFlag:$,patchFlag:J,dirs:Q}=f;if(C!=null&&oc(C,null,y,f,!0),$&256){g.ctx.deactivate(f);return}const se=$&1&&Q,ue=!zs(f);let be;if(ue&&(be=L&&L.onVnodeBeforeUnmount)&&Qt(be,g,f),$&6)to(f.component,y,A);else{if($&128){f.suspense.unmount(y,A);return}se&&sr(f,null,g,"beforeUnmount"),$&64?f.type.remove(f,g,y,w,K,A):P&&(k!==qe||J>0&&J&64)?ct(P,g,y,!1,!0):(k===qe&&J&384||!w&&$&16)&&ct(O,g,y),A&&Mr(f)}(ue&&(be=L&&L.onVnodeUnmounted)||se)&&It(()=>{be&&Qt(be,g,f),se&&sr(f,null,g,"unmounted")},y)},Mr=f=>{const{type:g,el:y,anchor:A,transition:w}=f;if(g===qe){Lr(y,A);return}if(g===bo){B(f);return}const k=()=>{s(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:L,delayLeave:C}=w,O=()=>L(y,k);C?C(f.el,k,O):O()}else k()},Lr=(f,g)=>{let y;for(;f!==g;)y=d(f),s(f),f=y;s(g)},to=(f,g,y)=>{const{bum:A,scope:w,update:k,subTree:L,um:C}=f;A&&Io(A),w.stop(),k&&(k.active=!1,Tt(L,f,g,y)),C&&It(C,g),It(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ct=(f,g,y,A=!1,w=!1,k=0)=>{for(let L=k;L<f.length;L++)Tt(f[L],g,y,A,w)},T=f=>f.shapeFlag&6?T(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let F=!1;const M=(f,g,y)=>{f==null?g._vnode&&Tt(g._vnode,null,null,!0):E(g._vnode||null,f,g,null,null,null,y),F||(F=!0,Gh(),qp(),F=!1),g._vnode=f},K={p:E,um:Tt,m:Gt,r:Mr,mt:rr,mc:X,pc:Ee,pbc:_e,n:T,o:t};let we,Ne;return e&&([we,Ne]=e(K)),{render:M,hydrate:we,createApp:LE(M,we)}}function vl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ir({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function WE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function og(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=xn(s[i]),l.el=o.el),n||og(o,l)),l.type===ba&&(l.el=o.el)}}function GE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const a=t.length;for(r=0;r<a;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ag(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ag(e)}const KE=t=>t.__isTeleport,qe=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),Gs=[];let Ft=null;function I(t=!1){Gs.push(Ft=t?null:[])}function QE(){Gs.pop(),Ft=Gs[Gs.length-1]||null}let li=1;function sd(t){li+=t}function lg(t){return t.dynamicChildren=li>0?Ft||Yr:null,QE(),li>0&&Ft&&Ft.push(t),t}function ce(t,e,n,r,s,i){return lg(m(t,e,n,r,s,i,!0))}function V(t,e,n,r,s){return lg(le(t,e,n,r,s,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function Ds(t,e){return t.type===e.type&&t.key===e.key}const Ra="__vInternal",cg=({key:t})=>t??null,Ro=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||ze(t)||oe(t)?{i:We,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&Ro(e),scopeId:Ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return l?(fu(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=Ke(n)?8:16),li>0&&!o&&Ft&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ft.push(a),a}const le=YE;function YE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dE)&&(t=Qn),Bo(t)){const l=is(t,e,!0);return n&&fu(l,n),li>0&&!i&&Ft&&(l.shapeFlag&6?Ft[Ft.indexOf(t)]=l:Ft.push(l)),l.patchFlag|=-2,l}if(aw(t)&&(t=t.__vccOpts),e){e=JE(e);let{class:l,style:a}=e;l&&!Ke(l)&&(e.class=lr(l)),Me(a)&&(Mp(a)&&!ne(a)&&(a=at({},a)),e.style=Rr(a))}const o=Ke(t)?1:pE(t)?128:KE(t)?64:Me(t)?4:oe(t)?2:0;return m(t,e,n,r,s,o,i,!0)}function JE(t){return t?Mp(t)||Ra in t?at({},t):t:null}function is(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?XE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&cg(l),ref:e&&e.ref?n&&s?ne(s)?s.concat(Ro(e)):[s,Ro(e)]:Ro(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qn(t=" ",e=0){return le(ba,null,t,e)}function Es(t,e){const n=le(bo,null,t);return n.staticCount=e,n}function U(t="",e=!1){return e?(I(),V(Qn,null,t)):le(Qn,null,t)}function Yt(t){return t==null||typeof t=="boolean"?le(Qn):ne(t)?le(qe,null,t.slice()):typeof t=="object"?xn(t):le(ba,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ra in e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[qn(e)]):n=8);t.children=e,t.shapeFlag|=n}function XE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=lr([e.class,r.class]));else if(s==="style")e.style=Rr([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){Bt(t,e,7,[n,r])}const ZE=eg();let ew=0;function tw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ZE,i={uid:ew++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ng(r,s),emitsOptions:zp(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iE.bind(null,i),t.ce&&t.ce(i),i}let rt=null,jo,ac;{const t=_p(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};jo=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),ac=e("__VUE_SSR_SETTERS__",n=>Sa=n)}const Ci=t=>{const e=rt;return jo(t),t.scope.on(),()=>{t.scope.off(),jo(e)}},id=()=>{rt&&rt.scope.off(),jo(null)};function ug(t){return t.vnode.shapeFlag&4}let Sa=!1;function nw(t,e=!1){e&&ac(e);const{props:n,children:r}=t.vnode,s=ug(t);FE(t,n,s,e),jE(t,r);const i=s?rw(t,e):void 0;return e&&ac(!1),i}function rw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=va(new Proxy(t.ctx,kE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?iw(t):null,i=Ci(t);Sr();const o=jn(r,t,0,[t.props,s]);if(Pr(),i(),pp(o)){if(o.then(id,id),e)return o.then(l=>{od(t,l,e)}).catch(l=>{Ea(l,t,0)});t.asyncDep=o}else od(t,o,e)}else hg(t,e)}function od(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Fp(e)),hg(t,n)}let ad;function hg(t,e,n){const r=t.type;if(!t.render){if(!e&&ad&&!r.render){const s=r.template||hu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=r,c=at(at({isCustomElement:i,delimiters:l},o),a);r.render=ad(s,c)}}t.render=r.render||Pt}{const s=Ci(t);Sr();try{xE(t)}finally{Pr(),s()}}}function sw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}}))}function iw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sw(t)},slots:t.slots,emit:t.emit,expose:e}}function Pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fp(va(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}}))}function ow(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function aw(t){return oe(t)&&"__vccOpts"in t}const ke=(t,e)=>Wv(t,e,Sa);function dg(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ne(e)?Bo(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bo(n)&&(n=[n]),le(t,e,n))}const lw="3.4.14";/**
* @vue/runtime-dom v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const cw="http://www.w3.org/2000/svg",uw="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,ld=Dn&&Dn.createElement("template"),hw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Dn.createElementNS(cw,t):e==="mathml"?Dn.createElementNS(uw,t):Dn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ld.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const l=ld.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dw=Symbol("_vtc");function fw(t,e,n){const r=t[dw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pw=Symbol("_vod"),gw=Symbol("");function mw(t,e,n){const r=t.style,s=r.display,i=Ke(n);if(n&&!i){if(e&&!Ke(e))for(const o in e)n[o]==null&&lc(r,o,"");for(const o in n)lc(r,o,n[o])}else if(i){if(e!==n){const o=r[gw];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");pw in t&&(r.display=s)}const cd=/\s*!important$/;function lc(t,e,n){if(ne(n))n.forEach(r=>lc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_w(t,e);cd.test(n)?t.setProperty(vs(r),n.replace(cd,""),"important"):t[r]=n}}const ud=["Webkit","Moz","ms"],El={};function _w(t,e){const n=El[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return El[e]=r;r=_a(r);for(let s=0;s<ud.length;s++){const i=ud[s]+r;if(i in t)return El[e]=i}return e}const hd="http://www.w3.org/1999/xlink";function yw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hd,e.slice(6,e.length)):t.setAttributeNS(hd,e,n);else{const i=Av(e);n==null||i&&!yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function Ew(t,e,n,r){t.removeEventListener(e,n,r)}const dd=Symbol("_vei");function ww(t,e,n,r,s=null){const i=t[dd]||(t[dd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,a]=Tw(e);if(r){const c=i[e]=bw(r,s);jr(t,l,c,a)}else o&&(Ew(t,l,o,a),i[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function Tw(t){let e;if(fd.test(t)){e={};let r;for(;r=t.match(fd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vs(t.slice(2)),e]}let wl=0;const Iw=Promise.resolve(),Aw=()=>wl||(Iw.then(()=>wl=0),wl=Date.now());function bw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(Rw(r,n.value),e,5,[r])};return n.value=t,n.attached=Aw(),n}function Rw(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const pd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sw=(t,e,n,r,s,i,o,l,a)=>{const c=s==="svg";e==="class"?fw(t,r,c):e==="style"?mw(t,n,r):pa(e)?Kc(e)||ww(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pw(t,e,r,c))?vw(t,e,r,i,o,l,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yw(t,e,r,c))};function Pw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&pd(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pd(e)&&Ke(n)?!1:e in t}const gd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Io(e,n):e};function Cw(t){t.target.composing=!0}function md(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tl=Symbol("_assign"),cc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Tl]=gd(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Yl(l)),t[Tl](l)}),n&&jr(t,"change",()=>{t.value=t.value.trim()}),e||(jr(t,"compositionstart",Cw),jr(t,"compositionend",md),jr(t,"change",md))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Tl]=gd(i),t.composing)return;const o=s||t.type==="number"?Yl(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===l)||(t.value=l))}},kw=["ctrl","shift","alt","meta"],xw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kw.some(n=>t[`${n}Key`]&&!e.includes(n))},fg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=xw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Dw=at({patchProp:Sw},hw);let _d;function Ow(){return _d||(_d=HE(Dw))}const Nw=(...t)=>{const e=Ow().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Mw(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Vw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mw(t){return Ke(t)?document.querySelector(t):t}var Lw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let pg;const Ca=t=>pg=t,gg=Symbol();function uc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ks||(Ks={}));function Uw(){const t=wp(!0),e=t.run(()=>fe({}));let n=[],r=[];const s=va({install(i){Ca(s),s._a=i,i.provide(gg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Lw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mg=()=>{};function yd(t,e,n,r=mg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Jc()&&Tp(s),s}function Fr(t,...e){t.slice().forEach(n=>{n(...e)})}const Fw=t=>t();function hc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];uc(s)&&uc(r)&&t.hasOwnProperty(n)&&!ze(r)&&!Bn(r)?t[n]=hc(s,r):t[n]=r}return t}const $w=Symbol();function Bw(t){return!uc(t)||!t.hasOwnProperty($w)}const{assign:Cn}=Object;function jw(t){return!!(ze(t)&&t.effect)}function qw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=s?s():{});const u=$p(n.state.value[t]);return Cn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=va(ke(()=>{Ca(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return a=_g(t,c,e,n,r,!0),a}function _g(t,e,n={},r,s,i){let o;const l=Cn({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],p;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),fe({});let E;function v(X){let G;c=u=!1,typeof X=="function"?(X(r.state.value[t]),G={type:Ks.patchFunction,storeId:t,events:p}):(hc(r.state.value[t],X),G={type:Ks.patchObject,payload:X,storeId:t,events:p});const _e=E=Symbol();au().then(()=>{E===_e&&(c=!0)}),u=!0,Fr(h,G,r.state.value[t])}const R=i?function(){const{state:G}=n,_e=G?G():{};this.$patch(Oe=>{Cn(Oe,_e)})}:mg;function x(){o.stop(),h=[],d=[],r._s.delete(t)}function D(X,G){return function(){Ca(r);const _e=Array.from(arguments),Oe=[],$e=[];function Ze(ye){Oe.push(ye)}function rr(ye){$e.push(ye)}Fr(d,{args:_e,name:X,store:Z,after:Ze,onError:rr});let Dt;try{Dt=G.apply(this&&this.$id===t?this:Z,_e)}catch(ye){throw Fr($e,ye),ye}return Dt instanceof Promise?Dt.then(ye=>(Fr(Oe,ye),ye)).catch(ye=>(Fr($e,ye),Promise.reject(ye))):(Fr(Oe,Dt),Dt)}}const B={_p:r,$id:t,$onAction:yd.bind(null,d),$patch:v,$reset:R,$subscribe(X,G={}){const _e=yd(h,X,G.detached,()=>Oe()),Oe=o.run(()=>gr(()=>r.state.value[t],$e=>{(G.flush==="sync"?u:c)&&X({storeId:t,type:Ks.direct,events:p},$e)},Cn({},a,G)));return _e},$dispose:x},Z=Pi(B);r._s.set(t,Z);const W=(r._a&&r._a.runWithContext||Fw)(()=>r._e.run(()=>(o=wp()).run(e)));for(const X in W){const G=W[X];if(ze(G)&&!jw(G)||Bn(G))i||(_&&Bw(G)&&(ze(G)?G.value=_[X]:hc(G,_[X])),r.state.value[t][X]=G);else if(typeof G=="function"){const _e=D(X,G);W[X]=_e,l.actions[X]=G}}return Cn(Z,W),Cn(me(Z),W),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:X=>{v(G=>{Cn(G,X)})}}),r._p.forEach(X=>{Cn(Z,o.run(()=>X({store:Z,app:r._a,pinia:r,options:l})))}),_&&i&&n.hydrate&&n.hydrate(Z.$state,_),c=!0,u=!0,Z}function ka(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,a){const c=UE();return l=l||(c?Lt(gg,null):null),l&&Ca(l),l=pg,l._s.has(r)||(i?_g(r,e,s,l):qw(r,s,l)),l._s.get(r)}return o.$id=r,o}const Wt=ka("screen",()=>{const t=fe([]),e=ke(()=>t.value);return{windows:t,getWindows:e,setWindow:(o,l)=>{let a=0;const c=t.value.find(u=>u.window===o);for(const u of t.value)a+=u.zIndex;if(!c)t.value.push({window:o,data:l,x:200,y:40,zIndex:a});else for(const u of t.value)a+=u.zIndex},removeWidow:o=>{t.value=t.value.filter(l=>l.window!==o)},changeXY:(o,l,a)=>{const c=t.value.find((u,h)=>h===a);c.x=o,c.y=l},increseZindex:o=>{const l=t.value.find(a=>a.window===o);if(l){let a=0;for(const c of t.value)a+=c.zIndex;l.zIndex=a+10}}}}),xa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Hw={name:"MaterialSymbolsFullscreen"},zw={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ww=m("path",{fill:"currentColor",d:"M5 19v-5h2v3h3v2H5Zm0-9V5h5v2H7v3H5Zm9 9v-2h3v-3h2v5h-5Zm3-9V7h-3V5h5v5h-2Z"},null,-1),Gw=[Ww];function Kw(t,e,n,r,s,i){return I(),ce("svg",zw,Gw)}const Qw=xa(Hw,[["render",Kw]]),Yw={class:"w-full fixed top-0 py-3 bg-primary text-white"},Jw={class:"w-[90%] mx-auto flex items-center justify-between"},Xw={class:"text-xl font-bold"},Zw={class:"text-xl font-bold flex items-center gap-3"},eT={key:0,class:"absolute z-40 p-2 top-9 text-xl bg-primary text-white my-5 ms-[4%]"},tT={__name:"Header",setup(t){const e=fe(!1),n=fe(""),r=Wt(),s=()=>{const a=new Date,c=a.getDate().toString().padStart(2,"0"),h=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],d=a.getFullYear(),p=a.getHours().toString().padStart(2,"0"),_=a.getMinutes().toString().padStart(2,"0"),E=a.getSeconds().toString().padStart(2,"0");return`${c}/${h}/${d} ${p}:${_}:${E}`};wt(()=>{n.value=s(),setInterval(()=>{n.value=s()},1e3)});const i=(a,c=null)=>{r.setWindow(a,c),e.value=!1},o=()=>{window.location.href="/"},l=()=>{const a=window.document,c=a.documentElement,u=c.requestFullscreen||c.mozRequestFullScreen||c.webkitRequestFullScreen||c.msRequestFullscreen,h=a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen;!a.fullscreenElement&&!a.mozFullScreenElement&&!a.webkitFullscreenElement&&!a.msFullscreenElement?u.call(c):h.call(a)};return(a,c)=>(I(),ce(qe,null,[m("nav",Yw,[m("div",Jw,[m("div",Xw,[m("div",{class:"cursor-pointer hover:opacity-70",onClick:c[0]||(c[0]=u=>e.value=!e.value)},"Menu")]),m("div",Zw,[m("div",null,Mt(n.value),1),m("div",null,[m("div",{onClick:l,class:"text-xl hover:opacity-70 font-bold cursor-pointer"},[le(Qw,{class:"text-4xl"})])])])])]),e.value?(I(),ce("div",eT,[m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[1]||(c[1]=u=>i("portfolio"))}," Portfolio "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[2]||(c[2]=u=>i("about"))}," About "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[3]||(c[3]=u=>i("skill"))}," Skill "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[4]||(c[4]=u=>i("contact"))}," Contact "),m("div",{class:"py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer",onClick:c[5]||(c[5]=u=>o())}," Shutdown ")])):U("",!0)],64))}};const nT=t=>(oE("data-v-c958fb2d"),t=t(),aE(),t),rT={key:0,class:"h-screen flex justify-center flex-col items-center w-screen bg-[#ebd1ae]"},sT=nT(()=>m("div",{class:"text-4xl text-white"},"Loading...",-1)),iT={class:"progress-bar-container"},oT={key:1,class:"app"},aT={__name:"App",setup(t){const e=fe(!0),n=fe(0);return wt(()=>{const r=setInterval(()=>{n.value<100?n.value+=10:(clearInterval(r),e.value=!1)},200)}),(r,s)=>{const i=Gp("routerView");return e.value?(I(),ce("div",rT,[sT,m("div",iT,[m("div",{class:"progress-bar",style:Rr({width:n.value+"%"})},null,4)])])):(I(),ce("div",oT,[le(tT),le(i,{class:"mt-12"})]))}}},lT=xa(aT,[["__scopeId","data-v-c958fb2d"]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const qr=typeof window<"u";function cT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Il(t,e){const n={};for(const r in e){const s=e[r];n[r]=jt(s)?s.map(t):t(s)}return n}const Qs=()=>{},jt=Array.isArray,uT=/\/$/,hT=t=>t.replace(uT,"");function Al(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=gT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function dT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&os(e.matched[r],n.matched[s])&&yg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pT(t[n],e[n]))return!1;return!0}function pT(t,e){return jt(t)?Ed(t,e):jt(e)?Ed(e,t):t===e}function Ed(t,e){return jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function mT(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hT(t)}const _T=/^[^#]+#/;function yT(t,e){return t.replace(_T,"#")+e}function vT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Da=()=>({left:window.pageXOffset,top:window.pageYOffset});function ET(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wd(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function wT(t,e){dc.set(t,e)}function TT(t){const e=dc.get(t);return dc.delete(t),e}let IT=()=>location.protocol+"//"+location.host;function vg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),vd(a,"")}return vd(n,t)+r+s}function AT(t,e,n,r){let s=[],i=[],o=null;const l=({state:d})=>{const p=vg(t,location),_=n.value,E=e.value;let v=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}v=E?d.position-E.position:0}else r(p);s.forEach(R=>{R(n.value,_,{delta:v,type:ci.pop,direction:v?v>0?Ys.forward:Ys.back:Ys.unknown})})};function a(){o=n.value}function c(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Te({},d.state,{scroll:Da()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function Td(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Da():null}}function bT(t){const{history:e,location:n}=window,r={value:vg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:IT()+t+a;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(a,c){const u=Te({},e.state,Td(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});i(a,u,!0),r.value=a}function l(a,c){const u=Te({},s.value,e.state,{forward:a,scroll:Da()});i(u.current,u,!0);const h=Te({},Td(r.value,a,null),{position:u.position+1},c);i(a,h,!1),r.value=a}return{location:r,state:s,push:l,replace:o}}function RT(t){t=mT(t);const e=bT(t),n=AT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Te({location:"",base:t,go:r,createHref:yT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ST(t){return typeof t=="string"||t&&typeof t=="object"}function Eg(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wg=Symbol("");var Id;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Id||(Id={}));function as(t,e){return Te(new Error,{type:t,[wg]:!0},e)}function pn(t,e){return t instanceof Error&&wg in t&&(e==null||!!(t.type&e))}const Ad="[^/]+?",PT={sensitive:!1,strict:!1,start:!0,end:!0},CT=/[.+*?^${}()[\]/\\]/g;function kT(t,e){const n=Te({},PT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(CT,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:E,optional:v,regexp:R}=d;i.push({name:_,repeatable:E,optional:v});const x=R||Ad;if(x!==Ad){p+=10;try{new RegExp(`(${x})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+B.message)}}let D=E?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(D=v&&c.length<2?`(?:/${D})`:"/"+D),v&&(D+="?"),s+=D,p+=20,v&&(p+=-8),E&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:E,optional:v}=p,R=_ in c?c[_]:"";if(jt(R)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=jt(R)?R.join("/"):R;if(!x)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:l,stringify:a}}function xT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bd(r))return 1;if(bd(s))return-1}return s.length-r.length}function bd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OT={type:0,value:""},NT=/[a-zA-Z0-9_]/;function VT(t){if(!t)return[[]];if(t==="/")return[[OT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,a,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:a==="("?n=2:NT.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function MT(t,e,n){const r=kT(VT(t.path),n),s=Te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LT(t,e){const n=[],r=new Map;e=Pd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,_=UT(u);_.aliasOf=d&&d.record;const E=Pd(e,u),v=[_];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of D)v.push(Te({},_,{components:d?d.record.components:_.components,path:B,aliasOf:d?d.record:_}))}let R,x;for(const D of v){const{path:B}=D;if(h&&B[0]!=="/"){const Z=h.record.path,j=Z[Z.length-1]==="/"?"":"/";D.path=h.record.path+(B&&j+B)}if(R=MT(D,h,E),d?d.alias.push(R):(x=x||R,x!==R&&x.alias.push(R),p&&u.name&&!Sd(R)&&o(u.name)),_.children){const Z=_.children;for(let j=0;j<Z.length;j++)i(Z[j],R,d&&d.children[j])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&a(R)}return x?()=>{o(x)}:Qs}function o(u){if(Eg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&DT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Tg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sd(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},_,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw as(1,{location:u});E=d.record.name,p=Te(Rd(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Rd(u.params,d.keys.map(x=>x.name))),_=d.stringify(p)}else if("path"in u)_=u.path,d=n.find(x=>x.re.test(_)),d&&(p=d.parse(_),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw as(1,{location:u,currentLocation:h});E=d.record.name,p=Te({},h.params,u.params),_=d.stringify(p)}const v=[];let R=d;for(;R;)v.unshift(R.record),R=R.parent;return{name:E,path:_,params:p,matched:v,meta:$T(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function Rd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function UT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:FT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function FT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $T(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function Pd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Tg(t,e){return e.children.some(n=>n===t||Tg(t,n))}const Ig=/#/g,BT=/&/g,jT=/\//g,qT=/=/g,HT=/\?/g,Ag=/\+/g,zT=/%5B/g,WT=/%5D/g,bg=/%5E/g,GT=/%60/g,Rg=/%7B/g,KT=/%7C/g,Sg=/%7D/g,QT=/%20/g;function pu(t){return encodeURI(""+t).replace(KT,"|").replace(zT,"[").replace(WT,"]")}function YT(t){return pu(t).replace(Rg,"{").replace(Sg,"}").replace(bg,"^")}function fc(t){return pu(t).replace(Ag,"%2B").replace(QT,"+").replace(Ig,"%23").replace(BT,"%26").replace(GT,"`").replace(Rg,"{").replace(Sg,"}").replace(bg,"^")}function JT(t){return fc(t).replace(qT,"%3D")}function XT(t){return pu(t).replace(Ig,"%23").replace(HT,"%3F")}function ZT(t){return t==null?"":XT(t).replace(jT,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function eI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ag," "),o=i.indexOf("="),l=qo(o<0?i:i.slice(0,o)),a=o<0?null:qo(i.slice(o+1));if(l in e){let c=e[l];jt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Cd(t){let e="";for(let n in t){const r=t[n];if(n=JT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(r)?r.map(i=>i&&fc(i)):[r&&fc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nI=Symbol(""),kd=Symbol(""),Oa=Symbol(""),gu=Symbol(""),pc=Symbol("");function Os(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(as(4,{from:n,to:e})):h instanceof Error?l(h):ST(h)?l(as(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function bl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rI(l)){const c=(l.__vccOpts||l)[e];c&&s.push(On(c,n,r,i,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=cT(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&On(d,n,r,i,o)()}))}}return s}function rI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xd(t){const e=Lt(Oa),n=Lt(gu),r=ke(()=>e.resolve(xe(t.to))),s=ke(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(os.bind(null,u));if(d>-1)return d;const p=Dd(a[c-2]);return c>1&&Dd(u)===p&&h[h.length-1].path!==p?h.findIndex(os.bind(null,a[c-2])):d}),i=ke(()=>s.value>-1&&aI(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&yg(n.params,r.value.params));function l(a={}){return oI(a)?e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(Qs):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const sI=Ia({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xd,setup(t,{slots:e}){const n=Pi(xd(t)),{options:r}=Lt(Oa),s=ke(()=>({[Od(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Od(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:dg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iI=sI;function oI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!jt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Od=(t,e,n)=>t??e??n,lI=Ia({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Lt(pc),s=ke(()=>t.route||r.value),i=Lt(kd,0),o=ke(()=>{let c=xe(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=ke(()=>s.value.matched[o.value]);Ao(kd,ke(()=>o.value+1)),Ao(nI,l),Ao(pc,s);const a=fe();return gr(()=>[a.value,l.value,t.name],([c,u,h],[d,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!os(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return Nd(n.default,{Component:d,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,v=dg(d,Te({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Nd(n.default,{Component:v,route:c})||v}}});function Nd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cI=lI;function uI(t){const e=LT(t.routes,t),n=t.parseQuery||eI,r=t.stringifyQuery||Cd,s=t.history,i=Os(),o=Os(),l=Os(),a=Gv(Sn);let c=Sn;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Il.bind(null,T=>""+T),h=Il.bind(null,ZT),d=Il.bind(null,qo);function p(T,F){let M,K;return Eg(T)?(M=e.getRecordMatcher(T),K=F):K=T,e.addRoute(K,M)}function _(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function E(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function R(T,F){if(F=Te({},F||a.value),typeof T=="string"){const g=Al(n,T,F.path),y=e.resolve({path:g.path},F),A=s.createHref(g.fullPath);return Te(g,y,{params:d(y.params),hash:qo(g.hash),redirectedFrom:void 0,href:A})}let M;if("path"in T)M=Te({},T,{path:Al(n,T.path,F.path).path});else{const g=Te({},T.params);for(const y in g)g[y]==null&&delete g[y];M=Te({},T,{params:h(g)}),F.params=h(F.params)}const K=e.resolve(M,F),we=T.hash||"";K.params=u(d(K.params));const Ne=dT(r,Te({},T,{hash:YT(we),path:K.path})),f=s.createHref(Ne);return Te({fullPath:Ne,hash:we,query:r===Cd?tI(T.query):T.query||{}},K,{redirectedFrom:void 0,href:f})}function x(T){return typeof T=="string"?Al(n,T,a.value.path):Te({},T)}function D(T,F){if(c!==T)return as(8,{from:F,to:T})}function B(T){return W(T)}function Z(T){return B(Te(x(T),{replace:!0}))}function j(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let K=typeof M=="function"?M(T):M;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=x(K):{path:K},K.params={}),Te({query:T.query,hash:T.hash,params:"path"in K?{}:T.params},K)}}function W(T,F){const M=c=R(T),K=a.value,we=T.state,Ne=T.force,f=T.replace===!0,g=j(M);if(g)return W(Te(x(g),{state:typeof g=="object"?Te({},we,g.state):we,force:Ne,replace:f}),F||M);const y=M;y.redirectedFrom=F;let A;return!Ne&&fT(r,K,M)&&(A=as(16,{to:y,from:K}),Gt(K,K,!0,!1)),(A?Promise.resolve(A):_e(y,K)).catch(w=>pn(w)?pn(w,2)?w:bn(w):Ee(w,y,K)).then(w=>{if(w){if(pn(w,2))return W(Te({replace:f},x(w.to),{state:typeof w.to=="object"?Te({},we,w.to.state):we,force:Ne}),F||y)}else w=$e(y,K,!0,f,we);return Oe(y,K,w),w})}function X(T,F){const M=D(T,F);return M?Promise.reject(M):Promise.resolve()}function G(T){const F=Lr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(T):T()}function _e(T,F){let M;const[K,we,Ne]=hI(T,F);M=bl(K.reverse(),"beforeRouteLeave",T,F);for(const g of K)g.leaveGuards.forEach(y=>{M.push(On(y,T,F))});const f=X.bind(null,T,F);return M.push(f),ct(M).then(()=>{M=[];for(const g of i.list())M.push(On(g,T,F));return M.push(f),ct(M)}).then(()=>{M=bl(we,"beforeRouteUpdate",T,F);for(const g of we)g.updateGuards.forEach(y=>{M.push(On(y,T,F))});return M.push(f),ct(M)}).then(()=>{M=[];for(const g of Ne)if(g.beforeEnter)if(jt(g.beforeEnter))for(const y of g.beforeEnter)M.push(On(y,T,F));else M.push(On(g.beforeEnter,T,F));return M.push(f),ct(M)}).then(()=>(T.matched.forEach(g=>g.enterCallbacks={}),M=bl(Ne,"beforeRouteEnter",T,F),M.push(f),ct(M))).then(()=>{M=[];for(const g of o.list())M.push(On(g,T,F));return M.push(f),ct(M)}).catch(g=>pn(g,8)?g:Promise.reject(g))}function Oe(T,F,M){l.list().forEach(K=>G(()=>K(T,F,M)))}function $e(T,F,M,K,we){const Ne=D(T,F);if(Ne)return Ne;const f=F===Sn,g=qr?history.state:{};M&&(K||f?s.replace(T.fullPath,Te({scroll:f&&g&&g.scroll},we)):s.push(T.fullPath,we)),a.value=T,Gt(T,F,M,f),bn()}let Ze;function rr(){Ze||(Ze=s.listen((T,F,M)=>{if(!to.listening)return;const K=R(T),we=j(K);if(we){W(Te(we,{replace:!0}),K).catch(Qs);return}c=K;const Ne=a.value;qr&&wT(wd(Ne.fullPath,M.delta),Da()),_e(K,Ne).catch(f=>pn(f,12)?f:pn(f,2)?(W(f.to,K).then(g=>{pn(g,20)&&!M.delta&&M.type===ci.pop&&s.go(-1,!1)}).catch(Qs),Promise.reject()):(M.delta&&s.go(-M.delta,!1),Ee(f,K,Ne))).then(f=>{f=f||$e(K,Ne,!1),f&&(M.delta&&!pn(f,8)?s.go(-M.delta,!1):M.type===ci.pop&&pn(f,20)&&s.go(-1,!1)),Oe(K,Ne,f)}).catch(Qs)}))}let Dt=Os(),ye=Os(),Ae;function Ee(T,F,M){bn(T);const K=ye.list();return K.length?K.forEach(we=>we(T,F,M)):console.error(T),Promise.reject(T)}function fn(){return Ae&&a.value!==Sn?Promise.resolve():new Promise((T,F)=>{Dt.add([T,F])})}function bn(T){return Ae||(Ae=!T,rr(),Dt.list().forEach(([F,M])=>T?M(T):F()),Dt.reset()),T}function Gt(T,F,M,K){const{scrollBehavior:we}=t;if(!qr||!we)return Promise.resolve();const Ne=!M&&TT(wd(T.fullPath,0))||(K||!M)&&history.state&&history.state.scroll||null;return au().then(()=>we(T,F,Ne)).then(f=>f&&ET(f)).catch(f=>Ee(f,T,F))}const Tt=T=>s.go(T);let Mr;const Lr=new Set,to={currentRoute:a,listening:!0,addRoute:p,removeRoute:_,hasRoute:v,getRoutes:E,resolve:R,options:t,push:B,replace:Z,go:Tt,back:()=>Tt(-1),forward:()=>Tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ye.add,isReady:fn,install(T){const F=this;T.component("RouterLink",iI),T.component("RouterView",cI),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(a)}),qr&&!Mr&&a.value===Sn&&(Mr=!0,B(s.location).catch(we=>{}));const M={};for(const we in Sn)Object.defineProperty(M,we,{get:()=>a.value[we],enumerable:!0});T.provide(Oa,F),T.provide(gu,Np(M)),T.provide(pc,a);const K=T.unmount;Lr.add(T),T.unmount=function(){Lr.delete(T),Lr.size<1&&(c=Sn,Ze&&Ze(),Ze=null,a.value=Sn,Mr=!1,Ae=!1),K()}}};function ct(T){return T.reduce((F,M)=>F.then(()=>G(M)),Promise.resolve())}return to}function hI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(c=>os(c,l))?r.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>os(c,a))||s.push(a))}return[n,r,s]}function dI(){return Lt(Oa)}function ki(){return Lt(gu)}const Pg="/assets/pc-609054bf.png",Cg="/assets/about-496d3e3f.png",kg="/assets/skill-b1993387.png",xg="/assets/contact-d5a2c51b.png";function fI(t){return Jc()?(Tp(t),!0):!1}function Ot(t){return typeof t=="function"?t():xe(t)}const Dg=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const pI=Object.prototype.toString,gI=t=>pI.call(t)==="[object Object]",mI=()=>{};function _I(t,e={}){if(!ze(t))return $p(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const r in t.value)n[r]=Jv(()=>({get(){return t.value[r]},set(s){var i;if((i=Ot(e.replaceRef))!=null?i:!0)if(Array.isArray(t.value)){const l=[...t.value];l[r]=s,t.value=l}else{const l={...t.value,[r]:s};Object.setPrototypeOf(l,Object.getPrototypeOf(t.value)),t.value=l}else t.value[r]=s}}));return n}function yI(t){var e;const n=Ot(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Og=Dg?window:void 0;function Rl(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Og):[e,n,r,s]=t,!e)return mI;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},l=(u,h,d,p)=>(u.addEventListener(h,d,p),()=>u.removeEventListener(h,d,p)),a=gr(()=>[yI(e),Ot(s)],([u,h])=>{if(o(),!u)return;const d=gI(h)?{...h}:h;i.push(...n.flatMap(p=>r.map(_=>l(u,p,_,d))))},{immediate:!0,flush:"post"}),c=()=>{a(),o()};return fI(c),c}function Ng(t,e={}){var n,r;const{pointerTypes:s,preventDefault:i,stopPropagation:o,exact:l,onMove:a,onEnd:c,onStart:u,initialValue:h,axis:d="both",draggingElement:p=Og,containerElement:_,handle:E=t}=e,v=fe((n=Ot(h))!=null?n:{x:0,y:0}),R=fe(),x=W=>s?s.includes(W.pointerType):!0,D=W=>{Ot(i)&&W.preventDefault(),Ot(o)&&W.stopPropagation()},B=W=>{var X;if(!x(W)||Ot(l)&&W.target!==Ot(t))return;const G=Ot(_),_e=(X=G==null?void 0:G.getBoundingClientRect)==null?void 0:X.call(G),Oe=Ot(t).getBoundingClientRect(),$e={x:W.clientX-(G?Oe.left-_e.left+G.scrollLeft:Oe.left),y:W.clientY-(G?Oe.top-_e.top+G.scrollTop:Oe.top)};(u==null?void 0:u($e,W))!==!1&&(R.value=$e,D(W))},Z=W=>{var X;if(!x(W)||!R.value)return;const G=Ot(_),_e=(X=G==null?void 0:G.getBoundingClientRect)==null?void 0:X.call(G),Oe=Ot(t).getBoundingClientRect();let{x:$e,y:Ze}=v.value;(d==="x"||d==="both")&&($e=W.clientX-R.value.x,G&&($e=Math.min(Math.max(0,$e),_e.width+G.scrollLeft-Oe.width))),(d==="y"||d==="both")&&(Ze=W.clientY-R.value.y,G&&(Ze=Math.min(Math.max(0,Ze),_e.height+G.scrollTop-Oe.height))),v.value={x:$e,y:Ze},a==null||a(v.value,W),D(W)},j=W=>{x(W)&&R.value&&(R.value=void 0,c==null||c(v.value,W),D(W))};if(Dg){const W={capture:(r=e.capture)!=null?r:!0};Rl(E,"pointerdown",B,W),Rl(p,"pointermove",Z,W),Rl(p,"pointerup",j,W)}return{..._I(v),position:v,isDragging:ke(()=>!!R.value),style:ke(()=>`left:${v.value.x}px;top:${v.value.y}px;`)}}const vI=Ia({__name:"draggable",props:{index:Number},setup(t){const e=Wt(),{index:n}=t,r=fe(null),s=ke(()=>e.getWindows.find((c,u)=>u===n)),{x:i,y:o,style:l}=Ng(r,{initialValue:{x:s.value.x,y:s.value.y}}),a=()=>{e.changeXY(i,o,n)};return gr([i,o],()=>{a()}),(c,u)=>(I(),ce("div",{ref_key:"el",ref:r,style:Rr([xe(l),{zIndex:s.value.zIndex},{position:"fixed"}])},[uu(c.$slots,"window")],4))}}),Vg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfKSURBVHgB7d1bjF1lGQbgb81MESwZCFouCIpyIcSeVIKHGBMiEkRFxVpbJMRoVBJjvPJOExNjxECiUUmMRIiJUdtU44krDSJCgwoUaCmC5QJthVLsmU6Ps5dDQnD9P+ked2eGmW/mee7etddqmnbe/fXr3nvtCAAAAAAAAAAAAAAAAAAAAAAAAJhdTX3gHde1o9081ouvFRf04orqksXBSbVDcaTIEQ9088RfwI3dvOXnzeMB/6ehANJSYEhMgSGx5s2r23O6B0aG4v7yjLgwmElj3dA28b5untiJ7ws4CRMYElNgSEyBIbFm+dr2tuJAxGe6+fzzyws+fFWZR0eDPsbGynzXn8u8ZWt1QS92dOOJNlZ282Mbmj0BLzKBITEFhsQUGBIbmdh5P9rvhE+uKvOSJTGQXlvm4+P9H59vXn1mmVd9rMx7D5R5x/Yo/tdhqI1byzPi4wEvMoEhMQWGxBQYEmtWrG37bqE3fyMGcvREmfcfKfM8X3kHdmB/mX98e5mPHX3ZJZ/ths3rmtuCBcsEhsQUGBJTYEhsJKao3qAPVDubnbe/0bPKfGX1XvPf/brME3/e3+3mFavbe7t584bmiWDBMIEhMQWGxBQYEpvyDnyiV+b5/t7mmXbRxWV+cmmZ/761vA93Oxy/6OZla9sPdPOj65rtwbxlAkNiCgyJKTAkNuUdmJl1xZVl3rWzzLt3x7JubiL+2c0r1rT/Kq+I6hPZC96hKt/ZDcO9+GY3P7SheS7mEBMYElNgSEyBIbEpfx64vsfVnsPBDDpUbWx//EOZt/2jzL1eMAUT5XiqODAUb+vGLT9r9sYsMoEhMQWGxBQYEvM6cDKLF5f56uqu3ieqe5KNVTvzSPWUPXp6LGgHqvty/+qOMj/zTLyhODAeN1W/xOdiFpnAkJgCQ2IKDInZgeeZkepvtL7n1stUT+GnV9cPNTGvnV79n8JVV5f59vqbqZq4pjpiBwZOjQJDYgoMidmBF7j6nmbPH4sF7ZxzJj3lNTGHmMCQmAJDYgoMiSkwJKbAkJgCQ2IKDIl5HRj6OKP6vPShw/GfmENMYEhMgSExBYbE7MDQx/WfLvOPfhCXxhxiAkNiCgyJKTAkZgeGPup7ij28rnkq5hATGBJTYEhMgSExBYbEFBgSU2BITIEhsTn/OvDYWJl3bC/z4cMBr5jla9rPxzRqhmJ3cWAk7unGzT9pdvW73gSGxBQYElNgSGzO7cAPbSrz3XeV+cTxgFnTNPHDmE5tlY9H8e1UK9a0X+3mzeubm7vZBIbEFBgSU2BIbNZ34Ce3lfnO35d5YucoLLuozOdO/n2uMGc9W74KHI9ti9O6eWJFvqmbV1zbPt7NJjAkpsCQmAJDYrO+A2+8p//jn1pV5svfHTBvtNXrwL/5U5l/+dvqgl58vRtNYEhMgSExBYbEZn0H3j3Jt62+Z8Bvoql3iuer904fGy9zL2D29Kqf10veUuZ6B544fWk3m8CQmAJDYgoMic36DtybZAk97bQYyL6jZT46HpDGokl+3psmFnWzCQyJKTAkpsCQWPrvBx6vdmg7LwuJCQyJKTAkpsCQWP4duB3s/J3Plnmoego7d0kM5PCRMv/76TK3g77ZuroH2HnnlXnxGQEvMYEhMQWGxBQYEku/A09mV/Xtqt++pTqh2jm/8uUynzUaff10fZmf2BbT6oLXlfmLNwS8xASGxBQYElNgSGze78BnnV3mlcvLPDxc5jMXx0BWLitzb8DXpSez9OKAkzKBITEFhsQUGBKb9zvwq6p7DF33iZhWl17SP8NMMoEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSm/fvha7V94U+eDBm1KJFZb7g9WVumoBTZgJDYgoMiSkwJLbg7wvdTvM9rCaz6iNlfuelAafMBIbEFBgSU2BIbMHfF/rQWMyokeop8o0XBEwbExgSU2BITIEhMfeFhsRMYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxBQYElNgSEyBITEFhsQUGBJTYEhMgSExBYbEFBgSU2BITIEhMQWGxEZiio73ApglJjAkpsCQmAJDYiNtG/u6B5omzu7mnc+VF4yeXeZDR2Mg+/f1f3zxGQEL1p69k5zQRnGGCQyJKTAkpsCQ2MjEv6k3Fkea+GA33n1fecFl740p2bSp/+NvujBgwdr4l/6P9yLu7WYTGBJTYEhMgSGxkeGIG7sHxiPe380P3h/D3XzsWPkLLF1e5qYt89ZHy7z5ker86inkQ5fHQNpJHh8bK/PhAV+3hul08ECZH3y4zH99oMxtG+WnDZr4VjeawJCYAkNiCgyJNfWBlde2N3Rzr41bqgum9BnioeEyX39NucZe9q6+l7/w+ynsP/bC2v4/T+8qH//O98vf7/h4wJzVRvnzPHHgC924ZX1zazebwJCYAkNiCgyJNZOdsHRNu7Kbh5r4UnXK26O/v3XDxA77vW7eur55JKbRW1e3S7r5+HDc0c1Dbbw2YJa0TVTvTJhaP0xgSEyBITEFBgAAAAAAAAAAAAAAAAAAAAAAAOCU/RePsFqZef2t2wAAAABJRU5ErkJggg==",EI={class:"flex items-center gap-1 cursor-move"},wI=Es('<div class="flex flex-col w-[30px] justify-between gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),TI=Es('<div class="flex flex-col w-full gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div>',1),II={class:"text-2xl text-primary"},AI=Es('<div class="basis-1/2"><div class="flex flex-col gap-1"><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div><div class="border-2 border-primary"></div></div></div>',1),bI=m("div",{class:"flex flex-col w-full justify-between gap-1 mt-2"},[m("div",{class:"border border-primary"})],-1),xi={__name:"windowHeader",props:{title:String,window:String},setup(t){const e=Wt(),{title:n,window:r}=t,s=()=>{e.removeWidow(r)};return(i,o)=>(I(),ce("div",null,[m("div",EI,[m("div",{class:"basis-1/2"},[m("div",{class:"flex gap-2 items-center h-[35px]"},[wI,m("div",{class:"border-2 border-primary h-[26px] w-[35px] cursor-pointer hover:bg-primary",onClick:s}),TI])]),m("div",II,Mt(t.title),1),AI]),bI]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Mg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},RI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|l>>4;let d=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||h==null)throw new SI;const d=i<<2|l>>4;if(r.push(d),c!==64){const p=l<<4&240|c>>2;if(r.push(p),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PI=function(t){const e=Mg(t);return Lg.encodeByteArray(e,!0)},Ho=function(t){return PI(t).replace(/\./g,"")},Ug=function(t){try{return Lg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kI=()=>CI().__FIREBASE_DEFAULTS__,xI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ug(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return kI()||xI()||DI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fg=t=>{var e,n;return(n=(e=mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$g=t=>{const e=Fg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bg=()=>{var t;return(t=mu())===null||t===void 0?void 0:t.config},jg=t=>{var e;return(e=mu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function VI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$I,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?BI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new dn(s,l,r)}}function BI(t,e){return t.replace(jI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jI=/\{\$([^}]+)}/g;function qI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vd(i)&&Vd(o)){if(!zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function HI(t,e){const n=new zI(t,e);return n.subscribe.bind(n)}class zI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sl),s.error===void 0&&(s.error=Sl),s.complete===void 0&&(s.complete=Sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sl(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const or="[DEFAULT]";/**
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
 */class GI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QI(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===or?void 0:t}function QI(t){return t.instantiationMode==="EAGER"}/**
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
 */class YI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const JI={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},XI=de.INFO,ZI={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},e0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ZI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=XI,this._logHandler=e0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const t0=(t,e)=>e.some(n=>t instanceof n);let Md,Ld;function n0(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function r0(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hg=new WeakMap,gc=new WeakMap,zg=new WeakMap,Pl=new WeakMap,yu=new WeakMap;function s0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hg.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function i0(t){if(gc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gc.set(t,e)}let mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function o0(t){mc=t(mc)}function a0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cl(this),e,...n);return zg.set(r,e.sort?e.sort():[e]),Hn(r)}:r0().includes(t)?function(...e){return t.apply(Cl(this),e),Hn(Hg.get(this))}:function(...e){return Hn(t.apply(Cl(this),e))}}function l0(t){return typeof t=="function"?a0(t):(t instanceof IDBTransaction&&i0(t),t0(t,n0())?new Proxy(t,mc):t)}function Hn(t){if(t instanceof IDBRequest)return s0(t);if(Pl.has(t))return Pl.get(t);const e=l0(t);return e!==t&&(Pl.set(t,e),yu.set(e,t)),e}const Cl=t=>yu.get(t);function c0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Hn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Hn(o.result),a.oldVersion,a.newVersion,Hn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const u0=["get","getKey","getAll","getAllKeys","count"],h0=["put","add","delete","clear"],kl=new Map;function Ud(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kl.get(e))return kl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=h0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||u0.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return kl.set(e,i),i}o0(t=>({...t,get:(e,n,r)=>Ud(e,n)||t.get(e,n,r),has:(e,n)=>!!Ud(e,n)||t.has(e,n)}));/**
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
 */class d0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(f0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function f0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _c="@firebase/app",Fd="0.9.25";/**
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
 */const vr=new _u("@firebase/app"),p0="@firebase/app-compat",g0="@firebase/analytics-compat",m0="@firebase/analytics",_0="@firebase/app-check-compat",y0="@firebase/app-check",v0="@firebase/auth",E0="@firebase/auth-compat",w0="@firebase/database",T0="@firebase/database-compat",I0="@firebase/functions",A0="@firebase/functions-compat",b0="@firebase/installations",R0="@firebase/installations-compat",S0="@firebase/messaging",P0="@firebase/messaging-compat",C0="@firebase/performance",k0="@firebase/performance-compat",x0="@firebase/remote-config",D0="@firebase/remote-config-compat",O0="@firebase/storage",N0="@firebase/storage-compat",V0="@firebase/firestore",M0="@firebase/firestore-compat",L0="firebase",U0="10.7.1";/**
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
 */const yc="[DEFAULT]",F0={[_c]:"fire-core",[p0]:"fire-core-compat",[m0]:"fire-analytics",[g0]:"fire-analytics-compat",[y0]:"fire-app-check",[_0]:"fire-app-check-compat",[v0]:"fire-auth",[E0]:"fire-auth-compat",[w0]:"fire-rtdb",[T0]:"fire-rtdb-compat",[I0]:"fire-fn",[A0]:"fire-fn-compat",[b0]:"fire-iid",[R0]:"fire-iid-compat",[S0]:"fire-fcm",[P0]:"fire-fcm-compat",[C0]:"fire-perf",[k0]:"fire-perf-compat",[x0]:"fire-rc",[D0]:"fire-rc-compat",[O0]:"fire-gcs",[N0]:"fire-gcs-compat",[V0]:"fire-fst",[M0]:"fire-fst-compat","fire-js":"fire-js",[L0]:"fire-js-all"};/**
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
 */const Wo=new Map,vc=new Map;function $0(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Er(t){const e=t.name;if(vc.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;vc.set(e,t);for(const n of Wo.values())$0(n,t);return!0}function Na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const B0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new Di("app","Firebase",B0);/**
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
 */class j0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=U0;function Wg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Bg()),!n)throw zn.create("no-options");const i=Wo.get(s);if(i){if(zo(n,i.options)&&zo(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new YI(s);for(const a of vc.values())o.addComponent(a);const l=new j0(n,r,o);return Wo.set(s,l),l}function vu(t=yc){const e=Wo.get(t);if(!e&&t===yc&&Bg())return Wg();if(!e)throw zn.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=F0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(l.join(" "));return}Er(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const q0="firebase-heartbeat-database",H0=1,ui="firebase-heartbeat-store";let xl=null;function Gg(){return xl||(xl=c0(q0,H0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),xl}async function z0(t){try{return await(await Gg()).transaction(ui).objectStore(ui).get(Kg(t))}catch(e){if(e instanceof dn)vr.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function $d(t,e){try{const r=(await Gg()).transaction(ui,"readwrite");await r.objectStore(ui).put(e,Kg(t)),await r.done}catch(n){if(n instanceof dn)vr.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function Kg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const W0=1024,G0=30*24*60*60*1e3;class K0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Y0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=G0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bd(),{heartbeatsToSend:r,unsentEntries:s}=Q0(this._heartbeatsCache.heartbeats),i=Ho(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bd(){return new Date().toISOString().substring(0,10)}function Q0(t,e=W0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Y0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await z0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jd(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function J0(t){Er(new Yn("platform-logger",e=>new d0(e),"PRIVATE")),Er(new Yn("heartbeat",e=>new K0(e),"PRIVATE")),rn(_c,Fd,t),rn(_c,Fd,"esm2017"),rn("fire-js","")}J0("");var X0="firebase",Z0="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(X0,Z0,"app");const eA={apiKey:"AIzaSyAWCfFV1wT4ghgBKy42MLx_SPBPXX4Rgug",authDomain:"portfolio-d2e2c.firebaseapp.com",databaseURL:"https://portfolio-d2e2c-default-rtdb.firebaseio.com",projectId:"portfolio-d2e2c",storageBucket:"portfolio-d2e2c.appspot.com",messagingSenderId:"494212111153",appId:"1:494212111153:web:0b50c6e178bab976d7ee10",measurementId:"G-SP24KZSMTZ"},Ni=Wg(eA);var tA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Eu=Eu||{},re=tA||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nA(t){return Object.prototype.hasOwnProperty.call(t,Dl)&&t[Dl]||(t[Dl]=++rA)}var Dl="closure_uid_"+(1e9*Math.random()>>>0),rA=0;function sA(t,e,n){return t.call.apply(t.bind,arguments)}function iA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=sA:pt=iA,pt.apply(null,arguments)}function lo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(r,o)}}function er(){this.s=this.s,this.o=this.o}var oA=0;er.prototype.s=!1;er.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),oA!=0)&&nA(this)};er.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var aA=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};re.addEventListener("test",n,e),re.removeEventListener("test",n,e)}catch{}return t}();function hi(t){return/^[\s\xa0]*$/.test(t)}function Ma(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return Ma().indexOf(t)!=-1}function Tu(t){return Tu[" "](t),t}Tu[" "]=function(){};function lA(t,e){var n=eb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var cA=Xt("Opera"),ls=Xt("Trident")||Xt("MSIE"),Yg=Xt("Edge"),Ec=Yg||ls,Jg=Xt("Gecko")&&!(Ma().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),uA=Ma().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function Xg(){var t=re.document;return t?t.documentMode:void 0}var wc;e:{var Ol="",Nl=function(){var t=Ma();if(Jg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yg)return/Edge\/([\d\.]+)/.exec(t);if(ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uA)return/WebKit\/(\S+)/.exec(t);if(cA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nl&&(Ol=Nl?Nl[1]:""),ls){var Vl=Xg();if(Vl!=null&&Vl>parseFloat(Ol)){wc=String(Vl);break e}}wc=Ol}var Tc;if(re.document&&ls){var Hd=Xg();Tc=Hd||parseInt(wc,10)||void 0}else Tc=void 0;var hA=Tc;function di(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jg){e:{try{Tu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&di.$.h.call(this)}}Xe(di,gt);var dA={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mi="closure_listenable_"+(1e6*Math.random()|0),fA=0;function pA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++fA,this.fa=this.ia=!1}function La(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Iu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Zg(t){const e={};for(const n in t)e[n]=t[n];return e}const zd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function em(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<zd.length;i++)n=zd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ac(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new pA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ic(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Qg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(La(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ac(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Au="closure_lm_"+(1e6*Math.random()|0),Ml={};function tm(t,e,n,r,s){if(r&&r.once)return rm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)tm(t,e[i],n,r,s);return null}return n=Su(n),t&&t[Mi]?t.O(e,n,Vi(r)?!!r.capture:!!r,s):nm(t,e,n,!1,r,s)}function nm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Vi(s)?!!s.capture:!!s,l=Ru(t);if(l||(t[Au]=l=new Ua(t)),n=l.add(e,n,r,o,i),n.proxy)return n;if(r=mA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)aA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(im(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mA(){function t(n){return e.call(t.src,t.listener,n)}const e=_A;return t}function rm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);return null}return n=Su(n),t&&t[Mi]?t.P(e,n,Vi(r)?!!r.capture:!!r,s):nm(t,e,n,!0,r,s)}function sm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)sm(t,e[i],n,r,s);else r=Vi(r)?!!r.capture:!!r,n=Su(n),t&&t[Mi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ac(i,n,r,s),-1<n&&(La(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ru(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ac(e,n,r,s)),(n=-1<t?e[t]:null)&&bu(n))}function bu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Mi])Ic(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(im(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ru(e))?(Ic(n,t),n.h==0&&(n.src=null,e[Au]=null)):La(t)}}}function im(t){return t in Ml?Ml[t]:Ml[t]="on"+t}function _A(t,e){if(t.fa)t=!0;else{e=new di(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bu(t),t=n.call(r,e)}return t}function Ru(t){return t=t[Au],t instanceof Ua?t:null}var Ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function Su(t){return typeof t=="function"?t:(t[Ll]||(t[Ll]=function(e){return t.handleEvent(e)}),t[Ll])}function Je(){er.call(this),this.i=new Ua(this),this.S=this,this.J=null}Xe(Je,er);Je.prototype[Mi]=!0;Je.prototype.removeEventListener=function(t,e,n,r){sm(this,t,e,n,r)};function it(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var s=e;e=new gt(r,t),em(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=co(o,r,!0,e)&&s}if(o=e.g=t,s=co(o,r,!0,e)&&s,s=co(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=co(o,r,!1,e)&&s}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)La(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function co(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Ic(t.i,o),s=l.call(a,r)!==!1&&s}}return s&&!r.defaultPrevented}var Pu=re.JSON.stringify;class yA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function vA(){var t=Cu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EA{constructor(){this.h=this.g=null}add(e,n){const r=om.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var om=new yA(()=>new wA,t=>t.reset());class wA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function IA(t){re.setTimeout(()=>{throw t},0)}let fi,pi=!1,Cu=new EA,am=()=>{const t=re.Promise.resolve(void 0);fi=()=>{t.then(AA)}};var AA=()=>{for(var t;t=vA();){try{t.h.call(t.g)}catch(n){IA(n)}var e=om;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pi=!1};function Fa(t,e){Je.call(this),this.h=t||1,this.g=e||re,this.j=pt(this.qb,this),this.l=Date.now()}Xe(Fa,Je);N=Fa.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(ku(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ku(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Fa.$.N.call(this),ku(this),delete this.g};function xu(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function lm(t){t.g=xu(()=>{t.g=null,t.i&&(t.i=!1,lm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bA extends er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lm(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(t){er.call(this),this.h=t,this.g={}}Xe(gi,er);var Wd=[];function cm(t,e,n,r){Array.isArray(n)||(n&&(Wd[0]=n.toString()),n=Wd);for(var s=0;s<n.length;s++){var i=tm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function um(t){Iu(t.g,function(e,n){this.g.hasOwnProperty(n)&&bu(e)},t),t.g={}}gi.prototype.N=function(){gi.$.N.call(this),um(this)};gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $a(){this.g=!0}$a.prototype.Ea=function(){this.g=!1};function RA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",l=i.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function SA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CA(t,n)+(r?" "+r:"")})}function PA(t,e){t.info(function(){return"TIMEOUT: "+e})}$a.prototype.info=function(){};function CA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Pu(n)}catch{return e}}var xr={},Gd=null;function Ba(){return Gd=Gd||new Je}xr.Ta="serverreachability";function hm(t){gt.call(this,xr.Ta,t)}Xe(hm,gt);function mi(t){const e=Ba();it(e,new hm(e))}xr.STAT_EVENT="statevent";function dm(t,e){gt.call(this,xr.STAT_EVENT,t),this.stat=e}Xe(dm,gt);function Et(t){const e=Ba();it(e,new dm(e,t))}xr.Ua="timingevent";function fm(t,e){gt.call(this,xr.Ua,t),this.size=e}Xe(fm,gt);function Li(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var ja={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Du(){}Du.prototype.h=null;function Kd(t){return t.h||(t.h=t.i())}function gm(){}var Ui={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ou(){gt.call(this,"d")}Xe(Ou,gt);function Nu(){gt.call(this,"c")}Xe(Nu,gt);var bc;function qa(){}Xe(qa,Du);qa.prototype.g=function(){return new XMLHttpRequest};qa.prototype.i=function(){return{}};bc=new qa;function Fi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new gi(this),this.P=kA,t=Ec?125:void 0,this.V=new Fa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mm}function mm(){this.i=null,this.g="",this.h=!1}var kA=45e3,_m={},Rc={};N=Fi.prototype;N.setTimeout=function(t){this.P=t};function Sc(t,e,n){t.L=1,t.A=za(En(e)),t.u=n,t.S=!0,ym(t,null)}function ym(t,e){t.G=Date.now(),$i(t),t.B=En(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Rm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new mm,t.g=Gm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new bA(pt(t.Pa,t,t.g),t.O)),cm(t.U,t.g,"readystatechange",t.nb),e=t.I?Zg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),mi(),RA(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Zt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ec||this.g&&(this.h.h||this.g.ja()||Xd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?mi(3):mi(2)),Ha(this);var n=this.g.da();this.ca=n;t:if(vm(this)){var r=Xd(this.g);t="";var s=r.length,i=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Js(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,SA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hi(l)){var c=l;break t}}c=null}if(n=c)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pc(this,n);else{this.i=!1,this.s=3,Et(12),ur(this),Js(this);break e}}this.S?(Em(this,u,o),Ec&&this.i&&u==3&&(cm(this.U,this.V,"tick",this.mb),this.V.start())):(Kr(this.j,this.m,o,null),Pc(this,o)),u==4&&ur(this),this.i&&!this.J&&(u==4?qm(this.l,this):(this.i=!1,$i(this)))}else JA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ur(this),Js(this)}}}catch{}finally{}};function vm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Em(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=xA(t,n),s==Rc){e==4&&(t.s=4,Et(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==_m){t.s=4,Et(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,s,null),Pc(t,s);vm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$u(e),e.M=!0,Et(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),ur(t),Js(t))}N.mb=function(){if(this.g){var t=Zt(this.g),e=this.g.ja();this.o<e.length&&(Ha(this),Em(this,t,e),this.i&&t!=4&&$i(this))}};function xA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Rc:(n=Number(e.substring(n,r)),isNaN(n)?_m:(r+=1,r+n>e.length?Rc:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,ur(this)};function $i(t){t.Y=Date.now()+t.P,wm(t,t.P)}function wm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Li(pt(t.lb,t),e)}function Ha(t){t.C&&(re.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(PA(this.j,this.B),this.L!=2&&(mi(),Et(17)),ur(this),this.s=2,Js(this)):wm(this,this.Y-t)};function Js(t){t.l.H==0||t.J||qm(t.l,t)}function ur(t){Ha(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ku(t.V),um(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Pc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cc(n.i,t))){if(!t.K&&Cc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Qo(n),Qa(n);else break e;Fu(n),Et(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Li(pt(n.ib,n),6e3));if(1>=Cm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else hr(n,11)}else if((t.K||n.g==t)&&Qo(n),!hi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Vu(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Pe(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Wm(r,r.J?r.pa:null,r.Y),o.K){km(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.C&&(Ha(l),$i(l)),r.g=o}else Bm(r);0<n.j.length&&Ya(n)}else c[0]!="stop"&&c[0]!="close"||hr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hr(n,7):Uu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}mi(4)}catch{}}function DA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function OA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Tm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=OA(t),r=DA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mr){this.h=t.h,Go(this,t.j),this.s=t.s,this.g=t.g,Ko(this,t.m),this.l=t.l;var e=t.i,n=new _i;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qd(this,n),this.o=t.o}else t&&(e=String(t).match(Im))?(this.h=!1,Go(this,e[1]||"",!0),this.s=Bs(e[2]||""),this.g=Bs(e[3]||"",!0),Ko(this,e[4]),this.l=Bs(e[5]||"",!0),Qd(this,e[6]||"",!0),this.o=Bs(e[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}mr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Yd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Yd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?LA:MA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,FA)),t.join("")};function En(t){return new mr(t)}function Go(t,e,n){t.j=n?Bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ko(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qd(t,e,n){e instanceof _i?(t.i=e,$A(t.i,t.h)):(n||(e=js(e,UA)),t.i=new _i(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function za(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yd=/[#\/\?@]/g,MA=/[#\?:]/g,LA=/[#\?]/g,UA=/[#\?@]/g,FA=/#/g;function _i(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Map,t.h=0,t.i&&NA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=_i.prototype;N.add=function(t,e){tr(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Am(t,e){tr(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bm(t,e){return tr(t),e=ws(t,e),t.g.has(e)}N.forEach=function(t,e){tr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){tr(this);let e=[];if(typeof t=="string")bm(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return tr(this),this.i=null,t=ws(this,t),bm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Rm(t,e,n){Am(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),wu(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $A(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Am(this,r),Rm(this,s,n))},t)),t.j=e}var BA=class{constructor(t,e){this.g=t,this.map=e}};function Sm(t){this.l=t||jA,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jA=10;function Pm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cm(t){return t.h?1:t.g?t.g.size:0}function Cc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vu(t,e){t.g?t.g.add(e):t.h=e}function km(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sm.prototype.cancel=function(){if(this.i=xm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return wu(t.i)}var qA=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function HA(){this.g=new qA}function zA(t,e,n){const r=n||"";try{Tm(t,function(s,i){let o=s;Vi(s)&&(o=Pu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function WA(t,e){const n=new $a;if(re.Image){const r=new Image;r.onload=lo(uo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lo(uo,n,r,"TestLoadImage: error",!1,e),r.onabort=lo(uo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lo(uo,n,r,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function uo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wa(t){this.l=t.ec||null,this.j=t.ob||!1}Xe(Wa,Du);Wa.prototype.g=function(){return new Ga(this.l,this.j)};Wa.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Mu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(Ga,Je);var Mu=0;N=Ga.prototype;N.open=function(t,e){if(this.readyState!=Mu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yi(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=Mu};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Dm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bi(this):yi(this),this.readyState==3&&Dm(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Bi(this))};N.Ya=function(t){this.g&&(this.response=t,Bi(this))};N.ka=function(){this.g&&Bi(this)};function Bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yi(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GA=re.JSON.parse;function Fe(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Om,this.L=this.M=!1}Xe(Fe,Je);var Om="",KA=/^https?$/i,QA=["POST","PUT"];N=Fe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bc.g(),this.C=this.u?Kd(this.u):Kd(bc),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Jd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=re.FormData&&t instanceof re.FormData,!(0<=Qg(QA,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mm(this),0<this.B&&((this.L=YA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=xu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Jd(this,i)}};function YA(t){return ls&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Eu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function Jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nm(t),Ka(t)}function Nm(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Ka(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ka(this,!0)),Fe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Vm(this):this.kb())};N.kb=function(){Vm(this)};function Vm(t){if(t.h&&typeof Eu<"u"&&(!t.C[1]||Zt(t)!=4||t.da()!=2)){if(t.v&&Zt(t)==4)xu(t.La,0,t);else if(it(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Im)[1]||null;!s&&re.self&&re.self.location&&(s=re.self.location.protocol.slice(0,-1)),r=!KA.test(s?s.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var i=2<Zt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Nm(t)}}finally{Ka(t)}}}}function Ka(t,e){if(t.g){Mm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function Mm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Zt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GA(e)}};function Xd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Om:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function JA(t){const e={};t=(t.g&&2<=Zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(hi(t[r]))continue;var n=TA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}gA(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lm(t){let e="";return Iu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Lu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Lm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Um(t){this.Ga=0,this.j=[],this.l=new $a,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ns("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ns("baseRetryDelayMs",5e3,t),this.hb=Ns("retryDelaySeedMs",1e4,t),this.eb=Ns("forwardChannelMaxRetries",2,t),this.xa=Ns("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Sm(t&&t.concurrentRequestLimit),this.Ja=new HA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Um.prototype;N.ra=8;N.H=1;function Uu(t){if(Fm(t),t.H==3){var e=t.W++,n=En(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),ji(t,n),e=new Fi(t,t.l,e),e.L=2,e.A=za(En(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.A,n=!0),n||(e.g=Gm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),$i(e)}zm(t)}function Qa(t){t.g&&($u(t),t.g.cancel(),t.g=null)}function Fm(t){Qa(t),t.u&&(re.clearTimeout(t.u),t.u=null),Qo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Ya(t){if(!Pm(t.i)&&!t.m){t.m=!0;var e=t.Na;fi||am(),pi||(fi(),pi=!0),Cu.add(e,t),t.C=0}}function XA(t,e){return Cm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Li(pt(t.Na,t,e),Hm(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Fi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Zg(i),em(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$m(this,s,e),n=En(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),ji(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Lm(i)))+"&"+e:this.o&&Lu(n,this.o,i)),Vu(this.i,s),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.aa=!0,Sc(s,n,null)):Sc(s,n,e),this.H=2}}else this.H==3&&(t?Zd(this,t):this.j.length==0||Pm(this.i)||Zd(this))};function Zd(t,e){var n;e?n=e.m:n=t.W++;const r=En(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),ji(t,r),t.o&&t.s&&Lu(r,t.o,t.s),n=new Fi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$m(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vu(t.i,n),Sc(n,r,e)}function ji(t,e){t.na&&Iu(t.na,function(n,r){Pe(e,r,n)}),t.h&&Tm({},function(n,r){Pe(e,r,n)})}function $m(t,e,n){n=Math.min(t.j.length,n);var r=t.h?pt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let l=!0;for(let a=0;a<n;a++){let c=s[a].g;const u=s[a].map;if(c-=i,0>c)i=Math.max(0,s[a].g-100),l=!1;else try{zA(u,o,"req"+c+"_")}catch{r&&r(u)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Bm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;fi||am(),pi||(fi(),pi=!0),Cu.add(e,t),t.A=0}}function Fu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Li(pt(t.Ma,t),Hm(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,jm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Li(pt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Et(10),Qa(this),jm(this))};function $u(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function jm(t){t.g=new Fi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),ji(t,e),t.o&&t.s&&Lu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=za(En(e)),n.u=null,n.S=!0,ym(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Qa(this),Fu(this),Et(19))};function Qo(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function qm(t,e){var n=null;if(t.g==e){Qo(t),$u(t),t.g=null;var r=2}else if(Cc(t.i,e))n=e.F,km(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ba(),it(r,new fm(r,n)),Ya(t)}else Bm(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&XA(t,e)||r==2&&Fu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function Hm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function hr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=pt(t.pb,t);n||(n=new mr("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Go(n,"https"),za(n)),WA(n.toString(),r)}else Et(2);t.H=0,t.h&&t.h.za(e),zm(t),Fm(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Et(2)):(this.l.info("Failed to ping google.com"),Et(1))};function zm(t){if(t.H=0,t.ma=[],t.h){const e=xm(t.i);(e.length!=0||t.j.length!=0)&&(qd(t.ma,e),qd(t.ma,t.j),t.i.i.length=0,wu(t.j),t.j.length=0),t.h.ya()}}function Wm(t,e,n){var r=n instanceof mr?En(n):new mr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ko(r,r.m);else{var s=re.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new mr(null);r&&Go(i,r),e&&(i.g=e),s&&Ko(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),ji(t,r),r}function Gm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Fe(new Wa({ob:n})):new Fe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Km(){}N=Km.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Yo(){if(ls&&!(10<=Number(hA)))throw Error("Environmental error: no available transport.")}Yo.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){Je.call(this),this.g=new Um(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!hi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ts(this)}Xe(xt,Je);xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Et(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Wm(t,null,t.Y),Ya(t)};xt.prototype.close=function(){Uu(this.g)};xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pu(t),t=n);e.j.push(new BA(e.fb++,t)),e.H==3&&Ya(e)};xt.prototype.N=function(){this.g.h=null,delete this.j,Uu(this.g),delete this.g,xt.$.N.call(this)};function Qm(t){Ou.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(Qm,Ou);function Ym(){Nu.call(this),this.status=1}Xe(Ym,Nu);function Ts(t){this.g=t}Xe(Ts,Km);Ts.prototype.Ba=function(){it(this.g,"a")};Ts.prototype.Aa=function(t){it(this.g,new Qm(t))};Ts.prototype.za=function(t){it(this.g,new Ym)};Ts.prototype.ya=function(){it(this.g,"b")};function ZA(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(qt,ZA);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ul(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ul(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ul(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ul(this,r),s=0;break}}this.h=s,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var eb={};function Bu(t){return-128<=t&&128>t?lA(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function en(t){if(isNaN(t)||!isFinite(t))return Zr;if(0>t)return nt(en(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kc;return new Ie(e,0)}function Jm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(Jm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=en(Math.pow(e,8)),r=Zr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=en(Math.pow(e,i)),r=r.R(i).add(en(o))):(r=r.R(n),r=r.add(en(o)))}return r}var kc=4294967296,Zr=Bu(0),xc=Bu(1),ef=Bu(16777216);N=Ie.prototype;N.ea=function(){if(Nt(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kc+r)*e,e*=kc}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(Nt(this))return"-"+nt(this).toString(t);for(var e=en(Math.pow(t,6)),n=this,r="";;){var s=Xo(n,e).g;n=Jo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,gn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}N.X=function(t){return t=Jo(this,t),Nt(t)?-1:gn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(xc)}N.abs=function(){return Nt(this)?nt(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Jo(t,e){return t.add(nt(e))}N.R=function(t){if(gn(this)||gn(t))return Zr;if(Nt(this))return Nt(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Nt(t))return nt(this.R(nt(t)));if(0>this.X(ef)&&0>t.X(ef))return en(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(s)>>>16,a=t.D(s)&65535;n[2*r+2*s]+=o*a,ho(n,2*r+2*s),n[2*r+2*s+1]+=i*a,ho(n,2*r+2*s+1),n[2*r+2*s+1]+=o*l,ho(n,2*r+2*s+1),n[2*r+2*s+2]+=i*l,ho(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function ho(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Vs(t,e){this.g=t,this.h=e}function Xo(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new Vs(Zr,Zr);if(Nt(t))return e=Xo(nt(t),e),new Vs(nt(e.g),nt(e.h));if(Nt(e))return e=Xo(t,nt(e)),new Vs(nt(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=xc,r=e;0>=r.X(t);)n=tf(n),r=tf(r);var s=$r(n,1),i=$r(r,1);for(r=$r(r,2),n=$r(n,2);!gn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=$r(r,1),n=$r(n,1)}return e=Jo(t,s.R(e)),new Vs(s,e)}for(s=Zr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=en(n),o=i.R(e);Nt(o)||0<o.X(t);)n-=r,i=en(n),o=i.R(e);gn(i)&&(i=xc),s=s.add(i),t=Jo(t,o)}return new Vs(s,t)}N.gb=function(t){return Xo(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function tf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function $r(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(s,t.h)}Yo.prototype.createWebChannel=Yo.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;ja.NO_ERROR=0;ja.TIMEOUT=8;ja.HTTP_ERROR=6;pm.COMPLETE="complete";gm.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=en;Ie.fromString=Jm;var tb=function(){return new Yo},nb=function(){return Ba()},Fl=ja,rb=pm,sb=xr,nf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fo=gm,ib=Fe,ob=qt,es=Ie;const rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new _u("@firebase/firestore");function Ms(){return wr.logLevel}function H(t,...e){if(wr.logLevel<=de.DEBUG){const n=e.map(ju);wr.debug(`Firestore (${Is}): ${t}`,...n)}}function wn(t,...e){if(wr.logLevel<=de.ERROR){const n=e.map(ju);wr.error(`Firestore (${Is}): ${t}`,...n)}}function cs(t,...e){if(wr.logLevel<=de.WARN){const n=e.map(ju);wr.warn(`Firestore (${Is}): ${t}`,...n)}}function ju(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Re(t,e){t||te()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ab{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cb{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=i;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new Xm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new ht(e)}}class ub{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ub(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class db{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new db(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function us(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ge(0,0))}static max(){return new ie(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends vi{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends vi{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[s+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new z(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ce.fromString(e))}static fromName(e){return new Y(Ce.fromString(e).popFirst(5))}static empty(){return new Y(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ce(e.slice()))}}function mb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Jn(s,Y.empty(),e)}function _b(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ie.min(),Y.empty(),-1)}static max(){return new Jn(ie.max(),Y.empty(),-1)}}function yb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Eb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==vb)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},a=>r(a))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let a=0;a<i;a++){const c=a;n(e[c]).next(u=>{o[c]=u,++l,l===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Hi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}qu._e=-1;function Ja(t){return t==null}function Zo(t){return t===0&&1/t==-1/0}function wb(t){return typeof t=="number"&&Number.isInteger(t)&&!Zo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new po(this.root,e,this.comparator,!1)}getReverseIterator(){return new po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new po(this.root,e,this.comparator,!0)}}class po{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new of(this.data.getIterator())}getIteratorFrom(e){return new of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new $t([])}unionWith(e){let n=new ot(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class t_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new t_("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Tb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Re(!!t),typeof t=="string"){let e=0;const n=Tb.exec(t);if(Re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zu(t){const e=t.mapValue.fields.__previous_value__;return Hu(e)?zu(e):e}function Ei(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,s,i,o,l,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class wi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:Ab(t)?9007199254740991:10:te()}function hn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ei(t).isEqual(Ei(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xn(s.timestampValue),l=Xn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?Zo(o)===Zo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(sf(o)!==sf(l))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(l[a]===void 0||!hn(o[a],l[a])))return!1;return!0}(t,e);default:return te()}}function Ti(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),a=je(o.integerValue||o.doubleValue);return l<a?-1:l>a?1:l===a?0:isNaN(l)?isNaN(a)?0:-1:1}(t,e);case 3:return af(t.timestampValue,e.timestampValue);case 4:return af(Ei(t),Ei(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Tr(i),a=Tr(o);return l.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),a=o.split("/");for(let c=0;c<l.length&&c<a.length;c++){const u=ve(l[c],a[c]);if(u!==0)return u}return ve(l.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(je(i.latitude),je(o.latitude));return l!==0?l:ve(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const l=i.values||[],a=o.values||[];for(let c=0;c<l.length&&c<a.length;++c){const u=hs(l[c],a[c]);if(u)return u}return ve(l.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===go.mapValue&&o===go.mapValue)return 0;if(i===go.mapValue)return 1;if(o===go.mapValue)return-1;const l=i.fields||{},a=Object.keys(l),c=o.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=ve(a[h],u[h]);if(d!==0)return d;const p=hs(l[a[h]],c[u[h]]);if(p!==0)return p}return ve(a.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function af(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Xn(t),r=Xn(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function ds(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dc(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oc(t){return!!t&&"integerValue"in t}function Wu(t){return!!t&&"arrayValue"in t}function cf(t){return!!t&&"nullValue"in t}function uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function So(t){return!!t&&"mapValue"in t}function Xs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ab(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!So(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Xs(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());So(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];So(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){As(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(Xs(this.value))}}function n_(t){const e=[];return As(t.fields,(n,r)=>{const s=new st([n]);if(So(r)){const i=n_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ie.min(),ie.min(),ie.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ie.min(),ie.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ie.min(),ie.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ea{constructor(e,n){this.position=e,this.inclusive=n}}function hf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=hs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class r_{}class He extends r_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Sb(e,n,r):n==="array-contains"?new kb(e,r):n==="in"?new xb(e,r):n==="not-in"?new Db(e,r):n==="array-contains-any"?new Ob(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pb(e,r):new Cb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends r_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ht(e,n)}matches(e){return s_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function s_(t){return t.op==="and"}function i_(t){return Rb(t)&&s_(t)}function Rb(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Nc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(i_(t))return t.filters.map(e=>Nc(e)).join(",");{const e=t.filters.map(n=>Nc(n)).join(",");return`${t.op}(${e})`}}function o_(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&o_(o,s.filters[l]),!0):!1}(t,e):void te()}function a_(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(a_).join(" ,")+"}"}(t):"Filter"}class Sb extends He{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pb extends He{constructor(e,n){super(e,"in",n),this.keys=l_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Cb extends He{constructor(e,n){super(e,"not-in",n),this.keys=l_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class kb extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wu(n)&&Ti(n.arrayValue,this.value)}}class xb extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class Db extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class Ob extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}/**
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
 */class Nb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ce=null}}function ff(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Nb(t,e,n,r,s,i,o)}function Gu(t){const e=ae(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.ce=n}return e.ce}function Ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!o_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!df(t.startAt,e.startAt)&&df(t.endAt,e.endAt)}function Vc(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Vb(t,e,n,r,s,i,o,l){return new zi(t,e,n,r,s,i,o,l)}function c_(t){return new zi(t)}function pf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u_(t){return t.collectionGroup!==null}function Zs(t){const e=ae(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(st.comparator);return o.filters.forEach(a=>{a.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ta(i,r))}),n.has(st.keyField().canonicalString())||e.le.push(new ta(st.keyField(),r))}return e.le}function sn(t){const e=ae(t);return e.he||(e.he=Mb(e,Zs(t))),e.he}function Mb(t,e){if(t.limitType==="F")return ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ta(s.field,i)});const n=t.endAt?new ea(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ea(t.startAt.position,t.startAt.inclusive):null;return ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mc(t,e){const n=t.filters.concat([e]);return new zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lc(t,e,n){return new zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Ku(sn(t),sn(e))&&t.limitType===e.limitType}function h_(t){return`${Gu(sn(t))}|lt:${t.limitType}`}function Hr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>a_(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ds(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,a){const c=hf(o,l,a);return o.inclusive?c<=0:c<0}(r.startAt,Zs(r),s)||r.endAt&&!function(o,l,a){const c=hf(o,l,a);return o.inclusive?c>=0:c>0}(r.endAt,Zs(r),s))}(t,e)}function Lb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function d_(t){return(e,n)=>{let r=!1;for(const s of Zs(t)){const i=Ub(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ub(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,l){const a=o.data.field(i),c=l.data.field(i);return a!==null&&c!==null?hs(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return e_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=new Le(Y.comparator);function Tn(){return Fb}const f_=new Le(Y.comparator);function qs(...t){let e=f_;for(const n of t)e=e.insert(n.key,n);return e}function p_(t){let e=f_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return ei()}function g_(){return ei()}function ei(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $b=new Le(Y.comparator),Bb=new ot(Y.comparator);function he(...t){let e=Bb;for(const n of t)e=e.add(n);return e}const jb=new ot(ve);function qb(){return jb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zo(e)?"-0":e}}function __(t){return{integerValue:""+t}}function Hb(t,e){return wb(e)?__(e):m_(t,e)}/**
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
 */class el{constructor(){this._=void 0}}function zb(t,e,n){return t instanceof na?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hu(i)&&(i=zu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ii?v_(t,e):t instanceof Ai?E_(t,e):function(s,i){const o=y_(s,i),l=gf(o)+gf(s.Ie);return Oc(o)&&Oc(s.Ie)?__(l):m_(s.serializer,l)}(t,e)}function Wb(t,e,n){return t instanceof Ii?v_(t,e):t instanceof Ai?E_(t,e):n}function y_(t,e){return t instanceof ra?function(r){return Oc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class na extends el{}class Ii extends el{constructor(e){super(),this.elements=e}}function v_(t,e){const n=w_(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ai extends el{constructor(e){super(),this.elements=e}}function E_(t,e){let n=w_(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class ra extends el{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function gf(t){return je(t.integerValue||t.doubleValue)}function w_(t){return Wu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ii&&s instanceof Ii||r instanceof Ai&&s instanceof Ai?us(r.elements,s.elements,hn):r instanceof ra&&s instanceof ra?hn(r.Ie,s.Ie):r instanceof na&&s instanceof na}(t.transform,e.transform)}class Kb{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function T_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qu(t.key,on.none()):new Wi(t.key,t.data,on.none());{const n=t.data,r=Vt.empty();let s=new ot(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new $t(s.toArray()),on.none())}}function Qb(t,e,n){t instanceof Wi?function(s,i,o){const l=s.value.clone(),a=_f(s.fieldTransforms,i,o.transformResults);l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(s,i,o){if(!Po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=_f(s.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(I_(s)),a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ti(t,e,n,r){return t instanceof Wi?function(i,o,l,a){if(!Po(i.precondition,o))return l;const c=i.value.clone(),u=yf(i.fieldTransforms,a,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(i,o,l,a){if(!Po(i.precondition,o))return l;const c=yf(i.fieldTransforms,a,o),u=o.data;return u.setAll(I_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,l){return Po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Yb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=y_(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&us(r,s,(i,o)=>Gb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wi extends tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function I_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _f(t,e,n){const r=new Map;Re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Wb(o,l,n[s]))}return r}function yf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zb(i,o,e))}return r}class Qu extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jb extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=g_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const a=T_(o,l);a!==null&&r.set(s.key,a),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>mf(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>mf(n,r))}}class Yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length);let s=function(){return $b}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yu(e,n,r,s)}}/**
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
 */class Zb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,pe;function tR(t){switch(t){default:return te();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function A_(t){if(t===void 0)return wn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Be.OK:return b.OK;case Be.CANCELLED:return b.CANCELLED;case Be.UNKNOWN:return b.UNKNOWN;case Be.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Be.INTERNAL:return b.INTERNAL;case Be.UNAVAILABLE:return b.UNAVAILABLE;case Be.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Be.NOT_FOUND:return b.NOT_FOUND;case Be.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Be.ABORTED:return b.ABORTED;case Be.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Be.DATA_LOSS:return b.DATA_LOSS;default:return te()}}(pe=Be||(Be={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nR(){return new TextEncoder}/**
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
 */const rR=new es([4294967295,4294967295],0);function vf(t){const e=nR().encode(t),n=new ob;return n.update(e),new Uint8Array(n.digest())}function Ef(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class Ju{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=es.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(rR)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ju(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(ie.min(),s,new Le(ve),Tn(),he())}}class Gi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gi(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class b_{constructor(e,n){this.targetId=e,this.fe=n}}class R_{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wf{constructor(){this.ge=0,this.pe=If(),this.ye=_t.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=he(),n=he(),r=he();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Gi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=If()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Re(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class sR{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tn(),this.Qe=Tf(),this.Ke=new Le(ve)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Vc(i))if(r===0){const o=new Y(i.path);this.We(n,o,dt.newNoDocument(o,ie.min()))}else Re(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),a=l?this.et(l,e,o):1;if(a!==0){this.He(n);const c=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(a){if(a instanceof t_)return cs("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{l=new Ju(o,s,i)}catch(a){return cs(a instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return l.Te===0?null:l}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Vc(l.target)){const a=new Y(l.target.path);this.qe.get(a)!==null||this.st(o,a)||this.We(o,a,dt.newNoDocument(a,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=he();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(a=>{const c=this.Ye(a);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new nl(e,n,this.Ke,this.qe,r);return this.qe=Tn(),this.Qe=Tf(),this.Ke=new Le(ve),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new wf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ot(ve),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new wf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Tf(){return new Le(Y.comparator)}function If(){return new Le(Y.comparator)}const iR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),aR=(()=>({and:"AND",or:"OR"}))();class lR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uc(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cR(t,e){return sa(t,e.toTimestamp())}function an(t){return Re(!!t),ie.fromTimestamp(function(n){const r=Xn(n);return new Ge(r.seconds,r.nanos)}(t))}function Xu(t,e){return function(r){return new Ce(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function P_(t){const e=Ce.fromString(t);return Re(D_(e)),e}function Fc(t,e){return Xu(t.databaseId,e.path)}function $l(t,e){const n=P_(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(C_(n))}function $c(t,e){return Xu(t.databaseId,e)}function uR(t){const e=P_(t);return e.length===4?Ce.emptyPath():C_(e)}function Bc(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C_(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Af(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function hR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Re(u===void 0||typeof u=="string"),_t.fromBase64String(u||"")):(Re(u===void 0||u instanceof Uint8Array),_t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const u=c.code===void 0?b.UNKNOWN:A_(c.code);return new z(u,c.message||"")}(o);n=new R_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$l(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):ie.min(),l=new Vt({mapValue:{fields:r.document.fields}}),a=dt.newFoundDocument(s,i,o,l),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Co(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$l(t,r.document),i=r.readTime?an(r.readTime):ie.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Co([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$l(t,r.document),i=r.removedTargetIds||[];n=new Co([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new eR(s,i),l=r.targetId;n=new b_(l,o)}}return n}function dR(t,e){let n;if(e instanceof Wi)n={update:Af(t,e.key,e.value)};else if(e instanceof Qu)n={delete:Fc(t,e.key)};else if(e instanceof Dr)n={update:Af(t,e.key,e.data),updateMask:wR(e.fieldMask)};else{if(!(e instanceof Jb))return te();n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ai)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:cR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function fR(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(ie.min())&&(o=an(i)),new Kb(o,s.transformResults||[])}(n,e))):[]}function pR(t,e){return{documents:[$c(t,e.path)]}}function gR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$c(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$c(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length!==0)return x_(Ht.create(a,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(h){return{field:zr(h.field),direction:yR(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Uc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(a){return{before:a.inclusive,values:a.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(e.endAt)),n}function mR(t){let e=uR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=k_(h);return d instanceof Ht&&i_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new ta(Wr(_.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let l=null;n.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,Ja(d)?null:d}(n.limit));let a=null;n.startAt&&(a=function(h){const d=!!h.before,p=h.values||[];return new ea(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new ea(p,d)}(n.endAt)),Vb(e,s,o,i,l,"F",a,c)}function _R(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>k_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function yR(t){return iR[t]}function vR(t){return oR[t]}function ER(t){return aR[t]}function zr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return st.fromServerFormat(t.fieldPath)}function x_(t){return t instanceof He?function(n){if(n.op==="=="){if(uf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NAN"}};if(cf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NOT_NAN"}};if(cf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(n.field),op:vR(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(s=>x_(s));return r.length===1?r[0]:{compositeFilter:{op:ER(n.op),filters:r}}}(t):te()}function wR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,r,s,i=ie.min(),o=ie.min(),l=_t.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=a}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.ut=e}}function IR(t){const e=mR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lc(e,e.limit,"L"):e}/**
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
 */class AR{constructor(){this.on=new bR}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Jn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class bR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RR{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class SR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ti(r.mutation,s,$t.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Tn();const o=ei(),l=function(){return ei()}();return n.forEach((a,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Dr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ti(u.mutation,c,u.mutation.getFieldMask(),Ge.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(a=>(a.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return l.set(c,new SR(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ei();let s=new Le((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(a=>{const c=n.get(a);if(c===null)return;let u=r.get(a)||$t.empty();u=l.applyToLocalView(c,u),r.set(a,u);const h=(s.get(l.batchId)||he()).add(a);s=s.insert(l.batchId,h)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),c=a.key,u=a.value,h=g_();u.forEach(d=>{if(!i.has(d)){const p=T_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):u_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(dr());let l=-1,a=i;return o.next(c=>S.forEach(c,(u,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{a=a.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,a,c,he())).next(u=>({batchId:l,changes:p_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(l=>S.forEach(l,a=>{const c=function(h,d){return new zi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((a,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,dt.newInvalidDocument(u)))});let l=qs();return o.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ti(u.mutation,c,$t.empty(),Ge.now()),Za(n,c)&&(l=l.insert(a,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:IR(s.bundledQuery),readTime:an(s.readTime)}}(n)),S.resolve()}}/**
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
 */class kR{constructor(){this.overlays=new Le(Y.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,c=a.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&a.largestBatchId>r&&s.set(a.getKey(),a)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=dr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const l=dr(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((c,u)=>l.set(c,u)),!(l.size()>=s)););return S.resolve(l)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Zb(n,r));let i=this.lr.get(n);i===void 0&&(i=he(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.hr=new ot(Ye.Pr),this.Ir=new ot(Ye.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ye(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Y(new Ce([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Y(new Ce([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=he();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Y.comparator(e.key,n.key)||ve(e.gr,n.gr)}static Tr(e,n){return ve(e.gr,n.gr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ot(Ye.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xb(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.yr=this.yr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const l=this.wr(o.gr);i.push(l)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ve);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],l=>{r=r.add(l.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new Y(i),0);let l=new ot(ve);return this.yr.forEachWhile(a=>{const c=a.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(a.gr)),!0)},o),S.resolve(this.br(l))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ye(n,0),s=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.Cr=e,this.docs=function(){return new Le(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,l=new Y(o.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:c,value:{document:u}}=a.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||yb(_b(u),r)<=0||(s.has(u.key)||Za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OR(this)}getSize(e){return S.resolve(this.size)}}class OR extends RR{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.persistence=e,this.Fr=new bs(n=>Gu(n),Ku),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Zu,this.targetCount=0,this.Nr=fs.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n){this.Br={},this.overlays={},this.Lr=new qu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new NR(this),this.indexManager=new AR,this.remoteDocumentCache=function(s){return new DR(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new TR(n),this.Kr=new CR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new xR(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new MR(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class MR extends Eb{constructor(e){super(),this.currentSequenceNumber=e}}class eh{constructor(e){this.persistence=e,this.Gr=new Zu,this.zr=null}static jr(e){return new eh(e)}get Hr(){if(this.zr)return this.zr;throw te()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const s=Y.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new th(e,n.fromCache,r,s)}}/**
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
 */class LR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class UR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new LR;return this.Hi(e,n,o).next(l=>{if(i.result=l,this.$i)return this.Ji(e,n,o,l.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Ms()<=de.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Ms()<=de.DEBUG&&H("QueryEngine","Query:",Hr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ms()<=de.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):S.resolve())}zi(e,n){if(pf(n))return S.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lc(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Gi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(a=>{const c=this.Yi(n,l);return this.Zi(n,c,o,a.readTime)?this.zi(e,Lc(n,null,"F")):this.Xi(e,c,n,a)}))})))}ji(e,n,r,s){return pf(n)||s.isEqual(ie.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?S.resolve(null):(Ms()<=de.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(n)),this.Xi(e,o,n,mb(s,-1)).next(l=>l))})}Yi(e,n){let r=new ot(d_(e));return n.forEach((s,i)=>{Za(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Ms()<=de.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Hr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Jn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Le(ve),this.ns=new bs(i=>Gu(i),Ku),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function $R(t,e,n,r){return new FR(t,e,n,r)}async function O_(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let a=he();for(const c of s){o.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}for(const c of i){l.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}return n.localDocuments.getDocuments(r,a).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:l}))})})}function BR(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(l,a,c,u){const h=c.batch,d=h.keys();let p=S.resolve();return d.forEach(_=>{p=p.next(()=>u.getEntry(a,_)).next(E=>{const v=c.docVersions.get(_);Re(v!==null),E.version.compareTo(v)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>l.mutationQueue.removeMutationBatch(a,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let a=he();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(a=a.add(l.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function N_(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function jR(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const l=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;l.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(_t.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,v,R){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,p,u)&&l.push(n.qr.updateTargetData(i,p))});let a=Tn(),c=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),l.push(qR(i,o,e.documentUpdates).next(u=>{a=u.us,c=u.cs})),!r.isEqual(ie.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(u)}return S.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,a,c)).next(()=>a)}).then(i=>(n.ts=s,i))}function qR(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((l,a)=>{const c=i.get(l);a.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),a.isNoDocument()&&a.version.isEqual(ie.min())?(e.removeEntry(l,a.readTime),o=o.insert(l,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),o=o.insert(l,a)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",a.version)}),{us:o,cs:s}})}function HR(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zR(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function jc(t,e,n){const r=ae(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hi(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function bf(t,e,n){const r=ae(t);let s=ie.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(a,c,u){const h=ae(a),d=h.ns.get(u);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,l.targetId).next(a=>{i=a})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:he())).next(l=>(WR(r,Lb(e),l),{documents:l,ls:i})))}function WR(t,e,n){let r=t.rs.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Rf{constructor(){this.activeTargetIds=qb()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GR{constructor(){this.eo=new Rf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Rf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KR{ro(e){}shutdown(){}}/**
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
 */class Sf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mo=null;function Bl(){return mo===null?mo=function(){return 268435456+Math.round(2147483648*Math.random())}():mo++,"0x"+mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class JR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const l=Bl(),a=this.So(n,r);H("RestConnection",`Sending RPC '${n}' ${l}:`,a,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,a,c,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${l}: `,u),u),u=>{throw cs("RestConnection",`RPC '${n}' ${l} failed with error: `,u,"url: ",a,"request:",s),u})}Co(n,r,s,i,o,l){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=QR[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Bl();return new Promise((o,l)=>{const a=new ib;a.setWithCredentials(!0),a.listenOnce(rb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fl.NO_ERROR:const u=a.getResponseJson();H(ut,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fl.TIMEOUT:H(ut,`RPC '${e}' ${i} timed out`),l(new z(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fl.HTTP_ERROR:const h=a.getStatus();if(H(ut,`RPC '${e}' ${i} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(v){const R=v.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(R)>=0?R:b.UNKNOWN}(p.status);l(new z(_,p.message))}else l(new z(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new z(b.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{H(ut,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);H(ut,`RPC '${e}' ${i} sending request:`,s),a.send(n,"POST",c,r,15)})}vo(e,n,r){const s=Bl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tb(),l=nb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");H(ut,`Creating RPC '${e}' stream ${s}: ${u}`,a);const h=o.createWebChannel(u,a);let d=!1,p=!1;const _=new YR({co:v=>{p?H(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(H(ut,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),H(ut,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),E=(v,R,x)=>{v.listen(R,D=>{try{x(D)}catch(B){setTimeout(()=>{throw B},0)}})};return E(h,fo.EventType.OPEN,()=>{p||H(ut,`RPC '${e}' stream ${s} transport opened.`)}),E(h,fo.EventType.CLOSE,()=>{p||(p=!0,H(ut,`RPC '${e}' stream ${s} transport closed`),_.Ro())}),E(h,fo.EventType.ERROR,v=>{p||(p=!0,cs(ut,`RPC '${e}' stream ${s} transport errored:`,v),_.Ro(new z(b.UNAVAILABLE,"The operation could not be completed")))}),E(h,fo.EventType.MESSAGE,v=>{var R;if(!p){const x=v.data[0];Re(!!x);const D=x,B=D.error||((R=D[0])===null||R===void 0?void 0:R.error);if(B){H(ut,`RPC '${e}' stream ${s} received error:`,B);const Z=B.status;let j=function(G){const _e=Be[G];if(_e!==void 0)return A_(_e)}(Z),W=B.message;j===void 0&&(j=b.INTERNAL,W="Unknown error status: "+Z+" with message "+B.message),p=!0,_.Ro(new z(j,W)),h.close()}else H(ut,`RPC '${e}' stream ${s} received:`,x),_.Vo(x)}}),E(l,sb.STAT_EVENT,v=>{v.stat===nf.PROXY?H(ut,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===nf.NOPROXY&&H(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){return new lR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r,s,i,o,l,a){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new V_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new z(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XR extends M_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=hR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?an(o.readTime):ie.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Bc(this.serializer),n.addTarget=function(i,o){let l;const a=o.target;if(l=Vc(a)?{documents:pR(i,a)}:{query:gR(i,a)},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=S_(i,o.resumeToken);const c=Uc(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){l.readTime=sa(i,o.snapshotVersion.toTimestamp());const c=Uc(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=_R(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Bc(this.serializer),n.removeTarget=e,this.e_(n)}}class ZR extends M_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=fR(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.I_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Bc(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dR(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(b.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(b.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class tS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(wn(n),this.f_=!1):H("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Or(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ae(a);c.C_.add(4),await Ki(c),c.M_.set("Unknown"),c.C_.delete(4),await sl(c)}(this))})}),this.M_=new tS(r,s)}}async function sl(t){if(Or(t))for(const e of t.v_)await e(!0)}async function Ki(t){for(const e of t.v_)await e(!1)}function L_(t,e){const n=ae(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),sh(n)?rh(n):Rs(n).Ho()&&nh(n,e))}function U_(t,e){const n=ae(t),r=Rs(n);n.D_.delete(e),r.Ho()&&F_(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Or(n)&&n.M_.set("Unknown"))}function nh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).u_(e)}function F_(t,e){t.x_.Oe(e),Rs(t).c_(e)}function rh(t){t.x_=new sR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.M_.g_()}function sh(t){return Or(t)&&!Rs(t).jo()&&t.D_.size>0}function Or(t){return ae(t).C_.size===0}function $_(t){t.x_=void 0}async function rS(t){t.D_.forEach((e,n)=>{nh(t,e)})}async function sS(t,e){$_(t),sh(t)?(t.M_.w_(e),rh(t)):t.M_.set("Unknown")}async function iS(t,e,n){if(t.M_.set("Online"),e instanceof R_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.D_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.D_.delete(l),s.x_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ia(t,r)}else if(e instanceof Co?t.x_.$e(e):e instanceof b_?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ie.min()))try{const r=await N_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.x_.it(o);return l.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(a.resumeToken,o))}}),l.targetMismatches.forEach((a,c)=>{const u=i.D_.get(a);if(!u)return;i.D_.set(a,u.withResumeToken(_t.EMPTY_BYTE_STRING,u.snapshotVersion)),F_(i,a);const h=new Fn(u.target,a,c,u.sequenceNumber);nh(i,h)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ia(t,r)}}async function ia(t,e,n){if(!Hi(e))throw e;t.C_.add(1),await Ki(t),t.M_.set("Offline"),n||(n=()=>N_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await sl(t)})}function B_(t,e){return e().catch(n=>ia(t,n,e))}async function il(t){const e=ae(t),n=Zn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;oS(e);)try{const s=await HR(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,aS(e,s)}catch(s){await ia(e,s)}j_(e)&&q_(e)}function oS(t){return Or(t)&&t.b_.length<10}function aS(t,e){t.b_.push(e);const n=Zn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function j_(t){return Or(t)&&!Zn(t).jo()&&t.b_.length>0}function q_(t){Zn(t).start()}async function lS(t){Zn(t).E_()}async function cS(t){const e=Zn(t);for(const n of t.b_)e.P_(n.mutations)}async function uS(t,e,n){const r=t.b_.shift(),s=Yu.from(r,e,n);await B_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await il(t)}async function hS(t,e){e&&Zn(t).h_&&await async function(r,s){if(function(o){return tR(o)&&o!==b.ABORTED}(s.code)){const i=r.b_.shift();Zn(r).Yo(),await B_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await il(r)}}(t,e),j_(t)&&q_(t)}async function Pf(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Or(n);n.C_.add(3),await Ki(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await sl(n)}async function dS(t,e){const n=ae(t);e?(n.C_.delete(2),await sl(n)):e||(n.C_.add(2),await Ki(n),n.M_.set("Unknown"))}function Rs(t){return t.O_||(t.O_=function(n,r,s){const i=ae(n);return i.A_(),new XR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:rS.bind(null,t),Io:sS.bind(null,t),a_:iS.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),sh(t)?rh(t):t.M_.set("Unknown")):(await t.O_.stop(),$_(t))})),t.O_}function Zn(t){return t.N_||(t.N_=function(n,r,s){const i=ae(n);return i.A_(),new ZR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:lS.bind(null,t),Io:hS.bind(null,t),T_:cS.bind(null,t),I_:uS.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await il(t)):(await t.N_.stop(),t.b_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ih(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Hi(t))return new z(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.B_=new Le(Y.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):te():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,s,i,o,l,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,n,ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.k_=void 0,this.listeners=[]}}class pS{constructor(){this.queries=new bs(e=>h_(e),Xa),this.onlineState="Unknown",this.q_=new Set}}async function gS(t,e){const n=ae(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new fS),s)try{i.k_=await n.onListen(r)}catch(o){const l=oh(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&ah(n)}async function mS(t,e){const n=ae(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function _S(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.listeners)l.K_(s)&&(r=!0);o.k_=s}}r&&ah(n)}function yS(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ah(t){t.q_.forEach(e=>{e.next()})}class vS{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.key=e}}class z_{constructor(e){this.key=e}}class ES{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=he(),this.mutatedKeys=he(),this._a=d_(e),this.aa=new ts(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Cf,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const a=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Za(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?_!==E&&(r.track({type:3,doc:p}),v=!0):this.ha(d,p)||(r.track({type:2,doc:p}),v=!0,(a&&this._a(p,a)>0||c&&this._a(p,c)<0)&&(l=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(a||c)&&(l=!0)),v&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:l,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,_){const E=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return E(p)-E(_)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const l=n&&!s?this.Ia():[],a=this.oa.size===0&&this.current&&!s?1:0,c=a!==this.sa;return this.sa=a,o.length!==0||c?{snapshot:new ps(this.query,e.aa,i,o,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:l}:{Ta:l}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Cf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=he(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new z_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new H_(r))}),n}da(e){this.ia=e.ls,this.oa=he();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ps.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class wS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TS{constructor(e){this.key=e,this.Ra=!1}}class IS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new bs(l=>h_(l),Xa),this.fa=new Map,this.ga=new Set,this.pa=new Le(Y.comparator),this.ya=new Map,this.wa=new Zu,this.Sa={},this.ba=new Map,this.Da=fs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function AS(t,e){const n=NS(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await zR(n.localStore,sn(e)),l=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await bS(n,e,r,l==="current",o.resumeToken),n.isPrimaryClient&&L_(n.remoteStore,o)}return s}async function bS(t,e,n,r,s){t.va=(h,d,p)=>async function(E,v,R,x){let D=v.view.ca(R);D.Zi&&(D=await bf(E.localStore,v.query,!1).then(({documents:W})=>v.view.ca(W,D)));const B=x&&x.targetChanges.get(v.targetId),Z=x&&x.targetMismatches.get(v.targetId)!=null,j=v.view.applyChanges(D,E.isPrimaryClient,B,Z);return xf(E,v.targetId,j.Ta),j.snapshot}(t,h,d,p);const i=await bf(t.localStore,e,!0),o=new ES(e,i.ls),l=o.ca(i.documents),a=Gi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,a);xf(t,n,c.Ta);const u=new wS(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function RS(t,e){const n=ae(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Xa(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await jc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),U_(n.remoteStore,r.targetId),qc(n,r.targetId)}).catch(qi)):(qc(n,r.targetId),await jc(n.localStore,r.targetId,!0))}async function SS(t,e,n){const r=VS(t);try{const s=await function(o,l){const a=ae(o),c=Ge.now(),u=l.reduce((p,_)=>p.add(_.key),he());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=Tn(),E=he();return a.ss.getEntries(p,u).next(v=>{_=v,_.forEach((R,x)=>{x.isValidDocument()||(E=E.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,_)).next(v=>{h=v;const R=[];for(const x of l){const D=Yb(x,h.get(x.key).overlayedDocument);D!=null&&R.push(new Dr(x.key,D,n_(D.value.mapValue),on.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,R,l)}).next(v=>{d=v;const R=v.applyToLocalDocumentSet(h,E);return a.documentOverlayCache.saveOverlays(p,v.batchId,R)})}).then(()=>({batchId:d.batchId,changes:p_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,a){let c=o.Sa[o.currentUser.toKey()];c||(c=new Le(ve)),c=c.insert(l,a),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Qi(r,s.changes),await il(r.remoteStore)}catch(s){const i=oh(s,"Failed to persist write");n.reject(i)}}async function W_(t,e){const n=ae(t);try{const r=await jR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Re(o.Ra):s.removedDocuments.size>0&&(Re(o.Ra),o.Ra=!1))}),await Qi(n,r,e)}catch(r){await qi(r)}}function kf(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const l=o.view.Q_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const a=ae(o);a.onlineState=l;let c=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(l)&&(c=!0)}),c&&ah(a)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PS(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Le(Y.comparator);o=o.insert(i,dt.newNoDocument(i,ie.min()));const l=he().add(i),a=new nl(ie.min(),new Map,new Le(ve),o,l);await W_(r,a),r.pa=r.pa.remove(i),r.ya.delete(e),lh(r)}else await jc(r.localStore,e,!1).then(()=>qc(r,e,n)).catch(qi)}async function CS(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await BR(n.localStore,e);K_(n,r,null),G_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qi(n,s)}catch(s){await qi(s)}}async function kS(t,e,n){const r=ae(t);try{const s=await function(o,l){const a=ae(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,l).next(h=>(Re(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,l)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);K_(r,e,n),G_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qi(r,s)}catch(s){await qi(s)}}function G_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function K_(t,e,n){const r=ae(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||Q_(t,r)})}function Q_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(U_(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),lh(t))}function xf(t,e,n){for(const r of n)r instanceof H_?(t.wa.addReference(r.key,e),xS(t,r)):r instanceof z_?(H("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Q_(t,r.key)):te()}function xS(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(H("SyncEngine","New document in limbo: "+n),t.ga.add(r),lh(t))}function lh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Y(Ce.fromString(e)),r=t.Da.next();t.ya.set(r,new TS(n)),t.pa=t.pa.insert(n,r),L_(t.remoteStore,new Fn(sn(c_(n.path)),r,"TargetPurposeLimboResolution",qu._e))}}async function Qi(t,e,n){const r=ae(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((l,a)=>{o.push(r.va(a,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=th.Qi(a.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(a,c){const u=ae(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(c,d=>S.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>S.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Hi(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),_=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(d,E)}}}(r.localStore,i))}async function DS(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await O_(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(l=>{l.forEach(a=>{a.reject(new z(b.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qi(n,r._s)}}function OS(t,e){const n=ae(t),r=n.ya.get(e);if(r&&r.Ra)return he().add(r.key);{let s=he();const i=n.fa.get(e);if(!i)return s;for(const o of i){const l=n.ma.get(o);s=s.unionWith(l.view.ua)}return s}}function NS(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PS.bind(null,e),e.Va.a_=_S.bind(null,e.eventManager),e.Va.Fa=yS.bind(null,e.eventManager),e}function VS(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kS.bind(null,e),e}class Df{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $R(this.persistence,new UR,e.initialUser,this.serializer)}createPersistence(e){return new VR(eh.jr,this.serializer)}createSharedClientState(e){return new GR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DS.bind(null,this.syncEngine),await dS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pS}()}createDatastore(e){const n=rl(e.databaseInfo.databaseId),r=function(i){return new JR(i)}(e.databaseInfo);return function(i,o,l,a){return new eS(i,o,l,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new nS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>kf(this.syncEngine,n,0),function(){return Sf.D()?new Sf:new KR}())}createSyncEngine(e,n){return function(s,i,o,l,a,c,u){const h=new IS(s,i,o,l,a,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ae(n);H("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ki(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Zm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ql(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await O_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Of(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $S(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Pf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Pf(e.remoteStore,i)),t._onlineComponents=e}function FS(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $S(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FS(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await ql(t,new Df)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ql(t,new Df);return t._offlineComponents}async function Y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Of(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Of(t,new MS))),t._onlineComponents}function BS(t){return Y_(t).then(e=>e.syncEngine)}async function jS(t){const e=await Y_(t),n=e.eventManager;return n.onListen=AS.bind(null,e.syncEngine),n.onUnlisten=RS.bind(null,e.syncEngine),n}function qS(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,a,c){const u=new LS({next:d=>{o.enqueueAndForget(()=>mS(i,h)),d.fromCache&&a.source==="server"?c.reject(new z(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new vS(l,u,{includeMetadataChanges:!0,J_:!0});return gS(i,h)}(await jS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function J_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function X_(t,e,n){if(!n)throw new z(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HS(t,e,n,r){if(e===!0&&r===!0)throw new z(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!Y.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(Y.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function gs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(t);throw new z(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class al{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ab;switch(r.type){case"firstParty":return new hb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nf.get(n);r&&(H("ComponentProvider","Removing Datastore"),Nf.delete(n),r.terminate())}(this),Promise.resolve()}}function zS(t,e,n,r={}){var s;const i=(t=gs(t,al))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=ht.MOCK_USER;else{l=qg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ht(c)}t._authCredentials=new lb(new Xm(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ss(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Gn extends Ss{constructor(e,n,r){super(e,n,c_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new Y(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function ch(t,e,...n){if(t=lt(t),X_("collection","path",e),t instanceof al){const r=Ce.fromString(e,...n);return Mf(r),new Gn(t,null,r)}{if(!(t instanceof kt||t instanceof Gn))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Mf(r),new Gn(t.firestore,null,r)}}function Hl(t,e,...n){if(t=lt(t),arguments.length===1&&(e=Zm.newId()),X_("doc","path",e),t instanceof al){const r=Ce.fromString(e,...n);return Vf(r),new kt(t,null,new Y(r))}{if(!(t instanceof kt||t instanceof Gn))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Vf(r),new kt(t.firestore,t instanceof Gn?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new V_(this,"async_queue_retry"),this.iu=()=>{const n=jl();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=jl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Wn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Hi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=ih.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&te()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class ll extends al{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new WS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ey(this),this._firestoreClient.terminate()}}function uh(t,e){const n=typeof t=="object"?t:vu(),r=typeof t=="string"?t:e||"(default)",s=Na(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$g("firestore");i&&zS(s,...i)}return s}function Z_(t){return t._firestoreClient||ey(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ey(t){var e,n,r;const s=t._freezeSettings(),i=function(l,a,c,u){return new Ib(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,J_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new US(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(_t.fromBase64String(e))}catch(n){throw new z(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=/^__.*__$/;class KS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wi(e,this.data,n,this.fieldTransforms)}}function ny(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class fh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new fh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return oa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(ny(this.Iu)&&GS.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class QS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rl(e)}pu(e,n,r,s=!1){return new fh({Iu:e,methodName:n,gu:r,path:st.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ry(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new QS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YS(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);oy("Data must be an object, but it was:",o,r);const l=sy(r,o);let a,c;if(i.merge)a=new $t(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=XS(e,h,n);if(!o.contains(d))throw new z(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);eP(u,d)||u.push(d)}a=new $t(u),c=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,c=o.fieldTransforms;return new KS(new Vt(l),a,c)}function JS(t,e,n,r=!1){return ph(n,t.pu(r?4:3,e))}function ph(t,e){if(iy(t=lt(t)))return oy("Unsupported field value:",e,t),sy(t,e);if(t instanceof ty)return function(r,s){if(!ny(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let a=ph(l,s.Vu(o));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:sa(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(s.serializer,i)}}if(r instanceof dh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ms)return{bytesValue:S_(s.serializer,r._byteString)};if(r instanceof kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${ol(r)}`)}(t,e)}function sy(t,e){const n={};return e_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,s)=>{const i=ph(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof dh||t instanceof ms||t instanceof kt||t instanceof ty)}function oy(t,e,n){if(!iy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ol(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function XS(t,e,n){if((e=lt(e))instanceof hh)return e._internalPath;if(typeof e=="string")return ay(t,e);throw oa("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZS=new RegExp("[~\\*/\\[\\]]");function ay(t,e,n){if(e.search(ZS)>=0)throw oa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch{throw oa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(i||o)&&(a+=" (found",i&&(a+=` in field ${r}`),o&&(a+=` in document ${s}`),a+=")"),new z(b.INVALID_ARGUMENT,l+t+a)}function eP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tP extends ly{data(){return super.data()}}function cy(t,e){return typeof e=="string"?ay(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gh{}class rP extends gh{}function mh(t,e,...n){let r=[];e instanceof gh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(a=>a instanceof yh).length,l=i.filter(a=>a instanceof _h).length;if(o>1||o>0&&l>0)throw new z(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _h extends rP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _h(e,n,r)}_apply(e){const n=this._parse(e);return uy(e._query,n),new Ss(e.firestore,e.converter,Mc(e._query,n))}_parse(e){const n=ry(e.firestore);return function(i,o,l,a,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ff(h,u);const p=[];for(const _ of h)p.push(Uf(a,i,_));d={arrayValue:{values:p}}}else d=Uf(a,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ff(h,u),d=JS(l,o,h,u==="in"||u==="not-in");return He.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class yh extends gh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const a of l)uy(o,a),o=Mc(o,a)}(e._query,n),new Ss(e.firestore,e.converter,Mc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Uf(t,e,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new z(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!u_(e)&&n.indexOf("/")!==-1)throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!Y.isDocumentKey(r))throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lf(t,new Y(r))}if(n instanceof kt)return lf(t,n._key);throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function Ff(t,e){if(!Array.isArray(t)||t.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sP{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return As(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new dh(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ei(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Re(D_(r));const s=new wi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oP extends ly{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ko extends oP{data(e={}){return super.data(e)}}class aP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _o(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ko(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const a=new ko(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const a=new ko(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),u=o.indexOf(l.doc.key)),{type:lP(l.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class cP extends sP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function vh(t){t=gs(t,Ss);const e=gs(t.firestore,ll),n=Z_(e),r=new cP(e);return nP(t._query),qS(n,t._query).then(s=>new aP(e,r,t,s))}function $f(t,e,n){t=gs(t,kt);const r=gs(t.firestore,ll),s=iP(t.converter,e,n);return hy(r,[YS(ry(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function uP(t){return hy(gs(t.firestore,ll),[new Qu(t._key,on.none())])}function hy(t,e){return function(r,s){const i=new Wn;return r.asyncQueue.enqueueAndForget(async()=>SS(await BS(r),s,i)),i.promise}(Z_(t),e)}(function(e,n=!0){(function(s){Is=s})(kr),Er(new Yn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ll(new cb(r.getProvider("auth-internal")),new fb(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rn(rf,"4.4.0",e),rn(rf,"4.4.0","esm2017")})();const Nr=ka("database",()=>{const t=uh(Ni),e=fe([]),n=fe([]),r=fe([]),s=fe([]),i=ke(()=>e.value),o=ke(()=>n.value),l=ke(()=>s.value),a=ke(()=>r.value);return{data:e,about:n,skill:r,setAllData:async p=>{const _=mh(ch(t,p));(await vh(_)).forEach(v=>{e.value.find(x=>x===v.data())||(p=="about"&&n.value.push(v.data()),p=="skill"&&r.value.push(v.data()),p=="portfolio"&&s.value.push(v.data()))})},setData:async(p,_,E)=>{await $f(Hl(t,p,_),E),e.value.push(E)},getAllData:i,getAboutData:o,getSkillData:a,getPortfolioData:l,deleteData:async(p,_)=>{await uP(Hl(t,p,`${_}`))},editData:async(p,_,E)=>{await $f(Hl(t,p,_),E),e.value.push(E)}}}),hP={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},dP={class:"flex h-[50vh] justify-start flex-wrap my-4"},fP=["onClick"],pP=["onClick"],gP=m("img",{src:Vg,class:"h-[80px] max-w-full cursor-pointer mx-auto",alt:""},null,-1),mP={class:"text-primary tracking-tighter"},dy={__name:"portfolio",setup(t){Nr();const e=Wt(),n=fe([{name:"Coursia - Online Learning Platform",image:"/portfolio/coursia/image1.png",video:"/portfolio/coursia/coursia.webm",desc:`Udmey Style Video Learning Platform တစ်ခုဖြစ်ပါသည်။ဒီ Project မှာ Back-End အတွက် Laravel နှင့် Front-End အတွက် Vue.js, Nuxt.js တို့ကို
    အသုံးပြု၍ Develop လုပ်ထားပါသည်။ဒါ့အပြင် Video Service အတွက် Alibaba VOD ကိုအသုံးပြုထားပြီး Aliplayer ကိုလည်း Learning Page မှာထည့်သွင်း အသုံးပြုထားပါသည်။
    အကြောင်းအမျိုးမျိုးကြောင့် Release လုပ်လို့မရသေးပမဲ့ အကောင်းဆုံးဖန်တည်းထားသောလက်ယာတွေထဲက တစ်ခုဖြစ်ပါသည်။
    `,techs:"PHP, Laravel, MySQL, JavaScript, Vue.js, Nuxt3, Alibaba Oss, Alibaba VOD",link:"https://demo.coursia.ai"},{name:"Winfinance - Loan Management System ( Microfinance )",image:"/portfolio/winfinance/image.jpg",video:"/portfolio/winfinance/winf.webm",desc:`Loan Management Platform project တစ်ခုဖြစ်ပါသည်။ဒီ Project မှာ Front-End ကော Back-End ကောကိုတာ၀န်ယူ Maintain လုပ်ခဲ့ရပါသည်။
    Odoo api များကို handle လုပ်ခြင်း Mobile platform အတွက် api ထုတ်ပေးခြင်းများဆောင်ရွက်ခဲ့ပါသည်။`,techs:"PHP, Laravel, MySQL, JavaScript, Vue.js, Alibaba Oss",link:"https://play.google.com/store/apps/details?id=mm.com.winfinance.app&pcampaignid=web_share"},{name:"SoulKingDom - Movies Platform",image:"/portfolio/soulking/image.png",video:"/portfolio/soulking/soulking.webm",desc:"ဒီ Project မှာ Front-End ပိုင်းကိုသာတာ၀န်ယူ Maintain လုပ်ခဲ့ပါတယ်။လက်ရှိတော့ Go Live မှာပါ။",techs:"Go, Next.js, PostgressSQL",link:"https://soulkingdom.net"},{name:"Pet Heaven - Pet Adopting Website",image:"/portfolio/pet/pet.png",video:"/portfolio/pet/pet.webm",desc:"SG ကကျောင်းသူတစ်ယောက်အတွက် ရေးပေးခဲ့သော Static Site တစ်ခုဖြစ်ပါသည်။ Ui only ပါ။",techs:"React.js, React Redux",link:"https://pet-uwn7.onrender.com"},{name:"ELG - Online Learning Platform",image:"/portfolio/elg/elg.png",video:"/portfolio/elg/elg.webm",desc:`Online Video Learning Platform ဖြစ်ပြီး ္Profile Site, User Site, Admin Panel သုံးခုလုံးကိုတာ၀န်ယူရေးသားထားသော Project ဖြစ်သည်။
    `,techs:"Vue, PrimeVue, BootStrap, TailWind, Laravel, MySQL, AWS S3",link:"https://demo.eglearningguide.com"}]),r=(s,i)=>{e.setWindow(`portfolio-detail${i}`,s)};return(s,i)=>(I(),ce("div",hP,[le(xi,{onClick:i[0]||(i[0]=o=>xe(e).increseZindex("portfolio")),title:"Portfolio",window:"portfolio"}),m("div",dP,[(I(!0),ce(qe,null,Cr(n.value,(o,l)=>(I(),ce("div",{class:"basis-1/3 lg:basis-1/5",key:l,onClick:a=>s.$emit("portfolioDetail",{folder:o,index:l})},[m("div",{class:"text-center hover:bg-hover m-2",onClick:a=>r(o,l)},[gP,m("div",mP,Mt(o.name),1)],8,pP)],8,fP))),128))])]))}},_P={class:"w-screen lg:w-[70vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},yP={class:"h-[80vh] overflow-auto"},vP={class:"p-3"},EP={class:"text-3xl"},wP={class:"my-5"},TP={class:"mt-3"},IP=["href"],AP={class:"my-10 flex gap-3"},bP={class:"basis-1/2"},RP=["src"],SP={class:"basis-1/2"},PP=["src"],q={__name:"portfolioDetail",props:{index:Number},setup(t){const e=uh(Ni),n=fe([]),r=Wt(),{index:s}=t,i=ke(()=>r.getWindows.find(o=>o.window===`portfolio-detail${s}`));return wt(async()=>{const o=mh(ch(e,i.value.data.name));(await vh(o)).forEach(a=>{n.value.push(a.data())})}),(o,l)=>(I(),ce("div",_P,[le(xi,{onClick:l[0]||(l[0]=a=>xe(r).increseZindex(`portfolio-detail${t.index}`)),title:`${i.value.data.name}`,window:`portfolio-detail${t.index}`},null,8,["title","window"]),m("div",yP,[m("div",vP,[m("div",EP,Mt(i.value.data.name),1),m("div",wP," Description: "+Mt(i.value.data.desc),1),m("div",null," Technologies: "+Mt(i.value.data.techs),1),m("div",TP,[qn(" Link: "),m("a",{href:i.value.data.link,class:"cursor-pointer text-blue-500 underline",target:"_blank"},Mt(i.value.data.link),9,IP)]),m("div",AP,[m("div",bP,[m("img",{src:i.value.data.image,class:"border border-primary"},null,8,RP)]),m("div",SP,[m("video",{src:i.value.data.video,class:"border border-primary",controls:""},null,8,PP)])])])])]))}},CP={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},kP={class:"overflow-auto max-h-[80vh] my-2"},xP={class:"flex flex-col gap-3 text-xl"},DP=Es('<div class="text-2xl uppercase"> Aung Paing Soe @alpha </div><div class="text-2xl"> Profile </div><div class="opacity-70"> With over 2+ years of experience in both back-end and front-end development, I specialize in creating responsive designs and real-time applications. I also have expertise in server deployment, and I&#39;m a quick learner. </div><div class="text-2xl mt-4"> Working Experience </div><div class="text-xl mt-3"> Full-Stack Developer </div><div> Jan,2023 - Present </div>',6),OP=m("div",null,[m("ul",{class:"opacity-70"},[m("li",null," - Spearheading the development and maintenance of both web back-end and front-end systems. "),m("li",null," - Creating and overseeing the development of a Video Learning Platform, while also maintaining a Loan Management Platform. "),m("li",null," - Handling deployment and maintenance processes on servers to ensure seamless functionality. "),m("li",null," - Engaging in discussions with system analysts and end-users to understand and address user requirements effectively. "),m("li",null," - Mentoring interns and junior team members, actively contributing to their skill improvement and professional development. ")])],-1),NP=m("div",{class:"text-xl mt-3"}," Junior Web Developer ",-1),VP=m("div",null," Feb,2022 - 2023,Jan ",-1),MP=m("div",null,[m("ul",{class:"opacity-70"},[m("li",null," - Overseeing the maintenance of one or more e-commerce platforms. "),m("li",null," - Maintaining a delivery platform. ")])],-1),LP=m("div",{class:"text-xl mt-3"}," IT Assistant ",-1),UP=m("div",null," Jan,2019 - Feb,2022 ",-1),FP=m("div",null,[m("ul",{class:"opacity-70"},[m("li",null," - Overseeing the maintenance of one or more e-commerce platforms. "),m("li",null," - Maintaining a delivery platform. ")])],-1),fy={__name:"about",props:{images:Array},setup(t){const e=Wt();return(n,r)=>{const s=Gp("diV");return I(),ce("div",CP,[le(xi,{onClick:r[0]||(r[0]=i=>xe(e).increseZindex("about")),title:"about.txt",window:"about"}),m("div",kP,[m("div",xP,[DP,le(s,null,{default:nn(()=>[qn(" UMG Myanmar ")]),_:1}),OP,NP,VP,le(s,null,{default:nn(()=>[qn(" Marathon Myanmar ")]),_:1}),MP,LP,UP,le(s,null,{default:nn(()=>[qn(" Marathon Myanmar ")]),_:1}),FP])])])}}},$P={class:"w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},BP=Es('<div class="overflow-auto h-[80vh] my-2"><div><div class="text-3xl">My Skills</div><div class="text-xl mt-3"> Front-End Development </div><div class="mt-3 opacity-70"> Expect in building responsive and interactive UIs using HTML5, CSS3, SASS, Tailwind CSS, and Bootstrap 5. Vue.js Master: Developed complex single-page applications using Vue.js, Vuex, Vueuse, and Pinia. ReactJS Pro: Leveraged ReactJS and Redux Toolkit to build performant and scalable web applications. React Native Enthusiast: Created native mobile apps for iOS and Android using React Native. CSS Frameworks: Proficient in Tailwind CSS, Bootstrap 5, and PrimeVue for rapid UI development. Motion Design: Utilized Framer Motion to create smooth and engaging animations. </div><div class="text-xl mt-3"> Back-End Development </div><div class="mt-3 opacity-70"> PHP Expert: Developed server-side applications using PHP and Laravel, with experience in REST APIs and database integrations. Node.js Pro: Built real-time applications and microservices using Node.js and Express.js. </div><div class="text-xl mt-3"> Version Control and Deployment </div><div class="mt-3 opacity-70"> Git Savvy: Experienced with Git, Github, Bitbucket, and Gitlab for version control and collaboration. Deployment Master: Deployed and maintained applications on various platforms, including cloud servers. </div><div class="mt-3 text-xl"> Project Management &amp; Collaboration </div><div class="mt-3 opacity-70"> Agile Adept: Utilized Jira to manage project workflows, prioritize tasks, and track progress effectively. </div></div></div>',1),py={__name:"skill",props:{images:Array},setup(t){const e=Wt();return(n,r)=>(I(),ce("div",$P,[le(xi,{onClick:r[0]||(r[0]=s=>xe(e).increseZindex("skill")),title:"Skill",window:"skill"}),BP]))}},jP="/assets/profile-e8b18b5f.png",qP="/assets/facebook-f3c7c23a.png",HP="/assets/github-1fb8bd95.png",zP="/assets/Linkedin-b8733550.png",WP="/assets/instagram-f5ba81e4.png",GP="/assets/yangon-4fed5cb4.png",KP="/assets/email-880a9a5d.png",QP={class:"w-screen lg:w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"},YP=Es('<div class="p-4"><div class="flex gap-3 mb-3"><div><img src="'+jP+'" class="w-full h-full object-cover rounded-md" alt=""></div><div><div class="flex flex-col gap-3"><div class="flex gap-3"><a href="https://www.facebook.com/aung.p.soe.5437" target="_blank"><img src="'+qP+'" class="w-full cursor-pointer hover:opacity-80 rounded-lg border-primary border" alt=""></a><a href="https://github.com/aungpaingsoe097238" target="_blank"><img src="'+HP+'" class="w-full cursor-pointer hover:opacity-80 rounded-lg border border-primary" alt=""></a></div><a href="https://www.linkedin.com/in/aungpaingsoe097238" target="_blank"><img src="'+zP+'" class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg" alt=""></a></div></div></div><div class="flex gap-3"><div class="flex flex-col gap-3"><a href="https://www.instagram.com/aung.p.soe.532/" target="_blank"><img src="'+WP+'" class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg" alt=""></a></div><a href="https://goo.gl/maps/2f4fr1SSQ9whHkeK7" target="_blank"><img src="'+GP+'" class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg" alt=""></a><a href="mailto:aungpaingsoe097238@gmail.com"><img src="'+KP+'" class="w-full cursor-pointer hover:opacity-80" alt=""></a></div></div>',1),gy={__name:"contact",setup(t){const e=Wt();return(n,r)=>(I(),ce("div",QP,[le(xi,{onClick:r[0]||(r[0]=s=>xe(e).increseZindex("contact")),title:"Contact",window:"contact"}),YP]))}},JP={name:"PhStarBold"},XP={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"},ZP=m("path",{fill:"currentColor",d:"M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"},null,-1),eC=[ZP];function tC(t,e,n,r,s,i){return I(),ce("svg",XP,eC)}const aa=xa(JP,[["render",tC]]),nC={class:"text-primary text-2xl flex flex-col gap-4"},rC={class:"flex justify-center items-center gap-2"},sC=m("div",null,"Read Me",-1),iC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Aung Paing Soe."),m("div",null,[qn(" A "),m("span",{class:"text-blue-900"},"Full-Stack Web Developer")]),m("div",null,"Developer based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),oC=Ia({__name:"info",setup(t){const e=fe(null),{x:n,y:r,style:s}=Ng(e,{initialValue:{x:40,y:100}});return(i,o)=>(I(),ce("div",{ref_key:"el",ref:e,style:Rr([xe(s),{position:"fixed"}]),class:"bg-white border-2 border-e-4 border-b-4 py-4 px-9 border-primary rounded-xl"},[m("div",nC,[m("div",rC,[le(aa),sC,le(aa)]),iC])],4))}}),aC={class:"w-[90%] mx-auto h-screen flex justify-end"},lC={class:"flex flex-col gap-2 mt-5"},cC=m("img",{src:Pg,class:"w-[60px] mx-auto",alt:""},null,-1),uC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),hC=[cC,uC],dC=m("img",{src:Cg,class:"w-[60px] mx-auto",alt:""},null,-1),fC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),pC=[dC,fC],gC=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),mC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),_C=[gC,mC],yC=m("img",{src:xg,class:"w-[60px] mx-auto",alt:""},null,-1),vC=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),EC=[yC,vC],wC=m("div",{class:"text-black fixed bottom-1 start-5"},[m("span",{class:"italic"},"Development By"),m("a",{href:"#",target:"_black",class:"cursor-pointer text-primary hover:text-hover"}," @Aung Paing Soe")],-1),TC={__name:"Desktop",setup(t){const e=Wt(),n=Nr(),r=ke(()=>e.getWindows);wt(async()=>{await n.setAllData("about")}),wt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),wt(async()=>{await n.setAllData("skill")});const s=(o,l=null)=>{e.setWindow(o,l)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,l)=>(I(),ce("div",null,[m("div",aC,[m("div",lC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[0]||(l[0]=a=>s("portfolio"))},hC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[1]||(l[1]=a=>s("about"))},pC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[2]||(l[2]=a=>s("skill"))},_C),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[3]||(l[3]=a=>s("contact"))},EC)]),wC]),le(oC),(I(!0),ce(qe,null,Cr(r.value,(a,c)=>(I(),V(vI,{key:c,index:c},{window:nn(()=>[a.window==="portfolio"?(I(),V(dy,{key:0,onPortfolioDetail:i})):U("",!0),a.window==="about"?(I(),V(fy,{key:1,images:xe(n).getAboutData},null,8,["images"])):U("",!0),a.window==="skill"?(I(),V(py,{key:2,images:xe(n).getSkillData},null,8,["images"])):U("",!0),a.window==="contact"?(I(),V(gy,{key:3})):U("",!0),a.window==="portfolio-detail0"?(I(),V(q,{key:4,index:"0"})):U("",!0),a.window==="portfolio-detail1"?(I(),V(q,{key:5,index:"1"})):U("",!0),a.window==="portfolio-detail2"?(I(),V(q,{key:6,index:"2"})):U("",!0),a.window==="portfolio-detail3"?(I(),V(q,{key:7,index:"3"})):U("",!0),a.window==="portfolio-detail4"?(I(),V(q,{key:8,index:"4"})):U("",!0),a.window==="portfolio-detail5"?(I(),V(q,{key:9,index:"5"})):U("",!0),a.window==="portfolio-detail6"?(I(),V(q,{key:10,index:"6"})):U("",!0),a.window==="portfolio-detail7"?(I(),V(q,{key:11,index:"7"})):U("",!0),a.window==="portfolio-detail8"?(I(),V(q,{key:12,index:"8"})):U("",!0),a.window==="portfolio-detail9"?(I(),V(q,{key:13,index:"9"})):U("",!0),a.window==="portfolio-detail10"?(I(),V(q,{key:14,index:"10"})):U("",!0),a.window==="portfolio-detail11"?(I(),V(q,{key:15,index:"11"})):U("",!0),a.window==="portfolio-detail12"?(I(),V(q,{key:16,index:"12"})):U("",!0),a.window==="portfolio-detail13"?(I(),V(q,{key:17,index:"13"})):U("",!0),a.window==="portfolio-detail14"?(I(),V(q,{key:18,index:"14"})):U("",!0),a.window==="portfolio-detail15"?(I(),V(q,{key:19,index:"15"})):U("",!0),a.window==="portfolio-detail16"?(I(),V(q,{key:20,index:"16"})):U("",!0),a.window==="portfolio-detail17"?(I(),V(q,{key:21,index:"17"})):U("",!0),a.window==="portfolio-detail18"?(I(),V(q,{key:22,index:"18"})):U("",!0),a.window==="portfolio-detail19"?(I(),V(q,{key:23,index:"19"})):U("",!0),a.window==="portfolio-detail20"?(I(),V(q,{key:24,index:"20"})):U("",!0),a.window==="portfolio-detail21"?(I(),V(q,{key:25,index:"21"})):U("",!0),a.window==="portfolio-detail22"?(I(),V(q,{key:26,index:"22"})):U("",!0),a.window==="portfolio-detail23"?(I(),V(q,{key:27,index:"23"})):U("",!0),a.window==="portfolio-detail24"?(I(),V(q,{key:28,index:"24"})):U("",!0),a.window==="portfolio-detail25"?(I(),V(q,{key:29,index:"25"})):U("",!0),a.window==="portfolio-detail26"?(I(),V(q,{key:30,index:"26"})):U("",!0),a.window==="portfolio-detail27"?(I(),V(q,{key:31,index:"27"})):U("",!0),a.window==="portfolio-detail28"?(I(),V(q,{key:32,index:"28"})):U("",!0),a.window==="portfolio-detail29"?(I(),V(q,{key:33,index:"29"})):U("",!0),a.window==="portfolio-detail30"?(I(),V(q,{key:34,index:"30"})):U("",!0)]),_:2},1032,["index"]))),128))]))}},IC={__name:"model",props:{index:Number},setup(t){const e=Wt(),{index:n}=t,r=ke(()=>e.getWindows.find((s,i)=>i===n));return(s,i)=>(I(),ce("div",{ref:"el",style:Rr([{zIndex:r.value.zIndex},{position:"fixed"}])},[uu(s.$slots,"window")],4))}},AC=m("div",{class:"text-[12px] text-center bg-white text-primary"}," For better performance, please view using computer ",-1),bC={class:"mx-auto flex justify-end"},RC={class:"w-full bg-white border-2 border-e-4 border-b-4 flex justify-center items-center p-2 border-primary rounded-xl mt-4 ms-1 me-1"},SC={class:"text-primary text-2xl flex flex-col gap-4"},PC={class:"flex justify-center items-center gap-2"},CC=m("div",null,"Read Me",-1),kC=m("div",{class:"flex flex-col gap-3"},[m("div",null,"Hi, My name is Aung Paing Soe."),m("div",null,[qn(" A "),m("span",{class:"text-blue-900"},"Full-Stack Web Developer")]),m("div",null,"Developer based in Myanmar."),m("div",null,"Reach out to discuss on projects!")],-1),xC={class:"flex flex-col"},DC=m("img",{src:Pg,class:"w-[60px] mx-auto",alt:""},null,-1),OC=m("div",{class:"px-3 bg-white text-primary"},"Portfolio",-1),NC=[DC,OC],VC=m("img",{src:Cg,class:"w-[60px] mx-auto",alt:""},null,-1),MC=m("div",{class:"px-3 bg-white text-primary"},"about.txt",-1),LC=[VC,MC],UC=m("img",{src:kg,class:"w-[60px] mx-auto",alt:""},null,-1),FC=m("div",{class:"px-3 bg-white text-primary"},"Skill",-1),$C=[UC,FC],BC=m("img",{src:xg,class:"w-[60px] mx-auto",alt:""},null,-1),jC=m("div",{class:"px-3 bg-white text-primary"},"Contact",-1),qC=[BC,jC],HC={__name:"Mobile",setup(t){const e=Wt(),n=Nr(),r=ke(()=>e.getWindows);wt(async()=>{await n.setAllData("about")}),wt(async()=>{n.getPortfolioData.length===0&&await n.setAllData("portfolio")}),wt(async()=>{await n.setAllData("skill")});const s=(o,l=null)=>{e.setWindow(o,l)},i=o=>{e.setWindow(`portfolio-detail${o.index}`,o)};return(o,l)=>(I(),ce(qe,null,[AC,m("div",bC,[m("div",RC,[m("div",SC,[m("div",PC,[le(aa),CC,le(aa)]),kC])]),m("div",xC,[m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[0]||(l[0]=a=>s("portfolio"))},NC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[1]||(l[1]=a=>s("about"))},LC),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[2]||(l[2]=a=>s("skill"))},$C),m("div",{class:"flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer",onClick:l[3]||(l[3]=a=>s("contact"))},qC)]),(I(!0),ce(qe,null,Cr(r.value,(a,c)=>(I(),V(IC,{key:c,index:c},{window:nn(()=>[a.window==="portfolio"?(I(),V(dy,{key:0,onPortfolioDetail:i})):U("",!0),a.window==="about"?(I(),V(fy,{key:1,images:xe(n).getAboutData},null,8,["images"])):U("",!0),a.window==="skill"?(I(),V(py,{key:2,images:xe(n).getSkillData},null,8,["images"])):U("",!0),a.window==="contact"?(I(),V(gy,{key:3})):U("",!0),a.window==="portfolio-detail0"?(I(),V(q,{key:4,index:"0"})):U("",!0),a.window==="portfolio-detail1"?(I(),V(q,{key:5,index:"1"})):U("",!0),a.window==="portfolio-detail2"?(I(),V(q,{key:6,index:"2"})):U("",!0),a.window==="portfolio-detail3"?(I(),V(q,{key:7,index:"3"})):U("",!0),a.window==="portfolio-detail4"?(I(),V(q,{key:8,index:"4"})):U("",!0),a.window==="portfolio-detail5"?(I(),V(q,{key:9,index:"5"})):U("",!0),a.window==="portfolio-detail6"?(I(),V(q,{key:10,index:"6"})):U("",!0),a.window==="portfolio-detail7"?(I(),V(q,{key:11,index:"7"})):U("",!0),a.window==="portfolio-detail8"?(I(),V(q,{key:12,index:"8"})):U("",!0),a.window==="portfolio-detail9"?(I(),V(q,{key:13,index:"9"})):U("",!0),a.window==="portfolio-detail10"?(I(),V(q,{key:14,index:"10"})):U("",!0),a.window==="portfolio-detail11"?(I(),V(q,{key:15,index:"11"})):U("",!0),a.window==="portfolio-detail12"?(I(),V(q,{key:16,index:"12"})):U("",!0),a.window==="portfolio-detail13"?(I(),V(q,{key:17,index:"13"})):U("",!0),a.window==="portfolio-detail14"?(I(),V(q,{key:18,index:"14"})):U("",!0),a.window==="portfolio-detail15"?(I(),V(q,{key:19,index:"15"})):U("",!0),a.window==="portfolio-detail16"?(I(),V(q,{key:20,index:"16"})):U("",!0),a.window==="portfolio-detail17"?(I(),V(q,{key:21,index:"17"})):U("",!0),a.window==="portfolio-detail18"?(I(),V(q,{key:22,index:"18"})):U("",!0),a.window==="portfolio-detail19"?(I(),V(q,{key:23,index:"19"})):U("",!0),a.window==="portfolio-detail20"?(I(),V(q,{key:24,index:"20"})):U("",!0),a.window==="portfolio-detail21"?(I(),V(q,{key:25,index:"21"})):U("",!0),a.window==="portfolio-detail22"?(I(),V(q,{key:26,index:"22"})):U("",!0),a.window==="portfolio-detail23"?(I(),V(q,{key:27,index:"23"})):U("",!0),a.window==="portfolio-detail24"?(I(),V(q,{key:28,index:"24"})):U("",!0),a.window==="portfolio-detail25"?(I(),V(q,{key:29,index:"25"})):U("",!0),a.window==="portfolio-detail26"?(I(),V(q,{key:30,index:"26"})):U("",!0),a.window==="portfolio-detail27"?(I(),V(q,{key:31,index:"27"})):U("",!0),a.window==="portfolio-detail28"?(I(),V(q,{key:32,index:"28"})):U("",!0),a.window==="portfolio-detail29"?(I(),V(q,{key:33,index:"29"})):U("",!0),a.window==="portfolio-detail30"?(I(),V(q,{key:34,index:"30"})):U("",!0)]),_:2},1032,["index"]))),128))])],64))}},zC={key:0},WC={key:1},GC={__name:"Desktop",setup(t){const e=fe(window.innerWidth),n=fe(window.innerHeight),r=()=>{e.value=window.innerWidth,n.value=window.innerHeight};return wt(()=>{window.addEventListener("resize",r)}),cu(()=>{window.removeEventListener("resize",r)}),(s,i)=>e.value>760?(I(),ce("div",zC,[le(TC)])):(I(),ce("div",WC,[le(HC)]))}};function Eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function my(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KC=my,_y=new Di("auth","Firebase",my());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new _u("@firebase/auth");function QC(t,...e){la.logLevel<=de.WARN&&la.warn(`Auth (${kr}): ${t}`,...e)}function xo(t,...e){la.logLevel<=de.ERROR&&la.error(`Auth (${kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw wh(t,...e)}function ln(t,...e){return wh(t,...e)}function YC(t,e,n){const r=Object.assign(Object.assign({},KC()),{[e]:n});return new Di("auth","Firebase",r).create(e,{appName:t.name})}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _y.create(t,...e)}function ee(t,e,...n){if(!t)throw wh(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function In(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JC(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JC()||VI()||"connection"in navigator)?navigator.onLine:!0}function ZC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=NI()||MI()}get(){return XC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Yi(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return vy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Oi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),yy.fetch()(Ey(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function vy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ek),e);try{const s=new rk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw yo(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw YC(t,u,c);zt(t,u)}}catch(s){if(s instanceof dn)throw s;zt(t,"network-request-failed",{message:String(s)})}}async function cl(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ey(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Th(t.config,s):`${t.config.apiScheme}://${s}`}function nk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),tk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function jf(t){return t!==void 0&&t.enterprise!==void 0}class sk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ik(t,e){return nr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function ak(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lk(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=Ih(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(zl(s.auth_time)),issuedAtTime:ni(zl(s.iat)),expirationTime:ni(zl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zl(t){return Number(t)*1e3}function Ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ug(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ck(t){const e=Ih(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bi(t,ak(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pk(i.providerUserInfo):[],l=fk(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new wy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dk(t){const e=lt(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pk(t){return t.map(e=>{var{providerId:n}=e,r=Eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e){const n=await vy(t,{},async()=>{const r=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ey(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",yy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mk(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ck(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ri;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lk(this,e)}reload(){return dk(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bi(this,ok(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(l=n.tenantId)!==null&&l!==void 0?l:void 0,v=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:B,isAnonymous:Z,providerData:j,stsTokenManager:W}=n;ee(D&&W,e,"internal-error");const X=Ri.fromJSON(this.name,W);ee(typeof D=="string",e,"internal-error"),Pn(h,e.name),Pn(d,e.name),ee(typeof B=="boolean",e,"internal-error"),ee(typeof Z=="boolean",e,"internal-error"),Pn(p,e.name),Pn(_,e.name),Pn(E,e.name),Pn(v,e.name),Pn(R,e.name),Pn(x,e.name);const G=new _r({uid:D,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:Z,photoURL:_,phoneNumber:p,tenantId:E,stsTokenManager:X,createdAt:R,lastLoginAt:x});return j&&Array.isArray(j)&&(G.providerData=j.map(_e=>Object.assign({},_e))),v&&(G._redirectEventId=v),G}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ri;s.updateFromServerResponse(n);const i=new _r({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ca(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new Map;function _n(t){In(t instanceof Function,"Expected a class definition");let e=qf.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qf.set(t,e),e)}/**
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
 */class Ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ty.type="NONE";const Hf=Ty;/**
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
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(_n(Hf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||_n(Hf);const o=Do(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=_r._fromJSON(e,u);c!==i&&(l=h),i=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new ns(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ns(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(by(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Iy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sy(e))return"Blackberry";if(Py(e))return"Webos";if(Ah(e))return"Safari";if((e.includes("chrome/")||Ay(e))&&!e.includes("edge/"))return"Chrome";if(Ry(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Iy(t=mt()){return/firefox\//i.test(t)}function Ah(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ay(t=mt()){return/crios\//i.test(t)}function by(t=mt()){return/iemobile/i.test(t)}function Ry(t=mt()){return/android/i.test(t)}function Sy(t=mt()){return/blackberry/i.test(t)}function Py(t=mt()){return/webos/i.test(t)}function ul(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _k(t=mt()){var e;return ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yk(){return LI()&&document.documentMode===10}function Cy(t=mt()){return ul(t)||Ry(t)||Py(t)||Sy(t)||/windows phone/i.test(t)||by(t)}function vk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e=[]){let n;switch(t){case"Browser":n=zf(mt());break;case"Worker":n=`${zf(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
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
 */class Ek{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wk(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
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
 */const Tk=6;class Ik{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Tk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wf(this),this.idTokenSubscription=new Wf(this),this.beforeStateQueue=new Ek(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wk(this),n=new Ik(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ps(t){return lt(t)}class Wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=HI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bk().appendChild(r)})}function Rk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Sk="https://www.google.com/recaptcha/enterprise.js?render=",Pk="recaptcha-enterprise",Ck="NO_RECAPTCHA";class kk{constructor(e){this.type=Pk,this.auth=Ps(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ik(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new sk(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;jf(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ck)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&jf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xy(Sk+l).then(()=>{s(l,i,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Gf(t,e,n,r=!1){const s=new kk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Gf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t,e){const n=Na(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zo(i,e??{}))return s;zt(s,"already-initialized")}return n.initialize({options:e})}function Dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ok(t,e,n){const r=Ps(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Dy(e),{host:o,port:l}=Nk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Vk()}function Dy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nk(t){const e=Dy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qf(o)}}}function Qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function Mk(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e){return cl(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function Fk(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends bh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Si(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Si(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kf(e,n,"signInWithPassword",Lk);case"emailLink":return Uk(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kf(e,r,"signUpPassword",Mk);case"emailLink":return Fk(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e){return cl(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="http://localhost";class Ar extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:$k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jk(t){const e=Fs($s(t)).link,n=e?Fs($s(e)).deep_link_id:null,r=Fs($s(t)).deep_link_id;return(r?Fs($s(r)).link:null)||r||n||e||t}class Rh{constructor(e){var n,r,s,i,o,l;const a=Fs($s(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=Bk((s=a.mode)!==null&&s!==void 0?s:null);ee(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=jk(e);try{return new Rh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rh.parseLink(n);return ee(r,"argument-error"),Si._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends Oy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ji{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ji{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Ji{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _r._fromIdTokenResponse(e,r,s),o=Yf(r);return new _s({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yf(r);return new _s({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ua(e,n,r,s)}}function Ny(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(t,i,e,r):i})}async function qk(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",r)}/**
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
 */async function Hk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await bi(t,Ny(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Ih(i.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),_s._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(t,e,n=!1){const r="signIn",s=await Ny(t,r,e),i=await _s._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zk(t,e){return Vy(Ps(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t){const e=Ps(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Gk(t,e,n){return zk(lt(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wk(t),r})}function Kk(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function Qk(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}const ha="__sak";/**
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
 */class My{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){const t=mt();return Ah(t)||ul(t)}const Jk=1e3,Xk=10;class Ly extends My{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yk()&&vk(),this.fallbackToPolling=Cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ly.type="LOCAL";const Zk=Ly;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends My{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uy.type="SESSION";const Fy=Uy;/**
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
 */function e1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await e1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=Sh("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(d.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function n1(t){cn().location.href=t}/**
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
 */function $y(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function r1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i1(){return $y()?self:null}/**
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
 */const By="firebaseLocalStorageDb",o1=1,da="firebaseLocalStorage",jy="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(t,e){return t.transaction([da],e?"readwrite":"readonly").objectStore(da)}function a1(){const t=indexedDB.deleteDatabase(By);return new Xi(t).toPromise()}function zc(){const t=indexedDB.open(By,o1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(da,{keyPath:jy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(da)?e(r):(r.close(),await a1(),e(await zc()))})})}async function Jf(t,e,n){const r=dl(t,!0).put({[jy]:e,value:n});return new Xi(r).toPromise()}async function l1(t,e){const n=dl(t,!1).get(e),r=await new Xi(n).toPromise();return r===void 0?null:r.value}function Xf(t,e){const n=dl(t,!0).delete(e);return new Xi(n).toPromise()}const c1=800,u1=3;class qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>u1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hl._getInstance(i1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await r1(),!this.activeServiceWorker)return;this.sender=new t1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||s1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zc();return await Jf(e,ha,"1"),await Xf(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>l1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dl(s,!1).getAll();return new Xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qy.type="LOCAL";const h1=qy;new Yi(3e4,6e4);/**
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
 */function d1(t,e){return e?_n(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ph extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function f1(t){return Vy(t.auth,new Ph(t),t.bypassAuthState)}function p1(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Hk(n,new Ph(t),t.bypassAuthState)}async function g1(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),qk(n,new Ph(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f1;case"linkViaPopup":case"linkViaRedirect":return g1;case"reauthViaPopup":case"reauthViaRedirect":return p1;default:zt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new Yi(2e3,1e4);class Qr extends Hy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m1.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="pendingRedirect",Oo=new Map;class y1 extends Hy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await v1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v1(t,e){const n=T1(e),r=w1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function E1(t,e){Oo.set(t._key(),e)}function w1(t){return _n(t._redirectPersistence)}function T1(t){return Do(_1,t.config.apiKey,t.name)}async function I1(t,e,n=!1){const r=Ps(t),s=d1(r,e),o=await new y1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=10*60*1e3;class b1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zf(e))}saveEventToCache(e){this.cachedEventUids.add(Zf(e)),this.lastProcessedEventTime=Date.now()}}function Zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C1=/^https?/;async function k1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S1(t);for(const n of e)try{if(x1(n))return}catch{}zt(t,"unauthorized-domain")}function x1(t){const e=Hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!C1.test(n))return!1;if(P1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const D1=new Yi(3e4,6e4);function ep(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O1(t){return new Promise((e,n)=>{var r,s,i;function o(){ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(ln(t,"network-request-failed"))},timeout:D1.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const l=Rk("iframefcb");return cn()[l]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},xy(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw No=null,e})}let No=null;function N1(t){return No=No||O1(t),No}/**
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
 */const V1=new Yi(5e3,15e3),M1="__/auth/iframe",L1="emulator/auth/iframe",U1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $1(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Th(e,L1):`https://${t.config.authDomain}/${M1}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=F1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Oi(r).slice(1)}`}async function B1(t){const e=await N1(t),n=cn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:$1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=cn().setTimeout(()=>{i(o)},V1.get());function a(){cn().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const j1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q1=500,H1=600,z1="_blank",W1="http://localhost";class tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G1(t,e,n,r=q1,s=H1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},j1),{width:r.toString(),height:s.toString(),top:i,left:o}),c=mt().toLowerCase();n&&(l=Ay(c)?z1:n),Iy(c)&&(e=e||W1,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(_k(c)&&l!=="_self")return K1(e||"",l),new tp(null);const h=window.open(e||"",l,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new tp(h)}function K1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Q1="__/auth/handler",Y1="emulator/auth/handler",J1=encodeURIComponent("fac");async function np(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof Oy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ji){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${J1}=${encodeURIComponent(a)}`:"";return`${X1(t)}?${Oi(l).slice(1)}${c}`}function X1({config:t}){return t.emulator?Th(t,Y1):`https://${t.authDomain}/${Q1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="webStorageSupport";class Z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fy,this._completeRedirectFn=I1,this._overrideRedirectResult=E1}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await np(e,n,r,Hc(),s);return G1(e,o,Sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await np(e,n,r,Hc(),s);return n1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await B1(e),r=new b1(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wl,{type:Wl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wl];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=k1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cy()||Ah()||ul()}}const ex=Z1;var rp="@firebase/auth",sp="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rx(t){Er(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ky(t)},c=new Ak(r,s,i,a);return Dk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new Yn("auth-internal",e=>{const n=Ps(e.getProvider("auth").getImmediate());return(r=>new tx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(rp,sp,nx(t)),rn(rp,sp,"esm2017")}/**
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
 */const sx=5*60,ix=jg("authIdTokenMaxAge")||sx;let ip=null;const ox=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ix)return;const s=n==null?void 0:n.token;ip!==s&&(ip=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ax(t=vu()){const e=Na(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xk(t,{popupRedirectResolver:ex,persistence:[h1,Zk,Fy]}),r=jg("authTokenSyncURL");if(r){const i=ox(r);Qk(n,i,()=>i(n.currentUser)),Kk(n,o=>i(o))}const s=Fg("auth");return s&&Ok(n,`http://${s}`),n}rx("Browser");const lx=ka("auth",()=>{const t=fe(!1),e=ke(()=>t.value);return{auth:t,getAuth:e,setAuth:r=>{t.value=r}}}),cx={class:"flex h-screen justify-center items-center"},ux={class:"w-full lg:w-[30%] mx-auto bg-white border-primary border-2 border-e-4 border-b-4 rounded-lg"},hx=m("div",{class:"text-3xl mx-auto"},"Login",-1),dx=m("div",{class:"text-end"},[m("button",{type:"submit",class:"bg-primary rounded-sm text-white px-3 py-2 shadow-sm"}," Submit ")],-1),fx={__name:"Login",setup(t){const e=ax(Ni),n=fe(null),r=fe(null),s=dI(),i=lx(),o=()=>{Gk(e,n.value,r.value).then(l=>{const a=l.user;a.accessToken&&(i.setAuth(!0),localStorage.setItem("token",a.accessToken),s.push("/dashboard-portfolio"))}).catch(l=>{l.code,l.message,s.push("/login"),i.setAuth(!1)})};return(l,a)=>(I(),ce("div",cx,[m("div",ux,[m("form",{onSubmit:fg(o,["prevent"]),class:"flex flex-col gap-3 p-3"},[hx,m("div",null,[tc(m("input",{type:"text",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your email","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},null,512),[[cc,n.value]])]),m("div",null,[tc(m("input",{type:"password",class:"w-full p-2 border border-primary rounded-lg",placeholder:"Enter your password","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[cc,r.value]])]),dx],32)])]))}};const px={class:"flex h-screen overflow-auto justify-end me-[10%]"},gx={class:"w-[10%] fixed left-0 mt-1 h-screen overflow-auto bg-background"},mx={class:"flex flex-col mt-5"},_x={class:"w-[80%] ps-3"},yx={__name:"Sidebar",setup(t){const e=ki(),n=()=>{localStorage.removeItem("token"),window.location.href="/"};return(r,s)=>(I(),ce("div",px,[m("div",gx,[m("div",mx,[m("a",{href:"/dashboard-portfolio",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":xe(e).fullPath==="/dashboard-portfolio"}])}," Portfolio ",2),m("a",{href:"/dashboard-about",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":xe(e).fullPath==="/dashboard-about"}])}," About ",2),m("a",{href:"/dashboard-skill",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":xe(e).fullPath==="/dashboard-skill"}])}," Skill ",2),m("a",{href:"/dashobard-contact",class:lr(["w-full cursor-pointer hover:bg-desktopHover p-2 text-xl",{"bg-desktopHover":xe(e).fullPath==="/dashboard-contact"}])}," Contact ",2),m("div",{class:"border border-primary rounded-md p-2 m-2 text-xl hover:bg-primary cursor-pointer",onClick:s[0]||(s[0]=i=>n())}," Logout ")])]),m("div",_x,[uu(r.$slots,"content",{},void 0,!0)])]))}},fl=xa(yx,[["__scopeId","data-v-cc9f2995"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="firebasestorage.googleapis.com",Gy="storageBucket",vx=2*60*1e3,Ex=10*60*1e3,wx=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends dn{constructor(e,n,r=0){super(Gl(e),`Firebase Storage: ${n} (${Gl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var De;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(De||(De={}));function Gl(t){return"storage/"+t}function Ch(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(De.UNKNOWN,t)}function Tx(t){return new Ue(De.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ix(t){return new Ue(De.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ax(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(De.UNAUTHENTICATED,t)}function bx(){return new Ue(De.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Rx(t){return new Ue(De.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ky(){return new Ue(De.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qy(){return new Ue(De.CANCELED,"User canceled the upload/download.")}function Sx(t){return new Ue(De.INVALID_URL,"Invalid URL '"+t+"'.")}function Px(t){return new Ue(De.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Cx(){return new Ue(De.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gy+"' property when initializing the app?")}function Yy(){return new Ue(De.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kx(){return new Ue(De.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function xx(){return new Ue(De.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Dx(t){return new Ue(De.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wc(t){return new Ue(De.INVALID_ARGUMENT,t)}function Jy(){return new Ue(De.APP_DELETED,"The Firebase app was deleted.")}function Ox(t){return new Ue(De.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ri(t,e){return new Ue(De.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ls(t){throw new Ue(De.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw Px(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},E=n===Wy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",R=new RegExp(`^https?://${E}/${s}/${v}`,"i"),D=[{regex:l,indices:a,postModify:i},{regex:p,indices:_,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let B=0;B<D.length;B++){const Z=D[B],j=Z.regex.exec(e);if(j){const W=j[Z.indices.bucket];let X=j[Z.indices.path];X||(X=""),r=new Ct(W,X),Z.postModify(r);break}}if(r==null)throw Sx(e);return r}}class Nx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(p,a())},v)}function d(){i&&clearTimeout(i)}function p(v,...R){if(c){d();return}if(v){d(),u.call(null,v,...R);return}if(a()||o){d(),u.call(null,v,...R);return}r<64&&(r*=2);let D;l===1?(l=2,D=0):D=(r+Math.random())*1e3,h(D)}let _=!1;function E(v){_||(_=!0,d(),!c&&(s!==null?(v||(l=2),clearTimeout(s),h(0)):v||(l=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function Mx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){return t!==void 0}function Ux(t){return typeof t=="function"}function Fx(t){return typeof t=="object"&&!Array.isArray(t)}function pl(t){return typeof t=="string"||t instanceof String}function op(t){return kh()&&t instanceof Blob}function kh(){return typeof Blob<"u"}function ap(t,e,n,r){if(r<e)throw Wc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Wc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Xy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Zy(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r,s,i,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new vo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===yr.NO_ERROR,a=i.getStatus();if(!l||Zy(a,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===yr.ABORT;r(!1,new vo(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;r(!0,new vo(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Lx(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=Ch();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Jy():Qy();o(a)}else{const a=Ky();o(a)}};this.canceled_?n(!1,new vo(!1,null,!0)):this.backoffId_=Vx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Mx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Bx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Hx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zx(t,e,n,r,s,i,o=!0){const l=Xy(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return qx(c,e),Bx(c,n),jx(c,i),Hx(c,r),new $x(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Gx(...t){const e=Wx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kh())return new Blob(t);throw new Ue(De.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Kx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Qx(t){if(typeof atob>"u")throw Dx("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Kl{constructor(e,n){this.data=e,this.contentType=n||null}}function Yx(t,e){switch(t){case tn.RAW:return new Kl(ev(e));case tn.BASE64:case tn.BASE64URL:return new Kl(tv(t,e));case tn.DATA_URL:return new Kl(Xx(e),Zx(e))}throw Ch()}function ev(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Jx(t){let e;try{e=decodeURIComponent(t)}catch{throw ri(tn.DATA_URL,"Malformed data URL.")}return ev(e)}function tv(t,e){switch(t){case tn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ri(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ri(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Qx(e)}catch(s){throw s.message.includes("polyfill")?s:ri(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class nv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ri(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=eD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Xx(t){const e=new nv(t);return e.base64?tv(tn.BASE64,e.rest):Jx(e.rest)}function Zx(t){return new nv(t).contentType}function eD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){let r=0,s="";op(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(op(this.data_)){const r=this.data_,s=Kx(r,e,n);return s===null?null:new Un(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Un(r,!0)}}static getBlob(...e){if(kh()){const n=e.map(r=>r instanceof Un?r.data_:r);return new Un(Gx.apply(null,n))}else{const n=e.map(o=>pl(o)?Yx(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Un(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){let e;try{e=JSON.parse(t)}catch{return null}return Fx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function sv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t,e){return e}class yt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||rD}}let Eo=null;function sD(t){return!pl(t)||t.length<2?t:sv(t)}function iv(){if(Eo)return Eo;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(i,o){return sD(o)}const n=new yt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new yt("size");return s.xform=r,t.push(s),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),Eo=t,Eo}function iD(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ct(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function oD(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return iD(r,t),r}function ov(t,e,n){const r=rv(e);return r===null?null:oD(t,r,n)}function aD(t,e,n,r){const s=rv(e);if(s===null||!pl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Zi(d,n,r),_=Xy({alt:"media",token:c});return p+_})[0]}function av(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ks{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){if(!t)throw Ch()}function xh(t,e){function n(r,s){const i=ov(t,s,e);return vn(i!==null),i}return n}function lD(t,e){function n(r,s){const i=ov(t,s,e);return vn(i!==null),aD(i,s,t.host,t._protocol)}return n}function eo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=bx():s=Ax():n.getStatus()===402?s=Ix(t.bucket):n.getStatus()===403?s=Rx(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function lv(t){const e=eo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Tx(t.path)),i.serverResponse=s.serverResponse,i}return n}function cD(t,e,n){const r=e.fullServerUrl(),s=Zi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ks(s,i,xh(t,n),o);return l.errorHandler=lv(e),l}function uD(t,e,n){const r=e.fullServerUrl(),s=Zi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ks(s,i,lD(t,n),o);return l.errorHandler=lv(e),l}function hD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cv(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=hD(null,e)),r}function dD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let D="";for(let B=0;B<2;B++)D=D+Math.random().toString().slice(2);return D}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const c=cv(e,r,s),u=av(c,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+a+"--",p=Un.getBlob(h,r,d);if(p===null)throw Yy();const _={name:c.fullPath},E=Zi(i,t.host,t._protocol),v="POST",R=t.maxUploadRetryTime,x=new ks(E,v,xh(t,n),R);return x.urlParams=_,x.headers=o,x.body=p.uploadData(),x.errorHandler=eo(e),x}class fa{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Dh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{vn(!1)}return vn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function fD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=cv(e,r,s),l={name:o.fullPath},a=Zi(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=av(o,n),d=t.maxUploadRetryTime;function p(E){Dh(E);let v;try{v=E.getResponseHeader("X-Goog-Upload-URL")}catch{vn(!1)}return vn(pl(v)),v}const _=new ks(a,c,p,d);return _.urlParams=l,_.headers=u,_.body=h,_.errorHandler=eo(e),_}function pD(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const u=Dh(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{vn(!1)}h||vn(!1);const d=Number(h);return vn(!isNaN(d)),new fa(d,r.size(),u==="final")}const o="POST",l=t.maxUploadRetryTime,a=new ks(n,o,i,l);return a.headers=s,a.errorHandler=eo(e),a}const lp=256*1024;function gD(t,e,n,r,s,i,o,l){const a=new fa(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw kx();const c=a.total-a.current;let u=c;s>0&&(u=Math.min(u,s));const h=a.current,d=h+u;let p="";u===0?p="finalize":c===u?p="upload, finalize":p="upload";const _={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${a.current}`},E=r.slice(h,d);if(E===null)throw Yy();function v(B,Z){const j=Dh(B,["active","final"]),W=a.current+u,X=r.size();let G;return j==="final"?G=xh(e,i)(B,Z):G=null,new fa(W,X,j==="final",G)}const R="POST",x=e.maxUploadRetryTime,D=new ks(n,R,v,x);return D.headers=_,D.body=E.uploadData(),D.progressCallback=l||null,D.errorHandler=eo(t),D}const At={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ql(t){switch(t){case"running":case"pausing":case"canceling":return At.RUNNING;case"paused":return At.PAUSED;case"success":return At.SUCCESS;case"canceled":return At.CANCELED;case"error":return At.ERROR;default:return At.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,r){if(Ux(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class _D{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Ls("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class yD extends _D{initXhr(){this.xhr_.responseType="text"}}function Gr(){return new yD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=iv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(De.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Zy(s.status,[]))if(i)s=Ky();else{this.sleepTime=Math.max(this.sleepTime*2,wx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(De.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=fD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Gr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=pD(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Gr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=lp*this._chunkMultiplier,n=new fa(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=gD(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Gr,s,i,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){lp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=cD(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Gr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=dD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Gr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Qy(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ql(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new mD(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ql(this._state)){case At.SUCCESS:Br(this._resolve.bind(null,this.snapshot))();break;case At.CANCELED:case At.ERROR:const n=this._reject;Br(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ql(this._state)){case At.RUNNING:case At.PAUSED:e.next&&Br(e.next.bind(e,this.snapshot))();break;case At.SUCCESS:e.complete&&Br(e.complete.bind(e))();break;case At.CANCELED:case At.ERROR:e.error&&Br(e.error.bind(e,this._error))();break;default:e.error&&Br(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class br{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new br(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sv(this._location.path)}get storage(){return this._service}get parent(){const e=tD(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new br(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ox(e)}}function ED(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new vD(t,new Un(e),n)}function wD(t){t._throwIfRoot("getDownloadURL");const e=uD(t.storage,t._location,iv());return t.storage.makeRequestWithTokens(e,Gr).then(n=>{if(n===null)throw xx();return n})}function TD(t,e){const n=nD(t._location.path,e),r=new Ct(t._location.bucket,n);return new br(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){return/^[A-Za-z]+:\/\//.test(t)}function AD(t,e){return new br(t,e)}function uv(t,e){if(t instanceof Oh){const n=t;if(n._bucket==null)throw Cx();const r=new br(n,n._bucket);return e!=null?uv(r,e):r}else return e!==void 0?TD(t,e):t}function bD(t,e){if(e&&ID(e)){if(t instanceof Oh)return AD(t,e);throw Wc("To use ref(service, url), the first argument must be a Storage instance.")}else return uv(t,e)}function cp(t,e){const n=e==null?void 0:e[Gy];return n==null?null:Ct.makeFromBucketSpec(n,t)}function RD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:qg(s,t.app.options.projectId))}class Oh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Wy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vx,this._maxUploadRetryTime=Ex,this._requests=new Set,s!=null?this._bucket=Ct.makeFromBucketSpec(s,this._host):this._bucket=cp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=cp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ap("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ap("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new br(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Nx(Jy());{const o=zx(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const up="@firebase/storage",hp="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="storage";function SD(t,e,n){return t=lt(t),ED(t,e,n)}function PD(t){return t=lt(t),wD(t)}function CD(t,e){return t=lt(t),bD(t,e)}function kD(t=vu(),e){t=lt(t);const r=Na(t,hv).getImmediate({identifier:e}),s=$g("storage");return s&&xD(r,...s),r}function xD(t,e,n,r={}){RD(t,e,n,r)}function DD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Oh(n,r,s,e,kr)}function OD(){Er(new Yn(hv,DD,"PUBLIC").setMultipleInstances(!0)),rn(up,hp,""),rn(up,hp,"esm2017")}OD();let wo;const ND=new Uint8Array(16);function VD(){if(!wo&&(wo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!wo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return wo(ND)}const et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function MD(t,e=0){return et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]}const LD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),dp={randomUUID:LD};function dv(t,e,n){if(dp.randomUUID&&!e&&!t)return dp.randomUUID();t=t||{};const r=t.random||(t.rng||VD)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return MD(r)}const Nh=ka("storage",()=>{const t=kD(Ni),e=dv(),n=fe(null);return{setImage:async s=>{try{const i=CD(t,`about/${e}.jpg`),o=SD(i,s);return await new Promise((l,a)=>{o.on("state_changed",c=>{const u=c.bytesTransferred/c.totalBytes*100;switch(console.log("Upload is "+u+"% done"),c.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},c=>{a(c)},async()=>{const c=await PD(o.snapshot.ref);n.value=c,l()})}),n.value}catch(i){throw console.error("Error:",i),i}},url:n}}),UD={class:"my-5"},FD={class:"w-full text-md text-left bg-white text-black"},$D=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),BD={class:"px-6 border"},jD={class:"px-6 border"},qD=["src"],HD={class:"px-6 border"},zD={class:"flex items-center gap-3"},WD=["onClick"],GD=m("div",{class:"flex justify-center"},"added image",-1),KD={__name:"list",setup(t){const e=Nh(),n=Nr(),r=fe(null),s=fe(null),i=ki(),o=fe(0);wt(async()=>{await n.setAllData("about"),o.value=n.getAboutData.length});const l=()=>{r.value.click()},a=async h=>{const d=h.target.files[0];o.value++,s.value=await e.setImage(d),c(o.value)},c=async h=>{await n.setData("about",`${h}`,{id:h,url:s.value}),window.location.href=`${i.fullPath}`},u=async h=>{await n.deleteData("about",h),window.location.href=`${i.fullPath}`};return(h,d)=>(I(),ce("div",null,[le(fl,null,{content:nn(()=>[m("div",UD,[m("table",FD,[$D,m("tbody",null,[(I(!0),ce(qe,null,Cr(xe(n).getAboutData,p=>(I(),ce("tr",{class:"bg-white border-b",key:p.id},[m("td",BD,Mt(p.id),1),m("td",jD,[m("img",{src:p.url,class:"h-[50px]",alt:""},null,8,qD)]),m("td",HD,[m("div",zD,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:_=>u(p.id)}," Delete ",8,WD)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:l},[GD,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:a,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},QD={class:"my-5"},YD={class:"w-full text-md text-left bg-white text-black"},JD=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Folder"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),XD={class:"px-6 border"},ZD={class:"px-6 border"},eO={class:"flex gap-3 items-center"},tO=m("img",{src:Vg,class:"h-[50px]",alt:""},null,-1),nO={class:"px-6 border"},rO={class:"flex items-center gap-3"},sO=["href"],iO=["onClick"],oO={colspan:"3",class:"py-3 cursor-pointer"},aO=m("button",{type:"submit",class:"flex justify-center bg-primary p-2"}," added folder ",-1),lO={__name:"list",setup(t){const e=Nr(),n=fe(null),r=ki(),s=dv();wt(async()=>{await e.setAllData("portfolio")});const i=async()=>{await e.setData("portfolio",`${s}`,{id:s,name:n.value}),window.location.href=`${r.fullPath}`},o=async l=>{await e.deleteData("portfolio",l),window.location.href=`${r.fullPath}`};return(l,a)=>(I(),ce("div",null,[le(fl,null,{content:nn(()=>[m("div",QD,[m("table",YD,[JD,m("tbody",null,[(I(!0),ce(qe,null,Cr(xe(e).getPortfolioData,c=>(I(),ce("tr",{class:"bg-white border-b",key:c.id},[m("td",XD,Mt(c.id),1),m("td",ZD,[m("div",eO,[tO,qn(" "+Mt(c.name),1)])]),m("td",nO,[m("div",rO,[m("a",{href:`/dashboard-detail?name=${c.name}`,class:"cursor-pointer hover:bg-desktopHover"}," Edit ",8,sO),m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:u=>o(c.id)}," Delete ",8,iO)])])]))),128)),m("tr",null,[m("td",oO,[m("form",{onSubmit:fg(i,["prevent"]),class:"flex justify-center"},[tc(m("input",{type:"text",class:"px-2 border border-primary w-[20%]","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),required:"",placeholder:"Enter foler name"},null,512),[[cc,n.value]]),aO],32)])])])])])]),_:1})]))}},cO={class:"my-5"},uO={class:"w-full text-md text-left bg-white text-black"},hO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),dO={class:"px-6 border"},fO={class:"px-6 border"},pO=["src"],gO={class:"px-6 border"},mO={class:"flex items-center gap-3"},_O=["onClick"],yO=m("div",{class:"flex justify-center"},"added image",-1),vO={__name:"list",setup(t){const e=Nh(),n=Nr(),r=fe(null),s=fe(null),i=fe(0),o=ki();wt(async()=>{await n.setAllData("skill"),i.value=n.getSkillData.length});const l=()=>{r.value.click()},a=async h=>{const d=h.target.files[0];i.value++,s.value=await e.setImage(d),c(i.value)},c=async h=>{await n.setData("skill",`${h}`,{id:h,url:s.value}),window.location.href=`${o.fullPath}`},u=async h=>{await n.deleteData("skill",h),window.location.href=`${o.fullPath}`};return(h,d)=>(I(),ce("div",null,[le(fl,null,{content:nn(()=>[m("div",cO,[m("table",uO,[hO,m("tbody",null,[(I(!0),ce(qe,null,Cr(xe(n).getSkillData,p=>(I(),ce("tr",{class:"bg-white border-b",key:p.id},[m("td",dO,Mt(p.id),1),m("td",fO,[m("img",{src:p.url,class:"h-[50px]",alt:""},null,8,pO)]),m("td",gO,[m("div",mO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:_=>u(p.id)}," Delete ",8,_O)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:l},[yO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:a,ref_key:"imageInput",ref:r},null,544)])])])])])]),_:1})]))}},EO={class:"my-5"},wO={class:"w-full text-md text-left bg-white text-black"},TO=m("thead",{class:"border bg-primary text-white"},[m("tr",null,[m("th",{scope:"col",class:"px-6 border py-3"},"#"),m("th",{scope:"col",class:"px-6 border py-3"},"Image"),m("th",{scope:"col",class:"px-6 border py-3"},"Actions")])],-1),IO={class:"px-6 border"},AO={class:"px-6 border"},bO=["src"],RO={class:"px-6 border"},SO={class:"flex items-center gap-3"},PO=["onClick"],CO=m("div",{class:"flex justify-center"},"added image",-1),kO={__name:"detail",setup(t){const e=Nh(),n=uh(Ni),r=Nr(),s=fe(null),i=fe(null),o=ki(),l=fe(0),a=fe([]);wt(async()=>{const p=mh(ch(n,o.query.name));(await vh(p)).forEach(E=>{a.value.push(E.data())}),l.value=a.value.length});const c=()=>{s.value.click()},u=async p=>{const _=p.target.files[0];l.value++,i.value=await e.setImage(_),h(l.value)},h=async p=>{await r.setData(o.query.name,`${p}`,{id:p,url:i.value}),window.location.href=`${o.fullPath}`},d=async p=>{await r.deleteData(o.query.name,p),window.location.href=`${o.fullPath}`};return(p,_)=>(I(),ce("div",null,[le(fl,null,{content:nn(()=>[m("div",EO,[m("table",wO,[TO,m("tbody",null,[(I(!0),ce(qe,null,Cr(a.value,E=>(I(),ce("tr",{class:"bg-white border-b",key:E.id},[m("td",IO,Mt(E.id),1),m("td",AO,[m("img",{src:E.url,class:"h-[50px]",alt:""},null,8,bO)]),m("td",RO,[m("div",SO,[m("div",{class:"cursor-pointer hover:bg-desktopHover",onClick:v=>d(E.id)}," Delete ",8,PO)])])]))),128)),m("tr",null,[m("td",{colspan:"3",class:"py-3 cursor-pointer hover:bg-desktopHover",onClick:c},[CO,m("input",{type:"file",accept:"image/*",class:"hidden",onChange:u,ref_key:"imageInput",ref:s},null,544)])])])])])]),_:1})]))}},xO=[{path:"/",component:GC},{path:"/login",component:fx},{path:"/dashboard-about",component:KD,meta:{requiresAuth:!0}},{path:"/dashboard-portfolio",component:lO,meta:{requiresAuth:!0}},{path:"/dashboard-detail",component:kO,meta:{requiresAuth:!0}},{path:"/dashboard-skill",component:vO,meta:{requiresAuth:!0}}],fv=uI({history:RT(),routes:xO}),DO=(t,e,n)=>{const r=localStorage.getItem("token");t.matched.some(s=>s.meta.requiresAuth)?r?n():n("/login"):n()};fv.beforeEach((t,e,n)=>{DO(t,e,n)});const OO=Uw(),Vh=Nw(lT);Vh.use(fv);Vh.use(OO);Vh.mount("#app");
