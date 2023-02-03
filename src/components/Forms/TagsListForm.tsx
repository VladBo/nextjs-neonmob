"use client";

import { Tag } from "@prisma/client";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { tagsListSchema } from "@/lib/validations/tagsList";
import { toast } from "@/components/ui/Toast";
import { Card } from "@/components/ui/Card";
import { Icons } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface TagsListFormProps extends HTMLAttributes<HTMLFormElement> {
  tags: Pick<Tag, "id" | "title">[];
}

type FormData = z.infer<typeof tagsListSchema>;

export function TagsListForm({ tags, className, ...props }: TagsListFormProps) {
  const defaultOptions = tags
    ? tags.map((tag) => ({
        value: tag.id.toString(),
        label: tag.title,
      }))
    : [];

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(tagsListSchema),
    defaultValues: {
      title: "",
      tags: [],
    },
  });

  async function onSubmit(data: FormData) {
    const response = await fetch("/api/tags-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        tags: data.tags,
      }),
    });

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        message: "Tag list was not created. Please try again.",
        type: "error",
      });
    }

    toast({
      message: "Tag list has been created.",
      type: "success",
    });

    router.push("/dashboard");
  }

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}>
      <Card>
        <Card.Header>
          <Card.Title>New tags list</Card.Title>
          <Card.Description>Create new tags list.</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              // defaultValue={tagsList.title}
              className="my-0 mb-2 block h-9 w-[350px] rounded-md border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
              size={32}
              placeholder="Title"
              {...register("title")}
            />
            {errors?.title && (
              <p className="px-1 text-xs text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="grid gap-5">
            <label className="sr-only" htmlFor="tags">
              Tags
            </label>
            <Controller
              name="tags"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  instanceId="tags"
                  isMulti
                  options={defaultOptions}
                  className="my-0 mb-2 block h-9 w-[350px] rounded-md border-slate-300 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      boxShadow: "none",
                      "&:focus-within": {
                        borderColor:
                          "rgb(212 212 212 / var(--tw-border-opacity))",
                        boxShadow:
                          "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                      },
                      "input:focus": {
                        boxShadow: "none",
                        outline: "none",
                      },
                      "&:hover": {
                        border: "1px solid rgb(148 163 184)",
                      },
                    }),
                  }}
                  classNames={{
                    control: (state) =>
                      state.isFocused
                        ? "border-slate-300 outline-none ring-2 ring-neutral-800 ring-offset-1"
                        : "border-slate-300",
                  }}
                />
              )}
            />
            {errors?.tags && (
              <p className="px-1 text-xs text-red-600">{errors.tags.message}</p>
            )}
          </div>
        </Card.Content>
        <Card.Footer>
          <button
            type="submit"
            className={cn(
              "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
              {
                "cursor-not-allowed opacity-60": isSubmitting,
              },
              className
            )}
            disabled={isSubmitting}>
            {isSubmitting && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </Card.Footer>
      </Card>
    </form>
  );
}
