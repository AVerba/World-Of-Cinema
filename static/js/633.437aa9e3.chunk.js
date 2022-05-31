/*! For license information please see 633.437aa9e3.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[633],{121:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var n="MovieList_movieList__my-cM",a={item:"MovieItem_item__2i96U",link:"MovieItem_link__aU3NQ",title:"MovieItem_title__VyjTF",itemImage:"MovieItem_itemImage__Z3Jes"},i=r(501),c=r(871),o=r(13),s=r(184),u=function(e){var t=e.movie,r=(0,c.TH)(),n=t.id,u=t.poster_path,l=t.original_title;return(0,s.jsx)("li",{className:a.item,children:(0,s.jsxs)(i.rU,{to:"/movies/".concat(n),state:{from:r},className:a.link,children:[(0,s.jsx)("div",{className:a.poster,children:null!==u?(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:"https://themoviedb.org/t/p/w500".concat(u),media:"(min-width: 1024px)"}),(0,s.jsx)("source",{srcSet:"https://themoviedb.org/t/p/w342".concat(u),media:"(min-width: 768px)"}),(0,s.jsx)("img",{alt:l,className:a.itemImage,loading:"lazy",src:"https://themoviedb.org/t/p/w342".concat(u)})]}):(0,s.jsx)("img",{className:a.itemImage,src:o,alt:"no poster",loading:"lazy"})}),(0,s.jsx)("div",{className:a.title,children:(0,s.jsx)("h3",{className:a.title,children:l})})]})})},l=function(e){var t=e.movies;return(0,s.jsx)("ul",{className:n,children:t.map((function(e){return(0,s.jsx)(u,{movie:e},e.id)}))})}},633:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n=r(907);var a=r(181);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r(37),o={btnLoad:"MoviePage_btnLoad__qcOIS",galaryTitle:"MoviePage_galaryTitle__p3orF"},s=r(791),u="SearchBar_SearchBar__q2sB9",l="SearchBar_SearchForm__4Mcy1",f="SearchBar_searchBtn__HgyPZ",m="SearchBar_searchBtnLabel__GJOyo",p="SearchBar_searchInput__v-aOh",v=r(562),h=r(501),A=r(184),d=function(e){var t,r=e.onSubmit,n=(0,h.lr)({}),a=(0,c.Z)(n,2),i=a[0],o=(a[1],(0,s.useState)(null!==(t=i.get("query"))&&void 0!==t?t:"")),d=(0,c.Z)(o,2),j=d[0],b=d[1];return(0,A.jsx)("div",{className:u,children:(0,A.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===j.trim())return v.Notify.warning("Please enter a search query");r(j)},className:l,children:[(0,A.jsx)("button",{type:"submit",className:f,children:(0,A.jsx)("span",{className:m,children:"Search"})}),(0,A.jsx)("input",{type:"text",name:"searchQuery",autoComplete:"off",placeholder:"Search movies",className:p,value:j,onChange:function(e){b(e.currentTarget.value.toLowerCase())}})]})})},j=r(121),b=r(528),w=r(700),g=r(529),M="Button_buttonLoad__QhWtS",I=r(694),x=r.n(I),y=function(e){var t=e.className,r=e.title,n=e.onClick,a=x()(M,t);return(0,A.jsx)("button",{type:"button",onClick:n,className:a,children:r})},N={},k=function(e){var t=e.className,r=e.title,n=x()(N.container,t);return(0,A.jsx)("h1",{className:n,children:r})},Z="idle",Q="pending",O="resolved",Y="rejected",H=function(){var e,t,r=(0,h.lr)({}),n=(0,c.Z)(r,2),a=n[0],u=n[1],l=(0,s.useState)(null!==(e=a.get("query"))&&void 0!==e?e:""),f=(0,c.Z)(l,2),m=f[0],p=f[1],M=(0,s.useState)([]),I=(0,c.Z)(M,2),x=I[0],N=I[1],H=(0,s.useState)(Z),S=(0,c.Z)(H,2),z=S[0],C=S[1],F=(0,s.useState)(null),W=(0,c.Z)(F,2),B=W[0],D=W[1],q=(0,s.useState)(null!==(t=a.get("page"))&&void 0!==t?t:1),L=(0,c.Z)(q,2),E=L[0],R=L[1],U=(0,s.useState)(0),P=(0,c.Z)(U,2),K=P[0],T=P[1];(0,s.useEffect)((function(){m&&(G(m,E),C(Q))}),[m,E]),(0,s.useEffect)((function(){u({query:m,page:E})}),[m,E]);var G=function(e,t){b.Z.fetchSearchMovies(e,t).then((function(e){var t=e.results,r=e.total_results;N((function(e){return[].concat(i(e),i(t))})),C(O),T(r)})).catch((function(e){D(e),C(Y)}))};return(0,A.jsx)(w.W,{children:(0,A.jsxs)("div",{className:o.movies,children:[(0,A.jsx)(d,{onSubmit:function(e){N([]),T(0),R(1),p(e)}}),"idle"===z?(0,A.jsx)(k,{className:o.galaryTitle,title:"No search results yet. Please enter a request"}):null,"pending"===z?(0,A.jsx)(g.Z,{}):null,"rejected"===z?v.Notify.warning("".concat(B.message)):null,"resolved"===z?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j.e,{movies:x}),x.length<K?(0,A.jsx)(y,{className:o.btnLoad,title:"Load more",onClick:function(){R(E+1)}}):(0,A.jsx)(k,{className:o.galaryTitle,title:"no more images from request"})]}):null]})})}},528:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(861),a=r(757),i=r.n(a),c="eb148ce88b4706c0ea240b2da392d66f",o="https://api.themoviedb.org/3",s=r(562),u=o,l=c,f=function(){var e=(0,n.Z)(i().mark((function e(t,r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/search/movie?query=").concat(t,"&api_key=").concat(l,"&page=").concat(r));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.abrupt("return",s.Notify.failure("Sorry, but not found movie like ".concat(t)));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/trending/movie/week?api_key=").concat(l));case 2:if(!(t=e.sent).ok){e.next=5;break}return e.abrupt("return",t.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(l));case 2:if(!(r=e.sent).ok){e.next=5;break}return e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(l));case 2:if(!(r=e.sent).ok){e.next=5;break}return e.abrupt("return",r.json());case 5:return e.abrupt("return",s.Notify.failure("Oops, an error occurred"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(l));case 2:if(!(r=e.sent).ok){e.next=5;break}return e.abrupt("return",r.json());case 5:return e.abrupt("return",s.Notify.failure("Oops, an error occurred"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(l));case 2:if(!(r=e.sent).ok){e.next=5;break}return e.abrupt("return",r.json());case 5:return e.abrupt("return",s.Notify.failure("Oops, an error occurred"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchSearchMovies:f,fetchTrendsMovies:m,fetchMovieById:p,fetchMovieDetails:A,fetchReviewsMovies:h,fetchCastMovie:v}},694:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},13:function(e){"use strict";e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=633.437aa9e3.chunk.js.map