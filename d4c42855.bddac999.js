(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{474:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(561)),l={id:"704.binarySearchLeetcode",title:"704.\u4e8c\u5206\u67e5\u627e",hide_title:!0},c={unversionedId:"sf/\u4e8c\u5206\u67e5\u627e/704.binarySearchLeetcode",id:"sf/\u4e8c\u5206\u67e5\u627e/704.binarySearchLeetcode",isDocsHomePage:!1,title:"704.\u4e8c\u5206\u67e5\u627e",description:"704.\u4e8c\u5206\u67e5\u627e",source:"@site/datastructure/sf/\u4e8c\u5206\u67e5\u627e/704.\u4e8c\u5206\u67e5\u627e.md",slug:"/sf/\u4e8c\u5206\u67e5\u627e/704.binarySearchLeetcode",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/704.binarySearchLeetcode",version:"current",sidebar:"docs2",previous:{title:"253.\u4f1a\u8bae\u5ba42",permalink:"/datastructure/sf/\u6392\u5e8f/253.meetingroom2"},next:{title:"35.\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/35.searchInsertPosition"}},b=[{value:"704.\u4e8c\u5206\u67e5\u627e",id:"704\u4e8c\u5206\u67e5\u627e",children:[{value:"\u4e8c\u5206\u67e5\u627e\u89e3\u6cd5",id:"\u4e8c\u5206\u67e5\u627e\u89e3\u6cd5",children:[]}]}],o={rightToc:b};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"704\u4e8c\u5206\u67e5\u627e"},"704.\u4e8c\u5206\u67e5\u627e"),Object(i.b)("p",null,"\u96be\u5ea6 \u7b80\u5355"),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"n")," \u4e2a\u5143\u7d20\u6709\u5e8f\u7684\uff08\u5347\u5e8f\uff09\u6574\u578b\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"p"},"nums")," \u548c\u4e00\u4e2a\u76ee\u6807\u503c ",Object(i.b)("inlineCode",{parentName:"p"},"target")," \uff0c\u5199\u4e00\u4e2a\u51fd\u6570\u641c\u7d22 ",Object(i.b)("inlineCode",{parentName:"p"},"nums")," \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"target"),"\uff0c\u5982\u679c\u76ee\u6807\u503c\u5b58\u5728\u8fd4\u56de\u4e0b\u6807\uff0c\u5426\u5219\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"p"},"-1"),"\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: nums = [-1,0,3,5,9,12], target = 9\n\u8f93\u51fa: 4\n\u89e3\u91ca: 9 \u51fa\u73b0\u5728 nums \u4e2d\u5e76\u4e14\u4e0b\u6807\u4e3a 4\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: nums = [-1,0,3,5,9,12], target = 2\n\u8f93\u51fa: -1\n\u89e3\u91ca: 2 \u4e0d\u5b58\u5728 nums \u4e2d\u56e0\u6b64\u8fd4\u56de -1\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u5047\u8bbe ",Object(i.b)("inlineCode",{parentName:"li"},"nums")," \u4e2d\u7684\u6240\u6709\u5143\u7d20\u662f\u4e0d\u91cd\u590d\u7684\u3002"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"n")," \u5c06\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"[1, 10000]"),"\u4e4b\u95f4\u3002"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"nums")," \u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u5c06\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"[-9999, 9999]"),"\u4e4b\u95f4\u3002")),Object(i.b)("h2",{id:"\u4e8c\u5206\u67e5\u627e\u89e3\u6cd5"},"\u4e8c\u5206\u67e5\u627e\u89e3\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u5b9a\u4e49\u5de6\u53f3\u6307\u9488\uff0c\u5206\u522b\u6307\u5411\u5934\u5c3e"),Object(i.b)("li",{parentName:"ol"},"\u6839\u636e\u5de6\u53f3\u6307\u9488\u8ba1\u7b97\u4e2d\u95f4\u4f4d\u7f6e\u4e0b\u6807",Object(i.b)("inlineCode",{parentName:"li"},"middle")),Object(i.b)("li",{parentName:"ol"},"\u5224\u65ad",Object(i.b)("inlineCode",{parentName:"li"},"nums[middle]"),"\u4e0e\u76ee\u6807\u503c",Object(i.b)("inlineCode",{parentName:"li"},"target"),"\u7684\u5927\u5c0f"),Object(i.b)("li",{parentName:"ol"},"\u5c06\u533a\u95f4\u6298\u534a\uff0c\u9009\u62e9",Object(i.b)("inlineCode",{parentName:"li"},"\u5de6")," \u6216 ",Object(i.b)("inlineCode",{parentName:"li"},"\u53f3"),"\u533a\u95f4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e2d\u503c\u5927\u4e8e\u76ee\u6807\u503c\uff1a\u9009\u62e9",Object(i.b)("inlineCode",{parentName:"li"},"\u5de6\u533a\u95f4"),"\uff0c\u5c06\u53f3\u6307\u9488\u7f29\u5230\u4e2d\u95f4\u6765\uff0c\u5373",Object(i.b)("inlineCode",{parentName:"li"},"right = middle - 1;")),Object(i.b)("li",{parentName:"ul"},"\u4e2d\u6307\u5c0f\u4e8e\u76ee\u6807\u503c\uff1a\u9009\u62e9",Object(i.b)("inlineCode",{parentName:"li"},"\u53f3\u533a\u95f4"),"\uff0c\u5c06\u5de6\u6307\u9488\u52a0\u5230\u4e2d\u95f4\u6765\uff0c\u5373",Object(i.b)("inlineCode",{parentName:"li"},"left = middle + 1;")))),Object(i.b)("li",{parentName:"ol"},"\u5f53",Object(i.b)("inlineCode",{parentName:"li"},"nums[middle] == target"),"\uff0c\u8fd4\u56de\u4e0b\u6807",Object(i.b)("inlineCode",{parentName:"li"},"middle")),Object(i.b)("li",{parentName:"ol"},"\u5bf9\u8fb9\u754c\u60c5\u51b5\u8fdb\u884c\u5904\u7406\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7a7a\u8f93\u5165"),Object(i.b)("li",{parentName:"ul"},"\u7a7a\u6570\u7ec4"),Object(i.b)("li",{parentName:"ul"},"\u6570\u7ec4\u53ea\u6709\u4e00\u4e2a\u5143\u7d20"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _704\u4e8c\u5206\u67e5\u627e {\n    public static void main(String[] args) {\n        int[] nums1 = {-1, 0, 3, 5, 9, 12}; // target = 9 || 2\n\n        int res1 = search(nums1, 9);\n        int res2 = search(nums1, 2);\n\n        System.out.println("res1 = " + res1);\n        System.out.println("res2 = " + res2);\n    }\n\n    public static int search(int[] nums, int target) {\n        if (nums == null || nums.length == 0)\n            return -1;\n\n        int left = 0;\n        int right = nums.length - 1;\n\n        while (left <= right) { // \u7b49\u4e8e \u5904\u7406\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u7684\u60c5\u51b5\n            int middle = (left + right) / 2;\n\n            if (nums[middle] == target) {\n                return middle;\n            } else if (nums[middle] > target) { // \u53bb\u5de6\u8fb9\n                right = middle - 1;\n            } else { // \u53bb\u53f3\u8fb9\n                left = middle + 1;\n            }\n        }\n\n        return -1;\n    }\n}\n')))}p.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),p=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,d=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return t?a.a.createElement(d,c(c({ref:n},o),{},{components:t})):a.a.createElement(d,c({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<i;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);