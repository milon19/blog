(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c(80),n=c.n(r),i=c(6),l=(c(88),c(89),c(4)),o=c(24),d=c(35),j=c.n(d),b="https://grayspaceit-blog.herokuapp.com/api/";function m(e){return j.a.post(b+"token/verify/",e)}var u=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],n=localStorage.getItem("accessToken");return Object(s.useEffect)((function(){m({token:n}).then((function(){r(!0)})).catch((function(){r(!1)}))}),[n,c]),Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(a.jsx)(i.b,{className:"navbar-brand",to:"/react",children:"Example Blog"}),Object(a.jsx)("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.c,{className:"nav-link",to:"/react/posts",children:"Posts"})}),!0===c&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{className:"nav-link",to:"#",onClick:function(){return localStorage.setItem("accessToken",null),console.log("handleLogout -> asdasdasda"),void(window.location.href="/react/logout")},children:"Logout"})}),!1===c&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.c,{className:"nav-link",to:"/react/login",children:"Login"})}),!1===c&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.c,{className:"nav-link",to:"/react/register",children:"Register"})})]})})]})},h=function(){return Object(a.jsx)("footer",{className:"py-5 bg-dark",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Gray Space It LTD 2020"})})})},x=c(20),O=c(7),p=x.a().shape({first_name:x.c().required("First name is required."),last_name:x.c().required("Last name is required."),email:x.c().email("Enter a valid email.").required("Email is required."),password1:x.c().required("Password is required."),password2:x.c().oneOf([x.b("password1"),null],"Possword doesn't match.").required("Password confirm is required")}),f=function(e){var t=e.registrationInit,c=e.doRegistration;return Object(a.jsx)(O.d,{initialValues:t,enableReinitialize:!0,validationSchema:p,onSubmit:function(e){c(e)},children:function(){return Object(a.jsxs)(O.c,{children:[Object(a.jsx)("div",{className:"control-group form-group",children:Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("label",{htmlFor:"first_name",children:"First Name*"}),Object(a.jsx)(O.b,{className:"form-control",id:"first_name",name:"first_name",type:"text"}),Object(a.jsx)(O.a,{name:"first_name",children:function(e){return Object(a.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:e})}})]})}),Object(a.jsx)("div",{className:"control-group form-group",children:Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("label",{htmlFor:"last_name",children:"Last Name*"}),Object(a.jsx)(O.b,{className:"form-control",id:"last_name",name:"last_name",type:"text"}),Object(a.jsx)(O.a,{name:"last_name",children:function(e){return Object(a.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:e})}})]})}),Object(a.jsx)("div",{className:"control-group form-group",children:Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email*"}),Object(a.jsx)(O.b,{className:"form-control",id:"email",name:"email",type:"email"}),Object(a.jsx)(O.a,{name:"email",children:function(e){return Object(a.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:e})}})]})}),Object(a.jsx)("div",{className:"control-group form-group",children:Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("label",{htmlFor:"password1",children:"Password*"}),Object(a.jsx)(O.b,{className:"form-control",type:"password",id:"password1",name:"password1"}),Object(a.jsx)(O.a,{name:"password1",children:function(e){return Object(a.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:e})}})]})}),Object(a.jsx)("div",{className:"control-group form-group",children:Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("label",{htmlFor:"password2",children:"Verify Password*"}),Object(a.jsx)(O.b,{className:"form-control",type:"password",id:"password2",name:"password2"}),Object(a.jsx)(O.a,{name:"password2",children:function(e){return Object(a.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:e})}})]})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]})}})},g={first_name:"",last_name:"",email:"",password1:"",password2:""},v=function(e){return Object(a.jsxs)("div",{className:"container",style:{minHeight:"80vh"},children:[Object(a.jsxs)("h1",{className:"mt-4 mb-3",children:["Register",Object(a.jsx)("small",{children:"Form"})]}),Object(a.jsx)("ol",{className:"breadcrumb",children:Object(a.jsx)("li",{className:"breadcrumb-item active",children:"Register"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-4 mb-4",children:Object(a.jsx)(f,{registrationInit:g,doRegistration:function(t){(function(e){return j.a.post(b+"registration/",e)})({email:t.email,first_name:t.first_name,last_name:t.last_name,password:t.password2}).then((function(){e.history.push("/react/login"),alert("Registration successfull.")})).catch((function(){alert("Registration filled. Please try again.")}))}})})})]})},N=x.a().shape({email:x.c().email("Enter a valid email").required("Email is required"),password:x.c().required("Password is required")}),y=function(e){var t=e.loginInit,c=e.doLogin;return Object(a.jsx)(O.d,{initialValues:t,enableReinitialize:!0,validationSchema:N,onSubmit:function(e){c(e)},children:function(){return Object(a.jsxs)(O.c,{children:[Object(a.jsx)("div",{className:"control-group form-group",children:Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email*"}),Object(a.jsx)(O.b,{className:"form-control",id:"email",name:"email",type:"email"}),Object(a.jsx)(O.a,{name:"email",children:function(e){return Object(a.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:e})}})]})}),Object(a.jsx)("div",{className:"control-group form-group",children:Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password*"}),Object(a.jsx)(O.b,{className:"form-control",type:"password",id:"password",name:"password"}),Object(a.jsx)(O.a,{name:"password",children:function(e){return Object(a.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:e})}})]})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]})}})},w={email:"",password:""},k=function(){var e=localStorage.getItem("accessToken");Object(s.useEffect)((function(){m({token:e}).then((function(e){window.location.href="/react",console.log(e)})).catch((function(e){console.log("Login -> error",e)}))}),[e]);return Object(a.jsxs)("div",{className:"container",style:{minHeight:"80vh"},children:[Object(a.jsxs)("h1",{className:"mt-4 mb-3",children:["Login",Object(a.jsx)("small",{children:"Form"})]}),Object(a.jsx)("ol",{className:"breadcrumb",children:Object(a.jsx)("li",{className:"breadcrumb-item active",children:"Login"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-4 mb-4",children:Object(a.jsx)(y,{loginInit:w,doLogin:function(e){(function(e){return j.a.post(b+"token/",e)})(e).then((function(e){var t=e.data;localStorage.setItem("accessToken",t.access),localStorage.setItem("refreshToken",t.refresh),window.location.href="/react"})).catch((function(){alert("Enter a valid Email and Password")}))}})})})]})},S=function(){return Object(a.jsxs)("div",{className:"container",style:{minHeight:"100vh",paddingTop:"200px"},children:[Object(a.jsx)("h2",{children:"You have been logged out"}),Object(a.jsx)("div",{className:"border-top pt-3",children:Object(a.jsx)("p",{children:Object(a.jsx)(i.b,{className:"btn btn-danger",to:"/react/login",children:"Log in again"})})})]})},P=function(){return Object(a.jsx)("h1",{children:"Not Found"})},_=c(27),F=c.n(_),L=c(47),q=function(e){var t=e.post;return Object(a.jsxs)("div",{className:"card mb-4",children:[Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6",children:Object(a.jsx)(i.b,{to:"/react/posts/".concat(t.id),children:Object(a.jsx)("img",{className:"img-fluid rounded",src:"http://placehold.it/750x300",alt:""})})}),Object(a.jsxs)("div",{className:"col-lg-6",children:[Object(a.jsx)("h2",{className:"card-title",children:t.title}),Object(a.jsx)("p",{className:"card-text",children:t.body}),Object(a.jsx)(i.b,{to:"/react/posts/".concat(t.id),className:"btn btn-primary",children:"Read More \u2192"})]})]})}),Object(a.jsxs)("div",{className:"card-footer text-muted",children:["Posted on January 1, 2017 by",Object(a.jsxs)(i.b,{to:"/",children:[" ",t.userId," "]})]})]})},T=function(e){var t=e.handlePagination,c=e.disablePrevious,s=e.disableNext,r=function(e){return e?"page-item disabled":"page-item"};return Object(a.jsxs)("ul",{className:"pagination justify-content-center mb-4",children:[Object(a.jsx)("li",{className:r(c),style:{cursor:"pointer"},children:Object(a.jsx)("button",{onClick:function(){return t("previous")},id:"previous",className:"page-link",children:"\u2190 Older"})}),Object(a.jsx)("li",{className:r(s),children:Object(a.jsx)("button",{id:"next",onClick:function(){return t("next")},className:"page-link",style:{cursor:"pointer"},children:"Newer \u2192"})})]})},E="https://jsonplaceholder.typicode.com/posts";function I(e){return"".concat(E,"/").concat(e)}function R(e){var t="".concat(E,"?_page=").concat(e,"&_limit=4");return j.a.get(t)}function C(e){return j.a.get(I(e))}function H(e){var t=I(e)+"/comments";return j.a.get(t)}var B=function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(!1),l=Object(o.a)(n,2),d=l[0],j=l[1],b=Object(s.useState)(!0),m=Object(o.a)(b,2),u=m[0],h=m[1],x=Object(s.useState)([]),O=Object(o.a)(x,2),p=O[0],f=O[1];Object(s.useEffect)((function(){(function(){var e=Object(L.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(c);case 2:t=e.sent,a=t.data,f(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h1",{className:"mt-4 mb-3",children:["Blog Home Two ",Object(a.jsx)("small",{children:"Subheading"})]}),Object(a.jsxs)("ol",{className:"breadcrumb",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(i.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active",children:"Posts"})]}),p.map((function(e){return Object(a.jsx)(q,{post:e},e.id)})),Object(a.jsx)(T,{handlePagination:function(e){var t=c;"previous"===e&&(t=c+1),"next"===e&&(t=c-1),h(1===t),j(25===t),r(t)},currentPage:c,disablePrevious:d,disableNext:u})]})},J=function(){return Object(a.jsxs)("div",{className:"card my-4",children:[Object(a.jsx)("h5",{className:"card-header",children:"Leave a Comment:"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("textarea",{className:"form-control",rows:"3"})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})]})},D=function(e){var t=e.comment;return Object(a.jsxs)("div",{className:"media mb-4",children:[Object(a.jsx)("img",{className:"d-flex mr-3 rounded-circle",src:"http://placehold.it/50x50",alt:""}),Object(a.jsxs)("div",{className:"media-body",children:[Object(a.jsx)("h5",{className:"mt-0",children:t.name}),t.body]})]})},M=function(e){var t=e.post,c=t.id,r=Object(s.useState)([]),n=Object(o.a)(r,2),i=n[0],l=n[1];return Object(s.useEffect)((function(){(function(){var e=Object(L.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(c);case 2:t=e.sent,a=t.data,l(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(a.jsxs)("div",{className:"col-lg-8",children:[Object(a.jsx)("img",{className:"img-fluid rounded",src:"http://placehold.it/900x300",alt:""}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{children:"Posted on January 1, 2017 at 12:00 PM"}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{className:"lead",children:t.body}),Object(a.jsxs)("blockquote",{className:"blockquote",children:[Object(a.jsx)("p",{className:"mb-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}),Object(a.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in",Object(a.jsx)("cite",{title:"Source Title",children:"Source Title"})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(J,{}),i.map((function(e){return Object(a.jsx)(D,{comment:e},e.id)}))]})},V=function(){return Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsxs)("div",{className:"card mb-4",children:[Object(a.jsx)("h5",{className:"card-header",children:"Search"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search for..."}),Object(a.jsx)("span",{className:"inpug-group-append",children:Object(a.jsx)("button",{className:"btn btn-secondary",type:"button",children:"Go!"})})]})})]}),Object(a.jsxs)("div",{className:"card my-4",children:[Object(a.jsx)("h5",{className:"card-header",children:"Categories"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6",children:Object(a.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Web Design"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"HTML"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Freebies"})})]})}),Object(a.jsx)("div",{className:"col-lg-6",children:Object(a.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"JavaScript"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"CSS"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Tutorials"})})]})})]})})]}),Object(a.jsxs)("div",{className:"card my-4",children:[Object(a.jsx)("h5",{className:"card-header",children:"Side Widget"}),Object(a.jsx)("div",{className:"card-body",children:"You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!"})]})]})},z=function(e){var t=e.match.params.id,c=Object(s.useState)([]),r=Object(o.a)(c,2),n=r[0],l=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(L.a)(F.a.mark((function e(){var c,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:c=e.sent,a=c.data,l(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h1",{className:"mt-4 mb-3",children:["Title"," ",Object(a.jsxs)("small",{children:[" ","by ",Object(a.jsx)(i.b,{to:"#",children:n.userId})," "]})]}),Object(a.jsxs)("ol",{className:"breadcrumb",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(i.b,{to:"/",children:"Home"})}),Object(a.jsxs)("li",{className:"breadcrumb-item active",children:["Post ",n.id]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(M,{post:n}),Object(a.jsx)(V,{})]})]})},G=function(){return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)(u,{}),Object(a.jsx)("main",{className:"container",children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/react/register",component:v}),Object(a.jsx)(l.b,{path:"/react/login",component:k}),Object(a.jsx)(l.b,{path:"/react/logout",component:S}),Object(a.jsx)(l.b,{path:"/react/posts/:id",exact:!0,component:z}),Object(a.jsx)(l.b,{path:"/react/posts",exact:!0,component:B}),Object(a.jsx)(l.b,{path:"/react/not-found",exact:!0,component:P}),Object(a.jsx)(l.a,{from:"/",exact:!0,to:"/react/posts"}),Object(a.jsx)(l.a,{from:"/react",exact:!0,to:"/react/posts"}),Object(a.jsx)(l.a,{to:"/react/not-found"})]})}),Object(a.jsx)(h,{})]})};var W=function(){return Object(a.jsx)(G,{})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};c(112);n.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(W,{})}),document.getElementById("root")),Y()},88:function(e,t,c){},89:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.043bdbf8.chunk.js.map