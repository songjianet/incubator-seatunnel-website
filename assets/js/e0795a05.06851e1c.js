"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7964],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Common Options",c={unversionedId:"connector-v2/sink/common-options",id:"connector-v2/sink/common-options",title:"Common Options",description:"Common parameters of sink connectors",source:"@site/docs/connector-v2/sink/common-options.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/common-options",permalink:"/docs/connector-v2/sink/common-options",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/common-options.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"StarRocks",permalink:"/docs/connector-v2/sink/StarRocks"},next:{title:"Transform",permalink:"/docs/category/transform"}},p={},m=[{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-options"},"Common Options"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Common parameters of sink connectors")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," output by the previous plugin in the configuration file;"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plug-in is processing the data set corresponding to this parameter."),(0,o.kt)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"parallelism")," is not specified, the ",(0,o.kt)("inlineCode",{parentName:"p"},"parallelism")," in env is used by default."),(0,o.kt)("p",null,"When parallelism is specified, it will override the parallelism in env."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake"\n      sql = "select name from fake"\n      result_table_name = "fake_name"\n    }\n    sql {\n      source_table_name = "fake"\n      sql = "select age from fake"\n      result_table_name = "fake_age"\n    }\n}\n\nsink {\n    console {\n      parallelism = 3\n      source_table_name = "fake_name"\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the console outputs the data of the last transform, and if it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"fake_name")," , it will output the data of ",(0,o.kt)("inlineCode",{parentName:"p"},"fake_name"))))}f.isMDXComponent=!0}}]);