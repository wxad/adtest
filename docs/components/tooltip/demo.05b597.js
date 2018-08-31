webpackJsonp(["components/tooltip/demo"],{"2Gum":function(n,s){n.exports={content:["article",["p","\u6309\u94ae\u7c7b\u578b"],["pre",{lang:"jsx",highlighted:'<span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        checked<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        radioValue<span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>\n        buttonText<span class="token punctuation">:</span> <span class="token string">"Align edge / \u8fb9\u7f18\u5bf9\u9f50"</span><span class="token punctuation">,</span>\n        placement<span class="token punctuation">:</span> <span class="token string">"bottomLeft"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nrender <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopTrigger</span>\n                <span class="token attr-name">popup</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>asd<span class="token punctuation">"</span></span>\n            <span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Align edge <span class="token operator">/</span> \u8fb9\u7f18\u5bf9\u9f50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PopTrigger</span><span class="token punctuation">></span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>\n                <span class="token attr-name">placement</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>placement<span class="token punctuation">}</span></span>\n                <span class="token attr-name">popup</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prompt</span> <span class="token attr-name">text"</span>\n            <span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>buttonText <span class="token punctuation">}</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>'},["code",'constructor(props) {\n    super(props)\n\n    this.state = {\n        checked: false,\n        radioValue: "1",\n        buttonText: "Align edge / \u8fb9\u7f18\u5bf9\u9f50",\n        placement: "bottomLeft"\n    }\n}\n\nrender () {\n    return (\n        <section>\n            <PopTrigger\n                popup="asd"\n            >\n                <Button>Align edge / \u8fb9\u7f18\u5bf9\u9f50</Button>\n            </PopTrigger>\n\n            <Tooltip\n                placement={this.state.placement}\n                popup="prompt text"\n            >\n                { this.state.buttonText }\n            </Tooltip>\n        </section>\n    )\n}']]],meta:{order:0,title:{"zh-CN":"\u6309\u94ae\u7c7b\u578b","en-US":"Type"},filename:"components/tooltip/demo/basic.md"}}},xOLA:function(n,s,a){n.exports={basic:a("2Gum")}}});