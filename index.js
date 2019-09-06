import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { LanguagesContainer } from './LanguagesContainer';
import { LanguagesList } from './LanguagesContainer';
import { Navbar } from './Navbar';
import { Table } from './Table';

const allPages = ["Contries", "Languages"];
class Pages extends Component  {
  state = {
    currentPage: allPages[0]
  }
  render() {
    return (<>
      <Navbar pages={allPages}
        onItemChanged={currentPage =>
            this.setState({
              currentPage
            })
          }
          currentPage={this.state.currentPage}
         />
      <div>
      {
        this.state.currentPage==allPages[0]
        ?<LanguagesContainer component={LanguagesList} />
        :<Table />
      }
      </div>
    </>);
  }
}
render(<Pages />, document.getElementById('root'));
