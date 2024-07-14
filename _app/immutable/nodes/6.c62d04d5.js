import{s as me,f as E,g as I,h as P,d as p,j as w,i as C,a as U,l as se,c as A,m as ae,v as F,n as ie,x as ce,A as Z,o as Be,e as ve,r as Ue}from"../chunks/scheduler.75b98c01.js";import{S as pe,i as he,b as V,d as L,m as q,a as g,t as b,e as M,g as ee,c as te}from"../chunks/index.f46f469d.js";import{U as Le,g as fe,e as T}from"../chunks/UIcon.87164fb1.js";import{t as Ae,i as be}from"../chunks/projects.a2990e2f.js";import{i as Fe}from"../chunks/skills.f457a0aa.js";import{C as ze}from"../chunks/Chip.b19bf2aa.js";import{c as Ne,g as Re,a as ke}from"../chunks/app.bd1739b0.js";import{C as Te}from"../chunks/Card.a976201c.js";import{C as Ye,a as xe}from"../chunks/ChipIcon.5880a2c7.js";import{C as we}from"../chunks/CardDivider.c389a199.js";import{C as Ge}from"../chunks/CardLogo.9cfe2762.js";import{b as ue}from"../chunks/paths.d5a6c150.js";import{S as He}from"../chunks/SearchPage.38f61cc0.js";function Je(o){let t,r,e;return r=new Le({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=E("a"),V(r.$$.fragment),this.h()},l(l){t=I(l,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=P(t);L(r.$$.fragment,a),a.forEach(p),this.h()},h(){w(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),w(t,"href",o[1]),w(t,"title",o[0]),w(t,"target","_blank"),w(t,"rel","noreferrer"),w(t,"data-help",o[0])},m(l,a){C(l,t,a),q(r,t,null),e=!0},p(l,[a]){(!e||a&2)&&w(t,"href",l[1]),(!e||a&1)&&w(t,"title",l[0]),(!e||a&1)&&w(t,"data-help",l[0])},i(l){e||(g(r.$$.fragment,l),e=!0)},o(l){b(r.$$.fragment,l),e=!1},d(l){l&&p(t),M(r)}}}function Ke(o,t,r){let{label:e}=t,{to:l}=t;return o.$$set=a=>{"label"in a&&r(0,e=a.label),"to"in a&&r(1,l=a.to)},[e,l]}class Oe extends pe{constructor(t){super(),he(this,t,Ke,Je,me,{label:0,to:1})}}function Ce(o,t,r){const e=o.slice();return e[6]=t[r],e}function je(o,t,r){const e=o.slice();return e[9]=t[r],e}function De(o){let t,r;return t=new Oe({props:{label:o[9].label??"",to:o[9].to}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){q(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.label=e[9].label??""),l&1&&(a.to=e[9].to),t.$set(a)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Se(o){return{c:Z,l:Z,m:Z,d:Z}}function ye(o){let t,r;return t=new xe({props:{logo:fe(o[6].logo),name:o[6].name,href:`${ue}/skills/${o[6].slug}`}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){q(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.logo=fe(e[6].logo)),l&1&&(a.name=e[6].name),l&1&&(a.href=`${ue}/skills/${e[6].slug}`),t.$set(a)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Qe(o){let t,r,e,l,a,i,f,s,B,$,_,S=o[0].type+"",u,h,j,k,Y,x,W,X=o[0].shortDescription+"",le,re,z,ne,G,oe,N,H;t=new Ge({props:{alt:o[0].name,src:fe(o[0].logo),size:40,radius:"0"}}),l=new Ye({props:{title:o[0].name}});let J=T(o[0].links),d=[];for(let n=0;n<J.length;n+=1)d[n]=De(je(o,J,n));const qe=n=>b(d[n],1,1,()=>{d[n]=null});s=new we({});let y=o[3]!==o[2]&&Se();G=new we({});let K=T(o[0].skills),v=[];for(let n=0;n<K.length;n+=1)v[n]=ye(Ce(o,K,n));const Me=n=>b(v[n],1,1,()=>{v[n]=null});return{c(){V(t.$$.fragment),r=U(),e=E("div"),V(l.$$.fragment),a=U(),i=E("div");for(let n=0;n<d.length;n+=1)d[n].c();f=U(),V(s.$$.fragment),B=U(),$=E("div"),_=E("p"),u=se(S),h=U(),j=E("p"),k=se(o[1]),Y=U(),x=E("div"),W=E("p"),le=se(X),re=U(),z=E("div"),y&&y.c(),ne=U(),V(G.$$.fragment),oe=U(),N=E("div");for(let n=0;n<v.length;n+=1)v[n].c();this.h()},l(n){L(t.$$.fragment,n),r=A(n),e=I(n,"DIV",{class:!0});var c=P(e);L(l.$$.fragment,c),a=A(c),i=I(c,"DIV",{class:!0});var D=P(i);for(let Q=0;Q<d.length;Q+=1)d[Q].l(D);D.forEach(p),c.forEach(p),f=A(n),L(s.$$.fragment,n),B=A(n),$=I(n,"DIV",{class:!0});var O=P($);_=I(O,"P",{});var m=P(_);u=ae(m,S),m.forEach(p),h=A(O),j=I(O,"P",{});var R=P(j);k=ae(R,o[1]),R.forEach(p),O.forEach(p),Y=A(n),x=I(n,"DIV",{class:!0});var $e=P(x);W=I($e,"P",{class:!0});var _e=P(W);le=ae(_e,X),_e.forEach(p),$e.forEach(p),re=A(n),z=I(n,"DIV",{class:!0});var ge=P(z);y&&y.l(ge),ge.forEach(p),ne=A(n),L(G.$$.fragment,n),oe=A(n),N=I(n,"DIV",{class:!0});var de=P(N);for(let Q=0;Q<v.length;Q+=1)v[Q].l(de);de.forEach(p),this.h()},h(){w(i,"class","row"),w(e,"class","m-t-20px row justify-between items-center"),w($,"class","row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"),w(W,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"),w(x,"class","col sm:h-100px md:h-160px"),w(z,"class","row justify-between text-0.8em font-400"),w(N,"class","row flex-wrap")},m(n,c){q(t,n,c),C(n,r,c),C(n,e,c),q(l,e,null),F(e,a),F(e,i);for(let D=0;D<d.length;D+=1)d[D]&&d[D].m(i,null);C(n,f,c),q(s,n,c),C(n,B,c),C(n,$,c),F($,_),F(_,u),F($,h),F($,j),F(j,k),C(n,Y,c),C(n,x,c),F(x,W),F(W,le),C(n,re,c),C(n,z,c),y&&y.m(z,null),C(n,ne,c),q(G,n,c),C(n,oe,c),C(n,N,c);for(let D=0;D<v.length;D+=1)v[D]&&v[D].m(N,null);H=!0},p(n,c){const D={};c&1&&(D.alt=n[0].name),c&1&&(D.src=fe(n[0].logo)),t.$set(D);const O={};if(c&1&&(O.title=n[0].name),l.$set(O),c&1){J=T(n[0].links);let m;for(m=0;m<J.length;m+=1){const R=je(n,J,m);d[m]?(d[m].p(R,c),g(d[m],1)):(d[m]=De(R),d[m].c(),g(d[m],1),d[m].m(i,null))}for(ee(),m=J.length;m<d.length;m+=1)qe(m);te()}if((!H||c&1)&&S!==(S=n[0].type+"")&&ie(u,S),(!H||c&2)&&ie(k,n[1]),(!H||c&1)&&X!==(X=n[0].shortDescription+"")&&ie(le,X),n[3]!==n[2]?y||(y=Se(),y.c(),y.m(z,null)):y&&(y.d(1),y=null),c&1){K=T(n[0].skills);let m;for(m=0;m<K.length;m+=1){const R=Ce(n,K,m);v[m]?(v[m].p(R,c),g(v[m],1)):(v[m]=ye(R),v[m].c(),g(v[m],1),v[m].m(N,null))}for(ee(),m=K.length;m<v.length;m+=1)Me(m);te()}},i(n){if(!H){g(t.$$.fragment,n),g(l.$$.fragment,n);for(let c=0;c<J.length;c+=1)g(d[c]);g(s.$$.fragment,n),g(G.$$.fragment,n);for(let c=0;c<K.length;c+=1)g(v[c]);H=!0}},o(n){b(t.$$.fragment,n),b(l.$$.fragment,n),d=d.filter(Boolean);for(let c=0;c<d.length;c+=1)b(d[c]);b(s.$$.fragment,n),b(G.$$.fragment,n),v=v.filter(Boolean);for(let c=0;c<v.length;c+=1)b(v[c]);H=!1},d(n){n&&(p(r),p(e),p(f),p(B),p($),p(Y),p(x),p(re),p(z),p(ne),p(oe),p(N)),M(t,n),M(l),ce(d,n),M(s,n),y&&y.d(),M(G,n),ce(v,n)}}}function We(o){let t,r;return t=new Te({props:{color:o[0].color,href:`${ue}/projects/${o[0].slug}`,$$slots:{default:[Qe]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){q(t,e,l),r=!0},p(e,[l]){const a={};l&1&&(a.color=e[0].color),l&1&&(a.href=`${ue}/projects/${e[0].slug}`),l&4111&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Xe(o,t,r){let e,l,a,{project:i}=t;return o.$$set=f=>{"project"in f&&r(0,i=f.project)},o.$$.update=()=>{o.$$.dirty&1&&Ne(i.period.from,i.period.to),o.$$.dirty&1&&`${Re(i.period.from,i.period.to??new Date(Date.now()+1e3*60*60*24))}`,o.$$.dirty&1&&r(3,e=`${ke(i.period.from.getMonth())} ${i.period.from.getFullYear()}`),o.$$.dirty&1&&r(2,l=i.period.to?`${ke(i.period.to.getMonth())} ${i.period.to.getFullYear()}`:"now"),o.$$.dirty&1&&r(1,a=i.role)},[i,a,l,e]}class Ze extends pe{constructor(t){super(),he(this,t,Xe,We,me,{project:0})}}function Ee(o,t,r){const e=o.slice();return e[7]=t[r],e}function Ie(o,t,r){const e=o.slice();return e[10]=t[r],e}function et(o){let t=o[10].name+"",r;return{c(){r=se(t)},l(e){r=ae(e,t)},m(e,l){C(e,r,l)},p(e,l){l&1&&t!==(t=e[10].name+"")&&ie(r,t)},d(e){e&&p(r)}}}function Pe(o){let t,r;function e(){return o[5](o[10])}return t=new ze({props:{active:o[10].isSelected,classes:"text-0.8em",$$slots:{default:[et]},$$scope:{ctx:o}}}),t.$on("click",e),{c(){V(t.$$.fragment)},l(l){L(t.$$.fragment,l)},m(l,a){q(t,l,a),r=!0},p(l,a){o=l;const i={};a&1&&(i.active=o[10].isSelected),a&8193&&(i.$$scope={dirty:a,ctx:o}),t.$set(i)},i(l){r||(g(t.$$.fragment,l),r=!0)},o(l){b(t.$$.fragment,l),r=!1},d(l){M(t,l)}}}function tt(o){let t,r,e=T(o[1]),l=[];for(let i=0;i<e.length;i+=1)l[i]=Ve(Ee(o,e,i));const a=i=>b(l[i],1,1,()=>{l[i]=null});return{c(){t=E("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=I(i,"DIV",{class:!0});var f=P(t);for(let s=0;s<l.length;s+=1)l[s].l(f);f.forEach(p),this.h()},h(){w(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,f){C(i,t,f);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);r=!0},p(i,f){if(f&2){e=T(i[1]);let s;for(s=0;s<e.length;s+=1){const B=Ee(i,e,s);l[s]?(l[s].p(B,f),g(l[s],1)):(l[s]=Ve(B),l[s].c(),g(l[s],1),l[s].m(t,null))}for(ee(),s=e.length;s<l.length;s+=1)a(s);te()}},i(i){if(!r){for(let f=0;f<e.length;f+=1)g(l[f]);r=!0}},o(i){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)b(l[f]);r=!1},d(i){i&&p(t),ce(l,i)}}}function lt(o){let t,r,e,l,a="Could not find anything...",i;return r=new Le({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=E("div"),V(r.$$.fragment),e=U(),l=E("p"),l.textContent=a,this.h()},l(f){t=I(f,"DIV",{class:!0});var s=P(t);L(r.$$.fragment,s),e=A(s),l=I(s,"P",{class:!0,"data-svelte-h":!0}),Ue(l)!=="svelte-1jyyf6v"&&(l.textContent=a),s.forEach(p),this.h()},h(){w(l,"class","font-300"),w(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,s){C(f,t,s),q(r,t,null),F(t,e),F(t,l),i=!0},p:Z,i(f){i||(g(r.$$.fragment,f),i=!0)},o(f){b(r.$$.fragment,f),i=!1},d(f){f&&p(t),M(r)}}}function Ve(o){let t,r;return t=new Ze({props:{project:o[7]}}),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){q(t,e,l),r=!0},p(e,l){const a={};l&2&&(a.project=e[7]),t.$set(a)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function rt(o){let t,r,e,l,a,i,f=T(o[0]),s=[];for(let u=0;u<f.length;u+=1)s[u]=Pe(Ie(o,f,u));const B=u=>b(s[u],1,1,()=>{s[u]=null}),$=[lt,tt],_=[];function S(u,h){return u[1].length===0?0:1}return e=S(o),l=_[e]=$[e](o),{c(){t=E("div");for(let u=0;u<s.length;u+=1)s[u].c();r=U(),l.c(),a=ve(),this.h()},l(u){t=I(u,"DIV",{class:!0});var h=P(t);for(let j=0;j<s.length;j+=1)s[j].l(h);h.forEach(p),r=A(u),l.l(u),a=ve(),this.h()},h(){w(t,"class","projects-filters")},m(u,h){C(u,t,h);for(let j=0;j<s.length;j+=1)s[j]&&s[j].m(t,null);C(u,r,h),_[e].m(u,h),C(u,a,h),i=!0},p(u,h){if(h&5){f=T(u[0]);let k;for(k=0;k<f.length;k+=1){const Y=Ie(u,f,k);s[k]?(s[k].p(Y,h),g(s[k],1)):(s[k]=Pe(Y),s[k].c(),g(s[k],1),s[k].m(t,null))}for(ee(),k=f.length;k<s.length;k+=1)B(k);te()}let j=e;e=S(u),e===j?_[e].p(u,h):(ee(),b(_[j],1,1,()=>{_[j]=null}),te(),l=_[e],l?l.p(u,h):(l=_[e]=$[e](u),l.c()),g(l,1),l.m(a.parentNode,a))},i(u){if(!i){for(let h=0;h<f.length;h+=1)g(s[h]);g(l),i=!0}},o(u){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)b(s[h]);b(l),i=!1},d(u){u&&(p(t),p(r),p(a)),ce(s,u),_[e].d(u)}}}function nt(o){let t,r;return t=new He({props:{title:Ae,$$slots:{default:[rt]},$$scope:{ctx:o}}}),t.$on("search",o[3]),{c(){V(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){q(t,e,l),r=!0},p(e,[l]){const a={};l&8195&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function ot(o,t,r){let e=Fe.filter($=>be.some(_=>_.skills.some(S=>S.slug===$.slug))),l="",a=[];const i=$=>e.some(_=>_.slug===$&&_.isSelected),f=$=>{r(0,e=e.map(_=>(_.slug===$&&(_.isSelected=!i($)),_)))},s=$=>{r(4,l=$.detail.search)};Be(()=>{if(location.search){const S=new URLSearchParams(location.search).get("item");S&&r(4,l=S)}});const B=$=>f($.slug);return o.$$.update=()=>{o.$$.dirty&17&&r(1,a=be.filter($=>{const _=e.every(u=>!u.isSelected)||$.skills.some(u=>e.some(h=>h.isSelected&&h.slug===u.slug)),S=l.trim().length===0||$.name.trim().toLowerCase().includes(l.trim().toLowerCase());return _&&S}))},[e,a,f,s,l,B]}class vt extends pe{constructor(t){super(),he(this,t,ot,nt,me,{})}}export{vt as component};
