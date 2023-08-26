"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[68793],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62627:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},p="SQL UDF",u={unversionedId:"transform-v2/sql-udf",id:"transform-v2/sql-udf",title:"SQL UDF",description:"UDF of SQL transform plugin",source:"@site/docs/transform-v2/sql-udf.md",sourceDirName:"transform-v2",slug:"/transform-v2/sql-udf",permalink:"/docs/transform-v2/sql-udf",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform-v2/sql-udf.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SQL Functions",permalink:"/docs/transform-v2/sql-functions"},next:{title:"SQL",permalink:"/docs/transform-v2/sql"}},s={},c=[{value:"Description",id:"description",level:2},{value:"UDF API",id:"udf-api",level:2},{value:"UDF Implements Example",id:"udf-implements-example",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sql-udf"},"SQL UDF"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"UDF of SQL transform plugin")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Use UDF SPI to extends the SQL transform functions lib."),(0,l.kt)("h2",{id:"udf-api"},"UDF API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.transform.sql.zeta;\n\npublic interface ZetaUDF {\n    /**\n     * Function name\n     *\n     * @return function name\n     */\n    String functionName();\n\n    /**\n     * The type of function result\n     *\n     * @param argsType input arguments type\n     * @return result type\n     */\n    SeaTunnelDataType<?> resultType(List<SeaTunnelDataType<?>> argsType);\n\n    /**\n     * Evaluate\n     *\n     * @param args input arguments\n     * @return result value\n     */\n    Object evaluate(List<Object> args);\n}\n")),(0,l.kt)("h2",{id:"udf-implements-example"},"UDF Implements Example"),(0,l.kt)("p",null,"Add these dependencies and provided scope to your maven project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependencies>\n    <dependency>\n        <groupId>org.apache.seatunnel</groupId>\n        <artifactId>seatunnel-transforms-v2</artifactId>\n        <version>2.3.2</version>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.seatunnel</groupId>\n        <artifactId>seatunnel-api</artifactId>\n        <version>2.3.2</version>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>com.google.auto.service</groupId>\n        <artifactId>auto-service</artifactId>\n        <version>1.0.1</version>\n        <scope>provided</scope>\n    </dependency>\n</dependencies>\n\n")),(0,l.kt)("p",null,"Add a Java Class implements of ZetaUDF like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\n@AutoService(ZetaUDF.class)\npublic class ExampleUDF implements ZetaUDF {\n    @Override\n    public String functionName() {\n        return "EXAMPLE";\n    }\n\n    @Override\n    public SeaTunnelDataType<?> resultType(List<SeaTunnelDataType<?>> argsType) {\n        return BasicType.STRING_TYPE;\n    }\n\n    @Override\n    public Object evaluate(List<Object> args) {\n        String arg = (String) args.get(0);\n        if (arg == null) return null;\n        return "UDF: " + arg;\n    }\n}\n')),(0,l.kt)("p",null,"Package the UDF project and copy the jar to the path: ${SEATUNNEL_HOME}/lib"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"The data read from source is a table like this:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"May Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"22")))),(0,l.kt)("p",null,"We use UDF of SQL query to transform the source data like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'transform {\n  Sql {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    query = "select id, example(name) as name, age from fake"\n  }\n}\n')),(0,l.kt)("p",null,"Then the data in result table ",(0,l.kt)("inlineCode",{parentName:"p"},"fake1")," will update to"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"UDF: Joy Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"UDF: May Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"UDF: Kin Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"UDF: Joy Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"22")))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"new-version"},"new version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add UDF of SQL Transform Connector")))}m.isMDXComponent=!0}}]);