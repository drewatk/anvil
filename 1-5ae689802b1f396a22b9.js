(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(A,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return r}),n.d(e,"StaticQueryContext",function(){return v}),n.d(e,"StaticQuery",function(){return L});var w=n(0),a=n.n(w),t=n(4),D=n.n(t),P=n(132),y=n.n(P);n.d(e,"Link",function(){return y.a}),n.d(e,"withPrefix",function(){return P.withPrefix}),n.d(e,"navigate",function(){return P.navigate}),n.d(e,"push",function(){return P.push}),n.d(e,"replace",function(){return P.replace}),n.d(e,"navigateTo",function(){return P.navigateTo});var c=n(148),l=n.n(c);n.d(e,"PageRenderer",function(){return l.a});var i=n(44);n.d(e,"parsePath",function(){return i.a});var v=a.a.createContext({}),L=function(A){return a.a.createElement(v.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function r(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}L.propTypes={data:D.a.object,query:D.a.string.isRequired,render:D.a.func,children:D.a.func}},139:function(A,e,n){"use strict";var w=n(151),a=n(0),t=n.n(a),D=n(152),P=n.n(D),y=n(133),c=n(176),l=n(161),i=n.n(l),v=n(143),L=n.n(v),r=function(A){var e=A.location,n=[i.a.navbar,e.pathname===Object(y.withPrefix)("/membership")?i.a.navbarGold:"",e.pathname===Object(y.withPrefix)("/events")?i.a.navbarBlue:""].join(" ").trim();return t.a.createElement("div",{className:n},t.a.createElement(y.Link,{to:"/"},t.a.createElement("div",{className:i.a.brand},t.a.createElement(L.a,{className:i.a.brandLogo}),t.a.createElement("h1",{className:i.a.brandName},"The Anvil"))),t.a.createElement(c.a,null,t.a.createElement(c.b,null,t.a.createElement(y.Link,{className:"nav-link",to:"/membership"},"Membership")),t.a.createElement(c.b,null,t.a.createElement(y.Link,{className:"nav-link",to:"/events"},"Events")),t.a.createElement(c.b,null,t.a.createElement(y.Link,{className:"nav-link",to:"/"},"FAQ"))))},o=n(167),m=n.n(o),f=n(149),J=n.n(f),s=n(150),u=n.n(s),d=function(){return t.a.createElement("div",{className:m.a.section},t.a.createElement("div",{className:"container-fluid"},t.a.createElement("div",{className:m.a.footer},t.a.createElement("div",{className:m.a.brand},t.a.createElement(L.a,{className:m.a.logo}),t.a.createElement("h1",{className:m.a.brandName},"The Anvil")),t.a.createElement("div",{className:m.a.footerBottom},t.a.createElement("div",{className:m.a.address},"320 North Street",t.a.createElement("br",null),"West Lafayette, IN 47906"),t.a.createElement("div",{className:m.a.links},t.a.createElement("a",{href:"mailto:contact@anvilstartups.com"},t.a.createElement("img",{className:m.a.socialIcon,src:J.a,alt:"The Anvil Email"})),t.a.createElement("a",{href:"https://www.facebook.com/anvilstartups"},t.a.createElement("img",{className:m.a.socialIcon,src:u.a,alt:"The Anvil on Facebook"})))))))},g=(n(168),n(169),n(170),n(171)),b=n.n(g),E=n(172),G=n.n(E);e.a=function(A){var e=A.children,n=A.location;return t.a.createElement(y.StaticQuery,{query:"2328579951",render:function(A){return t.a.createElement(t.a.Fragment,null,t.a.createElement(P.a,{title:A.site.siteMetadata.title,meta:[{name:"description",content:A.site.siteMetadata.description},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+b.a}]},t.a.createElement("html",{lang:"en"})),n.pathname===Object(y.withPrefix)("/")?t.a.createElement("div",{className:G.a.squares},t.a.createElement("div",{className:G.a.yellowSquare}),t.a.createElement("div",{className:G.a.greenSquare}),t.a.createElement("div",{className:G.a.blueSquare})):null,t.a.createElement(r,{location:n}),t.a.createElement("div",{className:G.a.container},e),t.a.createElement(d,null))},data:w})}},143:function(A,e,n){var w=n(0);function a(A){return w.createElement("svg",A,[w.createElement("style",{type:"text/css",key:0}),w.createElement("title",{key:1},"anvil_1"),w.createElement("g",{id:"Layer_2_1_",key:2},w.createElement("g",{id:"Layer_1-2"},w.createElement("path",{className:"anvil-logo-path",d:"M446.7,0.2c-1.8-0.2-3.7-0.2-5.5,0H146.7c-2.7,2.1-5,4.7-6.7,7.6c-3.4,6.1-9.2,8.3-16,8.3\n\t\t\tc-36.7,0-73.3,0.3-110-0.2c-11.3-0.2-17.1,7-12.3,18.6c14.8,36.2,41.9,55.1,80,59.8c18.3,2.3,36.9,2.4,55.1,5.8\n\t\t\tc5.4,0.9,10.7,2.5,15.7,4.8c16.8,7.7,26.3,27.5,22,45.4c-1.8,7.5-6.4,14.5-13,18.4c-13.5,8-30.3-3.6-40.4,10.7\n\t\t\tc-4.7,6.7-9.6,13.2-14.1,20c-2.6,3.9-3.4,8-1.1,12.2c2.2,4.1,6,5.5,10.5,5.5c20.5,0,41,0,61.5,0c4.5,0,8.2-1.6,10.5-5.5\n\t\t\tc4.4-7.6,10.8-10,19.6-9.8c28.6,0.5,57.3,0.4,86,0.1c6.6-0.1,11.4,2.1,14.6,7.6c3.4,5.9,8.3,7.8,15,7.7c17-0.3,34-0.1,51-0.1\n\t\t\tc10.9,0,15.3-6.6,11.3-16.8c-2.9-7.4-6.3-14.7-10.1-21.7c-4.4-8.1-11-6.9-19.2-6.3c-15,1-32.8-3.4-43-15.2\n\t\t\tc-9.6-11.2-9.5-26.6-4.5-39.8c5.2-13.5,14.5-23.8,25.4-32.9c19.3-16.2,41.5-27.6,64.4-37.7c9.9-4.3,19.8-8.4,29.9-12\n\t\t\tc4.9-1.8,9.9-3.5,14.9-5c3.7-1.1,7.6-2.3,10.8-4.6c1.9-1.3,3.3-3.2,3.9-5.4c1.3-5.2-2.8-11.5-5.9-15.3c-1-1.4-2.3-2.6-3.7-3.5\n\t\t\tC448.2,0.5,447.5,0.3,446.7,0.2z"})))])}a.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 458.8 217.2",style:{enableBackground:"new 0 0 458.8 217.2"},xmlSpace:"preserve"},A.exports=a,a.default=a},148:function(A,e,n){var w;A.exports=(w=n(160))&&w.default||w},149:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTEtMDZUMTQ6NTU6NTMtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTA2VDE1OjAxOjU4LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTA2VDE1OjAxOjU4LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmYwMTc3ZjM2LWQy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"},150:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTEtMDZUMTQ6NTU6NTMtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTA2VDE1OjAyOjI3LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTA2VDE1OjAyOjI3LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjViYzE1NDY5LTc2NzUtNGRkMS1hZDk0LTk5MzAzMDNlYTNhMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1YmMxNTQ2OS03Njc1LTRkZDEtYWQ5NC05OTMwMzAzZWEzYTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YmMxNTQ2OS03Njc1LTRkZDEtYWQ5NC05OTMwMzAzZWEzYTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjViYzE1NDY5LTc2NzUtNGRkMS1hZDk0LTk5MzAzMDNlYTNhMSIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0wNlQxNDo1NTo1My0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MzOxzAAAA0tJREFUeJztnT1rVEEYRk9UiEoQJBaKEKKFlVH0HyimUGzsxMImgo0IARvB1sYiiWhExa/GHyCCgp9gZWFhEbFQUaKNaBoTCEbjWkwWFc3undm9Ptm5z4EtFuadfXfO3tm5c4eZrlqthtGxTJ1A1bEAMRYgxgLEWIAYCxBjAWIsQIwFiLEAMRYgph0CBoCzwAQwA9Qyf80sfNcxYGurjdfVwmRcNzAKHKW6V9IP4CIwDMylVJAqoBu4C+xKCc6QR8BeEiSk/nLHcOP/zm5gJCUw5QoYAJ5T3W5nMeaB7cCLmKCURjySGJc7y4Gh2KCUhtyTEFMVBmMDUrqgaaAnNqgiTANrYgJSBPghcmO6Ygq7LxezQp2AmGlgivAHWu9Wu4HV/yuBKgn4CNwh3DQ9WXj/dZGyq4BeYB2wE7haVlJVEPAeOENoxNmCMbPAh4XXt5LyAvIXcAs4DHxRJ7IYOf8JnwIOsIQbH/K9Am4Ap9VJFCHHK+AZYYq8I8hRwEkS5+YV5CbgKfBAnUQMuQm4rE4gltwEPFYnEEtOAl4B7yJjtgHXgdeE4eq/HsJPtC/Fv8lpGPoysvwgcJsw9yMjpytgKrL8ecSND3kJ+BxRdiOwpaxEYshJQMyUw4bSsogkJwEx9KoTqFNVAVGPDcukqgKWDBYgxgLEWIAYCxDTKQuzDgGfmpR5A7wtWF8vsKNg2SHgYMGyEDnC6hQBfYTVDQpuEn4ARfHKuDbTX2blFtCcTWVWbgGNWQmsL/MDLKAx/ZQ8bWEBjSm1+wELaIYFiLEAMRYgpnQBnXInPAl8b1JmBBgvWN9+wv4WzegjfuVI1KipU5al9BUoszaivh5gc2IubcVdkBgLEGMBYixAjAWIsQAxFiDGAsRYgBgLEGMBYixAjAWIsQAxFiDGAsRYgBgLEJMiYKbtWeRD9O5cKQImE2KqQnTbpAi4nxBTFe7FBqQIuELYqt38yTxwLTYoRcAEcCkhLncuEHl2AKSPgoYJO9CawEPgREpgqoA5wpkp41S7O5oHzgH7SNwosJX7gDngGOHYjlF+HWOVO/VjrEYJ3/04LezS2MoxVqYN+E5YjAWIsQAxFiDGAsRYgBgLEGMBYixAjAWIsQAxPwEcAL3ziOO+VwAAAABJRU5ErkJggg=="},151:function(A){A.exports={data:{site:{siteMetadata:{title:"The Anvil",description:"Description"}}}}},160:function(A,e,n){"use strict";n.r(e);n(29);var w=n(0),a=n.n(w),t=n(4),D=n.n(t),P=n(64),y=n(2),c=function(A){var e=A.location,n=y.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(P.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:D.a.shape({pathname:D.a.string.isRequired}).isRequired},e.default=c},161:function(A,e,n){A.exports={navbar:"navbar-module--navbar--3b3h2",brand:"navbar-module--brand--_4ME1",brandLogo:"navbar-module--brand-logo--c49fM",brandName:"navbar-module--brand-name--ll30k",navbarGold:"navbar-module--navbar-gold--39ya7",navbarBlue:"navbar-module--navbar-blue--3yUzh"}},167:function(A,e,n){A.exports={section:"footer-module--section--3B-0p",footer:"footer-module--footer--R2bpz",brand:"footer-module--brand--1Lajs",logo:"footer-module--logo--LCv7Q",brandName:"footer-module--brand-name--2lMDz",footerBottom:"footer-module--footer-bottom--1SKaI",socialIcon:"footer-module--social-icon--1nxZp"}},168:function(A,e,n){},171:function(A,e){A.exports="data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDk+P8AyfL/AMny/wDJ8v8YyfL/PMny/zjJ8v8CyfL/AMny/wDJ8v8eyfL/PMny/yjJ8v8A1vX/AP///wD///8Ak+X/ACfL/wAny/8AJ8v/OifL//ony///J8v/1ifL/9Any//QJ8v/8CfL//8ny/+IJ8v/AF3Y/wD///8A////AJPl/wAny/8AJ8v/ACfL/wAny/8MJ8v/kifL//8ny///J8v//yfL/54ny/8SJ8v/BCfL/wBd2P8A////AP///wCT5f8AJ8v/ACfL/wAny/8AJ8v/AifL/54ny///J8v//yfL//8ny/9wJ8v/ACfL/wAny/8AXdj/AP///wD///8Ak+X/ACfL/zony/+kJ8v/yifL/+gny///J8v//yfL//8ny///J8v/7CfL/zony/8AJ8v/AF3Y/wD///8A////AJPl/y4ny//4J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny//8J8v/nCfL/yxd2P8A////AP///wCT5f88J8v/iCfL/4gny/+IJ8v/vCfL//ony//6J8v/+ifL//ony//6J8v/+ifL//ony//6Xdj/kP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP//AAD//wAA//8AAP//AAD//wAA+AcAAPwfAAD8PwAA4B8AAMAHAADAAQAA//8AAP//AAD//wAA//8AAP//AAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8Ak+X/AJPl/wCT5f8Ak+X/AJPl/wCT5f8Ak+X/XpPl/3aT5f92k+X/dpPl/2aT5f8Ck+X/AJPl/wCT5f8Ak+X/AJPl/wCT5f8Kk+X/cJPl/3aT5f92k+X/dpPl/yST5f8Ak+X/AJPl/wDJ8v8A////AP///wD///8A////AP///wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny//AJ8v//yfL//8ny///J8v//yfL/7ony/+gJ8v/oCfL/6Any/+gJ8v/oCfL/8Yny///J8v//yfL//8ny///J8v/TCfL/wAny/8AJ8v/AJPl/wD///8A////AP///wD///8A////ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/yQny//sJ8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL/9Iny/8EJ8v/ACfL/wAny/8Ak+X/AP///wD///8A////AP///wD///8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/xQny/8aJ8v/bCfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v/oifL/zAny/8WJ8v/DifL/wAny/8AJ8v/ACfL/wCT5f8A////AP///wD///8A////AP///wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/3CfL//8ny///J8v//yfL//8ny///J8v//yfL/9Qny/8CJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/AJPl/wD///8A////AP///wD///8A////ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wYny//qJ8v//yfL//8ny///J8v//yfL//8ny///J8v/uCfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8Ak+X/AP///wD///8A////AP///wD///8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wAny/8IJ8v/iifL//8ny///J8v//yfL//8ny///J8v//yfL//8ny//yJ8v/FCfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/ACfL/wCT5f8A////AP///wD///8A////AP///wAny/8AJ8v/ACfL/wAny/8uJ8v/YCfL/4gny/+gJ8v/vCfL/+gny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny/+yJ8v/CCfL/wAny/8AJ8v/ACfL/wAny/8AJ8v/AJPl/wD///8A////AP///wD///8A////ACfL/wAny/8kJ8v/wifL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny//AJ8v/HifL/wAny/8AJ8v/ACfL/wAny/8Ak+X/AP///wD///8A////AP///wD///8AJ8v/GCfL/+Qny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny//wJ8v/eifL/w4ny/8AJ8v/ACfL/wCT5f8A////AP///wD///8A////AP///wAny/+eJ8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v/6ifL/4gny/8mJ8v/AJPl/wD///8A////AP///wD///8A////ACfL/+Yny//8J8v//CfL//wny//8J8v//CfL//wny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//8ny///J8v//yfL//wny//Ik+X/Ov///wD///8A////AP///wD///8AJ8v/DCfL/xQny/8UJ8v/FCfL/xQny/8UJ8v/FCfL/yIny//UJ8v/9ifL//Yny//2J8v/9ifL//Yny//2J8v/9ifL//Yny//2J8v/9ifL//Yny//2J8v/9ifL//Yny//2J8v/9ifL//ST5f9M////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP//////////////////////////////////////////////////////gAB//8AAf//4A///+Af///gH///wB///AAP/+AAB//AAAP/gAAAf4AAAB//gAAf/////////////////////////////////////////////////////"},172:function(A,e,n){A.exports={squares:"layout-module--squares--JDdll",yellowSquare:"layout-module--yellow-square--3vOL-",blueSquare:"layout-module--blue-square--28j2G",greenSquare:"layout-module--green-square--1w_6G"}}}]);
//# sourceMappingURL=1-5ae689802b1f396a22b9.js.map