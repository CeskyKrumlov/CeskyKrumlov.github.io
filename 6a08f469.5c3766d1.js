(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{270:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(565)),o={slug:"cppGuassion",title:"C++\u9ad8\u65af\u5217\u4e3b\u5143\u6d88\u53bb\u6cd5",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["\u7b97\u6cd5","\u6570\u636e\u7ed3\u6784"]},c={permalink:"/blog/cppGuassion",source:"@site/blog/2020-03-16-Cpp\u9ad8\u65af\u5217\u4e3b\u5143\u6d88\u53bb\u6cd5.md",description:"`c++",date:"2020-03-16T00:00:00.000Z",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"},{label:"\u6570\u636e\u7ed3\u6784",permalink:"/blog/tags/\u6570\u636e\u7ed3\u6784"}],title:"C++\u9ad8\u65af\u5217\u4e3b\u5143\u6d88\u53bb\u6cd5",readingTime:2.07,truncated:!1,prevItem:{title:"Linux\u57fa\u672c\u547d\u4ee4\u4e0eSSH\u8fdc\u7a0b\u767b\u5f55",permalink:"/blog/linuxssh"},nextItem:{title:"LeetCode\u6811\u4e0e\u56fe",permalink:"/blog/treeAndGraph"}},u=[],l={rightToc:u};function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),'#include <cstdlib>\n#include <iostream>\n#include <fstream>\n#include <cmath>\n\nusing namespace std;\n\nint main()\n{\n    int i, j, k, n;\n    double eps, ratio, sum, max, temp;\n    ifstream data_in("gauss_source.txt");\n    ofstream data_out("gauss_result.txt");\n    //\u8f93\u5165\u589e\u5e7f\u77e9\u9635\u7cfb\u6570\n    data_in >> n;                 //\u8f93\u5165\u65b9\u7a0b\u4e2a\u6570\n    double *x = new double[n];    //\u52a8\u6001\u5206\u914d\u5b58\u50a8\u7a7a\u95f4\uff08\u6307\u9488\uff09\n    double **a = new double *[n]; //\u4e8c\u7ea7\u6307\u9488\u6307\u5411\u6307\u9488\u6570\u7ec4\u9996\u5730\u5740\uff0cn \u4e2a\u65b9\u7a0b\uff0c\u4e8c\u7ef4\u52a8\u6001\u6570\u7ec4\n    for (i = 0; i < n; i++)\n    {\n        a[i] = new double[n + 1]; // \u7ed9\u6307\u9488\u6570\u7ec4\u6bcf\u4e2a\u5143\u7d20\u7533\u8bf7\u7a7a\u95f4,\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u4e00\u4e2a\u6307\u9488,\u6bcf \u4e2a\u65b9\u7a0b\u6709 n+1 \u4e2a\u7cfb\u6570(\u5305\u62ec\u5e38\u6570\u9879)\n    }\n    //\u5b58\u50a8\u7a7a\u95f4\u7533\u8bf7\u6210\u529f\u540e\uff0c\u548c\u4e00\u822c\u4e8c\u7ef4\u6570\u7ec4\u64cd\u4f5c\u7c7b\u4f3c\n    for (i = 0; i < n; i++)\n        for (j = 0; j < n; j++)\n        {\n            data_in >> a[i][j];\n            //\u8f93\u5165\u7cfb\u6570\u77e9\u9635\n        }\n    for (i = 0; i < n; i++)\n    {\n        data_in >> a[i][n]; //\u8f93\u5165\u7b49\u53f7\u53f3\u7aef\u5411\u91cf\u7684\u5404\u5143\u7d20 a[][]\u4e3a\u589e\u5e7f\u77e9\u9635\n    }\n    data_in >> eps; //\u8f93\u5165\u6700\u5c0f\u4e3b\u5143\u7d20.\u4e3a\u4e86\u907f\u514d\u4e3b\u5143\u7d20\u4e3a 0 \u7684\u60c5\u51b5\uff0c\u8bbe\u7f6e \u4e00\u4e2a\u6bd4\u8f83\u5c0f\u7684\u5b9e\u6570\n    data_in.close();\n    //\u6267\u884c\u9ad8\u65af\u6d88\u53bb\u6cd5\n    for (k = 0; k < (n - 1); k++) //\u6d88\u5143\n    {\n        for (i = (k + 1); i < n; i++)\n        {\n            if (fabs(a[k][k]) < eps) //fabs(x)\u51fd\u6570\u662f\u6c42\u6d6e\u70b9\u578b\u6570 x \u7684\u7edd\u5bf9\u503c\n            {\n                cout << "Start exchanging principal..." << endl;\n                //\u9009\u62e9\u5217\u4e3b\u5143\n                max = fabs(a[k][k]);\n                for (int m = k; m < n; m++)\n                {\n                    if (max < fabs(a[m][k]))\n                    {\n                        max = fabs(a[m][k]);\n                    }\n                }\n\n                //\u4ea4\u6362\u884c\n                for (int m = k; m < n; m++)\n                {\n                    if (max == fabs(a[m][k]))\n                    {\n                        for (int q = k; q < n; q++)\n                        {\n                            temp = a[k][q];\n                            a[k][q] = a[m][q];\n                            a[m][q] = temp;\n                        }\n\n                        // \u4ea4\u6362\u5e38\u6570\u90e8\u5206\n                        cout << "Exchaging const..." << endl;\n                        temp = a[k][n];\n                        a[k][n] = a[m][n];\n                        a[m][n] = temp;\n                    }\n                }\n            }\n\n            ratio = a[i][k] / a[k][k];\n            for (j = (k + 1); j < (n + 1); j++)\n            {\n                a[i][j] -= ratio * a[k][j];\n            }\n            a[i][k] = 0;\n        }\n    }\n\n    x[n - 1] = a[n - 1][n] / a[n - 1][n - 1]; //\u56de\u4ee3\n    for (i = (n - 2); i >= 0; --i)\n    {\n        sum = 0.0;\n        for (j = (i + 1); j < n; j++)\n        {\n            sum += a[i][j] * x[j];\n        }\n        x[i] = (a[i][n] - sum) / a[i][i];\n    } //\u7ed3\u679c\u8f93\u51fa\n    for (i = 0; i < n; i++)\n    {\n        data_out << "\\nx[" << i << "]=" << x[i] << endl;\n    }\n    data_out.close();\n\n    //\u91ca\u653e\u5806\u5185\u5b58\n    delete[] x;\n    for (i = 0; i < n; i++)\n    {\n        delete[] a[i];\n    }\n    delete[] a;\n\n    cout << "Calculate finished!, please check the output file" << endl;\n\n    /* \n    eps = 0.0001\n\n    int put matrix:\n     0.00001   2.000   3.000       1.000\n    -1.000     3.712   4.623       2.000\n    -2.000     1.072   5.643       3.000\n\n    expect result:\n    x[0] = -0.4911 \n    x[1] = -0.0509 \n    x[2] =  0.3673\n\n    output:\n    x[0] = -0.491052\n    x[1] = -0.0508876\n    x[2] =  0.36726\n\n */\n    system("pause");\n    return 0;\n}\n\n')))}p.isMDXComponent=!0},565:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=a.a.createContext({}),p=function(n){var e=a.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},s=function(n){var e=p(n.components);return a.a.createElement(l.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},f=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),s=p(t),f=r,d=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return t?a.a.createElement(d,c(c({ref:e},l),{},{components:t})):a.a.createElement(d,c({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);