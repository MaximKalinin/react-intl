import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

import logo from './logo.svg';
import './App.css';
import messages_de from './translations/de.json';
import messages_en from './translations/en.json';
import messages_ru from './translations/ru.json';

const messages = {
  'de': messages_de,
  'en': messages_en,
  'ru': messages_ru
};

const App = props => {
  const [locale, setLocale] = React.useState(navigator.language.split(/[-_]/)[0]);
  const chooseLocale = event => {
    setLocale(event.target.id || 'en');
  };
  return (
    <IntlProvider locale={ locale } messages={ messages[locale] }>
      <div className="App">
        <header className="App-header">
          <ul className="language-choose">
            <li onClick={ chooseLocale } id="ru">Русский</li>
            <li onClick={ chooseLocale } id="en">English</li>
            <li onClick={ chooseLocale } id="de">Deutsch</li>
          </ul>
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            <FormattedMessage id="main.to-get-started" />
            <code> src/App.js </code>
            <FormattedMessage id="main.save-to-reload" />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="main.learn-react-link" defaultMessage="Learn React" />
          </a>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
