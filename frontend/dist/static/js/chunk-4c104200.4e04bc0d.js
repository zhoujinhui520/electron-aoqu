(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c104200"],{"083a":function(e,t,a){"use strict";var i=a("0d51"),l=TypeError;e.exports=function(e,t){if(!delete e[t])throw l("Cannot delete property "+i(t)+" of "+i(e))}},6726:function(e,t,a){"use strict";a("de26")},"802e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"open_gone_settings-container"},[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",{staticClass:"open_gone_settings-text"},[e._v("开区设置")]),a("el-button",{staticStyle:{width:"86px"},attrs:{type:"primary"}},[e._v("保存")])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"open_gone_settings-task"},[a("div",{staticStyle:{"margin-left":"20px",display:"flex","align-items":"center"}},[a("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("自动生成")]),a("span",{staticStyle:{"font-size":"13px","margin-left":"40px"}},[e._v("生成时间:")]),a("el-time-picker",{attrs:{placeholder:"00:00"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("el-tooltip",{staticStyle:{"margin-left":"16px"},attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 生成明日任务的时 "),a("br"),e._v(" 间。 ")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1),a("div",{staticStyle:{"margin-right":"20px"}},[a("el-button",{staticClass:"AdvancedSetup",attrs:{loading:e.InstallIoaDing},on:{click:function(t){return e.AdvancedStudy()}}},[e._v("高级设置")])],1)])])],1),a("el-row",{staticStyle:{"margin-top":"26px",background:"#f4f5fa"}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"open_gone_settings-function"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"开区设置",name:"OpenZoneSetting"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"open_gone_settings_table"},[a("p",{staticClass:"open_gone_settings_table_p"},[e._v("公告设置")]),a("div",{staticClass:"open_gone_settings_table_notice"},[a("div",{staticClass:"open_gone_settings_table_content"},[a("span",{staticStyle:{"margin-left":"0"}},[e._v("内容:")]),a("el-input",{staticStyle:{width:"318px","margin-left":"20px"},model:{value:e.OpenGone,callback:function(t){e.OpenGone=t},expression:"OpenGone"}}),a("span",[e._v("正式开区")]),a("el-input",{staticStyle:{width:"80px"},attrs:{placeholder:""},model:{value:e.OpeningMinutes,callback:function(t){e.OpeningMinutes=t},expression:"OpeningMinutes"}}),a("span",[e._v("分钟,")]),a("span",[e._v("每隔")]),a("el-input",{staticStyle:{width:"80px"},model:{value:e.Interval,callback:function(t){e.Interval=t},expression:"Interval"}}),a("span",[e._v("分钟,")]),a("span",[e._v("发送")]),a("el-input",{staticStyle:{width:"80px"},model:{value:e.Several,callback:function(t){e.Several=t},expression:"Several"}}),a("span",[e._v("条")])],1),a("p",{staticStyle:{"font-size":"13px",color:"#707070","margin-top":"6px"}},[e._v('可使用分钟变量，例:"剩余{剩余分钟}分钟开区！"发送的公告为："剩余5分钟开区！"')]),a("el-divider")],1),a("p",{staticClass:"open_gone_settings_table_p"},[e._v("属性设置")]),a("div",{staticClass:"open_gone_settings_table_notice"},[a("div",{staticClass:"open_gone_settings_table_property"},[a("div",{staticClass:"open_gone_settings_table_property_top"},[a("p",[e._v("测试区")]),a("span",[e._v("专属后缀:")]),a("el-input",{staticStyle:{width:"450px","margin-left":"20px"},model:{value:e.TestAreaSuffix,callback:function(t){e.TestAreaSuffix=t},expression:"TestAreaSuffix"}}),a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v("测试区游戏名称后缀")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})]),a("span",[e._v("覆盖目录:")]),a("input",{staticStyle:{width:"450px","margin-left":"20px",display:"none"},attrs:{webkitdirectory:"",id:"file",type:"file"},on:{change:e.TestAreaDirectoryIpt}}),a("el-input",{staticStyle:{width:"450px","margin-left":"20px"},model:{value:e.TestAreaDirectory,callback:function(t){e.TestAreaDirectory=t},expression:"TestAreaDirectory"}}),a("el-button",{staticStyle:{height:"32px",padding:"8px 10px","margin-left":"6px"},on:{click:function(t){return e.clickFile()}}},[e._v("选择")]),a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 开启测试区前将此目录 "),a("br"),e._v(" 覆盖到测试区目录 ")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1),a("div",{staticClass:"open_gone_settings_table_property_bottom"},[a("p",[e._v("正式区")]),a("span",[e._v("专属后缀:")]),a("el-input",{staticStyle:{width:"450px","margin-left":"20px"},model:{value:e.FormalAreaSuffix,callback:function(t){e.FormalAreaSuffix=t},expression:"FormalAreaSuffix"}}),a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v("正式区游戏名称后缀")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})]),a("span",[e._v("覆盖目录:")]),a("el-input",{staticStyle:{width:"450px","margin-left":"20px",display:"none"},attrs:{id:"file1",type:"file"},model:{value:e.FormalAreaDirectory,callback:function(t){e.FormalAreaDirectory=t},expression:"FormalAreaDirectory"}}),a("el-input",{staticStyle:{width:"450px","margin-left":"20px"},model:{value:e.FormalAreaDirectory,callback:function(t){e.FormalAreaDirectory=t},expression:"FormalAreaDirectory"}}),a("el-button",{staticStyle:{height:"32px",padding:"8px 10px","margin-left":"6px"},on:{click:function(t){return e.clickFileF()}}},[e._v("选择")]),a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 开启正式区前将此目录 "),a("br"),e._v(" 覆盖到测试区目录 ")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1)]),a("el-divider")],1),a("p",{staticClass:"open_gone_settings_table_p"},[e._v("清理设置")]),a("div",{staticClass:"open_gone_settings_table_notice"},[a("div",{staticClass:"open_gone_settings_table_clear"},[a("div",{staticClass:"open_gone_settings_table_clear_left"},[a("div",{staticStyle:{display:"flex","align-items":"baseline","justify-content":"space-between"}},[a("span",[e._v("测试区清理:")]),a("div",{staticStyle:{"margin-right":"32px"}},[a("el-checkbox",{staticClass:"open_gone_settings_table_clear_left_ckbox",model:{value:e.ClearDataInTheTestArea,callback:function(t){e.ClearDataInTheTestArea=t},expression:"ClearDataInTheTestArea"}},[e._v("清理数据")]),a("el-checkbox",{staticClass:"open_gone_settings_table_clear_left_ckbox",model:{value:e.ClearDataInTheTestID,callback:function(t){e.ClearDataInTheTestID=t},expression:"ClearDataInTheTestID"}},[e._v("清理账号")]),a("el-checkbox",{staticClass:"open_gone_settings_table_clear_left_ckbox",model:{value:e.ClearDataInTheTestVariable,callback:function(t){e.ClearDataInTheTestVariable=t},expression:"ClearDataInTheTestVariable"}},[e._v("清理变量")])],1)]),a("div",{staticStyle:{display:"flex","margin-top":"6px","align-items":"center","justify-content":"space-between"}},[a("el-input",{attrs:{type:"textarea",resize:"none",rows:7},model:{value:e.ClearDataInTheTestText,callback:function(t){e.ClearDataInTheTestText=t},expression:"ClearDataInTheTestText"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v("测试区开区前清理文件,换行结束。例:Mir200\\PlugList.txt")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1)]),a("div",{staticClass:"open_gone_settings_table_clear_right"},[a("div",{staticStyle:{display:"flex","align-items":"baseline","justify-content":"space-between"}},[a("span",[e._v("正式区清理:")]),a("div",{staticStyle:{"margin-right":"32px"}},[a("el-checkbox",{staticClass:"open_gone_settings_table_clear_left_ckbox",model:{value:e.FormalZoneCleaningData,callback:function(t){e.FormalZoneCleaningData=t},expression:"FormalZoneCleaningData"}},[e._v("清理数据")]),a("el-checkbox",{staticClass:"open_gone_settings_table_clear_left_ckbox",model:{value:e.FormalZoneCleaning,callback:function(t){e.FormalZoneCleaning=t},expression:"FormalZoneCleaning"}},[e._v("清理账号")]),a("el-checkbox",{staticClass:"open_gone_settings_table_clear_left_ckbox",model:{value:e.FormalZoneCleanupVariable,callback:function(t){e.FormalZoneCleanupVariable=t},expression:"FormalZoneCleanupVariable"}},[e._v("清理变量")])],1)]),a("div",{staticStyle:{display:"flex","margin-top":"6px","align-items":"center","justify-content":"space-between"}},[a("el-input",{attrs:{type:"textarea",resize:"none",rows:7},model:{value:e.FormalZoneCleanupText,callback:function(t){e.FormalZoneCleanupText=t},expression:"FormalZoneCleanupText"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v("正式区开区前清理文件,换行结束。例:Mir200\\PlugList.txt")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1)])])])])])],1)],1),a("el-tab-pane",{attrs:{label:"任务策略",name:"TaskStrategy"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"open_gone_settings_table"},[a("div",{staticStyle:{height:"60px",background:"#fff",display:"flex","justify-content":"flex-end","align-items":"center"}},[a("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.AddpPolicy()}}},[e._v("添加")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{overflow:"auto"},attrs:{data:e.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:"463"}},[a("template",{slot:"empty"},[a("el-empty",{attrs:{"image-size":100,description:"暂无数据"}})],1),a("el-table-column",{attrs:{align:"center",prop:"name",label:"状态",width:"100"}}),a("el-table-column",{attrs:{label:"周期(天)",width:"100",align:"center",prop:"name"}}),a("el-table-column",{attrs:{"class-name":"status-col",label:"测试区",align:"center",prop:"name"}}),a("el-table-column",{attrs:{label:"正式区",align:"center",prop:"name"}}),a("el-table-column",{staticStyle:{display:"flex"},attrs:{"class-name":"status-col",label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"status-col-btn1",attrs:{type:"text",size:"small"},on:{click:function(a){return e.PolicyEditing(t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"status-col-btn",attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.DeleteTaskPolicy(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],2),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"新增",visible:e.dialogVisible,width:"36.3%","close-on-click-modal":!1,"before-close":e.AddpPolicyS},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"open_gone_settings_table_dialogBoy"},[a("div",{staticClass:"open_gone_settings_table_time",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("span",[e._v("周期(天):")]),a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99},model:{value:e.Period,callback:function(t){e.Period=t},expression:"Period"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 开区周期时间。例: "),a("br"),e._v(" 周期=1 则每天均执行 "),a("br"),e._v(" 该策略，周期=2 则每 "),a("br"),e._v(" 两天执行一次策略。 ")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})]),a("span",[e._v("周期开始计算日期:")]),a("el-time-picker",{attrs:{placeholder:"00:00"},model:{value:e.PeriodStartDate,callback:function(t){e.PeriodStartDate=t},expression:"PeriodStartDate"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 周期开始计算日期，周期大于1 "),a("br"),e._v(" 时该属性有意义。例:开始计 "),a("br"),e._v(" 算日期为10月1日，周期设置为 "),a("br"),e._v(" 2天，则1、3、5、7...会执行 "),a("br"),e._v(" 该策略。 ")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1),a("el-divider"),a("div",{staticClass:"open_gone_settings_table_fast"},[a("span",[e._v("快捷添加:")]),a("div",{staticStyle:{display:"flex"}},[a("el-checkbox",{on:{change:e.QuickTestS},model:{value:e.QuickTest,callback:function(t){e.QuickTest=t},expression:"QuickTest"}},[e._v("测试区")]),a("el-checkbox",{model:{value:e.QuickAndFormal,callback:function(t){e.QuickAndFormal=t},expression:"QuickAndFormal"}},[e._v("正式区")])],1),a("p",{staticStyle:{"font-size":"12px",color:"#565656","margin-left":"12px"}},[e._v("正式区间隔时间(分钟):")]),a("el-input-number",{staticStyle:{"margin-left":"12px"},attrs:{"controls-position":"right",min:0,max:99},model:{value:e.FormalZoneIntervalTime,callback:function(t){e.FormalZoneIntervalTime=t},expression:"FormalZoneIntervalTime"}}),a("p",{staticStyle:{"font-size":"12px",color:"#565656","margin-left":"10px"}},[e._v("两区间隔时间(小时):")]),a("el-input-number",{staticStyle:{"margin-left":"12px"},attrs:{"controls-position":"right",min:0,max:99},model:{value:e.IntervalBetweenZones,callback:function(t){e.IntervalBetweenZones=t},expression:"IntervalBetweenZones"}})],1),a("el-divider"),a("el-table",{staticClass:"open_gone_settings_table_el-table",staticStyle:{width:"100%",height:"336px"},attrs:{"element-loading-text":"Loading",data:e.tableData,"show-header":!1,fit:"","highlight-current-row":""}},[a("template",{slot:"empty"},[a("el-empty",{attrs:{"image-size":100,description:"暂无数据"}})],1),a("el-table-column",{attrs:{type:"index",align:"center",index:e.indexMethod,width:"40"}}),a("el-table-column",{attrs:{align:"center",width:"56"}},[[a("el-checkbox",{staticStyle:{"font-size":"12px"},model:{value:e.QuickTest,callback:function(t){e.QuickTest=t},expression:"QuickTest"}},[e._v("测试区")])]],2),a("el-table-column",{attrs:{align:"center",width:"150"}},[e._v(" 开区时间: "),a("el-time-picker",{staticStyle:{width:"80px"},attrs:{clearable:!1,placeholder:"00:00"},model:{value:e.TestZoneOpeningTime,callback:function(t){e.TestZoneOpeningTime=t},expression:"TestZoneOpeningTime"}})],1),a("el-table-column",{attrs:{align:"center",width:"56"}},[a("el-checkbox",{staticStyle:{"font-size":"12px"},model:{value:e.TheDayBefore,callback:function(t){e.TheDayBefore=t},expression:"TheDayBefore"}},[e._v("前一天")])],1),a("el-table-column",{attrs:{prop:"address",align:"right",width:"86"}},[[a("el-checkbox",{model:{value:e.QuickAndFormal,callback:function(t){e.QuickAndFormal=t},expression:"QuickAndFormal"}},[e._v("正式区")])]],2),a("el-table-column",{attrs:{align:"center"}},[e._v(" 开区时间: "),a("el-time-picker",{staticStyle:{width:"80px"},attrs:{clearable:!1,placeholder:"00:00"},model:{value:e.OfficialZoneOpeningTime,callback:function(t){e.OfficialZoneOpeningTime=t},expression:"OfficialZoneOpeningTime"}})],1),a("el-table-column",{attrs:{width:"80",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],2),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[a("el-button",{staticStyle:{width:"632px"},attrs:{type:"primary",icon:"el-icon-plus",plain:""}},[e._v("新增")])],1),a("el-divider"),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("确定")]),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("取消")])],1)],1)])],1)],1)],1)])],1)],1)],1)],1)])],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"InstallIoaDingVisible",attrs:{title:"高级设置",visible:e.InstallIoaDingVisible,"before-close":e.AdvancedStudyS,width:"30.3%","close-on-click-modal":!1},on:{"update:visible":function(t){e.InstallIoaDingVisible=t}}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"open_gone_settings-text"},[e._v("高级设置")]),a("p",{staticStyle:{"margin-left":"10px","font-size":"12px"}},[e._v("奥趣助手高级属性配置，请在有专业人员指导或完全清晰属性功能后完成修改。")]),a("div",{staticStyle:{height:"380px",background:"#fff"}},[a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-evenly"}},[a("span",[e._v("当日开区序号:")]),a("el-input-number",{staticClass:"JointAreaSetting_table_input_number2",staticStyle:{width:"100px"},attrs:{"controls-position":"right",min:0},model:{value:e.AreaNumberOfTheDay,callback:function(t){e.AreaNumberOfTheDay=t},expression:"AreaNumberOfTheDay"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 例如 "),a("strong",[e._v(" 当日开区序号 "),a("br"),e._v(" =1 ")]),e._v(" 则下一区名称为 "),a("br"),a("strong",[e._v('"奥趣游戏02日区"')])]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})]),a("span",[e._v("当日合区序号:")]),a("el-input-number",{staticClass:"JointAreaSetting_table_input_number2",staticStyle:{width:"100px"},attrs:{"controls-position":"right",min:0},model:{value:e.DayZoneNumber,callback:function(t){e.DayZoneNumber=t},expression:"DayZoneNumber"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 例如 "),a("strong",[e._v(" 当日合区序号 "),a("br"),e._v(" =1 ")]),e._v(" 下一个生成首沙区 "),a("br"),e._v(" 的合区文件名为 "),a("br"),e._v(" 20211230 "),a("strong",[e._v("2SS")])]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1)]),a("div",{staticStyle:{"text-align":"right","margin-top":"6px"}},[a("el-button",{staticStyle:{width:"84px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.SaveSettingsGJ()}}},[e._v("保存")])],1)])],1)],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"修改",visible:e.PolicyModification,"before-close":e.PolicyEditingS,width:"36.3%","close-on-click-modal":!1},on:{"update:visible":function(t){e.PolicyModification=t}}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"open_gone_settings_table_dialogBoy"},[a("div",{staticClass:"open_gone_settings_table_time",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("span",[e._v("周期(天):")]),a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99},model:{value:e.Period,callback:function(t){e.Period=t},expression:"Period"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 开区周期时间。例: "),a("br"),e._v(" 周期=1 则每天均执行 "),a("br"),e._v(" 该策略，周期=2 则每 "),a("br"),e._v(" 两天执行一次策略。 ")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})]),a("span",[e._v("周期开始计算日期:")]),a("el-time-picker",{attrs:{placeholder:"00:00"},model:{value:e.PeriodStartDate,callback:function(t){e.PeriodStartDate=t},expression:"PeriodStartDate"}}),a("el-tooltip",{attrs:{placement:"bottom-start",effect:"light"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"content"},slot:"content"},[e._v(" 周期开始计算日期，周期大于1 "),a("br"),e._v(" 时该属性有意义。例:开始计 "),a("br"),e._v(" 算日期为10月1日，周期设置为 "),a("br"),e._v(" 2天，则1、3、5、7...会执行 "),a("br"),e._v(" 该策略。 ")]),a("i",{staticClass:"el-alert__icon el-icon-warning is-big"})])],1),a("el-divider"),a("el-table",{staticClass:"open_gone_settings_table_el-table",staticStyle:{width:"100%",height:"336px"},attrs:{"element-loading-text":"Loading",data:e.tableData,"show-header":!1,fit:"","highlight-current-row":""}},[a("template",{slot:"empty"},[a("el-empty",{attrs:{"image-size":100,description:"暂无数据"}})],1),a("el-table-column",{attrs:{type:"index",align:"center",index:e.indexMethod,width:"50"}}),a("el-table-column",{attrs:{align:"center",width:"60"}},[[a("el-checkbox",{staticStyle:{"font-size":"12px"},model:{value:e.QuickTest,callback:function(t){e.QuickTest=t},expression:"QuickTest"}},[e._v("测试区")])]],2),a("el-table-column",{attrs:{align:"center",width:"170"}},[e._v(" 开区时间: "),a("el-time-picker",{staticStyle:{width:"100px"},attrs:{clearable:!1,placeholder:"00:00"},model:{value:e.TestZoneOpeningTime,callback:function(t){e.TestZoneOpeningTime=t},expression:"TestZoneOpeningTime"}})],1),a("el-table-column",{attrs:{align:"center",width:"60"}},[a("el-checkbox",{staticStyle:{"font-size":"12px"},model:{value:e.TheDayBefore,callback:function(t){e.TheDayBefore=t},expression:"TheDayBefore"}},[e._v("前一天")])],1),a("el-table-column",{attrs:{prop:"address",align:"right",width:"90"}},[[a("el-checkbox",{model:{value:e.QuickAndFormal,callback:function(t){e.QuickAndFormal=t},expression:"QuickAndFormal"}},[e._v("正式区")])]],2),a("el-table-column",{attrs:{align:"center"}},[e._v(" 开区时间: "),a("el-time-picker",{staticStyle:{width:"100px"},attrs:{clearable:!1,placeholder:"00:00"},model:{value:e.OfficialZoneOpeningTime,callback:function(t){e.OfficialZoneOpeningTime=t},expression:"OfficialZoneOpeningTime"}})],1)],2),a("el-divider"),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("确定")]),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("取消")])],1)],1)])],1)],1)],1)},l=[],n=a("ade3"),s=(a("a434"),{created:function(){},data:function(){var e;return e={InstallIoaDing:!1,InstallIoaDingVisible:!1,dialogVisible:!1,checked:!1,value:"",OpenGone:"即将开正式区！剩余{剩余分钟}。",OpeningMinutes:"5",Interval:"1",Several:"3",TestAreaSuffix:"",TestAreaDirectory:"",FormalAreaSuffix:"",FormalAreaDirectory:"",ClearDataInTheTestArea:!1,ClearDataInTheTestID:!1,ClearDataInTheTestVariable:!1,ClearDataInTheTestText:"",FormalZoneCleaningData:!1,FormalZoneCleaning:!1,FormalZoneCleanupVariable:!1},Object(n["a"])(e,"FormalZoneCleanupVariable",!1),Object(n["a"])(e,"FormalZoneCleanupText",""),Object(n["a"])(e,"activeName","OpenZoneSetting"),Object(n["a"])(e,"listLoading",!1),Object(n["a"])(e,"tableData",[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",QuickTest:!1},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",QuickTest:!1},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",QuickTest:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",QuickTest:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",QuickTest:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",QuickTest:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",QuickTest:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",QuickTest:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",QuickTest:!1}]),Object(n["a"])(e,"Period",0),Object(n["a"])(e,"PeriodStartDate",""),Object(n["a"])(e,"QuickTest",!1),Object(n["a"])(e,"QuickAndFormal",!1),Object(n["a"])(e,"FormalZoneIntervalTime",0),Object(n["a"])(e,"IntervalBetweenZones",0),Object(n["a"])(e,"TestZoneOpeningTime",0),Object(n["a"])(e,"OfficialZoneOpeningTime",0),Object(n["a"])(e,"TheDayBefore",!1),Object(n["a"])(e,"AreaNumberOfTheDay",2),Object(n["a"])(e,"DayZoneNumber",0),Object(n["a"])(e,"PolicyModification",!1),e},methods:{indexMethod:function(e){return 1*e+1},deleteRow:function(e,t){t.splice(e,1)},QuickTestS:function(e){for(var t=0;t<this.tableData.length;t++)this.tableData[t].QuickTest=e},handleClick:function(e,t){},TestAreaDirectoryIpt:function(e){try{document.getElementById("file")}catch(t){console.debug("choice file err:",t)}},clickFile:function(){var e=document.getElementById("file");e.click()},clickFileF:function(){var e=document.querySelector("#file1");e.click()},AdvancedStudy:function(){this.InstallIoaDingVisible=!0,this.InstallIoaDing=!0},AdvancedStudyS:function(){this.InstallIoaDing=!1,this.InstallIoaDingVisible=!1,this.AreaNumberOfTheDay=2,this.DayZoneNumber=0},SaveSettingsGJ:function(){this.InstallIoaDing=!1,this.InstallIoaDingVisible=!1,this.AreaNumberOfTheDay=this.AreaNumberOfTheDay},AddpPolicy:function(){this.dialogVisible=!0},AddpPolicyS:function(){this.dialogVisible=!1,this.Period=0,this.PeriodStartDate="",this.QuickTest=!1,this.QuickAndFormal=!1,this.FormalZoneIntervalTime="",this.IntervalBetweenZones="",this.TheDayBefore=!1},PolicyEditing:function(e){this.PolicyModification=!0},PolicyEditingS:function(){this.PolicyModification=!1},DeleteTaskPolicy:function(e,t){var a=this;t.splice(e,1),this.$confirm("是否确认删除该开区策略?",{cancelButtonText:"取消",confirmButtonText:"确定",iconClass:"el-icon-phone",center:!0}).then((function(){a.$message({type:"success",message:"删除成功!",center:!0})})).catch((function(){a.$message({type:"info",message:"已取消删除",center:!0})}))}},computed:{},watch:{},filters:{},components:{}}),o=s,c=(a("6726"),a("2877")),r=Object(c["a"])(o,i,l,!1,null,"7fda2e99",null);t["default"]=r.exports},a434:function(e,t,a){"use strict";var i=a("23e7"),l=a("7b0b"),n=a("23cb"),s=a("5926"),o=a("07fa"),c=a("3a34"),r=a("3511"),p=a("65f0"),d=a("8418"),u=a("083a"),g=a("1dde"),m=g("splice"),b=Math.max,f=Math.min;i({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var a,i,g,m,_,v,x=l(this),h=o(x),y=n(e,h),k=arguments.length;for(0===k?a=i=0:1===k?(a=0,i=h-y):(a=k-2,i=f(b(s(t),0),h-y)),r(h+a-i),g=p(x,i),m=0;m<i;m++)_=y+m,_ in x&&d(g,m,x[_]);if(g.length=i,a<i){for(m=y;m<h-i;m++)_=m+i,v=m+a,_ in x?x[v]=x[_]:u(x,v);for(m=h;m>h-i+a;m--)u(x,m-1)}else if(a>i)for(m=h-i;m>y;m--)_=m+i-1,v=m+a-1,_ in x?x[v]=x[_]:u(x,v);for(m=0;m<a;m++)x[m+y]=arguments[m+2];return c(x,h-i+a),g}})},de26:function(e,t,a){}}]);