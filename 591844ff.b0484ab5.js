(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(554)),c={id:"1.twoSum",title:"1.\u4e24\u6570\u4e4b\u548c",hide_title:!0},o={unversionedId:"sf/\u54c8\u5e0c/1.twoSum",id:"sf/\u54c8\u5e0c/1.twoSum",isDocsHomePage:!1,title:"1.\u4e24\u6570\u4e4b\u548c",description:"1.\u4e24\u6570\u4e4b\u548c",source:"@site/datastructure/sf/\u54c8\u5e0c/1.\u4e24\u6570\u4e4b\u548c.md",slug:"/sf/\u54c8\u5e0c/1.twoSum",permalink:"/datastructure/sf/\u54c8\u5e0c/1.twoSum",version:"current",sidebar:"docs2",previous:{title:"333.\u6700\u5927BST\u5b50\u6811",permalink:"/datastructure/sf/\u6811/333.largestBSTSubtree"},next:{title:"344.\u53cd\u8f6c\u5b57\u7b26\u4e32",permalink:"/datastructure/sf/\u53cc\u6307\u9488/344.reverseString"}},u=[{value:"1.\u4e24\u6570\u4e4b\u548c",id:"1\u4e24\u6570\u4e4b\u548c",children:[{value:"HashMap\u89e3\u6cd5",id:"hashmap\u89e3\u6cd5",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"1\u4e24\u6570\u4e4b\u548c"},"1.\u4e24\u6570\u4e4b\u548c"),Object(i.b)("p",null,"\u96be\u5ea6 \u7b80\u5355"),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"p"},"nums")," \u548c\u4e00\u4e2a\u76ee\u6807\u503c ",Object(i.b)("inlineCode",{parentName:"p"},"target"),"\uff0c\u8bf7\u4f60\u5728\u8be5\u6570\u7ec4\u4e2d\u627e\u51fa\u548c\u4e3a\u76ee\u6807\u503c\u7684\u90a3 ",Object(i.b)("strong",{parentName:"p"},"\u4e24\u4e2a")," \u6574\u6570\uff0c\u5e76\u8fd4\u56de\u4ed6\u4eec\u7684\u6570\u7ec4\u4e0b\u6807\u3002"),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u5047\u8bbe\u6bcf\u79cd\u8f93\u5165\u53ea\u4f1a\u5bf9\u5e94\u4e00\u4e2a\u7b54\u6848\u3002\u4f46\u662f\uff0c\u6570\u7ec4\u4e2d\u540c\u4e00\u4e2a\u5143\u7d20\u4e0d\u80fd\u4f7f\u7528\u4e24\u904d\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u7ed9\u5b9a nums = [2, 7, 11, 15], target = 9\n\n\u56e0\u4e3a nums[0] + nums[1] = 2 + 7 = 9\n\u6240\u4ee5\u8fd4\u56de [0, 1]\n")),Object(i.b)("h2",{id:"hashmap\u89e3\u6cd5"},"HashMap\u89e3\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u6bcf\u904d\u5386\u5230\u4e00\u4e2a\u503c\uff0c\u67e5\u770b\u5148\u524d\u7684\u503c\u4e2d\u662f\u5426\u5b58\u5728\u4e00\u4e2a\u6570\u4e0e\u81ea\u8eab\u76f8\u52a0\u7b49\u4e8e\u76ee\u6807\u503c"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5145\u5206\u5229\u7528\u5148\u524d\u626b\u63cf\u8fc7\u7684\u5143\u7d20\u7684\u4fe1\u606f"))),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u4e2aHashMap\uff0c\u5176key\u4e3a\u5143\u7d20\u503c\uff0cvalue\u4e3a\u5bf9\u5e94\u4e0b\u6807"),Object(i.b)("li",{parentName:"ol"},"\u8ba1\u7b97\u5f53\u524d\u4e0b\u6807\u6240\u6307\u5411\u7684\u503c\u4e0e\u76ee\u6807\u503c\u7684\u5dee\u503c",Object(i.b)("inlineCode",{parentName:"li"},"target - nums[i]")),Object(i.b)("li",{parentName:"ol"},"\u68c0\u67e5\u5dee\u503c\u662f\u5426\u5728\u5f53\u524dHashMap\u4e2d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5728\uff1a\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"li"},"hashMap.get(\u5dee\u503c)")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"i")),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u5728\uff1a\u5c06\u5f53\u524d\u4e0b\u6807\u5bf9\u5e94\u7684\u503c\u548c\u4e0b\u6807\uff0c\u5b58\u5165hashMap\uff0c\u5373",Object(i.b)("inlineCode",{parentName:"li"},"hashMap.put(nums[i], i)")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _1\u4e24\u6570\u4e4b\u548c {\n\n    public static void main(String[] args) {\n        int[] nums = {3, 2, 4};\n        int target = 6;\n\n        int[] res = solve(nums, target);\n\n        System.out.println("p1\u4e0b\u6807\uff1a" + res[0] +\n                "| p2\u4e0b\u6807\uff1a" + res[1] +\n                " | n1 = " + nums[res[0]] +\n                " | n2 = " + nums[res[1]]);\n    }\n\n    public static int[] solve(int[] nums, int target) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n\n        for (int i = 0; i < nums.length; i++) {\n            int difference = target - nums[i];\n\n            if (map.containsKey(difference)) {\n                return new int[] {map.get(difference), i};\n            } else {\n                map.put(nums[i], i);\n            }\n        }\n\n        return null;\n    }\n}\n')))}p.isMDXComponent=!0},554:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);