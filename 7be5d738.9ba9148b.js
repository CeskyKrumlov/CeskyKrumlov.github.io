(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),i=(n(0),n(561)),l={id:"17.letterCombinationsofaPhoneNumber",title:"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",hide_title:!0},c={unversionedId:"sf/dfs/17.letterCombinationsofaPhoneNumber",id:"sf/dfs/17.letterCombinationsofaPhoneNumber",isDocsHomePage:!1,title:"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",description:"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",source:"@site/datastructure/sf/dfs/17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408.md",slug:"/sf/dfs/17.letterCombinationsofaPhoneNumber",permalink:"/datastructure/sf/dfs/17.letterCombinationsofaPhoneNumber",version:"current",sidebar:"docs2",previous:{title:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",permalink:"/datastructure/sf/\u52a8\u6001\u89c4\u5212/5.longestPalindromicSubstring"},next:{title:"46.\u5168\u6392\u5217",permalink:"/datastructure/sf/dfs/46.permutations"}},s=[{value:"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",id:"17\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",children:[{value:"img",id:"img",children:[]},{value:"DFS",id:"dfs",children:[]},{value:"\u5c06\u6210\u5458\u53d8\u91cf\u66f4\u6362\u4e3a\u65b9\u6cd5\u53c2\u6570",id:"\u5c06\u6210\u5458\u53d8\u91cf\u66f4\u6362\u4e3a\u65b9\u6cd5\u53c2\u6570",children:[]},{value:"DFS \u7684\u5957\u8def",id:"dfs-\u7684\u5957\u8def",children:[]}]}],b={rightToc:s};function o(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"17\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408"},"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/"}),"17. \u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408")),Object(i.b)("p",null,"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4ec5\u5305\u542b\u6570\u5b57 ",Object(i.b)("inlineCode",{parentName:"p"},"2-9")," \u7684\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u6240\u6709\u5b83\u80fd\u8868\u793a\u7684\u5b57\u6bcd\u7ec4\u5408\u3002\u7b54\u6848\u53ef\u4ee5\u6309 ",Object(i.b)("strong",{parentName:"p"},"\u4efb\u610f\u987a\u5e8f")," \u8fd4\u56de\u3002"),Object(i.b)("p",null,"\u7ed9\u51fa\u6570\u5b57\u5230\u5b57\u6bcd\u7684\u6620\u5c04\u5982\u4e0b\uff08\u4e0e\u7535\u8bdd\u6309\u952e\u76f8\u540c\uff09\u3002\u6ce8\u610f 1 \u4e0d\u5bf9\u5e94\u4efb\u4f55\u5b57\u6bcd\u3002"),Object(i.b)("p",null,"Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order."),Object(i.b)("p",null,"A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters."),Object(i.b)("h2",{id:"img"},Object(i.b)("img",Object(r.a)({parentName:"h2"},{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png",alt:"img"}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1adigits = "23"\n\u8f93\u51fa\uff1a["ad","ae","af","bd","be","bf","cd","ce","cf"]\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1adigits = ""\n\u8f93\u51fa\uff1a[]\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1adigits = "2"\n\u8f93\u51fa\uff1a["a","b","c"]\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0 <= digits.length <= 4")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"digits[i]")," \u662f\u8303\u56f4 ",Object(i.b)("inlineCode",{parentName:"li"},"['2', '9']")," \u7684\u4e00\u4e2a\u6570\u5b57\u3002")),Object(i.b)("h2",{id:"dfs"},"DFS"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u81ea\u9876\u5411\u4e0b\uff0c\u753b\u56fe"),Object(i.b)("li",{parentName:"ul"},"\u6df1\u5ea6\u4f18\u5148\uff0c\u5148\u627e\u51fa\u4e00\u4e2a\u7b54\u6848\uff0c",Object(i.b)("strong",{parentName:"li"},"\u5c42\u6570\u8d8a\u754c\u7684\u65f6\u5019\u5c31\u662f\u66f4\u65b0\u7b54\u6848\u7684\u65f6\u673a"))),Object(i.b)("img",{src:n(969).default,style:{zoom:"40%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(i.b)("br",null),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709\u66f4\u6df1\u7684\u4e0b\u4e00\u5c42\u4e86\uff0c\u5c31 ",Object(i.b)("inlineCode",{parentName:"li"},"\u56de\u6eaf")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class _17\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408 {\n    // \u6570\u5b57\u5b57\u6bcd\u6620\u5c04\u6570\u7ec4\n    private char[][] lettersArray = {\n            {'a', 'b', 'c'}, {'d', 'e', 'f'}, {'g', 'h', 'i'},\n            {'j', 'k', 'l'}, {'m', 'n', 'o'}, {'p', 'q', 'r', 's'},\n            {'t', 'u', 'v'}, {'w', 'x', 'y', 'z'}\n    };\n    private char[] chars; // \u628a\u8f93\u5165\u6570\u5b57\u5b57\u7b26\u4e32\u5207\u5206\u4e3a\u5b57\u7b26\u6570\u7ec4\n    private List<String> resultList;\n    private char[] singleResult; // \u5b58\u50a8\u5355\u4e2a\u7ec4\u5408\uff0c\u7528\u4e8e\u4e4b\u540e\u518d\u8f6c\u6210\u5b57\u7b26\u4e32\u6dfb\u52a0\u5230 List \u4e2d\n\n    public List<String> letterCombinations(String digits) {\n        chars = digits.toCharArray();\n        resultList = new ArrayList<>();\n        singleResult = new char[chars.length];\n        if (chars.length == 0) return resultList;\n\n        // DFS\n        dfs(0);\n\n        return resultList;\n    }\n\n    /**\n     * \u6df1\u5ea6\u4f18\u5148\u7d22\u7d22\n     *\n     * @param depth \u6b63\u5728\u641c\u7d22\u7684\u5c42\u6df1\u5ea6\n     */\n    private void dfs(int depth) {\n        if (depth == chars.length) { // \u6df1\u5ea6\u8d8a\u754c\u4e86\n            // \u627e\u5230\u4e86\u4e00\u4e2a\u89e3\uff0c\u628a\u5355\u4e2a\u7ec4\u5408\u8f6c\u6362\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5b58\u5230\u603b\u7ed3\u679c\u96c6\u91cc\n            resultList.add(new String(singleResult));\n            return;\n        }\n\n        // \u83b7\u53d6\u5f53\u524d\u5c42\u662f\u54ea\u4e00\u4e2a\u6570\u5b57\n        char digit = chars[depth];\n        // \u83b7\u53d6\u6570\u5b57\u5bf9\u5e94\u7684\u53ef\u9009\u5b57\u6bcd\n        char[] letters = lettersArray[digit - '2'];\n        // \u679a\u4e3e\u5f53\u524d\u5c42\u53ef\u7528\u7684\u6240\u6709\u5b57\u6bcd\n        for (char l : letters) {\n            singleResult[depth] = l; // \u628a\u88ab\u9009\u4e2d\u7684\u90a3\u4e2a\u5b57\u6bcd\u653e\u5230\u5355\u8bcd\u5b57\u7b26\u6570\u7ec4\u4e2d\uff0c\u7b49\u5f85\u8f6c\u6210\u5b57\u7b26\u4e32\n            dfs(depth + 1);\n        }\n    }\n}\n")),Object(i.b)("h2",{id:"\u5c06\u6210\u5458\u53d8\u91cf\u66f4\u6362\u4e3a\u65b9\u6cd5\u53c2\u6570"},"\u5c06\u6210\u5458\u53d8\u91cf\u66f4\u6362\u4e3a\u65b9\u6cd5\u53c2\u6570"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e00\u822c\u5199 DFS \u4e0d\u4f1a\u8bbe\u7f6e\u4e0a\u8ff0\u5199\u6cd5\u4e2d\u7684\u6210\u5458\u53d8\u91cf"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u90a3\u4e48\u5c31\u8981\u5728\u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u4e0d\u65ad\u7684\u4f20\u9012\u8fd9\u4e9b\u5bf9\u8c61"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class _17\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408_\u65e0\u6210\u5458 {\n    // \u6570\u5b57\u5b57\u6bcd\u6620\u5c04\u6570\u7ec4\n    private char[][] lettersArray = {\n            {'a', 'b', 'c'}, {'d', 'e', 'f'}, {'g', 'h', 'i'},\n            {'j', 'k', 'l'}, {'m', 'n', 'o'}, {'p', 'q', 'r', 's'},\n            {'t', 'u', 'v'}, {'w', 'x', 'y', 'z'}\n    };\n\n    public List<String> letterCombinations(String digits) {\n        char[] chars = digits.toCharArray();\n        List<String> resultList = new ArrayList<>();\n        char[] singleResult = new char[chars.length];\n        if (chars.length == 0) return resultList;\n\n        // DFS\n        dfs(0, chars, singleResult, resultList);\n\n        return resultList;\n    }\n\n    /**\n     * \u6df1\u5ea6\u4f18\u5148\u7d22\u7d22\n     *\n     * @param depth \u6b63\u5728\u641c\u7d22\u7684\u5c42\u6df1\u5ea6\n     */\n    private void dfs(int depth, char[] chars, char[] singleResult, List<String> resultList) {\n        if (depth == chars.length) { // \u6df1\u5ea6\u8d8a\u754c\u4e86\n            // \u627e\u5230\u4e86\u4e00\u4e2a\u89e3\uff0c\u628a\u5355\u4e2a\u7ec4\u5408\u8f6c\u6362\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5b58\u5230\u603b\u7ed3\u679c\u96c6\u91cc\n            resultList.add(new String(singleResult));\n            return;\n        }\n\n        // \u83b7\u53d6\u5f53\u524d\u5c42\u662f\u54ea\u4e00\u4e2a\u6570\u5b57\n        char digit = chars[depth];\n        // \u83b7\u53d6\u6570\u5b57\u5bf9\u5e94\u7684\u53ef\u9009\u5b57\u6bcd\n        char[] letters = lettersArray[digit - '2'];\n        // \u679a\u4e3e\u5f53\u524d\u5c42\u53ef\u7528\u7684\u6240\u6709\u5b57\u6bcd\n        for (char l : letters) {\n            singleResult[depth] = l; // \u628a\u88ab\u9009\u4e2d\u7684\u90a3\u4e2a\u5b57\u6bcd\u653e\u5230\u5355\u8bcd\u5b57\u7b26\u6570\u7ec4\u4e2d\uff0c\u7b49\u5f85\u8f6c\u6210\u5b57\u7b26\u4e32\n            dfs(depth + 1, chars, singleResult, resultList);\n        }\n    }\n}\n\n")),Object(i.b)("h2",{id:"dfs-\u7684\u5957\u8def"},"DFS \u7684\u5957\u8def"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u9996\u5148\u786e\u5b9a\u8fdb\u5165\u54ea\u4e00\u5c42"),Object(i.b)("li",{parentName:"ol"},"\u786e\u5b9a\u4e0d\u80fd\u518d\u53bb\u66f4\u6df1\u5c42\u641c\u7d22\u7684\u9000\u51fa\u6761\u4ef6"),Object(i.b)("li",{parentName:"ol"},"\u5199\u6b63\u5e38\u641c\u7d22\u65f6\u5982\u4f55\u64cd\u4f5c",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u679a\u4e3e\u5f53\u524d\u5c42\u53ef\u4ee5\u505a\u7684\u9009\u62e9"),Object(i.b)("li",{parentName:"ol"},"\u679a\u4e3e\u5230\u4e00\u4e2a\u503c\uff0c\u5c06\u8fd9\u4e2a\u503c\u6682\u65f6\u5b58\u50a8\uff0c\u7528\u4e8e\u540e\u7eed\u7ec4\u5408\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u5355\u4e2a\u89e3"),Object(i.b)("li",{parentName:"ol"},"\u53bb\u4e0b\u4e00\u5c42"))),Object(i.b)("li",{parentName:"ol"},"\u8fbe\u5230\u6700\u5e95\uff0c\u56de\u6eaf")))}o.isMDXComponent=!0},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=o(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},969:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-66169e11fcfa877eeac0f125b3868318.png"}}]);