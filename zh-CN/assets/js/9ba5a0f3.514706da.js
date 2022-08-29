"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9003],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),h=l(t),d=o,v=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return t?r.createElement(v,c(c({ref:n},s),{},{components:t})):r.createElement(v,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=h;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5491:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={},u="Phoenix",l={unversionedId:"connector-v2/sink/Phoenix",id:"connector-v2/sink/Phoenix",title:"Phoenix",description:"Phoenix sink connector",source:"@site/docs/connector-v2/sink/Phoenix.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Phoenix",permalink:"/zh-CN/docs/connector-v2/sink/Phoenix",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Phoenix.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Neo4j",permalink:"/zh-CN/docs/connector-v2/sink/Neo4j"},next:{title:"Socket",permalink:"/zh-CN/docs/connector-v2/sink/Socket"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"Example",id:"example",level:2}],h={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"phoenix"},"Phoenix"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Phoenix sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Write Phoenix data through ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/Jdbc"},"Jdbc connector"),".\nSupport Batch mode and Streaming mode. The tested Phoenix version is 4.xx and 5.xx\nOn the underlying implementation, through the jdbc driver of Phoenix, execute the upsert statement to write data to HBase.\nTwo ways of connecting Phoenix with Java JDBC. One is to connect to zookeeper through JDBC, and the other is to connect to queryserver through JDBC thin client."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tips: By default, the (thin) driver jar is used. If you want to use the (thick) driver  or other versions of Phoenix (thin) driver, you need to recompile the jdbc connector module")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tips: Not support exactly-once semantics (XA transaction is not yet supported in Phoenix).")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,i.kt)("p",null,"if you use phoenix (thick) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.phoenix.jdbc.PhoenixDriver")," or you use (thin) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.phoenix.queryserver.client.Driver")),(0,i.kt)("h3",{id:"url-string"},"url ","[string]"),(0,i.kt)("p",null,"if you use phoenix (thick) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:phoenix:localhost:2182/hbase")," or you use (thin) driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"use thick client drive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    Jdbc {\n        driver = org.apache.phoenix.jdbc.PhoenixDriver\n        url = "jdbc:phoenix:localhost:2182/hbase"\n        query = "upsert into test.sink(age, name) values(?, ?)"\n    }\n\n')),(0,i.kt)("p",null,"use thin client drive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    Jdbc {\n        driver = org.apache.phoenix.queryserver.client.Driver\n        url = "jdbc:phoenix:thin:url=http://spark_e2e_phoenix_sink:8765;serialization=PROTOBUF"\n        query = "upsert into test.sink(age, name) values(?, ?)"\n    }\n')))}d.isMDXComponent=!0}}]);