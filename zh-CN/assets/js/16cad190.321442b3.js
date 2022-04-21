"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7963],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Hive",p={unversionedId:"connector/sink/Hive",id:"connector/sink/Hive",title:"Hive",description:"Description",source:"@site/docs/connector/sink/Hive.md",sourceDirName:"connector/sink",slug:"/connector/sink/Hive",permalink:"/zh-CN/docs/connector/sink/Hive",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/sink/Hive.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hbase",permalink:"/zh-CN/docs/connector/sink/Hbase"},next:{title:"Hudi",permalink:"/zh-CN/docs/connector/sink/Hudi"}},c={},m=[{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"sql string",id:"sql-string",level:5},{value:"Source_table_name string",id:"source_table_name-string",level:5},{value:"result_table_name string",id:"result_table_name-string",level:5},{value:"save_mode string",id:"save_mode-string",level:5},{value:"sink_columns string",id:"sink_columns-string",level:5},{value:"partition_by [Arraystring]",id:"partition_by-arraystring",level:5},{value:"Example",id:"example",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hive"},"Hive"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Write Rows to ",(0,i.kt)("a",{parentName:"p",href:"https://hive.apache.org"},"Apache Hive"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,i.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Hive"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#sql-string"},"sql")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#source_table_name-string"},"source_table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#result_table_name-string"},"result_table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#sink_columns-string"},"sink_columns")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#save_mode-string"},"save_mode")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#partition_by-arraystring"},"partition_by")),(0,i.kt)("td",{parentName:"tr",align:null},"Array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"sql-string"},"sql ","[string]"),(0,i.kt)("p",null,"Hive sql\uff1athe whole insert data sql, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"insert into/overwrite $table  select * from xxx_table "),", If this option exists, other options will be ignored."),(0,i.kt)("h5",{id:"source_table_name-string"},"Source_table_name ","[string]"),(0,i.kt)("p",null,"Datasource of this plugin."),(0,i.kt)("h5",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,i.kt)("p",null,"The output hive table name if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,i.kt)("p",null,"Same with option ",(0,i.kt)("inlineCode",{parentName:"p"},"spark.mode")," in Spark, combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h5",{id:"sink_columns-string"},"sink_columns ","[string]"),(0,i.kt)("p",null,"Specify the selected fields which write to result_table_name, separated by commas, combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name"),"\xa0if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h5",{id:"partition_by-arraystring"},"partition_by [Array","[string]","]"),(0,i.kt)("p",null,"Hive partition fields, combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'sink {\n  Hive {\n    sql = "insert overwrite table seatunnel.test1 partition(province) select name,age,province from myTable2"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'sink {\n  Hive {\n    source_table_name = "myTable2"\n    result_table_name = "seatunnel.test1"\n    save_mode = "overwrite"\n    sink_columns = "name,age,province"\n    partition_by = ["province"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);