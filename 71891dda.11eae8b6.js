(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{288:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),i=(t(0),t(564)),o={id:"23.aqs",title:"AQS",hide_title:!0},l={unversionedId:"juc/23.aqs",id:"juc/23.aqs",isDocsHomePage:!1,title:"AQS",description:"AQS",source:"@site/docs/juc/23.aqs.md",slug:"/juc/23.aqs",permalink:"/docs/juc/23.aqs",version:"current",sidebar:"someSidebar",previous:{title:"\u5404\u79cd\u9501",permalink:"/docs/juc/22.multipleTypiesOfLocks"},next:{title:"ThreadLocal",permalink:"/docs/juc/24.threadLocal"}},c=[{value:"AQS",id:"aqs",children:[]},{value:"AQS\u539f\u7406\u5206\u6790",id:"aqs\u539f\u7406\u5206\u6790",children:[{value:"State\uff1a\u72b6\u6001",id:"state\uff1a\u72b6\u6001",children:[]}]},{value:"AQS\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f",id:"aqs\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f",children:[]},{value:"AQS\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",id:"aqs\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",children:[{value:"acquire(int) \u65b9\u6cd5",id:"acquireint-\u65b9\u6cd5",children:[]}]}],s={rightToc:c};function d(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"aqs"},"AQS"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"AQS AbstractQueuedSynchronizer\u7c7b\u5728java.util.concurren.locks\u5305\u4e0b")),Object(i.b)("p",null,"AQS\u662f\u4e00\u4e2a\u7528\u6765\u6784\u5efa\u9501\u548c\u540c\u6b65\u5668\u7684\u6846\u67b6\uff0c\u4f7f\u7528AQS\u80fd\u7b80\u5355\u4e14\u9ad8\u6548\u7684\u6784\u9020\u51fa\u5e94\u7528\u5e7f\u6cdb\u7684\u5927\u91cf\u7684\u540c\u6b65\u5668"),Object(i.b)("p",null,"\u4f8b\u5982ReentrantLock\u3001Semaphore\u3001ReentrantReadWriteLock\u3001SynchronizedQueue\u3001FutureTask\u7b49\u7686\u662f\u57fa\u4e8eAQS\u7684"),Object(i.b)("h1",{id:"aqs\u539f\u7406\u5206\u6790"},"AQS\u539f\u7406\u5206\u6790"),Object(i.b)("p",null,"AQS\u6838\u5fc3\u601d\u60f3\u662f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5982\u679c\u88ab\u8bf7\u6c42\u7684\u5171\u4eab\u8d44\u6e90\u7a7a\u95f2\uff0c\u5219\u5c06\u5f53\u524d\u8bf7\u6c42\u8d44\u6e90\u7684\u7ebf\u7a0b\u8bbe\u7f6e\u4e3a\u6709\u6548\u7684\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5e76\u5c06\u5171\u4eab\u8d44\u6e90\u8bbe\u7f6e\u4e3a\u9501\u5b9a\u72b6\u6001")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5982\u679c\u88ab\u8bf7\u6c42\u7684\u5171\u4eab\u8d44\u6e90\u88ab\u5360\u7528\uff0c\u90a3\u4e48\u4e45\u9700\u8981\u4e00\u5957\u7ebf\u7a0b\u963b\u585e\u7b49\u5f85\u4ee5\u53ca\u88ab\u5524\u9192\u65f6\u9501\u5206\u914d\u7684\u673a\u5236\uff0c\u8fd9\u4e2a\u673a\u5236AQS\u662f\u7528CLH\u961f\u5217\u9501\u5b9e\u73b0\u7684\uff0c\u5373\u5c06\u6682\u65f6\u83b7\u53d6\u4e0d\u5230\u9501\u7684\u7ebf\u7a0b\u52a0\u5165\u961f\u5217\u4e2d"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"CLH (Craig\uff0cLandin\uff0cand Hagersten)\u961f\u5217\u662f\u4e00\u4e2a\u865a\u62df\u7684\u53cc\u5411\u961f\u5217\uff08\u865a\u62df\u53cc\u5411\u961f\u5217\u5373\u4e0d\u51fa\u5728\u961f\u5217\u5b9e\u4f8b\uff0c\u4ec5\u5b58\u5728\u8282\u70b9\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\uff09")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"AQS\u662f\u5c06\u6bcf\u6761\u8bf7\u6c42\u5171\u4eab\u8d44\u6e90\u7684\u7ebf\u7a0b\u5c01\u88c5\u6210\u4e00\u4e2aCLH\u9501\u961f\u5217\u7684\u4e00\u4e2a\u8282\u70b9\u6765\u5b9e\u73b0\u9501\u5206\u914d\u7684"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200702130952411",src:t(951).default})),Object(i.b)("h2",{id:"state\uff1a\u72b6\u6001"},"State\uff1a\u72b6\u6001"),Object(i.b)("p",null,"AQS\u4f7f\u7528\u4e00\u4e2aint\u6210\u5458\u53d8\u91cf\u6765\u8868\u793a\u540c\u6b65\u72b6\u6001\uff0c\u901a\u8fc7\u5185\u7f6e\u7684FIFO\u961f\u5217\u6765\u5b8c\u6210\u83b7\u53d6\u8d44\u6e90\u7ebf\u7a0b\u7684\u6392\u961f\u5de5\u4f5c\u3002AQS\u4f7f\u7528CAS\u5bf9\u8be5\u540c\u6b65\u72b6\u6001\u8fdb\u884c\u539f\u5b50\u64cd\u4f5c\u5b9e\u73b0\u5bf9\u5176\u503c\u7684\u4fee\u6539"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"private volatile int state; //\u5171\u4eab\u53d8\u91cf\uff0c\u4f7f\u7528volatile\u4fee\u9970\u4fdd\u8bc1\u7ebf\u7a0b\u53ef\u89c1\u6027\n// \u4f7f\u7528 int \u800c\u4e0d\u662f boolean\uff0c\u56e0\u4e3a\u5728 \u5171\u4eab\u9501\uff08\u8bfb\u9501\uff09\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u6709\u591a\u4e2a\u8bfb\u7ebf\u7a0b\u83b7\u53d6\u8d44\u6e90\uff0c\u9700\u8981\u6807\u8bb0\u5b83\u4eec\u7684\u6570\u76ee\n\nprivate transient volatile Node tail;\nprivate transient volatile Node head;\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="AQS \u6e90\u7801\u4e2d\u7684 Node \u7c7b"',title:'"AQS',"\u6e90\u7801\u4e2d\u7684":!0,Node:!0,'\u7c7b"':!0}),'/**\n     * Wait queue node class.\n     *\n     * <p>The wait queue is a variant of a "CLH" (Craig, Landin, and\n     * Hagersten) lock queue. CLH locks are normally used for\n     * spinlocks.  We instead use them for blocking synchronizers, but\n     * use the same basic tactic of holding some of the control\n     * information about a thread in the predecessor of its node.  A\n     * "status" field in each node keeps track of whether a thread\n     * should block.  A node is signalled when its predecessor\n     * releases.  Each node of the queue otherwise serves as a\n     * specific-notification-style monitor holding a single waiting\n     * thread. The status field does NOT control whether threads are\n     * granted locks etc though.  A thread may try to acquire if it is\n     * first in the queue. But being first does not guarantee success;\n     * it only gives the right to contend.  So the currently released\n     * contender thread may need to rewait.\n     *\n     * <p>To enqueue into a CLH lock, you atomically splice it in as new\n     * tail. To dequeue, you just set the head field.\n     * <pre>\n     *      +------+  prev +-----+       +-----+\n     * head |      | <---- |     | <---- |     |  tail\n     *      +------+       +-----+       +-----+\n     * </pre>\n     *\n     * <p>Insertion into a CLH queue requires only a single atomic\n     * operation on "tail", so there is a simple atomic point of\n     * demarcation from unqueued to queued. Similarly, dequeuing\n     * involves only updating the "head". However, it takes a bit\n     * more work for nodes to determine who their successors are,\n     * in part to deal with possible cancellation due to timeouts\n     * and interrupts.\n     *\n     * <p>The "prev" links (not used in original CLH locks), are mainly\n     * needed to handle cancellation. If a node is cancelled, its\n     * successor is (normally) relinked to a non-cancelled\n     * predecessor. For explanation of similar mechanics in the case\n     * of spin locks, see the papers by Scott and Scherer at\n     * http://www.cs.rochester.edu/u/scott/synchronization/\n     *\n     * <p>We also use "next" links to implement blocking mechanics.\n     * The thread id for each node is kept in its own node, so a\n     * predecessor signals the next node to wake up by traversing\n     * next link to determine which thread it is.  Determination of\n     * successor must avoid races with newly queued nodes to set\n     * the "next" fields of their predecessors.  This is solved\n     * when necessary by checking backwards from the atomically\n     * updated "tail" when a node\'s successor appears to be null.\n     * (Or, said differently, the next-links are an optimization\n     * so that we don\'t usually need a backward scan.)\n     *\n     * <p>Cancellation introduces some conservatism to the basic\n     * algorithms.  Since we must poll for cancellation of other\n     * nodes, we can miss noticing whether a cancelled node is\n     * ahead or behind us. This is dealt with by always unparking\n     * successors upon cancellation, allowing them to stabilize on\n     * a new predecessor, unless we can identify an uncancelled\n     * predecessor who will carry this responsibility.\n     *\n     * <p>CLH queues need a dummy header node to get started. But\n     * we don\'t create them on construction, because it would be wasted\n     * effort if there is never contention. Instead, the node\n     * is constructed and head and tail pointers are set upon first\n     * contention.\n     *\n     * <p>Threads waiting on Conditions use the same nodes, but\n     * use an additional link. Conditions only need to link nodes\n     * in simple (non-concurrent) linked queues because they are\n     * only accessed when exclusively held.  Upon await, a node is\n     * inserted into a condition queue.  Upon signal, the node is\n     * transferred to the main queue.  A special value of status\n     * field is used to mark which queue a node is on.\n     *\n     * <p>Thanks go to Dave Dice, Mark Moir, Victor Luchangco, Bill\n     * Scherer and Michael Scott, along with members of JSR-166\n     * expert group, for helpful ideas, discussions, and critiques\n     * on the design of this class.\n     */\nstatic final class Node {\n    /** Marker to indicate a node is waiting in shared mode */\n    static final Node SHARED = new Node();\n    /** Marker to indicate a node is waiting in exclusive mode */\n    static final Node EXCLUSIVE = null;\n\n    // \u56db\u4e2a\u72b6\u6001\n    /** waitStatus value to indicate thread has cancelled */\n    static final int CANCELLED =  1;\n    /** waitStatus value to indicate successor\'s thread needs unparking */\n    static final int SIGNAL    = -1;\n    /** waitStatus value to indicate thread is waiting on condition */\n    static final int CONDITION = -2;\n    /**\n         * waitStatus value to indicate the next acquireShared should\n         * unconditionally propagate\n         */\n    static final int PROPAGATE = -3;\n\n    /**\n         * Status field, taking on only the values:\n         *   SIGNAL:     The successor of this node is (or will soon be)\n         *               blocked (via park), so the current node must\n         *               unpark its successor when it releases or\n         *               cancels. To avoid races, acquire methods must\n         *               first indicate they need a signal,\n         *               then retry the atomic acquire, and then,\n         *               on failure, block.\n         *   CANCELLED:  This node is cancelled due to timeout or interrupt.\n         *               Nodes never leave this state. In particular,\n         *               a thread with cancelled node never again blocks.\n         *   CONDITION:  This node is currently on a condition queue.\n         *               It will not be used as a sync queue node\n         *               until transferred, at which time the status\n         *               will be set to 0. (Use of this value here has\n         *               nothing to do with the other uses of the\n         *               field, but simplifies mechanics.)\n         *   PROPAGATE:  A releaseShared should be propagated to other\n         *               nodes. This is set (for head node only) in\n         *               doReleaseShared to ensure propagation\n         *               continues, even if other operations have\n         *               since intervened.\n         *   0:          None of the above\n         *\n         * The values are arranged numerically to simplify use.\n         * Non-negative values mean that a node doesn\'t need to\n         * signal. So, most code doesn\'t need to check for particular\n         * values, just for sign.\n         *\n         * The field is initialized to 0 for normal sync nodes, and\n         * CONDITION for condition nodes.  It is modified using CAS\n         * (or when possible, unconditional volatile writes).\n         */\n    volatile int waitStatus; // \u7b49\u5f85\u72b6\u6001\uff0c\u679a\u4e3e\u503c\n\n    /**\n         * Link to predecessor node that current node/thread relies on\n         * for checking waitStatus. Assigned during enqueuing, and nulled\n         * out (for sake of GC) only upon dequeuing.  Also, upon\n         * cancellation of a predecessor, we short-circuit while\n         * finding a non-cancelled one, which will always exist\n         * because the head node is never cancelled: A node becomes\n         * head only as a result of successful acquire. A\n         * cancelled thread never succeeds in acquiring, and a thread only\n         * cancels itself, not any other node.\n         */\n    volatile Node prev;\n\n    /**\n         * Link to the successor node that the current node/thread\n         * unparks upon release. Assigned during enqueuing, adjusted\n         * when bypassing cancelled predecessors, and nulled out (for\n         * sake of GC) when dequeued.  The enq operation does not\n         * assign next field of a predecessor until after attachment,\n         * so seeing a null next field does not necessarily mean that\n         * node is at end of queue. However, if a next field appears\n         * to be null, we can scan prev\'s from the tail to\n         * double-check.  The next field of cancelled nodes is set to\n         * point to the node itself instead of null, to make life\n         * easier for isOnSyncQueue.\n         */\n    volatile Node next;\n\n    /**\n         * The thread that enqueued this node.  Initialized on\n         * construction and nulled out after use.\n         */\n    volatile Thread thread;\n    // ...\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"state"),"\u72b6\u6001\u7684\u8bbf\u95ee\u65b9\u5f0f\u6709\u662f\u90a3\u79cd\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"getState()"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"setState()"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"compareAndSetState()"),"\uff0c\u5747\u662f\u539f\u5b50\u64cd\u4f5c\u3002"),Object(i.b)("p",null,"\u5176\u4e2d\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"compareAndSetState()"),"\u8c03\u7528\u4e86Unsafe\u7684compareAndSwapInt()\u65b9\u6cd5"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// \u8fd4\u56de\u540c\u6b65\u72b6\u6001\u7684\u5f53\u524d\u503c\uff0c\u539f\u5b50\u8bfb\nprotected final int getState() {\n    return state;\n}\n\n// \u8bbe\u7f6e\u540c\u6b65\u72b6\u6001\u7684\u503c\uff0c\u539f\u5b50\u5199\nprotected final void setState(int newState) {\n    state = newState;\n}\n\n// \u81ea\u52a8\u5c06\u540c\u6b65\u72b6\u6001\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u7684\u66f4\u65b0\u72b6\u6001\u503c\uff08\u5982\u679c\u5f53\u524d\u72b6\u6001\u503c\u8fbe\u5230\u9884\u671f\u503c\uff09\n// \u539f\u5b50\u8bfb\u5199\u64cd\u4f5c\uff0c \u57fa\u4e8eCAS\nprotected final boolean compareAndSetState(int expect, int update) {\n    return unsafe.compareAndSwapInt(this, stateOffset, expect, update);\n}\n")),Object(i.b)("h1",{id:"aqs\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f"},"AQS\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"AQS\u5b9a\u4e49\u4e86\u4e24\u79cd\u8d44\u6e90\u5171\u4eab\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\uff08Exclusive\uff09\u548c\u5171\u4eab\u5f0f(Share)")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Exclusive(\u72ec\u5360\u5f0f)"),"\uff1a\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u6267\u884c\uff0c\u5982ReentrantLock\uff0c\u53c8\u5206\u4e3a\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u516c\u5e73\u9501\uff1a\u6309\u7167\u7ebf\u7a0b\u5728\u961f\u5217\u4e2d\u7684\u6392\u961f\u987a\u5e8f\uff0c\u5148\u5230\u8005\u5148\u83b7\u5f97\u9501"),Object(i.b)("li",{parentName:"ul"},"\u975e\u516c\u5e73\u9501\uff1a\u5f53\u524d\u7ebf\u7a0b\u8981\u83b7\u53d6\u9501\u65f6\uff0c\u65e0\u89c6\u961f\u5217\u987a\u5e8f\u76f4\u63a5\u62a2\u9501\uff0c\u8c01\u62a2\u5230\u5c31\u662f\u8c01\u7684"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Share(\u5171\u4eab\u5f0f)"),"\uff1a\u591a\u4e2a\u7ebf\u7a0b\u53ef\u540c\u65f6\u6267\u884c\uff0c\u5982Semaphore\u548cCountDownLatch")),Object(i.b)("p",null,"ReentrantReadWriteLock\u53ef\u4ee5\u770b\u6210\u662f\u7ec4\u5408\u5f0f\uff0c\u56e0\u4e3aReentrantReadWriteLock\u4e5f\u5c31\u662f\u8bfb\u5199\u9501\uff0c\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u5bf9\u67d0\u4e00\u8d44\u6e90\u8fdb\u884c\u8bfb\u64cd\u4f5c"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"AQS\u53ea\u662f\u4e00\u4e2a\u6846\u67b6\uff0c\u53ea\u5b9a\u4e49\u4e86\u4e00\u4e2a\u63a5\u53e3\uff0c\u5177\u4f53\u8d44\u6e90\u7684\u83b7\u53d6\u3001\u91ca\u653e\u90fd\u4ea4\u7531\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u5b9e\u73b0")),Object(i.b)("p",null,"\u4e0d\u540c\u7684\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u4e89\u7528\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\u4e5f\u4e0d\u540c\u3002\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u5728\u5b9e\u73b0\u65f6\u53ea\u9700\u8981\u5b9e\u73b0\u5171\u4eab\u8d44\u6e90state\u7684\u83b7\u53d6\u4e0e\u91ca\u653e\u65b9\u5f0f\u5373\u53ef\uff0c\u81f3\u4e8e\u5177\u4f53\u7ebf\u7a0b\u7b49\u5f85\u961f\u5217\u7684\u7ef4\u62a4\uff08\u5982\u83b7\u53d6\u8d44\u6e90\u5931\u8d25\u5165\u961f\u3001\u5524\u9192\u51fa\u961f\u7b49\uff09\uff0cAQS\u5df2\u7ecf\u5728\u9876\u5c42\u5b9e\u73b0\u597d\u4e86"),Object(i.b)("h1",{id:"aqs\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"},"AQS\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"),Object(i.b)("p",null,"\u540c\u6b65\u5668\u7684\u8bbe\u8ba1\u57fa\u4e8e\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff0c\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u4e00\u822c\u7684\u65b9\u5f0f\u662f\u8fd9\u6837"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u4f7f\u7528\u8005\u7ee7\u627fAbstractQueuedSynchronizer\u5e76\u91cd\u5199\u6307\u5b9a\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u65e0\u975e\u662f\u5bf9\u5171\u4eab\u8d44\u6e90state\u7684\u83b7\u53d6\u548c\u91ca\u653e"),Object(i.b)("li",{parentName:"ol"},"\u5c06AQS\u7ec4\u5408\u5728\u81ea\u5b9a\u4e49\u540c\u6b65\u7ec4\u4ef6\u7684\u5b9e\u73b0\u4e2d\uff0c\u5e76\u8c03\u7528\u5176\u6a21\u677f\u65b9\u6cd5\uff0c\u800c\u8fd9\u4e9b\u6a21\u677f\u65b9\u6cd5\u4f1a\u8c03\u7528\u4f7f\u7528\u8005\u91cd\u5199\u7684\u65b9\u6cd5")),Object(i.b)("p",null,"\u8fd9\u548c\u6211\u4eec\u4ee5\u5f80\u901a\u8fc7\u5b9e\u73b0\u63a5\u53e3\u7684\u65b9\u5f0f\u6709\u5f88\u5927\u7684\u533a\u522b\uff0c\u8fd9\u662f\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\u5f88\u7ecf\u5178\u7684\u4e00\u4e2a\u5e94\u7528"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"AQS\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff0c\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u65f6\uff0c\u9700\u8981\u91cd\u5199\u4e0b\u9762\u51e0\u4e2aAQS\u63d0\u4f9b\u7684\u6a21\u677f\u65b9\u6cd5\uff1a")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5\u540d"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8d44\u6e90\u5171\u4eab\u65b9\u5f0f"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isHeldExclusively"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u67e5\u8be2\u8be5\u662f\u5426\u6b63\u5728\u72ec\u5360\u8d44\u6e90\uff0c\u53ea\u6709\u7528\u5230condition\u624d\u9700\u8981\u53bb\u5b9e\u73b0\u8be5\u65b9\u6cd5")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryAcquire(int)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u72ec\u5360\u65b9\u5f0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u83b7\u53d6\u8d44\u6e90\uff1a\u6210\u529f\u8fd4\u56detrue\u3001\u5931\u8d25\u8fd4\u56defalse")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryRelease(int)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u72ec\u5360\u65b9\u5f0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u91ca\u653e\u8d44\u6e90\uff1a\u6210\u529f\u8fd4\u56detrue\u3001\u5931\u8d25\u8fd4\u56defalse")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryAcquireShared(int)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5171\u4eab\u65b9\u5f0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u83b7\u53d6\u8d44\u6e90\uff1a\u8d1f\u6570\u8868\u793a\u5931\u8d25\uff1b0\u8868\u793a\u6210\u529f\uff1b\u6b63\u6570\u8868\u793a\u6210\u529f\u4e14\u6709\u5269\u4f59\u8d44\u6e90")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryReleaseShared(int)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5171\u4eab\u65b9\u5f0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u91ca\u653e\u8d44\u6e90\uff1a\u5982\u679c\u91ca\u653e\u8d44\u6e90\u540e\u5141\u8bb8\u5524\u9192\u540e\u7eed\u7b49\u5f85\u7ebf\u7a0b\uff0c\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse")))),Object(i.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u629b\u51fa",Object(i.b)("inlineCode",{parentName:"p"},"UnsupportedOperationException"),"\u3002\u8fd9\u4e9b\u65b9\u6cd5\u7684\u5b9e\u73b0\u5fc5\u987b\u662f\u5185\u90e8\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u5e76\u4e14\u901a\u5e38\u5e94\u8be5\u7b80\u77ed\u800c\u4e0d\u662f\u963b\u585e\u3002"),Object(i.b)("p",null,"AQS\u7c7b\u4e2d\u7684\u5176\u4ed6\u65b9\u6cd5\u90fd\u662ffinal\uff0c\u6240\u4ee5\u65e0\u6cd5\u88ab\u5176\u4ed6\u7c7b\u4f7f\u7528\uff0c\u53ea\u6709\u8fd9\u51e0\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u88ab\u5176\u4ed6\u7c7b\u4f7f\u7528"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"ReentrantLock")),Object(i.b)("p",null,"\u4ee5ReentrantLock\u4e3a\u4f8b\uff0cstate\u521d\u59cb\u5316\u4e3a0\uff0c\u8868\u793a\u672a\u9501\u5b9a\u72b6\u6001"),Object(i.b)("p",null,"A\u7ebf\u7a0b",Object(i.b)("inlineCode",{parentName:"p"},"lock()"),"\u65f6\uff0c\u4f1a\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"tryAcquire()"),"\u72ec\u5360\u8be5\u9501\u5e76state+1"),Object(i.b)("p",null,"\u6b64\u540e\uff0c\u5176\u4ed6\u7ebf\u7a0b\u518d",Object(i.b)("inlineCode",{parentName:"p"},"tryAcquire()"),"\u65f6\u5c31\u4f1a\u5931\u8d25\uff0c\u76f4\u5230A\u7ebf\u7a0b",Object(i.b)("inlineCode",{parentName:"p"},"unlock()"),"\u5230state=0\uff08\u5373\u91ca\u653e\u9501\uff09\u4f4d\u7f6e\uff0c\u5176\u4ed6\u7ebf\u7a0b\u624d\u6709\u673a\u4f1a\u83b7\u53d6\u8be5\u9501"),Object(i.b)("p",null,"\u5f53\u7136\uff0c\u91ca\u653e\u9501\u4e4b\u524d\uff0cA\u7ebf\u7a0b\u81ea\u5df1\u662f\u53ef\u4ee5\u91cd\u590d\u83b7\u53d6\u6b64\u9501\u7684\uff08state\u4f1a\u7d2f\u52a0\uff09\uff0c\u8fd9\u5c31\u662f",Object(i.b)("strong",{parentName:"p"},"\u53ef\u91cd\u5165"),"\u7684\u6982\u5ff5"),Object(i.b)("p",null,"\u4f46\u8981\u6ce8\u610f\uff0c",Object(i.b)("strong",{parentName:"p"},"\u83b7\u53d6\u591a\u5c11\u6b21\u5c31\u8981\u91ca\u653e\u591a\u5c11\u6b21\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1state\u80fd\u591f\u56de\u52300")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"CountDownLatch")),Object(i.b)("p",null,"\u4efb\u52a1\u5206\u4e3aN\u4e2a\u5b50\u7ebf\u7a0b\u53bb\u6267\u884c\uff0cstate\u4e5f\u521d\u59cb\u5316\u4e3aN\uff08\u6ce8\u610fN\u8981\u4e0e\u7ebf\u7a0b\u4e2a\u6570\u4e00\u81f4\uff09\u3002"),Object(i.b)("p",null,"\u8fd9N\u4e2a\u5b50\u7ebf\u7a0b\u65f6\u5e76\u884c\u6267\u884c\u7684\uff0c\u6bcf\u4e2a\u5b50\u7ebf\u7a0b\u6267\u884c\u5b8c\u540e",Object(i.b)("inlineCode",{parentName:"p"},"countDown()"),"\u4e00\u6b21\uff0cstate\u4f1aCAS\u51cf1"),Object(i.b)("p",null,"\u7b49\u5230\u6240\u6709\u5b50\u7ebf\u7a0b\u90fd\u6267\u884c\u5b8c\u540e(state = 0 )\uff0c\u4f1a",Object(i.b)("inlineCode",{parentName:"p"},"unpack()"),"\u4e3b\u8c03\u7528\u7ebf\u7a0b\uff0c\u7136\u540e\u4e3b\u8c03\u7528\u7ebf\u7a0b\u4f1a\u4ece",Object(i.b)("inlineCode",{parentName:"p"},"await()"),"\u51fd\u6570\u8fd4\u56de\uff0c\u7ee7\u7eed\u540e\u7eed\u52a8\u4f5c"),Object(i.b)("hr",null),Object(i.b)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u8981\u4e48\u662f\u72ec\u5360\u65b9\u5f0f\uff0c\u8981\u4e48\u662f\u5171\u4eab\u65b9\u5f0f"),Object(i.b)("p",null,"\u4ee5\u4e0b\u4e24\u7ec4\u65b9\u6cd5\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"tryAcquire()"),"\u4e0e",Object(i.b)("inlineCode",{parentName:"li"},"tryRelease()")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"tryAcquireShared()"),"\u4e0e",Object(i.b)("inlineCode",{parentName:"li"},"tryReleaseShared()"))),Object(i.b)("p",null,"\u4e2d\u7684\u4e00\u7ec4\u5373\u53ef"),Object(i.b)("p",null,"\u4f46AQS\u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u540c\u65f6\u5b9e\u73b0\u72ec\u5360\u548c\u5171\u4eab\u4e24\u79cd\u65b9\u5f0f\uff0c\u5982ReentrantReadWriteLock"),Object(i.b)("h2",{id:"acquireint-\u65b9\u6cd5"},"acquire(int) \u65b9\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"acquire() \u65b9\u6cd5\uff0c\u83b7\u53d6\u9501\uff0c\u4e0d\u7acb\u5373\u8fd4\u56de\uff0c\u613f\u610f\u8fdb\u5165\u961f\u5217\u7b49\u5f85\uff0c\u76f4\u5230\u6210\u529f\u83b7\u53d6"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// public \u8868\u660e\u5927\u5bb6\u90fd\u6765\u8c03\u7528\u6211\n// final \u8868\u660e\u4e0d\u5141\u8bb8\u91cd\u5199\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u65b9\u6cd5\u4e00\u5b9a\u53ef\u4ee5\u83b7\u53d6\u5230\u9501\npublic final void acquire(int arg) {\n    if (!tryAcquire(arg) && // \u5982\u679c tryAcquire \u53ef\u4ee5\u83b7\u53d6\u9501\u5c31\u76f4\u63a5\u9000\u51fa\n        acquireQueued(addWaiter(Node.EXCLUSIVE), arg)) // \u5426\u5219\u6392\u961f\u7b49\u5f85\n        selfInterrupt();\n}\n")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"addWaiter(Node mode)"),"\uff1a\u5c06\u5f53\u524d\u7ebf\u7a0b\u5c01\u88c5\u6210\u4e00\u4e2a Node \u7136\u540e\u52a0\u5165\u7b49\u5f85\u961f\u5217\uff0c\u8fd4\u56de\u503c\u4e3a\u5f53\u524d\u8282\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5c3e\u7ed3\u70b9\u4e0d\u4e3a\u7a7a\uff0c\u901a\u8fc7 CAS \u628a\u65b0\u8282\u70b9\u6dfb\u52a0\u5230 AQS \u961f\u5c3e"),Object(i.b)("li",{parentName:"ul"},"\u5426\u5219\u6267\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"enq(node)")," \u65b9\u6cd5\uff0c\u89e6\u53d1\u5b8c\u6574\u5165\u961f\u65b9\u6cd5")))),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u52a0\u5165\u7b49\u5f85\u961f\u5217"',title:'"\u52a0\u5165\u7b49\u5f85\u961f\u5217"'}),"/**\n* Creates and enqueues node for current thread and given mode.\n*\n* @param mode Node.EXCLUSIVE for exclusive, Node.SHARED for shared\n* @return the new node\n*/\nprivate Node addWaiter(Node mode) {\n    Node node = new Node(Thread.currentThread(), mode);\n    // Try the fast path of enq; backup to full enq on failure\n    Node pred = tail;\n    if (pred != null) {\n        node.prev = pred;\n        if (compareAndSetTail(pred, node)) {\n            pred.next = node;\n            return node;\n        }\n    }\n    enq(node);\n    return node;\n}\n")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="enq(Node) \u5b8c\u6574\u5165\u961f\u65b9\u6cd5"',title:'"enq(Node)','\u5b8c\u6574\u5165\u961f\u65b9\u6cd5"':!0}),"/**\n* Inserts node into queue, initializing if necessary. See picture above.\n* @param node the node to insert\n* @return node's predecessor\n*/\nprivate Node enq(final Node node) {\n    for (;;) { // \u81ea\u65cb\n        Node t = tail;\n        if (t == null) { // Must initialize\n            if (compareAndSetHead(new Node()))\n                tail = head;\n        } else {\n            node.prev = t;\n            if (compareAndSetTail(t, node)) {\n                t.next = node;\n                return t;\n            }\n        }\n    }\n}\n")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="acquireQueued(final Node node, int arg)"',title:'"acquireQueued(final',Node:!0,"node,":!0,int:!0,'arg)"':!0}),"/**\n* Acquires in exclusive uninterruptible mode for thread already in\n* queue. Used by condition wait methods as well as acquire.\n*\n* @param node the node\n* @param arg the acquire argument\n* @return {@code true} if interrupted while waiting\n*/\nfinal boolean acquireQueued(final Node node, int arg) {\n    boolean failed = true;\n    try {\n        boolean interrupted = false;\n        for (;;) {\n            final Node p = node.predecessor();\n            if (p == head && tryAcquire(arg)) { // \u7531\u4e8e\u5b58\u5728\u865a\u62df\u5934\u7ed3\u70b9\uff0c\u5224\u65ad\u662f\u4e0d\u662f\u5934\u7ed3\u70b9\n                setHead(node);\n                p.next = null; // help GC\n                failed = false;\n                return interrupted;\n            }\n            if (shouldParkAfterFailedAcquire(p, node) && // \u5224\u65ad\u5f53\u524d\u7ebf\u7a0b\u662f\u5426\u9700\u8981\u6302\u8d77\n                parkAndCheckInterrupt())\n                interrupted = true;\n        }\n    } finally {\n        if (failed)\n            cancelAcquire(node);\n    }\n}\n")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n     * Checks and updates status for a node that failed to acquire.\n     * Returns true if thread should block. This is the main signal\n     * control in all acquire loops.  Requires that pred == node.prev.\n     *\n     * @param pred node's predecessor holding status\n     * @param node the node\n     * @return {@code true} if thread should block\n     */\n// \u5224\u65ad\u662f\u5426\u9700\u8981\u6302\u8d77\u5f53\u524d\u7ebf\u7a0b\nprivate static boolean shouldParkAfterFailedAcquire(Node pred, Node node) {\n    // \u67e5\u770b\u524d\u7f6e\u8282\u70b9\u7684 \u72b6\u6001\n    int ws = pred.waitStatus;\n    if (ws == Node.SIGNAL) // \u5982\u679c\u72b6\u6001\u4e3a SIGNAL \u8868\u793a\u524d\u7f6e\u8282\u70b9\u4e5f\u5728\u7b49\u5f85\u83b7\u53d6\u9501\n        /*\n             * This node has already set status asking a release\n             * to signal it, so it can safely park.\n             */\n        return true; // \u5219\u5f53\u524d\u8282\u70b9\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u5e76\u6302\u8d77\n    if (ws > 0) { // \u8bf4\u660e\u72b6\u6001\u503c\u53ef\u80fd\u662f cancel\n        /*\n             * Predecessor was cancelled. Skip over predecessors and\n             * indicate retry.\n             */\n        do { // \u6240\u4ee5\u53ef\u4ee5\u5c06\u8282\u70b9\u4ece\u961f\u5217\u4e2d\u5220\u9664\n            node.prev = pred = pred.prev;\n        } while (pred.waitStatus > 0);\n        pred.next = node;\n    } else { // \u8ba9\u524d\u7f6e\u8282\u70b9\u7684 \u72b6\u6001\u4e3a SINGNAL \u8ba9\u5176\u88ab\u5524\u9192\n        /*\n             * waitStatus must be 0 or PROPAGATE.  Indicate that we\n             * need a signal, but don't park yet.  Caller will need to\n             * retry to make sure it cannot acquire before parking.\n             */\n        compareAndSetWaitStatus(pred, ws, Node.SIGNAL);\n    }\n    return false;\n}\n")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5982\u679c\u4e0a\u9762\u7684 shouldParkAfterFailedAcquire \u65b9\u6cd5\u8fd4\u56de true\uff0c\u8bf4\u660e\u8282\u70b9\u9700\u8981\u88ab\u6302\u8d77"',title:'"\u5982\u679c\u4e0a\u9762\u7684',shouldParkAfterFailedAcquire:!0,"\u65b9\u6cd5\u8fd4\u56de":!0,'true\uff0c\u8bf4\u660e\u8282\u70b9\u9700\u8981\u88ab\u6302\u8d77"':!0}),"/**\n* Convenience method to park and then check if interrupted\n*\n* @return {@code true} if interrupted\n*/\nprivate final boolean parkAndCheckInterrupt() {\n    LockSupport.park(this); // Native \u64cd\u4f5c\u7cfb\u7edf\u539f\u8bed\uff0c\u7ebf\u7a0b\u963b\u585e\n    return Thread.interrupted();\n}\n")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u603b\u7ed3")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5f53\u524d node \u5904\u4e8e headNode \u7684\u540e\u9762\u4e00\u4e2a\uff0c\u5219\u4f1a\u81ea\u65cb\u4e0d\u65ad\u5c1d\u8bd5\u83b7\u53d6\u9501\uff0c\u76f4\u5230\u62ff\u9501\u6210\u529f\uff0c\u5426\u5219\u8fdb\u884c\u5224\u65ad\u81ea\u8eab\u662f\u5426\u9700\u8981\u6302\u8d77"),Object(i.b)("li",{parentName:"ul"},"\u5224\u65ad\u81ea\u8eab\u662f\u5426\u9700\u8981\u88ab\u6302\u8d77\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5f53\u524d\u7ebf\u7a0b\u6240\u5728\u7684\u8282\u70b9\u4e4b\u524d\uff0c\u9664\u4e86 headNode \u4ee5\u5916\u8fd8\u6709\u5176\u4ed6\u8282\u70b9\uff0c\u4e14\u5176\u4ed6\u8282\u70b9\u7684 waitStatus \u4e3a SIGNAL\uff0c\u90a3\u4e48\u5f53\u524d\u8282\u70b9\u5c31\u9700\u8981\u6302\u8d77\uff0c",Object(i.b)("strong",{parentName:"li"},"\u8fd9\u6837\u5c31\u80fd\u4fdd\u8bc1 headNode \u4e4b\u540e\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u5728\u901a\u8fc7 CAS \u83b7\u53d6\u9501\uff0c\u800c\u4e4b\u540e\u7684\u5176\u4ed6\u8282\u70b9\u90fd\u5df2\u7ecf\u6302\u8d77\u6216\u8005\u6b63\u5728\u6302\u8d77\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5c3d\u91cf\u907f\u514d\u81ea\u65cb\u5e26\u6765\u7684CPU\u6d88\u8017")))),Object(i.b)("li",{parentName:"ul"},"\u5728\u5408\u9002\u7684\u5b9e\u9645\u5524\u9192\u88ab\u6302\u8d77\u7684\u7ebf\u7a0b\uff1a\u5e94\u5f53\u662f\u5728\u6301\u6709\u9501\u7684\u7ebf\u7a0b\u91ca\u653e\u65f6")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"protected boolean tryRelease(int arg) {\n    throw new UnsupportedOperationException();\n}\n\n/**\n* Releases in exclusive mode.  Implemented by unblocking one or\n* more threads if {@link #tryRelease} returns true.\n* This method can be used to implement method {@link Lock#unlock}.\n*\n* @param arg the release argument.  This value is conveyed to\n*        {@link #tryRelease} but is otherwise uninterpreted and\n*        can represent anything you like.\n* @return the value returned from {@link #tryRelease}\n*/\n// \u901a\u8fc7 unparkSuccessor \u65b9\u6cd5\u5524\u9192 AQS \u4e2d\u88ab\u6302\u8d77\u7684\u8282\u70b9\npublic final boolean release(int arg) {\n    if (tryRelease(arg)) {\n        Node h = head;\n        if (h != null && h.waitStatus != 0)\n            unparkSuccessor(h);\n        return true;\n    }\n    return false;\n}\n")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n* Wakes up node's successor, if one exists.\n*\n* @param node the node\n*/\n// \u4f20\u5165\u7684\u662f headNode\uff0c\u8be5\u65b9\u6cd5\u662f\u4e3a\u4e86\u5524\u9192 headNode \u4e4b\u540e\u7684 node\uff0c\u4f7f\u5176\u81ea\u65cb\u83b7\u53d6\u9501\nprivate void unparkSuccessor(Node node) {\n    /*\n    * If status is negative (i.e., possibly needing signal) try\n    * to clear in anticipation of signalling.  It is OK if this\n    * fails or if status is changed by waiting thread.\n    */\n    int ws = node.waitStatus;\n    if (ws < 0)\n        compareAndSetWaitStatus(node, ws, 0);\n\n    /*\n    * Thread to unpark is held in successor, which is normally\n    * just the next node.  But if cancelled or apparently null,\n    * traverse backwards from tail to find the actual\n    * non-cancelled successor.\n    */\n    // \u4e00\u822c\u662f\u4e0b\u4e00\u4e2a\u8282\u70b9\uff0c\u4f46\u5982\u679c\u88ab\u53d6\u6d88\u6216\u5f53\u524d\u4e3a null\uff0c\u4ece\u961f\u5217\u5c3e\u5f00\u59cb\u5524\u9192\n    Node s = node.next;\n    if (s == null || s.waitStatus > 0) {\n        s = null;\n        for (Node t = tail; t != null && t != node; t = t.prev)\n            if (t.waitStatus <= 0)\n                s = t;\n    }\n    if (s != null)\n        LockSupport.unpark(s.thread); // \u5524\u9192\n}\n"))))}d.isMDXComponent=!0},564:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,h=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return t?r.a.createElement(h,l(l({ref:n},s),{},{components:t})):r.a.createElement(h,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},951:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/12-01b2e945758394362bf70707a40455dd.png"}}]);