(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{283:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(520)),l={id:"27.removeElement",title:"27.\u79fb\u9664\u5143\u7d20",hide_title:!0},o={unversionedId:"sf/\u53cc\u6307\u9488/27.removeElement",id:"sf/\u53cc\u6307\u9488/27.removeElement",isDocsHomePage:!1,title:"27.\u79fb\u9664\u5143\u7d20",description:"27. \u79fb\u9664\u5143\u7d20",source:"@site/datastructure/sf/\u53cc\u6307\u9488/27.\u79fb\u9664\u5143\u7d20.md",slug:"/sf/\u53cc\u6307\u9488/27.removeElement",permalink:"/datastructure/sf/\u53cc\u6307\u9488/27.removeElement",version:"current",sidebar:"docs2",previous:{title:"344.\u53cd\u8f6c\u5b57\u7b26\u4e32",permalink:"/datastructure/sf/\u53cc\u6307\u9488/344.reverseString"},next:{title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",permalink:"/datastructure/sf/\u53cc\u6307\u9488/88.mergeTwoOrderedList"}},c=[{value:"27. \u79fb\u9664\u5143\u7d20",id:"27-\u79fb\u9664\u5143\u7d20",children:[{value:"\u53cc\u6307\u9488\u89e3\u6cd5",id:"\u53cc\u6307\u9488\u89e3\u6cd5",children:[]}]}],b={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"27-\u79fb\u9664\u5143\u7d20"},"27. \u79fb\u9664\u5143\u7d20"),Object(i.b)("p",null,"\u96be\u5ea6 \u7b80\u5355"),Object(i.b)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 ",Object(i.b)("em",{parentName:"p"},"nums")," \u548c\u4e00\u4e2a\u503c ",Object(i.b)("em",{parentName:"p"},"val"),"\uff0c\u4f60\u9700\u8981 ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95"}),"\u539f\u5730"))," \u79fb\u9664\u6240\u6709\u6570\u503c\u7b49\u4e8e ",Object(i.b)("em",{parentName:"p"},"val")," \u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u79fb\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002"),Object(i.b)("p",null,"\u4e0d\u8981\u4f7f\u7528\u989d\u5916\u7684\u6570\u7ec4\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u4ec5\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u5e76 ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95"}),"\u539f\u5730 "),"\u4fee\u6539\u8f93\u5165\u6570\u7ec4"),"\u3002"),Object(i.b)("p",null,"\u5143\u7d20\u7684\u987a\u5e8f\u53ef\u4ee5\u6539\u53d8\u3002\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u7ed9\u5b9a nums = [3,2,2,3], val = 3,\n\n\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 2, \u5e76\u4e14 nums \u4e2d\u7684\u524d\u4e24\u4e2a\u5143\u7d20\u5747\u4e3a 2\u3002\n\n\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u7ed9\u5b9a nums = [0,1,2,2,3,0,4,2], val = 2,\n\n\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 5, \u5e76\u4e14 nums \u4e2d\u7684\u524d\u4e94\u4e2a\u5143\u7d20\u4e3a 0, 1, 3, 0, 4\u3002\n\n\u6ce8\u610f\u8fd9\u4e94\u4e2a\u5143\u7d20\u53ef\u4e3a\u4efb\u610f\u987a\u5e8f\u3002\n\n\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8bf4\u660e:")),Object(i.b)("p",null,"\u4e3a\u4ec0\u4e48\u8fd4\u56de\u6570\u503c\u662f\u6574\u6570\uff0c\u4f46\u8f93\u51fa\u7684\u7b54\u6848\u662f\u6570\u7ec4\u5462?"),Object(i.b)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8f93\u5165\u6570\u7ec4\u662f\u4ee5",Object(i.b)("strong",{parentName:"p"},"\u300c\u5f15\u7528\u300d"),"\u65b9\u5f0f\u4f20\u9012\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5728\u51fd\u6570\u91cc\u4fee\u6539\u8f93\u5165\u6570\u7ec4\u5bf9\u4e8e\u8c03\u7528\u8005\u662f\u53ef\u89c1\u7684\u3002"),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u60f3\u8c61\u5185\u90e8\u64cd\u4f5c\u5982\u4e0b:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// nums \u662f\u4ee5\u201c\u5f15\u7528\u201d\u65b9\u5f0f\u4f20\u9012\u7684\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u5bf9\u5b9e\u53c2\u4f5c\u4efb\u4f55\u62f7\u8d1d\nint len = removeElement(nums, val);\n\n// \u5728\u51fd\u6570\u91cc\u4fee\u6539\u8f93\u5165\u6570\u7ec4\u5bf9\u4e8e\u8c03\u7528\u8005\u662f\u53ef\u89c1\u7684\u3002\n// \u6839\u636e\u4f60\u7684\u51fd\u6570\u8fd4\u56de\u7684\u957f\u5ea6, \u5b83\u4f1a\u6253\u5370\u51fa\u6570\u7ec4\u4e2d \u8be5\u957f\u5ea6\u8303\u56f4\u5185 \u7684\u6240\u6709\u5143\u7d20\u3002\nfor (int i = 0; i < len; i++) {\n    print(nums[i]);\n}\n")),Object(i.b)("h2",{id:"\u53cc\u6307\u9488\u89e3\u6cd5"},"\u53cc\u6307\u9488\u89e3\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"0 1 2 2 3 0 4 2")),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u4e24\u4e2a\u6307\u9488\uff0c\u5de6\u6307\u9488\u4e0e\u53f3\u6307\u9488\uff0c\u5206\u522b\u6307\u5411\u5934\u5c3e"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"\u63a5\u4e0b\u6765\u79fb\u52a8\u6307\u9488\uff0c\u6bcf\u6b21\u79fb\u52a8\u6307\u9488\uff0c\u90fd\u8981\u68c0\u67e5\u5de6\u53f3\u6307\u9488\u7684\u4f4d\u7f6e\uff0c\u4fdd\u8bc1\u5de6\u6307\u9488\u4e0d\u5728\u53f3\u6307\u9488\u7684\u53f3\u4fa7")),Object(i.b)("li",{parentName:"ol"},"\u5148\u79fb\u52a8\u5de6\u6307\u9488\uff0c\u76f4\u5230",Object(i.b)("strong",{parentName:"li"},"\u627e\u5230\u7b2c\u4e00\u4e2a\u5230\u76ee\u6807\u503c\u5143\u7d20")),Object(i.b)("li",{parentName:"ol"},"\u518d\u79fb\u52a8\u53f3\u6307\u9488\uff0c\u76f4\u5230",Object(i.b)("strong",{parentName:"li"},"\u627e\u5230\u7b2c\u4e00\u4e2a\u4e0d\u4e3a\u76ee\u6807\u503c\u7684\u5143\u7d20")),Object(i.b)("li",{parentName:"ol"},"\u4ea4\u6362\u5de6\u53f3\u6307\u9488\u5bf9\u5e94\u7684\u503c"),Object(i.b)("li",{parentName:"ol"},"\u91cd\u590d2~4\uff0c\u76f4\u5230\u5de6\u53f3\u6307\u9488\u76f8\u7b49\uff0c\u6b64\u65f6\u76f8\u9047\u70b9\u5de6\u4fa7\u5747\u4e0d\u4e3a\u76ee\u6807\u503c\uff0c",Object(i.b)("strong",{parentName:"li"},"\u68c0\u67e5\u76f8\u9047\u70b9\u7684\u503c"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u76f8\u9047\u70b9\u503c\u7b49\u4e8e\u76ee\u6807\u503c\uff1a\u90a3\u4e48\u9009\u53d6\u76f8\u9047\u70b9\u4e4b\u524d\u7684\u6240\u6709\u5143\u7d20\u4e3a\u6709\u6548\u7ed3\u679c\uff0c\u90a3\u4e48\u6709\u6548\u957f\u5ea6\u6b63\u597d\u5c31\u662f\u76f8\u9047\u70b9\u5bf9\u5e94\u7684\u4e0b\u6807\uff0c\u6545\u8fd4\u56de\u5de6\u6307\u9488"),Object(i.b)("li",{parentName:"ul"},"\u76f8\u9047\u70b9\u503c\u4e0d\u7b49\u4e8e\u76ee\u6807\u503c\uff1a\u6839\u636e\u4e0a\u4e00\u6761\uff0c\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"li"},"\u5de6\u6307\u9488 + 1")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _27\u79fb\u9664\u5143\u7d20 {\n    public static void main(String[] args) {\n        int[] nums1 = {2, 2, 3}; // val = 2\n        int[] nums2 = {0, 1, 2, 2, 3, 0, 4, 2};  // val = 2\n\n        int res1 = removeElement(nums1, 2);\n        int res2 = removeElement(nums2, 2);\n\n        System.out.println("res1 = " + res1);\n        for (int i : nums1) {\n            System.out.print(i + " ");\n        }\n\n        System.out.println("\\n res2 = " + res2);\n        for (int i : nums2) {\n            System.out.print(i + " ");\n        }\n    }\n\n    public static int removeElement(int[] nums, int val) {\n        if (nums == null || nums.length == 0) {\n            return 0;\n        }\n\n        int leftPointer = 0;\n        int rightPointer = nums.length - 1;\n\n        while (leftPointer < rightPointer) {\n            // \u6bcf\u6b21\n            while (leftPointer < rightPointer && nums[leftPointer] != val) { // \u627e\u5230\u7b2c\u4e00\u4e2a\u4e3a\u76ee\u6807\u503c\u7684\u5143\u7d20\n                leftPointer++;\n            }\n\n            while (leftPointer < rightPointer && nums[rightPointer] == val) { // \u627e\u5230\u7b2c\u4e00\u4e2a\u4e0d\u4e3a\u76ee\u6807\u503c\u7684\u5143\u7d20\n                rightPointer--;\n            }\n\n            int temp = nums[rightPointer]; // \u4ea4\u6362\u503c\n            nums[rightPointer] = nums[leftPointer];\n            nums[leftPointer] = temp;\n        }\n\n        // \u5230\u8fbe\u76f8\u9047\u70b9\uff0c\u68c0\u67e5\u76f8\u9047\u70b9\u7684\u503c\u662f\u5426\u7b49\u4e8e\u76ee\u6807\u503c\n        return nums[leftPointer] == val ? leftPointer : leftPointer + 1;\n    }\n}\n')))}u.isMDXComponent=!0},520:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(t),s=r,O=p["".concat(l,".").concat(s)]||p[s]||m[s]||i;return t?a.a.createElement(O,o(o({ref:n},b),{},{components:t})):a.a.createElement(O,o({ref:n},b))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);