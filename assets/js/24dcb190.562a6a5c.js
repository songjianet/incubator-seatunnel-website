"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9346],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(67294);function r(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(87462),r=n(67294),l=n(72389),i=n(65450),o=n(86010),p="tabItem_LplD";function m(t){var e,n,l,m=t.lazy,u=t.block,d=t.defaultValue,s=t.values,k=t.groupId,c=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=s?s:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.lx)(N,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(e=null!=d?d:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=g[0])?void 0:l.props.value;if(null!==h&&!N.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),b=v.tabGroupChoices,y=v.setTabGroupChoices,_=(0,r.useState)(h),x=_[0],w=_[1],C=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=b[k];null!=O&&O!==x&&N.some((function(t){return t.value===O}))&&w(O)}var E=function(t){var e=t.currentTarget,n=C.indexOf(e),a=N[n].value;a!==x&&(T(e),w(a),null!=k&&y(k,a))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=C.indexOf(t.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(t.currentTarget)-1;n=C[r]||C[C.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},c)},N.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return C.push(t)},onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),m?(0,r.cloneElement)(g.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function u(t){var e=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(e)},t))}},71024:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return d},assets:function(){return s},toc:function(){return k},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(9877),o=n(58215),p=["components"],m={},u="File",d={unversionedId:"connector/sink/File",id:"version-2.2.0-beta/connector/sink/File",title:"File",description:"File sink connector",source:"@site/versioned_docs/version-2.2.0-beta/connector/sink/File.mdx",sourceDirName:"connector/sink",slug:"/connector/sink/File",permalink:"/docs/2.2.0-beta/connector/sink/File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector/sink/File.mdx",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Email",permalink:"/docs/2.2.0-beta/connector/sink/Email"},next:{title:"Hbase",permalink:"/docs/2.2.0-beta/connector/sink/Hbase"}},s={},k=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"options object",id:"options-object",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"path string",id:"path-string",level:3},{value:"path_time_format string",id:"path_time_format-string",level:3},{value:"save_mode string",id:"save_mode-string",level:3},{value:"serializer string",id:"serializer-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"format string",id:"format-string",level:3},{value:"path string",id:"path-string-1",level:3},{value:"path_time_format string",id:"path_time_format-string-1",level:3},{value:"write_mode string",id:"write_mode-string",level:3},{value:"common options string",id:"common-options-string-1",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"rollover_interval long",id:"rollover_interval-long",level:3},{value:"max_part_size long",id:"max_part_size-long",level:3},{value:"prefix string",id:"prefix-string",level:3},{value:"suffix string",id:"suffix-string",level:3},{value:"Example",id:"example",level:2}],c={toc:k};function g(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file"},"File"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"File sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Output data to local or hdfs file."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,l.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: File"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: File")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path_time_format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yyyyMMddHHmmss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serializer"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"options-object"},"options ","[object]"),(0,l.kt)("p",null,"Custom parameters"),(0,l.kt)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,l.kt)("p",null,"Partition data based on selected fields"),(0,l.kt)("h3",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"The file path is required. The ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs file")," starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs://")," , and the ",(0,l.kt)("inlineCode",{parentName:"p"},"local file")," starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"file://"),",\nwe can add the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the path, like ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs:///test_${uuid}_${now}.txt"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.kt)("inlineCode",{parentName:"p"},"path_time_format")),(0,l.kt)("h3",{id:"path_time_format-string"},"path_time_format ","[string]"),(0,l.kt)("p",null,"When the format in the ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," parameter is ",(0,l.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"path_time_format")," can specify the time format of the path, and the default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,l.kt)("h3",{id:"save_mode-string"},"save_mode ","[string]"),(0,l.kt)("p",null,"Storage mode, currently supports ",(0,l.kt)("inlineCode",{parentName:"p"},"overwrite")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"append")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"ignore")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," . For the specific meaning of each mode, see ",(0,l.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html#save-modes"},"save-modes")),(0,l.kt)("h3",{id:"serializer-string"},"serializer ","[string]"),(0,l.kt)("p",null,"Serialization method, currently supports ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"parquet")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"orc")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"text")),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0-beta/connector/sink/common-options"},"Sink Plugin")," for details")),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path_time_format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yyyyMMddHHmmss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rollover_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_part_size"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"seatunnel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},".ext")))),(0,l.kt)("h3",{id:"format-string"},"format ","[string]"),(0,l.kt)("p",null,"Currently, ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," , and ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," are supported. The streaming mode currently only supports ",(0,l.kt)("inlineCode",{parentName:"p"},"text")),(0,l.kt)("h3",{id:"path-string-1"},"path ","[string]"),(0,l.kt)("p",null,"The file path is required. The ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs file")," starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs://")," , and the ",(0,l.kt)("inlineCode",{parentName:"p"},"local file")," starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"file://"),",\nwe can add the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the path, like ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs:///test_${uuid}_${now}.txt"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.kt)("inlineCode",{parentName:"p"},"path_time_format")),(0,l.kt)("h3",{id:"path_time_format-string-1"},"path_time_format ","[string]"),(0,l.kt)("p",null,"When the format in the ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," parameter is ",(0,l.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"path_time_format")," can specify the time format of the path, and the default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,l.kt)("h3",{id:"write_mode-string"},"write_mode ","[string]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"NO_OVERWRITE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"No overwrite, there is an error in the path")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"OVERWRITE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Overwrite, delete and then write if the path exists"))),(0,l.kt)("h3",{id:"common-options-string-1"},"common options ","[string]"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0-beta/connector/sink/common-options"},"Sink Plugin")," for details"),(0,l.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,l.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,l.kt)("p",null,"The parallelism of an individual operator, for FileSink"),(0,l.kt)("h3",{id:"rollover_interval-long"},"rollover_interval ","[long]"),(0,l.kt)("p",null,"The new file part rollover interval, unit min."),(0,l.kt)("h3",{id:"max_part_size-long"},"max_part_size ","[long]"),(0,l.kt)("p",null,"The max size of each file part, unit MB."),(0,l.kt)("h3",{id:"prefix-string"},"prefix ","[string]"),(0,l.kt)("p",null,"The prefix of each file part."),(0,l.kt)("h3",{id:"suffix-string"},"suffix ","[string]"),(0,l.kt)("p",null,"The suffix of each file part."))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'file {\n    path = "file:///var/logs"\n    serializer = "text"\n}\n'))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'FileSink {\n    format = "json"\n    path = "hdfs://localhost:9000/flink/output/"\n    write_mode = "OVERWRITE"\n}\n')))))}g.isMDXComponent=!0}}]);