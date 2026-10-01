import {create} from "zustand"
import type { StaffFormData } from "../../GlobalTypes"
import API, { handleAxiosError } from "../configuration/API"
import { toast } from "sonner"


type StaffType = {

Staff: StaffFormData[],
GetStaff: () => Promise<void>
CreateStaff: (data:StaffFormData) => Promise<void> 
UpdateStaff: (id:string) => Promise<void> 
DeleteStaff: () => Promise<void>

}

export const useStaffStore = create<StaffType>((set)=>({

    Staff: [],

    GetStaff: async () => {

        try {

            const response = await API.get("/users")

set ({
    Staff:response.data.data
})
        } catch (error:any){
            handleAxiosError(error)
        }
    },


    CreateStaff: async (data:StaffFormData) => {
        try {

            const response = await API.post("/users", data)


            set ((state)=>({
                Staff: [
                    ...state.Staff, response.data.data
                ]
            }))

            toast.success(response.data.message)

        } catch (error:any){
            handleAxiosError(error)
        }
    },



    UpdateStaff:  async (id:string) => {
        
        try {
            const response = await API.put(`/users/:${id}`)
            
set ((state)=>(
    {
        Staff: state.Staff.map((staff)=>(
            staff.id === id ? {...staff, ...response.data} :staff
        ))
    }
))

        } catch (error:any){
            handleAxiosError(error)
        }
    },



    DeleteStaff: async () => {

    }







}))