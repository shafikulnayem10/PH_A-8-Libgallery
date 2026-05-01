"use client";

import { useSession } from "@/lib/auth-client";
import { Avatar, Card, Chip } from "@heroui/react";
import { FiMail, FiUser, FiCalendar, FiShield } from "react-icons/fi";
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
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-xl mx-auto px-6">
        <Card className="border-none shadow-sm rounded-[40px] overflow-hidden bg-white">
          <div className="h-32 bg-indigo-600 w-full" />
          <div className="flex flex-col items-center pb-10 px-8">
            <div className="relative -mt-16 mb-6">
 
<div className="relative w-32 h-32 rounded-full overflow-hidden">
  <Image
    src={user?.image || defaultavatar}
    alt={user?.name}
    fill
    className="object-cover"
    onError={() => setImgError(true)}
  />
</div>

            </div>

            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              {user?.name}
            </h2>
            <Chip
              size="sm"
              variant="flat"
              className="mt-2 bg-indigo-50 text-indigo-600 font-bold uppercase tracking-wider"
            >
              {user?.role || "Member"}
            </Chip>

           

            <div className="w-full space-y-6">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                    <p className="text-slate-700 font-medium">{user?.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <FiShield size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">User ID</p>
                    <p className="text-slate-500 font-mono text-sm">{user?.id}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <FiCalendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Joined On</p>
                    <p className="text-slate-700 font-medium">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 w-full">
              <UpdateUserModal />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfilePage;