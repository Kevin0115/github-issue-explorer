(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/search.4d4782ae.svg"},function(e,t,a){e.exports=a.p+"static/media/circle.2d297b28.svg"},function(e,t,a){e.exports=a.p+"static/media/pull-request.f7396a8d.svg"},function(e,t,a){e.exports=a.p+"static/media/issue-closed.29eed3f5.svg"},function(e,t,a){e.exports=a.p+"static/media/close.49c09251.svg"},function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(9),l=a.n(i),r=(a(21),a(2)),c=a(3),u=a(5),o=a(4),d=a(6),m=(a(23),a(1)),h=(a(7),a(10)),p=a.n(h),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"search-page",className:"preload"},n.a.createElement("p",{id:"search-page-title"},"GitHub Issue Viewer"),n.a.createElement("form",{id:"search-form",onSubmit:this.props.onSubmit,autoComplete:"off"},n.a.createElement("div",{id:"form-inputs"},n.a.createElement("div",{id:"button-container"},n.a.createElement("input",{id:"search-button",type:"image",src:p.a,alt:"Go!"})),n.a.createElement("input",{id:"text-input",type:"text",value:this.props.value,placeholder:"Paste a link to a GitHub repo!",onChange:this.props.onChange}))))}}]),t}(s.Component),E=(a(26),a(28),a(11)),v=a.n(E),g=a(12),f=a.n(g),O=a(13),y=a.n(O),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_renderLabels",value:function(){return this.props.issue.labels.map(function(e,t){return n.a.createElement("div",{className:"label-background",key:t},n.a.createElement("img",{className:"bullet",src:v.a,alt:"o"}),n.a.createElement("p",{className:"label-name"},e.name.split(":").pop()))})}},{key:"_renderStatusSymbol",value:function(){return"open"===this.props.issue.state?this.props.issue.hasOwnProperty("pull_request")?n.a.createElement("img",{className:"status-symbol",src:f.a,alt:"P"}):null:n.a.createElement("img",{className:"status-symbol",src:y.a,alt:"C"})}},{key:"_renderIssueBody",value:function(){return this.props.issue.body.length>0?n.a.createElement("p",{className:"issue-body"},this.props.issue.body):n.a.createElement("p",{className:"no-body"},"No description provided")}},{key:"render",value:function(){return n.a.createElement("div",{className:"issue"},n.a.createElement("div",{className:"issue-header"},n.a.createElement("div",{className:"issue-status"},this._renderStatusSymbol()),n.a.createElement("div",{className:"title-container"},n.a.createElement("p",{className:"issue-title"},this.props.issue.title))),n.a.createElement("div",{className:"issue-content"},this._renderIssueBody(),n.a.createElement("div",{className:"issue-labels"},this._renderLabels())))}}]),t}(s.Component),_=a(14),j=a.n(_),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={selectedState:"all"},a._handleFilterSelect=a._handleFilterSelect.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_handleFilterSelect",value:function(e){e.target.id!==this.state.selectedState&&(document.getElementById(this.state.selectedState).className="label-unselected",document.getElementById(e.target.id).className="label-selected",this.setState({selectedState:e.target.id}))}},{key:"_renderErrorMessage",value:function(){return n.a.createElement("p",{id:"standalone-message"},"Please Enter a Valid GitHub Repo URL!")}},{key:"_renderIssues",value:function(){if(0===this.props.issuesJSON.length)return n.a.createElement("p",{id:"standalone-message"},"Nothing to show here.");var e=this.state.selectedState;return this.props.issuesJSON.map(function(t){return"all"===e||e===t.state||"pull-request"===e&&t.hasOwnProperty("pull_request")&&"open"===t.state?n.a.createElement(S,{issue:t,key:t.node_id}):null})}},{key:"render",value:function(){return n.a.createElement("div",{id:"results-page-hidden"},n.a.createElement("div",{id:"results-header"},n.a.createElement("p",{id:"header-title"},"GitHub Issue Viewer"),n.a.createElement("p",{id:"url"},this.props.submittedText)),n.a.createElement("div",{id:"results-content"},n.a.createElement("div",{id:"exit"},n.a.createElement("img",{id:"exit-button",src:j.a,onClick:this.props.onClick,alt:"Exit"})),n.a.createElement("div",{id:"filter-labels"},n.a.createElement("p",{className:"label-selected",id:"all",onClick:this._handleFilterSelect},"All Issues"),n.a.createElement("p",{className:"label-unselected",id:"open",onClick:this._handleFilterSelect},"Open Issues"),n.a.createElement("p",{className:"label-unselected",id:"closed",onClick:this._handleFilterSelect},"Closed Issues"),n.a.createElement("p",{className:"label-unselected",id:"pull-request",onClick:this._handleFilterSelect},"Pull Requests")),this.props.badUrl?this._renderErrorMessage():0===this.props.issuesJSON.length?n.a.createElement("p",{id:"standalone-message"},"Nothing to show here."):n.a.createElement("div",{id:"issue-content"},this._renderIssues())))}}]),t}(s.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={isMinimized:!1,textInputVal:"",submittedText:"",issuesJSON:[],badUrl:!0},a._handleChange=a._handleChange.bind(Object(m.a)(Object(m.a)(a))),a._handleSubmit=a._handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a._handleExit=a._handleExit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_handleChange",value:function(e){this.setState({textInputVal:e.target.value})}},{key:"_handleSubmit",value:function(e){document.getElementById("text-input").blur(),document.getElementById("search-button").blur(),document.getElementById("search-page").id="search-page-hidden",document.getElementById("results-page-hidden").id="results-page",this.setState({isMinimized:!this.state.isMinimized,submittedText:this.state.textInputVal}),this._retrieveIssuesJSON(),e.preventDefault()}},{key:"_handleExit",value:function(){this.setState({textInputVal:"",submittedText:""}),document.getElementById("search-page-hidden").id="search-page",document.getElementById("results-page").id="results-page-hidden"}},{key:"_retrieveRepoPath",value:function(){if(this.state.textInputVal.includes("github.com"))return this.state.textInputVal.split("github.com/").pop();this.setState({badUrl:!0})}},{key:"_retrieveIssuesJSON",value:function(){var e=this,t=this._retrieveRepoPath();fetch("https://api.github.com/repos/"+t+"/issues?state=all&per_page=100").then(function(t){return 200!==t.status?(e.setState({badUrl:!0}),[]):(e.setState({badUrl:!1}),t.json())}).then(function(t){t.error?console.warn("Error!",t.error):e.setState({issuesJSON:t})}).catch(function(e){console.warn("Error: ",e)})}},{key:"render",value:function(){return n.a.createElement("div",{id:"issue-explorer"},n.a.createElement(b,{value:this.state.textInputVal,onChange:this._handleChange,onSubmit:this._handleSubmit}),n.a.createElement(N,{onClick:this._handleExit,submittedText:this.state.submittedText,issuesJSON:this.state.issuesJSON,badUrl:this.state.badUrl}))}}]),t}(s.Component),x=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(k,null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.521a7903.chunk.js.map