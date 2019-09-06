import React, { Component } from 'react';
import { render } from 'react-dom';

export const LanguagesList = ({ languages, contries }) => (
  <ul>
    {languages.map(
      language => (
        <li key={language}>
          <h3>{language}</h3>
          {contries.filter(contry =>contry.languages.map(x=>x.name).includes(language)).map(x=>x.name+", ")}
        </li>
      ))
    }
  </ul>
);