import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        console.log(response);
        this.setState({ albums: response.data });
      });
  }

  renderList() {
    return this.state.albums.map(item => (
      <AlbumDetails key={item.title} album={item} />
    ));
  }

  render() {
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default AlbumList;
