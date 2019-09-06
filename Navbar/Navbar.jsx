
import React, { Component } from 'react';
import { render } from 'react-dom';

export class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        {this.props.pages.map((page, index) => {
          return (
            <a key={index}
              className={this.props.currentPage === page ? "active" : ""}
              onClick={()=>this.props.onItemChanged(page)}
              href="#">
              <i className="fa fa-fw fa-home"></i> {page}
            </a>)
        })}
      </div>
    );
  }
}