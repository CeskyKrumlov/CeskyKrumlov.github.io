(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{437:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),c=(n(0),n(576)),i={id:"35.searchInsertPosition",title:"35.\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",hide_title:!0},o={unversionedId:"sf/\u4e8c\u5206\u67e5\u627e/35.searchInsertPosition",id:"sf/\u4e8c\u5206\u67e5\u627e/35.searchInsertPosition",isDocsHomePage:!1,title:"35.\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",description:"35. \u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",source:"@site/datastructure/sf/\u4e8c\u5206\u67e5\u627e/35.\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e.md",slug:"/sf/\u4e8c\u5206\u67e5\u627e/35.searchInsertPosition",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/35.searchInsertPosition",version:"current",sidebar:"docs2",previous:{title:"704.\u4e8c\u5206\u67e5\u627e",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/704.binarySearchLeetcode"},next:{title:"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",permalink:"/datastructure/sf/\u6ed1\u52a8\u7a97\u53e3/209.MinimumSizeSubarraySum"}},u=[{value:"35. \u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",id:"35-\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",children:[{value:"\u4e8c\u5206\u641c\u7d22\u6cd5",id:"\u4e8c\u5206\u641c\u7d22\u6cd5",children:[]}]}],s={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"35-\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e"},"35. \u641c\u7d22\u63d2\u5165\u4f4d\u7f6e"),Object(c.b)("p",null,"\u96be\u5ea6 \u7b80\u5355 "),Object(c.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6392\u5e8f\u6570\u7ec4\u548c\u4e00\u4e2a\u76ee\u6807\u503c\uff0c\u5728\u6570\u7ec4\u4e2d\u627e\u5230\u76ee\u6807\u503c\uff0c\u5e76\u8fd4\u56de\u5176\u7d22\u5f15\u3002\u5982\u679c\u76ee\u6807\u503c\u4e0d\u5b58\u5728\u4e8e\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u5b83\u5c06\u4f1a\u88ab\u6309\u987a\u5e8f\u63d2\u5165\u7684\u4f4d\u7f6e\u3002"),Object(c.b)("p",null,"\u4f60\u53ef\u4ee5\u5047\u8bbe\u6570\u7ec4\u4e2d\u65e0\u91cd\u590d\u5143\u7d20\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: [1,3,5,6], 5\n\u8f93\u51fa: 2\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: [1,3,5,6], 2\n\u8f93\u51fa: 1\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: [1,3,5,6], 7\n\u8f93\u51fa: 4\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 4:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: [1,3,5,6], 0\n\u8f93\u51fa: 0\n")),Object(c.b)("h2",{id:"\u4e8c\u5206\u641c\u7d22\u6cd5"},"\u4e8c\u5206\u641c\u7d22\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _35\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e {\n\n    public static void main(String[] args) {\n        int[] nums1 = {1, 3, 5, 6};\n\n        int res1 = searchInsert(nums1, 5); // target = 5 ; expect output = 2;\n        int res2 = searchInsert(nums1, 2); // target = 2 ; expect output = 1;\n        int res3 = searchInsert(nums1, 7); // target = 7 ; expect output = 4;\n        int res4 = searchInsert(nums1, 0); // target = 7 ; expect output = 0;\n\n        System.out.println("res1 = " + res1);\n        System.out.println("res2 = " + res2);\n        System.out.println("res3 = " + res3);\n        System.out.println("res4 = " + res4);\n    }\n\n    public static int searchInsert(int[] nums, int target) {\n        if (nums == null || nums.length == 0) return 0;\n\n        int left = 0;\n        int right = nums.length - 1;\n\n        while (left < right) {\n            int middle = (left + right) / 2;\n\n            if (nums[middle] == target)\n                return middle; // \u627e\u5230\uff0c\u5c31\u8fd4\u56de\u5bf9\u5e94\u7d22\u5f15\n            else if (nums[middle] < target)  // \u8bf4\u660e\u7b54\u6848\u5728\u53f3\u4fa7\n                left = middle + 1;\n            else if (nums[middle] > target)  // \u8bf4\u660e\u7b54\u6848\u5728\u5de6\u4fa7\n                right = middle - 1;\n\n        }\n\n        // \u6765\u5230\u8fd9\u91cc\uff0c\u8bf4\u660e\u6570\u7ec4\u91cc\u627e\u4e0d\u5230\u76ee\u6807\u503c, left == right\n        // \u5982\u679c\u5f53\u524d\u4f4d\u7f6e\u7684\u503c \u6bd4 \u76ee\u6807\u503c \u5c0f\uff0c\u5219\u8bf4\u660e\u76ee\u6807\u503c\u8981\u63d2\u5230\u5f53\u524d\u503c\u53f3\u8fb9\uff0c\u5373\u5f53\u524d\u503c+1\n        // \u5426\u5219\uff0c\u63d2\u5165\u5230\u5f53\u524d\u4f4d\u7f6e\u5373\u53ef\n        return nums[left] < target ? left + 1 : left;\n    }\n}\n')))}l.isMDXComponent=!0},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||c;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);