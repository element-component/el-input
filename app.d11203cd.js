!function(s){function n(a){if(t[a])return t[a].exports;var e=t[a]={exports:{},id:a,loaded:!1};return s[a].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var t={};return n.m=s,n.c=t,n.p="",n(0)}([function(s,n,t){"use strict";function a(s){return s&&s.__esModule?s:{"default":s}}var e=t(9),l=a(e);new l["default"]({el:"body",components:{app:t(6)}})},function(s,n,t){"use strict";s.exports={name:"app",components:{ElInput:t(7)},template:t(5),data:function(){return{input:"",input1:"",input2:"",input3:0,input4:"",input5:"",input6:""}}}},function(s,n,t){"use strict";function a(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(n,"__esModule",{value:!0});var e=t(8),l=a(e);n["default"]={name:"el-input",props:{placeholder:String,model:{required:!0,twoAway:!0},suggestion:{type:Array,"default":function(){return[]}},type:String,disabled:Boolean,cache:Boolean,effect:{type:String,"default":"text",validator:function(s){return["text","number","special"].indexOf(s)>-1}}},directives:{clickoutside:l["default"]},data:function(){return{show:!1,editing:!1}},methods:{handleMouseLeave:function(){this.show=!1,this.model&&this.suggestion.indexOf(this.model)<0&&this.cache&&this.suggestion.push(this.model)}}}},function(s,n){},function(s,n){s.exports='<div class=input :class="{ \'input--disabled\': disabled, \'input--active\': show }" v-clickoutside=handleMouseLeave()> <span v-if="effect === \'special\'" :class="{ \'input__placeholder--enter\': editing || model }" class=input__placeholder @click="editing = true, $els.input.focus()" v-text=placeholder> </span> <input v-el:input @blur="editing = false" :type="type || effect" v-model=model class=input__original :disabled=disabled :number="effect === \'number\'" :placeholder="effect === \'special\' ? \'\' : placeholder" @focus="editing = true, show = true"> <ul v-show=show class=input__dropdown><li class=input__option :class="{\'input__option--active\': item === model}" v-for="item in suggestion | filterBy model" v-text=item @click="model = item, show = false"></li></ul> </div>'},function(s,n){s.exports='<h1 id=el-input>el-input</h1> <blockquote> <p>Input &#x8F93;&#x5165;&#x6846;</p> </blockquote> <hr> <h2 id=1->1. &#x57FA;&#x672C;&#x7528;&#x6CD5;</h2> <p><el-input placeholder=&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9; :model.sync=input> </el-input></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>el-input</span>\n  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&quot;</span>\n  <span class=hljs-attr>:model.sync</span>=<span class=hljs-string>&quot;input&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>el-input</span>&gt;</span>\n</pre> <h2 id=2->2. &#x7981;&#x7528;&#x72B6;&#x6001;</h2> <p><el-input disabled=disabled placeholder=&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9; :model.sync=input1> </el-input></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>el-input</span>\n  <span class=hljs-attr>disabled</span>\n  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&quot;</span>\n  <span class=hljs-attr>:model.sync</span>=<span class=hljs-string>&quot;input1&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>el-input</span>&gt;</span>\n</pre> <h2 id=3->3. &#x7279;&#x6B8A;&#x7528;&#x6CD5;</h2> <p><el-input effect=special type=email placeholder=&#x90AE;&#x7BB1;&#x5730;&#x5740; :model.sync=input6> </el-input></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>el-input</span>\n  <span class=hljs-attr>effect</span>=<span class=hljs-string>&quot;special&quot;</span>\n  <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;email&quot;</span>\n  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;&#x90AE;&#x7BB1;&#x5730;&#x5740;&quot;</span>\n  <span class=hljs-attr>:model.sync</span>=<span class=hljs-string>&quot;input6&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>el-input</span>&gt;</span>\n</pre> <h2 id=4->4. &#x6570;&#x5B57;&#x8F93;&#x5165;&#x6846;</h2> <p><el-input effect=number placeholder=&#x53EA;&#x5141;&#x8BB8;&#x6570;&#x5B57; :model.sync=input3> </el-input></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>el-input</span>\n  <span class=hljs-attr>effect</span>=<span class=hljs-string>&quot;number&quot;</span>\n  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;&#x53EA;&#x5141;&#x8BB8;&#x6570;&#x5B57;&quot;</span>\n  <span class=hljs-attr>:model.sync</span>=<span class=hljs-string>&quot;input3&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>el-input</span>&gt;</span>\n</pre> <h2 id=5->5. &#x6709;&#x8F93;&#x5165;&#x5EFA;&#x8BAE;</h2> <p><el-input :suggestion="[&apos;&#x63D0;&#x793A;&apos;, &apos;&#x4FE1;&#x606F;&apos;, &apos;&#x997F;&#x4E86;&#x4E48;&apos;]" placeholder=&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9; :model.sync=input4> </el-input></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>el-input</span>\n  <span class=hljs-attr>:suggestion</span>=<span class=hljs-string>&quot;[&apos;&#x63D0;&#x793A;&apos;, &apos;&#x4FE1;&#x606F;&apos;, &apos;&#x997F;&#x4E86;&#x4E48;&apos;]&quot;</span>\n  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&quot;</span>\n  <span class=hljs-attr>:model.sync</span>=<span class=hljs-string>&quot;input4&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>el-input</span>&gt;</span>\n</pre> <h2 id=6->6. &#x6709;&#x8F93;&#x5165;&#x5386;&#x53F2;</h2> <p><el-input cache="" placeholder=&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9; :model.sync=input5> </el-input></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>el-input</span>\n  <span class=hljs-attr>cache</span>\n  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&quot;</span>\n  <span class=hljs-attr>:model.sync</span>=<span class=hljs-string>&quot;input5&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>el-input</span>&gt;</span>\n</pre>'},function(s,n,t){var a,e;a=t(1),s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},function(s,n,t){var a,e;t(3),a=t(2),e=t(4),s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},function(s,n,t){!function(n,t){s.exports=t()}(this,function(){"use strict";var s={bind:function(){var s=this;this.handler=function(n){s.vm&&!s.el.contains(n.target)&&s.vm.$eval(s.expression)},document.addEventListener("click",this.handler)},unbind:function(){document.removeEventListener("click",this.handler)},install:function(s){s.directive("clickoutside",{bind:this.bind,unbind:this.unbind})}};return s})},function(s,n){s.exports=Vue}]);