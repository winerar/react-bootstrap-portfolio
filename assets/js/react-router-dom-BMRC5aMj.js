import{r as n,R as M}from"./react-BLd8ueWf.js";import{a as k}from"./react-dom-DChN0zLA.js";import{m as z,D as A,a as N,R as B,u as Y}from"./react-router-kFTMGC7i.js";import{c as q,b as G,E as J}from"./@remix-run-gROmB3-1.js";/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},E.apply(this,arguments)}function oe(t,i){return q({basename:void 0,future:E({},void 0,{v7_prependBasename:!0}),history:G({window:void 0}),hydrationData:K(),routes:t,mapRouteProperties:z,window:void 0}).initialize()}function K(){var t;let i=(t=window)==null?void 0:t.__staticRouterHydrationData;return i&&i.errors&&(i=E({},i,{errors:Q(i.errors)})),i}function Q(t){if(!t)return null;let i=Object.entries(t),e={};for(let[s,r]of i)if(r&&r.__type==="RouteErrorResponse")e[s]=new J(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let u=window[r.__subType];if(typeof u=="function")try{let l=new u(r.message);l.stack="",e[s]=l}catch{}}if(e[s]==null){let u=new Error(r.message);u.stack="",e[s]=u}}else e[s]=r;return e}const W=n.createContext({isTransitioning:!1}),X=n.createContext(new Map),Z="startTransition",I=M[Z],$="flushSync",O=k[$];function ee(t){I?I(t):t()}function S(t){O?O(t):t()}class te{constructor(){this.status="pending",this.promise=new Promise((i,e)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",i(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",e(s))}})}}function ue(t){let{fallbackElement:i,router:e,future:s}=t,[r,u]=n.useState(e.state),[l,T]=n.useState(),[p,h]=n.useState({isTransitioning:!1}),[o,x]=n.useState(),[m,y]=n.useState(),[w,L]=n.useState(),g=n.useRef(new Map),{v7_startTransition:C}=s||{},R=n.useCallback(a=>{C?ee(a):a()},[C]),P=n.useCallback((a,f)=>{let{deletedFetchers:c,unstable_flushSync:F,unstable_viewTransitionOpts:d}=f;c.forEach(v=>g.current.delete(v)),a.fetchers.forEach((v,H)=>{v.data!==void 0&&g.current.set(H,v.data)});let j=e.window==null||typeof e.window.document.startViewTransition!="function";if(!d||j){F?S(()=>u(a)):R(()=>u(a));return}if(F){S(()=>{m&&(o&&o.resolve(),m.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:d.currentLocation,nextLocation:d.nextLocation})});let v=e.window.document.startViewTransition(()=>{S(()=>u(a))});v.finished.finally(()=>{S(()=>{x(void 0),y(void 0),T(void 0),h({isTransitioning:!1})})}),S(()=>y(v));return}m?(o&&o.resolve(),m.skipTransition(),L({state:a,currentLocation:d.currentLocation,nextLocation:d.nextLocation})):(T(a),h({isTransitioning:!0,flushSync:!1,currentLocation:d.currentLocation,nextLocation:d.nextLocation}))},[e.window,m,o,g,R]);n.useLayoutEffect(()=>e.subscribe(P),[e,P]),n.useEffect(()=>{p.isTransitioning&&!p.flushSync&&x(new te)},[p]),n.useEffect(()=>{if(o&&l&&e.window){let a=l,f=o.promise,c=e.window.document.startViewTransition(async()=>{R(()=>u(a)),await f});c.finished.finally(()=>{x(void 0),y(void 0),T(void 0),h({isTransitioning:!1})}),y(c)}},[R,l,o,e.window]),n.useEffect(()=>{o&&l&&r.location.key===l.location.key&&o.resolve()},[o,m,r.location,l]),n.useEffect(()=>{!p.isTransitioning&&w&&(T(w.state),h({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),L(void 0))},[p.isTransitioning,w]),n.useEffect(()=>{},[]);let _=n.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:a=>e.navigate(a),push:(a,f,c)=>e.navigate(a,{state:f,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(a,f,c)=>e.navigate(a,{replace:!0,state:f,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[e]),b=e.basename||"/",V=n.useMemo(()=>({router:e,navigator:_,static:!1,basename:b}),[e,_,b]);return n.createElement(n.Fragment,null,n.createElement(A.Provider,{value:V},n.createElement(N.Provider,{value:r},n.createElement(X.Provider,{value:g.current},n.createElement(W.Provider,{value:p},n.createElement(B,{basename:b,location:r.location,navigationType:r.historyAction,navigator:_,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath}},r.initialized||e.future.v7_partialHydration?n.createElement(ne,{routes:e.routes,future:e.future,state:r}):i))))),null)}function ne(t){let{routes:i,future:e,state:s}=t;return Y(i,void 0,s,e)}var U;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(U||(U={}));var D;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(D||(D={}));export{ue as R,oe as c};
