import{k as u,l as C,s as p,r as m,n as x,t as f,m as l,j as e,d as h,y as g}from"./index-BhtxJkHA.js";import{c as j}from"./index-BMBbtaCK.js";import{P as v}from"./Paper-28kvjovC.js";function N(s){return C("MuiCard",s)}u("MuiCard",["root"]);const w=["className","raised"],R=s=>{const{classes:t}=s;return g({root:["root"]},N,t)},y=p(v,{name:"MuiCard",slot:"Root",overridesResolver:(s,t)=>t.root})(()=>({overflow:"hidden"})),M=m.forwardRef(function(t,r){const o=x({props:t,name:"MuiCard"}),{className:c,raised:a=!1}=o,d=f(o,w),n=l({},o,{raised:a}),i=R(n);return e.jsx(y,l({className:h(i.root,c),elevation:a?8:void 0,ref:r,ownerState:n},d))});function b(s){return C("MuiCardContent",s)}u("MuiCardContent",["root"]);const U=["className","component"],P=s=>{const{classes:t}=s;return g({root:["root"]},b,t)},_=p("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(s,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),k=m.forwardRef(function(t,r){const o=x({props:t,name:"MuiCardContent"}),{className:c,component:a="div"}=o,d=f(o,U),n=l({},o,{component:a}),i=P(n);return e.jsx(_,l({as:a,className:h(i.root,c),ownerState:n,ref:r},d))}),$=({title:s,onSaveChanges:t,children:r,className:o})=>e.jsx(M,{className:"max-w-6xl",sx:{borderRadius:4,backgroundColor:"transparent"},children:e.jsx(k,{children:e.jsxs("div",{className:"flex w-full flex-col gap-6",children:[e.jsxs("div",{className:j("px-4 max-w-4xl flex flex-col gap-10",o),children:[s&&e.jsx(S,{children:s}),r]}),e.jsx("button",{className:"bg-[#60769D] py-2 px-2 rounded-lg w-fit text-white place-self-center uppercase text-sm",onClick:t,children:"Save changes"})]})})}),S=({children:s,className:t})=>e.jsx("h3",{className:j("text-2xl font-semibold",t),children:s});export{S as C,$ as F};
