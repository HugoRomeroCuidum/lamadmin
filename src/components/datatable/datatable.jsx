import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColums, userRows, } from "../../datatablesource" 
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
const [data,setData] = useState(userRows)
const handleDelete = (id)=>{
  setData(data.filter(item=>item.id !== id))
}
    const actionColum = [
        {field:"action",
         headerName:"Action",
         width:"200",
         renderCell:(params)=>{
            return(
                <div className="cellAction">View
                    <div className="viewButton">View</div>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>      
                    </div>
)
         }                    
    }

    ]


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User 
        <Link to="/users/new" style={{ textDecoration: "none"}} className="link">
        Add New
        </Link>
      </div>
        <DataGrid
        className="datagrid"
        rows={data}
        columns={userColums.concat(actionColum)}
        initialState={9}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    
    
    
    </div>
  )
}

export default Datatable