(()=>{"use strict";class t{#t;#e;#s;#i;static id=0;constructor(e){e&&(this.#t=document.createElement(e),this.#t.id=t.id++)}get id(){return this.#t.id}appendChild(t){return t&&(t.parent=this,this.#t.appendChild(t.elem)),this}removeChild(t){return this.#t.removeChild(t.elem),this}set parent(t){this.#i=t}get parent(){return this.#i}get elem(){return this.#t}set elem(t){this.#t=t}get outerHTML(){return this.#t.outerHTML}set innerText(t){this.#t.innerText=t}set innerHTML(t){this.#t.innerHTML=t}get innerHTML(){return this.#t.innerHTML}print(){return console.log(this.outerHTML),this}addClasses(...t){return this.#t.classList.add(...t),this}removeClasses(...t){return this.#t.classList.remove(...t),this}show(){return this.style.visibility="visible",this}hide(){return this.style.visibility="hidden",this}onClick(t){return this.cursor("pointer"),this.#t.onclick=t?()=>t(this):null,this}remove(){return this.#t.remove(),this}replace(t){return this.parent&&this.parent.elem.replaceChild(t.elem,this.elem),this}onUpdate(t){return this.#e=()=>t(this),this}startUpdate(t){return this.#s=setInterval(this.#e,t),this}stopUpdate(){return clearInterval(this.#s),this}cursor(t){return this.style.cursor=t,this}color(t){return this.style.color=t,this}backgroundColor(t){return this.style.backgroundColor=t,this}backgroundImage(t,e,s){return this.style.backgroundImage=`url(${t})`,this.style.backgroundRepeat="no-repeat",this.style.backgroundSize=e,s=s||1,this.style.cssText+=`aspect-ratio:${s}`,this}setTooltip(t){return this.#t.setAttribute("aria-hidden",!0),this.#t.setAttribute("data-bs-toggle","tooltip"),this.#t.setAttribute("data-bs-placement","top"),this.#t.setAttribute("title",t),this}size(t,e){return this.style.width=t,this.style.height=e,this}filter(t){return this.style.filter=t,this}onWheel(t){return this.#t.onwheel=e=>t(this,e),this}center(){return this.style.margin="auto",this}zIndex(t){return this.style.zIndex=t,this}display(t){return this.style.display=t,this}maxWidth(t){return this.style.maxWidth=t,this}minWidth(t){return this.style.minWidth=t,this}maxHeight(t){return this.style.maxHeight=t,this}minHeight(t){return this.style.minHeight=t,this}get style(){return this.#t.style}onMouseOver(t){return this.#t.onmouseover=e=>t(this,e),this}onMouseLeave(t){return this.#t.onmouseleave=e=>t(this,e),this}addAnimation(t,e,s,i,r,n,h,l){const d=`${t||""} ${e||""} ${s||""} ${i||""} ${r||""} ${n||""} ${h||""} ${l||""}`;return this.style.animation?this.style.animation+=`, ${d}`:this.style.animation=d,this}addTransition(t,e,s,i){const r=`${t} ${e} ${s||""} ${i||""}`;return this.style.transition?this.style.transition+=`, ${r}`:this.style.transition=r,this}}class e extends t{constructor(){super("div"),this.addClasses("container-fluid")}}class s extends t{constructor(t){super("div"),this.addClasses("col"),this.appendChild(t)}}class i extends t{constructor(t){super("div"),this.addClasses("row",`g-${t}`)}add(t){return this.appendChild(t),this}remove(t){return t.remove(),this}}class r extends t{constructor(){super("div"),this.addClasses("card-header")}}class n extends t{constructor(t,e){super("div"),this.addClasses("card-body"),this.innerHTML+=t?`<h5 class="card-title">${t}</h5>`:"",this.innerHTML+=e?`<p class="card-text">${e}</p>`:""}}class h extends t{constructor(){super("div"),this.addClasses("card-footer")}}class l extends t{#r;#n;#h;#l;constructor(t,e,s,i,r){super("div"),this.addClasses("card","text-break"),r&&(this.style.width=r),t&&this.appendChild(t),e&&this.appendChild(e),s&&this.appendChild(s),i&&this.appendChild(i),this.#r=t,this.#n=e,this.#h=s,this.#l=i}get header(){return this.#r}get img(){return this.#n}get body(){return this.#h}get footer(){return this.#l}}function d(){return new l(new r,null,new n("Card body title","Card body text"),new h,null)}(new class extends t{constructor(){super(),this.elem=document.body}}).appendChild(new class extends e{#d;constructor(t,e,s,r,n,h,l){super(),this.#d=new i(t).addClasses(`row-cols-${e}`,`row-cols-sm-${s}`,`row-cols-md-${r}`,`row-cols-lg-${n}`,`row-cols-xl-${h}`,`row-cols-xxl-${l}`),this.appendChild(this.#d)}get row(){return this.#d}}(3,1,2,3,4,5,6).row.add(new s(d())).add(new s(d())).add(new s(d())).add(new s(d())).add(new s(d())).add(new s(d())))})();