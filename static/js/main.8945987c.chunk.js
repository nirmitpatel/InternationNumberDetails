(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{48:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(17),s=n.n(a),i=(n(48),n(6)),o=n.n(i),l=n(20),d=n(18),j=n(10),u=n(3),f=n(0);var b=function(e){console.log("process");var t,n=e.details,c=e.dta,r=!1,a=Object(u.a)(c);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(n.includes("+"+s.Prefix)){r=!0;break}}}catch(i){a.e(i)}finally{a.f()}return r?Object(f.jsx)("p",{children:"High Risk: Yes"}):Object(f.jsx)("p",{children:"High Risk: No"})};var h=function(e){var t=e.csv,n=e.phoneDetails,c={background:"#fffff2",color:"#AC3B61",overflow:"hidden",width:"400px",fontFamily:"Overpass,sans-serif",textAlign:"left",alignItems:"left"};return Object(f.jsx)("div",{children:n?n.map((function(e){return Object(f.jsx)("div",{className:"card",style:c,children:Object(f.jsxs)("div",{class:"card-body",children:[Object(f.jsxs)("p",{class:"card-text",children:["Number: ",e.number]}),Object(f.jsxs)("p",{class:"card-text",children:["Local format: ",e.local_format]}),Object(f.jsxs)("p",{class:"card-text",children:["International format: ",e.international_format]}),Object(f.jsxs)("p",{class:"card-text",children:["Country prefix: ",e.country_prefix]}),Object(f.jsxs)("p",{class:"card-text",children:["Country code: ",e.country_code]}),Object(f.jsxs)("p",{class:"card-text",children:["Country name: ",e.country_name]}),Object(f.jsxs)("p",{class:"card-text",children:["Location: ",e.location]}),Object(f.jsxs)("p",{class:"card-text",children:["Carrier: ",e.carrier]}),Object(f.jsxs)("p",{class:"card-text",children:["Line type: ",e.line_type]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(b,{details:e.international_format.toString(),dta:t})," "]})]})})})):console.log("no map")},"index")},x=n(19),p=n.p+"static/media/BandwidthHighRiskBlock.ebc16346.csv",O=n.p+"static/media/background-globe-animated.1300d578.svg";n(51);var v=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(j.a)(a,2),i=s[0],u=s[1],b=Object(c.useState)([]),v=Object(j.a)(b,2),g=v[0],m=v[1];Object(c.useEffect)((function(){x.a(p).then((function(e){m(e)}))}),[]);var y=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i&&u([]),t.preventDefault(),fetch("http://apilayer.net/api/validate?access_key=1fcc33e69f7fee637d15338c111fe68f&number="+n+"&country_code=&format=1").then((function(e){return e.json()})).then((function(e){u((function(t){return[].concat(Object(l.a)(t),[e])})),console.log("in the toggle fetch")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={backgroundImage:"url(".concat(O,")"),color:"white",height:"100vh",width:"100vw",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",backgroundPosition:"center",fontFamily:"Overpass,sans-serif",textAlign:"left"};return Object(f.jsx)("div",{style:k,children:Object(f.jsxs)("center",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Number Info"}),Object(f.jsxs)("p",{children:[Object(f.jsx)("h5",{children:"Enter Phone Number: "}),Object(f.jsx)("input",{className:"InputBox",value:n,onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)}}),Object(f.jsx)("button",{className:"ClickMeButton",onClick:function(e){return y(e)},children:" View Info! "})," "]})]}),Object(f.jsx)("div",{children:Object(f.jsx)("br",{})}),Object(f.jsx)("div",{children:Object(f.jsx)(h,{csv:g,phoneDetails:i})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),g()}},[[52,1,2]]]);
//# sourceMappingURL=main.8945987c.chunk.js.map