"use strict";(self.webpackChunktechgars_react_components=self.webpackChunktechgars_react_components||[]).push([[196],{"./src/components/toast/toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Glass:()=>Glass,Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toast_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dynamicIcon=__webpack_require__("./src/components/dynamicIcon/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toast=(0,react.forwardRef)(((props,ref)=>{const{message,close,duration,glass,className,...rest}=props,[isOpen,setIsOpen]=(0,react.useState)(!1);(0,react.useEffect)((()=>{message&&(setIsOpen(!0),setTimeout((()=>{handleClose()}),duration?1e3*duration:3e3))}),[message]);const handleClose=()=>{setIsOpen(!1),setTimeout((()=>{close()}),duration??300)},glassblur=props.glass&&props.glassblur&&getglassblurLevel(props.glassblur);return(0,jsx_runtime.jsxs)("div",{ref,className:classnames_default()(["absolute top-0 -translate-y-full transition ease duration-300 flex justify-between",isOpen&&"translate-y-1/2",glass&&"bg-white/[.07] shadow-button-up",glassblur,className]),...rest,children:[(0,jsx_runtime.jsx)("span",{className:classnames_default()(["flex-1 text-center p-5"]),children:message}),(0,jsx_runtime.jsx)(dynamicIcon.J,{onClick:handleClose,name:"x-circle",className:"text-2xl self-start brightness-75 hover:brightness-100 px-1"})]})})),getglassblurLevel=key=>({sm:"backdrop-blur-sm",md:"backdrop-blur-md",lg:"backdrop-blur-lg"}[key]);try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},glass:{defaultValue:null,description:"",name:"glass",required:!1,type:{name:"boolean"}},close:{defaultValue:null,description:"",name:"close",required:!0,type:{name:"() => void"}},glassblur:{defaultValue:null,description:"the size of blur to apply to the modal if glass prop is true",name:"glassblur",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toast/index.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/toast/index.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/buttons/Button.tsx");const toast_stories={title:"Toast",component:Toast,parameters:{layout:"fullscreen"}},Main=()=>{const[message,setIsMessage]=(0,react.useState)();return(0,react.useEffect)((()=>{setIsMessage("This is an example toast message displayed")}),[]),(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-center w-screen h-screen bg-slate-300",children:[(0,jsx_runtime.jsx)(Toast,{message,close:()=>setIsMessage(null),className:"bg-dark-grey text-white rounded-lg"}),(0,jsx_runtime.jsx)(Button.s,{onClick:()=>setIsMessage("This is an example toast message displayed"),className:"p-3 rounded-lg",children:"Open Toast"})]})};Main.displayName="Main";const Glass=()=>{const[message,setIsMessage]=(0,react.useState)();return(0,react.useEffect)((()=>{setIsMessage("This is an example toast message displayed")}),[]),(0,jsx_runtime.jsxs)("div",{className:'flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover',children:[(0,jsx_runtime.jsx)(Toast,{message,close:()=>setIsMessage(null),glass:!0,glassblur:"md",className:"text-white rounded-lg"}),(0,jsx_runtime.jsx)(Button.s,{glass:!0,glassblur:"md",onClick:()=>setIsMessage("This is an example toast message displayed"),className:"p-3 rounded-lg text-white",children:"Open Toast"})]})};Glass.displayName="Glass",Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:'() => {\n  const [message, setIsMessage] = useState<string | null>();\n  useEffect(() => {\n    setIsMessage(\'This is an example toast message displayed\');\n  }, []);\n  return <div className="flex items-center justify-center w-screen h-screen bg-slate-300">\n      <Toast message={message} close={() => setIsMessage(null)} className="bg-dark-grey text-white rounded-lg" />\n\n      <Primary onClick={() => setIsMessage(\'This is an example toast message displayed\')} className="p-3 rounded-lg">\n        Open Toast\n      </Primary>\n    </div>;\n}',...Main.parameters?.docs?.source}}},Glass.parameters={...Glass.parameters,docs:{...Glass.parameters?.docs,source:{originalSource:'() => {\n  const [message, setIsMessage] = useState<string | null>();\n  useEffect(() => {\n    setIsMessage(\'This is an example toast message displayed\');\n  }, []);\n  return <div className=\'flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover\'>\n      <Toast message={message} close={() => setIsMessage(null)} glass glassblur="md" className="text-white rounded-lg" />\n\n      <Primary glass glassblur="md" onClick={() => setIsMessage(\'This is an example toast message displayed\')} className="p-3 rounded-lg text-white">\n        Open Toast\n      </Primary>\n    </div>;\n}',...Glass.parameters?.docs?.source}}};const __namedExportsOrder=["Main","Glass"]},"./src/components/buttons/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Primary});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Primary=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{const{children,className,active,glass,onClick,...rest}=props,[pressed,setPressed]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),glassBackgroundBlur=glass&&{sm:"backdrop-blur-sm",md:"backdrop-blur-md",lg:"backdrop-blur-lg"}[props.glassblur??"sm"],pressedBackgroundBlur=glass&&{sm:"backdrop-blur-[2.25px]",md:"backdrop-blur-[5.25px]",lg:"backdrop-blur-[8.25px]"}[props.glassblur??"sm"];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{ref,type:"button",onMouseDown:()=>setPressed(!0),onMouseUp:e=>{setPressed(!1),onClick&&onClick(e)},className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(["relative overflow-hidden border-2 border-transparent",pressed||active?"shadow-button-down scale-[.98]":"shadow-button-up",glass&&(pressed||active)&&pressedBackgroundBlur,glassBackgroundBlur,className]),...rest,children})}));try{Primary.displayName="Primary",Primary.__docgenInfo={description:"",displayName:"Primary",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},glass:{defaultValue:null,description:"",name:"glass",required:!1,type:{name:"true"}},glassblur:{defaultValue:null,description:"the size of blur to apply to the modal if glass prop is true",name:"glassblur",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.tsx#Primary"]={docgenInfo:Primary.__docgenInfo,name:"Primary",path:"src/components/buttons/Button.tsx#Primary"})}catch(__react_docgen_typescript_loader_error){}}}]);