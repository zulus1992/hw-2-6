import React, { Component } from 'react';
import { render } from 'react-dom';

export class Table extends Component {
  state = {
    isLoading: true,
    isError: false,
    countries: null
  }
  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(data => data.json())
      .then(data => this.setState({ isLoading: false, countries: data }))
      .catch(error => this.setState({ isLoading: false, isError: true }));
  }


  render() {
    return this.state.isError ? "Error"
      : this.state.isLoading ? "......Loading......"
        : (<table>
          <thead>
            <tr>
              <th>Страна</th>
              <th>Валюта</th>
              <th>Язык</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.countries.map(country =>
                <tr>
                  <td>{country.name}</td>
                  <td>{country.languages.map(language => language.name + ' ')}</td>
                  <td>{country.currencies.map(currency => currency.name + ' ')}</td>
                </tr>
              )}
          </tbody>
        </table>);
  };
}