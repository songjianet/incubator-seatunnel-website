"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8823],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=l,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2357:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={},s="S3File",p={unversionedId:"connector-v2/source/S3File",id:"connector-v2/source/S3File",title:"S3File",description:"S3 file source connector",source:"@site/docs/connector-v2/source/S3File.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/S3File",permalink:"/zh-CN/docs/connector-v2/source/S3File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/S3File.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/connector-v2/source/Redis"},next:{title:"SftpFile",permalink:"/zh-CN/docs/connector-v2/source/SftpFile"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"fs.s3a.endpoint string",id:"fss3aendpoint-string",level:3},{value:"fs.s3a.aws.credentials.provider string",id:"fss3aawscredentialsprovider-string",level:3},{value:"delimiter string",id:"delimiter-string",level:3},{value:"parse_partition_from_path boolean",id:"parse_partition_from_path-boolean",level:3},{value:"date_format string",id:"date_format-string",level:3},{value:"datetime_format string",id:"datetime_format-string",level:3},{value:"time_format string",id:"time_format-string",level:3},{value:"type string",id:"type-string",level:3},{value:"bucket string",id:"bucket-string",level:3},{value:"access_key string",id:"access_key-string",level:3},{value:"access_secret string",id:"access_secret-string",level:3},{value:"hadoop_s3_properties map",id:"hadoop_s3_properties-map",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next version",id:"next-version",level:3}],m={toc:c};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3file"},"S3File"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"S3 file source connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Read data from aws s3 file system."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,r.kt)("p",{parentName:"div"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."),(0,r.kt)("p",{parentName:"div"},"To use this connector you need put hadoop-aws-3.1.4.jar and aws-java-sdk-bundle-1.11.271.jar in ${SEATUNNEL_HOME}/lib dir."))),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,r.kt)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,r.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fs.s3a.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fs.s3a.aws.credentials.provider"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"com.amazonaws.auth.InstanceProfileCredentialsProvider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hadoop_s3_properties"),(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"\\001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"HH:mm:ss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema"),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"path-string"},"path ","[string]"),(0,r.kt)("p",null,"The source file path."),(0,r.kt)("h3",{id:"fss3aendpoint-string"},"fs.s3a.endpoint ","[string]"),(0,r.kt)("p",null,"fs s3a endpoint"),(0,r.kt)("h3",{id:"fss3aawscredentialsprovider-string"},"fs.s3a.aws.credentials.provider ","[string]"),(0,r.kt)("p",null,"The way to authenticate s3a. We only support ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"com.amazonaws.auth.InstanceProfileCredentialsProvider")," now."),(0,r.kt)("p",null,"More information about the credential provider you can see ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html#Simple_name.2Fsecret_credentials_with_SimpleAWSCredentialsProvider.2A"},"Hadoop AWS Document")),(0,r.kt)("h3",{id:"delimiter-string"},"delimiter ","[string]"),(0,r.kt)("p",null,"Field delimiter, used to tell connector how to slice and dice fields when reading text files"),(0,r.kt)("p",null,"default ",(0,r.kt)("inlineCode",{parentName:"p"},"\\001"),", the same as hive's default delimiter"),(0,r.kt)("h3",{id:"parse_partition_from_path-boolean"},"parse_partition_from_path ","[boolean]"),(0,r.kt)("p",null,"Control whether parse the partition keys and values from file path"),(0,r.kt)("p",null,"For example if you read a file from path ",(0,r.kt)("inlineCode",{parentName:"p"},"s3n://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26")),(0,r.kt)("p",null,"Every record data from file will be added these two fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"age"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,r.kt)("td",{parentName:"tr",align:null},"26")))),(0,r.kt)("p",null,"Tips: ",(0,r.kt)("strong",{parentName:"p"},"Do not define partition fields in schema option")),(0,r.kt)("h3",{id:"date_format-string"},"date_format ","[string]"),(0,r.kt)("p",null,"Date type format, used to tell connector how to convert string to date, supported as the following formats:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-MM-dd")," ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy/MM/dd")),(0,r.kt)("p",null,"default ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-MM-dd")),(0,r.kt)("h3",{id:"datetime_format-string"},"datetime_format ","[string]"),(0,r.kt)("p",null,"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy/MM/dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyyMMddHHmmss")),(0,r.kt)("p",null,"default ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss")),(0,r.kt)("h3",{id:"time_format-string"},"time_format ","[string]"),(0,r.kt)("p",null,"Time type format, used to tell connector how to convert string to time, supported as the following formats:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"p"},"HH:mm:ss.SSS")),(0,r.kt)("p",null,"default ",(0,r.kt)("inlineCode",{parentName:"p"},"HH:mm:ss")),(0,r.kt)("h3",{id:"type-string"},"type ","[string]"),(0,r.kt)("p",null,"File type, supported as the following file types:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"text")," ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("p",null,"If you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"upstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,r.kt)("p",null,"You can also save multiple pieces of data in one file and split them by newline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'\n{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n\n')),(0,r.kt)("p",null,"you should assign schema as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,r.kt)("p",null,"connector will generate data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"data"),(0,r.kt)("th",{parentName:"tr",align:null},"success"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"get success"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,"If you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,r.kt)("p",null,"If you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," ",(0,r.kt)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not."),(0,r.kt)("p",null,"For example, upstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\ntyrantlucifer#26#male\n\n")),(0,r.kt)("p",null,"If you do not assign data schema connector will treat the upstream data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tyrantlucifer#26#male")))),(0,r.kt)("p",null,"If you assign data schema, you should also assign the option ",(0,r.kt)("inlineCode",{parentName:"p"},"delimiter")," too except CSV file type"),(0,r.kt)("p",null,"you should assign schema and delimiter as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'\ndelimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n\n')),(0,r.kt)("p",null,"connector will generate data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"age"),(0,r.kt)("th",{parentName:"tr",align:null},"gender"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"male")))),(0,r.kt)("h3",{id:"bucket-string"},"bucket ","[string]"),(0,r.kt)("p",null,"The bucket address of s3 file system, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"s3n://seatunnel-test"),", if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"s3a")," protocol, this parameter should be ",(0,r.kt)("inlineCode",{parentName:"p"},"s3a://seatunnel-test"),"."),(0,r.kt)("h3",{id:"access_key-string"},"access_key ","[string]"),(0,r.kt)("p",null,"The access key of s3 file system. If this parameter is not set, please confirm that the credential provider chain can be authenticated correctly, you could check this ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,r.kt)("h3",{id:"access_secret-string"},"access_secret ","[string]"),(0,r.kt)("p",null,"The access secret of s3 file system. If this parameter is not set, please confirm that the credential provider chain can be authenticated correctly, you could check this ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,r.kt)("h3",{id:"hadoop_s3_properties-map"},"hadoop_s3_properties ","[map]"),(0,r.kt)("p",null,"If you need to add a other option, you could add it here and refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'     hadoop_s3_properties {\n           "xxx" = "xxx"\n        }\n')),(0,r.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,r.kt)("p",null,"The schema of upstream data."),(0,r.kt)("h3",{id:"common-options"},"common options"),(0,r.kt)("p",null,"Source plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    path = "/seatunnel/text"\n    fs.s3a.endpoint="s3.cn-north-1.amazonaws.com.cn"\n    fs.s3a.aws.credentials.provider = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    type = "orc"\n  }\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    path = "/seatunnel/json"\n    bucket = "s3a://seatunnel-test"\n    fs.s3a.endpoint="s3.cn-north-1.amazonaws.com.cn"\n    fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    type = "json"\n    schema {\n      fields {\n        id = int \n        name = string\n      }\n    }\n  }\n\n')),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add S3File Source Connector")),(0,r.kt)("h3",{id:"next-version"},"Next version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Feature]"," Support S3A protocol (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3632"},"3632"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allow user to add additional hadoop-s3 parameters"),(0,r.kt)("li",{parentName:"ul"},"Allow the use of the s3a protocol"),(0,r.kt)("li",{parentName:"ul"},"Decouple hadoop-aws dependencies"))),(0,r.kt)("li",{parentName:"ul"},"[Feature]","Set S3 AK to optional (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/"},"3688"),")")))}u.isMDXComponent=!0}}]);