(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b68908e"],{"4d18":function(e,o,t){},"5a92":function(e,o,t){"use strict";t("4d18")},a358:function(e,o,t){"use strict";t.d(o,"a",(function(){return c})),t.d(o,"c",(function(){return a})),t.d(o,"b",(function(){return i}));var r=t("cff8"),n=t.n(r),l=t("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},a={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},i=(e,o)=>{const t=n.a.get("httpServiceConfig"),r=t.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=r+"/"+c,console.log("url:",c),Object(l["b"])({url:c,method:"post",data:o,params:{},timeout:6e4})}},acbf:function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app-base-test-api"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(o){return e.exec(1)}}},[e._v(" 点击 ")]),o("a-button",{on:{click:function(o){return e.exec2(1)}}},[e._v(" 点击2 ")])],1)],1)])},n=[function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 测试一些操作系统api ")])])}],l=t("a358"),c={data(){return{type:1}},methods:{exec(e){const o={id:e};this.$ipcInvoke(l["a"].test,o).then(e=>{console.log("res:",e)})},exec2(e){const o={id:e};Object(l["b"])(l["a"].test,o).then(e=>{console.log("res2:",e)})}}},a=c,i=(t("5a92"),t("2877")),p=Object(i["a"])(a,r,n,!1,null,"35735581",null);o["default"]=p.exports}}]);
//# sourceMappingURL=chunk-0b68908e.d10762b4.js.map