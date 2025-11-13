import React, { ReactNode } from 'react'
import DashboardSidebar from '../shared/AdminSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import AdminHeader from '../shared/AdminHeader'

const Wrapper = ({children}: {children: ReactNode}) => {

  return (
    <SidebarProvider>
        <DashboardSidebar></DashboardSidebar>
        <div className='p-5 w-full space-y-5'>
            <AdminHeader></AdminHeader>
            {children}
        </div>
    </SidebarProvider>
  )
}

export default Wrapper
