document.addEventListener('DOMContentLoaded', function() {
    function setupDropdown(toggleId, menuId, filterColumn) {
        var toggle = document.getElementById(toggleId);
        var menu = document.getElementById(menuId);
        var dropdownItems = menu.querySelectorAll('.dropdown-item');
        var complaintRows = document.querySelectorAll('.complaint-row');

        toggle.addEventListener('click', function() {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function(event) {
            if (!toggle.contains(event.target) && !menu.contains(event.target)) {
                menu.style.display = 'none';
            }
        });

        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var filter = item.getAttribute('data-filter');
                filterComplaints(filter, filterColumn);
                menu.style.display = 'none';
            });
        });

        function filterComplaints(filter, column) {
            complaintRows.forEach(function(row) {
                var cell = row.querySelectorAll('td')[column];
                var cellText = cell.textContent.trim();
                
                if (filter === 'all' || filter === 'All' || cellText === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }
    }

    setupDropdown('dropdown-toggle', 'dropdown-menu', 0); // Filter by Complaint Type
    setupDropdown('dropdown-toggler', 'dropdown-status', 2); // Filter by Status
});