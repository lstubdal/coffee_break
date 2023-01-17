var Qc=Object.defineProperty,Zc=Object.defineProperties;var el=Object.getOwnPropertyDescriptors;var _i=Object.getOwnPropertySymbols;var tl=Object.prototype.hasOwnProperty,nl=Object.prototype.propertyIsEnumerable;var vi=(t,e,n)=>e in t?Qc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,bi=(t,e)=>{for(var n in e||(e={}))tl.call(e,n)&&vi(t,n,e[n]);if(_i)for(var n of _i(e))nl.call(e,n)&&vi(t,n,e[n]);return t},yi=(t,e)=>Zc(t,el(e));function Ps(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const rl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sl=Ps(rl);function $o(t){return!!t||t===""}function ks(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=me(r)?al(r):ks(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(me(t))return t;if(ue(t))return t}}const il=/;(?![^(]*\))/g,ol=/:(.+)/;function al(t){const e={};return t.split(il).forEach(n=>{if(n){const r=n.split(ol);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ns(t){let e="";if(me(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Ns(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dm=t=>t==null?"":B(t)||ue(t)&&(t.toString===Wo||!$(t.toString))?JSON.stringify(t,jo,2):String(t),jo=(t,e)=>e&&e.__v_isRef?jo(t,e.value):Jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!B(e)&&!zo(e)?String(e):e,Q={},qt=[],Ne=()=>{},cl=()=>!1,ll=/^on[^a-z]/,wr=t=>ll.test(t),Ms=t=>t.startsWith("onUpdate:"),ge=Object.assign,Ds=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ul=Object.prototype.hasOwnProperty,K=(t,e)=>ul.call(t,e),B=Array.isArray,Jt=t=>Tr(t)==="[object Map]",Ho=t=>Tr(t)==="[object Set]",$=t=>typeof t=="function",me=t=>typeof t=="string",xs=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Vo=t=>ue(t)&&$(t.then)&&$(t.catch),Wo=Object.prototype.toString,Tr=t=>Wo.call(t),fl=t=>Tr(t).slice(8,-1),zo=t=>Tr(t)==="[object Object]",Ls=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,er=Ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dl=/-(\w)/g,Ve=Sr(t=>t.replace(dl,(e,n)=>n?n.toUpperCase():"")),hl=/\B([A-Z])/g,cn=Sr(t=>t.replace(hl,"-$1").toLowerCase()),Cr=Sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fr=Sr(t=>t?`on${Cr(t)}`:""),Rn=(t,e)=>!Object.is(t,e),tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},es=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ei;const pl=()=>Ei||(Ei=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let bt;const Gn=[];class gl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&bt&&(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Gn.push(this),bt=this)}off(){this.active&&(Gn.pop(),bt=Gn[Gn.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function ml(t,e){e=e||bt,e&&e.active&&e.effects.push(t)}const Us=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ko=t=>(t.w&pt)>0,Go=t=>(t.n&pt)>0,_l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pt},vl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ko(s)&&!Go(s)?s.delete(t):e[n++]=s,s.w&=~pt,s.n&=~pt}e.length=n}},ts=new WeakMap;let mn=0,pt=1;const ns=30,Bt=[];let St;const Ct=Symbol(""),rs=Symbol("");class Fs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],ml(this,r)}run(){if(!this.active)return this.fn();if(!Bt.length||!Bt.includes(this))try{return Bt.push(St=this),bl(),pt=1<<++mn,mn<=ns?_l(this):Ii(this),this.fn()}finally{mn<=ns&&vl(this),pt=1<<--mn,Mt(),Bt.pop();const e=Bt.length;St=e>0?Bt[e-1]:void 0}}stop(){this.active&&(Ii(this),this.onStop&&this.onStop(),this.active=!1)}}function Ii(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tn=!0;const Bs=[];function ln(){Bs.push(tn),tn=!1}function bl(){Bs.push(tn),tn=!0}function Mt(){const t=Bs.pop();tn=t===void 0?!0:t}function Se(t,e,n){if(!qo())return;let r=ts.get(t);r||ts.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Us()),Jo(s)}function qo(){return tn&&St!==void 0}function Jo(t,e){let n=!1;mn<=ns?Go(t)||(t.n|=pt,n=!Ko(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function Ye(t,e,n,r,s,i){const o=ts.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Ls(n)&&a.push(o.get("length")):(a.push(o.get(Ct)),Jt(t)&&a.push(o.get(rs)));break;case"delete":B(t)||(a.push(o.get(Ct)),Jt(t)&&a.push(o.get(rs)));break;case"set":Jt(t)&&a.push(o.get(Ct));break}if(a.length===1)a[0]&&ss(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ss(Us(c))}}function ss(t,e){for(const n of B(t)?t:[...t])(n!==St||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const yl=Ps("__proto__,__v_isRef,__isVue"),Yo=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(xs)),El=$s(),Il=$s(!1,!0),wl=$s(!0),wi=Tl();function Tl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ln();const r=G(this)[e].apply(this,n);return Mt(),r}}),t}function $s(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?$l:ta:e?ea:Zo).get(r))return r;const o=B(r);if(!t&&o&&K(wi,s))return Reflect.get(wi,s,i);const a=Reflect.get(r,s,i);return(xs(s)?Yo.has(s):yl(s))||(t||Se(r,"get",s),e)?a:de(a)?!o||!Ls(s)?a.value:a:ue(a)?t?na(a):un(a):a}}const Sl=Xo(),Cl=Xo(!0);function Xo(t=!1){return function(n,r,s,i){let o=n[r];if(An(o)&&de(o)&&!de(s))return!1;if(!t&&!An(s)&&(ra(s)||(s=G(s),o=G(o)),!B(n)&&de(o)&&!de(s)))return o.value=s,!0;const a=B(n)&&Ls(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?Rn(s,o)&&Ye(n,"set",r,s):Ye(n,"add",r,s)),c}}function Rl(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ye(t,"delete",e,void 0),r}function Al(t,e){const n=Reflect.has(t,e);return(!xs(e)||!Yo.has(e))&&Se(t,"has",e),n}function Ol(t){return Se(t,"iterate",B(t)?"length":Ct),Reflect.ownKeys(t)}const Qo={get:El,set:Sl,deleteProperty:Rl,has:Al,ownKeys:Ol},Pl={get:wl,set(t,e){return!0},deleteProperty(t,e){return!0}},kl=ge({},Qo,{get:Il,set:Cl}),js=t=>t,Rr=t=>Reflect.getPrototypeOf(t);function qn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);e!==i&&!n&&Se(s,"get",e),!n&&Se(s,"get",i);const{has:o}=Rr(s),a=r?js:n?Ws:On;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Jn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return t!==s&&!e&&Se(r,"has",t),!e&&Se(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Yn(t,e=!1){return t=t.__v_raw,!e&&Se(G(t),"iterate",Ct),Reflect.get(t,"size",t)}function Ti(t){t=G(t);const e=G(this);return Rr(e).has.call(e,t)||(e.add(t),Ye(e,"add",t,t)),this}function Si(t,e){e=G(e);const n=G(this),{has:r,get:s}=Rr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Rn(e,o)&&Ye(n,"set",t,e):Ye(n,"add",t,e),this}function Ci(t){const e=G(this),{has:n,get:r}=Rr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ye(e,"delete",t,void 0),i}function Ri(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Ye(t,"clear",void 0,void 0),n}function Xn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?js:t?Ws:On;return!t&&Se(a,"iterate",Ct),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Qn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Jt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?js:e?Ws:On;return!e&&Se(i,"iterate",c?rs:Ct),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function Nl(){const t={get(i){return qn(this,i)},get size(){return Yn(this)},has:Jn,add:Ti,set:Si,delete:Ci,clear:Ri,forEach:Xn(!1,!1)},e={get(i){return qn(this,i,!1,!0)},get size(){return Yn(this)},has:Jn,add:Ti,set:Si,delete:Ci,clear:Ri,forEach:Xn(!1,!0)},n={get(i){return qn(this,i,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Xn(!0,!1)},r={get(i){return qn(this,i,!0,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qn(i,!1,!1),n[i]=Qn(i,!0,!1),e[i]=Qn(i,!1,!0),r[i]=Qn(i,!0,!0)}),[t,n,e,r]}const[Ml,Dl,xl,Ll]=Nl();function Hs(t,e){const n=e?t?Ll:xl:t?Dl:Ml;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Ul={get:Hs(!1,!1)},Fl={get:Hs(!1,!0)},Bl={get:Hs(!0,!1)},Zo=new WeakMap,ea=new WeakMap,ta=new WeakMap,$l=new WeakMap;function jl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hl(t){return t.__v_skip||!Object.isExtensible(t)?0:jl(fl(t))}function un(t){return An(t)?t:Vs(t,!1,Qo,Ul,Zo)}function Vl(t){return Vs(t,!1,kl,Fl,ea)}function na(t){return Vs(t,!0,Pl,Bl,ta)}function Vs(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Hl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Yt(t){return An(t)?Yt(t.__v_raw):!!(t&&t.__v_isReactive)}function An(t){return!!(t&&t.__v_isReadonly)}function ra(t){return!!(t&&t.__v_isShallow)}function sa(t){return Yt(t)||An(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ia(t){return cr(t,"__v_skip",!0),t}const On=t=>ue(t)?un(t):t,Ws=t=>ue(t)?na(t):t;function oa(t){qo()&&(t=G(t),t.dep||(t.dep=Us()),Jo(t.dep))}function aa(t,e){t=G(t),t.dep&&ss(t.dep)}function de(t){return Boolean(t&&t.__v_isRef===!0)}function Wl(t){return ca(t,!1)}function zl(t){return ca(t,!0)}function ca(t,e){return de(t)?t:new Kl(t,e)}class Kl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:On(e)}get value(){return oa(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:On(e),aa(this))}}function Xt(t){return de(t)?t.value:t}const Gl={get:(t,e,n)=>Xt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function la(t){return Yt(t)?t:new Proxy(t,Gl)}class ql{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Fs(e,()=>{this._dirty||(this._dirty=!0,aa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return oa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Jl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ne):(r=t.get,s=t.set),new ql(r,s,i||!s,n)}Promise.resolve();function ut(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ar(i,e,n)}return s}function Pe(t,e,n,r){if($(t)){const i=ut(t,e,n,r);return i&&Vo(i)&&i.catch(o=>{Ar(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Ar(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ut(c,null,10,[t,o,a]);return}}Yl(t,n,s,r)}function Yl(t,e,n,r=!0){console.error(t)}let lr=!1,is=!1;const we=[];let Ge=0;const yn=[];let _n=null,Vt=0;const En=[];let rt=null,Wt=0;const ua=Promise.resolve();let zs=null,os=null;function fa(t){const e=zs||ua;return t?e.then(this?t.bind(this):t):e}function Xl(t){let e=Ge+1,n=we.length;for(;e<n;){const r=e+n>>>1;Pn(we[r])<t?e=r+1:n=r}return e}function da(t){(!we.length||!we.includes(t,lr&&t.allowRecurse?Ge+1:Ge))&&t!==os&&(t.id==null?we.push(t):we.splice(Xl(t.id),0,t),ha())}function ha(){!lr&&!is&&(is=!0,zs=ua.then(ma))}function Ql(t){const e=we.indexOf(t);e>Ge&&we.splice(e,1)}function pa(t,e,n,r){B(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ha()}function Zl(t){pa(t,_n,yn,Vt)}function eu(t){pa(t,rt,En,Wt)}function Ks(t,e=null){if(yn.length){for(os=e,_n=[...new Set(yn)],yn.length=0,Vt=0;Vt<_n.length;Vt++)_n[Vt]();_n=null,Vt=0,os=null,Ks(t,e)}}function ga(t){if(En.length){const e=[...new Set(En)];if(En.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,r)=>Pn(n)-Pn(r)),Wt=0;Wt<rt.length;Wt++)rt[Wt]();rt=null,Wt=0}}const Pn=t=>t.id==null?1/0:t.id;function ma(t){is=!1,lr=!0,Ks(t),we.sort((n,r)=>Pn(n)-Pn(r));const e=Ne;try{for(Ge=0;Ge<we.length;Ge++){const n=we[Ge];n&&n.active!==!1&&ut(n,null,14)}}finally{Ge=0,we.length=0,ga(),lr=!1,zs=null,(we.length||yn.length||En.length)&&ma(t)}}function tu(t,e,...n){const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||Q;p?s=n.map(m=>m.trim()):d&&(s=n.map(es))}let a,c=r[a=Fr(e)]||r[a=Fr(Ve(e))];!c&&i&&(c=r[a=Fr(cn(e))]),c&&Pe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(l,t,6,s)}}function _a(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const u=_a(l,e,!0);u&&(a=!0,ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):ge(o,i),r.set(t,o),o)}function Gs(t,e){return!t||!wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,cn(e))||K(t,e))}let Oe=null,va=null;function ur(t){const e=Oe;return Oe=t,va=t&&t.type.__scopeId||null,e}function nu(t,e=Oe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fi(-1);const i=ur(e),o=t(...s);return ur(i),r._d&&Fi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Br(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:m,ctx:S,inheritAttrs:N}=t;let A,R;const x=ur(t);try{if(n.shapeFlag&4){const W=s||r;A=$e(u.call(W,W,d,i,m,p,S)),R=c}else{const W=e;A=$e(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),R=e.props?c:ru(c)}}catch(W){In.length=0,Ar(W,t,1),A=Te(We)}let H=A;if(R&&N!==!1){const W=Object.keys(R),{shapeFlag:se}=H;W.length&&se&7&&(o&&W.some(Ms)&&(R=su(R,o)),H=nn(H,R))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),A=H,ur(x),A}const ru=t=>{let e;for(const n in t)(n==="class"||n==="style"||wr(n))&&((e||(e={}))[n]=t[n]);return e},su=(t,e)=>{const n={};for(const r in t)(!Ms(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function iu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ai(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Gs(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ai(r,o,l):!0:!!o;return!1}function Ai(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gs(n,i))return!0}return!1}function ou({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const au=t=>t.__isSuspense;function cu(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):eu(t)}function nr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function ft(t,e,n=!1){const r=le||Oe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}const Oi={};function Qt(t,e,n){return ba(t,e,n)}function ba(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const a=le;let c,l=!1,u=!1;if(de(t)?(c=()=>t.value,l=ra(t)):Yt(t)?(c=()=>t,r=!0):B(t)?(u=!0,l=t.some(Yt),c=()=>t.map(R=>{if(de(R))return R.value;if(Yt(R))return Tt(R);if($(R))return ut(R,a,2)})):$(t)?e?c=()=>ut(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Pe(t,a,3,[p])}:c=Ne,e&&r){const R=c;c=()=>Tt(R())}let d,p=R=>{d=A.onStop=()=>{ut(R,a,4)}};if(kn)return p=Ne,e?n&&Pe(e,a,3,[c(),u?[]:void 0,p]):c(),Ne;let m=u?[]:Oi;const S=()=>{if(!!A.active)if(e){const R=A.run();(r||l||(u?R.some((x,H)=>Rn(x,m[H])):Rn(R,m)))&&(d&&d(),Pe(e,a,3,[R,m===Oi?void 0:m,p]),m=R)}else A.run()};S.allowRecurse=!!e;let N;s==="sync"?N=S:s==="post"?N=()=>be(S,a&&a.suspense):N=()=>{!a||a.isMounted?Zl(S):S()};const A=new Fs(c,N);return e?n?S():m=A.run():s==="post"?be(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Ds(a.scope.effects,A)}}function lu(t,e,n){const r=this.proxy,s=me(t)?t.includes(".")?ya(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=le;rn(this);const a=ba(s,i.bind(r),n);return o?rn(o):At(),a}function ya(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Tt(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Tt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Tt(t[n],e);else if(Ho(t)||Jt(t))t.forEach(n=>{Tt(n,e)});else if(zo(t))for(const n in t)Tt(t[n],e);return t}function uu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sa(()=>{t.isMounted=!0}),Ca(()=>{t.isUnmounting=!0}),t}const Re=[Function,Array],fu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Re,onEnter:Re,onAfterEnter:Re,onEnterCancelled:Re,onBeforeLeave:Re,onLeave:Re,onAfterLeave:Re,onLeaveCancelled:Re,onBeforeAppear:Re,onAppear:Re,onAfterAppear:Re,onAppearCancelled:Re},setup(t,{slots:e}){const n=Qu(),r=uu();let s;return()=>{const i=e.default&&Ia(e.default(),!0);if(!i||!i.length)return;const o=G(t),{mode:a}=o,c=i[0];if(r.isLeaving)return $r(c);const l=Pi(c);if(!l)return $r(c);const u=as(l,o,r,n);cs(l,u);const d=n.subTree,p=d&&Pi(d);let m=!1;const{getTransitionKey:S}=l.type;if(S){const N=S();s===void 0?s=N:N!==s&&(s=N,m=!0)}if(p&&p.type!==We&&(!It(l,p)||m)){const N=as(p,o,r,n);if(cs(p,N),a==="out-in")return r.isLeaving=!0,N.afterLeave=()=>{r.isLeaving=!1,n.update()},$r(c);a==="in-out"&&l.type!==We&&(N.delayLeave=(A,R,x)=>{const H=Ea(r,p);H[String(p.key)]=p,A._leaveCb=()=>{R(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},du=fu;function Ea(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function as(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:S,onBeforeAppear:N,onAppear:A,onAfterAppear:R,onAppearCancelled:x}=e,H=String(t.key),W=Ea(n,t),se=(V,ae)=>{V&&Pe(V,r,9,ae)},oe={mode:i,persisted:o,beforeEnter(V){let ae=a;if(!n.isMounted)if(s)ae=N||a;else return;V._leaveCb&&V._leaveCb(!0);const Z=W[H];Z&&It(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),se(ae,[V])},enter(V){let ae=c,Z=l,he=u;if(!n.isMounted)if(s)ae=A||c,Z=R||l,he=x||u;else return;let pe=!1;const fe=V._enterCb=Ze=>{pe||(pe=!0,Ze?se(he,[V]):se(Z,[V]),oe.delayedLeave&&oe.delayedLeave(),V._enterCb=void 0)};ae?(ae(V,fe),ae.length<=1&&fe()):fe()},leave(V,ae){const Z=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return ae();se(d,[V]);let he=!1;const pe=V._leaveCb=fe=>{he||(he=!0,ae(),fe?se(S,[V]):se(m,[V]),V._leaveCb=void 0,W[Z]===t&&delete W[Z])};W[Z]=t,p?(p(V,pe),p.length<=1&&pe()):pe()},clone(V){return as(V,e,n,r)}};return oe}function $r(t){if(Or(t))return t=nn(t),t.children=null,t}function Pi(t){return Or(t)?t.children?t.children[0]:void 0:t}function cs(t,e){t.shapeFlag&6&&t.component?cs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ia(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===Be?(i.patchFlag&128&&r++,n=n.concat(Ia(i.children,e))):(e||i.type!==We)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function wa(t){return $(t)?{setup:t,name:t.name}:t}const ls=t=>!!t.type.__asyncLoader,Or=t=>t.type.__isKeepAlive;function hu(t,e){Ta(t,"a",e)}function pu(t,e){Ta(t,"da",e)}function Ta(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Or(s.parent.vnode)&&gu(r,e,n,s),s=s.parent}}function gu(t,e,n,r){const s=Pr(e,t,r,!0);Ra(()=>{Ds(r[e],s)},n)}function Pr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ln(),rn(n);const a=Pe(e,n,t,o);return At(),Mt(),a});return r?s.unshift(i):s.push(i),i}}const Qe=t=>(e,n=le)=>(!kn||t==="sp")&&Pr(t,e,n),mu=Qe("bm"),Sa=Qe("m"),_u=Qe("bu"),vu=Qe("u"),Ca=Qe("bum"),Ra=Qe("um"),bu=Qe("sp"),yu=Qe("rtg"),Eu=Qe("rtc");function Iu(t,e=le){Pr("ec",t,e)}let us=!0;function wu(t){const e=Oa(t),n=t.proxy,r=t.ctx;us=!1,e.beforeCreate&&ki(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:S,activated:N,deactivated:A,beforeDestroy:R,beforeUnmount:x,destroyed:H,unmounted:W,render:se,renderTracked:oe,renderTriggered:V,errorCaptured:ae,serverPrefetch:Z,expose:he,inheritAttrs:pe,components:fe,directives:Ze,filters:xt}=e;if(l&&Tu(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const Y=o[ee];$(Y)&&(r[ee]=Y.bind(n))}if(s){const ee=s.call(n,n);ue(ee)&&(t.data=un(ee))}if(us=!0,i)for(const ee in i){const Y=i[ee],Ee=$(Y)?Y.bind(n,n):$(Y.get)?Y.get.bind(n,n):Ne,Ut=!$(Y)&&$(Y.set)?Y.set.bind(n):Ne,ze=Ae({get:Ee,set:Ut});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Le=>ze.value=Le})}if(a)for(const ee in a)Aa(a[ee],r,n,ee);if(c){const ee=$(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(Y=>{nr(Y,ee[Y])})}u&&ki(u,t,"c");function ce(ee,Y){B(Y)?Y.forEach(Ee=>ee(Ee.bind(n))):Y&&ee(Y.bind(n))}if(ce(mu,d),ce(Sa,p),ce(_u,m),ce(vu,S),ce(hu,N),ce(pu,A),ce(Iu,ae),ce(Eu,oe),ce(yu,V),ce(Ca,x),ce(Ra,W),ce(bu,Z),B(he))if(he.length){const ee=t.exposed||(t.exposed={});he.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:Ee=>n[Y]=Ee})})}else t.exposed||(t.exposed={});se&&t.render===Ne&&(t.render=se),pe!=null&&(t.inheritAttrs=pe),fe&&(t.components=fe),Ze&&(t.directives=Ze)}function Tu(t,e,n=Ne,r=!1){B(t)&&(t=fs(t));for(const s in t){const i=t[s];let o;ue(i)?"default"in i?o=ft(i.from||s,i.default,!0):o=ft(i.from||s):o=ft(i),de(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ki(t,e,n){Pe(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Aa(t,e,n,r){const s=r.includes(".")?ya(n,r):()=>n[r];if(me(t)){const i=e[t];$(i)&&Qt(s,i)}else if($(t))Qt(s,t.bind(n));else if(ue(t))if(B(t))t.forEach(i=>Aa(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Qt(s,i,t)}}function Oa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>fr(c,l,o,!0)),fr(c,e,o)),i.set(e,c),c}function fr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fr(t,i,n,!0),s&&s.forEach(o=>fr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Su[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Su={data:Ni,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:yt,directives:yt,watch:Ru,provide:Ni,inject:Cu};function Ni(t,e){return e?t?function(){return ge($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Cu(t,e){return yt(fs(t),fs(e))}function fs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function yt(t,e){return t?ge(ge(Object.create(null),t),e):e}function Ru(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function Au(t,e,n,r=!1){const s={},i={};cr(i,kr,1),t.propsDefaults=Object.create(null),Pa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ou(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];const m=e[p];if(c)if(K(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const S=Ve(p);s[S]=ds(c,a,S,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Pa(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!K(e,d)&&((u=cn(d))===d||!K(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=ds(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!K(e,d)&&!0)&&(delete i[d],l=!0)}l&&Ye(t,"set","$attrs")}function Pa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(er(c))continue;const l=e[c];let u;s&&K(s,u=Ve(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Gs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||Q;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ds(s,c,d,l[d],t,!K(l,d))}}return o}function ds(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(rn(s),r=l[n]=c.call(null,e),At())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===cn(n))&&(r=!0))}return r}function ka(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const u=d=>{c=!0;const[p,m]=ka(d,e,!0);ge(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,qt),qt;if(B(i))for(let u=0;u<i.length;u++){const d=Ve(i[u]);Mi(d)&&(o[d]=Q)}else if(i)for(const u in i){const d=Ve(u);if(Mi(d)){const p=i[u],m=o[d]=B(p)||$(p)?{type:p}:p;if(m){const S=Li(Boolean,m.type),N=Li(String,m.type);m[0]=S>-1,m[1]=N<0||S<N,(S>-1||K(m,"default"))&&a.push(d)}}}const l=[o,a];return r.set(t,l),l}function Mi(t){return t[0]!=="$"}function Di(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xi(t,e){return Di(t)===Di(e)}function Li(t,e){return B(e)?e.findIndex(n=>xi(n,t)):$(e)&&xi(e,t)?0:-1}const Na=t=>t[0]==="_"||t==="$stable",qs=t=>B(t)?t.map($e):[$e(t)],Pu=(t,e,n)=>{const r=nu((...s)=>qs(e(...s)),n);return r._c=!1,r},Ma=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Na(s))continue;const i=t[s];if($(i))e[s]=Pu(s,i,r);else if(i!=null){const o=qs(i);e[s]=()=>o}}},Da=(t,e)=>{const n=qs(e);t.slots.default=()=>n},ku=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),cr(e,"_",n)):Ma(e,t.slots={})}else t.slots={},e&&Da(t,e);cr(t.slots,kr,1)},Nu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ma(e,s)),o=e}else e&&(Da(t,e),o={default:1});if(i)for(const a in s)!Na(a)&&!(a in o)&&delete s[a]};function xm(t,e){const n=Oe;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&Tt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function _t(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ln(),Pe(c,n,8,[t.el,a,t,e]),Mt())}}function xa(){return{app:null,config:{isNativeTag:cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mu=0;function Du(t,e){return function(r,s=null){s!=null&&!ue(s)&&(s=null);const i=xa(),o=new Set;let a=!1;const c=i.app={_uid:Mu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:of,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...u)):$(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=Te(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,Xs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function hs(t,e,n,r,s=!1){if(B(t)){t.forEach((p,m)=>hs(p,e&&(B(e)?e[m]:e),n,r,s));return}if(ls(r)&&!s)return;const i=r.shapeFlag&4?Xs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Q?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(me(l)?(u[l]=null,K(d,l)&&(d[l]=null)):de(l)&&(l.value=null)),$(c))ut(c,a,12,[o,u]);else{const p=me(c),m=de(c);if(p||m){const S=()=>{if(t.f){const N=p?u[c]:c.value;s?B(N)&&Ds(N,i):B(N)?N.includes(i)||N.push(i):p?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,K(d,c)&&(d[c]=o)):de(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,be(S,n)):S()}}}const be=cu;function xu(t){return Lu(t)}function Lu(t,e){const n=pl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Ne,cloneNode:S,insertStaticContent:N}=t,A=(f,h,g,b=null,v=null,I=null,C=!1,E=null,w=!!h.dynamicChildren)=>{if(f===h)return;f&&!It(f,h)&&(b=k(f),Ce(f,v,I,!0),f=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:y,ref:M,shapeFlag:O}=h;switch(y){case Js:R(f,h,g,b);break;case We:x(f,h,g,b);break;case jr:f==null&&H(h,g,b,C);break;case Be:Ze(f,h,g,b,v,I,C,E,w);break;default:O&1?oe(f,h,g,b,v,I,C,E,w):O&6?xt(f,h,g,b,v,I,C,E,w):(O&64||O&128)&&y.process(f,h,g,b,v,I,C,E,w,te)}M!=null&&v&&hs(M,f&&f.ref,I,h||f,!h)},R=(f,h,g,b)=>{if(f==null)r(h.el=a(h.children),g,b);else{const v=h.el=f.el;h.children!==f.children&&l(v,h.children)}},x=(f,h,g,b)=>{f==null?r(h.el=c(h.children||""),g,b):h.el=f.el},H=(f,h,g,b)=>{[f.el,f.anchor]=N(f.children,h,g,b,f.el,f.anchor)},W=({el:f,anchor:h},g,b)=>{let v;for(;f&&f!==h;)v=p(f),r(f,g,b),f=v;r(h,g,b)},se=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},oe=(f,h,g,b,v,I,C,E,w)=>{C=C||h.type==="svg",f==null?V(h,g,b,v,I,C,E,w):he(f,h,v,I,C,E,w)},V=(f,h,g,b,v,I,C,E)=>{let w,y;const{type:M,props:O,shapeFlag:D,transition:U,patchFlag:z,dirs:ie}=f;if(f.el&&S!==void 0&&z===-1)w=f.el=S(f.el);else{if(w=f.el=o(f.type,I,O&&O.is,O),D&8?u(w,f.children):D&16&&Z(f.children,w,null,b,v,I&&M!=="foreignObject",C,E),ie&&_t(f,null,b,"created"),O){for(const re in O)re!=="value"&&!er(re)&&i(w,re,null,O[re],I,f.children,b,v,T);"value"in O&&i(w,"value",null,O.value),(y=O.onVnodeBeforeMount)&&Fe(y,b,f)}ae(w,f,f.scopeId,C,b)}ie&&_t(f,null,b,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;X&&U.beforeEnter(w),r(w,h,g),((y=O&&O.onVnodeMounted)||X||ie)&&be(()=>{y&&Fe(y,b,f),X&&U.enter(w),ie&&_t(f,null,b,"mounted")},v)},ae=(f,h,g,b,v)=>{if(g&&m(f,g),b)for(let I=0;I<b.length;I++)m(f,b[I]);if(v){let I=v.subTree;if(h===I){const C=v.vnode;ae(f,C,C.scopeId,C.slotScopeIds,v.parent)}}},Z=(f,h,g,b,v,I,C,E,w=0)=>{for(let y=w;y<f.length;y++){const M=f[y]=E?st(f[y]):$e(f[y]);A(null,M,h,g,b,v,I,C,E)}},he=(f,h,g,b,v,I,C)=>{const E=h.el=f.el;let{patchFlag:w,dynamicChildren:y,dirs:M}=h;w|=f.patchFlag&16;const O=f.props||Q,D=h.props||Q;let U;g&&vt(g,!1),(U=D.onVnodeBeforeUpdate)&&Fe(U,g,h,f),M&&_t(h,f,g,"beforeUpdate"),g&&vt(g,!0);const z=v&&h.type!=="foreignObject";if(y?pe(f.dynamicChildren,y,E,g,b,z,I):C||Ee(f,h,E,null,g,b,z,I,!1),w>0){if(w&16)fe(E,h,O,D,g,b,v);else if(w&2&&O.class!==D.class&&i(E,"class",null,D.class,v),w&4&&i(E,"style",O.style,D.style,v),w&8){const ie=h.dynamicProps;for(let X=0;X<ie.length;X++){const re=ie[X],ke=O[re],Ft=D[re];(Ft!==ke||re==="value")&&i(E,re,ke,Ft,v,f.children,g,b,T)}}w&1&&f.children!==h.children&&u(E,h.children)}else!C&&y==null&&fe(E,h,O,D,g,b,v);((U=D.onVnodeUpdated)||M)&&be(()=>{U&&Fe(U,g,h,f),M&&_t(h,f,g,"updated")},b)},pe=(f,h,g,b,v,I,C)=>{for(let E=0;E<h.length;E++){const w=f[E],y=h[E],M=w.el&&(w.type===Be||!It(w,y)||w.shapeFlag&70)?d(w.el):g;A(w,y,M,null,b,v,I,C,!0)}},fe=(f,h,g,b,v,I,C)=>{if(g!==b){for(const E in b){if(er(E))continue;const w=b[E],y=g[E];w!==y&&E!=="value"&&i(f,E,y,w,C,h.children,v,I,T)}if(g!==Q)for(const E in g)!er(E)&&!(E in b)&&i(f,E,g[E],null,C,h.children,v,I,T);"value"in b&&i(f,"value",g.value,b.value)}},Ze=(f,h,g,b,v,I,C,E,w)=>{const y=h.el=f?f.el:a(""),M=h.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:U}=h;U&&(E=E?E.concat(U):U),f==null?(r(y,g,b),r(M,g,b),Z(h.children,g,M,v,I,C,E,w)):O>0&&O&64&&D&&f.dynamicChildren?(pe(f.dynamicChildren,D,g,v,I,C,E),(h.key!=null||v&&h===v.subTree)&&La(f,h,!0)):Ee(f,h,g,M,v,I,C,E,w)},xt=(f,h,g,b,v,I,C,E,w)=>{h.slotScopeIds=E,f==null?h.shapeFlag&512?v.ctx.activate(h,g,b,C,w):Lt(h,g,b,v,I,C,w):ce(f,h,w)},Lt=(f,h,g,b,v,I,C)=>{const E=f.component=Xu(f,b,v);if(Or(f)&&(E.ctx.renderer=te),Zu(E),E.asyncDep){if(v&&v.registerDep(E,ee),!f.el){const w=E.subTree=Te(We);x(null,w,h,g)}return}ee(E,f,h,g,v,I,C)},ce=(f,h,g)=>{const b=h.component=f.component;if(iu(f,h,g))if(b.asyncDep&&!b.asyncResolved){Y(b,h,g);return}else b.next=h,Ql(b.update),b.update();else h.component=f.component,h.el=f.el,b.vnode=h},ee=(f,h,g,b,v,I,C)=>{const E=()=>{if(f.isMounted){let{next:M,bu:O,u:D,parent:U,vnode:z}=f,ie=M,X;vt(f,!1),M?(M.el=z.el,Y(f,M,C)):M=z,O&&tr(O),(X=M.props&&M.props.onVnodeBeforeUpdate)&&Fe(X,U,M,z),vt(f,!0);const re=Br(f),ke=f.subTree;f.subTree=re,A(ke,re,d(ke.el),k(ke),f,v,I),M.el=re.el,ie===null&&ou(f,re.el),D&&be(D,v),(X=M.props&&M.props.onVnodeUpdated)&&be(()=>Fe(X,U,M,z),v)}else{let M;const{el:O,props:D}=h,{bm:U,m:z,parent:ie}=f,X=ls(h);if(vt(f,!1),U&&tr(U),!X&&(M=D&&D.onVnodeBeforeMount)&&Fe(M,ie,h),vt(f,!0),O&&F){const re=()=>{f.subTree=Br(f),F(O,f.subTree,f,v,null)};X?h.type.__asyncLoader().then(()=>!f.isUnmounted&&re()):re()}else{const re=f.subTree=Br(f);A(null,re,g,b,f,v,I),h.el=re.el}if(z&&be(z,v),!X&&(M=D&&D.onVnodeMounted)){const re=h;be(()=>Fe(M,ie,re),v)}h.shapeFlag&256&&f.a&&be(f.a,v),f.isMounted=!0,h=g=b=null}},w=f.effect=new Fs(E,()=>da(f.update),f.scope),y=f.update=w.run.bind(w);y.id=f.uid,vt(f,!0),y()},Y=(f,h,g)=>{h.component=f;const b=f.vnode.props;f.vnode=h,f.next=null,Ou(f,h.props,b,g),Nu(f,h.children,g),ln(),Ks(void 0,f.update),Mt()},Ee=(f,h,g,b,v,I,C,E,w=!1)=>{const y=f&&f.children,M=f?f.shapeFlag:0,O=h.children,{patchFlag:D,shapeFlag:U}=h;if(D>0){if(D&128){ze(y,O,g,b,v,I,C,E,w);return}else if(D&256){Ut(y,O,g,b,v,I,C,E,w);return}}U&8?(M&16&&T(y,v,I),O!==y&&u(g,O)):M&16?U&16?ze(y,O,g,b,v,I,C,E,w):T(y,v,I,!0):(M&8&&u(g,""),U&16&&Z(O,g,b,v,I,C,E,w))},Ut=(f,h,g,b,v,I,C,E,w)=>{f=f||qt,h=h||qt;const y=f.length,M=h.length,O=Math.min(y,M);let D;for(D=0;D<O;D++){const U=h[D]=w?st(h[D]):$e(h[D]);A(f[D],U,g,null,v,I,C,E,w)}y>M?T(f,v,I,!0,!1,O):Z(h,g,b,v,I,C,E,w,O)},ze=(f,h,g,b,v,I,C,E,w)=>{let y=0;const M=h.length;let O=f.length-1,D=M-1;for(;y<=O&&y<=D;){const U=f[y],z=h[y]=w?st(h[y]):$e(h[y]);if(It(U,z))A(U,z,g,null,v,I,C,E,w);else break;y++}for(;y<=O&&y<=D;){const U=f[O],z=h[D]=w?st(h[D]):$e(h[D]);if(It(U,z))A(U,z,g,null,v,I,C,E,w);else break;O--,D--}if(y>O){if(y<=D){const U=D+1,z=U<M?h[U].el:b;for(;y<=D;)A(null,h[y]=w?st(h[y]):$e(h[y]),g,z,v,I,C,E,w),y++}}else if(y>D)for(;y<=O;)Ce(f[y],v,I,!0),y++;else{const U=y,z=y,ie=new Map;for(y=z;y<=D;y++){const Ie=h[y]=w?st(h[y]):$e(h[y]);Ie.key!=null&&ie.set(Ie.key,y)}let X,re=0;const ke=D-z+1;let Ft=!1,pi=0;const pn=new Array(ke);for(y=0;y<ke;y++)pn[y]=0;for(y=U;y<=O;y++){const Ie=f[y];if(re>=ke){Ce(Ie,v,I,!0);continue}let Ue;if(Ie.key!=null)Ue=ie.get(Ie.key);else for(X=z;X<=D;X++)if(pn[X-z]===0&&It(Ie,h[X])){Ue=X;break}Ue===void 0?Ce(Ie,v,I,!0):(pn[Ue-z]=y+1,Ue>=pi?pi=Ue:Ft=!0,A(Ie,h[Ue],g,null,v,I,C,E,w),re++)}const gi=Ft?Uu(pn):qt;for(X=gi.length-1,y=ke-1;y>=0;y--){const Ie=z+y,Ue=h[Ie],mi=Ie+1<M?h[Ie+1].el:b;pn[y]===0?A(null,Ue,g,mi,v,I,C,E,w):Ft&&(X<0||y!==gi[X]?Le(Ue,g,mi,2):X--)}}},Le=(f,h,g,b,v=null)=>{const{el:I,type:C,transition:E,children:w,shapeFlag:y}=f;if(y&6){Le(f.component.subTree,h,g,b);return}if(y&128){f.suspense.move(h,g,b);return}if(y&64){C.move(f,h,g,te);return}if(C===Be){r(I,h,g);for(let O=0;O<w.length;O++)Le(w[O],h,g,b);r(f.anchor,h,g);return}if(C===jr){W(f,h,g);return}if(b!==2&&y&1&&E)if(b===0)E.beforeEnter(I),r(I,h,g),be(()=>E.enter(I),v);else{const{leave:O,delayLeave:D,afterLeave:U}=E,z=()=>r(I,h,g),ie=()=>{O(I,()=>{z(),U&&U()})};D?D(I,z,ie):ie()}else r(I,h,g)},Ce=(f,h,g,b=!1,v=!1)=>{const{type:I,props:C,ref:E,children:w,dynamicChildren:y,shapeFlag:M,patchFlag:O,dirs:D}=f;if(E!=null&&hs(E,null,g,f,!0),M&256){h.ctx.deactivate(f);return}const U=M&1&&D,z=!ls(f);let ie;if(z&&(ie=C&&C.onVnodeBeforeUnmount)&&Fe(ie,h,f),M&6)P(f.component,g,b);else{if(M&128){f.suspense.unmount(g,b);return}U&&_t(f,null,h,"beforeUnmount"),M&64?f.type.remove(f,h,g,v,te,b):y&&(I!==Be||O>0&&O&64)?T(y,h,g,!1,!0):(I===Be&&O&384||!v&&M&16)&&T(w,h,g),b&&hn(f)}(z&&(ie=C&&C.onVnodeUnmounted)||U)&&be(()=>{ie&&Fe(ie,h,f),U&&_t(f,null,h,"unmounted")},g)},hn=f=>{const{type:h,el:g,anchor:b,transition:v}=f;if(h===Be){_(g,b);return}if(h===jr){se(f);return}const I=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:E}=v,w=()=>C(g,I);E?E(f.el,I,w):w()}else I()},_=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},P=(f,h,g)=>{const{bum:b,scope:v,update:I,subTree:C,um:E}=f;b&&tr(b),v.stop(),I&&(I.active=!1,Ce(C,f,h,g)),E&&be(E,h),be(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},T=(f,h,g,b=!1,v=!1,I=0)=>{for(let C=I;C<f.length;C++)Ce(f[C],h,g,b,v)},k=f=>f.shapeFlag&6?k(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),q=(f,h,g)=>{f==null?h._vnode&&Ce(h._vnode,null,null,!0):A(h._vnode||null,f,h,null,null,null,g),ga(),h._vnode=f},te={p:A,um:Ce,m:Le,r:hn,mt:Lt,mc:Z,pc:Ee,pbc:pe,n:k,o:t};let j,F;return e&&([j,F]=e(te)),{render:q,hydrate:j,createApp:Du(q,j)}}function vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function La(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=st(s[i]),a.el=o.el),n||La(o,a))}}function Uu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Fu=t=>t.__isTeleport,Ua="components";function Lm(t,e){return $u(Ua,t,!0,e)||t}const Bu=Symbol();function $u(t,e,n=!0,r=!1){const s=Oe||le;if(s){const i=s.type;if(t===Ua){const a=rf(i);if(a&&(a===e||a===Ve(e)||a===Cr(Ve(e))))return i}const o=Ui(s[t]||i[t],e)||Ui(s.appContext[t],e);return!o&&r?i:o}}function Ui(t,e){return t&&(t[e]||t[Ve(e)]||t[Cr(Ve(e))])}const Be=Symbol(void 0),Js=Symbol(void 0),We=Symbol(void 0),jr=Symbol(void 0),In=[];let Rt=null;function ju(t=!1){In.push(Rt=t?null:[])}function Hu(){In.pop(),Rt=In[In.length-1]||null}let dr=1;function Fi(t){dr+=t}function Fa(t){return t.dynamicChildren=dr>0?Rt||qt:null,Hu(),dr>0&&Rt&&Rt.push(t),t}function Um(t,e,n,r,s,i){return Fa($a(t,e,n,r,s,i,!0))}function Vu(t,e,n,r,s){return Fa(Te(t,e,n,r,s,!0))}function ps(t){return t?t.__v_isVNode===!0:!1}function It(t,e){return t.type===e.type&&t.key===e.key}const kr="__vInternal",Ba=({key:t})=>t!=null?t:null,rr=({ref:t,ref_key:e,ref_for:n})=>t!=null?me(t)||de(t)||$(t)?{i:Oe,r:t,k:e,f:!!n}:t:null;function $a(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ba(e),ref:e&&rr(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ys(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),dr>0&&!o&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const Te=Wu;function Wu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Bu)&&(t=We),ps(t)){const a=nn(t,e,!0);return n&&Ys(a,n),a}if(sf(t)&&(t=t.__vccOpts),e){e=zu(e);let{class:a,style:c}=e;a&&!me(a)&&(e.class=Ns(a)),ue(c)&&(sa(c)&&!B(c)&&(c=ge({},c)),e.style=ks(c))}const o=me(t)?1:au(t)?128:Fu(t)?64:ue(t)?4:$(t)?2:0;return $a(t,e,n,r,s,o,i,!0)}function zu(t){return t?sa(t)||kr in t?ge({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ba(a),ref:e&&e.ref?n&&s?B(s)?s.concat(rr(e)):[s,rr(e)]:rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ku(t=" ",e=0){return Te(Js,null,t,e)}function Fm(t="",e=!1){return e?(ju(),Vu(We,null,t)):Te(We,null,t)}function $e(t){return t==null||typeof t=="boolean"?Te(We):B(t)?Te(Be,null,t.slice()):typeof t=="object"?st(t):Te(Js,null,String(t))}function st(t){return t.el===null||t.memo?t:nn(t)}function Ys(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ys(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(kr in e)?e._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),r&64?(n=16,e=[Ku(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ns([e.class,r.class]));else if(s==="style")e.style=ks([e.style,r.style]);else if(wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){Pe(t,e,7,[n,r])}const gs=t=>t?ja(t)?Xs(t)||t.proxy:gs(t.parent):null,hr=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gs(t.parent),$root:t=>gs(t.root),$emit:t=>t.emit,$options:t=>Oa(t),$forceUpdate:t=>()=>da(t.update),$nextTick:t=>fa.bind(t.proxy),$watch:t=>lu.bind(t)}),qu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&K(r,e))return o[e]=1,r[e];if(s!==Q&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==Q&&K(n,e))return o[e]=4,n[e];us&&(o[e]=0)}}const u=hr[e];let d,p;if(u)return e==="$attrs"&&Se(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Q&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==Q&&K(s,e))s[e]=n;else if(r!==Q&&K(r,e))r[e]=n;else if(K(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&K(t,o)||e!==Q&&K(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(hr,o)||K(s.config.globalProperties,o)}},Ju=xa();let Yu=0;function Xu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ju,i={uid:Yu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ka(r,s),emitsOptions:_a(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tu.bind(null,i),t.ce&&t.ce(i),i}let le=null;const Qu=()=>le||Oe,rn=t=>{le=t,t.scope.on()},At=()=>{le&&le.scope.off(),le=null};function ja(t){return t.vnode.shapeFlag&4}let kn=!1;function Zu(t,e=!1){kn=e;const{props:n,children:r}=t.vnode,s=ja(t);Au(t,n,s,e),ku(t,r);const i=s?ef(t,e):void 0;return kn=!1,i}function ef(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ia(new Proxy(t.ctx,qu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?nf(t):null;rn(t),ln();const i=ut(r,t,0,[t.props,s]);if(Mt(),At(),Vo(i)){if(i.then(At,At),e)return i.then(o=>{Bi(t,o,e)}).catch(o=>{Ar(o,t,0)});t.asyncDep=i}else Bi(t,i,e)}else Ha(t,e)}function Bi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=la(e)),Ha(t,n)}let $i;function Ha(t,e,n){const r=t.type;if(!t.render){if(!e&&$i&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=$i(s,l)}}t.render=r.render||Ne}rn(t),ln(),wu(t),Mt(),At()}function tf(t){return new Proxy(t.attrs,{get(e,n){return Se(t,"get","$attrs"),e[n]}})}function nf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=tf(t))},slots:t.slots,emit:t.emit,expose:e}}function Xs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(la(ia(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)}}))}function rf(t){return $(t)&&t.displayName||t.name}function sf(t){return $(t)&&"__vccOpts"in t}const Ae=(t,e)=>Jl(t,e,kn);function Va(t,e,n){const r=arguments.length;return r===2?ue(e)&&!B(e)?ps(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ps(n)&&(n=[n]),Te(t,e,n))}const of="3.2.29",af="http://www.w3.org/2000/svg",wt=typeof document!="undefined"?document:null,ji=wt&&wt.createElement("template"),cf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?wt.createElementNS(af,t):wt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wt.createTextNode(t),createComment:t=>wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ji.innerHTML=r?`<svg>${t}</svg>`:t;const a=ji.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uf(t,e,n){const r=t.style,s=me(n);if(n&&!s){for(const i in n)ms(r,i,n[i]);if(e&&!me(e))for(const i in e)n[i]==null&&ms(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Hi=/\s*!important$/;function ms(t,e,n){if(B(n))n.forEach(r=>ms(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=ff(t,e);Hi.test(n)?t.setProperty(cn(r),n.replace(Hi,""),"important"):t[r]=n}}const Vi=["Webkit","Moz","ms"],Hr={};function ff(t,e){const n=Hr[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return Hr[e]=r;r=Cr(r);for(let s=0;s<Vi.length;s++){const i=Vi[s]+r;if(i in t)return Hr[e]=i}return e}const Wi="http://www.w3.org/1999/xlink";function df(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wi,e.slice(6,e.length)):t.setAttributeNS(Wi,e,n);else{const i=sl(e);n==null||i&&!$o(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=$o(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let pr=Date.now,Wa=!1;if(typeof window!="undefined"){pr()>document.createEvent("Event").timeStamp&&(pr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Wa=!!(t&&Number(t[1])<=53)}let _s=0;const pf=Promise.resolve(),gf=()=>{_s=0},mf=()=>_s||(pf.then(gf),_s=pr());function zt(t,e,n,r){t.addEventListener(e,n,r)}function _f(t,e,n,r){t.removeEventListener(e,n,r)}function vf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=bf(e);if(r){const l=i[e]=yf(r,s);zt(t,a,l,c)}else o&&(_f(t,a,o,c),i[e]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function bf(t){let e;if(zi.test(t)){e={};let n;for(;n=t.match(zi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[cn(t.slice(2)),e]}function yf(t,e){const n=r=>{const s=r.timeStamp||pr();(Wa||s>=n.attached-1)&&Pe(Ef(r,n.value),e,5,[r])};return n.value=t,n.attached=mf(),n}function Ef(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ki=/^on[a-z]/,If=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?lf(t,r,s):e==="style"?uf(t,n,r):wr(e)?Ms(e)||vf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wf(t,e,r,s))?hf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),df(t,e,r,s))};function wf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ki.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ki.test(e)&&me(n)?!1:e in t}const Tf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};du.props;const Gi=t=>{const e=t.props["onUpdate:modelValue"];return B(e)?n=>tr(e,n):e};function Sf(t){t.target.composing=!0}function qi(t){const e=t.target;e.composing&&(e.composing=!1,Cf(e,"input"))}function Cf(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Bm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Gi(s);const i=r||s.props&&s.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=es(a)),t._assign(a)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",Sf),zt(t,"compositionend",qi),zt(t,"change",qi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Gi(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&es(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Rf=["ctrl","shift","alt","meta"],Af={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rf.some(n=>t[`${n}Key`]&&!e.includes(n))},$m=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Af[e[s]];if(i&&i(n,e))return}return t(n,...r)},Of=ge({patchProp:If},cf);let Ji;function Pf(){return Ji||(Ji=xu(Of))}const jm=(...t)=>{const e=Pf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=kf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function kf(t){return me(t)?document.querySelector(t):t}function Nf(){return za().__VUE_DEVTOOLS_GLOBAL_HOOK__}function za(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Mf=typeof Proxy=="function",Df="devtools-plugin:setup",xf="plugin:settings:set";let $t,vs;function Lf(){var t;return $t!==void 0||(typeof window!="undefined"&&window.performance?($t=!0,vs=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?($t=!0,vs=global.perf_hooks.performance):$t=!1),$t}function Uf(){return Lf()?vs.now():Date.now()}class Ff{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Uf()}},n&&n.on(xf,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Bf(t,e){const n=t,r=za(),s=Nf(),i=Mf&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Df,t,e);else{const o=i?new Ff(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var $f="store";function fn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function jf(t){return t!==null&&typeof t=="object"}function Hf(t){return t&&typeof t.then=="function"}function Vf(t,e){return function(){return t(e)}}function Ka(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Ga(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Nr(t,n,[],t._modules.root,!0),Qs(t,n,e)}function Qs(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};fn(s,function(o,a){i[a]=Vf(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=un({data:e}),t.strict&&qf(t),r&&n&&t._withCommit(function(){r.data=null})}function Nr(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Zs(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=Wf(t,o,n);r.forEachMutation(function(u,d){var p=o+d;zf(t,p,u,l)}),r.forEachAction(function(u,d){var p=u.root?d:o+d,m=u.handler||u;Kf(t,p,m,l)}),r.forEachGetter(function(u,d){var p=o+d;Gf(t,p,u,l)}),r.forEachChild(function(u,d){Nr(t,e,n.concat(d),u,s)})}function Wf(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=gr(i,o,a),l=c.payload,u=c.options,d=c.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,l)},commit:r?t.commit:function(i,o,a){var c=gr(i,o,a),l=c.payload,u=c.options,d=c.type;(!u||!u.root)&&(d=e+d),t.commit(d,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return qa(t,e)}},state:{get:function(){return Zs(t.state,n)}}}),s}function qa(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function zf(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Kf(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Hf(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Gf(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function qf(t){Qt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Zs(t,e){return e.reduce(function(n,r){return n[r]},t)}function gr(t,e,n){return jf(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Jf="vuex bindings",Yi="vuex:mutations",Vr="vuex:actions",jt="vuex",Yf=0;function Xf(t,e){Bf({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Jf]},function(n){n.addTimelineLayer({id:Yi,label:"Vuex Mutations",color:Xi}),n.addTimelineLayer({id:Vr,label:"Vuex Actions",color:Xi}),n.addInspector({id:jt,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===jt)if(r.filter){var s=[];Qa(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Xa(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===jt){var s=r.nodeId;qa(e,s),r.state=ed(nd(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===jt){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(jt),n.sendInspectorState(jt),n.addTimelineEvent({layerId:Yi,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Yf++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Vr,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Vr,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Xi=8702998,Qf=6710886,Zf=16777215,Ja={label:"namespaced",textColor:Zf,backgroundColor:Qf};function Ya(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Xa(t,e){return{id:e||"root",label:Ya(e),tags:t.namespaced?[Ja]:[],children:Object.keys(t._children).map(function(n){return Xa(t._children[n],e+n+"/")})}}function Qa(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Ja]:[]}),Object.keys(e._children).forEach(function(s){Qa(t,e._children[s],n,r+s+"/")})}function ed(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=td(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Ya(o):o,editable:!1,value:bs(function(){return i[o]})}})}return s}function td(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=bs(function(){return t[n]})}else e[n]=bs(function(){return t[n]})}),e}function nd(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function bs(t){try{return t()}catch(e){return e}}var xe=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Za={namespaced:{configurable:!0}};Za.namespaced.get=function(){return!!this._rawModule.namespaced};xe.prototype.addChild=function(e,n){this._children[e]=n};xe.prototype.removeChild=function(e){delete this._children[e]};xe.prototype.getChild=function(e){return this._children[e]};xe.prototype.hasChild=function(e){return e in this._children};xe.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};xe.prototype.forEachChild=function(e){fn(this._children,e)};xe.prototype.forEachGetter=function(e){this._rawModule.getters&&fn(this._rawModule.getters,e)};xe.prototype.forEachAction=function(e){this._rawModule.actions&&fn(this._rawModule.actions,e)};xe.prototype.forEachMutation=function(e){this._rawModule.mutations&&fn(this._rawModule.mutations,e)};Object.defineProperties(xe.prototype,Za);var Dt=function(e){this.register([],e,!1)};Dt.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Dt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Dt.prototype.update=function(e){ec([],this.root,e)};Dt.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new xe(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&fn(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Dt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Dt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function ec(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;ec(t.concat(r),e.getChild(r),n.modules[r])}}function Hm(t){return new ye(t)}var ye=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Dt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(p,m){return c.call(o,p,m)},this.commit=function(p,m,S){return l.call(o,p,m,S)},this.strict=s;var u=this._modules.root.state;Nr(this,u,[],this._modules.root),Qs(this,u),r.forEach(function(d){return d(n)})},ei={state:{configurable:!0}};ye.prototype.install=function(e,n){e.provide(n||$f,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Xf(e,this)};ei.state.get=function(){return this._state.data};ei.state.set=function(t){};ye.prototype.commit=function(e,n,r){var s=this,i=gr(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};ye.prototype.dispatch=function(e,n){var r=this,s=gr(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,d){l.then(function(p){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch{}u(p)},function(p){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,p)})}catch{}d(p)})})}};ye.prototype.subscribe=function(e,n){return Ka(e,this._subscribers,n)};ye.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Ka(r,this._actionSubscribers,n)};ye.prototype.watch=function(e,n,r){var s=this;return Qt(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ye.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ye.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Nr(this,this.state,e,this._modules.get(e),r.preserveState),Qs(this,this.state)};ye.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Zs(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Ga(this)};ye.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ye.prototype.hotUpdate=function(e){this._modules.update(e),Ga(this,!0)};ye.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ye.prototype,ei);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kt=typeof window!="undefined";function rd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function Wr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const wn=()=>{},Me=Array.isArray,sd=/\/$/,id=t=>t.replace(sd,"");function zr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ld(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function od(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ad(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&sn(e.matched[r],n.matched[s])&&tc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cd(t[n],e[n]))return!1;return!0}function cd(t,e){return Me(t)?Zi(t,e):Me(e)?Zi(e,t):t===e}function Zi(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ld(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Nn;(function(t){t.pop="pop",t.push="push"})(Nn||(Nn={}));var Tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tn||(Tn={}));function ud(t){if(!t)if(Kt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),id(t)}const fd=/^[^#]+#/;function dd(t,e){return t.replace(fd,"#")+e}function hd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function pd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function eo(t,e){return(history.state?history.state.position-e:-1)+t}const ys=new Map;function gd(t,e){ys.set(t,e)}function md(t){const e=ys.get(t);return ys.delete(t),e}let _d=()=>location.protocol+"//"+location.host;function nc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Qi(c,"")}return Qi(n,t)+r+s}function vd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=nc(t,location),S=n.value,N=e.value;let A=0;if(p){if(n.value=m,e.value=p,o&&o===S){o=null;return}A=N?p.position-N.position:0}else r(m);s.forEach(R=>{R(n.value,S,{delta:A,type:Nn.pop,direction:A?A>0?Tn.forward:Tn.back:Tn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(m),m}function u(){const{history:p}=window;!p.state||p.replaceState(J({},p.state,{scroll:Mr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function to(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mr():null}}function bd(t){const{history:e,location:n}=window,r={value:nc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:_d()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=J({},e.state,to(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=J({},s.value,e.state,{forward:c,scroll:Mr()});i(u.current,u,!0);const d=J({},to(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Vm(t){t=ud(t);const e=bd(t),n=vd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:dd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yd(t){return typeof t=="string"||t&&typeof t=="object"}function rc(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sc=Symbol("");var no;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(no||(no={}));function on(t,e){return J(new Error,{type:t,[sc]:!0},e)}function Ke(t,e){return t instanceof Error&&sc in t&&(e==null||!!(t.type&e))}const ro="[^/]+?",Ed={sensitive:!1,strict:!1,start:!0,end:!0},Id=/[.+*?^${}()[\]/\\]/g;function wd(t,e){const n=J({},Ed,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Id,"\\$&"),m+=40;else if(p.type===1){const{value:S,repeatable:N,optional:A,regexp:R}=p;i.push({name:S,repeatable:N,optional:A});const x=R||ro;if(x!==ro){m+=10;try{new RegExp(`(${x})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+W.message)}}let H=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(H=A&&l.length<2?`(?:/${H})`:"/"+H),A&&(H+="?"),s+=H,m+=20,A&&(m+=-8),N&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",S=i[p-1];d[S.name]=m&&S.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:S,repeatable:N,optional:A}=m,R=S in l?l[S]:"";if(Me(R)&&!N)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Me(R)?R.join("/"):R;if(!x)if(A)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Td(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Sd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Td(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(so(r))return 1;if(so(s))return-1}return s.length-r.length}function so(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Cd={type:0,value:""},Rd=/[a-zA-Z0-9_]/;function Ad(t){if(!t)return[[]];if(t==="/")return[[Cd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Rd.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Od(t,e,n){const r=wd(Ad(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Pd(t,e){const n=[],r=new Map;e=ao({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,p){const m=!p,S=kd(u);S.aliasOf=p&&p.record;const N=ao(e,u),A=[S];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of H)A.push(J({},S,{components:p?p.record.components:S.components,path:W,aliasOf:p?p.record:S}))}let R,x;for(const H of A){const{path:W}=H;if(d&&W[0]!=="/"){const se=d.record.path,oe=se[se.length-1]==="/"?"":"/";H.path=d.record.path+(W&&oe+W)}if(R=Od(H,d,N),p?p.alias.push(R):(x=x||R,x!==R&&x.alias.push(R),m&&u.name&&!oo(R)&&o(u.name)),S.children){const se=S.children;for(let oe=0;oe<se.length;oe++)i(se[oe],R,p&&p.children[oe])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return x?()=>{o(x)}:wn}function o(u){if(rc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Sd(u,n[d])>=0&&(u.record.path!==n[d].record.path||!ic(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!oo(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},S,N;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw on(1,{location:u});N=p.record.name,m=J(io(d.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&io(u.params,p.keys.map(x=>x.name))),S=p.stringify(m)}else if("path"in u)S=u.path,p=n.find(x=>x.re.test(S)),p&&(m=p.parse(S),N=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw on(1,{location:u,currentLocation:d});N=p.record.name,m=J({},d.params,u.params),S=p.stringify(m)}const A=[];let R=p;for(;R;)A.unshift(R.record),R=R.parent;return{name:N,path:S,params:m,matched:A,meta:Md(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function io(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function oo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Md(t){return t.reduce((e,n)=>J(e,n.meta),{})}function ao(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ic(t,e){return e.children.some(n=>n===t||ic(t,n))}const oc=/#/g,Dd=/&/g,xd=/\//g,Ld=/=/g,Ud=/\?/g,ac=/\+/g,Fd=/%5B/g,Bd=/%5D/g,cc=/%5E/g,$d=/%60/g,lc=/%7B/g,jd=/%7C/g,uc=/%7D/g,Hd=/%20/g;function ti(t){return encodeURI(""+t).replace(jd,"|").replace(Fd,"[").replace(Bd,"]")}function Vd(t){return ti(t).replace(lc,"{").replace(uc,"}").replace(cc,"^")}function Es(t){return ti(t).replace(ac,"%2B").replace(Hd,"+").replace(oc,"%23").replace(Dd,"%26").replace($d,"`").replace(lc,"{").replace(uc,"}").replace(cc,"^")}function Wd(t){return Es(t).replace(Ld,"%3D")}function zd(t){return ti(t).replace(oc,"%23").replace(Ud,"%3F")}function Kd(t){return t==null?"":zd(t).replace(xd,"%2F")}function mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Gd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ac," "),o=i.indexOf("="),a=mr(o<0?i:i.slice(0,o)),c=o<0?null:mr(i.slice(o+1));if(a in e){let l=e[a];Me(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function co(t){let e="";for(let n in t){const r=t[n];if(n=Wd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&Es(i)):[r&&Es(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Jd=Symbol(""),lo=Symbol(""),ni=Symbol(""),fc=Symbol(""),Is=Symbol("");function gn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function it(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(on(4,{from:n,to:e})):d instanceof Error?a(d):yd(d)?a(on(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Kr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Yd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(it(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=rd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&it(p,n,r,i,o)()}))}}return s}function Yd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uo(t){const e=ft(ni),n=ft(fc),r=Ae(()=>e.resolve(Xt(t.to))),s=Ae(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(sn.bind(null,u));if(p>-1)return p;const m=fo(c[l-2]);return l>1&&fo(u)===m&&d[d.length-1].path!==m?d.findIndex(sn.bind(null,c[l-2])):p}),i=Ae(()=>s.value>-1&&eh(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&tc(n.params,r.value.params));function a(c={}){return Zd(c)?e[Xt(t.replace)?"replace":"push"](Xt(t.to)).catch(wn):Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Xd=wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uo,setup(t,{slots:e}){const n=un(uo(t)),{options:r}=ft(ni),s=Ae(()=>({[ho(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ho(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Va("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Qd=Xd;function Zd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ho=(t,e,n)=>t!=null?t:e!=null?e:n,th=wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ft(Is),s=Ae(()=>t.route||r.value),i=ft(lo,0),o=Ae(()=>{let l=Xt(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ae(()=>s.value.matched[o.value]);nr(lo,Ae(()=>o.value+1)),nr(Jd,a),nr(Is,s);const c=Wl();return Qt(()=>[c.value,a.value,t.name],([l,u,d],[p,m,S])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!sn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(N=>N(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return po(n.default,{Component:p,route:l});const m=d.props[u],S=m?m===!0?l.params:typeof m=="function"?m(l):m:null,A=Va(p,J({},S,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return po(n.default,{Component:A,route:l})||A}}});function po(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nh=th;function Wm(t){const e=Pd(t.routes,t),n=t.parseQuery||Gd,r=t.stringifyQuery||co,s=t.history,i=gn(),o=gn(),a=gn(),c=zl(tt);let l=tt;Kt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wr.bind(null,_=>""+_),d=Wr.bind(null,Kd),p=Wr.bind(null,mr);function m(_,P){let T,k;return rc(_)?(T=e.getRecordMatcher(_),k=P):k=_,e.addRoute(k,T)}function S(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function N(){return e.getRoutes().map(_=>_.record)}function A(_){return!!e.getRecordMatcher(_)}function R(_,P){if(P=J({},P||c.value),typeof _=="string"){const F=zr(n,_,P.path),f=e.resolve({path:F.path},P),h=s.createHref(F.fullPath);return J(F,f,{params:p(f.params),hash:mr(F.hash),redirectedFrom:void 0,href:h})}let T;if("path"in _)T=J({},_,{path:zr(n,_.path,P.path).path});else{const F=J({},_.params);for(const f in F)F[f]==null&&delete F[f];T=J({},_,{params:d(_.params)}),P.params=d(P.params)}const k=e.resolve(T,P),q=_.hash||"";k.params=u(p(k.params));const te=od(r,J({},_,{hash:Vd(q),path:k.path})),j=s.createHref(te);return J({fullPath:te,hash:q,query:r===co?qd(_.query):_.query||{}},k,{redirectedFrom:void 0,href:j})}function x(_){return typeof _=="string"?zr(n,_,c.value.path):J({},_)}function H(_,P){if(l!==_)return on(8,{from:P,to:_})}function W(_){return V(_)}function se(_){return W(J(x(_),{replace:!0}))}function oe(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(_):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=x(k):{path:k},k.params={}),J({query:_.query,hash:_.hash,params:"path"in k?{}:_.params},k)}}function V(_,P){const T=l=R(_),k=c.value,q=_.state,te=_.force,j=_.replace===!0,F=oe(T);if(F)return V(J(x(F),{state:typeof F=="object"?J({},q,F.state):q,force:te,replace:j}),P||T);const f=T;f.redirectedFrom=P;let h;return!te&&ad(r,k,T)&&(h=on(16,{to:f,from:k}),Ut(k,k,!0,!1)),(h?Promise.resolve(h):Z(f,k)).catch(g=>Ke(g)?Ke(g,2)?g:Ee(g):ee(g,f,k)).then(g=>{if(g){if(Ke(g,2))return V(J({replace:j},x(g.to),{state:typeof g.to=="object"?J({},q,g.to.state):q,force:te}),P||f)}else g=pe(f,k,!0,j,q);return he(f,k,g),g})}function ae(_,P){const T=H(_,P);return T?Promise.reject(T):Promise.resolve()}function Z(_,P){let T;const[k,q,te]=rh(_,P);T=Kr(k.reverse(),"beforeRouteLeave",_,P);for(const F of k)F.leaveGuards.forEach(f=>{T.push(it(f,_,P))});const j=ae.bind(null,_,P);return T.push(j),Ht(T).then(()=>{T=[];for(const F of i.list())T.push(it(F,_,P));return T.push(j),Ht(T)}).then(()=>{T=Kr(q,"beforeRouteUpdate",_,P);for(const F of q)F.updateGuards.forEach(f=>{T.push(it(f,_,P))});return T.push(j),Ht(T)}).then(()=>{T=[];for(const F of _.matched)if(F.beforeEnter&&!P.matched.includes(F))if(Me(F.beforeEnter))for(const f of F.beforeEnter)T.push(it(f,_,P));else T.push(it(F.beforeEnter,_,P));return T.push(j),Ht(T)}).then(()=>(_.matched.forEach(F=>F.enterCallbacks={}),T=Kr(te,"beforeRouteEnter",_,P),T.push(j),Ht(T))).then(()=>{T=[];for(const F of o.list())T.push(it(F,_,P));return T.push(j),Ht(T)}).catch(F=>Ke(F,8)?F:Promise.reject(F))}function he(_,P,T){for(const k of a.list())k(_,P,T)}function pe(_,P,T,k,q){const te=H(_,P);if(te)return te;const j=P===tt,F=Kt?history.state:{};T&&(k||j?s.replace(_.fullPath,J({scroll:j&&F&&F.scroll},q)):s.push(_.fullPath,q)),c.value=_,Ut(_,P,T,j),Ee()}let fe;function Ze(){fe||(fe=s.listen((_,P,T)=>{if(!hn.listening)return;const k=R(_),q=oe(k);if(q){V(J(q,{replace:!0}),k).catch(wn);return}l=k;const te=c.value;Kt&&gd(eo(te.fullPath,T.delta),Mr()),Z(k,te).catch(j=>Ke(j,12)?j:Ke(j,2)?(V(j.to,k).then(F=>{Ke(F,20)&&!T.delta&&T.type===Nn.pop&&s.go(-1,!1)}).catch(wn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(j,k,te))).then(j=>{j=j||pe(k,te,!1),j&&(T.delta&&!Ke(j,8)?s.go(-T.delta,!1):T.type===Nn.pop&&Ke(j,20)&&s.go(-1,!1)),he(k,te,j)}).catch(wn)}))}let xt=gn(),Lt=gn(),ce;function ee(_,P,T){Ee(_);const k=Lt.list();return k.length?k.forEach(q=>q(_,P,T)):console.error(_),Promise.reject(_)}function Y(){return ce&&c.value!==tt?Promise.resolve():new Promise((_,P)=>{xt.add([_,P])})}function Ee(_){return ce||(ce=!_,Ze(),xt.list().forEach(([P,T])=>_?T(_):P()),xt.reset()),_}function Ut(_,P,T,k){const{scrollBehavior:q}=t;if(!Kt||!q)return Promise.resolve();const te=!T&&md(eo(_.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return fa().then(()=>q(_,P,te)).then(j=>j&&pd(j)).catch(j=>ee(j,_,P))}const ze=_=>s.go(_);let Le;const Ce=new Set,hn={currentRoute:c,listening:!0,addRoute:m,removeRoute:S,hasRoute:A,getRoutes:N,resolve:R,options:t,push:W,replace:se,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Lt.add,isReady:Y,install(_){const P=this;_.component("RouterLink",Qd),_.component("RouterView",nh),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Xt(c)}),Kt&&!Le&&c.value===tt&&(Le=!0,W(s.location).catch(q=>{}));const T={};for(const q in tt)T[q]=Ae(()=>c.value[q]);_.provide(ni,P),_.provide(fc,un(T)),_.provide(Is,c);const k=_.unmount;Ce.add(_),_.unmount=function(){Ce.delete(_),Ce.size<1&&(l=tt,fe&&fe(),fe=null,c.value=tt,Le=!1,ce=!1),k()}}};return hn}function Ht(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function rh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>sn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>sn(l,c))||s.push(c))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const S=l<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ih=function(t){const e=dc(t);return hc.encodeByteArray(e,!0)},pc=function(t){return ih(t).replace(/\./g,"")},gc=function(t){try{return hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function ah(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ch(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lh(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uh(){try{return typeof indexedDB=="object"}catch{return!1}}function fh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function dh(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hh=()=>dh().__FIREBASE_DEFAULTS__,ph=()=>{!(typeof process=="undefined"||typeof process.env=="undefined")},gh=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gc(t[1]);return e&&JSON.parse(e)},ri=()=>{try{return hh()||ph()||gh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mh=t=>{var e,n;return(n=(e=ri())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_h=()=>{var t;return(t=ri())===null||t===void 0?void 0:t.config},mc=t=>{var e;return(e=ri())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="FirebaseError";class gt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=bh,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gt(s,a,r)}}function yh(t,e){return t.replace(Eh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Eh=/\{\$([^}]+)}/g;function Ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(go(i)&&go(o)){if(!_r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function go(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wh(t,e){const n=new Th(t,e);return n.subscribe.bind(n)}class Th{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gr),s.error===void 0&&(s.error=Gr),s.complete===void 0&&(s.complete=Gr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gr(){}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Et="[DEFAULT]";/**
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
 */class Ch{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ah(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rh(t){return t===Et?void 0:t}function Ah(t){return t.instantiationMode==="EAGER"}/**
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
 */class Oh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ch(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Ph={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},kh=ne.INFO,Nh={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Mh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Nh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _c{constructor(e){this.name=e,this._logLevel=kh,this._logHandler=Mh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ph[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Dh=(t,e)=>e.some(n=>t instanceof n);let mo,_o;function xh(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lh(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vc=new WeakMap,ws=new WeakMap,bc=new WeakMap,qr=new WeakMap,si=new WeakMap;function Uh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vc.set(n,t)}).catch(()=>{}),si.set(e,t),e}function Fh(t){if(ws.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ws.set(t,e)}let Ts={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ws.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bh(t){Ts=t(Ts)}function $h(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jr(this),e,...n);return bc.set(r,e.sort?e.sort():[e]),dt(r)}:Lh().includes(t)?function(...e){return t.apply(Jr(this),e),dt(vc.get(this))}:function(...e){return dt(t.apply(Jr(this),e))}}function jh(t){return typeof t=="function"?$h(t):(t instanceof IDBTransaction&&Fh(t),Dh(t,xh())?new Proxy(t,Ts):t)}function dt(t){if(t instanceof IDBRequest)return Uh(t);if(qr.has(t))return qr.get(t);const e=jh(t);return e!==t&&(qr.set(t,e),si.set(e,t)),e}const Jr=t=>si.get(t);function Hh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dt(o.result),c.oldVersion,c.newVersion,dt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Vh=["get","getKey","getAll","getAllKeys","count"],Wh=["put","add","delete","clear"],Yr=new Map;function vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Wh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Yr.set(e,i),i}Bh(t=>yi(bi({},t),{get:(e,n,r)=>vo(e,n)||t.get(e,n,r),has:(e,n)=>!!vo(e,n)||t.has(e,n)}));/**
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
 */class zh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ss="@firebase/app",bo="0.9.0";/**
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
 */const Pt=new _c("@firebase/app"),Gh="@firebase/app-compat",qh="@firebase/analytics-compat",Jh="@firebase/analytics",Yh="@firebase/app-check-compat",Xh="@firebase/app-check",Qh="@firebase/auth",Zh="@firebase/auth-compat",ep="@firebase/database",tp="@firebase/database-compat",np="@firebase/functions",rp="@firebase/functions-compat",sp="@firebase/installations",ip="@firebase/installations-compat",op="@firebase/messaging",ap="@firebase/messaging-compat",cp="@firebase/performance",lp="@firebase/performance-compat",up="@firebase/remote-config",fp="@firebase/remote-config-compat",dp="@firebase/storage",hp="@firebase/storage-compat",pp="@firebase/firestore",gp="@firebase/firestore-compat",mp="firebase",_p="9.15.0";/**
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
 */const Cs="[DEFAULT]",vp={[Ss]:"fire-core",[Gh]:"fire-core-compat",[Jh]:"fire-analytics",[qh]:"fire-analytics-compat",[Xh]:"fire-app-check",[Yh]:"fire-app-check-compat",[Qh]:"fire-auth",[Zh]:"fire-auth-compat",[ep]:"fire-rtdb",[tp]:"fire-rtdb-compat",[np]:"fire-fn",[rp]:"fire-fn-compat",[sp]:"fire-iid",[ip]:"fire-iid-compat",[op]:"fire-fcm",[ap]:"fire-fcm-compat",[cp]:"fire-perf",[lp]:"fire-perf-compat",[up]:"fire-rc",[fp]:"fire-rc-compat",[dp]:"fire-gcs",[hp]:"fire-gcs-compat",[pp]:"fire-fst",[gp]:"fire-fst-compat","fire-js":"fire-js",[mp]:"fire-js-all"};/**
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
 */const vr=new Map,Rs=new Map;function bp(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(Rs.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,t);for(const n of vr.values())bp(n,t);return!0}function yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new Fn("app","Firebase",yp);/**
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
 */class Ep{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=_p;function Ip(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(n||(n=_h()),!n)throw ht.create("no-options");const i=vr.get(s);if(i){if(_r(n,i.options)&&_r(r,i.config))return i;throw ht.create("duplicate-app",{appName:s})}const o=new Oh(s);for(const c of Rs.values())o.addComponent(c);const a=new Ep(n,r,o);return vr.set(s,a),a}function wp(t=Cs){const e=vr.get(t);if(!e&&t===Cs)return Ip();if(!e)throw ht.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let s=(r=vp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}Mn(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Tp="firebase-heartbeat-database",Sp=1,Dn="firebase-heartbeat-store";let Xr=null;function Ec(){return Xr||(Xr=Hh(Tp,Sp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}}).catch(t=>{throw ht.create("idb-open",{originalErrorMessage:t.message})})),Xr}async function Cp(t){try{return(await Ec()).transaction(Dn).objectStore(Dn).get(Ic(t))}catch(e){if(e instanceof gt)Pt.warn(e.message);else{const n=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(n.message)}}}async function yo(t,e){try{const r=(await Ec()).transaction(Dn,"readwrite");return await r.objectStore(Dn).put(e,Ic(t)),r.done}catch(n){if(n instanceof gt)Pt.warn(n.message);else{const r=ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pt.warn(r.message)}}}function Ic(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rp=1024,Ap=30*24*60*60*1e3;class Op{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Eo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ap}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Eo(),{heartbeatsToSend:n,unsentEntries:r}=Pp(this._heartbeatsCache.heartbeats),s=pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Eo(){return new Date().toISOString().substring(0,10)}function Pp(t,e=Rp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Io(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Io(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?fh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Io(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Np(t){Mn(new an("platform-logger",e=>new zh(e),"PRIVATE")),Mn(new an("heartbeat",e=>new Op(e),"PRIVATE")),Sn(Ss,bo,t),Sn(Ss,bo,"esm2017"),Sn("fire-js","")}Np("");function ii(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mp=wc,Tc=new Fn("auth","Firebase",wc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new _c("@firebase/auth");function sr(t,...e){wo.logLevel<=ne.ERROR&&wo.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,...e){throw oi(t,...e)}function je(t,...e){return oi(t,...e)}function Dp(t,e,n){const r=Object.assign(Object.assign({},Mp()),{[e]:n});return new Fn("auth","Firebase",r).create(e,{appName:t.name})}function oi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tc.create(t,...e)}function L(t,e,...n){if(!t)throw oi(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function Xe(t,e){t||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map;function Je(t){Xe(t instanceof Function,"Expected a class definition");let e=To.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,To.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t,e){const n=yc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_r(i,e!=null?e:{}))return s;De(s,"already-initialized")}return n.initialize({options:e})}function Lp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Up(){return So()==="http:"||So()==="https:"}function So(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Up()||ah()||"connection"in navigator)?navigator.onLine:!0}function Bp(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=oh()||ch()}get(){return Fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new $n(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,s={}){return Cc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Sc.fetch()(Rc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Cc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$p),e);try{const s=new Hp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dp(t,u,l);De(t,u)}}catch(s){if(s instanceof gt)throw s;De(t,"network-request-failed")}}async function Vn(t,e,n,r,s={}){const i=await Hn(t,e,n,r,s);return"mfaPendingCredential"in i&&De(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ai(t.config,s):`${t.config.apiScheme}://${s}`}class Hp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),jp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Wp(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zp(t,e=!1){const n=mt(t),r=await n.getIdToken(e),s=ci(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Cn(Qr(s.auth_time)),issuedAtTime:Cn(Qr(s.iat)),expirationTime:Cn(Qr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qr(t){return Number(t)*1e3}function ci(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=gc(n);return s?JSON.parse(s):(sr("Failed to decode base64 JWT payload"),null)}catch(s){return sr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kp(t){const e=ci(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&Gp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cn(this.lastLoginAt),this.creationTime=Cn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function br(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xn(t,Wp(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?Xp(i.providerUserInfo):[],a=Yp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ac(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Jp(t){const e=mt(t);await br(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xp(t){return t.map(e=>{var{providerId:n}=e,r=ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t,e){const n=await Cc(t,{},async()=>{const r=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Kp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ln;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ac(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zp(this,e)}reload(){return Jp(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await br(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xn(this,Vp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:W,isAnonymous:se,providerData:oe,stsTokenManager:V}=n;L(H&&V,e,"internal-error");const ae=Ln.fromJSON(this.name,V);L(typeof H=="string",e,"internal-error"),nt(d,e.name),nt(p,e.name),L(typeof W=="boolean",e,"internal-error"),L(typeof se=="boolean",e,"internal-error"),nt(m,e.name),nt(S,e.name),nt(N,e.name),nt(A,e.name),nt(R,e.name),nt(x,e.name);const Z=new Ot({uid:H,auth:e,email:p,emailVerified:W,displayName:d,isAnonymous:se,photoURL:S,phoneNumber:m,tenantId:N,stsTokenManager:ae,createdAt:R,lastLoginAt:x});return oe&&Array.isArray(oe)&&(Z.providerData=oe.map(he=>Object.assign({},he))),A&&(Z._redirectEventId=A),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ln;s.updateFromServerResponse(n);const i=new Ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await br(i),i}}/**
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
 */class Oc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Oc.type="NONE";const Co=Oc;/**
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
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class Zt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zt(Je(Co),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Je(Co);const o=ir(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ot._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Zt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dc(e))return"Blackberry";if(xc(e))return"Webos";if(li(e))return"Safari";if((e.includes("chrome/")||kc(e))&&!e.includes("edge/"))return"Chrome";if(Mc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pc(t=_e()){return/firefox\//i.test(t)}function li(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kc(t=_e()){return/crios\//i.test(t)}function Nc(t=_e()){return/iemobile/i.test(t)}function Mc(t=_e()){return/android/i.test(t)}function Dc(t=_e()){return/blackberry/i.test(t)}function xc(t=_e()){return/webos/i.test(t)}function xr(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zp(t=_e()){var e;return xr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function eg(){return lh()&&document.documentMode===10}function Lc(t=_e()){return xr(t)||Mc(t)||xc(t)||Dc(t)||/windows phone/i.test(t)||Nc(t)}function tg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e=[]){let n;switch(t){case"Browser":n=Ro(_e());break;case"Worker":n=`${Ro(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class ng{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ao(this),this.idTokenSubscription=new Ao(this),this.beforeStateQueue=new ng(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zt.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await br(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Zt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wn(t){return mt(t)}class Ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=wh(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sg(t,e,n){const r=Wn(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n==null?void 0:n.disableWarnings),i=Fc(e),{host:o,port:a}=ig(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||og()}function Fc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ig(t){const e=Fc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oo(o)}}}function Oo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function og(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function ag(t,e){return Hn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e){return Vn(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function ug(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ui{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Un(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Un(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lg(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ag(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ug(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(t,e){return Vn(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="http://localhost";class kt extends ui{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return en(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,en(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,en(e,n)}buildRequest(){const e={requestUri:fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hg(t){const e=vn(bn(t)).link,n=e?vn(bn(e)).deep_link_id:null,r=vn(bn(t)).deep_link_id;return(r?vn(bn(r)).link:null)||r||n||e||t}class fi{constructor(e){var n,r,s,i,o,a;const c=vn(bn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=dg((s=c.mode)!==null&&s!==void 0?s:null);L(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hg(e);try{return new fi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.providerId=dn.PROVIDER_ID}static credential(e,n){return Un._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fi.parseLink(n);return L(r,"argument-error"),Un._fromEmailAndCode(e,r.code,r.tenantId)}}dn.PROVIDER_ID="password";dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zn extends Bc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends zn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends zn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return at.credential(n,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends zn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends zn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e){return Vn(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),o=Po(r);return new Nt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Po(r);return new Nt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Po(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends gt{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yr(e,n,r,s)}}function $c(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,i,e,r):i})}async function gg(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}/**
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
 */async function mg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xn(t,$c(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=ci(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Nt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&De(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(t,e,n=!1){const r="signIn",s=await $c(t,r,e),i=await Nt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _g(t,e){return jc(Wn(t),e)}async function zm(t,e,n){const r=Wn(t),s=await pg(r,{returnSecureToken:!0,email:e,password:n}),i=await Nt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Km(t,e,n){return _g(mt(t),dn.credential(e,n))}function vg(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function bg(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function Gm(t){return mt(t).signOut()}const Er="__sak";/**
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
 */class Hc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){const t=_e();return li(t)||xr(t)}const Eg=1e3,Ig=10;class Vc extends Hc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yg()&&tg(),this.fallbackToPolling=Lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ig):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vc.type="LOCAL";const wg=Vc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Hc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wc.type="SESSION";const zc=Wc;/**
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
 */function Tg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Lr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Tg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=di("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function Cg(t){He().location.href=t}/**
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
 */function Kc(){return typeof He().WorkerGlobalScope!="undefined"&&typeof He().importScripts=="function"}async function Rg(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ag(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Og(){return Kc()?self:null}/**
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
 */const Gc="firebaseLocalStorageDb",Pg=1,Ir="firebaseLocalStorage",qc="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ur(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function kg(){const t=indexedDB.deleteDatabase(Gc);return new Kn(t).toPromise()}function Os(){const t=indexedDB.open(Gc,Pg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ir,{keyPath:qc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ir)?e(r):(r.close(),await kg(),e(await Os()))})})}async function ko(t,e,n){const r=Ur(t,!0).put({[qc]:e,value:n});return new Kn(r).toPromise()}async function Ng(t,e){const n=Ur(t,!1).get(e),r=await new Kn(n).toPromise();return r===void 0?null:r.value}function No(t,e){const n=Ur(t,!0).delete(e);return new Kn(n).toPromise()}const Mg=800,Dg=3;class Jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Dg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lr._getInstance(Og()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rg(),!this.activeServiceWorker)return;this.sender=new Sg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ag()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Os();return await ko(e,Er,"1"),await No(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ko(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ng(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>No(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ur(s,!1).getAll();return new Kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jc.type="LOCAL";const xg=Jc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ug(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Lg().appendChild(r)})}function Fg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $n(3e4,6e4);/**
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
 */function Bg(t,e){return e?Je(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hi extends ui{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return en(e,this._buildIdpRequest())}_linkToIdToken(e,n){return en(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return en(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $g(t){return jc(t.auth,new hi(t),t.bypassAuthState)}function jg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),mg(n,new hi(t),t.bypassAuthState)}async function Hg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),gg(n,new hi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $g;case"linkViaPopup":case"linkViaRedirect":return Hg;case"reauthViaPopup":case"reauthViaRedirect":return jg;default:De(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new $n(2e3,1e4);class Gt extends Yc{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Vg.get())};e()}}Gt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="pendingRedirect",or=new Map;class zg extends Yc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const r=await Kg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kg(t,e){const n=Jg(e),r=qg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Gg(t,e){or.set(t._key(),e)}function qg(t){return Je(t._redirectPersistence)}function Jg(t){return ir(Wg,t.config.apiKey,t.name)}async function Yg(t,e,n=!1){const r=Wn(t),s=Bg(r,e),o=await new zg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=10*60*1e3;class Qg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mo(e))}saveEventToCache(e){this.cachedEventUids.add(Mo(e)),this.lastProcessedEventTime=Date.now()}}function Mo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nm=/^https?/;async function rm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await em(t);for(const n of e)try{if(sm(n))return}catch{}De(t,"unauthorized-domain")}function sm(t){const e=As(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nm.test(n))return!1;if(tm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const im=new $n(3e4,6e4);function Do(){const t=He().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function om(t){return new Promise((e,n)=>{var r,s,i;function o(){Do(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Do(),n(je(t,"network-request-failed"))},timeout:im.get()})}if((s=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=He().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Fg("iframefcb");return He()[a]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},Ug(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ar=null,e})}let ar=null;function am(t){return ar=ar||om(t),ar}/**
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
 */const cm=new $n(5e3,15e3),lm="__/auth/iframe",um="emulator/auth/iframe",fm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hm(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,um):`https://${t.config.authDomain}/${lm}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=dm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bn(r).slice(1)}`}async function pm(t){const e=await am(t),n=He().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:hm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=He().setTimeout(()=>{i(o)},cm.get());function c(){He().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const gm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mm=500,_m=600,vm="_blank",bm="http://localhost";class xo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ym(t,e,n,r=mm,s=_m){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(a=kc(l)?vm:n),Pc(l)&&(e=e||bm,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,S])=>`${p}${m}=${S},`,"");if(Zp(l)&&a!=="_self")return Em(e||"",a),new xo(null);const d=window.open(e||"",a,u);L(d,t,"popup-blocked");try{d.focus()}catch{}return new xo(d)}function Em(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Im="__/auth/handler",wm="emulator/auth/handler";function Lo(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof Bc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof zn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Tm(t)}?${Bn(a).slice(1)}`}function Tm({config:t}){return t.emulator?ai(t,wm):`https://${t.authDomain}/${Im}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="webStorageSupport";class Sm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zc,this._completeRedirectFn=Yg,this._overrideRedirectResult=Gg}async _openPopup(e,n,r,s){var i;Xe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Lo(e,n,r,As(),s);return ym(e,o,di())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Cg(Lo(e,n,r,As(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pm(e),r=new Qg(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zr,{type:Zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zr];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lc()||li()||xr()}}const Cm=Sm;var Uo="@firebase/auth",Fo="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Om(t){Mn(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o==null?void 0:o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uc(t)},u=new rg(a,c,l);return Lp(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new an("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(r=>new Rm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Uo,Fo,Am(t)),Sn(Uo,Fo,"esm2017")}/**
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
 */const Pm=5*60,km=mc("authIdTokenMaxAge")||Pm;let Bo=null;const Nm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>km)return;const s=n==null?void 0:n.token;Bo!==s&&(Bo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qm(t=wp()){const e=yc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xp(t,{popupRedirectResolver:Cm,persistence:[xg,wg,zc]}),r=mc("authTokenSyncURL");if(r){const i=Nm(r);bg(n,i,()=>i(n.currentUser)),vg(n,o=>i(o))}const s=mh("auth");return s&&sg(n,`http://${s}`),n}Om("Browser");export{Be as F,Te as a,Ku as b,Um as c,zm as d,Gm as e,Fm as f,qm as g,$a as h,xm as i,$m as j,Hm as k,Wm as l,Vm as m,jm as n,ju as o,Lm as r,Km as s,Dm as t,Bm as v,nu as w};
