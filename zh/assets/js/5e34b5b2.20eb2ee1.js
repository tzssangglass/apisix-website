"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20836],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return s}});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=r.createContext({}),u=function(t){var n=r.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=u(t.components);return r.createElement(o.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=u(e),s=a,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return e?r.createElement(k,i(i({ref:n},d),{},{components:e})):r.createElement(k,i({ref:n},d))}));function s(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var l=e.length,i=new Array(l);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=e[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},28706:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var r=e(87462),a=e(63366),l=(e(67294),e(3905)),i={title:"limit-conn"},p=void 0,o={unversionedId:"plugins/limit-conn",id:"plugins/limit-conn",isDocsHomePage:!1,title:"limit-conn",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/limit-conn.md",sourceDirName:"plugins",slug:"/plugins/limit-conn",permalink:"/zh/docs/apisix/next/plugins/limit-conn",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/limit-conn.md",tags:[],version:"current",frontMatter:{title:"limit-conn"},sidebar:"docs",previous:{title:"limit-req",permalink:"/zh/docs/apisix/next/plugins/limit-req"},next:{title:"limit-count",permalink:"/zh/docs/apisix/next/plugins/limit-count"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]}],d={toc:u};function m(t){var n=t.components,e=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\uff08\u6216\u5e76\u53d1\u8fde\u63a5\uff09\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conn"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"conn > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6700\u5927\u5e76\u53d1\u8bf7\u6c42\u6570\u3002\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," \u7684\u9650\u5236\u3001\u4f46\u662f\u4f4e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst")," \u7684\u8bf7\u6c42\uff0c\u5c06\u88ab\u5ef6\u8fdf\u5904\u7406\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"burst"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u88ab\u5ef6\u8fdf\u5904\u7406\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default_conn_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"default_conn_delay > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684\u5178\u578b\u8fde\u63a5(\u6216\u8bf7\u6c42)\u7684\u5904\u7406\u5ef6\u8fdf\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"only_use_default_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4\u7684\u4e25\u683c\u6a21\u5f0f\u3002 \u5982\u679c\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\u7684\u8bdd\uff0c\u5c06\u4f1a\u4e25\u683c\u6309\u7167\u8bbe\u7f6e\u7684\u65f6\u95f4\u6765\u8fdb\u884c\u5ef6\u8fdf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"var"'),(0,l.kt)("td",{parentName:"tr",align:null},'["var", "var_combination"]'),(0,l.kt)("td",{parentName:"tr",align:null},"key \u7684\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u505a\u8bf7\u6c42\u8ba1\u6570\u7684\u4f9d\u636e\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"td"},"key_type"),' \u4e3a "var"\uff0c\u90a3\u4e48 key \u4f1a\u88ab\u5f53\u4f5c\u53d8\u91cf\u540d\u79f0\uff0c\u5982 "remote_addr" \u548c "consumer_name"\u3002\u5982\u679c ',(0,l.kt)("inlineCode",{parentName:"td"},"key_type"),' \u4e3a "var_combination"\uff0c\u90a3\u4e48 key \u4f1a\u5f53\u4f5c\u53d8\u91cf\u7ec4\u5408\uff0c\u5982 "$remote_addr $consumer_name"\u3002\u5982\u679c key \u7684\u503c\u4e3a\u7a7a\uff0c$remote_addr \u4f1a\u88ab\u4f5c\u4e3a\u9ed8\u8ba4 key\u3002')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"503"),(0,l.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst")," \u8fd9\u4e2a\u9608\u503c\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"burst")," \u8fd9\u4e2a\u9608\u503c\u65f6\uff0c\u8fd4\u56de\u7684\u54cd\u5e94\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u63d2\u4ef6\u529f\u80fd\u4e34\u65f6\u4e0d\u53ef\u7528\u65f6\u662f\u5426\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\u3002\u5f53\u503c\u8bbe\u7f6e\u4e3a true \u65f6\u5219\u81ea\u52a8\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\uff0c\u9ed8\u8ba4\u503c\u662f false\u3002")))),(0,l.kt)("h4",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 limit-conn \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 limit-conn \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"var_combination"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff0c\u7136\u540e\u5728\u63d2\u4ef6\u9875\u9762\u4e2d\u6dfb\u52a0 limit-conn \u63d2\u4ef6\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/limit-conn-1.png",alt:"enable limit-conn plugin"})),(0,l.kt)("h4",{id:"test-plugin"},"test plugin"),(0,l.kt)("p",null,"\u4e0a\u9762\u542f\u7528\u7684\u63d2\u4ef6\u7684\u53c2\u6570\u8868\u793a\u53ea\u5141\u8bb8\u4e00\u4e2a\u5e76\u53d1\u8bf7\u6c42\u3002 \u5f53\u6536\u5230\u591a\u4e2a\u5e76\u53d1\u8bf7\u6c42\u65f6\uff0c\u5c06\u76f4\u63a5\u8fd4\u56de 503 \u62d2\u7edd\u8bf7\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html?sleep=20 &\n\ncurl -i http://127.0.0.1:9080/index.html?sleep=20\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("p",null,"\u8fd9\u5c31\u8868\u793a limit-conn \u63d2\u4ef6\u751f\u6548\u4e86\u3002"),(0,l.kt)("h4",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 limit-conn \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 limit-conn \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}m.isMDXComponent=!0}}]);