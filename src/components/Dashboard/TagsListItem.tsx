import { TagsList } from "@prisma/client";
import Link from "next/link";
import { formatDate, s3Url } from "@/lib/utils";
import { TagsListItemOperations } from "@/components/Dashboard/TagsListItemOperations";
import { Skeleton } from "@/components/ui/Skeleton";

interface TagsListItemProps {
  tagsList: Pick<
    TagsList,
    "id" | "title" | "createdAt" | "authorId" | "fileId"
  >;
}

export function TagsListItem({ tagsList }: TagsListItemProps) {
  const url = s3Url(`csv/${tagsList.authorId}/${tagsList.fileId}.csv`);
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/dashboard/tags-lists/${tagsList.id}`}
          className="font-semibold hover:underline">
          {tagsList.title}
        </Link>
        <div>
          <p className="text-sm text-slate-600">
            {formatDate(tagsList.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <div className="grid gap-1">
        <Link
          href={url}
          // className="border-slate-200 bg-white text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
          className="relative inline-flex h-8 items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
          Download CSV
        </Link>
      </div>
      <TagsListItemOperations
        tagsList={{ id: tagsList.id, title: tagsList.title }}
      />
    </div>
  );
}

TagsListItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
