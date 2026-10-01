import DataTable from "../../utils/DataGridTable";
import { type GridColDef } from "@mui/x-data-grid";

import { useStaffStore } from "../../components/ZustandShare/StaffZuts";
import { useEffect } from "react";

  
  function StaffList(){
  
    const {GetStaff, Staff} = useStaffStore()
  
useEffect(()=>{
GetStaff()
},[])


const rows = Staff.map((staff:any)=>{

    return {
        id:staff?.id,
        fullName: staff?.name,
        email:staff?.email,
        phone:staff?.phone,
        role:staff?.role,
        unit: staff?.unit?.name,
        unit_description:staff?.unit?.description,
        position:staff?.position?.name,
        position_descripton:staff?.position?.description
    }

})

  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: "fullName",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      flex: 1.5,
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1.5,
    },
    {
      field: "role",
      headerName: "role",
      flex: 1,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   flex: 1,
    // },
  ];


useEffect(()=>{
   console.log(`Staff List`,rows) 
},[rows])

    return (
    <div className="space-y-4">

      {/* PAGE HEADER */}

      <div>
        <h2 className="text-lg font-semibold">
          Users
        </h2>

        <p className="text-sm text-gray-500">
          View, search and manage all users in the system.
        </p>
      </div>

<DataTable 
rows={rows}
columns={columns}

/>


    </div>
  );
  }



  export default StaffList
  