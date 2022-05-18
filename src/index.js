//Here we're importing items we'll need. You can add other imports here.
import { customerColumns, admissionsColumns } from "./columns";
var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json);
  const data = obj.data;
  const dataType = obj.columnType;
  // return;

  const columns =
    dataType === "Customers" ? customerColumns : admissionsColumns;

  //https://datatables.net/reference/option/
  //https://datatables.net/examples/index
  // Create the DataTable, after destroying it if already exists
  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 10,
    searching: false,
    colReorder: true,
    order: [[2, "desc"]],
    columns: columns,
    data: data,
  });
};
