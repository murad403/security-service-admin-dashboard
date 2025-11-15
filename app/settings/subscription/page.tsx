import SubscriptionCard from '@/app/components/dashboard/SubscriptionCard'
import BackButton from '@/app/components/shared/BackButton'
import { subscriptionPlans } from '@/app/data/Subscription'
import { ISubscriptionPlan } from '@/app/types/AllTypes'
import { DiamondPlus } from 'lucide-react'
import React from 'react'

const Subscription = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <BackButton></BackButton>
          <h2 className='text-2xl font-medium text-heading'>Subscription</h2>
        </div>
        <button className='text-[16px] font-medium flex items-center gap-2 cursor-pointer text-white bg-bg-primary rounded-2xl py-3 px-7'>
          <DiamondPlus />
          <span>Add New Plan</span>
        </button>
      </div>

      {/* subscription  card */}
      <div className='grid grid-cols-2 gap-9 px-10 mt-5'>
        {
          subscriptionPlans.map((subscription: ISubscriptionPlan) => 
            <SubscriptionCard key={subscription.id} subscription={subscription}></SubscriptionCard>
          )
        }
      </div>
    </div>
  )
}

export default Subscription
