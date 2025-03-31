"use strict";(self.webpackChunkfluentair_app=self.webpackChunkfluentair_app||[]).push([[391],{2087:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var i=a(579);const s=e=>{let{onClick:t,icon:a,text:s,color:r,className:o}=e;return(0,i.jsxs)("button",{className:`SocialSignUpButton ${o}`,onClick:t,style:{backgroundColor:r},children:[a&&(0,i.jsx)("span",{children:(0,i.jsx)(a,{})}),s]})}},3768:(e,t,a)=>{a.d(t,{l$:()=>ee,Ay:()=>te});var i=a(5043);let s={data:""},r=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let a="",i="",s="";for(let r in e){let o=e[r];"@"==r[0]?"i"==r[1]?a=r+" "+o+";":i+="f"==r[1]?d(o,r):r+"{"+d(o,"k"==r[1]?"":t)+"}":"object"==typeof o?i+=d(o,t?t.replace(/([^,])+/g,(e=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):r):null!=o&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=d.p?d.p(r,o):r+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+i},c={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},p=(e,t,a,i,s)=>{let r=u(e),p=c[r]||(c[r]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(r));if(!c[p]){let t=r!==e?e:(e=>{let t,a,i=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?i.shift():t[3]?(a=t[3].replace(l," ").trim(),i.unshift(i[0][a]=i[0][a]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);c[p]=d(s?{["@keyframes "+p]:t}:t,a?"":"."+p)}let m=a&&c.g?c.g:null;return a&&(c.g=c[p]),((e,t,a,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(c[p],t,i,m),p};function m(e){let t=this||{},a=e.call?e(t.p):e;return p(a.unshift?a.raw?((e,t,a)=>e.reduce(((e,i,s)=>{let r=t[s];if(r&&r.call){let e=r(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+i+(null==r?"":r)}),""))(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,r(t.target),t.g,t.o,t.k)}m.bind({g:1});let f,g,y,h=m.bind({k:1});function x(e,t){let a=this||{};return function(){let i=arguments;function s(r,o){let n=Object.assign({},r),l=n.className||s.className;a.p=Object.assign({theme:g&&g()},n),a.o=/ *go\d+/.test(l),n.className=m.apply(a,i)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),y&&d[0]&&y(n),f(d,n)}return t?t(s):s}}var b=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,v=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),j=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return j(e,{type:e.toasts.find((e=>e.id===a.id))?1:0,toast:a});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map((e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+s})))}}},k=[],C={toasts:[],pausedAt:void 0},N=e=>{C=j(C,e),k.forEach((e=>{e(C)}))},E={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=e=>(t,a)=>{let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",a=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||v()}}(t,e,a);return N({type:2,toast:i}),i.id},S=(e,t)=>A("blank")(e,t);S.error=A("error"),S.success=A("success"),S.loading=A("loading"),S.custom=A("custom"),S.dismiss=e=>{N({type:3,toastId:e})},S.remove=e=>N({type:4,toastId:e}),S.promise=(e,t,a)=>{let i=S.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then((e=>{let s=t.success?b(t.success,e):void 0;return s?S.success(s,{id:i,...a,...null==a?void 0:a.success}):S.dismiss(i),e})).catch((e=>{let s=t.error?b(t.error,e):void 0;s?S.error(s,{id:i,...a,...null==a?void 0:a.error}):S.dismiss(i)})),e};var I=(e,t)=>{N({type:1,toast:{id:e,height:t}})},$=()=>{N({type:5,time:Date.now()})},D=new Map,O=e=>{let{toasts:t,pausedAt:a}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,a]=(0,i.useState)(C),s=(0,i.useRef)(C);(0,i.useEffect)((()=>(s.current!==C&&a(C),k.push(a),()=>{let e=k.indexOf(a);e>-1&&k.splice(e,1)})),[]);let r=t.toasts.map((t=>{var a,i,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(i=e[t.type])?void 0:i.duration)||(null==e?void 0:e.duration)||E[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}}));return{...t,toasts:r}}(e);(0,i.useEffect)((()=>{if(a)return;let e=Date.now(),i=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>S.dismiss(t.id)),a);t.visible&&S.dismiss(t.id)}));return()=>{i.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let s=(0,i.useCallback)((()=>{a&&N({type:6,time:Date.now()})}),[a]),r=(0,i.useCallback)(((e,a)=>{let{reverseOrder:i=!1,gutter:s=8,defaultPosition:r}=a||{},o=t.filter((t=>(t.position||r)===(e.position||r)&&t.height)),n=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<n&&e.visible)).length;return o.filter((e=>e.visible)).slice(...i?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+s),0)}),[t]);return(0,i.useEffect)((()=>{t.forEach((e=>{if(e.dismissed)!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(D.has(e))return;let a=setTimeout((()=>{D.delete(e),N({type:4,toastId:e})}),t);D.set(e,a)}(e.id,e.removeDelay);else{let t=D.get(e.id);t&&(clearTimeout(t),D.delete(e.id))}}))}),[t]),{toasts:t,handlers:{updateHeight:I,startPause:$,endPause:s,calculateOffset:r}}},P=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${U} 1s linear infinite;
`,M=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,_=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=x("div")`
  position: absolute;
`,R=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=e=>{let{toast:t}=e,{icon:a,type:s,iconTheme:r}=t;return void 0!==a?"string"==typeof a?i.createElement(G,null,a):a:"blank"===s?null:i.createElement(R,null,i.createElement(L,{...r}),"loading"!==s&&i.createElement(H,null,"error"===s?i.createElement(z,{...r}):i.createElement(_,{...r})))},Z=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,J=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=i.memo((e=>{let{toast:t,position:a,style:s,children:r}=e,o=t.height?((e,t)=>{let a=e.includes("top")?1:-1,[i,s]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(a),Q(a)];return{animation:t?`${h(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||a||"top-center",t.visible):{opacity:0},n=i.createElement(V,{toast:t}),l=i.createElement(K,{...t.ariaProps},b(t.message,t));return i.createElement(J,{className:t.className,style:{...o,...s,...t.style}},"function"==typeof r?r({icon:n,message:l}):i.createElement(i.Fragment,null,n,l))}));!function(e,t,a,i){d.p=t,f=e,g=a,y=i}(i.createElement);var Y=e=>{let{id:t,className:a,style:s,onHeightUpdate:r,children:o}=e,n=i.useCallback((e=>{if(e){let a=()=>{let a=e.getBoundingClientRect().height;r(t,a)};a(),new MutationObserver(a).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,r]);return i.createElement("div",{ref:n,className:a,style:s},o)},X=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=e=>{let{reverseOrder:t,position:a="top-center",toastOptions:s,gutter:r,children:o,containerStyle:n,containerClassName:l}=e,{toasts:d,handlers:c}=O(s);return i.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map((e=>{let s=e.position||a,n=((e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...s}})(s,c.calculateOffset(e,{reverseOrder:t,gutter:r,defaultPosition:a}));return i.createElement(Y,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?X:"",style:n},"custom"===e.type?b(e.message,e):o?o(e):i.createElement(W,{toast:e,position:s}))})))},te=S},6391:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var i=a(5043),s=a(4275),r=a(3216),o=a(2087),n=a(184),l=a(3727),d=a(4562),c=a(5472),u=a(3768),p=(a(7032),a(579));const m=function(){const e=(0,r.Zp)(),[t,a]=(0,i.useState)(""),[m,f]=(0,i.useState)(""),[g,y]=(0,i.useState)("");(0,i.useEffect)((()=>{const e=(0,d.hg)(l.j2,(async e=>{e&&await e.getIdToken(!0)}));return()=>e()}),[]);const h=async e=>{const t=(0,c.H9)(l.db,"users",e.uid),a=await(0,c.x7)(t),i="admin@fluentair.com"===e.email?"admin":"user";a.exists()?await(0,c.mZ)(t,{emailVerified:!1}):await(0,c.BN)(t,{uid:e.uid,email:e.email,displayName:e.displayName||"",photoURL:e.photoURL||"",role:i,emailVerified:!1,createdAt:l.vE,userNotesBank:{},userPreviousTests:[],userPrivateCollectionsBank:[],userQuestionData:{seenQuestions:[],wrongAnswers:[]}}),await e.getIdToken(!0)};return(0,p.jsxs)("div",{className:"signInMain",children:[(0,p.jsx)(u.l$,{position:"top-center"}),(0,p.jsxs)("div",{className:"signInContainer",children:[(0,p.jsx)("img",{src:s,alt:"FluentAir Logo",className:"logo"}),(0,p.jsxs)("div",{className:"sign-in-container",children:[(0,p.jsx)("div",{className:"SignInInputBox",children:(0,p.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),m!==g)return void u.Ay.error("Passwords do not match");const i=u.Ay.loading("Creating account...");try{if((await(0,d.Wm)(l.j2,t)).length>0)return void u.Ay.error("Email is already registered!",{id:i});const a=(await(0,d.eJ)(l.j2,t,m)).user;await(0,d.r7)(a,{displayName:t.split("@")[0]}),await h(a),await(0,d.gA)(a),await l.j2.signOut(),u.Ay.dismiss(i),(0,u.Ay)((a=>(0,p.jsxs)("span",{children:["\u2705 Verification email sent to ",(0,p.jsx)("strong",{children:t}),".",(0,p.jsx)("br",{}),"Please verify your email before logging in.",(0,p.jsx)("br",{}),(0,p.jsx)("button",{onClick:()=>{u.Ay.dismiss(a.id),e("/sign-in")},style:{marginTop:10,padding:"6px 12px",backgroundColor:"#ddd",border:"none",borderRadius:"4px",cursor:"pointer"},children:"OK"})]})),{duration:1/0})}catch(s){u.Ay.error(s.message||"Signup failed",{id:i})}},children:[(0,p.jsxs)("div",{className:"SignInInputBox",children:[(0,p.jsx)("input",{type:"email",autoComplete:"new-password",required:!0,value:t,onChange:e=>a(e.target.value)}),(0,p.jsx)("span",{children:"Email"})]}),(0,p.jsxs)("div",{className:"SignInInputBox",children:[(0,p.jsx)("input",{type:"password",autoComplete:"new-password",required:!0,value:m,onChange:e=>f(e.target.value)}),(0,p.jsx)("span",{children:"Password"})]}),(0,p.jsxs)("div",{className:"SignInInputBox",children:[(0,p.jsx)("input",{type:"password",autoComplete:"off",required:!0,value:g,onChange:e=>y(e.target.value)}),(0,p.jsx)("span",{children:"Confirm Password"})]}),(0,p.jsx)("p",{className:"terms-and-use",children:"By signing up or logging in, you consent to FluentAir's Terms of Use and Privacy Policy."}),(0,p.jsx)("button",{className:"SocialSignUpButton SignIn",type:"submit",children:"Sign Up"}),(0,p.jsx)("div",{className:"sign-up-form-footer",children:(0,p.jsx)("p",{onClick:()=>e("/sign-in"),children:"Log In"})})]})}),(0,p.jsxs)("div",{className:"separator",children:[(0,p.jsx)("span",{}),(0,p.jsx)("p",{children:"Or"}),(0,p.jsx)("span",{})]}),(0,p.jsx)(o.A,{onClick:async()=>{const t=u.Ay.loading("Signing up with Google...");try{const a=(await(0,d.df)(l.j2,l.Mn)).user;await h(a),u.Ay.success("Signed in with Google!",{id:t}),e("/")}catch(a){u.Ay.error(a.message||"Google signup failed",{id:t})}},icon:n.DSS,text:"Sign Up with Google"})]})]})]})}},7032:()=>{}}]);
//# sourceMappingURL=391.0c5dc799.chunk.js.map