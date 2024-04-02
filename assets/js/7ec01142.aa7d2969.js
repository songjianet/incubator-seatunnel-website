"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6024],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31763:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:8},c=void 0,s={unversionedId:"seatunnel-engine/engine-jar-storage-mode",id:"seatunnel-engine/engine-jar-storage-mode",title:"engine-jar-storage-mode",description:"----------------",source:"@site/docs/seatunnel-engine/engine-jar-storage-mode.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/engine-jar-storage-mode",permalink:"/docs/seatunnel-engine/engine-jar-storage-mode",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/engine-jar-storage-mode.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"tcp",permalink:"/docs/seatunnel-engine/tcp"},next:{title:"Seatunnel runs on Flink",permalink:"/docs/other-engine/flink"}},p={},u=[{value:"Related configuration",id:"related-configuration",level:2},{value:"IsolatedConnectorJarStorageStrategy",id:"isolatedconnectorjarstoragestrategy",level:2},{value:"SharedConnectorJarStorageStrategy",id:"sharedconnectorjarstoragestrategy",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"config-engine-jar-storage-mode"},"Config Engine Jar Storage Mode"),(0,o.kt)("p",null,":::warn"),(0,o.kt)("p",null,"Please note that this feature is currently in an experimental stage, and there are many areas that still need improvement. Therefore, we recommend exercising caution when using this feature to avoid potential issues and unnecessary risks.\nWe are committed to ongoing efforts to enhance and stabilize this functionality, ensuring a better experience for you."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,"We can enable the optimization job submission process, which is configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunel.yaml"),". After enabling the optimization of the Seatunnel job submission process configuration item,\nusers can use the Seatunnel Zeta engine as the execution engine without placing the connector Jar packages required for task execution or the third-party Jar packages that the connector relies on in each engine ",(0,o.kt)("inlineCode",{parentName:"p"},"connector")," directory.\nUsers only need to place all the Jar packages for task execution on the client that submits the job, and the client will automatically upload the Jars required for task execution to the Zeta engine. It is necessary to enable this configuration item when submitting jobs in Docker or k8s mode,\nwhich can fundamentally solve the problem of large container /image_en caused by the heavy weight of the Seatunnel Zeta engine. In the image, only the core framework package of the Zeta engine needs to be provided,\nand then the jar package of the connector and the third-party jar package that the connector relies on can be separately uploaded to the pod for distribution."),(0,o.kt)("p",null,"After enabling the optimization job submission process configuration item, you do not need to place the following two types of Jar packages in the Zeta engine:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"COMMON_PLUGIN_JARS"),(0,o.kt)("li",{parentName:"ul"},"CONNECTOR_PLUGIN_JARS")),(0,o.kt)("p",null,"COMMON",(0,o.kt)("em",{parentName:"p"}," PLUGIN")," JARS refers to the third-party Jar package that the connector relies on, CONNECTOR",(0,o.kt)("em",{parentName:"p"}," PLUGIN")," JARS refers to the connector Jar package.\nWhen common jars do not exist in Zeta's ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),", it can upload the local common jars of the client to the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," directory of all engine nodes.\nThis way, even if the user does not place a jar on all nodes in Zeta's ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),", the task can still be executed normally.\nHowever, we do not recommend relying on the configuration item of opening the optimization job submission process to upload the third-party Jar package that the connector relies on.\nIf you use Zeta Engine, please add the third-party jar package files that the connector relies on to ",(0,o.kt)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/lib/")," directory on each node, such as jdbc drivers."),(0,o.kt)("h1",{id:"connectorjar-storage-strategy"},"ConnectorJar storage strategy"),(0,o.kt)("p",null,"You can configure the storage strategy of the current connector Jar package and the third-party Jar package that the connector depends on through the configuration file.\nThere are two storage strategies that can be configured, namely shared Jar package storage strategy and isolated Jar package storage strategy.\nTwo different storage strategies provide a more flexible storage mode for Jar files. You can configure the storage strategy to share the same Jar package file with multiple execution jobs in the engine."),(0,o.kt)("h2",{id:"related-configuration"},"Related configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"),(0,o.kt)("th",{parentName:"tr",align:null},"describe"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector-jar-storage-enable"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to enable uploading the connector Jar package to the engine. The default enabled state is false.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector-jar-storage-mode"),(0,o.kt)("td",{parentName:"tr",align:null},"SHARED"),(0,o.kt)("td",{parentName:"tr",align:null},"Engine-side Jar package storage mode selection. There are two optional modes, SHARED and ISOLATED. The default Jar package storage mode is SHARED.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector-jar-storage-path"),(0,o.kt)("td",{parentName:"tr",align:null},'" "'),(0,o.kt)("td",{parentName:"tr",align:null},"User-defined Jar package storage path.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector-jar-cleanup-task-interval"),(0,o.kt)("td",{parentName:"tr",align:null},"3600s"),(0,o.kt)("td",{parentName:"tr",align:null},"Engine-side Jar package cleaning scheduled task execution interval.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector-jar-expiry-time"),(0,o.kt)("td",{parentName:"tr",align:null},"600s"),(0,o.kt)("td",{parentName:"tr",align:null},"Engine-side Jar package storage expiration time.")))),(0,o.kt)("h2",{id:"isolatedconnectorjarstoragestrategy"},"IsolatedConnectorJarStorageStrategy"),(0,o.kt)("p",null,"Before the job is submitted, the connector Jar package will be uploaded to an independent file storage path on the Master node.\nThe connector Jar packages of different jobs are in different storage paths, so the connector Jar packages of different jobs are isolated from each other.\nThe Jar package files required for the execution of a job have no influence on other jobs. When the current job execution ends, the Jar package file in the storage path generated based on the JobId will be deleted."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'jar-storage:\n   connector-jar-storage-enable: true\n   connector-jar-storage-mode: ISOLATED\n   connector-jar-storage-path: ""\n   connector-jar-cleanup-task-interval: 3600\n   connector-jar-expiry-time: 600\n')),(0,o.kt)("p",null,"Detailed explanation of configuration parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"connector-jar-storage-enable: Enable uploading the connector Jar package before executing the job."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-storage-mode: Connector Jar package storage mode, two storage modes are available: shared mode (SHARED) and isolation mode (ISOLATED)."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-storage-path: The local storage path of the user-defined connector Jar package on the Zeta engine."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-cleanup-task-interval: Zeta engine connector Jar package scheduled cleanup task interval, the default is 3600 seconds."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-expiry-time: The expiration time of the connector Jar package. The default is 600 seconds.")),(0,o.kt)("h2",{id:"sharedconnectorjarstoragestrategy"},"SharedConnectorJarStorageStrategy"),(0,o.kt)("p",null,"Before the job is submitted, the connector Jar package will be uploaded to the Master node. Different jobs can share connector jars on the Master node if they use the same Jar package file.\nAll Jar package files are persisted to a shared file storage path, and Jar packages that reference the Master node can be shared between different jobs. After the task execution is completed,\nthe SharedConnectorJarStorageStrategy will not immediately delete all Jar packages related to the current task execution\uff0cbut instead has an independent thread responsible for cleaning up the work.\nThe configuration in the following configuration file sets the running time of the cleaning work and the survival time of the Jar package."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'jar-storage:\n   connector-jar-storage-enable: true\n   connector-jar-storage-mode: SHARED\n   connector-jar-storage-path: ""\n   connector-jar-cleanup-task-interval: 3600\n   connector-jar-expiry-time: 600\n')),(0,o.kt)("p",null,"Detailed explanation of configuration parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"connector-jar-storage-enable: Enable uploading the connector Jar package before executing the job."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-storage-mode: Connector Jar package storage mode, two storage modes are available: shared mode (SHARED) and isolation mode (ISOLATED)."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-storage-path: The local storage path of the user-defined connector Jar package on the Zeta engine."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-cleanup-task-interval: Zeta engine connector Jar package scheduled cleanup task interval, the default is 3600 seconds."),(0,o.kt)("li",{parentName:"ul"},"connector-jar-expiry-time: The expiration time of the connector Jar package. The default is 600 seconds.")))}g.isMDXComponent=!0}}]);