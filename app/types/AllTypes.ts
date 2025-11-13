export interface TableColumn {
  key: string;
  label: string;
  width?: string;
}

export interface IRecentUserData {
  id: string;
  trId: string;
  userName: string;
  email: string;
  joinDate: string;
}

export interface IEarningList {
  id: string;
  trId: string;
  userName: string;
  name: string;
  email: string;
  date: string;
  amount: number;
  status: string;
}

export interface IVerificationCenter {
 id: string;
 userName: string; 
 userRole: string;
 submittedDocs: string;
 uploadDate: string;
 status: "reject" | "approved" | "pending"; 
}

export interface IOperativeManagement {
 id: string;
 trId: string;
 operativeName: string;
 email: string;
 subscription: string;
 rating: number;
 status: "active" | "suspanded";
}

