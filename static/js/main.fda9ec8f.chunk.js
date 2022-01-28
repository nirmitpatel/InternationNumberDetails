(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{19:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(28),r=c.n(a),s=(c(59),c(14)),i=c(3),o=(c(60),c(0));var l=function(){return Object(o.jsx)("div",{className:"navigation",children:Object(o.jsx)("nav",{className:"navbar navbar-expand navbar-custom",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(s.b,{className:"navbar-brand",to:"/",children:[Object(o.jsx)("img",{src:"../BwLogo.png",alt:"Bandwidth Logo",width:"40",height:"40"}),"TAC Lookup Tool"]}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)(s.b,{className:"nav-link",to:"/",children:["Num Lookup",Object(o.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{className:"nav-link",to:"/ipLookup",children:"IP Lookup"})})]})})]})})})},d=c(16),j=c(5),u=c.n(j),b=c(9),x=c(4),p=c(8);var h=function(e){console.log("process");var t,c=e.details,n=e.dta,a=!1,r=Object(p.a)(n);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(c.includes("+"+s.Prefix)){a=!0;break}}}catch(i){r.e(i)}finally{r.f()}return a?Object(o.jsx)("p",{children:"High Risk: Yes"}):Object(o.jsx)("p",{children:"High Risk: No"})};var O=function(e){console.log("ProcessLiteCsv");var t,c=e.number,n=e.csvFile,a=!1,r=Object(p.a)(n);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(c.includes("+"+s.Prefix)){console.log("ProcessLiteCsv if: "+s.Prefix+" Country: "+s.Country),a=!0;break}}}catch(i){r.e(i)}finally{r.f()}return a?Object(o.jsx)("p",{children:"INTL Lite Blocked: Yes"}):Object(o.jsx)("p",{children:"INTL Lite Blocked: No"})};c(19);var f=function(e){var t=e.csv,c=e.intlPhoneDetails,n=e.liteCsv,a={background:"#b3ecfb",color:"#000000",overflow:"hidden",width:"400px",fontFamily:"Overpass,sans-serif",fontWeight:"bold",textAlign:"left",alignItems:"left",borderRadius:"20px",padding:"15px 0px 0px 25px"};return Object(o.jsx)("div",{children:c?c.map((function(e){return Object(o.jsx)("div",{className:"card",style:a,children:Object(o.jsx)("div",{className:"card-body",children:e.valid?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{className:"card-text",children:["Number: ",e.number]}),Object(o.jsxs)("p",{className:"card-text",children:["Local format: ",e.local_format]}),Object(o.jsxs)("p",{className:"card-text",children:["International format: ",e.international_format]}),Object(o.jsxs)("p",{className:"card-text",children:["Country prefix: ",e.country_prefix]}),Object(o.jsxs)("p",{className:"card-text",children:["Country code: ",e.country_code]}),Object(o.jsxs)("p",{className:"card-text",children:["Country name: ",e.country_name]}),Object(o.jsxs)("p",{className:"card-text",children:["Location: ",e.location]}),Object(o.jsxs)("p",{className:"card-text",children:["Carrier: ",e.carrier]}),Object(o.jsxs)("p",{className:"card-text",children:["Line type: ",e.line_type]}),Object(o.jsx)("div",{children:Object(o.jsx)(h,{details:e.international_format.toString(),dta:t})}),Object(o.jsx)("div",{children:Object(o.jsx)(O,{number:e.international_format.toString(),csvFile:n})})]}):Object(o.jsx)("p",{className:"card-text",style:{color:"red",paddingBottom:"10px"},children:"ERROR: The number entered is not valid!!"})})},"index2")})):console.log("no map")},"index")};var m=function(e){var t=e.localPhoneDetails,c={background:"#b3ecfb",color:"#000000",overflow:"hidden",width:"400px",fontFamily:"Overpass,sans-serif",fontWeight:"bold",textAlign:"left",alignItems:"left",borderRadius:"20px",padding:"15px 0px 15px 25px"};return Object(o.jsx)("div",{children:t?t.map((function(e){return Object(o.jsx)("div",{className:"card",style:c,children:Object(o.jsx)("div",{className:"card-body",children:e.hasOwnProperty("message")?Object(o.jsxs)("p",{className:"card-text",style:{color:"red",paddingRight:"10px"},children:["ERROR: ",e.message]}):e.hasOwnProperty("transaction_id")?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{className:"card-text",children:["Status Code: ",e.status_code]}),Object(o.jsxs)("p",{className:"card-text",children:["Status Desc: ",e.status_desc]}),Object(o.jsxs)("p",{className:"card-text",children:["BW Desc: ",e.BWDesc]}),Object(o.jsxs)("p",{className:"card-text",children:["Error: ",e.error]}),Object(o.jsxs)("p",{className:"card-text",children:["Eligible: ",e.eligible]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{className:"card-text",style:{color:"red",paddingRight:"10px"},children:["Click ",Object(o.jsx)("a",{href:"https://bandwidth-jira.atlassian.net/wiki/spaces/BT/pages/3971743769/TAC+number+lookup+tool.#ZW-Status-Code-Description",target:"_blank",rel:"noreferrer",children:"here"})," for more info on status code"]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{className:"card-text",children:["E164 Number: ",e.result[0]["E.164 Format"]]}),Object(o.jsxs)("p",{className:"card-text",children:["Formatted Number: ",e.result[0].Formatted]}),Object(o.jsxs)("p",{className:"card-text",children:["Country name: ",e.result[0].Country]}),Object(o.jsxs)("p",{className:"card-text",children:["Line type: ",e.result[0]["Line Type"]]}),Object(o.jsxs)("p",{className:"card-text",children:["Carrier: ",e.result[0]["Line Provider"]]})]})})},"index2")})):console.log("no map")},"index")},v=c(25),g=c.p+"static/media/BandwidthHighRiskBlock.924e58a4.csv",N=c.p+"static/media/lite.0a44dd3f.csv",k=c.p+"static/media/background-globe-animated.1300d578.svg",y=c(30),w=c(68),C=c(20);var X=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(x.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)([]),p=Object(x.a)(j,2),h=p[0],O=p[1],X=Object(n.useState)([]),I=Object(x.a)(X,2),P=I[0],S=I[1],L=Object(n.useState)(""),R=Object(x.a)(L,2),D=R[0],B=R[1],_=Object(n.useState)([]),E=Object(x.a)(_,2),F=E[0],z=E[1],A=Object(n.useState)(!0),T=Object(x.a)(A,2),W=T[0],H=T[1],M=Object(n.useState)(!0),V=Object(x.a)(M,2),q=V[0],J=V[1];Object(n.useEffect)((function(){v.a(g).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){v.a(N).then((function(e){S(e)}))}),[]);var Y=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F&&z([]),t.preventDefault(),J(!1),e.next=5,fetch("https://karh5qw55m.execute-api.us-east-2.amazonaws.com/test/intlnumlookup?phone="+D).then(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){z((function(t){return[].concat(Object(d.a)(t),[e])}))}));case 5:J(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i&&l([]),t.preventDefault(),H(!1),e.next=5,fetch("https://0xi9lxezba.execute-api.us-east-2.amazonaws.com/test/tnlookup?number="+c).then(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){l((function(t){return[].concat(Object(d.a)(t),[e])}))}));case 5:H(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$={backgroundImage:"url(".concat(k,")"),color:"white",height:"100vh",width:"100vw",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",backgroundPosition:"center",fontFamily:"Overpass,sans-serif",textAlign:"left"};return Object(o.jsxs)("div",{className:"App",style:$,children:[Object(o.jsx)(C.a,{}),Object(o.jsx)("center",{children:Object(o.jsxs)(y.a,{split:"vertical",minSize:"50%",defaultSize:"50%",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{}),Object(o.jsx)("h2",{children:"Local Number Search"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Enter Local Phone Number: "}),Object(o.jsx)("input",{id:"local",className:"InputBox",value:c,onChange:function(e){return function(e){e.preventDefault(),/\D/g.test(e.target.value)&&(e.target.value=e.target.value.replace(/\D/g,"")),a(e.target.value)}(e)},placeholder:"1XXXXXXXXXX"}),Object(o.jsx)("button",{className:"ClickMeButton",onClick:function(e){return Z(e)},children:" View Info! "})]}),Object(o.jsx)("div",{children:Object(o.jsx)("br",{})}),Object(o.jsx)("div",{children:W?Object(o.jsx)(m,{localPhoneDetails:i}):Object(o.jsx)(w.a,{animation:"border",variant:"info"})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{}),Object(o.jsx)("h2",{children:"International Number Search"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Enter International Phone Number: "}),Object(o.jsx)("input",{className:"InputBox",value:D,onChange:function(e){return function(e){e.preventDefault(),/\D/g.test(e.target.value)&&(e.target.value=e.target.value.replace(/\D/g,"")),B(e.target.value)}(e)},placeholder:"44XXXXXXXXX"}),Object(o.jsx)("button",{className:"ClickMeButton",onClick:function(e){return Y(e)},children:" View Info! "})]}),Object(o.jsx)("div",{children:Object(o.jsx)("br",{})}),Object(o.jsx)("div",{children:q?Object(o.jsx)(f,{csv:h,intlPhoneDetails:F,liteCsv:P}):Object(o.jsx)(w.a,{animation:"border",variant:"info"})})]})]})})]})};c(66);var I=function(e){var t=e.ipDetails,c={background:"#b3ecfb",color:"#000000",overflow:"hidden",width:"400px",fontFamily:"Overpass,sans-serif",fontWeight:"bold",textAlign:"left",alignItems:"left",borderRadius:"20px",padding:"15px 0px 0px 25px"};return Object(o.jsx)("div",{children:t?t.map((function(e){return Object(o.jsx)("div",{className:"card",style:c,children:Object(o.jsx)("div",{className:"card-body",children:e.hasOwnProperty("reason")?Object(o.jsxs)("p",{className:"card-text",style:{color:"red",paddingRight:"10px"},children:["ERROR: IP Lookup Error! ",e.reason," ",Object(o.jsx)("p",{})," "]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{className:"card-text",children:["IP: ",e.ip]}),Object(o.jsxs)("p",{className:"card-text",children:["City: ",e.city]}),Object(o.jsxs)("p",{className:"card-text",children:["Region: ",e.region]}),Object(o.jsxs)("p",{className:"card-text",children:["Region Code: ",e.region_code]}),Object(o.jsxs)("p",{className:"card-text",children:["Country Code: ",e.country_code]}),Object(o.jsxs)("p",{className:"card-text",children:["Country Name: ",e.country_name]}),Object(o.jsxs)("p",{className:"card-text",children:["Postal: ",e.postal]}),Object(o.jsxs)("p",{className:"card-text",children:["Timezone: ",e.timezone]}),Object(o.jsxs)("p",{className:"card-text",children:["Organization: ",e.org]}),Object(o.jsx)("p",{})]})})},"index2")})):console.log("no map")},"index")};var P=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(x.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(!0),p=Object(x.a)(j,2),h=p[0],O=p[1],f=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(c)){e.next=9;break}return i&&l([]),t.preventDefault(),O(!1),e.next=6,fetch("https://zftiarq6sj.execute-api.us-east-2.amazonaws.com/test/iplookup?ip="+c).then(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){l((function(t){return[].concat(Object(d.a)(t),[e])}))}));case 6:O(!0),e.next=10;break;case 9:alert("Invalid IP");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={backgroundImage:"url(".concat(k,")"),color:"white",height:"100vh",width:"100vw",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",backgroundPosition:"center",fontFamily:"Overpass,sans-serif",textAlign:"left"};return Object(o.jsx)("div",{className:"App",style:m,children:Object(o.jsxs)("center",{children:[Object(o.jsx)(C.a,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{}),Object(o.jsx)("h2",{children:"IP Search"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Enter IP Address: "}),Object(o.jsx)("input",{className:"InputBox",value:c,onChange:function(e){return function(e){e.preventDefault(),a(e.target.value)}(e)},placeholder:"XXX.XXX.XXX.XXX"}),Object(o.jsx)("button",{className:"ClickMeButton",onClick:function(e){return f(e)},children:" View Info! "})]}),Object(o.jsx)("div",{children:Object(o.jsx)("br",{})}),Object(o.jsx)("div",{children:h?Object(o.jsx)(I,{ipDetails:i}):Object(o.jsx)(w.a,{animation:"border",variant:"info"})})]})]})})};r.a.render(Object(o.jsxs)(s.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(X,{})}),Object(o.jsx)(i.a,{path:"/ipLookup",element:Object(o.jsx)(P,{})})]})]}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fda9ec8f.chunk.js.map