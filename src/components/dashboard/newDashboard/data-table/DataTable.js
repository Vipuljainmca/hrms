/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import { useNavigate } from 'react-router-dom';
import { Label } from 'reactstrap';
import { FaSearch, MdSkipNext, MdSkipPrevious, ImFirst, ImLast } from './index.icons';
import './data-table.css';

export default function DataTable({ data, columns, hideSeachbar }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');
  let page;
  const navigation = useNavigate();

  function clickHandler(cell) {
    navigation(`/employee/${cell.row.original.id}`);
  }
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  return (
    <div>
      {!hideSeachbar && (
        <div className="filter-div">
          <div className="item1">
            <FaSearch className="search-icon" />
          </div>
          <div className="item2">
            <input
              name="filter"
              placeholder=" Search Employee..."
              type="text"
              value={filtering}
              className="filter-input"
              onChange={(e) => setFiltering(e.target.value)}
            />
          </div>
        </div>
      )}
      <div style={{ overflowX: 'auto' }}>
        <table className="customers mt-4">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{ asc: '🔼', desc: '🔽' }[header.column.getIsSorted() ?? null]}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {cell?.column?.id === 'employeeId' ||
                    cell?.column?.id === 'candidateName' ||
                    cell?.column?.id === 'designation' ||
                    cell?.column?.id === 'department' ? (
                      <button
                        className="clickable-btn-hover"
                        type="button"
                        onClick={() => !hideSeachbar && clickHandler(cell)}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </button>
                    ) : (
                      <span
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                          cursor: 'default',
                        }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.getRowModel().rows.length === 0 && filtering && (
        <div className="warn m-5">
          <div>No data found for this keyword: &quot;{filtering}&quot;</div>
          <div>Search with other Keywords</div>
        </div>
      )}
      {table.getRowModel().rows.length === 0 && (
        <div className="warn m-5">
          <h3>No data found</h3>
        </div>
      )}
      <div className="footer-div">
        <div>
          <button type="button" className="custom-btn1" onClick={() => table.setPageIndex(0)}>
            <ImFirst />
          </button>
          <button
            type="button"
            className="custom-btn1"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <MdSkipPrevious />
          </button>
          <button
            type="button"
            className="custom-btn1"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <MdSkipNext />
          </button>
          <button
            type="button"
            className="custom-btn1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            <ImLast />
          </button>
        </div>

        <div>
          <span> Page </span>{' '}
          <span>
            <strong>{table.getState().pagination.pageIndex + 1}</strong>
          </span>
          {' of '}
          <span>
            <strong>{table.getPageCount().toLocaleString()}</strong>
          </span>
        </div>

        <span>
          <Label> Go To Page : </Label>
          <input
            className="input-ele"
            defaultValue={table.getState().pagination.pageIndex + 1}
            type="number"
            onChange={(e) => {
              page = e.target.value ? e.target.value - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>

        <select
          className="dropdown"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize} show
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

DataTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  hideSeachbar: PropTypes.bool,
};
