"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7539],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4977:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:2},c="Quick Start With SeaTunnel Engine",u={unversionedId:"start-v2/locally/quick-start-seatunnel-engine",id:"start-v2/locally/quick-start-seatunnel-engine",title:"Quick Start With SeaTunnel Engine",description:"Step 1: Deployment SeaTunnel And Connectors",source:"@site/docs/start-v2/locally/quick-start-seatunnel-engine.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-seatunnel-engine",permalink:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/start-v2/locally/quick-start-seatunnel-engine.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Deployment",permalink:"/zh-CN/docs/start-v2/locally/deployment"},next:{title:"Quick Start With Flink",permalink:"/zh-CN/docs/start-v2/locally/quick-start-flink"}},s={},p=[{value:"Step 1: Deployment SeaTunnel And Connectors",id:"step-1-deployment-seatunnel-and-connectors",level:2},{value:"Step 2: Add Job Config File to define a job",id:"step-2-add-job-config-file-to-define-a-job",level:2},{value:"Step 3: Run SeaTunnel Application",id:"step-3-run-seatunnel-application",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-with-seatunnel-engine"},"Quick Start With SeaTunnel Engine"),(0,o.kt)("h2",{id:"step-1-deployment-seatunnel-and-connectors"},"Step 1: Deployment SeaTunnel And Connectors"),(0,o.kt)("p",null,"Before starting, make sure you have downloaded and deployed SeaTunnel as described in ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"deployment")),(0,o.kt)("h2",{id:"step-2-add-job-config-file-to-define-a-job"},"Step 2: Add Job Config File to define a job"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"config/seatunnel.streaming.conf.template"),", which determines the way and logic of data input, processing, and output after seatunnel is started.\nThe following is an example of the configuration file, which is the same as the example application mentioned above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      row.num = 16\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\ntransform {\n\n}\n\nsink {\n  Console {}\n}\n\n')),(0,o.kt)("p",null,"More information about config please check ",(0,o.kt)("a",{parentName:"p",href:"../concept/config"},"config concept")),(0,o.kt)("h2",{id:"step-3-run-seatunnel-application"},"Step 3: Run SeaTunnel Application"),(0,o.kt)("p",null,"You could start the application by the following commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/seatunnel.sh --config ./config/seatunnel.streaming.conf.template -e local\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console. You can think this\nis a sign that the command ran successfully or not."),(0,o.kt)("p",null,"The SeaTunnel console will prints some logs as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,o.kt)("h2",{id:"whats-more"},"What's More"),(0,o.kt)("p",null,"For now, you are already take a quick look about SeaTunnel, you could see ",(0,o.kt)("a",{parentName:"p",href:"/category/connector"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/about"},"SeaTunnel Engine")," if you want to know more about SeaTunnel Engine."),(0,o.kt)("p",null,"SeaTunnel also supports running jobs in Spark/Flink. You can see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/quick-start-spark"},"Quick Start With Spark")," or ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/quick-start-flink"},"Quick Start With Flink"),"."))}f.isMDXComponent=!0}}]);