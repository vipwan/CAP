import{n as o,B as r,c as l}from"./index.821d9cc3.js";const c={components:{BIconInfoCircleFill:r},data(){return{isBusy:!1,items:[]}},computed:{fields(){return[{key:"id",label:this.$t("Id")},{key:"name",label:this.$t("Node Name")},{key:"address",label:this.$t("Ip Address")},{key:"port",label:this.$t("Port")},{key:"tags",label:this.$t("Tags")},{key:"actions",label:this.$t("Actions")}]}},mounted(){this.fetchData()},methods:{fetchData(){this.isBusy=!0;var s=this.getCookie("cap.node");l.get("/nodes").then(t=>{for(var e of t.data)e.id==s&&(e._rowVariant="primary");this.items=t.data,this.isBusy=!1})},switchNode(s){document.cookie=`cap.node=${escape(s.id)};`,window.location.reload()},getCookie(s){for(var t=s+"=",e=decodeURIComponent(document.cookie),a=e.split(";"),i=0;i<a.length;i++){for(var n=a[i];n.charAt(0)==" ";)n=n.substring(1);if(n.indexOf(t)==0)return n.substring(t.length,n.length)}return""}}};var d=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"text-left mb-4"},[t._v(t._s(t.$t("Nodes")))]),e("b-table",{attrs:{fields:t.fields,items:t.items,busy:t.isBusy,"show-empty":"","empty-text":"Unconfigure node discovery !"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center text-secondary my-2"},[e("b-spinner",{staticClass:"align-middle"}),e("strong",{staticClass:"ml-2"},[t._v(t._s(t.$t("Loading"))+"...")])],1)]},proxy:!0},{key:"empty",fn:function(a){return[e("h5",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e("b-icon-info-circle-fill"),t._v(" "+t._s(a.emptyText)+" ")],1)]}},{key:"cell(actions)",fn:function(a){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(i){return t.switchNode(a.item)}}},[t._v(" Switch ")])]}}])})],1)},u=[],f=o(c,d,u,!1,null,null,null,null);const h=f.exports;export{h as default};
