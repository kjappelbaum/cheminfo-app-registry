import clsx from 'clsx';
import * as React from 'react';
import { MdFileDownload } from 'react-icons/md';

const headClass = clsx(
  'px-2',
  'py-1',
  'text-left',
  'text-gray-500',
  'uppercase',
  'tracking-wider',
);
const thClass = clsx(headClass, 'font-medium', 'text-xs');

const tdClass = clsx('px-2', 'py-1', 'whitespace-nowrap');
function ParserTable({ parserSection }) {
  if (!parserSection) {
    return null;
  }
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <span className={headClass}>Supported formats</span>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className={thClass}>
              extension
            </th>
            <th scope="col" className={thClass}>
              manufacturer
            </th>
            {/* <th scope="col" className={thClass}>
              version
            </th> */}
            <th scope="col" className={thClass}>
              example
            </th>
          </tr>
        </thead>
        <tbody>
          {parserSection.map((row) => {
            return (
              <tr key={row.extension + row.manufacturer + row.version}>
                <td className={tdClass}>{row.extension}</td>
                <td className={tdClass}>{row.manufacturer}</td>
                {/* <td className={tdClass}>{row.version}</td> */}
                <td className={tdClass}>
                  <a href={row.example}>
                    <MdFileDownload />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ParserTable;
