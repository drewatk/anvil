(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(28);var r=a(0),n=a.n(r),i=a(143),l=a(137),s=a(139),o=a(151),c=a.n(o);t.default=function(e){var t=e.data,a=e.location,r=[{title:"Sponsor The Boiler",subheading:"Purdue's Student-run Startup Accelerator",paragraphs:[n.a.createElement(n.a.Fragment,null,"We are always looking for support for our startup accelerator program, The Boiler. If you are interested in sponsoring you can look at our packet below. We are open to negotiation so feel free to contact us if you have any questions"),n.a.createElement(n.a.Fragment,null,"For more information, refer to"," ",n.a.createElement("a",{href:t.boilerPacket.publicURL,target:"_blank",rel:"noopener noreferrer"},"The Boiler Sponsorship Packet"),"."),n.a.createElement(n.a.Fragment,null,"Feel free to contact us any time at"," ",n.a.createElement("a",{href:"mailto:contact@anvilstartups.com"},"contact@anvilstartups.com"),".")],imageFluid:t.boilerImage.childImageSharp.fluid,alt:"Cryptoleague giving their final pitch at Demo Day 2018"},{title:"Sponsor The Anvil",paragraphs:[n.a.createElement(n.a.Fragment,null,"We're always looking for support to keep building our community through events, outreach, and our coworking space. If you'd like to sponsor The Anvil, you can refer to our"," ",n.a.createElement("a",{href:t.anvilPacket.publicURL,target:"_blank",rel:"noopener noreferrer"},"Anvil Sponsorship Packet"),".")]}];return n.a.createElement(i.a,{location:a,pageTite:"Sponsorship"},n.a.createElement(l.a,{Pattern:c.a,title:"Sponsor",theme:"green"}),r.map(function(e,t){return n.a.createElement(s.a,Object.assign({Pattern:c.a},e,{index:t,key:t}))}))};var d="3337186387"},137:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(138),l=a.n(i);t.a=function(e){var t=e.title,a=e.theme,r=e.Pattern,i=[l.a.section,"blue"===a?l.a.sectionBlue:"","gold"===a?l.a.sectionGold:"","green"===a?l.a.sectionGreen:""].join(" ").trim();return n.a.createElement("div",{className:i},n.a.createElement("h2",{className:l.a.title+" text-uppercase"},t),n.a.createElement(r,{className:l.a.pattern}))}},138:function(e,t,a){e.exports={section:"title-section-module--section--2faFW",title:"title-section-module--title--3sjWA",pattern:"title-section-module--pattern--nJlD2",sectionGold:"title-section-module--section-gold--3-6mj",sectionBlue:"title-section-module--section-blue--2zVGX",sectionGreen:"title-section-module--section-green--EidBa"}},139:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(140),l=a.n(i),s=a(141),o=a.n(s);t.a=function(e){var t=e.title,a=e.subheading,r=e.paragraphs,i=e.index,s=e.imageFluid,c=e.Pattern,d=e.alt;i=i||0;var u=[o.a.section,i%2?o.a.sectionGrey:""].join(" ").trim();return n.a.createElement("div",{className:u},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:s?"col-md-7":"col-12"},n.a.createElement(c,{className:o.a.pattern,style:{transform:"rotate("+90*i+"deg)"}}),n.a.createElement("h3",{className:o.a.title+" text-uppercase"},t),n.a.createElement("h4",{className:o.a.subheading},a),r&&r.map(function(e,t){return n.a.createElement("p",{className:o.a.text,key:t},e)})),n.a.createElement("div",{className:s?"col-md-5":""},s&&n.a.createElement(l.a,{fluid:s,style:{width:"100%"},alt:d||""})))))}},140:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(6)),l=r(a(46)),s=r(a(145)),o=r(a(146)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},m=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+o+t+l+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!0,i=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!1,i=!0),"undefined"==typeof window&&(r=!1,n=!1),t.critical&&(r=!0,n=!1,i=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:n,IOSupported:i,fadeIn:s,hasNoScript:d,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.Tag,v="boolean"==typeof E?"lightgray":E,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),k={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(m){var N=m;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&c.default.createElement(y,(0,o.default)({src:N.base64},k)),N.tracedSVG&&c.default.createElement(y,(0,o.default)({src:N.tracedSVG},k)),v&&c.default.createElement(b,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),c.default.createElement(y,{alt:a,title:t,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},N))}}))}if(h){var R=h,x=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete x.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(y,(0,o.default)({src:R.base64},k)),R.tracedSVG&&c.default.createElement(y,(0,o.default)({src:R.tracedSVG},k)),v&&c.default.createElement(b,{title:t,style:{backgroundColor:v,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:b,sizes:v,fixed:b,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var w=E;t.default=w},141:function(e,t,a){e.exports={section:"text-section-module--section--3CfmC",title:"text-section-module--title--2NGzZ",subheading:"text-section-module--subheading--BLjJH",text:"text-section-module--text--37cT5",pattern:"text-section-module--pattern--3SbZ-",sectionGrey:"text-section-module--section-grey--3MCPk"}},151:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"pattern"),r.createElement("desc",{key:1},"Created with Sketch."),r.createElement("defs",{key:2},r.createElement("filter",{x:"-14.0%",y:"-14.0%",width:"128.0%",height:"128.0%",filterUnits:"objectBoundingBox",className:"pattern_filter-1"},[r.createElement("feOffset",{dx:"0",dy:"-2",in:"SourceAlpha",result:"shadowOffsetOuter1",key:0}),r.createElement("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1",key:1}),r.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1",key:2}),r.createElement("feMerge",{key:3},[r.createElement("feMergeNode",{in:"shadowMatrixOuter1",key:0}),r.createElement("feMergeNode",{in:"SourceGraphic",key:1})])])),r.createElement("g",{className:"pattern_pattern",filter:"url(#filter-1)",key:3},[r.createElement("polygon",{className:"pattern_Rectangle",fill:"#7AA27E",points:"150 100 150 150 100 150",key:0}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#5C8461",transform:"translate(125.000000, 125.000000) scale(-1, -1) translate(-125.000000, -125.000000) ",points:"150 100 150 150 100 150",key:1}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#446247",points:"100 50 100 100 50 100",key:2}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#5C8461",points:"150 0 150 50 100 50",key:3}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#446247",transform:"translate(75.000000, 125.000000) scale(-1, 1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:4}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#9CBAA0",transform:"translate(75.000000, 125.000000) scale(1, -1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:5}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#7AA27E",transform:"translate(125.000000, 75.000000) scale(-1, 1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:6}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#A8C2AB",transform:"translate(125.000000, 75.000000) scale(1, -1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:7}),r.createElement("polygon",{className:"pattern_Rectangle",fill:"#E2EBE3",points:"50 100 50 150 0 150",key:8})])])}n.defaultProps={width:"150px",height:"150px",viewBox:"0 0 150 150",version:"1.1"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-sponsor-js-6f121a2c7e629b7b9780.js.map