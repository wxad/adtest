webpackJsonp([0],{

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(1686),
    'withProp': __webpack_require__(1687),
}

/***/ }),

/***/ 1686:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "内部驱动"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "render <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">defaultChecked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "render () {\n    return (\n        <section>\n            <Switch />\n            <Switch defaultChecked={true} />\n        </section>\n    )\n}"
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "内部驱动",
      "en-US": "Type"
    },
    "filename": "components/switch/demo/basic.md"
  }
};

/***/ }),

/***/ 1687:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "外部控制"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        checked<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\nrender <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span>\n                <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>checked <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> checked <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "constructor(props) {\n    super(props)\n    this.state = {\n        checked: false\n    }\n}\nrender () {\n    return (\n        <section>\n            <Switch checked />\n            <Switch checked={false} />\n            <Switch\n                checked={this.state.checked}\n                onChange={checked => this.setState({ checked })}\n            />\n        </section>\n    )\n}"
      ]
    ]
  ],
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "外部控制",
      "en-US": "Type"
    },
    "filename": "components/switch/demo/withProp.md"
  }
};

/***/ })

});