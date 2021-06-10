(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{481:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(561)),b={id:"10.reference",title:"\u5f15\u7528",hide_title:!0},l={unversionedId:"javase/10.reference",id:"javase/10.reference",isDocsHomePage:!1,title:"\u5f15\u7528",description:"\u5f15\u7528",source:"@site/docs/javase/10\u5f15\u7528.md",slug:"/javase/10.reference",permalink:"/docs/javase/10.reference",version:"current",sidebar:"someSidebar",previous:{title:"\u5f02\u5e38",permalink:"/docs/javase/8.exception"},next:{title:"Lambda\u8868\u8fbe\u5f0f",permalink:"/docs/javase/9.lambda"}},o=[{value:"\u5f15\u7528",id:"\u5f15\u7528",children:[]},{value:"\u5f3a\u5f15\u7528",id:"\u5f3a\u5f15\u7528",children:[]},{value:"\u8f6f\u5f15\u7528 SoftReference",id:"\u8f6f\u5f15\u7528-softreference",children:[]},{value:"\u5f31\u5f15\u7528 WeakReference",id:"\u5f31\u5f15\u7528-weakreference",children:[]},{value:"\u865a\u5f15\u7528 PhantomReference",id:"\u865a\u5f15\u7528-phantomreference",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],i={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u5f15\u7528"},"\u5f15\u7528"),Object(c.b)("h1",{id:"\u5f3a\u5f15\u7528"},"\u5f3a\u5f15\u7528"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u4ee5\u524d\u6211\u4eec\u4f7f\u7528\u7684\u5927\u90e8\u5206\u5f15\u7528\u5b9e\u9645\u4e0a\u90fd\u662f\u5f3a\u5f15\u7528\uff0c\u8fd9\u662f\u4f7f\u7528\u6700\u666e\u904d\u7684\u5f15\u7528"),"\u3002\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u5177\u6709\u5f3a\u5f15\u7528\uff0c\u90a3\u5c31\u7c7b\u4f3c\u4e8e\u5fc5\u4e0d\u53ef\u5c11\u7684\u751f\u6d3b\u7528\u54c1\uff0c\u5783\u573e\u56de\u6536\u5668\u7edd\u4e0d\u4f1a\u56de\u6536\u5b83\u3002",Object(c.b)("strong",{parentName:"p"},"\u5f53\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\uff0cJava\u865a\u62df\u673a\u5b81\u613f\u629b\u51faOutOfMemoryError\u9519\u8bef\uff0c\u4f7f\u7a0b\u5e8f\u5f02\u5e38\u7ec8\u6b62\uff0c\u4e5f\u4e0d\u4f1a\u9760\u968f\u610f\u56de\u6536\u5177\u6709\u5f3a\u5f15\u7528\u7684\u5bf9\u8c61\u6765\u89e3\u51b3\u5185\u5b58\u4e0d\u8db3\u95ee\u9898"),"\u3002\n\u5982 "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),' String str = "abc";\n List<String> list = new Arraylist<String>();\n list.add(str);\n// \u5728list\u96c6\u5408\u91cc\u7684\u6570\u636e\u4e0d\u4f1a\u91ca\u653e\uff0c\u5373\u4f7f\u5185\u5b58\u4e0d\u8db3\u4e5f\u4e0d\u4f1a\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5728ArrayList\u7c7b\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u79c1\u6709\u7684\u53d8\u91cfelementData\u6570\u7ec4\uff0c\u5728\u8c03\u7528\u65b9\u6cd5\u6e05\u7a7a\u6570\u7ec4\u65f6\u53ef\u4ee5\u770b\u5230\u4e3a\u6bcf\u4e2a\u6570\u7ec4\u5185\u5bb9\u8d4b\u503c\u4e3anull\u3002\u4e0d\u540c\u4e8eelementData=null\uff0c\u5f3a\u5f15\u7528\u4ecd\u7136\u5b58\u5728\uff0c\u907f\u514d\u5728\u540e\u7eed\u8c03\u7528 add()\u7b49\u65b9\u6cd5\u6dfb\u52a0\u5143\u7d20\u65f6\u8fdb\u884c\u91cd\u65b0\u7684\u5185\u5b58\u5206\u914d\u3002",Object(c.b)("strong",{parentName:"p"},"\u4f7f\u7528\u5982clear()\u65b9\u6cd5\u4e2d\u91ca\u653e\u5185\u5b58\u7684\u65b9\u6cd5\u5bf9\u6570\u7ec4\u4e2d\u5b58\u653e\u7684\u5f15\u7528\u7c7b\u578b\u7279\u522b\u9002\u7528\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u53ca\u65f6\u91ca\u653e\u5185\u5b58\u3002"))),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u8f6f\u5f15\u7528-softreference"},"\u8f6f\u5f15\u7528 SoftReference"),Object(c.b)("p",null,"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u53ea\u5177\u6709\u8f6f\u5f15\u7528\uff0c\u90a3\u5c31\u7c7b\u4f3c\u4e8e\u53ef\u6709\u53ef\u7269\u7684\u751f\u6d3b\u7528\u54c1\u3002",Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u5185\u5b58\u7a7a\u95f4\u8db3\u591f\uff0c\u5783\u573e\u56de\u6536\u5668\u5c31\u4e0d\u4f1a\u56de\u6536\u5b83\uff0c\u5982\u679c\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\u4e86\uff0c\u5c31\u4f1a\u56de\u6536\u8fd9\u4e9b\u5bf9\u8c61\u7684\u5185\u5b58\u3002"),"\u53ea\u8981\u5783\u573e\u56de\u6536\u5668\u6ca1\u6709\u56de\u6536\u5b83\uff0c\u8be5\u5bf9\u8c61\u5c31\u53ef\u4ee5\u88ab\u7a0b\u5e8f\u4f7f\u7528\u3002",Object(c.b)("strong",{parentName:"p"},"\u8f6f\u5f15\u7528\u53ef\u7528\u6765\u5b9e\u73b0\u5185\u5b58\u654f\u611f\u7684\u9ad8\u901f\u7f13\u5b58\u3002")),Object(c.b)("p",null,"\u8f6f\u5f15\u7528\u53ef\u4ee5\u548c\u4e00\u4e2a\u5f15\u7528\u961f\u5217\uff08ReferenceQueue\uff09\u8054\u5408\u4f7f\u7528\uff0c\u5982\u679c\u8f6f\u5f15\u7528\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\uff0cJAVA\u865a\u62df\u673a\u5c31\u4f1a\u628a\u8fd9\u4e2a\u8f6f\u5f15\u7528\u52a0\u5165\u5230\u4e0e\u4e4b\u5173\u8054\u7684\u5f15\u7528\u961f\u5217\u4e2d\u3002\n\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Test {  \n\n    public static void main(String[] args){  \n        System.out.println("\u5f00\u59cb");            \n        A a = new A();            \n        SoftReference<A> sr = new SoftReference<A>(a);  \n        a = null;  \n        if(sr!=null){  \n            a = sr.get();  \n        }  \n        else{  \n            a = new A();  \n            sr = new SoftReference<A>(a);  \n        }            \n        System.out.println("\u7ed3\u675f");     \n    }       \n\n}  \n\nclass A{  \n    int[] a ;  \n    public A(){  \n        a = new int[100000000];  \n    }  \n}\n')),Object(c.b)("p",null,"\u5f53\u5185\u5b58\u8db3\u591f\u5927\u65f6\u53ef\u4ee5\u628a\u6570\u7ec4\u5b58\u5165\u8f6f\u5f15\u7528\uff0c\u53d6\u6570\u636e\u65f6\u5c31\u53ef\u4ece\u5185\u5b58\u91cc\u53d6\u6570\u636e\uff0c\u63d0\u9ad8\u8fd0\u884c\u6548\u7387"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u8f6f\u5f15\u7528\u5728\u5b9e\u9645\u4e2d\u6709\u91cd\u8981\u7684\u5e94\u7528\uff0c\u4f8b\u5982\u6d4f\u89c8\u5668\u7684\u540e\u9000\u6309\u94ae"),"\u3002"),Object(c.b)("p",null,"\u6309\u540e\u9000\u65f6\uff0c\u8fd9\u4e2a\u540e\u9000\u65f6\u663e\u793a\u7684\u7f51\u9875\u5185\u5bb9\u662f\u91cd\u65b0\u8fdb\u884c\u8bf7\u6c42\u8fd8\u662f\u4ece\u7f13\u5b58\u4e2d\u53d6\u51fa\u5462\uff1f\u8fd9\u5c31\u8981\u770b\u5177\u4f53\u7684\u5b9e\u73b0\u7b56\u7565\u4e86\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\uff081\uff09\u5982\u679c\u4e00\u4e2a\u7f51\u9875\u5728\u6d4f\u89c8\u7ed3\u675f\u65f6\u5c31\u8fdb\u884c\u5185\u5bb9\u7684\u56de\u6536\uff0c\u5219\u6309\u540e\u9000\u67e5\u770b\u524d\u9762\u6d4f\u89c8\u8fc7\u7684\u9875\u9762\u65f6\uff0c\u9700\u8981\u91cd\u65b0\u6784\u5efa"),Object(c.b)("p",{parentName:"blockquote"},"\uff082\uff09\u5982\u679c\u5c06\u6d4f\u89c8\u8fc7\u7684\u7f51\u9875\u5b58\u50a8\u5230\u5185\u5b58\u4e2d\u4f1a\u9020\u6210\u5185\u5b58\u7684\u5927\u91cf\u6d6a\u8d39\uff0c\u751a\u81f3\u4f1a\u9020\u6210\u5185\u5b58\u6ea2\u51fa\u3002\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528\u8f6f\u5f15\u7528")),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u5f31\u5f15\u7528-weakreference"},"\u5f31\u5f15\u7528 WeakReference"),Object(c.b)("p",null,"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u53ea\u5177\u6709\u5f31\u5f15\u7528\uff0c\u90a3\u5c31\u7c7b\u4f3c\u4e8e\u53ef\u6709\u53ef\u7269\u7684\u751f\u6d3b\u7528\u54c1\u3002",Object(c.b)("strong",{parentName:"p"},"\u5f31\u5f15\u7528\u4e0e\u8f6f\u5f15\u7528\u7684\u533a\u522b\u5728\u4e8e\uff1a\u53ea\u5177\u6709\u5f31\u5f15\u7528\u7684\u5bf9\u8c61\u62e5\u6709\u66f4\u77ed\u6682\u7684\u751f\u547d\u5468\u671f\u3002\u5728\u5783\u573e\u56de\u6536\u5668\u7ebf\u7a0b\u626b\u63cf\u5b83 \u6240\u7ba1\u8f96\u7684\u5185\u5b58\u533a\u57df\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e00\u65e6\u53d1\u73b0\u4e86\u53ea\u5177\u6709\u5f31\u5f15\u7528\u7684\u5bf9\u8c61\uff0c\u4e0d\u7ba1\u5f53\u524d\u5185\u5b58\u7a7a\u95f4\u8db3\u591f\u4e0e\u5426\uff0c\u90fd\u4f1a\u56de\u6536\u5b83\u7684\u5185\u5b58\u3002"),"\u4e0d\u8fc7\uff0c\u7531\u4e8e\u5783\u573e\u56de\u6536\u5668\u662f\u4e00\u4e2a\u4f18\u5148\u7ea7\u5f88\u4f4e\u7684\u7ebf\u7a0b\uff0c \u56e0\u6b64\u4e0d\u4e00\u5b9a\u4f1a\u5f88\u5feb\u53d1\u73b0\u90a3\u4e9b\u53ea\u5177\u6709\u5f31\u5f15\u7528\u7684\u5bf9\u8c61\u3002"),Object(c.b)("p",null,"\u5f31\u5f15\u7528\u53ef\u4ee5\u548c\u4e00\u4e2a\u5f15\u7528\u961f\u5217\uff08ReferenceQueue\uff09\u8054\u5408\u4f7f\u7528\uff0c\u5982\u679c\u5f31\u5f15\u7528\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\uff0cJava\u865a\u62df\u673a\u5c31\u4f1a\u628a\u8fd9\u4e2a\u5f31\u5f15\u7528\u52a0\u5165\u5230\u4e0e\u4e4b\u5173\u8054\u7684\u5f15\u7528\u961f\u5217\u4e2d\u3002\n\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Object c = new Car(); //\u53ea\u8981c\u8fd8\u6307\u5411car object, car object\u5c31\u4e0d\u4f1a\u88ab\u56de\u6536\nWeakReference<Car> weakCar = new WeakReference(Car)(car);12\n")),Object(c.b)("p",null,"\u5f53\u8981\u83b7\u5f97weak reference\u5f15\u7528\u7684object\u65f6, \u9996\u5148\u9700\u8981\u5224\u65ad\u5b83\u662f\u5426\u5df2\u7ecf\u88ab\u56de\u6536:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"weakCar.get();1\n")),Object(c.b)("p",null,"\u5982\u679c\u6b64\u65b9\u6cd5\u4e3a\u7a7a, \u90a3\u4e48\u8bf4\u660eweakCar\u6307\u5411\u7684\u5bf9\u8c61\u5df2\u7ecf\u88ab\u56de\u6536\u4e86."),Object(c.b)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Car {\n  private double price;\n  private String colour;\n\n  public Car(double price, String colour){\n    this.price = price;\n    this.colour = colour;\n  }\n\n  public double getPrice() {\n    return price;\n  }\n  public void setPrice(double price) {\n    this.price = price;\n  }\n  public String getColour() {\n    return colour;\n  }\n  public void setColour(String colour) {\n    this.colour = colour;\n  }\n\n  public String toString(){\n    return colour +"car costs $"+price;\n  }\n\n}\n\n\npublic class TestWeakReference {\n\n  public static void main(String[] args) {\n\n    Car car = new Car(22000,"silver");\n    WeakReference<Car> weakCar = new WeakReference<Car>(car);\n\n    int i=0;\n\n    while(true){\n      if(weakCar.get()!=null){\n        i++;\n        System.out.println("Object is alive for "+i+" loops - "+weakCar);\n      }else{\n        System.out.println("Object has been collected.");\n        break;\n      }\n    }\n  }\n}\n')),Object(c.b)("p",null,"\u5728\u4e0a\u4f8b\u4e2d, \u7a0b\u5e8f\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e, \u7a0b\u5e8f\u6253\u5370\u51fa\u201dObject has been collected.\u201d \u8bf4\u660e, weak reference\u6307\u5411\u7684\u5bf9\u8c61\u7684\u88ab\u56de\u6536\u4e86."),Object(c.b)("p",null,"\u5982\u679c\u8981\u60f3\u6253\u51fa\u7684\u662f\nObject is alive for \u201c+i+\u201d loops - \u201c+weakCar"),Object(c.b)("p",null,"\u90a3\u4e48\u53ea\u8981\u5728\u8fd9\u53e5\u8bdd\u524d\u9762\u52a0\u4e0a\nSystem.out.println(\u201ccar==== \u201c+car);\n\u56e0\u4e3a\u5728\u6b64\u5f3a\u5f15\u7528\u4e86car\u5bf9\u8c61"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u8fd9\u4e2a\u5bf9\u8c61\u662f\u5076\u5c14\u7684\u4f7f\u7528\uff0c\u5e76\u4e14\u5e0c\u671b\u5728\u4f7f\u7528\u65f6\u968f\u65f6\u5c31\u80fd\u83b7\u53d6\u5230\uff0c\u4f46\u53c8\u4e0d\u60f3\u5f71\u54cd\u6b64\u5bf9\u8c61\u7684\u5783\u573e\u6536\u96c6\uff0c\u90a3\u4e48\u4f60\u5e94\u8be5\u7528 Weak Reference \u6765\u8bb0\u4f4f\u6b64\u5bf9\u8c61\u3002"))),Object(c.b)("p",null,"\u5f53\u4f60\u60f3\u5f15\u7528\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4f46\u662f\u8fd9\u4e2a\u5bf9\u8c61\u6709\u81ea\u5df1\u7684\u751f\u547d\u5468\u671f\uff0c\u4f60\u4e0d\u60f3\u4ecb\u5165\u8fd9\u4e2a\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\uff0c\u8fd9\u65f6\u5019\u4f60\u5c31\u662f\u7528\u5f31\u5f15\u7528\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u8fd9\u4e2a\u5f15\u7528\u4e0d\u4f1a\u5728\u5bf9\u8c61\u7684\u5783\u573e\u56de\u6536\u5224\u65ad\u4e2d\u4ea7\u751f\u4efb\u4f55\u9644\u52a0\u7684\u5f71\u54cd\u3002"))),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u865a\u5f15\u7528-phantomreference"},"\u865a\u5f15\u7528 PhantomReference"),Object(c.b)("p",null,"\u865a\u5f15\u7528\u201d\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u5f62\u540c\u865a\u8bbe\uff0c\u4e0e\u5176\u4ed6\u51e0\u79cd\u5f15\u7528\u90fd\u4e0d\u540c\uff0c\u865a\u5f15\u7528\u5e76\u4e0d\u4f1a\u51b3\u5b9a\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\u3002\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u4ec5\u6301\u6709\u865a\u5f15\u7528\uff0c\u90a3\u4e48\u5b83\u5c31",Object(c.b)("strong",{parentName:"p"},"\u548c\u6ca1\u6709\u4efb\u4f55\u5f15\u7528\u4e00\u6837\uff0c\u5728\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u80fd\u88ab\u5783\u573e\u56de\u6536\u3002\u865a\u5f15\u7528\u4e3b\u8981\u7528\u6765\u8ddf\u8e2a\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\u7684\u6d3b\u52a8"),"\u3002\u865a\u5f15\u7528\u4e0e\u8f6f\u5f15\u7528\u548c\u5f31\u5f15\u7528\u7684\u4e00\u4e2a\u533a\u522b\u5728\u4e8e\uff1a",Object(c.b)("strong",{parentName:"p"},"\u865a\u5f15\u7528\u5fc5\u987b\u548c\u5f15\u7528\u961f\u5217\uff08ReferenceQueue\uff09\u8054\u5408\u4f7f\u7528"),"\u3002\u5f53\u5783\u573e\u56de\u6536\u5668\u51c6\u5907\u56de\u6536\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u53d1\u73b0\u5b83\u8fd8\u6709\u865a\u5f15\u7528\uff0c\u5c31\u4f1a\u5728\u56de\u6536\u5bf9\u8c61\u7684\u5185\u5b58\u4e4b\u524d\uff0c\u628a\u8fd9\u4e2a\u865a\u5f15\u7528\u52a0\u5165\u5230\u4e0e\u4e4b\u5173\u8054\u7684\u5f15\u7528\u961f\u5217\u4e2d\u3002\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad\u5f15\u7528\u961f\u5217\u4e2d\u662f\u5426\u5df2\u7ecf\u52a0\u5165\u4e86\u865a\u5f15\u7528\uff0c\u6765\u4e86\u89e3\u88ab\u5f15\u7528\u7684\u5bf9\u8c61\u662f\u5426\u5c06\u8981\u88ab\u5783\u573e\u56de\u6536\u3002\u7a0b\u5e8f\u5982\u679c\u53d1\u73b0\u67d0\u4e2a\u865a\u5f15\u7528\u5df2\u7ecf\u88ab\u52a0\u5165\u5230\u5f15\u7528\u961f\u5217\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5728\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u5185\u5b58\u88ab\u56de\u6536\u4e4b\u524d\u91c7\u53d6\u5fc5\u8981\u7684\u884c\u52a8\u3002"),Object(c.b)("p",null,"\u7279\u522b\u6ce8\u610f\uff0c\u5728\u5b9e\u9645\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d\u4e00\u822c\u5f88\u5c11\u4f7f\u7528\u5f31\u5f15\u7528\u4e0e\u865a\u5f15\u7528\uff0c\u4f7f\u7528\u8f6f\u7528\u7684\u60c5\u51b5\u8f83\u591a\uff0c\u8fd9\u662f\u56e0\u4e3a\u8f6f\u5f15\u7528\u53ef\u4ee5\u52a0\u901fJVM\u5bf9\u5783\u573e\u5185\u5b58\u7684\u56de\u6536\u901f\u5ea6\uff0c\u53ef\u4ee5\u7ef4\u62a4\u7cfb\u7edf\u7684\u8fd0\u884c\u5b89\u5168\uff0c\u9632\u6b62\u5185\u5b58\u6ea2\u51fa\uff08OutOfMemory\uff09\u7b49\u95ee\u9898\u7684\u4ea7\u751f\u3002"),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(c.b)("blockquote",null,Object(c.b)("h3",Object(r.a)({parentName:"blockquote"},{id:"\u5f3a\u5f15\u7528-1"}),"\u5f3a\u5f15\u7528"),Object(c.b)("p",{parentName:"blockquote"},"String str = \u201cabc\u201d;\nlist.add(str); "),Object(c.b)("h3",Object(r.a)({parentName:"blockquote"},{id:"\u8f6f\u5f15\u7528"}),"\u8f6f\u5f15\u7528"),Object(c.b)("p",{parentName:"blockquote"},"\u5982\u679c\u5f31\u5f15\u7528\u5bf9\u8c61\u56de\u6536\u5b8c\u4e4b\u540e\uff0c\u5185\u5b58\u8fd8\u662f\u62a5\u8b66\uff0c\u7ee7\u7eed\u56de\u6536\u8f6f\u5f15\u7528\u5bf9\u8c61 "),Object(c.b)("h3",Object(r.a)({parentName:"blockquote"},{id:"\u5f31\u5f15\u7528"}),"\u5f31\u5f15\u7528"),Object(c.b)("p",{parentName:"blockquote"},"\u5982\u679c\u865a\u5f15\u7528\u5bf9\u8c61\u56de\u6536\u5b8c\u4e4b\u540e\uff0c\u5185\u5b58\u8fd8\u662f\u62a5\u8b66\uff0c\u7ee7\u7eed\u56de\u6536\u5f31\u5f15\u7528\u5bf9\u8c61 "),Object(c.b)("h3",Object(r.a)({parentName:"blockquote"},{id:"\u865a\u5f15\u7528"}),"\u865a\u5f15\u7528"),Object(c.b)("p",{parentName:"blockquote"},"\u865a\u62df\u673a\u7684\u5185\u5b58\u4e0d\u591f\u4f7f\u7528\uff0c\u5f00\u59cb\u62a5\u8b66\uff0c\u8fd9\u65f6\u5019\u5783\u573e\u56de\u6536\u673a\u5236\u5f00\u59cb\u6267\u884cSystem.gc(); String s = \u201cabc\u201d;\u5982\u679c\u6ca1\u6709\u5bf9\u8c61\u56de\u6536\u4e86\uff0c \u5c31\u56de\u6536\u6ca1\u865a\u5f15\u7528\u7684\u5bf9\u8c61")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5f15\u7528\u7c7b\u578b"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u88ab\u5783\u573e\u56de\u6536\u65f6\u95f4"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u7528\u9014"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u751f\u5b58\u65f6\u95f4"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5f3a\u5f15\u7528"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u4ece\u6765\u4e0d\u4f1a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5bf9\u8c61\u7684\u4e00\u822c\u72b6\u6001"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"JVM \u505c\u6b62\u8fd0\u884c"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u8f6f\u5f15\u7528"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5728\u5185\u5b58\u4e0d\u8db3\u65f6"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5bf9\u8c61\u7f13\u5b58"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5185\u5b58\u4e0d\u8db3\u65f6\u7ec8\u6b62"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5f31\u5f15\u7528"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5728\u5783\u573e\u56de\u6536\u65f6"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5bf9\u8c61\u7f13\u5b58"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"GC \u540e\u505c\u6b62"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u865a\u5f15\u7528"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u672a\u77e5"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u672a\u77e5"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u672a\u77e5"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,s=u["".concat(b,".").concat(O)]||u[O]||j[O]||c;return n?a.a.createElement(s,l(l({ref:t},i),{},{components:n})):a.a.createElement(s,l({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var i=2;i<c;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);