import{r as o,f,u as C,j as e,b as E,c as x,A as m}from"./index-BhtxJkHA.js";import{E as N}from"./EventCard-yQMs0_jT.js";import"./index-BMBbtaCK.js";import"./dialog-R0ziYrf0.js";import"./x-C3V0CQLz.js";import"./useMutation-Dfw8XY20.js";const A=async a=>(await x.get(`${m.events.fetchAllEvents}?category=${a}`)).data.data,I=async()=>(await x.get(m.categories.getAllCategories)).data.data;function W(){const[a,i]=o.useState(0),[d,p]=o.useState(!0),[g,v]=o.useState(!1),{data:l}=f({queryKey:["categoriesQuery"],queryFn:I}),{categoryId:n}=C(),{data:h}=f({queryKey:["categories",n,"fetchAllEvents"],queryFn:()=>A(n)});o.useEffect(()=>{c.current&&i(c.current.offsetWidth+16)},[l]),o.useEffect(()=>{const t=()=>{if(s.current){const{scrollLeft:u,scrollWidth:b,clientWidth:j}=s.current;p(u===0),v(u+j>=b)}},r=s.current;return r&&(r.addEventListener("scroll",t),t()),()=>{r&&r.removeEventListener("scroll",t)}},[l]);const y=()=>{s.current&&s.current.scrollBy({left:-a,behavior:"smooth"})},w=()=>{s.current&&s.current.scrollBy({left:a,behavior:"smooth"})},s=o.useRef(null),c=o.useRef(null);return e.jsx("div",{className:"lg:px-[5%] xl:px-[7%] px-[8vw] min-h-[80vh]",children:e.jsxs("div",{className:"flex flex-col gap-2 pb-10",children:[" ",e.jsxs("div",{className:"relative w-full",children:[e.jsx("button",{onClick:y,disabled:d,className:`absolute -left-7 top-0 bottom-0 z-10 bg-white shadow-md h-full px-2 opacity-75 hover:opacity-100 ${d?"hidden":""}`,style:{zIndex:1},children:"<"}),e.jsx("div",{ref:s,className:"flex w-full gap-4 overflow-x-auto hide-scrollbar",style:{scrollBehavior:"smooth"},children:l&&l.map((t,r)=>e.jsx("a",{href:`/categories/${t.categoryId}`,ref:r===0?c:null,className:`text-center whitespace-nowrap min-w-[9rem] h-10 py-2 px-4  flex items-center justify-center rounded-full font-medium border-2 bg-[white] text-gray-800 transition-colors duration-200 hover:bg-[#60769e] hover:text-white max-w-[280px] ${t.categoryId==n?"bg-[#446ebc] text-white ":""}`,children:e.jsxs("div",{children:[" ",t.categoryName]})},t.categoryId))}),e.jsx("button",{onClick:w,className:`absolute -right-7 top-0 bottom-0 z-10 bg-white shadow-md h-full px-2 opacity-75 hover:opacity-100 ${g?"hidden":""}`,style:{zIndex:1},children:">"})]}),e.jsx("div",{className:"flex justify-between mt-4",children:e.jsxs("div",{className:"font-medium lg:text-[1.4rem] text-[0.9rem] flex items-center gap-4",children:[" ",e.jsxs(E,{to:"/filter",children:[" ",e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"size-5",children:e.jsx("path",{d:"M14.6663 3.8335H7.16634M9.66634 12.1668H2.16634M9.66634 12.1668C9.66634 13.5475 10.7856 14.6668 12.1663 14.6668C13.5471 14.6668 14.6663 13.5475 14.6663 12.1668C14.6663 10.7861 13.5471 9.66683 12.1663 9.66683C10.7856 9.66683 9.66634 10.7861 9.66634 12.1668ZM6.33301 3.8335C6.33301 5.21421 5.21372 6.3335 3.83301 6.3335C2.4523 6.3335 1.33301 5.21421 1.33301 3.8335C1.33301 2.45278 2.4523 1.3335 3.83301 1.3335C5.21372 1.3335 6.33301 2.45278 6.33301 3.8335Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})]}),"Events"]})}),e.jsx("div",{className:"w-full flex flex-wrap gap-4",children:h&&h.upcomingEvents.map((t,r)=>e.jsx(N,{...t},r))})]})})}export{W as default};
