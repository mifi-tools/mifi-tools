import{T as h}from"./index-296c76cc.js";import{d as w,n as i,t as g,M as x,r as a,b as _,o as l,c as I,e,j as o,w as p,i as d,f as n}from"./index-4789ca0a.js";const M=w({name:"connect",__name:"list",setup(k){let s=i(),c=i(!0);return g(()=>{x("cmd=station_list",!0).then(r=>{c.value=!1,s.value=r.station_list})}),(r,B)=>{const t=a("el-table-column"),m=a("el-table"),u=a("el-card"),f=a("el-col"),v=a("el-row"),b=_("loading"),y=_("motion");return l(),I("div",null,[e(v,{gutter:24},{default:o(()=>[p((l(),d(f,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb-[5px]",initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:o(()=>[p((l(),d(u,{shadow:"never"},{header:o(()=>[e(n(h),{className:"type-it1",values:["WIFI连接列表"],cursor:!1,speed:60})]),default:o(()=>[e(m,{data:n(s),style:{width:"100%"}},{default:o(()=>[e(t,{prop:"ip_addr",label:"IP地址"}),e(t,{prop:"hostname",label:"主机名","default-value":"未知"}),e(t,{prop:"mac_addr",label:"Mac地址"}),e(t,{prop:"dev_type",label:"接入方式"}),e(t,{prop:"ip_type",label:"IP分配"})]),_:1},8,["data"])]),_:1})),[[b,n(c)]])]),_:1})),[[y]])]),_:1})])}}});export{M as default};
