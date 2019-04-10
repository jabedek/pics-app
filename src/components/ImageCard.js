import React from 'react';
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    // + 1 - to make sure that if we have a portion of a row, like 1.2 or 1.8 etc, it's gonna be rounded up.
    // example:
    // 234 / 150 = 1.56 - it's more than 1 row already.
    // 1.56 + 1 = 2.56
    // Math.ceil rounds down to 2 - it works.

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
