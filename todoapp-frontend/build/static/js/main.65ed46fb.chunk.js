(this["webpackJsonptodo-frontend"]=this["webpackJsonptodo-frontend"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n(9),i=n.n(c),o=n(17),s=n(22),l=n(70),u=n(79),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":case"STATUS_UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload._id}));default:return e}},p=Object(s.c)({todos:d}),b=n(49),j=n(160),f=n(161),x=n(152),h=n(164),m=n(159),O=n(18),g=n.n(O),y=n(36),v=n(37),A=n.n(v),k="https://react-todo-task-app.herokuapp.com/api/todos",C=function(e,t){return A.a.patch("".concat(k,"/").concat(e),t)},w=function(e){return A.a.delete("".concat(k,"/").concat(e))},S=function(e,t){return A.a.patch("".concat(k,"/").concat(e,"/statusupdate"),t)},L=n(26),E=n(81),T=n(162),J=n(163),I=n(71),M=n.n(I),N=n(148),X=Object(N.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Z=function(e){var t=e.currentId,n=e.setCurrentId,c=Object(o.c)((function(e){return t?e.todos.find((function(e){return e._id===t})):null})),i=Object(r.useState)({title:"",description:"",selectedFile:"",done:!1}),s=Object(b.a)(i,2),l=s[0],u=s[1],d=X(),p=Object(o.b)();Object(r.useEffect)((function(){c&&u(c)}),[c]);var j=function(){n(null),u({title:"",description:"",selectedFile:"",done:!1})};return Object(a.jsx)(E.a,{className:d.paper,children:Object(a.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:function(e){e.preventDefault(),p(t?function(e,t){return function(){var n=Object(y.a)(g.a.mark((function n(a){var r,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATE",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,l):function(e){return function(){var t=Object(y.a)(g.a.mark((function t(n){var a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,A.a.post(k,c);case 3:a=t.sent,r=a.data,n({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(l)),j()},children:[Object(a.jsxs)(x.a,{variant:"h6",children:[t?"Edit":"Create"," Task"]}),Object(a.jsx)(T.a,{name:"title",variant:"outlined",required:!0,label:"Title",fullWidth:!0,value:l.title,onChange:function(e){return u(Object(L.a)(Object(L.a)({},l),{},{title:e.target.value}))}}),Object(a.jsx)(T.a,{name:"description",variant:"outlined",required:!0,label:"Description",fullWidth:!0,value:l.description,onChange:function(e){return u(Object(L.a)(Object(L.a)({},l),{},{description:e.target.value}))}}),Object(a.jsx)("div",{className:d.fileInput,children:Object(a.jsx)(M.a,{type:"file",required:!0,multiple:!1,onDone:function(e){var t=e.base64;return u(Object(L.a)(Object(L.a)({},l),{},{selectedFile:t}))}})}),Object(a.jsx)(J.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(a.jsx)(J.a,{variant:"contained",color:"secondary",size:"small",onClick:j,fullWidth:!0,children:"Clear"})]})})},B=n(158),U=n(153),z=n(154),R=n(155),D=n(156),K=n(77),V=n.n(K),H=n(78),W=n.n(H),G=n(76),Q=n.n(G),F=n(75),q=n.n(F),P=Object(N.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Y="data:image/png;base64,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",_=function(e){var t=e.todo,n=e.setCurrentId,r=P(),c=Object(o.b)(),i=function(e){c(function(e){return function(){var t=Object(y.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:n({type:"DELETE",payload:{_id:e}}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(e))},s=function(e,t){t.done=!t.done,c(function(e,t){return function(){var n=Object(y.a)(g.a.mark((function n(a){var r,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S(e,t);case 3:r=n.sent,c=r.data,a({type:"STATUS_UPDATE",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(e,t))};return Object(a.jsxs)(U.a,{className:r.card,children:[Object(a.jsx)(z.a,{className:r.media,image:t.selectedFile?t.selectedFile:Y,title:t.title}),Object(a.jsxs)("div",{className:r.overlay,children:[Object(a.jsx)(x.a,{variant:"h6",children:t.title}),Object(a.jsx)(x.a,{variant:"body2",children:q()(t.createAt).fromNow()})]}),Object(a.jsx)("div",{className:r.overlay2,children:Object(a.jsx)(J.a,{size:"small",style:{color:"white"},onClick:function(){return n(t._id)},children:Object(a.jsx)(Q.a,{fontSize:"default"})})}),Object(a.jsx)(R.a,{children:Object(a.jsx)(x.a,{className:r.title,variant:"h5",gutterBottom:!0,children:t.description})}),Object(a.jsxs)(D.a,{className:r.cardActions,children:[t.done?Object(a.jsx)("h3",{style:{color:"green",fontSize:"bold",margin:"10px"},children:" Completed"}):Object(a.jsxs)(J.a,{size:"small",style:{color:"blue"},onClick:function(){s(t._id,t)},children:[Object(a.jsx)(V.a,{fontSize:"small"}),"Complete"]}),Object(a.jsxs)(J.a,{size:"small",style:{color:"red"},onClick:function(){return i(t._id)},children:[Object(a.jsx)(W.a,{fontSize:"small"}),"Delete"]})]})]})},$=n(20),ee=n(157),te=Object(N.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(ee.a[500]),backgroundColor:ee.a[500]}},Object($.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object($.a)(t,"actionDiv",{textAlign:"center"}),t})),ne=function(e){var t=e.setCurrentId,n=Object(o.c)((function(e){return e.todos})),r=te();return n.length?Object(a.jsx)(m.a,{className:r.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(a.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(_,{todo:e,setCurrentId:t})},e._id)}))}):Object(a.jsx)(B.a,{})},ae=Object(N.a)((function(e){var t;return t={},Object($.a)(t,e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}}),Object($.a)(t,"appBar",{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}),Object($.a)(t,"heading",{color:"rgba(0,183,255, 1)"}),Object($.a)(t,"image",{marginLeft:"15px"}),t})),re=(n(117),function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],i=ae(),s=Object(o.b)();return Object(r.useEffect)((function(){s(function(){var e=Object(y.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get(k);case 3:n=e.sent,a=n.data,t({type:"FETCH_ALL",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,s]),Object(a.jsxs)(j.a,{maxidth:"lg",children:[Object(a.jsxs)(f.a,{className:i.appBar,position:"static",color:"inherit",children:[Object(a.jsx)(x.a,{className:i.heading,variant:"h2",align:"center",children:"Task App"}),Object(a.jsx)("img",{src:Y,className:i.image,alt:"memories",height:"60"})]}),Object(a.jsx)(h.a,{in:!0,children:Object(a.jsx)(j.a,{children:Object(a.jsxs)(m.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(a.jsx)(m.a,{item:!0,xs:12,sm:7,children:Object(a.jsx)(ne,{setCurrentId:c})}),Object(a.jsx)(m.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(Z,{currentId:n,setCurrentId:c})})]})})})]})}),ce=Object(s.e)(p,Object(s.d)(Object(s.a)(l.a)));i.a.render(Object(a.jsx)(o.a,{store:ce,children:Object(a.jsx)(re,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.65ed46fb.chunk.js.map