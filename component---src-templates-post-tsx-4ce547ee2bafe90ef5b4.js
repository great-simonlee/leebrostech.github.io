(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6ldB":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("dciQ")),r=a(n("q2je"));function a(e){return e&&e.__esModule?e:{default:e}}var i={Google:o.default,Baidu:r.default};t.default=i},"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n("UZsz"),r=n("Bp/N"),a=n("HhXV");t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=(o=a)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(i.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},HhXV:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=(o=a)&&o.__esModule?o:{default:o},s=n("ZMnY");t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}(i.default.Component)},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=(o=a)&&o.__esModule?o:{default:o},s=n("ZMnY");var u=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(i.default.Component)},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,a=arguments,i=function(){o=null,n||e.apply(r,a)},s=n&&!o;window.clearTimeout(o),o=setTimeout(i,t),s&&e.apply(r,a)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,r=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var l=s.value;if(e[l]!==t[l]&&!i(e[l]))return!0}}catch(c){r=!0,a=c}finally{try{!o&&u.return&&u.return()}finally{if(r)throw a}}return!1};var o,r=n("q1tI"),a=(o=r)&&o.__esModule?o:{default:o};function i(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},dciQ:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n("q1tI")),a=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return r.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),t}(r.default.Component);t.default=s,s.propTypes={className:a.default.string,style:a.default.object,client:a.default.string.isRequired,slot:a.default.string.isRequired,layout:a.default.string,layoutKey:a.default.string,format:a.default.string,responsive:a.default.string},s.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},q2je:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=(o=a)&&o.__esModule?o:{default:o};var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),t}(i.default.Component);t.default=s},uG8V:function(e,t,n){"use strict";n.r(t);n("a1Th"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("T39b"),n("XfO3"),n("HEwt");var o=n("q1tI"),r=n.n(o),a=n("Wbzz"),i=n("7evw"),s=n("IP2g"),u=n("wHSu"),l=n("6ldB"),c=n.n(l),f=n("VXBa"),d=(n("AoQJ"),n("2+8J"),function(e){var t=e.toc,n=e.isOutside;return r.a.createElement("div",{className:"toc "+(n?"outside":"inside"),dangerouslySetInnerHTML:{__html:t}})}),p=n("H8eV"),m=n("TJpk"),h=n.n(m);function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"pageQuery",(function(){return v}));var b=n("20nU"),v="929948409";t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,l=t.html,m=t.tableOfContents,v=t.fields,w=t.excerpt,g=n.title,E=n.date,_=n.tags,O=n.keywords,S=v.slug,I=Object(o.useState)(),C=I[0],j=I[1],N=Object(o.useState)(!1),k=N[0],q=N[1],P=b.enablePostOfContents&&""!==m,A=b.disqusShortname;Object(o.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2, h3")).map((function(e){return e.offsetTop}));return j(e),function(){}}),[]),Object(o.useEffect)((function(){var e=function(){if(C){var e=C.filter((function(e){return e<window.pageYOffset})).length-1,t=document.querySelectorAll(".toc.outside li a");for(var n in Array.from(t))parseInt(n,10)===e?t[n].style.opacity="1":t[n].style.opacity="0.4"}};return P&&document.addEventListener("scroll",e),function(){P&&document.removeEventListener("scroll",e)}}),[C]);var T=_.map((function(e){return r.a.createElement("li",{key:e,className:"blog-post-tag"},r.a.createElement(a.Link,{to:"/tag/"+e},"#"+e))})),M={shortname:b.disqusShortname,config:{url:""+(b.siteUrl+S),identifier:S,title:g}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"})),r.a.createElement(p.a,{title:g,description:w,keywords:function(e,t){for(var n=new Set,o=0,r=[].concat(y(e),y(t));o<r.length;o++){var a=r[o];n.add(a)}return Array.from(n)}(O,_)}),r.a.createElement(f.a,null,r.a.createElement("div",{className:"blog-post-container"},r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",{className:"blog-post-title"},g),r.a.createElement("div",{className:"blog-post-info"},r.a.createElement("span",{className:"blog-post-date"},E),_.length&&"Empty Tag"!==_[0]?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"·"),r.a.createElement("ul",{className:"blog-post-tag-list"},T)):null,P?r.a.createElement("div",{className:"blog-post-inside-toc"},r.a.createElement("div",{className:"toc-button",role:"button",onClick:function(){q((function(e){return!e}))}},r.a.createElement(s.a,{icon:u.e}))):null),P?r.a.createElement("div",{className:"inside-toc-wrap",style:{display:k?"flex":"none"}},r.a.createElement(d,{isOutside:!1,toc:m})):null,r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:l}})),b.googleAdsense?r.a.createElement("aside",{className:"ad"},r.a.createElement(c.a.Google,{client:b.googleAdsenseClient,slot:b.googleAdsenseSlot,style:{display:"block"},format:"auto",responsive:"true"})):null,A?r.a.createElement("div",{className:"comments"},r.a.createElement(i.DiscussionEmbed,M)):null),P?r.a.createElement(d,{isOutside:!0,toc:m}):null))}},xfY5:function(e,t,n){"use strict";var o=n("dyZX"),r=n("aagx"),a=n("LZWt"),i=n("Xbzi"),s=n("apmT"),u=n("eeVq"),l=n("kJMx").f,c=n("EemH").f,f=n("hswa").f,d=n("qncB").trim,p=o.Number,m=p,h=p.prototype,y="Number"==a(n("Kuth")(h)),b="trim"in String.prototype,v=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,a=(t=b?t.trim():d(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var i,u=t.slice(2),l=0,c=u.length;l<c;l++)if((i=u.charCodeAt(l))<48||i>r)return NaN;return parseInt(u,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(y?u((function(){h.valueOf.call(n)})):"Number"!=a(n))?i(new m(v(t)),n,p):v(t)};for(var w,g=n("nh4g")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;g.length>E;E++)r(m,w=g[E])&&!r(p,w)&&f(p,w,c(m,w));p.prototype=h,h.constructor=p,n("KroJ")(o,"Number",p)}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-4ce547ee2bafe90ef5b4.js.map