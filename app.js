$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "data/data.json",
        "columns": [
            { "data": "id" },
            { "data": "topic" },
            { "data": "type" },
            { "data": "name" },
            { "data": "status" },
            { "data": "date_pc" },
            { "data": "maturity" },
            { "data": "legal" },
            { "data": "published" }
        ]
    } );
} );