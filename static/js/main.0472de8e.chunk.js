(this["webpackJsonpmerchant-example-react-js"]=this["webpackJsonpmerchant-example-react-js"]||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"name":"merchant-example-react-js","version":"2.0.5","private":true,"dependencies":{"@emotion/react":"^11.5.0","@emotion/styled":"^11.3.0","@mui/icons-material":"^5.0.4","@mui/material":"^5.0.4","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","argon2-browser":"^1.18.0","base64-loader":"^1.0.0","copy-to-clipboard":"^3.3.1","prop-types":"^15.7.2","react":"^17.0.2","react-app-rewired":"^2.1.8","react-dom":"^17.0.2","react-json-prettify":"^0.2.0","react-json-pretty":"^2.2.0","react-notifications":"^1.7.2","react-router-dom":"^6.3.0","react-scripts":"4.0.3","redux-form":"^8.3.7","styled-components":"^5.3.3","uuid":"^8.3.2","web-vitals":"^1.0.1"},"scripts":{"start":"react-app-rewired start","build":"react-app-rewired build","test":"react-app-rewired test","eject":"react-app-rewired eject","predeploy":"npm run build","deploy":"gh-pages -d build","format":"prettier --write \\"**/*.{js,jsx,json,md}\\"","lint":"eslint ./","lintFix":"eslint ./ --fix"},"homepage":"https://neijrdev.github.io/gateway-example-javascript","eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"babel-eslint":"^10.1.0","eslint":"^7.32.0","eslint-config-airbnb":"^18.2.1","eslint-config-prettier":"^8.3.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.25.2","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-promise":"^5.1.1","eslint-plugin-react":"^7.26.1","eslint-plugin-react-hooks":"^4.2.0","gh-pages":"^3.2.3","prettier":"^2.4.1"}}')},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,l,s,u,d=n(0),j=n.n(d),b=n(32),h=n.n(b),p=n(19),x=n(73),m=n(14),O=n(50),f=n.n(O),g=n(18),y=n(63),v=n(6),_=n(199),w=n(190),k=n(198),L=n(15),P=n(16),C=P.a.div(a||(a=Object(L.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"]))),S=P.a.div(c||(c=Object(L.a)(["\n  width: ",";\n  flex-direction: row;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"])),(function(e){var t=e.widthPercent;return t?"".concat(t,"%"):"100%"})),T=P.a.div(r||(r=Object(L.a)(["\n  width: 45%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 100%;\n    padding: 10px;\n  }\n"]))),R=P.a.div(i||(i=Object(L.a)(["\n  width: 100%;\n  height: ",";\n  min-height: ",";\n"])),(function(e){var t=e.height;return t?"".concat(t,"px"):0}),(function(e){var t=e.height;return t?"".concat(t,"px"):0})),I=(P.a.div(o||(o=Object(L.a)(["\n  width: 100%;\n  flex-direction: row;\n  height: auto;\n"]))),P.a.h2(l||(l=Object(L.a)(['\n  font-size: 18px;\n  color: grey;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n'])))),U=Object(P.a)(S)(s||(s=Object(L.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),E=n(192),D=Object(P.a)(E.a)(u||(u=Object(L.a)(["\n  width: 100%;\n"]))),V=n(1);var B=function(e){var t=e.label,n=e.value,a=e.setValue;return Object(V.jsx)(D,{value:n,style:{marginBottom:5,marginTop:5},id:"outlined-basic",label:t,size:"small",variant:"outlined",onChange:function(e){return a(e.target.value)}})},A=n(67),N=n(5),W=n(101),F=n(191),G=n(201),z=n(193),X=["defaultCheckedValue"],J=Object(N.a)((function(e){return Object(V.jsx)(G.a,Object(g.a)({},e))}))((function(e){var t=e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:t.palette.primary.main}}}));function M(e){var t=e.defaultCheckedValue,n=Object(A.a)(e,X),a=!1;return Object(W.a)()&&(a=t===n.value),Object(V.jsx)(J,Object(g.a)({checked:a},n))}function q(e){var t=e.labelGroup,n=e.checkData,a=void 0===n?[]:n,c=e.defaultCheckedValue,r=e.setChecked,i=e.direction||"row";return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(w.a,{style:{userSelect:"none",marginTop:-13},component:"legend",children:t}),Object(V.jsx)(F.a,{defaultValue:"first",name:"use-radio-group",onChange:function(e){return r(e.target.value)},style:{flexDirection:i},children:a.map((function(e){return Object(V.jsx)(M,{defaultCheckedValue:c,value:e.value,label:e.label,control:Object(V.jsx)(z.a,{})},e.value)}))})]})}var K="0",H="2",Q="3",Y=n(195);function Z(e){return Object(Y.a)().replace(/-/g,"").substring(0,e)}function $(){return Z(10)}var ee=Object(d.createContext)();function te(e){var t=e.children,n=Object(d.useState)(!1),a=Object(v.a)(n,2),c=a[0],r=a[1];return Object(V.jsx)(ee.Provider,{value:{disable:c,setDisable:r},children:t})}function ne(){var e=Object(d.useContext)(ee);if(!e)throw new Error("useDisable must be used within a ForceReloadDataProvider");return{disable:e.disable,setDisable:e.setDisable}}var ae,ce,re,ie,oe=n(202),le=function(e){var t=e.name,n=e.checked,a=e.label,c=e.onChange;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(w.a,{style:{userSelect:"none",marginTop:-13},component:"legend",children:a}),Object(V.jsx)(oe.a,{checked:n,onChange:function(e){return c(e)},color:"primary",name:t})]})},se=n(102),ue=P.a.div(ae||(ae=Object(L.a)(["\n  display: flex;\n  width: 100%;\n  padding: 10px;\n  background: #fff;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n  @media (max-width: 930px) {\n    flex-direction: column;\n    padding: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),de=P.a.div(ce||(ce=Object(L.a)(["\n  width: 40%;\n  margin-left: 20px;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  @media (max-width: 930px) {\n    width: 100%;\n    margin-left: 0px;\n  }\n"]))),je=Object(P.a)(_.a)(re||(re=Object(L.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),be=Object(P.a)(S)(ie||(ie=Object(L.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),he="5",pe=n(4),xe={PIX:1,BILLET:2,WIRETRANFER:4,WALLET:8};var me,Oe=n(200),fe=n(159),ge=n(196);function ye(e){var t=e.isChecked,n=e.setChecked,a=e.label;return Object(V.jsx)(Oe.a,{sx:{m:0,mr:3},component:"fieldset",variant:"standard",children:Object(V.jsx)(fe.a,{children:Object(V.jsx)(G.a,{style:{userSelect:"none"},label:a||"",control:Object(V.jsx)(ge.a,{checked:t,onChange:function(e){return n(e.target.checked)},name:"gilad"})})})})}var ve,_e=P.a.div(me||(me=Object(L.a)(["\n  width: 100%;\n  flex-direction: row;\n  height: auto;\n"]))),we=(ve={},Object(pe.a)(ve,xe.WIRETRANFER,!1),Object(pe.a)(ve,xe.BILLET,!1),Object(pe.a)(ve,xe.PIX,!1),Object(pe.a)(ve,xe.WALLET,!1),ve),ke=function(e){var t=e.setType,n=e.operation,a=e.setCheckDataSelectedType,c=e.showingAndSetPixKeyDefault,r=Object(d.useState)(Object(g.a)(Object(g.a)({},we),{},Object(pe.a)({},xe.PIX,!0))),i=Object(v.a)(r,2),o=i[0],l=i[1];function s(e,a){var c=o;n===he&&(c=Object(g.a)({},we));var r=Object(g.a)(Object(g.a)({},c),{},Object(pe.a)({},e,a));l(r);var i=function(e){var t=e[xe.PIX]?"1":"0",n=e[xe.BILLET]?"1":"0",a=e[xe.WIRETRANFER]?"1":"0",c=e[xe.WALLET]?"1":"0";return parseInt(c+a+n+t,2).toString()}(r);t(i)}return Object(d.useEffect)((function(){n===he&&(l(Object(g.a)(Object(g.a)({},we),{},Object(pe.a)({},xe.PIX,!0))),t("1"))}),[n]),Object(d.useEffect)((function(){!function(){var e=[];o[xe.PIX]&&e.push({value:xe.PIX.toString(),label:"Pix"}),o[xe.BILLET]&&e.push({value:xe.BILLET.toString(),label:"Billet"}),o[xe.WIRETRANFER]&&e.push({value:xe.WIRETRANFER.toString(),label:"Wire Transfer"}),o[xe.WALLET]&&e.push({value:xe.WALLET.toString(),label:"Paylivre Wallet"}),a(e)}(),c()}),[o]),Object(V.jsxs)(_e,{children:[Object(V.jsx)(ye,{label:"PIX",isChecked:o[xe.PIX],setChecked:function(e){return s(xe.PIX,e)}}),Object(V.jsx)(ye,{label:"Paylivre Wallet",isChecked:o[xe.WALLET],setChecked:function(e){return s(xe.WALLET,e)}}),"0"===n&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(ye,{label:"Billet",isChecked:o[xe.BILLET],setChecked:function(e){return s(xe.BILLET,e)}}),Object(V.jsx)(ye,{label:"Wire Transfer",isChecked:o[xe.WIRETRANFER],setChecked:function(e){return s(xe.WIRETRANFER,e)}})]})]})};var Le=function(e){var t=e.setData,n=e.setGateway_token,a=e.gateway_token,c=e.setUrlGenerated,r=e.base_url,i=e.setBaseUrl,o=e.typeFormSelected,l=e.dataDefault,s=Object(d.useState)(l.merchant_id),u=Object(v.a)(s,2),j=u[0],b=u[1],h=Object(d.useState)($()),p=Object(v.a)(h,2),x=p[0],m=p[1],O=Object(d.useState)(l.email),f=Object(v.a)(O,2),y=f[0],L=f[1],P=Object(d.useState)(l.document_number),S=Object(v.a)(P,2),E=S[0],D=S[1],A=Object(d.useState)("123654asd"),N=Object(v.a)(A,2),W=N[0],F=N[1],G=Object(d.useState)("BRL"),z=Object(v.a)(G,2),X=z[0],J=z[1],M=Object(d.useState)("0"),Y=Object(v.a)(M,2),Z=Y[0],ee=Y[1],te=Object(d.useState)("500"),ae=Object(v.a)(te,2),ce=ae[0],re=ae[1],ie=Object(d.useState)("https://api.dev.paylivre.com/dev/v2/callback"),oe=Object(v.a)(ie,2),ue=oe[0],de=oe[1],be=Object(d.useState)("https://www.merchant_to_you.com"),pe=Object(v.a)(be,2),xe=pe[0],me=pe[1],Oe=Object(d.useState)("1"),fe=Object(v.a)(Oe,2),ge=fe[0],ye=fe[1],ve=Object(d.useState)("1"),_e=Object(v.a)(ve,2),we=_e[0],Le=_e[1],Pe=Object(d.useState)([]),Ce=Object(v.a)(Pe,2),Se=Ce[0],Te=Ce[1],Re=Object(d.useState)(""),Ie=Object(v.a)(Re,2),Ue=Ie[0],Ee=Ie[1],De=Object(d.useState)(""),Ve=Object(v.a)(De,2),Be=Ve[0],Ae=Ve[1],Ne=Object(d.useState)(l.email),We=Object(v.a)(Ne,2),Fe=We[0],Ge=We[1],ze=Object(d.useState)("123123123"),Xe=Object(v.a)(ze,2),Je=Xe[0],Me=Xe[1],qe=Object(d.useState)("https://github.com/paylivre/gateway-example-react-js/blob/master/assets/logo_jackpot_new.png?raw=true"),Ke=Object(v.a)(qe,2),He=Ke[0],Qe=Ke[1],Ye=Object(d.useState)(!0),Ze=Object(v.a)(Ye,2),$e=Ze[0],et=Ze[1],tt=ne(),nt=tt.disable,at=tt.setDisable;function ct(e){switch(e){case"1":case"9":return!0;default:return!1}}function rt(){Ee(""),Ae("")}var it="json"===o&&"0"===Z&&"5"===we;return Object(d.useEffect)((function(){c(!1),at(!1);var e=Z===he;t((function(t){return Object(g.a)(Object(g.a)({},t),{},{account_id:W,amount:ce,auto_approve:!0===$e?"1":"0",callback_url:ue,currency:X,document_number:E,email:y,merchant_id:j,operation:Z,merchant_transaction_id:x,redirect_url:xe,selected_type:"0"===ge?"":we,type:ge,login_email:it?Fe:"",password:it?Je:"",pix_key_type:e?Ue:"",pix_key:e?Be:"",logo_url:He})}))}),[t,j,x,y,E,W,$e,X,Z,ce,ue,xe,c,a,r,ge,we,Ue,Be,He]),Object(V.jsxs)(T,{children:[Object(V.jsxs)(C,{style:{marginBottom:20,height:50,alignItems:"center"},children:[Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(I,{style:{margin:0},children:"Merchant Data:"})}),Object(V.jsx)(U,{widthPercent:50,style:{},children:Object(V.jsx)(_.a,{onClick:function(){return m($()),void at(!1)},style:{width:"100%",textTransform:"none"},variant:!0===nt?"contained":"outlined",color:"success",children:"Reload Random Data"})})]}),Object(V.jsxs)(C,{children:[Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(B,{value:j,setValue:function(e){return b(e)},label:"Merchant ID:"}),Object(V.jsx)(R,{height:15})]}),Object(V.jsx)(U,{widthPercent:45,children:Object(V.jsx)(B,{value:x,setValue:function(e){return m(e)},label:"Merchant Transaction ID:"})})]}),Object(V.jsx)(R,{height:5}),Object(V.jsx)(B,{value:a,setValue:function(e){return n(e)},label:"Gateway Token:"}),Object(V.jsx)(I,{children:"User Data:"}),Object(V.jsx)(B,{value:y,setValue:function(e){return L(e)},label:"User Email: (OPTIONAL)"}),Object(V.jsx)(R,{height:20}),Object(V.jsxs)(C,{children:[Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(B,{value:E,setValue:function(e){return D(e)},label:"User Document - CPF/CNPJ: (OPTIONAL)"})}),Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(B,{value:W,setValue:function(e){return F(e)},label:"User Account ID in Merchant:"})})]}),Object(V.jsx)(I,{children:"Transaction Data:"}),Object(V.jsxs)(C,{children:[Object(V.jsx)(U,{widthPercent:50,children:Object(V.jsx)(B,{value:ce,setValue:function(e){return re(e)},label:"Amount:"})}),Object(V.jsx)(R,{height:15}),Object(V.jsxs)(U,{widthPercent:60,children:[Object(V.jsx)(le,{label:"Auto approve",checked:$e,onChange:function(e){return et(e.target.checked)}}),!0===$e?Object(V.jsx)(k.a,{component:"span",color:"primary",children:"true"}):Object(V.jsx)(k.a,{component:"span",color:"error",children:"false"})]}),Object(V.jsx)(U,{widthPercent:60,children:Object(V.jsx)(q,{defaultCheckedValue:X,setChecked:function(e){return J(e)},labelGroup:"Currency",checkData:[{value:"BRL",label:"BRL"},{value:"USD",label:"USD"}]})})]}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(q,{defaultCheckedValue:Z,setChecked:function(e){return ee(e)},labelGroup:"Operation",checkData:[{value:"0",label:"Deposit"},{value:"5",label:"Withdraw"}]}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(w.a,{component:"legend",children:"Type passed by merchant"}),Object(V.jsx)(ke,{setType:ye,operation:Z,setCheckDataSelectedType:Te,showingAndSetPixKeyDefault:function(){ct(ge)||rt()}}),"json"===o&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(R,{height:15}),Object(V.jsx)(q,{defaultCheckedValue:we,setChecked:function(e){return Le(e)},labelGroup:"User selected type",checkData:Se})]}),it&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(R,{height:15}),Object(V.jsxs)(C,{children:[Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(B,{value:Fe,setValue:function(e){return Ge(e)},label:"Email Login Paylivre"}),Object(V.jsx)(R,{height:15})]}),Object(V.jsx)(U,{widthPercent:45,children:Object(V.jsx)(B,{value:Je,setValue:function(e){return Me(e)},label:"Password Login Paylivre"})})]})]}),Z===he&&"4"===we&&ct(ge)&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(C,{children:[Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(R,{height:25}),Object(V.jsx)(q,{defaultCheckedValue:Ue,setChecked:function(e){return(t=e)===K&&(Ee(K),Ae(E)),t===Q&&(Ee(Q),Ae(y)),void(t===H&&(Ee(H),Ae("")));var t},labelGroup:"Pix Key Type(OPTIONAL)",checkData:[{value:K,label:"CPF/CNPJ"},{value:H,label:"Phone"},{value:Q,label:"Email"}]})]}),Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(R,{height:30}),Object(V.jsx)(B,{value:Be,setValue:function(e){return Ae(e)},label:"User Pix Key"})]})]}),Object(V.jsx)(C,{children:Object(V.jsx)("span",{style:{marginTop:"10px",marginBottom:"10px"},children:"Note: The Pix Key Type is optional, but if selected it is necessary to fill in the User Pix Key Value."})}),Object(V.jsx)(C,{children:Object(V.jsx)(je,{onClick:function(){return rt()},style:{width:"30%",textTransform:"none"},variant:"contained",children:"Clear Data Pix"})})]}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(B,{value:ue,setValue:function(e){return de(e)},label:"Callback URL:"}),Object(V.jsx)(R,{height:20}),Object(V.jsx)(B,{value:xe,setValue:function(e){return me(e)},label:"Redirect URL: (OPTIONAL)"}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(I,{children:"Environment:"}),Object(V.jsx)(B,{value:r,setValue:function(e){return i(e)},label:"Base URL:"}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(B,{value:He,setValue:function(e){return Qe(e)},label:"Logo URL: (OPTIONAL)"}),Object(V.jsxs)(w.a,{component:"legend",style:{margin:"0.6rem 0"},children:["v",se.version]})]})},Pe=n(132);function Ce(e){return Se.apply(this,arguments)}function Se(){return(Se=Object(y.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe.hash({pass:t,salt:Z(14),time:2,mem:16,parallelism:1,hashLen:16,type:Pe.ArgonType.Argon2i}).then((function(e){return e.encoded})).catch((function(e){return console.error(e.message,e.code)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(e){return window.btoa(unescape(encodeURIComponent(e)))}var Re,Ie,Ue,Ee,De,Ve={base_url:"https://dev.gateway.paylivre.com",gateway_token:"NHsuzedl6omTPvoxc0p7gVXc7Xthhf6Y",merchant_id:"302",merchant_transaction_id:"",email:"user_gateway_test@tutanota.com",document_number:"61317581075"},Be={base_url:"https://playground.gateway.paylivre.com",gateway_token:"0c85yWaiBWx1Mclvink7suWrHoEQnH8Q",merchant_id:"1508",merchant_transaction_id:"",email:"user_gateway_test@tutanota.com",document_number:"61317581075"},Ae={base_url:"https://staging.gateway.paylivre.com",gateway_token:"jUjoq0N8WRB95mHjmRqr0xh6lFJZy9Kn",merchant_id:"25",merchant_transaction_id:"",email:"user_gateway_test@tutanota.com",document_number:"61317581075"},Ne=n(79),We=n.n(Ne),Fe=n(105),Ge=n.n(Fe),ze=(n(145),n(103)),Xe=n.n(ze),Je=n(78),Me=n(104),qe=n.n(Me),Ke=(n(150),P.a.div(Re||(Re=Object(L.a)(["\n  display: flex;\n  background: #292929;\n  flex-wrap: nowrap;\n  width: auto;\n  height: auto;\n  min-height: 100px;\n  justify-content: center;\n  padding: 0 20px 20px 20px;\n  border-radius: 5px;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 88%;\n    padding: 20px;\n  }\n"])))),He=P.a.p(Ie||(Ie=Object(L.a)(["\n  font-size: small;\n  color: ",';\n  margin: 0;\n  max-width: 100%;\n  display: flex;\n  font-size: 14px;\n  word-break: break-all;\n  font-family: "Courier New", Courier, monospace;\n'])),(function(e){return e.color||"#fff"})),Qe=P.a.h2(Ue||(Ue=Object(L.a)(['\n  font-size: 18px;\n  color: white;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),Ye=Object(P.a)(S)(Ee||(Ee=Object(L.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n    margin: 5px 0;\n  }\n"]))),Ze=Object(P.a)(_.a)(De||(De=Object(L.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),$e=["dataRequest","url","urlGateway","label","textButton","type","baseUrl","isDevLocalhost","devLocalhostPort"];var et,tt,nt,at,ct,rt,it,ot=function(e){var t=e.dataRequest,n=e.url,a=e.urlGateway,c=e.label,r=e.textButton,i=e.type,o=e.baseUrl,l=e.isDevLocalhost,s=e.devLocalhostPort,u=Object(A.a)(e,$e),d=ne(),j=d.disable,b=d.setDisable;function h(){return l?a.replace(o,"http://localhost:".concat(null!==s?s:"3000")):a}function p(){if(!j){var e=JSON.stringify(Object(g.a)(Object(g.a)({},t),{},{url:n})),a="url"===i?h():e;Xe()(a);var c="url"===i?"Copied URL":"JSON Copied";Je.NotificationManager.success(c,"",1e3),b(!0)}}var x="url"===i?Ge.a:We.a;function m(){"url"===i?j||(window.open(h()),b(!0)):p()}return Object(V.jsxs)(Ke,Object(g.a)(Object(g.a)({},u),{},{children:[Object(V.jsxs)(C,{style:{alignItems:"center",paddingTop:10,marginBottom:10},children:[Object(V.jsx)(Ye,{widthPercent:50,children:Object(V.jsx)(Qe,{children:c})}),Object(V.jsx)(Ye,{widthPercent:50,children:Object(V.jsx)(Ze,{disabled:j,endIcon:Object(V.jsx)(x,{}),onClick:function(){return m()},style:{width:"100%",textTransform:"none"},variant:"contained",children:r})}),"url"===i&&Object(V.jsx)(Ye,{widthPercent:50,style:{marginLeft:20,maxWidth:140},children:Object(V.jsx)(Ze,{disabled:j,endIcon:Object(V.jsx)(We.a,{}),onClick:function(){return p()},style:{width:"100%",textTransform:"none",background:"#fff"},variant:"outlined",children:"Copy URL"})})]}),Object(V.jsx)(Je.NotificationContainer,{}),t&&Object(V.jsx)(qe.a,{id:"json-pretty",data:Object(g.a)(Object(g.a)({},t),{},{url:n})}),a&&Object(V.jsx)(He,{color:"#ffff80",children:h()})]}))},lt=P.a.div(et||(et=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  background: transparent;\n  flex-wrap: wrap;\n  width: auto;\n  height: auto;\n  padding: 20px;\n  border-radius: 5px;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 88%;\n    padding: 20px;\n  }\n"]))),st=P.a.h2(tt||(tt=Object(L.a)(['\n  font-size: 18px;\n  color: grey;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),ut=P.a.ul(nt||(nt=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  padding: 0;\n"]))),dt=P.a.li(at||(at=Object(L.a)(["\n  font-size: small;\n  color: ",';\n  margin: 0;\n  max-width: 100%;\n  display: flex;\n  font-size: 1.2rem;\n  word-break: break-all;\n  margin: 0.2rem 0;\n  /* font-family: "Courier New", Courier, monospace; */\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n'])),(function(e){return e.isEmpty&&"#be453a"})),jt=P.a.h2(ct||(ct=Object(L.a)(['\n  font-size: 18px;\n  color: #be453a;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),bt=P.a.p(rt||(rt=Object(L.a)(['\n  font-size: 1rem;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),ht=P.a.div(it||(it=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  background: transparent;\n  flex-wrap: wrap;\n  width: auto;\n  height: auto;\n  padding: 20px;\n  border-radius: 5px;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 88%;\n    padding: 20px;\n  }\n"]))),pt=["merchant_id","operation","merchant_transaction_id","amount","currency","mock_type","account_id","mock_auto_approve","callback_url"],xt=function(e){var t=e.parameters,n=e.baseUrl,a=[];return Object.entries(t).forEach((function(e){return a.push(pt.includes(e[0])&&0===e[1].length)})),Object(V.jsxs)(lt,{children:[Object(V.jsxs)(S,{children:[Object(V.jsx)(st,{children:"Url Parameters"}),Object(V.jsxs)(ut,{children:[Object(V.jsx)(dt,{children:n}),Object(V.jsx)("br",{}),Object.entries(t).map((function(e,t){return function(e,t){var n=pt.includes(e[0]),a=0===e[1].length;return Object(V.jsxs)(dt,{isEmpty:a,children:[n&&"*","".concat(e[0]," = ").concat(e[1])]},t)}(e,t)}))]})]}),Object(V.jsxs)(ht,{children:[a.includes(!0)&&Object(V.jsx)(jt,{children:"All mandatory fields must be filled!"}),Object(V.jsx)(k.a,{variant:"p",component:"p",children:"Legend:"}),Object(V.jsx)(bt,{children:"* - Mandatory field"})]})]})};function mt(){return Object(m.e)().pathname}var Ot=function(){var e=new URLSearchParams(Object(m.e)().search),t="1"===e.get("dev"),n="1"===e.get("playground"),a="1"===e.get("localhost"),c="1"===e.get("staging"),r=e.get("localhost_port"),i=function(){console.log(mt());var e=mt().split("/");return console.log(e),-1!==e.findIndex((function(e){return"api"===e.toString().toLowerCase()}))}();console.log("IsApiPath: ".concat(i));var o=t?n?Be:c?Ae:Ve:Be,l=j.a.useState(o.base_url),s=Object(v.a)(l,2),u=s[0],d=s[1],b=j.a.useState({}),h=Object(v.a)(b,2),p=h[0],x=h[1],O=j.a.useState(o.gateway_token),_=Object(v.a)(O,2),w=_[0],k=_[1],L=j.a.useState(!1),P=Object(v.a)(L,2),S=P[0],T=P[1],R=j.a.useState(""),I=Object(v.a)(R,2),U=I[0],E=I[1],D=j.a.useState(""),B=Object(v.a)(D,2),A=B[0],N=B[1],W=j.a.useState("url"),F=Object(v.a)(W,2),G=F[0],z=F[1],X=j.a.useState({}),J=Object(v.a)(X,2),M=J[0],q=J[1];function K(e,t){var n,a;a=t,(n=e).pix_key&&n.pix_key_type?q({merchant_transaction_id:n.merchant_transaction_id,merchant_id:n.merchant_id,account_id:n.account_id,amount:n.amount,currency:n.currency,operation:n.operation,callback_url:n.callback_url,redirect_url:n.redirect_url,type:n.type,auto_approve:n.auto_approve,signature:a||"",logoUrl:n.logo_url?n.logo_url:"",email:n.email?n.email:"",document_number:n.document_number?n.document_number:"",pix_key:n.pix_key,pix_key_type:n.pix_key_type}):q({merchant_transaction_id:n.merchant_transaction_id,merchant_id:n.merchant_id,account_id:n.account_id,amount:n.amount,currency:n.currency,operation:n.operation,callback_url:n.callback_url,redirect_url:n.redirect_url,type:n.type,auto_approve:n.auto_approve,signature:a||"",logoUrl:n.logo_url?n.logo_url:"",email:n.email?n.email:"",document_number:n.document_number?n.document_number:""});var c="merchant_transaction_id=".concat(e.merchant_transaction_id),r="merchant_id=".concat(e.merchant_id),i="account_id=".concat(e.account_id),o="amount=".concat(e.amount),l="currency=".concat(e.currency),s="operation=".concat(e.operation),d="callback_url=".concat(e.callback_url),j="redirect_url=".concat(e.redirect_url),b="type=".concat(e.type),h="auto_approve=".concat(e.auto_approve),p=t?"&signature=".concat(t):"",x=e.logo_url?"&logo_url=".concat(e.logo_url):"",m=e.email?"&email=".concat(e.email):"",O=e.document_number?"&document_number=".concat(e.document_number):"",f=e.pix_key?"&pix_key=".concat(e.pix_key):null,g=e.pix_key_type?"&pix_key_type=".concat(e.pix_key_type):null;return e.operation===he&&e.pix_key&&e.pix_key_type?"".concat(u,"?").concat(c,"&").concat(r,"&").concat(s).concat(m).concat(O,"&").concat(o,"&").concat(l).concat(g).concat(f,"&").concat(b,"&").concat(i,"&").concat(d,"&").concat(j,"&").concat(h).concat(p).concat(x):"".concat(u,"?").concat(c,"&").concat(r,"&").concat(s).concat(m).concat(O,"&").concat(o,"&").concat(l,"&").concat(b,"&").concat(i,"&").concat(d,"&").concat(j,"&").concat(h).concat(p).concat(x)}function H(){return Q.apply(this,arguments)}function Q(){return(Q=Object(y.a)(f.a.mark((function e(){var t,n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K(p),n=w+t,e.next=4,Ce(n);case 4:a=e.sent,c=Te(a),E(t),N(K(p,c)),x((function(e){return Object(g.a)(Object(g.a)({},e),{},{signature:c})})),T(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(V.jsxs)(V.Fragment,{children:[t&&Object(V.jsxs)(C,{style:{justifyContent:"center"},children:[Object(V.jsx)(be,{widthPercent:20,style:{marginRight:20,marginBottom:20},children:Object(V.jsx)(je,{onClick:function(){return z("url")},style:{width:"100%",textTransform:"none",background:"url"===G?"#1976d2":"#c4c4c4"},variant:"contained",children:"Selected Form to URL"})}),Object(V.jsx)(be,{widthPercent:20,children:Object(V.jsx)(je,{onClick:function(){return z("json")},style:{width:"100%",textTransform:"none",background:"json"===G?"#1976d2":"#c4c4c4"},variant:"contained",children:"Select Form to Request JSON"})})]}),Object(V.jsxs)(ue,{children:[Object(V.jsx)(Le,{dataDefault:o,base_url:u,setBaseUrl:d,gateway_token:w,setGateway_token:k,data:p,setUrlGenerated:T,handleGenerateURL:function(){return H()},setData:x,typeFormSelected:G}),Object(V.jsxs)(de,{children:[S&&Object(V.jsxs)(V.Fragment,{children:["url"===G&&Object(V.jsx)(ot,{type:G,style:{marginBottom:20},urlGateway:A,label:"URL to Gateway Web:",textButton:"Open URL Gateway",baseUrl:o.base_url,isDevLocalhost:a,devLocalhostPort:r}),"json"===G&&Object(V.jsx)(ot,{type:G,style:{marginBottom:20},dataRequest:p,url:U,label:"JSON Post Request:",textButton:"Copy JSON",baseUrl:o.base_url,isDevLocalhost:a,devLocalhostPort:r})]}),Object(V.jsx)(je,{size:"large",onClick:function(){return H()},style:{width:"100%",textTransform:"none",minWidth:"100%",marginRight:0},variant:"contained",children:"Generate ".concat(G.toUpperCase())}),S&&Object(V.jsx)(xt,{baseUrl:u,parameters:M})]})]})]})},ft=function(e){var t=e.history;return Object(V.jsx)(x.a,{basename:"/",history:t,children:Object(V.jsxs)(m.c,{children:[Object(V.jsx)(m.a,{exact:!0,path:"/",element:Object(V.jsx)(Ot,{})}),Object(V.jsx)(m.a,{path:"*",element:Object(V.jsx)(Ot,{})})]})})},gt=Object(p.b)();h.a.render(Object(V.jsx)(j.a.StrictMode,{children:Object(V.jsx)(te,{children:Object(V.jsx)(ft,{history:gt})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.0472de8e.chunk.js.map