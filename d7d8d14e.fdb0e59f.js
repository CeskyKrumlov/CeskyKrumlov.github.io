(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{486:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(566)),l={id:"1.map",title:"Map",hide_title:!0},i={unversionedId:"sf/\u6620\u5c04/1.map",id:"sf/\u6620\u5c04/1.map",isDocsHomePage:!1,title:"Map",description:"\u6620\u5c04 Map",source:"@site/datastructure/sf/\u6620\u5c04/\u6620\u5c04.md",slug:"/sf/\u6620\u5c04/1.map",permalink:"/datastructure/sf/\u6620\u5c04/1.map",version:"current",sidebar:"docs2",previous:{title:"B+\u6811",permalink:"/datastructure/sf/\u6811/6.bPlusTree"},next:{title:"\u54c8\u5e0c\u8868",permalink:"/datastructure/sf/\u54c8\u5e0c/1.hashTableDataStructure"}},d=[{value:"\u6620\u5c04 Map",id:"\u6620\u5c04-map",children:[{value:"\u63a5\u53e3\u8bbe\u8ba1",id:"\u63a5\u53e3\u8bbe\u8ba1",children:[{value:"\u521b\u5efa\u63a5\u53e3",id:"\u521b\u5efa\u63a5\u53e3",children:[]}]},{value:"\u7ea2\u9ed1\u6811\u5b9e\u73b0",id:"\u7ea2\u9ed1\u6811\u5b9e\u73b0",children:[{value:"\u67b6\u6784",id:"\u67b6\u6784",children:[]},{value:"put",id:"put",children:[]}]}]}],c={rightToc:d};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u6620\u5c04-map"},"\u6620\u5c04 Map"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Map \u5728\u4e00\u4e9b\u7f16\u7a0b\u8bed\u8a00\u4e2d\u4e5f\u53eb\u505a\u5b57\u5178 (Dictionary)")),Object(o.b)("h2",{id:"\u63a5\u53e3\u8bbe\u8ba1"},"\u63a5\u53e3\u8bbe\u8ba1"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u65b9\u6cd5"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u529f\u80fd"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"int size()"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5143\u7d20\u6570\u76ee")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"void clear()"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u6e05\u7a7a")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"V put(K key, V value)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u63d2\u5165")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"V get(K key)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u83b7\u53d6")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"V remove(K key)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5220\u9664")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"boolean containsKey(K key)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5305\u542b\u952e")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"boolean containsValue(V value)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5305\u542b\u503c")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"void traversal(Visitor<K, V> visitor)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u89c2\u5bdf\u8005\u6a21\u5f0f")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u94fe\u8868\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u7b49\u6570\u636e\u7ed3\u6784\u6765\u5b9e\u73b0")),Object(o.b)("h3",{id:"\u521b\u5efa\u63a5\u53e3"},"\u521b\u5efa\u63a5\u53e3"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="MyMap \u63a5\u53e3"',title:'"MyMap','\u63a5\u53e3"':!0}),"public interface MyMap<K, V> {\n    int size();\n\n    void clear();\n\n    V put(K key, V value);\n\n    V get(K key);\n\n    V remove(K key);\n\n    boolean containsKey(K key);\n\n    boolean containsValue(V value);\n\n    void traversal(Visitor<K, V> visitor);\n\n    public static abstract class Visitor<K, V> {\n        boolean stop;\n        abstract boolean visit(K key, V value);\n    }\n}\n")),Object(o.b)("h2",{id:"\u7ea2\u9ed1\u6811\u5b9e\u73b0"},"\u7ea2\u9ed1\u6811\u5b9e\u73b0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"TreeMap"))),Object(o.b)("h3",{id:"\u67b6\u6784"},"\u67b6\u6784"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class MyTreeMap<K, V> implements MyMap<K, V> {\n    private static final boolean RED = false;\n    private static final boolean BLACK = true;\n\n    private Comparator<K> comparator = null;\n\n    public MyTreeMap(Comparator<K> comparator) {\n        this.comparator = comparator;\n    }\n\n    public int size;\n    public Node<K, V> rootNode;\n\n\n    public boolean isEmpty() {\n        return this.size == 0;\n    }\n\n    @Override\n    public int size() {\n        return this.size;\n    }\n\n    @Override\n    public void clear() {\n        rootNode = null;\n        size = 0;\n    }\n\n    @Override // \u8fd4\u56de\u88ab\u8986\u76d6\u6389\u7684\u65e7\u503c\n    public V put(K key, V value) {\n      return null;\n    }\n\n    @Override\n    public V get(K key) {\n        return null;\n    }\n\n    @Override\n    public V remove(K key) {\n        return null;\n    }\n\n    @Override\n    public boolean containsKey(K key) {\n        return false;\n    }\n\n    @Override\n    public boolean containsValue(V value) {\n        return false;\n    }\n\n    @Override\n    public void traversal(Visitor<K, V> visitor) {\n\n    }\n\n    protected Node<K, V> createNode(K key, V value, Node<K, V> parentNode) {\n        return new Node<>(key, value, parentNode);\n    }\n\n    private void afterPut(Node<K, V> newNode) {\n        Node<K, V> parentNode = newNode.parentNode;\n\n        if (parentNode == null) {\n            black(newNode); // \u6dfb\u52a0\u7684\u662f\u6839\u8282\u70b9\uff0c\u8bbe\u7f6e\u4e3a\u9ed1\u8272\n            return;\n        }\n        // \u5904\u7406\u4e0d\u9700\u8981\u989d\u5916\u64cd\u4f5c\u76844\u79cd\u60c5\u51b5\uff0c\u5373parent\u4e3ablack\u7684\u60c5\u51b5\n        if (isBlack(parentNode)) return;// \u7236\u8282\u70b9\u4e3a\u9ed1\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u5904\u7406\n        // \u53d4\u7236\u8282\u70b9\n        Node<K, V> uncle = parentNode.sibling();\n        // \u7956\u7236\u8282\u70b9\n        Node<K, V> grand = parentNode.parentNode;\n        // \u5904\u7406uncle\u4e0d\u662fred\u76844\u79cd\u60c5\u51b5\n        if (isRed(uncle)) { // \u5982\u679cuncle\u662f\u7ea2\u8272\n            // \u4ec5\u9700\u67d3\u8272\n            // parent\u3001uncle\u67d3\u4e3a\u9ed1\u8272\n            black(parentNode);\n            black(uncle);\n            // grand\u4f5c\u4e3a\u65b0\u8282\u70b9\u6dfb\u52a0\u4e0a\u4e0a\u5c42\u8282\u70b9\n            // \u67d3\u4e3a\u7ea2\u8272\uff0c\u9012\u5f52\u6dfb\u52a0\n            afterPut(red(grand));\n            return;\n        }\n\n        // uncle\u4e0d\u662fRed\u76844\u4e2d\u60c5\u51b5\uff0c\u6d89\u53ca\u65cb\u8f6c\uff0c\u65cb\u8f6c\u5b9e\u73b0\u4e0eAVL\u6811\u4e00\u6a21\u4e00\u6837\n        if (parentNode == grand.leftNode) { // L\n            if (newNode == parentNode.leftNode) { // LL\n                // parent\u67d3\u4e3a\u9ed1\u8272\uff0cgrand\u67d3\u4e3a\u7ea2\u8272\n                black(parentNode);\n                red(grand);\n                // grand\u53f3\u65cb\n                rotateRight(grand);\n            } else if (newNode == parentNode.rightNode) { // LR\n                // \u81ea\u5df1\u67d3\u4e3a\u9ed1\u8272\uff0cgrand\u67d3\u4e3a\u7ea2\u8272\uff0c\n                black(newNode);\n                red(grand);\n                // parent\u5de6\u65cb\uff0cgrand\u53f3\u65cb\n                rotateLeft(parentNode);\n                rotateRight(grand);\n            }\n        } else if (parentNode == grand.rightNode) {  // R\n            if (newNode == parentNode.leftNode) { // RL\n                // \u81ea\u5df1\u67d3\u4e3a\u9ed1\u8272\uff0cgrand\u67d3\u4e3a\u7ea2\u8272\uff0c\n                black(newNode);\n                red(grand);\n                // parent\u53f3\u65cb\uff0cgrand\u5de6\u65cb\n                rotateRight(parentNode);\n                rotateLeft(grand);\n            } else if (newNode == parentNode.rightNode) { // RR\n                // parent\u67d3\u4e3a\u9ed1\u8272\uff0cgrand\u67d3\u4e3a\u7ea2\u8272\n                black(parentNode);\n                red(grand);\n                // grand\u5de6\u65cb\n                rotateLeft(grand);\n            }\n        }\n    }\n\n    // \u5224\u65ad\u8282\u70b9\u989c\u8272\n    private boolean colorOf(Node<K, V> node) {\n        return node == null ? BLACK : (node).color;\n    }\n\n    // \u5224\u65ad\u662f\u9ed1\u8272\u8282\u70b9\n    private boolean isBlack(Node<K, V> node) {\n        return colorOf(node) == BLACK;\n    }\n\n    // \u5224\u65ad\u662f\u7ea2\u8272\u8282\u70b9\n    private boolean isRed(Node<K, V> node) {\n        return colorOf(node) == RED;\n    }\n\n    // \u7ed9\u8282\u70b9\u7740\u8272\n    private Node<K, V> color(Node<K, V> node, boolean color) {\n        if (node != null) (node).color = color;\n        return node;\n    }\n\n    // \u5c06\u8282\u70b9\u67d3\u4e3a\u9ed1\u8272\n    private Node<K, V> black(Node<K, V> node) {\n        return color(node, BLACK);\n    }\n\n    // \u5c06\u8282\u70b9\u67d3\u4e3a\u7ea2\u8272\n    private Node<K, V> red(Node<K, V> node) {\n        return color(node, RED);\n    }\n\n    //\u65cb\u8f6c\n    private void rotateLeft(Node<K, V> g) { // \u53ef\u8ba4\u4e3a\u662fg\n        Node<K, V> p = g.rightNode; // aka p\n        //        g.rightNode = p.leftNode; // 1.\n        Node<K, V> child = p.leftNode;\n        g.rightNode = child; // 1.\n        p.leftNode = g; // 2.\n        afterRotate(g, p, child);\n    }\n\n    // \u53f3\u65cb\u8f6c\n    private void rotateRight(Node<K, V> g) {\n        Node<K, V> p = g.leftNode;\n        //        g.leftNode = p.rightNode;\n        Node<K, V> child = p.rightNode;\n        g.leftNode = child;\n        p.rightNode = g;\n        afterRotate(g, p, child);\n    }\n\n    private void afterRotate(Node<K, V> g, Node<K, V> p, Node<K, V> child) {\n        // p \u6210\u4e3a\u5b50\u6811\u6839\u8282\u70b9\n        if (g.isLeftChild())\n            g.parentNode.leftNode = p;\n        else if (g.isRightChild())\n            g.parentNode.rightNode = p;\n        else\n            rootNode = p; // p\u6210\u4e3a\u6574\u68f5\u6811\u7684\u6839\u8282\u70b9\n        // \u7ef4\u62a4\u7236\u8282\u70b9 T2\u3001g\u3001p\n        p.parentNode = g.parentNode;\n        g.parentNode = p;\n        if (child != null)// aka t2\n            child.parentNode = g;\n    }\n\n    private void keyNotNullCheck(K key) {\n        if (key == null) throw new IllegalArgumentException("\u8282\u70b9 KEY \u4e0d\u80fd\u4e3a\u7a7a");\n    }\n\n    /**\n     * \u6bd4\u8f83\u4e24\u4e2a\u5143\u7d20\u7684\u5927\u5c0f\n     *\n     * @param key1 \u5143\u7d201\n     * @param key2 \u5143\u7d202\n     * @return 0: \u8868\u793a element1\u7b49\u4e8eelement2; \u5927\u4e8e0 \u4ee3\u8868 element1 > element2; \u5c0f\u4e8e0: element1 < element2\n     */\n    private int compare(K key1, K key2) {\n        if (this.comparator != null) // \u5b58\u5728\u5916\u90e8\u4f20\u5165\u7684\u6bd4\u8f83\u5668\n            return this.comparator.compare(key1, key2);\n        else // \u6ca1\u6709\u5916\u90e8\u6bd4\u8f83\u5668\uff0c\u5f3a\u5236\u4f7f\u7528Comparable\n            return ((Comparable<K>) key1).compareTo(key2); // \u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u4e3aComparable\u5b9e\u73b0\u7c7b\n    }\n\n    // \u7ea2\u9ed1\u6811\u8282\u70b9\n    private static class Node<K, V> {\n\n        K key;\n        V value;\n        boolean color = RED; // \u9ed8\u8ba4\u4e3a\u7ea2\u8272\n\n        Node<K, V> leftNode;\n        Node<K, V> rightNode;\n        Node<K, V> parentNode; // \u7236\u8282\u70b9\n\n        /**\n         * \u6784\u9020\u65b9\u6cd5\n         * \u4f20\u5165\u8282\u70b9\u503c\u5e76\u5236\u5b9a\u7236\u8282\u70b9\uff0c\u4e0d\u9002\u7528\u5de6\u53f3\u8282\u70b9\uff0c\u56e0\u4e3a\u5de6\u53f3\u8282\u70b9\u662f\u5426\u5b58\u5728\u7684\u60c5\u51b5\u6bd4\u8f83\u590d\u6742\uff0c\n         * \u800c\u4e00\u9897\u6811\u4e2d\uff0c\u53ea\u6709\u6839\u8282\u70b9\u6ca1\u6709\u7236\u8282\u70b9\uff0c\u5176\u4f59\u8282\u70b9\u90fd\u6709\u7236\u8282\u70b9\n         */\n        public Node(K key, V value, Node<K, V> parentNode) {\n            this.key = key;\n            this.value = value;\n            this.parentNode = parentNode;\n        }\n\n        public boolean isLeaf() {\n            return leftNode == null && rightNode == null;\n        }\n\n        /**\n         * \u8fd4\u56de\u8282\u70b9\u662f\u5426\u6709\u4e24\u4e2a\u5b69\u5b50\n         */\n        public boolean hasTwoChildren() {\n            return leftNode != null && rightNode != null;\n        }\n\n        // \u8fd4\u56de\u8282\u70b9\u7684\u5144\u5f1f\u8282\u70b9\n        public Node<K, V> sibling() {\n            if (isLeftChild()) return parentNode.rightNode;\n            if (isRightChild()) return parentNode.leftNode;\n            return null;\n        }\n\n        public boolean isLeftChild() {\n            return parentNode != null && this == parentNode.leftNode;\n        }\n\n        public boolean isRightChild() {\n            return parentNode != null && this == parentNode.rightNode;\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"put"},"put"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e KEY \u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u65e7\u503c\u88ab\u8986\u76d6\uff0c\u90a3\u4e48\u5c06\u65e7\u503c\u8fd4\u56de")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public V put(K key, V value) {\n    // \u975e\u7a7a\u5224\u65ad\n    keyNotNullCheck(key);\n\n    // \u5224\u65ad\u6839\u8282\u70b9\u662f\u5426\u5b58\u5728\n    if (this.rootNode == null) {\n//            this.rootNode = new Node<>(element, null);\n        this.rootNode = createNode(key, value, null);\n        size++;\n        afterPut(rootNode); // \u5e73\u8861\n        return null; // \u6ca1\u6709\u65e7\u503c\n    }\n\n    // \u6839\u8282\u70b9\u5df2\u7ecf\u5b58\u5728\n    // 1. \u627e\u5230\u7236\u8282\u70b9\n    Node<K, V> currentNode = rootNode; // \u5f53\u524d\u6b63\u5728\u6bd4\u8f83\u7684\u6811\u8282\u70b9\n    Node<K, V> parentNode = null; // \u8bb0\u5f55\u5f53\u524d\u8282\u70b9\u7684\u7236\u8282\u70b9\n    int compareResult = 0; // \u6bd4\u8f83\u5927\u5c0f\u7684\u7ed3\u679c\n    // \u4e00\u76f4\u5f80\u4e0b\u627e\n    while (currentNode != null) {\n        compareResult = compare(key, currentNode.key); // \u6bd4\u8f83\u5927\u5c0f\n        // \u5728currentNode\u5411\u4e0b\u8fed\u4ee3\u4e4b\u524d\uff0c\u5148\u8bb0\u5f55\u5b83\uff0c\u7b49current\u8fed\u4ee3\u4e4b\u540e\uff0c\u8fd9\u4e2a\u8bb0\u5f55\u503c\u5c31\u6210\u4e86current\u7684parent\n        parentNode = currentNode;\n\n        if (compareResult < 0) { // element < \u5f53\u524d\u8282\u70b9\n            // \u627e\u5de6\u8282\u70b9\n            currentNode = currentNode.leftNode;\n        } else if (compareResult > 0) { // element > \u5f53\u524d\u8282\u70b9\n            // \u627e\u53f3\u8282\u70b9\n            currentNode = currentNode.rightNode;\n        } else { // \u76f8\u7b49 \u8986\u76d6\u65e7\u8282\u70b9\n            V oldValue = currentNode.value;\n            currentNode.value = value;\n            return oldValue;\n        }\n    }\n    // \u8df3\u51fa\u5faa\u73af\uff0c\u5df2\u7ecf\u8d70\u5230\u4e86\u6811\u7684\u53f6\u5b50\u8282\u70b9\uff0c\u6b64\u65f6currentNode\u4e00\u5b9a\u6307\u5411null\uff0cparent\u5c31\u662fcurrent\u7684\u7238\u7238\n    // 2. \u521b\u5efa\u65b0\u8282\u70b9\n    Node<K, V> newNode = createNode(key, value, parentNode);\n    // 3. parent.left \u6216 parent.right\u6307\u5411\u521b\u5efa\u7684\u8282\u70b9\n    if (compareResult > 0) // \u63d2\u5165\u5230\u7236\u8282\u70b9\u7684\u53f3\n        parentNode.rightNode = newNode;\n    else // \u63d2\u5165\u5230\u7236\u8282\u70b9\u7684\u5de6\n        parentNode.leftNode = newNode;\n\n    size++;\n    afterPut(newNode); // \u5e73\u8861\n\n    return null;\n}\n")))}p.isMDXComponent=!0},566:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},N=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),N=r,s=u["".concat(l,".").concat(N)]||u[N]||b[N]||o;return t?a.a.createElement(s,i(i({ref:n},c),{},{components:t})):a.a.createElement(s,i({ref:n},c))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=N;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}N.displayName="MDXCreateElement"}}]);