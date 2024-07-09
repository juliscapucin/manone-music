(()=>{"use strict";var r,e={568:()=>{const r=window.wp.blocks,e=window.wp.blockEditor,o=window.wp.data,t=window.wp.components,n=window.ReactJSXRuntime,l=JSON.parse('{"UU":"manonemusic/track"}');(0,r.registerBlockType)(l.UU,{edit:function({attributes:r,setAttributes:l}){const a=(0,e.useBlockProps)({className:"mt-8",style:{width:"90%"}}),{tracklist:s}=r,c=(0,o.useSelect)((r=>{const{getEntityRecords:e}=r("core");return e("postType","release",{per_page:-1,_embed:!0,order:"desc"})}),[]);return c?(console.log(c),(0,n.jsxs)("div",{...a,children:[s.map(((r,e)=>(0,n.jsx)("div",{style:e>0?{marginTop:"1rem"}:{},children:(0,n.jsxs)(t.Flex,{children:[(0,n.jsx)(t.FlexBlock,{children:(0,n.jsx)(t.TextControl,{label:"Track name:",autoFocus:null==r.name,value:r.name,onChange:r=>((r,e)=>{const o=[...s];o[r]={...o[r],name:e},l({tracklist:o})})(e,r),style:{color:"var(--color-secondary)",backgroundColor:"var(--color-primary)"}})}),(0,n.jsx)(t.FlexBlock,{children:(0,n.jsx)(t.TextControl,{label:"Track link:",value:r.url,onChange:r=>((r,e)=>{const o=[...s];o[r]={...o[r],url:e},l({tracklist:o})})(e,r),style:{color:"var(--color-secondary)",backgroundColor:"var(--color-primary)"}})}),(0,n.jsx)(t.FlexItem,{children:(0,n.jsx)(t.Button,{onClick:()=>(r=>{const e=[...s];e.splice(r,1),l({tracklist:e})})(e),variant:"link",style:{color:"var(--color-secondary)"},children:"Remove Track"})})]})},`trackInput-${e}`))),(0,n.jsx)(t.Button,{onClick:()=>{l({tracklist:s.concat({title:void 0,url:""})})},variant:"primary",icon:"plus-alt",style:{margin:"1.5rem auto 0 auto",display:"flex",padding:"0 5rem"},children:"Add New Track"})]})):(0,n.jsx)("div",{children:"Loading..."})},save:function(){const r=e.useBlockProps.save();return(0,n.jsx)("div",{...r})}})}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var l=o[r]={exports:{}};return e[r](l,l.exports,t),l.exports}t.m=e,r=[],t.O=(e,o,n,l)=>{if(!o){var a=1/0;for(d=0;d<r.length;d++){for(var[o,n,l]=r[d],s=!0,c=0;c<o.length;c++)(!1&l||a>=l)&&Object.keys(t.O).every((r=>t.O[r](o[c])))?o.splice(c--,1):(s=!1,l<a&&(a=l));if(s){r.splice(d--,1);var i=n();void 0!==i&&(e=i)}}return e}l=l||0;for(var d=r.length;d>0&&r[d-1][2]>l;d--)r[d]=r[d-1];r[d]=[o,n,l]},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r={5:0,729:0};t.O.j=e=>0===r[e];var e=(e,o)=>{var n,l,[a,s,c]=o,i=0;if(a.some((e=>0!==r[e]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(c)var d=c(t)}for(e&&e(o);i<a.length;i++)l=a[i],t.o(r,l)&&r[l]&&r[l][0](),r[l]=0;return t.O(d)},o=globalThis.webpackChunkmanonemusic=globalThis.webpackChunkmanonemusic||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var n=t.O(void 0,[729],(()=>t(568)));n=t.O(n)})();