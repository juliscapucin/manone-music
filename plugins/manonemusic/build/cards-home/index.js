(()=>{"use strict";var e,l={739:()=>{const e=window.wp.blocks,l=window.wp.element,o=window.wp.blockEditor,r=window.wp.components,t=window.wp.data,s=window.ReactJSXRuntime,a=JSON.parse('{"UU":"manonemusic/cards-home"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const n=(0,o.useBlockProps)({className:"absolute bottom-8 w-full flex gap-16 mt-16"}),{aspectRatio:i,section:c}=e,p=(0,t.useSelect)((e=>{const{getEntityRecords:l}=e("core");return l("postType",c,{per_page:-1,_embed:!0,order:"desc"})}),[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.InspectorControls,{children:(0,s.jsx)(r.PanelBody,{title:"Settings",children:(0,s.jsx)(r.SelectControl,{label:"Select section",value:c,options:[{value:"film",label:"Films"},{value:"commercial",label:"Commercials"},{value:"project",label:"Projects"},{value:"release",label:"Releases"}],onChange:function(e){console.log(e),a({aspectRatio:"release"===e?"aspect-square":"film"===e?"aspect-[6/8.5]":"commercial"===e?"aspect-video":"project"===e?"aspect-[16/9]":"",section:e})}})})}),(0,s.jsx)("div",{...n,children:p&&p.length>0&&p.map((e=>(0,s.jsxs)("div",{className:"relative inline-block w-40 min-w-40 max-w-40 h-64",children:[(0,s.jsx)("div",{className:`overflow-clip ${i}`,children:(0,s.jsx)("img",{className:"w-full h-full object-cover",src:e._embedded["wp:featuredmedia"][0].source_url})}),(0,s.jsx)("p",{className:"",children:(0,s.jsx)(l.RawHTML,{children:e.title.rendered})})]})))})]})},save:function(){return null}})}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={exports:{}};return l[e](s,s.exports,r),s.exports}r.m=l,e=[],r.O=(l,o,t,s)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,t,s]=e[p],n=!0,i=0;i<o.length;i++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(n=!1,s<a&&(a=s));if(n){e.splice(p--,1);var c=t();void 0!==c&&(l=c)}}return l}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[o,t,s]},r.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={689:0,877:0};r.O.j=l=>0===e[l];var l=(l,o)=>{var t,s,[a,n,i]=o,c=0;if(a.some((l=>0!==e[l]))){for(t in n)r.o(n,t)&&(r.m[t]=n[t]);if(i)var p=i(r)}for(l&&l(o);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(p)},o=globalThis.webpackChunkmanonemusic=globalThis.webpackChunkmanonemusic||[];o.forEach(l.bind(null,0)),o.push=l.bind(null,o.push.bind(o))})();var t=r.O(void 0,[877],(()=>r(739)));t=r.O(t)})();