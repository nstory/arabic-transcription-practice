(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8121)}])},8121:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return U},default:function(){return D}});var r=n(5893),s=n(9008),o=(n(6516),n(6486)),c=n(7294),i=n(6767),a=n(2479),u=n(1860),l=n(2007),f=n(2441),d=n.n(f);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var s=m(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return b(this,n)}}var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,s,o=x(c);function c(){return p(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){if(this.props.shortcut){var e=this;d().bind(this.props.shortcut,(function(){e.props.enabled&&e.props.onClick()}),"keyup")}}},{key:"componentWillUnmount",value:function(){d().unbind(this.props.shortcut)}},{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.enabled,s=e.children,o=e.className;return(0,r.jsx)("button",{className:"btn btn-primary ".concat(o),onClick:n?t:void 0,disabled:!n,children:s})}}])&&h(t.prototype,n),s&&h(t,s),c}(c.Component),g=n(1752);function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?N(e):t}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var s=S(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return O(this,n)}}var E="STATUS_GUESSING",P="STATUS_GUESSED_CORRECT",T="STATUS_GUESSED_INCORRECT",A=(0,g.default)().publicRuntimeConfig.assetPrefix,G=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(d,e);var t,n,s,f=C(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),_(N(t=f.call(this)),"playSound",(function(){t.audioRef.current.currentTime=0,t.audioRef.current.play()})),_(N(t),"openOnArabicFi",(function(){window.open(t.state.word.url)})),_(N(t),"retry",(function(){t.setState({guess:"",status:E,retry:!0},(function(){t.guessInputRef.current.focus()}))})),_(N(t),"handleNext",(function(){t.setState({word:(0,o.sample)(t.props.words),guess:"",status:E,retry:!1},(function(){t.guessInputRef.current.focus()}))})),_(N(t),"handleSubmitGuess",(function(e){e.preventDefault(),t.state.guess==t.state.word.phonetic?(t.setState({status:P}),t.state.retry||t.setState({correct:t.state.correct+1})):(t.setState({status:T}),t.state.retry||t.setState({incorrect:t.state.incorrect+1})),t.playSound()})),_(N(t),"handleChangeGuess",(function(e){t.setState({guess:e.target.value})})),t.state={guess:"",status:E,correct:0,incorrect:0},t.audioRef=c.createRef(),t.guessInputRef=c.createRef(),t}return t=d,(n=[{key:"componentDidMount",value:function(){this.setState({word:(0,o.sample)(this.props.words)})}},{key:"render",value:function(){var e=this.state,t=e.word,n=e.status,s=e.correct,o=e.incorrect;return t?(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3",children:[(0,r.jsx)("p",{className:"text-center fs-1",children:t.arabic}),(0,r.jsxs)("form",{className:"form-floating mb-3",onSubmit:this.handleSubmitGuess,children:[(0,r.jsx)("input",{ref:this.guessInputRef,id:"guess",className:"form-control form-control-lg ".concat(n==P?"is-valid":""," ").concat(n==T?"is-invalid":""),type:"text",placeholder:"...",autoComplete:"off",autoFocus:!0,onChange:this.handleChangeGuess,value:this.state.guess,disabled:n!=E}),(0,r.jsxs)("label",{htmlFor:"guess",children:["Transcribe the word and press ",(0,r.jsx)("kbd",{children:"Enter"})]})]}),(0,r.jsx)(I,{status:n,value:t.phonetic,label:"Transcription"}),(0,r.jsx)(I,{status:n,value:t.definition,label:"Definition"}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("div",{style:{visibility:n===E?"hidden":"visible"},children:(0,r.jsx)("audio",{ref:this.audioRef,src:"".concat(A).concat(t.audio_path),controls:!0})})}),(0,r.jsxs)("div",{className:"mb-3 text-center",children:[(0,r.jsxs)(j,{enabled:n!=E,className:"me-3 mb-3",onClick:this.openOnArabicFi,shortcut:"o",children:[(0,r.jsx)(i.Z,{className:"me-1"})," ",(0,r.jsx)("u",{children:"O"}),"pen on Arabic.fi"]}),(0,r.jsxs)(j,{enabled:n!=E,className:"me-3 mb-3",onClick:this.playSound,shortcut:"p",children:[(0,r.jsx)(a.Z,{className:"me-1"})," ",(0,r.jsx)("u",{children:"P"}),"lay Again"]}),(0,r.jsxs)(j,{enabled:n!=E,className:"me-3 mb-3",onClick:this.retry,shortcut:"r",children:[(0,r.jsx)(u.Z,{className:"me-1"})," ",(0,r.jsx)("u",{children:"R"}),"etry"]}),(0,r.jsxs)(j,{onClick:this.handleNext,enabled:n!=E,className:"mb-3 me-3",shortcut:"n",children:[(0,r.jsx)(l.Z,{className:"me-1"})," ",(0,r.jsx)("u",{children:"N"}),"ext"]})]}),(0,r.jsxs)("div",{className:"mb-3 text-center",children:[(0,r.jsxs)("span",{className:"text-success",children:["Correct: ",s]}),(0,r.jsx)("span",{className:"text-muted",children:" | "}),(0,r.jsxs)("span",{className:"text-danger",children:["Incorrect: ",o]})]})]})})}):null}}])&&w(t.prototype,n),s&&w(t,s),d}(c.Component);function I(e){var t=e.label,n=e.status,s=n==E?"LoremIpsum":e.value,o=n==E?{filter:"blur(5px)"}:{};return(0,r.jsxs)("div",{className:"form-floating mb-3",style:o,children:[(0,r.jsx)("input",{type:"text",className:"form-control",value:s,disabled:!0,readOnly:!0,placeholder:"..."}),(0,r.jsx)("label",{children:t})]})}var U=!0;function D(e){var t=e.words;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Arabic Transcription Practice"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Skranji:wght@700&display=swap",rel:"stylesheet"})]}),(0,r.jsx)("div",{className:"mb-3",style:{backgroundColor:"#678677"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("h1",{className:"display-1 text-center text-light mb-0",style:{fontFamily:"Skranji"},children:"Arabic Transcription Practice"})})})})}),(0,r.jsx)(G,{words:t})]})}}},function(e){e.O(0,[882,662,353,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);