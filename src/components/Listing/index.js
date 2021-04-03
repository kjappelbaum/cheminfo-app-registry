import clsx from 'clsx';
import * as React from 'react';
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { DiNpm } from 'react-icons/di';

import ParserTable from '../ParserTable';

function Listing({ app }) {
  if (!app) {
    return null;
  }

  const {
    name,
    version,
    description,
    github,
    npm,
    logo,
    lastUpdate,
    weeklyDownloads,
    technique,
    fileTypes,
  } = app;

  const columnClasses = clsx('col-span-1');
  const cardClasses = clsx('max-w-sm', 'rounded', 'overflow-hidden shadow-lg');

  return (
    <div className={columnClasses} style={{ margin: '1rem 0' }}>
      <div className={cardClasses}>
        <img className="w-ful" src={`${logo}`} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="grid grid-cols-5">
            <IconContext.Provider value={{ size: '2em' }}>
              <div className="col-span-1">
                <a href={github}>
                  <AiFillGithub />
                </a>
              </div>
              <div className="col-span-1">
                <a href={npm}>
                  <DiNpm />
                </a>
              </div>
              <div className="col-span-3">
                weekly downloads: {weeklyDownloads}
              </div>
            </IconContext.Provider>
          </div>
          <div className="text-gray-700 text-base">{description}</div>
        </div>
        <ParserTable parserSection={fileTypes} />

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          version {version}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          last update {lastUpdate}
        </span>
        {/* <div>
          <Link to={`/details/${name}`}>App details</Link>
        </div> */}
      </div>
    </div>
  );
}

export default Listing;
