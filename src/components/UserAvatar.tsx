import { User } from "next-auth";
import { Avatar } from "./ui/Avatar";
import { Icons } from "./ui/Icons";

interface UserAvatarProps {
  user: User & {
    id: string;
  };
}

const UserAvatar = ({ user, ...props }: UserAvatarProps) => (
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

export default UserAvatar;
