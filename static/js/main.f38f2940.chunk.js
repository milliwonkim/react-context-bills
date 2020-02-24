(this.webpackJsonpbill=this.webpackJsonpbill||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(4),c=n.n(r),i=(n(10),n(11),n(1)),o=(n(12),n(2)),s=Object(l.createContext)(),u=function(){var e=Object(l.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)(""),o=Object(i.a)(c,2),u=o[0],m=o[1],d=Object(l.useContext)(s).updateBills;return a.a.createElement("div",{className:"add-bill-container"},a.a.createElement("input",{className:"add-bill-form-control form-control",placeholder:"Enter bill title",type:"text",value:n,onChange:function(e){return r(e.target.value)}}),a.a.createElement("input",{className:"add-bill-form-control form-control",placeholder:"Enter bill monthly cost",type:"number",value:u,onChange:function(e){return m(e.target.value)}}),a.a.createElement("button",{className:"add-bill-form-control btn btn-primary",onClick:function(){(function(){var e=u&&Number.parseFloat(u);return n&&n.split("").find((function(e){return" "!==e}))&&e})()&&(d({title:n,monthlyCost:u,enabled:!0}),m(""),r(""))}},"Add Bill"))},m=(n(13),function(){var e=Object(l.useContext)(s),t=e.bills,n=e.editBill,r=e.setEditModeEnabled;return a.a.createElement("div",{className:"bill-list-container"},a.a.createElement("h6",{className:"edit-mode-btn",onClick:function(){return r(!0)}},"Edit"),t.map((function(e,t){return a.a.createElement("div",{key:t,className:"bill-list-row"},a.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.enabled,onChange:function(){return n({title:e.title,monthlyCost:e.monthlyCost,enabled:!e.enabled})}}),a.a.createElement("div",{className:"bill-list-row-content"},e.title," - $",e.monthlyCost))})))}),d=(n(14),function(){var e=Object(l.useContext)(s),t=e.bills,n=e.selectedCostInterval,r=function(e){var t=Number.parseFloat(e);switch(n){case"Monthly":return t;case"Yearly":return 12*t;case"Weekly":return 12*t/52;case"Daily":return 12*t/365;default:return 0}};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"bill-total-container"},n," bill cost:",a.a.createElement("span",{className:"total-cost"},"$"+t.reduce((function(e,t){return t.enabled?r(t.monthlyCost)+e:e}),0).toFixed(2))),a.a.createElement("div",{className:"total-saved-container"},n," saved:",a.a.createElement("span",{className:"total-saved"},"$"+t.reduce((function(e,t){return t.enabled?e:r(t.monthlyCost)+e}),0).toFixed(2))))}),b=(n(15),function(){var e=Object(l.useContext)(s),t=e.selectedCostInterval,n=e.setSelectedCostInterval;return a.a.createElement("div",{className:"interval-option-container"},a.a.createElement("div",{className:"Daily"===t?"selected-interval":"interval",onClick:function(e){return n(e.target.innerText)}},"Daily"),a.a.createElement("div",{className:"Monthly"===t?"selected-interval":"interval",onClick:function(e){return n(e.target.innerText)}},"Monthly"),a.a.createElement("div",{className:"Yearly"===t?"selected-interval":"interval",onClick:function(e){return n(e.target.innerText)}},"Yearly"))}),f=(n(16),function(){var e=Object(l.useContext)(s),t=e.bills,n=e.setEditModeEnabled,r=e.editBill,c=e.deleteBill;return a.a.createElement("div",{className:"edit-bill-container"},a.a.createElement("h6",{className:"edit-mode-done-btn",onClick:function(){return n(!1)}},"Done"),t.map((function(e,t){return a.a.createElement("div",{key:t,className:"edit-bill-row"},a.a.createElement("div",{className:"edit-bill-row-content"},a.a.createElement("div",{className:"edit-bill-title"},e.title),a.a.createElement("input",{className:"edit-bill-cost-input",type:"number",value:e.monthlyCost,onChange:function(t){return r({title:e.title,enabled:e.enabled,monthlyCost:t.target.value})}}),a.a.createElement("h6",{onClick:function(){return c(e)},className:"delete-button"},"DELETE")),a.a.createElement("hr",null))})))}),v=function(){var e=Object(l.useContext)(s).editModeEnabled;return a.a.createElement("div",{className:"bills-container"},e?a.a.createElement(f,null):a.a.createElement("span",null,a.a.createElement(b,null),a.a.createElement(u,null),a.a.createElement(d,null),a.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement((function(e){var t=e.children,n=Object(l.useState)([]),r=Object(i.a)(n,2),c=r[0],u=r[1],m=Object(l.useState)("Monthly"),d=Object(i.a)(m,2),b=d[0],f=d[1],v=Object(l.useState)(!1),E=Object(i.a)(v,2),p=E[0],h=E[1];Object(l.useEffect)((function(){u(JSON.parse(localStorage.getItem("portexe-bills"))||[])}),[u]);var C=function(e){return e.sort((function(e,t){return e.title.toUpperCase()<t.title.toUpperCase()?-1:0}))};return a.a.createElement(s.Provider,{value:{bills:c,updateBills:function(e){var t=C([].concat(Object(o.a)(c),[e]));localStorage.setItem("portexe-bills",JSON.stringify(t)),u(t)},editBill:function(e){var t=c.filter((function(t){return t.title!==e.title})),n=C([].concat(Object(o.a)(t),[e]));localStorage.setItem("portexe-bills",JSON.stringify(n)),u(n)},selectedCostInterval:b,setSelectedCostInterval:f,setEditModeEnabled:h,editModeEnabled:p,deleteBill:function(e){var t=c.filter((function(t){return t.title!==e.title}));localStorage.setItem("portexe-bills",JSON.stringify(t)),u(t)}}},t)}),null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.f38f2940.chunk.js.map