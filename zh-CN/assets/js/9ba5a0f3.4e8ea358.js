"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9003],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,v=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(v,c(c({ref:t},u),{},{components:n})):r.createElement(v,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5491:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={},s="Phoenix",l={unversionedId:"connector-v2/sink/Phoenix",id:"connector-v2/sink/Phoenix",title:"Phoenix",description:"Phoenix sink connector",source:"@site/docs/connector-v2/sink/Phoenix.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Phoenix",permalink:"/zh-CN/docs/connector-v2/sink/Phoenix",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Phoenix.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OssFile",permalink:"/zh-CN/docs/connector-v2/sink/OssFile"},next:{title:"Sentry",permalink:"/zh-CN/docs/connector-v2/sink/Sentry"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"Example",id:"example",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"phoenix"},"Phoenix"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Phoenix sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Write Phoenix data through ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/Jdbc"},"Jdbc connector"),".\nSupport Batch mode and Streaming mode. The tested Phoenix version is 4.xx and 5.xx\nOn the underlying implementation, through the jdbc driver of Phoenix, execute the upsert statement to write data to HBase.\nTwo ways of connecting Phoenix with Java JDBC. One is to connect to zookeeper through JDBC, and the other is to connect to queryserver through JDBC thin client."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tips: By default, the (thin) driver jar is used. If you want to use the (thick) driver  or other versions of Phoenix (thin) driver, you need to recompile the jdbc connector module")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tips: Not support exactly-once semantics (XA transaction is not yet supported in Phoenix).")),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,i.kt)("p",null,"if you use phoenix (thick) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.phoenix.jdbc.PhoenixDriver")," or you use (thin) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.phoenix.queryserver.client.Driver")),(0,i.kt)("h3",{id:"url-string"},"url ","[string]"),(0,i.kt)("p",null,"if you use phoenix (thick) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:phoenix:localhost:2182/hbase")," or you use (thin) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"use thick client drive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    Jdbc {\n        driver = org.apache.phoenix.jdbc.PhoenixDriver\n        url = "jdbc:phoenix:localhost:2182/hbase"\n        query = "upsert into test.sink(age, name) values(?, ?)"\n    }\n\n')),(0,i.kt)("p",null,"use thin client drive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    Jdbc {\n        driver = org.apache.phoenix.queryserver.client.Driver\n        url = "jdbc:phoenix:thin:url=http://spark_e2e_phoenix_sink:8765;serialization=PROTOBUF"\n        query = "upsert into test.sink(age, name) values(?, ?)"\n    }\n')))}d.isMDXComponent=!0}}]);