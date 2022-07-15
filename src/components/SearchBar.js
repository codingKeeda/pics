import React from "react";

class SearchBar extends React.Component{
  state = {
    searchTerm: ''
  }
  
  onInputChange = (data) => {
    this.setState({searchTerm: data.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Image search: </label>
          <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;