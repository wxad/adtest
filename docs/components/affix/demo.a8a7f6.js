webpackJsonp(["components/affix/demo"],{Rt1g:function(n,s){n.exports={content:["article",["p","\u6309\u94ae\u7c7b\u578b"],["pre",{lang:"jsx",highlighted:'<span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        radioValue<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nrender <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n                <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>wrapper <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>wrapper <span class="token operator">=</span> wrapper<span class="token punctuation">}</span></span>\n                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                    paddingLeft<span class="token punctuation">:</span> <span class="token string">"10%"</span><span class="token punctuation">,</span> \n                    height<span class="token punctuation">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span> \n                    backgroundColor<span class="token punctuation">:</span> <span class="token string">"#fafbfc"</span> \n                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6c38\u8fdc\u4f1a\u5728\u5bb9\u5668\u5185<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>'},["code",'constructor(props) {\n    super(props)\n\n    this.state = {\n        value: [],\n        radioValue: "",\n    }\n}\n\nrender () {\n    return (\n        <section>\n            <Switch />\n            <div\n                ref={wrapper => this.wrapper = wrapper}\n                style={{\n                    paddingLeft: "10%", \n                    height: "200px", \n                    backgroundColor: "#fafbfc" \n                }}\n            >\n                <Affix>\n                    <Button type="primary">\u6c38\u8fdc\u4f1a\u5728\u5bb9\u5668\u5185</Button>\n                </Affix>\n            </div>\n        </section>\n    )\n}']]],meta:{order:0,title:{"zh-CN":"\u6309\u94ae\u7c7b\u578b","en-US":"Type"},filename:"components/affix/demo/basic.md"}}},vWMz:function(n,s,a){n.exports={basic:a("Rt1g")}}});