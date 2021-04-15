import clsx from 'clsx';
import * as React from 'react';
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { DiNpm } from 'react-icons/di';

import ParserTable from '../ParserTable';

function Technique({ technique }) {
  let chmo = '';
  let iupac = '';
  if (technique.chmo | technique.iupac) {
    if (technique.chmo) {
      const url = `http://purl.obolibrary.org/obo/CHMO_${technique.chmo}`;
      chmo = <a href={url}>CHMO: {technique.chmo}</a>;
    }
    if (technique.iupac) {
      iupac = <a href={technique.iupac}>IUPAC</a>;
    }
    return (
      <div className="font-bold text-large mb-2 mt-2 text-gray-700">
        {technique.name} ({chmo} {iupac})
      </div>
    );
  }
  return (
    <div className="font-bold text-large mb-2 mt-2 text-gray-700">
      {technique.name}
    </div>
  );
}

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
    monthlyDownloads,
    technique,
    fileTypes,
  } = app;

  const columnClasses = clsx('col-span-2');
  const cardClasses = clsx(
    'max-w-xl',
    'rounded',
    'shadow-lg',
    'overflow-hidden',
  );
  const lastUpdateDate = new Date(lastUpdate);
  return (
    <div className={columnClasses}>
      <div className={cardClasses}>
        <img className="w-ful" src={`${logo}`} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <Technique technique={technique} />
          <div className="grid grid-cols-5 mb-2 mt-2">
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
                monthly downloads: {monthlyDownloads}
              </div>
            </IconContext.Provider>
          </div>

          <div className="text-gray-700 text-base">{description}</div>
        </div>
        <ParserTable parserSection={fileTypes} />

        <div className="mt-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-1 mr-1 mb-2">
            version {version}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-1 mr-1 mb-2">
            last update {lastUpdateDate.toDateString()}
          </span>
          {/* <div>
          <Link to={`/details/${name}`}>App details</Link>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Listing;
