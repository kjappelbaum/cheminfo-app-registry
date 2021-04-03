import * as React from 'react';

const DefaultState = {
  apps: [],
  filter: {
    name: null,
    domain: null,
  },
};

const AppListingContext = React.createContext(DefaultState);

export const AppListingConsumer = AppListingContext.Consumer;

export class AppListingProvider extends React.Component {
  static applyFilter(apps, filter) {
    const { name, domain } = filter;
    console.log(name);
    let result = apps;
    if (name) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return result;
  }

  state = DefaultState;

  componentDidMount() {
    fetch('/server/apps.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ apps: res });
      });
  }

  updateFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  render() {
    const { children } = this.props;
    const { apps, filter } = this.state;

    const filteredApps = AppListingProvider.applyFilter(apps, filter);
    return (
      <AppListingContext.Provider
        value={{
          apps: filteredApps,
          updateFilter: this.updateFilter,
        }}
      >
        {children}
      </AppListingContext.Provider>
    );
  }
}
