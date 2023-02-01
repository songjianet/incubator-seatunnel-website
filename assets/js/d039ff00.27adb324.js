"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[532],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={},p="S3File",s={unversionedId:"connector-v2/sink/S3File",id:"connector-v2/sink/S3File",title:"S3File",description:"S3 file sink connector",source:"@site/docs/connector-v2/sink/S3File.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/S3File",permalink:"/docs/connector-v2/sink/S3File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/S3File.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"S3Redshift",permalink:"/docs/connector-v2/sink/S3-Redshift"},next:{title:"SelectDB Cloud",permalink:"/docs/connector-v2/sink/SelectDB-Cloud"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"bucket string",id:"bucket-string",level:3},{value:"fs.s3a.endpoint string",id:"fss3aendpoint-string",level:3},{value:"fs.s3a.aws.credentials.provider string",id:"fss3aawscredentialsprovider-string",level:3},{value:"access_key string",id:"access_key-string",level:3},{value:"access_secret string",id:"access_secret-string",level:3},{value:"hadoop_s3_properties map",id:"hadoop_s3_properties-map",level:3},{value:"custom_filename boolean",id:"custom_filename-boolean",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"file_format string",id:"file_format-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"have_partition boolean",id:"have_partition-boolean",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3},{value:"Next version",id:"next-version",level:3}],u={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"s3file"},"S3File"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"S3 file sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Output data to aws s3 file system."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.kt)("p",{parentName:"div"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."),(0,l.kt)("p",{parentName:"div"},"To use this connector you need put hadoop-aws-3.1.4.jar and aws-java-sdk-bundle-1.11.271.jar in ${SEATUNNEL_HOME}/lib dir."))),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.kt)("p",null,"By default, we use 2PC commit to ensure ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once")),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,l.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"),(0,l.kt)("th",{parentName:"tr",align:null},"remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fs.s3a.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fs.s3a.aws.credentials.provider"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"com.amazonaws.auth.InstanceProfileCredentialsProvider"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Only used when fs.s3a.aws.credentials.provider = org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Only used when fs.s3a.aws.credentials.provider = org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom_filename"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether you need custom the filename")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file_name_expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,l.kt)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filename_time_format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,l.kt)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file_format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"csv"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"'\\001'"),(0,l.kt)("td",{parentName:"tr",align:null},"Only used when file_format is text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"row_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"\\n"'),(0,l.kt)("td",{parentName:"tr",align:null},"Only used when file_format is text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"have_partition"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether you need processing partitions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,l.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink_columns"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1000000"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"The target dir path is required."),(0,l.kt)("h3",{id:"bucket-string"},"bucket ","[string]"),(0,l.kt)("p",null,"The bucket address of s3 file system, for example: ",(0,l.kt)("inlineCode",{parentName:"p"},"s3n://seatunnel-test"),", if you use ",(0,l.kt)("inlineCode",{parentName:"p"},"s3a")," protocol, this parameter should be ",(0,l.kt)("inlineCode",{parentName:"p"},"s3a://seatunnel-test"),"."),(0,l.kt)("h3",{id:"fss3aendpoint-string"},"fs.s3a.endpoint ","[string]"),(0,l.kt)("p",null,"fs s3a endpoint"),(0,l.kt)("h3",{id:"fss3aawscredentialsprovider-string"},"fs.s3a.aws.credentials.provider ","[string]"),(0,l.kt)("p",null,"The way to authenticate s3a. We only support ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"com.amazonaws.auth.InstanceProfileCredentialsProvider")," now."),(0,l.kt)("p",null,"More information about the credential provider you can see ",(0,l.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html#Simple_name.2Fsecret_credentials_with_SimpleAWSCredentialsProvider.2A"},"Hadoop AWS Document")),(0,l.kt)("h3",{id:"access_key-string"},"access_key ","[string]"),(0,l.kt)("p",null,"The access key of s3 file system. If this parameter is not set, please confirm that the credential provider chain can be authenticated correctly, you could check this ",(0,l.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,l.kt)("h3",{id:"access_secret-string"},"access_secret ","[string]"),(0,l.kt)("p",null,"The access secret of s3 file system. If this parameter is not set, please confirm that the credential provider chain can be authenticated correctly, you could check this ",(0,l.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,l.kt)("h3",{id:"hadoop_s3_properties-map"},"hadoop_s3_properties ","[map]"),(0,l.kt)("p",null,"If you need to add a other option, you could add it here and refer to this ",(0,l.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'     hadoop_s3_properties {\n           "fs.s3a.buffer.dir" = "/data/st_test/s3a"\n           "fs.s3a.fast.upload.buffer" = "disk"\n        }\n')),(0,l.kt)("h3",{id:"custom_filename-boolean"},"custom_filename ","[boolean]"),(0,l.kt)("p",null,"Whether custom the filename"),(0,l.kt)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,l.kt)("p",null,"Only used when ",(0,l.kt)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,l.kt)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,l.kt)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.kt)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,l.kt)("p",null,"Please note that, If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.kt)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,l.kt)("p",null,"Only used when ",(0,l.kt)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,"When the format in the ",(0,l.kt)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,l.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.kt)("h3",{id:"file_format-string"},"file_format ","[string]"),(0,l.kt)("p",null,"We supported as the following file types:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"text")," ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,l.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,l.kt)("inlineCode",{parentName:"p"},"parquet")),(0,l.kt)("p",null,"Please note that, The final file name will end with the file_format's suffix, the suffix of the text file is ",(0,l.kt)("inlineCode",{parentName:"p"},"txt"),"."),(0,l.kt)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,l.kt)("p",null,"The separator between columns in a row of data. Only needed by ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," file format."),(0,l.kt)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,l.kt)("p",null,"The separator between rows in a file. Only needed by ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," file format."),(0,l.kt)("h3",{id:"have_partition-boolean"},"have_partition ","[boolean]"),(0,l.kt)("p",null,"Whether you need processing partitions."),(0,l.kt)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,l.kt)("p",null,"Only used when ",(0,l.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"Partition data based on selected fields."),(0,l.kt)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,l.kt)("p",null,"Only used when ",(0,l.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,l.kt)("p",null,"Default ",(0,l.kt)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,l.kt)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,l.kt)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,l.kt)("p",null,"Only used when ",(0,l.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,l.kt)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,l.kt)("p",null,"Which columns need be written to file, default value is all the columns get from ",(0,l.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,l.kt)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,l.kt)("p",null,"Please note that, If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.kt)("p",null,"Only support ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," now."),(0,l.kt)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.kt)("p",null,"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger."),(0,l.kt)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.kt)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"txt: ",(0,l.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.kt)("inlineCode",{parentName:"li"},"none")),(0,l.kt)("li",{parentName:"ul"},"json: ",(0,l.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.kt)("inlineCode",{parentName:"li"},"none")),(0,l.kt)("li",{parentName:"ul"},"csv: ",(0,l.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.kt)("inlineCode",{parentName:"li"},"none")),(0,l.kt)("li",{parentName:"ul"},"orc: ",(0,l.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.kt)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.kt)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.kt)("inlineCode",{parentName:"li"},"zlib")," ",(0,l.kt)("inlineCode",{parentName:"li"},"none")),(0,l.kt)("li",{parentName:"ul"},"parquet: ",(0,l.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.kt)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.kt)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.kt)("inlineCode",{parentName:"li"},"gzip")," ",(0,l.kt)("inlineCode",{parentName:"li"},"brotli")," ",(0,l.kt)("inlineCode",{parentName:"li"},"zstd")," ",(0,l.kt)("inlineCode",{parentName:"li"},"none"))),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"For text file format with ",(0,l.kt)("inlineCode",{parentName:"p"},"have_partition")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"custom_filename")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"sink_columns")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"com.amazonaws.auth.InstanceProfileCredentialsProvider")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/text"\n    fs.s3a.endpoint="s3.cn-north-1.amazonaws.com.cn"\n    fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    file_format="text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction=true\n    hadoop_s3_properties {\n      "fs.s3a.buffer.dir" = "/data/st_test/s3a"\n      "fs.s3a.fast.upload.buffer" = "disk"\n    }\n  }\n\n')),(0,l.kt)("p",null,"For parquet file format simple config with ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/parquet"\n    fs.s3a.endpoint="s3.cn-north-1.amazonaws.com.cn"\n    fs.s3a.aws.credentials.provider="org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    file_format="parquet"\n    hadoop_s3_properties {\n      "fs.s3a.buffer.dir" = "/data/st_test/s3a"\n      "fs.s3a.fast.upload.buffer" = "disk"\n    }\n  }\n\n')),(0,l.kt)("p",null,"For orc file format simple config with ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/orc"\n    fs.s3a.endpoint="s3.cn-north-1.amazonaws.com.cn"\n    fs.s3a.aws.credentials.provider="org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    file_format="orc"\n  }\n\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add S3File Sink Connector")),(0,l.kt)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3258"},"3258"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,l.kt)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,l.kt)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed"))),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support S3A protocol (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3632"},"3632"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Allow user to add additional hadoop-s3 parameters"),(0,l.kt)("li",{parentName:"ul"},"Allow the use of the s3a protocol"),(0,l.kt)("li",{parentName:"ul"},"Decouple hadoop-aws dependencies"))),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Support setting batch size for every file (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3625"},"3625"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]","Set S3 AK to optional (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/"},"3688"),")")),(0,l.kt)("h3",{id:"next-version"},"Next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u200b\t","[Improve]"," Support file compress (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3899"},"3899"),")")))}k.isMDXComponent=!0}}]);