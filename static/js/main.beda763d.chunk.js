(this["webpackJsonpcn-react-helpers-example"]=this["webpackJsonpcn-react-helpers-example"]||[]).push([[0],{301:function(n,e,t){"use strict";t.r(e);t(50);var r=t(0),a=t.n(r),c=t(39),o=t.n(c),i=t(1),l=t(2);function m(){var n=Object(i.a)(["\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n"]);return m=function(){return n},n}function u(){var n=Object(i.a)(["\n  min-height: 100vh;\n  width: 100%;\n  background-color: #1f2334;\n  padding: 20px;\n"]);return u=function(){return n},n}var f=l.a.div(u()),s=l.a.div(m()),d=t(305),p=t(304);function h(){var n=Object(i.a)(["\n  border-radius: 0px !important;\n  margin: 0px !important;\n  position: relative;\n  font-size: 1.2em !important;\n  background-color: #262A3F !important;\n  *{\n    font-family: 'JetBrains Mono', monospace !important;\n  }\n\n  .react-syntax-highlighter-line-number{\n    opacity: 0.5;\n  }\n\n  @media(max-width: 800px){\n    font-size: 1em !important;\n  }\n"]);return h=function(){return n},n}var b=Object(l.a)(d.a)(h());function E(n){return a.a.createElement("div",null,a.a.createElement(b,{"data-testid":"syntax-code",showLineNumbers:!0,language:"jsx",style:p.a},n.code.trim()))}function g(){var n=Object(i.a)(["\n  color: #8c9eec;\n  font-weight: normal;\n  font-size: 1.5em;\n"]);return g=function(){return n},n}function v(){var n=Object(i.a)(["\n  color: #8c9eec;\n  text-align: center;\n"]);return v=function(){return n},n}function x(){var n=Object(i.a)(["\n  color: #FFFFFF;\n  font-size: 2.2em;\n  text-align: center;\n  font-weight: normal;\n"]);return x=function(){return n},n}var w=l.a.h1(x()),j=l.a.p(v()),O=l.a.h1(g()),F=t(47),y=t.n(F),k=t(48),z=t.n(k);function H(){var n=Object(i.a)(["\n  margin-bottom: 30px;\n"]);return H=function(){return n},n}function S(){var n=Object(i.a)(["\n  margin-bottom: 50px;\n  padding: 20px;\n  background-color: #262a3f;\n  text-align: center;\n  font-size: 1.5em;\n  color: #00ffff;\n\n  @media(max-width: 800px){\n    font-size: 1em;\n  }\n"]);return S=function(){return n},n}function T(){var n=Object(i.a)(["\n  margin-bottom: 50px;\n"]);return T=function(){return n},n}function C(){var n=Object(i.a)(["\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n"]);return C=function(){return n},n}function J(){var n=Object(i.a)(["\n  display: block;\n  max-width: 280px;\n  margin: 0 auto 50px auto;\n"]);return J=function(){return n},n}function B(){var n=Object(i.a)(["\n  margin-bottom: 50px;\n"]);return B=function(){return n},n}function A(){var n=Object(i.a)(["\n  width: 60px;\n  display: block;\n  margin: 50px auto 25px auto;\n"]);return A=function(){return n},n}var D=l.a.img(A()),I=l.a.div(B()),L=l.a.a(J()),M=l.a.img(C()),N=l.a.div(T()),R=l.a.div(S()),_=l.a.div(H());function q(){return a.a.createElement(f,null,a.a.createElement(s,null,a.a.createElement(D,{src:y.a}),a.a.createElement(I,null,a.a.createElement(w,null," React Helpers "),a.a.createElement("br",null),a.a.createElement(j,null," Some useful react components ")),a.a.createElement(L,{target:"_blank",href:"https://github.com/C4co/cn-react-helpers"},a.a.createElement(M,{src:z.a})),a.a.createElement(R,null,"npm install cn-react-helpers"),a.a.createElement(N,null,a.a.createElement(O,null," ","<Show />"," "),a.a.createElement("br",null),a.a.createElement(E,{code:'\nimport { Show } from "cn-react-helpers"\nconst foo: number = 10\nconst bar: number = 5\n\n...\n\n// default\n{ foo > bar && <h1> valid condition </h1> }\n\n// show component\n<Show if={foo > bar}>\n  <h1> valid condition </h1>\n</Show>\n'})),a.a.createElement(N,null,a.a.createElement(O,null," ","<Hide />"," "),a.a.createElement("br",null),a.a.createElement(E,{code:'\nimport { Hide } from "cn-react-helpers"\nconst foo: number = 10\nconst bar: number = 5\n\n...\n\n// default\n{ foo > bar && <h1> valid condition </h1> }\n\n// Hide component\n<Hide if={foo > bar}>\n  <h1> valid condition </h1>\n</Hide>\n'})),a.a.createElement(N,null,a.a.createElement(O,null," ","<Each />"," "),a.a.createElement("br",null),a.a.createElement(E,{code:'\nimport { Each } from "cn-react-helpers"\nconst elements = [1, 2, 3, 4, 5]\n\n...\n\n// default\n{elements.each((item: number) => (\n  <h1> {item} </h1>\n))}\n\n// Each component\n<Each items=[elements]>\n  {(item: number) => (\n    <h1> {item} </h1>\n  )}\n</Each>\n'})),a.a.createElement(N,null,a.a.createElement(O,null," ","<Filter />"," "),a.a.createElement("br",null),a.a.createElement(E,{code:'\nimport { Filter } from "cn-react-helpers"\nconst elements = [1, 2, 3, 4, 5]\n\n...\n\n// default\n{elements.filter(item: number) => {\n  if(item > 5){\n    return (\n      <h1> {item} </h1>\n    )\n  }\n}}\n\n// Filter component\n<Filter items=[elements] if={(item: number) => item > 5}>\n  {(item: number) => (\n    <h1> {item} </h1>\n  )}\n</Filter>\n'})),a.a.createElement(N,null,a.a.createElement(O,null," ","<Truncate />"," "),a.a.createElement("br",null),a.a.createElement(E,{code:'\nimport { Truncate } from "cn-react-helpers"\n\n...\n\n<Truncate size="3" end="...">\n  Hello world!\n</Truncate>\n'})),a.a.createElement(_,null,a.a.createElement(j,null," Designed and coded by Carlos Costa "))))}o.a.render(a.a.createElement(q,null),document.getElementById("root"))},47:function(n,e,t){n.exports=t.p+"static/media/logo.10888a7b.svg"},48:function(n,e,t){n.exports=t.p+"static/media/github.e4cba353.svg"},49:function(n,e,t){n.exports=t(301)},50:function(n,e,t){}},[[49,1,2]]]);
//# sourceMappingURL=main.beda763d.chunk.js.map