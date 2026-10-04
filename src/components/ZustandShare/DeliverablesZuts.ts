import { create } from "zustand";
import { toast } from "sonner";
import API, { handleAxiosError } from "../configuration/API";
import type { SubmissionForm } from "../../GlobalTypes";
// import { dividerClasses } from "@mui/material";

type SubmissionStoreTypes = {
  Submissions: any[];


  GetSubmissions: (
    search?: string,
    thisWeek?: boolean
  ) => Promise<void>;

  AddSubmission: (
    submission: SubmissionForm
  ) => Promise<void>;

AddSubmissionComment: (
  payload: any
) => Promise<any>;
};

export const useSubmissionStore = create<SubmissionStoreTypes>(
  (set) => ({
    Submissions: [],

    // GET WEEKLY SUBMISSIONS
    GetSubmissions: async (
      search?: string,
    thisWeek?: boolean

    ) => {

      try {
        // console.log("GET WEEKLY SUBMISSIONS:", {
        //   search,
        //   status,
        // });

        const response = await API.get(
          "/weekly-submissions",
          {
            params: {
              ...(search && {
              search,

              }),

                ...(thisWeek && {
              thisWeek,

              })

          

            },
          }
        );

        console.log(
          "RESULT FROM API:",
          response.data.data
        );

        set({
          Submissions: response.data.data,
        });
      } catch (error) {
        handleAxiosError(error);
      }
    },

    // CREATE WEEKLY SUBMISSION
    AddSubmission: async (
      submission: SubmissionForm
    ) => {
      try {
        const response = await API.post(
          "/post-weekly-submissions",
          submission
        );

        set((state) => ({
          Submissions: [
            ...state.Submissions,
            response.data.data,
          ],
        }));

        toast.success(
          response.data.message ||
            "Submission created successfully"
        );
      } catch (error) {

        handleAxiosError(error);
        
      }
    },

    AddSubmissionComment: async (payload) => {
try {

  const response =
   await API.post("/post-weekly-submissions-comment", payload)

   toast.success(response.data.message)


    return response.data.data

} catch (error){
handleAxiosError(error)
}
    }
  })
);