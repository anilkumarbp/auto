(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{73:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=i(o(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(2)),i(o(122));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o,n){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=n;else if(i>1){for(var s=new Array(i),d=0;d<i;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const c=e=>{let{to:t}=e,o=u(e,["to"]);return t.includes("http")?a.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/extras/next.html")+t),a.default.createElement("a",d({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(a),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,o;return o=t=class extends a.default.Component{constructor(...e){super(...e),s(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},s(t,"defaultProps",{shouldLoad:!0}),o};h(()=>o.e(32).then(o.bind(null,123))),h(()=>o.e(32).then(o.bind(null,124)));var p=l("p",{},void 0,"You should make your pre-release branches protected on GitHub. This will prevent a bunch of unwanted behavior from happening."),f=l("li",{},void 0,"Click ",l("code",{},void 0,"Branches")),v=l("li",{},void 0,"Click ",l("code",{},void 0,"Add Rule")),b=l("li",{},void 0,"Enter the name of your prerelease branch (ex: ",l("code",{},void 0,"next"),")"),g=l("li",{},void 0,"Configure extra branch protection settings"),m=l("li",{},void 0,"(Optional) Set the base branch in GitHub to your prerelease branch (this ensure new PRs go to this branch)");var y=e=>l("div",{className:e.className},void 0,l("section",{},void 0,l("h3",{id:"setting-up-protected-branches"},void 0,"Setting up Protected Branches ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#setting-up-protected-branches","aria-hidden":"true"})),p,l("ol",{},void 0,l("li",{},void 0,"Go to you project's setting on ",l(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com",className:"external-link"},void 0,"GitHub")),f,v,b,g,m)));t.default=y,e.exports=t.default},84:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=i(o(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(2)),i(o(122));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o,n){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=n;else if(i>1){for(var s=new Array(i),d=0;d<i;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const c=e=>{let{to:t}=e,o=u(e,["to"]);return t.includes("http")?a.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/generated/next.html")+t),a.default.createElement("a",d({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(a),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,o;return o=t=class extends a.default.Component{constructor(...e){super(...e),s(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},s(t,"defaultProps",{shouldLoad:!0}),o};h(()=>o.e(32).then(o.bind(null,123))),h(()=>o.e(32).then(o.bind(null,124)));var p=l("h1",{},void 0,l("code",{},void 0,"next")),f=l("p",{},void 0,'Make a release for your "prerelease" release line. This is ran automatically from "shipit".'),v=l("ol",{},void 0,l("li",{},void 0,"Creates a prerelease on package management platform"),l("li",{},void 0,'Creates a "Pre Release" on GitHub releases page.')),b=l("p",{},void 0,"Calling the ",l("code",{},void 0,"next")," command from a prerelease branch will publish a prerelease, otherwise it will publish to the default prerelease branch."),g=l("table",{},void 0,l("thead",{},void 0,l("tr",{},void 0,l("th",{},void 0,"Flag"),l("th",{},void 0,"Type"),l("th",{},void 0,"Description"))),l("tbody",{},void 0,l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--dry-run"),", ",l("code",{},void 0,"-d")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Report what command will do but do not actually do anything")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--message"),", ",l("code",{},void 0,"-m")),l("td",{},void 0,"String"),l("td",{},void 0,"The message used when attaching the prerelease version to a PR")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--quiet"),", ",l("code",{},void 0,"-q")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Print ",l("strong",{},void 0,"only")," the result of the command")))),m=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,"auto next",l("br",{}))),y=l("p",{},void 0,"You can configure some of the options for the ",l("code",{},void 0,"next")," command in the ",l("code",{},void 0,".autorc"),"."),w=l("ul",{},void 0,l("li",{},void 0,l("code",{},void 0,"message"))),P=l("p",{},void 0,l("strong",{},void 0,"Example ",l("code",{},void 0,".autorc"),":")),O=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"next"'),": {",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"message"'),": ",l("span",{className:"hljs-string"},void 0,'"string"'),l("br",{}),"  }",l("br",{}),"}",l("br",{}))),j=l("p",{},void 0,"You should make your pre-release branches protected on GitHub. This will prevent a bunch of unwanted behavior from happening."),k=l("li",{},void 0,"Click ",l("code",{},void 0,"Branches")),x=l("li",{},void 0,"Click ",l("code",{},void 0,"Add Rule")),C=l("li",{},void 0,"Enter the name of your prerelease branch (ex: ",l("code",{},void 0,"next"),")"),S=l("li",{},void 0,"Configure extra branch protection settings"),E=l("li",{},void 0,"(Optional) Set the base branch in GitHub to your prerelease branch (this ensure new PRs go to this branch)");var N=e=>l("div",{className:e.className},void 0,l("section",{},void 0,p,f,v,b,l("h2",{id:"options"},void 0,"Options ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),g,l("h2",{id:"examples"},void 0,"Examples ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),m,l("h2",{id:"configurable-options"},void 0,"Configurable Options ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configurable-options","aria-hidden":"true"})),y,w,P,O,l("h3",{id:"setting-up-protected-branches"},void 0,"Setting up Protected Branches ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#setting-up-protected-branches","aria-hidden":"true"})),j,l("ol",{},void 0,l("li",{},void 0,"Go to you project's setting on ",l(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com",className:"external-link"},void 0,"GitHub")),k,x,C,S,E)));t.default=N,e.exports=t.default}}]);
//# sourceMappingURL=next.js.map