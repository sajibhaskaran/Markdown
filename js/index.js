"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = "# Heading\n## Sub-heading\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a line break\n\n Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\n\nThe rain---not the reign---in Spain.\n\n";

var Markdown = function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown(props) {
    _classCallCheck(this, Markdown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      content: ''
    };
    _this.changeToMarkup = _this.changeToMarkup.bind(_this);
    return _this;
  }

  Markdown.prototype.componentWillMount = function componentWillMount() {

    this.setState({
      content: defaultProps
    });
  };

  Markdown.prototype.changeText = function changeText(e) {
    //console.log(e.target.value);
    this.setState({
      content: e.target.value
    });
  };

  Markdown.prototype.changeToMarkup = function changeToMarkup(content) {

    return {
      __html: marked(content)
    };
  };

  Markdown.prototype.render = function render() {
    var content = this.state.content;

    return React.createElement(
      "div",
      { className: "row content" },
      React.createElement(
        "h1",
        { className: "title" },
        "Markdown Previewer"
      ),
      React.createElement(
        "div",
        { className: "col-sm-6 col-xs-12" },
        React.createElement("textarea", { value: this.state.content, onChange: this.changeText.bind(this), rows: "20" })
      ),
      React.createElement(
        "div",
        { className: "col-sm-6 col-xs-12" },
        React.createElement("div", { className: "markdown", dangerouslySetInnerHTML: this.changeToMarkup(content) })
      )
    );
  };

  return Markdown;
}(React.Component);

ReactDOM.render(React.createElement(Markdown, null), app);