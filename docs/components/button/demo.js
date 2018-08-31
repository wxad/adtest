webpackJsonp([7],{

/***/ 1660:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(1677),
}

/***/ }),

/***/ 1677:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "按钮类型"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        radioValue<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nrender <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span>\n                <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>wrapper <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>wrapper <span class=\"token operator\">=</span> wrapper<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> \n                    height<span class=\"token punctuation\">:</span> <span class=\"token string\">\"200px\"</span><span class=\"token punctuation\">,</span> \n                    backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#fafbfc\"</span> \n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Affix</span>\n                    <span class=\"token attr-name\">getContainer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>wrapper<span class=\"token punctuation\">}</span></span>\n                <span class=\"token punctuation\">></span></span>\n                    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>永远会在容器内<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Affix</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>\n                <span class=\"token comment\" spellcheck=\"true\">/*\n                    &lt;Button size=\"mini\" ref={button => this.button = button}>按钮测试&lt;/Button>\n                    &lt;Checkbox\n                    size=\"small\" onChange={val => console.log(val)}>1&lt;/Checkbox>\n                    &lt;Checkbox.Group\n                        value={this.state.value}\n                        onChange={value => this.setState({ value })}\n                        size=\"small\"\n                    >\n                        &lt;Checkbox>1&lt;/Checkbox>\n                        &lt;Checkbox>&lt;span>2&lt;/span>&lt;/Checkbox>\n                        &lt;Checkbox>3&lt;/Checkbox>\n                    &lt;/Checkbox.Group>\n\n                    &lt;Radio\n                    size=\"regular\" onChange={val => console.log(val)}>1&lt;/Radio>\n                    &lt;Radio.Group\n                        value={this.state.radioValue}\n                        onChange={radioValue => this.setState({ radioValue })}\n                        size=\"regular\"\n                    >\n                        &lt;Radio>1&lt;/Radio>\n                        &lt;Radio>&lt;span>2&lt;/span>&lt;/Radio>\n                        &lt;Radio>3&lt;/Radio>\n                    &lt;/Radio.Group>\n                */</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "constructor(props) {\n    super(props)\n\n    this.state = {\n        value: [],\n        radioValue: \"\",\n    }\n}\n\nrender () {\n    return (\n        <section>\n            <div\n                ref={wrapper => this.wrapper = wrapper}\n                style={{ \n                    height: \"200px\", \n                    backgroundColor: \"#fafbfc\" \n                }}\n            >\n                <Affix\n                    getContainer={() => this.wrapper}\n                >\n                    <Button type=\"primary\">永远会在容器内</Button>\n                </Affix>\n            </div>\n            {\n                /*\n                    <Button size=\"mini\" ref={button => this.button = button}>按钮测试</Button>\n                    <Checkbox\n                    size=\"small\" onChange={val => console.log(val)}>1</Checkbox>\n                    <Checkbox.Group\n                        value={this.state.value}\n                        onChange={value => this.setState({ value })}\n                        size=\"small\"\n                    >\n                        <Checkbox>1</Checkbox>\n                        <Checkbox><span>2</span></Checkbox>\n                        <Checkbox>3</Checkbox>\n                    </Checkbox.Group>\n\n                    <Radio\n                    size=\"regular\" onChange={val => console.log(val)}>1</Radio>\n                    <Radio.Group\n                        value={this.state.radioValue}\n                        onChange={radioValue => this.setState({ radioValue })}\n                        size=\"regular\"\n                    >\n                        <Radio>1</Radio>\n                        <Radio><span>2</span></Radio>\n                        <Radio>3</Radio>\n                    </Radio.Group>\n                */\n            }\n        </section>\n    )\n}"
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "按钮类型",
      "en-US": "Type"
    },
    "filename": "components/button/demo/basic.md"
  }
};

/***/ })

});