"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73979],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o={title:"Apache APISIX 2.11.0 is officially released with more new features",authors:[{name:"Zexuan Luo",title:"Author",url:"https://github.com/spacewander",image_url:"https://avatars.githubusercontent.com/u/4161644?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Release","WASM","Azure","LDAP"],description:"Apache APISIX 2.11.0 is officially released, which is the first version with new features after 2.10.0 LTS.",tags:["Release"]},s=void 0,l={permalink:"/blog/2021/12/01/release-apache-apisix-2.11",source:"@site/blog/2021/12/01/release-apache-apisix-2.11.md",title:"Apache APISIX 2.11.0 is officially released with more new features",description:"Apache APISIX 2.11.0 is officially released, which is the first version with new features after 2.10.0 LTS.",date:"2021-12-01T00:00:00.000Z",formattedDate:"December 1, 2021",tags:[{label:"Release",permalink:"/blog/tags/release"}],readingTime:3.625,truncated:!0,authors:[{name:"Zexuan Luo",title:"Author",url:"https://github.com/spacewander",image_url:"https://avatars.githubusercontent.com/u/4161644?v=4",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX's integration with Azure Serverless",permalink:"/blog/2021/12/01/apisix-supports-azure-functions"},nextItem:{title:"Using Apache APISIX Ingress Gateway to access Custom Monitoring in KubeSphere",permalink:"/blog/2021/11/30/use-apisix-ingress-in-kubesphere"}},u={authorsImageUrls:[void 0,void 0]},p=[{value:"New feature: New LDAP-based authentication plugin",id:"new-feature-new-ldap-based-authentication-plugin",children:[]},{value:"New feature: Observability level interfacing with more monitoring systems",id:"new-feature-observability-level-interfacing-with-more-monitoring-systems",children:[]},{value:"New feature: Exposing FaaS functions for Azure through a gateway",id:"new-feature-exposing-faas-functions-for-azure-through-a-gateway",children:[]},{value:"New: WASM-related support",id:"new-wasm-related-support",children:[]},{value:"Improvements: Existing plug-ins are more feature-rich",id:"improvements-existing-plug-ins-are-more-feature-rich",children:[]},{value:"Download",id:"download",children:[]}],c={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache APISIX 2.11.0 is officially released, which is the first version with new features after 2.10.0 LTS.")),(0,i.kt)("p",null,"Apache APISIX 2.11.0 is the first release with new features since the last 2.10.0 LTS release. It not only enriches the plugin library, but also brings fresh ecological support."),(0,i.kt)("h2",{id:"new-feature-new-ldap-based-authentication-plugin"},"New feature: New LDAP-based authentication plugin"),(0,i.kt)("p",null,"Apache APISIX has added a new member to its long list of authentication plugins - the LDAP-based ",(0,i.kt)("inlineCode",{parentName:"p"},"ldap-auth")," plugin. With this plugin we can bridge the LDAP account system and the Apache APISIX Consumer mechanism."),(0,i.kt)("p",null,"Let's show a simple example from the code side."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "user01",\n    "plugins": {\n        "ldap-auth": {\n            "user_dn": "cn=user01,ou=users,dc=example,dc=org"\n        }\n    }\n}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "ldap-auth": {\n            "base_dn": "ou=users,dc=example,dc=org",\n            "ldap_uri": "localhost:1389",\n            "uid": "cn"\n        },\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"In the above configuration, we have bound ",(0,i.kt)("inlineCode",{parentName:"p"},"user01")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"route 1"),". This way we can access ",(0,i.kt)("inlineCode",{parentName:"p"},"route 1")," with the password of ",(0,i.kt)("inlineCode",{parentName:"p"},"user01")," and be authenticated by LDAP."),(0,i.kt)("p",null,"The result looks like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -uuser01:password1 http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,i.kt)("h2",{id:"new-feature-observability-level-interfacing-with-more-monitoring-systems"},"New feature: Observability level interfacing with more monitoring systems"),(0,i.kt)("p",null,"The new version of Apache APISIX is enriched with support for external monitoring services. In this regard, we have added two new plugins."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"datadog")," plugin for reporting metrics to datadog"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skywalking-logger")," plug-in to report access logs to Apache Skywalking")),(0,i.kt)("p",null,"Datadog is a widely used SaaS monitoring service overseas, while Apache Skywalking is a world-renowned open source monitoring software. Users can now interface with them with a simple configuration on their routes."),(0,i.kt)("p",null,"Datadog example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "datadog": {}\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,i.kt)("p",null,"Apache SkyWalking example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "skywalking-logger":{\n            "endpoint_addr":"http://127.0.0.1:12800"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/hello"\n}\'\n')),(0,i.kt)("h2",{id:"new-feature-exposing-faas-functions-for-azure-through-a-gateway"},"New feature: Exposing FaaS functions for Azure through a gateway"),(0,i.kt)("p",null,"The gateway can do more than just proxy internal services, we can also use it to connect to external systems."),(0,i.kt)("p",null,"Now with the ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-functions")," plugin, you can use HTTP requests to trigger functions on Azure functions services."),(0,i.kt)("p",null,"The following example shows how to connect a configured function on Azure to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/azure_HttpTrigger")," route on Apache APISIX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "azure-functions":{\n            "function_uri":"http://test-apisix.azurewebsites.net/api/HttpTrigger",\n            "authorization":{\n                "apikey":"<Generated API key to access the Azure-Function>"\n            }\n        }\n    },\n    "uri":"/azure_HttpTrigger"\n}\'\n')),(0,i.kt)("p",null,"The access to this route is equivalent to a function call on the FaaS platform. At the same time, we can add authentication, flow restriction and other corresponding restrictions to this process."),(0,i.kt)("h2",{id:"new-wasm-related-support"},"New: WASM-related support"),(0,i.kt)("p",null,"Initial support for WASM is now available in Apache APISIX. With the Proxy WASM SDK, we can write plugins that run inside Apache APISIX in languages other than Lua."),(0,i.kt)("p",null,"Unlike the previous external plug-in functionality, this mechanism runs inside Apache APISIX, so it is much better in terms of performance than before."),(0,i.kt)("p",null,"Using WASM plugins in Apache APISIX is like using Lua plugins, both of which support routing and global scoping. We have placed a WASM-based implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"fault-injection")," plugin in the Apache APISIX code repository, and interested readers can see how it differs from the Lua version of the plugin of the same name."),(0,i.kt)("p",null,"More technical details about Apache APISIX support for WASM can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/11/19/apisix-supports-wasm"},"this article"),"."),(0,i.kt)("p",null,"The support for WASM in Apache APISIX is still in its early stages, and we will gradually improve and enrich the details in the next few releases."),(0,i.kt)("h2",{id:"improvements-existing-plug-ins-are-more-feature-rich"},"Improvements: Existing plug-ins are more feature-rich"),(0,i.kt)("p",null,"In addition to the new features mentioned above, we have also improved the functionality of existing plugins for Apache APISIX, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"limit-req/conn/count and other plugins now support a set of variables as the key when limiting"),(0,i.kt)("li",{parentName:"ul"},"proxy-cache introduces a memory-based backend")),(0,i.kt)("p",null,"For more details on the new features and components added to the plugin, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/release/2.11/CHANGELOG.md#2110"},"Change log")," corresponding to this release."),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("p",null,"Get the latest version of Apache APISIX 2.11.0, which can be downloaded and installed by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"Source code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build/"},"binary installer"))))}h.isMDXComponent=!0}}]);