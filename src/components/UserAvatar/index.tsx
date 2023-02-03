"use client";

import type { User } from "@prisma/client";
import type { AvatarProps } from "@radix-ui/react-avatar";
import { Avatar, Icons } from "../ui";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <Avatar.Image alt="Picture" src={user.image} />
      ) : (
        <Avatar.Fallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user className="h-4 w-4" />
        </Avatar.Fallback>
      )}
    </Avatar>
  );
}
