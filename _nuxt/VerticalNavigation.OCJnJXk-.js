import{_ as B,G as V,H as b,s as P,J as m,Y as k,ax as h,K as D,L as p,r as J,ay as K,Z as M,$ as O,o as r,c as i,F as v,N as f,V as n,b as S,w as j,R as l,P as u,a0 as t,O as y,d as F,t as R,Q as E}from"./entry.NvCQENbP.js";import w from"./Badge.cAtN6FV3.js";import U from"./Divider.AsxE_b9t.js";const G={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},H=V(b.ui.strategy,b.ui.verticalNavigation,G),I=P({components:{UIcon:m,UAvatar:k,UBadge:w,ULink:h,UDivider:U},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:d}=D("verticalNavigation",p(e,"ui"),H,p(e,"class")),g=J(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:o,attrs:d,sections:g,getULinkProps:K,twMerge:M,twJoin:O}}}),Q={key:0,class:"sr-only"};function T(e,o,d,g,Y,Z){const $=k,C=m,z=w,N=h,_=U;return r(),i("nav",n({class:e.ui.wrapper},e.attrs),[(r(!0),i(v,null,f(e.sections,(A,c)=>(r(),i("ul",{key:`section${c}`},[(r(!0),i(v,null,f(A,(a,L)=>(r(),i("li",{key:`section${c}-${L}`},[S(N,n(e.getULinkProps(a),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:o[0]||(o[0]=E(s=>s.target.blur(),["enter"]))}),{default:j(({isActive:s})=>[l(e.$slots,"avatar",{link:a,isActive:s},()=>[a.avatar?(r(),u($,n({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):t("",!0)]),l(e.$slots,"icon",{link:a,isActive:s},()=>[a.icon?(r(),u(C,{key:0,name:a.icon,class:y(e.twMerge(e.twJoin(e.ui.icon.base,s?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):t("",!0)]),l(e.$slots,"default",{link:a,isActive:s},()=>[a.label?(r(),i("span",{key:0,class:y(e.twMerge(e.ui.label,a.labelClass))},[s?(r(),i("span",Q," Current page: ")):t("",!0),F(" "+R(a.label),1)],2)):t("",!0)]),l(e.$slots,"badge",{link:a,isActive:s},()=>[a.badge?(r(),u(z,n({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):t("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),c<e.sections.length-1?(r(),u(_,{key:0,ui:e.ui.divider},null,8,["ui"])):t("",!0)]))),128))],16)}const x=B(I,[["render",T]]);export{x as default};