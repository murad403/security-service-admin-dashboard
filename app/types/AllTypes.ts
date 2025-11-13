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

export interface ICompanyManagement {
 id: string;
 trId: string;
 companyName: string;
 email: string;
 subscription: string;
 rating: number;
 status: "active" | "suspanded";
}

export interface IJobs {
 id: string;
 jobId: string;
 jobTitle: string;
 assigned: number;
 company: string;
 payRate: number;
 dateTime: string;
 status: "pending" | "send";
}

export interface IContractList {
 id: string;
 contractId: string;
 job: string;
 companyName: string;
 operativesName: string;
 issueDate: string;
 status: "signed" | "cancel" | "pending"
}

