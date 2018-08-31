webpackJsonp([8],{

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(1676),
}

/***/ }),

/***/ 1676:
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
        "highlighted": "<span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        radioValue<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nrender <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span>\n                <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>wrapper <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>wrapper <span class=\"token operator\">=</span> wrapper<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n                    paddingLeft<span class=\"token punctuation\">:</span> <span class=\"token string\">\"10%\"</span><span class=\"token punctuation\">,</span> \n                    height<span class=\"token punctuation\">:</span> <span class=\"token string\">\"200px\"</span><span class=\"token punctuation\">,</span> \n                    backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#fafbfc\"</span> \n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Affix</span><span class=\"token punctuation\">></span></span>\n                    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>永远会在容器内<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Affix</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "constructor(props) {\n    super(props)\n\n    this.state = {\n        value: [],\n        radioValue: \"\",\n    }\n}\n\nrender () {\n    return (\n        <section>\n            <Switch />\n            <div\n                ref={wrapper => this.wrapper = wrapper}\n                style={{\n                    paddingLeft: \"10%\", \n                    height: \"200px\", \n                    backgroundColor: \"#fafbfc\" \n                }}\n            >\n                <Affix>\n                    <Button type=\"primary\">永远会在容器内</Button>\n                </Affix>\n            </div>\n        </section>\n    )\n}"
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "按钮类型",
      "en-US": "Type"
    },
    "filename": "components/affix/demo/basic.md"
  }
};

/***/ })

});