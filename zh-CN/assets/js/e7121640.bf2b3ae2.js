"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8975],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return g}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),h=p(t),g=l,m=h["".concat(c,".").concat(g)]||h[g]||s[g]||r;return t?a.createElement(m,i(i({ref:n},o),{},{components:t})):a.createElement(m,i({ref:n},o))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=h;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3195:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return o},toc:function(){return s},default:function(){return g}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=["components"],u={slug:"Apache SeaTunnel(Incubating) \u9996\u4e2aApache \u7248\u672c 2.1.0 \u53d1\u5e03\uff0c\u5185\u6838\u91cd\u6784\uff0c\u5168\u9762\u652f\u6301Flink",title:"Apache SeaTunnel(Incubating) \u9996\u4e2aApache \u7248\u672c 2.1.0 \u53d1\u5e03\uff0c\u5185\u6838\u91cd\u6784\uff0c\u5168\u9762\u652f\u6301Flink",tags:["2.1.0","Release"]},c="Apache SeaTunnel(Incubating) \u9996\u4e2aApache \u7248\u672c 2.1.0 \u53d1\u5e03\uff0c\u5185\u6838\u91cd\u6784\uff0c\u5168\u9762\u652f\u6301Flink",p={permalink:"/zh-CN/blog/Apache SeaTunnel(Incubating) \u9996\u4e2aApache \u7248\u672c 2.1.0 \u53d1\u5e03\uff0c\u5185\u6838\u91cd\u6784\uff0c\u5168\u9762\u652f\u6301Flink",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-03-18-SeaTunnel_s_first_Apache_release_2_1_0_release_kernel_refactoring_full_support_fo.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-03-18-SeaTunnel_s_first_Apache_release_2_1_0_release_kernel_refactoring_full_support_fo.md",title:"Apache SeaTunnel(Incubating) \u9996\u4e2aApache \u7248\u672c 2.1.0 \u53d1\u5e03\uff0c\u5185\u6838\u91cd\u6784\uff0c\u5168\u9762\u652f\u6301Flink",description:"2021 \u5e74 12 \u6708 9 \u65e5\uff0cApache SeaTunnel(Incubating) \u8fdb\u5165 Apache \u5b75\u5316\u5668\uff0c\u5728\u7ecf\u8fc7\u793e\u533a\u5404\u4f4d\u8d21\u732e\u8005\u8fd1\u56db\u4e2a\u6708\u7684\u52aa\u529b\u4e0b\uff0c\u6211\u4eec\u4e8e2022\u5e743\u670818\u65e5\u53d1\u5e03\u4e86\u9996\u4e2aApache\u7248\u672c\uff0c\u5e76\u4e14\u4fdd\u8bc1\u4e86\u9996\u4e2a\u7248\u672c\u4e00\u6b21\u6027\u901a\u8fc7\u68c0\u67e5\u3002\u8fd9\u610f\u5473\u7740 2.1.0 \u7248\u672c\uff0c\u662f\u7ecf\u8fc7 Apache SeaTunnel(Incubating) \u793e\u533a\u548c Apache \u5b75\u5316\u5668\u6295\u7968\u68c0\u67e5\u53d1\u5e03\u7684\u5b98\u65b9\u7248\u672c\uff0c\u4f01\u4e1a\u548c\u4e2a\u4eba\u7528\u6237\u53ef\u4ee5\u653e\u5fc3\u5b89\u5168\u4f7f\u7528\u3002",date:"2022-03-18T00:00:00.000Z",formattedDate:"2022\u5e743\u670818\u65e5",tags:[{label:"2.1.0",permalink:"/zh-CN/blog/tags/2-1-0"},{label:"Release",permalink:"/zh-CN/blog/tags/release"}],readingTime:7.775,truncated:!1,authors:[],frontMatter:{slug:"Apache SeaTunnel(Incubating) \u9996\u4e2aApache \u7248\u672c 2.1.0 \u53d1\u5e03\uff0c\u5185\u6838\u91cd\u6784\uff0c\u5168\u9762\u652f\u6301Flink",title:"Apache SeaTunnel(Incubating) \u9996\u4e2aApache \u7248\u672c 2.1.0 \u53d1\u5e03\uff0c\u5185\u6838\u91cd\u6784\uff0c\u5168\u9762\u652f\u6301Flink",tags:["2.1.0","Release"]},nextItem:{title:"SeaTunnel \u5728\u552f\u54c1\u4f1a\u7684\u5b9e\u8df5",permalink:"/zh-CN/blog/SeaTunnel \u5728\u552f\u54c1\u4f1a\u7684\u5b9e\u8df5"}},o={authorsImageUrls:[]},s=[{value:"\u672c\u6b21\u53d1\u5e03\u7248\u672c\u8bf4\u660e",id:"\u672c\u6b21\u53d1\u5e03\u7248\u672c\u8bf4\u660e",level:2},{value:"\u672c\u6b21\u53d1\u5e03\u6211\u4eec\u4e3b\u8981\u5e26\u6765\u4e86\u4ee5\u4e0b\u7279\u6027\uff1a",id:"\u672c\u6b21\u53d1\u5e03\u6211\u4eec\u4e3b\u8981\u5e26\u6765\u4e86\u4ee5\u4e0b\u7279\u6027",level:3},{value:"\u3010\u81f4\u8c22\u3011",id:"\u81f4\u8c22",level:2},{value:"\u672a\u6765\u51e0\u4e2a\u7248\u672c\u7684\u89c4\u5212\uff1a",id:"\u672a\u6765\u51e0\u4e2a\u7248\u672c\u7684\u89c4\u5212",level:2},{value:"\u793e\u533a\u53d1\u5c55",id:"\u793e\u533a\u53d1\u5c55",level:2},{value:"\u3010\u8fd1\u671f\u6982\u51b5\u3011",id:"\u8fd1\u671f\u6982\u51b5",level:3},{value:"\u3010Apache SeaTunnel(Incubating)\u7684\u7528\u6237\u3011",id:"apache-seatunnelincubating\u7684\u7528\u6237",level:3},{value:"\u3010PPMC\u611f\u8a00\u3011",id:"ppmc\u611f\u8a00",level:2}],h={toc:s};function g(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2021 \u5e74 12 \u6708 9 \u65e5\uff0cApache SeaTunnel(Incubating) \u8fdb\u5165 Apache \u5b75\u5316\u5668\uff0c\u5728\u7ecf\u8fc7\u793e\u533a\u5404\u4f4d\u8d21\u732e\u8005\u8fd1\u56db\u4e2a\u6708\u7684\u52aa\u529b\u4e0b\uff0c\u6211\u4eec\u4e8e2022\u5e743\u670818\u65e5\u53d1\u5e03\u4e86\u9996\u4e2aApache\u7248\u672c\uff0c\u5e76\u4e14\u4fdd\u8bc1\u4e86\u9996\u4e2a\u7248\u672c\u4e00\u6b21\u6027\u901a\u8fc7\u68c0\u67e5\u3002\u8fd9\u610f\u5473\u7740 2.1.0 \u7248\u672c\uff0c\u662f\u7ecf\u8fc7 Apache SeaTunnel(Incubating) \u793e\u533a\u548c Apache \u5b75\u5316\u5668\u6295\u7968\u68c0\u67e5\u53d1\u5e03\u7684\u5b98\u65b9\u7248\u672c\uff0c\u4f01\u4e1a\u548c\u4e2a\u4eba\u7528\u6237\u53ef\u4ee5\u653e\u5fc3\u5b89\u5168\u4f7f\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note\uff1a")," ",(0,r.kt)("strong",{parentName:"p"},"\u8f6f\u4ef6\u8bb8\u53ef\u534f\u8bae"),"\u662f\u4e00\u79cd\u5177\u6709\u6cd5\u5f8b\u6027\u8d28\u7684\u5408\u540c\u6216\u6307\u5bfc\uff0c\u76ee\u7684\u5728\u4e8e\u89c4\u8303\u53d7\u8457\u4f5c\u6743\u4fdd\u62a4\u7684\u8f6f\u4ef6\u7684\u4f7f\u7528\u6216\u6563\u5e03\u884c\u4e3a\u3002\u901a\u5e38\u7684\u8bb8\u53ef\u65b9\u5f0f\u4f1a\u5141\u8bb8\u7528\u6237\u6765\u4f7f\u7528\u5355\u4e00\u6216\u591a\u4efd\u8be5\u8f6f\u4ef6\u7684\u590d\u5236\uff0c\u56e0\u4e3a\u82e5\u65e0\u8bb8\u53ef\u800c\u5f84\u4e88\u4f7f\u7528\u8be5\u8f6f\u4ef6\uff0c\u5c06\u8fdd\u53cd\u8457\u4f5c\u6743\u6cd5\u7ed9\u4e88\u8be5\u8f6f\u4ef6\u5f00\u53d1\u8005\u7684\u4e13\u5c5e\u4fdd\u62a4\u3002\u6548\u7528\u4e0a\u6765\u8bf4\uff0c\u8f6f\u4ef6\u8bb8\u53ef\u662f\u8f6f\u4ef6\u5f00\u53d1\u8005\u4e0e\u5176\u7528\u6237\u4e4b\u95f4\u7684\u4e00\u4efd\u5408\u7ea6\uff0c\u7528\u6765\u4fdd\u8bc1\u5728\u7b26\u5408\u8bb8\u53ef\u8303\u56f4\u7684\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5c06\u4e0d\u4f1a\u53d7\u5230\u63a7\u544a\u3002\u8fdb\u5165\u5b75\u5316\u5668\u524d\u540e\uff0c\u6211\u4eec\u82b1\u8d39\u4e86\u5927\u91cf\u7684\u65f6\u95f4\u6765\u68b3\u7406\u6574\u4e2a\u9879\u76ee\u7684\u5916\u90e8\u4f9d\u8d56\u4ee5\u786e\u4fdd\u6574\u4e2a\u9879\u76ee\u7684\u5408\u89c4\u6027\u3002\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c\u5f00\u6e90\u8f6f\u4ef6\u9009\u62e9\u600e\u6837\u7684License\u5e76\u4e0d\u610f\u5916\u7740\u9879\u76ee\u672c\u8eab\u5c31\u4e00\u5b9a\u5408\u89c4\u3002\u800cASF\u4e25\u82db\u7684\u7248\u672c\u68c0\u67e5\u6700\u5927\u7a0b\u5ea6\u5730\u4fdd\u8bc1\u4e86\u8f6f\u4ef6License\u7684\u5408\u89c4\u6027\uff0c\u4ee5\u53ca\u8f6f\u4ef6\u5408\u7406\u5408\u6cd5\u7684\u6d41\u901a\u5206\u53d1\u3002"),(0,r.kt)("h2",{id:"\u672c\u6b21\u53d1\u5e03\u7248\u672c\u8bf4\u660e"},"\u672c\u6b21\u53d1\u5e03\u7248\u672c\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u672c\u6b21\u53d1\u5e03\u6211\u4eec\u4e3b\u8981\u5e26\u6765\u4e86\u4ee5\u4e0b\u7279\u6027"},"\u672c\u6b21\u53d1\u5e03\u6211\u4eec\u4e3b\u8981\u5e26\u6765\u4e86\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5fae\u5185\u6838\u63d2\u4ef6\u5316\u7684\u67b6\u6784\u5185\u6838\u90e8\u5206\u8fdb\u884c\u4e86\u5927\u91cf\u4f18\u5316\uff0c\u5185\u6838\u4ee5 Java \u4e3a\u4e3b\uff0c\u5e76\u5bf9\u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790\uff0c\u63d2\u4ef6\u52a0\u8f7d\u7b49\u505a\u4e86\u5927\u91cf\u6539\u8fdb\uff0c\u540c\u65f6\u63d2\u4ef6\u6269\u5c55\u53ef\u6839\u636e\u7528\u6237\uff08\u6216\u8d21\u732e\u8005\uff09\u6240\u64c5\u957f\u7684\u8bed\u8a00\u53bb\u505a\u5f00\u53d1\uff0c\u6781\u5927\u7a0b\u5ea6\u5730\u964d\u4f4e\u4e86\u63d2\u4ef6\u5f00\u53d1\u95e8\u69db\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5168\u9762\u652f\u6301 Flink \uff0c\u4f46\u540c\u65f6\u7528\u6237\u4e5f\u53ef\u81ea\u7531\u9009\u62e9\u5e95\u5c42\u5f15\u64ce\uff0c\u672c\u6b21\u66f4\u65b0\u4e5f\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86\u5927\u91cf\u7684Flink\u63d2\u4ef6\uff0c\u4e5f\u6b22\u8fce\u5927\u5bb6\u540e\u7eed\u8d21\u732e\u76f8\u5173\u63d2\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u672c\u5730\u5f00\u53d1\u6781\u901f\u542f\u52a8\u73af\u5883\u652f\u6301\uff08example\uff09\uff0c\u8d21\u732e\u8005\u6216\u7528\u6237\u53ef\u4ee5\u5728\u4e0d\u66f4\u6539\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u5feb\u901f\u4e1d\u6ed1\u542f\u52a8\uff0c\u65b9\u4fbf\u672c\u5730\u5feb\u901f\u5f00\u53d1\u8c03\u8bd5\u4f53\u9a8c\u3002\u5bf9\u4e8e\u9700\u8981\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u8d21\u732e\u8005\u6216\u8005\u7528\u6237\u6765\u8bb2\uff0c\u8fd9\u65e0\u7591\u662f\u4e2a\u4ee4\u4eba\u6fc0\u52a8\u7684\u597d\u6d88\u606f\u3002\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u5728\u53d1\u5e03\u524d\u7684\u6d4b\u8bd5\u4e2d\uff0c\u4e5f\u6709\u5927\u91cf\u8d21\u732e\u8005\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u5feb\u901f\u5bf9\u63d2\u4ef6\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86Docker\u5bb9\u5668\u5b89\u88c5\uff0c\u7528\u6237\u53ef\u4ee5\u6781\u5feb\u5730\u901a\u8fc7Docker\u90e8\u7f72\u5b89\u88c5\u4f7f\u7528Apache SeaTunnel\uff0c\u672a\u6765\u6211\u4eec\u4e5f\u4f1a\u56f4\u7ed5Docker&K8s\u505a\u51fa\u5927\u91cf\u8fed\u4ee3\uff0c\u6b22\u8fce\u5927\u5bb6\u8ba8\u8bba\u4ea4\u6d41\u3002")),(0,r.kt)("p",null,"\u5177\u4f53\u53d1\u5e03\u8bf4\u660e\uff1a\n","[Feature]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JCommander\u6765\u505a\u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u66f4\u5173\u6ce8\u903b\u8f91\u672c\u8eab\u3002"),(0,r.kt)("li",{parentName:"ul"},"Flink\u4ece1.9\u5347\u7ea7\u81f31.13.5\uff0c\u4fdd\u6301\u517c\u5bb9\u65e7\u7248\u672c\uff0c\u540c\u65f6\u4e3a\u540e\u7eedCDC\u505a\u597d\u94fa\u57ab\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Doris \u3001Hudi\u3001Phoenix\u3001Druid\u7b49Connector \u63d2\u4ef6\uff0c\u5b8c\u6574\u7684\u63d2\u4ef6\u652f\u6301\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230  ",(0,r.kt)("a",{parentName:"li",href:"%5Bhttps://github.com/apache/incubator-seatunnel#plugins-supported-by-seatunnel%5D(https://github.com/apache/incubator-seatunnel#plugins-supported-by-seatunnel)"},"plugins-supported-by-seatunnel"),"."),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u5f00\u53d1\u6781\u901f\u542f\u52a8\u73af\u5883\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u5728\u4f7f\u7528example\u6a21\u5757\uff0c\u4e0d\u4fee\u6539\u4efb\u4f55\u4ee3\u7801\u7684\u524d\u63d0\u4e0b\u5feb\u901f\u542f\u52a8\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u672c\u5730\u8c03\u8bd5\u4f53\u9a8c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 Docker \u5bb9\u5668\u5b89\u88c5\u548c\u8bd5\u7528 Apache SeaTunnel\u3002"),(0,r.kt)("li",{parentName:"ul"},"Sql \u7ec4\u4ef6\u652f\u6301 SET\u8bed\u53e5\uff0c\u652f\u6301\u914d\u7f6e\u53d8\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"Config\u6a21\u5757\u91cd\u6784\uff0c\u51cf\u5c11\u8d21\u732e\u8005\u7406\u89e3\u6210\u672c\uff0c\u540c\u65f6\u4fdd\u8bc1\u9879\u76ee\u7684\u4ee3\u7801\u5408\u89c4\uff08License\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7ed3\u6784\u91cd\u65b0\u8c03\u6574\uff0c\u4ee5\u9002\u5e94\u65b0\u7684Roadmap\u3002"),(0,r.kt)("li",{parentName:"ul"},"CI&CD\u7684\u652f\u6301\uff0c\u4ee3\u7801\u8d28\u91cf\u81ea\u52a8\u5316\u7ba1\u63a7\uff0c\uff08\u540e\u7eed\u4f1a\u6709\u66f4\u591a\u7684\u8ba1\u5212\u6765\u652f\u6301CI&CD\u5f00\u53d1\uff09\u3002")),(0,r.kt)("h2",{id:"\u81f4\u8c22"},"\u3010\u81f4\u8c22\u3011"),(0,r.kt)("p",null,"\u611f\u8c22\u4ee5\u4e0b\u53c2\u4e0e\u8d21\u732e\u7684\u540c\u5b66(\u4e3aGitHub ID\uff0c\u6392\u540d\u4e0d\u5206\u5148\u540e)\uff1a"),(0,r.kt)("p",null,"Al-assad, BenJFan, CalvinKirs, JNSimba, JiangTChen, Rianico, TyrantLucifer, Yves-yuan, ZhangchengHu0923, agendazhang, an-shi-chi-fan, asdf2014, bigdataf, chaozwn, choucmei, dailidong, dongzl, felix-thinkingdata, fengyuceNv, garyelephant, kalencaya, kezhenxu94, legendtkl, leo65535, liujinhui1994, mans2singh, marklightning, mosence, nielifeng, ououtt, ruanwenjun, simon824, totalo, wntp, wolfboys, wuchunfu, xbkaishui, xtr1993, yx91490, zhangbutao, zhaomin1423, zhongjiajie, zhuangchong, zixi0825."),(0,r.kt)("p",null,"\u540c\u65f6\u4e5f\u8bda\u631a\u7684\u611f\u8c22\u6211\u4eec\u7684Mentor\uff1aZhenxu Ke\uff0cWillem Jiang\uff0c William Guo\uff0cLiDong Dai \uff0cTed Liu, Kevin\uff0cJB \u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u7ed9\u4e88\u7684\u5e2e\u52a9"),(0,r.kt)("h2",{id:"\u672a\u6765\u51e0\u4e2a\u7248\u672c\u7684\u89c4\u5212"},"\u672a\u6765\u51e0\u4e2a\u7248\u672c\u7684\u89c4\u5212\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CDC\u7684\u652f\u6301\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u4f53\u7cfb\u7684\u652f\u6301\uff1b"),(0,r.kt)("li",{parentName:"ul"},"UI\u7cfb\u7edf\u7684\u652f\u6301\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684 Connector \u652f\u6301\uff0c\u4ee5\u53ca\u66f4\u9ad8\u6548\u7684Sink\u652f\u6301\uff0c\u5982ClickHouse\uff0c\u5f88\u5feb\u4f1a\u5728\u4e0b\u4e2a\u7248\u672c\u8ddf\u5927\u5bb6\u89c1\u9762\u3002")),(0,r.kt)("p",null,"\u540e\u7eedFeature\u662f\u7531\u793e\u533a\u5171\u540c\u51b3\u5b9a\u7684\uff0c\u6211\u4eec\u4e5f\u5728\u8fd9\u91cc\u547c\u5401\u5927\u5bb6\u4e00\u540c\u53c2\u4e0e\u793e\u533a\u540e\u7eed\u5efa\u8bbe\u3002\n\u6b22\u8fce\u5927\u5bb6\u5173\u6ce8\u4ee5\u53ca\u8d21\u732e\uff1a\uff09"),(0,r.kt)("h2",{id:"\u793e\u533a\u53d1\u5c55"},"\u793e\u533a\u53d1\u5c55"),(0,r.kt)("h3",{id:"\u8fd1\u671f\u6982\u51b5"},"\u3010\u8fd1\u671f\u6982\u51b5\u3011"),(0,r.kt)("p",null,"\u81ea\u8fdb\u5165Apache\u5b75\u5316\u5668\u4ee5\u6765\uff0c\u8d21\u732e\u8005\u4ece13 \u4eba\u589e\u957f\u81f3 55 \u4eba\uff0c\u4e14\u6301\u7eed\u4fdd\u6301\u4e0a\u5347\u8d8b\u52bf\uff0c\u5e73\u5747\u5468commits\u7ef4\u6301\u572820+\uff0c\u6765\u81ea\u4e0d\u540c\u516c\u53f8\u7684\u4e09\u4f4d\u8d21\u732e\u8005\uff08Lei Xie, HuaJie Wang,Chunfu Wu,\uff09\u901a\u8fc7\u4ed6\u4eec\u5bf9\u793e\u533a\u7684\u8d21\u732e\u88ab\u9080\u8bf7\u6210\u4e3aCommitter\u3002\u6211\u4eec\u4e3e\u529e\u4e86\u4e24\u573aMeetUp\uff0c\u6765\u81eaB\u7ad9\uff0cOPPO\u3001\u552f\u54c1\u4f1a\u7b49\u4f01\u4e1a\u8bb2\u5e08\u5206\u4eab\u4e86SeaTunnel\u5728\u4ed6\u4eec\u5728\u4f01\u4e1a\u4e2d\u7684\u5927\u89c4\u6a21\u751f\u4ea7\u843d\u5730\u5b9e\u8df5(\u540e\u7eed\u6211\u4eec\u4e5f\u4f1a\u4fdd\u6301\u6bcf\u6708\u4e00\u6b21\u7684meetup\uff0c\u6b22\u8fce\u5404\u4f4d\u4f7f\u7528SeaTunnel\u7684\u7528\u6237\u6216\u8005\u8d21\u732e\u8005\u5206\u4eabSeaTunnel\u548c\u4f60\u4eec\u7684\u6545\u4e8b)\u3002"),(0,r.kt)("h3",{id:"apache-seatunnelincubating\u7684\u7528\u6237"},"\u3010Apache SeaTunnel(Incubating)\u7684\u7528\u6237\u3011"),(0,r.kt)("p",null,"Note:\u4ec5\u5305\u542b\u5df2\u767b\u8bb0\u7528\u6237\nApache SeaTunnel(Incubating) \u76ee\u524d\u767b\u8bb0\u7528\u6237\u5982\u4e0b\uff0c\u5982\u679c\u60a8\u4e5f\u5728\u4f7f\u7528Apache SeaTunnel\uff0c\u6b22\u8fce\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/686"},"Who is using SeaTunne"),"! \u4e2d\u767b\u8bb0\uff01"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/static/image/20220321/1.png"})),(0,r.kt)("h2",{id:"ppmc\u611f\u8a00"},"\u3010PPMC\u611f\u8a00\u3011"),(0,r.kt)("p",null,"Apache SeaTunnel(Incubating) PPMC LiFeng Nie\u5728\u8c08\u53ca\u9996\u4e2aApache\u7248\u672c\u53d1\u5e03\u7684\u65f6\u5019\u8bf4\uff0c\u4ece\u8fdb\u5165Apache Incubator\u7684\u7b2c\u4e00\u5929\uff0c\u6211\u4eec\u5c31\u4e00\u76f4\u5728\u52aa\u529b\u5b66\u4e60Apache Way\u4ee5\u53ca\u5404\u79cdApache\u653f\u7b56\uff0c\u7b2c\u4e00\u4e2a\u7248\u672c\u53d1\u5e03\u7684\u8fc7\u7a0b\u82b1\u8d39\u4e86\u5927\u91cf\u7684\u65f6\u95f4\uff08\u4e3b\u8981\u662f\u5408\u89c4\u6027\uff09\uff0c\u4f46\u6211\u4eec\u8ba4\u4e3a\u8fd9\u79cd\u65f6\u95f4\u662f\u503c\u5f97\u82b1\u8d39\u7684\uff0c\u8fd9\u4e5f\u662f\u6211\u4eec\u9009\u62e9\u8fdb\u5165Apache\u7684\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u539f\u56e0\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u7528\u6237\u7528\u5f97\u653e\u5fc3\uff0c\u800cApache\u65e0\u7591\u662f\u6700\u4f73\u9009\u62e9\uff0c\u5176 License \u8fd1\u4e4e\u82db\u523b\u7684\u68c0\u67e5\u4f1a\u8ba9\u7528\u6237\u5c3d\u53ef\u80fd\u5730\u907f\u514d\u76f8\u5173\u7684\u5408\u89c4\u6027\u95ee\u9898\uff0c\u4fdd\u8bc1\u8f6f\u4ef6\u5408\u7406\u5408\u6cd5\u7684\u6d41\u901a\u3002\u53e6\u5916\uff0c\u5176\u8df5\u884cApache Way\uff0c\u4f8b\u5982\u516c\u76ca\u4f7f\u547d\u3001\u5b9e\u7528\u4e3b\u4e49\u3001\u793e\u533a\u80dc\u4e8e\u4ee3\u7801\u3001\u516c\u5f00\u900f\u660e\u4e0e\u5171\u8bc6\u51b3\u7b56\u3001\u4efb\u4eba\u552f\u8d24\u7b49\uff0c\u53ef\u4ee5\u5e2e\u52a9 SeaTunnel \u793e\u533a\u66f4\u52a0\u5f00\u653e\u3001\u900f\u660e\uff0c\u5411\u591a\u5143\u5316\u65b9\u5411\u53d1\u5c55\u3002"))}g.isMDXComponent=!0}}]);