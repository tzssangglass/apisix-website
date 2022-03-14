"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94335],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(g,i(i({ref:e},d),{},{components:n})):r.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15254:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i={title:"mqtt-proxy"},o=void 0,p={unversionedId:"plugins/mqtt-proxy",id:"plugins/mqtt-proxy",isDocsHomePage:!1,title:"mqtt-proxy",description:"\x3c!--",source:"@site/docs/apisix/plugins/mqtt-proxy.md",sourceDirName:"plugins",slug:"/plugins/mqtt-proxy",permalink:"/docs/apisix/next/plugins/mqtt-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/mqtt-proxy.md",tags:[],version:"current",frontMatter:{title:"mqtt-proxy"},sidebar:"docs",previous:{title:"dubbo-proxy",permalink:"/docs/apisix/next/plugins/dubbo-proxy"},next:{title:"Admin API",permalink:"/docs/apisix/next/admin-api"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],d={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," only works in stream model, it help you to dynamic load\nbalance by ",(0,l.kt)("inlineCode",{parentName:"p"},"client_id")," of MQTT."),(0,l.kt)("p",null,"And this plugin both support MQTT protocol ",(0,l.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html"},"3.1.*")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html"},"5.0"),"."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Name of protocol, should be ",(0,l.kt)("inlineCode",{parentName:"td"},"MQTT")," in normal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_level"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Level of protocol, it should be ",(0,l.kt)("inlineCode",{parentName:"td"},"4")," for MQTT ",(0,l.kt)("inlineCode",{parentName:"td"},"3.1.*"),". it should be ",(0,l.kt)("inlineCode",{parentName:"td"},"5")," for MQTT ",(0,l.kt)("inlineCode",{parentName:"td"},"5.0"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"deprecated"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Use separate upstream in the route instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the IP or host of upstream, will forward current request to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.ip"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"deprecated"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'Use "host" instead. IP address of upstream, will forward current request to.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.port"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Port of upstream, will forward current request to.")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"To enable this plugin, we need to enable the stream_proxy configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," first.\nFor example, the following configuration represents listening on the 9100 TCP port."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    ...\n    router:\n        http: 'radixtree_uri'\n        ssl: 'radixtree_sni'\n    stream_proxy:                 # TCP/UDP proxy\n      only: false                 # needed if HTTP and Stream Proxy should be enabled\n      tcp:                        # TCP proxy port list\n        - 9100\n    dns_resolver:\n    ...\n")),(0,l.kt)("p",null,"Then send the MQTT request to port 9100."),(0,l.kt)("p",null,"Creates a stream route, and enable plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"mqtt-proxy"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": [{\n            "host": "127.0.0.1",\n            "port": 1980,\n            "weight": 1\n        }]\n    }\n}\'\n')),(0,l.kt)("p",null,"In case Docker is used in combination with MacOS ",(0,l.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," is the right parameter for ",(0,l.kt)("inlineCode",{parentName:"p"},"host"),"."),(0,l.kt)("p",null,"This plugin exposes a variable ",(0,l.kt)("inlineCode",{parentName:"p"},"mqtt_client_id"),", and we can use it to load balance via the client id. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "upstream": {\n        "type": "chash",\n        "key": "mqtt_client_id",\n        "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1995,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1995,\n            "weight": 1\n        }\n        ]\n    }\n}\'\n')),(0,l.kt)("p",null,"MQTT connections with different client ID will be forwarded to different node via the consistent hash algorithm. If the client ID is missing, we will balance via client IP instead."),(0,l.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," plugin has been deleted now."))}s.isMDXComponent=!0}}]);