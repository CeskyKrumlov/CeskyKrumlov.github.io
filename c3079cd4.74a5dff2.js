(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{446:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),i=(t(0),t(566)),a={id:"14.excel",title:"\u5bfc\u51faExcel",hide_title:!0},c={unversionedId:"springmvc/14.excel",id:"springmvc/14.excel",isDocsHomePage:!1,title:"\u5bfc\u51faExcel",description:"POI",source:"@site/docs/springmvc/\u5bfc\u51faExcel.md",slug:"/springmvc/14.excel",permalink:"/docs/springmvc/14.excel",version:"current",sidebar:"someSidebar",previous:{title:"\u6587\u4ef6\u4e0a\u4f20\u4e0e\u4e0b\u8f7d",permalink:"/docs/springmvc/13.updownLoad"},next:{title:"\u81ea\u5236 Web MVC \u6846\u67b6",permalink:"/docs/springmvc/14.DiyMVC"}},l=[{value:"POI",id:"poi",children:[{value:"\u5de5\u5177\u7c7b",id:"\u5de5\u5177\u7c7b",children:[]},{value:"Controller",id:"controller",children:[]},{value:"\u524d\u7aef",id:"\u524d\u7aef",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"poi"},"POI"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.apache.poi</groupId>\n    <artifactId>poi</artifactId>\n    <version>3.6</version>\n</dependency>\n")),Object(i.b)("h2",{id:"\u5de5\u5177\u7c7b"},"\u5de5\u5177\u7c7b"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class ExcelUtil {\n\n    /**\n     * \u5bfc\u51faExcel\n     * \n     * @param sheetName\n     *            sheet\u540d\u79f0\n     * @param title\n     *            \u6807\u9898\n     * @param values\n     *            \u5185\u5bb9\n     * @param wb\n     *            HSSFWorkbook\u5bf9\u8c61\n     * @return\n     */\n    public static HSSFWorkbook getHSSFWorkbook(String sheetName, String[] title, String[][] values, HSSFWorkbook wb) {\n\n        // \u7b2c\u4e00\u6b65\uff0c\u521b\u5efa\u4e00\u4e2aHSSFWorkbook\uff0c\u5bf9\u5e94\u4e00\u4e2aExcel\u6587\u4ef6\n        if (wb == null) {\n            wb = new HSSFWorkbook();\n        }\n\n        // \u7b2c\u4e8c\u6b65\uff0c\u5728workbook\u4e2d\u6dfb\u52a0\u4e00\u4e2asheet,\u5bf9\u5e94Excel\u6587\u4ef6\u4e2d\u7684sheet\n        HSSFSheet sheet = wb.createSheet(sheetName);\n\n        // \u7b2c\u4e09\u6b65\uff0c\u5728sheet\u4e2d\u6dfb\u52a0\u8868\u5934\u7b2c0\u884c,\u6ce8\u610f\u8001\u7248\u672cpoi\u5bf9Excel\u7684\u884c\u6570\u5217\u6570\u6709\u9650\u5236\n        HSSFRow row = sheet.createRow(0);\n\n        // \u7b2c\u56db\u6b65\uff0c\u521b\u5efa\u5355\u5143\u683c\uff0c\u5e76\u8bbe\u7f6e\u503c\u8868\u5934 \u8bbe\u7f6e\u8868\u5934\u5c45\u4e2d\n        HSSFCellStyle style = wb.createCellStyle();\n        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // \u521b\u5efa\u4e00\u4e2a\u5c45\u4e2d\u683c\u5f0f\n\n        // \u58f0\u660e\u5217\u5bf9\u8c61\n        HSSFCell cell = null;\n\n        // \u521b\u5efa\u6807\u9898\n        for (int i = 0; i < title.length; i++) {\n            cell = row.createCell(i);\n            cell.setCellValue(title[i]);\n            cell.setCellStyle(style);\n        }\n\n        // \u521b\u5efa\u5185\u5bb9\n        for (int i = 0; i < values.length; i++) {\n            row = sheet.createRow(i + 1);\n            for (int j = 0; j < values[i].length; j++) {\n                // \u5c06\u5185\u5bb9\u6309\u987a\u5e8f\u8d4b\u7ed9\u5bf9\u5e94\u7684\u5217\u5bf9\u8c61\n                row.createCell(j).setCellValue(values[i][j]);\n            }\n        }\n        return wb;\n    }\n}\n")),Object(i.b)("h2",{id:"controller"},"Controller"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/**\n     * \u5bfc\u51fa\u62a5\u8868\n     * \n     * @return\n     */\n@RequestMapping(value = "/getMioExcel")\n@ResponseBody\npublic void export(HttpServletRequest request, HttpServletResponse response) throws Exception {\n    String cardNumber = request.getParameter("searchCardNumber");\n    // \u83b7\u53d6\u6570\u636e\n    List<WebServiceDto> list = (List<WebServiceDto>) webServiceMio.queryByCardNumber(cardNumber);\n    // excel\u6807\u9898\n    String[] title = { "\u59d3\u540d", "\u8bc1\u4ef6\u7c7b\u578b", "\u8bc1\u4ef6\u53f7\u7801", "\u4e2a\u4eba\u552f\u4e00\u8bc6\u522b\u7801", "\u5e94\u4ed8\u6807\u5fd7", "\u5e94\u4ed8\u91d1\u989d", "\u5e94\u4ed8\u65e5\u671f", "\u5b9e\u4ed8\u65e5\u671f", "\u94f6\u884c\u8d26\u53f7", "\u94f6\u884c\u4ee3\u7801", "\u8d26\u6237\u6240\u6709\u4eba\u540d\u79f0" };\n    // excel\u6587\u4ef6\u540d\n    String fileName = "\u5b9e\u4ed8\u4fe1\u606f\u8868" + System.currentTimeMillis() + ".xls";\n    // sheet\u540d\n    String sheetName = "\u5b9e\u4ed8\u4fe1\u606f\u8868";\n    // \u5185\u5bb9\n    String[][] content = new String[list.size()][];\n\n    for (int i = 0; i < list.size(); i++) {\n        content[i] = new String[title.length];\n        WebServiceMioDto mioDto = (WebServiceMioDto) list.get(i);\n        content[i][0] = mioDto.getName();\n        content[i][1] = mioDto.getCredentialType();\n        content[i][2] = mioDto.getCredentialNum();\n        content[i][3] = mioDto.getPersonGUID();\n        content[i][4] = mioDto.getMioFlag();\n        content[i][5] = mioDto.getMioAmnt() + "";\n        content[i][6] = mioDto.getPlnmioDate();\n        content[i][7] = mioDto.getMioDate();\n        content[i][8] = mioDto.getBankAccNo();\n        content[i][9] = mioDto.getBankCode();\n        content[i][10] = mioDto.getAccCustName();\n    }\n    // \u521b\u5efaHSSFWorkbook\n    HSSFWorkbook wb = ExcelUtil.getHSSFWorkbook(sheetName, title, content, null);\n\n    // \u54cd\u5e94\u5230\u5ba2\u6237\u7aef\n    try (OutputStream os = response.getOutputStream()) {\n        this.setResponseHeader(response, fileName);\n        wb.write(os);\n        os.flush();\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}\n\n// \u53d1\u9001\u54cd\u5e94\u6d41\u65b9\u6cd5\npublic void setResponseHeader(HttpServletResponse response, String fileName) {\n    try {\n        try {\n            fileName = new String(fileName.getBytes(), "ISO8859-1");\n            //              fileName = new String(fileName.getBytes(), "UTF-8");\n        } catch (UnsupportedEncodingException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n        response.setContentType("application/octet-stream;charset=ISO8859-1");\n        //          response.setContentType("application/octet-stream;charset=UTF-8");\n        response.setHeader("Content-Disposition", "attachment;filename=" + fileName.trim());\n        response.addHeader("Pargam", "no-cache");\n        response.addHeader("Cache-Control", "no-cache");\n    } catch (Exception ex) {\n        ex.printStackTrace();\n    }\n}\n')),Object(i.b)("h2",{id:"\u524d\u7aef"},"\u524d\u7aef"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e0d\u80fd\u7528Ajax\u8bf7\u6c42\uff0c\u56e0\u4e3aAjax\u7684\u8fd4\u56de\u7c7b\u578b\u4e0d\u652f\u6301\u6587\u4ef6\u6d41\uff0c\u54cd\u5e94\u7684\u6587\u4ef6\u4f1a\u88ab\u89e3\u6790\u4e3a\u4e00\u5806\u4e71\u7801")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'$("#exportExcel").click(function () { // id\u9009\u62e9\u5668\u9009\u62e9\u5bfc\u51fa\u6309\u94ae\n    // id\u9009\u62e9\u5668\u9009\u62e9input\u6846\n    var searchCardNumber = $("#aac002").val();\n\n    // \u8bf7\u6c42\u53d1\u9001\u5230\u540e\u7aef\n    window.location.href="/webservice/getMioExcel?searchCardNumber="+searchCardNumber;\n})\n')))}p.isMDXComponent=!0},566:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(a,".").concat(b)]||u[b]||m[b]||i;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);