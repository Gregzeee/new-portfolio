import{i as xe,t as oe}from"../chunks/experience.058cfe28.js";import{s as ke,a as y,f as w,c as T,g as E,h as D,d as _,j as C,i as P,v as $,r as de,A as he,l as N,m as U,n as J,x as ce}from"../chunks/scheduler.75b98c01.js";import{S as we,i as Ee,b as S,d as M,m as j,t as k,c as Y,a as x,e as A,g as Z}from"../chunks/index.f46f469d.js";import{g as ee,U as ne,e as X}from"../chunks/UIcon.87164fb1.js";import{b as fe}from"../chunks/paths.d5a6c150.js";import{g as ue,M as Ce}from"../chunks/app.bd1739b0.js";import{C as De}from"../chunks/CardLogo.9cfe2762.js";import{B as Ie,M as Ve}from"../chunks/Banner.cfe2ce06.js";import{T as ye}from"../chunks/TabTitle.42d7f735.js";import{C as ge}from"../chunks/Chip.b19bf2aa.js";import{C as Te}from"../chunks/CardDivider.c389a199.js";function Pe({params:o}){if(o.slug)return{experience:xe.find(l=>l.slug===o.slug)}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));function pe(o,e,l){const t=o.slice();return t[2]=e[l],t}function me(o,e,l){const t=o.slice();return t[2]=e[l],t}function Se(o){let e,l,t,r,n,f,a,s;l=new Ie({props:{img:ee(o[0].experience.logo),$$slots:{default:[Ne]},$$scope:{ctx:o}}});const m=[ze,Ue],i=[];function b(d,v){return d[0].experience.description?0:1}return f=b(o),a=i[f]=m[f](o),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("div"),n=w("div"),a.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=D(e);M(l.$$.fragment,v),t=T(v),r=E(v,"DIV",{class:!0});var B=D(r);n=E(B,"DIV",{class:!0});var V=D(n);a.l(V),V.forEach(_),B.forEach(_),v.forEach(_),this.h()},h(){C(n,"class","px-10px m-y-5"),C(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){P(d,e,v),j(l,e,null),$(e,t),$(e,r),$(r,n),i[f].m(n,null),s=!0},p(d,v){const B={};v&1&&(B.img=ee(d[0].experience.logo)),v&129&&(B.$$scope={dirty:v,ctx:d}),l.$set(B);let V=f;f=b(d),f===V?i[f].p(d,v):(Z(),k(i[V],1,1,()=>{i[V]=null}),Y(),a=i[f],a?a.p(d,v):(a=i[f]=m[f](d),a.c()),x(a,1),a.m(n,null))},i(d){s||(x(l.$$.fragment,d),x(a),s=!0)},o(d){k(l.$$.fragment,d),k(a),s=!1},d(d){d&&_(e),A(l),i[f].d()}}}function Me(o){let e,l,t,r,n="Could not load experience data...",f;return l=new ne({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("p"),r.textContent=n,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=D(e);M(l.$$.fragment,s),t=T(s),r=E(s,"P",{class:!0,"data-svelte-h":!0}),de(r)!=="svelte-1o82fhi"&&(r.textContent=n),s.forEach(_),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,s){P(a,e,s),j(l,e,null),$(e,t),$(e,r),f=!0},p:he,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&_(e),A(l)}}}function je(o){let e=o[0].experience.name+"",l;return{c(){l=N(e)},l(t){l=U(t,e)},m(t,r){P(t,l,r)},p(t,r){r&1&&e!==(e=t[0].experience.name+"")&&J(l,e)},d(t){t&&_(l)}}}function Ae(o){let e,l,t,r,n=o[2].label+"",f,a,s;return l=new ne({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("span"),f=N(n),a=y(),this.h()},l(m){e=E(m,"DIV",{class:!0});var i=D(e);M(l.$$.fragment,i),t=T(i),r=E(i,"SPAN",{});var b=D(r);f=U(b,n),b.forEach(_),i.forEach(_),a=T(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,i){P(m,e,i),j(l,e,null),$(e,t),$(e,r),$(r,f),P(m,a,i),s=!0},p(m,i){(!s||i&1)&&n!==(n=m[2].label+"")&&J(f,n)},i(m){s||(x(l.$$.fragment,m),s=!0)},o(m){k(l.$$.fragment,m),s=!1},d(m){m&&(_(e),_(a)),A(l)}}}function $e(o){let e,l;return e=new ge({props:{href:o[2].to,$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=t[2].to),r&129&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Be(o){let e,l,t,r=o[2].name+"",n,f,a;return e=new De({props:{src:ee(o[2].logo),alt:o[2].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),l=y(),t=w("span"),n=N(r),f=y(),this.h()},l(s){M(e.$$.fragment,s),l=T(s),t=E(s,"SPAN",{class:!0});var m=D(t);n=U(m,r),m.forEach(_),f=T(s),this.h()},h(){C(t,"class","text-[0.9em]")},m(s,m){j(e,s,m),P(s,l,m),P(s,t,m),$(t,n),P(s,f,m),a=!0},p(s,m){const i={};m&1&&(i.src=ee(s[2].logo)),m&1&&(i.alt=s[2].name),e.$set(i),(!a||m&1)&&r!==(r=s[2].name+"")&&J(n,r)},i(s){a||(x(e.$$.fragment,s),a=!0)},o(s){k(e.$$.fragment,s),a=!1},d(s){s&&(_(l),_(t),_(f)),A(e,s)}}}function _e(o){let e,l;return e=new ge({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${o[2].slug}`,$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=`${fe}/skills/${t[2].slug}`),r&129&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Ne(o){let e,l,t,r,n,f=o[0].experience.company+"",a,s,m=o[0].experience.location+"",i,b,d=o[0].experience.type+"",v,B,V,Q=ue(o[0].experience.period.from,o[0].experience.period.to)+"",W,te,K,O,le,q,re,R,z;t=new Ce({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),O=new Te({});let F=X(o[0].experience.links),h=[];for(let c=0;c<F.length;c+=1)h[c]=$e(me(o,F,c));const ve=c=>k(h[c],1,1,()=>{h[c]=null});let G=X(o[0].experience.skills),g=[];for(let c=0;c<G.length;c+=1)g[c]=_e(pe(o,G,c));const be=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),S(t.$$.fragment),r=y(),n=w("p"),a=N(f),s=N(" · "),i=N(m),b=N(" · "),v=N(d),B=y(),V=w("p"),W=N(Q),te=y(),K=w("div"),S(O.$$.fragment),le=y(),q=w("div");for(let c=0;c<h.length;c+=1)h[c].c();re=y(),R=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=D(e);l=E(u,"DIV",{class:!0});var I=D(l);M(t.$$.fragment,I),I.forEach(_),r=T(u),n=E(u,"P",{class:!0});var p=D(n);a=U(p,f),s=U(p," · "),i=U(p,m),b=U(p," · "),v=U(p,d),p.forEach(_),B=T(u),V=E(u,"P",{class:!0});var L=D(V);W=U(L,Q),L.forEach(_),te=T(u),K=E(u,"DIV",{class:!0});var se=D(K);M(O.$$.fragment,se),se.forEach(_),le=T(u),q=E(u,"DIV",{class:!0});var ae=D(q);for(let H=0;H<h.length;H+=1)h[H].l(ae);ae.forEach(_),re=T(u),R=E(u,"DIV",{class:!0});var ie=D(R);for(let H=0;H<g.length;H+=1)g[H].l(ie);ie.forEach(_),u.forEach(_),this.h()},h(){C(l,"class","text-0.9em"),C(n,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(K,"class","w-75%"),C(q,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(R,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){P(c,e,u),$(e,l),j(t,l,null),$(e,r),$(e,n),$(n,a),$(n,s),$(n,i),$(n,b),$(n,v),$(e,B),$(e,V),$(V,W),$(e,te),$(e,K),j(O,K,null),$(e,le),$(e,q);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(q,null);$(e,re),$(e,R);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(R,null);z=!0},p(c,u){const I={};if(u&129&&(I.$$scope={dirty:u,ctx:c}),t.$set(I),(!z||u&1)&&f!==(f=c[0].experience.company+"")&&J(a,f),(!z||u&1)&&m!==(m=c[0].experience.location+"")&&J(i,m),(!z||u&1)&&d!==(d=c[0].experience.type+"")&&J(v,d),(!z||u&1)&&Q!==(Q=ue(c[0].experience.period.from,c[0].experience.period.to)+"")&&J(W,Q),u&1){F=X(c[0].experience.links);let p;for(p=0;p<F.length;p+=1){const L=me(c,F,p);h[p]?(h[p].p(L,u),x(h[p],1)):(h[p]=$e(L),h[p].c(),x(h[p],1),h[p].m(q,null))}for(Z(),p=F.length;p<h.length;p+=1)ve(p);Y()}if(u&1){G=X(c[0].experience.skills);let p;for(p=0;p<G.length;p+=1){const L=pe(c,G,p);g[p]?(g[p].p(L,u),x(g[p],1)):(g[p]=_e(L),g[p].c(),x(g[p],1),g[p].m(R,null))}for(Z(),p=G.length;p<g.length;p+=1)be(p);Y()}},i(c){if(!z){x(t.$$.fragment,c),x(O.$$.fragment,c);for(let u=0;u<F.length;u+=1)x(h[u]);for(let u=0;u<G.length;u+=1)x(g[u]);z=!0}},o(c){k(t.$$.fragment,c),k(O.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);z=!1},d(c){c&&_(e),A(t),A(O),ce(h,c),ce(g,c)}}}function Ue(o){let e,l,t,r,n="No description...",f;return l=new ne({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("p"),r.textContent=n,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=D(e);M(l.$$.fragment,s),t=T(s),r=E(s,"P",{class:!0,"data-svelte-h":!0}),de(r)!=="svelte-kl0ixf"&&(r.textContent=n),s.forEach(_),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,s){P(a,e,s),j(l,e,null),$(e,t),$(e,r),f=!0},p:he,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&_(e),A(l)}}}function ze(o){let e,l;return e=new Ve({props:{content:o[0].experience.description??"This place is yet to be filled..."}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Le(o){let e,l,t,r,n,f;e=new ye({props:{title:o[1]}});const a=[Me,Se],s=[];function m(i,b){return i[0].experience===void 0?0:1}return r=m(o),n=s[r]=a[r](o),{c(){S(e.$$.fragment),l=y(),t=w("div"),n.c(),this.h()},l(i){M(e.$$.fragment,i),l=T(i),t=E(i,"DIV",{class:!0});var b=D(t);n.l(b),b.forEach(_),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(i,b){j(e,i,b),P(i,l,b),P(i,t,b),s[r].m(t,null),f=!0},p(i,[b]){const d={};b&2&&(d.title=i[1]),e.$set(d);let v=r;r=m(i),r===v?s[r].p(i,b):(Z(),k(s[v],1,1,()=>{s[v]=null}),Y(),n=s[r],n?n.p(i,b):(n=s[r]=a[r](i),n.c()),x(n,1),n.m(t,null))},i(i){f||(x(e.$$.fragment,i),x(n),f=!0)},o(i){k(e.$$.fragment,i),k(n),f=!1},d(i){i&&(_(l),_(t)),A(e,i),s[r].d()}}}function Oe(o,e,l){let t,{data:r}=e;return o.$$set=n=>{"data"in n&&l(0,r=n.data)},o.$$.update=()=>{o.$$.dirty&1&&l(1,t=r.experience?`${r.experience.name} - ${oe}`:oe)},[r,t]}class et extends we{constructor(e){super(),Ee(this,e,Oe,Le,ke,{data:0})}}export{et as component,Ze as universal};
