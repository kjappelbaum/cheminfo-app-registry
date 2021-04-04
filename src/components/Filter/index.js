import clsx from 'clsx';
import * as React from 'react';

const containerClasses = clsx('container', 'mx-auto');
const formClasses = clsx('form', 'mx-auto');
const labelClasses = clsx(
  'block',
  'uppercase',
  'tracking-wide',
  'text-gray-700',
  'text-md',
  'font-bold',
  'mb-2',
);
const inputClasses = clsx(
  'appearance-none',
  'block',
  'w-full',
  'bg-gray-200',
  'text-gray-700',
  'rounded',
  'py-3',
  'px-4',
  'mb-3',
  'leading-tight',
  'focus:outline-none',
  'focus:bg-white',
);

const dropdownClasses = clsx(
  'block',
  'appearance-none',
  'w-full',
  'bg-gray-200',
  'border',
  'border-gray-200',
  'text-gray-700',
  'py-3',
  'px-4',
  'pr-8',
  'rounded',
  'leading-tight',
  'focus:outline-none',
  'focus:bg-white',
  'focus:border-gray-500',
);

const DefaultState = {
  name: '',
  sortBy: 'downloads',
  domain: 'all',
  technique: '',
};

const pointer = (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg
      className="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  </div>
);
// eslint-disable-next-line react/prefer-stateless-function
class Filter extends React.Component {
  state = Object.assign({}, DefaultState);

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };

  render() {
    // const { name, sortBy, domain } = this.state;
    const { updateFilter } = this.props;
    const domains = [
      'all',
      'Machine Learning',
      'Physical Chemistry',
      'Visualization',
    ];
    const sortBy = ['downloads', 'last modified'];
    return (
      <div className={containerClasses}>
        <form
          onChange={() => setTimeout(() => updateFilter(this.state), 0)}
          className={formClasses}
          noValidate
        >
          <div className="flex flex-row bg-gray-200">
            <div>
              <label className={labelClasses} htmlFor="name">
                name
              </label>
              <input
                className={inputClasses}
                id="name"
                type="text"
                placeholder="app name"
                onChange={(event) =>
                  this.handleChange('name', event.target.value)
                }
              />
            </div>
            <div>
              <label className={labelClasses} htmlFor="technique">
                technique
              </label>
              <input
                className={inputClasses}
                id="technique"
                type="text"
                placeholder="technique"
                onChange={(event) =>
                  this.handleChange('technique', event.target.value)
                }
              />
            </div>
            <div>
              <label className={labelClasses} htmlFor="domain">
                domain
              </label>
              <div className="relative">
                <select
                  className={dropdownClasses}
                  id="domain"
                  value={this.state.domain}
                  onChange={(event) =>
                    this.setState({ domain: event.target.value })
                  }
                >
                  {domains.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {pointer}
              </div>
            </div>
            <div>
              <label className={labelClasses} htmlFor="sortBy">
                sort by
              </label>
              <div className="relative">
                <select
                  className={dropdownClasses}
                  id="sortBy"
                  value={this.state.sortBy}
                  onChange={(event) =>
                    this.setState({ sortBy: event.target.value })
                  }
                >
                  {sortBy.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {pointer}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
