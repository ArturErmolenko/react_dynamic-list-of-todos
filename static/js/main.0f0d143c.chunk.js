(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(10),c=n.n(s),r=n(3),a=n(11),o=n(4),i=n(5),l=n(7),u=n(6),d=n(2),h=n.n(d),p=n(1),j=n.n(p),b=(n(17),n(18),n(19),n(9)),m=n.n(b),f=n(0),v=function(e){var t=e.todos,n=e.selectUser,s=e.input,c=e.handleChange,r=e.select,a=e.handleSelectChange,o=e.userId;return Object(f.jsxs)("div",{className:"TodoList",children:[Object(f.jsx)("h2",{children:"Todos:"}),Object(f.jsxs)("label",{htmlFor:"input",children:["Filter by Title:"," ",Object(f.jsx)("input",{type:"text",name:"input",id:"input",value:s,onChange:c}),Object(f.jsxs)("select",{name:"select",value:r,onChange:a,children:[Object(f.jsx)("option",{value:"all",children:"All"}),Object(f.jsx)("option",{value:"completed",children:"Completed"}),Object(f.jsx)("option",{value:"not",children:"Not completed"})]})]}),Object(f.jsx)("div",{className:"TodoList__list-container",children:Object(f.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return Object(f.jsxs)("li",{className:m()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(f.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(f.jsx)("input",{id:"".concat(e.id),type:"checkbox",readOnly:!0}),Object(f.jsx)("p",{children:e.title})]}),Object(f.jsx)("button",{className:m()("TodoList__user-button","button",{"TodoList__user- button--selected":e.userId===o}),type:"button",onClick:function(){return n(e.userId)},children:"User: ".concat(e.userId)})]},e.id)}))})})]})},O=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){return e.json()}))},x=(n(21),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e=Object(r.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=this.props.userId,O("users/".concat(n));case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.user)return Object(f.jsx)("span",{children:"No user"});var e=this.state.user,t=e.name,n=e.id,s=e.email,c=e.phone;return Object(f.jsxs)("div",{className:"CurrentUser",children:[Object(f.jsx)("h2",{className:"CurrentUser__title",children:Object(f.jsxs)("span",{children:["Selected user:",n]})}),Object(f.jsx)("h3",{className:"CurrentUser__name",children:t}),Object(f.jsx)("p",{className:"CurrentUser__email",children:s}),Object(f.jsx)("p",{className:"CurrentUser__phone",children:c}),Object(f.jsx)("button",{type:"button",onClick:this.props.removeUser,children:"Clear"})]})}}]),n}(j.a.Component)),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={todos:[],selectedUserId:0,input:"",select:""},e.handleClear=function(){e.selectUser(0)},e.selectUser=function(t){e.setState({selectedUserId:t})},e.handleChange=function(t){var n=t.target.value;e.setState({input:n})},e.handleSelectChange=function(t){var n=t.target.value;e.setState({select:n})},e.getPreparedTodos=function(){var t=e.state,n=t.todos,s=t.input,c=t.select,r=s.toLowerCase(),o=Object(a.a)(n);switch(s&&(o=n.filter((function(e){return e.title.toLowerCase().includes(r)}))),c){case"completed":return o.filter((function(e){return e.completed}));case"not":return o.filter((function(e){return!e.completed}));default:return o}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.select,s=e.input,c=this.getPreparedTodos();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(v,{select:n,handleChange:this.handleChange,input:s,todos:c,selectUser:this.selectUser,handleSelectChange:this.handleSelectChange,userId:t})}),Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)("div",{className:"App__content-container",children:t?Object(f.jsx)(x,{userId:t,removeUser:this.handleClear}):"No user selected"})})]})}}]),n}(j.a.Component);c.a.render(Object(f.jsx)(_,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0f0d143c.chunk.js.map