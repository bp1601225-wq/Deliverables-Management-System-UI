import { create } from "zustand";
import { toast } from "sonner";
import API, { handleAxiosError } from "../configuration/API";

type UnitStoreTypes = {
  Units: any[];

  GetUnits: () => Promise<void>;

  AddUnit: (
    data: {
      name: string;
      description?: string;
    }
  ) => Promise<void>;

  UpdateUnit: (
    id: string,
    data: {
      name: string;
      description?: string;
    }
  ) => Promise<void>;

  DeleteUnit: (id: string) => Promise<void>;
};

export const useUnitStore = create<UnitStoreTypes>(
  (set) => ({

    Units: [],

    GetUnits: async () => {
      try {

        const response = await API.get(
          "/get-units"
        );

        set({
          Units: response.data.data,
        });

        // toast.success("Unit added succesfully")

      } catch (error) {
        handleAxiosError(error);
      }
    },

    AddUnit: async (data) => {
      try {

        const response = await API.post(
          "/post-unit",
          data
        );

        set((state) => ({
          Units: [
            ...state.Units,
            response.data.data,
          ],
        }));

        toast.success(
          response.data.message ||
            "Unit created successfully"
        );

      } catch (error) {
        handleAxiosError(error);
      }
    },

    UpdateUnit: async (id, data) => {
      try {

        const response = await API.put(
          `/update-unit/${id}`,
          data
        );

        set((state) => ({
          Units: state.Units.map((unit) =>
            unit.id === id
              ? response.data.data
              : unit
          ),
        }));

        toast.success(
          response.data.message ||
            "Unit updated successfully"
        );

      } catch (error) {
        handleAxiosError(error);
      }
    },

    DeleteUnit: async (id) => {
      try {

        const response = await API.delete(
          `/delete-unit/${id}`
        );

        set((state) => ({
          Units: state.Units.filter(
            (unit) => unit.id !== id
          ),
        }));

        toast.success(
          response.data.message ||
            "Unit deleted successfully"
        );

      } catch (error) {
        handleAxiosError(error);
      }
    },

  })
);