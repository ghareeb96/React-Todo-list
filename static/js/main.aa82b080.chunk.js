(this["webpackJsonpTodo-list"]=this["webpackJsonpTodo-list"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),l=a.n(c),r=(a(14),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),d=a(8),p=(a(15),a(16),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo"},o.a.createElement("div",{className:"task-description"},o.a.createElement("h2",null,this.props.task)),o.a.createElement("div",{className:"task-btns"},o.a.createElement("button",{className:"completed"},o.a.createElement("i",{className:"far fa-check-square"})),o.a.createElement("button",{className:"delete"},o.a.createElement("i",{className:"fas fa-trash-alt"}))))}}]),t}(n.Component)),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={inputText:"",todos:[]},a.addTodo=function(){a.setState((function(e){return{todos:[].concat(Object(d.a)(e.todos),[{task:a.state.inputText,completed:!1}]),inputText:""}}))},a.handleInput=function(e){a.setState({inputText:e.target.value})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-list"},o.a.createElement("div",{className:"todo-list-header"},o.a.createElement("div",{className:"input-bar"},o.a.createElement("input",{value:this.state.inputText,type:"text",onChange:this.handleInput,id:"todo-input",placeholder:"Enter a Todo"}),o.a.createElement("button",{className:"add-btn",onClick:this.addTodo},o.a.createElement("i",{className:"far fa-plus-square"}))),o.a.createElement("div",{className:"filter-bar"},o.a.createElement("select",{name:"filter",id:"filter"},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"completed"},"Completed"),o.a.createElement("option",{value:"incompleted"},"Incompleted")))),o.a.createElement("div",{className:"todos"},this.state.todos.map((function(e){return o.a.createElement(p,{task:e.task})}))))}}]),t}(n.Component),f=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Your Todo-List")),o.a.createElement(h,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.aa82b080.chunk.js.map