"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3352],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294);function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),o=t(7294),r=t(2389),l=t(5450),i=t(6010),s="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),b=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,o.useState)(v),S=N[0],T=N[1],E=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=b[m];null!=O&&O!==S&&g.some((function(e){return e.value===O}))&&T(O)}var C=function(e){var n=e.currentTarget,t=E.indexOf(n),a=g[t].value;a!==S&&(x(n),T(a),null!=m&&w(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;t=E[o]||E[E.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var n=e.value,t=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:C,onClick:C},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),u?(0,o.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function p(e){var n=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},4544:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return d},toc:function(){return m},default:function(){return f}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=t(9877),i=t(8215),s=["components"],u={sidebar_position:2},p="Set Up with Locally",c={unversionedId:"start-v2/local",id:"start-v2/local",title:"Set Up with Locally",description:"Let's take an application that randomly generates data in memory, processes it through SQL, and finally outputs it to the console as an example.",source:"@site/docs/start-v2/local.mdx",sourceDirName:"start-v2",slug:"/start-v2/local",permalink:"/zh-CN/docs/start-v2/local",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/start-v2/local.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Quick Start - V2",permalink:"/zh-CN/docs/category/start-v2"},next:{title:"Set Up with Docker",permalink:"/zh-CN/docs/start-v2/docker"}},d={},m=[{value:"Step 1: Prepare the environment",id:"step-1-prepare-the-environment",level:2},{value:"Step 2: Download SeaTunnel",id:"step-2-download-seatunnel",level:2},{value:"Step 3: Install connectors plugin",id:"step-3-install-connectors-plugin",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-with-locally"},"Set Up with Locally"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let's take an application that randomly generates data in memory, processes it through SQL, and finally outputs it to the console as an example.")),(0,r.kt)("h2",{id:"step-1-prepare-the-environment"},"Step 1: Prepare the environment"),(0,r.kt)("p",null,"Before you getting start the local run, you need to make sure you already have installed the following software which SeaTunnel required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (Java 8 or 11, other versions greater than Java 8 can theoretically work as well) installed and ",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,r.kt)("li",{parentName:"ul"},"Download the engine, you can choose and download one of them from below as your favour, you could see more information about ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/faq#why-i-should-install-computing-engine-like-spark-or-flink"},"why we need engine in SeaTunnel")),(0,r.kt)("li",{parentName:"ul"},"Spark: Please ",(0,r.kt)("a",{parentName:"li",href:"https://spark.apache.org/downloads.html"},"download Spark")," first(",(0,r.kt)("strong",{parentName:"li"},"required version >= 2 and version < 3.x "),"). For more information you could\nsee ",(0,r.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/spark-standalone.html#installing-spark-standalone-to-a-cluster"},"Getting Started: standalone")),(0,r.kt)("li",{parentName:"ul"},"Flink: Please ",(0,r.kt)("a",{parentName:"li",href:"https://flink.apache.org/downloads.html"},"download Flink")," first(",(0,r.kt)("strong",{parentName:"li"},"required version >= 1.12.0 and version < 1.14.x "),"). For more information you could see ",(0,r.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/standalone/overview/"},"Getting Started: standalone"))),(0,r.kt)("h2",{id:"step-2-download-seatunnel"},"Step 2: Download SeaTunnel"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"seatunnel download page")," and download the latest version of distribute\npackage ",(0,r.kt)("inlineCode",{parentName:"p"},"seatunnel-<version>-bin.tar.gz")),(0,r.kt)("p",null,"Or you can download it by terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export version="2.3.0-beta"\nwget "https://archive.apache.org/dist/incubator/seatunnel/${version}/apache-seatunnel-incubating-${version}-bin.tar.gz"\ntar -xzvf "apache-seatunnel-incubating-${version}-bin.tar.gz"\n')),(0,r.kt)("h2",{id:"step-3-install-connectors-plugin"},"Step 3: Install connectors plugin"),(0,r.kt)("p",null,"Since 2.2.0-beta, the binary package does not provide connector dependencies by default, so when using it for the first time, we need to execute the following command to install the connector: (Of course, you can also manually download the connector from ","[Apache Maven Repository]","(",(0,r.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/seatunnel/"},"https://repo.maven.apache.org/maven2/org/apache/seatunnel/")," to download, then manually move to the seatunnel subdirectory under the connectors directory)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh 2.3.0-beta\n")),(0,r.kt)("p",null,"If you need to specify the version of the connector, take 2.3.0-beta as an example, we need to execute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh 2.3.0-beta\n")),(0,r.kt)("p",null,"Usually we don't need all the connector plugins, so you can specify the plugins you need by configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"config/plugin_config"),", for example, you only need the ",(0,r.kt)("inlineCode",{parentName:"p"},"connector-console")," plugin, then you can modify plugin.properties as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-console\n--end--\n")),(0,r.kt)("p",null,"If we want our sample application to work properly, we need to add the following plugins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-fake\nconnector-console\n--end--\n")),(0,r.kt)("p",null,"You can find all supported connectors and corresponding plugin_config configuration names under ",(0,r.kt)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/connectors/plugins-mapping.properties"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you want to install the connector plugin by manually downloading the connector, you need to pay special attention to the following"),(0,r.kt)("p",{parentName:"div"},"The connectors directory contains the following subdirectories, if they do not exist, you need to create them manually"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"flink\nflink-sql\nseatunnel\nspark\n")),(0,r.kt)("p",{parentName:"div"},"If you want to install the V2 connector plugin manually, you only need to download the V2 connector plugin you need and put them in the seatunnel directory"),(0,r.kt)("h2",{parentName:"div",id:"step-4-configure-seatunnel-application"},"Step 4: Configure SeaTunnel Application"),(0,r.kt)("h3",{parentName:"div",id:"spark-or-flink"},"Spark or Flink"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Configure SeaTunnel"),": Change the setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),", it is base on the path your engine install at ",(0,r.kt)("a",{parentName:"p",href:"#prepare"},"prepare step two"),".\nChange ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," if you using Spark as your engine, or change ",(0,r.kt)("inlineCode",{parentName:"p"},"FLINK_HOME")," if you're using Flink."),(0,r.kt)("h3",{parentName:"div",id:"seatunnel-engine"},"SeaTunnel Engine"),(0,r.kt)("p",{parentName:"div"},"SeaTunnel Engine is the default engine for SeaTunnel, You do not need to do other additional configuration operations."),(0,r.kt)("h3",{parentName:"div",id:"add-job-config-file-to-define-a-job"},"Add Job Config File to define a job"),(0,r.kt)("p",{parentName:"div"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"config/seatunnel.streaming.conf.template"),", which determines the way and logic of data input, processing, and output after seatunnel is started.\nThe following is an example of the configuration file, which is the same as the example application mentioned above."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      row.num = 16\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\ntransform {\n\n}\n\nsink {\n  Console {}\n}\n\n')),(0,r.kt)("p",{parentName:"div"},"More information about config please check ",(0,r.kt)("a",{parentName:"p",href:"../concept/config"},"config concept")),(0,r.kt)("h2",{parentName:"div",id:"step-5-run-seatunnel-application"},"Step 5: Run SeaTunnel Application"),(0,r.kt)("p",{parentName:"div"},"You could start the application by the following commands"),(0,r.kt)(l.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"},{label:"SeaTunnel Engine",value:"SeaTunnel Engine"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},'```shell\ncd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark-connector-v2.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/seatunnel.streaming.conf.template\n```\n'))),(0,r.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},'```shell\ncd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink-connector-v2.sh \\\n--config ./config/seatunnel.streaming.conf.template\n```\n'))),(0,r.kt)(i.Z,{value:"SeaTunnel Engine",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},'```shell\ncd "apache-seatunnel-incubating-${version}"\n./bin/seatunnel.sh \\\n--config ./config/seatunnel.streaming.conf.template -e local\n```\n')))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console or in Flink/Spark UI, You can think this\nis a sign that the command ran successfully or not."),(0,r.kt)("p",{parentName:"div"},"The SeaTunnel console will prints some logs as below:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,r.kt)("p",{parentName:"div"},"If use Flink, The content printed in the TaskManager Stdout log of ",(0,r.kt)("inlineCode",{parentName:"p"},"flink WebUI"),"."),(0,r.kt)("h2",{parentName:"div",id:"whats-more"},"What's More"),(0,r.kt)("p",{parentName:"div"},"For now, you are already take a quick look about SeaTunnel, you could see ",(0,r.kt)("a",{parentName:"p",href:"/category/connector"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/deployment"},"deployment")," if you want to submit your application in other\nkind of your engine cluster."))))}f.isMDXComponent=!0}}]);