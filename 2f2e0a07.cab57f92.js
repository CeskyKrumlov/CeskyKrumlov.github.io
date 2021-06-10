(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(2),a=t(6),u=(t(0),t(331)),s={id:"leetCodeQueue",title:"LeetCode\u6808\u3001\u961f\u5217\u4e0e\u5806",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["\u7b97\u6cd5","\u6570\u636e\u7ed3\u6784"]},r={permalink:"/blog/leetCodeQueue",source:"@site/blog/2020-03-08-\u6808_\u961f\u5217_\u5806.md",description:"- 225:\u4f7f\u7528\u961f\u5217\u5b9e\u73b0\u6808(Easy)\uff08\u6808\u3001\u961f\u5217\uff09",date:"2020-03-08T00:00:00.000Z",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"},{label:"\u6570\u636e\u7ed3\u6784",permalink:"/blog/tags/\u6570\u636e\u7ed3\u6784"}],title:"LeetCode\u6808\u3001\u961f\u5217\u4e0e\u5806",readingTime:8.555,truncated:!0,prevItem:{title:"\u79bb\u7ebfAPI\u5de5\u5177Zeal\u4e0eAPI\u6587\u6863\u79bb\u7ebf\u5b89\u88c5",permalink:"/blog/zeal"},nextItem:{title:"LeetCode\u94fe\u8868",permalink:"/blog/leetcodeLinked"}},c=[{value:"\u9884\u5907\u77e5\u8bc6\u2014\u2014\u6808\u4e0e\u961f\u5217",id:"\u9884\u5907\u77e5\u8bc6\u6808\u4e0e\u961f\u5217",children:[{value:"\u6808",id:"\u6808",children:[]},{value:"\u961f\u5217",id:"\u961f\u5217",children:[]}]},{value:"255 Implement Stack using Queues (Easy)",id:"255-implement-stack-using-queues-easy",children:[]},{value:"232 Implement Queue using Stacks (Easy)",id:"232-implement-queue-using-stacks-easy",children:[]},{value:"155 Min Stack (Easy)",id:"155-min-stack-easy",children:[]},{value:"Leetcode 946 (Medium)",id:"leetcode-946-medium",children:[]},{value:"224 \u7b80\u5355\u8ba1\u7b97\u5668(Hard)",id:"224-\u7b80\u5355\u8ba1\u7b97\u5668hard",children:[]},{value:"\u4e8c\u53c9\u5806\u5c5e\u6027",id:"\u4e8c\u53c9\u5806\u5c5e\u6027",children:[{value:"STL\u4f18\u5148\u7ea7\u961f\u5217\uff08\u4e8c\u53c9\u5806\uff09",id:"stl\u4f18\u5148\u7ea7\u961f\u5217\uff08\u4e8c\u53c9\u5806\uff09",children:[]}]},{value:"215 Kth Larget Element in an Array(Easy)",id:"215-kth-larget-element-in-an-arrayeasy",children:[]},{value:"295 Find Median From Data Stream(Hard)",id:"295-find-median-from-data-streamhard",children:[]}],l={rightToc:c};function p(e){var n=e.components,s=Object(a.a)(e,["components"]);return Object(u.b)("wrapper",Object(i.a)({},l,s,{components:n,mdxType:"MDXLayout"}),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"225:\u4f7f\u7528\u961f\u5217\u5b9e\u73b0\u6808(Easy)\uff08\u6808\u3001\u961f\u5217\uff09"),Object(u.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6808\u5b9e\u73b0\u961f\u5217(East)(\u6808\u3001\u961f\u5217)"),Object(u.b)("li",{parentName:"ul"},"\u5305\u542bmin\u51fd\u6570\u7684\u6808(Easy)(\u6808)"),Object(u.b)("li",{parentName:"ul"},"\u5408\u6cd5\u7684\u51fa\u6808\u5e8f\u5217(Medium)\uff08\u6808\u3001\u961f\u5217\uff09"),Object(u.b)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u8ba1\u7b97\u5668(hard)\uff08\u6808\uff09"),Object(u.b)("li",{parentName:"ul"},"\u6570\u7ec4\u4e2d\u7b2cK\u5927\u7684\u6570(Easy)\uff08\u5806\uff09"),Object(u.b)("li",{parentName:"ul"},"\u5bfb\u627e\u4e2d\u4f4d\u6570(hard)\uff08\u5806\uff09")),Object(u.b)("h1",{id:"\u9884\u5907\u77e5\u8bc6\u6808\u4e0e\u961f\u5217"},"\u9884\u5907\u77e5\u8bc6\u2014\u2014\u6808\u4e0e\u961f\u5217"),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200302155855265",src:t(401).default})),Object(u.b)("h2",{id:"\u6808"},"\u6808"),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),'/*\n    \u6808\n*/\nint main()\n{\n    stack<int> s;\n\n    if (s.empty())\n    {\n        printf("stack is empty\\n");\n    }\n\n    s.push(1);\n    s.push(2);\n    s.push(3);\n\n    printf("top of stack = %d\\n", s.top());\n    printf("size of stack = %d\\n", s.size());\n\n    s.pop();\n    printf("after pop()\\n");\n    printf("top of stack = %d\\n", s.top());\n    printf("size of stack = %d\\n", s.size());\n\n    return 0;\n}\n')),Object(u.b)("h2",{id:"\u961f\u5217"},"\u961f\u5217"),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),'/*\n    \u961f\u5217\n*/\nint main()\n{\n    queue<int> Q;\n    if (Q.empty())\n    {\n        printf("Queue is empty\\n");\n    }\n\n    Q.push(1);\n    Q.push(2);\n    Q.push(3);\n\n    printf("Q.front = %d\\n", Q.front());\n    printf("Q.back = %d\\n", Q.back());\n\n    Q.pop();\n    Q.pop();\n\n    printf("Q.front = %d\\n", Q.front());\n    printf("Q.back = %d\\n", Q.back());\n\n    printf("Q.size() = %d\\n", Q.size());\n\n    return 0;\n}\n')),Object(u.b)("h1",{id:"255-implement-stack-using-queues-easy"},"255 Implement Stack using Queues (Easy)"),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200302162748764",src:t(402).default})),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"\u4e3a\u4e86\u8ba9queue\u7684pop()\u548cstack\u7684pop()\u4f4d\u7f6e\u5bf9\u5e94\uff0c\u6240\u4ee5\u6211\u4eec\u7684\u5185\u90e8\u961f\u5217\u8981\u5012\u7740\u5b58")),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200302163524732",src:t(403).default})),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),'class MyStack\n{\nprivate:\n    queue<int> Q;\n\npublic:\n    /** Initialize your data structure here. */\n    MyStack()\n    {\n    }\n\n    /** Push element x onto stack. */\n    void push(int x)\n    {\n        queue<int> temp;\n        //1\n        temp.push(x);\n\n        while (!Q.empty())\n        {\n            //2\n            temp.push(Q.front());\n            Q.pop();\n        }\n\n        while (!temp.empty())\n        {\n            //3\n            Q.push(temp.front());\n            temp.pop();\n        }\n    }\n\n    /** Removes the element on top of the stack and returns that element. */\n    int pop()\n    {\n        int x = Q.front();\n        Q.pop();\n        return x;\n    }\n\n    /** Get the top element. */\n    int top()\n    {\n        return Q.front();\n    }\n\n    /** Returns whether the stack is empty. */\n    bool empty()\n    {\n        return Q.empty();\n    }\n};\n\nint main()\n{\n\n    MyStack s;\n    s.push(1);\n    s.push(2);\n    s.push(3);\n\n    printf("%d\\n", s.top());\n    s.pop();\n    printf("%d\\n", s.top());\n    s.push(4);\n    printf("%d\\n", s.top());\n\n    return 0;\n}\n')),Object(u.b)("h1",{id:"232-implement-queue-using-stacks-easy"},"232 Implement Queue using Stacks (Easy)"),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200302171800503",src:t(404).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200302172430924",src:t(405).default})),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),"class MyQueue\n{\nprivate:\n    stack<int> S;\n\npublic:\n    /** Initialize your data structure here. */\n    MyQueue()\n    {\n    }\n\n    /** Push element x to the back of queue. */\n    void push(int x)\n    {\n        stack<int> temp;\n        while (!S.empty())\n        {\n            temp.push(S.top());\n            S.pop();\n        }\n        temp.push(x);\n\n        while (!temp.empty())\n        {\n            S.push(temp.top());\n            temp.pop();\n        }\n    }\n\n    /** Removes the element from in front of queue and returns that element. */\n    int pop()\n    {\n        int x = S.top();\n        S.pop();\n        return x;\n    }\n\n    /** Get the front element. */\n    int peek()\n    {\n        return S.top();\n    }\n\n    /** Returns whether the queue is empty. */\n    bool empty()\n    {\n        return S.empty();\n    }\n};\n")),Object(u.b)("h1",{id:"155-min-stack-easy"},"155 Min Stack (Easy)"),Object(u.b)("p",null,"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time."),Object(u.b)("p",null,"push(x) -- Push element x onto stack.\npop() -- Removes the element on top of the stack.\ntop() -- Get the top element.\ngetMin() -- Retrieve the minimum element in the stack."),Object(u.b)("p",null,"Example:"),Object(u.b)("p",null,"MinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --\x3e Returns -3.\nminStack.pop();\nminStack.top();      --\x3e Returns 0.\nminStack.getMin();   --\x3e Returns -2."),Object(u.b)("p",null,"\u8bbe\u8ba1\u7b97\u6cd5\u590d\u6742\u5ea6\u4e3aO(1)\u7684\u6808"),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200302172920545",src:t(406).default})),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"\u521b\u5efa\u4e00\u4e2a\u6700\u5c0f\u503c\u6808\uff0c\u5b58\u50a8\u5404\u4e2a\u72b6\u6001\u7684\u6700\u5c0f\u503c")),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200302174233949",src:t(407).default})),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),"class MinStack\n{\nprivate:\n    stack<int> S;\n    stack<int> min_S;\n\npublic:\n    /** initialize your data structure here. */\n    MinStack()\n    {\n    }\n\n    void push(int x)\n    {\n        S.push(x);\n\n        if (min_S.empty())\n        {\n            min_S.push(x);\n        }\n        else\n        {\n            int min = min_S.top();\n            if (x < min)\n            {\n                min = x;\n            }\n\n            min_S.push(min);\n        }\n    }\n\n    void pop()\n    {\n        S.pop();\n        min_S.pop();\n    }\n\n    int top()\n    {\n        return S.top();\n    }\n\n    //\u8fd4\u56de\u6808\u5185\u6700\u5c0f\u5143\u7d20\n    //\u6700\u5173\u952e\u662fgetMin\u65b9\u6cd5\u8fbe\u5230O(1)\n    int getMin()\n    {\n        return min_S.top();\n    }\n};\n")),Object(u.b)("h1",{id:"leetcode-946-medium"},"Leetcode 946 (Medium)"),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"\u9a8c\u8bc1\u6808\u5e8f\u5217")," \uff08Leetcode 946\uff09\n\u7ed9\u5b9a pushed \u548c popped \u4e24\u4e2a\u5e8f\u5217\uff0c\u6bcf\u4e2a\u5e8f\u5217\u4e2d\u7684 \u503c\u90fd\u4e0d\u91cd\u590d\uff0c\u53ea\u6709\u5f53\u5b83\u4eec\u53ef\u80fd\u662f\u5728\u6700\u521d\u7a7a\u6808\u4e0a\u8fdb\u884c\u7684\u63a8\u5165 push \u548c\u5f39\u51fa pop \u64cd\u4f5c\u5e8f\u5217\u7684\u7ed3\u679c\u65f6\uff0c\u8fd4\u56de true\uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200303162714751",src:t(408).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200303163452530",src:t(409).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200303163921171",src:t(410).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200303164434560",src:t(411).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200303164601731",src:t(412).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200303164747345",src:t(413).default})),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public boolean validateStackSequences(int[] pushed, int[] popped) {\n        if (pushed.length != popped.length) {\n            return false;\n        }\n\n        Stack<Integer> S = new Stack();\n        int index = 0;\n        for (int i = 0; i < pushed.length; i++) {\n            S.push(pushed[i]);\n            while (!S.empty() && S.peek() == popped[index]) {\n                S.pop();\n                index++;\n            }\n        }\n        return S.empty();\n    }\n}\n")),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),"class Solution\n{\npublic:\n    bool validateStackSequences(vector<int> &pushed, vector<int> &popped)\n    {\n        if (pushed.size() != popped.size())\n        {\n            return false;\n        }\n\n        int index = 0;\n        stack<int> S;\n        for (int i = 0; i < pushed.size(); i++)\n        {\n            S.push(pushed[i]);\n            while (!S.empty() && S.top() == popped[index])\n            {\n                S.pop();\n                index++;\n            }\n        }\n        return S.empty();\n    }\n};\n")),Object(u.b)("h1",{id:"224-\u7b80\u5355\u8ba1\u7b97\u5668hard"},"224 \u7b80\u5355\u8ba1\u7b97\u5668(Hard)"),Object(u.b)("p",null,"Implement a basic calculator to evaluate a simple expression string"),Object(u.b)("p",null,"The expression string may contain open",Object(u.b)("inlineCode",{parentName:"p"},"(")," and closing parenthess ",Object(u.b)("inlineCode",{parentName:"p"},")"),", the plus ",Object(u.b)("inlineCode",{parentName:"p"},"+")," or minus sign ",Object(u.b)("inlineCode",{parentName:"p"},"-")," , non-negative integers and empty space ",Object(u.b)("inlineCode",{parentName:"p"}," "),"."),Object(u.b)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u8ba1\u7b97\u5668\uff0c\u8f93\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b58\u50a8\u7684\u6570\u5b66\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u8ba1\u7b97\u5305\u62ec ( ) + - \u56db\u79cd\u7b26\u53f7\u7684\u6570\u5b66\u8868\u8fbe\u5f0f\uff0c\u8f93\u5165\u7684\u6570\u5b66\u8868\u8fbe\u5f0f\u5b57\u7b26\u4e32\u4fdd\u8bc1\u662f\u5408\u6cd5\u7684\u3002\u8f93\u5165\u7684\u6570\u5b66\u8868\u8fbe\u5f0f\u4e2d\u53ef\u80fd\u5b58\u5728\u7a7a\u683c\u5b57\u7b26"),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305182634751",src:t(414).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305183453317",src:t(415).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305183808782",src:t(416).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305184553169",src:t(417).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305184635848",src:t(418).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305184757554",src:t(419).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305184929022",src:t(420).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305185434781",src:t(421).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305190217989",src:t(422).default})),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),"class Solution\n{\npublic:\n    /*\n        \u8ba1\u7b97\u51fd\u6570\n    */\n    void compute(stack<int> &number_stack, stack<char> &operation_stack)\n    {\n        if (number_stack.size() < 2)\n        {\n            return;\n        }\n\n        int num2 = number_stack.top();\n        number_stack.pop();\n        int num1 = number_stack.top();\n        number_stack.pop();\n\n        if (operation_stack.top() == '+')\n        {\n            number_stack.push(num1 + num2);\n        }\n        else if (operation_stack.top() == '-')\n        {\n            number_stack.push(num1 - num2);\n        }\n        operation_stack.pop();\n    }\n\n    int calculate(string s)\n    {\n        static const int STATE_BEGIN = 0;\n        static const int NUMBER_STATE = 1;\n        static const int OPERATION_STATE = 2;\n        stack<int> number_stack;\n        stack<char> operation_stack;\n        int number = 0;\n        int STATE = STATE_BEGIN;\n        int compute_flag = 0;\n\n        for (int i = 0; i < s.size(); i++)\n        {\n            if (s[i] == ' ')\n            {\n                //1.\n                continue;\n            }\n            switch (STATE)\n            {\n            case STATE_BEGIN:\n                if (s[i] >= '0' && s[i] <= '9')\n                {\n                    STATE = NUMBER_STATE;\n                }\n                else\n                {\n                    STATE = OPERATION_STATE;\n                }\n                //2\n                i--;\n                break;\n\n            case NUMBER_STATE:\n                if (s[i] >= '0' && s[i] <= '9')\n                {\n                    number = number * 10 + (s[i] - '0');\n                }\n                else\n                {\n                    //3 number\u8fdb\u5165\u6570\u5b57\u6808\n                    number_stack.push(number);\n\n                    if (compute_flag == 1)\n                    {\n                        compute(number_stack, operation_stack);\n                    }\n                    number = 0;\n                    i--;\n                    STATE = OPERATION_STATE;\n                }\n                break;\n\n            case OPERATION_STATE:\n                if (s[i] == '+' || s[i] == '-')\n                {\n                    operation_stack.push(s[i]);\n                    //4\n                    compute_flag = 1;\n                }\n                else if (s[i] == '(')\n                {\n                    //5\n                    STATE = NUMBER_STATE;\n\n                    compute_flag = 0;\n                }\n                else if (s[i] >= '0' && s[i] <= '9')\n                {\n                    STATE = NUMBER_STATE;\n                    i--;\n                }\n                else if (s[i] == ')')\n                {\n                    compute(number_stack, operation_stack);\n                }\n                break;\n            }\n        }\n\n        if (number != 0)\n        {\n            number_stack.push(number);\n            compute(number_stack, operation_stack);\n        }\n        if (number == 0 && number_stack.empty())\n        {\n            return 0;\n        }\n        return number_stack.top();\n    }\n\n    /*\n        \u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5bf9\u5e94\u6574\u6570\n    */\n    int parse_string(string str)\n    {\n        int number = 0;\n        for (int i = 0; i < str.length(); i++)\n        {\n            number = number * 10 + str[i] - '0';\n        }\n        return number;\n    }\n};\n\n")),Object(u.b)("h1",{id:"\u4e8c\u53c9\u5806\u5c5e\u6027"},"\u4e8c\u53c9\u5806\u5c5e\u6027"),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"\u6700\uff08\u5927\uff09\u5c0f\u4e8c\u53c9\u5806\uff0c\u6700\uff08\u5927\uff09\u5c0f\u503c\u5148\u51fa"),"\u7684\u5b8c\u5168\u4e8c\u53c9\u6811"),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305194941451",src:t(423).default})),Object(u.b)("p",null,"logn\u590d\u6742\u5ea6\uff0c\u5806\u9876\u4e3a\u6700\uff08\u5927\uff09\u5c0f\u6570\uff0c\u5b57\u6570\u4e5f\u6ee1\u8db3\u540c\u6837\u7684\u6027\u8d28"),Object(u.b)("h2",{id:"stl\u4f18\u5148\u7ea7\u961f\u5217\uff08\u4e8c\u53c9\u5806\uff09"},"STL\u4f18\u5148\u7ea7\u961f\u5217\uff08\u4e8c\u53c9\u5806\uff09"),Object(u.b)("p",null,"\u4e8c\u53c9\u5806\uff0c\u6700\u5c0f\uff08\u5927\uff09\u503c\u5148\u51fa\u7684\u5b8c\u5168\u4e8c\u53c9\u6811"),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),'#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <stack>\n#include <queue>\n\nusing namespace std;\n\n/*\n    \u5728\u4f18\u5148\u961f\u5217\u4e2d\uff0c\u5143\u7d20\u88ab\u8d4b\u4e88\u4f18\u5148\u7ea7\u3002\u5f53\u8bbf\u95ee\u5143\u7d20\u65f6\uff0c\n    \u5177\u6709\u6700\u9ad8\u4f18\u5148\u7ea7\u7684\u5143\u7d20\u6700\u5148\u5220\u9664\u3002\u4f18\u5148\u961f\u5217\u5177\u6709\u6700\u9ad8\u7ea7\u5148\u51fa\n     \uff08first in, largest out\uff09\u7684\u884c\u4e3a\u7279\u5f81\u3002\n*/\nint main()\n{\n    priority_queue<int> big_heap;                              //\u9ed8\u8ba4\u6784\u9020\u662f\u6700\u5927\u5806\n    priority_queue<int, vector<int>, greater<int>> small_heap; //\u6784\u9020\u6700\u5c0f\u5806\n    priority_queue<int, vector<int>, less<int>> big_heap2;     //\u6700\u5927\u5806\u7684\u7279\u6b8a\u6784\u9020\u65b9\u6cd5\n\n    if (big_heap.empty())\n    {\n        printf("big_heap is empty ! \\n");\n    }\n    int test[] = {6, 10, 1, 7, 99, 4, 33};\n    for (int i = 0; i < 7; i++)\n    {\n        big_heap.push(test[i]);\n    }\n    printf("big_heap.top = %d \\n", big_heap.top());\n    //1.\n    big_heap.push(1000);\n\n    printf("big_heap.top = %d \\n", big_heap.top());\n\n    for (int i = 0; i < 3; i++)\n    {\n        //3\n        big_heap.pop();\n    }\n\n    printf("big_heap.top = %d \\n", big_heap.top());\n    printf("big_heap.size = %d \\n", big_heap.size());\n\n    return 0;\n}\n\n')),Object(u.b)("h1",{id:"215-kth-larget-element-in-an-arrayeasy"},"215 Kth Larget Element in an Array(Easy)"),Object(u.b)("p",null,"\u5df2\u77e5\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6570\u7ec4\uff0c\u6c42\u8fd9\u4e2a\u6570\u7ec4\u4e2d\u7b2cK\u5927\u7684\u6570\u5b57 "),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"\u6700\u5927\u5806\u66b4\u529b\u89e3\u6cd5\uff1a")),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),"class Solution\n{\npublic:\n    int findKthLargest(vector<int> &nums, int k)\n    {\n        priority_queue<int> Q;\n        for (int i = 0; i < nums.size(); i++)\n        {\n            Q.push(nums[i]);\n        }\n\n        for (int i = 0; i < k - 1; i++)\n        {\n            Q.pop();\n        }\n        return Q.top();\n    }\n};\n\nint main()\n{\n\n    vector<int> vec = {3, 2, 1, 5, 6, 4};\n    int k = 2;\n\n    Solution solve;\n    int result = solve.findKthLargest(vec, k);\n    cout << result;\n\n    return 0;\n}\n")),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"\u6700\u5c0f\u5806\u89e3\u6cd5")),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305202408245",src:t(424).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200305202507401",src:t(425).default})),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),"#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <stack>\n#include <queue>\n\nusing namespace std;\n\nclass Solution\n{\npublic:\n    int findKthLargest(vector<int> &nums, int k)\n    {\n        priority_queue<int, vector<int>, greater<int>> Q; //\u6700\u5c0f\u5806\n        for (int i = 0; i < nums.size(); i++)\n        {\n            if (/*1*/ Q.size() < k)\n            {\n                Q.push(nums[i]);\n            }\n            else if (/*2*/ Q.top() < nums[i])\n            {\n                Q.pop();\n                //3\n                Q.push(nums[i]);\n            }\n        }\n        return Q.top();\n    }\n};\n\nint main()\n{\n\n    vector<int> vec = {3, 2, 1, 5, 6, 4};\n    int k = 3;\n\n    Solution solve;\n    int result = solve.findKthLargest(vec, k);\n    cout << result;\n\n    return 0;\n}\n\n")),Object(u.b)("h1",{id:"295-find-median-from-data-streamhard"},"295 Find Median From Data Stream(Hard)"),Object(u.b)("p",null,"Median is the middle value in an ordered integer list. if the size of the list is even , there is no middle value. So the median is the mean of the tweo middle value."),Object(u.b)("p",null,"Design a data structure that supports the following two operations:"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"void addNum(int num)  -> Add a integer number from the data stream to the data structure"),Object(u.b)("li",{parentName:"ul"},"double findMedian() -> Return the median of all elements so far.")),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"\u76f4\u89c2\u6cd5")),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200306121510549",src:t(426).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200306121724763",src:t(427).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200306123448340",src:t(428).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200306123919383",src:t(429).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200306124252155",src:t(430).default})),Object(u.b)("p",null,Object(u.b)("img",{alt:"image-20200306124454940",src:t(431).default})),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c++"}),'#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <stack>\n#include <queue>\n\nusing namespace std;\n\nclass MedianFinder\n{\nprivate:\n    priority_queue<int> big_queue;\n    priority_queue<int, vector<int>, greater<int>> small_queue;\n\npublic:\n    /** initialize your data structure here. */\n    MedianFinder()\n    {\n    }\n\n    void addNum(int num) // \u5411\u6570\u636e\u7ed3\u6784\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6574\u6570\n    {\n        if (big_queue.empty())\n        {\n            big_queue.push(num);\n            return;\n        }\n        if (big_queue.size() == small_queue.size())\n        {\n            if (/* 1 */ num < big_queue.top())\n            {\n                big_queue.push(num);\n            }\n            else\n            {\n                small_queue.push(num);\n            }\n        }\n        else if (/*2*/ big_queue.size() == small_queue.size() + 1)\n        {\n            if (num > big_queue.top())\n            {\n                small_queue.push(num);\n            }\n            else\n            {\n                //3\n                small_queue.push(big_queue.top());\n\n                big_queue.pop();\n                big_queue.push(num);\n            }\n        }\n        else if (/*4*/ big_queue.size() + 1 == small_queue.size())\n        {\n            if (/*5*/ num < small_queue.top())\n            {\n                big_queue.push(num);\n            }\n            else\n            {\n                big_queue.push(small_queue.top());\n                small_queue.pop();\n                small_queue.push(num);\n            }\n        }\n    }\n\n    double findMedian() //\u8fd4\u56de\u8be5\u6570\u636e\u7ed3\u6784\u4e2d\u7ef4\u62a4\u7684\u6570\u636e\u7684\u4e2d\u4f4d\u6570\n    {\n        if (big_queue.size() == small_queue.size())\n        {\n            return (big_queue.top() + small_queue.top()) / 2.0;\n        }\n        else if (big_queue.size() == small_queue.size() + 1)\n        {\n            return big_queue.top();\n        }\n        else\n        {\n            return small_queue.top();\n        }\n    }\n};\n\nint main()\n{\n    MedianFinder M;\n    M.addNum(2);\n    M.addNum(1);\n\n    printf("%lf\\n", M.findMedian()); //1.5\n\n    M.addNum(4);\n\n    printf("%lf\\n", M.findMedian()); //2\n\n    M.addNum(3);\n\n    printf("%lf\\n", M.findMedian()); //2.5\n\n    return 0;\n}\n\n')),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'//Java Code\npublic class MedianFinder {\n    private PriorityQueue<Integer> smallQueue = new PriorityQueue<>();\n    private PriorityQueue<Integer> bigQueue = new PriorityQueue<>((o1, o2) -> o2 - o1);\n\n    /**\n     * initialize your data structure here.\n     */\n    public MedianFinder() {\n\n    }\n\n    public void addNum(int num) {\n        if (bigQueue.isEmpty()) {\n            bigQueue.add(num);\n            return;\n        }\n        if (bigQueue.size() == smallQueue.size()) {\n            if (num < bigQueue.peek()) {\n                bigQueue.add(num);\n            } else {\n                smallQueue.add(num);\n            }\n        } else if (bigQueue.size() == smallQueue.size() + 1) {\n            if (num > bigQueue.peek()) {\n                smallQueue.add(num);\n            } else {\n                smallQueue.add(bigQueue.poll());\n                bigQueue.add(num);\n            }\n        } else if (bigQueue.size() + 1 == smallQueue.size()) {\n            if (num < smallQueue.peek()) {\n                bigQueue.add(num);\n            } else {\n                bigQueue.add(smallQueue.poll());\n                smallQueue.add(num);\n            }\n        }\n    }\n\n    public double findMedian() {\n        if (bigQueue.size() == smallQueue.size()) {\n            return (bigQueue.peek() + smallQueue.peek()) / 2.0;\n        } else if (bigQueue.size() == smallQueue.size() + 1) {\n            return bigQueue.peek();\n        } else {\n            return smallQueue.peek();\n        }\n    }\n}\n\n\nclass Test {\n    public static void main(String[] args) {\n        MedianFinder medianFinder = new MedianFinder();\n        medianFinder.addNum(2);\n        medianFinder.addNum(1);\n\n        System.out.println(medianFinder.findMedian());\n\n        medianFinder.addNum(4);\n\n        System.out.format("%.2f\\n", medianFinder.findMedian());\n\n        medianFinder.addNum(3);\n\n        System.out.format("%.2f\\n", medianFinder.findMedian());\n\n    }\n}\n')))}p.isMDXComponent=!0},331:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var i=t(0),a=t.n(i);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},u=Object.keys(e);for(i=0;i<u.length;i++)t=u[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)t=u[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},o=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,u=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),o=i,d=b["".concat(s,".").concat(o)]||b[o]||m[o]||u;return t?a.a.createElement(d,r(r({ref:n},l),{},{components:t})):a.a.createElement(d,r({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=t.length,s=new Array(u);s[0]=o;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<u;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"},401:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/1-f6b79a6a8e507100face252326cef04e.png"},402:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-beed3f6fddbdc8f271d3f16bf9097943.png"},403:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-e5f5a2177cce223523c7483c3e13ed00.png"},404:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/4-e9ce67160857a129318d6abe79741dc4.png"},405:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/5-8795175444ba518fbc0ed8962519331e.png"},406:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/6-0d66bae9ae7a814961028c759ef32441.png"},407:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/7-a63d29cb8f130dfb3a72270c4468d783.png"},408:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/8-e9b1a92db9c9900eb66484fbc1d049d8.png"},409:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/9-251381f984271ce73b6c1f6db4983721.png"},410:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/10-63cac104d06203e008d62c1b1e9ac363.png"},411:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/11-4d1ae0f7cfc4f48a0911b4fd6acffa48.png"},412:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/12-e35590d1fcd202c4a93f55bbf80cb5fe.png"},413:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/13-69dd108ddc754eecf2966a8500188a25.png"},414:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/14-b9aff09a77d074e545dbfa2e6ecf8b9d.png"},415:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/15-c2961f99cbd5100634e640e8cb995950.png"},416:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/16-d214613b394cbd07d7e092f8ef6e00ef.png"},417:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/17-9eb0790f3d91207481d81232cbc378fb.png"},418:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/18-e367a809d3a929ba54ceaca665486cab.png"},419:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/19-f78b7dbfd1f2bf68ace90c84b382d063.png"},420:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/20-721bd1f9fef6e2eec3c05ca859479f53.png"},421:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/21-34e47c93d6cc461a0d2077b0f3bb0c15.png"},422:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/22-adc53e144ea4d8850c4a5749c2e8c2ff.png"},423:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/23-d5794d3a375ca796605b7a7f72521138.png"},424:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/24-a65f3744f8dd8648763dd5206fbecce2.png"},425:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/25-9a796811ae2f574aa802068d2f7d56d2.png"},426:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/26-ee67253301034c11cbdb30919f705ae9.png"},427:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/27-6b282677e21cde23cb219b41db5b77b8.png"},428:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/28-b738ed295eda270db04eec0ed13b7026.png"},429:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/29-88264df7d596a73ff8768699ff8a93f8.png"},430:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/30-0cc8137b595ccd1435e5bfb8191f6dea.png"},431:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/31-3545ac29f9faa398b01e3fbdf77cd19e.png"}}]);