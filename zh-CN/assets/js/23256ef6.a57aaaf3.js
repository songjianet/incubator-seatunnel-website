"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[403],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(a),k=l,c=s["".concat(u,".").concat(k)]||s[k]||d[k]||r;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},58215:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294);function l(t){var e=t.children,a=t.hidden,l=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},e)}},9877:function(t,e,a){a.d(e,{Z:function(){return p}});var n=a(87462),l=a(67294),r=a(72389),i=a(65450),o=a(86010),u="tabItem_LplD";function m(t){var e,a,r,m=t.lazy,p=t.block,d=t.defaultValue,s=t.values,k=t.groupId,c=t.className,g=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=s?s:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.lx)(N,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(e=null!=d?d:null==(a=g.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(r=g[0])?void 0:r.props.value;if(null!==b&&!N.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),v=h.tabGroupChoices,y=h.setTabGroupChoices,_=(0,l.useState)(b),w=_[0],O=_[1],F=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=v[k];null!=T&&T!==w&&N.some((function(t){return t.value===T}))&&O(T)}var x=function(t){var e=t.currentTarget,a=F.indexOf(e),n=N[a].value;n!==w&&(S(e),O(n),null!=k&&y(k,n))},z=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=F.indexOf(t.currentTarget)+1;a=F[n]||F[0];break;case"ArrowLeft":var l=F.indexOf(t.currentTarget)-1;a=F[l]||F[F.length-1]}null==(e=a)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},c)},N.map((function(t){var e=t.value,a=t.label,r=t.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return F.push(t)},onKeyDown:z,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===e})}),null!=a?a:e)}))),m?(0,l.cloneElement)(g.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function p(t){var e=(0,r.Z)();return l.createElement(m,(0,n.Z)({key:String(e)},t))}},77754:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return s},toc:function(){return k},default:function(){return g}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(9877),o=a(58215),u=["components"],m={},p="Fake",d={unversionedId:"connector/source/Fake",id:"version-2.3.0-beta/connector/source/Fake",title:"Fake",description:"Fake source connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/source/Fake.mdx",sourceDirName:"connector/source",slug:"/connector/source/Fake",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/Fake",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/source/Fake.mdx",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/Elasticsearch"},next:{title:"Feishu Sheet",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/FeishuSheet"}},s={},k=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"content array",id:"content-array",level:3},{value:"rate number",id:"rate-number",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"mock_data_schema Option  [listcolumn_config]",id:"mock_data_schema-option--listcolumn_config",level:3},{value:"mock_data_size Option int",id:"mock_data_size-option-int",level:3},{value:"mock_data_interval Option int",id:"mock_data_interval-option-int",level:3},{value:"Examples",id:"examples",level:2},{value:"Fake",id:"fake-1",level:3},{value:"FakeStream",id:"fakestream",level:3},{value:"FakeSourceStream",id:"fakesourcestream",level:3},{value:"FakeSource",id:"fakesource",level:3}],c={toc:k};function g(t){var e=t.components,a=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fake"},"Fake"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fake source connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Fake")," is mainly used to conveniently generate user-specified data, which is used as input for functional verification, testing, and performance testing of seatunnel."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,r.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Fake, FakeStream"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: FakeSource, FakeSourceStream",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Flink ",(0,r.kt)("inlineCode",{parentName:"li"},"Fake Source")," is mainly used to automatically generate data. The data has only two columns. The first column is of ",(0,r.kt)("inlineCode",{parentName:"li"},"String type")," and the content is a random one from ",(0,r.kt)("inlineCode",{parentName:"li"},'["Gary", "Ricky Huo", "Kid Xiong"]')," . The second column is of ",(0,r.kt)("inlineCode",{parentName:"li"},"Int type")," , which is the current 13-digit timestamp is used as input for functional verification and testing of ",(0,r.kt)("inlineCode",{parentName:"li"},"seatunnel")," .")))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"These options is for Spark:",(0,r.kt)("inlineCode",{parentName:"p"},"FakeStream"),", and Spark:",(0,r.kt)("inlineCode",{parentName:"p"},"Fake")," do not have any options"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rate"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"content-array"},"content ","[array]"),(0,r.kt)("p",null,"List of test data strings"),(0,r.kt)("h3",{id:"rate-number"},"rate ","[number]"),(0,r.kt)("p",null,"Number of test cases generated per second")),(0,r.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mock_data_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"list ","[column_config]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"see details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mock_data_size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mock_data_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"int (second)"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.kt)("p",null,"The parallelism of an individual operator, for Fake Source Stream"))),(0,r.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.kt)("p",null,"Source plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/connector/source/common-options"},"Source Plugin")," for details"),(0,r.kt)("h3",{id:"mock_data_schema-option--listcolumn_config"},"mock_data_schema Option  [list","[column_config]","]"),(0,r.kt)("p",null,"Config mock data's schema. Each is column_config option."),(0,r.kt)("p",null,"When mock_data_schema is not defined. Data will generate with schema like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mock_data_schema = [\n  {\n    name = "name",\n    type = "string",\n    mock_config = {\n      string_seed = ["Gary", "Ricky Huo", "Kid Xiong"]\n      size_range = [1,1]\n    }\n  }\n  {\n    name = "age",\n    type = "int",\n    mock_config = {\n      int_range = [1, 100]\n    }\n  }\n]\n')),(0,r.kt)("p",null,"column_config option type."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"support values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"int,integer,byte,boolean,char,",(0,r.kt)("br",null),"character,short,long,float,double,",(0,r.kt)("br",null),"date,timestamp,decimal,bigdecimal,",(0,r.kt)("br",null),"bigint,int[],byte[],",(0,r.kt)("br",null),"boolean[],char[],character[],short[],",(0,r.kt)("br",null),"long[],float[],double[],string[],",(0,r.kt)("br",null),"binary,varchar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mock_config"),(0,r.kt)("td",{parentName:"tr",align:null},"mock_config"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,"mock_config Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"sample"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"byte_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[byte][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[0,127]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean_seed"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[boolean]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, true, false]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char_seed"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[char][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"['a','b','c']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[string][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},'["1970-01-01", "2100-12-31"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal_scale"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[double][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[0.0, 10000.0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[flout][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[0.0, 10000.0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[int][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 100]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[long][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 100000]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_regex"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},'"',"[1-9]","{1}","\\",'d?"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[int][size=6]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[0,24,0,60,0,60]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size_range"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[int][size=2]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"[6,10]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string_regex"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},'"',"[a-z0-9]","{5}","\\","@","\\","w{3}","\\",".","[a-z]",'{3}"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string_seed"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},'["Gary", "Ricky Huo", "Kid Xiong"]')))),(0,r.kt)("h3",{id:"mock_data_size-option-int"},"mock_data_size Option ","[int]"),(0,r.kt)("p",null,"Config mock data size."),(0,r.kt)("h3",{id:"mock_data_interval-option-int"},"mock_data_interval Option ","[int]"),(0,r.kt)("p",null,"Config the data can mock with interval, The unit is SECOND."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,r.kt)("h3",{id:"fake-1"},"Fake"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Fake {\n    result_table_name = "my_dataset"\n}\n')),(0,r.kt)("h3",{id:"fakestream"},"FakeStream"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fakeStream {\n    content = ['name=ricky&age=23', 'name=gary&age=28']\n    rate = 5\n}\n")),(0,r.kt)("p",null,"The generated data is as follows, randomly extract the string from the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"+-----------------+\n|raw_message      |\n+-----------------+\n|name=gary&age=28 |\n|name=ricky&age=23|\n+-----------------+\n"))),(0,r.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,r.kt)("h3",{id:"fakesourcestream"},"FakeSourceStream"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n')),(0,r.kt)("h3",{id:"fakesource"},"FakeSource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSource {\n        result_table_name = "fake"\n        field_name = "name,age"\n        mock_data_size = 100 // will generate 100 rows mock data.\n    }\n}\n')))))}g.isMDXComponent=!0}}]);