import {
    useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, flexRender,
} from "@tanstack/react-table"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import './employeelist.css'

export const EmployeeList = () => {
    const employees = useSelector(state => state.employees.employees)

    const dateSorting = (rowA, rowB, columnId) => {
        const dateA = new Date(rowA.getValue(columnId))
        const dateB = new Date(rowB.getValue(columnId))
        return dateA.getTime() - dateB.getTime()
    }

    // Define table columns configuration usememo is used to memoize the columns definition
    const columns = useMemo(() => [
        { header: "First Name", accessorKey: "firstName" },
        { header: "Last Name", accessorKey: "lastName" },
        {
            header: "Start Date",
            accessorKey: "startDate",
            sortingFn: dateSorting
        },
        { header: "Department", accessorKey: "department" },
        {
            header: "Date of Birth",
            accessorKey: "dateOfBirth",
            sortingFn: dateSorting
        },
        { header: "Street", accessorKey: "street" },
        { header: "City", accessorKey: "city" },
        { header: "State", accessorKey: "state" },
        { header: "Zip Code", accessorKey: "zipCode" },
    ], [])

    // Memoize the data list to avoid unnecessary re-renders
    const dataList = useMemo(() => employees, [employees])

    // Initialize the table instance with the data and columns
    const table = useReactTable({
        data: dataList,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })
    return (
        <div className="employee-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={table.getState().globalFilter ?? ""}
                    onChange={e => table.setGlobalFilter(e.target.value)}
                    style={{ marginBottom: "1rem", padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }}
                    className="search-input"
                />

            </div>


            <table className="employee-table">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    style={{ cursor: "pointer" }}
                                    className="table-header"
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {header.column.getIsSorted() === "asc" ? " ▲" : header.column.getIsSorted() === "desc" ? " ▼" : ""}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="table-row">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="table-cell">{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="pagination">
                <button className="pagination-button" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    Previous
                </button>
                <span className="pagination-info">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <button className="pagination-button" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Next
                </button>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => table.setPageSize(Number(e.target.value))}
                    className="pagination-select"
                >
                    {[5, 10, 20, 50].map(size => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}