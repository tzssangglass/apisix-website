"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18108],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=a(n),g=o,m=f["".concat(l,".").concat(g)]||f[g]||s[g]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var a=2;a<i;a++)p[a]=n[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return a},default:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),p={title:"ext-plugin-post-req"},u=void 0,l={unversionedId:"plugins/ext-plugin-post-req",id:"version-2.10/plugins/ext-plugin-post-req",isDocsHomePage:!1,title:"ext-plugin-post-req",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/plugins/ext-plugin-post-req.md",sourceDirName:"plugins",slug:"/plugins/ext-plugin-post-req",permalink:"/docs/apisix/2.10/plugins/ext-plugin-post-req",editUrl:null,tags:[],version:"2.10",frontMatter:{title:"ext-plugin-post-req"},sidebar:"version-2.10/docs",previous:{title:"ext-plugin-pre-req",permalink:"/docs/apisix/2.10/plugins/ext-plugin-pre-req"},next:{title:"response-rewrite",permalink:"/docs/apisix/2.10/plugins/response-rewrite"}},a=[],c={toc:a};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," is almost the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-plugin-pre-req"),"."),(0,i.kt)("p",null,"The only difference is that it runs after executing builtin Lua plugins and\nbefore proxying to the upstream."),(0,i.kt)("p",null,"See the documentation of ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.10/plugins/ext-plugin-pre-req"},"ext-plugin-pre-req")," for how to configure it."))}s.isMDXComponent=!0}}]);