import{r as a,j as e}from"./index-C5bhTxtS.js";import"./DefaultLayout-BrWosQGu.js";import{a as y}from"./index.esm-DA8WOXCh.js";import{_ as x}from"./index-CW1HR4lj.js";import{a as b}from"./axios-B4uVmeYG.js";import{C as D,a as N}from"./CRow-bDSECg90.js";import{C as k,a as P}from"./CCardBody-Bg4hYHfU.js";import{C as E}from"./CCardHeader-CKImgVPn.js";import{C as I}from"./CForm-BI516KAI.js";import{C as t}from"./CFormLabel-D6mcoJWr.js";import{C as s}from"./CFormInput-CzvlUsDs.js";import"./cil-user-Dlmw-Gem.js";import"./CFormControlWrapper-CTAml_iy.js";import"./CFormControlValidation-C3_BbCmQ.js";function J(){const[l,h]=a.useState(""),[n,u]=a.useState(),[i,C]=a.useState(),[m,j]=a.useState(),[o,g]=a.useState([]),[p,d]=a.useState(""),f=r=>{if(r.preventDefault(),!l||!n||!m||!i||!o)console.log("fdsflsdkf"),x("Here is your toast.");else{const v=localStorage.getItem("token"),F={name:l,durationByMonths:n,priceForNonEgypt:m,priceForEgypt:i,description:o};b.post("http://92.113.26.138:8080/package",F,{headers:{Authorization:`Bearer ${v}`}}).then(c=>{console.log(c.data),x("Added Succissfully")}).catch(c=>{console.log(c)})}};return e.jsx(D,{children:e.jsx(N,{xs:12,children:e.jsxs(k,{className:"mb-4",children:[e.jsx(E,{children:e.jsx("strong",{children:"Add Package"})}),e.jsx(P,{children:e.jsxs(I,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(t,{htmlFor:"exampleFormControlInput1",children:"Name of packages"}),e.jsx(s,{type:"name",id:"exampleFormControlInput1",placeholder:"name of course",value:l,onChange:r=>h(r.target.value)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(t,{htmlFor:"exampleFormControlTextarea1",children:"Duration By Months"}),e.jsx(s,{type:"number",id:"exampleFormControlInput1",placeholder:"Duration By Months",value:n,onChange:r=>u(r.target.value)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(t,{htmlFor:"exampleFormControlTextarea1",children:"Price per Dollar"}),e.jsx(s,{type:"number",id:"exampleFormControlInput1",placeholder:"Price per Dollar",value:m,onChange:r=>j(r.target.value)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(t,{htmlFor:"exampleFormControlTextarea1",children:"Price per EG"}),e.jsx(s,{type:"number",id:"exampleFormControlInput1",placeholder:"Price per EG",value:i,onChange:r=>C(r.target.value)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(t,{htmlFor:"exampleFormControlTextarea1",children:"Description"}),e.jsx(s,{type:"text",id:"exampleFormControlInput1",placeholder:"Description",value:p,onChange:r=>d(r.target.value),onBlur:()=>{g([...o,p]),d("")}})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("p",{children:"page Description:"}),e.jsx("ol",{children:o==null?void 0:o.map(r=>e.jsx("li",{children:r}))})]}),e.jsx("div",{className:"col-auto text-center",children:e.jsx(y,{color:"primary",type:"submit",className:"mb-3 w-25",onClick:f,children:"Add Package"})})]})})]})})})}export{J as default};
