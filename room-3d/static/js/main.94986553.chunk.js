(this["webpackJsonpvr-experience"]=this["webpackJsonpvr-experience"]||[]).push([[0],{153:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);n(89);var o=n(24),a=n.n(o),r=n(78),i=n.n(r),c=(n(153),n(1)),s=n(2),l=n(3),u=n(4),d=n(0),f=n(88),m=(n(77),n(79)),p=n(86),y=n(80),h=n(81),b=n(82),v=n(83),x=n(87),g=n(84),j=n(85),w={EffectComposer:x.a,RenderPass:g.a,OutlinePass:j.a},z={GLTFLoader:m.a,FBXLoader:p.a,OBJLoader:y.a,MTLLoader:h.a,DDSLoader:b.a},E={OrbitControls:v.a},O=f.a,M=function(e){var t={obj:[],str:[],num:[],fun:[],boo:[]};if(void 0===e)return t;for(var n=0;n<e.length;n++){var o=e[n],a=(typeof o).substr(0,3);void 0===t[a]&&(t[a]=[]),t[a].push(o)}return t},T=function e(){var t=M(arguments),n=t.str[0],o=arguments[1],a=t.fun[0];!1===Array.isArray(o)&&(o=[o]);var r=e.list;o.forEach((function(e){r[n]&&(void 0===r[n][e.uuid]&&(r[n][e.uuid]=[]),r[n][e.uuid].push(a))}))};T.list={click:{},mousedown:{},mouseup:{},mousemove:{},mouseenter:{},mouseleave:{}},T.down=!1,T.last={object:{}},T.listen=function(e){var t=T,n=e.renderer.domElement;n.addEventListener("mousedown",(function(n){t.down=!0;var o=T.cast(n,e);null!==o&&T.callback("mousedown",o,n)})),n.addEventListener("mousemove",(function(n){if(t.down=!1,!1===t.down){var o=T.cast(n,e);if(null===o)return;T.callback("mousemove",o,n),t.last.object.uuid!==o.object.uuid&&(T.callback("mouseleave",t.last,n),t.last=o,T.callback("mouseenter",o,n))}})),n.addEventListener("mouseup",(function(n){if(t.down){var o=T.cast(n,e);if(null===o)return;T.callback("click",o,n)}t.down=!1}))},T.cast=function(e,t){var n=new d.Vector2;n.x=+e.clientX/window.innerWidth*2-1,n.y=-e.clientY/window.innerHeight*2+1;var o=new d.Raycaster;o.setFromCamera(n,t.camera);var a=S.findByType(t.scene,"Mesh",!0),r=o.intersectObjects(a);return r.length>0?r[0]:null},T.callback=function(e,t,n){var o=t.object.uuid,a=T.list[e];void 0!==a[o]&&a[o].forEach((function(e){e(t,n)}))};var _=function e(){var t=M(arguments),n=t.obj[0],o=t.fun[0]||function(){},a=t.fun[1]||function(){},r={mngr:0};function i(){var t=!0,i=0;Object.keys(n).forEach((function(e){!0===n[e].wait&&(t=!1)})),Object.values(r).forEach((function(e){i+=e})),a(i),t&&(o(n),e.isBusy=!1)}!0!==e.isBusy&&(e.isBusy=!0,Object.keys(n).forEach((function(t){var o=e.getFileType(n[t]);n[t]={wait:!0,path:n[t].split("#")[0]},n[t].type="load"+o[0]+o.substr(1).toLowerCase(),n[t].extn=o,r[n[t].path]=0})),e.manager.onProgress=function(e,t){r.mngr=t,i()},Object.keys(n).forEach((function(e){var t=n[e].type,o=n[e].path;S[t](o,(function(t){var o=n[e].extn;"MODEL"!==o&&"TEXTURE"!==o&&(r[n[e]]=1),n[e]=t,i()}))})))};_.isBusy=!1,_.manager=new d.LoadingManager,_.getFileType=function(e){var t,n="AJAX";if(e.indexOf("#")>-1){t=e.split("#")[1].toUpperCase();["MODEL","TEXTURE","IMAGE","BITMAP","AJAX"].indexOf(t)>-1&&(n=t)}else{t=e.split(".").pop().toLowerCase();["glb","gltf","fbx","obj"].indexOf(t)>-1&&(n="MODEL"),["jpg","jpeg","png","gif","bmp"].indexOf(t)>-1&&(n="TEXTURE")}return n};function C(e,t,n){var o=Math.pow(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)+Math.pow(t.z-e.z,2),.5),a=(n=o-n)/o;return{x:e.x+a*(t.x-e.x),y:e.y+a*(t.y-e.y),z:e.z+a*(t.z-e.z)}}var L=function(){var e,t,n,o,a,r,i,c,s,l=M(arguments),u=l.str[0].toUpperCase(),f=l.obj[0],m=l.obj[1],p=l.obj[2],y=l.fun[0]||function(){},h=l.str[1]||"power1",b=f.target,v=f.object.position;if(f.enabled=!1,"FIXED"===u&&(t=l.num[0]/1e3,i={x:b.x-v.x,y:b.y-v.y,z:b.z-v.z},n={x:b.x,y:b.y,z:b.z},o={ease:h,duration:t},Object.keys(m).forEach((function(e){o[e]=m[e]})),O.timeline({onComplete:function(){f.enabled=!0,f.update(),y()},onUpdate:function(){f.object.position.set(n.x,n.y,n.z),f.target.set(n.x+i.x,n.y+i.y,n.z+i.z),f.update()}}).fromTo(n,n,o)),"LOOSE"===u){e=l.num[0],t=l.num[1]/1e3,n={x:b.x,y:b.y,z:b.z},a={x:v.x,y:v.y,z:v.z},o={ease:h,duration:t},Object.keys(m).forEach((function(e){o[e]=m[e]})),r=C(a,o,e);var x=(new d.Euler).copy(f.object.rotation);c={px:a.x,py:a.y,pz:a.z,tx:n.x,ty:n.y,tz:n.z},(s={px:r.x,py:r.y,pz:r.z,tx:o.x,ty:o.y,tz:o.z}).ease=h,s.duration=t,O.timeline({onComplete:function(){f.enabled=!0,y()},onUpdate:function(){f.target.set(c.tx,c.ty,c.tz),f.object.position.set(c.px,c.py,c.pz),f.update(),f.object.rotation.copy(x)}}).fromTo(c,c,s)}"EXACT"===u&&(t=l.num[0]/1e3,n={x:b.x,y:b.y,z:b.z},a={x:v.x,y:v.y,z:v.z},r={},o={ease:h,duration:t},Object.keys(m).forEach((function(e){o[e]=m[e]})),Object.keys(p).forEach((function(e){r[e]=p[e]})),c={px:a.x,py:a.y,pz:a.z,tx:n.x,ty:n.y,tz:n.z},(s={px:r.x,py:r.y,pz:r.z,tx:o.x,ty:o.y,tz:o.z}).ease=h,s.duration=t,O.timeline({onComplete:function(){f.enabled=!0,y()},onUpdate:function(){f.target.set(c.tx,c.ty,c.tz),f.object.position.set(c.px,c.py,c.pz),f.update()}}).fromTo(c,c,s))};L.captureSpot=function(){var e=M(arguments),t=e.obj[0],n=e.obj[1];window.addEventListener("dblclick",(function(){console.log(["TARGET"]),console.log("x ==> ",t.target.x),console.log("y ==> ",t.target.y),console.log("z ==> ",t.target.z),console.log(["CAMERA"]),console.log("x ==> ",t.object.position.x),console.log("y ==> ",t.object.position.y),console.log("z ==> ",t.object.position.z),console.log(["SCENE"]),console.log("x ==> ",n.rotation.x),console.log("y ==> ",n.rotation.y),console.log("z ==> ",n.rotation.z)}))};var S={createScene:function(){var e=M(arguments),t=e.num[0]||window.innerWidth,n=e.num[1]||window.innerHeight,o=e.str[0]||"#000",a=e.boo[0],r=new d.Scene,i=new d.PerspectiveCamera(45,t/n,.1,1e3),c=new d.WebGLRenderer({antialias:!0}),s=new E.OrbitControls(i,c.domElement),l=S.createLight("AMBIENT",16777215),u=new w.EffectComposer(c),f=new w.RenderPass(r,i);if(u.addPass(f),u.setSize(t,n),r.add(l),r.background=new d.Color(o),s.enablePan=!1,s.autoRotate=!1,s.autoRotateSpeed=.8,s.enableDamping=!0,s.dampingFactor=.1,c.setSize(t,n),S.setupControls("ORBIT",s,{x:0,y:0,z:5},{x:0,y:0,z:0}),!1!==a){var m=function e(){requestAnimationFrame(e),s.update(),u.render()};m()}var p={scene:r,camera:i,renderer:c,controls:s,composer:u,renderPass:f,light:l};return T.listen(p),p},createEffect:function(){var e,t=M(arguments),n=t.str[0].toUpperCase(),o=t.obj[0],a=t.obj[1],r=t.obj[2],i=t.obj[3]||{},c=r.renderer.domElement.width,s=r.renderer.domElement.height;return"OUTLINE"!==n?null:(e=new w.OutlinePass(new d.Vector2(c,s),o,a),Object.keys(i).forEach((function(t){"visibleEdgeColor"===t?e[t].set(i[t]):e[t]=i[t]})),r.addPass(e),e)},createEvent:T,createObject:function(){var e=M(arguments),t=e.obj[0]||{},n=e.obj[1],o=["Box","Circle","Cone","Cylinder","Dodecahedron","Edges","Extrude","Icosahedron","Lathe","Octahedron","Parametric","Plane","Polyhedron","Ring","Shape","Sphere","Tetrahedron","Text","Torus","TorusKnot","Tube","Wireframe"],a=["LineBasic","LineDashed","MeshBasic","MeshDepth","MeshDistance","MeshLambert","MeshMatcap","MeshNormal","MeshPhong","MeshPhysical","MeshStandard","MeshToon","Points","RawShader","Shader","Shadow","Sprite"],r=null,i=null;if(Object.keys(t).forEach((function(e){o.indexOf(e)>-1&&(r=e),a.indexOf(e)>-1&&(i=e)})),null!==r&&null!==i){var c,s=Object.values(t[r]);r+="Geometry",0===s.length?c=new d[r]:1===s.length?c=new d[r](s[0]):2===s.length?c=new d[r](s[0],s[1]):3===s.length?c=new d[r](s[0],s[1],s[2]):4===s.length?c=new d[r](s[0],s[1],s[2],s[3]):5===s.length&&(c=new d[r](s[0],s[1],s[2],s[3],s[5]));var l=new d[i+"Material"](t[i]),u=new d.Mesh(c,l);return n&&(u=S.setupObject(u,n)),u}},createLight:function(){var e,t=M(arguments),n=t.str[0]||"DIRECT",o=t.num[0]||16777215,a=t.num[1]||1;return"DIRECT"===n?e=new d.DirectionalLight(o,a):"AMBIENT"===n&&(e=new d.AmbientLight(o,a)),e},findAll:function(){var e=M(arguments),t=e.obj[0],n=[];function o(e){if(n.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)o(e.children[t])}return o(t),n},findById:function(){var e=M(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(e.uuid===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByName:function(){var e=M(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(e.name===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByType:function(){var e=M(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(e.type===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByProperty:function(){var e=M(arguments),t=e.obj[0],n=e.obj[1],o=e.boo[0],a=[];function r(e){if(Object.keys(n).forEach((function(t){e[t]===n[t]&&a.push(e)})),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByMaterialName:function(){var e=M(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(void 0!==e.material&&e.material.name===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByMaterialProperty:function(){var e=M(arguments),t=e.obj[0],n=e.obj[1],o=e.boo[0],a=[];function r(e){if(void 0!==e.material&&Object.keys(n).forEach((function(t){e.material[t]===n[t]&&a.push(e)})),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},loadAll:_,loadAjax:function(){var e=M(arguments),t=e.str[0],n=e.obj[0]||{a:1},o=e.fun[0]||function(){};-1===t.indexOf("?")?t+="?dnjs_ajax_t="+Date.now():t+="&dnjs_ajax_t="+Date.now();var a=new FormData;Object.keys(n).forEach((function(e){var t=n[e];"object"===typeof t&&(t=JSON.stringify(t)),a.append(e,t)}));var r=new XMLHttpRequest;r.open("GET",t,!0),r.onreadystatechange=function(){4===this.readyState&&200===this.status&&null!=o&&o(this.responseText)},r.send(a)},loadImage:function(){var e=M(arguments),t=e.str[0],n=e.fun[0]||function(){},o=new Image;o.crossOrigin="anonymous",o.onload=function(){n(o)},o.src=t},loadBitmap:function(){var e=M(arguments),t=e.str[0],n=e.fun[0]||function(){};(new d.ImageBitmapLoader).load(t,(function(e){n(e)}))},loadModel:function(){var e,t=M(arguments),n=t.str[0],o=t.fun[0]||function(){},a=n.split(".").pop().toLowerCase();if("obj"===a){var r=n.substr(0,n.lastIndexOf(".obj"))+".mtl",i=new z.MTLLoader(_.manager);return e=new z.OBJLoader(_.manager),void i.load(r,(function(t){t.preload(),e.setMaterials(t),e.load(n,(function(e){e.traverse((function(e){e.isMesh&&(e.material.opacity=1,e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),o(e)}))}))}"glb"===a||"gltf"===a?e=new z.GLTFLoader(_.manager):"fbx"===a?e=new z.FBXLoader(_.manager):o(null),e.load(n,(function(e){e.scene&&(e=e.scene),e.traverse((function(e){e.isMesh&&(e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),o(e)}))},loadTexture:function(){var e=M(arguments),t=e.str[0],n=e.num[0]||0,o=e.num[1]||0,a=e.fun[0]||function(){};return new d.TextureLoader(_.manager).load(t,(function(e){0===n&&0===o||(e.wrapS=d.RepeatWrapping,e.wrapT=d.RepeatWrapping,e.repeat.set(n,o)),a(e)}))},setupControls:function(){var e,t,n,o=M(arguments),a=o.str[0].toUpperCase(),r=o.obj[0];"SHOOT"===a&&(t=o.obj[1]||{x:0,y:0,z:0},n=o.obj[2]||{},r.target.set(t.x,t.y,t.z),r.object.position.set(t.x,t.y,t.z+.01),r.enableZoom=!1,r.rotateSpeed=-.3),"ORBIT"===a&&(t=o.obj[1]||{x:0,y:0,z:0},e=o.obj[2]||{x:0,y:0,z:0},n=o.obj[3]||{},r.target.set(e.x,e.y,e.z),r.object.position.set(t.x,t.y,t.z),r.enableZoom=!0,r.rotateSpeed=1),"EXACT"===a&&(t=o.obj[1]||{x:0,y:0,z:0},e=o.obj[2]||{x:0,y:0,z:0},n=o.obj[3]||{},r.target.set(e.x,e.y,e.z),r.object.position.set(t.x,t.y,t.z),r.enableZoom=!1,r.rotateSpeed=-.3),Object.keys(n).forEach((function(e){r[e]=n[e]}))},setupObject:function(){var e=M(arguments),t=e.obj[0],n=e.obj[1];!1===Array.isArray(t)&&(t=[t]);var o=["position","rotation","scale"];return t.forEach((function(e){Object.keys(n).forEach((function(t){o.indexOf(t)>-1?(void 0!==n[t].x&&(e[t].x=n[t].x),void 0!==n[t].y&&(e[t].y=n[t].y),void 0!==n[t].z&&(e[t].z=n[t].z)):e[t]=n[t]}))})),1===t.length?t[0]:t},setupScene:function(){var e=M(arguments),t=e.obj[0],n=e.obj[1],o=e.num[0],a=e.num[1];t.setSize(o,a),t.renderer.setSize(o,a),n.aspect=o/a,n.updateProjectionMatrix()},setupMaterial:function(){var e=M(arguments),t=e.obj[0],n=e.obj[1],o=["map","emissiveMap","aoMap","bumpMap","displacementMap","normalMap","roughnessMap"];return!1===Array.isArray(t)&&(t=[t]),t.forEach((function(e){Object.keys(n).forEach((function(e){o.indexOf(e)>-1&&"string"===typeof n[e]?t[e]=S.loadTexture(n[e]):t[e]=n[e]}))})),1===t.length?t[0]:t},tweenControls:L,tweenMaterial:function(){var e,t,n=M(arguments),o=n.str[0]||"VALUE",a=n.obj[0],r=n.obj[1],i=n.num[0]||1e3,c=n.str[1]||"power1",s=n.fun[0]||function(){};if("CLONE"===o){var l=a.clone(!1);a.add(l),l.material=a.material.clone();var u=["alphaMap","aoMap","bumpMap","displacementMap","emissiveMap","envMap","lightMap","map","normalMap","roughnessMap"];u.forEach((function(e){a.material[e]&&(l.material[e]=a.material[e].clone(),l.material[e].needsUpdate=!0)})),r.forEach((function(e){u.indexOf(e)>-1?l.material[e].image=r[e]:l.material[e]=r[e]})),l.material.transparent=!0,l.material.opacity=0,l.material.needsUpdate=!0,e={opacity:0},t={opacity:1,duration:i/1e3,ease:c},O.timeline({onComplete:function(){a.material=l.material,a.remove(l),s()},onUpdate:function(){l.material.opacity=e.opacity}}).fromTo(e,e,t)}"VALUE"===o&&(e={},t={duration:i/1e3,ease:c},Object.keys(r).forEach((function(n){if("object"===typeof a.material[n]){var o=a.material[n];Object.keys(o).forEach((function(o){e[n+"."+o]=a.material[n][o],t[n+"."+o]=r[n][o]}))}else e[n]=a.material[n],t[n]=r[n]})),O.timeline({onComplete:function(){s()},onUpdate:function(){Object.keys(e).forEach((function(t){if(t.indexOf(".")>-1){var n=t.split(".");a.material[n[0]][n[1]]=e[t]}else a.material[t]=e[t]}))}}).fromTo(e,e,t))},tweenObject:function(){var e=M(arguments),t=e.obj[0],n=e.obj[1],o=e.str[0]||"power1",a=e.num[0]||1e3,r=e.fun[0]||function(){},i={},c={ease:o,duration:a/1e3},s=["position","rotation","scale"];s.forEach((function(e){i[e+"X"]=c[e+"X"]=t[e].x,i[e+"Y"]=c[e+"Y"]=t[e].y,i[e+"Z"]=c[e+"Z"]=t[e].z,n[e]&&(void 0!==n[e].x&&(c[e+"X"]=n[e].x),void 0!==n[e].y&&(c[e+"Y"]=n[e].y),void 0!==n[e].z&&(c[e+"Z"]=n[e].z))})),O.timeline({onComplete:function(){r()},onUpdate:function(){Object.keys(i).forEach((function(e){if("_GSAP"!==e){var n=e.substr(0,e.length-1),o=e[e.length-1].toLocaleLowerCase();t[n][o]=i[e]}}))}}).fromTo(i,i,c)}},k={Chair_1:{mesh_name:"Object018_Material_#2097633434_0",focus_xyz:{target:{x:-.11775131648266898,y:.9464330010711005,z:.16550077234838986},camera:{x:-.11166842518436101,y:.9516507336992346,z:.15951973333545327}},textures:[]},Chair_2:{mesh_name:"Object016_Material_#2097633368_0",focus_xyz:{target:{x:-.26256002650510235,y:.9930615937828298,z:.5337285620835259},camera:{x:-.25296730433701187,y:.9936301715411746,z:.5364955822747332}},textures:[]},Table:{mesh_name:"Box051_Material_#2097633443_0",focus_xyz:{target:{x:-.48052127556577,y:.972365429987424,z:-.050427422066861016},camera:{x:-.48727870827166303,y:.9793324970808956,z:-.05283513453731743}},textures:[]},Mirror:{mesh_name:"Object008_Material_#2097633444_0",focus_xyz:{target:{x:-1.2725560382366599,y:.9518806480556047,z:-.8984093350045922},camera:{x:-1.279671172913418,y:.9581089790762669,z:-.9016624490863223}},textures:[]},Vase:{mesh_name:"Box010_water_0",focus_xyz:{target:{x:1.1697456537011115,y:.957406548044033,z:1.0432164235169163},camera:{x:1.161677144984768,y:.9630923467564546,z:1.0416105041241448}},textures:[]},Glass:{mesh_name:"Box015_Material_#353_0",focus_xyz:{target:{x:-.15822192657700407,y:.9803593025196952,z:.3969926196130929},camera:{x:-.16368152566424918,y:.9782042366950934,z:.40508910225052097}},textures:[]}},A=(n(156),n(157),{}),B=S.createScene(160,160,!1);B.isLoading=!0,B.controls.enabled=!1,function e(){if(requestAnimationFrame(e),B.isLoading&&B.logo){B.composer.render();var t=B.logo.rotation.y%(2*Math.PI),n=.03;t>.3&&t<5.8&&(n=.07),B.logo.rotation.y+=n}}();var F=new d.AmbientLight(16777215,.7);B.scene.add(F),A.start=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};B.scene.background=new d.Color(e),B.root=document.querySelector(".arimac_load"),B.root.style.background=e,B.renderer.domElement.style.background=e;var n=document.createElement("div");n.className="arimac_lval",B.root.appendChild(n),"#FFF"===e&&B.root.setAttribute("class","arimac_load arimac_load_white"),S.loadModel("models/arimac/logo.fbx",(function(n){B.root.appendChild(B.renderer.domElement),B.logo=n,B.logo.rotation.y=5.8,B.scene.add(n),B.logo.scale.set(.2,.2,.2),B.isLoading=!0,"#FFF"===e&&(n.children[0].material[1].color=new d.Color("#131313")),t()}))},A.setValue=function(e){var t=document.querySelector(".arimac_load");document.querySelector(".arimac_load>.arimac_lval").innerHTML="Loading... "+e+"%",100===e&&setTimeout((function(){t.style.opacity=0,setTimeout((function(){t.style.display="none"}),300)}),1e3)},A.end=function(){var e=document.querySelector(".arimac_load");setTimeout((function(){e.style.opacity=0,setTimeout((function(){e.style.display="none"}),300)}),1e3)};var P=A,I=n(18),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){P.start("#000",(function(){X("#root").appendChild(N.renderer.domElement),function(){var e={room:"models/eloiza_e_ze_newton/scene.gltf"};S.loadAll(e,(function(e){N.model=e.room,N.model.position.set(0,0,0),N.model.scale.set(.008,.008,.008),N.scene.add(N.model),Object.keys(k).forEach((function(e){var t=k[e],n=S.findByName(N.model,t.mesh_name);S.createEvent("mouseenter",n,(function(e){G.selectedObjects=[n],N.renderer.domElement.style.cursor="pointer"})),S.createEvent("mouseleave",n,(function(e){G.selectedObjects=[],N.renderer.domElement.style.cursor="default"})),S.createEvent("click",n,(function(t){S.tweenControls("EXACT",N.controls,k[e].focus_xyz.target,k[e].focus_xyz.camera,1e3)}))}))}),(function(e){var t=parseInt(100*e/33);P.setValue(t)}))}()}))}},{key:"render",value:function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"arimac_load"}),Object(I.jsx)("div",{className:"arimac_logo arimac_logo_white"})]})}}]),n}(o.Component),R=window.innerWidth,U=window.innerHeight,X=function(e){return document.querySelector(e)},N=S.createScene(R,U),G=S.createEffect("Outline",N.scene,N.camera,N.composer,{edgeStrength:10,visibleEdgeColor:"#FFFFFF"});window.addEventListener("resize",(function(){R=window.innerWidth,U=window.innerHeight,S.setupScene(N.composer,N.camera,R,U)}));var q=new d.PointLight(16777215,.8);q.position.set(0,2,0),N.scene.add(q),S.setupControls("EXACT",N.controls,{x:-1.5082423410982888,y:1.0019399096423487,z:-1.0053198274219177},{x:-1.5,y:1,z:-1},{maxPolarAngle:1.8,minPolarAngle:.8}),N.ground=new d.Mesh(new d.BoxGeometry(3.5,.1,2.2),new d.MeshBasicMaterial({transparent:!0,opacity:0})),N.scene.add(N.ground),S.createEvent("click",N.ground,(function(e){S.tweenControls("FIXED",N.controls,{x:e.point.x,z:e.point.z},350*e.distance,"power1",(function(){N.controls.rotateSpeed=-.3}))})),S.tweenControls.captureSpot(N.controls);var W=D,H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(W,{})}),document.getElementById("root")),H()}},[[159,1,2]]]);
//# sourceMappingURL=main.94986553.chunk.js.map