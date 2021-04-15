import * as React from 'react';

import '../../assets/tailwind.css';
import Filter from '../../components/Filter';
import Hero from '../../components/Hero';
import Listing from '../../components/Listing';
import {
  AppListingProvider,
  AppListingConsumer,
} from '../../context/AppListingProvider';

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div className="container mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-6 lg:px-8 xl:mt-6">
        <AppListingProvider>
          <AppListingConsumer>
            {({ apps, updateFilter }) => (
              <>
                <Filter updateFilter={updateFilter} />
                <div className="grid grid-cols-8  gap-2">
                  {apps.map((app) => (
                    <Listing key={app.name} app={app} />
                  ))}
                </div>
              </>
            )}
          </AppListingConsumer>
        </AppListingProvider>
      </div>
    </React.Fragment>
  );
}

export default Home;
