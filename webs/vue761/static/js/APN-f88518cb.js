import{d as J,n as w,a3 as Q,t as Y,M as ee,r as v,b as $,o as g,c as S,e as p,j as n,w as O,i as b,h as f,z as ae,f as X,F as pe,v as le,ai as ne,B as E,g as d,K as t,S as V}from"./index-4789ca0a.js";import{T as F}from"./index-296c76cc.js";import{E as _e}from"./el-message-box-ecaf3f80.js";const oe=d("b",null,"模式",-1),te=d("br",null,null,-1),ie=d("b",null,"配置文件",-1),ue=d("br",null,null,-1),se=d("b",null,"PDP 类型",-1),de=d("br",null,null,-1),re=d("b",null,"配置文件名称",-1),fe=d("br",null,null,-1),ce=d("b",null,"APN",-1),ve=d("br",null,null,-1),me=d("b",null,"鉴权方式",-1),ge=d("br",null,null,-1),Pe=d("b",null,"用户名",-1),Ne=d("br",null,null,-1),Ae=d("b",null,"密码",-1),Ce=d("br",null,null,-1),xe=J({name:"APN",__name:"APN",setup(ye){const c=w({APN_config0:"",APN_config1:"",APN_config2:"",APN_config3:"",APN_config4:"",APN_config5:"",APN_config6:"",APN_config7:"",APN_config8:"",APN_config9:"",APN_config10:"",APN_config11:"",APN_config12:"",APN_config13:"",APN_config14:"",APN_config15:"",APN_config16:"",APN_config17:"",APN_config18:"",APN_config19:"",ipv6_APN_config0:"",ipv6_APN_config1:"",ipv6_APN_config2:"",ipv6_APN_config3:"",ipv6_APN_config4:"",ipv6_APN_config5:"",ipv6_APN_config6:"",ipv6_APN_config7:"",ipv6_APN_config8:"",ipv6_APN_config9:"",ipv6_APN_config10:"",ipv6_APN_config11:"",ipv6_APN_config12:"",ipv6_APN_config13:"",ipv6_APN_config14:"",ipv6_APN_config15:"",ipv6_APN_config16:"",ipv6_APN_config17:"",ipv6_APN_config18:"",ipv6_APN_config19:"",m_profile_name:"",profile_name:"",wan_dial:"",pdp_type:"",pdp_select:"",index:"",Current_index:"",apn_auto_config:"",ipv6_apn_auto_config:"",apn_mode:"",wan_apn:"",ppp_auth_mode:"",ppp_username:"",ppp_passwd:"",ipv6_wan_apn:"",ipv6_pdp_type:"",ipv6_ppp_auth_mode:"",ipv6_ppp_username:"",ipv6_ppp_passwd:"",apn_num_preset:""}),P=w([]),u=w([]),C=w([]),N=w([]),r=w(!1),o=w(0),s=w(!0),e=Q({config:"",apn_mode:"",pdp_type:"",profile_name:"",apn_ipv4_apn:"",ppp_auth_mode:"",ppp_username:"",ppp_passwd:"",wan_dial:""});Y(()=>{I()});function I(){P.value=[],u.value=[],C.value=[],N.value=[],setTimeout(()=>{ee("cmd=APN_config0%2CAPN_config1%2CAPN_config2%2CAPN_config3%2CAPN_config4%2CAPN_config5%2CAPN_config6%2CAPN_config7%2CAPN_config8%2CAPN_config9%2CAPN_config10%2CAPN_config11%2CAPN_config12%2CAPN_config13%2CAPN_config14%2CAPN_config15%2CAPN_config16%2CAPN_config17%2CAPN_config18%2CAPN_config19%2Cipv6_APN_config0%2Cipv6_APN_config1%2Cipv6_APN_config2%2Cipv6_APN_config3%2Cipv6_APN_config4%2Cipv6_APN_config5%2Cipv6_APN_config6%2Cipv6_APN_config7%2Cipv6_APN_config8%2Cipv6_APN_config9%2Cipv6_APN_config10%2Cipv6_APN_config11%2Cipv6_APN_config12%2Cipv6_APN_config13%2Cipv6_APN_config14%2Cipv6_APN_config15%2Cipv6_APN_config16%2Cipv6_APN_config17%2Cipv6_APN_config18%2Cipv6_APN_config19%2Cm_profile_name%2Cprofile_name%2Cwan_dial%2Cpdp_type%2Cpdp_select%2Cindex%2CCurrent_index%2Capn_auto_config%2Cipv6_apn_auto_config%2Capn_mode%2Cwan_apn%2Cppp_auth_mode%2Cppp_username%2Cppp_passwd%2Cipv6_wan_apn%2Cipv6_pdp_type%2Cipv6_ppp_auth_mode%2Cipv6_ppp_username%2Cipv6_ppp_passwd%2Capn_num_preset&multi_data=1").then(i=>{c.value=i,e.apn_mode=c.value.apn_mode=="auto"?"自动":"手动";for(var a=0;a<=19;a++){const l=c.value["APN_config"+a].split("($)"),m=c.value["ipv6_APN_config"+a].split("($)");l[0]!=""&&l[7]==""?P.value.push(m):P.value.push(l),l[0]!=""&&l[7]==""&&N.value.push({id:"ipv6_APN_config"+a,value:l[0]}),l[0]!=""&&l[7]!=""&&N.value.push({id:"APN_config"+a,value:l[0]})}if(u.value=c.value.apn_auto_config.split("($)"),c.value.apn_mode=="auto")e.profile_name=u.value[0],e.apn_ipv4_apn=u.value[1],e.wan_dial=u.value[3],e.pdp_type=u.value[7],C.value=[{id:"0",value:u.value[0]}],e.config=u.value[0],e.ppp_auth_mode=u.value[4];else{o.value=0,C.value=N.value;let l=P.value[0];if(c.value.apn_mode!="auto"){for(let m=0;m<C.value.length;m++)if(P.value[m][0]==c.value.m_profile_name){l=P.value[m],o.value=m;break}}e.config=l[0],e.profile_name=l[0],e.apn_ipv4_apn=l[1],e.wan_dial=l[3]!=""?l[3]:u.value[3],e.ppp_auth_mode=l[4]!=""?l[4]:"none",e.ppp_username=l[5],e.pdp_type=l[7]}s.value=!1})},500)}function T(i){i==1?(r.value=!0,e.apn_ipv4_apn="",e.profile_name=""):r.value=!1}function M(i){try{var a=i.match(/APN_config(\d+)/);o.value=parseInt(a[1]);const l=c.value[i].split("($)");e.config=l[0],e.profile_name=l[0],e.apn_ipv4_apn=l[1],e.wan_dial=l[3]!=""?l[3]:u.value[3],e.ppp_auth_mode=l[4]!=""?l[4]:"none",e.ppp_username=l[5],e.pdp_type=l[7]}catch{return}}function z(i){if(i=="手动"){o.value=0,C.value=N.value;let a=P.value[0];if(c.value.apn_mode!="auto"){for(let l=0;l<C.value.length;l++)if(P.value[l][0]==c.value.m_profile_name){a=P.value[l],o.value=l;break}}e.config=a[0],e.profile_name=a[0],e.apn_ipv4_apn=a[1],e.wan_dial=a[3]!=""?a[3]:u.value[3],e.ppp_auth_mode=a[4]!=""?a[4]:"none",e.pdp_type=a[7]}else T(0),e.config=N.value[0],e.config=u.value[0],C.value=[{id:"0",value:u.value[0]}],e.profile_name=u.value[0],e.apn_ipv4_apn=u.value[1],e.wan_dial=u.value[3],e.ppp_auth_mode=u.value[4]!=""?u.value[4]:"none",e.pdp_type=u.value[7]}function K(){s.value=!0;const i=P.value[o.value];_e.confirm("该操作将会断开网络，你确定要继续执行该操作吗？",{confirmButtonText:"继续",cancelButtonText:"取消",type:"warning"}).then(()=>{V({goformId:"DISCONNECT_NETWORK",notCallback:"DISCONNECT_NETWORK"}).then(a=>{a.result=="success"?(t("断开数据漫游",{type:"success"}),V({goformId:"APN_PROC_EX",apn_action:"set_default",apn_mode:"manual",set_default_flag:"1",pdp_type:i[7],index:o.value}).then(l=>{l.result=="success"?(setTimeout(()=>{V({goformId:"CONNECT_NETWORK",notCallback:"true"}).then(m=>{t("打开数据漫游",{type:"success"}),I()}).catch(m=>{t("请求失败",{type:"error"}),s.value=!1})},1500),t("应用APN",{type:"success"})):(t("操作失败",{type:"error"}),s.value=!1)}).catch(l=>{t("请求失败",{type:"error"}),s.value=!1})):(t("操作失败",{type:"error"}),s.value=!1)}).catch(a=>{t("请求失败",{type:"error"}),s.value=!1})}).catch(()=>{s.value=!1})}function H(){if(e.profile_name==""||e.profile_name=="Default")return t("配置文件名称不能为空，且不能为默认",{type:"error"});if(!/^[0-9a-zA-Z\.!#\(\)\*\+%\-=\?@\[\]\^_\{\}\|~:, ]{1,30}$/.test(e.profile_name))return t(`APN 配置文件名称中包含无效的字符
`,{type:"error"});if(e.apn_ipv4_apn==""||e.apn_ipv4_apn=="Default")return t("APN不能为空，且不能为默认",{type:"error"});if(C.value.indexOf(e.profile_name)!=-1)return t("配置文件名称不能重复",{type:"error"});if(e.pdp_type==""||e.pdp_type=="Default")return t("PDP类型不能为空，且不能为默认",{type:"error"});s.value=!0;let i;e.pdp_type=="IP"?i={goformId:"APN_PROC_EX",apn_action:"save",apn_mode:"manual",profile_name:e.profile_name,wan_dial:e.wan_dial!=""?e.wan_dial:"*99#",pdp_type:e.pdp_type,pdp_select:"auto",index:N.value.length,wan_apn:e.apn_ipv4_apn,ppp_auth_mode:e.ppp_auth_mode!=""?e.ppp_auth_mode:"none",ppp_username:e.ppp_username,ppp_passtmp:e.ppp_passwd}:e.pdp_type=="IPv6"?i={goformId:"APN_PROC_EX",apn_action:"save",apn_mode:"manual",profile_name:e.profile_name,wan_dial:e.wan_dial!=""?e.wan_dial:"*99#",pdp_type:e.pdp_type,pdp_select:"auto",index:N.value.length,ipv6_wan_apn:e.apn_ipv4_apn,ipv6_ppp_auth_mode:e.ppp_auth_mode!=""?e.ppp_auth_mode:"none",ipv6_ppp_username:e.ppp_username,ipv6_ppp_passtmp:e.ppp_passwd}:e.pdp_type=="IPv4v6"&&(i={goformId:"APN_PROC_EX",apn_action:"save",apn_mode:"manual",profile_name:e.profile_name,wan_dial:e.wan_dial!=""?e.wan_dial:"*99#",pdp_type:e.pdp_type,pdp_select:"auto",index:N.value.length,wan_apn:e.apn_ipv4_apn,ppp_auth_mode:e.ppp_auth_mode!=""?e.ppp_auth_mode:"none",ppp_username:e.ppp_username,ppp_ppp_passtmp:e.ppp_passwd,ipv6_wan_apn:e.apn_ipv4_apn,ipv6_ppp_auth_mode:e.ppp_auth_mode!=""?e.ppp_auth_mode:"none",ipv6_ppp_username:e.ppp_username,ipv6_ppp_passtmp:e.ppp_passwd}),V(i).then(a=>{a.result=="success"?(I(),r.value=!1,t("添加APN",{type:"success"})):(t("操作失败",{type:"error"}),s.value=!1)}).catch(a=>{t("请求失败",{type:"error"}),s.value=!1})}function W(){if(N.value[o.value].value==c.value.m_profile_name)return t("该配置文件正在使用中，禁止删除！",{type:"error"});s.value=!0,V({goformId:"APN_PROC_EX",apn_action:"delete",index:o.value,apn_mode:"manual"}).then(i=>{i.result=="success"?(I(),t("删除APN",{type:"success"})):(t("操作失败",{type:"error"}),s.value=!1)}).catch(i=>{t("请求失败",{type:"error"}),s.value=!1})}function Z(){e.apn_mode=e.apn_mode=="自动"?"auto":"manual",e.apn_mode=="auto"?(s.value=!0,V({goformId:"APN_PROC_EX",apn_mode:"auto"}).then(i=>{i.result=="success"?(I(),t("APN设置自动",{type:"success"})):(t("操作失败",{type:"error"}),s.value=!1)}).catch(i=>{t("请求失败",{type:"error"}),s.value=!1})):K()}return(i,a)=>{const l=v("el-tag"),m=v("el-radio"),j=v("el-radio-group"),A=v("el-form-item"),h=v("el-option"),D=v("el-select"),x=v("el-button"),k=v("el-input"),q=v("el-form"),R=v("el-card"),U=v("el-col"),y=v("el-text"),L=v("el-row"),G=$("loading"),B=$("motion");return g(),S("div",null,[p(L,{gutter:24},{default:n(()=>[O((g(),b(U,{xs:24,sm:24,md:16,lg:16,xl:16,class:"mb-[5px]",initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:n(()=>[p(l,{style:{width:"100%","margin-bottom":"5px","white-space":"normal"},size:"large",effect:"dark"},{default:n(()=>[f(" 当前APN："+ae(c.value.m_profile_name),1)]),_:1}),O((g(),b(R,{shadow:"never"},{header:n(()=>[p(X(F),{className:"type-it1",values:["APN设置"],cursor:!1,speed:60})]),default:n(()=>[p(q,{model:e,"status-icon":"","label-width":"120px",class:"demo-ruleForm","label-position":"left"},{default:n(()=>[p(A,{label:"模式"},{default:n(()=>[p(j,{modelValue:e.apn_mode,"onUpdate:modelValue":a[0]||(a[0]=_=>e.apn_mode=_),onChange:z},{default:n(()=>[p(m,{border:"",label:"自动"}),p(m,{border:"",label:"手动"})]),_:1},8,["modelValue"])]),_:1}),p(A,{label:"配置文件",prop:"config"},{default:n(()=>[p(D,{modelValue:e.config,"onUpdate:modelValue":a[1]||(a[1]=_=>e.config=_),"fit-input-width":!0,style:{width:"85%"},disabled:r.value,onChange:M},{default:n(()=>[(g(!0),S(pe,null,le(C.value,_=>O((g(),b(h,{key:_,label:_.value,value:_.id},null,8,["label","value"])),[[ne,_!=""]])),128))]),_:1},8,["modelValue","disabled"]),e.apn_mode=="手动"&&r.value==!0?(g(),b(x,{key:0,style:{"margin-left":"5px"},type:"danger",onClick:a[2]||(a[2]=_=>T(0))},{default:n(()=>[f("取消")]),_:1})):E("",!0),e.apn_mode=="手动"&&r.value==!1?(g(),b(x,{key:1,style:{"margin-left":"5px"},type:"primary",onClick:a[3]||(a[3]=_=>T(1))},{default:n(()=>[f("新增")]),_:1})):E("",!0)]),_:1}),p(A,{label:"PDP类型",prop:"pdp_type"},{default:n(()=>[p(D,{modelValue:e.pdp_type,"onUpdate:modelValue":a[4]||(a[4]=_=>e.pdp_type=_),"fit-input-width":!0,style:{width:"100%"},disabled:(e.apn_mode=="自动"||o.value==0||e.apn_mode=="手动"||o.value!=0)&&r.value==!1},{default:n(()=>[p(h,{label:"IPv4",value:"IP"}),p(h,{label:"IPv6",value:"IPv6"}),p(h,{label:"IPv4v6",value:"IPv4v6"})]),_:1},8,["modelValue","disabled"])]),_:1}),p(A,{label:"配置文件名称",prop:"profile_name"},{default:n(()=>[p(k,{id:"profile_name",modelValue:e.profile_name,"onUpdate:modelValue":a[5]||(a[5]=_=>e.profile_name=_),disabled:(e.apn_mode=="自动"||o.value==0||e.apn_mode=="手动"||o.value!=0)&&r.value==!1},null,8,["modelValue","disabled"])]),_:1}),p(A,{label:"APN",prop:"apn_ipv4_apn"},{default:n(()=>[p(k,{id:"apn_ipv4_apn",modelValue:e.apn_ipv4_apn,"onUpdate:modelValue":a[6]||(a[6]=_=>e.apn_ipv4_apn=_),disabled:(e.apn_mode=="自动"||o.value==0||e.apn_mode=="手动"||o.value!=0)&&r.value==!1},null,8,["modelValue","disabled"])]),_:1}),p(A,{label:"鉴权方式",prop:"ppp_auth_mode"},{default:n(()=>[p(D,{modelValue:e.ppp_auth_mode,"onUpdate:modelValue":a[7]||(a[7]=_=>e.ppp_auth_mode=_),"fit-input-width":!0,style:{width:"100%"},disabled:(e.apn_mode=="自动"||o.value==0||e.apn_mode=="手动"||o.value!=0)&&r.value==!1},{default:n(()=>[p(h,{label:"NONE",value:"none"}),p(h,{label:"CHAP",value:"chap"}),p(h,{label:"PAP",value:"pap"}),p(h,{label:"PAP_CHAP",value:"pap_chap"})]),_:1},8,["modelValue","disabled"])]),_:1}),p(A,{label:"用户名",prop:"ppp_username"},{default:n(()=>[p(k,{id:"ppp_username",modelValue:e.ppp_username,"onUpdate:modelValue":a[8]||(a[8]=_=>e.ppp_username=_),disabled:(e.apn_mode=="自动"||o.value==0||e.apn_mode=="手动"||o.value!=0)&&r.value==!1},null,8,["modelValue","disabled"])]),_:1}),p(A,{label:"密码",prop:"ppp_passwd"},{default:n(()=>[p(k,{id:"ppp_passwd",modelValue:e.ppp_passwd,"onUpdate:modelValue":a[9]||(a[9]=_=>e.ppp_passwd=_),disabled:(e.apn_mode=="自动"||o.value==0||e.apn_mode=="手动"||o.value!=0)&&r.value==!1},null,8,["modelValue","disabled"])]),_:1}),p(A,{label:"拨号号码",prop:"wan_dial"},{default:n(()=>[p(k,{id:"wan_dial",modelValue:e.wan_dial,"onUpdate:modelValue":a[10]||(a[10]=_=>e.wan_dial=_),disabled:""},null,8,["modelValue"])]),_:1}),p(A,{class:"form-buttons"},{default:n(()=>[r.value?(g(),b(x,{key:0,type:"success",onClick:H},{default:n(()=>[f("添加")]),_:1})):E("",!0),r.value?E("",!0):(g(),b(x,{key:1,type:"primary",onClick:a[11]||(a[11]=_=>Z()),disabled:o.value==0&&e.apn_mode=="手动"||c.value.apn_mode=="auto"&&e.apn_mode=="自动"},{default:n(()=>[f("应用")]),_:1},8,["disabled"])),o.value!=0&&e.apn_mode=="手动"&&!r.value?(g(),b(x,{key:2,type:"danger",onClick:W},{default:n(()=>[f("删除")]),_:1})):E("",!0)]),_:1}),p(x,{style:{visibility:"hidden"}})]),_:1},8,["model"])]),_:1})),[[G,s.value]])]),_:1})),[[B]]),O((g(),b(U,{xs:24,sm:24,md:8,lg:8,xl:8,class:"mb-[5px]",initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:n(()=>[p(R,{shadow:"never"},{header:n(()=>[p(X(F),{className:"type-it2",values:["说明"],cursor:!1,speed:60})]),default:n(()=>[p(y,{class:"mx-1"},{default:n(()=>[oe,f("：如果您的服务提供商向您提供了固定的 APN，请选择“手动 APN”。如果没有提供，请选择“自动 APN”，该设备将会自动获取参数。"),te]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[ie,f("：包含了一个或多个配置文件名称。"),ue]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[se,f("：IPv4/IPv6/IPv4&IPv6。"),de]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[re,f("：有关您指定的新的配置文件的名称。"),fe]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[ce,f("：接入点名称。有效字符包含：0-9 a-z A-Z . - 且开头和结尾不能是 . 或者 - 。"),ve]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[me,f("：由您的互联网服务提供商 (ISP) 来提供。密码验证协议 (PAP) 不用加密就可以通过两次握手建立对端的身份。询问握手认证协议（CHAP）通过三次握手周期性的校验对端的身份。"),ge]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[Pe,f("：用于建立连接时，从互联网服务提供商处获取验证。"),Ne]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[Ae,f("：用于建立连接时，从互联网服务提供商处获取验证。"),Ce]),_:1}),p(y,{class:"mx-1"},{default:n(()=>[f("点击“设为默认”以将该配置文件设置为默认配置文件。")]),_:1})]),_:1})]),_:1})),[[B]])]),_:1})])}}});export{xe as default};