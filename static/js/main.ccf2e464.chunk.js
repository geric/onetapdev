(this.webpackJsonponetapdev=this.webpackJsonponetapdev||[]).push([[0],{41:function(e,a,t){e.exports=t(73)},46:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n,l=t(0),s=t.n(l),r=t(21),o=t.n(r),i=(t(46),t(9)),c=t(10),m=t(12),d=t(11),u=t(19),p=t(3),b=t(23),g=t.n(b),E=t(15),h=t.n(E),v=function(e){e?h.a.defaults.headers.common.Authorization="Bearer "+e:delete h.a.defaults.headers.common.Authorization},f=t(18),N=function(e){return{type:"SET_CURRENT_USER",payload:e}},O=function(e){return{type:"AUTH_LOADING",payload:e}},j=function(e){return{type:"SET_MESSAGE",payload:e}},y=t(24),w=t(14),x=t(40),S=t(1),T=t(70),L={isAuthenticated:!1,user:{},isLoading:!1,message:""},_={},k={isLoading:!1,dashboard:{},usersList:{},authoritiesList:{},groupsList:{},subAdminsList:{},profile:{},details:{},history:{}},R=Object(w.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_USER":return Object(S.a)(Object(S.a)({},e),{},{isAuthenticated:!T(a.payload),user:a.payload});case"AUTH_LOADING":return Object(S.a)(Object(S.a)({},e),{},{isLoading:a.payload});case"SET_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{message:a.payload,isLoading:!1});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_ERRORS":return a.payload;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_DASHBOARD":return Object(S.a)(Object(S.a)({},e),{},{dashboard:a.payload,isLoading:!1});case"GET_USER_PROFILE":return Object(S.a)(Object(S.a)({},e),{},{profile:a.payload,isLoading:!1});case"GET_USER_DETAILS":return Object(S.a)(Object(S.a)({},e),{},{details:a.payload,isLoading:!1});case"GET_SCAN_HISTORY":return Object(S.a)(Object(S.a)({},e),{},{history:a.payload,isLoading:!1});case"GET_ALL_USERS":return Object(S.a)(Object(S.a)({},e),{},{usersList:Object(S.a)({},a.payload),isLoading:!1});case"GET_ALL_AUTHORITIES":return Object(S.a)(Object(S.a)({},e),{},{authoritiesList:Object(S.a)({},a.payload),isLoading:!1});case"GET_ALL_GROUPS":return Object(S.a)(Object(S.a)({},e),{},{groupsList:Object(S.a)({},a.payload),isLoading:!1});case"GET_ALL_SUB_ADMINS":return Object(S.a)(Object(S.a)({},e),{},{subAdminsList:Object(S.a)({},a.payload),isLoading:!1});case"USER_LOADING":return Object(S.a)(Object(S.a)({},e),{},{isLoading:a.payload});default:return e}}}),A=[x.a],C=Object(w.e)(R,{},Object(w.d)(w.a.apply(void 0,A),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||w.d)),D=(t(71),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var a;this.props.location.pathname!==e.location.pathname&&(window.scrollTo(0,0),C.dispatch((a={},function(e){e({type:"SET_ERRORS",payload:a})})))}},{key:"render",value:function(){return null}}]),t}(s.a.Component)),U=Object(p.f)(D),I=t(17),B=t(16),G=t.n(B),F=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={isTop:!0},e.isScrollOnTop=e.isScrollOnTop.bind(Object(I.a)(e)),e}return Object(c.a)(t,[{key:"isScrollOnTop",value:function(){var e=window.scrollY<10;e!==this.state.isTop&&this.setState({isTop:e})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.isScrollOnTop)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.isScrollOnTop)}},{key:"render",value:function(){var e=this.props.initialBg||"bg-transparent",a=this.props.scrolledBg||"bg-blue-midnight shadow-sm",t=this.props.expandedBg||"bg-blue-space shadow-sm",n=this.props.brandColor||"text-white";return s.a.createElement("nav",{className:G()("navbar navbar-default navbar-expand-md fixed-top",{[e]:!this.props.expanded&&this.state.isTop,[a]:!this.props.expanded&&!this.state.isTop,[t]:this.props.expanded}),role:"navigation"},s.a.createElement("div",{className:"container pl-4"},s.a.createElement(u.b,{to:"/",className:"navbar-brand ".concat(n)}),this.props.children))}}]),t}(l.Component),q=t(13),M=t.n(q),P=function(e){var a=e.onClick,t=e.className,n=void 0===t?"btn rounded-0":t,l=e.style,r=e.type,o=e.children,i=e.disabled,c=void 0!==i&&i,m=Object(f.a)(e,["onClick","className","style","type","children","disabled"]);return s.a.createElement("button",Object.assign({onClick:a,className:n,style:l,type:r,disabled:c},m),o)},H=function(e){var a=e.loadingText;return s.a.createElement("div",null,a||"Loading...")},W=(n=P,function(e){var a=e.isLoading,t=e.loadingText,l=Object(f.a)(e,["isLoading","loadingText"]);return a?s.a.createElement(n,Object.assign({disabled:a},l),s.a.createElement(H,{loadingText:t})):s.a.createElement(n,l)});W.propTypes=Object(S.a)({isLoading:M.a.bool.isRequired,loadingText:M.a.string},P.propTypes);var X=W,Y=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).onChange=function(a){var t=e.state.fields;t[a.target.id]=a.target.value,e.setState({fields:t})},e.onSubmit=function(a){a.preventDefault(),e.validateForm()&&e.props.sendInquiry(e.state.fields)},e.render=function(){for(var a=e.state,t=a.fields,n=t.name,l=t.email,r=t.subject,o=t.message,i=a.isLoading,c=a.errors,m=[],d=1;d<=24;d++)m.push((d<10?"0":"")+d);return s.a.createElement("div",{className:"landing"},s.a.createElement("div",{className:"container h-100"},s.a.createElement("div",{className:"row h-100"},s.a.createElement("div",{className:"col-md-5 col-lg-7 d-flex align-items-center"},s.a.createElement("div",null,s.a.createElement("div",{className:"h1 mb-0 font-weight-bold"},s.a.createElement("span",{className:"text-orange"},"oneTapDev"),s.a.createElement("span",{className:"text-pale-blue"},"();")),s.a.createElement("div",{className:"h5 font-weight-bold"},s.a.createElement("span",{className:"text-pale-yellow"},"weDo"),s.a.createElement("span",{className:"text-pale-blue"}," = ["),s.a.createElement("span",{className:"text-neon-green"},'"design"'),s.a.createElement("span",{className:"text-pale-blue"},", "),s.a.createElement("span",{className:"text-neon-green"},'"code"'),s.a.createElement("span",{className:"text-pale-blue"},"];")),s.a.createElement("div",{className:"h5 my-5 font-weight-bold"},s.a.createElement("p",{className:"mb-1 text-pale-lavender"},"\xa0// We are full stack!"),s.a.createElement("p",{className:"mb-1"},s.a.createElement("span",{className:"text-pink"},"#import "),s.a.createElement("span",{className:"text-silver"},"BackEnd.Developer")),s.a.createElement("p",{className:"mb-1"},s.a.createElement("span",{className:"text-pink"},"#import "),s.a.createElement("span",{className:"text-silver"},"FrontEnd.Developer")),s.a.createElement("p",{className:"mb-1"},s.a.createElement("span",{className:"text-pink"},"#import "),s.a.createElement("span",{className:"text-silver"},"iOS.Developer")),s.a.createElement("p",{className:"mb-1"},s.a.createElement("span",{className:"text-pink"},"#import "),s.a.createElement("span",{className:"text-silver"},"Android.Developer")),s.a.createElement("p",{className:"mb-1"},s.a.createElement("span",{className:"text-pink"},"#import "),s.a.createElement("span",{className:"text-silver"},"UI_UX.Designer"))))),s.a.createElement("div",{className:"col-md-7 col-lg-5 pt-md-5"},s.a.createElement("div",{className:"bg-space-blue h-100"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 d-flex justify-content-start mt-2 ml-3"},s.a.createElement("div",{className:"window-button bg-red"}),s.a.createElement("div",{className:"window-button bg-amber"}),s.a.createElement("div",{className:"window-button bg-olive-green"}))),s.a.createElement("div",{className:"row mt-2"},s.a.createElement("div",{className:"col-md-12 p-3 d-flex justify-content-start"},s.a.createElement("div",{className:"px-3"},m.map((function(e){return s.a.createElement("p",{key:e,className:"small text-evening-blue font-weight-bold mb-1"},e)}))),s.a.createElement("div",{className:"pr-4",style:{flex:"1"}},e.state.message&&""!==e.state.message?s.a.createElement("p",{className:"text-neon-green font-weight-bold mb-0"},"\xa0/*",s.a.createElement("br",null),e.state.message,s.a.createElement("br",null),"\xa0 */"):s.a.createElement("p",{className:"text-pale-lavender font-weight-bold mb-0"},"\xa0/*",s.a.createElement("br",null),"Tap us for your project",s.a.createElement("br",null),"by submitting an e-mail",s.a.createElement("br",null),"\xa0 */"),s.a.createElement("form",{noValidate:!0,onSubmit:e.onSubmit},s.a.createElement("div",{className:"form-group mb-3"},s.a.createElement("label",{htmlFor:"name",className:"text-green font-weight-bold mb-0"},"\xa0// Name"),s.a.createElement("input",{onChange:e.onChange,value:n,error:c.name,id:"name",type:"text",placeholder:"~ Your name here",className:G()("form-control no-outline bg-night-blue text-neon-green font-weight-bold",{"is-invalid":c.name,"border-night-blue":!c.name})}),c.name?c.name.split("\n").map((function(e,a){return s.a.createElement("span",{key:a,className:"text-danger font-weight-bold small"},e,s.a.createElement("br",null))})):""),s.a.createElement("div",{className:"form-group mb-3"},s.a.createElement("label",{htmlFor:"email",className:"text-green font-weight-bold mb-0"},"\xa0// E-mail"),s.a.createElement("input",{onChange:e.onChange,value:l,error:c.email,id:"email",type:"email",placeholder:"~ Your e-mail here",className:G()("form-control no-outline bg-night-blue text-neon-green font-weight-bold",{"is-invalid":c.email,"border-night-blue":!c.email})}),c.email?c.email.split("\n").map((function(e,a){return s.a.createElement("span",{key:a,className:"text-danger font-weight-bold small"},e,s.a.createElement("br",null))})):""),s.a.createElement("div",{className:"form-group mb-3"},s.a.createElement("label",{htmlFor:"subject",className:"text-green font-weight-bold mb-0"},"\xa0// Subject"),s.a.createElement("input",{onChange:e.onChange,value:r,error:c.subject,id:"subject",type:"text",placeholder:"~ Input your e-mail subject here",className:G()("form-control no-outline bg-night-blue text-neon-green font-weight-bold",{"is-invalid":c.subject,"border-night-blue":!c.subject})}),c.subject?c.subject.split("\n").map((function(e,a){return s.a.createElement("span",{key:a,className:"text-danger font-weight-bold small"},e,s.a.createElement("br",null))})):""),s.a.createElement("div",{className:"form-group mb-3"},s.a.createElement("label",{htmlFor:"message",className:"text-green font-weight-bold mb-0"},"\xa0// Message"),s.a.createElement("textarea",{onChange:e.onChange,value:o,error:c.message,id:"message",rows:"4",placeholder:"~ Input your message here",className:G()("form-control no-outline bg-night-blue text-neon-green font-weight-bold",{"is-invalid":c.message,"border-night-blue":!c.message})}),c.message?c.message.split("\n").map((function(e,a){return s.a.createElement("span",{key:a,className:"text-danger font-weight-bold small"},e,s.a.createElement("br",null))})):""),s.a.createElement("div",{className:"form-group pt-3 d-flex"},s.a.createElement(X,{type:"submit",className:"btn btn-sm btn-warning text-dark text-uppercase font-weight-bold px-4 rounded-custom ml-auto",loadingText:"Sending...",isLoading:i},"Send")))))))))))},e.state={message:"",isLoading:!1,fields:{name:"",email:"",subject:"",message:""},errors:{}},e}return Object(c.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var a=e.auth,t=a.isLoading,n=a.message;this.setState({isLoading:t,message:n})}},{key:"validateForm",value:function(){var e=this.state.fields,a={},t=!0;return Object.keys(e).forEach((function(e,t){a[e]=""})),e.name||(t=!1,a.name+="Name field is required."),e.email||(t=!1,a.email+="E-mail Address field is required."),e.subject||(t=!1,a.subject+="Subject field is required."),e.message||(t=!1,a.message+="Message field is required."),this.setState({errors:a}),t}}]),t}(l.Component),J=Object(y.b)((function(e){return{auth:e.auth,errors:e.errors}}),{sendInquiry:function(e,a){return function(a){a({type:"SET_ERRORS",payload:""}),a(O(!0)),h.a.post("/api/inquiry",e).then((function(e){console.log(e),a(j(e.data.message))})).catch((function(e){e.response&&a({type:"SET_ERRORS",payload:e.response.data}),a(O(!1))}))}}})(Y),V=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).goBack=n.goBack.bind(Object(I.a)(n)),n}return Object(c.a)(t,[{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row",style:{height:"100vh"}},s.a.createElement("div",{className:"col-md-6 bg-alt text-center d-flex justify-content-center align-items-center"},s.a.createElement("div",null,s.a.createElement("p",{className:"display-3"},"404"),s.a.createElement("h2",null,"Page Not Found"),s.a.createElement("p",{className:"small"},"The page that you are looking for could not be found."),s.a.createElement("button",{onClick:this.goBack,className:"btn btn-gradient font-weight-bold"},"Go Back")))))}}]),t}(l.Component);if(localStorage.jwtToken){var z=localStorage.jwtToken;v(z);var $=g()(z).exp,K=JSON.parse(localStorage.user);C.dispatch(N(K)),$<Date.now()/1e3&&(C.dispatch((function(e){localStorage.removeItem("jwtToken"),v(!1),e(N({}))})),window.location.href="./login")}var Q=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(y.a,{store:C},s.a.createElement(u.a,null,s.a.createElement(U,null),s.a.createElement("div",{className:"App"},s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:["/login"],component:F})),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",component:J}),s.a.createElement(p.a,{path:"*",component:V})))))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ccf2e464.chunk.js.map