"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7941],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3749:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u="Contribute Spark Plugins",p={unversionedId:"contribution/contribute-plugin",id:"contribution/contribute-plugin",title:"Contribute Spark Plugins",description:"There are two parent modules for Spark plugins:",source:"@site/docs/contribution/contribute-plugin.md",sourceDirName:"contribution",slug:"/contribution/contribute-plugin",permalink:"/zh-CN/docs/contribution/contribute-plugin",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/contribution/contribute-plugin.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Create plugin module",id:"create-plugin-module",level:2},{value:"Add plugin implementation",id:"add-plugin-implementation",level:2},{value:"Add plugin to the distribution",id:"add-plugin-to-the-distribution",level:2},{value:"Add information to plugin-mapping.properties file",id:"add-information-to-plugin-mappingproperties-file",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contribute-spark-plugins"},"Contribute Spark Plugins"),(0,a.kt)("p",null,"There are two parent modules for Spark plugins:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors/seatunnel-connectors-spark"},"seatunnel-connectors-spark")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-transforms/seatunnel-transforms-spark"},"seatunnel-transforms-spark"))),(0,a.kt)("p",null,"Once you want to contribute a new plugin, you need to:"),(0,a.kt)("h2",{id:"create-plugin-module"},"Create plugin module"),(0,a.kt)("p",null,"Create your plugin module under the corresponding parent plugin module.\nFor example, if you want to add a new Spark connector plugin, you need to create a new module under the ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-connectors-spark")," module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache.seatunnel</groupId>\n        <artifactId>seatunnel-connectors-spark</artifactId>\n        <version>${revision}</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>seatunnel-connector-spark-hello</artifactId>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.seatunnel</groupId>\n            <artifactId>seatunnel-api-spark</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n    </dependencies>\n</project>\n')),(0,a.kt)("h2",{id:"add-plugin-implementation"},"Add plugin implementation"),(0,a.kt)("p",null,"You need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," service provider interface. e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseSource"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"BaseSink"),"."),(0,a.kt)("p",null,"Conveniently, there are some abstract class can help you easy to create your plugin. If you want to create a source connector,\nyou can implement with ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkBatchSource"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"SparkStreamingSource"),". If you want to create a sink connector, you can implement with ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkBatchSink"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"SparkStreamingSink"),"."),(0,a.kt)("p",null,"The methods defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkBatchSource")," are some lifecycle methods. will be executed by SeaTunnel engine.\nThe execution order of the lifecycle methods is: ",(0,a.kt)("inlineCode",{parentName:"p"},"checkConfig")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"getData")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"close"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Date;\n\n@AutoService(BaseSparkSource.class)\npublic class Hello extends SparkBatchSource {\n    @Override\n    public Dataset<Row> getData(SparkEnvironment env) {\n        // do your logic here to generate data\n        Dataset<Row> dataset = null;\n        return dataset;\n    }\n\n    @Override\n    public CheckResult checkConfig() {\n        return super.checkConfig();\n    }\n\n    @Override\n    public void prepare(SparkEnvironment env) {\n        super.prepare(env);\n    }\n\n    @Override\n    public void close() throws Exception {\n        super.close();\n    }\n\n    @Override\n    public String getPluginName() {\n        return "hello";\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"getPluginName")," method is used to identify the plugin name."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"@AutoService")," is used to generate the ",(0,a.kt)("inlineCode",{parentName:"li"},"META-INF/services/org.apache.seatunnel.BaseSparkSource")," file\nautomatically.")),(0,a.kt)("p",null,"Since this process cannot work on scala, if you use slala to implement your plugin, you need to add a service provider\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"META-INF/services")," file. The file name should be ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.spark.BaseSparkSource"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.spark.BaseSparkSink"),", dependents on the plugin type. The content of the file should be the\nfully qualified class name of your implementation."),(0,a.kt)("h2",{id:"add-plugin-to-the-distribution"},"Add plugin to the distribution"),(0,a.kt)("p",null,"You need to add your plugin to the ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-connectors-spark-dist")," module, then the plugin will in distribution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.seatunnel</groupId>\n    <artifactId>seatunnel-connector-spark-hello</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"After you using ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn package")," to make a distribution, you can find the plugin in your ${distribution}/connectors/spark."),(0,a.kt)("h2",{id:"add-information-to-plugin-mappingproperties-file"},"Add information to plugin-mapping.properties file"),(0,a.kt)("p",null,"SeaTunnel use ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin-mapping.properties")," file to locate the name of the jar package, the file is under the parent module ",(0,a.kt)("inlineCode",{parentName:"p"},"incubator-seatunnel"),", the key/value rule in\nproperties is : ",(0,a.kt)("inlineCode",{parentName:"p"},"engineName.pluginType.pluginName=artifactId"),". eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"spark.source.hello=seatunnel-connector-spark-hello"),".\nSo that SeaTunnel can find plugin jar according to user's config file."),(0,a.kt)("h1",{id:"contribute-flink-plugins"},"Contribute Flink Plugins"),(0,a.kt)("p",null,"The steps to contribute a Flink plugin is similar to the steps to contribute a Spark plugin. Different from Spark, you\nneed to add your plugin in Flink plugin modules."),(0,a.kt)("h1",{id:"add-e2e-tests-for-your-plugin"},"Add e2e tests for your plugin"),(0,a.kt)("p",null,"Once you add a new plugin, it is recommended to add e2e tests for it. We have a ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-e2e")," module to help you to do\nthis."),(0,a.kt)("p",null,"For example, if you want to add an e2e test for your flink connector, you can create a new test in ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-flink-e2e"),"\nmodule. And extend the FlinkContainer class in the test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class HellpSourceIT extends FlinkContainer {\n\n    @Test\n    public void testHellpSource() throws IOException, InterruptedException {\n        Container.ExecResult execResult = executeSeaTunnelFlinkJob("/hello/hellosource.conf");\n        Assertions.assertEquals(0, execResult.getExitCode());\n        // do some other assertion here\n    }\n}\n\n')),(0,a.kt)("p",null,"Once your class implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlinkContainer")," interface, it will auto create a Flink cluster in Docker, and you just need to\nexecute the ",(0,a.kt)("inlineCode",{parentName:"p"},"executeSeaTunnelFlinkJob")," method with your SeaTunnel configuration file, it will submit the SeaTunnel job."),(0,a.kt)("p",null,"In most times, you need to start a third-part datasource in your test, for example, if you add a clickhouse connectors, you may need to\nstart a Clickhouse database in your test. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericContainer")," to start a container."),(0,a.kt)("p",null,"It should be noted that your e2e test class should be named ending with ",(0,a.kt)("inlineCode",{parentName:"p"},"IT"),". By default, we will not execute the test if the class name ending with ",(0,a.kt)("inlineCode",{parentName:"p"},"IT"),".\nYou can add ",(0,a.kt)("inlineCode",{parentName:"p"},"-DskipIT=false")," to execute the e2e test, it will rely on a Docker environment."),(0,a.kt)("h1",{id:"contribute-connector-v2-plugins"},"Contribute Connector-v2 Plugins"),(0,a.kt)("p",null,"If you want to contribute Connector-V2, please click the Connector-V2 Contribution Guide below for reference. It can help you enter development more quickly."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors-v2"},"Connector-v2 Contribution Guide")))}m.isMDXComponent=!0}}]);