"use client"
import { useForm } from "react-hook-form";

type TEditRewardData = {
    userRole: "company" | "user";
    targetReferrals: string;
    rewardType: "cash" | "gift" | "freeMonthy";
    rewardDuration: number;
}

const ReferralManageInfoModal = () => {
    const {
        register,
        watch,
    } = useForm<TEditRewardData>();
    const targetReferrals = watch("targetReferrals");

    const handleEditReward = () =>{
        console.log("edit reward", targetReferrals)
    }
    return (
        <dialog id="my_modal_6" className="modal w-full">
            <div className="modal-box bg-white p-10 rounded-xl">
                <h3 className="font-medium text-[30px] text-center">Edit Reward</h3>
                <form>
                    <div>
                        <label className="font-medium text-[16px] text-heading block mb-2">Target Referrals</label>
                        <input className="appearance-none py-2 px-4 outline-none border border-gray-400 rounded-lg w-full" {...register("userRole")} />
                    </div>
                    <div>
                        <label className="font-medium text-[16px] text-heading block mb-2">Target Referrals</label>
                        <input className="appearance-none py-2 px-4 outline-none border border-gray-400 rounded-lg w-full" {...register("targetReferrals")} />
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog" className='flex justify-center items-center w-full'>
                        <button className="w-full text-bg-primary border border-bg-primary font-medium text-[15px] rounded-xl py-3 cursor-pointer">Cancel</button>
                    </form>
                    <button onClick={handleEditReward} className="w-full bg-bg-primary text-white font-medium text-[15px] rounded-xl py-3 cursor-pointer">Submit</button>
                </div>
            </div>
        </dialog>
    )
}

export default ReferralManageInfoModal
