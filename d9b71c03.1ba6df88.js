(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{333:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(389)),c={id:"2.factoryMethod",title:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",hide_title:!0},l={unversionedId:"designPattern/2.factoryMethod",id:"designPattern/2.factoryMethod",isDocsHomePage:!1,title:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",description:"\u5de5\u5382\u65b9\u6cd5 Factory Method",source:"@site/datastructure/designPattern/2.\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f.md",slug:"/designPattern/2.factoryMethod",permalink:"/datastructure/designPattern/2.factoryMethod",version:"current",sidebar:"docs2",previous:{title:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",permalink:"/datastructure/designPattern/1.simpleFactory"},next:{title:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",permalink:"/datastructure/designPattern/3.abstractFactory"}},p=[{value:"\u5de5\u5382\u65b9\u6cd5 Factory Method",id:"\u5de5\u5382\u65b9\u6cd5-factory-method",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],o={rightToc:p};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5de5\u5382\u65b9\u6cd5-factory-method"},"\u5de5\u5382\u65b9\u6cd5 Factory Method"),Object(i.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(i.b)("p",null,"\u5e0c\u671b\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u521b\u5efa\u5bf9\u8c61\u62e5\u6709\u5171\u540c\u7684\u4f7f\u7528\u65b9\u5f0f"),Object(i.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(i.b)("p",null,"\u5728\u62bd\u8c61\u7c7b\u4e2d\u5b9a\u4e49\u7528\u4e8e\u521b\u5efa\u5bf9\u8c61\u7684\u63a5\u53e3\uff0c\u8ba9\u5b50\u7c7b\u51b3\u5b9a\u5b9e\u4f8b\u5316\u54ea\u4e2a\u7c7b\u3002\u5982\u7c7b\u56fe\u6240\u793a\uff0c\u62bd\u8c61\u7c7b",Object(i.b)("inlineCode",{parentName:"p"},"Creator"),"\u5b9a\u4e49\u62bd\u8c61\u65b9\u6cd5",Object(i.b)("inlineCode",{parentName:"p"},"factoryMethod"),"\uff0c\u8be5\u65b9\u6cd5\u88ab\u5177\u4f53\u5b50\u7c7b\u8986\u76d6\u540e\u521b\u5efa\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"product"),"\u7684\u5177\u4f53\u4ea7\u54c1\uff0c\u5177\u4f53\u4ea7\u54c1\u5bf9\u8c61\u5728",Object(i.b)("inlineCode",{parentName:"p"},"Creator"),"\u7684",Object(i.b)("inlineCode",{parentName:"p"},"AnOperation"),"\u65b9\u6cd5\u4e2d\u88ab",Object(i.b)("inlineCode",{parentName:"p"},"product"),"\u7684\u58f0\u540d\u5f15\u7528\u3002\u867d\u7136\u5bf9\u4ea7\u54c1\u5b9e\u4f8b\u5316\u7684\u8fc7\u7a0b\u5b9e\u5728\u5b50\u7c7b\u4e2d\u8fdb\u884c\u7684\uff0c\u4f46\u5728",Object(i.b)("inlineCode",{parentName:"p"},"AnOperation"),"\u4e2d\u901a\u8fc7",Object(i.b)("inlineCode",{parentName:"p"},"product"),"\u5bf9\u5177\u4f53\u4ea7\u54c1\u7684\u4f7f\u7528\u90fd\u76f8\u540c"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5b9a\u4e49\uff1a\u5b9a\u4e49\u4e86\u4e00\u4e2a\u521b\u5efa\u5bf9\u8c61\u7684\u63a5\u53e3\uff0c\u4f46\u7531\u5b50\u7c7b\u51b3\u5b9a\u8981\u5b9e\u4f8b\u5316\u7684\u7c7b\u662f\u54ea\u4e00\u4e2a\u3002\u5de5\u5382\u65b9\u6cd5\u8ba9\u7c7b\u628a\u5b9e\u4f8b\u5316\u63a8\u8fdf\u5230\u5b50\u7c7b\u3002")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u53ef\u4ee5\u770b\u4f5c\u662f\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u4e2d\u7684",Object(i.b)("inlineCode",{parentName:"strong"},"StaticSimpleFactory"),"\u4e0d\u53ea\u4e00\u79cd\uff0c\u800c\u662f\u6709\u597d\u51e0\u79cd\u4e0d\u592a\u4e00\u6837\u7684\u5177\u4f53\u5de5\u5382\uff0c\u518d\u5b83\u4eec\u5934\u4e0a\u518d\u62bd\u4e00\u4e2a\u62bd\u8c61\u5de5\u5382(",Object(i.b)("inlineCode",{parentName:"strong"},"Creator"),")\u51fa\u6765\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u539f\u672c\u5c01\u88c5\u5b9e\u4f8b\u5316\u7684\u57fa\u7840\u4e0a\u66f4\u52a0\u53d1\u6325\u591a\u6001\u6027\u7684\u5a01\u529b\uff0c\u4f53\u73b0\u4e00\u79cd\u5171\u540c\u7684\u521b\u5efaProduct(Pizza)\u7684\u7b56\u7565\u6216\u8005\u65b9\u6cd5")),Object(i.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(i.b)("p",null,Object(i.b)("img",{src:n(753).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200325002106548",src:n(754).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200325104910973",src:n(755).default})),Object(i.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5148\u524d\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u4e2d\u7684",Object(i.b)("inlineCode",{parentName:"li"},"PizzaStore"),"\u7c7b\u53d8\u4e3a\u4e86\u62bd\u8c61\u7c7b\uff0c\u7531\u6d3e\u751f\u7684\u5b50\u7c7b\u5ef6\u65f6new\u5bf9\u8c61")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public abstract class PizzaStore {\n\n    public Pizza orderPizza(String type){\n        Pizza pizza = createPizza(type);\n\n        pizza.prepare();\n        pizza.bake();\n        pizza.cut();\n        pizza.box();\n\n        return pizza;\n    }\n\n    protected abstract Pizza createPizza(String type);\n\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class ChicagoPizzaStore extends PizzaStore {\n    @Override\n    public Pizza createPizza(String type) {\n        Pizza pizza = null;\n        if ("cheese".equals(type)) {\n            pizza = new ChicagoStyleCheesePizza();\n        }else if ("greek".equals(type)) {\n            pizza = new ChicagoStyleGreekPizza();\n        }else if ("pepperoni".equals(type)){\n            pizza = new ChicagoStylePepperoniPizza();\n        }else if ("clam".equals(type)){\n            pizza = new ChicagoStyleClamPizza();\n        }\n        return pizza;\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class NYPizzaStore extends PizzaStore {\n    @Override\n    public Pizza createPizza(String type) {\n        Pizza pizza = null;\n        if ("cheese".equals(type)) {\n            pizza = new NYStyleCheesePizza();\n        }else if ("greek".equals(type)) {\n            pizza = new NYStyleGreekPizza();\n        }else if ("pepperoni".equals(type)){\n            pizza = new NYStylePepperoniPizza();\n        }else if ("clam".equals(type)){\n            pizza = new NYStyleClamPizza();\n        }\n        return pizza;\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fd9\u4e9b\u7ee7\u627f\u62bd\u8c61\u7c7b",Object(i.b)("inlineCode",{parentName:"p"},"PizzaStore"),"\u7684\u5177\u4f53\u7c7b\u4e2d\uff0c\u5b8c\u6210\u5bf9\u5177\u4f53\u4ea7\u54c1(",Object(i.b)("inlineCode",{parentName:"p"},"ChicagoxxxPizza"),"or",Object(i.b)("inlineCode",{parentName:"p"},"NYxxxPizza"),")\u7684\u521b\u5efa"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class NYPizzaStore extends PizzaStore {\n    @Override\n    public Pizza createPizza(String type) {\n        Pizza pizza = null;\n        if ("cheese".equals(type)) {\n            pizza = new NYStyleCheesePizza();\n        }else if ("greek".equals(type)) {\n            pizza = new NYStyleGreekPizza();\n        }else if ("pepperoni".equals(type)){\n            pizza = new NYStylePepperoniPizza();\n        }else if ("clam".equals(type)){\n            pizza = new NYStyleClamPizza();\n        }\n        return pizza;\n    }\n}\n')),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class ChicagoPizzaStore extends PizzaStore {\n    @Override\n    public Pizza createPizza(String type) {\n        Pizza pizza = null;\n        if ("cheese".equals(type)) {\n            pizza = new ChicagoStyleCheesePizza();\n        }else if ("greek".equals(type)) {\n            pizza = new ChicagoStyleGreekPizza();\n        }else if ("pepperoni".equals(type)){\n            pizza = new ChicagoStylePepperoniPizza();\n        }else if ("clam".equals(type)){\n            pizza = new ChicagoStyleClamPizza();\n        }\n        return pizza;\n    }\n}\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u800c\u5177\u4f53\u7684\u4ea7\u54c1(\u5404\u79cd\u5177\u4f53\u62ab\u8428)\u90fd\u6d3e\u751f\u81ea\u62bd\u8c61\u4ea7\u54c1(\u62bd\u8c61\u7c7b",Object(i.b)("inlineCode",{parentName:"p"},"Pizza"),")"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class ChicagoStyleGreekPizza extends Pizza {\n\n    @Override\n    public void prepare() {\n        System.out.println("Chicago style greek pizza preparing...");\n    }\n}\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f7f\u7528\u65f6\uff0c\u58f0\u540d\u62bd\u8c61\u7684",Object(i.b)("inlineCode",{parentName:"li"},"Creator"),"(PizzaStore)\uff0c\u5b9e\u4f8b\u5316\u65f6\u4f7f\u7528\u5177\u4f53\u7684",Object(i.b)("inlineCode",{parentName:"li"},"ConcreteCreator"),"\uff0c\u8c03\u7528\u5de5\u5382\u65b9\u6cd5\uff0c\u751f\u4ea7\u5177\u4f53\u4ea7\u54c1(XxxPizza)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\npublic class Test {\n\n    public static void main(String[] args) {\n\n        PizzaStore pizzaStore = new NYPizzaStore();\n        pizzaStore.orderPizza("cheese");\n\n\n        pizzaStore = new ChicagoPizzaStore();\n        pizzaStore.orderPizza("cheese");\n    }\n}\n')),Object(i.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f18\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b50\u7c7b\u53ea\u5173\u5fc3\u5982\u4f55\u5b9e\u73b0\u62bd\u8c61\u65b9\u6cd5\u6765\u521b\u5efa\u4e00\u4e2a\u5177\u4f53\u5bf9\u8c61\uff0c\u4e4b\u540e\u4fbf\u81ea\u52a8\u62e5\u6709\u4e86\u8be5\u5bf9\u8c61\u7684\u6269\u5c55\u529f\u80fd\uff0c",Object(i.b)("strong",{parentName:"li"},"\u5373\u4e3a\u5b50\u7c7b\u63d0\u4f9b\u4e00\u4e2a\u6302\u94a9\u4ee5\u83b7\u5f97\u5bf9\u8c61\u529f\u80fd\u7684\u6269\u5c55\u7248\u672c")))),Object(i.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5728",Object(i.b)("inlineCode",{parentName:"li"},"Creator"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"Product"),"\u4e0b\u5bb9\u6613\u4ea7\u751f\u5e73\u884c\u7c7b\uff0c\u5373\u6bcf\u4e2a\u5177\u4f53\u7684",Object(i.b)("inlineCode",{parentName:"li"},"Creator"),"\u5b50\u7c7b\u5bf9\u5e94\u4ea7\u751f\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"Product"),"\u4e0b\u7684\u5177\u4f53\u5b50\u7c7b\u5bf9\u8c61")))))}b.isMDXComponent=!0},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return z})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},z=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),z=b(n),s=a,d=z["".concat(c,".").concat(s)]||z[s]||u[s]||i;return n?r.a.createElement(d,l(l({ref:t},o),{},{components:n})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-c83e886d93839bd6d25851f674d8233d.png"},754:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-03dd5f479dd8f5c94b53cf0c3bf3c322.png"},755:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/9-51363f32c20f6c66375d04d74b335d11.png"}}]);