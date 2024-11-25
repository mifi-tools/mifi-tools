import{d as q,a3 as J,n as v,L as Q,t as W,M as X,P as Z,r as i,b as k,o as p,c as ee,e as a,j as o,w as M,i as g,g as b,z as V,h as m,B as y,S as h,K as u,bh as B,bi as T}from"./index-4789ca0a.js";const te={class:"card-header"},le={class:"type-it-container"},oe={class:"button-container"},ae={class:"dialog-footer"},re=q({name:"sms",__name:"sms",setup(ne){const t=J({text:"",number:"",content:""}),x=v(0),E=v(0),A=v(),r=v(!0),_=Q(),f=v(!1);W(()=>{D()});function D(){X("cmd=sms_capacity_info",!0).then(e=>{E.value=parseInt(e.sms_nv_total),x.value=parseInt(e.sms_nv_draftbox_total)+parseInt(e.sms_nv_rev_total)+parseInt(e.sms_nv_send_total)})}Z(()=>{if(_.state.Messages&&_.state.Messages.length>0&&_.state.Messages[0].id!=""&&!_.state.Messages[0].date.includes(";")){D();let e=[];for(let l=0;l<_.state.Messages.length;l++){const n=_.state.Messages[l];n.number!="Config"&&e.push({id:n.id,tag:n.tag,content:n.content,date:n.date,number:n.number})}A.value=e,r.value=!1}_.state.Messages.length===0&&(r.value=!1)});function F(e){r.value=!0,h({msg_id:e.id+";",notCallback:"true",goformId:"DELETE_SMS"}).then(l=>{l.result==="success"?(r.value=!1,u("删除成功",{type:"success"})):(r.value=!1,u("删除失败",{type:"error"}))}).catch(l=>{r.value=!1,u("请求失败",{type:"error"})})}function I(e){t.number=e.number,e.tag=="4"?(t.text="",t.content=e.content):(t.content="",t.text=e.content),e.tag=="1"&&h({tag:"0",msg_id:e.id+";",goformId:"SET_MSG_READ"}).then(l=>{l.result}).catch(l=>{}),f.value=!0}function N(){t.content.length>0&&t.number.length>3&&(f.value=!1,r.value=!0,h({notCallback:"true",goformId:"SAVE_SMS",SMSMessage:B(t.content),SMSNumber:t.number,Index:"-1",encode_type:S(t.content).encodeType,sms_time:T(),draft_group_id:""}).then(e=>{e.result==="success"?(r.value=!1,u("保存草稿成功",{type:"success"})):(r.value=!1,u("保存草稿失败",{type:"error"}))}).catch(e=>{r.value=!1,u("请求失败",{type:"error"})})),t.text="",t.number="",t.content=""}let U=["000A","000C","000D","0020","0021","0022","0023","0024","0025","0026","0027","0028","0029","002A","002B","002C","002D","002E","002F","0030","0031","0032","0033","0034","0035","0036","0037","0038","0039","003A","003A","003B","003C","003D","003E","003F","0040","0041","0042","0043","0044","0045","0046","0047","0048","0049","004A","004B","004C","004D","004E","004F","0050","0051","0052","0053","0054","0055","0056","0057","0058","0059","005A","005B","005C","005D","005E","005F","0061","0062","0063","0064","0065","0066","0067","0068","0069","006A","006B","006C","006D","006E","006F","0070","0071","0072","0073","0074","0075","0076","0077","0078","0079","007A","007B","007C","007D","007E","00A0","00A1","00A3","00A4","00A5","00A7","00BF","00C4","00C5","00C6","00C7","00C9","00D1","00D6","00D8","00DC","00DF","00E0","00E4","00E5","00E6","00E8","00E9","00EC","00F1","00F2","00F6","00F8","00F9","00FC","0393","0394","0398","039B","039E","03A0","03A3","03A6","03A8","03A9","20AC"],z=["007B","007D","005B","005D","007E","005C","005E","20AC","007C"];function S(e){var l="GSM7_default",n=0;if(!e)return{encodeType:l,extendLen:n};for(var d=0;d<e.length;d++){for(var c=e.charCodeAt(d).toString(16).toUpperCase();c.length!=4;)c="0"+c;if(z.indexOf(c)!==-1&&n++,U.indexOf(c)===-1){l="UNICODE",n=0;break}}return{encodeType:l,extendLen:n}}function R(){if(t.number.length<=3)return u("请输入正确的号码",{type:"error"});if(t.content.length<=0)return u("请输入正确的短信内容",{type:"error"});t.content.length>0&&(r.value=!0,h({ID:"-1",notCallback:"true",goformId:"SEND_SMS",Number:t.number,encode_type:S(t.content).encodeType,sms_time:T(),MessageBody:B(t.content)}).then(e=>{e.result==="success"?(r.value=!1,u("短信发送成功",{type:"success"})):(r.value=!1,u("短信发送失败",{type:"error"}))}).catch(e=>{r.value=!1,u("请求失败",{type:"error"})}))}return(e,l)=>{const n=i("el-button"),d=i("el-table-column"),c=i("el-tag"),G=i("el-table"),L=i("el-card"),$=i("el-col"),O=i("el-row"),C=i("el-input"),w=i("el-form-item"),j=i("el-form"),H=i("el-dialog"),K=k("loading"),P=k("motion");return p(),ee("div",null,[a(O,{gutter:24},{default:o(()=>[M((p(),g($,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb-[5px]",initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:o(()=>[M((p(),g(L,{shadow:"never"},{header:o(()=>[b("div",te,[b("div",le," 短信列表("+V(x.value)+"/"+V(E.value)+") ",1),b("div",oe,[a(n,{plain:"",onClick:l[0]||(l[0]=s=>f.value=!0)},{default:o(()=>[m("发送短信")]),_:1})])])]),default:o(()=>[a(G,{data:A.value,style:{width:"100%"}},{default:o(()=>[a(d,{prop:"id",label:"id",width:"50"}),a(d,{prop:"number",label:"号码",width:"160","show-overflow-tooltip":""}),a(d,{prop:"tag",label:"类型",width:"80"},{default:o(s=>[s.row.tag=="0"?(p(),g(c,{key:0,class:"ml-2"},{default:o(()=>[m("接收")]),_:1})):y("",!0),s.row.tag=="1"?(p(),g(c,{key:1,class:"ml-2",type:"success"},{default:o(()=>[m("未读")]),_:1})):y("",!0),s.row.tag=="2"?(p(),g(c,{key:2,class:"ml-2",type:"warning"},{default:o(()=>[m("发送")]),_:1})):y("",!0),s.row.tag=="4"?(p(),g(c,{key:3,class:"ml-2",type:"info"},{default:o(()=>[m("草稿")]),_:1})):y("",!0)]),_:1}),a(d,{prop:"content",label:"内容","show-overflow-tooltip":""}),a(d,{prop:"date",label:"时间",width:"160"}),a(d,{fixed:"right",label:"操作",width:"150"},{default:o(s=>[a(n,{link:"",type:"success",size:"small",onClick:Y=>I(s.row)},{default:o(()=>[m("查看/发送")]),_:2},1032,["onClick"]),a(n,{link:"",type:"danger",size:"small",onClick:Y=>F(s.row)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})),[[K,r.value]])]),_:1})),[[P]])]),_:1}),a(H,{id:"YoungTable",modelValue:f.value,"onUpdate:modelValue":l[5]||(l[5]=s=>f.value=s),title:"短信详细",onClose:N,"align-center":""},{footer:o(()=>[b("span",ae,[a(n,{onClick:l[4]||(l[4]=s=>f.value=!1)},{default:o(()=>[m("关闭")]),_:1}),a(n,{type:"primary",onClick:R},{default:o(()=>[m(" 发送 ")]),_:1})])]),default:o(()=>[a(j,{model:t,"status-icon":"",class:"demo-ruleForm","label-position":"left"},{default:o(()=>[a(w,{label:"号码","label-width":"40px"},{default:o(()=>[a(C,{modelValue:t.number,"onUpdate:modelValue":l[1]||(l[1]=s=>t.number=s),type:"number",autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(w,{label:"","label-width":"40px",style:{"margin-top":"20px"}},{default:o(()=>[a(C,{modelValue:t.text,"onUpdate:modelValue":l[2]||(l[2]=s=>t.text=s),autosize:{minRows:4,maxRows:8},type:"textarea",disabled:""},null,8,["modelValue"])]),_:1}),a(w,{label:"内容","label-width":"40px",style:{"margin-top":"20px","margin-bottom":"-20px"}},{default:o(()=>[a(C,{modelValue:t.content,"onUpdate:modelValue":l[3]||(l[3]=s=>t.content=s),autosize:{minRows:4,maxRows:8},type:"textarea",maxlength:"765","show-word-limit":"",placeholder:"请输入要发送的内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{re as default};
