if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.8f23b0495fdcd2b57471.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/a9a7754c.aa86e5e828906282ca26.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/cb1608f2.157d5be34b1f49790edb.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/commons.33d02d25597a4e49a335.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.78b1f4d192c9f28dbab2.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/framework.b819460669eea2cbcf84.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/main-30724ef9bc88adfc04e7.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/pages/_app-281b9ac0125707c06ec9.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/pages/_error-6f69f1fed9a00b04d108.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/pages/index-bb986ea9883cbddfde7f.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/polyfills-88dcbd1e90ad4b1a5d14.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/css/6549c3e7128d15bd8b76.css",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/iym1ZzfNKvY7OqPqh5Qc8/_buildManifest.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/_next/static/iym1ZzfNKvY7OqPqh5Qc8/_ssgManifest.js",revision:"iym1ZzfNKvY7OqPqh5Qc8"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/apple-icon-180.png",revision:"34d071c10d282ca831ebb54b39f3b724"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"61f75631963b5f7026d0dc14eaab3c74"},{url:"/icons/apple-splash-1136-640.jpg",revision:"8c8a5ada7f1ba919afe30d81e815b6ff"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"4061d97b6a274457a6a1513bb767c0b7"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"bf69ffe7ebabfcc132770e354593e449"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"35d28c42d9b4b62e73ce6f1d8ca9cd42"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"a8bb0a26952171650264f4cdb5707b9c"},{url:"/icons/apple-splash-1334-750.jpg",revision:"02f74191d7e1181cff2d8a61cc6d2d65"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"2ee7cf3dfe1083ae46a3935a620c29ea"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"b282c56dfca6d44d629dbe0752e83517"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"6bb12cb518b9bff0f325a7b6a81e74a1"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"5acc2817a4ccf1f4f31ec15003cf900e"},{url:"/icons/apple-splash-1792-828.jpg",revision:"96723854358e7c2c0a620adfdfa19e6f"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"c3e5be22873f032b52829bee54c4b429"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"4548a3de60bfdfadb11956ffe474a9d7"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"915ba7bad647eacf7f1b4a5e3a181107"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"3152b92ac364b4c5d248af840cdcdd96"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"d337f501c82ced7498c9e2ca15bcf167"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"0ae5b220752b52d004c879b11298bb0d"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"964d6514dc621f1dd79eafc75b504568"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"7c6b0cd38cf34054b499d529291fcf9d"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"a462234ee697718dd89b09f971ed4c8b"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"30e25026e811cfdf98630d639d71c0a0"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"7c1e70829d8e3fae34d112f556d8d06d"},{url:"/icons/apple-splash-640-1136.jpg",revision:"44590216b16343a461eedbc9f4aab36f"},{url:"/icons/apple-splash-750-1334.jpg",revision:"92be2e7e056706f6bcccf03c58ba3c40"},{url:"/icons/apple-splash-828-1792.jpg",revision:"c7ae65bdc4530ae287eee8ab410091a0"},{url:"/icons/manifest-icon-192.png",revision:"3bc9e9f0b82fefb3f8e00249c63413af"},{url:"/icons/manifest-icon-512.png",revision:"bcf7b977b852bf042014e8a73c7cb7b4"},{url:"/images/certificates/CSS Fundamental Course-min.jpg",revision:"cdc8c4a876b49301a50df523732861c9"},{url:"/images/certificates/Data Visualization - Dicoding.jpg",revision:"ad631feb4acb5801f6207006ea85a46c"},{url:"/images/certificates/HTML Fundamental Course-min.jpg",revision:"392c46210eefc53b8c093d3e068d69eb"},{url:"/images/certificates/JavaScript Fundamental - Dicoding.jpg",revision:"1d0fe4b4ba463bca7af0399b19c17785"},{url:"/images/certificates/Javascript Algorithms and Data Structures.png",revision:"57907cbcf2f8642ab7cdcdef62570d05"},{url:"/images/certificates/PHP Tutorial Course-min.jpg",revision:"d8b73c36816988d9b014145f407af072"},{url:"/images/certificates/Python Fundamental Programming - Dicoding-min.jpg",revision:"685492ced5ce258149b8316bf1818221"},{url:"/images/certificates/SOLID Principle - Dicoding-min.jpg",revision:"e3b20c787b1061d38adbfb5292a71f9b"},{url:"/images/certificates/jQuery Tutorial Course-min.jpg",revision:"4d36cc1c82e4f9b6f4e15f6cd3029da7"},{url:"/images/projects/labfisdas.png",revision:"cd75787f6eb883c3ff548278f5dc47d6"},{url:"/manifest.json",revision:"07fc43a5ab015d36c28eff374005ba94"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
