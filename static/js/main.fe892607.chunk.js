(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,a,t){e.exports={makerBlack:"black",makerBeige:"#fef0d6",makerPink:"#f9cfd0",makerGrey:"#626262",makerRed:"#e75d6e",container:"image_file_upload_container__1QLVz",button:"image_file_upload_button__3YRz1",unnamedBtn:"image_file_upload_unnamedBtn__1XGwv",namedBtn:"image_file_upload_namedBtn__1QmNR",input:"image_file_upload_input__2lFB2",loadingSpin:"image_file_upload_loadingSpin__2F-Pp",spin:"image_file_upload_spin__MxsB4"}},19:function(e,a,t){e.exports={makerWhite:"white",makerPink:"#f9cfd0",makerDarkPink:"#f1abab",login:"login_login__AFfBQ",title:"login_title__3Nmpp",buttons:"login_buttons__1DuEx",button:"login_button__3rkY1"}},21:function(e,a,t){e.exports={makerPink:"#f9cfd0",makerDarkBlue:"undefined",makerDarkPink:"#f1abab",makerWhite:"white",makerLightPink:"undefined",header:"header_header__19cz9",logout:"header_logout__1zBIM",logo:"header_logo__1t9M2",title:"header_title__3C1Pg"}},24:function(e,a,t){e.exports={makerBlack:"black",makerRedPink:"#cc7f87",makerPurpleBlue:"#d3d9e9",makerWhite:"white",button:"editor_button_button__1ZMLr",delete:"editor_button_delete__xmibc",add:"editor_button_add__3GRHK"}},25:function(e,a,t){e.exports={makerPurple:"#cbc3d2",makerWhite:"white",makerLightGrey:"#e9e8e6",maker:"editor_maker__1eB-i",title:"editor_title__1xL6q"}},26:function(e,a,t){e.exports={makerPurple:"#cbc3d2",makerWhite:"white",preview:"card_preview_preview__4lF5J",title:"card_preview_title__3X651",cards:"card_preview_cards__dmHVp"}},33:function(e,a,t){e.exports={mediaQuery:"62rem",maker:"maker_maker__3RxX9",container:"maker_container__1-Q5u"}},37:function(e,a,t){e.exports={makerLightPurple:"#e7e5f2",login:"app_login__sfqML"}},38:function(e,a,t){e.exports={makerPink:"#f9cfd0",makerWhite:"white",footer:"footer_footer__38GK2"}},40:function(e,a,t){e.exports=t(57)},45:function(e,a,t){e.exports={makerLightPink:"undefined"}},57:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(36),l=t.n(c),i=(t(45),t(37)),o=t.n(i),m=t(4),u=t(38),s=t.n(u),d=Object(n.memo)((function(e){return r.a.createElement("section",{className:s.a.footer},r.a.createElement("h1",null,"CardMaker by SOOKYUNG"))})),_=t(21),f=t.n(_),p=Object(n.memo)((function(e){var a=e.onLogout;return r.a.createElement("header",{className:f.a.header},a&&r.a.createElement("button",{className:f.a.logout,onClick:a},"Logout"),r.a.createElement("img",{className:f.a.logo,src:"images/logo.png",alt:""}),r.a.createElement("h1",{className:f.a.title},"Business Card Maker"))})),g=t(19),h=t.n(g),k=function(e){var a=e.authService,t=Object(m.f)(),c=function(e){t.push({pathname:"/maker",state:{id:e}})},l=function(e){a.login(e.currentTarget.textContent).then((function(e){return c(e.user.uid)}))};return Object(n.useEffect)((function(){a.onAuthChanged((function(e){e&&c(e.uid)}))})),r.a.createElement("section",{className:h.a.login},r.a.createElement(p,null),r.a.createElement("section",null,r.a.createElement("h1",{className:h.a.title},"Login"),r.a.createElement("ul",{className:h.a.buttons},r.a.createElement("li",null,r.a.createElement("button",{className:h.a.button,onClick:l},"Google")),r.a.createElement("li",null,r.a.createElement("button",{className:h.a.button,onClick:l},"Github")))),r.a.createElement(d,null))},b=t(22),v=t(14),E=t(17),N=t(11),O=t(24),y=t.n(O),j=Object(n.memo)((function(e){var a=e.text,t=e.onClick,n="Delete"===a?y.a.delete:y.a.add;return r.a.createElement("button",{className:"".concat(y.a.button," ").concat(n),onClick:t},a)})),C=t(7),w=t.n(C),x=Object(n.memo)((function(e){var a=e.FileInput,t=e.addNewCard,c=Object(n.useRef)(),l=Object(n.useRef)(),i=Object(n.useRef)(),o=Object(n.useRef)(),m=Object(n.useRef)(),u=Object(n.useRef)(),s=Object(n.useRef)(),d=Object(n.useState)({fileName:null,fileURL:null}),_=Object(N.a)(d,2),f=_[0],p=_[1];return r.a.createElement("form",{ref:s,className:w.a.editor},r.a.createElement("div",{className:w.a.line1},r.a.createElement("input",{ref:c,className:w.a.name,type:"text",name:"name",placeholder:"Name"}),r.a.createElement("input",{ref:l,className:w.a.company,type:"text",name:"company",placeholder:"Company"}),r.a.createElement("select",{ref:i,className:w.a.select,name:"theme",id:""},r.a.createElement("option",{value:"light"},"light"),r.a.createElement("option",{value:"dark"},"dark"),r.a.createElement("option",{value:"colorful"},"colorful"))),r.a.createElement("div",{className:w.a.line2},r.a.createElement("input",{ref:o,className:w.a.title,type:"text",name:"title",placeholder:"Title"}),r.a.createElement("input",{ref:m,className:w.a.email,type:"text",name:"email",placeholder:"Email"})),r.a.createElement("div",{className:w.a.line3},r.a.createElement("textarea",{ref:u,className:w.a.message,type:"text",name:"message",placeholder:"Message"})),r.a.createElement("div",{className:w.a.line4},r.a.createElement(a,{fileName:f.fileName,onFileChange:function(e){p({fileName:e.name?e.name:null,fileURL:e.url})}}),r.a.createElement(j,{text:"Add",onClick:function(e){e.preventDefault();var a={id:Date.now(),name:c.current.value||"",company:l.current.value||"",theme:i.current.value,title:o.current.value||"",email:m.current.value||"",message:u.current.value||"",fileName:f.fileName||"",fileURL:f.fileURL||""};s.current.reset(),p({fileName:null,fileURL:null}),t(a)}})))})),B=t(8),R=t.n(B),L=Object(n.memo)((function(e){var a=e.FileInput,t=e.card,c=e.deleteCard,l=e.changeCard,i=t.name,o=t.company,m=t.title,u=t.email,s=t.message,d=t.theme,_=t.fileName,f=Object(n.useRef)(),p=function(e){null!==e.currentTarget&&(e.preventDefault(),l(Object(E.a)({},t,Object(v.a)({},e.target.name,e.target.value))))};return r.a.createElement("form",{className:R.a.editor},r.a.createElement("div",{className:R.a.line1},r.a.createElement("input",{ref:f,className:R.a.name,type:"text",name:"name",defaultValue:i,onChange:p}),r.a.createElement("input",{className:R.a.company,type:"text",name:"company",defaultValue:o,onChange:p}),r.a.createElement("select",{className:R.a.select,name:"theme",id:"selectTheme",value:d,onChange:p},r.a.createElement("option",{value:"light"},"light"),r.a.createElement("option",{value:"dark"},"dark"),r.a.createElement("option",{value:"colorful"},"colorful"))),r.a.createElement("div",{className:R.a.line2},r.a.createElement("input",{className:R.a.title,type:"text",name:"title",defaultValue:m,onChange:p}),r.a.createElement("input",{className:R.a.email,type:"text",name:"email",defaultValue:u,onChange:p})),r.a.createElement("div",{className:R.a.line3},r.a.createElement("textarea",{className:R.a.message,type:"text",name:"message",defaultValue:s,onChange:p})),r.a.createElement("div",{className:R.a.line4},r.a.createElement(a,{fileName:_,onFileChange:function(e){l(Object(E.a)({},t,{fileName:e.name,fileURL:e.url}))}}),r.a.createElement(j,{text:"Delete",onClick:function(e){e.preventDefault(),c(t)}})))})),P=t(25),F=t.n(P),I=function(e){var a=e.FileInput,t=e.cards,n=e.addNewCard,c=e.deleteCard,l=e.changeCard;return r.a.createElement("section",{className:F.a.maker},r.a.createElement("h1",{className:F.a.title},"Card Maker"),r.a.createElement("ul",{className:F.a.cards},Object.values(t).map((function(e){return r.a.createElement(L,{FileInput:a,key:e.id,card:e,deleteCard:c,changeCard:l})}))),r.a.createElement(x,{FileInput:a,addNewCard:n}))},S=t(9),U=t.n(S);function D(e){switch(e){case"dark":return U.a.dark;case"light":return U.a.light;case"colorful":return U.a.colorful;default:throw new Error("unknow theme: ".concat(e))}}var G=Object(n.memo)((function(e){var a=e.card,t=a.name,n=a.company,c=a.title,l=a.email,i=a.message,o=a.theme,m=a.fileURL||"images/default_logo.png";return r.a.createElement("li",{className:"".concat(U.a.card," ").concat(D(o))},r.a.createElement("img",{className:U.a.img,src:m,alt:"profile thumbnail"}),r.a.createElement("div",{className:U.a.info},r.a.createElement("h1",{className:U.a.name},t),r.a.createElement("p",{className:U.a.company},n),r.a.createElement("p",{className:U.a.title},c),r.a.createElement("p",{className:U.a.email},l),r.a.createElement("p",{className:U.a.message},i)))})),M=t(26),W=t.n(M),A=function(e){var a=e.cards;return r.a.createElement("section",{className:W.a.preview},r.a.createElement("h1",{className:W.a.title},"Card Preview"),r.a.createElement("ul",{className:W.a.cards},Object.values(a).map((function(e){return r.a.createElement(G,{key:e.id,card:e})}))))},V=t(33),z=t.n(V),X=function(e){var a=e.FileInput,t=e.authService,c=e.cardRepository,l=Object(n.useState)({}),i=Object(N.a)(l,2),o=i[0],u=i[1],s=Object(m.f)().state,_=Object(n.useState)(s&&s.id),f=Object(N.a)(_,2),g=f[0],h=f[1],k=Object(m.f)(),b=Object(n.useCallback)((function(){t.logout()}),[t]);Object(n.useEffect)((function(){if(g){var e=c.syncCards(g,(function(e){u(e)}));return function(){return e()}}}),[g,c]),Object(n.useEffect)((function(){t.onAuthChanged((function(e){e?h(e.uid):k.push("/")}))}),[t,g,k]);var O=function(e){u((function(a){return Object(E.a)({},a,Object(v.a)({},e.id,e))})),c.saveCard(g,e)};return r.a.createElement("section",{className:z.a.maker},r.a.createElement(p,{onLogout:b}),r.a.createElement("div",{className:z.a.container},r.a.createElement(I,{FileInput:a,cards:o,addNewCard:O,deleteCard:function(e){u((function(a){var t=Object(E.a)({},a);return delete t[e.id],t})),c.removeCard(g,e)},changeCard:O}),r.a.createElement(A,{cards:o})),r.a.createElement(d,null))};var Q=function(e){var a=e.FileInput,t=e.authService,n=e.cardRepository;return r.a.createElement("div",{className:o.a.login},r.a.createElement(b.a,{basename:"/card-maker"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(k,{authService:t})),r.a.createElement(m.a,{exact:!0,path:"/maker"},r.a.createElement(X,{FileInput:a,authService:t,cardRepository:n})))))},K=t(15),T=t(16),q=t(27),J=(t(50),t(52),q.a.initializeApp({apiKey:"AIzaSyDHcIr0GLYiCWjcDxdcqeBSU1VZagDO_Uw",authDomain:"business-card-maker-b8cbd.firebaseapp.com",databaseURL:"https://business-card-maker-b8cbd.firebaseio.com",projectId:"business-card-maker-b8cbd"})),Y=J.auth(),H=J.database(),Z=new q.a.auth.GoogleAuthProvider,$=new q.a.auth.GithubAuthProvider,ee=function(){function e(){Object(K.a)(this,e)}return Object(T.a)(e,[{key:"login",value:function(e){var a=this.getProvider(e);return Y.signInWithPopup(a)}},{key:"logout",value:function(){Y.signOut()}},{key:"onAuthChanged",value:function(e){Y.onAuthStateChanged(e)}},{key:"getProvider",value:function(e){switch(e){case"Google":return Z;case"Github":return $;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),ae=t(18),te=t.n(ae),ne=t(23),re=function(){function e(){Object(K.a)(this,e)}return Object(T.a)(e,[{key:"upload",value:function(){var e=Object(ne.a)(te.a.mark((function e(a){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",a),t.append("upload_preset","ihygi1ga"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dkfwobnvf/upload",{method:"POST",body:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}(),ce=t(13),le=t.n(ce),ie=Object(n.memo)((function(e){var a=e.imageUploader,t=e.fileName,c=e.onFileChange,l=Object(n.useState)(!1),i=Object(N.a)(l,2),o=i[0],m=i[1],u=Object(n.useRef)(),s=function(){var e=Object(ne.a)(te.a.mark((function e(t){var n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,a.upload(t.target.files[0]);case 3:n=e.sent,m(!1),c({name:n.original_filename,url:n.url});case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"".concat(le.a.container," ").concat(t?le.a.namedBtn:le.a.unnamedBtn)},r.a.createElement("input",{ref:u,className:le.a.input,type:"file",accept:"image/*",name:"file",onChange:s}),!o&&r.a.createElement("button",{className:"".concat(le.a.button," "),onClick:function(e){e.preventDefault(),u.current.click()}},t||"No file"),o&&r.a.createElement("div",{className:le.a.loadingSpin}))})),oe=function(){function e(){Object(K.a)(this,e)}return Object(T.a)(e,[{key:"syncCards",value:function(e,a){var t=H.ref("".concat(e,"/cards"));return t.on("value",(function(e){var t=e.val();t&&a(t)})),function(){return t.off()}}},{key:"saveCard",value:function(e,a){H.ref("".concat(e,"/cards/").concat(a.id)).set(a)}},{key:"removeCard",value:function(e,a){H.ref("".concat(e,"/cards/").concat(a.id)).remove()}}]),e}(),me=new ee,ue=new oe,se=new re,de=Object(n.memo)((function(e){return r.a.createElement(ie,Object.assign({},e,{imageUploader:se}))}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,{FileInput:de,authService:me,cardRepository:ue})),document.getElementById("root"))},7:function(e,a,t){e.exports={makerBlack:"black",makerWhite:"white",makerBeige:"#fef0d6",makerBrown:"undefined",editor:"add_form_editor__1Xxzz",line1:"add_form_line1__3w_3c",line2:"add_form_line2__1QQyV",line3:"add_form_line3__oh7W-",line4:"add_form_line4__tgMUt",name:"add_form_name__3pkL9",company:"add_form_company__28eZ_",select:"add_form_select__OMXsK",title:"add_form_title__1X4Vj",email:"add_form_email__2Qifx",message:"add_form_message__LOBsJ"}},8:function(e,a,t){e.exports={makerBlack:"black",makerWhite:"white",makerBeige:"#fef0d6",makerBrown:"undefined",editor:"editor_form_editor__XUXy-",line1:"editor_form_line1__3F4PO",line2:"editor_form_line2__22OW1",line3:"editor_form_line3__sNzLG",line4:"editor_form_line4__3Ojne",name:"editor_form_name__3IMol",company:"editor_form_company__33pIs",select:"editor_form_select__307mo",title:"editor_form_title__PmXga",email:"editor_form_email__3zApF",message:"editor_form_message__Xl6Pt",ImageFileUpload:"editor_form_ImageFileUpload__2flqd"}},9:function(e,a,t){e.exports={makerBlack:"black",makerLightGrey:"#e9e8e6",makerColorful:"linear-gradient(300deg, #fae5d5, #fdded7, #fad4d2, #cac2d1, #bcc7dc)",mediaQuery:"62rem",card:"card_card__1UdoP",dark:"card_dark__WVF4G",light:"card_light__2VFpk",colorful:"card_colorful__2_LT2",img:"card_img__3or_C",info:"card_info__3ur5c",name:"card_name__3M90M",company:"card_company__34CKs",title:"card_title__2qjaW",email:"card_email__19bjD",message:"card_message__GFAmK"}}},[[40,1,2]]]);
//# sourceMappingURL=main.fe892607.chunk.js.map