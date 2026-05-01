"use client";

import { useSession } from "@/lib/auth-client";
import { Card, Chip } from "@heroui/react";
import { FiMail, FiCalendar, FiShield } from "react-icons/fi";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { useState } from "react"; 
import Image from "next/image";
import defaultavatar from "../../../public/defaultAvatar.jpg";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const [imgError, setImgError] = useState(false); 

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <section className="py-8 md:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-xl mx-auto px-4 md:px-6">
        <Card className="border-none shadow-sm rounded-[32px] md:rounded-[40px] overflow-hidden bg-white">
        
          <div className="h-24 md:h-32 bg-indigo-600 w-full" />
          
          <div className="flex flex-col items-center pb-10 px-4 md:px-8">
           
            <div className="relative -mt-12 md:mt-16 mb-4 md:mb-6">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={user?.image || defaultavatar}
                  alt={user?.name || "User"}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              </div>
            </div>

            
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight break-words px-2">
                {user?.name}
              </h2>
              <Chip
                size="sm"
                variant="flat"
                className="mt-2 bg-indigo-50 text-indigo-600 font-bold uppercase tracking-wider"
              >
                {user?.role || "Member"}
              </Chip>
            </div>

           
            <div className="w-full space-y-5">
            
              <div className="flex items-start gap-4 p-1 group">
                <div className="shrink-0 p-3 bg-slate-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FiMail size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                  <p className="text-slate-700 font-medium break-all text-sm md:text-base">
                    {user?.email}
                  </p>
                </div>
              </div>

             
              <div className="flex items-start gap-4 p-1 group">
                <div className="shrink-0 p-3 bg-slate-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FiShield size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">User ID</p>
                  <p className="text-slate-500 font-mono text-[10px] md:text-sm break-all leading-relaxed">
                    {user?.id}
                  </p>
                </div>
              </div>

             
              <div className="flex items-start gap-4 p-1 group">
                <div className="shrink-0 p-3 bg-slate-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FiCalendar size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Joined On</p>
                  <p className="text-slate-700 font-medium text-sm md:text-base">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-GB') : "N/A"}
                  </p>
                </div>
              </div>
            </div>

        
            <div className="mt-10 w-full px-2">
              <UpdateUserModal />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfilePage;