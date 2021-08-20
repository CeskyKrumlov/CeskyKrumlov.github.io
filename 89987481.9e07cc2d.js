(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{335:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return s}));var t=a(2),r=a(6),i=(a(0),a(565)),l={slug:"mavenPackage",title:"Maven\u9879\u76ee\u6253\u5305",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["java","maven"]},c={permalink:"/blog/mavenPackage",source:"@site/blog/2020-05-03-maven\u6253jar\u5305.md",description:"- \u6253\u6ca1\u6709\u4f9d\u8d56\u7684Jar\u5305",date:"2020-05-03T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"maven",permalink:"/blog/tags/maven"}],title:"Maven\u9879\u76ee\u6253\u5305",readingTime:.445,truncated:!0,prevItem:{title:"\u6570\u7406\u7edf\u8ba1\u4e0e\u968f\u673a\u8fc7\u7a0b\u603b\u7ed3",permalink:"/blog/statisticsAndRandomProcess"},nextItem:{title:"Linux\u57fa\u672c\u547d\u4ee4\u4e0eSSH\u8fdc\u7a0b\u767b\u5f55",permalink:"/blog/linuxssh"}},o=[{value:"\u6253\u6ca1\u6709\u4f9d\u8d56\u7684jar\u5305",id:"\u6253\u6ca1\u6709\u4f9d\u8d56\u7684jar\u5305",children:[]},{value:"\u6253\u542b\u4f9d\u8d56\u7684jar\u5305",id:"\u6253\u542b\u4f9d\u8d56\u7684jar\u5305",children:[]},{value:"\u8fd0\u884cmaven\u6253jar\u5305",id:"\u8fd0\u884cmaven\u6253jar\u5305",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={rightToc:o};function s(e){var n=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6253\u6ca1\u6709\u4f9d\u8d56\u7684Jar\u5305"),Object(i.b)("li",{parentName:"ul"},"\u6253\u6709\u4f9d\u8d56\u7684Jar\u5305")),Object(i.b)("h1",{id:"\u6253\u6ca1\u6709\u4f9d\u8d56\u7684jar\u5305"},"\u6253\u6ca1\u6709\u4f9d\u8d56\u7684jar\u5305"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f16\u8f91pom.xml"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n      <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-jar-plugin</artifactId>\n      <version>2.4</version>\n      <configuration>\n        <archive>\n              \u751f\u6210\u7684jar\u4e2d\uff0c\u4e0d\u8981\u5305\u542bpom.xml\u548cpom.properties\u8fd9\u4e24\u4e2a\u6587\u4ef6\n          <addMavenDescriptor>false</addMavenDescriptor>\n          <manifest>\n                \u662f\u5426\u8981\u628a\u7b2c\u4e09\u65b9jar\u653e\u5230manifest\u7684classpath\u4e2d\n            <addClasspath>true</addClasspath>\n               \u751f\u6210\u7684manifest\u4e2dclasspath\u7684\u524d\u7f00\uff0c\u56e0\u4e3a\u8981\u628a\u7b2c\u4e09\u65b9jar\u653e\u5230lib\u76ee\u5f55\u4e0b\uff0c\u6240\u4ee5classpath\u7684\u524d\u7f00\u662flib/\n            <classpathPrefix>lib/</classpathPrefix>\n                \u5e94\u7528\u7684main class\n            <mainClass>com.yourClass</mainClass>\n          </manifest>\n        </archive>\n            \u8fc7\u6ee4\u6389\u4e0d\u5e0c\u671b\u5305\u542b\u5728jar\u4e2d\u7684\u6587\u4ef6\n        <excludes>\n          <exclude>${project.basedir}/xml/*</exclude>\n        </excludes>\n     </configuration>\n </plugin> \n")))),Object(i.b)("h1",{id:"\u6253\u542b\u4f9d\u8d56\u7684jar\u5305"},"\u6253\u542b\u4f9d\u8d56\u7684jar\u5305"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f16\u8f91pom.xml"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"<build>\n     <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.1</version>\n      </plugin>\n      <plugin>\n        <artifactId>maven-assembly-plugin</artifactId>\n        <configuration>\n          <archive>\n            <manifest>\n              <mainClass>com.test.app</mainClass>\n            </manifest>\n          </archive>\n          <descriptorRefs>\n            <descriptorRef>jar-with-dependencies</descriptorRef>\n          </descriptorRefs>\n        </configuration>\n        \x3c!--\u4e0b\u9762\u662f\u4e3a\u4e86\u4f7f\u7528 mvn package\u547d\u4ee4\uff0c\u5982\u679c\u4e0d\u52a0\u5219\u4f7f\u7528mvn assembly--\x3e\n        <executions>\n          <execution>\n            <id>make-assemble</id>\n            <phase>package</phase>\n            <goals>\n              <goal>single</goal>\n            </goals>\n          </execution>\n        </executions>\n      </plugin>\n     </plugins>\n  </build>\n")))),Object(i.b)("h1",{id:"\u8fd0\u884cmaven\u6253jar\u5305"},"\u8fd0\u884cmaven\u6253jar\u5305"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200401203244121",src:a(988).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"jar\u6587\u4ef6\u751f\u6210\u5728\u9879\u76ee/target\u76ee\u5f55\u4e0b")),Object(i.b)("h1",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://blog.csdn.net/branwel/article/details/79918018"}),"IDEA + Maven \u6253jar\u5305")))}s.isMDXComponent=!0},565:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),b=t,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||i;return a?r.a.createElement(d,c(c({ref:n},p),{},{components:a})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=b;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},988:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/1-a6e3a6dc86cfe09dc2506a4fb60b2b5e.png"}}]);