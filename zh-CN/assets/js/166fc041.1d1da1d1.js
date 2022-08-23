"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5682],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},227:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],l={},i="FakeSource",u={unversionedId:"connector-v2/source/FakeSource",id:"connector-v2/source/FakeSource",title:"FakeSource",description:"FakeSource connector",source:"@site/docs/connector-v2/source/FakeSource.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/FakeSource",permalink:"/zh-CN/docs/connector-v2/source/FakeSource",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/FakeSource.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Email",permalink:"/zh-CN/docs/connector-v2/source/Email"},next:{title:"HdfsFile",permalink:"/zh-CN/docs/connector-v2/source/HdfsFile"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"type string",id:"type-string",level:3},{value:"Example",id:"example",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fakesource"},"FakeSource"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"FakeSource connector")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The FakeSource is a virtual data source, which randomly generates the number of rows according to the data structure of the user-defined schema,\njust for testing, such as type conversion and feature testing"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"config"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,o.kt)("p",null,"The table name."),(0,o.kt)("h3",{id:"type-string"},"type ","[string]"),(0,o.kt)("p",null,"Table structure description ,you should assign schema option to tell connector how to parse data to the row you want.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Tips"),": Most of Unstructured-Datasource contain this param, such as LocalFile,HdfsFile.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hocon"},'schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_time = time\n        c_timestamp = timestamp\n      }\n    }\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Simple source for FakeSource which contains enough datatype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n  FakeSource {\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_time = time\n        c_timestamp = timestamp\n      }\n    }\n    result_table_name = "fake"\n  }\n}\n')))}d.isMDXComponent=!0}}]);