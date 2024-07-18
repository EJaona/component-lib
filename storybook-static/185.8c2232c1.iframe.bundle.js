/*! For license information please see 185.8c2232c1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunktechgars_react_components=self.webpackChunktechgars_react_components||[]).push([[185],{"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>scrollIntoView});const checkBehavior=behavior=>void 0===behavior||"auto"===behavior||"instant"===behavior||"smooth"===behavior;function elementScrollXY(x,y){this.scrollLeft=x,this.scrollTop=y}const failedExecute=(method,object,reason="cannot convert to dictionary.")=>`Failed to execute '${method}' on '${object}': ${reason}`,failedExecuteInvalidEnumValue=(method,object,value)=>failedExecute(method,object,`The provided value '${value}' is not a valid enum value of type ScrollBehavior.`),backupMethod=(proto,method,fallback)=>{var _a;const backup=`__SEAMLESS.BACKUP$${method}`;return proto[backup]||!proto[method]||(null===(_a=proto[method])||void 0===_a?void 0:_a.__isPolyfill)||(proto[backup]=proto[method]),proto[backup]||fallback},scrollingElement=element=>element.ownerDocument.scrollingElement||element.ownerDocument.documentElement;const ease=k=>.5*(1-Math.cos(Math.PI*k));function now(){var _a;let fn;return fn=(null===(_a=window.performance)||void 0===_a?void 0:_a.now)?()=>window.performance.now():()=>window.Date.now(),now=fn,fn()}const step=context=>{const elapsed=(now()-context.timeStamp)/(context.duration||500);if(elapsed>1)return context.method(context.targetX,context.targetY),void context.callback();const value=(context.timingFunc||ease)(elapsed),currentX=context.startX+(context.targetX-context.startX)*value,currentY=context.startY+(context.targetY-context.startY)*value;context.method(currentX,currentY),context.rafId=window.requestAnimationFrame((()=>{step(context)}))},nonFinite=value=>isFinite(value)?Number(value):0,scrollWithOptions=(element,options,config)=>{var _a,_b;if(!(node=>{var _a;return null!==(_a=node.isConnected)&&void 0!==_a?_a:!(node.ownerDocument&&1&node.ownerDocument.compareDocumentPosition(node))})(element))return;const startX=element.scrollLeft,startY=element.scrollTop,targetX=nonFinite(null!==(_a=options.left)&&void 0!==_a?_a:startX),targetY=nonFinite(null!==(_b=options.top)&&void 0!==_b?_b:startY);if(targetX===startX&&targetY===startY)return;const fallback=backupMethod(HTMLElement.prototype,"scroll",elementScrollXY),method=backupMethod(Object.getPrototypeOf(element),"scroll",fallback).bind(element);if("smooth"!==options.behavior)return void method(targetX,targetY);const removeEventListener=()=>{window.removeEventListener("wheel",cancelScroll),window.removeEventListener("touchmove",cancelScroll)},context=Object.assign(Object.assign({},config),{timeStamp:now(),startX,startY,targetX,targetY,rafId:0,method,callback:()=>{removeEventListener();const isDocument=9===element.nodeType;element.dispatchEvent(function scrollEndEvent(bubbles){if("function"==typeof Event)return new Event("scrollend",{bubbles,cancelable:!1});const event=document.createEvent("Event");return event.initEvent("scrollend",bubbles,!1),event}(isDocument))}}),cancelScroll=()=>{window.cancelAnimationFrame(context.rafId),removeEventListener()};window.addEventListener("wheel",cancelScroll,{passive:!0,once:!0}),window.addEventListener("touchmove",cancelScroll,{passive:!0,once:!0}),step(context)},createScroll=scrollName=>(target,scrollOptions,config)=>{const[element,scrollType]=(obj=target).window===obj?[scrollingElement(target.document.documentElement),"Window"]:[target,"Element"];var obj;const options=null!=scrollOptions?scrollOptions:{};if(!(value=>{const type=typeof value;return null!==value&&("object"===type||"function"===type)})(options))throw new TypeError(failedExecute(scrollName,scrollType));if(!checkBehavior(options.behavior))throw new TypeError(failedExecuteInvalidEnumValue(scrollName,scrollType,options.behavior));"scrollBy"===scrollName&&(options.left=nonFinite(options.left)+element.scrollLeft,options.top=nonFinite(options.top)+element.scrollTop),scrollWithOptions(element,options,config)},scroll_scroll=createScroll("scroll"),elementScroll=scroll_scroll,normalizeWritingMode=writingMode=>{switch(writingMode){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},calcPhysicalAxis=(writingMode,isLTR,hPos,vPos)=>{let layout=0;switch(isLTR||(layout^=2),writingMode){case 0:layout=layout>>1|(1&layout)<<1,[hPos,vPos]=[vPos,hPos];break;case 1:case 3:layout^=1;break;case 4:layout^=2}return[layout,hPos,vPos]},isXReversed=computedStyle=>1==(1&calcPhysicalAxis(normalizeWritingMode(computedStyle.writingMode),"rtl"!==computedStyle.direction,void 0,void 0)[0]),mapNearest=(align,scrollingEdgeStart,scrollingEdgeEnd,scrollingSize,elementEdgeStart,elementEdgeEnd,elementSize)=>0!==align?align:elementEdgeStart<scrollingEdgeStart&&elementEdgeEnd>scrollingEdgeEnd||elementEdgeStart>scrollingEdgeStart&&elementEdgeEnd<scrollingEdgeEnd?null:elementEdgeStart<=scrollingEdgeStart&&elementSize<=scrollingSize||elementEdgeEnd>=scrollingEdgeEnd&&elementSize>=scrollingSize?2:elementEdgeEnd>scrollingEdgeEnd&&elementSize<scrollingSize||elementEdgeStart<scrollingEdgeStart&&elementSize>scrollingSize?3:null,canOverflow=overflow=>"visible"!==overflow&&"clip"!==overflow,isScrollable=(element,computedStyle)=>(element.clientHeight<element.scrollHeight||element.clientWidth<element.scrollWidth)&&(canOverflow(computedStyle.overflowY)||canOverflow(computedStyle.overflowX)||element===scrollingElement(element)),parentElement=element=>{const pNode=element.parentNode,pElement=element.parentElement;if(null===pElement&&null!==pNode){if(11===pNode.nodeType)return pNode.host;if(9===pNode.nodeType)return(element=>{var _a;try{return(null===(_a=element.ownerDocument.defaultView)||void 0===_a?void 0:_a.frameElement)||null}catch(_b){return null}})(element)}return pElement},clamp=(value,min,max)=>value<min?min:value>max?max:value,calcAlignEdge=(align,start,end)=>{switch(align){case 1:return(start+end)/2;case 3:return end;case 2:case 0:return start}},getFrameViewport=(frame,frameRect)=>{var _a,_b,_c;const visualViewport=null===(_a=frame.ownerDocument.defaultView)||void 0===_a?void 0:_a.visualViewport,[x,y,width,height]=frame===scrollingElement(frame)?[0,0,null!==(_b=null==visualViewport?void 0:visualViewport.width)&&void 0!==_b?_b:frame.clientWidth,null!==(_c=null==visualViewport?void 0:visualViewport.height)&&void 0!==_c?_c:frame.clientHeight]:[frameRect.left,frameRect.top,frame.clientWidth,frame.clientHeight],left=x+frame.clientLeft,top=y+frame.clientTop;return[top,left+width,top+height,left]},computeScrollIntoView=(element,options)=>{const actions=[];let ownerDocument=element.ownerDocument,ownerWindow=ownerDocument.defaultView;if(!ownerWindow)return actions;const computedStyle=window.getComputedStyle(element),isLTR="rtl"!==computedStyle.direction,writingMode=normalizeWritingMode(computedStyle.writingMode||computedStyle.getPropertyValue("-webkit-writing-mode")||computedStyle.getPropertyValue("-ms-writing-mode")),[alignH,alignV]=((options,writingMode,isLTR)=>{const[layout,hPos,vPos]=calcPhysicalAxis(writingMode,isLTR,options.block||"start",options.inline||"nearest");return[hPos,vPos].map(((value,index)=>{switch(value){case"center":return 1;case"nearest":return 0;default:return"start"===value==!(layout>>index&1)?2:3}}))})(options,writingMode,isLTR);let[top,right,bottom,left]=((element,elementRect,computedStyle)=>{const{top,right,bottom,left}=elementRect,scrollProperty=(ownerDocument=element.ownerDocument,["scroll-margin","scroll-snap-margin"].filter((property=>property in ownerDocument.documentElement.style))[0]);var ownerDocument;if(!scrollProperty)return[top,right,bottom,left];const scrollMarginValue=edge=>{const value=computedStyle.getPropertyValue(`${scrollProperty}-${edge}`);return parseInt(value,10)||0};return[top-scrollMarginValue("top"),right+scrollMarginValue("right"),bottom+scrollMarginValue("bottom"),left-scrollMarginValue("left")]})(element,element.getBoundingClientRect(),computedStyle);for(let frame=parentElement(element);null!==frame;frame=parentElement(frame)){if(ownerDocument!==frame.ownerDocument){if(ownerDocument=frame.ownerDocument,ownerWindow=ownerDocument.defaultView,!ownerWindow)break;const{left:dX,top:dY}=frame.getBoundingClientRect();top+=dY,right+=dX,bottom+=dY,left+=dX}const frameStyle=ownerWindow.getComputedStyle(frame);if("fixed"===frameStyle.position)break;if(!isScrollable(frame,frameStyle))continue;const frameRect=frame.getBoundingClientRect(),[frameTop,frameRight,frameBottom,frameLeft]=getFrameViewport(frame,frameRect),eAlignH=mapNearest(alignH,frameLeft,frameRight,frame.clientWidth,left,right,right-left),eAlignV=mapNearest(alignV,frameTop,frameBottom,frame.clientHeight,top,bottom,bottom-top),diffX=null===eAlignH?0:calcAlignEdge(eAlignH,left,right)-calcAlignEdge(eAlignH,frameLeft,frameRight),diffY=null===eAlignV?0:calcAlignEdge(eAlignV,top,bottom)-calcAlignEdge(eAlignV,frameTop,frameBottom),moveX=isXReversed(frameStyle)?clamp(diffX,-frame.scrollWidth+frame.clientWidth-frame.scrollLeft,-frame.scrollLeft):clamp(diffX,-frame.scrollLeft,frame.scrollWidth-frame.clientWidth-frame.scrollLeft),moveY=clamp(diffY,-frame.scrollTop,frame.scrollHeight-frame.clientHeight-frame.scrollTop);actions.push([frame,{left:frame.scrollLeft+moveX,top:frame.scrollTop+moveY,behavior:options.behavior}]),top=Math.max(top-moveY,frameTop),right=Math.min(right-moveX,frameRight),bottom=Math.min(bottom-moveY,frameBottom),left=Math.max(left-moveX,frameLeft)}return actions},scrollIntoView=(element,scrollIntoViewOptions,config)=>{const options=scrollIntoViewOptions||{};if(!checkBehavior(options.behavior))throw new TypeError(failedExecuteInvalidEnumValue("scrollIntoView","Element",options.behavior));computeScrollIntoView(element,options).forEach((([frame,scrollToOptions])=>{elementScroll(frame,scrollToOptions,config)}))}}}]);