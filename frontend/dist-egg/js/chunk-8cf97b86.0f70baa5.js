(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8cf97b86"],{"97a5":function(e,o,t){},"9c4e":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app-base-subwindow-ipc"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:e.handleInvoke}},[e._v("发送 - 回调")]),e._v(" 结果："+e._s(e.message1)+" ")],1),o("p"),o("a-space",[o("a-button",{on:{click:e.handleInvoke2}},[e._v("发送 - async/await")]),e._v(" 结果："+e._s(e.message2)+" ")],1)],1),e._m(1),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:e.handleSendSync}},[e._v("同步消息")]),e._v(" 结果："+e._s(e.message3)+" ")],1)],1),e._m(2),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:e.sendMsgStart}},[e._v("开始")]),o("a-button",{on:{click:e.sendMsgStop}},[e._v("结束")]),e._v(" 结果："+e._s(e.messageString)+" ")],1)],1),e._m(3),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(o){return e.sendTosubWindow()}}},[e._v("向主窗口发消息")])],1)],1)])},s=[function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 发送异步消息 ")])])},function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 2. 同步消息（不推荐，阻塞执行） ")])])},function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 3. 长消息： 服务端持续向前端页面发消息 ")])])},function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 4. 多窗口通信：窗口之间互相通信 ")])])}],c=t("a358"),a={data(){return{messageString:"",message1:"",message2:"",message3:"",mainWCid:0}},mounted(){this.init()},methods:{init(){const e=this;this.$ipc.removeAllListeners(c["a"].ipcSendMsg),this.$ipc.on(c["a"].ipcSendMsg,(o,t)=>{console.log("[ipcRenderer] [socketMsgStart] result:",t),e.messageString=t,o.sender.send(c["a"].hello,"electron-egg")}),this.$ipc.removeAllListeners(c["c"].window1ToWindow2),this.$ipc.on(c["c"].window1ToWindow2,(e,o)=>{this.$message.info(o)})},sendMsgStart(){const e={type:"start",content:"开始"};this.$ipc.send(c["a"].ipcSendMsg,e)},sendMsgStop(){const e={type:"end",content:""};this.$ipc.send(c["a"].ipcSendMsg,e)},handleInvoke(){const e=this;this.$ipcInvoke(c["a"].ipcInvokeMsg,"异步-回调").then(o=>{console.log("r:",o),e.message1=o})},async handleInvoke2(){const e=await this.$ipcInvoke(c["a"].ipcInvokeMsg,"异步");console.log("msg:",e),this.message2=e},handleSendSync(){const e=this.$ipcSendSync(c["a"].ipcSendSyncMsg,"同步");this.message3=e},sendTosubWindow(){this.$ipcInvoke(c["a"].getWCid,"main").then(e=>{this.mainWCid=e,this.$ipc.sendTo(this.mainWCid,c["c"].window2ToWindow1,"窗口2 通过 sendTo 给主窗口发送消息")})}}},l=a,i=(t("c521"),t("2877")),r=Object(i["a"])(l,n,s,!1,null,"e5c1dc38",null);o["default"]=r.exports},a358:function(e,o,t){"use strict";t.d(o,"a",(function(){return a})),t.d(o,"c",(function(){return l})),t.d(o,"b",(function(){return i}));var n=t("cff8"),s=t.n(n),c=t("b775");const a={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},l={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},i=(e,o)=>{const t=s.a.get("httpServiceConfig"),n=t.server||"http://127.0.0.1:7071";let a=e.split(".").join("/");return a=n+"/"+a,console.log("url:",a),Object(c["b"])({url:a,method:"post",data:o,params:{},timeout:6e4})}},c521:function(e,o,t){"use strict";t("97a5")}}]);
//# sourceMappingURL=chunk-8cf97b86.0f70baa5.js.map