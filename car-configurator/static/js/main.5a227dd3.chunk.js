(this["webpackJsonpcar-configurator"]=this["webpackJsonpcar-configurator"]||[]).push([[0],{153:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);n(89);var o=n(24),a=n.n(o),i=n(78),r=n.n(i),s=(n(153),n(1)),c=n(2),l=n(7),d=n(3),u=n(4),m=n(0),f=n(88),p=n(77),g=n(79),b=n(86),h=n(80),y=n(81),v=n(82),x=n(83),j=n(87),w=n(84),M=n(85),z={EffectComposer:j.a,RenderPass:w.a,OutlinePass:M.a},O={GLTFLoader:g.a,FBXLoader:b.a,OBJLoader:h.a,MTLLoader:y.a,DDSLoader:v.a},_={OrbitControls:x.a},E=f.a,k=function(e){var t={obj:[],str:[],num:[],fun:[],boo:[]};if(void 0===e)return t;for(var n=0;n<e.length;n++){var o=e[n],a=(typeof o).substr(0,3);void 0===t[a]&&(t[a]=[]),t[a].push(o)}return t},L=function e(){var t=k(arguments),n=t.str[0],o=arguments[1],a=t.fun[0];!1===Array.isArray(o)&&(o=[o]);var i=e.list;o.forEach((function(e){i[n]&&(void 0===i[n][e.uuid]&&(i[n][e.uuid]=[]),i[n][e.uuid].push(a))}))};L.list={click:{},mousedown:{},mouseup:{},mousemove:{},mouseenter:{},mouseleave:{}},L.down=!1,L.last={object:{}},L.listen=function(e){var t=L,n=e.renderer.domElement;n.addEventListener("mousedown",(function(n){t.down=!0;var o=L.cast(n,e);null!==o&&L.callback("mousedown",o,n)})),n.addEventListener("mousemove",(function(n){if(t.down=!1,!1===t.down){var o=L.cast(n,e);if(null===o)return;L.callback("mousemove",o,n),t.last.object.uuid!==o.object.uuid&&(L.callback("mouseleave",t.last,n),t.last=o,L.callback("mouseenter",o,n))}})),n.addEventListener("mouseup",(function(n){if(t.down){var o=L.cast(n,e);if(null===o)return;L.callback("click",o,n)}t.down=!1}))},L.cast=function(e,t){var n=new m.Vector2;n.x=+e.clientX/window.innerWidth*2-1,n.y=-e.clientY/window.innerHeight*2+1;var o=new m.Raycaster;o.setFromCamera(n,t.camera);var a=B.findByType(t.scene,"Mesh",!0),i=o.intersectObjects(a);return i.length>0?i[0]:null},L.callback=function(e,t,n){var o=t.object.uuid,a=L.list[e];void 0!==a[o]&&a[o].forEach((function(e){e(t,n)}))};var C=function e(){var t=k(arguments),n=t.obj[0],o=t.fun[0]||function(){},a=t.fun[1]||function(){},i={mngr:0};function r(){var t=!0,r=0;Object.keys(n).forEach((function(e){!0===n[e].wait&&(t=!1)})),Object.values(i).forEach((function(e){r+=e})),a(r),t&&(o(n),e.isBusy=!1)}!0!==e.isBusy&&(e.isBusy=!0,Object.keys(n).forEach((function(t){var o=e.getFileType(n[t]);n[t]={wait:!0,path:n[t].split("#")[0]},n[t].type="load"+o[0]+o.substr(1).toLowerCase(),n[t].extn=o,i[n[t].path]=0})),e.manager.onProgress=function(e,t){i.mngr=t,r()},Object.keys(n).forEach((function(e){var t=n[e].type,o=n[e].path;B[t](o,(function(t){var o=n[e].extn;"MODEL"!==o&&"TEXTURE"!==o&&(i[n[e]]=1),n[e]=t,r()}))})))};C.isBusy=!1,C.manager=new m.LoadingManager,C.getFileType=function(e){var t,n="AJAX";if(e.indexOf("#")>-1){t=e.split("#")[1].toUpperCase();["MODEL","TEXTURE","IMAGE","BITMAP","AJAX"].indexOf(t)>-1&&(n=t)}else{t=e.split(".").pop().toLowerCase();["glb","gltf","fbx","obj"].indexOf(t)>-1&&(n="MODEL"),["jpg","jpeg","png","gif","bmp"].indexOf(t)>-1&&(n="TEXTURE")}return n};function T(e,t,n){var o=Math.pow(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)+Math.pow(t.z-e.z,2),.5),a=(n=o-n)/o;return{x:e.x+a*(t.x-e.x),y:e.y+a*(t.y-e.y),z:e.z+a*(t.z-e.z)}}var S=function(){var e,t,n,o,a,i,r,s,c,l=k(arguments),d=l.str[0].toUpperCase(),u=l.obj[0],f=l.obj[1],p=l.obj[2],g=l.fun[0]||function(){},b=l.str[1]||"power1",h=u.target,y=u.object.position;if(u.enabled=!1,"FIXED"===d&&(t=l.num[0]/1e3,r={x:h.x-y.x,y:h.y-y.y,z:h.z-y.z},n={x:h.x,y:h.y,z:h.z},o={ease:b,duration:t},Object.keys(f).forEach((function(e){o[e]=f[e]})),E.timeline({onComplete:function(){u.enabled=!0,u.update(),g()},onUpdate:function(){u.object.position.set(n.x,n.y,n.z),u.target.set(n.x+r.x,n.y+r.y,n.z+r.z),u.update()}}).fromTo(n,n,o)),"LOOSE"===d){e=l.num[0],t=l.num[1]/1e3,n={x:h.x,y:h.y,z:h.z},a={x:y.x,y:y.y,z:y.z},o={ease:b,duration:t},Object.keys(f).forEach((function(e){o[e]=f[e]})),i=T(a,o,e);var v=(new m.Euler).copy(u.object.rotation);s={px:a.x,py:a.y,pz:a.z,tx:n.x,ty:n.y,tz:n.z},(c={px:i.x,py:i.y,pz:i.z,tx:o.x,ty:o.y,tz:o.z}).ease=b,c.duration=t,E.timeline({onComplete:function(){u.enabled=!0,g()},onUpdate:function(){u.target.set(s.tx,s.ty,s.tz),u.object.position.set(s.px,s.py,s.pz),u.update(),u.object.rotation.copy(v)}}).fromTo(s,s,c)}"EXACT"===d&&(t=l.num[0]/1e3,n={x:h.x,y:h.y,z:h.z},a={x:y.x,y:y.y,z:y.z},i={},o={ease:b,duration:t},Object.keys(f).forEach((function(e){o[e]=f[e]})),Object.keys(p).forEach((function(e){i[e]=p[e]})),s={px:a.x,py:a.y,pz:a.z,tx:n.x,ty:n.y,tz:n.z},(c={px:i.x,py:i.y,pz:i.z,tx:o.x,ty:o.y,tz:o.z}).ease=b,c.duration=t,E.timeline({onComplete:function(){u.enabled=!0,g()},onUpdate:function(){u.target.set(s.tx,s.ty,s.tz),u.object.position.set(s.px,s.py,s.pz),u.update()}}).fromTo(s,s,c))};S.captureSpot=function(){var e=k(arguments),t=e.obj[0],n=e.obj[1];window.addEventListener("dblclick",(function(){console.log(["TARGET"]),console.log("x ==> ",t.target.x),console.log("y ==> ",t.target.y),console.log("z ==> ",t.target.z),console.log(["CAMERA"]),console.log("x ==> ",t.object.position.x),console.log("y ==> ",t.object.position.y),console.log("z ==> ",t.object.position.z),console.log(["SCENE"]),console.log("x ==> ",n.rotation.x),console.log("y ==> ",n.rotation.y),console.log("z ==> ",n.rotation.z)}))};var B={createScene:function(){var e=k(arguments),t=e.num[0]||window.innerWidth,n=e.num[1]||window.innerHeight,o=e.str[0]||"#000",a=e.boo[0],i=new m.Scene,r=new m.PerspectiveCamera(45,t/n,.1,1e3),s=new m.WebGLRenderer({antialias:!0}),c=new _.OrbitControls(r,s.domElement),l=B.createLight("AMBIENT",16777215),d=new z.EffectComposer(s),u=new z.RenderPass(i,r);if(d.addPass(u),d.setSize(t,n),i.add(l),i.background=new m.Color(o),c.enablePan=!1,c.autoRotate=!1,c.autoRotateSpeed=.8,c.enableDamping=!0,c.dampingFactor=.1,s.setSize(t,n),B.setupControls("ORBIT",c,{x:0,y:0,z:5},{x:0,y:0,z:0}),!1!==a){var f=function e(){requestAnimationFrame(e),c.update(),d.render()};f()}var p={scene:i,camera:r,renderer:s,controls:c,composer:d,renderPass:u,light:l};return L.listen(p),p},createEffect:function(){var e,t=k(arguments),n=t.str[0].toUpperCase(),o=t.obj[0],a=t.obj[1],i=t.obj[2],r=t.obj[3]||{},s=i.renderer.domElement.width,c=i.renderer.domElement.height;return"OUTLINE"!==n?null:(e=new z.OutlinePass(new m.Vector2(s,c),o,a),Object.keys(r).forEach((function(t){"visibleEdgeColor"===t?e[t].set(r[t]):e[t]=r[t]})),i.addPass(e),e)},createEvent:L,createObject:function(){var e=k(arguments),t=e.obj[0]||{},n=e.obj[1],o=["Box","Circle","Cone","Cylinder","Dodecahedron","Edges","Extrude","Icosahedron","Lathe","Octahedron","Parametric","Plane","Polyhedron","Ring","Shape","Sphere","Tetrahedron","Text","Torus","TorusKnot","Tube","Wireframe"],a=["LineBasic","LineDashed","MeshBasic","MeshDepth","MeshDistance","MeshLambert","MeshMatcap","MeshNormal","MeshPhong","MeshPhysical","MeshStandard","MeshToon","Points","RawShader","Shader","Shadow","Sprite"],i=null,r=null;if(Object.keys(t).forEach((function(e){o.indexOf(e)>-1&&(i=e),a.indexOf(e)>-1&&(r=e)})),null!==i&&null!==r){var s,c=Object.values(t[i]);i+="Geometry",0===c.length?s=new m[i]:1===c.length?s=new m[i](c[0]):2===c.length?s=new m[i](c[0],c[1]):3===c.length?s=new m[i](c[0],c[1],c[2]):4===c.length?s=new m[i](c[0],c[1],c[2],c[3]):5===c.length&&(s=new m[i](c[0],c[1],c[2],c[3],c[5]));var l=new m[r+"Material"](t[r]),d=new m.Mesh(s,l);return n&&(d=B.setupObject(d,n)),d}},createLight:function(){var e,t=k(arguments),n=t.str[0]||"DIRECT",o=t.num[0]||16777215,a=t.num[1]||1;return"DIRECT"===n?e=new m.DirectionalLight(o,a):"AMBIENT"===n&&(e=new m.AmbientLight(o,a)),e},findAll:function(){var e=k(arguments),t=e.obj[0],n=[];function o(e){if(n.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)o(e.children[t])}return o(t),n},findById:function(){var e=k(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function i(e){if(e.uuid===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)i(e.children[t])}return i(t),o?a:a[0]},findByName:function(){var e=k(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function i(e){if(e.name===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)i(e.children[t])}return i(t),o?a:a[0]},findByType:function(){var e=k(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function i(e){if(e.type===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)i(e.children[t])}return i(t),o?a:a[0]},findByProperty:function(){var e=k(arguments),t=e.obj[0],n=e.obj[1],o=e.boo[0],a=[];function i(e){if(Object.keys(n).forEach((function(t){e[t]===n[t]&&a.push(e)})),void 0!==e.children)for(var t=0;t<e.children.length;t++)i(e.children[t])}return i(t),o?a:a[0]},findByMaterialName:function(){var e=k(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function i(e){if(void 0!==e.material&&e.material.name===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)i(e.children[t])}return i(t),o?a:a[0]},findByMaterialProperty:function(){var e=k(arguments),t=e.obj[0],n=e.obj[1],o=e.boo[0],a=[];function i(e){if(void 0!==e.material&&Object.keys(n).forEach((function(t){e.material[t]===n[t]&&a.push(e)})),void 0!==e.children)for(var t=0;t<e.children.length;t++)i(e.children[t])}return i(t),o?a:a[0]},loadAll:C,loadAjax:function(){var e=k(arguments),t=e.str[0],n=e.obj[0]||{a:1},o=e.fun[0]||function(){};-1===t.indexOf("?")?t+="?dnjs_ajax_t="+Date.now():t+="&dnjs_ajax_t="+Date.now();var a=new FormData;Object.keys(n).forEach((function(e){var t=n[e];"object"===typeof t&&(t=JSON.stringify(t)),a.append(e,t)}));var i=new XMLHttpRequest;i.open("GET",t,!0),i.onreadystatechange=function(){4===this.readyState&&200===this.status&&null!=o&&o(this.responseText)},i.send(a)},loadImage:function(){var e=k(arguments),t=e.str[0],n=e.fun[0]||function(){},o=new Image;o.crossOrigin="anonymous",o.onload=function(){n(o)},o.src=t},loadBitmap:function(){var e=k(arguments),t=e.str[0],n=e.fun[0]||function(){};(new m.ImageBitmapLoader).load(t,(function(e){n(e)}))},loadModel:function(){var e,t=k(arguments),n=t.str[0],o=t.fun[0]||function(){},a=n.split(".").pop().toLowerCase();if("obj"===a){var i=n.substr(0,n.lastIndexOf(".obj"))+".mtl",r=new O.MTLLoader(C.manager);return e=new O.OBJLoader(C.manager),void r.load(i,(function(t){t.preload(),e.setMaterials(t),e.load(n,(function(e){e.traverse((function(e){e.isMesh&&(e.material.opacity=1,e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),o(e)}))}))}"glb"===a||"gltf"===a?e=new O.GLTFLoader(C.manager):"fbx"===a?e=new O.FBXLoader(C.manager):o(null),e.load(n,(function(e){e.scene&&(e=e.scene),e.traverse((function(e){e.isMesh&&(e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),o(e)}))},loadTexture:function(){var e=k(arguments),t=e.str[0],n=e.num[0]||0,o=e.num[1]||0,a=e.fun[0]||function(){};return new m.TextureLoader(C.manager).load(t,(function(e){0===n&&0===o||(e.wrapS=m.RepeatWrapping,e.wrapT=m.RepeatWrapping,e.repeat.set(n,o)),a(e)}))},setupControls:function(){var e,t,n,o=k(arguments),a=o.str[0].toUpperCase(),i=o.obj[0];"SHOOT"===a&&(t=o.obj[1]||{x:0,y:0,z:0},n=o.obj[2]||{},i.target.set(t.x,t.y,t.z),i.object.position.set(t.x,t.y,t.z+.01),i.enableZoom=!1,i.rotateSpeed=-.3),"ORBIT"===a&&(t=o.obj[1]||{x:0,y:0,z:0},e=o.obj[2]||{x:0,y:0,z:0},n=o.obj[3]||{},i.target.set(e.x,e.y,e.z),i.object.position.set(t.x,t.y,t.z),i.enableZoom=!0,i.rotateSpeed=1),"EXACT"===a&&(t=o.obj[1]||{x:0,y:0,z:0},e=o.obj[2]||{x:0,y:0,z:0},n=o.obj[3]||{},i.target.set(e.x,e.y,e.z),i.object.position.set(t.x,t.y,t.z),i.enableZoom=!1,i.rotateSpeed=-.3),Object.keys(n).forEach((function(e){i[e]=n[e]}))},setupObject:function(){var e=k(arguments),t=e.obj[0],n=e.obj[1];!1===Array.isArray(t)&&(t=[t]);var o=["position","rotation","scale"];return t.forEach((function(e){Object.keys(n).forEach((function(t){o.indexOf(t)>-1?(void 0!==n[t].x&&(e[t].x=n[t].x),void 0!==n[t].y&&(e[t].y=n[t].y),void 0!==n[t].z&&(e[t].z=n[t].z)):e[t]=n[t]}))})),1===t.length?t[0]:t},setupScene:function(){var e=k(arguments),t=e.obj[0],n=e.obj[1],o=e.num[0],a=e.num[1];t.setSize(o,a),t.renderer.setSize(o,a),n.aspect=o/a,n.updateProjectionMatrix()},setupMaterial:function(){var e=k(arguments),t=e.obj[0],n=e.obj[1],o=["map","emissiveMap","aoMap","bumpMap","displacementMap","normalMap","roughnessMap"];return!1===Array.isArray(t)&&(t=[t]),t.forEach((function(e){Object.keys(n).forEach((function(e){o.indexOf(e)>-1&&"string"===typeof n[e]?t[e]=B.loadTexture(n[e]):t[e]=n[e]}))})),1===t.length?t[0]:t},tweenControls:S,tweenMaterial:function(){var e,t,n=k(arguments),o=n.str[0]||"VALUE",a=n.obj[0],i=n.obj[1],r=n.num[0]||1e3,s=n.str[1]||"power1",c=n.fun[0]||function(){};if("CLONE"===o){var l=a.clone(!1);a.add(l),l.material=a.material.clone();var d=["alphaMap","aoMap","bumpMap","displacementMap","emissiveMap","envMap","lightMap","map","normalMap","roughnessMap"];d.forEach((function(e){a.material[e]&&(l.material[e]=a.material[e].clone(),l.material[e].needsUpdate=!0)})),i.forEach((function(e){d.indexOf(e)>-1?l.material[e].image=i[e]:l.material[e]=i[e]})),l.material.transparent=!0,l.material.opacity=0,l.material.needsUpdate=!0,e={opacity:0},t={opacity:1,duration:r/1e3,ease:s},E.timeline({onComplete:function(){a.material=l.material,a.remove(l),c()},onUpdate:function(){l.material.opacity=e.opacity}}).fromTo(e,e,t)}"VALUE"===o&&(e={},t={duration:r/1e3,ease:s},Object.keys(i).forEach((function(n){if("object"===typeof a.material[n]){var o=a.material[n];Object.keys(o).forEach((function(o){e[n+"."+o]=a.material[n][o],t[n+"."+o]=i[n][o]}))}else e[n]=a.material[n],t[n]=i[n]})),E.timeline({onComplete:function(){c()},onUpdate:function(){Object.keys(e).forEach((function(t){if(t.indexOf(".")>-1){var n=t.split(".");a.material[n[0]][n[1]]=e[t]}else a.material[t]=e[t]}))}}).fromTo(e,e,t))},tweenObject:function(){var e=k(arguments),t=e.obj[0],n=e.obj[1],o=e.str[0]||"power1",a=e.num[0]||1e3,i=e.fun[0]||function(){},r={},s={ease:o,duration:a/1e3},c=["position","rotation","scale"];c.forEach((function(e){r[e+"X"]=s[e+"X"]=t[e].x,r[e+"Y"]=s[e+"Y"]=t[e].y,r[e+"Z"]=s[e+"Z"]=t[e].z,n[e]&&(void 0!==n[e].x&&(s[e+"X"]=n[e].x),void 0!==n[e].y&&(s[e+"Y"]=n[e].y),void 0!==n[e].z&&(s[e+"Z"]=n[e].z))})),E.timeline({onComplete:function(){i()},onUpdate:function(){Object.keys(r).forEach((function(e){if("_GSAP"!==e){var n=e.substr(0,e.length-1),o=e[e.length-1].toLocaleLowerCase();t[n][o]=r[e]}}))}}).fromTo(r,r,s)}},I={"Ford Mustang GT350R":{file:"models/ford_mustang_gt350r.glb",logo:"models/ford_mustang_gt350r.png",init:{lights:[{x:1,y:1,z:1},{x:-1,y:1,z:1}]},edit:{Paint:{icon:"images/menu/paint.png",focus:{x:-2.16,y:.72,z:1.07},mesh:["object001_Material015_0"],items:{Red:{bg:"#e80202",trans:{color:"#e80202"}},Orange:{bg:"#b26201",trans:{color:"#ff33cc"}},Green:{bg:"#006600",trans:{color:"#003300"}}}},Wheels:{icon:"images/menu/wheels.png",focus:{x:1.6,y:-1.18,z:-1.63},mesh:["wheel003_rim_0001","wheel002_rim_0001","wheel000_rim_0","wheel001_rim_0001"],items:{Black:{bg:"#333333",trans:{color:"#131313"}},Silver:{bg:"#777777",trans:{color:"#808080"}},Copper:{bg:"#331a00",trans:{color:"#1a0d00"}}}},Windows:{icon:"images/menu/glasses.png",focus:{x:.96,y:.87,z:-.57},mesh:["object_Windows_0"],items:{Black:{bg:"#000000",trans:{color:"#000000"}},Silver:{bg:"#222222",trans:{color:"#030303"}}}},Plastic:{icon:"images/menu/metal.png",focus:{x:.42,y:-.47,z:-2.59},mesh:["object008_Shiny_Black_0"],items:{Silver:{bg:"#000000",trans:{color:"#010101"}},Black:{bg:"#333333",trans:{color:"#111111"}}}},Interior:{icon:"images/menu/seats.png",focus:{x:-1.81,y:-.13,z:1.1},mesh:["object016_Material013_0"],items:{Black:{bg:"#000000",trans:{color:"#000000"}},Silver:{bg:"#222222",trans:{color:"#222222"}},Brown:{bg:"#331a00",trans:{color:"#180d01"}}}}}},"McLaren MP4-12C":{file:"models/mclaren_mp4_12c.glb",logo:"models/mclaren_mp4_12c.png",init:{lights:[{x:1,y:1,z:1},{x:-1,y:1,z:1}]},edit:{Paint:{icon:"images/menu/paint.png",focus:{x:-2.16,y:.72,z:1.07},mesh:["object016_Material005_0"],items:{Orange:{bg:"#ff3e00",trans:{color:"#ff3e00"}},Red:{bg:"#cc0000",trans:{color:"#cc0000"}},Green:{bg:"#006600",trans:{color:"#003300"}},Blue:{bg:"#0033cc",trans:{color:"#0033cc"}}}},Wheels:{icon:"images/menu/wheels.png",focus:{x:1.6,y:-1.18,z:-1.63},mesh:["wheel002_object_Material014_0","wheel003_object010_Material014_0","wheel000_object002_Material014_0","wheel001_object008_Material014_0"],items:{Light:{bg:"#333333",trans:{color:"#555555"}},Silver:{bg:"#777777",trans:{color:"#FFFFFF"}},Black:{bg:"#111111",trans:{color:"#050505"}},Copper:{bg:"#331a00",trans:{color:"#1a0d00"}}}},Windows:{icon:"images/menu/glasses.png",focus:{x:1.59,y:1.32,z:.2},mesh:["object032_object069_Material001_0"],items:{Black:{bg:"#000000",trans:{color:"#000000"}},Silver:{bg:"#222222",trans:{color:"#030303"}}}},Plastic:{icon:"images/menu/metal.png",focus:{x:.42,y:-.47,z:-2.59},mesh:["object015_object047_cb_0"],items:{Silver:{bg:"#555555",trans:{color:"#FFFFFF"}},Black:{bg:"#111111",trans:{color:"#111111"}}}},Interior:{icon:"images/menu/seats.png",focus:{x:-1.81,y:-.13,z:1.1},mesh:["object000_object074_Material021_0"],items:{Black:{bg:"#000000",trans:{color:"#000000"}},Silver:{bg:"#222222",trans:{color:"#222222"}},Brown:{bg:"#331a00",trans:{color:"#180d01"}}}}}},"Nissan Z Proto":{file:"models/nissan_z_proto.glb",logo:"models/nissan_z_proto.png",init:{lights:[{x:1,y:1,z:1},{x:-1,y:1,z:1}]},edit:{Paint:{icon:"images/menu/paint.png",focus:{x:-2.16,y:.72,z:1.07},mesh:["Mesh_1"],items:{Yellow:{bg:"#cca100",trans:{color:"#cca100"}},Red:{bg:"#cc0000",trans:{color:"#cc0000"}},Green:{bg:"#006600",trans:{color:"#003300"}},Blue:{bg:"#3333ff",trans:{color:"#000066"}}}},Wheels:{icon:"images/menu/wheels.png",focus:{x:1.6,y:-1.18,z:-1.63},mesh:["Mesh_7"],items:{Black:{bg:"#070301",trans:{color:"#070301"}},Silver:{bg:"#777777",trans:{color:"#808080"}},Copper:{bg:"#331a00",trans:{color:"#1a0d00"}}}},Plastic:{icon:"images/menu/metal.png",focus:{x:.42,y:-.47,z:-2.59},mesh:["Mesh_10"],items:{Silver:{bg:"#000000",trans:{color:"#000000"}},Black:{bg:"#333333",trans:{color:"#050505"}}}}}},"Nissan Fairlady Z":{file:"models/nissan_fairlady.glb",logo:"models/nissan_fairlady.png",init:{lights:{obj_1:{x:.47,y:-1.15,z:.9},obj_2:{x:-.43,y:-1.15,z:.9}}},edit:{Paint:{icon:"images/menu/paint.png",audio:"audio/spray.mp3",focus:{x:-2.22,y:.43,z:.42},mesh:["Object_17"],items:{Red:{bg:"#990000",trans:{color:"#210001"}},Green:{bg:"#006600",trans:{color:"#003300"}},Blue:{bg:"#000066",trans:{color:"#00004d"}},Gold:{bg:"#b39800",trans:{color:"#806c00"}}}},Wheels:{icon:"images/menu/wheels.png",audio:"audio/spray.mp3",focus:{x:1.4,y:-1.06,z:-1.43},mesh:["Object_23"],items:{Black:{bg:"#111111",trans:{color:"#111111"}},Gold:{bg:"#b39800",trans:{color:"#b39800"}},Silver:{bg:"#808080",trans:{color:"#808080"}}}},Metal:{icon:"images/menu/metal.png",audio:"audio/metal.mp3",focus:{x:.8,y:-.93,z:-2.07},mesh:["Object_19"],items:{Black:{bg:"#040404",trans:{color:"#040404"}},Silver:{bg:"#666666",trans:{color:"#666666"}},Gold:{bg:"#b39800",trans:{color:"#332b00"}}}},Frame:{icon:"images/menu/frame.png",audio:"audio/metal.mp3",focus:{x:-1.77,y:-.38,z:-.71},mesh:["Object_12"],items:{Silver:{bg:"#424242",trans:{color:"#424242"}},Black:{bg:"#000000",trans:{color:"#000000"}},Gold:{bg:"#b39800",trans:{color:"#b39800"}}}},Interior:{icon:"images/menu/seats.png",audio:"audio/spray.mp3",focus:{x:1.72,y:-.01,z:.29},mesh:["Object_28"],items:{Silver:{bg:"#424242",trans:{color:"#040404"}},Black:{bg:"#000000",trans:{color:"#000000"}},Brown:{bg:"#331a00",trans:{color:"#1a0d00"}}}}}}},P=I,F=(n(156),n(157),{}),R=B.createScene(160,160,!1);R.isLoading=!0,R.controls.enabled=!1,function e(){if(requestAnimationFrame(e),R.isLoading&&R.logo){R.composer.render();var t=R.logo.rotation.y%(2*Math.PI),n=.03;t>.3&&t<5.8&&(n=.07),R.logo.rotation.y+=n}}();var A=new m.AmbientLight(16777215,.7);R.scene.add(A),F.start=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R.scene.background=new m.Color(e),R.root=document.querySelector(".arimac_load"),R.root.style.background=e,R.renderer.domElement.style.background=e;var n=document.createElement("div");n.className="arimac_lval",R.root.appendChild(n),"#FFF"===e&&R.root.setAttribute("class","arimac_load arimac_load_white"),B.loadModel("models/arimac/logo.fbx",(function(n){R.root.appendChild(R.renderer.domElement),R.logo=n,R.logo.rotation.y=5.8,R.scene.add(n),R.logo.scale.set(.2,.2,.2),R.isLoading=!0,"#FFF"===e&&(n.children[0].material[1].color=new m.Color("#131313")),t()}))},F.setValue=function(e){var t=document.querySelector(".arimac_load");document.querySelector(".arimac_load>.arimac_lval").innerHTML="Loading... "+e+"%",100===e&&setTimeout((function(){t.style.opacity=0,setTimeout((function(){t.style.display="none"}),300)}),1e3)},F.end=function(){var e=document.querySelector(".arimac_load");setTimeout((function(){e.style.opacity=0,setTimeout((function(){e.style.display="none"}),300)}),1e3)};var N=F,D=n(8),U=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={modelIndex:-1,editIndex:null,switchBusy:!1,menuItems:[]},o.lastModel=o.lastModel.bind(Object(l.a)(o)),o.nextModel=o.nextModel.bind(Object(l.a)(o)),o.setEdit=o.setEdit.bind(Object(l.a)(o)),o.setConf=o.setConf.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"lastModel",value:function(){this.switchModel(-1)}},{key:"nextModel",value:function(){this.switchModel(1)}},{key:"switchModel",value:function(e){if(!this.state.switchBusy){var t=this.state.modelIndex;t+=e;var n=Object.keys(P).length;t>=n?t=0:t<=-1&&(t=n-1),this.setState({modelIndex:t,switchBusy:!0});var o=this;!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};q.model&&K((function(){q.model&&q.scene.remove(q.model)}));V((function(){J(e,(function(){Y(),q.controls.autoRotate=!0,t(Object.values(P)[e].edit)}))}))}(t,(function(e){o.setState({switchBusy:!1,menuItems:e,editIndex:null})}))}}},{key:"getLogo",value:function(){return-1===this.state.modelIndex?{}:{backgroundImage:"url("+Object.values(P)[this.state.modelIndex].logo+")"}}},{key:"getLoading",value:function(){return this.state.switchBusy?Object(D.jsx)("div",{className:"Loading"}):[]}},{key:"setEdit",value:function(e){if(!this.state.switchBusy){var t=e.target.innerHTML;this.state.editIndex===t?(this.setState({editIndex:null}),V()):(this.setState({editIndex:t}),function(e,t){var n=Object.values(P)[e].edit[t].focus;B.tweenControls("EXACT",q.controls,{x:0,y:-1,z:0},n,1e3,"power2"),q.controls.autoRotate=!1}(this.state.modelIndex,t))}}},{key:"setConf",value:function(e){if(!this.state.switchBusy){var t=this.state.editIndex,n=e.target.lang,o=Object.values(P)[this.state.modelIndex].edit[t].mesh,a=Object.values(P)[this.state.modelIndex].edit[t].items[n].trans.color;o.forEach((function(e){var t=B.findByName(q.model,e);B.tweenMaterial(t,{color:new m.Color(a)},300)}))}}},{key:"buildMenu",value:function(){var e=this,t=[],n=this.state.menuItems;return Object.keys(n).forEach((function(o){var a="url(".concat(n[o].icon,")"),i="";o===e.state.editIndex&&(i="edit_type_open"),t.push(Object(D.jsx)("div",{id:i,className:"edit_type",style:{backgroundImage:a},onClick:e.setEdit,children:o},o))})),t}},{key:"buildEdit",value:function(){if(null===this.state.editIndex)return[];if(void 0===Object.values(P)[this.state.modelIndex].edit[this.state.editIndex])return[];var e=this,t=[],n=Object.values(P)[this.state.modelIndex].edit[this.state.editIndex].items;return Object.keys(n).forEach((function(o){t.push(Object(D.jsx)("div",{style:{backgroundColor:n[o].bg},lang:o,className:"edit_item",onClick:e.setConf},o))})),t}},{key:"componentDidMount",value:function(){var e=this;N.start("#000",(function(){e.nextModel()}))}},{key:"render",value:function(){var e="",t="";return null!==this.state.editIndex&&(e="menu_outer_open",t="edit_outer_open"),Object(D.jsxs)("div",{children:[this.getLoading(),Object(D.jsx)("div",{className:"ModelLogo",style:this.getLogo()}),Object(D.jsx)("div",{className:"CanvasRoot"}),Object(D.jsx)("button",{className:"switch switch_l",onClick:this.lastModel}),Object(D.jsx)("button",{className:"switch switch_r",onClick:this.nextModel}),Object(D.jsx)("center",{className:"edit_outer",id:t,children:Object(D.jsx)("div",{className:"edit",children:this.buildEdit()})}),Object(D.jsx)("center",{className:"menu_outer",id:e,children:Object(D.jsx)("div",{className:"menu",children:this.buildMenu()})}),Object(D.jsx)("div",{className:"arimac_load"}),Object(D.jsx)("div",{className:"arimac_logo arimac_logo_white"})]})}}]),n}(o.Component),G=window.innerWidth,W=window.innerHeight;function X(){return!(window.innerWidth>=window.innerHeight)}var q=B.createScene(G,W,"#000"),H=[new m.PointLight(16772744,1,100,2),new m.PointLight(16777215,1),new m.PointLight(16777215,1),new m.PointLight(16777215,1),new m.PointLight(16777215,1)];q.lights=H,H[0].power=0,H[1].power=0,H[2].power=0,H[3].power=0,H[4].power=0,H[0].position.set(0,3,0),H[1].position.set(0,0,4),H[2].position.set(0,0,-4),H[3].position.set(4,0,0),H[4].position.set(-4,0,0),H.forEach((function(e){q.scene.add(e)})),q.renderer.physicallyCorrectLights=!0,q.renderer.outputEncoding=m.sRGBEncoding,q.renderer.shadowMap.enabled=!0,q.renderer.toneMapping=m.ReinhardToneMapping,q.renderer.setPixelRatio(window.devicePixelRatio),q.renderer.toneMappingExposure=Math.pow(.38,5),q.renderer.shadowMap.enabled=!0,q.ground=new m.Mesh(new m.PlaneGeometry(38,38),new m.MeshStandardMaterial({transparent:!0,opacity:.16})),q.ground.rotation.x=-Math.PI/2;var Z=(new m.TextureLoader).load("textures/mat_floor.jpg");function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};B.loadModel(Object.values(P)[e].file,(function(e){q.model=e,e.position.set(0,-1.25,0),X()&&e.scale.set(.5,.5,.5),q.scene.add(e),N.end(),setTimeout(t,100)}))}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t={x:1.72,y:-.19,z:3.67};B.tweenControls("EXACT",q.controls,{x:0,y:-1,z:0},t,1e3,"power2"),q.controls.autoRotate=!0,setTimeout(e,1e3)}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t={a:0,b:0,c:0,d:0,e:0},n={a:102500,b:12021,c:12021,d:12021,e:12021};new p.a.Tween(t).to(n,700).onUpdate((function(e){Object.values(e).forEach((function(e,t){q.lights[t].power=e}))})).start(),setTimeout(e,700)}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t={a:102500,b:12021,c:12021,d:12021,e:12021},n={a:0,b:0,c:0,d:0,e:0};new p.a.Tween(t).to(n,700).onUpdate((function(e){Object.values(e).forEach((function(e,t){q.lights[t].power=e}))})).start(),setTimeout(e,700)}Z.wrapS=m.RepeatWrapping,Z.wrapT=m.RepeatWrapping,Z.repeat.set(22,22),q.ground.material.map=Z,q.ground.material.bumpMap=Z,q.ground.material.bumpScale=.1,q.ground.receiveShadow=!0,q.scene.add(q.ground),q.controls.autoRotate=!0,q.controls.maxPolarAngle=1.6,q.controls.maxDistance=4,q.controls.minDistance=2,q.camera.position.set(1.72,-.19,3.67),q.controls.target.set(0,-1,0),q.ground.position.set(0,-1.25,0),window.addEventListener("load",(function(){document.querySelector(".CanvasRoot").appendChild(q.renderer.domElement)})),window.addEventListener("resize",(function(){G=window.innerWidth,W=window.innerHeight,q.renderer.setSize(G,W),q.camera.aspect=G/W,q.camera.updateProjectionMatrix(),q.model&&(X()?q.model.scale.set(.5,.5,.5):q.model.scale.set(1,1,1))})),window.getCamPos=function(){var e="";e+="x : "+q.camera.position.x.toFixed(2),e+=", y : "+q.camera.position.y.toFixed(2),e+=", z : "+q.camera.position.z.toFixed(2),console.log(e)},function e(){requestAnimationFrame(e),p.a.update()}();var Q=U,$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))};r.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(Q,{})}),document.getElementById("root")),$()}},[[159,1,2]]]);
//# sourceMappingURL=main.5a227dd3.chunk.js.map