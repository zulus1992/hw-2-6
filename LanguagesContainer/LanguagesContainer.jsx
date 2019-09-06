import React, { Component } from 'react';
import { render } from 'react-dom';
import { LanguagesList } from './LanguagesList';

export class LanguagesContainer extends Component {
  state = {
    isLoading: true,
    isError: false,
    contries: null,
    languages: null,

  }
  updateState(data) {
    var languages = [];
    for (var i = 0; i < data.length; i++)
      for (var j = 0; j < data[i].languages.length; j++)
        if (!languages.includes(data[i].languages[j].name))
          languages.push(data[i].languages[j].name);
          console.log(languages)
    return this.setState({
      isLoading: false,
      contries: data,
      languages: languages
    });
  }


  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(data => data.json())
      .then(data => this.updateState(data))
      .catch(error => this.setState({ isLoading: false, isError: true }));
  }


  render() {
    const Component = this.props.component;
    return this.state.isError ? "Error"
      : this.state.isLoading ? "......Loading......"
        : <Component languages={this.state.languages} contries={this.state.contries} />
  };
};