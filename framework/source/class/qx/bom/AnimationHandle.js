/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */


qx.Bootstrap.define("qx.bom.AnimationHandle", 
{
  extend : Object,


  construct : function() {
    this.playing = true;
    this.ended = false;

    this.__playState = qx.core.Environment.get("css.animation.playstate");
  },


  members :
  {
    __playState : null,


    pause : function() {
      if (this.el) {
        this.el.style[this.__playState] = "paused";
        this.el.$$animation.playing = false;
      }
    },


    play : function() {
      if (this.el) {
        this.el.style[this.__playState] = "running";
        this.el.$$animation.playing = true;    
      }
    },


    stop : function() {
      if (this.el) {
        this.el.style[this.__playState] = "";
        this.el.style[qx.core.Environment.get("css.animation.style")] = "";
        this.el.$$animation.playing = false;
        this.el.$$animation.ended = true;
      }
    }
  }
});