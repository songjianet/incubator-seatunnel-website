"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38e3],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),r=t(67294),l=t(72389),o=t(65450),i=t(86010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,r.useState)(g),T=N[0],x=N[1],O=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==T&&k.some((function(e){return e.value===E}))&&x(E)}var C=function(e){var n=e.currentTarget,t=O.indexOf(n),a=k[t].value;a!==T&&(S(n),x(a),null!=m&&w(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},53029:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return d},toc:function(){return m},default:function(){return h}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(9877),i=t(58215),u=["components"],s={sidebar_position:2},p="Set Up with Locally",c={unversionedId:"start/local",id:"version-2.1.1/start/local",title:"Set Up with Locally",description:"Prepare",source:"@site/versioned_docs/version-2.1.1/start/local.mdx",sourceDirName:"start",slug:"/start/local",permalink:"/zh-CN/docs/2.1.1/start/local",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/start/local.mdx",tags:[],version:"2.1.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Quick Start",permalink:"/zh-CN/docs/2.1.1/category/start"},next:{title:"Set Up with Docker",permalink:"/zh-CN/docs/2.1.1/start/docker"}},d={},m=[{value:"Prepare",id:"prepare",level:2},{value:"Installation",id:"installation",level:2},{value:"Run SeaTunnel Application",id:"run-seatunnel-application",level:2},{value:"Explore More Build-in Examples",id:"explore-more-build-in-examples",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],f={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"set-up-with-locally"},"Set Up with Locally"),(0,l.kt)("h2",{id:"prepare"},"Prepare"),(0,l.kt)("p",null,"Before you getting start the local run, you need to make sure you already have installed the following software which SeaTunnel required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (only JDK 8 supported by now) installed and ",(0,l.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,l.kt)("li",{parentName:"ul"},"Download the engine, you can choose and download one of them from below as your favour, you could see more information about ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.1.1/faq#why-i-should-install-computing-engine-like-spark-or-flink"},"why we need engine in SeaTunnel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Spark: Please ",(0,l.kt)("a",{parentName:"li",href:"https://spark.apache.org/downloads.html"},"download Spark")," first(",(0,l.kt)("strong",{parentName:"li"},"required version >= 2 and version < 3.x "),"). For more information you could\nsee ",(0,l.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/spark-standalone.html#installing-spark-standalone-to-a-cluster"},"Getting Started: standalone")),(0,l.kt)("li",{parentName:"ul"},"Flink: Please ",(0,l.kt)("a",{parentName:"li",href:"https://flink.apache.org/downloads.html"},"download Flink")," first(",(0,l.kt)("strong",{parentName:"li"},"required version >= 1.12.0 and version < version < 1.14.x "),"). For more information you could see ",(0,l.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/standalone/overview/"},"Getting Started: standalone"))))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Enter the ",(0,l.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"seatunnel download page")," and download the latest version of distribute\npackage ",(0,l.kt)("inlineCode",{parentName:"p"},"seatunnel-<version>-bin.tar.gz")),(0,l.kt)("p",null,"Or you can download it by terminal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export version="2.1.0"\nwget "https://archive.apache.org/dist/incubator/seatunnel/${version}/apache-seatunnel-incubating-${version}-bin.tar.gz"\ntar -xzvf "apache-seatunnel-incubating-${version}-bin.tar.gz"\n')),(0,l.kt)("h2",{id:"run-seatunnel-application"},"Run SeaTunnel Application"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Configure SeaTunnel"),": Change the setting in ",(0,l.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),", it is base on the path your engine install at ",(0,l.kt)("a",{parentName:"p",href:"#prepare"},"prepare step two"),".\nChange ",(0,l.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," if you using Spark as your engine, or change ",(0,l.kt)("inlineCode",{parentName:"p"},"FLINK_HOME")," if you're using Flink."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Run Application with Build-in Configure"),": We already providers and out-of-box configuration in directory ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," which\nyou could find when you extract the tarball. You could start the application by the following commands"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/spark.streaming.conf.template\n'))),(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink.sh \\\n--config ./config/flink.streaming.conf.template\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console or in Flink UI, You can think this\nis a sign that the command ran successfully or not."),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"spark",mdxType:"TabItem"},"The SeaTunnel console will prints some logs as below:",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Hello World, SeaTunnel\nHello World, SeaTunnel\nHello World, SeaTunnel\n...\nHello World, SeaTunnel\n"))),(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("p",null,"The content printed in the TaskManager Stdout log of ",(0,l.kt)("inlineCode",{parentName:"p"},"flink WebUI"),", is two columned record just like below(your\ncontent maybe different cause we use fake source to create data random):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apache, 15\nseatunnel, 30\nincubator, 20\n...\ntopLevel, 20\n")))),(0,l.kt)("h2",{id:"explore-more-build-in-examples"},"Explore More Build-in Examples"),(0,l.kt)("p",null,"Our local quick start is using one of the build-in example in directory ",(0,l.kt)("inlineCode",{parentName:"p"},"config"),", and we provider more than one out-of-box\nexample you could and feel free to have a try and make your hands dirty. All you have to do is change the started command\noption value in ",(0,l.kt)("a",{parentName:"p",href:"#run-seaTunnel-application"},"running application")," to the configuration you want to run, we use batch\ntemplate in ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," as examples:"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/spark.batch.conf.template\n'))),(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink.sh \\\n--config ./config/flink.batch.conf.template\n')))),(0,l.kt)("h2",{id:"whats-more"},"What's More"),(0,l.kt)("p",null,"For now, you are already take a quick look about SeaTunnel, you could see ",(0,l.kt)("a",{parentName:"p",href:"/category/connector"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.1/deployment"},"deployment")," if you want to submit your application in other\nkind of your engine cluster."))}h.isMDXComponent=!0}}]);