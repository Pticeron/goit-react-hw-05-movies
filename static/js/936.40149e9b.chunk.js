"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{155:function(t,e,r){r.d(e,{Z:function(){return i}});var n="MoviesList_movielink__oFut4",a="MoviesList_link__8rTGX",u=r(689),c=r(87),s=r(184),i=function(t){var e=t.movies,r=(0,u.TH)();return(0,s.jsx)("ul",{children:e&&e.map((function(t){var e=t.id,u=t.title;return(0,s.jsx)("li",{className:n,children:(0,s.jsx)(c.rU,{className:a,to:"/movies/".concat(e),state:{from:r},children:u})},e)}))})}},936:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(623),o=r(447),f=r(155),p="Home_title__L087v",v=r(184),l=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],l=(0,s.useState)(null),m=(0,a.Z)(l,2),d=m[0],h=m[1],x=(0,s.useState)(!1),w=(0,a.Z)(x,2),g=w[0],k=w[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.prev=1,t.next=4,(0,i.wr)();case 4:e=t.sent,r=e.results,u(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),h(t.t0.message);case 12:return t.prev=12,k(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)("main",{children:[g&&(0,v.jsx)(o.Z,{}),(0,v.jsx)("h1",{className:p,children:"Tranding today"}),r&&(0,v.jsx)(f.Z,{movies:r}),d&&(0,v.jsx)("p",{children:"Something goes wrong"})]})}},623:function(t,e,r){r.d(e,{Hx:function(){return v},Y5:function(){return f},wr:function(){return i},xc:function(){return p},yA:function(){return s},z1:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"0d7a3e0f2906a3f05e73804ba320517e",language:"en-US"}}),s="https://image.tmdb.org/t/p/w500",i=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:{page:1,include_adult:!1,query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.40149e9b.chunk.js.map