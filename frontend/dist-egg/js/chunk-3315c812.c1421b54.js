(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3315c812"],{"03e3":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-notification"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.sendNotification(0)}}},[e._v("默认")]),t("a-button",{on:{click:function(t){return e.sendNotification(1)}}},[e._v("发出提示音")]),t("a-button",{on:{click:function(t){return e.sendNotification(2)}}},[e._v("点击通知触发事件")]),t("a-button",{on:{click:function(t){return e.sendNotification(3)}}},[e._v("关闭通知触发事件")])],1)],1)])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 弹出桌面通知 ")])])}],r=o("a358"),i={data(){return{views:[{type:"main",title:"通知标题",subtitle:"副标题",body:"这是通知内容-默认",silent:!0},{type:"main",title:"提示音",subtitle:"副标题-提示音",body:"这是通知内容-提示音",silent:!1},{type:"main",title:"点击通知事件",subtitle:"副标题-点击通知事件",body:"这是通知内容-点击通知事件",clickEvent:!0},{type:"main",title:"关闭通知事件",subtitle:"副标题-关闭通知事件",body:"这是通知内容-点击通知事件",closeEvent:!0}]}},mounted(){this.init()},methods:{init(){const e=this;this.$ipc.removeAllListeners(r["a"].sendNotification),this.$ipc.on(r["a"].sendNotification,(t,o)=>{"[object Object]"==Object.prototype.toString.call(o)&&e.$message.info(o.msg)})},sendNotification(e){this.$ipc.send(r["a"].sendNotification,this.views[e])}}},c=i,a=(o("71c5"),o("2877")),s=Object(a["a"])(c,n,l,!1,null,"2a527e1e",null);t["default"]=s.exports},"6d42":function(e,t,o){},"71c5":function(e,t,o){"use strict";o("6d42")},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"c",(function(){return c})),o.d(t,"b",(function(){return a}));var n=o("cff8"),l=o.n(n),r=o("b775");const i={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},c={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},a=(e,t)=>{const o=l.a.get("httpServiceConfig"),n=o.server||"http://127.0.0.1:7071";let i=e.split(".").join("/");return i=n+"/"+i,console.log("url:",i),Object(r["b"])({url:i,method:"post",data:t,params:{},timeout:6e4})}}}]);
//# sourceMappingURL=chunk-3315c812.c1421b54.js.map