/*!
 * VERSION: 1.0.0
 * DATE: 2018-06-21
 * UPDATES AND DOCS AT: github.com/2600BottlesOnTheWall/greensock-plugin
 * @author: Evgeniy Zalevskiy, 2600@ukr.net
 **/

var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

    "use strict";

    _gsScope._gsDefine.plugin({

        propName: "transform",
        priority: 0,
        API: 2,
        version: "1.0.0",

        init: function(target, value, tween, index) {
            if(typeof(value)=='string'&&value.substr(0,11)==='translate3d'){
                //Set target to CSSStyleDeclaration if it isn`t.
                target=target instanceof HTMLElement?target.style:target instanceof CSSStyleDeclaration?target:Error('Wrong type of target was provided');
                //Store value as endpoint
               var end=value;
                value={
                    begin:target.transform===''?'translate3d(0px,0px,0px)':target.transform,
                    end:end
                };
                this._addTween(target, "transform", value.begin, value.end,"transform", false);
            }

            return true;
        }



    });

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }/**
 * Created by комп1 on 21.06.2018.
 */