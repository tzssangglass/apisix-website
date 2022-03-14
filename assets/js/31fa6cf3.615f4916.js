"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83394],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,l(l({ref:e},p),{},{components:n})):a.createElement(g,l({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29775:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l={title:"node-status"},o=void 0,u={unversionedId:"plugins/node-status",id:"plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"\x3c!--",source:"@site/docs/apisix/plugins/node-status.md",sourceDirName:"plugins",slug:"/plugins/node-status",permalink:"/docs/apisix/next/plugins/node-status",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/node-status.md",tags:[],version:"current",frontMatter:{title:"node-status"},sidebar:"docs",previous:{title:"prometheus",permalink:"/docs/apisix/next/plugins/prometheus"},next:{title:"datadog",permalink:"/docs/apisix/next/plugins/datadog"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function c(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"node-status")," is a plugin which we could get request status information through it's API."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"This plugin will add ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/status")," to get status information.\nYou may need to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/public-api"},"public-api")," plugin to expose it."),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),",\nthen you can add this plugin in any route.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setup the route for the status API, which will use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/next/plugins/public-api"},"public-api")," plugin.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/ns -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/status",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Request with uri ",(0,r.kt)("inlineCode",{parentName:"li"},"/apisix/status"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:9080/apisix/status -i\nHTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Parameter Description")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"status information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total"),(0,r.kt)("td",{parentName:"tr",align:null},"the total number of client requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waiting"),(0,r.kt)("td",{parentName:"tr",align:null},"the current number of idle client connections waiting for a request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepted"),(0,r.kt)("td",{parentName:"tr",align:null},"the total number of accepted client connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"writing"),(0,r.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is writing the response back to the client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handled"),(0,r.kt)("td",{parentName:"tr",align:null},"the total number of handled connections. Generally, the parameter value is the same as accepted unless some resource limits have been reached")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active"),(0,r.kt)("td",{parentName:"tr",align:null},"the current number of active client connections including waiting connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reading"),(0,r.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is reading the request header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX's uid which is saved in apisix/conf/apisix.uid")))),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can delete ",(0,r.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix/conf/config.yaml"),",\nthen you can not add this plugin in any route.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"When you want to disable the ",(0,r.kt)("inlineCode",{parentName:"li"},"node-status")," plugin in the route, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80": 1\n        }\n    },\n    "plugins": {}\n}\'\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You can also remove the route on ",(0,r.kt)("inlineCode",{parentName:"li"},"/apisix/status"),", no one can access the API.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl http://127.0.0.1:9080/apisix/admin/routes/ns -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")))}c.isMDXComponent=!0}}]);