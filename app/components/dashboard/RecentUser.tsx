"use client"
import CustomTable from '../shared/CustomTable'
import { IRecentUserData, TableColumn } from '@/app/types/AllTypes';
import { RecentUserData } from '@/app/data/RecentUserData';
import { CiCircleInfo } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { AiOutlineDelete } from 'react-icons/ai';

const RecentUser = () => { 
    const columns: TableColumn[] = [
        { key: "trId", label: "#TR.ID", width: "100px" },
        { key: "userName", label: "User Name", width: "150px" },
        { key: "email", label: "Email", width: "120px" },
        { key: "joinDate", label: "Join Date ", width: "100px" },
        { key: "action", label: "Action", width: "100px" },
    ];
    const renderCell = (item: IRecentUserData, columnKey: string) => {
    switch (columnKey) {
      case "status":
        return (
          <div
            className={`px-2 py-1 w-16 flex justify-center rounded-lg text-xs font-medium ${
              item?.status === "Paid"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {item?.status}
          </div>
        );
      case "action":
        return (
          <div className="flex items-center">
            <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
              <CiCircleInfo className="size-6 text-gray-600" />
            </button>
            <Button className="p-0.5 bg-transparent hover:bg-gray-100 rounded-md transition-colors">
              <AiOutlineDelete className="size-6 text-gray-600" />
            </Button>
          </div>
        );
      default:
        return String(item[columnKey as keyof IRecentUserData]);
    }
  };
    return (
        <div>
            <h2 className='text-2xl font-medium text-heading mb-3'>Recent Users</h2>
            <CustomTable columns={columns} data={RecentUserData} renderCell={renderCell}
            ></CustomTable>
        </div>
    )
}

export default RecentUser
