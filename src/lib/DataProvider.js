import React from 'react';

const DEFAULT_STATE = {
    list: [],
    activeDetails: {},
};

export const ThemeContext = React.createContext(DEFAULT_STATE);

export default class DataProvider extends React.Component {
  state = DEFAULT_STATE;

  searchTermChanged = searchTerm => {
    this.setState({searchTerm});
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          searchTermChanged: this.searchTermChanged,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
