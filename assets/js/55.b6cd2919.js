(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1365:function(s,t,a){s.exports=a.p+"assets/img/image-20230531014830827.c5be3204.png"},1366:function(s,t,a){s.exports=a.p+"assets/img/image-20230531015541155.2186022a.png"},1367:function(s,t,a){s.exports=a.p+"assets/img/image-20230531015501009.47fde7f2.png"},1368:function(s,t,a){s.exports=a.p+"assets/img/image-20230531020013260.68da2b03.png"},1369:function(s,t,a){s.exports=a.p+"assets/img/image-20230531020305813.66bbcb19.png"},1370:function(s,t,a){s.exports=a.p+"assets/img/image-20230601013032840.a2ff1c36.png"},1371:function(s,t,a){s.exports=a.p+"assets/img/image-20230602003618040.3daabca0.png"},1372:function(s,t,a){s.exports=a.p+"assets/img/image-20230602003721208.64e12c53.png"},1689:function(s,t,a){"use strict";a.r(t);var i=a(1),e=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"图的基本概念"}},[s._v("图的基本概念")]),s._v(" "),t("p",[s._v("图、子图、简单图、完全图、生成子图")]),s._v(" "),t("ul",[t("li",[s._v("无向图：连通性，连通图，连通分量（极大连通子图）")]),s._v(" "),t("li",[s._v("有向图：强连通性，强连通图，强连通分量")])]),s._v(" "),t("p",[s._v("生成树：极小连通子图")]),s._v(" "),t("p",[s._v("带权图、稀疏图和稠密图")]),s._v(" "),t("p",[s._v("边")]),s._v(" "),t("ul",[t("li",[s._v("路径，简单路径（无重复），路径长度，距离")]),s._v(" "),t("li",[s._v("回路，简单回路")]),s._v(" "),t("li",[s._v("度：出度和入度，数值上等于"),t("code",[s._v("2 x 边数")]),s._v("，有向图的总出度等于总入度")])]),s._v(" "),t("p",[s._v("注意完全图和连通图的区别，还是很大滴")]),s._v(" "),t("p",[s._v("连通子图")]),s._v(" "),t("ul",[t("li",[s._v("生成树 <=> 极小连通子图")]),s._v(" "),t("li",[s._v("连通分量 <=> 极大连通子图")])]),s._v(" "),t("h2",{attrs:{id:"图的存储结构"}},[s._v("图的存储结构")]),s._v(" "),t("h3",{attrs:{id:"邻接矩阵"}},[s._v("邻接矩阵")]),s._v(" "),t("p",[s._v("用一个二维数组表示图的存储，有向图和无向图都可以存，如")]),s._v(" "),t("img",{attrs:{src:a(1365)}}),s._v(" "),t("p",[s._v("其数据结构定义为")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    chat vex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 顶点表")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" edge"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 邻接矩阵，边表")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" vexnum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arcnum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 顶点数和弧数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("MGraph"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("DFS / BFS 遍历的时间复杂度：O(n^2)（n为结点数）")]),s._v(" "),t("h3",{attrs:{id:"邻接表"}},[s._v("邻接表")]),s._v(" "),t("p",[s._v("类似树的孩子表示法：既可以存无向图，又可以存有向图")]),s._v(" "),t("ul",[t("li",[s._v("森林转换：树的孩子兄弟表示法")]),s._v(" "),t("li",[s._v("并查集：树的双亲表示法")]),s._v(" "),t("li",[s._v("邻接表：树的孩子表示法")])]),s._v(" "),t("p",[s._v("无向图的邻接表表示")]),s._v(" "),t("img",{attrs:{src:a(1366)}}),s._v(" "),t("p",[s._v("有向图的邻接表表示")]),s._v(" "),t("img",{attrs:{src:a(1367)}}),s._v(" "),t("p",[s._v("DFS / BFS 遍历的时间复杂度：O(n+e)（其中n为结点数，e为边数）")]),s._v(" "),t("h3",{attrs:{id:"十字链表与邻接多重表"}},[s._v("十字链表与邻接多重表")]),s._v(" "),t("p",[s._v("二者的设计思路相似，都是对一个弧结点设置两个结点表示，两个出入度，这样弧可以同时存在于多个头节点的链表中，有效减少弧的表示，重复利用")]),s._v(" "),t("ul",[t("li",[s._v("十字链表：用于存储有向图")]),s._v(" "),t("li",[s._v("邻接多重表：用于存储无向图")])]),s._v(" "),t("p",[s._v("十字链表：每个头结点对应两个链表，一个表示入度，一个表示出度，边表中，每个结点同样有两条链，一条表示从 head 到 tail，一条表示从 tail 到 head")]),s._v(" "),t("img",{attrs:{src:a(1368)}}),s._v(" "),t("p",[s._v("邻接多重表：思路和十字链表类似，只是不区分出度和入度，弧的表示是双向的，同时头节点自然只用维护一个链表（因为弧是双向的）")]),s._v(" "),t("img",{attrs:{src:a(1369)}}),s._v(" "),t("h2",{attrs:{id:"图的遍历"}},[s._v("图的遍历")]),s._v(" "),t("h3",{attrs:{id:"bfs"}},[s._v("BFS")]),s._v(" "),t("p",[s._v("和树的 BFS 基本相同（树是图的子集，极小连通子图嘛），这里为了避免重复访问结点，需要维护一个 visited 数组标识结点是否被访问")]),s._v(" "),t("p",[s._v("单源最短路径问题，贪心算法")]),s._v(" "),t("p",[s._v("广度优先的生成树，选定结点为根，距离结点距离相同位于树的同一层，依次向下扩展")]),s._v(" "),t("h3",{attrs:{id:"dfs"}},[s._v("DFS")]),s._v(" "),t("p",[s._v("深度优先的生成树和生成森林")]),s._v(" "),t("h3",{attrs:{id:"连通性"}},[s._v("连通性")]),s._v(" "),t("p",[s._v("一次 BFS/DFS 将 visited 数组塞满，即可证明图是连通的")]),s._v(" "),t("h2",{attrs:{id:"图的应用"}},[s._v("图的应用")]),s._v(" "),t("h3",{attrs:{id:"最小生成树"}},[s._v("最小生成树")]),s._v(" "),t("blockquote",[t("p",[s._v("找到权值最小的生成树")])]),s._v(" "),t("p",[s._v("普利姆算法：从"),t("strong",[s._v("结点考虑")]),s._v("，每次选择和树连接的边权值最小的一个结点扩展，直到结点被遍历")]),s._v(" "),t("p",[s._v("库鲁斯卡尔算法：从"),t("strong",[s._v("边考虑")]),s._v("，每次连接边权值最小的两个结点，直到连通")]),s._v(" "),t("h3",{attrs:{id:"最短路径"}},[s._v("最短路径")]),s._v(" "),t("p",[s._v("迪杰斯特拉算法：求解单源最短路径（当然可以用 BFS 求解），每次选择和树连接的边权值最小的一个结点扩展（这句话和普利姆算法一模一样），然后更新距离所有结点的路径（在普利姆中只考虑距离树的路径，这里要考虑的是距离出发结点的路径）")]),s._v(" "),t("p",[s._v("弗罗伊德算法：求解每对结点的最短路径，维护一个邻接矩阵，每次加入一个结点，并且更新这个矩阵，更新的算法如下，假设加入结点 k，那么对于所有结点的路径长度更新为\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mi",[s._v("m")]),t("mi",[s._v("i")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v("{")]),t("mo",[s._v("<")]),t("msub",[t("mi",[s._v("v")]),t("mi",[s._v("i")])],1),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("msub",[t("mi",[s._v("v")]),t("mi",[s._v("j")])],1),t("mo",[s._v(">")]),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mtext"),t("mo",[s._v("<")]),t("msub",[t("mi",[s._v("v")]),t("mi",[s._v("i")])],1),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("msub",[t("mi",[s._v("v")]),t("mi",[s._v("k")])],1),t("mo",[s._v(">")]),t("mo",[s._v("+")]),t("mo",[s._v("<")]),t("msub",[t("mi",[s._v("v")]),t("mi",[s._v("k")])],1),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("msub",[t("mi",[s._v("v")]),t("mi",[s._v("j")])],1),t("mo",[s._v(">")]),t("mo",{attrs:{stretchy:"false"}},[s._v("}")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nmin\\{<v_i,v_j>,\\,<v_i,v_k>+<v_k,v_j>\\}\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("min")]),t("span",{staticClass:"mopen"},[s._v("{")]),t("span",{staticClass:"mrel"},[s._v("<")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8252em","vertical-align":"-0.2861em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v(">")])]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7335em","vertical-align":"-0.1944em"}}),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("<")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7335em","vertical-align":"-0.1944em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03148em"}},[s._v("k")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v(">")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6667em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("<")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8252em","vertical-align":"-0.2861em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03148em"}},[s._v("k")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v(">")])]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mclose"},[s._v("}")])])])])])])],1),s._v("\n将所有结点都插入并更新后，就可以得到每对结点间的最短路径，时间复杂度显然为 O(n^2)")]),s._v(" "),t("h3",{attrs:{id:"有向无环图描述表达式"}},[s._v("有向无环图描述表达式")]),s._v(" "),t("p",[s._v("DAG 图")]),s._v(" "),t("img",{attrs:{src:a(1370)}}),s._v(" "),t("img",{attrs:{src:a(1371)}}),s._v(" "),t("p",[s._v("选 A")]),s._v(" "),t("img",{attrs:{src:a(1372)}}),s._v(" "),t("p",[s._v("他甚至省去了重复的一个 + 号，太变态了")]),s._v(" "),t("h3",{attrs:{id:"拓扑排序"}},[s._v("拓扑排序")]),s._v(" "),t("p",[s._v("AOV 网中，每个结点表示一个活动，AOV 网的拓扑排序，即对各节点进行一维的排序，要求：后面的结点必须在前面的结点活动完成后，才可以进行")]),s._v(" "),t("p",[s._v("给定一个非常朴素的算法用以求解拓扑排序：")]),s._v(" "),t("ol",[t("li",[s._v("找到图中入度为 0 的结点，把他从图中删去，包括所有相关联的边")]),s._v(" "),t("li",[s._v("重复 1，直到所有结点被删除")])]),s._v(" "),t("p",[s._v("注意很有可能同时出现多个入度为 0 的结点，此时随便选一个都是可以的，所有拓扑排序并不是唯一的，并且，对于每一个图的 DFS 序列，其实就是一个拓扑排序")]),s._v(" "),t("p",[s._v("当将删去的结点存在栈中，最后统一出栈访问，这样得到的序列便是逆拓扑序列，对应到 DFS，把访问语句写在递归语句之后，也可以实现逆拓扑排序")]),s._v(" "),t("h3",{attrs:{id:"关键路径"}},[s._v("关键路径")]),s._v(" "),t("p",[s._v("AOE 网中，每个边表示一个活动，只有当边的头结点活动开始后，这条边的活动才能开始")]),s._v(" "),t("p",[s._v("求解关键路径")]),s._v(" "),t("ol",[t("li",[s._v("首先根据边的权值，写出每个结点的最早开始时间，初始结点最早开始时间 0")]),s._v(" "),t("li",[s._v("从最后一个结点开始，令其最晚开始时间等于其最早开始时间，向前一步步减去边的权值，得到前一个结点的最晚开始时间")]),s._v(" "),t("li",[s._v("当相邻结点，后继的最早开始时间减去前驱的最晚开始时间，等于连接二者边的权值，那么，这条边就在关键路径之上")])]),s._v(" "),t("p",[s._v("需要注意的是，单独的减少关键活动的时间，不一定会减少时间的总耗时，因为可能有多条关键路径限制，在他减少之后，就不在关键路径上了")]),s._v(" "),t("p",[s._v("但增加关键活动的时间，一定会增长时间的总耗时")])])}),[],!1,null,null,null);t.default=e.exports}}]);