(function(t){function e(e){for(var a,i,o=e[0],r=e[1],c=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&f.push(l[i][0]),l[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var r=s[i];0!==l[r]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},l={app:0},n=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"40bdb918"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=l[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=l[t]=[e,a]}));e.push(s[2]=a);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=i(t);var c=new Error;n=function(e){r.onerror=r.onload=null,clearTimeout(u);var s=l[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,s[1](c)}l[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:r})}),12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/my_profile/",o.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"4a85":function(t,e,s){},5465:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-screen min-h-screen bg-teritary text-gray-400 home",attrs:{id:"app"}},[s("div",{staticClass:"flex flex-col md:flex-row p-6 md:p-0"},[s("div",{staticClass:"bg-gray-900 md:w-2/12 xl:w-1/12 md:fixed"},[s("navigation")],1),s("div",{staticClass:"min-h-screen w-full md:w-10/12 xl:w-11/12 ml-auto"},[s("router-view")],1)])])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"h-full flex flex-col md:h-screen"},[a("div",[a("div",{staticClass:"my-5 w-full flex flex-row justify-between items-center md:mt-10 md:flex-col"},[a("div",{staticClass:"ml-4 md:mx-auto"},[a("img",{staticClass:"w-16 h-16 sm:w-14 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full",attrs:{src:s("ee1b"),alt:"Wael Ali foto"},on:{click:t.goToHomePage}})]),a("div",{staticClass:"mr-4 md:mx-auto md:mt-10"},[t.navIsOpen?t._e():a("div",[a("span",{staticClass:"text-3xl",on:{click:t.toggleNav}},[a("font-awesome-icon",{attrs:{icon:"bars",title:"Home"}})],1)]),t.navIsOpen?a("div",[a("span",{staticClass:"text-3xl",on:{click:t.toggleNav}},[a("font-awesome-icon",{attrs:{icon:"times",title:"Home"}})],1)]):t._e(),a("div",[a("h3",[t._v(t._s(t.windowWidth))])])])])]),a("div",{staticClass:"md:h-full"},[t.navIsOpen?a("div",{staticClass:"flex flex-col items-center justify-center"},[a("router-link",{staticClass:"text-center p-2 text-3xl",attrs:{to:"/"}},[a("font-awesome-icon",{attrs:{icon:"home",title:"Home"},on:{click:function(e){return t.toggleNav("navbar-icon")}}})],1),a("router-link",{staticClass:"text-center p-2 text-3xl",attrs:{to:"/about"}},[a("font-awesome-icon",{attrs:{icon:"user",title:"About"},on:{click:function(e){return t.toggleNav("navbar-icon")}}})],1),a("router-link",{staticClass:"text-center p-2 text-3xl",attrs:{to:"skills"}},[a("font-awesome-icon",{attrs:{icon:"id-card",title:"Skills"},on:{click:function(e){return t.toggleNav("navbar-icon")}}})],1),a("router-link",{staticClass:"text-center p-2 text-3xl",attrs:{to:"/contact"}},[a("font-awesome-icon",{attrs:{icon:"envelope",title:"Contact Me"},on:{click:function(e){return t.toggleNav("navbar-icon")}}})],1)],1):t._e()]),a("div",{staticClass:"mt-auto"},[a("div",{staticClass:"md:mb-10 flex justify-center"},[a("a",{staticClass:"text-center p-2 text-3xl",attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:["fab","xing-square"]}})],1),a("a",{staticClass:"text-center p-2 text-3xl",attrs:{href:"https://www.linkedin.com/in/wael-ali-b99a61162"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),a("a",{staticClass:"text-center p-2 text-3xl",attrs:{href:"https://github.com/wael-ali"}},[a("font-awesome-icon",{attrs:{icon:["fab","git-square"]}})],1)])])])])},o=[],r={name:"Navigation",data:function(){return{navIsOpen:!1,windowWidth:window.innerWidth}},methods:{goToHomePage:function(){this.$router.push({name:"Home"})},toggleNav:function(t){switch(t){case"navbar-icon":this.windowWidth<768&&(this.navIsOpen=!this.navIsOpen);break;default:this.navIsOpen=!this.navIsOpen;break}}},mounted:function(){var t=this;window.onresize=function(){t.windowWidth=window.innerWidth,window.innerWidth<768?t.navIsOpen=!1:t.navIsOpen=!0}}},c=r,u=(s("f95b"),s("2877")),d=Object(u["a"])(c,i,o,!1,null,"6bd6afdc",null),f=d.exports,m={name:"App",components:{Navigation:f}},v=m,p=(s("a5d2"),Object(u["a"])(v,l,n,!1,null,null,null)),b=p.exports,g=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full min-h-screen flex justify-center items-center"},[s("div",{staticClass:"w-full ml-10 md:ml-20"},[s("div",[t._m(0),s("p",{staticClass:"mb-20 tracking-widest font-semibold"},[t._v("Fullstack Developer / Back End Developer")]),s("p",[s("span",{staticClass:"contact_me_btn border-2 border-green-600 text-green-600 tracking-widest font-semibold rounded cursor-pointer py-3 px-12 md:px-20",on:{click:t.goToContactPage}},[t._v("Contact me!")])])])])])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"mb-10 text-3xl md:text-7xl font-semibold leading-tight italic"},[t._v(" Hi, "),s("br"),t._v(" I'm Wael Ali, "),s("br"),t._v(" web developer ")])}],C={name:"Home",components:{},methods:{goToContactPage:function(){this.$router.push({name:"contact"})}}},x=C,_=(s("877b"),Object(u["a"])(x,h,w,!1,null,"7f593ea5",null)),y=_.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-full flex flex-col lg:flex-row items-center justify-center md:p-5"},[t._m(0),s("div",{staticClass:"w-full"},[s("div",{staticClass:"lg:w-3/4 mx-auto"},[t._m(1),t._m(2),t._m(3),s("div",{staticClass:"w-full text-right"},[s("span",{staticClass:"contact_me_btn py-3  p-10 md:px-20 border-2 border-green-600 text-green-600 tracking-widest font-semibold rounded cursor-pointer",on:{click:t.sendMessage}},[t._v("Contact me!")])])])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-8 lg:ml-20 w-full"},[s("h2",{staticClass:"mb-10 text-4xl lg:text-7xl font-semibold leading-tight text-green-600 italic"},[t._v(" Contact Me ")]),s("p",{staticClass:"tracking-widest font-semibold italic"},[t._v(" I’m open for new opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full flex mb-2"},[s("div",{staticClass:"w-full mr-1"},[s("input",{staticClass:"w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold",attrs:{type:"text",placeholder:"Name"}})]),s("div",{staticClass:"w-full ml-1"},[s("input",{staticClass:"w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold",attrs:{type:"text",placeholder:"Email"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full mb-2"},[s("input",{staticClass:"w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold",attrs:{type:"text",placeholder:"Subject"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full mb-10"},[s("textarea",{staticClass:"w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold",attrs:{rows:"5",placeholder:"Messge"}})])}],j={name:"Contact",methods:{sendMessage:function(){alert("Sorry, Not Implemented yet!!, please use Linkedin")}}},E=j,$=(s("b15e"),Object(u["a"])(E,k,O,!1,null,"6bbed5a9",null)),P=$.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-full flex flex-col  md:flex-row items-center justify-center"},[t._m(0),s("div",{staticClass:"w-full md:w-4/6  lg:w-3/6 md:h-3/4"},[s("div",{staticClass:"md:p-4 lg:p-20 w-full h-full"},[s("div",{staticClass:"h-1/6 flex flex-row text-center items-center nav font-semibold tracking-widest italic bg-gray-900 rounded"},[s("div",{staticClass:"w-full p-4"},[s("router-link",{staticClass:"w-full text-center md:p-2 cursor-pointer",attrs:{to:"/skills/backend"}},[t._v(" Back-End ")])],1),s("div",{staticClass:"w-full p-4"},[s("router-link",{staticClass:"w-full text-center md:p-2 cursor-pointer",attrs:{to:"/skills/frontend"}},[t._v(" Front-End ")])],1),s("div",{staticClass:"w-full p-4"},[s("router-link",{staticClass:"w-full text-center md:p-2 cursor-pointer",attrs:{to:"/skills/other"}},[t._v(" Other ")])],1)]),s("div",{staticClass:"h-5/6 overflow-auto border-l-4 border-gray-900 p-1"},[s("router-view")],1)])])])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full md:pl-5 lg:pl-20 md:w-2/6 lg:w-3/6"},[s("h1",{staticClass:"mt-10 mb-10 text-3xl lg:text-5xl font-semibold leading-tight italic"},[t._v(" Skills &"),s("br"),t._v(" experience ")])])}],I={name:"Skills",components:{}},N=I,T=(s("df2e"),Object(u["a"])(N,S,H,!1,null,null,null)),M=T.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-full flex place-items-center"},[s("div",{staticClass:"mt-20 md:ml-20"},[t._m(0),s("p",{staticClass:"my-10 text-2xl font-semibold leading-snug italic"},[t._v("The link you clicked may be broken or the page may have been removed.")]),s("p",{staticClass:"my-10 text-2xl font-semibold leading-snug italic text-green-600 cursor-pointer"},[s("span",{on:{click:t.goHome}},[t._v("Return Home?!")])])])])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"mb-10 lg:text-7xl font-semibold leading-snug italic"},[s("span",{staticClass:"text-8xl text-pink-700"},[t._v("404")]),s("br"),s("span",{staticClass:"border-b-4 border-pink-700 pb-3"},[t._v("Page Not Found!!")])])}],q={name:"PageNotFound",components:{},methods:{goHome:function(){this.$router.push("/")}}},B=q,D=Object(u["a"])(B,W,A,!1,null,null,null),F=D.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-full"},[s("div",{staticClass:"p-4 lg:p-8 font-semibold tracking-widest italic"},[s("div",{staticClass:"mb-10"},[s("div",[t._v("Express")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-9/12 bg-purple-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("Symfony")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-10/12 bg-yellow-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("MySQL")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-9/12 bg-yellow-300 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("MongoDB")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-5/12 bg-green-700 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("Rails")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-4/12 bg-red-900 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("Docker")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-5/12 bg-blue-600 h-full"})])])])])}],R={name:"Backend",components:{}},G=R,Q=Object(u["a"])(G,L,J,!1,null,null,null),z=Q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-full"},[s("div",{staticClass:"p-4 lg:p-8 font-semibold tracking-widest italic"},[s("div",{staticClass:"mb-10"},[s("div",[t._v("Vuejs")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-10/12 bg-green-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("HTML")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-10/12 bg-pink-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("CSS")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-8/12 bg-yellow-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("Tailwind")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-5/12 bg-purple-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("React")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-6/12 bg-red-500 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("Bootstrap")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-8/12 bg-blue-500 h-full"})])])])])}],U={name:"Frontend",components:{}},X=U,Y=Object(u["a"])(X,V,K,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-full"},[s("div",{staticClass:"p-4 lg:p-8 font-semibold tracking-widest italic"},[s("div",{staticClass:"mb-10"},[s("div",[t._v("JS/NODE")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-10/12 bg-pink-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("PHP")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-10/12 bg-green-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("GIT")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-6/12 bg-red-500 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("Ruby")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-5/12 bg-yellow-600 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("GraphQl")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-6/12 bg-blue-500 h-full"})])]),s("div",{staticClass:"mb-10"},[s("div",[t._v("Java")]),s("div",{staticClass:"w-full h-1 bg-gray-700"},[s("div",{staticClass:"w-6/12 bg-pink-900 h-full"})])])])])}],st={name:"Other",components:{}},at=st,lt=Object(u["a"])(at,tt,et,!1,null,null,null),nt=lt.exports;a["a"].use(g["a"]);var it=[{path:"/",name:"Home",component:y},{path:"/contact",name:"contact",component:P},{path:"/skills",name:"skills",component:M,children:[{name:"backend-skills",path:"backend",component:z},{name:"frontend-skills",path:"frontend",component:Z},{name:"other-skills",path:"other",component:nt}]},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/:catchAll(.*)*",name:"404",component:F}],ot=new g["a"]({mode:"history",base:"/my_profile/",routes:it});ot.beforeEach((function(t,e,s){"/skills"===t.path||"/skills/skills"===t.path?s({name:"backend-skills"}):s()}));var rt=ot,ct=s("2f62");a["a"].use(ct["a"]);var ut=new ct["a"].Store({state:{},mutations:{},actions:{},modules:{}}),dt=s("ecee"),ft=s("f2d1"),mt=s("c074"),vt=s("ad3d");s("a2f0");dt["c"].add(mt["c"],mt["f"],mt["d"],mt["b"],ft["a"],ft["c"],ft["d"],ft["b"],mt["a"],mt["e"]),a["a"].component("font-awesome-icon",vt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:rt,store:ut,render:function(t){return t(b)}}).$mount("#app")},"85aa":function(t,e,s){},"877b":function(t,e,s){"use strict";s("85aa")},a2f0:function(t,e,s){},a5d2:function(t,e,s){"use strict";s("5465")},b15e:function(t,e,s){"use strict";s("fad6")},df2e:function(t,e,s){"use strict";s("e841")},e841:function(t,e,s){},ee1b:function(t,e,s){t.exports=s.p+"img/my_github_imag.1f8f945f.jpeg"},f95b:function(t,e,s){"use strict";s("4a85")},fad6:function(t,e,s){}});
//# sourceMappingURL=app.f0fad92b.js.map