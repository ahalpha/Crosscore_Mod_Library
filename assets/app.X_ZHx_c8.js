import{j as o,dW as p,dX as u,dY as l,dZ as c,d_ as d,d$ as f,e0 as m,e1 as h,e2 as A,e3 as g,Y as v,d as P,u as w,l as y,z as C,e4 as R,e5 as _,e6 as E,a5 as b}from"./chunks/framework.3v-OyZe8.js";import{R as D}from"./chunks/theme.fYjagcQZ.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(D),T=P({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=w();return y(()=>{C(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&R(),_(),E(),s.setup&&s.setup(),()=>b(s.Layout)}});async function j(){const e=O(),t=L();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",d),t.component("ClientOnly",f),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function L(){return h(T)}function O(){let e=o,t;return A(a=>{let n=g(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&j().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{j as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
