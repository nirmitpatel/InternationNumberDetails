(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{19:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(24),s=n.n(r),i=(n(54),n(5)),o=n.n(i),l=n(21),d=n(14),u=n(6),j=n(4),b=n(0);var f=function(e){console.log("process");var t,n=e.details,c=e.dta,a=!1,r=Object(j.a)(c);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(n.includes("+"+s.Prefix)){a=!0;break}}}catch(i){r.e(i)}finally{r.f()}return a?Object(b.jsx)("p",{children:"High Risk: Yes"}):Object(b.jsx)("p",{children:"High Risk: No"})};var h=function(e){console.log("ProcessLiteCsv");var t,n=e.number,c=e.csvFile,a=!1,r=Object(j.a)(c);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(n.includes("+"+s.Prefix)){console.log("ProcessLiteCsv if: "+s.Prefix+" Country: "+s.Country),a=!0;break}}}catch(i){r.e(i)}finally{r.f()}return a?Object(b.jsx)("p",{children:"INTL Lite Blocked: Yes"}):Object(b.jsx)("p",{children:"INTL Lite Blocked: No"})};n(19);var x=function(e){var t=e.csv,n=e.intlPhoneDetails,c=e.liteCsv,a={background:"#b3ecfb",color:"#000000",overflow:"hidden",width:"400px",fontFamily:"Overpass,sans-serif",fontWeight:"bold",textAlign:"left",alignItems:"left",borderRadius:"20px",padding:"15px 0px 0px 25px"};return Object(b.jsx)("div",{children:n?n.map((function(e){return Object(b.jsx)("div",{className:"card",style:a,children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"card-text",children:["Number: ",e.number]}),Object(b.jsxs)("p",{className:"card-text",children:["Local format: ",e.local_format]}),Object(b.jsxs)("p",{className:"card-text",children:["International format: ",e.international_format]}),Object(b.jsxs)("p",{className:"card-text",children:["Country prefix: ",e.country_prefix]}),Object(b.jsxs)("p",{className:"card-text",children:["Country code: ",e.country_code]}),Object(b.jsxs)("p",{className:"card-text",children:["Country name: ",e.country_name]}),Object(b.jsxs)("p",{className:"card-text",children:["Location: ",e.location]}),Object(b.jsxs)("p",{className:"card-text",children:["Carrier: ",e.carrier]}),Object(b.jsxs)("p",{className:"card-text",children:["Line type: ",e.line_type]}),Object(b.jsx)("div",{children:Object(b.jsx)(f,{details:e.international_format.toString(),dta:t})}),Object(b.jsx)("div",{children:Object(b.jsx)(h,{number:e.international_format.toString(),csvFile:c})})]})},"index2")})):console.log("no map")},"index")};var p=function(e){var t=e.localPhoneDetails,n={background:"#b3ecfb",color:"#000000",overflow:"hidden",width:"400px",fontFamily:"Overpass,sans-serif",fontWeight:"bold",textAlign:"left",alignItems:"left",borderRadius:"20px",padding:"15px 0px 15px 25px"};return Object(b.jsx)("div",{children:t?t.map((function(e){return Object(b.jsx)("div",{className:"card",style:n,children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"card-text",children:["E164 Number: ",e.result[0]["E.164 Format"]]}),Object(b.jsxs)("p",{className:"card-text",children:["Formatted Number: ",e.result[0].Formatted]}),Object(b.jsxs)("p",{className:"card-text",children:["Country name: ",e.result[0].Country]}),Object(b.jsxs)("p",{className:"card-text",children:["Line type: ",e.result[0]["Line Type"]]}),Object(b.jsxs)("p",{className:"card-text",children:["Carrier: ",e.result[0]["Line Provider"]]})]})},"index2")})):console.log("no map")},"index")},O=n(20),m=n.p+"static/media/BandwidthHighRiskBlock.924e58a4.csv",v=n.p+"static/media/lite.0a44dd3f.csv",g=n.p+"static/media/background-globe-animated.1300d578.svg",N=n(26),y=n(63);var k=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],j=s[1],f=Object(c.useState)([]),h=Object(u.a)(f,2),k=h[0],C=h[1],w=Object(c.useState)([]),X=Object(u.a)(w,2),S=X[0],I=X[1],L=Object(c.useState)(""),P=Object(u.a)(L,2),F=P[0],B=P[1],_=Object(c.useState)([]),D=Object(u.a)(_,2),T=D[0],E=D[1],R=Object(c.useState)(!0),z=Object(u.a)(R,2),A=z[0],H=z[1],M=Object(c.useState)(!0),J=Object(u.a)(M,2),V=J[0],W=J[1];Object(c.useEffect)((function(){O.a(m).then((function(e){C(e)}))}),[]),Object(c.useEffect)((function(){O.a(v).then((function(e){I(e)}))}),[]);var Y=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T&&E([]),t.preventDefault(),W(!1),fetch("http://apilayer.net/api/validate?access_key=1fcc33e69f7fee637d15338c111fe68f&number="+F+"&country_code=&format=1").then((function(e){return e.json()})).then((function(e){E((function(t){return[].concat(Object(l.a)(t),[e])})),console.log("in the toggle fetch")})),W(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i&&j([]),t.preventDefault(),H(!1),e.next=5,fetch("https://0xi9lxezba.execute-api.us-east-2.amazonaws.com/test/tnlookup?number="+n).then(function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){console.log("before data"),console.log(e),console.log("in data of toggleIntlButtonState"),j((function(t){return[].concat(Object(l.a)(t),[e])})),console.log("this from app.js: "+i)}));case 5:H(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G={backgroundImage:"url(".concat(g,")"),color:"white",height:"100vh",width:"100vw",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",backgroundPosition:"center",fontFamily:"Overpass,sans-serif",textAlign:"left"};return Object(b.jsx)("div",{className:"App",style:G,children:Object(b.jsxs)("center",{children:[Object(b.jsx)("h1",{children:"Number Info Tool"}),Object(b.jsxs)(N.a,{split:"vertical",minSize:"50%",defaultSize:"50%",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"Title",children:"Local Number Search"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{children:"Enter Local Phone Number: "}),Object(b.jsx)("input",{className:"InputBox",value:n,onChange:function(e){return function(e){e.preventDefault(),a(e.target.value)}(e)},placeholder:"1XXXXXXXXXX"}),Object(b.jsx)("button",{className:"ClickMeButton",onClick:function(e){return q(e)},children:" View Info! "})]}),Object(b.jsx)("div",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("div",{children:A?Object(b.jsx)(p,{localPhoneDetails:i}):Object(b.jsx)(y.a,{animation:"border",variant:"info"})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"Title",children:"International Number Search"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{children:"Enter International Phone Number: "}),Object(b.jsx)("input",{className:"InputBox",value:F,onChange:function(e){return function(e){e.preventDefault(),B(e.target.value)}(e)},placeholder:"44XXXXXXXXX"}),Object(b.jsx)("button",{className:"ClickMeButton",onClick:function(e){return Y(e)},children:" View Info! "})]}),Object(b.jsx)("div",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("div",{children:V?Object(b.jsx)(x,{csv:k,intlPhoneDetails:T,liteCsv:S}):Object(b.jsx)(y.a,{animation:"border",variant:"info"})})]})]})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(60);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),C()}},[[61,1,2]]]);
//# sourceMappingURL=main.243b6e23.chunk.js.map