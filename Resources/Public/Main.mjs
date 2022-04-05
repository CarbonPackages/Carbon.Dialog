var u=['a[href]:not([tabindex^="-"])','area[href]:not([tabindex^="-"])','input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])','input[type="radio"]:not([disabled]):not([tabindex^="-"])','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','iframe:not([tabindex^="-"])','audio[controls]:not([tabindex^="-"])','video[controls]:not([tabindex^="-"])','[contenteditable]:not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])'],l=9,c=27;function n(t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.$el=t,this.shown=!1,this._id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this._previouslyFocused=null,this._listeners={},this.create()}n.prototype.create=function(){return this.$el.setAttribute("aria-hidden",!0),this.$el.setAttribute("aria-modal",!0),this.$el.setAttribute("tabindex",-1),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),this._openers=o('[data-a11y-dialog-show="'+this._id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this)),this._closers=o("[data-a11y-dialog-hide]",this.$el).concat(o('[data-a11y-dialog-hide="'+this._id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this};n.prototype.show=function(t){return this.shown?this:(this._previouslyFocused=document.activeElement,this.$el.removeAttribute("aria-hidden"),this.shown=!0,a(this.$el),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t),this)};n.prototype.hide=function(t){return this.shown?(this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this._previouslyFocused&&this._previouslyFocused.focus&&this._previouslyFocused.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this};n.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this};n.prototype.on=function(t,e){return typeof this._listeners[t]>"u"&&(this._listeners[t]=[]),this._listeners[t].push(e),this};n.prototype.off=function(t,e){var i=(this._listeners[t]||[]).indexOf(e);return i>-1&&this._listeners[t].splice(i,1),this};n.prototype._fire=function(t,e){var i=this._listeners[t]||[],s=new CustomEvent(t,{detail:e});this.$el.dispatchEvent(s),i.forEach(function(h){h(this.$el,e)}.bind(this))};n.prototype._bindKeypress=function(t){!this.$el.contains(document.activeElement)||(this.shown&&t.which===c&&this.$el.getAttribute("role")!=="alertdialog"&&(t.preventDefault(),this.hide(t)),this.shown&&t.which===l&&p(this.$el,t))};n.prototype._maintainFocus=function(t){this.shown&&!t.target.closest('[aria-modal="true"]')&&!t.target.closest("[data-a11y-dialog-ignore-focus-trap]")&&a(this.$el)};function f(t){return Array.prototype.slice.call(t)}function o(t,e){return f((e||document).querySelectorAll(t))}function a(t){var e=t.querySelector("[autofocus]")||t;e.focus()}function b(t){return o(u.join(","),t).filter(function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})}function p(t,e){var i=b(t),s=i.indexOf(document.activeElement);e.shiftKey&&s===0?(i[i.length-1].focus(),e.preventDefault()):!e.shiftKey&&s===i.length-1&&(i[0].focus(),e.preventDefault())}function r(){o("[data-a11y-dialog]").forEach(function(t){new n(t)})}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16));var d=[];function y(t){let e=!0;function i(s){e&&(typeof t=="function"&&t(s),e=!1)}document.readyState=="loading"?document.addEventListener("readystatechange",i):i()}y(()=>{[...document.querySelectorAll(".carbon-dialog")].forEach(t=>{d.push(new n(t))})});var v=d;export{v as default};
