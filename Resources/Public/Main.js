/*!
 * Carbon.Dialog - created by Jon Uhlmann
 * @build 2019-03-13 06:21
 * @link https://github.com/https://github.com/CarbonPackages/Carbon.Dialog
 */
!function(){"use strict";var t,i=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];function e(t,i){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.container=t,this.dialog=t.querySelector('dialog, [role="dialog"], [role="alertdialog"]'),this.role=this.dialog.getAttribute("role")||"dialog",this.useDialog="show"in document.createElement("dialog")&&"DIALOG"===this.dialog.nodeName,this._listeners={},this.create(i)}function n(t){return Array.prototype.slice.call(t)}function o(t,i){return n((i||document).querySelectorAll(t))}function s(t){var i=r(t),e=t.querySelector("[autofocus]")||i[0];e&&e.focus()}function r(t){return o(i.join(","),t).filter(function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)})}e.prototype.create=function(t){var i,e;return this._targets=this._targets||function(t){if(NodeList.prototype.isPrototypeOf(t))return n(t);if(Element.prototype.isPrototypeOf(t))return[t];if("string"==typeof t)return o(t)}(t)||(i=this.container,(e=n(i.parentNode.childNodes).filter(function(t){return 1===t.nodeType&&!t.classList.contains("carbon-dialog")})).splice(e.indexOf(i),1),e),this.shown=this.dialog.hasAttribute("open"),this.dialog.setAttribute("role",this.role),this.useDialog?this.container.setAttribute("data-a11y-dialog-native",""):this.shown?this.container.removeAttribute("aria-hidden"):this.container.setAttribute("aria-hidden",!0),this._openers=o('[data-a11y-dialog-show="'+this.container.id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this)),this._closers=o("[data-a11y-dialog-hide]",this.container).concat(o('[data-a11y-dialog-hide="'+this.container.id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},e.prototype.show=function(i){return this.shown?this:(this.shown=!0,t=document.activeElement,this.useDialog?this.dialog.showModal(i instanceof Event?void 0:i):(this.dialog.setAttribute("open",""),this.container.removeAttribute("aria-hidden"),this._targets.forEach(function(t){t.setAttribute("aria-hidden","true")})),s(this.dialog),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",i),this)},e.prototype.hide=function(i){return this.shown?(this.shown=!1,this.useDialog?this.dialog.close(i instanceof Event?void 0:i):(this.dialog.removeAttribute("open"),this.container.setAttribute("aria-hidden","true"),this._targets.forEach(function(t){t.removeAttribute("aria-hidden")})),t&&t.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",i),this):this},e.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},e.prototype.on=function(t,i){return void 0===this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(i),this},e.prototype.off=function(t,i){var e=this._listeners[t].indexOf(i);return e>-1&&this._listeners[t].splice(e,1),this},e.prototype._fire=function(t,i){(this._listeners[t]||[]).forEach(function(t){t(this.container,i)}.bind(this))},e.prototype._bindKeypress=function(t){this.shown&&27===t.which&&"alertdialog"!==this.role&&(t.preventDefault(),this.hide()),this.shown&&9===t.which&&function(t,i){var e=r(t),n=e.indexOf(document.activeElement);i.shiftKey&&0===n?(e[e.length-1].focus(),i.preventDefault()):i.shiftKey||n!==e.length-1||(e[0].focus(),i.preventDefault())}(this.dialog,t)},e.prototype._maintainFocus=function(t){this.shown&&!this.container.contains(t.target)&&s(this.dialog)};var h=[];!function(t){var i=!0;function e(e){i&&("function"==typeof t&&t(e),i=!1)}"loading"==document.readyState?document.addEventListener("readystatechange",e):e()}(function(){for(var t=document.querySelectorAll(".carbon-dialog"),i=0;i<t.length;i++)h.push(new e(t[i]))})}();
