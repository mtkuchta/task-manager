(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{79:function(n,t,e){"use strict";e.r(t);var r,a,o,c,i,s,u=e(1),d=e.n(u),l=e(32),p=e.n(l),f=e(21),g=e.n(f),h=e(27),b=e(23),j=e(10),m=e(5),x=e(12),O=e(7),A=Object(m.b)(r||(r=Object(O.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Montserrat:wght@400;700&display=swap');\n\nfont-family: 'Architects Daughter', cursive;\nfont-family: 'Montserrat', sans-serif;\n\n\nhtml{\n    box-sizing:border-box;\n    color:",'\n\n}\n\n*,*::after, *::before{\n    box-sizing:inherit;\n    margin:0;\n    padding:0;\n}\n\nbody{\n    font-family: "Montserrat", sans-serif;\n    font-size:10px;\n}\n\na,button{\n    font-family:"Montserrat", sans-serif;\n}\n\n'])),(function(n){return n.theme.colors.BLACK})),w={colors:{YELLOW:"#E3B505",RED:"#DB504A",GREEN:"#084C61",CADET:"#4F6D7A",CADETBLUE:"#56A3A6",BLACK:"#111"}},v=m.c.div(a||(a=Object(O.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  background: linear-gradient(to top right, ",", transparent);\n"])),(function(n){return n.theme.colors.CADET})),y=m.c.main(o||(o=Object(O.a)(["\n  height: 100%;\n  width: 75%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),k=m.c.aside(c||(c=Object(O.a)(["\n  width: 30%;\n  min-width: 300px;\n  max-width: 400px;\n  height: 100%;\n"]))),E=m.c.header(i||(i=Object(O.a)(["\n  width: 100%;\n  height: 12%;\n  display: flex;\n  align-items: center;\n"]))),C=m.c.h1(s||(s=Object(O.a)(["\n  max-width: 360px;\n  font-size: 4em;\n  font-weight: normal;\n  color: ",";\n  padding: 0 5%;\n  text-shadow: -5px 6px 8px ",";\n  color: ",";\n  border-bottom: 2px solid ",";\n  padding-bottom: 5px;\n  text-align: center;\n"])),(function(n){return n.theme.colors.BLACK}),(function(n){return n.theme.colors.CADET}),(function(n){return n.theme.colors.GREEN}),(function(n){return n.theme.colors.RED})),D=e(2),L=function(){return Object(D.jsx)(C,{children:"Task Manager"})},I=function(){return Object(D.jsx)(E,{children:Object(D.jsx)(L,{})})},U=e(15),B=e(30),T=(e(61),e(80),B.a.auth);B.a.initializeApp({apiKey:"AIzaSyA_m_taXBHFYCeitt4GwMPzL5RbxE0OA9o",authDomain:"task-manager-cc51b.firebaseapp.com",databaseURL:"https://task-manager-cc51b-default-rtdb.firebaseio.com",projectId:"task-manager-cc51b",storageBucket:"task-manager-cc51b.appspot.com",messagingSenderId:"803205366966",appId:"1:803205366966:web:40f20341d359b8482c5217"});var R,H,N,G,Y,z,S,P,M,V,F,K,q,X,W,Z,Q,_,J=B.a.firestore,$=function(){var n=Object(h.a)(g.a.mark((function n(t){var e,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=[],!t.currentUser){n.next=7;break}return r=J().collection("".concat(t.currentUser.uid)),n.next=5,r.get();case 5:n.sent.forEach((function(n){e.push(n.data())}));case 7:return n.abrupt("return",e);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),nn=function(n,t,e){var r=t.find((function(n){return n.id===e}));J().collection("".concat(n.currentUser.uid)).doc("".concat(e)).set(r)},tn="LOG_IN",en="LOG_ERROR",rn="CLEAR_ERROR",an="HIDE_LOADER",on="CLEAR_USER_DATA",cn=function(n){return{type:tn,user:n}},sn=function(n){return{type:en,message:n}},un=function(){return{type:rn}},dn=m.c.div(R||(R=Object(O.a)(["\n  width: 40vh;\n  height: 40vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));\n\n  .signUp {\n    width: 100%;\n    text-align: center;\n    font-size: 1.5em;\n  }\n"])),(function(n){return n.theme.colors.YELLOW})),ln=m.c.form(H||(H=Object(O.a)(["\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),pn=m.c.div(N||(N=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  input[type='submit'] {\n    width: 80%;\n    margin: 8% 0;\n    font-family: 'Montserrat';\n    font-size: 1.8em;\n    font-weight: normal;\n    padding: 8px;\n    background-color: ",";\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.55));\n    cursor: pointer;\n    transform: scale(1);\n    transition: 0.2s;\n    &:hover {\n      color: white;\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.CADET}),(function(n){return n.theme.colors.CADETBLUE})),fn=function(n){var t=n.value;return Object(D.jsx)(pn,{children:Object(D.jsx)("input",{type:"submit",value:t})})},gn=m.c.div(G||(G=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  input {\n    width: 100%;\n    font-size: 2em;\n    font-family: 'Architects Daughter';\n    line-height: 2.2em;\n    border: none;\n    border-bottom: 1px solid ",";\n    background-color: transparent;\n    margin-bottom: 40px;\n    padding-left: 5px;\n    transition: 0.3s;\n\n    &:focus {\n      border: none;\n      outline: none;\n      border-bottom: 1px solid ",";\n    }\n    &:focus::placeholder {\n      color: transparent;\n    }\n  }\n"])),(function(n){return n.theme.colors.CADET}),(function(n){return n.theme.colors.CADETBLUE})),hn=function(n){var t=n.type,e=n.value,r=n.inputHandler,a=n.placeholder,o=n.name;return Object(D.jsx)(gn,{children:Object(D.jsx)("input",{name:o,type:t,placeholder:a,value:e,onChange:function(n){r(n)},required:!0})})},bn=m.c.p(Y||(Y=Object(O.a)(["\n  width: 100%;\n  color: red;\n  font-size: 1.5em;\n  text-align: center;\n  padding: 10px 0;\n"]))),jn=function(n){var t=n.message;return Object(D.jsx)(bn,{children:t})},mn=Object(x.b)((function(n){return{user:n.user,logInForm:n.logInForm}}),(function(n){return{logIn:function(t){return n(cn(t))},setLogError:function(t){return n(sn(t))},clearLogError:function(){return n(un())},changeInput:function(t){return n(function(n){return{type:"CHANGE_INPUT",payload:n}}(t))},clearInput:function(){return n({type:"CLEAR_INPUT"})}}}))((function(n){var t=n.user,e=n.logIn,r=n.setLogError,a=n.clearLogError,o=n.changeInput,c=n.logInForm,i=n.clearInput,s=Object(j.g)(),u=Object(U.b)({from:{transform:"scale(0)"},to:{transform:"scale(1)"},config:{friction:150,tension:400,mass:18}}),d=function(){var n=Object(h.a)(g.a.mark((function n(t,o,c){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a(),n.next=4,T().signInWithEmailAndPassword(o,c).then((function(n){return e(n)})).catch((function(n){return r(n.message)}));case 4:s.push("/"),i();case 6:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),l=function(n){o({name:n.target.name,value:n.target.value})};return Object(D.jsxs)(dn,{as:U.a.div,style:u,children:[Object(D.jsx)(L,{}),t.error?Object(D.jsx)(jn,{message:t.error||""}):null,Object(D.jsxs)(ln,{onSubmit:function(n){return d(n,c.email,c.password)},children:[Object(D.jsx)(hn,{name:"email",placeholder:"email",type:"text",value:c.email,inputHandler:l}),Object(D.jsx)(hn,{name:"password",placeholder:"password",type:"password",value:c.password,inputHandler:l}),Object(D.jsx)(fn,{value:"Log in"})]}),Object(D.jsxs)("div",{className:"signUp",children:["Do you need account? ",Object(D.jsx)(b.b,{to:"/signup",children:"Sign Up"})]})]})})),xn=m.c.div(z||(z=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),On=function(n){var t=n.handleLogin;return Object(D.jsx)(xn,{children:Object(D.jsx)(mn,{handleLogin:t})})},An=m.c.form(S||(S=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  flex-grow: 0;\n  justify-content: center;\n\n  }\n  .checkbox_container {\n    width: 49%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n\n    p {\n      display: block;\n      width: 50%;\n      font-size: 1.5em;\n      font-weight: bold;\n      padding-left: 10px;\n      color: #333;\n    }\n  }\n"]))),wn="FETCH_TASKS",vn="ADD_TASK",yn="DELETE_TASK",kn="CHANGE_TASK_STATUS",En="CHANGE_TASK_ATTRIBUTES",Cn="CHANGE_TASK_INPUT",Dn="CLEAR_TASK_INPUT",Ln=function(n){var t=[];return n.length>=1?(n.map((function(n){return t.push(n.id)})),t.sort((function(n,t){return n-t})),t[t.length-1]+1):0},In=m.c.label(P||(P=Object(O.a)(["\n  display: block;\n  position: relative;\n  padding-left: 15px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 10px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  color: transparent;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  .checkmark {\n    position: absolute;\n    top: 20%;\n    left: 0%;\n    height: 21px;\n    width: 21px;\n    border-radius: 4px;\n    border: 2px solid #333;\n    transition: 0.3s;\n  }\n\n  &:hover input ~ .checkmark {\n    border: 2px solid ",";\n    transform: scale(1.05);\n  }\n\n  input:checked ~ .checkmark {\n    /* border: none; */\n  }\n\n  .checkmark:after {\n    content: '';\n    position: absolute;\n    display: none;\n    color: ",";\n  }\n  input:checked ~ .checkmark:after {\n    display: block;\n  }\n\n  .checkmark:after {\n    left: 4px;\n    top: 0px;\n    width: 9px;\n    height: 14px;\n    border: solid ",";\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n"])),(function(n){return n.theme.colors.CADET}),(function(n){return n.theme.colors.GREEN}),(function(n){var t=n.theme;return n.red?t.colors.RED:t.colors.GREEN})),Un=function(n){var t=n.handleCheckbox,e=n.red,r=n.value,a=n.id,o=n.name;return Object(D.jsxs)(In,{red:!!e,id:a,children:[Object(D.jsx)("input",{name:o,type:"checkbox",onChange:t,checked:!!r}),Object(D.jsx)("span",{className:"checkmark"}),"1"]})},Bn=Object(x.b)((function(n){return{tasks:n.tasks.tasks,user:n.user,addTaskForm:n.addTask}}),(function(n){return{addTask:function(t){return n(function(n){return{type:vn,task:n}}(t))},changeTaskInput:function(t){return n(function(n){return{type:Cn,payload:n}}(t))},clearTaskInput:function(){return n({type:Dn})}}}))((function(n){var t=n.tasks,e=n.user.currentUser,r=n.addTask,a=n.addTaskForm,o=n.changeTaskInput,c=n.clearTaskInput,i={description:a.task,id:Ln(t),isImportant:a.isImportant,isUrgent:a.isUrgent,isDone:!1},s=function(n,t){n.preventDefault(),r(t),function(n,t){J().collection("".concat(n)).doc("".concat(t.id)).set(t,{merge:!0})}(e.uid,t),c()},u=function(n){o({name:n.target.name,value:n.target.checked})};return Object(D.jsxs)(An,{onSubmit:function(n){return s(n,i)},children:[Object(D.jsx)(hn,{name:"task",value:a.task,type:"text",placeholder:"new task...",inputHandler:function(n){o({name:n.target.name,value:n.target.value})}}),Object(D.jsxs)("div",{className:"checkbox_container",children:[Object(D.jsx)(Un,{name:"isImportant",red:!0,handleCheckbox:u,value:a.isImportant}),Object(D.jsx)("p",{children:"important"})]}),Object(D.jsxs)("div",{className:"checkbox_container",children:[Object(D.jsx)(Un,{name:"isUrgent",red:!0,handleCheckbox:u,value:a.isUrgent}),Object(D.jsx)("p",{children:"urgent"})]}),Object(D.jsx)(fn,{value:"Add task"})]})})),Tn=m.c.div(M||(M=Object(O.a)(["\n  width: 90%;\n  height: 28%;\n  /* flex-direction: row; */\n  margin: 0 auto;\n  background-color: ",";\n  padding: 15px 10px;\n  filter: drop-shadow(-6px 6px 4px rgba(0, 0, 0, 0.55));\n\n  h1 {\n    font-weight: normal;\n    font-size: 2.5em;\n    width: 100%;\n    padding: 5px 0 10px 10px;\n  }\n"])),(function(n){return n.theme.colors.YELLOW})),Rn=function(){var n=Object(U.b)({from:{transform:"translateX(-500px)"},to:{transform:"translateX(0)"}});return Object(D.jsxs)(Tn,{as:U.a.div,style:n,children:[Object(D.jsx)("h1",{children:"Add Task:"}),Object(D.jsx)(Bn,{})]})},Hn=m.c.div(V||(V=Object(O.a)(["\n  width: 50vh;\n\n  height: 60vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));\n\n  .description {\n    width: 100%;\n    text-align: center;\n    font-size: 2.5em;\n  }\n"])),(function(n){return n.theme.colors.YELLOW})),Nn=m.c.form(F||(F=Object(O.a)(["\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Gn="CHANGE_SIGNUP_INPUT",Yn="CLEAR_SIGNUP_INPUT",zn="CLEAR_PASSWORDS",Sn=Object(x.b)((function(n){return{user:n.user,signUpForm:n.signUpForm}}),(function(n){return{setLogError:function(t){return n(sn(t))},clearLogError:function(){return n(un())},changeSignUpInput:function(t){return n(function(n){return{type:Gn,payload:n}}(t))},clearSignUpInput:function(){return n({type:Yn})},clearSignUpPasswords:function(){return n({type:zn})}}}))((function(n){var t=n.user,e=n.setLogError,r=n.signUpForm,a=n.changeSignUpInput,o=n.clearSignUpInput,c=n.clearSignUpPasswords,i=Object(j.g)(),s=Object(U.b)({from:{transform:"scale(0)"},to:{transform:"scale(1)"},config:{friction:150,tension:400,mass:18}}),u=function(n){a({name:n.target.name,value:n.target.value})};return Object(D.jsxs)(Hn,{as:U.a.div,style:s,children:[Object(D.jsx)(L,{}),Object(D.jsx)("div",{className:"description",children:"Create new account:"}),t.error?Object(D.jsx)(jn,{message:t.error||""}):null,Object(D.jsxs)(Nn,{onSubmit:function(n){n.preventDefault(),e(null),function(n){var t={numbers:/[1-9]/g,uppercase:/[A-Z]/g},e=n.split("").length>=6,r=t.numbers.test(n),a=t.uppercase.test(n);return!!(e&&r&&a)}(r.password)?r.password===r.confirmedPassword?T().createUserWithEmailAndPassword(r.email,r.password).then((function(){o(),i.push("/")})).catch((function(n){return e(n.message)})):(e("Passwords are different"),c()):e("Password must consist of at least 6 characters, contain a capital letter and a number ")},children:[Object(D.jsx)(hn,{name:"email",placeholder:"email",type:"text",value:r.email,inputHandler:u}),Object(D.jsx)(hn,{name:"password",placeholder:"password",type:"password",value:r.password,inputHandler:u}),Object(D.jsx)(hn,{name:"confirmedPassword",placeholder:"confirm password",type:"password",value:r.confirmedPassword,inputHandler:u}),Object(D.jsx)(fn,{value:"Sign Up"})]})]})})),Pn=m.c.div(K||(K=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Mn=function(n){var t=n.handlerCreateUser;return Object(D.jsx)(Pn,{children:Object(D.jsx)(Sn,{handlerCreateUser:t})})},Vn=e(49),Fn=e(48),Kn="START_DRAG",qn="DRAG_OVER",Xn="DRAG_LEAVE",Wn="DROP_TASK",Zn=m.c.li(q||(q=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: 'Caveat', sans-serif;\n  padding: 5px 5px;\n  cursor: pointer;\n  border-radius: 10px;\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n\n  .description {\n    font-family: 'Architects Daughter';\n    font-size: 2.1em;\n    width: 80%;\n    text-decoration: ",";\n  }\n\n  button {\n    position: relative;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    outline: none;\n    border: none;\n    line-height: 20px;\n    padding-bottom: 2px;\n    font-size: 15px;\n    cursor: pointer;\n    background-color: transparent;\n    transition: 0.4s;\n    &:hover {\n      background-color: ",";\n    }\n\n    img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      height: 100%;\n    }\n  }\n"])),(function(n){return n.isDone?"line-through":"none"}),(function(n){return n.theme.colors.RED})),Qn=function(n,t){var e=n.findIndex((function(n){return n.id===t}));return n[e].isDone},_n=Object(x.b)((function(n){return{tasks:n.tasks.tasks,dragAndDrop:n.dragAndDrop,user:n.user}}),(function(n){return{deleteTask:function(t){return n(function(n){return{type:yn,task:n}}(t))},changeTaskStatus:function(t){return n(function(n){return{type:kn,task:n}}(t))},startDrag:function(t){return n(function(n){return{type:Kn,task:n}}(t))}}}))((function(n){var t=n.id,e=n.description,r=n.deleteTask,a=n.changeTaskStatus,o=n.startDrag,c=n.tasks,i=n.user;return Object(D.jsxs)(Zn,{isDone:Qn(c,t),draggable:!0,onDragStart:function(n){var t=n.target.firstChild.id,e=n.target;setTimeout((function(){e.style.opacity="0"}),0),o(parseInt(t))},children:[Object(D.jsx)(Un,{handleCheckbox:function(n){var t=parseInt(n.target.parentNode.id);a(t),nn(i,c,t)},value:Qn(c,t),id:t}),Object(D.jsx)("p",{className:"description",children:e}),Object(D.jsx)("button",{className:"delete",onClick:function(n){var t=parseInt(n.target.parentNode.dataset.index);r(t),function(n,t){J().collection("".concat(n.currentUser.uid)).doc("".concat(t)).delete()}(i,t)},"data-index":t,children:Object(D.jsx)("img",{src:"data:image/png;base64,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"})})]})})),Jn=m.c.div(X||(X=Object(O.a)(["\n  height: 100%;\n  width: 100%;\n  grid-area: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .card {\n    width: 94%;\n    height: 94%;\n    background-color: ",";\n    filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));\n    transform: translateZ(0);\n    transform: rotate(",") scale(",");\n    transition: 0.5s;\n    padding: 4%;\n    transition: 0.6s;\n  }\n\n  .card-container-enter {\n    opacity: 0.01;\n  }\n  .card-container-enter-active {\n    opacity: 1;\n  }\n"])),(function(n){return n.area}),(function(n){return n.theme.colors.YELLOW}),(function(n){var t=n.rot;return"".concat(t,"deg")}),(function(n){return n.isOver?1.05:1})),$n=Object(x.b)((function(n){return{tasks:n.tasks.tasks,dragAndDrop:n.dragAndDrop,user:n.user}}),(function(n){return{dragOver:function(t){return n({type:qn,container:t})},dragLeave:function(){return n({type:Xn})},dropTask:function(t){return n(function(n){return{type:En,payload:n}}(t))},clearState:function(){return n({type:Wn})}}}))((function(n){var t=n.area,e=n.important,r=n.urgent,a=n.tasks,o=n.user,c=n.dragAndDrop,i=n.dragOver,s=n.dragLeave,d=n.dropTask,l=n.clearState,p=Math.random().toFixed(2),f=Object(u.useState)(!1),g=Object(Vn.a)(f,2),h=g[0],b=g[1],j=[];return a.length>=1&&(j=a.map((function(n){if(e===n.isImportant&&r===n.isUrgent)return Object(D.jsx)(_n,{id:n.id,description:n.description,rot:p},n.id)}))),Object(D.jsx)(Fn.Spring,{from:{transform:"scale(0)"},to:{transform:"scale(1)"},config:{friction:150,tension:400,mass:18},children:function(n){return Object(D.jsx)(Jn,{style:n,isOver:h,area:t,rot:p,children:Object(D.jsx)("ul",{className:"card","data-important":"".concat(e),"data-urgent":"".concat(r),onDragEnd:function(n){!function(n){if(n.preventDefault(),n.target.style.opacity="1",c.container){var t=a[a.findIndex((function(n){return n.id===c.draggedTask}))],e=c.container;d({transferedTask:t,container:e}),nn(o,a,t.id)}}(n),l()},onDrop:function(){b(!1)},onDragOver:function(n){!function(n){n.preventDefault(),c.container!=n.target&&i(n.target)}(n),b(!0)},onDragLeave:function(n){n.preventDefault(),s(n),b(!1)},children:j||""})})}})})),nt=m.c.div(W||(W=Object(O.a)(["\n  grid-area: ",";\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  h1 {\n    font-weight: normal;\n    font-size: 30px;\n    letter-spacing: 1px;\n    background-color: ",";\n    width: 320px;\n    text-align: center;\n    line-height: 50px;\n    filter: drop-shadow(-6px "," 4px rgba(0, 0, 0, 0.65));\n    transform: rotate(",");\n    flex-shrink: 0;\n    border-radius: 5px;\n  }\n"])),(function(n){return n.area}),(function(n){var t=n.theme;return"red"===n.color?t.colors.RED:t.colors.CADETBLUE}),(function(n){return n.rotated?"-6px":"6px"}),(function(n){return n.rotated?"-90deg":"0"})),tt=function(n){var t=n.area,e=n.red,r=n.rotated,a=n.text;return Object(D.jsx)(nt,{area:t,color:e?"red":"cadet",rotated:r,children:Object(D.jsx)("h1",{children:a})})},et=m.c.div(Z||(Z=Object(O.a)(["\n  width: 95vh;\n  height: 95vh;\n  display: grid;\n  grid-template-columns: 10% 45% 45%;\n  grid-template-rows: 10% 45% 45%;\n  grid-template-areas:\n    'empty urgent not_urgent'\n    'important important-urgent important-not_urgent'\n    'not_important not_important-urgent not_important-not_urgent';\n"]))),rt=[{area:"urgent",text:"Urgent",red:!0,rotated:!1},{area:"not_urgent",text:"Not urgent",red:!1,rotated:!1},{area:"important",text:"Important",red:!0,rotated:!0},{area:"not_important",text:"Not important",red:!1,rotated:!0}],at=[{area:"important-urgent",important:!0,urgent:!0},{area:"important-not_urgent",important:!0,urgent:!1},{area:"not_important-urgent",important:!1,urgent:!0},{area:"not_important-not_urgent",important:!1,urgent:!1}],ot=function(){return Object(D.jsxs)(et,{children:[at.map((function(n,t){return Object(D.jsx)($n,{area:n.area,important:n.important,urgent:n.urgent},t)})),rt.map((function(n){return Object(D.jsx)(tt,{area:n.area,text:n.text,red:n.red,rotated:n.rotated},n.area)}))]})},ct=m.c.div(Q||(Q=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  height: 16%;\n  margin: 15px auto;\n  background-color: ",";\n  padding: 15px 10px;\n  filter: drop-shadow(-6px 6px 4px rgba(0, 0, 0, 0.55));\n  overflow: hidden;\n\n  h2 {\n    font-size: 2.5em;\n    font-weight: normal;\n  }\n\n  .email {\n    width: 100%;\n    font-size: 1.8em;\n    margin: 8px 0;\n    text-align: center;\n  }\n\n  .logout {\n    width: 80%;\n    margin: 6% auto;\n    font-family: 'Montserrat';\n    font-size: 1.8em;\n    font-weight: normal;\n    padding: 8px;\n    background-color: ",";\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.55));\n    cursor: pointer;\n    transform: scale(1);\n    transition: 0.2s;\n    &:hover {\n      color: white;\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.YELLOW}),(function(n){return n.theme.colors.CADET}),(function(n){return n.theme.colors.CADETBLUE})),it=Object(x.b)((function(n){return{user:n.user}}),(function(n){return{clearUserData:function(){return n({type:on})}}}))((function(n){var t=n.user,e=n.clearUserData,r=t.currentUser?t.currentUser.email:"",a=Object(U.b)({from:{transform:"translateY(-500px)"},to:{transform:"translateY(0)"},config:{friction:20,tension:80,mass:2}});return Object(D.jsxs)(ct,{as:U.a.div,style:a,children:[Object(D.jsx)("h2",{children:"User:"}),Object(D.jsx)("p",{className:"email",children:r}),Object(D.jsx)("button",{className:"logout",onClick:function(){B.a.auth().signOut(),e()},children:"Log out"})]})})),st=e(4),ut=e(50),dt=Object(x.b)((function(n){return{user:n.user}}),{})((function(n){var t=n.children,e=n.user,r=Object(ut.a)(n,["children","user"]);return Object(D.jsx)(j.b,Object(st.a)(Object(st.a)({},r),{},{render:function(n){var r=n.location;return e.currentUser?t:Object(D.jsx)(j.a,{to:{pathname:"/login",state:{from:r}}})}}))})),lt=m.c.div(_||(_=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  p {\n    font-size: 5em;\n    opacity: 1;\n    animation: loader 2s infinite ease-in-out;\n  }\n\n  @keyframes loader {\n    0% {\n      opacity: 1;\n    }\n\n    50% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),pt=function(){return Object(D.jsx)(lt,{children:Object(D.jsx)("p",{children:"Loading..."})})};var ft=Object(x.b)((function(n){return{user:n.user}}),(function(n){return{logIn:function(t){return n(cn(t))},fetchTasks:function(t){return n(function(n){return{type:wn,tasks:n}}(t))},setIsDataLoaded:function(){return n({type:an})}}}))((function(n){var t=n.user,e=n.logIn,r=n.fetchTasks,a=n.setIsDataLoaded;return Object(u.useEffect)((function(){var n=T().onAuthStateChanged((function(n){return e(n)}));return function(){return n()}}),[]),Object(u.useEffect)(Object(h.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,$(t);case 3:n.t1=n.sent,(0,n.t0)(n.t1),t.currentUser&&a();case 6:case"end":return n.stop()}}),n)}))),[t.currentUser]),Object(D.jsxs)(m.a,{theme:w,children:[Object(D.jsx)(A,{}),Object(D.jsx)(b.a,{children:Object(D.jsxs)(v,{children:[Object(D.jsxs)(k,{children:[Object(D.jsx)(I,{}),t.isDataLoaded&&t.currentUser?Object(D.jsx)(it,{}):null,t.isDataLoaded&&t.currentUser?Object(D.jsx)(Rn,{}):null]}),Object(D.jsxs)(j.d,{children:[Object(D.jsx)(j.b,{path:"/login",children:t.currentUser?Object(D.jsx)(j.a,{to:"/"}):Object(D.jsx)(On,{})}),Object(D.jsx)(j.b,{path:"/signup",children:Object(D.jsx)(Mn,{})}),Object(D.jsx)(dt,{exact:!0,path:"/",children:Object(D.jsx)(y,{children:t.isDataLoaded?Object(D.jsx)(ot,{}):Object(D.jsx)(pt,{})})})]})]})})]})})),gt=e(28),ht=e(16),bt=function(n,t){var e=Object(ht.a)(n);return e.push(t),e},jt=function(n,t){var e=Object(ht.a)(n),r=e.findIndex((function(n){return n.id===t}));return e.splice(r,1),e},mt=function(n,t){var e=Object(ht.a)(n);return e.forEach((function(n){n.id===t&&(n.isDone=!n.isDone)})),e},xt=function(n,t){var e=Object(ht.a)(n),r=e.findIndex((function(n){return n.id===parseInt(t.transferedTask.id)}));return e.splice(r,1),e.push(function(n,t){var e=t,r="true"===n.dataset.important,a="true"===n.dataset.urgent;return e.isImportant=r,e.isUrgent=a,e}(t.container,t.transferedTask)),e},Ot={tasks:[]},At={container:null,draggedTask:null},wt={currentUser:null,error:null,isDataLoaded:!1},vt=e(14),yt="CHANGE_INPUT",kt="CLEAR_INPUT",Et={email:"",password:""},Ct={email:"",password:"",confirmedPassword:""},Dt={task:"",isImportant:!1,isUrgent:!1},Lt=Object(gt.b)({tasks:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case wn:return Object(st.a)(Object(st.a)({},n),{},{tasks:t.tasks});case vn:return Object(st.a)(Object(st.a)({},n),{},{tasks:bt(n.tasks,t.task)});case yn:return Object(st.a)(Object(st.a)({},n),{},{tasks:jt(n.tasks,t.task)});case kn:return Object(st.a)(Object(st.a)({},n),{},{tasks:mt(n.tasks,t.task)});case En:return Object(st.a)(Object(st.a)({},n),{},{tasks:xt(n.tasks,t.payload)});default:return n}},dragAndDrop:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Kn:return Object(st.a)(Object(st.a)({},n),{},{draggedTask:t.task});case qn:return Object(st.a)(Object(st.a)({},n),{},{container:t.container});case Xn:return Object(st.a)(Object(st.a)({},n),{},{container:null});case Wn:return Object(st.a)(Object(st.a)({},n),{},{draggedTask:null,container:null});default:return n}},user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tn:return Object(st.a)(Object(st.a)({},n),{},{currentUser:t.user});case en:return Object(st.a)(Object(st.a)({},n),{},{error:t.message});case rn:return Object(st.a)(Object(st.a)({},n),{},{error:null});case an:return Object(st.a)(Object(st.a)({},n),{},{isDataLoaded:!0});case on:return Object(st.a)(Object(st.a)({},n),{},{isDataLoaded:!1});default:return n}},logInForm:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case yt:return Object(st.a)(Object(st.a)({},n),{},Object(vt.a)({},t.payload.name,t.payload.value));case kt:return{email:"",password:""};default:return n}},signUpForm:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Gn:return Object(st.a)(Object(st.a)({},n),{},Object(vt.a)({},t.payload.name,t.payload.value));case Yn:return{email:"",password:"",confirmedPassword:""};case zn:return Object(st.a)(Object(st.a)({},n),{},{password:"",confirmedPassword:""});default:return n}},addTask:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Cn:return Object(st.a)(Object(st.a)({},n),{},Object(vt.a)({},t.payload.name,t.payload.value));case Dn:return{task:"",isImportant:!1,isUrgent:!1};default:return n}}}),It=Object(gt.c)(Lt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({actionSanitizer:function(n){return"DRAG_LEAVE"===n.type&&n.data?Object(st.a)(Object(st.a)({},n),{},{data:"<<LONG_BLOB>>"}):n},stateSanitizer:function(n){return n.data?Object(st.a)(Object(st.a)({},n),{},{data:"<<LONG_BLOB>>"}):n}}));p.a.render(Object(D.jsx)(d.a.StrictMode,{children:Object(D.jsx)(x.a,{store:It,children:Object(D.jsx)(ft,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.502f6ef6.chunk.js.map