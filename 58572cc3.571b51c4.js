(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),p=(n(0),n(375)),l={id:"4.resultMap",title:"ResultMap",hide_title:!0},c={unversionedId:"mybatis/4.resultMap",id:"mybatis/4.resultMap",isDocsHomePage:!1,title:"ResultMap",description:"ResultMap",source:"@site/docs/mybatis/4.ResultMap.md",slug:"/mybatis/4.resultMap",permalink:"/docs/mybatis/4.resultMap",version:"current",sidebar:"someSidebar",previous:{title:"\u914d\u7f6e\u89e3\u6790",permalink:"/docs/mybatis/3.config"},next:{title:"\u65e5\u5fd7",permalink:"/docs/mybatis/5.log"}},i=[{value:"ResultMap",id:"resultmap",children:[{value:"ResultMap\u2014\u2014\u7ed3\u679c\u96c6\u6620\u5c04",id:"resultmap\u7ed3\u679c\u96c6\u6620\u5c04",children:[{value:"\u7ed3\u679c\u6620\u5c04",id:"\u7ed3\u679c\u6620\u5c04",children:[]}]}]}],b={rightToc:i};function o(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"resultmap"},"ResultMap"),Object(p.b)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\uff0c\u62f7\u8d1d\u4e4b\u524d\u7684\uff0c\u6d4b\u8bd5\u5b9e\u4f53\u7c7b\u5b57\u6bb5\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5"),Object(p.b)("p",null,"\u65b0\u5efa\u6a21\u5757mybatis03\uff0c",Object(p.b)("strong",{parentName:"p"},"\u91cd\u65b0\u5bfc\u5165\u7236\u5de5\u7a0bpom.xml\u6587\u4ef6")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u5c06mybatis02\u7684\u914d\u7f6e\u6587\u4ef6\u590d\u5236\u7c98\u8d34")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u590d\u5236src\u4e0b\u7684\u6587\u4ef6")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u590d\u5236test\u4e0b\u7684\u6587\u4ef6")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u4fee\u6539Pojo\u5c5e\u6027\u540d"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class User implements Serializable {\n    private int id;\n    private String name;\n//    private String password;\n    private String pwd;\n}\n")),Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"\u8fd8\u80fd\u67e5\u51fa\u6570\u636e\uff0c\u4f46\u662fpassword\u5b57\u6bb5\u7684\u503c\u5168\u53d8\u6210\u4e86null")),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"#\u8fd4\u56de\u7ed3\u679c\nUser(id=1, name=\u6539\u540d\u7684, pwd=null)\nUser(id=2, name=\u72c2\u795e2, pwd=null)\nUser(id=3, name=map\u6765\u7684, pwd=null)\nUser(id=4, name=\u72c2\u795e1, pwd=null)\n")),Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5\uff1a")),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u8d77\u522b\u540d"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<select id="getUserById" resultType="com.bsx.pojo.User" parameterType="int">\n    SELECT id, name, password as pwd FROM USER WHERE id = #{id}\n</select>\n'))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"ResultMap")))))),Object(p.b)("h2",{id:"resultmap\u7ed3\u679c\u96c6\u6620\u5c04"},"ResultMap\u2014\u2014\u7ed3\u679c\u96c6\u6620\u5c04"),Object(p.b)("p",null,"\u7ed3\u679c\u96c6\u6620\u5c04"),Object(p.b)("p",null,"\u6570\u636e\u5e93\uff1a id name password"),Object(p.b)("p",null,"\u5b9e\u4f53\u7c7b\uff1a id name pwd"),Object(p.b)("p",null,"\u5c06\u6570\u636e\u5e93\u7684\u8868\u793a\u5f62\u5f0f\u53d8\u4e3a\u5b9e\u4f53\u7c7b\u7684\u8868\u793a\u5f62\u5f0f"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u914d\u7f6emapper.xml\uff0c\u5c06\u6570\u636e\u5e93\u5b57\u6bb5\u6620\u5c04\u4e3a\u5b9e\u4f53\u7c7b\u5c5e\u6027")),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<mapper namespace="com.bsx.dao.UserMapper">\n    \x3c!--    \u7ed3\u679c\u96c6\u6620\u5c04--\x3e\n    <resultMap id="UserMap" type="com.bsx.pojo.User">\n\x3c!--        colum\u6570\u636e\u5e93\u79cd\u7684\u5b57\u6bb5\uff0c property\u5b9e\u4f53\u7c7b\u79cd\u7684\u5c5e\u6027--\x3e\n\x3c!--        <result column="id" property="id"/>--\x3e\n\x3c!--        <result column="name" property="name"/>--\x3e\n        <result column="password" property="pwd"/>\n    </resultMap>\n\n    <select id="getUserById" resultMap="UserMap">\n        \x3c!-- SELECT * FROM USER WHERE id = #{id} --\x3e\n        SELECT * FROM USER WHERE id = #{id}\n    </select>\n\n</mapper>\n')),Object(p.b)("p",null,Object(p.b)("img",{src:n(525).default})),Object(p.b)("h3",{id:"\u7ed3\u679c\u6620\u5c04"},"\u7ed3\u679c\u6620\u5c04"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"resultMap"),"\u5143\u7d20\u662fMybatis\u4e2d\u6700\u91cd\u8981\u6700\u5f3a\u5927\u7684\u5143\u7d20\u3002\u5b83\u53ef\u4ee5\u8ba9\u4f60\u4ece90%\u7684JDBC ",Object(p.b)("inlineCode",{parentName:"p"},"ResultSets"),"\u6570\u636e\u63d0\u53d6\u4ee3\u7801\u4e2d\u89e3\u653e\u51fa\u6765\uff0c\u5e76\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u5141\u8bb8\u4f60\u8fdb\u884c\u4e00\u4e9bJDBC\u4e0d\u652f\u6301\u7684\u64cd\u4f5c\u3002")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"ResultMap\u7684\u8bbe\u8ba1\u601d\u60f3\u662f\uff0c\u5bf9\u4e8e\u7b80\u5355\u7684\u8bed\u53e5\u6839\u90e8\u4e0d\u9700\u8981\u914d\u7f6e\u663e\u793a\u7684\u7ed3\u679c\u6620\u5c04\uff0c\u800c\u5bf9\u4e8e\u590d\u6742\u4e00\u70b9\u7684\u8bed\u53e5\u53ea\u9700\u8981\u63cf\u8ff0\u4ed6\u4eec\u7684\u5173\u7cfb\u5c31\u884c\u4e86"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"ResultMap"),"\u6700\u4f18\u79c0\u7684\u5730\u65b9\u5728\u4e8e\uff0c\u867d\u7136\u4f60\u5df2\u7ecf\u5bf9\u4ed6\u76f8\u5f53\u4e86\u89e3\u4e86\uff0c\u4f46\u662f\u6839\u672c\u5c31\u4e0d\u9700\u8981\u663e\u5f0f\u7684\u7528\u5230\u4ed6\u4eec"))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u4f7f\u7528\u6d41\u7a0b\uff1a")),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"\u5728",Object(p.b)("inlineCode",{parentName:"li"},"mapper.xml"),"\u91cc\u65b0\u5efa",Object(p.b)("inlineCode",{parentName:"li"},"resultmap"),"\u6807\u7b7e\uff0c\u8bbe\u5b9a\u4ece\u6570\u636e\u5e93\u5b57\u6bb5\u5230\u5b9e\u4f53\u7c7b\u5c5e\u6027\u7684\u6620\u5c04"),Object(p.b)("li",{parentName:"ol"},"\u5728",Object(p.b)("inlineCode",{parentName:"li"},"mapper.xml"),"\u4e2d\u5f15\u7528",Object(p.b)("inlineCode",{parentName:"li"},"resultMap"),"\u6807\u7b7e\u7684\u8bed\u53e5\u4e2d\u4f7f\u7528",Object(p.b)("inlineCode",{parentName:"li"},"resultMap"),"\u5c5e\u6027\uff0c",Object(p.b)("strong",{parentName:"li"},"\u4e0d\u518d\u4f7f\u7528"),Object(p.b)("inlineCode",{parentName:"li"},"resultType"))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u4f46\u66f4\u590d\u6742\u7684\u5730\u65b9\u5728\u540e\u9762\u591a\u5bf9\u4e00\uff0c\u4e00\u5bf9\u591a\uff0c\u591a\u5bf9\u591a")))}o.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=o(n),m=r,O=s["".concat(l,".").concat(m)]||s[m]||u[m]||p;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<p;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},525:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-b76b670ca57246f81740724c46cd63db.png"}}]);