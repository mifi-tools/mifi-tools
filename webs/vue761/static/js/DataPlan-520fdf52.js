import{d as de,u as ue,n as h,L as _e,a3 as q,P as pe,r as _,b as H,o as c,c as ce,e as a,j as l,w as F,i as y,h as k,g as w,f as V,I as me,B as b,z as A,S as G,K as v,a5 as ye,a6 as fe,_ as he}from"./index-4789ca0a.js";import{T as J}from"./index-296c76cc.js";import{f as ve,a as N,c as L,e as ge}from"./fun-3edebd8d.js";const Q=W=>(ye("data-v-f421619c"),W=W(),fe(),W),ke={class:"card-header"},be={class:"type-it-container"},Pe={class:"button-container"},Ie={class:"form-container"},xe={style:{width:"35%"}},we=Q(()=>w("br",null,null,-1)),Te=Q(()=>w("br",null,null,-1)),Ue=de({name:"DataPlan",__name:"DataPlan",setup(W){ue();let T=h(!1),C=h(!1),E=h(!1),g=h(["","",""]);const O=h();let X=h({}),Y=h({}),B=h("");const d=_e();let P=h(!1),u=h(!0);const e=q({Used:"",EUsed:"",residue:"",residuetype:"",threshold:"",thresholdType:"%",ysy_unit:"",editysy_unit:"",tc_unit:"",Package:"",Package_type:""});let o=[];pe(()=>{X.value=d.state.NetWork,Y.value=d.state.NetInfo,P.value=d.state.NetWork.data_volume_limit_switch=="1",u.value==!0&&P.value==!0&&C.value==!0&&(C.value=!1,u.value=!1);const r=d.state.NetWork.data_volume_alert_percent,t=d.state.NetWork.data_volume_limit_size,s=d.state.NetWork.data_volume_limit_unit;if(e&&e.Package_type==""&&s!=""||T.value==!0){if(e.Package_type=s=="data"?"流量":"时间",e.Package_type=="流量"){const m=ve(t),f=parseInt(d.state.NetWork.monthly_tx_bytes)+parseInt(d.state.NetWork.monthly_rx_bytes),p=N(f.toString()).split(" ");e.Used=p[0],e.ysy_unit=p[1];const i=L(m)-parseInt(f),I=N(Math.abs(i).toString()).split(" ");e.residue=I[0]=="NaN"?"0":I[0],i<0&&(e.residue="超出："+e.residue),e.residuetype=I[1]=="undefined"?"MB":I[1],e.threshold=r;const x=(L(m)*(parseInt(r)/100)).toString();e.thresholdType="% ("+N(x)+")";const U=m.match(/[^\d]+|\d+/g);e.Package=U[0],e.tc_unit=U[1]}else{const m=parseInt(d.state.NetWork.monthly_time)/3600,f=t;e.Used=m.toFixed(2).toString(),e.ysy_unit="小时",e.residue=(parseInt(f)-parseInt(m)).toFixed(2).toString(),e.residuetype="小时",e.threshold=r;const p=(parseInt(f)*(parseInt(r)/100)).toString();e.thresholdType="% ("+parseInt(p).toFixed(2)+"小时)",e.Package=f,e.tc_unit="小时"}o.push(e.Package_type),o.push(e.Used),o.push(e.ysy_unit),o.push(e.residue),o.push(e.residuetype),o.push(e.threshold),o.push(e.thresholdType),o.push(e.Package),o.push(e.tc_unit),(g.value[0]==""&&g.value[1]==""&&g.value[2]==""||g.value[0]==s&&g.value[1]==r&&g.value[2]==t)&&(B.value==""?u.value=T.value=!1:(B.value==N(d.state.NetWork.monthly_rx_bytes)||e.Package_type=="时间")&&(setTimeout(function(){u.value=T.value=!1},1500),B.value=""))}});function R(r){E.value=r,r==1&&(e.EUsed=e.Used,e.editysy_unit=e.ysy_unit)}function Z(r){u.value=r,C.value=!0,G({goformId:"DATA_LIMIT_SETTING",data_volume_limit_switch:r==!0?"1":"0",data_volume_limit_unit:d.state.NetWork.data_volume_limit_unit,data_volume_limit_size:d.state.NetWork.data_volume_limit_size,data_volume_alert_percent:d.state.NetWork.data_volume_alert_percent}).then(t=>{t.result=="success"?v("成功发送请求",{type:"success"}):(v("操作失败",{type:"error"}),u.value=!1)}).catch(t=>{v("请求失败",{type:"error"}),u.value=!1})}const ee=(r,t,s)=>{if(!t)return s(new Error("请输入提醒阈值"));t<=0||t>100?s(new Error("请输入正确的百分比")):s()},te=(r,t,s)=>{if(t)s();else return s(new Error("请输入流量套餐"))};function ae(){e.Used=e.EUsed,e.ysy_unit=e.editysy_unit,E.value=!1}function le(r){if(r!=o[0]){if(o[0]=="时间"){const t=parseInt(d.state.NetWork.monthly_tx_bytes)+parseInt(d.state.NetWork.monthly_rx_bytes),s=N(t.toString()).split(" ");e.Used=s[0],e.ysy_unit=s[1]}else{const t=parseInt(d.state.NetWork.monthly_time)/3600;e.Used=t.toFixed(2).toString(),e.ysy_unit="小时"}e.residue="",e.residuetype=o[0]=="时间"?"MB":"小时",e.threshold="",e.thresholdType="%",e.Package="",e.tc_unit=o[0]=="时间"?"MB":"小时"}else e.Used=o[1],e.ysy_unit=o[2],e.residue=o[3],e.residuetype=o[4],e.threshold=o[5],e.thresholdType=o[6],e.Package=o[7],e.tc_unit=o[8]}const se=q({threshold:[{validator:ee,trigger:"blur"}],Package:[{validator:te,trigger:"blur"}]}),oe=r=>{r&&(r.clearValidate(),r.validate(t=>{if(t){const s={goformId:"DATA_LIMIT_SETTING",data_volume_limit_switch:d.state.NetWork.data_volume_limit_switch,data_volume_limit_unit:e.Package_type=="流量"?"data":"time",data_volume_alert_percent:e.threshold,data_volume_limit_size:e.Package};e.Package_type=="流量"&&(s.data_volume_limit_size=ge(e.Package+e.tc_unit)),u.value=!0,g.value[0]=s.data_volume_limit_unit,g.value[1]=s.data_volume_alert_percent,g.value[2]=s.data_volume_limit_size,G(s).then(S=>{if(S.result=="success"){T.value=!0,e.threshold==o[5]&&e.Package==o[7]&&e.Package_type==o[0]&&(T.value=!1,u.value=!1);let m,f;if(e.EUsed=="")return;if(u.value=!0,e.Package_type=="流量"){m=0;let i;e.editysy_unit=="MB"&&(i="1"),e.editysy_unit=="GB"&&(i="1024"),e.editysy_unit=="TB"&&(i="1048576"),f=parseInt(e.EUsed)*i,B.value=parseInt(e.EUsed)+" "+e.editysy_unit}else f=0,m=e.EUsed,B.value=e.EUsed;const p={goformId:"FLOW_CALIBRATION_MANUAL",calibration_way:e.Package_type=="流量"?"data":"time",time:m,data:f};T.value=!0,G(p).then(i=>{i.result=="success"?v("成功发送请求",{type:"success"}):(v("操作失败",{type:"error"}),u.value=!1)}).catch(i=>{v("请求失败",{type:"error"}),u.value=!1}),v("成功发送请求",{type:"success"})}else v("操作失败",{type:"error"}),u.value=!1}).catch(S=>{v("请求失败",{type:"error"}),u.value=!1})}else return v("请检查表单内容",{type:"error"}),!1}))};function z(r){if(e.Package_type=="流量"){const t=e.Package+e.tc_unit,s=(L(t)*(parseInt(e.threshold)/100)).toString();e.thresholdType="% ("+N(s)+")"}else{const t=e.Package,s=(parseInt(t)*(parseInt(e.threshold)/100)).toString();e.thresholdType="% ("+parseInt(s).toFixed(2)+"小时)"}}return(r,t)=>{const s=_("el-tag"),S=_("el-switch"),m=_("el-radio"),f=_("el-radio-group"),p=_("el-form-item"),i=_("el-option"),I=_("el-select"),x=_("el-input"),U=_("IconifyIconOnline"),M=_("el-button"),re=_("el-form"),$=_("el-card"),j=_("el-col"),D=_("el-text"),ne=_("el-row"),ie=H("loading"),K=H("motion");return c(),ce("div",null,[a(ne,{gutter:24},{default:l(()=>[F((c(),y(j,{xs:24,sm:24,md:16,lg:16,xl:16,class:"mb-[5px]",initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:l(()=>[a(s,{style:{width:"100%","margin-bottom":"5px","white-space":"normal"},size:"large",effect:"dark"},{default:l(()=>[k(" 您可以在该页面创建流量计划、查询已用流量及剩余流量 ")]),_:1}),F((c(),y($,{shadow:"never"},{header:l(()=>[w("div",ke,[w("div",be,[a(V(J),{className:"type-it1",values:["套餐设置"],cursor:!1,speed:60})]),w("div",Pe,[a(s,{class:"ml-2"},{default:l(()=>[k(" 流量管理状态："),a(S,{size:"small",modelValue:V(P),"onUpdate:modelValue":t[0]||(t[0]=n=>me(P)?P.value=n:P=n),onChange:Z},null,8,["modelValue"])]),_:1})])])]),default:l(()=>[w("div",Ie,[a(re,{ref_key:"ruleFormRef",ref:O,model:e,"status-icon":"",rules:se,"label-width":"70px",class:"demo-ruleForm","label-position":"left"},{default:l(()=>[a(p,{label:"套餐形式"},{default:l(()=>[a(f,{modelValue:e.Package_type,"onUpdate:modelValue":t[1]||(t[1]=n=>e.Package_type=n),onChange:le},{default:l(()=>[a(m,{border:"",label:"流量"}),a(m,{border:"",label:"时间"})]),_:1},8,["modelValue"])]),_:1}),V(E)?(c(),y(p,{key:0,label:"已使用",prop:"EUsed"},{default:l(()=>[a(x,{modelValue:e.EUsed,"onUpdate:modelValue":t[3]||(t[3]=n=>e.EUsed=n),modelModifiers:{number:!0},style:{width:"65%"},type:"number"},{append:l(()=>[a(I,{modelValue:e.editysy_unit,"onUpdate:modelValue":t[2]||(t[2]=n=>e.editysy_unit=n),placeholder:"Select",style:{width:"73px"}},{default:l(()=>[e.Package_type=="流量"?(c(),y(i,{key:0,label:"MB",value:"MB"})):b("",!0),e.Package_type=="流量"?(c(),y(i,{key:1,label:"GB",value:"GB"})):b("",!0),e.Package_type=="流量"?(c(),y(i,{key:2,label:"TB",value:"TB"})):b("",!0),e.Package_type=="时间"?(c(),y(i,{key:3,label:"小时",value:"小时"})):b("",!0)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),w("div",xe,[a(M,{style:{"margin-left":"5px",width:"30px"},onClick:ae},{default:l(()=>[a(U,{icon:"icon-park-outline:correct"})]),_:1}),a(M,{style:{"margin-left":"5px",width:"30px"},onClick:t[4]||(t[4]=n=>R(0))},{default:l(()=>[a(U,{icon:"icon-park-outline:error"})]),_:1})])]),_:1})):(c(),y(p,{key:1,label:"已使用",prop:"Used"},{default:l(()=>[a(x,{modelValue:e.Used,"onUpdate:modelValue":t[5]||(t[5]=n=>e.Used=n),modelModifiers:{number:!0},disabled:"",style:{width:"70%"}},{append:l(()=>[k(A(e.ysy_unit),1)]),_:1},8,["modelValue"]),a(M,{style:{"margin-left":"5px"},onClick:t[6]||(t[6]=n=>R(1))},{default:l(()=>[a(U,{icon:"uil:edit"})]),_:1})]),_:1})),a(p,{label:"剩余",prop:"residue"},{default:l(()=>[a(x,{modelValue:e.residue,"onUpdate:modelValue":t[7]||(t[7]=n=>e.residue=n),disabled:""},{append:l(()=>[k(A(e.residuetype),1)]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"提醒阈值",prop:"threshold"},{default:l(()=>[a(x,{id:"ssid",modelValue:e.threshold,"onUpdate:modelValue":t[8]||(t[8]=n=>e.threshold=n),modelModifiers:{number:!0},type:"number",onChange:z},{append:l(()=>[k(A(e.thresholdType),1)]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"流量套餐",prop:"Package"},{default:l(()=>[a(x,{modelValue:e.Package,"onUpdate:modelValue":t[10]||(t[10]=n=>e.Package=n),modelModifiers:{number:!0},type:"number",onChange:z},{append:l(()=>[a(I,{modelValue:e.tc_unit,"onUpdate:modelValue":t[9]||(t[9]=n=>e.tc_unit=n),placeholder:"Select",style:{width:"100px"},onChange:z},{default:l(()=>[e.Package_type=="流量"?(c(),y(i,{key:0,label:"MB",value:"MB"})):b("",!0),e.Package_type=="流量"?(c(),y(i,{key:1,label:"GB",value:"GB"})):b("",!0),e.Package_type=="流量"?(c(),y(i,{key:2,label:"TB",value:"TB"})):b("",!0),e.Package_type=="时间"?(c(),y(i,{key:3,label:"小时",value:"小时"})):b("",!0)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),a(p,{class:"form-buttons"},{default:l(()=>[a(M,{type:"primary",onClick:t[11]||(t[11]=n=>oe(O.value)),disabled:!V(P)},{default:l(()=>[k("应用")]),_:1},8,["disabled"])]),_:1}),a(M,{style:{visibility:"hidden"}})]),_:1},8,["model","rules"])])]),_:1})),[[ie,V(u)]])]),_:1})),[[K]]),F((c(),y(j,{xs:24,sm:24,md:8,lg:8,xl:8,class:"mb-[5px]",initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:l(()=>[a($,{shadow:"never"},{header:l(()=>[a(V(J),{className:"type-it2",values:["说明"],cursor:!1,speed:60})]),default:l(()=>[a(D,{class:"mx-1"},{default:l(()=>[k("支持手动校准流量功能。如果页面流量统计与实际有偏差，您可以修改实际已用流量。"),we]),_:1}),a(D,{class:"mx-1"},{default:l(()=>[k("当已用流量/时间达到设置的百分比时提醒我。"),Te]),_:1}),a(D,{class:"mx-1"},{default:l(()=>[k("当流量套餐单位为MB时，已使用流量的统计范围需小于4096TB。")]),_:1})]),_:1})]),_:1})),[[K]])]),_:1})])}}});const Se=he(Ue,[["__scopeId","data-v-f421619c"]]);export{Se as default};
