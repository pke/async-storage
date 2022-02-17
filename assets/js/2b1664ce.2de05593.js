"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[4],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4419:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"limits",title:"Known storage limits",sidebar_label:"Known limits"},c=void 0,l={unversionedId:"limits",id:"limits",title:"Known storage limits",description:"Android",source:"@site/docs/Limits.md",sourceDirName:".",slug:"/limits",permalink:"/async-storage/docs/limits",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/Limits.md",tags:[],version:"current",frontMatter:{id:"limits",title:"Known storage limits",sidebar_label:"Known limits"},sidebar:"docs",previous:{title:"API",permalink:"/async-storage/docs/api"},next:{title:"Next storage implementation",permalink:"/async-storage/docs/advanced/next"}},p=[{value:"Android",id:"android",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("p",null,"AsyncStorage for Android uses SQLite for storage backend. While it has ",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlite.org/limits.html"},"its own size limits"),", Android system also have two known limits: total storage size and per-entry size limit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Total storage size is capped at 6 MB by default. You can increase this size by ",(0,i.kt)("a",{parentName:"p",href:"/async-storage/docs/advanced/db_size"},"specifying a new size using feature flag.")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Per-entry is limited by a size of a WindowCursor, a buffer used to read data from SQLite. ",(0,i.kt)("a",{parentName:"p",href:"https://cs.android.com/android/platform/superproject/+/master:frameworks/base/core/res/res/values/config.xml;l=2103"},"Currently it's size is around 2 MB"),".\nThis means that the single item read at one time cannot be larger than 2 MB. There's no supported workaround from AsyncStorage.\nWe suggest keeping your data lower than that, by chopping it down into many entries, instead of one massive entry.\nThis is where ",(0,i.kt)("a",{parentName:"p",href:"/async-storage/docs/api#multiget"},(0,i.kt)("inlineCode",{parentName:"a"},"multiGet"))," and ",(0,i.kt)("a",{parentName:"p",href:"/async-storage/docs/api#multiset"},(0,i.kt)("inlineCode",{parentName:"a"},"multiSet"))," APIs can shine."))))}d.isMDXComponent=!0}}]);