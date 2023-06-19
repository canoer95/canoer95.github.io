(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1101:function(v,_,t){"use strict";t.r(_);var s=t(0),d=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"时序逻辑电路概述"}},[v._v("时序逻辑电路概述")]),v._v(" "),_("blockquote",[_("p",[v._v("时序逻辑电路在触发器的基础上开展，是数字电路的核心部分")]),v._v(" "),_("p",[v._v("CLK时钟开关")])]),v._v(" "),_("p",[v._v("时序逻辑电路：任何一个时刻的输出信号不仅取决于当前的输入信号，还与电路的原状态有关（触发器）")]),v._v(" "),_("ul",[_("li",[v._v("串行加法，中间位要同时考虑低位进位和当前位相加，是三者共同的结果，这样的加法器也叫全加器（不考虑进位为半加器）")])]),v._v(" "),_("p",[v._v("特点：")]),v._v(" "),_("ul",[_("li",[v._v("通常包含组合电路（门器件）和存储电路（触发器）两个部分，存储电路是必不可少的")]),v._v(" "),_("li",[v._v("存储电路的输出状态必须反馈到组合电路的输入端，与输入信号一起共同决定组合逻辑电路的输出")])]),v._v(" "),_("p",[v._v("输出方程")]),v._v(" "),_("ul",[_("li",[v._v("输出方程是时序逻辑电路的输出"),_("code",[v._v("y")]),v._v("的方程，是关于输入"),_("code",[v._v("x")]),v._v("、存储电路输出"),_("code",[v._v("q")]),v._v("的函数")])]),v._v(" "),_("p",[v._v("驱动方程")]),v._v(" "),_("ul",[_("li",[v._v("驱动方程是触发器的输入"),_("code",[v._v("z")]),v._v("的方程，是关于触发器输出"),_("code",[v._v("q")]),v._v("和时序逻辑电路输入"),_("code",[v._v("x")]),v._v("的函数")]),v._v(" "),_("li",[v._v("输出方程、驱动方程均由"),_("code",[v._v("x,q决定")])])]),v._v(" "),_("p",[v._v("状态方程")]),v._v(" "),_("ul",[_("li",[v._v("状态方程是触发器的输出次态"),_("code",[v._v("q(n+1)")]),v._v("的方程，是关于触发器输入"),_("code",[v._v("z")]),v._v("和触发器现态"),_("code",[v._v("q(n)")]),v._v("的函数")])]),v._v(" "),_("p",[v._v("时序逻辑电路划分：同步和异步，根据触发器的动作特点不同")]),v._v(" "),_("ul",[_("li",[v._v("同步：触发器状态变化（翻转）在同一时钟信号操作下同时发生")]),v._v(" "),_("li",[v._v("异步：非同步")])]),v._v(" "),_("p",[v._v("根据输入信号特点分为：米利型和穆尔型")]),v._v(" "),_("ul",[_("li",[v._v("米利型：输出信号不仅取决于存储电路状态，还取决于输入变量（既有存储电路，也有门电路）")]),v._v(" "),_("li",[v._v("穆尔型：输出信号只取决于存储电路状态（只有触发器）")])]),v._v(" "),_("p",[v._v("时序机：用输入信号和电路状态的逻辑函数去描述时序逻辑电路功能的方法")]),v._v(" "),_("h2",{attrs:{id:"时序逻辑电路分析方法"}},[v._v("时序逻辑电路分析方法")]),v._v(" "),_("h3",{attrs:{id:"同步时序逻辑电路分析"}},[v._v("同步时序逻辑电路分析")]),v._v(" "),_("p",[v._v("一般方法：")]),v._v(" "),_("ol",[_("li",[v._v("从给定的逻辑图中写出每个触发器的驱动方程\n"),_("ul",[_("li",[v._v("根据给定的电路逻辑图，凭肉眼看，手动写出驱动方程（每个输入电平的方程）（注意是直接相连的电平即可，不需要任何推导）")])])]),v._v(" "),_("li",[v._v("将得到的驱动方程带入相应触发器特性方程，得到每个触发器的状态方程，从而得到由这些状态方程组成的整个时序电路的状态方程组\n"),_("ul",[_("li",[v._v("如"),_("code",[v._v("JK")]),v._v("触发器特性方程"),_("code",[v._v("Q* = JQ'+K'Q")]),v._v("，获取J/K的驱动方程后直接代入即可")]),v._v(" "),_("li",[v._v("驱动方抽+特性方程=状态方程")])])]),v._v(" "),_("li",[v._v("根据逻辑图写出电路的输出方程\n"),_("ul",[_("li",[v._v("和第一步一样，凭肉眼看写出输出方程")])])]),v._v(" "),_("li",[v._v("由输出方程和状态方程，列出状态转换表（真值表）或状态转换图，分析逻辑功能")])]),v._v(" "),_("p",[v._v("难点在前三步，第四步为低附加值工作（量大但简单）")]),v._v(" "),_("h3",{attrs:{id:"状态转换表、图和时序图"}},[v._v("状态转换表、图和时序图")]),v._v(" "),_("blockquote",[_("p",[v._v("驱动方程、状态方程、参数方程")])]),v._v(" "),_("h4",{attrs:{id:"状态转换表"}},[v._v("状态转换表")]),v._v(" "),_("p",[v._v("三种用于描述时序电路状态转换全部过程的方法")]),v._v(" "),_("p",[v._v("将任何一组输入变量和电路初态的取值带入状态方程和输出方程，即可算出电路的次态和现态下的输出值；以得到的次态作为新的出台和这时的输入变量取值一起带入状态方程和输出方程，又会得到一组新的次态和输出")]),v._v(" "),_("p",[v._v("如此迭代就可以获得整张真值表（状态转换表）")]),v._v(" "),_("p",[v._v("形式如下")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("初态")]),v._v(" "),_("th",[v._v("次态")]),v._v(" "),_("th",[v._v("输出")])])]),v._v(" "),_("tbody")]),v._v(" "),_("p",[v._v("或如下形式")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[v._v("CP")]),v._v("的顺序")]),v._v(" "),_("th",[_("code",[v._v("Q1*")])]),v._v(" "),_("th",[_("code",[v._v("Q2*")])]),v._v(" "),_("th",[_("code",[v._v("Q3*")])]),v._v(" "),_("th",[_("code",[v._v("Y")])])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("2")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("3")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("4")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("5")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("6")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("7")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])])])]),v._v(" "),_("h4",{attrs:{id:"状态转换图"}},[v._v("状态转换图")]),v._v(" "),_("p",[v._v("上述状态转换表其对应的状态转换图")]),v._v(" "),_("img",{attrs:{src:t(531)}}),v._v(" "),_("ul",[_("li",[v._v("圆圈表示电路的各个状态")]),v._v(" "),_("li",[v._v("箭头表示状态的转换方向")]),v._v(" "),_("li",[v._v("箭头上的标注为转台转换前的输入变量取值和该动作下的输出值，斜线上位输入变量取值，斜线下为输出值")])]),v._v(" "),_("h4",{attrs:{id:"时序图"}},[v._v("时序图")]),v._v(" "),_("p",[v._v("依旧对应上述的七进制加法器")]),v._v(" "),_("p",[v._v("为"),_("code",[v._v("JK")]),v._v("触发器，在下降沿发生变化")]),v._v(" "),_("img",{attrs:{src:t(532)}}),v._v(" "),_("p",[v._v("每遇到一个下降沿，"),_("code",[v._v("CP")]),v._v("的顺序加一")]),v._v(" "),_("h3",{attrs:{id:"异步时序逻辑电路分析"}},[v._v("异步时序逻辑电路分析")]),v._v(" "),_("blockquote",[_("p",[v._v("选学")])]),v._v(" "),_("p",[v._v("每次电路状态发生变化时，不是所有触发器都有时钟信号，有时钟信号的正常工作，没有的保持不变")]),v._v(" "),_("p",[_("code",[v._v("cp0")]),v._v("：无时钟信号到达")]),v._v(" "),_("p",[_("code",[v._v("cp1")]),v._v("：时钟信号下降沿到达")]),v._v(" "),_("p",[_("code",[v._v("cp2")]),v._v("：时钟信号上升沿到达")]),v._v(" "),_("h2",{attrs:{id:"常用时序逻辑电路"}},[v._v("常用时序逻辑电路")]),v._v(" "),_("h3",{attrs:{id:"寄存器和移位寄存器"}},[v._v("寄存器和移位寄存器")]),v._v(" "),_("h4",{attrs:{id:"寄存器"}},[v._v("寄存器")]),v._v(" "),_("blockquote",[_("p",[v._v("常用的时序逻辑电路，常用于各类数字系统和数字计算机")])]),v._v(" "),_("p",[v._v("用于寄存一组二值代码，其存储器由触发器组成，一个触发器能够储存1位二至代码，N个触发器组成的寄存器可以储存一组N位二值代码，共2^N种信号")]),v._v(" "),_("p",[v._v("寄存器的触发器只要求具有置1、置0的功能，因此"),_("code",[v._v("D锁存器、D触发器、同步RS触发器、RS主从触发器、主从JK触发器")]),v._v("都可以组成寄存器")]),v._v(" "),_("h4",{attrs:{id:"移位寄存器"}},[v._v("移位寄存器")]),v._v(" "),_("blockquote",[_("p",[v._v("？")])]),v._v(" "),_("p",[v._v("除了具有存储代码的功能，还有移位功能，移位功能是指寄存器里存储的代码能在移位脉冲的作用下依次左移或右移")]),v._v(" "),_("ul",[_("li",[v._v("实现数据的串行并行的转换")]),v._v(" "),_("li",[v._v("数值运算及数据处理")])]),v._v(" "),_("img",{attrs:{src:t(533)}}),v._v(" "),_("p",[v._v("双向移位寄存器"),_("code",[v._v("74LS194A")]),v._v("？？？")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("R(D)'")]),v._v(" "),_("th",[v._v("S1")]),v._v(" "),_("th",[v._v("S0")]),v._v(" "),_("th",[v._v("工作状态")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("置零")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("保持")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("右移")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("左移")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("并行输入")])])])]),v._v(" "),_("h3",{attrs:{id:"计数器"}},[v._v("计数器")]),v._v(" "),_("blockquote",[_("p",[v._v("重点")])]),v._v(" "),_("p",[v._v("用于统计脉冲"),_("code",[v._v("CP")]),v._v("的个数的电路")]),v._v(" "),_("ul",[_("li",[v._v("配合时钟周期使用可以当作计时器使用（时钟周期始终不变）")])]),v._v(" "),_("p",[v._v("分类：")]),v._v(" "),_("p",[v._v("按是否翻转分为")]),v._v(" "),_("ul",[_("li",[v._v("同步计数器")]),v._v(" "),_("li",[v._v("异步计数器")])]),v._v(" "),_("p",[v._v("按增减趋势分为")]),v._v(" "),_("ul",[_("li",[v._v("加法计数器")]),v._v(" "),_("li",[v._v("减法计数器")]),v._v(" "),_("li",[v._v("可逆计数器")])]),v._v(" "),_("p",[v._v("按数字编码方式分为")]),v._v(" "),_("ul",[_("li",[v._v("二进制计数器（最常用）")]),v._v(" "),_("li",[v._v("二-十进制计数器")]),v._v(" "),_("li",[v._v("循环码计数器")])]),v._v(" "),_("p",[v._v("按容量分")]),v._v(" "),_("ul",[_("li",[v._v("十进制计数器")]),v._v(" "),_("li",[v._v("十六进制计数器")])]),v._v(" "),_("h4",{attrs:{id:"同步计数器"}},[v._v("同步计数器")]),v._v(" "),_("blockquote",[_("p",[v._v("最简单，最经典")])]),v._v(" "),_("p",[v._v("编码方式上基本上分为二进制和十进制两种")]),v._v(" "),_("p",[v._v("能不能不用加法器，而是更简单的电路实现"),_("code",[v._v("+1")]),v._v("功能？")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v(" 1011011\n+      1\n—————————\n 1011100\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br")])]),_("p",[v._v("对于任意二进制数"),_("code",[v._v("+1")]),v._v("，被加数第"),_("code",[v._v("i")]),v._v("位状态改变的必要条件：第"),_("code",[v._v("i-1,i-2,...,1")]),v._v("位必须全是1")]),v._v(" "),_("ul",[_("li",[v._v("状态改变指"),_("code",[v._v("1->0,0->1")])])]),v._v(" "),_("p",[v._v("同步二进制计数器：")]),v._v(" "),_("p",[v._v("T触发器组成的八位二进制计数器")]),v._v(" "),_("p",[v._v("对于一个T触发器，每次"),_("code",[v._v("CP")]),v._v("信号达到时，以第"),_("code",[v._v("i")]),v._v("位为分界，右边的（包括"),_("code",[v._v("i")]),v._v("）接"),_("code",[v._v("T1=1")]),v._v("，进行翻转；左边的接"),_("code",[v._v("T2=0")]),v._v("，保持原状态")]),v._v(" "),_("ul",[_("li",[v._v("这样就实现了"),_("code",[v._v("+1")]),v._v("操作，而不是逐位相加进位")]),v._v(" "),_("li",[v._v("第一位每次"),_("code",[v._v("+1")]),v._v("均会发生翻转，所以第一位总接"),_("code",[v._v("T1=1")])])]),v._v(" "),_("p",[v._v("T触发器实现的同步计数器")]),v._v(" "),_("img",{attrs:{src:t(534)}}),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("计数顺序")]),v._v(" "),_("th",[_("code",[v._v("Q3")])]),v._v(" "),_("th",[_("code",[v._v("Q2")])]),v._v(" "),_("th",[_("code",[v._v("Q1")])]),v._v(" "),_("th",[_("code",[v._v("Q0")])]),v._v(" "),_("th",[v._v("对应十进制数")]),v._v(" "),_("th",[v._v("进位输出")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("2")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("2")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("3")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("3")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("4")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("4")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("5")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("5")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("6")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("6")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("7")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("7")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("8")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("8")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("9")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("9")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("10")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("10")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("11")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("11")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("12")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("12")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("13")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("13")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("14")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("14")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("15")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("15")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("16")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])])])]),v._v(" "),_("ul",[_("li",[v._v("利用第十六个计数脉冲（第十六个下降沿）到达C端的下降沿作为向更高位进位的输出信号")]),v._v(" "),_("li",[v._v("N位二进制计数器的容量位"),_("code",[v._v("2^N-1")])])]),v._v(" "),_("img",{attrs:{src:t(535)}}),v._v(" "),_("p",[v._v("对于计数器，其各位翻转的频率以2为倍数递减，因此也被称作分频器")]),v._v(" "),_("p",[_("code",[v._v("JK")]),v._v("触发器组成四位二进制计数器"),_("code",[v._v("74161")])]),v._v(" "),_("p",[v._v("功能表")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("CP")]),v._v(" "),_("th",[v._v("RD'")]),v._v(" "),_("th",[v._v("LD'")]),v._v(" "),_("th",[v._v("EP")]),v._v(" "),_("th",[v._v("ET")]),v._v(" "),_("th",[v._v("工作状态")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("X")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("置零")])]),v._v(" "),_("tr",[_("td",[v._v("上升沿")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("预置数")])]),v._v(" "),_("tr",[_("td",[v._v("X")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("保持")])]),v._v(" "),_("tr",[_("td",[v._v("X")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("保持（C=0）")])]),v._v(" "),_("tr",[_("td",[v._v("上升沿")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("计数")])])])]),v._v(" "),_("p",[_("code",[v._v("T'")]),v._v("触发器组成同步十六进制加法计数器")]),v._v(" "),_("p",[v._v("减法计数器：可以用加法计数器求反，但更繁琐，直接设计成减法逻辑"),_("code",[v._v("CC14526")])]),v._v(" "),_("ul",[_("li",[v._v("进位信号 ——> 借位信号")])]),v._v(" "),_("p",[v._v("可逆计数器："),_("code",[v._v("74LS191")]),v._v("单时钟加减法计数器")]),v._v(" "),_("ul",[_("li",[v._v("通过输入S‘实现加减法切换")])]),v._v(" "),_("p",[v._v("功能表")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[v._v("CP")])]),v._v(" "),_("th",[v._v("S'")]),v._v(" "),_("th",[v._v("LD'")]),v._v(" "),_("th",[v._v("U'/D")]),v._v(" "),_("th",[v._v("工作状态")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("X")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("保持")])]),v._v(" "),_("tr",[_("td",[v._v("X")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("预置数")])]),v._v(" "),_("tr",[_("td",[v._v("上升沿")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("加法计数")])]),v._v(" "),_("tr",[_("td",[v._v("上升沿")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("减法计数")])])])]),v._v(" "),_("p",[v._v("同步十进制计数器：")]),v._v(" "),_("p",[v._v("T触发器构成的同步十进制计数器")]),v._v(" "),_("img",{attrs:{src:t(536)}}),v._v(" "),_("p",[v._v("状态转换图")]),v._v(" "),_("ul",[_("li",[v._v("储存情况下不存在但理论上存在的状态（"),_("code",[v._v("10,11,12,13,14,15")]),v._v("）也要计算出来")])]),v._v(" "),_("img",{attrs:{src:t(537)}}),v._v(" "),_("p",[_("code",[v._v("JK")]),v._v("构成的同步十进制加法计数器"),_("code",[v._v("74160")])]),v._v(" "),_("p",[v._v("十进制减法计数器：")]),v._v(" "),_("img",{attrs:{src:t(538)}}),v._v(" "),_("p",[v._v("十进制减法计数器状态转换图：")]),v._v(" "),_("img",{attrs:{src:t(539)}}),v._v(" "),_("p",[v._v("异步计数器略，和同步计数器基本一致")]),v._v(" "),_("h4",{attrs:{id:"任意进制计数器的构成"}},[v._v("任意进制计数器的构成")]),v._v(" "),_("blockquote",[_("p",[v._v("重点")])]),v._v(" "),_("p",[v._v("假定已有N进制计数器，要得到M进制计数器，分为"),_("code",[v._v("M>N,M<N")]),v._v("两种情况")]),v._v(" "),_("h5",{attrs:{id:"置零、置数法"}},[v._v("置零、置数法")]),v._v(" "),_("p",[v._v("需求进制小于现有进制，如"),_("code",[v._v("16->12")])]),v._v(" "),_("ul",[_("li",[v._v("在N进制计数器得顺序计数过程中，设法使之跳跃N-M个状态，如跳过"),_("code",[v._v("12,13,14,15")]),v._v("四个状态，则可以从十六进制转到十二进制")])]),v._v(" "),_("p",[v._v("实现跳跃得方法：置零法、置数法")]),v._v(" "),_("p",[v._v("置零法，将要跳过的状态输出接到"),_("eq",[_("span",{staticClass:"katex"},[_("span",{staticClass:"katex-mathml"},[_("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[_("semantics",[_("mrow",[_("mover",{attrs:{accent:"true"}},[_("msub",[_("mi",[v._v("R")]),_("mi",[v._v("D")])],1),_("mo",{attrs:{stretchy:"true"}},[v._v("‾")])],1)],1),_("annotation",{attrs:{encoding:"application/x-tex"}},[v._v("\\overline{R_D}")])],1)],1)],1),_("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"base"},[_("span",{staticClass:"strut",staticStyle:{height:"1.0333em","vertical-align":"-0.15em"}}),_("span",{staticClass:"mord overline"},[_("span",{staticClass:"vlist-t vlist-t2"},[_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.8833em"}},[_("span",{staticStyle:{top:"-3em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),_("span",{staticClass:"mord"},[_("span",{staticClass:"mord"},[_("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[v._v("R")]),_("span",{staticClass:"msupsub"},[_("span",{staticClass:"vlist-t vlist-t2"},[_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[_("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),_("span",{staticClass:"sizing reset-size6 size3 mtight"},[_("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[v._v("D")])])])]),_("span",{staticClass:"vlist-s"},[v._v("​")])]),_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[_("span")])])])])])])]),_("span",{staticStyle:{top:"-3.8033em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),_("span",{staticClass:"overline-line",staticStyle:{"border-bottom-width":"0.04em"}})])]),_("span",{staticClass:"vlist-s"},[v._v("​")])]),_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[_("span")])])])])])])])]),v._v("端")],1),v._v(" "),_("ul",[_("li",[v._v("大概就是到"),_("code",[v._v("11")]),v._v("了之后，跳过"),_("code",[v._v("12,13,14,15")]),v._v("四个状态，直接置零")])]),v._v(" "),_("p",[v._v("使用置零法将十进制计数器74160接成6进制计数器")]),v._v(" "),_("img",{attrs:{src:t(540)}}),v._v(" "),_("p",[v._v("能够自启动：当遇到干扰在无效状态，在有限步能够回到主循环中，则称为能够自启动的电路")]),v._v(" "),_("p",[v._v("置零信号持续时间极短，容易导致电路误动作，如太短没有捕捉到，持续上升为"),_("code",[v._v("6")]),v._v("，我们常在G门输出端增加基本RS触发器（锁存器）增加指令信号作用时间")]),v._v(" "),_("ul",[_("li",[v._v("只要出现置零信号，就把这个信号存在RS触发器中直到下一个时钟信号到来")])]),v._v(" "),_("p",[v._v("置数法，将要跳过的状态输出接到"),_("eq",[_("span",{staticClass:"katex"},[_("span",{staticClass:"katex-mathml"},[_("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[_("semantics",[_("mrow",[_("mover",{attrs:{accent:"true"}},[_("mrow",[_("mi",[v._v("L")]),_("mi",[v._v("D")])],1),_("mo",{attrs:{stretchy:"true"}},[v._v("‾")])],1)],1),_("annotation",{attrs:{encoding:"application/x-tex"}},[v._v("\\overline{LD}")])],1)],1)],1),_("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"base"},[_("span",{staticClass:"strut",staticStyle:{height:"0.8833em"}}),_("span",{staticClass:"mord overline"},[_("span",{staticClass:"vlist-t"},[_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.8833em"}},[_("span",{staticStyle:{top:"-3em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),_("span",{staticClass:"mord"},[_("span",{staticClass:"mord mathnormal"},[v._v("L")]),_("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[v._v("D")])])]),_("span",{staticStyle:{top:"-3.8033em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),_("span",{staticClass:"overline-line",staticStyle:{"border-bottom-width":"0.04em"}})])])])])])])])])]),v._v("端")],1),v._v(" "),_("ul",[_("li",[v._v("置入一个数：置入0；置入最大值，如进入11时置入15")]),v._v(" "),_("li",[v._v("74160的置数是同步的，更可靠")]),v._v(" "),_("li",[v._v("相应速度要慢一点")])]),v._v(" "),_("p",[v._v("不需要接锁存器，一般来说推荐用置数法，更节省、更稳定")]),v._v(" "),_("h5",{attrs:{id:"并行、串行进位"}},[v._v("并行、串行进位")]),v._v(" "),_("p",[v._v("当目的进制位数高于当前计数器的进制")]),v._v(" "),_("ul",[_("li",[v._v("通过连接多片低进制位实现进制的提高")])]),v._v(" "),_("p",[v._v("并行进位方式")]),v._v(" "),_("p",[v._v("将十进制计数器74160串为十六进制计数器")]),v._v(" "),_("p",[v._v("串行进位方式")]),v._v(" "),_("h5",{attrs:{id:"整体置零、置数"}},[v._v("整体置零、置数")]),v._v(" "),_("p",[v._v("整体置零法将十进制提升为二十九进制")]),v._v(" "),_("ul",[_("li",[v._v("将十进制串成一百进制计数器")]),v._v(" "),_("li",[v._v("再通过置零法将一百进制降为二十九进制计数器")])]),v._v(" "),_("p",[v._v("整体置数法：与整体置零步骤差不多，只不过在降低进制时用的是置数法")]),v._v(" "),_("h4",{attrs:{id:"移位寄存器计数器"}},[v._v("移位寄存器计数器")]),v._v(" "),_("h5",{attrs:{id:"环形计数器"}},[v._v("环形计数器")]),v._v(" "),_("p",[v._v("环形计数器，记录时钟信号脉冲次数：")]),v._v(" "),_("img",{attrs:{src:t(541)}}),v._v(" "),_("p",[v._v("能自启动的环形计数器")]),v._v(" "),_("p",[v._v("状态转换图")]),v._v(" "),_("h5",{attrs:{id:"扭环形计数器"}},[v._v("扭环形计数器")]),v._v(" "),_("p",[v._v("提高了环形计数器状态利用率")]),v._v(" "),_("ul",[_("li",[v._v("同样无法自启动，存在无效循环")])]),v._v(" "),_("p",[v._v("能自启动的扭环形计数器")]),v._v(" "),_("img",{attrs:{src:t(542)}}),v._v(" "),_("h3",{attrs:{id:"顺序脉冲发生器"}},[v._v("顺序脉冲发生器")]),v._v(" "),_("blockquote",[_("p",[v._v("选学略")])]),v._v(" "),_("p",[v._v("用于产生一组在时间上有先后顺序的脉冲信号的电路")]),v._v(" "),_("p",[v._v("优点：电路结构简单，不必附加译码电路")]),v._v(" "),_("p",[v._v("缺点：使用较多触发器，并且需要自启动的反馈逻辑电路")]),v._v(" "),_("h3",{attrs:{id:"序列信号发生器"}},[v._v("序列信号发生器")]),v._v(" "),_("blockquote",[_("p",[v._v("选学略")])]),v._v(" "),_("p",[v._v("特定的串行数字信号称为序列信号，在电路中有时需要用到序列信号，自然序列信号发生器用于构造并输出序列信号")]),v._v(" "),_("h2",{attrs:{id:"时序逻辑电路设计方法"}},[v._v("时序逻辑电路设计方法")]),v._v(" "),_("blockquote",[_("p",[v._v("重难点")])]),v._v(" "),_("h3",{attrs:{id:"同步时序逻辑电路设计"}},[v._v("同步时序逻辑电路设计")]),v._v(" "),_("ul",[_("li",[v._v("逻辑抽象，得出电路的状态转换图或状态转换表（难点）")]),v._v(" "),_("li",[v._v("状态化简，消去多于的状态，得简化状态图")]),v._v(" "),_("li",[v._v("状态分配，又叫状态编码，用一组合适的二进制代码分配给各个状态")]),v._v(" "),_("li",[v._v("选定触发器类型，求出电路的状态方程、驱动方程和输出方程")]),v._v(" "),_("li",[v._v("根据方程式画出逻辑图（电路图）")]),v._v(" "),_("li",[v._v("检查电路是否能够自启动")])]),v._v(" "),_("p",[v._v("第一步是比较难的，其他步均基于第一步的正确性")]),v._v(" "),_("p",[v._v("举个栗子：")]),v._v(" "),_("p",[v._v("设计一个带有进位输出的十三进制计数器")]),v._v(" "),_("p",[v._v("对应状态转换表")]),v._v(" "),_("p",[v._v("通过卡诺图化简逻辑式")]),v._v(" "),_("p",[v._v("得到化简状态、输出方程")]),v._v(" "),_("p",[v._v("将驱动方程代入触发器的驱动方程")]),v._v(" "),_("p",[v._v("最后画出电路图")]),v._v(" "),_("img",{attrs:{src:t(543)}}),v._v(" "),_("p",[v._v("检查电路是否能够自启动，通过判断电路的状态转换表，若存在无效的循环，则无法自启动，需要进行改善")]),v._v(" "),_("ul",[_("li",[v._v("实际上功能已经完成了，这是为了保证电路的稳定运行")])]),v._v(" "),_("h3",{attrs:{id:"时序逻辑电路的自启动"}},[v._v("时序逻辑电路的自启动")]),v._v(" "),_("h3",{attrs:{id:"异步时序逻辑电路设计"}},[v._v("异步时序逻辑电路设计")]),v._v(" "),_("blockquote",[_("p",[v._v("选学略")])])])}),[],!1,null,null,null);_.default=d.exports},531:function(v,_,t){v.exports=t.p+"assets/img/image-20220530145753498.7b9c834e.png"},532:function(v,_,t){v.exports=t.p+"assets/img/image-20220530150637656.210a5a4d.png"},533:function(v,_,t){v.exports=t.p+"assets/img/image-20220530154826249.387fb86d.png"},534:function(v,_,t){v.exports=t.p+"assets/img/image-20220601140236494.cdc874ce.png"},535:function(v,_,t){v.exports=t.p+"assets/img/image-20220601141131964.a54288d6.png"},536:function(v,_,t){v.exports=t.p+"assets/img/image-20220601150853608.6e316918.png"},537:function(v,_,t){v.exports=t.p+"assets/img/image-20220601150920121.25da4849.png"},538:function(v,_,t){v.exports=t.p+"assets/img/image-20220601151655497.6b169c5a.png"},539:function(v,_,t){v.exports=t.p+"assets/img/image-20220601151542885.b6d1357c.png"},540:function(v,_,t){v.exports=t.p+"assets/img/image-20220623190956346.e3f3cbf4.png"},541:function(v,_,t){v.exports=t.p+"assets/img/20220623202437.480ea805.png"},542:function(v,_,t){v.exports=t.p+"assets/img/image-20220623203840767.43a90d7d.png"},543:function(v,_,t){v.exports=t.p+"assets/img/image-20220623212432584.c25323f6.png"}}]);