System.register(["./index-legacy.eab2fbf9.js"],(function(t,e){"use strict";var s,n,r=document.createElement("style");return r.textContent=".snippet-code pre .comment{color:green}.snippet-code pre .keyword{color:#00f}.snippet-code pre .string{color:#a31515}.snippet-code pre .type{color:#2b91af}\n",document.head.appendChild(r),{setters:[function(t){s=t.n,n=t.c}],execute:function(){t("default",s({data:function(){return{subscribers:{}}},mounted:function(){var t=this;n.get("/subscriber").then((function(e){t.subscribers=e.data}))}},(function(){var t=this,e=t._self._c;return e("b-row",[e("h2",{attrs:{"page-line":"","mb-4":""}},[t._v(t._s(t.$t("Subscriber")))]),e("b-table-simple",{attrs:{"caption-top":"",responsive:""}},[e("caption",[t._v(t._s(t.$t("SubscriberDescription")))]),e("b-thead",{attrs:{"head-variant":"secondary"}},[e("b-tr",[e("b-th",[t._v(t._s(t.$t("Group")))]),e("b-th",[t._v(t._s(t.$t("Name")))]),e("b-th",[t._v(t._s(t.$t("Method")))])],1)],1),e("b-tbody",[t._l(t.subscribers,(function(s){return t._l(s.values,(function(n,r){return e("b-tr",{key:s.group+r},[0==r?e("b-td",{staticClass:"align-middle",attrs:{rowspan:s.childCount}},[t._v(" "+t._s(s.group)+" ")]):t._e(),e("b-td",{staticClass:"text-left align-middle"},[t._v(" "+t._s(n.topic)+" ")]),e("b-td",[e("div",{staticClass:"snippet-code text-left align-middle"},[e("code",[e("pre",[e("span",{staticClass:"type"},[t._v(t._s(n.implName))]),t._v(":"),e("br"),e("span",{domProps:{innerHTML:t._s(n.methodEscaped)}},[t._v(t._s(n.methodEscaped))])])])])])],1)}))}))],2)],1)],1)}),[],!1,null,null,null,null).exports)}}}));
