(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(141),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(146),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(46);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,a){"use strict";var n=a(147),r=a(0),c=a.n(r),i=a(4),l=a.n(i),o=a(148),u=a.n(o),s=a(142),d=a(175),m=a(159),p=a.n(m),f=a(160),v=a.n(f),y=function(e){e.siteTitle;return c.a.createElement("div",{className:p.a.navbar},c.a.createElement("div",{className:p.a.brand},c.a.createElement(v.a,{className:p.a.logo}),c.a.createElement("h1",{className:p.a.brandName},"The Anvil")),c.a.createElement(d.a,null,c.a.createElement(d.b,null,c.a.createElement(s.Link,{className:"nav-link",to:"/"},"About")),c.a.createElement(d.b,null,c.a.createElement(s.Link,{className:"nav-link",to:"/"},"Events")),c.a.createElement(d.b,null,c.a.createElement(s.Link,{className:"nav-link",to:"/"},"Membership")),c.a.createElement(d.b,null,c.a.createElement(s.Link,{className:"nav-link",to:"/"},"FAQ"))))},b=a(166),h=a.n(b),E=(a(167),a(168),a(169),function(e){var t=e.children;return c.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",{className:h.a.container},t))},data:n})});E.propTypes={children:l.a.node.isRequired};t.a=E},146:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"The Anvil"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(71),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},159:function(e,t,a){e.exports={navbar:"navbar-module--navbar--3b3h2",brand:"navbar-module--brand--_4ME1",logo:"navbar-module--logo--23u1A",brandName:"navbar-module--brand-name--ll30k"}},160:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("style",{type:"text/css",key:0}),n.createElement("title",{key:1},"anvil_1"),n.createElement("g",{id:"Layer_2_1_",key:2},n.createElement("g",{id:"Layer_1-2"},n.createElement("path",{className:"anvil-logo-path",d:"M446.7,0.2c-1.8-0.2-3.7-0.2-5.5,0H146.7c-2.7,2.1-5,4.7-6.7,7.6c-3.4,6.1-9.2,8.3-16,8.3\n\t\t\tc-36.7,0-73.3,0.3-110-0.2c-11.3-0.2-17.1,7-12.3,18.6c14.8,36.2,41.9,55.1,80,59.8c18.3,2.3,36.9,2.4,55.1,5.8\n\t\t\tc5.4,0.9,10.7,2.5,15.7,4.8c16.8,7.7,26.3,27.5,22,45.4c-1.8,7.5-6.4,14.5-13,18.4c-13.5,8-30.3-3.6-40.4,10.7\n\t\t\tc-4.7,6.7-9.6,13.2-14.1,20c-2.6,3.9-3.4,8-1.1,12.2c2.2,4.1,6,5.5,10.5,5.5c20.5,0,41,0,61.5,0c4.5,0,8.2-1.6,10.5-5.5\n\t\t\tc4.4-7.6,10.8-10,19.6-9.8c28.6,0.5,57.3,0.4,86,0.1c6.6-0.1,11.4,2.1,14.6,7.6c3.4,5.9,8.3,7.8,15,7.7c17-0.3,34-0.1,51-0.1\n\t\t\tc10.9,0,15.3-6.6,11.3-16.8c-2.9-7.4-6.3-14.7-10.1-21.7c-4.4-8.1-11-6.9-19.2-6.3c-15,1-32.8-3.4-43-15.2\n\t\t\tc-9.6-11.2-9.5-26.6-4.5-39.8c5.2-13.5,14.5-23.8,25.4-32.9c19.3-16.2,41.5-27.6,64.4-37.7c9.9-4.3,19.8-8.4,29.9-12\n\t\t\tc4.9-1.8,9.9-3.5,14.9-5c3.7-1.1,7.6-2.3,10.8-4.6c1.9-1.3,3.3-3.2,3.9-5.4c1.3-5.2-2.8-11.5-5.9-15.3c-1-1.4-2.3-2.6-3.7-3.5\n\t\t\tC448.2,0.5,447.5,0.3,446.7,0.2z"})))])}r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 458.8 217.2",style:{enableBackground:"new 0 0 458.8 217.2"},xmlSpace:"preserve"},e.exports=r,r.default=r},166:function(e,t,a){e.exports={container:"layout-module--container--2TGku"}},167:function(e,t,a){}}]);
//# sourceMappingURL=1-89c68604b0f7ab4eefea.js.map