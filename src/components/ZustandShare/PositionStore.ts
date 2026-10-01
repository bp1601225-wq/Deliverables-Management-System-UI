import { create } from "zustand";
import { toast } from "sonner";
import API, { handleAxiosError } from "../configuration/API";

type PositionStoreTypes = {
  Positions: any[];

  GetPositions: () => Promise<void>;

  AddPosition: (
    data: {
      name: string;
      description?: string;
    }
  ) => Promise<void>;

  UpdatePosition: (
    id: string,
    data: {
      name: string;
      description?: string;
    }
  ) => Promise<void>;

  DeletePosition: (id: string) => Promise<void>;
};

export const usePositionStore = create<PositionStoreTypes>(
  (set) => ({

    Positions: [],

    GetPositions: async () => {
      try {

        const response = await API.get(
          "/get-positions"
        );

        set({
          Positions: response.data.data,
        });

      } catch (error) {
        handleAxiosError(error);
      }
    },

    AddPosition: async (data) => {
      try {

        const response = await API.post(
          "/post-position",
          data
        );

        set((state) => ({
          Positions: [
            ...state.Positions,
            response.data.data,
          ],
        }));

        toast.success(
          response.data.message ||
            "Position created successfully"
        );

      } catch (error) {
        handleAxiosError(error);
      }
    },

    UpdatePosition: async (id, data) => {
      try {

        const response = await API.put(
          `/update-position/${id}`,
          data
        );

        set((state) => ({
          Positions: state.Positions.map(
            (position) =>
              position.id === id
                ? response.data.data
                : position
          ),
        }));

        toast.success(
          response.data.message ||
            "Position updated successfully"
        );

      } catch (error) {
        handleAxiosError(error);
      }
    },

    DeletePosition: async (id) => {
      try {

        const response = await API.delete(
          `/delete-position/${id}`
        );

        set((state) => ({
          Positions: state.Positions.filter(
            (position) => position.id !== id
          ),
        }));

        toast.success(
          response.data.message ||
            "Position deleted successfully"
        );

      } catch (error) {
        handleAxiosError(error);
      }
    },

  })
);