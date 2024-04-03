import{_ as A,H as L,I as b,s as _,K as y,$ as k,aF as h,L as B,M as p,r as M,aG as P,a0 as S,a1 as j,o as t,c as s,F as v,P as m,X as n,Q as l,b as F,w as I,T as u,R as c,a2 as o,d as K,t as V,S as H}from"./Dxg1tV5G.js";import w from"./D6IyEwsn.js";const J={wrapper:"relative w-full flex items-center justify-between",container:"flex items-center min-w-0",inner:"min-w-0",base:"group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",before:"before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",after:"after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",active:"text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"}},O=L(b.ui.strategy,b.ui.horizontalNavigation,J),R=_({components:{UIcon:y,UAvatar:k,UBadge:w,ULink:h},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:g}=B("horizontalNavigation",p(e,"ui"),O,p(e,"class")),f=M(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:i,attrs:g,sections:f,getULinkProps:P,twMerge:S,twJoin:j}}}),T={key:0,class:"sr-only"};function D(e,i,g,f,E,G){const $=k,z=y,C=w,U=h;return t(),s("nav",n({class:e.ui.wrapper},e.attrs),[(t(!0),s(v,null,m(e.sections,(N,d)=>(t(),s("ul",{key:`section${d}`,class:l(e.ui.container)},[(t(!0),s(v,null,m(N,(a,x)=>(t(),s("li",{key:`section${d}-${x}`,class:l(e.ui.inner)},[F(U,n(e.getULinkProps(a),{class:[e.ui.base,e.ui.before,e.ui.after],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:i[0]||(i[0]=H(r=>r.target.blur(),["enter"]))}),{default:I(({isActive:r})=>[u(e.$slots,"avatar",{link:a,isActive:r},()=>[a.avatar?(t(),c($,n({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):o("",!0)]),u(e.$slots,"icon",{link:a,isActive:r},()=>[a.icon?(t(),c(z,{key:0,name:a.icon,class:l(e.twMerge(e.twJoin(e.ui.icon.base,r?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):o("",!0)]),u(e.$slots,"default",{link:a,isActive:r},()=>[a.label?(t(),s("span",{key:0,class:l(e.twMerge(e.ui.label,a.labelClass))},[r?(t(),s("span",T," Current page: ")):o("",!0),K(" "+V(a.label),1)],2)):o("",!0)]),u(e.$slots,"badge",{link:a,isActive:r},()=>[a.badge?(t(),c(C,n({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):o("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])],2))),128))],2))),128))],16)}const q=A(R,[["render",D]]);export{q as default};
