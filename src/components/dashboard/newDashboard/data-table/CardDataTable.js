import PropTypes from 'prop-types';
import React from 'react';
import { flexRender } from '@tanstack/react-table';

export default function CardDataTable({ table, clickHandler }) {
  const arr = table.getHeaderGroups()[0].headers.map((header) => {
    return header.column.columnDef.header;
  });
  console.log(table.getRowModel().rows);
  return (
    <div className="d-flex flex-wrap">
      {table.getRowModel().rows.map((row) => (
        <div className="m-3 m-auto mt-2 mb-2" key={row?.original.id}>
          <div className="card-body">
            <table id="customers">
              <tbody>
                {row.getVisibleCells().map((cell, index) => (
                  <tr
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      cursor: 'default',
                    }}
                    onClick={() => clickHandler(cell.id, cell)}
                  >
                    <td>{arr[index]}</td>

                    <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

CardDataTable.propTypes = {
  table: PropTypes.object,
  clickHandler: PropTypes.func,
};
