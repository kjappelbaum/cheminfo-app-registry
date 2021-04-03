import * as React from 'react';

const DefaultState = {
  apps: [],
  filter: {
    name: null,
    domain: null,
    sortBy: null,
  },
};

const AppListingContext = React.createContext(DefaultState);

export const AppListingConsumer = AppListingContext.Consumer;

export class AppListingProvider extends React.Component {
  static applyFilter(apps, filter) {
    const { name, domain, sortBy } = filter;
    console.log(sortBy);
    let result = apps;
    if (name) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    if (domain) {
      if (domain.toLowerCase() !== 'all') {
        result = result.filter((item) =>
          item.domain
            .map((d) => d.toLowerCase())
            .includes(domain.toLowerCase()),
        );
      }
    }
    if (sortBy === 'downloads') {
      result = result.sort((a, b) => b.downloads - a.downloads);
    }
    if (sortBy === 'last modified') {
      result = result.sort(
        (a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate),
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
