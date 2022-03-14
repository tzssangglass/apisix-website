"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49018],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32004:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s={title:"Backend Tests"},o=void 0,l={unversionedId:"back-end-tests",id:"version-2.11/back-end-tests",isDocsHomePage:!1,title:"Backend Tests",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.11/back-end-tests.md",sourceDirName:".",slug:"/back-end-tests",permalink:"/docs/dashboard/back-end-tests",editUrl:null,tags:[],version:"2.11",frontMatter:{title:"Backend Tests"},sidebar:"version-2.11/docs",previous:{title:"Frontend E2E",permalink:"/docs/dashboard/front-end-e2e"},next:{title:"FAQ",permalink:"/docs/dashboard/FAQ"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Running E2E Tests Locally",id:"running-e2e-tests-locally",children:[]},{value:"Start with source code",id:"start-with-source-code",children:[]},{value:"Start with docker-compose",id:"start-with-docker-compose",children:[]},{value:"Start tests",id:"start-tests",children:[]},{value:"Writing Unit &amp; E2E (End to End) Tests",id:"writing-unit--e2e-end-to-end-tests",children:[]},{value:"Writing Unit Tests",id:"writing-unit-tests",children:[]},{value:"Writing E2E Tests",id:"writing-e2e-tests",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document provides the details of setting up the environment for running the tests locally with the guide for the writing unit & E2E tests for the backend."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#running-e2e-tests-locally"},"Running E2E Tests Locally"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#start-with-source-code"},"Start with source code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#start-with-docker-compose"},"Start with docker-compose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#start-tests"},"Start tests")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#writing-unit-&-e2e-(end-to-end)-tests"},"Writing Unit & E2E (End to End) Tests"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#writing-unit-tests"},"Writing Unit Tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#writing-e2e-tests"},"Writing E2E Tests"))))),(0,i.kt)("h2",{id:"running-e2e-tests-locally"},"Running E2E Tests Locally"),(0,i.kt)("h2",{id:"start-with-source-code"},"Start with source code"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To run back end E2E test, please start the ",(0,i.kt)("inlineCode",{parentName:"p"},"manager-api"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream-node")," at first.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To start the ",(0,i.kt)("inlineCode",{parentName:"p"},"manager-api")," project locally, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboard/develop"},"develop")," web section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To start the etcd locally, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/install-dependencies/"},"etcd start")," web section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To start the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," project locally, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix#get-started"},"apisix start")," web section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To start the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream-node")," locally, please install docker in the local environment and execute the command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," docker run -d --name upstream -v /(Your apisix-dashboard folder path)/api/test/docker/upstream.conf:/etc/nginx/conf.d/default.conf:ro -p 80:80 -p 1980:1980 -p 1981:1981 -p 1982:1982 -p 1983:1983 -p 1984:1984 johz/upstream:v2.0\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After all the services are started, you can start the back-end E2E test.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream-node")," IP is temporarily changed to the local IP address. After the test, it should be changed to GitHub upstream node IP. If the test case does not involve the upstream node, it does not need to be modified."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},' # Local E2E test create route example\n {\n     "uris": ["/test-test"],\n     "name": "route_all",\n     "desc": "test",\n     "methods": ["GET"],\n     "hosts": ["test.com"],\n     "status": 1,\n     "upstream": {\n         "nodes": {\n             # upstream node IP is required for local test\n             "(local ip):1981": 1\n         },\n         "type": "roundrobin"\n      }\n }\n\n  # GitHub E2E test create route example\n {\n     "uris": ["/test-test"],\n     "name": "route_all",\n     "desc": "test",\n     "methods": ["GET"],\n     "hosts": ["test.com"],\n     "status": 1,\n     "upstream": {\n         "nodes": {\n             "172.16.238.20:1981": 1\n         },\n         "type": "roundrobin"\n      }\n }\n')))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),(0,i.kt)("h2",{id:"start-with-docker-compose"},"Start with docker-compose"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"install docker-compose")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," In order to run docker compose locally, please change the values of ",(0,i.kt)("inlineCode",{parentName:"p"},"listen.host")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.endpoints")," within ",(0,i.kt)("inlineCode",{parentName:"p"},"./api/conf/conf.yaml")," as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"listen:\n   host: 0.0.0.0\n   port: 9000\netcd:\n   endpoints:\n     - 172.16.238.10:2379\n     - 172.16.238.11:2379\n     - 172.16.238.12:2379\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," to run services such as ",(0,i.kt)("inlineCode",{parentName:"p"},"manager-api"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream-node"),", run the command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd /(Your apisix-dashboard folder path)/api/test/docker\n# Download the apisix dockerfile\ncurl -o Dockerfile-apisix https://raw.githubusercontent.com/apache/apisix-docker/master/alpine/Dockerfile\ndocker-compose up -d\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," to run the local E2E test and need to update the main code, you need to execute the command to close the cluster."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd /(Your apisix-dashboard folder path)/api/test/docker\n# -v: Remove links to mount volumes and volumes\ndocker-compose  down -v\n# If you don't want to remove the link between mount volume and volume, you can use\ndocker-compose stop [serviceName]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then you need to delete the image of the ",(0,i.kt)("inlineCode",{parentName:"p"},"manage-api"),", rebuild the image of the ",(0,i.kt)("inlineCode",{parentName:"p"},"manage-api"),", and start the cluster after the image is successfully built.\n(Only if you have altered/added any core functionalities in ",(0,i.kt)("inlineCode",{parentName:"p"},"manager-api"),", for simply adding/deleting a test case/file, rebuilding is not required)."))),(0,i.kt)("p",null,"** For ease of access and to avoid the repetitive hassle for setting up the required configurations, we have provided a ",(0,i.kt)("inlineCode",{parentName:"p"},"setup.sh")," script\nwhich is inside ",(0,i.kt)("inlineCode",{parentName:"p"},"api/test/docker")," directory. You can directly run, delete and build services along with update and revert ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.yaml")," through the script.\nFor more details, run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./setup.sh help\n")),(0,i.kt)("p",null,"(If you are setting up the environment for the first time, please go with the described manual steps. It'll help you to get the idea of what's going on in the background)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),(0,i.kt)("h2",{id:"start-tests"},"Start tests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After all the services are started, you can start the back-end E2E test."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Sometimes we need to delete the etcd store info. Otherwise, it will make the test failed."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter the E2E folder and execute the command to test all E2E test files."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2e\n go test -v\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can also do E2E test on a single file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2e\n go test -v E2E-test-file.go base.go\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Currently, a lot of tests has been migrated to E2ENEW folder using the ginkgo testing framework for its ability to provide\nhigh expressiveness which makes reading and writing tests a pleasure."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter the E2ENEW folder and execute the command to run all the E2ENEW test suites recursively."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2enew\n ginkgo -r\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can also run a single E2ENEW test suite using ginkgo."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2enew/(path of the specific test suite)\n ginkgo -r\n")))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),(0,i.kt)("h2",{id:"writing-unit--e2e-end-to-end-tests"},"Writing Unit & E2E (End to End) Tests"),(0,i.kt)("h2",{id:"writing-unit-tests"},"Writing Unit Tests"),(0,i.kt)("p",null,"Currently, all the unit tests for ",(0,i.kt)("inlineCode",{parentName:"p"},"manager-api")," have been written using Go's built-in testing package. There is nothing new about it. You can directly add tests in the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"<module>_test.go")," file or create a new one. There is one thing that needs to be addressed that is, since ",(0,i.kt)("inlineCode",{parentName:"p"},"manager-api")," largely depends on handling data from etcd, in some cases, you need to write some feature that depends on storing & retrieval of information on and out of etcd. In such a scenario, you should write your unit tests using ",(0,i.kt)("inlineCode",{parentName:"p"},"store.MockInterface")," instead of directly depending upon etcd."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MockInterface")," embeds ",(0,i.kt)("inlineCode",{parentName:"p"},"mock.Mock")," object from ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/stretchr/testify/mock"},"mock")," package by testify. If helps in simulating function calls of an object with desired inputs as arguments and outputs as return values. Currently, all the unit tests in ",(0,i.kt)("inlineCode",{parentName:"p"},"route"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," handlers uses mock interface. For e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'mStore := &store.MockInterface{}\nmStore.On("<exact methodname of the real method>", mock.Anything)\n      .Run(func(args mock.Arguments) {\n           //arguments assertions or anything\n           //gets executed before returning\n       })\n      .Return("<same return signature of the original method>")\n')),(0,i.kt)("p",null,"You may tinker with the mentioned tests to get an idea of how it works or go through the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/stretchr/testify/mock#pkg-index"},"docs"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),(0,i.kt)("h2",{id:"writing-e2e-tests"},"Writing E2E Tests"),(0,i.kt)("p",null,"Currently, the backend of apisix-dashboard have two types of e2e tests. One is plain e2e, the other is e2enew, where in the first one, tests are written using Go's built-in, native testing package, for the later, the tests are grouped into test suites and are evaluated using ",(0,i.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/"},"ginkgo")," - a testing framework which helps in writing more expressive tests such that reading and writing tests give a pleasant experience."),(0,i.kt)("p",null,"**Actively, we are migrating all of our e2e tests to e2enew module. So we are no more accepting tests inside e2e module, and any new tests must be added into the e2enew module by using ginkgo following the BDD style testing. If you have any query regarding it, please discuss your concerns with the community, we would be happy to address those."),(0,i.kt)("p",null,"For value assertion, we are using the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/stretchr/testify@v1.7.0/assert"},"assert")," package by testify. It provides lots of easy to use functions for assertion where the first argument is ",(0,i.kt)("inlineCode",{parentName:"p"},"*testing.T")," object which can  be obtained from ",(0,i.kt)("inlineCode",{parentName:"p"},"ginkgo.GinkgoT()"),"."),(0,i.kt)("p",null,"If you are creating any test which requires making HTTP calls to any of the following node which involves ",(0,i.kt)("inlineCode",{parentName:"p"},"manager-api")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix"),", after setting up the environment (please refer ",(0,i.kt)("a",{parentName:"p",href:"#running-e2e-tests-locally"},"Running E2E Tests Locally")," for the details), you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpTestCase")," struct which provides a nice interface to make the calls along with performing necessary checks on the response. Here's a brief description of the most used fields of the struct,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type HttpTestCase struct {\n    Desc          string                // Description about the test case.\n    Object        *httpexpect.Expect    // returns a httpexpect object i.e. on which host the request is going to be made.\n    Method        string                // HTTP request methods ( GET, POST, PATCH, PUT, DELETE, OPTIONS).\n    Path          string                // the route path of that host\n    Query         string                // Query params\n    Body          string                // The request Body. Commonly used in POST, PUT, PATCH.\n    Headers       map[string]string     // Request headers. Include authorization header for secure routes.\n    ExpectStatus  int                   // Expected HTTP status code from the response\n    ExpectCode    int                   // Code generated by the host. Generally 0 for http.StatusOK.\n    ExpectMessage string                // The response message provided in the response by the host.\n    ExpectBody    interface{}           // The expected message body as a response.\n    Sleep         time.Duration //ms    // Cooldown period before making next request.\n}\n")),(0,i.kt)("p",null,"Now to run a test use the ",(0,i.kt)("inlineCode",{parentName:"p"},"RunTestCase(tc HttpTestCase)")," method which is provided into the base package inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"e2enew")," module."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," E2ENEW also provides standalone methods for making HTTP request for GET, POST, PUT, DELETE methods along with making a POST request with ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form")," data. The method signatures are stated below"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpGet(url string, headers map[string]string) ([]byte, int, error)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpPost(url string, headers map[string]string, reqBody string) ([]byte, int, error)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpPut(url string, headers map[string]string, reqBody string) ([]byte, int, error)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpDelete(url string, headers map[string]string) ([]byte, int, error)"))),(0,i.kt)("p",null,"Now coming back to writing e2enew tests,"),(0,i.kt)("p",null,"*If you are new to ginkgo it's always recommended going through the official ",(0,i.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/"},"docs")," first."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To create a new tests' suite, create the new directory under ",(0,i.kt)("inlineCode",{parentName:"p"},"e2enew")," module. Then for the initial bootstrapping use,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"   mkdir <dirname> #inside e2enew\n   cd <dirname>\n   ginkgo bootstrap # Generates <dirname>_suite_test.go\n   #to add tests in separate files\n   ginkgo generate <testgroup> #Generates <testgroup>_test.go\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This can be done manually, however, grouping similar tests in specific test files is always recommended. Please try to separate tests in separate test files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We use different ginkgo containers for writing tests which includes ",(0,i.kt)("inlineCode",{parentName:"p"},"Describe"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"It"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AfterSuite"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BeforeEach")," etc. [ ",(0,i.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/#structuring-your-specs"},"ref")," ]. For eg, adding a few logically similar tests inside an existing test suite may looks like"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var _ = ginkgo.Describe("<description about the tests>", func() {\n         ginkgo.It("<test 1>", func() {\n            //Testing logic & assertions\n         })\n         ginkgo.It("<test 2>", func() {\n            //Testing logic & assertions\n         })\n      })\n')),(0,i.kt)("p",{parentName:"li"}," here the ",(0,i.kt)("inlineCode",{parentName:"p"},"Describe")," container is grouping similar tests through multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"It")," blocks by making extensive use of closures to give the syntax a high expressiveness.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Though depending upon the scenario, it is always recommended to use ginkgo's table-driven tests for running the independent ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpTestCase")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"table.DescribeTable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"table.Entry")," [ ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/onsi/ginkgo/extensions/table"},"ref")," ]. For eg,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var _ = ginkgo.Describe("<description about the tests>", func() {\n         table.DescribeTable("<logical group 1>",\n            func(tc base.HttpTestCase) {\n               base.RunTestCase(tc)\n            },\n            table.Entry("<test 1>", base.HttpTestCase{\n               //Fill the fields\n            }),\n            table.Entry("<test 2>", base.HttpTestCase{\n               //Fill the fields\n            }),\n         })\n\n         table.DescribeTable("<logical group 2>", func () {\n            ...\n         })\n\n      })\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FYI, internally ginkgo reduces each table entries to ",(0,i.kt)("inlineCode",{parentName:"p"},"It")," block and run all the ",(0,i.kt)("inlineCode",{parentName:"p"},"It")," blocks concurrently/parallel. Ginkgo auto recovers from panics inside ",(0,i.kt)("inlineCode",{parentName:"p"},"It")," blocks only, so always put your assertions inside ",(0,i.kt)("inlineCode",{parentName:"p"},"It")," containers."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")))}c.isMDXComponent=!0}}]);