(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,a,t){e.exports={makerWhite:"white",makerDarkBlue:"#ACBBC0",makerBlue:"#C3D3D2",login:"login_login__AFfBQ",title:"login_title__3Nmpp",buttons:"login_buttons__1DuEx",button:"login_button__3rkY1"}},15:function(e,a,t){e.exports={makerDarkBlue:"#ACBBC0",makerBlue:"#C3D3D2",makerWhite:"white",makerLightPink:"undefined",header:"header_header__19cz9",logout:"header_logout__1zBIM",logo:"header_logo__1t9M2",title:"header_title__3C1Pg"}},18:function(e,a,t){e.exports={makerDarkBlue:"#ACBBC0",maker:"editor_maker__1eB-i",title:"editor_title__1xL6q"}},19:function(e,a,t){e.exports={makerDarkBlue:"#ACBBC0",makerWhite:"white",preview:"card_preview_preview__4lF5J",title:"card_preview_title__3X651",cards:"card_preview_cards__dmHVp"}},24:function(e,a,t){e.exports={mediaQuery:"62rem",maker:"maker_maker__3RxX9",container:"maker_container__1-Q5u"}},29:function(e,a,t){e.exports={makerGreen:"#404037",login:"app_login__sfqML"}},30:function(e,a,t){e.exports={makerDarkBlue:"#ACBBC0",makerWhite:"white",footer:"footer_footer__38GK2"}},35:function(e,a,t){e.exports=t(49)},40:function(e,a,t){e.exports={makerLightPink:"undefined"}},49:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(28),l=t.n(c),i=(t(40),t(29)),o=t.n(i),m=t(6),u=t(30),s=t.n(u),_=function(e){return r.a.createElement("section",{className:s.a.footer},r.a.createElement("h1",null,"SOOKYUNG"))},d=t(15),g=t.n(d),f=function(e){var a=e.onLogout;return r.a.createElement("header",{className:g.a.header},a&&r.a.createElement("button",{className:g.a.logout,onClick:a},"Logout"),r.a.createElement("img",{className:g.a.logo,src:"/images/logo.png",alt:""}),r.a.createElement("h1",{className:g.a.title},"Business Card Maker"))},h=t(13),p=t.n(h),k=function(e){var a=e.authService,t=Object(m.f)(),c=function(e){t.push({pathname:"/maker",state:{id:e}})},l=function(e){a.login(e.currentTarget.textContent).then((function(e){return c(e.user.uid)}))};return Object(n.useEffect)((function(){a.onAuthChanged((function(e){e&&c(e.uid)}))})),r.a.createElement("section",{className:p.a.login},r.a.createElement(f,null),r.a.createElement("section",null,r.a.createElement("h1",{className:p.a.title},"Login"),r.a.createElement("ul",{className:p.a.buttons},r.a.createElement("li",null,r.a.createElement("button",{className:p.a.button,onClick:l},"Google")),r.a.createElement("li",null,r.a.createElement("button",{className:p.a.button,onClick:l},"Github")))),r.a.createElement(_,null))},E=t(17),b=t(34),v=function(e){var a=e.card;return r.a.createElement("h1",null,a.name)},N=t(18),B=t.n(N),C=function(e){var a=e.cards;return r.a.createElement("section",{className:B.a.maker},r.a.createElement("h1",{className:B.a.title},"Card Maker"),r.a.createElement("ul",{className:B.a.cards},a.map((function(e){return r.a.createElement(v,{key:e.id,card:e})}))))},S=t(9),w=t.n(S);function y(e){switch(e){case"dark":return w.a.dark;case"light":return w.a.light;case"colorful":return w.a.colorful}}var x=function(e){var a=e.card,t=a.fileURL||"/images/default_logo.png";return r.a.createElement("li",{className:"".concat(w.a.card," ").concat(y(a.theme))},r.a.createElement("img",{class:w.a.img,src:t,alt:"profile image"}),r.a.createElement("div",{className:w.a.info},r.a.createElement("h1",{className:w.a.name},a.name),r.a.createElement("p",{className:w.a.company},a.company),r.a.createElement("p",{className:w.a.title},a.title),r.a.createElement("p",{className:w.a.email},a.email),r.a.createElement("p",{className:w.a.message},a.message)))},A=t(19),D=t.n(A),L=function(e){var a=e.cards;return r.a.createElement("section",{className:D.a.preview},r.a.createElement("h1",{className:D.a.title},"Card Preview"),r.a.createElement("ul",{className:D.a.cards},a.map((function(e){return r.a.createElement(x,{key:e.id,card:e})}))))},O=t(24),j=t.n(O),G=function(e){var a=Object(n.useState)([{id:"1",name:"Bomi",company:"Apink",theme:"dark",title:"Software Engineer",email:"bomi@gmail.com",message:"Hello",fileName:"bomi",fileURL:"/images/BOMI.jpg"},{id:"2",name:"SungGyu",company:"Infinite",theme:"light",title:"Software Engineer",email:"gyu@gmail.com",message:"Hello",fileName:"sunggyu",fileURL:"/images/SUNGGYU.jpg"},{id:"3",name:"SooBin",company:"DOOSAN BEARS",theme:"colorful",title:"Software Engineer",email:"soobin@gmail.com",message:"Hello",fileName:"soobin",fileURL:null}]),t=Object(b.a)(a,2),c=t[0],l=(t[1],Object(m.f)());return Object(n.useEffect)((function(){e.authService.onAuthChanged((function(e){e||l.push("/")}))})),r.a.createElement("section",{className:j.a.maker},r.a.createElement(f,{onLogout:function(){console.log("logout"),e.authService.logout()}}),r.a.createElement("div",{className:j.a.container},r.a.createElement(C,{cards:c}),r.a.createElement(L,{cards:c})),r.a.createElement(_,null))};var U=function(e){var a=e.authService;return r.a.createElement("div",{className:o.a.login},r.a.createElement(E.a,{basename:"https://sookyung93.github.io/card-maker"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(k,{authService:a})),r.a.createElement(m.a,{exact:!0,path:"/maker"},r.a.createElement(G,{authService:a})))))},M=t(32),I=t(33),W=t(12),P=(W.a.initializeApp({apiKey:"AIzaSyDHcIr0GLYiCWjcDxdcqeBSU1VZagDO_Uw",authDomain:"business-card-maker-b8cbd.firebaseapp.com",databaseURL:"https://business-card-maker-b8cbd.firebaseio.com",projectId:"business-card-maker-b8cbd"}),new(function(){function e(){Object(M.a)(this,e)}return Object(I.a)(e,[{key:"login",value:function(e){var a=new(W.a.auth["".concat(e,"AuthProvider")]);return W.a.auth().signInWithPopup(a)}},{key:"logout",value:function(){W.a.auth().signOut()}},{key:"onAuthChanged",value:function(e){W.a.auth().onAuthStateChanged(e)}}]),e}()));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,{authService:P})),document.getElementById("root"))},9:function(e,a,t){e.exports={makerBlack:"black",makerLightBeige:"#E9E8E6",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",card:"card_card__1UdoP",dark:"card_dark__WVF4G",light:"card_light__2VFpk",colorful:"card_colorful__2_LT2",img:"card_img__3or_C",info:"card_info__3ur5c",name:"card_name__3M90M",company:"card_company__34CKs",title:"card_title__2qjaW",email:"card_email__19bjD",message:"card_message__GFAmK"}}},[[35,1,2]]]);
//# sourceMappingURL=main.336d6826.chunk.js.map