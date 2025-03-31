"use strict";(self.webpackChunkfluentair_app=self.webpackChunkfluentair_app||[]).push([[962],{3768:(e,t,s)=>{s.d(t,{l$:()=>ee,Ay:()=>te});var a=s(5043);let r={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||r,o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?c(o,i):i+"{"+c(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=c(o,t?t.replace(/([^,])+/g,(e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=c.p?c.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},d={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e},p=(e,t,s,a,r)=>{let i=u(e),p=d[i]||(d[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!d[p]){let t=i!==e?e:(e=>{let t,s,a=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?a.shift():t[3]?(s=t[3].replace(l," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);d[p]=c(r?{["@keyframes "+p]:t}:t,s?"":"."+p)}let m=s&&d.g?d.g:null;return s&&(d.g=d[p]),((e,t,s,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(d[p],t,a,m),p};function m(e){let t=this||{},s=e.call?e(t.p):e;return p(s.unshift?s.raw?((e,t,s)=>e.reduce(((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==i?"":i)}),""))(s,[].slice.call(arguments,1),t.p):s.reduce(((e,s)=>Object.assign(e,s&&s.call?s(t.p):s)),{}):s,i(t.target),t.g,t.o,t.k)}m.bind({g:1});let f,h,g,y=m.bind({k:1});function b(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let n=Object.assign({},i),l=n.className||r.className;s.p=Object.assign({theme:h&&h()},n),s.o=/ *go\d+/.test(l),n.className=m.apply(s,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),g&&c[0]&&g(n),f(c,n)}return t?t(r):r}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,v=(()=>{let e=0;return()=>(++e).toString()})(),j=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),w=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:s}=t;return w(e,{type:e.toasts.find((e=>e.id===s.id))?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+r})))}}},N=[],k={toasts:[],pausedAt:void 0},E=e=>{k=w(k,e),N.forEach((e=>{e(k)}))},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=e=>(t,s)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",s=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||v()}}(t,e,s);return E({type:2,toast:a}),a.id},C=(e,t)=>$("blank")(e,t);C.error=$("error"),C.success=$("success"),C.loading=$("loading"),C.custom=$("custom"),C.dismiss=e=>{E({type:3,toastId:e})},C.remove=e=>E({type:4,toastId:e}),C.promise=(e,t,s)=>{let a=C.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then((e=>{let r=t.success?x(t.success,e):void 0;return r?C.success(r,{id:a,...s,...null==s?void 0:s.success}):C.dismiss(a),e})).catch((e=>{let r=t.error?x(t.error,e):void 0;r?C.error(r,{id:a,...s,...null==s?void 0:s.error}):C.dismiss(a)})),e};var D=(e,t)=>{E({type:1,toast:{id:e,height:t}})},P=()=>{E({type:5,time:Date.now()})},F=new Map,S=e=>{let{toasts:t,pausedAt:s}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,s]=(0,a.useState)(k),r=(0,a.useRef)(k);(0,a.useEffect)((()=>(r.current!==k&&s(k),N.push(s),()=>{let e=N.indexOf(s);e>-1&&N.splice(e,1)})),[]);let i=t.toasts.map((t=>{var s,a,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:i}}(e);(0,a.useEffect)((()=>{if(s)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(s<0))return setTimeout((()=>C.dismiss(t.id)),s);t.visible&&C.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,s]);let r=(0,a.useCallback)((()=>{s&&E({type:6,time:Date.now()})}),[s]),i=(0,a.useCallback)(((e,s)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=s||{},o=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),n=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<n&&e.visible)).length;return o.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+r),0)}),[t]);return(0,a.useEffect)((()=>{t.forEach((e=>{if(e.dismissed)!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(F.has(e))return;let s=setTimeout((()=>{F.delete(e),E({type:4,toastId:e})}),t);F.set(e,s)}(e.id,e.removeDelay);else{let t=F.get(e.id);t&&(clearTimeout(t),F.delete(e.id))}}))}),[t]),{toasts:t,handlers:{updateHeight:D,startPause:P,endPause:r,calculateOffset:i}}},z=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,I=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,H=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
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
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,M=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,_=y`
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
}`,U=b("div")`
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
    animation: ${_} 0.2s ease-out forwards;
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
`,Z=b("div")`
  position: absolute;
`,B=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,R=e=>{let{toast:t}=e,{icon:s,type:r,iconTheme:i}=t;return void 0!==s?"string"==typeof s?a.createElement(Q,null,s):s:"blank"===r?null:a.createElement(B,null,a.createElement(L,{...i}),"loading"!==r&&a.createElement(Z,null,"error"===r?a.createElement(H,{...i}):a.createElement(U,{...i})))},q=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,G=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,J=b("div")`
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
`,K=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=a.memo((e=>{let{toast:t,position:s,style:r,children:i}=e,o=t.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[q(s),G(s)];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||s||"top-center",t.visible):{opacity:0},n=a.createElement(R,{toast:t}),l=a.createElement(K,{...t.ariaProps},x(t.message,t));return a.createElement(J,{className:t.className,style:{...o,...r,...t.style}},"function"==typeof i?i({icon:n,message:l}):a.createElement(a.Fragment,null,n,l))}));!function(e,t,s,a){c.p=t,f=e,h=s,g=a}(a.createElement);var W=e=>{let{id:t,className:s,style:r,onHeightUpdate:i,children:o}=e,n=a.useCallback((e=>{if(e){let s=()=>{let s=e.getBoundingClientRect().height;i(t,s)};s(),new MutationObserver(s).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return a.createElement("div",{ref:n,className:s,style:r},o)},X=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=e=>{let{reverseOrder:t,position:s="top-center",toastOptions:r,gutter:i,children:o,containerStyle:n,containerClassName:l}=e,{toasts:c,handlers:d}=S(r);return a.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let r=e.position||s,n=((e,t)=>{let s=e.includes("top"),a=s?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...a,...r}})(r,d.calculateOffset(e,{reverseOrder:t,gutter:i,defaultPosition:s}));return a.createElement(W,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?X:"",style:n},"custom"===e.type?x(e.message,e):o?o(e):a.createElement(V,{toast:e,position:r}))})))},te=C},4962:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(5043),r=s(3727),i=s(4562),o=s(5472),n=s(3216),l=s(4228),c=s(3768),d=s(579);const u=()=>{const e=(0,n.Zp)(),[t,s]=(0,a.useState)(null),[u,p]=(0,a.useState)(!0),[m,f]=(0,a.useState)(""),[h,g]=(0,a.useState)(""),[y,b]=(0,a.useState)("");(0,a.useEffect)((()=>{const t=(0,i.hg)(r.j2,(async t=>{if(t)try{await t.getIdToken(!0);const e=(0,o.H9)(r.db,"users",t.uid),a=await(0,o.x7)(e);if(a.exists()){const e=a.data(),[r,i]=(e.displayName||"").split(" ");f(r||""),g(i||""),b(e.email||t.email),s(t)}else c.Ay.error("User data not found.")}catch(a){console.error("Failed to fetch user profile:",a),c.Ay.error("Failed to fetch user profile.")}finally{p(!1)}else e("/sign-in")}));return()=>t()}),[e]);return u?(0,d.jsx)("p",{children:"Loading profile..."}):(0,d.jsxs)("div",{className:"profile-settings",children:[(0,d.jsx)(c.l$,{position:"top-right"}),(0,d.jsxs)("div",{className:"section",children:[(0,d.jsx)("h2",{children:"Personal Information"}),(0,d.jsxs)("div",{className:"settings-container",children:[(0,d.jsxs)("div",{className:"input-group",children:[(0,d.jsx)("label",{htmlFor:"firstName",children:"First Name"}),(0,d.jsx)("input",{type:"text",id:"firstName",placeholder:"Enter your first name",value:m,onChange:e=>f(e.target.value)})]}),(0,d.jsxs)("div",{className:"input-group",children:[(0,d.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),(0,d.jsx)("input",{type:"text",id:"lastName",placeholder:"Enter your last name",value:h,onChange:e=>g(e.target.value)})]}),(0,d.jsxs)("div",{className:"input-group",children:[(0,d.jsx)("label",{htmlFor:"email",children:"Email"}),(0,d.jsx)("input",{type:"email",id:"email",value:y,disabled:!0})]}),(0,d.jsx)("button",{className:"subscribe-button",onClick:async()=>{if(!t)return void c.Ay.error("User is not loaded.");const e=`${m} ${h}`.trim();try{await(0,i.r7)(t,{displayName:e});const s=(0,o.H9)(r.db,"users",t.uid);await(0,o.mZ)(s,{displayName:e}),c.Ay.success("Profile updated successfully!")}catch(s){console.error("Error updating profile:",s),c.Ay.error("Failed to update profile.")}},children:"Save Changes"})]}),(0,d.jsxs)("div",{className:"interface-settings",children:[(0,d.jsx)("h2",{children:"Interface"}),(0,d.jsxs)("div",{className:"toggle-group-container",children:[(0,d.jsxs)("div",{className:"toggle-group",children:[(0,d.jsx)("label",{children:"Dark Mode"}),(0,d.jsx)("div",{className:"filter-button-container",children:(0,d.jsx)(l.A,{})})]}),(0,d.jsxs)("div",{className:"toggle-group",children:[(0,d.jsx)("label",{children:"Language"}),(0,d.jsxs)("div",{className:"filter-button-container",children:[(0,d.jsx)("button",{className:"language-filter-button",children:"EN"}),(0,d.jsx)("button",{className:"language-filter-button",children:"HU"})]})]})]})]}),(0,d.jsxs)("div",{className:"subscription-settings",children:[(0,d.jsx)("h2",{children:"Subscription"}),(0,d.jsxs)("div",{className:"subscription-settings-container",children:[(0,d.jsxs)("p",{children:["Current Package: ",(0,d.jsx)("strong",{children:"Free Plan"})]}),(0,d.jsx)("button",{className:"subscribe-button",children:"Buy Subscription"})]})]}),(0,d.jsxs)("div",{className:"section danger-zone",children:[(0,d.jsx)("h2",{children:"Danger Zone"}),(0,d.jsxs)("div",{className:"danger-actions",children:[(0,d.jsxs)("div",{className:"danger-zone-container",children:[(0,d.jsx)("p",{children:"To reset all your progress, please click the button below."}),(0,d.jsx)("button",{className:"danger-button",onClick:async()=>{try{const e=(0,o.H9)(r.db,"users",t.uid);await(0,o.mZ)(e,{userNotesBank:{},userPreviousTests:[],userPrivateCollectionsBank:[],userQuestionData:{seenQuestions:[],wrongAnswers:[]}}),c.Ay.success("All study data deleted.")}catch(e){console.error("Failed to delete study data:",e),c.Ay.error("Could not delete data.")}},children:"Delete All Study Data"})]}),(0,d.jsxs)("div",{className:"danger-zone-container",children:[(0,d.jsx)("p",{children:"Permanently delete your account."}),(0,d.jsx)("button",{className:"danger-button",onClick:async()=>{try{await(0,o.kd)((0,o.H9)(r.db,"users",t.uid)),await(0,i.hG)(t),c.Ay.success("Your account has been deleted."),e("/sign-up")}catch(s){console.error("Account deletion error:",s),c.Ay.error("Account deletion failed. You may need to re-authenticate.")}},children:"Delete Account"})]})]})]})]})]})}}}]);
//# sourceMappingURL=962.4e7521a5.chunk.js.map