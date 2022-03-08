"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6316],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c="How to add a new License Guide",l={unversionedId:"developement/NewLicenseGuide",id:"developement/NewLicenseGuide",title:"How to add a new License Guide",description:"If you have any new Jar binary package adding in you PR, you need to follow the steps below to notice license",source:"@site/docs/developement/NewLicenseGuide.md",sourceDirName:"developement",slug:"/developement/NewLicenseGuide",permalink:"/docs/developement/NewLicenseGuide",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/developement/NewLicenseGuide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/developement/FAQ"},next:{title:"Deployment and run",permalink:"/docs/flink/deployment"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-add-a-new-license-guide"},"How to add a new License Guide"),(0,i.kt)("p",null,"If you have any new Jar binary package adding in you PR, you need to follow the steps below to notice license"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"tools/dependencies/known-dependencies.txt"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the corresponding License file under ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-dist/release-docs/licenses"),", if it is a standard Apache License, it does not need to be added")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the corresponding statement in ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-dist/release-docs/LICENSE")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# At the same time, you can also use the script to assist the inspection.\n# Because it only uses the Python native APIs and does not depend on any third-party libraries, it can run using the original Python environment.\n# Please refer to the documentation if you do not have a Python env: https://www.python.org/downloads/\n\n# First, generate the seatunnel-dist/target/THIRD-PARTY.txt temporary file\n./mvnw license:aggregate-add-third-party -DskipTests -Dcheckstyle.skip\n# Second, run the script to assist the inspection\npython3 tools/dependencies/license.py seatunnel-dist/target/THIRD-PARTY.txt seatunnel-dist/release-docs/LICENSE true\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the corresponding statement in ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-dist/release-docs/NOTICE")))),(0,i.kt)("p",null,"If you want to learn more about strategy of License, you could read\n",(0,i.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/community/submit_guide/license"},"License Notice")," in submit guide."))}m.isMDXComponent=!0}}]);