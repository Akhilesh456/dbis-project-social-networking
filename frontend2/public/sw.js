if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HljfP0VY2kpXgwNflXr45/_buildManifest.js",revision:"2d919b093918518cb84a7b252a1f30a3"},{url:"/_next/static/HljfP0VY2kpXgwNflXr45/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/138-6164c193d54c65be.js",revision:"6164c193d54c65be"},{url:"/_next/static/chunks/238-cb5056d44b6b0827.js",revision:"cb5056d44b6b0827"},{url:"/_next/static/chunks/332-7fd5d189a2109801.js",revision:"7fd5d189a2109801"},{url:"/_next/static/chunks/478-a430a6a30fe2f527.js",revision:"a430a6a30fe2f527"},{url:"/_next/static/chunks/512-98d387fb6b848434.js",revision:"98d387fb6b848434"},{url:"/_next/static/chunks/675-824f9359454ae27e.js",revision:"824f9359454ae27e"},{url:"/_next/static/chunks/777-d52a2978076ac5b3.js",revision:"d52a2978076ac5b3"},{url:"/_next/static/chunks/b98bc7c3-138e5f7e470c7de0.js",revision:"138e5f7e470c7de0"},{url:"/_next/static/chunks/c31f1870-b28902d8d63c966f.js",revision:"b28902d8d63c966f"},{url:"/_next/static/chunks/framework-66d32731bdd20e83.js",revision:"66d32731bdd20e83"},{url:"/_next/static/chunks/main-2085235a38c70a08.js",revision:"2085235a38c70a08"},{url:"/_next/static/chunks/pages/AboutUsPage-814f5b4f52153d4d.js",revision:"814f5b4f52153d4d"},{url:"/_next/static/chunks/pages/Chats-e293938a40b66c15.js",revision:"e293938a40b66c15"},{url:"/_next/static/chunks/pages/GroupChat/%5Bname%5D/%5Bid%5D-0233b1c37ee1cd75.js",revision:"0233b1c37ee1cd75"},{url:"/_next/static/chunks/pages/JoinUsPage-c9b9e9076707faa0.js",revision:"c9b9e9076707faa0"},{url:"/_next/static/chunks/pages/Posts-bdafafd055e18ad9.js",revision:"bdafafd055e18ad9"},{url:"/_next/static/chunks/pages/ProfilePage/%5Busername%5D/%5Bid%5D-e2c26d86a0b8afb4.js",revision:"e2c26d86a0b8afb4"},{url:"/_next/static/chunks/pages/SearchPage/%5BQuery%5D-90e49e902901e8af.js",revision:"90e49e902901e8af"},{url:"/_next/static/chunks/pages/_app-b4248635fdacec8f.js",revision:"b4248635fdacec8f"},{url:"/_next/static/chunks/pages/_error-08a9db0f433628d8.js",revision:"08a9db0f433628d8"},{url:"/_next/static/chunks/pages/activate-1b09bd5c19b3c464.js",revision:"1b09bd5c19b3c464"},{url:"/_next/static/chunks/pages/index-1212157e4ddcd9f4.js",revision:"1212157e4ddcd9f4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5c046346608af636.js",revision:"5c046346608af636"},{url:"/_next/static/css/5109859667a931f3.css",revision:"5109859667a931f3"},{url:"/_next/static/media/akhilesh.4e90a11c.jpeg",revision:"844793e3b8d8b7a7bce8a86c63397087"},{url:"/_next/static/media/havish.5f7c504d.jpg",revision:"6298dfc4b638fd3e37abd6c7f6f3f71a"},{url:"/_next/static/media/pavan.7b832def.jpg",revision:"c5502ec9ae506d418b15d6bc58d0964b"},{url:"/_next/static/media/pradeep.33a83639.jpg",revision:"b1e08c5d5d4576785ec9745e749d572e"},{url:"/android-chrome-192x192.png",revision:"7d5d175183bfe758c9f301ed9f0de5d7"},{url:"/android-chrome-512x512.png",revision:"02fb023a98228ac7efc8d882720efa9f"},{url:"/apple-touch-icon.png",revision:"2656e19efeeace7ea253f6f4837201f8"},{url:"/favicon-16x16.png",revision:"40291a73355c7c654d6a828fe0a4dea7"},{url:"/favicon-32x32.png",revision:"7377745557cd8f3b7d571828bec5e76a"},{url:"/favicon.ico",revision:"65d8904c22c86efa5c9152542e286129"},{url:"/icon-128x128.png",revision:"cfdbfd35581e2d79bccbdf820f5a3e57"},{url:"/icon-144x144.png",revision:"ae80981b94810d39d8ee8007c8602f9f"},{url:"/icon-152x152.png",revision:"99608e22a0e010c0cfaca5e41622c529"},{url:"/icon-192x192.png",revision:"c5c9d1dbcf2de7764aada8157f363f8d"},{url:"/icon-384x384.png",revision:"a19fe73968bc93523c49be56e6214289"},{url:"/icon-512x512.png",revision:"af18ee5230f2473824fc2a7ef4033f66"},{url:"/icon-72x72.png",revision:"aefeb164f58e1efb05140c00676203d1"},{url:"/icon-96x96.png",revision:"865d5cf35049e90fb13a9181966953b4"},{url:"/images/akhilesh.jpeg",revision:"844793e3b8d8b7a7bce8a86c63397087"},{url:"/images/chat_bg.jpg",revision:"3bd42654570e530237e2dd72b0c81136"},{url:"/images/havish.jpg",revision:"6298dfc4b638fd3e37abd6c7f6f3f71a"},{url:"/images/pavan.jpg",revision:"c5502ec9ae506d418b15d6bc58d0964b"},{url:"/images/pradeep.jpg",revision:"b1e08c5d5d4576785ec9745e749d572e"},{url:"/manifest.webmanifest",revision:"0b453f0ed64b6f3a3f4c6238872296a0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
