(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{48:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(18),i=c.n(a),s=(c(48),c(6)),o=c.n(s),l=c(20),d=c(19),j=c(8),u=c(3),f=c(0);var b=function(e){console.log("process");var t,c=e.details,n=e.dta,r=!1,a=Object(u.a)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(c.includes("+"+i.Prefix)){r=!0;break}}}catch(s){a.e(s)}finally{a.f()}return r?Object(f.jsx)("p",{children:"High Risk: Yes"}):Object(f.jsx)("p",{children:"High Risk: No"})};var h=function(e){console.log("ProcessLiteCsv");var t,c=e.number,n=e.csvFile,r=!1,a=Object(u.a)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(c.includes("+"+i.Prefix)){console.log("ProcessLiteCsv if: "+i.Prefix+" Country: "+i.Country),r=!0;break}}}catch(s){a.e(s)}finally{a.f()}return r?Object(f.jsx)("p",{children:"INTL Lite Blocked: Yes"}):Object(f.jsx)("p",{children:"INTL Lite Blocked: No"})};var x=function(e){var t=e.csv,c=e.phoneDetails,n=e.liteCsv,r={background:"rgba(255, 255, 242, .9)",color:"#AC3B61",overflow:"hidden",width:"400px",fontFamily:"Overpass,sans-serif",textAlign:"left",alignItems:"left"};return Object(f.jsx)("div",{children:c?c.map((function(e){return Object(f.jsx)("div",{className:"card",style:r,children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("p",{className:"card-text",children:["Number: ",e.number]}),Object(f.jsxs)("p",{className:"card-text",children:["Local format: ",e.local_format]}),Object(f.jsxs)("p",{className:"card-text",children:["International format: ",e.international_format]}),Object(f.jsxs)("p",{className:"card-text",children:["Country prefix: ",e.country_prefix]}),Object(f.jsxs)("p",{className:"card-text",children:["Country code: ",e.country_code]}),Object(f.jsxs)("p",{className:"card-text",children:["Country name: ",e.country_name]}),Object(f.jsxs)("p",{className:"card-text",children:["Location: ",e.location]}),Object(f.jsxs)("p",{className:"card-text",children:["Carrier: ",e.carrier]}),Object(f.jsxs)("p",{className:"card-text",children:["Line type: ",e.line_type]}),Object(f.jsx)("div",{children:Object(f.jsx)(b,{details:e.international_format.toString(),dta:t})}),Object(f.jsx)("div",{children:Object(f.jsx)(h,{number:e.international_format.toString(),csvFile:n})})]})},"index2")})):console.log("no map")},"index")},v=c(15),O=c.p+"static/media/BandwidthHighRiskBlock.924e58a4.csv",p=c.p+"static/media/lite.0a44dd3f.csv",m=c.p+"static/media/background-globe-animated.1300d578.svg";c(51);var g=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(j.a)(a,2),s=i[0],u=i[1],b=Object(n.useState)([]),h=Object(j.a)(b,2),g=h[0],y=h[1],k=Object(n.useState)([]),N=Object(j.a)(k,2),C=N[0],w=N[1];Object(n.useEffect)((function(){v.a(O).then((function(e){y(e)}))}),[]),Object(n.useEffect)((function(){v.a(p).then((function(e){w(e)}))}),[]);var L=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&u([]),t.preventDefault(),fetch("http://apilayer.net/api/validate?access_key=1fcc33e69f7fee637d15338c111fe68f&number="+c+"&country_code=&format=1").then((function(e){return e.json()})).then((function(e){u((function(t){return[].concat(Object(l.a)(t),[e])})),console.log("in the toggle fetch")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I={backgroundImage:"url(".concat(m,")"),color:"white",height:"100vh",width:"100vw",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",backgroundPosition:"center",fontFamily:"Overpass,sans-serif",textAlign:"left"};return Object(f.jsx)("div",{style:I,children:Object(f.jsxs)("center",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Number Info"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{children:"Enter Phone Number: "}),Object(f.jsx)("input",{className:"InputBox",value:c,onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)}}),Object(f.jsx)("button",{className:"ClickMeButton",onClick:function(e){return L(e)},children:" View Info! "})]})]}),Object(f.jsx)("div",{children:Object(f.jsx)("br",{})}),Object(f.jsx)("div",{children:Object(f.jsx)(x,{csv:g,phoneDetails:s,liteCsv:C})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),y()}},[[52,1,2]]]);
//# sourceMappingURL=main.135a09ed.chunk.js.map