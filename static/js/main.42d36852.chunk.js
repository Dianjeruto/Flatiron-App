(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c);a(12),a(13);var o=function(e){let{transaction:t,onDeleteTransaction:a}=e,{date:n,description:c,category:l,amount:o}=t;return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement("button",{style:{color:"red"},onClick:function(){fetch("https://my-json-server.typicode.com/DianJeruto/Flatiron-App/transactions/".concat(t.id),{method:"DELETE"}).then(e=>e.json()).then(()=>a(t))}},"DELETE"))))};var i=function(e){let{searchParam:t,onTransactionSearch:a}=e;return r.a.createElement("div",{className:"ui large fluid icon input"},r.a.createElement("input",{type:"text",name:"searchParam",value:t,placeholder:"Search your recent transactions",onChange:function(e){a(e.target.value)}}),r.a.createElement("i",{className:"circular search link icon"}))};var s=function(e){let{onAddTransaction:t}=e;const[a,c]=Object(n.useState)({date:"",description:"",category:"",amount:0});function l(e){const t=e.target.name,n=e.target.value;c({...a,[t]:n})}return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:function(e){e.preventDefault();const n={date:a.date,description:a.description,category:a.category,amount:a.amount},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("https://my-json-server.typicode.com/DianJeruto/Flatiron-App/transactions",r).then(e=>e.json()).then(e=>t(e)),c({date:"",description:"",category:"",amount:0})}},r.a.createElement("div",{className:"inline fields"},r.a.createElement("label",{id:"date"},"Date:",r.a.createElement("input",{type:"date",name:"date","aria-labelledby":"date",value:a.date,onChange:l})),r.a.createElement("input",{type:"text",name:"description",value:a.description,placeholder:"Description",onChange:l}),r.a.createElement("input",{type:"text",name:"category",value:a.category,placeholder:"Category",onChange:l}),r.a.createElement("input",{type:"number",name:"amount",value:a.amount,placeholder:"Amount",onChange:l})),r.a.createElement("button",{className:"ui button",type:"submit",style:{color:"green"}},"Add Transaction")))};var u=function(){const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)("");Object(n.useEffect)(()=>{fetch("https://my-json-server.typicode.com/DianJeruto/Flatiron-App/transactions").then(e=>e.json()).then(e=>t(e))},[]);const l=e.filter(e=>e.description.toLowerCase().includes(a.toLowerCase()));function u(a){const n=e.filter(e=>e.id!==a.id);t(n)}return r.a.createElement("div",null,r.a.createElement(i,{searchParam:a,onTransactionSearch:c}),r.a.createElement(s,{onAddTransaction:function(e){t(t=>[...t,e])}}),r.a.createElement("table",{className:"ui celled striped padded table"},r.a.createElement("thead",{className:"ui center aligned header"},r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"DELETE?"))),l.map(e=>r.a.createElement(o,{key:e.id,transaction:e,onDeleteTransaction:u}))))};var m=function(){return r.a.createElement("div",{className:"ui raised segment"},r.a.createElement("div",{className:"ui segment violet inverted"},r.a.createElement("h1",null,"The Royal Bank of Flatiron")),r.a.createElement(u,null))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:c,getTTFB:l}=t;a(e),n(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.42d36852.chunk.js.map