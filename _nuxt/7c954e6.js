(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,6,11],{457:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("b622c348",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";n.r(e);var l={props:{label:{type:String,default:""}}},c=(n(460),n(54)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"label"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),e("div",{staticClass:"divider"})])}),[],!1,null,"8a5c87b8",null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var l=n(54),component=Object(l.a)({},(function(){return(0,this._self._c)("div",{staticStyle:{"margin-bottom":"30px"}})}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,n){"use strict";n(457)},461:function(t,e,n){var l=n(89)((function(i){return i[1]}));l.push([t.i,'.label[data-v-8a5c87b8]{font-family:"Karla",sans-serif;font-size:14px;font-weight:900;padding-bottom:5px}.divider[data-v-8a5c87b8]{border-bottom-color:#e6e6e6;border-bottom-width:2px;margin-bottom:5px}',""]),l.locals={},t.exports=l},470:function(t,e,n){"use strict";n.r(e);var l={props:{content:{type:Object,default:function(t){return{}}}}},c=n(54),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col mb-8 text-sm"},[e("div",{staticClass:"font-bold"},[t._v("\n    "+t._s(t.$moment(t.content.start).format("MM/YYYY"))+"-"+t._s(t.$moment(t.content.end).format("MM/YYYY"))+"\n  ")]),t._v(" "),e("div",{staticClass:"mb-3"},[t._v(t._s(t.content.company))]),t._v(" "),e("div",{staticClass:"font-bold"},[t._v("Duties:")]),t._v(" "),e("ul",{staticClass:"list-disc ml-8 mb-1"},t._l(t.content.duties,(function(n,l){return e("li",{key:l},[t._v("\n      "+t._s(n)+"\n    ")])})),0),t._v(" "),e("div",{staticClass:"font-bold"},[t._v("Achievements:")]),t._v(" "),e("ul",{staticClass:"list-disc ml-8 mb-1"},t._l(t.content.achievements,(function(n,l){return e("li",{key:l},[t._v("\n      "+t._s(n)+"\n    ")])})),0),t._v(" "),e("div",{staticClass:"font-bold"},[t._v("Used Skills:")]),t._v(" "),e("ul",{staticClass:"list-disc ml-8 mb-1"},t._l(t.content.skills,(function(n,l){return e("li",{key:l},[t._v("\n      "+t._s(n)+"\n    ")])})),0)])}),[],!1,null,"0d23c8fd",null);e.default=component.exports},481:function(t,e,n){"use strict";n.r(e);var l={props:{contents:{type:Object,default:function(t){return{}}}}},c=n(54),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{},[e("cv-divider",{attrs:{label:"Work Experience"}}),t._v(" "),t._l(t.contents.experiences,(function(t,n){return e("cv-experience-section",{key:n,attrs:{content:t}})})),t._v(" "),e("cv-space")],2)}),[],!1,null,"6920fd21",null);e.default=component.exports;installComponents(component,{CvDivider:n(458).default,CvExperienceSection:n(470).default,CvSpace:n(459).default})}}]);