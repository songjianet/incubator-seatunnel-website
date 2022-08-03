"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4284],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4456:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s="Nulltf",u={unversionedId:"transform/nulltf",id:"transform/nulltf",title:"Nulltf",description:"Description",source:"@site/docs/transform/nulltf.md",sourceDirName:"transform",slug:"/transform/nulltf",permalink:"/zh-CN/docs/transform/nulltf",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform/nulltf.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"NullRate",permalink:"/zh-CN/docs/transform/nullRate"},next:{title:"Replace",permalink:"/zh-CN/docs/transform/replace"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"fields list",id:"fields-list",level:3},{value:"Examples",id:"examples",level:2}],f={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nulltf"},"Nulltf"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"set default value for null field"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This transform only supported by engine Spark."))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"fields-list"},"fields ","[list]"),(0,l.kt)("p",null,'A list of fields whose default value will be set.\nThe default value of the field can be set in the form of "field:value", If no set, the default value will be set according to the field type.'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"the configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  nulltf {\n      fields {\n          name: "",\n          price: 0,\n          num: 100,\n          flag: false,\n          dt_timestamp: "2022-05-18 13:51:40.603",\n          dt_date: "2022-05-19"\n      }\n  }\n')),(0,l.kt)("p",null,"before use nulltf transform"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+----+-----+--------------------+----------+\n| name|price| num| flag|        dt_timestamp|   dt_date|\n+-----+-----+----+-----+--------------------+----------+\n|\u540d\u79f01| 22.5| 100|false|2022-05-20 14:34:...|2022-05-20|\n| null| 22.5| 100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| null| 100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| 22.5|null|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5| 100| null|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5| 100|false|                null|2022-05-20|\n|\u540d\u79f01| 22.5| 100|false|2022-05-20 14:37:...|      null|\n+-----+-----+----+-----+--------------------+----------+\n")),(0,l.kt)("p",null,"after use nulltf transform"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+----+-----+--------------------+----------+\n| name|price| num| flag|        dt_timestamp|   dt_date|\n+-----+-----+----+-----+--------------------+----------+\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:34:...|2022-05-20|\n|     | 22.5|100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01|  0.0|100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-18 13:51:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:37:...|2022-05-19|\n+-----+-----+---+-----+--------------------+----------+\n")))}m.isMDXComponent=!0}}]);