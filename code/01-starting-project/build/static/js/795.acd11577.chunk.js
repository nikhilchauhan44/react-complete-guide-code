"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[795],{795:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(791),s=n(880),u=n(152),o="Card_card__48SLx",a=n(184),c=function(e){return(0,a.jsx)("div",{className:o,children:e.children})},i=n(147),l="QuoteForm_form__ogBoi",d="QuoteForm_loading__gyIuQ",f="QuoteForm_control__8SqBM",h="QuoteForm_actions__I8AC6",x=function(e){var t=(0,r.useState)(!1),n=(0,u.Z)(t,2),o=n[0],x=n[1],m=(0,r.useRef)(),_=(0,r.useRef)();return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(s.NL,{when:o,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),(0,a.jsx)(c,{children:(0,a.jsxs)("form",{onFocus:function(){x(!0)},className:l,onSubmit:function(t){t.preventDefault();var n=m.current.value,r=_.current.value;e.onAddQuote({author:n,text:r})},children:[e.isLoading&&(0,a.jsx)("div",{className:d,children:(0,a.jsx)(i.Z,{})}),(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)("label",{htmlFor:"author",children:"Author"}),(0,a.jsx)("input",{type:"text",id:"author",ref:m})]}),(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)("label",{htmlFor:"text",children:"Text"}),(0,a.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,a.jsx)("div",{className:h,children:(0,a.jsx)("button",{onClick:function(){x(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(995),_=n(853),j=function(){var e=(0,m.Z)(_.KP),t=e.sendRequest,n=e.status,u=(0,s.k6)();(0,r.useEffect)((function(){"completed"===n&&u.push("/quotes")}),[n,u]);return(0,a.jsx)(x,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=795.acd11577.chunk.js.map