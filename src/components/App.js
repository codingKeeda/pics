import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    images: []
  }

  onFormSubmit = async (term) => {
    try {
      const response = await unsplash.get('/search/photos', {
        params: { query: term }
      });
      this.setState({ images: response.data.results })
    } catch (e) {
      console.log(e.response.data.errors.join(','));
    }
  }

  render() {
    return (
      <div className="App">
        App
        <SearchBar onSubmit={this.onFormSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
