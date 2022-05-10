import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import {
  useColumnOrder,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TableWrapper = ({
  headers: headersFromProps,
  data: dataFromProps,
  onRowClick: clickHandlerFromProps,
  getCSVData,
  isColumnSortingEnabled,
  isSearchEnabled,
  isPaginationEnabled,
  isRowClickEnabled,
  overrideCellsData,
  overrideCSVData,
  settingOptions,
  defaultColumnOrder,
  defaultSortedColumns,
  tableTitle,
  isTitleCollapsable,
  implementCardWidgetClass,
  enableCsvExport,
  csvFileName,
  implementColumnFilter,
  tableInterfaceMode,
  multipleTableInstancesSearchText,
  enableMultipleTableInstancesSearch,
  overrideSettings: OverrideSettingsComponent,
  filterColumnsFromCsv,
  tableLoader,
  isAPIPaginationEnabled,
  apiPaginationConfig,
  searchBoxStyle,
  containerStyle,
  selectedRowId,
  eventListeners,
  tableConfig,
  defaultColumnFilters,
  implementRowSelection,
  implementSelectRowActionsDropdown,
  selectRowActions,
  getSelectedRowNumber,
  labelOnHover,
  uniqueMobileCss,
}) => {
  const [selected, setSelected] = useState(selectedRowId || undefined);
  const [tableShown, setTableShown] = useState(true);
  const [csvData, setCsvData] = useState([]);
  const [showSelectColumnsModal, setShowSelectColumnsModal] = useState(false);
  const [headers, setHeaders] = useState(headersFromProps);
  const [searchInput, setSearchInput] = useState(tableConfig.search);
  const [showRowActions, setShowRowActions] = useState(false);

  const csvLinkRef = useRef(undefined);

  useEffect(() => {
    setHeaders(headersFromProps);
  }, [headersFromProps]);

  useEffect(() => {
    if (getCSVData) {
      return () => {
        getCSVData(tableTitle, null, "delete");
      };
    }
  }, []);
  useEffect(() => {
    setSearchInput(tableConfig.search);
  }, [tableConfig]);

  const onRowClick = (row, rowIndex) => {
    const { original, id } = row;
    if (isRowClickEnabled) {
      setSelected(id);
      clickHandlerFromProps(original, id);
    }
  };

  const filterTypes = useMemo(
    () => ({
      multiSelect: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? filterValue.includes(rowValue.toString())
            : true;
        });
      },
    }),
    []
  );

  const columns = useMemo(
    () => [
      ...headers
        .filter(
          (header) => !(header.hasOwnProperty("visible") && !header.visible)
        )
        .map((header) => (implementColumnFilter ? {} : { ...header })),
    ],
    [headers]
  );

  const data = useMemo(() => [...dataFromProps], [dataFromProps]);

  const toggleTableShown = () => {
    if (isTitleCollapsable) {
      setTableShown((prevValue) => !prevValue);
    }
  };

  const rowSelectionColumnId = useMemo(
    () => "my-table-row-selection-hawk-@123",
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
    selectedFlatRows,
    toggleAllRowsSelected,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: tableConfig.numberOfRows,
        pageIndex: tableConfig.pageNumber,
        sortBy: defaultSortedColumns
          ? [...defaultSortedColumns]
          : [{ id: columns[0]?.accessor }],
        hiddenColumns: headers
          .filter(
            (header) => header.hasOwnProperty("visible") && !header.visible
          )
          .map((header) => header.accessor),
        columnOrder: defaultColumnOrder,
        globalFilter: isAPIPaginationEnabled ? tableConfig.search : undefined,
        filters: defaultColumnFilters,
        selectedRowIds: tableConfig.selectedRows,
      },
      pageCount: apiPaginationConfig?.pages || -1,
      manualPagination: isAPIPaginationEnabled,
      filterTypes,
      autoResetSelectedRows: false,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder,
    useRowSelect,
    (hooks) => {
      implementRowSelection &&
        hooks.visibleColumns.push((columns) => [
          // Let's make a column for selection
          {
            id: rowSelectionColumnId,
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({
              getToggleAllRowsSelectedProps,
              getToggleAllPageRowsSelectedProps,
            }) => <div></div>,
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: (props) => <div></div>,
          },
          ...columns,
        ]);
    }
  );

  useEffect(() => {
    if (enableCsvExport) {
      const myColumns = columns.filter(
        ({ accessor }) => !filterColumnsFromCsv.includes(accessor)
      );
      let csv = [myColumns.map(({ Header }) => Header)];
      /*for (let header of myColumns) {
          csv.push(header.Header)
        }*/
      for (let { values: row } of rows) {
        let csvRow = [];
        for (let { accessor } of myColumns) {
          csvRow.push(
            overrideCSVData.hasOwnProperty(accessor)
              ? overrideCSVData[accessor](row[accessor])
              : row[accessor]
              ? row[accessor].toString()
              : ""
          );
        }
        csv.push([...csvRow]);
      }
      setCsvData([...csv]);
      getCSVData &&
        getCSVData(
          typeof tableTitle === "function" ? tableTitle("text") : tableTitle,
          [...rows.map((row) => row.values)]
        );
    }
  }, [
    rows,
    columns,
    enableCsvExport,
    setCsvData,
    getCSVData,
    filterColumnsFromCsv,
    overrideCSVData,
  ]);
  useEffect(() => {
    if (enableMultipleTableInstancesSearch) {
      setGlobalFilter(multipleTableInstancesSearchText);
    }
  }, [enableMultipleTableInstancesSearch, multipleTableInstancesSearchText]);
  useEffect(() => {
    setSelected(selectedRowId);
  }, [selectedRowId]);

  useEffect(() => {
    if (implementRowSelection && selectedFlatRows.length) {
      setShowRowActions(true);
      eventListeners.onChangeSelectedRows(
        selectedFlatRows.reduce(
          (accumulator = {}, { id }) => ({ ...accumulator, [id]: true }),
          {}
        )
      );
    } else setShowRowActions(false);
  }, [selectedFlatRows, implementRowSelection, setShowRowActions]);

  const handleOnHeaderSelect = useCallback(
    (index, nextValue) => {
      setHeaders([
        ...headers.slice(0, index),
        {
          ...headers[index],
          visible: nextValue,
        },
        ...headers.slice(index + 1),
      ]);
    },
    [setHeaders, headers]
  );
  const renderRows = useCallback(
    (rows) =>
      rows.map((row, index) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps({
              style: {
                ...(row.original.hasOwnProperty("styling") &&
                  row.original.styling),
                cursor: isRowClickEnabled && "pointer",
              },
            })}
            onClick={onRowClick.bind(this, row, index)}
            className={selected === row.id && "selected"}
          >
            {overrideCellsData
              ? row.cells.map((cell) => (
                  <td
                    className={`${
                      cell.column.id === "Resource_ids" ? "styleCell" : ""
                    }`}
                    {...cell.getCellProps()}
                  >
                    {overrideCellsData.hasOwnProperty(cell.column.Header) ||
                    overrideCellsData.hasOwnProperty(cell.column.id)
                      ? (overrideCellsData.hasOwnProperty(cell.column.Header) &&
                          overrideCellsData[cell.column.Header](
                            cell.value,
                            cell.getCellProps().key,
                            cell.row.original
                          )) ||
                        (overrideCellsData.hasOwnProperty(cell.column.id) &&
                          overrideCellsData[cell.column.id](
                            cell.value,
                            cell.getCellProps().key,
                            cell.row.original
                          ))
                      : cell.render("Cell")}
                  </td>
                ))
              : row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
          </tr>
        );
      }),
    [isRowClickEnabled, selected, overrideCellsData, onRowClick]
  );
  const updatePageIndex = useCallback(
    (pageIndex) => {
      // gotoPage(pageIndex);
      eventListeners.onNextPage(0);
    },
    [gotoPage]
  );
  const onPreviousPage = useCallback(
    (currentPage) => {
      if (isAPIPaginationEnabled) {
        toggleAllRowsSelected(false);
        apiPaginationConfig.onPreviousPage(
          currentPage - 1,
          pageSize,
          searchInput
        );
      }
      eventListeners.onPreviousPage(currentPage - 2);
      previousPage();
    },
    [
      previousPage,
      isAPIPaginationEnabled,
      apiPaginationConfig,
      eventListeners,
      pageSize,
      searchInput,
    ]
  );
  const onNextPage = useCallback(
    (currentPage) => {
      if (isAPIPaginationEnabled) {
        toggleAllRowsSelected(false);
        apiPaginationConfig.onNextPage(currentPage + 1, pageSize, searchInput);
      }
      eventListeners.onNextPage(currentPage);
      nextPage();
    },
    [
      nextPage,
      isAPIPaginationEnabled,
      apiPaginationConfig,
      eventListeners,
      pageSize,
      searchInput,
    ]
  );
  const onPageSize = useCallback(
    (pageSize) => {
      if (isAPIPaginationEnabled) {
        toggleAllRowsSelected(false);
        apiPaginationConfig.onChangeNumberOfRecords(1, pageSize, searchInput);
      }
      updatePageIndex(0);
      eventListeners.onChangeNumberOfRecords(pageSize);
      setPageSize(pageSize);
    },
    [
      setPageSize,
      isAPIPaginationEnabled,
      apiPaginationConfig,
      pageIndex,
      eventListeners,
      gotoPage,
      updatePageIndex,
      searchInput,
    ]
  );
  const onSearchChange = useCallback(
    ({ target: { value } }) => {
      if (!isAPIPaginationEnabled) setGlobalFilter(value);
      setSearchInput(value);
      eventListeners.onSearch(value);
    },
    [
      setGlobalFilter,
      eventListeners,
      setSearchInput,
      isAPIPaginationEnabled,
      apiPaginationConfig,
    ]
  );

  const pageRecordsLowerLimit = useMemo(() => {
    if (pageIndex === 0) return Math.min(1, rows.length);
    return pageIndex * +pageSize + 1;
  }, [pageIndex, pageSize, rows]);
  const pageRecordsUpperLimit = useMemo(() => {
    if (pageIndex === 0) return Math.min(+pageSize, rows.length);
    return Math.min(
      pageIndex * +pageSize + +pageSize,
      isAPIPaginationEnabled ? apiPaginationConfig.numberOfRows : rows.length
    );
  }, [pageIndex, pageSize, rows, isAPIPaginationEnabled, apiPaginationConfig]);

  const onTableTitle = useMemo(() => {
    getSelectedRowNumber && getSelectedRowNumber(selectedFlatRows.length);
    return (
      <>
        {!showRowActions ? (
          tableTitle && (
            <>
              <h5
                onClick={toggleTableShown}
                style={{
                  cursor: isTitleCollapsable && "pointer",
                  color: "#4e73df",
                }}
              >
                {typeof tableTitle === "function" ? tableTitle() : tableTitle}
              </h5>
            </>
          )
        ) : (
          <></>
        )}
      </>
    );
  }, [
    showRowActions,
    selectedFlatRows,
    tableTitle,
    toggleTableShown,
    isTitleCollapsable,
    implementRowSelection,
    implementSelectRowActionsDropdown,
    selectRowActions,
  ]);

  return (
    <>
      {tableShown && (
        <div className="table-wrapper">
          <table
            {...getTableProps()}
            className={`table dataTable ${tableInterfaceMode}`}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className={`${
                        column.id === "serial" ||
                        column.id === rowSelectionColumnId
                          ? "fixWidth"
                          : ""
                      }`}
                      {...(isColumnSortingEnabled
                        ? column.getHeaderProps(column.getSortByToggleProps())
                        : column.getHeaderProps())}
                    >
                      <div
                        className="table-header"
                        style={{ position: "relative" }}
                      >
                        <div className={"header-filter-container"}>
                          <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                              <Tooltip
                                id="tooltip-auto"
                                style={!labelOnHover && { display: "none" }}
                              >
                                {column.label}
                              </Tooltip>
                            }
                          >
                            <span className="header">
                              {column.render("Header")}
                            </span>
                          </OverlayTrigger>

                          {implementColumnFilter &&
                            !overrideCellsData.hasOwnProperty(column.id) &&
                            column.id !== rowSelectionColumnId && (
                              <span className="filter">
                                {column.canFilter
                                  ? column.render("Filter")
                                  : null}
                              </span>
                            )}
                        </div>
                        <span
                          style={{
                            display:
                              isColumnSortingEnabled &&
                              column.id !== rowSelectionColumnId
                                ? ""
                                : "none",
                          }}
                        ></span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {isPaginationEnabled ? (
                page.length ? (
                  renderRows(page)
                ) : (
                  <tr className="no-data-table">
                    <td colSpan={headerGroups[0]?.headers?.length}>No Data</td>
                  </tr>
                )
              ) : rows.length ? (
                renderRows(rows)
              ) : (
                <tr className="no-data-table">
                  <td colSpan={headerGroups[0]?.headers?.length}>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

TableWrapper.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
  isPaginationEnabled: PropTypes.bool,
  labelOnHover: PropTypes.bool,
  isSearchEnabled: PropTypes.bool,
  isColumnSortingEnabled: PropTypes.bool,
  isRowClickEnabled: PropTypes.bool,
  tableTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isTitleCollapsable: PropTypes.bool,
  settingOptions: PropTypes.arrayOf(
    PropTypes.shape({
      optionText: PropTypes.string,
      onClick: PropTypes.func,
      optionComponent: PropTypes.func,
      isDisabled: PropTypes.bool,
    })
  ),
  overrideCellsData: PropTypes.object, //{[headerText||headerAccessor]: overrideComponent}
  overrideCSVData: PropTypes.object, //{[headerText||headerAccessor]: string}
  defaultColumnOrder: PropTypes.array,
  defaultSortedColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      desc: PropTypes.bool,
    })
  ),
  implementCardWidgetClass: PropTypes.bool,
  enableCsvExport: PropTypes.bool,
  csvFileName: PropTypes.string,
  implementColumnFilter: PropTypes.bool,
  tableInterfaceMode: PropTypes.oneOf([
    "table-with-borders",
    "table-without-borders",
  ]),
  enableMultipleTableInstancesSearch: PropTypes.bool,
  multipleTableInstancesSearchText: PropTypes.string,
  overrideSettings: PropTypes.func,
  getCSVData: PropTypes.func,
  filterColumnsFromCsv: PropTypes.array,
  tableLoader: PropTypes.bool,
  isAPIPaginationEnabled: PropTypes.bool,
  apiPaginationConfig: PropTypes.shape({
    onNextPage: PropTypes.func.isRequired,
    onPreviousPage: PropTypes.func.isRequired,
    onChangeNumberOfRecords: PropTypes.func.isRequired,
    isNextPage: PropTypes.bool,
    isPreviousPage: PropTypes.bool,
    pages: PropTypes.number,
    onSearch: PropTypes.func,
  }),
  searchBoxStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  selectedRowId: PropTypes.number,
  tableConfig: PropTypes.shape({
    numberOfRows: PropTypes.number,
    pageNumber: PropTypes.number,
    search: PropTypes.string,
  }),
  eventListeners: PropTypes.shape({
    onChangeNumberOfRecords: PropTypes.func,
    onNextPage: PropTypes.func,
    onPreviousPage: PropTypes.func,
    onSearch: PropTypes.func,
  }),
  defaultColumnFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string, //accessor of column
      value: PropTypes.array, //values to filter
    })
  ),
  implementRowSelection: PropTypes.bool,
  implementSelectRowActionsDropdown: PropTypes.bool,
  getSelectedRowNumber: PropTypes.func,
  selectRowActions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
      loader: PropTypes.bool,
      isDisabled: PropTypes.bool,
    })
  ),
};

TableWrapper.defaultProps = {
  headers: [],
  data: [],
  isPaginationEnabled: true,
  isSearchEnabled: true,
  labelOnHover: false,
  isColumnSortingEnabled: true,
  isRowClickEnabled: true,
  isTitleCollapsable: false,
  implementCardWidgetClass: true,
  enableCsvExport: false,
  csvFileName: "CSV Export",
  implementColumnFilter: false,
  overrideCellsData: {},
  overrideCSVData: {},
  tableInterfaceMode: "table-with-borders",
  enableMultipleTableInstancesSearch: false,
  overrideSettings: undefined,
  filterColumnsFromCsv: [],
  tableLoader: false,
  isAPIPaginationEnabled: false,
  searchBoxStyle: {},
  containerStyle: {},
  tableConfig: {
    numberOfRows: 10,
    pageNumber: 0,
    search: "",
    selectedRows: {},
  },
  eventListeners: {
    onChangeNumberOfRecords: () => {},
    onNextPage: () => {},
    onPreviousPage: () => {},
    onSearch: () => {},
    onChangeSelectedRows: () => {},
  },
  defaultColumnFilters: [],
  implementRowSelection: false,
  implementSelectRowActionsDropdown: false,
  selectRowActions: [],
};

export default TableWrapper;
