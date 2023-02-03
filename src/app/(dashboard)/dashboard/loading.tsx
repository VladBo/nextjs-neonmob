import { DashboardHeader } from "@/components/Dashboard/Header";
import { DashboardShell } from "@/components/Dashboard/Shell";
import { TagsListItem } from "@/components/Dashboard/TagsListItem";
import Link from "next/link";

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Tags lists" text="Create and manage posts.">
        <Link
          href="/dashboard/tags-lists/add"
          className="relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
          Create list
        </Link>
      </DashboardHeader>
      <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
        <TagsListItem.Skeleton />
        <TagsListItem.Skeleton />
        <TagsListItem.Skeleton />
        <TagsListItem.Skeleton />
        <TagsListItem.Skeleton />
      </div>
    </DashboardShell>
  );
}
