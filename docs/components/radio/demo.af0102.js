webpackJsonp(["components/radio/demo"],{"8/X1":function(n,a,s){n.exports={basic:s("DbKS"),withProp:s("SRTe")}},DbKS:function(n,a){n.exports={content:["article",["p","\u5185\u90e8\u9a71\u52a8"],["pre",{lang:"jsx",highlighted:'render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checked <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio.Group</span>\n                <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>\n                <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio.Group</span><span class="token punctuation">></span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio.Group</span>\n                <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>\n                <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio.Group</span><span class="token punctuation">></span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio.Group</span>\n                <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio.Group</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>'},["code",'render () {\n    return (\n        <section>\n            <Radio onChange={checked => console.log(checked)} />\n\n            <Radio.Group\n                defaultValue="1"\n                onChange={val => console.log(val)}\n            >\n                <Radio>1</Radio>\n                <Radio checked>2</Radio>\n                <Radio>3</Radio>\n            </Radio.Group>\n\n            <Radio.Group\n                value="1"\n                onChange={val => console.log(val)}\n            >\n                <Radio>1</Radio>\n                <Radio checked>2</Radio>\n                <Radio>3</Radio>\n            </Radio.Group>\n\n            <Radio.Group\n                onChange={val => console.log(val)}\n            >\n                <Radio>1</Radio>\n                <Radio>2</Radio>\n                <Radio checked>3</Radio>\n            </Radio.Group>\n        </section>\n    )\n}']]],meta:{order:0,title:{"zh-CN":"\u5185\u90e8\u9a71\u52a8","en-US":"Type"},filename:"components/radio/demo/basic.md"}}},SRTe:function(n,a){n.exports={content:["article",["pre",{lang:"jsx",highlighted:'<span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        checked<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nrender <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> checked<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span>\n                <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checked<span class="token punctuation">}</span></span>\n                <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checked <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio.Group</span>\n                <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n                <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio.Group</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>'},["code",'constructor(props) {\n    super(props)\n\n    this.state = {\n        checked: false,\n        value: "2",\n    }\n}\nrender () {\n    const { checked, value } = this.state\n    return (\n        <section>\n            <Radio\n                checked={checked}\n                onChange={checked => this.setState({ checked })}\n            />\n            <Radio.Group\n                value={value}\n                onChange={value => this.setState({ value })}\n            >\n                <Radio>1</Radio>\n                <Radio>2</Radio>\n                <Radio>3</Radio>\n            </Radio.Group>\n        </section>\n    )\n}']]],meta:{order:0,title:{"zh-CN":"\u5916\u90e8\u63a7\u5236","en-US":"Type"},filename:"components/radio/demo/withProp.md"}}}});