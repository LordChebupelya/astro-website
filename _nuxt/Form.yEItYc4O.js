import{_ as b,s as E,x as g,C as p,v as w,B as h,o as S,c as _,R as O,a1 as $,ag as j}from"./entry.NvCQENbP.js";import{u as A}from"./uid.KLLbMoZc.js";class m extends Error{constructor(n){super(n),this.message=n,Object.setPrototypeOf(this,m.prototype)}}const J=E({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:n,emit:r}){const s=j(`form-${A()}`);g(()=>{s.on(async t=>{var i;t.type!=="submit"&&((i=e.validateOn)!=null&&i.includes(t.type))&&await d(t.path,{silent:!0})})}),p(()=>{s.reset()});const a=w([]);h("form-errors",a),h("form-events",s);const l=w({});h("form-inputs",l);async function f(){let t=await e.validate(e.state);if(e.schema)if(k(e.schema))t=t.concat(await x(e.state,e.schema));else if(B(e.schema))t=t.concat(await Y(e.state,e.schema));else if(C(e.schema))t=t.concat(await P(e.state,e.schema));else if(U(e.schema))t=t.concat(await V(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function d(t,i={silent:!1}){let o=t;if(t&&!Array.isArray(t)&&(o=[t]),o){const u=a.value.filter(c=>!o.includes(c.path)),v=(await f()).filter(c=>o.includes(c.path));a.value=u.concat(v)}else a.value=await f();if(!i.silent&&a.value.length>0)throw new m(`Form validation failed: ${JSON.stringify(a.value,null,2)}`);return e.state}async function y(t){var o;const i=t;try{(o=e.validateOn)!=null&&o.includes("submit")&&await d();const u={...i,data:e.state};r("submit",u)}catch(u){if(!(u instanceof m))throw u;const v={...i,errors:a.value.map(c=>({...c,id:l.value[c.path]}))};r("error",v)}}return n({validate:d,errors:a,setErrors(t,i){a.value=t,i?a.value=a.value.filter(o=>o.path!==i).concat(t):a.value=t},async submit(){await y(new Event("submit"))},getErrors(t){return t?a.value.filter(i=>i.path===t):a.value},clear(t){t?a.value=a.value.filter(i=>i.path!==t):a.value=[]}}),{onSubmit:y}}});function B(e){return e.validate&&e.__isYupSchema__}function F(e){return e.inner!==void 0}async function Y(e,n){try{return await n.validate(e,{abortEarly:!1}),[]}catch(r){if(F(r))return r.inner.map(s=>({path:s.path??"",message:s.message}));throw r}}function k(e){return e.parse!==void 0}async function x(e,n){const r=await n.safeParseAsync(e);return r.success===!1?r.error.issues.map(s=>({path:s.path.join("."),message:s.message})):[]}function C(e){return e.validateAsync!==void 0&&e.id!==void 0}function M(e){return e.isJoi===!0}async function P(e,n){try{return await n.validateAsync(e,{abortEarly:!1}),[]}catch(r){if(M(r))return r.details.map(s=>({path:s.path.join("."),message:s.message}));throw r}}function U(e){return e._parse!==void 0}async function V(e,n){const r=await n._parse(e);return r.issues?r.issues.map(s=>{var a;return{path:((a=s.path)==null?void 0:a.map(l=>l.key).join("."))||"",message:s.message}}):[]}function Z(e,n,r,s,a,l){return S(),_("form",{onSubmit:n[0]||(n[0]=$((...f)=>e.onSubmit&&e.onSubmit(...f),["prevent"]))},[O(e.$slots,"default")],32)}const R=b(J,[["render",Z]]);export{R as default};