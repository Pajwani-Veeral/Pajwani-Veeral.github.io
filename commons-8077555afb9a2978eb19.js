(self.webpackChunkvptronics_website=self.webpackChunkvptronics_website||[]).push([[351],{6162:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var i,n=r(a(6115)),s=r(a(7867)),l=r(a(7071)),o=r(a(434)),d=r(a(7294)),c=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),C=function(e){var t=f(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function V(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var H=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(M,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),M=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,g=(0,l.default)(e,u);return d.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));M.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&C(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:C(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=H(e,(function(){var e=C(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,C=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,y=e.loading,x=e.draggable,S=p||h;if(!S)return null;var H=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:H?1:0,transition:O?"opacity "+b+"ms":"none"},l),Z="boolean"==typeof C?"lightgray":C,I={transitionDelay:b+"ms"},_=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&I,l,u),z={title:t,alt:this.state.isVisible?"":a,style:_,className:m,itemProp:v},j=this.state.isHydrated?g(S):S[0];if(p)return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),Z&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:Z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&I)}),j.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:z,imageVariants:S,generateSources:L}),j.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:z,imageVariants:S,generateSources:V}),this.state.isVisible&&d.default.createElement("picture",null,w(S),d.default.createElement(M,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,o.default)({alt:a,title:t,loading:y},j,{imageVariants:S}))}}));if(h){var T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete T.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},Z&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:Z,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},O&&I)}),j.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:z,imageVariants:S,generateSources:L}),j.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:z,imageVariants:S,generateSources:V}),this.state.isVisible&&d.default.createElement("picture",null,w(S),d.default.createElement(M,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,o.default)({alt:a,title:t,loading:y},j,{imageVariants:S}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),Z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function I(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}O.propTypes={resolutions:R,sizes:Z,fixed:I(c.default.oneOfType([R,c.default.arrayOf(R)])),fluid:I(c.default.oneOfType([Z,c.default.arrayOf(Z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=O;t.Z=_},3124:function(e,t,a){"use strict";var r=a(1883),i=a(7294);t.Z=e=>{var t;const a=null===(t=e.primary)||void 0===t||t;return i.createElement(r.Link,{to:"/contact",className:"text-sm "+(a?"bg-white text-black":"bg-[#262A2D] text-white")+" px-6 py-2 rounded-full"},"Contact Us")}},9196:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(1883),i=a(7294);function n(e){return i.createElement("svg",Object.assign({fill:"none",stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e),i.createElement("path",{strokeLinecap:"round",d:"M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"}))}function s(e){return i.createElement("svg",Object.assign({fill:"none",stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"}))}var l=()=>i.createElement("div",{className:"bg-[#262A2D] text-white",id:"about"},i.createElement("div",{className:"py-16 container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-start"},i.createElement("div",{className:"pr-0 lg:pr-16"},i.createElement(r.Link,{to:"/"},i.createElement("svg",{width:"108",height:"21",viewBox:"0 0 108 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M14.1178 4.3311L8.68072 16.5518H5.43711L0 4.3311H3.66364L7.07058 12.1505L10.4542 4.3311H14.1178ZM22.7052 4.16722C25.4821 4.16722 28.679 6.25084 28.679 10.4415C28.679 14.796 25.4821 16.786 22.7052 16.786C20.8384 16.786 19.7416 15.7559 19.5783 15.3344V21H15.8913V13.9532V4.37793H19.5783V5.50167C19.7416 5.24415 20.8384 4.16722 22.7052 4.16722ZM22.1685 13.5318C23.7553 13.5318 25.1087 12.4549 25.1087 10.4415C25.1087 8.49833 23.7553 7.42141 22.1685 7.42141C20.6517 7.42141 19.4149 8.47492 19.4149 10.4415C19.4149 12.4783 20.6517 13.5318 22.1685 13.5318ZM36.5897 13.4615C37.2431 13.4615 37.7098 13.3679 38.2231 13.2274V16.2943C37.7098 16.5284 36.8697 16.6923 35.6329 16.6923C33.6028 16.6923 31.8993 16.0134 31.8993 12.2676V7.42141H30.1958V4.37793H31.8993V1.52174H35.5863V4.37793H38.1765V7.42141H35.5863V12.2676C35.5863 12.806 35.7263 13.4615 36.5897 13.4615ZM47.9773 4.19064C48.304 4.19064 48.6307 4.19064 48.934 4.26087V7.79599C48.654 7.72575 48.3273 7.72575 48.094 7.72575C45.8538 7.72575 44.057 9.34114 43.8703 11.5886V16.5518H40.1833V4.37793H43.8703V7.35117C44.4303 5.52508 45.8304 4.19064 47.9773 4.19064ZM56.8447 4.16722C59.5982 4.16722 63.2385 6.25084 63.2385 10.5117C63.2385 14.796 59.5982 16.786 56.8447 16.786C54.0911 16.786 50.4508 14.796 50.4508 10.5117C50.4508 6.25084 54.0911 4.16722 56.8447 4.16722ZM56.8447 7.42141C55.4446 7.42141 54.0211 8.49833 54.0211 10.5117C54.0211 12.4549 55.4446 13.5318 56.8447 13.5318C58.2448 13.5318 59.6916 12.4549 59.6916 10.5117C59.6916 8.49833 58.2448 7.42141 56.8447 7.42141ZM72.6893 4.19064C74.9528 4.19064 77.263 5.71238 77.263 9.57525V16.5518H73.5761V9.83278C73.5761 7.98328 72.946 7.39799 71.7793 7.39799C70.1224 7.39799 69.1657 9.01338 68.9324 9.71572V16.5518H65.2454V4.37793H68.9324V6.48495C69.1657 5.89967 70.4025 4.19064 72.6893 4.19064ZM83.1902 0V3.11371H79.5032V0H83.1902ZM83.1902 4.37793V16.5518H79.5032V4.37793H83.1902ZM91.5442 4.16722C93.7611 4.16722 95.6279 5.10368 96.7713 7.07023L93.9711 8.40468C93.3644 7.88963 92.8743 7.42141 91.5909 7.42141C90.1908 7.42141 88.7673 8.49833 88.7673 10.4883C88.7673 12.4549 90.1908 13.485 91.5909 13.485C92.8743 13.485 93.3644 13.0635 93.9711 12.5485L96.818 13.8829C95.6279 15.8495 93.8077 16.7391 91.5442 16.7391C88.8373 16.7391 85.197 14.796 85.197 10.4883C85.197 6.25084 88.8373 4.16722 91.5442 4.16722ZM104.472 8.21739C104.145 7.37458 103.655 7.09365 103.118 7.09365C102.628 7.09365 102.138 7.37458 102.138 7.84281C102.138 8.28763 102.418 8.54515 102.955 8.73244L104.495 9.2709C106.222 9.90301 107.972 10.5351 107.972 12.9699C107.972 15.4281 105.522 16.8328 103.002 16.8328C100.738 16.8328 98.6148 15.4983 98.1014 13.3679L100.995 12.4549C101.298 13.1338 101.835 13.9064 103.002 13.9064C103.795 13.9064 104.309 13.3913 104.309 12.9231C104.309 12.689 104.122 12.3846 103.539 12.1505L102.115 11.6355C99.6882 10.7458 98.5448 9.50502 98.5448 7.77258C98.5448 5.50167 100.645 4.16722 102.955 4.16722C105.312 4.16722 106.875 5.45485 107.576 7.39799L104.472 8.21739Z",fill:"url(#paint0_linear_338_12)"}),i.createElement("defs",null,i.createElement("linearGradient",{id:"paint0_linear_338_12",x1:"-2.07639",y1:"17.5",x2:"115.621",y2:"2.42772",gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:"white"}),i.createElement("stop",{offset:"1",stopColor:"#FFEAEA"}))))),i.createElement("div",{className:"mb-4"}),i.createElement("div",null,i.createElement("span",{className:"block"},"11/12th floor, Karma Workspaces"),i.createElement("span",{className:"block"},"Shivarth THE ACE,"),i.createElement("span",{className:"block"},"Opp. Krishna Farms Sindhu Bhavan, Road,"),i.createElement("span",{className:"block"},"Bodakdev, Ahmedabad, Gujarat 380054")),i.createElement("div",{className:"mb-4"}),i.createElement(r.Link,{to:"tel:+91-9586818939",className:"flex items-center gap-4"},i.createElement(s,{className:"h-5 w-5"})," ",i.createElement("span",null,"+91 9586818939")),i.createElement("div",{className:"mb-4"}),i.createElement(r.Link,{to:"mailto:Vptronics.ind@gmail.com",className:"flex items-center gap-4"},i.createElement(n,{className:"h-5 w-5"}),i.createElement("span",null,"vptronics.ind@gmail.com"))),i.createElement("div",{className:"text-white"},i.createElement("ul",{className:"hidden lg:block"},i.createElement("li",{className:"block mb-4"},i.createElement("span",{className:"px-4 text-lg"},"Navigation Links")),i.createElement("li",{className:"block mb-4"},i.createElement(r.Link,{to:"",className:"px-4 text-sm"},"Home")),i.createElement("li",{className:"block mb-4"},i.createElement(r.Link,{to:"#about",className:"px-4 text-sm"},"About")),i.createElement("li",{className:"block mb-4"},i.createElement(r.Link,{to:"#services",className:"px-4 text-sm"},"Services")),i.createElement("li",{className:"block mb-4"},i.createElement(r.Link,{to:"#solutions",className:"px-4 text-sm"},"Solutions"))))))},9996:function(e,t,a){"use strict";var r=a(1883),i=a(7294),n=a(3124);t.Z=e=>i.createElement("nav",{className:"container flex justify-between items-center py-4"},i.createElement("span",null,i.createElement(r.Link,{to:"/"},i.createElement("svg",{width:"108",height:"21",viewBox:"0 0 108 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M14.1178 4.3311L8.68072 16.5518H5.43711L0 4.3311H3.66364L7.07058 12.1505L10.4542 4.3311H14.1178ZM22.7052 4.16722C25.4821 4.16722 28.679 6.25084 28.679 10.4415C28.679 14.796 25.4821 16.786 22.7052 16.786C20.8384 16.786 19.7416 15.7559 19.5783 15.3344V21H15.8913V13.9532V4.37793H19.5783V5.50167C19.7416 5.24415 20.8384 4.16722 22.7052 4.16722ZM22.1685 13.5318C23.7553 13.5318 25.1087 12.4549 25.1087 10.4415C25.1087 8.49833 23.7553 7.42141 22.1685 7.42141C20.6517 7.42141 19.4149 8.47492 19.4149 10.4415C19.4149 12.4783 20.6517 13.5318 22.1685 13.5318ZM36.5897 13.4615C37.2431 13.4615 37.7098 13.3679 38.2231 13.2274V16.2943C37.7098 16.5284 36.8697 16.6923 35.6329 16.6923C33.6028 16.6923 31.8993 16.0134 31.8993 12.2676V7.42141H30.1958V4.37793H31.8993V1.52174H35.5863V4.37793H38.1765V7.42141H35.5863V12.2676C35.5863 12.806 35.7263 13.4615 36.5897 13.4615ZM47.9773 4.19064C48.304 4.19064 48.6307 4.19064 48.934 4.26087V7.79599C48.654 7.72575 48.3273 7.72575 48.094 7.72575C45.8538 7.72575 44.057 9.34114 43.8703 11.5886V16.5518H40.1833V4.37793H43.8703V7.35117C44.4303 5.52508 45.8304 4.19064 47.9773 4.19064ZM56.8447 4.16722C59.5982 4.16722 63.2385 6.25084 63.2385 10.5117C63.2385 14.796 59.5982 16.786 56.8447 16.786C54.0911 16.786 50.4508 14.796 50.4508 10.5117C50.4508 6.25084 54.0911 4.16722 56.8447 4.16722ZM56.8447 7.42141C55.4446 7.42141 54.0211 8.49833 54.0211 10.5117C54.0211 12.4549 55.4446 13.5318 56.8447 13.5318C58.2448 13.5318 59.6916 12.4549 59.6916 10.5117C59.6916 8.49833 58.2448 7.42141 56.8447 7.42141ZM72.6893 4.19064C74.9528 4.19064 77.263 5.71238 77.263 9.57525V16.5518H73.5761V9.83278C73.5761 7.98328 72.946 7.39799 71.7793 7.39799C70.1224 7.39799 69.1657 9.01338 68.9324 9.71572V16.5518H65.2454V4.37793H68.9324V6.48495C69.1657 5.89967 70.4025 4.19064 72.6893 4.19064ZM83.1902 0V3.11371H79.5032V0H83.1902ZM83.1902 4.37793V16.5518H79.5032V4.37793H83.1902ZM91.5442 4.16722C93.7611 4.16722 95.6279 5.10368 96.7713 7.07023L93.9711 8.40468C93.3644 7.88963 92.8743 7.42141 91.5909 7.42141C90.1908 7.42141 88.7673 8.49833 88.7673 10.4883C88.7673 12.4549 90.1908 13.485 91.5909 13.485C92.8743 13.485 93.3644 13.0635 93.9711 12.5485L96.818 13.8829C95.6279 15.8495 93.8077 16.7391 91.5442 16.7391C88.8373 16.7391 85.197 14.796 85.197 10.4883C85.197 6.25084 88.8373 4.16722 91.5442 4.16722ZM104.472 8.21739C104.145 7.37458 103.655 7.09365 103.118 7.09365C102.628 7.09365 102.138 7.37458 102.138 7.84281C102.138 8.28763 102.418 8.54515 102.955 8.73244L104.495 9.2709C106.222 9.90301 107.972 10.5351 107.972 12.9699C107.972 15.4281 105.522 16.8328 103.002 16.8328C100.738 16.8328 98.6148 15.4983 98.1014 13.3679L100.995 12.4549C101.298 13.1338 101.835 13.9064 103.002 13.9064C103.795 13.9064 104.309 13.3913 104.309 12.9231C104.309 12.689 104.122 12.3846 103.539 12.1505L102.115 11.6355C99.6882 10.7458 98.5448 9.50502 98.5448 7.77258C98.5448 5.50167 100.645 4.16722 102.955 4.16722C105.312 4.16722 106.875 5.45485 107.576 7.39799L104.472 8.21739Z",fill:"url(#paint0_linear_338_12)"}),i.createElement("defs",null,i.createElement("linearGradient",{id:"paint0_linear_338_12",x1:"-2.07639",y1:"17.5",x2:"115.621",y2:"2.42772",gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:"white"}),i.createElement("stop",{offset:"1",stopColor:"#FFEAEA"})))))),i.createElement("ul",{className:"hidden lg:block"},i.createElement("li",{className:"inline-block"},i.createElement(r.Link,{to:"#about",className:"px-4 text-sm"},"About")),i.createElement("li",{className:"inline-block"},i.createElement(r.Link,{to:"#services",className:"px-4 text-sm"},"Services")),i.createElement("li",{className:"inline-block"},i.createElement(r.Link,{to:"#solutions",className:"px-4 text-sm"},"Solutions"))),i.createElement(n.Z,{primary:!0}))},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=commons-8077555afb9a2978eb19.js.map