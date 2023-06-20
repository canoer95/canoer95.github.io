(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1044:function(v,_,t){"use strict";t.r(_);var l=t(3),i=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"定义和组成"}},[v._v("定义和组成")]),v._v(" "),_("blockquote",[_("p",[v._v("蠢背，并以计网知识为准 ——> 满分")])]),v._v(" "),_("p",[v._v("网络定义：")]),v._v(" "),_("ul",[_("li",[v._v("计算机网络是一些互相连接的、自治的计算机的集合")]),v._v(" "),_("li",[v._v("因特网是网络的网络")])]),v._v(" "),_("p",[v._v("网络的组成（物理）：")]),v._v(" "),_("ul",[_("li",[v._v("硬件：主机、通信处理机，线路、交换设备（交换器、路由器、中继器等连接设备）")]),v._v(" "),_("li",[v._v("软件：实现资源共享的软件（百度网盘）和方便用户使用的软件实体（linux、windows、lol）")]),v._v(" "),_("li",[v._v("协议：数据在线路上传输遵循的规则")])]),v._v(" "),_("p",[v._v("网络的组成（工作方式）：")]),v._v(" "),_("ul",[_("li",[v._v("边缘部分：所有联网的主机（联网的计算机），这些主机也叫端系统，边缘部分也叫资源子网")]),v._v(" "),_("li",[v._v("核心部分：网络和连接网络的路由器，为边缘部分提供连接服务和交换服务，也叫通信子网")])]),v._v(" "),_("p",[v._v("网络并不在乎其内部传输的数据，就像铁路不关心火车中运的是什么，而只关心二者是否联通")]),v._v(" "),_("p",[v._v("端系统（主机）之间的通信方式：")]),v._v(" "),_("ul",[_("li",[v._v("C/S 方式，客户/服务器方式，如 MC")]),v._v(" "),_("li",[v._v("P2P 方式，对等，如种子、百度网盘")])]),v._v(" "),_("p",[v._v("核心部分：向主机提供连通性")]),v._v(" "),_("ul",[_("li",[v._v("起核心作用的是路由器")]),v._v(" "),_("li",[v._v("路由器实现分组交换和路由选择，这是网络核心最关键的功能")])]),v._v(" "),_("h2",{attrs:{id:"网络服务"}},[v._v("网络服务")]),v._v(" "),_("p",[v._v("核心部分除了提供连通性，同时还提供一些服务")]),v._v(" "),_("h3",{attrs:{id:"面向连接服务和无连接服务"}},[v._v("面向连接服务和无连接服务")]),v._v(" "),_("ul",[_("li",[v._v("面向连接服务（打电话），如 TCP、PPP，需经过建立连接、维护连接、释放连接三过程，协议复杂且效率不高，但传输可靠性高")]),v._v(" "),_("li",[v._v("无连接服务（发邮件），如 UDP，每个分组都携带完整的目的地址并且独立传送，不需要连接，协议相对简单、传输效率高，但可能出现乱序、重复和丢失的现象（寄出去就不管了），可靠性不好")])]),v._v(" "),_("h3",{attrs:{id:"可靠服务和不可靠服务"}},[v._v("可靠服务和不可靠服务")]),v._v(" "),_("ul",[_("li",[v._v("可靠服务：具有纠错、检错、应答机制，能够保证数据正确、可靠传送到目的地")]),v._v(" "),_("li",[v._v("不可能服务：尽量正确、可靠地传输，是一种尽力而为的服务")])]),v._v(" "),_("h3",{attrs:{id:"有应答服务和无应答服务"}},[v._v("有应答服务和无应答服务")]),v._v(" "),_("ul",[_("li",[v._v("收到数据后是否发送应答，告知传输方相应信息")]),v._v(" "),_("li",[v._v("TCP、CSMA/CA 为有应答服务，其余均为无应答服务")])]),v._v(" "),_("p",[v._v("可靠 => 面向连接且有应答")]),v._v(" "),_("p",[v._v("反之不然，如 PPP 面向连接但不可靠，CSMA/CA 有应答但不可靠，这二者均存在丢弃机制")]),v._v(" "),_("ul",[_("li",[v._v("当数据错误后，选择重发，重发次数达到上限（15次）则丢弃")])]),v._v(" "),_("h2",{attrs:{id:"特点和功能"}},[v._v("特点和功能")]),v._v(" "),_("p",[v._v("特点：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("连通性")]),v._v(" "),_("th",[v._v("共享性")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("交换信息")]),v._v(" "),_("td",[v._v("指资源共享")])]),v._v(" "),_("tr",[_("td",[v._v("互联网具有虚拟的特点，无法知道另一台主机是否是一只猫")]),v._v(" "),_("td",[v._v("信息共享、软件共享、硬件共享")])])])]),v._v(" "),_("p",[v._v("主要/基本功能")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("数据通信：最基本和最重要的功能（注意最）")]),v._v(" "),_("p",[v._v("包括连接控制、传输控制、差错控制、流量控制、多路复用等子功能")])]),v._v(" "),_("li",[_("p",[v._v("资源共享：数据共享、软件共享以及硬件资源共享")])])]),v._v(" "),_("p",[v._v("其他功能")]),v._v(" "),_("ul",[_("li",[v._v("分布式处理")]),v._v(" "),_("li",[v._v("信息综合处理")])]),v._v(" "),_("p",[v._v("VPN")]),v._v(" "),_("ul",[_("li",[v._v("VPS：虚拟私人（代理）服务器")]),v._v(" "),_("li",[v._v("软件或插件 ——> 利用算力")])]),v._v(" "),_("h2",{attrs:{id:"计算机网络分类"}},[v._v("计算机网络分类")]),v._v(" "),_("h3",{attrs:{id:"按交换技术分类"}},[v._v("按交换技术分类")]),v._v(" "),_("ul",[_("li",[v._v("电路交换")]),v._v(" "),_("li",[v._v("报文交换")]),v._v(" "),_("li",[v._v("分组交换")])]),v._v(" "),_("h3",{attrs:{id:"按传输介质分类"}},[v._v("按传输介质分类")]),v._v(" "),_("p",[v._v("有线网络")]),v._v(" "),_("ul",[_("li",[v._v("双绞线网络")]),v._v(" "),_("li",[v._v("同轴电缆网络")])]),v._v(" "),_("p",[v._v("无线网络：蓝牙、微波、无线电等")]),v._v(" "),_("h3",{attrs:{id:"按拓扑结构分类"}},[v._v("按拓扑结构分类")]),v._v(" "),_("p",[v._v("星型是散射的，由一结点引出其余所有结点")]),v._v(" "),_("ul",[_("li",[v._v("星型网络")]),v._v(" "),_("li",[v._v("总线型网络")]),v._v(" "),_("li",[v._v("环形网络")]),v._v(" "),_("li",[v._v("网状型网络")])]),v._v(" "),_("h3",{attrs:{id:"按分布范围分类"}},[v._v("按分布范围分类")]),v._v(" "),_("p",[v._v("注意这里的四种网络均属于无线网络")]),v._v(" "),_("ul",[_("li",[v._v("广域网 WAN")]),v._v(" "),_("li",[v._v("局域网 LAN")]),v._v(" "),_("li",[v._v("城域网 MAN")]),v._v(" "),_("li",[v._v("个人局域网 PAN")])]),v._v(" "),_("h3",{attrs:{id:"按使用者分类"}},[v._v("按使用者分类")]),v._v(" "),_("ul",[_("li",[v._v("公用网")]),v._v(" "),_("li",[v._v("专用网")])]),v._v(" "),_("h3",{attrs:{id:"按传输技术分类"}},[v._v("按传输技术分类")]),v._v(" "),_("ul",[_("li",[v._v("广播式：1 对 n，如局域网")]),v._v(" "),_("li",[v._v("点对点：1 对 1，如广域网")])]),v._v(" "),_("h2",{attrs:{id:"计算机网络的性能指标"}},[v._v("计算机网络的性能指标")]),v._v(" "),_("blockquote",[_("p",[v._v("在数据链路层和网络层中进行考察")])]),v._v(" "),_("h3",{attrs:{id:"速率"}},[v._v("速率")]),v._v(" "),_("p",[v._v("也叫比特率，每秒传输的字节数，单位可以是 b/s，Mb/s，Gb/s")]),v._v(" "),_("h3",{attrs:{id:"带宽"}},[v._v("带宽")]),v._v(" "),_("p",[v._v("数字通信（离散通信，以高低电位表示1/0）中，带宽即网络能达到的最高速率（比特率）")]),v._v(" "),_("p",[v._v("模拟通信（连续通信，波形）中，带宽指波段的上下界之差")]),v._v(" "),_("h3",{attrs:{id:"时延"}},[v._v("时延")]),v._v(" "),_("p",[v._v("数据从一端到达另一端的时间称为时延，由以下部分组成")]),v._v(" "),_("ul",[_("li",[v._v("发送时延 / 传输时延（如进入高速路前的收费站，车长/车速）：数据帧长度 / 发送速率")]),v._v(" "),_("li",[v._v("传播时延，在链路中经过的时间（高速路上的开车时间）：信道长度 / 信号在信道上的传播速度")]),v._v(" "),_("li",[v._v("排队时延（高速收费站的排队时间）")]),v._v(" "),_("li",[v._v("处理时延（收费站收费的时间）")])]),v._v(" "),_("p",[v._v("总时延 = 发送时延 + 传播时延 + （排队时延 + 处理时延）")]),v._v(" "),_("ul",[_("li",[v._v("后二者忽略不计")])]),v._v(" "),_("p",[v._v("链路带宽减少了数据的发送时延，但不影响传播时延，由信号决定（大多网速快指的是发送时延小）")]),v._v(" "),_("p",[v._v("时延带宽积：传播时延 x 带宽")]),v._v(" "),_("ul",[_("li",[v._v("我们将数据看作连续的，那么整个通信信道中最多存在 传播时延 x 带宽 个比特（高乘以底面积），就像一条路充满车，那么这条路的长度可以用车来衡量")]),v._v(" "),_("li",[v._v("时延带宽积（比特数）也被视作两个节点之间的距离")]),v._v(" "),_("li",[v._v("如 a b 之间传播时延 100s，每秒发送 1bit 数据，那么 a b 之间距离为 100bit")])]),v._v(" "),_("p",[v._v("例题：流水线，总时间 = mt + (n-1)t")]),v._v(" "),_("ul",[_("li",[v._v("m 流水线的段数")]),v._v(" "),_("li",[v._v("n 数据组数")]),v._v(" "),_("li",[v._v("t 每发送一段数据所需时间（发送时延+传播时延）")])]),v._v(" "),_("img",{attrs:{src:t(400)}}),v._v(" "),_("h3",{attrs:{id:"吞吐量"}},[v._v("吞吐量")]),v._v(" "),_("blockquote",[_("p",[v._v("对比港口，吞指进，吐指出")])]),v._v(" "),_("p",[v._v("单位时间内通过某个网络（信道或接口）的数据量，与带宽相关：带宽 x 时间 为最大吞吐，而吞吐量为实际发生的量")]),v._v(" "),_("p",[v._v("分组是一组一组发送的，即上一组到达后，下一组才发出，这里的总时延要求的是第一组开始发送到最后一组数据到达末端经历的时间")]),v._v(" "),_("p",[v._v("思路一：")]),v._v(" "),_("p",[v._v("每次发送一组数据一端路程时延：t = 发送时延+传播时延 = 100x8b / 100Mb/s + 1km / 10^5km/s = 0.000018 s")]),v._v(" "),_("p",[v._v("那么，从 0.00018s（10t） 后，十组数据全部发送到第二个节点，很明显，此时最后一组数据在第二个节点，再经过四段路到末端，结束发送，于是总时延为 10t + 4t = 14t")]),v._v(" "),_("p",[v._v("思路二：")]),v._v(" "),_("p",[v._v("首先考虑第一组数据，他经过 5 次发送到达末端，即 5t，因为下一组数据总是紧跟在上一组之后，所以之后每经过一个 t 时延，都将有一组数据到达末端，一共还剩 9 组，故总时延为 5t + 9t = 14t")]),v._v(" "),_("h2",{attrs:{id:"计算机网络体系结构"}},[v._v("计算机网络体系结构")]),v._v(" "),_("blockquote",[_("p",[v._v("包括了全部考题")])]),v._v(" "),_("h3",{attrs:{id:"体系结构及相应概念"}},[v._v("体系结构及相应概念")]),v._v(" "),_("p",[v._v("分层的设计方案（解藕）：按照信息的流动过程将网络功能分成一个个的功能层，同等功能层采用相同的协议，同一计算机的相邻层通过接口传递信息")]),v._v(" "),_("ul",[_("li",[v._v("体系结构定义了各层的功能，但不讨论功能的实现")])]),v._v(" "),_("p",[v._v("网络的体系结构：计网的各层和其协议的集合")]),v._v(" "),_("ul",[_("li",[v._v("实体：任何能接收/发送信息的硬件或软件进程")]),v._v(" "),_("li",[v._v("对等实体：同一层的实体称为对等实体，如副总1和副总2为对等实体（不同节点的相同层）")]),v._v(" "),_("li",[v._v("对等层：不同计算机的同一层，如公司a和公司b的管理层为对等层")]),v._v(" "),_("li",[v._v("相邻层：同一计算机的相邻层次")])]),v._v(" "),_("p",[v._v("底层为高层提供服务，如第 n 层为第 n+1 层提供服务")]),v._v(" "),_("h3",{attrs:{id:"体系结构的三要素"}},[v._v("体系结构的三要素")]),v._v(" "),_("ul",[_("li",[v._v("协议：事先约定好的规则，规定数据交换的格式以及有关的同步问题，为数据交换而建立的标准、约定和规则\n"),_("ul",[_("li",[v._v("语法：数据的结构或格式")]),v._v(" "),_("li",[v._v("语义：数据所代表的意义，如绿灯表示通行")]),v._v(" "),_("li",[v._v("同步：事件实现顺序的说明，如绿灯 40s 后红灯 20s")])])]),v._v(" "),_("li",[v._v("服务：下层为紧邻的上层提供功能调用\n"),_("ul",[_("li",[v._v("面向连接和无连接服务（尽力而为的交付）")]),v._v(" "),_("li",[v._v("可靠和不可靠")]),v._v(" "),_("li",[v._v("有应答和无应答")])])]),v._v(" "),_("li",[v._v("接口：相邻两层交换信息的连接点，Service Access Point，SAP，服务访问点")])]),v._v(" "),_("p",[v._v("协议是水平的，控制对等实体之间的规则；服务是垂直的，下层对上层")]),v._v(" "),_("h3",{attrs:{id:"osi-参考模型"}},[v._v("OSI 参考模型")]),v._v(" "),_("blockquote",[_("p",[v._v("考题集中分布")]),v._v(" "),_("p",[v._v("Open System Internetwork Reference")])]),v._v(" "),_("p",[v._v("OSI 参考模型（从上到下）：应表会传网数物")]),v._v(" "),_("ul",[_("li",[v._v("上三层为通信子网，为了联网附加的通信设备，完成数据传输功能")]),v._v(" "),_("li",[v._v("下三层为资源子网，相当于计算机系统，完成数据处理")]),v._v(" "),_("li",[v._v("传输层呈上启下")])]),v._v(" "),_("p",[v._v("每层功能、每层数据格式以及每层协议（重点）")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("层级")]),v._v(" "),_("th",[v._v("数据格式")]),v._v(" "),_("th",[v._v("功能")]),v._v(" "),_("th",[v._v("协议")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("应用层")]),v._v(" "),_("td",[v._v("数据")]),v._v(" "),_("td",[v._v("为用户的各种应用程序提供各类网络服务")]),v._v(" "),_("td",[v._v("HTTP、FTP、TELNET、SMTP、DNS、DHCP")])]),v._v(" "),_("tr",[_("td",[v._v("表示层（representation）")]),v._v(" "),_("td",[v._v("/")]),v._v(" "),_("td",[v._v("将不同的数据格式转化为一种，解决数据格式问题以及加密、解密、压缩、解压缩问题")]),v._v(" "),_("td",[v._v("ASCH、JPEG、MPEG、WAV")])]),v._v(" "),_("tr",[_("td",[v._v("会话层（session）")]),v._v(" "),_("td",[v._v("/")]),v._v(" "),_("td",[v._v("建立、管理会话，保证两个点之间的连接，为表示层提供服务")]),v._v(" "),_("td",[v._v("安排访问次序，同步点的设计")])]),v._v(" "),_("tr",[_("td",[v._v("传输层")]),v._v(" "),_("td",[v._v("TCP 数据端 / UDP 数据报（用户数据报）")]),v._v(" "),_("td",[v._v("提供端到端的连接、进程到进程的连接，保证数据的正确的顺序和完整性")]),v._v(" "),_("td",[v._v("TCP、UDP")])]),v._v(" "),_("tr",[_("td",[v._v("网络层")]),v._v(" "),_("td",[v._v("数据包（数据报 / 分组）")]),v._v(" "),_("td",[v._v("主机之间的连接、路径选择以及基于IP的寻址，为分组提供路由功能")]),v._v(" "),_("td",[v._v("IP、ICMP、ARP、IGMP")])]),v._v(" "),_("tr",[_("td",[v._v("数据链路层")]),v._v(" "),_("td",[v._v("帧")]),v._v(" "),_("td",[v._v("提供数据在物理链路的传输、物理寻址、网络拓扑、错误检测，提供SAP")]),v._v(" "),_("td",[v._v("两层交换器、网桥")])]),v._v(" "),_("tr",[_("td",[v._v("物理层")]),v._v(" "),_("td",[v._v("比特流")]),v._v(" "),_("td",[v._v("高低电平、数据传输速度、传输距离、物理连接器")]),v._v(" "),_("td",[v._v("HUB（集线器）、中继器以及传输线路")])])])]),v._v(" "),_("h3",{attrs:{id:"tcp-ip-模型"}},[v._v("TCP/IP 模型")]),v._v(" "),_("blockquote",[_("p",[v._v("工业应用，减少层数提高效率")])]),v._v(" "),_("p",[v._v("应表会传网数物 ——> 应传网网")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("层级")]),v._v(" "),_("th",[v._v("功能")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("应用层（用户对用户）")]),v._v(" "),_("td",[v._v("对应应用层、表示层、会话层")])]),v._v(" "),_("tr",[_("td",[v._v("传输层（进程对进程，端到端）")]),v._v(" "),_("td",[v._v("TCP、UDP")])]),v._v(" "),_("tr",[_("td",[v._v("网络层（网际层、IP层）（主机对主机）")]),v._v(" "),_("td",[v._v("IP、IGMP、ARP、ICMP")])]),v._v(" "),_("tr",[_("td",[v._v("网络接口层")]),v._v(" "),_("td",[v._v("数据链路层和物理层")])])])]),v._v(" "),_("h4",{attrs:{id:"osi-rm-对比-tcp-ip"}},[v._v("OSI/RM 对比 TCP/IP")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th"),v._v(" "),_("th",[v._v("TCP/IP")]),v._v(" "),_("th",[v._v("OSI")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("流量控制")]),v._v(" "),_("td",[v._v("应用层、传输层")]),v._v(" "),_("td",[v._v("数据链路层、网络层、传输层、上三层")])]),v._v(" "),_("tr",[_("td",[v._v("网络层")]),v._v(" "),_("td",[v._v("尽力而为的传输")]),v._v(" "),_("td",[v._v("可靠和不可靠均有")])]),v._v(" "),_("tr",[_("td",[v._v("传输层")]),v._v(" "),_("td",[v._v("可靠的TCP，不可靠的UDP")]),v._v(" "),_("td",[v._v("只有可靠传输")])])])]),v._v(" "),_("h3",{attrs:{id:"教学模型"}},[v._v("教学模型")]),v._v(" "),_("p",[v._v("五层模型")]),v._v(" "),_("ul",[_("li",[v._v("应用层、运输层、网络层取自 TCP/IP 模型")]),v._v(" "),_("li",[v._v("数据链路层、物理层取自 RM 模型")])]),v._v(" "),_("p",[v._v("数据从上到下封装，不改变数据内容，加上头尾用于识别")]),v._v(" "),_("p",[v._v("从下往上叫做解封装")]),v._v(" "),_("ul",[_("li",[v._v("物理层和应用层不参与封装")])])])}),[],!1,null,null,null);_.default=i.exports},400:function(v,_,t){v.exports=t.p+"assets/img/2022-8-29-1.c2df7022.png"}}]);