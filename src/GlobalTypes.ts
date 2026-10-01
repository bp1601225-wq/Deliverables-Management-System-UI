export interface DeliverablesType {
    id?:string
    title:string,
    verificationMethod?:string
    dueDate?:string
}

export interface SubmissionForm {
  userId:string
  deliverables: DeliverablesType[];
  supportNeeded?: string;
}

export interface UnitType {
  id?: string;
  name: string;
  description?: string;

}

export interface PositionType {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StaffFormData  {
  id?:string
  name: string;
  email: string;
  phone: string;
  positionId: string;
  unitId: string;
  role: string;
  password: string;
  confirmPassword?: string;
};