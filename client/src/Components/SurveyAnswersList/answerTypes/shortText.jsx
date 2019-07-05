import { MDBInput } from "mdbreact";
import React from "react";
import { Alert } from "rsuite";

class shortText extends React.Component {
  constructor(props) {
    super(props);
    this.length = 0;
  }
  componentDidMount() {
    this.props.change({ value: "" });
  }

  onTextchanged = event => {
    this.length += 1;
    if (this.length < this.props.content.max)
      this.props.change({ value: event.target.value });
    else {
      Alert.error("text limit exceeded");
    }
  };
  render() {
    let content = this.props.isResponse ? (
      <MDBInput
        disabled
        value={this.props.answer.value}
        label="Here you should write your answer"
        onChange={this.onTextchanged}
      />
    ) : (
      <MDBInput
        maxLength={this.props.content.max}
        label="Here you should write your answer"
        onChange={this.onTextchanged}
      />
    );
    return <div>{content}</div>;
  }
}
export default shortText;
