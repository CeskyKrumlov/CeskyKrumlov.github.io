(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{319:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var o=t(2),r=t(6),a=(t(0),t(567)),i={id:"24.globalControllerAdvice",title:"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a",hide_title:!0},l={unversionedId:"springboot/24.globalControllerAdvice",id:"springboot/24.globalControllerAdvice",isDocsHomePage:!1,title:"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a",description:"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a",source:"@site/docs/springboot/24.\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a.md",slug:"/springboot/24.globalControllerAdvice",permalink:"/docs/springboot/24.globalControllerAdvice",version:"current",sidebar:"someSidebar",previous:{title:"\u5168\u5c40\u7edf\u4e00\u54cd\u5e94\u4e0e\u81ea\u5b9a\u4e49\u5f02\u5e38",permalink:"/docs/springboot/23.ajaxResponseAndCustomException"},next:{title:"\u5168\u5c40\u53c2\u6570\u914d\u7f6e",permalink:"/docs/springboot/22.globalConfig"}},c=[{value:"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a",id:"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a",children:[{value:"\u5168\u5c40\u54cd\u5e94\u5904\u7406",id:"\u5168\u5c40\u54cd\u5e94\u5904\u7406",children:[]},{value:"\u5168\u5c40\u8bf7\u6c42\u5904\u7406",id:"\u5168\u5c40\u8bf7\u6c42\u5904\u7406",children:[]},{value:"\u5168\u5c40\u5f02\u5e38\u62e6\u622a",id:"\u5168\u5c40\u5f02\u5e38\u62e6\u622a",children:[]}]}],p={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a"},"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u79cd\u53ef\u4ee5\u8ba9Controller\u4ee3\u7801\u53d8\u5f97\u7b80\u6d01\u7684\u5904\u7406\u65b9\u5f0f"),Object(a.b)("p",{parentName:"blockquote"},"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5728Controller\u4e2d\u8c03\u7528Service\uff0cService\u4e2d\u6709\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u5982\u679c\u4e1a\u52a1\u903b\u8f91\u6267\u884c\u51fa\u73b0\u4e86\u5f02\u5e38\uff0c\u5c31\u4f1a\u5c06\u5f02\u5e38\u629b\u51fa\u5230Controller\u5c42\u4e2d\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5728Controller\u4e2d\u8fdb\u884c\u5f02\u5e38\u5904\u7406try catch\uff0c\u4e00\u65e6\u5199\u4e86try catch\uff0c\u4ee3\u7801\u5c31\u4f1a\u53d8\u5f97\u7e41\u6742\uff0c\u6b64\u5916\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5bf9\u4e8e\u53d1\u751f\u5f02\u5e38\u4e0e\u6ca1\u53d1\u751f\u5f02\u5e38\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e0d\u540c\u7684\u54cd\u5e94"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5e0c\u671b\u7b80\u5316Controller\u7684\u4ee3\u7801"),Object(a.b)("li",{parentName:"ul"},"\u8fd9\u79cd\u95ee\u9898\u51fa\u73b0\u5728\u54cd\u5e94\u903b\u8f91"),Object(a.b)("li",{parentName:"ul"},"\u60f3\u529e\u6cd5\u5c06\u8fd9\u79cd\u54cd\u5e94\u9636\u6bb5\u7684\u7e41\u6742\u4ee3\u7801\uff0c\u8f6c\u79fb\u51fa\u53bb"))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u4f7f\u7528\u5168\u5c40\u54cd\u5e94\u62e6\u622a\uff0c\u5bf9\u6240\u6709Controller\u91c7\u53d6\u4e00\u81f4\u7684\u54cd\u5e94\u9636\u6bb5\u5904\u7406\u7b56\u7565\uff0c\u53ef\u4ee5\u628a\u539f\u672ctry catch\u5b9e\u73b0\u7684\u529f\u80fd\u8f6c\u5ac1\u5230\u8fd9\u91cc\u6765\u5199"))),Object(a.b)("h2",{id:"\u5168\u5c40\u54cd\u5e94\u5904\u7406"},"\u5168\u5c40\u54cd\u5e94\u5904\u7406"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u7edf\u4e00\u54cd\u5e94\u7c7b\u578b\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"AjaxResponse"),"\uff0c\u5373\u4f7fController\u54cd\u5e94\u7684\u662fHashMap\uff0cList\u7b49\u7c7b\u578b\uff0c\u4e5f\u4f1a\u88ab\u5904\u7406\u4e3aAjaxResponse"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5b9e\u73b0",Object(a.b)("inlineCode",{parentName:"li"},"ResponseBodyAdvice"),"\u63a5\u53e3\uff0c\u91cd\u5199",Object(a.b)("inlineCode",{parentName:"li"},"supports"),"\u65b9\u6cd5\u548c",Object(a.b)("inlineCode",{parentName:"li"},"beforeBodyWrite"),"\u65b9\u6cd5"),Object(a.b)("li",{parentName:"ul"},"\u5f53",Object(a.b)("inlineCode",{parentName:"li"},"supports"),"\u65b9\u6cd5\u8fd4\u56de\u7684\u503c\u4e3a",Object(a.b)("inlineCode",{parentName:"li"},"true"),"\uff0c\u7a0b\u5e8f\u4f1a\u8fdb\u5165",Object(a.b)("inlineCode",{parentName:"li"},"beforeBodyWrite"),"\u65b9\u6cd5"),Object(a.b)("li",{parentName:"ul"},"\u5728",Object(a.b)("inlineCode",{parentName:"li"},"beforeBodyWrite"),"\u65b9\u6cd5\u4e2d\uff0c\u5c06MediaType\u4e3a",Object(a.b)("inlineCode",{parentName:"li"},"application/json"),"\u7684\u54cd\u5e94\uff0c\u5168\u90e8\u8f6c\u6362\u4e3a\u81ea\u5b9a\u4e49\u7684",Object(a.b)("inlineCode",{parentName:"li"},"AjaxResponse")))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java",metastring:'title="GlobalResponseAdvice.java"',title:'"GlobalResponseAdvice.java"'}),"@ControllerAdvice\npublic class GlobalResponseAdvice implements ResponseBodyAdvice {\n    @Override\n    public boolean supports(MethodParameter methodParameter, Class aClass) {\n        return true;\n    }\n\n    @Override\n    public Object beforeBodyWrite(Object body,\n                                  MethodParameter returnType,\n                                  MediaType selectedContentType,\n                                  Class selectedConvertType,\n                                  ServerHttpRequest serverHttpRequest,\n                                  ServerHttpResponse serverHttpResponse) {\n\n         if (selectedContentType.equalsTypeAndSubtype(MediaType.APPLICATION_JSON)) {\n            if (body instanceof AjaxResponse) { // \u5982\u679c\u672c\u6765\u54cd\u5e94\u7684\u5c31\u662fAjaxResponse\uff0c\u653e\u884c\n                AjaxResponse ajaxResponse = (AjaxResponse) body;\n                serverHttpResponse.setStatusCode(HttpStatus.valueOf(ajaxResponse.getCode()));\n                return body;\n            } else {\n                serverHttpResponse.setStatusCode(HttpStatus.OK);\n                return AjaxResponse.success(body); // \u4e0d\u662fAjaxResponse\u4e5f\u628a\u4f60\u6363\u9f13\u6210AjaxResponse\n            }\n        }\n        return body;\n    }\n}\n")),Object(a.b)("h2",{id:"\u5168\u5c40\u8bf7\u6c42\u5904\u7406"},"\u5168\u5c40\u8bf7\u6c42\u5904\u7406"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u573a\u666f\uff1a"),Object(a.b)("p",{parentName:"blockquote"},"\u524d\u7aef\u9875\u9762\u6d89\u53ca\u63d0\u4ea4\u65f6\u95f4\u65e5\u671f\u7684\u903b\u8f91\uff0c\u4f1a\u7ed9\u540e\u7aef\u63d0\u4ea4\u65f6\u95f4\u65e5\u671f\uff0c\u4f46\u662f\u8fd9\u4e2a\u65f6\u95f4\u65e5\u671f\u6ca1\u6709\u6307\u5b9a\u683c\u5f0f\uff0c\u4e5f\u4e0d\u5141\u8bb8\u524d\u7aef\u63d0\u4ea4\u7a7a\u65f6\u95f4\uff0c\u8fd9\u663e\u7136\u4e0d\u597d"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5199\u4e00\u4e2a\u5168\u5c40\u8bf7\u6c42\u5904\u7406\uff0c\u5bf9\u4e8e\u4efb\u4f55\u5230\u8fbeController\u7684\u524d\u7aef\u65e5\u671f\u6570\u636e\uff0c\u8fdb\u884c\u7edf\u4e00\u7684\u65f6\u95f4\u683c\u5f0f\u5316\u5904\u7406\uff0c\u5e76\u4e14\u5141\u8bb8\u65e5\u671f\u4e3a\u7a7a"))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java",metastring:'title="GlobalRequestAdvice.java"',title:'"GlobalRequestAdvice.java"'}),'@ControllerAdvice\npublic class GlobalRequestAdvice {\n\n    @InitBinder\n    protected void initBinder(WebDataBinder binder) {\n        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        binder.registerCustomEditor(Date.class,\n                //true\u8868\u793a\u8f6c\u6362\u4e3a\u65e5\u671f\u7684\u5b57\u7b26\u4e32\u53ef\u4ee5\u4e3a\u7a7a\uff0c\u4e0d\u8bbe\u7f6e\u8fd9\u4e2a\u503c\u63a5\u6536\u7a7a\u4e32\u4f1a\u62a5\u9519\n                new CustomDateEditor(dateFormat, true)\n        );\n    }\n}\n')),Object(a.b)("h2",{id:"\u5168\u5c40\u5f02\u5e38\u62e6\u622a"},"\u5168\u5c40\u5f02\u5e38\u62e6\u622a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6240\u6709Controller\u4e2d\u7684try catch\u8bed\u53e5\u5168\u90e8\u7701\u7565\uff0c\u8f6c\u79fb\u5230\u8fd9\u91cc\u6765\u8fdb\u884c\u7edf\u4e00\u7684\u5904\u7406"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u4f5c\u7528\u5728\u6240\u6709Controller\u4e0a"),Object(a.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6307\u5b9a\u6355\u83b7\u7279\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38\uff0c\u6700\u540e\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6355\u83b7",Object(a.b)("inlineCode",{parentName:"li"},"Exception"),"\u7684\u65b9\u6cd5\u6765\u6cdb\u5316\u5904\u7406"),Object(a.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6bcf\u79cd\u7c7b\u578b\u7684\u5f02\u5e38\uff0c\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"li"},"AjaxResponse"),"\uff0c\u914d\u5408\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u7c7b\u578b",Object(a.b)("inlineCode",{parentName:"li"},"CustomException"),"\uff0c\u8fdb\u884c\u4e2a\u6027\u5316\u7684\u5f02\u5e38\u4fe1\u606f\u54cd\u5e94"))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java",metastring:'title="GlobalExceptionHandler.java"',title:'"GlobalExceptionHandler.java"'}),'@ControllerAdvice\npublic class GlobalExceptionHandler {\n  /*  @ExceptionHandler(ModelViewException.class)\n    public ModelAndView viewExceptionHandler(HttpServletRequest req, ModelViewException e) {\n        ModelAndView modelAndView = new ModelAndView();\n\n        //\u5c06\u5f02\u5e38\u4fe1\u606f\u8bbe\u7f6e\u5982modelAndView\n        modelAndView.addObject("exception", e);\n        modelAndView.addObject("url", req.getRequestURL());\n        modelAndView.setViewName("error");\n\n        //\u8fd4\u56deModelAndView\n        return modelAndView;\n    }*/\n\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    @ResponseBody\n    public AjaxResponse handleBindException(MethodArgumentNotValidException ex) {\n        FieldError fieldError = ex.getBindingResult().getFieldError();\n        return AjaxResponse.error(new CustomException(CustomExceptionType.USER_INPUT_ERROR,\n                fieldError.getDefaultMessage()));\n    }\n\n    @ExceptionHandler(BindException.class)\n    @ResponseBody\n    public AjaxResponse handleBindException(BindException ex) {\n        FieldError fieldError = ex.getBindingResult().getFieldError();\n        return AjaxResponse.error(new CustomException(CustomExceptionType.USER_INPUT_ERROR,\n                fieldError.getDefaultMessage()));\n    }\n\n    @ExceptionHandler(IllegalArgumentException.class)\n    @ResponseBody\n    public AjaxResponse handleIllegalArgumentException(IllegalArgumentException e) {\n        return AjaxResponse.error(\n                new CustomException(CustomExceptionType.USER_INPUT_ERROR,\n                        e.getMessage())\n        );\n    }\n\n    @ExceptionHandler(DuplicateKeyException.class)\n    @ResponseBody\n    public AjaxResponse handleDuplicateKeyException(DuplicateKeyException e) {\n        return AjaxResponse.error(\n                new CustomException(CustomExceptionType.USER_INPUT_ERROR,\n                        "\u60a8\u8f93\u5165\u7684\u6570\u636e\u4e0e\u73b0\u6709\u6570\u636e\u91cd\u590d,\u8bf7\u68c0\u67e5\u4e4b\u540e\u91cd\u65b0\u8f93\u5165")\n        );\n    }\n\n\n    @ExceptionHandler(CustomException.class)\n    @ResponseBody\n    public AjaxResponse customerException(CustomException e) {\n        if (e.getCode() == CustomExceptionType.SYSTEM_ERROR.getCode()) {\n            //400\u5f02\u5e38\u4e0d\u9700\u8981\u6301\u4e45\u5316\uff0c\u5c06\u5f02\u5e38\u4fe1\u606f\u4ee5\u53cb\u597d\u7684\u65b9\u5f0f\u544a\u77e5\u7528\u6237\u5c31\u53ef\u4ee5\n            //TODO \u5c06500\u5f02\u5e38\u4fe1\u606f\u6301\u4e45\u5316\u5904\u7406\uff0c\u65b9\u4fbf\u8fd0\u7ef4\u4eba\u5458\u5904\u7406\n            e.printStackTrace();\n        }\n        return AjaxResponse.error(e);\n    }\n\n  \n    //\u5904\u7406\u7a0b\u5e8f\u5458\u5728\u7a0b\u5e8f\u4e2d\u672a\u80fd\u6355\u83b7\uff08\u9057\u6f0f\u7684\uff09\u5f02\u5e38\n    @ExceptionHandler(Exception.class)\n    @ResponseBody\n    public AjaxResponse exception(Exception e) {\n        //TODO \u5c06\u5f02\u5e38\u4fe1\u606f\u6301\u4e45\u5316\u5904\u7406\uff0c\u65b9\u4fbf\u8fd0\u7ef4\u4eba\u5458\u5904\u7406\n        e.printStackTrace();\n        return AjaxResponse.error(new CustomException(\n                CustomExceptionType.SYSTEM_ERROR, "\u7cfb\u7edf\u51fa\u73b0\u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\uff01"));\n    }\n}\n')))}s.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=o,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return t?r.a.createElement(m,l(l({ref:n},p),{},{components:t})):r.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);