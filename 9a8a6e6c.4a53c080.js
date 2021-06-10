(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1023:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-47296897528da8e3c5e5008191deb449.png"},1024:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-b587eb8e3579880486a851d41ae509c3.gif"},367:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(561)),l={id:"4.littleProject",title:"\u6574\u5408\u5c0f\u9879\u76ee",hide_title:!0},i={unversionedId:"ssm/4.littleProject",id:"ssm/4.littleProject",isDocsHomePage:!1,title:"\u6574\u5408\u5c0f\u9879\u76ee",description:"\u56fe\u4e66\u7ba1\u7406",source:"@site/docs/ssm/4.\u6574\u5408\u5c0f\u9879\u76ee.md",slug:"/ssm/4.littleProject",permalink:"/docs/ssm/4.littleProject",version:"current",sidebar:"someSidebar",previous:{title:"\u6574\u5408SpringMVC",permalink:"/docs/ssm/3.springmvc"},next:{title:"\u6982\u8ff0",permalink:"/docs/springboot/1.springboot"}},b=[{value:"\u56fe\u4e66\u7ba1\u7406",id:"\u56fe\u4e66\u7ba1\u7406",children:[{value:"1. \u67e5\u8be2\u56fe\u4e66",id:"1-\u67e5\u8be2\u56fe\u4e66",children:[]},{value:"2. \u6dfb\u52a0\u56fe\u4e66",id:"2-\u6dfb\u52a0\u56fe\u4e66",children:[]},{value:"3. \u4fee\u6539\u5220\u9664\u56fe\u4e66",id:"3-\u4fee\u6539\u5220\u9664\u56fe\u4e66",children:[{value:"3.1 \u4fee\u6539\u4e66\u7c4d",id:"31-\u4fee\u6539\u4e66\u7c4d",children:[]},{value:"3.2 \u5220\u9664\u4e66\u7c4d",id:"32-\u5220\u9664\u4e66\u7c4d",children:[]}]},{value:"4. \u641c\u7d22\u56fe\u4e66",id:"4-\u641c\u7d22\u56fe\u4e66",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u56fe\u4e66\u7ba1\u7406"},"\u56fe\u4e66\u7ba1\u7406"),Object(r.b)("h2",{id:"1-\u67e5\u8be2\u56fe\u4e66"},"1. \u67e5\u8be2\u56fe\u4e66"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Controller"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Controller\n@RequestMapping("/book")\npublic class BookController {\n\n    @Autowired\n    private BookService bookService;\n\n    //\u67e5\u8be2\u6240\u6709\u4e66\u7c4d\uff0c\u8fd4\u56de\u5230\u4e66\u7c4d\u5c55\u793a\u9875\u9762\n    @RequestMapping("/allBook")\n    public String list(Model model) {\n        List<Books> books = bookService.queryAllBooks();\n        model.addAttribute("books", books);\n        return "allBook";\n    }\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"index.jsp"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<%--\n  Created by IntelliJ IDEA.\n  User: Cesky001\n  Date: 2020/4/16\n  Time: 19:12\n  To change this template use File | Settings | File Templates.\n--%>\n<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n  <head>\n    <title>$Title$</title>\n    <style>\n      a{\n        text-decoration: none;\n        color: black;\n        font-size: 18px;\n      }\n\n      h3{\n        width: 180px;\n        height: 30px;\n        margin: 100px auto;\n        text-align: center;\n        line-height: 38px;\n        background: lightskyblue;\n        border-radius: 5px;\n      }\n    </style>\n  </head>\n  <body>\n  <h3>\n    <a href="${pageContext.request.contextPath}/book/allBook">\u8fdb\u5165\u4e66\u7c4d\u9875\u9762</a>\n  </h3>\n  </body>\n</html>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"allBook.jsp\n\u5f15\u5165BootStrap\uff0c\u7528\u5728\u7ebf\u7684\uff0c\u5728\u7ebf\u641c\u7d22\u4e00\u4e2aBootStrap CDN"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- \u65b0 Bootstrap \u6838\u5fc3 CSS \u6587\u4ef6 --\x3e\n \n<link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">\n \n\x3c!-- jQuery\u6587\u4ef6\u3002\u52a1\u5fc5\u5728bootstrap.min.js \u4e4b\u524d\u5f15\u5165 --\x3e\n \n<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"><\/script>\n \n\x3c!-- \u6700\u65b0\u7684 Bootstrap \u6838\u5fc3 JavaScript \u6587\u4ef6 --\x3e\n \n<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"><\/script>\n')),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5b8c\u6574\u9875\u9762"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>\n<%--\n  Created by IntelliJ IDEA.\n  User: Cesky001\n  Date: 2020/4/17\n  Time: 12:38\n  To change this template use File | Settings | File Templates.\n--%>\n<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>\u4e66\u7c4d\u5c55\u793a</title>\n\n    \x3c!-- \u65b0 Bootstrap \u6838\u5fc3 CSS \u6587\u4ef6 --\x3e\n\n    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css"\n          rel="stylesheet">\n\n    \x3c!-- jQuery\u6587\u4ef6\u3002\u52a1\u5fc5\u5728bootstrap.min.js \u4e4b\u524d\u5f15\u5165 --\x3e\n\n    <%--    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"><\/script>--%>\n\n    \x3c!-- \u6700\u65b0\u7684 Bootstrap \u6838\u5fc3 JavaScript \u6587\u4ef6 --\x3e\n\n    <%--    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"><\/script>--%>\n</head>\n<body>\n<div class="container">\n    <%--    \u5934--%>\n    <div class="row clearfix">\n        <div class="col-md-12 column">\n            <div class="page-header">\n                <h1>\n                    <small>\u4e66\u7c4d\u5217\u8868\u2014\u2014\u663e\u793a\u6240\u6709\u4e66\u7c4d</small>\n                </h1>\n            </div>\n        </div>\n    </div>\n    <%--\u5c55\u793a\u6570\u636e\u7684table--%>\n    <div class="row clearfix">\n        <div class="col-md-12 column">\n            <table class="table table-hover table-striped">\n                <thead>\n                <tr>\n                    <th>\u4e66\u7c4d\u7f16\u53f7</th>\n                    <th>\u4e66\u7c4d\u540d\u79f0</th>\n                    <th>\u4e66\u7c4d\u6570\u91cf</th>\n                    <th>\u4e66\u7c4d\u8be6\u60c5</th>\n                </tr>\n                </thead>\n                <%-- \u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\uff0c\u4ececontroller\u8bbe\u7f6e\u7684\u53c2\u6570books\u4e2d\u904d\u5386\u51fa\u6765--%>\n                <tbody>\n                <c:forEach var="book" items="${books}">\n                    <tr>\n                        <td>${book.bookID}</td>\n                        <td>${book.bookName}</td>\n                        <td>${book.bookCounts}</td>\n                        <td>${book.detail}</td>\n                    </tr>\n                </c:forEach>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n</body>\n</html>\n')))))),Object(r.b)("img",{src:n(1023).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(r.b)("br",null),Object(r.b)("h2",{id:"2-\u6dfb\u52a0\u56fe\u4e66"},"2. \u6dfb\u52a0\u56fe\u4e66"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728",Object(r.b)("inlineCode",{parentName:"li"},"allBook"),"\u9875\u9762\u6dfb\u52a0\u65b0\u589e\u4e66\u7c4d\u6309\u94ae")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="row clearfix">\n    <div class="col-md-12 column">\n        <div class="page-header">\n            <h1>\n                <small>\u4e66\u7c4d\u5217\u8868\u2014\u2014\u663e\u793a\u6240\u6709\u4e66\u7c4d</small>\n            </h1>\n        </div>\n    </div>\n\n    \x3c!-- \u6dfb\u52a0\u4e66\u7c4d\u6309\u94ae --\x3e\n    <div class="row">\n        <div class="col-md-4 column">\n            <a class="btn btn-primary"\n               href="${pageContext.request.contextPath}/book/toAddPage">\u65b0\u589e\u4e66\u7c4d</a>\n        </div>\n    </div>\n</div>\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Controller\uff1a\u6dfb\u52a0\u4e00\u4e2a\u8def\u7531\u8df3\u8f6c\u5230\u589e\u52a0\u4e66\u7c4d\u7684\u7f16\u8f91\u9875\u9762")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u8df3\u8f6c\u5230\u589e\u52a0\u4e66\u7c4d\u9875\u9762\n@RequestMapping("/toAddPage")\npublic String toAddPage() {\n    return "addBook";\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u9875\u9762",Object(r.b)("inlineCode",{parentName:"li"},"addBook"),"\uff0c\u4e0a\u9762\u6709\u4e00\u4e2aform\u8868\u5355")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="container">\n    <%--    \u5934--%>\n    <div class="row clearfix">\n        <div class="col-md-12 column">\n            <div class="page-header">\n                <h1>\n                    <small>\u4e66\u7c4d\u5217\u8868\u2014\u2014\u65b0\u589e\u4e66\u7c4d</small>\n                </h1>\n            </div>\n        </div>\n    </div>\n\n    <form action="${pageContext.request.contextPath}/book/addBook" method="post">\n        <div class="form-group">\n            <label for="bookName">\u4e66\u7c4d\u540d\u79f0:</label>\n            <input type="text" class="form-control" id="bookName" name="bookName" required>\n        </div>\n        <div class="form-group">\n            <label for="bookCounts">\u4e66\u7c4d\u6570\u76ee:</label>\n            <input type="text" class="form-control" id="bookCounts" name="bookCounts" required>\n        </div>\n        <div class="form-group">\n            <label for="detail">\u4e66\u7c4d\u63cf\u8ff0:</label>\n            <input type="text" class="form-control" id="detail" name="detail" required>\n        </div>\n        <div class="form-group">\n            <input type="submit" class="form-control" value="\u6dfb\u52a0">\n        </div>\n    </form>\n</div>\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Controller\uff1a\u5199\u4e00\u4e2a\u6267\u884c\u6dfb\u52a0\u64cd\u4f5c\u7684\u8def\u7531",Object(r.b)("inlineCode",{parentName:"li"},"addBook"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u6dfb\u52a0\u4e66\u7c4d\u7684\u8bf7\u6c42\n@RequestMapping("/addBook")\npublic String addBook(Books books){\n    System.out.println(books);\n    bookService.addBook(books);\n    return "redirect:/book/allBook";\n}\n')),Object(r.b)("h2",{id:"3-\u4fee\u6539\u5220\u9664\u56fe\u4e66"},"3. \u4fee\u6539\u5220\u9664\u56fe\u4e66"),Object(r.b)("h3",{id:"31-\u4fee\u6539\u4e66\u7c4d"},"3.1 \u4fee\u6539\u4e66\u7c4d"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u4fee\u6539",Object(r.b)("inlineCode",{parentName:"p"},"allBooks"),"\u9875\u9762\uff0c\u6dfb\u52a0",Object(r.b)("inlineCode",{parentName:"p"},"\u4fee\u6539"),"\u548c",Object(r.b)("inlineCode",{parentName:"p"},"\u5220\u9664"),"\u6309\u94ae"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<c:forEach var="book" items="${books}">\n    <tr>\n        <td>${book.bookID}</td>\n        <td>${book.bookName}</td>\n        <td>${book.bookCounts}</td>\n        <td>${book.detail}</td>\n        <td>\n            <a href="${pageContext.request.contextPath}/book/toUpdate?id=${book.bookID}">\u4fee\u6539</a>\n            &nbsp;|&nbsp;\n            <a href="#">\u5220\u9664</a>\n        </td>\n    </tr>\n</c:forEach>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6dfb\u52a0",Object(r.b)("inlineCode",{parentName:"p"},"/toUpdate"),"\u8def\u7531\uff0c\u7528\u6765\u8df3\u8f6c\u5230\u4fee\u6539\u9875\u9762"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8df3\u8f6c\u65f6\uff0c\u643a\u5e26\u5f53\u524d\u4e66\u7c4d\u7684\u4fe1\u606f")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u8df3\u8f6c\u5230\u4fee\u6539\u9875\u9762\n@RequestMapping("/toUpdate")\npublic String toUpdatePaper(int id, Model model) {\n    Books book = bookService.queryBookById(id);\n    model.addAttribute("books", book);\n    return "updateBook";\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6dfb\u52a0\u4e00\u4e2a\u4fee\u6539\u9875\u9762",Object(r.b)("inlineCode",{parentName:"p"},"updateBook.jsp")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7528\u9690\u85cf\u57df\u4f20\u9012id\uff0c\u4e5f\u53ef\u4ee5\u7528\u8def\u7531\u4f20\u9012id\u3002\u8fd9\u6837\u53ef\u4ee5\u5728\u540e\u7aefController\u76f4\u63a5\u63a5\u6536\u5230\u4e00\u4e2aBooks\u5bf9\u8c61")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>\u4fee\u6539\u4e66\u7c4d</title>\n\n    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css"\n          rel="stylesheet">\n</head>\n<body>\n\n<div class="container">\n    <%--    \u5934--%>\n    <div class="row clearfix">\n        <div class="col-md-12 column">\n            <div class="page-header">\n                <h1>\n                    <small>\u4e66\u7c4d\u5217\u8868\u2014\u2014\u4fee\u6539\u4e66\u7c4d</small>\n                </h1>\n            </div>\n        </div>\n    </div>\n\n    <form action="${pageContext.request.contextPath}/book/updateBook" method="post">\n\n        <%--       \u7528\u9690\u85cf\u57df\u4f20\u9012id\uff0c\u8fd9\u6837\u540e\u7aefController\u53ef\u4ee5\u76f4\u63a5\u63a5\u6536\u4e00\u4e2aBooks\u5bf9\u8c61 --%>\n        <input type="hidden" name="bookID" value="${books.bookID}">\n\n        <div class="form-group">\n            <label for="bookName">\u4e66\u7c4d\u540d\u79f0:</label>\n            <input type="text" class="form-control" id="bookName" value="${books.bookName}"\n                   name="bookName"\n                   required>\n        </div>\n        <div class="form-group">\n            <label for="bookCounts">\u4e66\u7c4d\u6570\u76ee:</label>\n            <input type="text" class="form-control" id="bookCounts" value="${books.bookCounts}" name="bookCounts"\n                   required>\n        </div>\n        <div class="form-group">\n            <label for="detail">\u4e66\u7c4d\u63cf\u8ff0:</label>\n            <input type="text" class="form-control" id="detail" value="${books.detail}"\n                   name="detail" required>\n        </div>\n        <div class="form-group">\n            <input type="submit" class="form-control" value="\u4fee\u6539">\n        </div>\n    </form>\n</div>\n</body>\n</html>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5199\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"/updateBooks"),"\u8def\u7531\uff0c\u7528\u6765\u8c03\u7528\u6301\u4e45\u5c42\u66f4\u65b0\u6570\u636e"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u4fee\u6539\u4e66\u7c4d\n@RequestMapping("/updateBook")\npublic String updateBook(Books books) {\n    System.out.println("update book ------\x3e  " + books);\n    bookService.updateBook(books);\n    return "redirect:/book/allBook";\n}\n')))),Object(r.b)("h3",{id:"32-\u5220\u9664\u4e66\u7c4d"},"3.2 \u5220\u9664\u4e66\u7c4d"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u4fee\u6539",Object(r.b)("inlineCode",{parentName:"p"},"allBooks"),"\u9875\u9762\uff0c\u7ed9",Object(r.b)("inlineCode",{parentName:"p"},"\u5220\u9664"),"\u6309\u94ae\u6dfb\u52a0\u8def\u7531\uff0c\u5e76\u4f20\u9012",Object(r.b)("inlineCode",{parentName:"p"},"id"),"\u53c2\u6570"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<td>\n    <a href="${pageContext.request.contextPath}/book/toUpdate?id=${book.bookID}">\u4fee\u6539</a>\n    &nbsp;|&nbsp;\n    <a href="${pageContext.request.contextPath}/book/deleteBook?id=${book.bookID}">\u5220\u9664</a>\n</td>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5199\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"/deleteBook"),"\u8def\u7531\uff0c\u63a5\u6536id\u53c2\u6570\uff0c\u8c03\u7528\u6570\u636e\u5e93\u5220\u9664\u8bb0\u5f55"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/deleteBook")\npublic String deleteBook(int id) {\n    bookService.deleteBookById(id);\n    return "redirect:/book/allBook";\n}\n')))),Object(r.b)("h2",{id:"4-\u641c\u7d22\u56fe\u4e66"},"4. \u641c\u7d22\u56fe\u4e66"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5728",Object(r.b)("inlineCode",{parentName:"p"},"allBooks"),"\u9875\u9762\u6dfb\u52a0\u4e00\u4e2a\u641c\u7d22\u6846"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f20\u4e00\u4e2a\u53c2\u6570\uff0c\u5b9a\u4e49\u5728name\u5c5e\u6027\u91cc\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"queryBookName"),"\u6307\u660e\u8981\u67e5\u8be2\u7684\u4e66\u7c4d\u540d\u79f0"),Object(r.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e00\u4e2a\u65b0\u6309\u94ae",Object(r.b)("inlineCode",{parentName:"li"},"\u663e\u793a\u5168\u90e8\u4e66\u7c4d"),"\uff0c\u7528\u6765\u5728\u641c\u7d22\u4e66\u7c4d\u4e4b\u540e\u91cd\u65b0\u663e\u793a\u5168\u90e8\u4e66\u7c4d")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="row">\n    <div class="col-md-4 column">\n        <a class="btn btn-primary"\n           href="${pageContext.request.contextPath}/book/toAddPage">\u65b0\u589e\u4e66\u7c4d</a>\n        <a class="btn btn-primary"\n                   href="${pageContext.request.contextPath}/book/allBook">\u663e\u793a\u5168\u90e8\u4e66\u7c4d</a>\n    </div>\n    <%--            \u641c\u7d22\u6846--%>\n        <div class="col-md-4 column"></div>\n        <div class="col-md-4 column">\n            <form action="${pageContext.request.contextPath}/book/queryBook" method="post"\n                  style="float: right"\n                  class="form-inline">\n                <input type="text" name="queryBookName" class="form-control"\n                       placeholder="\u8bf7\u8f93\u5165\u8981\u67e5\u8be2\u7684\u4e66\u7c4d\u540d\u79f0">\n                <input type="submit" value="\u67e5\u8be2" class="btn btn-primary">\n            </form>\n        </div>\n</div>\n')))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u4eceDAO\u5c42\uff0c\u4ece\u4e0b\u5f80\u4e0a\u5199"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"BookMapper\u63a5\u53e3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"List<Books> queryBookByName(String bookNmae);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"BookMapper.xml"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<select id="queryBookByName" resultType="com.bsx.pojo.Books">\n    SELECT * FROM books WHERE bookName LIKE #{bookName}\n</select>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Service\u63a5\u53e3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"List<Books> queryBookByName(String bookName);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Service\u5b9e\u73b0\u7c7b"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e24\u8fb9\u52a0\u4e0a\u901a\u914d\u7b26",Object(r.b)("inlineCode",{parentName:"li"},"%"))),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public List<Books> queryBookByName(String bookName) {\n    String name = "%" + bookName + "%";\n    return bookMapper.queryBookByName(name);\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Controller",Object(r.b)("inlineCode",{parentName:"p"},"/queryBook"),"\u8def\u7531"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u590d\u7528",Object(r.b)("inlineCode",{parentName:"li"},"allBook"),"\u9875\u9762"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allBook"),"\u9875\u9762\u4e0a\u4e4b\u524d\u5199\u597d\u4e86\u5bf9",Object(r.b)("inlineCode",{parentName:"li"},"books"),"\u8fdb\u884c\u904d\u5386\u663e\u793a\u7684\u4ee3\u7801")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u67e5\u8be2\u4e66\u7c4d\n@RequestMapping("/queryBook")\npublic String queryBook(String queryBookName, Model model){\n    List<Books> books = bookService.queryBookByName(queryBookName);\n    model.addAttribute("books",books);\n    return "allBook";\n}\n')))),Object(r.b)("img",{src:n(1024).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(r.b)("br",null))}p.isMDXComponent=!0},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||r;return n?o.a.createElement(u,i(i({ref:t},c),{},{components:n})):o.a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);