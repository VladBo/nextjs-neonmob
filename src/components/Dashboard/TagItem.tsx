"use client";

import { Tag } from "@prisma/client";
import Link from "next/link";
import { Skeleton } from "@/components/ui/Skeleton";
import { Switch } from "@/components/ui/Switch";
import { useState } from "react";
import { toast } from "@/components/ui/Toast";

interface TagItemProps {
  tag: Pick<Tag, "id" | "title" | "status">;
}

const updateStatus = (tagId: number, status: boolean) => {
  return fetch(`/api/tags/${tagId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: status,
    }),
  });
};

export function TagItem({ tag }: TagItemProps) {
  const [status, setStatus] = useState(tag.status);

  const changeHandler = async (switchStatus: boolean) => {
    setStatus(switchStatus);
    const response = await updateStatus(tag.id, switchStatus);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        message: "Tag list was not updated. Please try again.",
        type: "error",
      });
    }

    toast({
      message: "Tag list has been updated.",
      type: "success",
    });
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/dashboard/tags/${tag.id}`}
          className="font-semibold hover:underline">
          {tag.title}
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="tag-status"
          checked={status}
          onCheckedChange={(value) => changeHandler(value)}
        />
      </div>
    </div>
  );
}

TagItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
