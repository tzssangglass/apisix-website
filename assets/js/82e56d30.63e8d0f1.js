"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24202],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71622:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l={title:"jwt-auth"},p=void 0,o={unversionedId:"plugins/jwt-auth",id:"version-2.4/plugins/jwt-auth",isDocsHomePage:!1,title:"jwt-auth",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/plugins/jwt-auth.md",sourceDirName:"plugins",slug:"/plugins/jwt-auth",permalink:"/docs/apisix/2.4/plugins/jwt-auth",editUrl:null,tags:[],version:"2.4",frontMatter:{title:"jwt-auth"},sidebar:"version-2.4/docs",previous:{title:"key-auth",permalink:"/docs/apisix/2.4/plugins/key-auth"},next:{title:"basic-auth",permalink:"/docs/apisix/2.4/plugins/basic-auth"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," is an authentication plugin that need to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer"),". Add JWT Authentication to a ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," then adds its key to the query string parameter, request header, or ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie")," to verify its request."),(0,i.kt)("p",null,"For more information on JWT, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," for more information."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Valid"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"required"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"different ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer")," have different value, it's unique. different ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer")," use the same ",(0,i.kt)("inlineCode",{parentName:"td"},"key"),", and there will be a request matching exception.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"encryption key. if you do not specify, the value is auto-generated in the background.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"public_key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"RSA public key, required when ",(0,i.kt)("inlineCode",{parentName:"td"},"algorithm")," attribute selects ",(0,i.kt)("inlineCode",{parentName:"td"},"RS256")," algorithm.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"private_key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"RSA private key, required when ",(0,i.kt)("inlineCode",{parentName:"td"},"algorithm")," attribute selects ",(0,i.kt)("inlineCode",{parentName:"td"},"RS256")," algorithm.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"algorithm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'"HS256"'),(0,i.kt)("td",{parentName:"tr",align:"left"},'["HS256", "HS512", "RS256"]'),(0,i.kt)("td",{parentName:"tr",align:"left"},"encryption algorithm.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"exp"),(0,i.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"86400"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"token's expire time, in seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"base64_secret"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"whether secret is base64 encoded")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This plugin will add ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," to sign.\nYou may need to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.4/plugin-interceptors"},"interceptors")," to protect it."),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"set a consumer and config the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"jwt-auth")," option")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "jwt-auth": {\n            "key": "user-key",\n            "secret": "my-secret-key"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"HS256")," algorithm by default, and if you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"RS256")," algorithm, you need to specify the algorithm and configure the public key and private key, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "kerouac",\n    "plugins": {\n        "jwt-auth": {\n            "key": "user-key",\n            "public_key": "-----BEGIN PUBLIC KEY-----\\n\u2026\u2026\\n-----END PUBLIC KEY-----",\n            "private_key": "-----BEGIN RSA PRIVATE KEY-----\\n\u2026\u2026\\n-----END RSA PRIVATE KEY-----",\n            "algorithm": "RS256"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"you can visit Dashboard ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/")," and add a Consumer through the web console:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.4/docs/assets/images/plugin/jwt-auth-1.png",alt:null})),(0,i.kt)("p",null,"then add jwt-auth plugin in the Consumer page:\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.4/docs/assets/images/plugin/jwt-auth-2.png",alt:null})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"add a Route or add a Service, and enable the ",(0,i.kt)("inlineCode",{parentName:"li"},"jwt-auth")," plugin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "jwt-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("h4",{id:"get-the-token-in-jwt-auth-plugin"},"get the token in ",(0,i.kt)("inlineCode",{parentName:"h4"},"jwt-auth")," plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key -i\nHTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI\n")),(0,i.kt)("h4",{id:"try-request-with-token"},"try request with token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"without token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html -i\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing JWT token in request"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"request header with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"request params with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"request cookie with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html --cookie jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/v2/keys/apisix/routes/1 -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);