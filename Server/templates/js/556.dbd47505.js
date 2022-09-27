"use strict";(globalThis["webpackChunksyseye"]=globalThis["webpackChunksyseye"]||[]).push([[556],{6556:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Z});var s=a(3673),i=a(2323);const o={class:"q-gutter-md q-mb-sm q-pa-lg"},l={class:"row q-col-gutter-sm"},n={class:"text-h6"},r=(0,s.Uk)(" 由于python+sqlite数据库作为后端,理论上最高支持的主机数量为50. "),c={class:"text-subtitle2"},h={ref:"main_draw",style:{width:"100%",height:"600px"}};function m(t,e,a,m,u,d){const p=(0,s.up)("q-icon"),w=(0,s.up)("q-item-section"),g=(0,s.up)("q-item-label"),_=(0,s.up)("q-item"),b=(0,s.up)("q-card-section"),f=(0,s.up)("q-card"),v=(0,s.up)("q-banner"),y=(0,s.up)("q-popup-proxy");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",null,[(0,s.Wm)(f,{class:"bg-transparent no-shadow no-border"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"q-pa-none"},{default:(0,s.w5)((()=>[(0,s._)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.Threatitems,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"col-md-3 col-sm-12 col-xs-12"},[(0,s.Wm)(_,{style:(0,i.j5)(`background-color: ${t.color1}`),class:"q-pa-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{side:"",style:(0,i.j5)(`background-color: ${t.color2}`),class:"q-pa-lg q-mr-none text-white"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{name:t.icon,color:"white",size:"24px"},null,8,["name"])])),_:2},1032,["style"]),(0,s.Wm)(w,{class:"q-pa-md q-ml-none text-white"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"text-white text-h6 text-weight-bolder"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1024),(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["style"])])))),128))])])),_:1})])),_:1})]),(0,s.Wm)(f,{class:"no-shadow",style:{background:"rbg(255,255,255)"}},{default:(0,s.w5)((()=>[(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Uk)(" 主机数量: "+(0,i.zw)(t.threatStatistics.host_num)+"/50 ",1),(0,s.Wm)(p,{name:"info",class:"text-brown cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{"transition-show":"flip-up","transition-hide":"flip-down"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{class:"bg-brown text-white"},{avatar:(0,s.w5)((()=>[(0,s.Wm)(p,{name:"lightbulb"})])),default:(0,s.w5)((()=>[r])),_:1})])),_:1})])),_:1})]),(0,s._)("div",c,"最近日志数量: "+(0,i.zw)(t.threatStatistics.all_log_num),1)])),_:1}),(0,s.Wm)(b,{class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s._)("div",h," 1 ",512)])),_:1})])),_:1})])}var u=a(52),d=a.n(u),p=a(2256);const w=(0,s.aZ)({name:"Dashboard",data(){return{Threatitems:[{title:"发现的威胁",icon:"remove_red_eye",value:"200",color1:"#5064b5",color2:"#3e51b5"},{title:"确认的威胁",icon:"flash_on",value:"500",color1:"#f37169",color2:"#f34636"},{title:"忽略的威胁",icon:"texture",value:"50",color1:"#ea6a7f",color2:"#ea4b64"},{title:"进行中的威胁",icon:"bar_chart",value:"1020",color1:"#a270b1",color2:"#9f52b1"}],threatStatistics:{all:1,confirm:0,ingore:1,working:0,host_list:{},host_num:10,all_log_num:647}}},methods:{get_threatStatistics(){d().get("/api/v1/get/threat_statistics",{"Content-Type":"application/json"}).then((t=>{const e=t.data;e.data&&(this.threatStatistics=e.data,this.threatStatistics.host_num=Object.keys(this.threatStatistics.host_list).length,this.Threatitems[0].value=this.threatStatistics.all,this.Threatitems[1].value=this.threatStatistics.confirm,this.Threatitems[2].value=this.threatStatistics.ingore,this.Threatitems[3].value=this.threatStatistics.working,console.log(this.threatStatistics),this.draw())}))},draw(){const t=[],e=[];for(const o in this.threatStatistics.host_list)t.push(o),e.push({name:o,type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:this.threatStatistics.host_list[o].log_num});const a=this.$refs.main_draw,s=p.S1(a),i={title:{text:"最近十分钟日志量"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:t},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["10min","9min","8min","7min","6min","5min","4min","3min","2min","1min"]}],yAxis:[{type:"value"}],series:e};s.setOption(i),setTimeout((()=>{s.resize()}),1e3)}},mounted(){this.get_threatStatistics(),setInterval((()=>{this.get_threatStatistics()}),1e4)}});var g=a(4260),_=a(151),b=a(5589),f=a(3414),v=a(2035),y=a(4554),x=a(2350),q=a(3944),S=a(5607),k=a(7518),W=a.n(k);const T=(0,g.Z)(w,[["render",m]]),Z=T;W()(w,"components",{QCard:_.Z,QCardSection:b.Z,QItem:f.Z,QItemSection:v.Z,QIcon:y.Z,QItemLabel:x.Z,QPopupProxy:q.Z,QBanner:S.Z})}}]);