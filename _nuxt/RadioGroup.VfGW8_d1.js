import{r as k,_ as O}from"./Radio.BTIVvXaL.js";import{_ as U,H as R,I as l,s as z,L as b,M as n,C as B,r as G,o as r,c as i,a as j,P as y,S as v,d as w,t as F,a1 as N,F as _,O as P,T as h,U as C,Q as T,w as I,ao as o}from"./entry.D_YslezS.js";import{u as L}from"./useFormGroup.IQBYwZfZ.js";import"./id.OO1RJ1Kh.js";const D={wrapper:"relative flex items-start",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},d=R(l.ui.strategy,l.ui.radioGroup,D),E=R(l.ui.strategy,l.ui.radio,k),H=z({components:{URadio:O},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return l.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:s}){const{ui:m,attrs:c}=b("radioGroup",n(e,"ui"),d,n(e,"class")),{ui:g}=b("radio",n(e,"uiRadio"),E),{emitFormChange:p,color:u,name:t}=L(e,d);B("radio-group",{color:u,name:t});const f=a=>{s("update:modelValue",a),s("change",a),p()},S=a=>o(a,e.valueAttribute,o(a,e.optionAttribute)),A=a=>o(a,e.optionAttribute,o(a,e.valueAttribute)),V=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:S(a),label:A(a)},$=G(()=>e.options.map(a=>V(a)));return{ui:m,uiRadio:g,attrs:c,normalizedOptions:$,onUpdate:f}}});function M(e,s,m,c,g,p){const u=O;return r(),i("div",{class:y(e.ui.wrapper)},[j("fieldset",h(C(e.attrs)),[e.legend||e.$slots.legend?(r(),i("legend",{key:0,class:y(e.ui.legend)},[v(e.$slots,"legend",{},()=>[w(F(e.legend),1)])],2)):N("",!0),(r(!0),i(_,null,P(e.normalizedOptions,t=>(r(),T(u,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,help:t.help,disabled:t.disabled||e.disabled,ui:e.uiRadio,onChange:f=>e.onUpdate(t.value)},{label:I(()=>[v(e.$slots,"label",h(C({option:t})))]),_:2},1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const W=U(H,[["render",M]]);export{W as default};