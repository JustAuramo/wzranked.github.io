(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{2186:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]/wz2/builds",function(){return r(6687)}])},6687:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y},default:function(){return j}});var a=r(5893),n=r(7294),s=r(9008),l=r.n(s),i=r(5675),o=r.n(i),c=r(1664),u=r.n(c),d=r(6402),m=r(486),p=r(7266),x=r(5154);let f=[{name:"Builds",href:"builds",current:!0}],h=[{name:"Most Recent",key:"createdsortnr",descending:!1}];var b=function(e,t){let r=t.trim(),a=""===r?e:e.filter(e=>e.weapon.toLowerCase().includes(r.toLowerCase()));return a},g=function(e,t,r){let a="All"===r?e:e.filter(e=>e[t].includes(r));return a};function v(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}var y=!0;function j(e){let{dataBuilds:t,dataWeaponTypes:r}=e,s=t[0].displayname+" Warzone 2 Builds - WZ Ranked",i=t[0].displayname+" builds for Warzone 2: "+t.slice(0,5).map((e,t)=>t+1+". "+e.weapon+", ").join("")+"see tuning.",[c,y]=(0,n.useState)(""),[j,N]=(0,n.useState)(h[0]),[w,k]=(0,n.useState)(r[0]),E=b(t,c),R=g(E,"type",w.type);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:s},"title"),(0,a.jsx)("meta",{name:"description",content:i},"description"),(0,a.jsx)("meta",{property:"og:image",content:t[0].avatar})]}),(0,a.jsx)("div",{className:"px-2 py-4",children:(0,a.jsxs)("main",{className:"mx-auto max-w-6xl space-y-4",children:[(0,a.jsx)("div",{className:"md:flex md:items-center md:justify-between md:space-x-5",children:(0,a.jsxs)("div",{className:"flex items-start space-x-5",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(o(),{src:t[0].avatar,width:"64",height:"64",alt:t[0].displayname,unoptimized:!0,className:"rounded-full"}),(0,a.jsx)("span",{className:"absolute inset-0 rounded-full shadow-inner","aria-hidden":"true"})]})}),(0,a.jsxs)("div",{className:"pt-1.5",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-custom-text-primary",children:t[0].displayname}),(0,a.jsxs)(u(),{href:"https://www.youtube.com/".concat(t[0].youtubehandle),className:"flex items-center text-sm font-medium text-custom-text-secondary hover:underline",target:"_blank",children:[(0,a.jsx)(x.V2E,{className:"mr-1","aria-hidden":"true"}),"YouTube"]})]})]})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("nav",{className:"flex space-x-2 rounded-md bg-custom-background-secondary p-1","aria-label":"Tabs",children:f.map(e=>(0,a.jsx)("a",{href:e.href,className:v(e.current?"bg-custom-background-tertiary text-custom-text-primary":"text-custom-text-secondary hover:bg-custom-background-tertiary hover:text-custom-text-primary","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})}),(0,a.jsxs)("section",{className:"space-y-4",children:[(0,a.jsx)("header",{className:"flex items-center justify-between",children:(0,a.jsxs)("h2",{className:"text-xl font-medium leading-6 text-custom-text-primary",children:[t[0].displayname," Warzone 2 Builds"]})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{className:"sr-only",children:"Search a gun"}),(0,a.jsx)("div",{className:"flex rounded-md",children:(0,a.jsxs)("div",{className:"relative flex-grow focus-within:z-10",children:[(0,a.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,a.jsx)(p.Z,{className:"h-5 w-5 text-custom-text-placeholder","aria-hidden":"true"})}),(0,a.jsx)("input",{type:"text",name:"search",id:"search",className:"w-full rounded-md border-custom-separator-opaque bg-custom-background-quaternary pl-10 text-custom-text-primary placeholder:text-custom-text-placeholder focus:border-blue-500 focus:ring-blue-500 sm:text-sm",placeholder:"Search a gun",onChange:e=>y(e.target.value),autocomplete:"off"})]})})]}),(0,a.jsxs)(m.E,{value:w,onChange:k,className:"overflow-x-auto py-2 scrollbar-hide",children:[(0,a.jsxs)(m.E.Label,{className:"sr-only",children:[" ","Choose a gun type"," "]}),(0,a.jsx)("div",{className:"flex space-x-1",children:r.map(e=>(0,a.jsx)(m.E.Option,{value:e,className(e){let{active:t,checked:r}=e;return v(r?"bg-custom-background-tertiary text-custom-text-primary":"bg-custom-background-secondary text-custom-text-secondary hover:bg-custom-background-tertiary hover:text-custom-text-primary","inline-flex cursor-pointer items-center rounded-md py-2 px-3 text-sm font-medium")},children:(0,a.jsx)(m.E.Label,{as:"span",children:e.type})},e.type))})]})]}),(0,a.jsx)("ul",{role:"list",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",children:(j.descending?R.sort((e,t)=>t[j.key]-e[j.key]):R.sort((e,t)=>e[j.key]-t[j.key])).map((e,t)=>(0,a.jsx)("li",{className:"flex flex-col space-y-2",children:(0,a.jsxs)("div",{className:"flex flex-col rounded-md bg-custom-background-secondary p-2",children:[(0,a.jsxs)("div",{className:"flex flex-1 items-center space-x-2 truncate pb-2",children:[(0,a.jsx)(u(),{href:"/".concat(e.username,"/wz2/builds"),className:"flex-shrink-0 hover:brightness-75",tabIndex:-1,children:(0,a.jsx)(o(),{src:e.avatar,width:"32",height:"32",alt:e.displayname,unoptimized:!0,className:"rounded-full"})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"flex",children:(0,a.jsx)(u(),{href:"/".concat(e.username,"/wz2/builds"),prefetch:!1,className:"text-sm text-custom-text-primary hover:underline",children:e.displayname})}),(0,a.jsx)("span",{className:"flex",children:(0,a.jsx)(u(),{href:"/streamers/wz2/builds/"+e.buildid,prefetch:!1,className:"text-xs text-custom-text-secondary hover:underline",children:(0,a.jsx)(d.Z,{date:new Date(e.created_at),suppressHydrationWarning:!0})})})]})]}),(0,a.jsxs)(u(),{href:"/streamers/wz2/builds/"+e.buildid,prefetch:!1,className:"hover:brightness-75",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h2",{className:"text-md font-medium leading-6 text-custom-text-primary",children:e.weapon}),(0,a.jsx)("span",{className:v("inline-flex items-center whitespace-nowrap rounded-md bg-custom-background-tertiary px-2.5 py-0.5 text-sm font-medium","S"===e.type?"text-red-400":"A"===e.type?"text-orange-400":"B"===e.type?"text-orange-300":"C"===e.type?"text-amber-200":"D"===e.type?"text-lime-200":"text-custom-text-secondary"),children:e.type})]}),(0,a.jsx)(o(),{src:"https://wzranked.b-cdn.net/images/mw2/guns/"+e.slug+".png",width:"192",height:"96",alt:e.weapon,priority:t<5,unoptimized:!0,className:"mx-auto"}),(0,a.jsx)("dl",{className:"flex flex-col space-y-1",children:e.modifications.map(e=>e.modification?(0,a.jsxs)("div",{className:"flex justify-between space-x-2",children:[(0,a.jsx)("dt",{className:"truncate text-sm text-custom-text-secondary",children:e.slot}),(0,a.jsx)("dd",{className:"truncate text-sm text-custom-text-primary",children:e.modification})]},e.slot):null)})]})]})},e.buildid))})]})]})})]})}},6402:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(7294);function n(e){let t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;let r=String(e).match(/\d+/g);if(null==r||r.length<=2)return t;{let[a,n,...s]=r.map(e=>parseInt(e)),l=[a,n-1,...s],i=new Date(Date.UTC(...l));return i}}function s(e,t,r){return e+" "+(1!==e?t+"s":t)+" "+r}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let i=604800,o=2592e3,c=31536e3;function u({date:e,formatter:t=s,component:r="time",live:u=!0,minPeriod:d=0,maxPeriod:m=i,title:p,now:x=()=>Date.now(),...f}){let[h,b]=(0,a.useState)(x());(0,a.useEffect)(()=>{if(!u)return;let t=(()=>{let t=n(e).valueOf();if(!t)return console.warn("[react-timeago] Invalid Date provided"),0;let r=Math.round(Math.abs(h-t)/1e3),a=Math.min(Math.max(r<60?1e3:r<3600?6e4:r<86400?36e5:1e3*i,1e3*d),1e3*m);return a?setTimeout(()=>{b(x())},a):0})();return()=>{t&&clearTimeout(t)}},[e,u,m,d,x,h]);let g=n(e).valueOf();if(!g)return null;let v=Math.round(Math.abs(h-g)/1e3),y=g<h?"ago":"from now",[j,N]=v<60?[Math.round(v),"second"]:v<3600?[Math.round(v/60),"minute"]:v<86400?[Math.round(v/3600),"hour"]:v<i?[Math.round(v/86400),"day"]:v<o?[Math.round(v/i),"week"]:v<c?[Math.round(v/o),"month"]:[Math.round(v/c),"year"],w=void 0===p?"string"==typeof e?e:n(e).toISOString().substr(0,16).replace("T"," "):p,k="time"===r?{...f,dateTime:n(e).toISOString()}:f,E=s.bind(null,j,N,y);return a.createElement(r,l({},k,{title:w}),t(j,N,y,g,E,x))}},486:function(e,t,r){"use strict";r.d(t,{E:function(){return M}});var a,n,s=r(7294),l=r(2351),i=r(9946),o=r(2984),c=r(6723),u=r(1363),d=r(4575),m=r(3784),p=r(3781);let x=(0,s.createContext)(null);function f(){let[e,t]=(0,s.useState)([]);return[e.length>0?e.join(" "):void 0,(0,s.useMemo)(()=>function(e){let r=(0,p.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),a=r.indexOf(e);return -1!==a&&r.splice(a,1),r}))),a=(0,s.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return s.createElement(x.Provider,{value:a},e.children)},[t])]}let h=(0,l.yV)(function(e,t){let{passive:r=!1,...a}=e,n=function e(){let t=(0,s.useContext)(x);if(null===t){let r=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return t}(),o=`headlessui-label-${(0,i.M)()}`,u=(0,m.T)(t);(0,c.e)(()=>n.register(o),[o,n.register]);let d={ref:u,...n.props,id:o};return r&&("onClick"in d&&delete d.onClick,"onClick"in a&&delete a.onClick),(0,l.sY)({ourProps:d,theirProps:a,slot:n.slot||{},defaultTag:"label",name:n.name||"Label"})});var b=r(9516),g=r(1591),v=r(6045),y=r(8689),j=r(5466),N=r(1147),w=r(4103),k=((a=k||{})[a.RegisterOption=0]="RegisterOption",a[a.UnregisterOption=1]="UnregisterOption",a);let E={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,d.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),a=e.options.findIndex(e=>e.id===t.id);return -1===a?e:(r.splice(a,1),{...e,options:r})}},R=(0,s.createContext)(null);function O(e,t){return(0,o.E)(t.type,E,e,t)}R.displayName="RadioGroupContext";let T=(0,l.yV)(function(e,t){let{value:r,defaultValue:a,name:n,onChange:o,by:c=(e,t)=>e===t,disabled:x=!1,...h}=e,w=(0,p.z)("string"==typeof c?(e,t)=>(null==e?void 0:e[c])===(null==t?void 0:t[c]):c),[k,E]=(0,s.useReducer)(O,{options:[]}),T=k.options,[C,M]=f(),[S,z]=(0,b.f)(),_=`headlessui-radiogroup-${(0,i.M)()}`,A=(0,s.useRef)(null),P=(0,m.T)(A,t),[D,F]=(0,N.q)(r,o,a),L=(0,s.useMemo)(()=>T.find(e=>!e.propsRef.current.disabled),[T]),I=(0,s.useMemo)(()=>T.some(e=>w(e.propsRef.current.value,D)),[T,D]),G=(0,p.z)(e=>{var t;if(x||w(e,D))return!1;let r=null==(t=T.find(t=>w(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==F||F(e),!0)});(0,g.B)({container:A.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let B=(0,p.z)(e=>{let t=A.current;if(!t)return;let r=(0,j.r)(t),a=T.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case u.R.Enter:(0,y.g)(e.currentTarget);break;case u.R.ArrowLeft:case u.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(a,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){let n=T.find(e=>e.element.current===(null==r?void 0:r.activeElement));n&&G(n.propsRef.current.value)}break;case u.R.ArrowRight:case u.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(a,d.TO.Next|d.TO.WrapAround)===d.fE.Success){let s=T.find(e=>e.element.current===(null==r?void 0:r.activeElement));s&&G(s.propsRef.current.value)}break;case u.R.Space:{e.preventDefault(),e.stopPropagation();let l=T.find(e=>e.element.current===(null==r?void 0:r.activeElement));l&&G(l.propsRef.current.value)}}}),W=(0,p.z)(e=>(E({type:0,...e}),()=>E({type:1,id:e.id}))),V=(0,s.useMemo)(()=>({registerOption:W,firstOption:L,containsCheckedOption:I,change:G,disabled:x,value:D,compare:w}),[W,L,I,G,x,D,w]),Y=(0,s.useMemo)(()=>({value:D}),[D]);return s.createElement(z,{name:"RadioGroup.Description"},s.createElement(M,{name:"RadioGroup.Label"},s.createElement(R.Provider,{value:V},null!=n&&null!=D&&(0,y.t)({[n]:D}).map(([e,t])=>s.createElement(v._,{features:v.A.Hidden,...(0,l.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,l.sY)({ourProps:{ref:P,id:_,role:"radiogroup","aria-labelledby":C,"aria-describedby":S,onKeyDown:B},theirProps:h,slot:Y,defaultTag:"div",name:"RadioGroup"}))))});var C=((n=C||{})[n.Empty=1]="Empty",n[n.Active=2]="Active",n);let M=Object.assign(T,{Option:(0,l.yV)(function(e,t){let r=(0,s.useRef)(null),a=(0,m.T)(r,t),n=`headlessui-radiogroup-option-${(0,i.M)()}`,[o,u]=f(),[d,x]=(0,b.f)(),{addFlag:h,removeFlag:g,hasFlag:v}=function(e=0){let[t,r]=(0,s.useState)(e);return{addFlag:(0,s.useCallback)(e=>r(t=>t|e),[t]),hasFlag:(0,s.useCallback)(e=>Boolean(t&e),[t]),removeFlag:(0,s.useCallback)(e=>r(t=>t&~e),[r]),toggleFlag:(0,s.useCallback)(e=>r(t=>t^e),[r])}}(1),{value:y,disabled:j=!1,...N}=e,k=(0,s.useRef)({value:y,disabled:j});(0,c.e)(()=>{k.current.value=y},[y,k]),(0,c.e)(()=>{k.current.disabled=j},[j,k]);let{registerOption:E,disabled:O,change:T,firstOption:C,containsCheckedOption:M,value:S,compare:z}=function e(t){let r=(0,s.useContext)(R);if(null===r){let a=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,e),a}return r}("RadioGroup.Option");(0,c.e)(()=>E({id:n,element:r,propsRef:k}),[n,E,r,e]);let _=(0,p.z)(e=>{var t;if((0,w.P)(e.currentTarget))return e.preventDefault();T(y)&&(h(2),null==(t=r.current)||t.focus())}),A=(0,p.z)(e=>{if((0,w.P)(e.currentTarget))return e.preventDefault();h(2)}),P=(0,p.z)(()=>g(2)),D=(null==C?void 0:C.id)===n,F=O||j,L=z(S,y),I=(0,s.useMemo)(()=>({checked:L,disabled:F,active:v(2)}),[L,F,v]);return s.createElement(x,{name:"RadioGroup.Description"},s.createElement(u,{name:"RadioGroup.Label"},(0,l.sY)({ourProps:{ref:a,id:n,role:"radio","aria-checked":L?"true":"false","aria-labelledby":o,"aria-describedby":d,"aria-disabled":!!F||void 0,tabIndex:F?-1:L||!M&&D?0:-1,onClick:F?void 0:_,onFocus:F?void 0:A,onBlur:F?void 0:P},theirProps:N,slot:I,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:h,Description:b.d})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2186)}),_N_E=e.O()}]);