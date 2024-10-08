import{a as v,r as l,g as b,i as N,h as y,j as e,L as P,b as k,_ as s,c as C}from"./index-BhtxJkHA.js";import{i as S}from"./login-Bsdcv5bL.js";const L=v(()=>{const[o,x]=l.useState(""),[n,h]=l.useState(""),[c,d]=l.useState(!1),a=b(),[p]=N(),i=p.get("token"),{root:{auth:u}}=y();l.useEffect(()=>{i||a("/login")},[i,a]);const w=async r=>(await C.post("https://api.kafsco.com/api/v1/users/reset-password",{password:r},{headers:{Authorization:`Bearer ${i}`}})).data;l.useEffect(()=>{u.isAuthenticated&&a("/")},[u.isAuthenticated,a]);const f=r=>{const{name:t,value:m}=r.target;switch(t){case"password":x(m);break;case"confirmPassword":h(m);break}},g=()=>!o||!n?(s.error("Both fields are required*."),!1):o!==n?(s.error("Passwords do not match."),!1):o.length<6?(s.error("Password must be at least 6 characters long."),!1):!0,j=async r=>{if(r.preventDefault(),!!g()){d(!0);try{await w(n),s.success("password changed successfully"),a("/login")}catch(t){t.response&&t.response.status===400?s.error("Invalid request. Please try again."):s.error("An error occurred during the password reset. Please try again later.")}finally{d(!1)}}};return e.jsxs("div",{className:"md:flex w-full justify-between",children:[e.jsx("div",{className:"h-screen flex justify-center w-full bg-white",children:e.jsx("div",{className:"flex justify-center h-full w-full",children:e.jsxs("form",{onSubmit:j,className:"h-full flex flex-col justify-center gap-6 w-[25rem]",children:[e.jsxs("div",{className:"flex flex-col gap-2 text-center items-center",children:[e.jsx("img",{src:"/logo-nobg.png",alt:"logo",className:"max-h-[10vh] max-w-[40vw]"}),e.jsx("h1",{className:"text-3xl font-bold",children:"Reset Password"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{children:e.jsx("input",{type:"password",name:"password",value:o,placeholder:"Password *",id:"password",className:"w-full border p-2 rounded",onChange:f,disabled:c})}),e.jsx("div",{children:e.jsx("input",{type:"password",name:"confirmPassword",value:n,placeholder:"Confirm Password *",id:"confirmPassword",className:"w-full border p-2 rounded",onChange:f,disabled:c})})]}),e.jsx("div",{className:"text-[1rem] w-full flex flex-col gap-1 justify-center items-center",children:e.jsxs("button",{type:"submit",disabled:c,className:"flex w-[100%] items-center justify-center gap-4 bg-black text-white font-bold py-2 px-4 rounded",children:["Continue",c&&e.jsx(P,{className:"size-4 animate-spin"})]})}),e.jsxs("div",{className:"flex w-full justify-around gap-2 items-center",children:[e.jsx("div",{className:"h-[2px] w-full bg-black"}),e.jsx("div",{className:"text-center",children:"or"}),e.jsx("div",{className:"w-full h-[2px] bg-black"})]}),e.jsxs("div",{className:"text-[0.9rem]",children:["Need Help?",e.jsxs(k,{to:"/contactus",className:"text-[#8C3E87]",children:[" ","Contact Us"]})]})]})})}),e.jsx("div",{className:"md:block hidden w-[70vw] md:w-full",children:e.jsx("img",{src:S,className:"h-screen w-full object-cover",alt:""})})]})});export{L as default};
