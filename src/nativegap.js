/**!
 * @fileOverview nativegap.js.js - Build native apps for all major platforms
 * @version 1.0.0
 * @license
 * MIT License
 *
 * Copyright (c) 2018 NativeGap
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class NativeGap {

     constructor(options = {}) {
          this.getPlatform();

          let defaults = {
               path: 'nativegap',
               android: {
                    scale: 1.125
               },
               ios: {
                    scale: 1.125
               },
               windows: {
                    scale: 1
               },
               chrome: {
                    scale: 1
               },
               web: {
                    scale: 1
               }
          };
          this._options = extend( {}, defaults, options );

          this.scale();
     }

     get platform() {
          return this._platform;
     }
     set platform(val) {
          document.cookie = 'nativegapPlatform=' + val;
          this._platform = val;
     }

     get options() {
          return this._options;
     }
     set options(val) {
          this._options = val;
     }

     getPlatform() {
          this.platform(getCookie('nativegapPlatform') || 'web');
          if ( window.location.pathname.includes(this.options.path) && NativeGap.platforms.includes(window.location.pathname.substr(this.href.lastIndexOf('/') + 1)) )
               this.platform(window.location.pathname.substr(this.href.lastIndexOf('/') + 1));
     }

     scale() {
          document.querySelector(':root').style.fontSize = 16 * this.options[this.platform].scale;
     }

     static platforms() {
          return ['android', 'ios', 'windows', 'chrome'];
     }

}


function extend() {
     for ( let i=1; i<arguments.length; i++ )
          for ( let key in arguments[i] )
               if ( arguments[i].hasOwnProperty(key) )
                    arguments[0][key] = arguments[i][key];
     return arguments[0];
}
function getCookie(name) {
     var value = '; ' + document.cookie;
     var parts = value.split( '; ' + name + '=' );
     if ( parts.length == 2 )
          return parts.pop().split(';').shift();
}


export default NativeGap;
