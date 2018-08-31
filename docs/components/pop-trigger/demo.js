webpackJsonp([5],{

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(1681),
}

/***/ }),

/***/ 1681:
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
        "highlighted": "<span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        checked<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        radioValue<span class=\"token punctuation\">:</span> <span class=\"token string\">\"1\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nrender <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span>\n                <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>regular<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>checked <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> checked <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n                <span class=\"token number\">1</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span>\n                <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>radioValue<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>radioValue <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> radioValue <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">disabled</span><span class=\"token punctuation\">></span></span><span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span><span class=\"token punctuation\">></span></span><span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "constructor(props) {\n    super(props)\n\n    this.state = {\n        checked: false,\n        radioValue: \"1\",\n    }\n}\n\nrender () {\n    return (\n        <section>\n            <Radio\n                checked={this.state.checked}\n                size=\"regular\"\n                onChange={checked => this.setState({ checked })}\n            >\n                1\n            </Radio>\n            <Radio.Group\n                value={this.state.radioValue}\n                onChange={radioValue => this.setState({ radioValue })}\n                size=\"small\"\n            >\n                <Radio disabled>1</Radio>\n                <Radio><span>2</span></Radio>\n                <Radio>3</Radio>\n            </Radio.Group>\n        </section>\n    )\n}"
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "按钮类型",
      "en-US": "Type"
    },
    "filename": "components/pop-trigger/demo/basic.md"
  }
};

/***/ })

});