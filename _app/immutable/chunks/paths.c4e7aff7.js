import{A as c,s as p}from"./scheduler.98dcdc08.js";const e=[];function q(i,l=c){let n;const o=new Set;function r(t){if(p(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,u)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:_}}var a;const h=((a=globalThis.__sveltekit_1w6apqu)==null?void 0:a.base)??"";var f;const d=((f=globalThis.__sveltekit_1w6apqu)==null?void 0:f.assets)??h;export{d as a,h as b,q as w};
