(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{256:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(567)),o=t(571),c=t(572),l={id:"5.directModel",title:"Routing Direct \u6a21\u5f0f",hide_title:!0},b={unversionedId:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/5.directModel",id:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/5.directModel",isDocsHomePage:!1,title:"Routing Direct \u6a21\u5f0f",description:"Routing Direct \u6a21\u578b",source:"@site/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/direct.md",slug:"/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/5.directModel",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/5.directModel",version:"current",sidebar:"someSidebar",previous:{title:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b Fanout",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/4.fanoutModel"},next:{title:"Routing Topic \u6a21\u5f0f",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/6.topicModel"}},u=[{value:"Routing Direct \u6a21\u578b",id:"routing-direct-\u6a21\u578b",children:[]},{value:"\u751f\u4ea7\u8005\u5b9e\u73b0",id:"\u751f\u4ea7\u8005\u5b9e\u73b0",children:[]},{value:"\u6d88\u8d39\u8005\u5b9e\u73b0",id:"\u6d88\u8d39\u8005\u5b9e\u73b0",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}],s={rightToc:u};function p(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"routing-direct-\u6a21\u578b"},"Routing Direct \u6a21\u578b"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Routing \u8def\u7531\u8ba2\u9605\u6a21\u5f0f \u2014\u2014 Direct \u76f4\u8fde")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"Fanout")," \u6a21\u5f0f\u4e2d\uff0c\u4e00\u6761\u6d88\u606f\uff0c\u4f1a\u88ab\u6240\u6709\u8ba2\u9605\u7684\u961f\u5217\u6d88\u8d39"),Object(i.b)("li",{parentName:"ul"},"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u5e0c\u671b\u4e0d\u540c\u7684\u6d88\u606f\u88ab\u4e0d\u540c\u7684\u961f\u5217\u6d88\u8d39\u2014\u2014\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"Direct")," \u7c7b\u578b\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Exchange"))),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5728 Direct \u6a21\u578b\u4e0b"),"\uff1a"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u961f\u5217\u4e0e\u4ea4\u6362\u673a\u7684\u7ed1\u5b9a\uff0c\u4e0d\u80fd\u662f\u4efb\u610f\u7ed1\u5b9a\uff0c\u800c\u662f\u9700\u8981\u5236\u5b9a\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"RoutingKey \u8def\u7531Key")),Object(i.b)("li",{parentName:"ul"},"\u6d88\u606f\u53d1\u9001\u65b9\u5728\u5411 ",Object(i.b)("inlineCode",{parentName:"li"},"Exchange")," \u53d1\u9001\u6d88\u606f\u65f6\uff0c\u4e5f\u5fc5\u987b\u6307\u5b9a\u6d88\u606f\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Routing Key")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Exchange")," \u4e0d\u518d\u628a\u6d88\u606f\u53d1\u7ed9\u6bcf\u4e00\u4e2a\u7ed1\u5b9a\u7684\u961f\u5217\uff0c\u800c\u662f\u6839\u636e\u6d88\u606f\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Routing Key")," \u8fdb\u884c\u5224\u65ad",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ea\u6709\u961f\u5217\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"RoutingKey")," \u4e0e\u6d88\u606f\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"RoutingKey")," \u5b8c\u5168\u4e00\u81f4\uff0c\u624d\u4f1a\u63a5\u6536\u6d88\u606f"))))),Object(i.b)("img",{src:t(929).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}}),Object(i.b)("br",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u6d41\u7a0b\u53ca\u56fe\u89e3\u2014\u2014\u4e00\u4e2a\u65e5\u5fd7\u7cfb\u7edf")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6d88\u8d39\u80051"),"\uff1a\u5e0c\u671b\u53ea\u63a5\u6536 ",Object(i.b)("inlineCode",{parentName:"li"},"error")," \u4fe1\u606f\u5e76\u6301\u4e45\u5316\u5230\u78c1\u76d8\uff0c\u901a\u8fc7\u5176\u4e34\u65f6\u961f\u5217\u6307\u5b9a ",Object(i.b)("inlineCode",{parentName:"li"},'RoutingKey = "error"')," \u5b9e\u73b0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6d88\u8d39\u80052"),"\uff1a\u5e0c\u671b\u63a5\u6536\u6240\u6709\u65e5\u5fd7\u4fe1\u606f\uff0c\u6253\u5370\u5230\u63a7\u5236\u53f0\uff0c\u901a\u8fc7\u5176\u4e34\u65f6\u961f\u5217\u6307\u5b9a ",Object(i.b)("inlineCode",{parentName:"li"},"RoutingKey")," \u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"info"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"error"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"warning")," \u5b9e\u73b0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u751f\u4ea7\u8005"),"\uff1a\u5411 ",Object(i.b)("inlineCode",{parentName:"li"},"Exchange")," \u53d1\u9001\u6d88\u606f\uff0c\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u4f1a\u6307\u5b9a\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"Routing Key")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4ea4\u6362\u673a\uff1a"),"\u63a5\u6536\u751f\u4ea7\u8005\u7684\u6d88\u606f\uff0c\u7136\u540e\u628a\u6d88\u606f\u9012\u4ea4\u7ed9\u4e0e ",Object(i.b)("inlineCode",{parentName:"li"},"Routing Key")," \u5b8c\u5168\u5339\u914d\u7684\u961f\u5217"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u751f\u4ea7\u8005\u5b9e\u73b0"},"\u751f\u4ea7\u8005\u5b9e\u73b0"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u6b65\u9aa4"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u58f0\u660e\u4ea4\u6362\u673a ",Object(i.b)("inlineCode",{parentName:"li"},"channel.exchangeDeclare(2\u4e2a\u53c2\u6570)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ea4\u6362\u673a\u540d"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u7c7b\u578b\uff1a\u4e0d\u518d\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"strong"},"fanout"),"\uff0c\u800c\u662f\u5199 ",Object(i.b)("inlineCode",{parentName:"strong"},"direct"))))),Object(i.b)("li",{parentName:"ul"},"\u53d1\u9001\u6d88\u606f\uff1a\u6307\u5b9a ",Object(i.b)("inlineCode",{parentName:"li"},"RoutingKey"))),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u751f\u4ea7\u8005\u5b9e\u73b0" {6,8,16,24}',title:'"\u751f\u4ea7\u8005\u5b9e\u73b0"',"{6,8,16,24}":!0}),'public class ProviderRoutingDirect {\n    public static void main(String[] args) throws IOException {\n        Connection connection = RabbitMqUtils.getConnection();\n        Channel channel = connection.createChannel();\n        // \u58f0\u660e\u4ea4\u6362\u673a\uff0c\u7c7b\u578b\u4e0d\u518d\u662f fanout\uff0c\u800c\u662f direct\n        channel.exchangeDeclare("logs_direct", BuiltinExchangeType.DIRECT);\n        // \u53d1\u9001\u6d88\u606f \u9700\u8981\u6307\u5b9a RoutingKey\n        String targetRoutingKey = "info";\n        channel.basicPublish("logs_direct",\n                targetRoutingKey,\n                null,\n                ("[info] \u666e\u901a\u65e5\u5fd7 | RoutingKey: {" + targetRoutingKey + "}").getBytes());\n        // \u5173\u95ed\u8d44\u6e90\n\n        // \u53d1\u9001 error \u65e5\u5fd7\n        targetRoutingKey = "error";\n        channel.basicPublish("logs_direct",\n                targetRoutingKey,\n                null,\n                ("[error] \u9519\u8bef\u65e5\u5fd7 | RoutingKey: {" + targetRoutingKey + "}").getBytes());\n        // \u5173\u95ed\u8d44\u6e90\n\n        // \u53d1\u9001 warning \u65e5\u5fd7\n        targetRoutingKey = "warning";\n        channel.basicPublish("logs_direct",\n                targetRoutingKey,\n                null,\n                ("[warning] \u8b66\u544a\u65e5\u5fd7 | RoutingKey: {" + targetRoutingKey + "}").getBytes());\n        // \u5173\u95ed\u8d44\u6e90\n        RabbitMqUtils.closeConnectionAndChannel(connection, channel);\n    }\n}\n'))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6d88\u8d39\u8005\u5b9e\u73b0"},"\u6d88\u8d39\u8005\u5b9e\u73b0"),Object(i.b)(o.a,{defaultValue:"1",values:[{label:"\u6d88\u8d39\u8005 1",value:"1"},{label:"\u6d88\u8d39\u8005 2",value:"2"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6d88\u8d39\u80051" {7,12}',title:'"\u6d88\u8d39\u80051"',"{7,12}":!0}),'public class ConsumerRoutingDirect1 {\n    public static void main(String[] args) throws IOException {\n        Connection connection = RabbitMqUtils.getConnection();\n        Channel channel = connection.createChannel();\n\n        // \u58f0\u660e\u4ea4\u6362\u673a\uff0c\u7c7b\u578b\u4e3a direct\n        channel.exchangeDeclare("logs_direct", BuiltinExchangeType.DIRECT);\n        // \u58f0\u660e\u4e34\u65f6\u961f\u5217\n        String queue = channel.queueDeclare().getQueue();\n        // \u7ed1\u5b9a\u4e34\u65f6\u961f\u5217\u5230\u901a\u9053\n        // \u6307\u5b9a routingKey\n        String targetRoutingKey = "error";\n        channel.queueBind(queue, "logs_direct", targetRoutingKey);\n        // \u63a5\u6536\u6d88\u606f\n        channel.basicConsume(queue, true, new DefaultConsumer(channel) {\n            @Override\n            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {\n                System.out.println("\u6d88\u8d39\u80051 -> " + new String(body));\n            }\n        });\n    }\n}\n'))),Object(i.b)(c.a,{value:"2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6d88\u8d39\u80052"\xa0{6,9,10,11}',title:'"\u6d88\u8d39\u80052"\xa0{6,9,10,11}'}),'public class ConsumerRoutingDirect2 {\n    public static void main(String[] args) throws IOException {\n        Connection connection = RabbitMqUtils.getConnection();\n        Channel channel = connection.createChannel();\n\n        channel.exchangeDeclare("logs_direct", BuiltinExchangeType.DIRECT);\n        String queue = channel.queueDeclare().getQueue();\n        // \u7ed1\u5b9a info error warning\n        channel.queueBind(queue, "logs_direct", "info");\n        channel.queueBind(queue, "logs_direct", "error");\n        channel.queueBind(queue, "logs_direct", "warning");\n\n        channel.basicConsume(queue, true, new DefaultConsumer(channel) {\n            @Override\n            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {\n                System.out.println("\u6d88\u8d39\u80052 -> " + new String(body));\n            }\n        });\n    }\n}\n')))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u53d1\u9001\u4e09\u79cd\u65e5\u5fd7\u6d88\u606f\uff0c\u5206\u522b\u89c2\u5bdf\u4e24\u4e2a\u6d88\u8d39\u8005")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6d88\u8d39\u80051 \u53ea\u63a5\u6536 ",Object(i.b)("inlineCode",{parentName:"li"},"error")," \u65e5\u5fd7"),Object(i.b)("li",{parentName:"ul"},"\u6d88\u8d39\u80052 \u63a5\u6536 ",Object(i.b)("inlineCode",{parentName:"li"},"info"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"error"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"warning")," \u65e5\u5fd7"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="\u6d88\u8d39\u80051 \u8fd0\u884c\u7ed3\u679c"',title:'"\u6d88\u8d39\u80051','\u8fd0\u884c\u7ed3\u679c"':!0}),"\u6d88\u8d39\u80051 -> [error] \u9519\u8bef\u65e5\u5fd7 | RoutingKey: {error}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="\u6d88\u8d39\u80052 \u8fd0\u884c\u7ed3\u679c"',title:'"\u6d88\u8d39\u80052','\u8fd0\u884c\u7ed3\u679c"':!0}),"\u6d88\u8d39\u80052 -> [info] \u666e\u901a\u65e5\u5fd7 | RoutingKey: {info}\n\u6d88\u8d39\u80052 -> [error] \u9519\u8bef\u65e5\u5fd7 | RoutingKey: {error}\n\u6d88\u8d39\u80052 -> [warning] \u8b66\u544a\u65e5\u5fd7 | RoutingKey: {warning}\n")))}p.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(t),g=r,d=s["".concat(o,".").concat(g)]||s[g]||p[g]||i;return t?a.a.createElement(d,c(c({ref:n},b),{},{components:t})):a.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},568:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},569:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a},570:function(e,n,t){"use strict";var r=t(0),a=t(569);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},571:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(570),o=t(568),c=t(47),l=t.n(c);const b=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:s,groupId:p}=e,{tabGroupChoices:g,setTabGroupChoices:d}=Object(i.a)(),[m,O]=Object(r.useState)(c),[j,f]=Object(r.useState)(!1);if(null!=p){const e=g[p];null!=e&&e!==m&&s.some(n=>n.value===e)&&O(e)}const y=e=>{O(e),null!=p&&d(p,e)},h=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},v=()=>{f(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",N),window.addEventListener("mousedown",v)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},s.map(({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),style:j?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case b:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e),N(e)},onFocus:()=>y(e),onClick:()=>{y(e),f(!1)},onPointerDown:()=>f(!1)},n))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter(e=>e.props.value===m)[0]))}},572:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},929:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/10-f536323ff5ca16257c13891743c2ae27.png"}}]);