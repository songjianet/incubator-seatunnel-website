"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1219],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4452:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),o=["components"],i={},l="Greenplum",s={unversionedId:"connector-v2/source/Greenplum",id:"connector-v2/source/Greenplum",title:"Greenplum",description:"Greenplum source connector",source:"@site/docs/connector-v2/source/Greenplum.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Greenplum",permalink:"/docs/connector-v2/source/Greenplum",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Greenplum.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FakeSource",permalink:"/docs/connector-v2/source/FakeSource"},next:{title:"HdfsFile",permalink:"/docs/connector-v2/source/HdfsFile"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"greenplum"},"Greenplum"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Greenplum source connector")),(0,c.kt)("h2",{id:"description"},"Description"),(0,c.kt)("p",null,"Read Greenplum data through ",(0,c.kt)("a",{parentName:"p",href:"/docs/connector-v2/source/Jdbc"},"Jdbc connector"),"."),(0,c.kt)("h2",{id:"key-features"},"Key features"),(0,c.kt)("ul",{className:"contains-task-list"},(0,c.kt)("li",{parentName:"ul",className:"task-list-item"},(0,c.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,c.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,c.kt)("li",{parentName:"ul",className:"task-list-item"},(0,c.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,c.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,c.kt)("li",{parentName:"ul",className:"task-list-item"},(0,c.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,c.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,c.kt)("li",{parentName:"ul",className:"task-list-item"},(0,c.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,c.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection")," ")),(0,c.kt)("p",null,"supports query SQL and can achieve projection effect."),(0,c.kt)("ul",{className:"contains-task-list"},(0,c.kt)("li",{parentName:"ul",className:"task-list-item"},(0,c.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,c.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,c.kt)("li",{parentName:"ul",className:"task-list-item"},(0,c.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,c.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"Optional jdbc drivers:"),(0,c.kt)("ul",{parentName:"div"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"org.postgresql.Driver")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"com.pivotal.jdbc.GreenplumDriver"))),(0,c.kt)("p",{parentName:"div"},"Warn: for license compliance, if you use ",(0,c.kt)("inlineCode",{parentName:"p"},"GreenplumDriver")," the have to provide Greenplum JDBC driver yourself, e.g. copy greenplum-xxx.jar to $SEATNUNNEL_HOME/lib for Standalone."))))}d.isMDXComponent=!0}}]);