(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c99940f"],{"8fa9":function(e,a,t){},a358:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return s})),t.d(a,"b",(function(){return c}));var o=t("cff8"),n=t.n(o),l=t("b775");const r={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},s={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},c=(e,a)=>{const t=n.a.get("httpServiceConfig"),o=t.server||"http://127.0.0.1:7071";let r=e.split(".").join("/");return r=o+"/"+r,console.log("url:",r),Object(l["b"])({url:r,method:"post",data:a,params:{},timeout:6e4})}},c29e:function(e,a,t){"use strict";t("8fa9")},e091:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app-base-db"}},[e._m(0),a("div",{staticClass:"one-block-2"},[a("a-row",[a("a-col",{attrs:{span:8}},[e._v(" • 小数据量: 0~100M(单库) ")]),a("a-col",{attrs:{span:8}},[e._v(" • json数据库 ")]),a("a-col",{attrs:{span:8}},[e._v(" • 兼容lodash语法 ")])],1)],1),e._m(1),a("div",{staticClass:"one-block-2"},[a("a-row",[a("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.all_list)+" ")])],1)],1),e._m(2),a("div",{staticClass:"one-block-2"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-input",{attrs:{value:e.name,"addon-before":"姓名"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})],1),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}},[a("a-input",{attrs:{value:e.age,"addon-before":"年龄"},model:{value:e.age,callback:function(a){e.age=a},expression:"age"}})],1),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}},[a("a-button",{on:{click:function(a){return e.dbOperation("add")}}},[e._v(" 添加 ")])],1)],1)],1),e._m(3),a("div",{staticClass:"one-block-2"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-input",{attrs:{value:e.search_age,"addon-before":"年龄"},model:{value:e.search_age,callback:function(a){e.search_age=a},expression:"search_age"}})],1),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}}),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}},[a("a-button",{on:{click:function(a){return e.dbOperation("get")}}},[e._v(" 查找 ")])],1)],1),a("a-row",[a("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.userList)+" ")])],1)],1),e._m(4),a("div",{staticClass:"one-block-2"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-input",{attrs:{value:e.update_name,"addon-before":"姓名"},model:{value:e.update_name,callback:function(a){e.update_name=a},expression:"update_name"}})],1),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}},[a("a-input",{attrs:{value:e.update_age,"addon-before":"年龄"},model:{value:e.update_age,callback:function(a){e.update_age=a},expression:"update_age"}})],1),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}},[a("a-button",{on:{click:function(a){return e.dbOperation("update")}}},[e._v(" 更新 ")])],1)],1)],1),e._m(5),a("div",{staticClass:"one-block-2"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-input",{attrs:{value:e.delete_name,"addon-before":"姓名"},model:{value:e.delete_name,callback:function(a){e.delete_name=a},expression:"delete_name"}})],1),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}}),a("a-col",{attrs:{span:3}}),a("a-col",{attrs:{span:6}},[a("a-button",{on:{click:function(a){return e.dbOperation("del")}}},[e._v(" 删除 ")])],1)],1)],1)])},n=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 1. LowDB本地数据库 ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 2. 测试数据 ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 3. 添加数据 ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 4. 获取数据 ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 5. 修改数据 ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 6. 删除数据 ")])])}],l=t("a358"),r={data(){return{name:"张三",age:10,userList:["空"],search_age:10,update_name:"张三",update_age:21,delete_name:"张三",all_list:["空"]}},mounted(){this.getAllTestData()},methods:{getAllTestData(){const e=this,a={action:"all"};this.$ipcInvoke(l["a"].dbOperation,a).then(a=>{if(console.log("res:",a),0==a.all_list.length)return!1;e.all_list=a.all_list})},dbOperation(e){const a=this,t={action:e,info:{name:this.name,age:parseInt(this.age)},search_age:parseInt(this.search_age),update_name:this.update_name,update_age:parseInt(this.update_age),delete_name:this.delete_name};"add"==e&&0==this.name.length&&a.$message.error("请填写数据"),this.$ipcInvoke(l["a"].dbOperation,t).then(t=>{if(console.log("res:",t),"get"==e){if(0==t.result.length)return void a.$message.error("没有数据");a.userList=t.result}0!=t.all_list.length?(a.all_list=t.all_list,a.$message.success("success")):a.all_list=["空"]})}}},s=r,c=(t("c29e"),t("2877")),i=Object(c["a"])(s,o,n,!1,null,"4879ab02",null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-1c99940f.5e2bc601.js.map