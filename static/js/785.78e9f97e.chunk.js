"use strict";(self.webpackChunkfluentair_app=self.webpackChunkfluentair_app||[]).push([[785],{2087:(e,t,s)=>{s.d(t,{A:()=>i});s(5043);var a=s(579);const i=e=>{let{onClick:t,icon:s,text:i,color:r,className:o}=e;return(0,a.jsxs)("button",{className:`SocialSignUpButton ${o}`,onClick:t,style:{backgroundColor:r},children:[s&&(0,a.jsx)("span",{children:(0,a.jsx)(s,{})}),i]})}},3768:(e,t,s)=>{s.d(t,{l$:()=>ee,Ay:()=>te});var a=s(5043);let i={data:""},r=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let s="",a="",i="";for(let r in e){let o=e[r];"@"==r[0]?"i"==r[1]?s=r+" "+o+";":a+="f"==r[1]?c(o,r):r+"{"+c(o,"k"==r[1]?"":t)+"}":"object"==typeof o?a+=c(o,t?t.replace(/([^,])+/g,(e=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):r):null!=o&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=c.p?c.p(r,o):r+":"+o+";")}return s+(t&&i?t+"{"+i+"}":i)+a},d={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e},p=(e,t,s,a,i)=>{let r=u(e),p=d[r]||(d[r]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(r));if(!d[p]){let t=r!==e?e:(e=>{let t,s,a=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?a.shift():t[3]?(s=t[3].replace(l," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);d[p]=c(i?{["@keyframes "+p]:t}:t,s?"":"."+p)}let m=s&&d.g?d.g:null;return s&&(d.g=d[p]),((e,t,s,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(d[p],t,a,m),p};function m(e){let t=this||{},s=e.call?e(t.p):e;return p(s.unshift?s.raw?((e,t,s)=>e.reduce(((e,a,i)=>{let r=t[i];if(r&&r.call){let e=r(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==r?"":r)}),""))(s,[].slice.call(arguments,1),t.p):s.reduce(((e,s)=>Object.assign(e,s&&s.call?s(t.p):s)),{}):s,r(t.target),t.g,t.o,t.k)}m.bind({g:1});let f,g,y,h=m.bind({k:1});function x(e,t){let s=this||{};return function(){let a=arguments;function i(r,o){let n=Object.assign({},r),l=n.className||i.className;s.p=Object.assign({theme:g&&g()},n),s.o=/ *go\d+/.test(l),n.className=m.apply(s,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),y&&c[0]&&y(n),f(c,n)}return t?t(i):i}}var b=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,v=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),j=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:s}=t;return j(e,{type:e.toasts.find((e=>e.id===s.id))?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},k=[],N={toasts:[],pausedAt:void 0},E=e=>{N=j(N,e),k.forEach((e=>{e(N)}))},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=e=>(t,s)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",s=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||v()}}(t,e,s);return E({type:2,toast:a}),a.id},S=(e,t)=>C("blank")(e,t);S.error=C("error"),S.success=C("success"),S.loading=C("loading"),S.custom=C("custom"),S.dismiss=e=>{E({type:3,toastId:e})},S.remove=e=>E({type:4,toastId:e}),S.promise=(e,t,s)=>{let a=S.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then((e=>{let i=t.success?b(t.success,e):void 0;return i?S.success(i,{id:a,...s,...null==s?void 0:s.success}):S.dismiss(a),e})).catch((e=>{let i=t.error?b(t.error,e):void 0;i?S.error(i,{id:a,...s,...null==s?void 0:s.error}):S.dismiss(a)})),e};var $=(e,t)=>{E({type:1,toast:{id:e,height:t}})},I=()=>{E({type:5,time:Date.now()})},D=new Map,O=e=>{let{toasts:t,pausedAt:s}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,s]=(0,a.useState)(N),i=(0,a.useRef)(N);(0,a.useEffect)((()=>(i.current!==N&&s(N),k.push(s),()=>{let e=k.indexOf(s);e>-1&&k.splice(e,1)})),[]);let r=t.toasts.map((t=>{var s,a,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}}));return{...t,toasts:r}}(e);(0,a.useEffect)((()=>{if(s)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(s<0))return setTimeout((()=>S.dismiss(t.id)),s);t.visible&&S.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,s]);let i=(0,a.useCallback)((()=>{s&&E({type:6,time:Date.now()})}),[s]),r=(0,a.useCallback)(((e,s)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:r}=s||{},o=t.filter((t=>(t.position||r)===(e.position||r)&&t.height)),n=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<n&&e.visible)).length;return o.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return(0,a.useEffect)((()=>{t.forEach((e=>{if(e.dismissed)!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(D.has(e))return;let s=setTimeout((()=>{D.delete(e),E({type:4,toastId:e})}),t);D.set(e,s)}(e.id,e.removeDelay);else{let t=D.get(e.id);t&&(clearTimeout(t),D.delete(e.id))}}))}),[t]),{toasts:t,handlers:{updateHeight:$,startPause:I,endPause:i,calculateOffset:r}}},P=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=h`
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
    animation: ${L} 0.15s ease-out forwards;
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
`,B=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,U=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,M=h`
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

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
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
`,Q=e=>{let{toast:t}=e,{icon:s,type:i,iconTheme:r}=t;return void 0!==s?"string"==typeof s?a.createElement(G,null,s):s:"blank"===i?null:a.createElement(R,null,a.createElement(F,{...r}),"loading"!==i&&a.createElement(H,null,"error"===i?a.createElement(z,{...r}):a.createElement(_,{...r})))},Z=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,V=x("div")`
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
`,Y=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=a.memo((e=>{let{toast:t,position:s,style:i,children:r}=e,o=t.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,i]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(s),J(s)];return{animation:t?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||s||"top-center",t.visible):{opacity:0},n=a.createElement(Q,{toast:t}),l=a.createElement(Y,{...t.ariaProps},b(t.message,t));return a.createElement(V,{className:t.className,style:{...o,...i,...t.style}},"function"==typeof r?r({icon:n,message:l}):a.createElement(a.Fragment,null,n,l))}));!function(e,t,s,a){c.p=t,f=e,g=s,y=a}(a.createElement);var W=e=>{let{id:t,className:s,style:i,onHeightUpdate:r,children:o}=e,n=a.useCallback((e=>{if(e){let s=()=>{let s=e.getBoundingClientRect().height;r(t,s)};s(),new MutationObserver(s).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,r]);return a.createElement("div",{ref:n,className:s,style:i},o)},X=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=e=>{let{reverseOrder:t,position:s="top-center",toastOptions:i,gutter:r,children:o,containerStyle:n,containerClassName:l}=e,{toasts:c,handlers:d}=O(i);return a.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let i=e.position||s,n=((e,t)=>{let s=e.includes("top"),a=s?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...a,...i}})(i,d.calculateOffset(e,{reverseOrder:t,gutter:r,defaultPosition:s}));return a.createElement(W,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?X:"",style:n},"custom"===e.type?b(e.message,e):o?o(e):a.createElement(K,{toast:e,position:i}))})))},te=S},7032:()=>{},9166:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s(5043),i=s(4275),r=s(3216),o=s(2087),n=s(184),l=s(3727),c=s(4562),d=s(5472),u=s(3768),p=(s(7032),s(579));const m=function(){const e=(0,r.Zp)(),[t,s]=(0,a.useState)(""),[m,f]=(0,a.useState)("");(0,a.useEffect)((()=>{const e=(0,c.hg)(l.j2,(async e=>{if(e){await e.getIdTokenResult(!0)}}));return()=>e()}),[]);const g=async t=>{const s=(0,d.H9)(l.db,"users",t.uid),a=await(0,d.x7)(s);let i="user";if(a.exists()){i=a.data().role||"user"}else await(0,d.BN)(s,{uid:t.uid,email:t.email,displayName:t.displayName||"",photoURL:t.photoURL||"",role:i,createdAt:l.vE,userNotesBank:{},userPreviousTests:[],userPrivateCollectionsBank:[],userQuestionData:{seenQuestions:[],wrongAnswers:[]}});const r=await t.getIdToken(!0),o=u.Ay.loading("Setting up your session...");try{const s=await fetch("https://us-central1-fluentair-d4ff3.cloudfunctions.net/setUserRole",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({uid:t.uid,role:i})}),a=await s.json();var n;if(!s.ok)throw new Error((null===(n=a.error)||void 0===n?void 0:n.message)||"Failed to set user role");await l.j2.currentUser.getIdToken(!0),u.Ay.success("Login successful!",{id:o}),e("/")}catch(c){throw u.Ay.error("Failed to assign role: "+c.message,{id:o}),c}};return(0,p.jsxs)("div",{className:"signInMain",children:[(0,p.jsx)(u.l$,{position:"top-center"}),(0,p.jsxs)("div",{className:"signInContainer",children:[(0,p.jsx)("img",{src:i,alt:"FluentAir Logo",className:"logo"}),(0,p.jsxs)("div",{className:"sign-in-container",children:[(0,p.jsx)("div",{className:"SignInInputBox",children:(0,p.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const s=u.Ay.loading("Logging in...");try{const e=(await(0,c.x9)(l.j2,t,m)).user;if(!e.emailVerified)return u.Ay.dismiss(s),u.Ay.error("Please verify your email before logging in."),void await l.j2.signOut();await g(e)}catch(a){u.Ay.error("Login failed: "+a.message,{id:s})}},children:[(0,p.jsxs)("div",{className:"SignInInputBox",children:[(0,p.jsx)("input",{type:"email",autoComplete:"new-password",required:!0,value:t,onChange:e=>s(e.target.value)}),(0,p.jsx)("span",{children:"Email"})]}),(0,p.jsxs)("div",{className:"SignInInputBox",children:[(0,p.jsx)("input",{type:"password",autoComplete:"new-password",required:!0,value:m,onChange:e=>f(e.target.value)}),(0,p.jsx)("span",{children:"Password"})]}),(0,p.jsx)("p",{className:"terms-and-use",children:"By signing up or logging in, you consent to FluentAir's Terms of Use and Privacy Policy."}),(0,p.jsx)("button",{className:"SocialSignUpButton SignIn",type:"submit",children:"Log In"}),(0,p.jsxs)("div",{className:"sign-in-form-footer",children:[(0,p.jsx)("p",{children:"Forgot password?"}),(0,p.jsx)("p",{onClick:()=>e("/sign-up"),children:"Sign Up?"})]})]})}),(0,p.jsxs)("div",{className:"separator",children:[(0,p.jsx)("span",{}),(0,p.jsx)("p",{children:"Or"}),(0,p.jsx)("span",{})]}),(0,p.jsx)(o.A,{onClick:async()=>{const t=u.Ay.loading("Signing in with Google...");try{const s=await(0,c.df)(l.j2,l.Mn);await g(s.user),u.Ay.success("Login successful!",{id:t}),e("/")}catch(s){u.Ay.error("Google login failed: "+s.message,{id:t})}},icon:n.DSS,text:"Log In with Google"})]})]})]})}}}]);
//# sourceMappingURL=785.78e9f97e.chunk.js.map