(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1176:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/9-b39e55c4c564234c147ea3de9128ae32.png"},517:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(561)),c=t(565),i=t(566),l={id:"4.fanoutModel",title:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b Fanout",hide_title:!0},b={unversionedId:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/4.fanoutModel",id:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/4.fanoutModel",isDocsHomePage:!1,title:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b Fanout",description:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b",source:"@site/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/fanout.md",slug:"/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/4.fanoutModel",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/4.fanoutModel",version:"current",sidebar:"someSidebar",previous:{title:"Work \u6a21\u578b",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/3.workModel"},next:{title:"Routing Direct \u6a21\u5f0f",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/5.directModel"}},u=[{value:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b",id:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b",children:[{value:"\u751f\u4ea7\u8005\u5b9e\u73b0",id:"\u751f\u4ea7\u8005\u5b9e\u73b0",children:[]},{value:"\u6d88\u8d39\u8005\u5b9e\u73b0",id:"\u6d88\u8d39\u8005\u5b9e\u73b0",children:[]}]}],s={rightToc:u};function p(e){var n=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,l,{components:n,mdxType:"MDXLayout"}),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b"},"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Fanout")," \u4e5f\u79f0 ",Object(o.b)("inlineCode",{parentName:"strong"},"\u5e7f\u64ad"))),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u751f\u4ea7\u8005\u53d1\u5e03\u7684\u6d88\u606f\uff0c\u6240\u6709\u6d88\u8d39\u8005\u90fd\u53ef\u4ee5\u63a5\u6536\u5230")),Object(o.b)("br",null),Object(o.b)("img",{src:t(1176).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}}),Object(o.b)("br",null),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u6d41\u7a0b\uff1a")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6709\u591a\u4e2a\u6d88\u8d39\u8005"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u6bcf\u4e2a\u6d88\u8d39\u8005\u90fd\u6709\u81ea\u5df1\u7684 ",Object(o.b)("inlineCode",{parentName:"strong"},"\u961f\u5217 Queue"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u6bcf\u4e2a\u961f\u5217\u90fd\u8981\u7ed1\u5b9a\u5230 ",Object(o.b)("inlineCode",{parentName:"strong"},"\u4ea4\u6362\u673a Exchange"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u751f\u4ea7\u8005\u53d1\u9001\u7684\u6d88\u606f\uff0c\u53ea\u80fd\u53d1\u9001\u5230\u4ea4\u6362\u673a"),"\uff0c\u4ea4\u6362\u673a\u6765\u51b3\u5b9a\u6d88\u606f\u53d1\u7ed9\u54ea\u4e2a\u961f\u5217\uff0c\u751f\u4ea7\u8005\u65e0\u6cd5\u51b3\u5b9a"),Object(o.b)("li",{parentName:"ul"},"\u4ea4\u6362\u673a\u628a\u6d88\u606f\u53d1\u9001\u7ed9\u7ed1\u5b9a\u8fc7\u7684\u6240\u6709\u961f\u5217"),Object(o.b)("li",{parentName:"ul"},"\u961f\u5217\u7684\u6d88\u8d39\u8005\u90fd\u80fd\u62ff\u5230\u6d88\u606f\uff0c\u5b9e\u73b0\u4e00\u6761\u6d88\u606f\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39"))),Object(o.b)("h2",{id:"\u751f\u4ea7\u8005\u5b9e\u73b0"},"\u751f\u4ea7\u8005\u5b9e\u73b0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u751f\u4ea7\u8005\u4e0d\u518d\u4e0e\u6d88\u606f\u961f\u5217\u7ed1\u5b9a\uff0c\u800c\u662f\u4e0e\u4ea4\u6362\u673a\u7ed1\u5b9a")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u58f0\u660e\u4ea4\u6362\u673a"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"channel.exchangeDeclare(String \u4ea4\u6362\u673a\u540d, String \u7c7b\u578b)"),"\uff0c\u7c7b\u578b\u5fc5\u987b\u662f ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"fanout")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u4ea4\u6362\u673a\u4e0d\u5b58\u5728\uff0cRabbitMQ \u4f1a\u81ea\u52a8\u521b\u5efa"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u901a\u8fc7\u901a\u9053\u53d1\u9001\u6d88\u606f"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"basicPublish(String exchange, String routingKey, ..., ...)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"routingKey")," \u6ca1\u6709\u5b9e\u9645\u542b\u4e49\uff0c\u586b ",Object(o.b)("inlineCode",{parentName:"li"},'""')," \u5373\u53ef")))),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="Fanout \u751f\u4ea7\u8005\u5b9e\u73b0" {7}',title:'"Fanout','\u751f\u4ea7\u8005\u5b9e\u73b0"':!0,"{7}":!0}),'public class ProviderFanout {\n    public static void main(String[] args) throws IOException {\n        Connection connection = RabbitMqUtils.getConnection();\n        Channel channel = connection.createChannel();\n\n        // \u5c06\u901a\u9053\u58f0\u660e\u5230\u4ea4\u6362\u673a\n        channel.exchangeDeclare("logs", "fanout"); // \u5e7f\u64ad\n        // \u53d1\u9001\u6d88\u606f\n        channel.basicPublish("logs", "", null, "fanout type message".getBytes());\n\n        RabbitMqUtils.closeConnectionAndChannel(connection, channel);\n    }\n}\n'))),Object(o.b)("h2",{id:"\u6d88\u8d39\u8005\u5b9e\u73b0"},"\u6d88\u8d39\u8005\u5b9e\u73b0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u6b65\u9aa4")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u521b\u5efa\u4e34\u65f6\u961f\u5217")," \u2014\u2014 ",Object(o.b)("inlineCode",{parentName:"p"},"channel.queueDeclare().getQueue()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u5c06\u4e34\u65f6\u961f\u5217\u7ed1\u5b9a\u5230\u4ea4\u6362\u673a")," \u2014\u2014 ",Object(o.b)("inlineCode",{parentName:"p"},"channel.queueBind(3\u4e2a\u53c2\u6570)")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"String queue")," \u2014\u2014 \u4e34\u65f6\u961f\u5217\u540d"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"String exchange")," \u2014\u2014 \u4ea4\u6362\u673a\u540d"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"String routingKey")," \u2014\u2014 \u5728\u8be5\u6a21\u5f0f\u4e0b\u76f4\u63a5\u5199 ",Object(o.b)("inlineCode",{parentName:"li"},'""')))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u5904\u7406\u6d88\u606f")," \u2014\u2014 ",Object(o.b)("inlineCode",{parentName:"p"},"channel.basicConsume()"))))),Object(o.b)(c.a,{defaultValue:"1",values:[{label:"\u6d88\u8d39\u8005 1",value:"1"},{label:"\u6d88\u8d39\u8005 2",value:"2"},{label:"\u6d88\u8d39\u8005 3",value:"3"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"1",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6d88\u8d39\u80051" {7,9}',title:'"\u6d88\u8d39\u80051"',"{7,9}":!0}),'public class ConsumerFanout1 {\n    public static void main(String[] args) throws IOException {\n        Connection connection = RabbitMqUtils.getConnection();\n        Channel channel = connection.createChannel();\n\n        // \u521b\u5efa\u4e34\u65f6\u961f\u5217\n        String tempQueue = channel.queueDeclare().getQueue();\n        // \u964d\u4e34\u65f6\u961f\u5217\u7ed1\u5b9a\u5230\u4ea4\u6362\u673a\n        channel.queueBind(tempQueue, "logs", "");\n        // \u6d88\u8d39\u6d88\u606f\n        channel.basicConsume(tempQueue, true, new DefaultConsumer(channel) {\n            @Override\n            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {\n                System.out.println("Fanout Consumer 1 | Message from Provider -> " + new String(body));\n            }\n        });\n    }\n}\n'))),Object(o.b)(i.a,{value:"2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6d88\u8d39\u80052"\xa0{7,9}',title:'"\u6d88\u8d39\u80052"\xa0{7,9}'}),'public class ConsumerFanout2 {\n    public static void main(String[] args) throws IOException {\n        Connection connection = RabbitMqUtils.getConnection();\n        Channel channel = connection.createChannel();\n\n        // \u521b\u5efa\u4e34\u65f6\u961f\u5217\n        String tempQueue = channel.queueDeclare().getQueue();\n        // \u964d\u4e34\u65f6\u961f\u5217\u7ed1\u5b9a\u5230\u4ea4\u6362\u673a\n        channel.queueBind(tempQueue, "logs", "");\n        // \u6d88\u8d39\u6d88\u606f\n        channel.basicConsume(tempQueue, true, new DefaultConsumer(channel) {\n            @Override\n            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {\n                System.out.println("Fanout Consumer 2 | Message from Provider -> " + new String(body));\n            }\n        });\n    }\n}\n'))),Object(o.b)(i.a,{value:"3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6d88\u8d39\u80053"\xa0{7,9}',title:'"\u6d88\u8d39\u80053"\xa0{7,9}'}),'public class ConsumerFanout3 {\n    public static void main(String[] args) throws IOException {\n        Connection connection = RabbitMqUtils.getConnection();\n        Channel channel = connection.createChannel();\n\n        // \u521b\u5efa\u4e34\u65f6\u961f\u5217\n        String tempQueue = channel.queueDeclare().getQueue();\n        // \u964d\u4e34\u65f6\u961f\u5217\u7ed1\u5b9a\u5230\u4ea4\u6362\u673a\n        channel.queueBind(tempQueue, "logs", "");\n        // \u6d88\u8d39\u6d88\u606f\n        channel.basicConsume(tempQueue, true, new DefaultConsumer(channel) {\n            @Override\n            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {\n                System.out.println("Fanout Consumer 3 | Message from Provider -> " + new String(body));\n            }\n        });\n    }\n}\n')))))}p.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),u=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return t?r.a.createElement(d,i(i({ref:n},b),{},{components:t})):r.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},562:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},563:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},564:function(e,n,t){"use strict";var a=t(0),r=t(563);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},565:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(564),c=t(562),i=t(47),l=t.n(i);const b=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:i,values:s,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(o.a)(),[O,j]=Object(a.useState)(i),[g,f]=Object(a.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==O&&s.some(n=>n.value===e)&&j(e)}const h=e=>{j(e),null!=p&&d(p,e)},v=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},N=()=>{f(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",N)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n})},s.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),style:g?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case b:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(v,e.target,e),y(e)},onFocus:()=>h(e),onClick:()=>{h(e),f(!1)},onPointerDown:()=>f(!1)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===O)[0]))}},566:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);