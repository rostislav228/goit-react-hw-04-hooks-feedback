(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(5),s=n.n(i),o=(n(11),n(3));var b=function(e){var t=e.good,n=e.neutral,r=e.bad,a=e.total,i=e.positivePercentage;return Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad:",r]}),Object(c.jsxs)("li",{children:["Total: ",a]}),Object(c.jsxs)("li",{children:["Positive feedback:",i,"%"]})]})},j=n(2),d=n.n(j);function u(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)("ul",{children:Object.keys(t).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"button",name:e,onClick:n,children:e})},e)}))})}u.prototype={options:d.a.shape({good:d.a.string,neutral:d.a.string,bad:d.a.string}).isRequired,onLeaveFeedback:d.a.func.isRequired};var l=u,h=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})};function O(e){var t=e.message;return Object(c.jsx)("p",{children:t})}O.prototype={message:d.a.string.isRequired};var g=O;function f(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),s=Object(o.a)(i,2),j=s[0],d=s[1],u=Object(r.useState)(0),O=Object(o.a)(u,2),f=O[0],x=O[1],p=function(){return n+j+f};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{title:"Please leave feedback",children:Object(c.jsx)(l,{options:{good:n,neutral:j,bad:f},onLeaveFeedback:function(e){switch(e.currentTarget.name){case"good":a((function(){return n+1}));break;case"neutral":d((function(){return j+1}));break;case"bad":x((function(){return f+1}));break;default:console.log("error")}}})}),Object(c.jsx)(h,{title:"Statistics",children:0===p()?Object(c.jsx)(g,{message:"No feedback given"}):Object(c.jsx)(b,{good:n,neutral:j,bad:f,total:p(),positivePercentage:n/p()?Math.round(100*n/p()):0})})]})}s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dddf19bb.chunk.js.map