import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = e => {
    e.preventDefault(); // prevents refreshing the page
    this.props.onSubmit(this.state.term); // now invoke 'onSubmit' function given by Parent component
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
