"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22618],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),l=n(72389),i=n(65450),o=n(86010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,i.UB)(),h=f.tabGroupChoices,y=f.setTabGroupChoices,w=(0,r.useState)(N),_=w[0],j=w[1],T=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=h[m];null!=O&&O!==_&&b.some((function(e){return e.value===O}))&&j(O)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==_&&(x(t),j(a),null!=m&&y(m,a))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return T.push(e)},onKeyDown:q,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},20304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(9877),o=n(58215),u=["components"],s={},p="Jdbc",d={unversionedId:"connector/source/Jdbc",id:"version-2.1.2/connector/source/Jdbc",title:"Jdbc",description:"Description",source:"@site/versioned_docs/version-2.1.2/connector/source/Jdbc.mdx",sourceDirName:"connector/source",slug:"/connector/source/Jdbc",permalink:"/docs/2.1.2/connector/source/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/source/Jdbc.mdx",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"InfluxDb",permalink:"/docs/2.1.2/connector/source/InfluxDb"},next:{title:"Kafka",permalink:"/docs/2.1.2/connector/source/Kafka"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"password string",id:"password-string",level:3},{value:"password",id:"password",level:5},{value:"url string",id:"url-string",level:3},{value:"jdbc string",id:"jdbc-string",level:3},{value:"user string",id:"user-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"query string",id:"query-string",level:3},{value:"fetch_size int",id:"fetch_size-int",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"partition_column string",id:"partition_column-string",level:3},{value:"partition_upper_bound long",id:"partition_upper_bound-long",level:3},{value:"partition_lower_bound long",id:"partition_lower_bound-long",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],k={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jdbc"},"Jdbc"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read external data source data through JDBC"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,l.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Jdbc"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Jdbc")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jdbc.*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"))))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_column"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))),(0,l.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc class name")," used to connect to the remote data source, if you use MySQL the value is ",(0,l.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),"."),(0,l.kt)("p",null,"Warn: for license compliance, you have to provide MySQL JDBC driver yourself, e.g. copy ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql-connector-java-xxx.jar")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib")," for Standalone."),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("h5",{id:"password"},"password"),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"The URL of the JDBC connection. Refer to a case: ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:postgresql://localhost/test")),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("h3",{id:"jdbc-string"},"jdbc ","[string]"),(0,l.kt)("p",null,"In addition to the parameters that must be specified above, users can also specify multiple optional parameters, which cover ",(0,l.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html#jdbc-to-other-databases"},"all the parameters")," provided by Spark JDBC."),(0,l.kt)("p",null,"The way to specify parameters is to add the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc.")," to the original parameter name. For example, the way to specify ",(0,l.kt)("inlineCode",{parentName:"p"},"fetchsize")," is: ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc.fetchsize = 50000")," . If these non-essential parameters are not specified, they will use the default values given by Spark JDBC."),(0,l.kt)("h3",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"username"),(0,l.kt)("h3",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"table name")),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"username"),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Query statement"),(0,l.kt)("h3",{id:"fetch_size-int"},"fetch_size ","[int]"),(0,l.kt)("p",null,"fetch size"),(0,l.kt)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,l.kt)("p",null,"The parallelism of an individual operator, for JdbcSource."),(0,l.kt)("h3",{id:"partition_column-string"},"partition_column ","[string]"),(0,l.kt)("p",null,"The column name for parallelism's partition, only support numeric type."),(0,l.kt)("h3",{id:"partition_upper_bound-long"},"partition_upper_bound ","[long]"),(0,l.kt)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,l.kt)("h3",{id:"partition_lower_bound-long"},"partition_lower_bound ","[long]"),(0,l.kt)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."))),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.1.2/connector/source/common-options"},"Source Plugin")," for details"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.jdbc.Driver"\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Read MySQL data through JDBC")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.jdbc.Driver"\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n    jdbc.partitionColumn = "item_id"\n    jdbc.numPartitions = "10"\n    jdbc.lowerBound = 0\n    jdbc.upperBound = 100\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Divide partitions based on specified fields")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.jdbc.Driver"\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n    \n    jdbc.connect_timeout = 10000\n    jdbc.socket_timeout = 10000\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Timeout config"))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'JdbcSource {\n    driver = com.mysql.jdbc.Driver\n    url = "jdbc:mysql://localhost/test"\n    username = root\n    query = "select * from test"\n}\n')))))}g.isMDXComponent=!0}}]);