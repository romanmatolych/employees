(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{13:function(e,t,r){e.exports={alphabetMenu:"employees_alphabetMenu__2fkDl",employees:"employees_employees__U33kk"}},14:function(e,t,r){e.exports={letterSection:"letter-section_letterSection__3xXyB",header:"letter-section_header__1y2R6"}},15:function(e,t,r){e.exports={header:"month-group_header__1WAyj",monthGroup:"month-group_monthGroup__2jWzf"}},21:function(e,t,r){e.exports={fullName:"user_fullName__2tbOd"}},22:function(e,t,r){e.exports={employeesBirthday:"employees-birthday_employeesBirthday__HpL3Q"}},35:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(0),c=r.n(s),a=r(6),o=r.n(a),i=r(4),l=(r(35),r(3)),u=r(18),d=r(19),b=r(2),h=r(23),j=r(12),p=r.n(j),f=r(20),m="LOAD_USERS_REQUEST",O="LOAD_USERS_SUCCESS",y="LOAD_USERS_FAILURE",v="USER_TRIGGER",g=function(){var e=localStorage.getItem("selectedUserIds");try{e=e?JSON.parse(e):[]}catch(t){e=[]}return{error:null,loading:!1,byId:{},allIds:[],selectedIds:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(b.a)(Object(b.a)({},e),{},{loading:!0,error:null});case O:var r=t.payload.reduce((function(e,t){return e[t.id]=t,e}),{});return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,byId:r,allIds:Object.keys(r)});case y:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});case v:return Object(b.a)(Object(b.a)({},e),{},{selectedIds:t.payload});default:return e}},_=Object(l.combineReducers)({users:x}),N=Object(l.createStore)(_,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),U=r(13),I="abcdefghijklmnopqrstuvwxyz".split(""),S=["January","February","March","April","May","June","July","August","September","October","November","December"],k=r(14),E=r(21),C=function(e){var t=e.user,r=e.onChange,s=t.lastName,c=t.firstName,a=t.id,o=t.checked;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:E.fullName,children:[s," ",c]}),Object(n.jsx)("input",{type:"checkbox",onChange:function(e){return r(a,e)},checked:o})]})},w=function(e){var t=e.letter,r=e.users,s=e.onUserCheck,c=r.slice().sort((function(e,t){return e.lastName.localeCompare(t.lastName)})).map((function(e){return Object(n.jsx)(C,{user:e,onChange:s},e.id)}));return Object(n.jsxs)("div",{className:k.letterSection,children:[Object(n.jsx)("div",{className:k.header,children:t}),c.length?c:"\u2014"]})},D={loadUsers:function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.next=3,fetch("".concat("https://yalantis-react-school-api.yalantis.com/api/task0","/users"));case 3:if(r=e.sent,e.prev=4,r.ok){e.next=7;break}throw new Error("Bad request");case 7:return e.next=9,r.json();case 9:n=e.sent,t({type:O,payload:n}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),t({type:y,error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()},triggerUser:function(e,t){return function(r,n){var s=n().users,c=t?[].concat(Object(h.a)(s.selectedIds),[e]):s.selectedIds.filter((function(t){return t!==e}));localStorage.setItem("selectedUserIds",JSON.stringify(c)),r({type:v,payload:c})}}},R=Object(i.b)((function(e){var t=e.users,r=t.byId,n=t.allIds,s=t.loading,c=t.error,a=t.selectedIds;return{users:n.map((function(e){return r[e]})),isLoading:s,error:c,selectedUserIds:a}}),D)((function(e){var t=e.users,r=e.loadUsers,c=e.triggerUser,a=e.isLoading,o=e.selectedUserIds,i=e.error;Object(s.useEffect)((function(){r()}),[r]);var l=function(e){return t.filter((function(t){return t.lastName.toLowerCase().startsWith(e)})).map((function(e){return Object(b.a)(Object(b.a)({},e),{},{checked:o.includes(e.id)})}))},u=function(e,t){return c(e,t.target.checked)};return Object(n.jsxs)("div",{className:U.employees,children:[Object(n.jsx)("div",{className:"header",children:"Employees"}),Object(n.jsx)("div",{className:U.alphabetMenu,children:i?"Error: ".concat(i.message):a?"Loading...":I.map((function(e){return Object(n.jsx)(w,{letter:e,users:l(e),onUserCheck:u},e)}))})]})})),L=r(16),M=function(e){var t=new Date(e);return"".concat(t.getUTCDate()," ").concat(S[t.getUTCMonth()],", ").concat(t.getUTCFullYear()," year")},A=r(15),J=function(e){var t=e.monthName,r=e.users.slice().sort((function(e,t){return Date.parse(e.dob)-Date.parse(t.dob)})).map((function(e){var t=e.id,r=e.lastName,s=e.firstName,c=e.dob;return Object(n.jsxs)("li",{children:[r," ",s," - ",M(c)]},t)}));return Object(n.jsxs)("div",{className:A.monthGroup,children:[Object(n.jsx)("div",{className:A.header,children:t}),Object(n.jsx)("ul",{children:r})]})},T=r(22),B=Object(i.b)((function(e){var t=e.users,r=t.byId;return{selectedUsers:t.selectedIds.map((function(e){return r[e]})).filter((function(e){return!!e}))}}))((function(e){var t,r=e.selectedUsers,s=(t=r,S.reduce((function(e,r,n){var s=t.filter((function(e){return new Date(e.dob).getUTCMonth()===n}));return e[r]=s,e}),{})),c=Object.entries(s).filter((function(e){return Object(L.a)(e,2)[1].length})).map((function(e){var t=Object(L.a)(e,2),r=t[0],s=t[1];return Object(n.jsx)(J,{monthName:r,users:s},r)}));return Object(n.jsxs)("div",{className:T.employeesBirthday,children:[Object(n.jsx)("div",{className:"header",children:"Employees birthday"}),r.length?c:"No selected employees"]})}));o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(i.a,{store:N,children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)(B,{})]})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.76696498.chunk.js.map