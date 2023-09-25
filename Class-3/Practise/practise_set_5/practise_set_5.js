const table = document.querySelector('table');
const rows = Array.from(table.querySelectorAll('tbody tr'));

const headers = Array.from(table.querySelectorAll('thead th'));

// Function to compare values and sort the table
function sortTable(columnIndex, ascending) {
    const type = headers[columnIndex].id;

    rows.sort((a, b) => {
        const aValue = a.querySelector(`td:nth-child(${columnIndex + 1})`).textContent;
        const bValue = b.querySelector(`td:nth-child(${columnIndex + 1})`).textContent;

        if (type === 'name') {
            return ascending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else {
            return ascending ? parseFloat(aValue) - parseFloat(bValue) : parseFloat(bValue) - parseFloat(aValue);
        }
    });

    // Removing existing rows from the table
    rows.forEach(row => table.tBodies[0].appendChild(row));
}

headers.forEach((th, index) => {
    th.addEventListener('click', () => {
        //if sorting ascending or descending
        const currentlyAscending = th.classList.contains('ascending');
        const ascending = currentlyAscending ? false : true;

        headers.forEach(header => header.classList.remove('ascending', 'descending'));

        th.classList.add(ascending ? 'ascending' : 'descending');

        // Sort the table
        sortTable(index, ascending);
    });
});