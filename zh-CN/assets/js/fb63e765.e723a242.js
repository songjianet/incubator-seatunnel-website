"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2254],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1549:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={},s="Quick start",p={unversionedId:"flink/quick-start",id:"version-2.1.0/flink/quick-start",title:"Quick start",description:"Let's take an application that receives data through a socket , divides the data into multiple fields, and outputs the processing results as an example to quickly show how to use seatunnel .",source:"@site/versioned_docs/version-2.1.0/flink/quick-start.md",sourceDirName:"flink",slug:"/flink/quick-start",permalink:"/zh-CN/docs/2.1.0/flink/quick-start",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/quick-start.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Download and install",permalink:"/zh-CN/docs/2.1.0/flink/installation"},next:{title:"Command usage instructions",permalink:"/zh-CN/docs/2.1.0/flink/commands/start-seatunnel-flink.sh"}},u={},c=[{value:"Step 1: Prepare Flink runtime environment",id:"step-1-prepare-flink-runtime-environment",level:2},{value:"Step 2: Download seatunnel",id:"step-2-download-seatunnel",level:2},{value:"Step 3: Configure seatunnel",id:"step-3-configure-seatunnel",level:2},{value:"Step 4: Start the <code>netcat server</code> to send data",id:"step-4-start-the-netcat-server-to-send-data",level:2},{value:"Step 5: start <code>seatunnel</code>",id:"step-5-start-seatunnel",level:2},{value:"Step 6: Input at the <code>nc</code> terminal",id:"step-6-input-at-the-nc-terminal",level:2},{value:"Summary",id:"summary",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick start"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Let's take an application that receives data through a ",(0,i.kt)("inlineCode",{parentName:"p"},"socket")," , divides the data into multiple fields, and outputs the processing results as an example to quickly show how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel")," .")),(0,i.kt)("h2",{id:"step-1-prepare-flink-runtime-environment"},"Step 1: Prepare Flink runtime environment"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are familiar with ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," or have prepared the ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," operating environment, you can ignore this step. ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," does not require any special configuration.")),(0,i.kt)("p",null,"Please ",(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org/downloads.html"},"download Flink")," first, please choose Flink version >= 1.9.0. The download is complete to ",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/standalone/overview/"},"install Flink")),(0,i.kt)("h2",{id:"step-2-download-seatunnel"},"Step 2: Download seatunnel"),(0,i.kt)("p",null,"Enter the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/releases"},"seatunnel installation package")," download page and download the latest version of ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-<version>.zip")),(0,i.kt)("p",null,"Or download the specified version directly (take 2.0.4 as an example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/apache/incubator-seatunnel/releases/download/v2.0.4/waterdrop-dist-2.0.4-2.11.8-release.zip -O seatunnel-2.0.4.zip\n")),(0,i.kt)("p",null,"After downloading, unzip:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"unzip seatunnel-<version>.zip\nln -s seatunnel-<version> seatunnel\n")),(0,i.kt)("h2",{id:"step-3-configure-seatunnel"},"Step 3: Configure seatunnel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh")," , specify the necessary environment configuration such as ",(0,i.kt)("inlineCode",{parentName:"p"},"FLINK_HOME")," (the directory after ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," downloaded and decompressed in Step 1)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"config/application.conf")," , it determines the way and logic of data input, processing, and output after ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel")," is started."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'env {\n  # You can set flink configuration here\n  execution.parallelism = 1\n  #execution.checkpoint.interval = 10000\n  #execution.checkpoint.data-uri = "hdfs://localhost:9000/checkpoint"\n}\n\nsource {\n    SocketStream{\n          result_table_name = "fake"\n          field_name = "info"\n    }\n}\n\ntransform {\n  Split{\n    separator = "#"\n    fields = ["name","age"]\n  }\n  sql {\n    sql = "select * from (select info,split(info) as info_row from fake) t1"\n  }\n}\n\nsink {\n  ConsoleSink {}\n}\n\n')),(0,i.kt)("h2",{id:"step-4-start-the-netcat-server-to-send-data"},"Step 4: Start the ",(0,i.kt)("inlineCode",{parentName:"h2"},"netcat server")," to send data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nc -l -p 9999\n")),(0,i.kt)("h2",{id:"step-5-start-seatunnel"},"Step 5: start ",(0,i.kt)("inlineCode",{parentName:"h2"},"seatunnel")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd seatunnel\n./bin/start-seatunnel-flink.sh \\\n--config ./config/application.conf\n")),(0,i.kt)("h2",{id:"step-6-input-at-the-nc-terminal"},"Step 6: Input at the ",(0,i.kt)("inlineCode",{parentName:"h2"},"nc")," terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xg#1995\n")),(0,i.kt)("p",null,"It is printed in the TaskManager Stdout log of ",(0,i.kt)("inlineCode",{parentName:"p"},"flink WebUI"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xg#1995,xg,1995\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"If you want to know more ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel")," configuration examples, please refer to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuration example 1: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/blob/dev/config/flink.streaming.conf.template"},"Streaming streaming computing"))),(0,i.kt)("p",null,"The above configuration is the default ",(0,i.kt)("inlineCode",{parentName:"p"},"[streaming configuration template]")," , which can be run directly, the command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd seatunnel\n./bin/start-seatunnel-flink.sh \\\n--config ./config/flink.streaming.conf.template\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuration example 2: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/blob/dev/config/flink.batch.conf.template"},"Batch offline batch processing"))),(0,i.kt)("p",null,"The above configuration is the default ",(0,i.kt)("inlineCode",{parentName:"p"},"[offline batch configuration template]")," , which can be run directly, the command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd seatunnel\n./bin/start-seatunnel-flink.sh \\\n--config ./config/flink.batch.conf.template\n")))}m.isMDXComponent=!0}}]);