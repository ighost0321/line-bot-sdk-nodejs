(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{168:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("It can be imported with "),n("a",{attrs:{href:"https://nodejs.org/docs/latest/api/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonJS"),n("OutboundLink")],1),t._v(",\n"),n("a",{attrs:{href:"https://babeljs.io/learn-es2015/#ecmascript-2015-features-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES2015 modules"),n("OutboundLink")],1),t._v(",\nand preferably "),n("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("The library is written in TypeScript and includes TypeScript definitions by\ndefault. Nevertheless, it can surely be used with plain JavaScript too.")]),t._v(" "),t._m(1),t._m(2),t._v(" "),n("p",[t._v("For the usage of webhook and client, LINE channel access token and secret are\nneeded. About issuing the token and secret, please refer to "),n("a",{attrs:{href:"https://developers.line.me/messaging-api/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting started with the Messaging API"),n("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(3),t._m(4),t._v(" "),n("p",[t._v("Here is a synopsis of echoing webhook server with "),n("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express"),n("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(5),n("p",[t._v("The full examples with comments can be found in "),n("a",{attrs:{href:"https://github.com/line/line-bot-sdk-nodejs/tree/master/examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("For the specifications of API, please refer to "),n("router-link",{attrs:{to:"./../api-reference.html"}},[t._v("API Reference")]),t._v(".")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Usage")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// CommonJS")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" line "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'@line/bot-sdk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// ES2015 modules or TypeScript")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" line "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'@line/bot-sdk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  channelAccessToken"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'YOUR_CHANNEL_ACCESS_TOKEN'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  channelSecret"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'YOUR_CHANNEL_SECRET'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("line"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nline"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("middleware")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"synopsis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synopsis","aria-hidden":"true"}},[this._v("#")]),this._v(" Synopsis")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'express'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" line "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'@line/bot-sdk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  channelAccessToken"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'YOUR_CHANNEL_ACCESS_TOKEN'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  channelSecret"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'YOUR_CHANNEL_SECRET'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("express")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("post")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/webhook'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("middleware")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Promise\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("all")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handleEvent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("json")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("line"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("handleEvent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'message'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replyMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replyToken"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="basic-usage.md";s.default=e.exports}}]);