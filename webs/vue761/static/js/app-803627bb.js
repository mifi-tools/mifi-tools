import{l as r,a7 as a,a8 as i,m as o,$ as u,s as d}from"./index-4789ca0a.js";const n=r({id:"pure-app",state:()=>{var e,t;return{sidebar:{opened:((e=a().getItem(`${i()}layout`))==null?void 0:e.sidebarStatus)??o().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((t=a().getItem(`${i()}layout`))==null?void 0:t.layout)??o().Layout,device:u()?"mobile":"desktop"}},getters:{getSidebarStatus(e){return e.sidebar.opened},getDevice(e){return e.device}},actions:{TOGGLE_SIDEBAR(e,t){const s=a().getItem(`${i()}layout`);e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,s.sidebarStatus=!0):!e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,s.sidebarStatus=!1):!e&&!t&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,s.sidebarStatus=this.sidebar.opened),a().setItem(`${i()}layout`,s)},async toggleSideBar(e,t){await this.TOGGLE_SIDEBAR(e,t)},toggleDevice(e){this.device=e},setLayout(e){this.layout=e}}});function p(){return n(d)}export{p as u};
