"use client";

// 1. Fix the import: Import authClient directly or just use updateUser
import { authClient } from "@/lib/auth-client"; 
import { Button, Input } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { toast } from "sonner";
import { useState } from "react";

export function UpdateUserModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession(); 

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const image = formData.get("image");

    try {
     
      await authClient.updateUser({ name, image }, {
        onRequest: () => {
          toast.loading("Updating profile...", { id: "update-user" });
        },
        onSuccess: () => {
          toast.success("Profile updated successfully!", { id: "update-user" });
          
          
          setIsOpen(false); 

          setTimeout(() => {
            window.location.reload();
          }, 800);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Failed to update profile", { id: "update-user" });
        }
      });
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        variant="flat"
        className="w-full bg-indigo-50 text-indigo-600 font-bold rounded-2xl h-12 hover:bg-indigo-600 hover:text-white transition-all"
      >
        <BiEdit className="text-lg" /> Update Profile
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-md mx-4 z-10">
            <div className="flex items-center justify-between gap-3 py-6 px-8 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                  <BiUser size={24} />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-800 tracking-tight">Update Profile</p>
                  <p className="text-xs text-slate-400 font-medium italic">Refine your public identity</p>
                </div>
              </div>
              <button
                type="button" 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <FiX className="text-slate-500 text-xl" />
              </button>
            </div>

            <form onSubmit={onSubmit}>
              <div className="py-8 px-8 flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Display Name
                  </label>
                  <Input
                    name="name"
                    variant="bordered"
                    placeholder="Enter your name"
                    defaultValue={session?.user?.name} 
                    classNames={{
                      inputWrapper: "h-12 rounded-xl border-slate-200 focus-within:border-indigo-600",
                    }}
                  />
                </div>
                <Input
                  label="Profile Image URL"
                  name="image"
                  type="url"
                  variant="bordered"
                  placeholder="https://example.com/photo.jpg"
                  defaultValue={session?.user?.image}
                  labelPlacement="outside"
                  classNames={{
                    inputWrapper: "h-12 rounded-xl border-slate-200 focus-within:border-indigo-600",
                    label: "font-bold text-slate-700"
                  }}
                />
              </div>

              <div className="flex justify-end gap-3 py-6 px-8 border-t border-slate-100">
                <Button
                  type="button"
                  variant="light"
                  onPress={() => setIsOpen(false)}
                  className="rounded-xl font-bold text-slate-500"
                >
                  Cancel
                </Button>
                <Button
                  type="submit" 
                  className="bg-indigo-600 text-white font-bold rounded-xl px-8 shadow-lg shadow-indigo-100"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}