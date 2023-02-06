"use client";

import { notFound } from "next/navigation";
import cn from "../../helpers/cn";
import { useUserContext } from "../../providers/UserProvider";
import UserAvatar from "../UserAvatar";

const UserHeadSection = () => {
  const { user } = useUserContext();

  if (!user) {
    return notFound();
  }
  return (
    <div className="mt-4 rounded-t-2xl border-x border-t border-zinc-300 bg-gradient-to-bl from-slate-300 pt-14 pb-4 pl-4 sm:pl-10">
      <div
        className={cn(
          "mb-3 flex h-20 w-20 flex-row items-center justify-center overflow-hidden rounded-full",
          !user.image && "bg-purple-400"
        )}
      >
        <UserAvatar
          user={user}
          fallbackProps={{
            delayMs: 600,
          }}
        />
      </div>
      <p className="text-lg font-medium">{user.name}</p>
      <p className="text-[14px]">{user.email}</p>
    </div>
  );
};

export default UserHeadSection;
