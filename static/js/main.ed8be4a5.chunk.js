(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(4),o=n.n(s),i=(n(13),n(5)),l=n(6),h=n(2),d=n(8),j=n(7),u=n(0),b=function(e){var t=e.phoneDetails;return Object(u.jsxs)("div",{children:[Object(u.jsx)("center",{children:Object(u.jsx)("h1",{children:"Number Info"})}),t.map((function(e){return Object(u.jsx)("div",{class:"card",children:Object(u.jsxs)("div",{class:"card-body",children:[Object(u.jsxs)("p",{class:"card-text",children:["Number: ",e.number]}),Object(u.jsxs)("p",{class:"card-text",children:["Local format: ",e.local_format]}),Object(u.jsxs)("p",{class:"card-text",children:["International format: ",e.international_format]}),Object(u.jsxs)("p",{class:"card-text",children:["Country prefix: ",e.country_prefix]}),Object(u.jsxs)("p",{class:"card-text",children:["Country code: ",e.country_code]}),Object(u.jsxs)("p",{class:"card-text",children:["Country name: ",e.country_name]}),Object(u.jsxs)("p",{class:"card-text",children:["Location: ",e.location]}),Object(u.jsxs)("p",{class:"card-text",children:["Carrier: ",e.carrier]}),Object(u.jsxs)("p",{class:"card-text",children:["Line type: ",e.line_type]})]})})}))]},"index")};var p=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).toggleButtonState=function(){console.log("state phone: "+e.state.phone),c=e.state.phone,console.log("phoneNumber: "+c),function(e){var t="http://apilayer.net/api/validate?access_key=799b6b058858fbf11920dbc603e34094&number="+e+"&country_code=&format=1";return console.log(t),fetch(t)}(c).then((function(e){return e.json()})).then((function(t){var n=[t];e.setState({phoneDetails:n})}))},e.state={phoneDetails:[],phone:null},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.toggleButtonState=e.toggleButtonState.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({phone:e.target.value})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Phone Number: "}),Object(u.jsx)("input",{type:"text",onChange:this.handleChange}),Object(u.jsx)("button",{onClick:this.toggleButtonState,children:" Click me "}),Object(u.jsx)(b,{phoneDetails:this.state.phoneDetails})]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.ed8be4a5.chunk.js.map