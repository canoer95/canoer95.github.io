(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1104:function(t,v,s){"use strict";s.r(v);var _=s(0),n=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("img",{attrs:{src:s(558)}}),t._v(" "),v("img",{attrs:{src:s(559)}}),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("center",[t._v("学院")])],1),t._v(" "),v("th",[v("center",[t._v("计算机与通信工程学院")])],1)])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("center",[v("strong",[t._v("专业")])])],1),t._v(" "),v("td",[v("center",[v("strong",[t._v("计算机科学与技术")])])],1)]),t._v(" "),v("tr",[v("td",[v("center",[v("strong",[t._v("班级号")])])],1),t._v(" "),v("td",[v("center",[v("strong",[t._v("200523")])])],1)]),t._v(" "),v("tr",[v("td",[v("center",[v("strong",[t._v("学号")])])],1),t._v(" "),v("td",[v("center",[v("strong",[t._v("202012143")])])],1)]),t._v(" "),v("tr",[v("td",[v("center",[v("strong",[t._v("姓名")])])],1),t._v(" "),v("td",[v("center",[v("strong",[t._v("熊舟桐")])])],1)])])]),t._v(" "),v("h2",{attrs:{id:"目的及原理"}},[t._v("目的及原理")]),t._v(" "),v("h3",{attrs:{id:"实验目的"}},[t._v("实验目的")]),t._v(" "),v("p",[t._v("掌握PC机中断处理系统的基本原理")]),t._v(" "),v("p",[t._v("学会编写中断服务程序")]),t._v(" "),v("p",[t._v("实验电路如图，直接用手动产单脉冲作为中断请求信号（只需连接一根导线），要求每按一次开关产生一次中断，在屏幕上显示"),v("code",[t._v("NEUQ 2023!If Winter comes,can Spring be far behind?")])]),t._v(" "),v("img",{attrs:{src:s(560)}}),t._v(" "),v("p",[t._v("实验环境")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("Tpc-zk-II")]),t._v("集成开发环境")]),t._v(" "),v("li",[t._v("微机原理与接口技术实验箱")])]),t._v(" "),v("h3",{attrs:{id:"实验原理"}},[t._v("实验原理")]),t._v(" "),v("p",[t._v("系统上电时，ROM BIOS对8259A的主片和从片要执行初始化命令、惊醒初始化操作")]),t._v(" "),v("img",{attrs:{src:s(561)}}),t._v(" "),v("p",[t._v("中断向量和中断向量表")]),t._v(" "),v("img",{attrs:{src:s(562)}}),t._v(" "),v("p",[t._v("CPU 获取中断类型码的方法")]),t._v(" "),v("ul",[v("li",[t._v("CPU内部中断时，由硬件电路自动提供")]),t._v(" "),v("li",[t._v("软中断INT n在指令的代码中提供")]),t._v(" "),v("li",[t._v("可屏蔽的外中断INTR通过硬件（8259A）提供")])]),t._v(" "),v("p",[t._v("对于 PC/AT 及 286 以上微机内又扩展了一片 8259 中断控制，IRQ2 用于两片 8259 之间级连，对外可以提供 16 个中断源")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("中断源")]),t._v(" "),v("th",[t._v("中断类型号")]),t._v(" "),v("th",[t._v("中断功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("IRQ0")]),t._v(" "),v("td",[t._v("08H")]),t._v(" "),v("td",[t._v("时钟")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ1")]),t._v(" "),v("td",[t._v("09H")]),t._v(" "),v("td",[t._v("键盘")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ2")]),t._v(" "),v("td",[t._v("0AH")]),t._v(" "),v("td",[t._v("保留")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ3")]),t._v(" "),v("td",[t._v("0BH")]),t._v(" "),v("td",[t._v("串行口2")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ4")]),t._v(" "),v("td",[t._v("0CH")]),t._v(" "),v("td",[t._v("串行口1")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ5")]),t._v(" "),v("td",[t._v("0DH")]),t._v(" "),v("td",[t._v("硬盘")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ6")]),t._v(" "),v("td",[t._v("0EH")]),t._v(" "),v("td",[t._v("软盘")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ7")]),t._v(" "),v("td",[t._v("0FH")]),t._v(" "),v("td",[t._v("并行打印机")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ8")]),t._v(" "),v("td",[t._v("70H")]),t._v(" "),v("td",[t._v("实时时钟")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ9")]),t._v(" "),v("td",[t._v("71H")]),t._v(" "),v("td",[t._v("用户中断")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ10")]),t._v(" "),v("td",[t._v("72H")]),t._v(" "),v("td",[t._v("保留")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ11")]),t._v(" "),v("td",[t._v("73H")]),t._v(" "),v("td",[t._v("保留")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ12")]),t._v(" "),v("td",[t._v("74H")]),t._v(" "),v("td",[t._v("保留")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ13")]),t._v(" "),v("td",[t._v("75H")]),t._v(" "),v("td",[t._v("协处理器")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ14")]),t._v(" "),v("td",[t._v("76H")]),t._v(" "),v("td",[t._v("硬盘")])]),t._v(" "),v("tr",[v("td",[t._v("IRQ15")]),t._v(" "),v("td",[t._v("77H")]),t._v(" "),v("td",[t._v("保留")])])])]),t._v(" "),v("h2",{attrs:{id:"实验步骤及分析"}},[t._v("实验步骤及分析")]),t._v(" "),v("p",[t._v("1、连接仪器")]),t._v(" "),v("p",[t._v("插上实验箱电源，"),v("code",[t._v("USB")]),t._v("接口连接主机，连接实验箱"),v("code",[t._v("总线/MIRQx")]),t._v("和"),v("code",[t._v("单脉冲1/正脉冲")]),t._v("，开启实验箱电源，在"),v("code",[t._v("Tpc-zk-II集成开发环境")]),t._v("中进行硬件检测")]),t._v(" "),v("p",[t._v("2、编写汇编代码")]),t._v(" "),v("p",[t._v("experiment_one.asm")]),t._v(" "),v("div",{staticClass:"language-assembly line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("data segment\n    info db 'NEUQ 2023!if Winter comes,can Spring be far behind?', 0ah, 0ah, '$'\ndata ends\ncode segment\nassume cs:code, ds:data\nstart:\n    mov ax,cs\n    mov ds,ax\n    mov dx,offset int3\n    mov ah,25h\n    mov al,0bh\n    int 21h\n    in al,21h\n    and al,0f7h\n    out 21h,al\nhere:jmp here\nint3 proc\n    push ax\n    push ds\n    push dx\n    sti\n    mov ax,data\n    mov ds,ax\n    mov dx,offset info\n    mov ah,9\n    int 21h\n    mov al,20h\n    out 20h,al\n    cli\n    pop dx\n    pop ds\n    pop ax\n    iret\nint3 endp\ncode ends\nend start\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br"),v("span",{staticClass:"line-number"},[t._v("17")]),v("br"),v("span",{staticClass:"line-number"},[t._v("18")]),v("br"),v("span",{staticClass:"line-number"},[t._v("19")]),v("br"),v("span",{staticClass:"line-number"},[t._v("20")]),v("br"),v("span",{staticClass:"line-number"},[t._v("21")]),v("br"),v("span",{staticClass:"line-number"},[t._v("22")]),v("br"),v("span",{staticClass:"line-number"},[t._v("23")]),v("br"),v("span",{staticClass:"line-number"},[t._v("24")]),v("br"),v("span",{staticClass:"line-number"},[t._v("25")]),v("br"),v("span",{staticClass:"line-number"},[t._v("26")]),v("br"),v("span",{staticClass:"line-number"},[t._v("27")]),v("br"),v("span",{staticClass:"line-number"},[t._v("28")]),v("br"),v("span",{staticClass:"line-number"},[t._v("29")]),v("br"),v("span",{staticClass:"line-number"},[t._v("30")]),v("br"),v("span",{staticClass:"line-number"},[t._v("31")]),v("br"),v("span",{staticClass:"line-number"},[t._v("32")]),v("br"),v("span",{staticClass:"line-number"},[t._v("33")]),v("br"),v("span",{staticClass:"line-number"},[t._v("34")]),v("br"),v("span",{staticClass:"line-number"},[t._v("35")]),v("br"),v("span",{staticClass:"line-number"},[t._v("36")]),v("br")])]),v("p",[t._v("编译运行")]),t._v(" "),v("p",[t._v("3、实验结果")]),t._v(" "),v("p",[t._v("每次按下单脉冲开关将在屏幕上显示")]),t._v(" "),v("img",{attrs:{src:s(563)}}),t._v(" "),v("h2",{attrs:{id:"实验心得"}},[t._v("实验心得")]),t._v(" "),v("p",[t._v("事先检查各种插线是否稳固，如"),v("code",[t._v("USB")]),t._v("接口，电路板是否插稳（会亮灯指示），实验前在"),v("code",[t._v("IDE")]),t._v("中不要少硬件检测这一步骤，"),v("code",[t._v("IDE")]),t._v("对于汇编代码的报错详细到行，认真仔细检查即可")])])}),[],!1,null,null,null);v.default=n.exports},558:function(t,v,s){t.exports=s.p+"assets/img/logo.f9ade9c2.png"},559:function(t,v,s){t.exports=s.p+"assets/img/name.8687943e.png"},560:function(t,v,s){t.exports=s.p+"assets/img/image-20230329131817840.99ad9a5d.png"},561:function(t,v,s){t.exports=s.p+"assets/img/image-20230329131355139.da00633d.png"},562:function(t,v,s){t.exports=s.p+"assets/img/image-20230329131424464.5781d568.png"},563:function(t,v,s){t.exports=s.p+"assets/img/experiment_one.1f804c29.png"}}]);