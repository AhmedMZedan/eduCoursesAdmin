import{r as N,_ as F,R as r,b as p,c as y,P as a}from"./index-C5bhTxtS.js";import{C as h}from"./CFormControlValidation-C3_BbCmQ.js";import{C as g}from"./CFormLabel-D6mcoJWr.js";var b=N.forwardRef(function(e,t){var l=e.children,n=e.className,i=F(e,["children","className"]);return r.createElement("div",p({className:y("form-floating",n)},i,{ref:t}),l)});b.propTypes={children:a.node,className:a.string};b.displayName="CFormFloating";var s=N.forwardRef(function(e,t){var l=e.children,n=e.as,i=n===void 0?"div":n,d=e.className,c=F(e,["children","as","className"]);return r.createElement(i,p({className:y("form-text",d)},c,{ref:t}),l)});s.propTypes={as:a.elementType,children:a.node,className:a.string};s.displayName="CFormText";var k=function(e){var t=e.children,l=e.describedby,n=e.feedback,i=e.feedbackInvalid,d=e.feedbackValid,c=e.floatingClassName,m=e.floatingLabel,v=e.id,E=e.invalid,f=e.label,o=e.text,u=e.tooltipFeedback,T=e.valid,C=function(){return r.createElement(h,{describedby:l,feedback:n,feedbackInvalid:i,feedbackValid:d,floatingLabel:m,invalid:E,tooltipFeedback:u,valid:T})};return m?r.createElement(b,{className:c},t,r.createElement(g,{htmlFor:v},f||m),o&&r.createElement(s,{id:l},o),r.createElement(C,null)):r.createElement(r.Fragment,null,f&&r.createElement(g,{htmlFor:v},f),t,o&&r.createElement(s,{id:l},o),r.createElement(C,null))};k.propTypes=p({children:a.node,floatingClassName:a.string,floatingLabel:a.oneOfType([a.node,a.string]),label:a.oneOfType([a.node,a.string]),text:a.oneOfType([a.node,a.string])},h.propTypes);k.displayName="CFormControlWrapper";export{k as C,b as a};
