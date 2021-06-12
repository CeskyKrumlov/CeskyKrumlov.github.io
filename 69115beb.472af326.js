(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{269:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),o=(t(0),t(564)),i={id:"4.iocStyle",title:"IoC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f"},c={unversionedId:"spring/4.iocStyle",id:"spring/4.iocStyle",isDocsHomePage:!1,title:"IoC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f",description:"IOC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f",source:"@site/docs/spring/4.IoC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f.md",slug:"/spring/4.iocStyle",permalink:"/docs/spring/4.iocStyle",version:"current",sidebar:"someSidebar",previous:{title:"Hello Spring",permalink:"/docs/spring/3.helloSpring"},next:{title:"Spring\u914d\u7f6e",permalink:"/docs/spring/5.springConfig"}},p=[{value:"IOC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f",id:"ioc\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f",children:[]}],l={rightToc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ioc\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f"},"IOC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f"),Object(o.b)("p",null,"\u65b0\u5efa\u4e00\u4e2amaven\u6a21\u5757"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"pojo\n\u4fee\u6539\u4e00\u4e0b\u65e0\u53c2\u6784\u9020\u5668\uff0c\u6765\u89c2\u5bdf\u5b9e\u4f53\u7c7b\u662f\u4ec0\u4e48\u65f6\u5019\u88abspring\u521b\u5efa\u5bf9\u8c61\u7684"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Data\npublic class User {\n    private String name;\n\n    public void show() {\n        System.out.println("name ->" + name);\n    }\n\n    public User(){\n        System.out.println("User\u65e0\u53c2\u6784\u9020\u65b9\u6cd5");\n    }\n}\n')),Object(o.b)("p",{parentName:"li"},"Spring IoC\u5bb9\u5668\u521b\u5efa\u7684\u65f6\u5019\uff0c\u6240\u6709bean\u5c31\u521b\u5efa\u4e86"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u9ed8\u8ba4\u4f7f\u7528\u65e0\u53c2\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u5047\u8bbe\u6211\u4eec\u8981\u4f7f\u7528\u6709\u53c2\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u4e0b\u6807\u8d4b\u503c(\u53c2\u6570\u7d22\u5f15)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u7c7b\u578b\u8d4b\u503c(\u4e0d\u5efa\u8bae\u7528)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u901a\u8fc7\u53c2\u6570\u540d\u8bbe\u7f6e"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="user" class="com.bsx.pojo.User">\n    <constructor-arg name="name" value="bbbb"/>\n</bean>\n')))))))}b.isMDXComponent=!0},564:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(t),m=r,O=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return t?a.a.createElement(O,c(c({ref:n},l),{},{components:t})):a.a.createElement(O,c({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);