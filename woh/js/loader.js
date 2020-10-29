/** This file was autogenerated by Haiku at 20201014120432.
Copyright (c) 2020 jaysonwhelpley. All rights reserved.
*/
var HaikuComponentEmbed_jaysonwhelpley_GradientStrokeEminat=function(){function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}var i="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.tokenize=function(e,t){for(var i=[],a=e,r=a.length,n=0;a.length>0;){for(var o=0;o<t.length;o++){var s=t[o],l=s.re.exec(a);if(l){var u=l[0];i.push({value:u,type:s.type}),a=a.slice(l[0].length,a.length);break}}if(n++>r)throw new Error("Unable to tokenize expression "+e)}return i};var i=[{type:"whitespace",re:/^[\s]+/},{type:"paren_open",re:/^\(/},{type:"paren_close",re:/^\)/},{type:"square_open",re:/^\[/},{type:"square_close",re:/^]/},{type:"curly_open",re:/^\{/},{type:"curly_close",re:/^\}/},{type:"rest",re:/^\.\.\./},{type:"colon",re:/^:/},{type:"comma",re:/^,/},{type:"identifier",re:/^[a-zA-Z0-9_$]+/}];t.tokenizeParameters=function(e){return t.tokenize(e,i)};var a="~!@#$%^&*-_=+/|:'<,>.?".split("").join("\\"),r=[{type:"whitespace",re:/^[\s]+/},{type:"paren_open",re:/^\(/},{type:"paren_close",re:/^\)/},{type:"number",re:/^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i},{type:"symbol",re:new RegExp("^([$"+a+"][$"+a+"]*)([^\\n\\S]*:(?!:))?")},{type:"identifier",re:new RegExp("^([$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*)([^\\n\\S]*:(?!:))?")}];t.tokenizeDirective=function(e){var i=t.tokenize(e,r).filter(function(e){return"whitespace"!==e.type});return i.forEach(function(e){"number"===e.type&&(e.value=Number(e.value))}),i},t.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}});e(a);a.tokenize,a.tokenizeParameters,a.tokenizeDirective,a.isNumeric;var r=t(function(e,t){function i(e,t,i){var a={value:null,type:"void"};if(i.length<1||e>i.length)return a;for(var r=0,n=0;n<i.length;n++)if(i[n].type===t&&(r+=1),r===e)return i[n];return a}function r(e){if(e.length<1)return[];for(var t,i="",a="",r=e.shift(),n=[];r;){switch(r.type){case"whitespace":a=" ";break;case"comma":a=",";break;case"colon":a=":";break;case"paren_open":a="[",n.push("square");break;case"paren_close":a="]",n.pop();break;case"square_open":a="[",n.push("square");break;case"square_close":a="]",n.pop();break;case"curly_open":a="{",n.push("curly");break;case"curly_close":a="}",n.pop();break;case"rest":t=e.shift(),a=JSON.stringify({__rest:t.value});break;case"identifier":a='"'+r.value+'"',!e[0]||"comma"!==e[0].type&&"square_close"!==e[0].type&&"curly_close"!==e[0].type||(a+="square"===n[n.length-1]?"":':"'+r.value+'"');break;default:a=""}i+=a,r=e.shift()}return JSON.parse(i)}function n(e){for(var t=a.tokenizeParameters(e),i=[],n=0;n<t.length;n++)"whitespace"!==t[n].type&&i.push(t[n]);try{return r(i)}catch(t){return console.warn("Unable to parse signature "+e,t),[]}}function o(e){var t=e.toString();")"===t[t.length-1]&&"("===t[0]&&(t=t.slice(1));var r=t.indexOf("("),o=t.indexOf(")"),s=t.slice(0,r),l=t.slice(r,o+1),u=t.slice(o+1,t.length),c=u.slice(u.indexOf("{")+1,u.length-1).trim(),d={type:u.match(/^\s*=>\s*{/)?"ArrowFunctionExpression":"FunctionExpression",name:i(2,"identifier",a.tokenizeParameters(s)).value,params:n(l),body:c};return e.injectee&&(d.injectee=!0),{__function:d}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o});e(r);var n=t(function(e,t){function i(e,t){if(!e.specification){var i=r.default(e);i&&i.__function?(e.specification=i.__function,t&&(e.specification.params=t)):e.specification=!0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i});e(n);var o=t(function(e,t){function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=e.shift();return"function"!=typeof i?(console.warn("[haiku core] Inject expects a function as the first argument"),i):(e.length>0?n.default(i,e):n.default(i,null),i.injectee=!0,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i});e(o);var s="Haiku Core is a JavaScript library for building user interfaces",l="https://www.haikuforteams.com",u={lib:"lib",dom:"dom",components:"components",dist:"dist"},c="https://github.com/HaikuTeam/core",d=["Matthew Trost <matthew@haiku.ai>","Zack Brown <zack@haiku.ai>","Taylor Poe <taylor@haiku.ai>","Sasha Joseph <sasha@haiku.ai>"],p={"@angular/core":"^6.0.9",async:"^2.5.0",chokidar:"^1.7.0","cross-env":"^5.1.6",depcheck:"^0.6.7",express:"4.14.1",filesize:"3.5.10","fs-extra":"^4.0.2","haiku-testing":"5.1.1",handlebars:"^4.0.8","istanbul-reporter-cobertura-haiku":"^1.0.2",jsdom:"^11.1.0","leaked-handles":"^5.2.0",nodemon:"1.11.0",nyc:"^13.0.1",opn:"^5.3.0",react:"^16.0.0","react-dom":"^16.0.0","react-router-dom":"^4.1.1",rollup:"^0.53.3","rollup-plugin-commonjs":"^8.2.6","rollup-plugin-json":"^2.3.0","rollup-plugin-node-resolve":"^3.0.0","rollup-plugin-uglify-es":"^0.0.1",rxjs:"^6.3.3","tap-spec":"^4.1.2",tape:"^4.9.0","ts-loader":"^4.4.2","ts-node":"^6.1.0","tsconfig-paths":"^3.3.2",tslint:"^5.11.0","tslint-config-haiku":"^1.0.16","tslint-no-circular-imports":"^0.5.0",typescript:"^3.0.3",webpack:"^4.16.0","webpack-cli":"^3.0.8"},f={"@angular/core":"^6.0.9",react:"^16.0.0 || ^15.4.2","react-dom":"^16.0.0 || ^15.4.2"},h={name:"@haiku/core",version:"5.1.1",description:s,homepage:l,directories:u,repository:c,main:"index.js",authors:d,license:"MIT",devDependencies:p,peerDependencies:f},b=Object.freeze({name:"@haiku/core",version:"5.1.1",description:s,homepage:l,directories:u,repository:c,main:"index.js",authors:d,license:"MIT",devDependencies:p,peerDependencies:f,default:h}),k=b&&h||b,m=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a=k.version,r=function(){var e={};return"undefined"!=typeof window?e=window:void 0!==i&&(e=i),e.haiku||(e.haiku={}),e.haiku[a]||(e.haiku[a]={}),e.haiku[a].models||(e.haiku[a].models={}),e.haiku[a].idCounter||(e.haiku[a].idCounter=1e3),e.haiku[a].enhance||(e.haiku[a].enhance=n.default),e.haiku[a].inject||(e.haiku[a].inject=o.default),e.haiku[a]}();t.default=r});e(m);m.default;var y={metadata:{uuid:"4eb0fd7d-7bfe-4dfd-aca5-12ee760ba99b",version:"0.0.7",organization:"jaysonwhelpley",project:"GradientStrokeEminate",branch:"master",folder:"/Users/jw/.haiku/projects/jaysonwhelpley/GradientStrokeEminate",username:"jayson.whelpley@gmail.com",root:"https://cdn.haiku.ai/8fd70b2b-fdbc-4413-b557-ef831ea75e08/9725a8c5a40d2a6c6a2a8f4fc8aba6efe448add1/",core:"5.1.1",title:"Main",type:"haiku",relpath:"code/main/code.js"},options:{},states:{},eventHandlers:{},timelines:{Default:{"haiku:Main-03757d2ca1026e0a":{"style.WebkitTapHighlightColor":"rgba(0,0,0,0)","style.position":"relative","style.overflowX":"hidden","style.overflowY":"hidden","sizeAbsolute.x":1200,"sizeAbsolute.y":1200,"sizeMode.x":1,"sizeMode.y":1,"sizeMode.z":1},"haiku:Logo-16178d17eb9c2f93":{"style.overflow":"visible","sizeAbsolute.x":79.72830200195312,"style.margin":"0","style.padding":"0","style.border":"0","translation.x":601.163,"style.position":"absolute","translation.y":607.0363627319334,"sizeMode.x":1,"sizeAbsolute.y":60.94789123535156,"sizeMode.y":1,"style.zIndex":2,"scale.x":14.072,"scale.y":14.072},"haiku:Paint0-Linear-2db749-75cc2b-0f594893109bef87":{x1:44.8641,y1:6,x2:44.8641,y2:66.9479,gradientUnits:"userSpaceOnUse"},"haiku:Stop-0e1ac4fd3a41c7e2":{stopColor:"#EF3340"},"haiku:Stop-e9c1bd7d1a5d866b":{offset:1,stopColor:"#F8485E"},"haiku:Paint1-Linear-2db749-def9b6caffd2e2f6":{x1:45.5,y1:5,x2:45.5,y2:66.5,gradientUnits:"userSpaceOnUse"},"haiku:Stop-4290870ccece7394":{stopColor:"#EF3340"},"haiku:Stop-0301fb451c3f677c":{offset:1,stopColor:"#F8485E"},"haiku:Group-a9cde5b50f693716":{strokeWidth:2,fill:"none","translation.x":-5,"translation.y":-6},"haiku:Logo-bf6f94a0ea31b08f":{d:"M6.45658 6C5.56499 6.76363 5 7.89762 5 9.16357V40.5562C5 42.3985 6.21081 44.0218 7.97671 44.547L83.0891 66.8852C83.5608 67.0255 84.0335 66.9216 84.3907 66.6603C84.5203 66.5655 84.6346 66.4501 84.7283 66.3181",stroke:"url(#paint0_linear-2db749-75cc2b)",strokeDasharray:{0:{value:121,edited:!0}},strokeDashoffset:{0:{value:0,edited:!0,curve:"linear"},433:{value:82,edited:!0,curve:"linear"},1000:{value:121,edited:!0,curve:"linear"},1433:{value:204,curve:"linear",edited:!0},2000:{value:242,edited:!0}}},"haiku:Logo-2-a4eff6875d061a30":{"style.overflow":"visible","sizeAbsolute.x":79,"style.margin":"0","style.padding":"0","style.border":"0","translation.x":610.113,"style.position":"absolute","translation.y":596.848,"sizeMode.x":1,"sizeAbsolute.y":61.5,"sizeMode.y":1,"style.zIndex":3,"scale.x":14.072,"scale.y":14.072},"haiku:Paint0-Linear-2db749-402f005aae065a44":{x1:44.8641,y1:6,x2:44.8641,y2:66.9479,gradientUnits:"userSpaceOnUse"},"haiku:Stop-08dbf6f7061b7a40":{stopColor:"#EF3340"},"haiku:Stop-74bf532313fc59c8":{offset:1,stopColor:"#F8485E"},"haiku:Paint1-Linear-2db749-Ccd8b1-f93441a688bf504f":{x1:45.5,y1:5,x2:45.5,y2:66.5,gradientUnits:"userSpaceOnUse"},"haiku:Stop-543b0b3e71e9c0ca":{stopColor:"#EF3340"},"haiku:Stop-4f019209b54c61de":{offset:1,stopColor:"#F8485E"},"haiku:Group-c818fc2bdc501fb0":{strokeWidth:2,fill:"none","translation.x":-6,"translation.y":-5},"haiku:Logo-2-4f842787000a202b":{d:"M84.576 66.5C84.8359 66.2353 85 65.8716 85 65.4599V9.16357C85 6.86409 83.1359 5 80.8364 5H9.16357C7.89762 5 6.76363 5.56499 6 6.45658",stroke:"url(#paint1_linear-2db749-ccd8b1)",strokeDasharray:{0:{value:140,edited:!0}},strokeOpacity:{0:{value:1,edited:!0}},strokeDashoffset:{0:{value:0,edited:!0,curve:"linear"},1000:{value:-140,edited:!0,curve:"linear"},2000:{value:-280,edited:!0}}}}},template:{elementName:"div",attributes:{"haiku-id":"Main-03757d2ca1026e0a","haiku-title":"Main"},children:[{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Logo-2-a4eff6875d061a30","haiku-title":"Logo_2","haiku-source":"designs/i7wjcaY9XKegRzARcsMSXL-Untitled.figma.contents/frames/80wide Split.svg#Logo_2#lock"},children:[{elementName:"defs",attributes:{"haiku-id":"Defs-41b7943206f7d7b2"},children:[{elementName:"linearGradient",attributes:{"haiku-id":"Paint0-Linear-2db749-402f005aae065a44",id:"paint0_linear-2db749"},children:[{elementName:"stop",attributes:{"haiku-id":"Stop-08dbf6f7061b7a40"},children:[]},{elementName:"stop",attributes:{"haiku-id":"Stop-74bf532313fc59c8"},children:[]}]},{elementName:"linearGradient",attributes:{"haiku-id":"Paint1-Linear-2db749-Ccd8b1-f93441a688bf504f",id:"paint1_linear-2db749-ccd8b1"},children:[{elementName:"stop",attributes:{"haiku-id":"Stop-543b0b3e71e9c0ca"},children:[]},{elementName:"stop",attributes:{"haiku-id":"Stop-4f019209b54c61de"},children:[]}]}]},{elementName:"g",attributes:{"haiku-id":"Group-c818fc2bdc501fb0"},children:[{elementName:"path",attributes:{"haiku-id":"Logo-2-4f842787000a202b",id:"Logo_2"},children:[]}]}]},{elementName:"svg",attributes:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","haiku-id":"Logo-16178d17eb9c2f93","haiku-title":"Logo","haiku-source":"designs/i7wjcaY9XKegRzARcsMSXL-Untitled.figma.contents/frames/80wide Split.svg#Logo#lock"},children:[{elementName:"defs",attributes:{"haiku-id":"Defs-4b5a6939f664cd89"},children:[{elementName:"linearGradient",attributes:{"haiku-id":"Paint0-Linear-2db749-75cc2b-0f594893109bef87",id:"paint0_linear-2db749-75cc2b"},children:[{elementName:"stop",attributes:{"haiku-id":"Stop-0e1ac4fd3a41c7e2"},children:[]},{elementName:"stop",attributes:{"haiku-id":"Stop-e9c1bd7d1a5d866b"},children:[]}]},{elementName:"linearGradient",attributes:{"haiku-id":"Paint1-Linear-2db749-def9b6caffd2e2f6",id:"paint1_linear-2db749"},children:[{elementName:"stop",attributes:{"haiku-id":"Stop-4290870ccece7394"},children:[]},{elementName:"stop",attributes:{"haiku-id":"Stop-0301fb451c3f677c"},children:[]}]}]},{elementName:"g",attributes:{"haiku-id":"Group-a9cde5b50f693716"},children:[{elementName:"path",attributes:{"haiku-id":"Logo-bf6f94a0ea31b08f",id:"Logo"},children:[]}]}]}]}};return t(function(e){function t(){return console.error('[haiku core] core version 5.1.1 seems to be missing. index.embed.js expects it at window.HaikuCore["5.1.1"], but we cannot find it. you may need to add a <script src="path/to/HaikuCore.js"><\/script> to fix this.'),y}var i=window.HaikuResolve&&window.HaikuResolve("5.1.1");if(i)e.exports=i(y);else{for(var a in y)t[a]=y[a];e.exports=t}})}();
