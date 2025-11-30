import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import employees from "./employees";

import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {

  const [searchText, setSearchText] = React.useState("");

  const columns = [
    { field: "id" , flex : 0.5 , minWidth: 70 },
    { field: "firstName" , flex : 1 , minWidth: 150 },
    { field: "lastName" , flex : 1 , minWidth: 150 },
    { field: "email" , flex : 2 , minWidth: 250 },
    { field: "department" },
    { field: "position" },
    { field: "salary" , valueFormatter: p => "₹" + p.value.toLocaleString()},
    { field: "hireDate" },
    { field: "age" },
    { field: "location" },
    { field: "performanceRating" },
    { field: "projectsCompleted" },
    { field: "isActive" },
    { field: "skills" },
    { field: "manager" }
  ];

  return (
    <div style={{ height: "700px", width: "100%", padding: "20px" }}>
      <h2>employee info</h2>

      <div className="ag-theme-alpine" style={{ height: "600px", width: "100%" }} >
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          
        />
        <AgGridReact
          rowData={employees.employ}
          columnDefs={columns}
          defaultColDef = {{ sortable: true, filter: true}}
          pagination= {true}
          paginationPageSize= {20}
          quickFilterText={searchText}
        />
      </div>
    </div>   
  );
}

export default App;