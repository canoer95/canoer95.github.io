(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1073:function(s,n,a){"use strict";a.r(n);var t=a(3),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"目的及原理"}},[s._v("目的及原理")]),s._v(" "),n("h3",{attrs:{id:"实验目的"}},[s._v("实验目的")]),s._v(" "),n("p",[s._v("了解8255芯片结构及编程方法。了解8255输入/输出实验方法")]),s._v(" "),n("p",[s._v("实验环境")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Tpc-zk-II")]),s._v("集成开发环境")]),s._v(" "),n("li",[s._v("微机原理与接口技术实验箱")])]),s._v(" "),n("h3",{attrs:{id:"实验原理"}},[s._v("实验原理")]),s._v(" "),n("p",[s._v("方式 0 输入输出")]),s._v(" "),n("p",[s._v("将实验的线路连接好后，编程，将8255的C口作为输入，输入信号由8个逻辑电平开关提供，A口作为输出，其内容由发光二极管来显示。")]),s._v(" "),n("p",[s._v("编程从8255C口输入数据，再从A口输出")]),s._v(" "),n("img",{attrs:{src:"E:\\Repo\\note\\Docs\\docs\\408\\organization\\interface\\assets\\image-20230420233958972.png"}}),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("接线")]),s._v(" "),n("th")])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("8255/JP8(PC7---PC0)")]),s._v(" "),n("td",[s._v("逻辑开关/JP1(K7---K0)")])]),s._v(" "),n("tr",[n("td",[s._v("8255/JP6(PA7---PA0)")]),s._v(" "),n("td",[s._v("LED显示/JP2(L7---L0)")])]),s._v(" "),n("tr",[n("td",[s._v("8255/CS")]),s._v(" "),n("td",[s._v("I/O译码/Y1(288H---28FH)")])])])]),s._v(" "),n("p",[s._v("方式一选通实验")]),s._v(" "),n("p",[s._v("实验电路如图所示，8255B口PB2---PB0接逻辑电平开关K2～K0，8255A口接LED显示电路L0～L7,PC2(/STBB)与单脉冲的负脉冲端相连。编程按下单脉冲按键产生一个负脉冲，输入到PC2，用发光二极管LEDi亮，显示K2---K0开关的状态")]),s._v(" "),n("img",{attrs:{src:"E:\\Repo\\note\\Docs\\docs\\408\\organization\\interface\\assets\\image-20230420234154096.png"}}),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("接线")]),s._v(" "),n("th")])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("8255/PB2---PB0")]),s._v(" "),n("td",[s._v("逻辑开关/K2---K0")])]),s._v(" "),n("tr",[n("td",[s._v("8255/JP6(PA7---PA0)")]),s._v(" "),n("td",[s._v("LED显示/JP2(L7---L0)")])]),s._v(" "),n("tr",[n("td",[s._v("8255/PC2")]),s._v(" "),n("td",[s._v("单脉冲/负脉冲")])]),s._v(" "),n("tr",[n("td",[s._v("8255/CS")]),s._v(" "),n("td",[s._v("I/O译码/Y1(288H---28FH)")])])])]),s._v(" "),n("p",[s._v("方式1中断输入实验")]),s._v(" "),n("p",[s._v("按图8255方式1输入电路，连好线路。编程每按一次单脉冲按钮产生一个正脉冲使8255产生一次中断请求，让CPU进行一次中断服务:读取逻辑电平开关预置的ASCII码，在屏幕上显示其对应的字符，显示”NEUQ2022”")]),s._v(" "),n("img",{attrs:{src:"E:\\Repo\\note\\Docs\\docs\\408\\organization\\interface\\assets\\image-20230420234514891.png"}}),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("接线")]),s._v(" "),n("th")])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("8255/JP6(PA7---PA0)")]),s._v(" "),n("td",[s._v("逻辑开关/JP1(K7---K0)")])]),s._v(" "),n("tr",[n("td",[s._v("8255/PC4")]),s._v(" "),n("td",[s._v("单脉冲/正脉冲")])]),s._v(" "),n("tr",[n("td",[s._v("8255/PC3")]),s._v(" "),n("td",[s._v("总线区/SIRQx")])]),s._v(" "),n("tr",[n("td",[s._v("8255/CS")]),s._v(" "),n("td",[s._v("I/O译码/Y1(288H---28FH)")])])])]),s._v(" "),n("h2",{attrs:{id:"实验步骤及分析"}},[s._v("实验步骤及分析")]),s._v(" "),n("h3",{attrs:{id:"方式0输入输出"}},[s._v("方式0输入输出")]),s._v(" "),n("p",[s._v("汇编代码")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data segment\nioa equ 288h\niob equ 289h\nioc equ 28ah\niok equ 28bh\ndata ends\ncode segment\nassume cs:code,ds:data\nstart:\n    mov ax,data\n    mov ds,ax\n    mov dx,iok\n    mov al,89h\n    out dx,al\n    s:\n    mov dx,ioc\n    in al,dx\n    mov dx,ioa\n    out dx,al\n    mov ah,1\n    int 16h\n    jz s\n    mov ah,4ch\n    int 21h\ncode ends\nend start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("连接实验箱执行代码，实验现象如下：每个逻辑电平开关对应一个 IED 灯，当打开逻辑电平开关，其对应的 LED 灯将亮起")]),s._v(" "),n("h3",{attrs:{id:"方式1选通实验"}},[s._v("方式1选通实验")]),s._v(" "),n("p",[s._v("汇编代码")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data segment\nioa equ 288h\niob equ 289h\nioc equ 28ah\niok equ 28bh\ndata ends\ncode segment\nassume cs:code,ds:data\nstart:\n    mov ax,data\n    mov ds,ax\n    mov dx,offset int3\n    mov ax,250bh\n    int 21h\n    in al,21h\n    and al,0f7h\n    out 21h,al\n    mov dx,iok\n    mov al,0b0h\n    out dx,al\n    mov al,9\n    out dx,al\nll: jmp ll\nint3:   push ax\n        push dx\n        push ds\n        mov ax,data\n        mov ds,ax\n        mov dx,ioa\n        in al,dx\n        mov dl,al\n        mov ah,2\n        int 21h\n        mov al,20h\n        out 20h,al\n        pop ds\n        pop dx\n        pop ax\n        iret\ncode ends\nend start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("p",[s._v("连接实验箱执行代码，实验现象如下：逻辑开关代表三位二进制数，发送脉冲信号后逻辑开关代表的十进制数对应的 LED 灯泡会点亮，显示输入的二进制数字")]),s._v(" "),n("h3",{attrs:{id:"方式1中断输入实验"}},[s._v("方式1中断输入实验")]),s._v(" "),n("p",[s._v("汇编代码")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data segment\nioa equ 288h\niob equ 289h\nioc equ 28ah\niok equ 28bh\nt1 db 1,2,4,8,16,32,64,128\ndata ends\ncode segment\nassume cs:code,ds:data\nstart:\n    mov ax,data\n    mov ds,ax\n    mov dx,iok\n    mov al,0afh\n    out dx,al\n    mov al,4\n    out dx,al\n    readb:\n    mov dx,ioc\n    in al,dx\n    test al,00000010b\n    jz readb\n    mov dx,iob\n    in al,dx\n    and al,00000111b\n    mov bx,offset t1\n    xlat\n    mov dx,ioa\n    out dx,al\n    mov ah,1\n    int 16h\n    jz readb\n    mov ah,4ch\n    int 21h\ncode ends\nend start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("连接实验箱执行代码，实验现象如下")]),s._v(" "),n("img",{attrs:{src:"E:\\Repo\\note\\Docs\\docs\\408\\organization\\interface\\assets\\io2.jpg"}})])}),[],!1,null,null,null);n.default=e.exports}}]);