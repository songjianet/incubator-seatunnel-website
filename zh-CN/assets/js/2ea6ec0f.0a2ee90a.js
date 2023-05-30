"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38381],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29745:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},u="Rabbitmq",s={unversionedId:"connector-v2/sink/Rabbitmq",id:"connector-v2/sink/Rabbitmq",title:"Rabbitmq",description:"Rabbitmq sink connector",source:"@site/docs/connector-v2/sink/Rabbitmq.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Rabbitmq",permalink:"/zh-CN/docs/connector-v2/sink/Rabbitmq",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/zh-CN/docs/connector-v2/sink/Phoenix"},next:{title:"Redis",permalink:"/zh-CN/docs/connector-v2/sink/Redis"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"virtual_host string",id:"virtual_host-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"queue_name string",id:"queue_name-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"network_recovery_interval int",id:"network_recovery_interval-int",level:3},{value:"topology_recovery_enabled boolean",id:"topology_recovery_enabled-boolean",level:3},{value:"automatic_recovery_enabled boolean",id:"automatic_recovery_enabled-boolean",level:3},{value:"use_correlation_id boolean",id:"use_correlation_id-boolean",level:3},{value:"connection_timeout int",id:"connection_timeout-int",level:3},{value:"rabbitmq.config map",id:"rabbitmqconfig-map",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],m={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rabbitmq"},"Rabbitmq"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Rabbitmq sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to write data to Rabbitmq."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"virtual_host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queue_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network_recovery_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topology_recovery_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"automatic_recovery_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_correlation_id"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq.config"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"host-string"},"host ","[string]"),(0,l.kt)("p",null,"the default host to use for connections"),(0,l.kt)("h3",{id:"port-int"},"port ","[int]"),(0,l.kt)("p",null,"the default port to use for connections"),(0,l.kt)("h3",{id:"virtual_host-string"},"virtual_host ","[string]"),(0,l.kt)("p",null,"virtual host \u2013 the virtual host to use when connecting to the broker"),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"the AMQP user name to use when connecting to the broker"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"the password to use when connecting to the broker"),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"convenience method for setting the fields in an AMQP URI: host, port, username, password and virtual host"),(0,l.kt)("h3",{id:"queue_name-string"},"queue_name ","[string]"),(0,l.kt)("p",null,"the queue to write the message to"),(0,l.kt)("h3",{id:"schema-config"},"schema ","[Config]"),(0,l.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.kt)("p",null,"the schema fields of upstream data."),(0,l.kt)("h3",{id:"network_recovery_interval-int"},"network_recovery_interval ","[int]"),(0,l.kt)("p",null,"how long will automatic recovery wait before attempting to reconnect, in ms"),(0,l.kt)("h3",{id:"topology_recovery_enabled-boolean"},"topology_recovery_enabled ","[boolean]"),(0,l.kt)("p",null,"if true, enables topology recovery"),(0,l.kt)("h3",{id:"automatic_recovery_enabled-boolean"},"automatic_recovery_enabled ","[boolean]"),(0,l.kt)("p",null,"if true, enables connection recovery"),(0,l.kt)("h3",{id:"use_correlation_id-boolean"},"use_correlation_id ","[boolean]"),(0,l.kt)("p",null,"whether the messages received are supplied with a unique id to deduplicate messages (in case of failed acknowledgments)."),(0,l.kt)("h3",{id:"connection_timeout-int"},"connection_timeout ","[int]"),(0,l.kt)("p",null,"connection TCP establishment timeout in milliseconds; zero for infinite"),(0,l.kt)("h3",{id:"rabbitmqconfig-map"},"rabbitmq.config ","[map]"),(0,l.kt)("p",null,"In addition to the above parameters that must be specified by the RabbitMQ client, the user can also specify multiple non-mandatory parameters for the client, covering ",(0,l.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/configure.html"},"all the parameters specified in the official RabbitMQ document"),"."),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"simple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n      RabbitMQ {\n          host = "rabbitmq-e2e"\n          port = 5672\n          virtual_host = "/"\n          username = "guest"\n          password = "guest"\n          queue_name = "test1"\n          rabbitmq.config = {\n            requested-heartbeat = 10\n            connection-timeout = 10\n          }\n      }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Rabbitmq Sink Connector"),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Change Connector Custom Config Prefix To Map ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3719"},"3719"))))}d.isMDXComponent=!0}}]);