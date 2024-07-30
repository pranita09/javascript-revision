var MyComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },

  getDefaultProps: function () {
    return {
      name: "Guest",
    };
  },

  getInitialState: function () {
    return { count: 0 };
  },

  handleClick: function () {
    this.setState({ count: this.state.count + 1 });
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: this.handleClick },
        this.state.count
      ),
      React.createElement("div", null, "Hello, ", this.props.name)
    );
  },
});

ReactDOM.render(
  React.createElement(MyComponent, { name: "John" }),
  document.getElementById("root")
);
