"use client"

import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { ShieldCheck, User as UserIcon } from "lucide-react"

export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  status: "active" | "blocked"
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as User["role"]

      return (
        <div
          className={cn(
            "flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium w-max",
            role === "admin" && "bg-red-500/15 text-red-600",
            role === "user" && "bg-purple-500/15 text-purple-600"
          )}
        >
          {role === "admin" ? (
            <ShieldCheck className="h-4 w-4" />
          ) : (
            <UserIcon className="h-4 w-4" />
          )}
          {role}
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as User["status"]

      return (
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              status === "active" && "bg-green-500",
              status === "blocked" && "bg-gray-400"
            )}
          />
          <span
            className={cn(
              "text-sm font-medium",
              status === "active" && "text-green-600",
              status === "blocked" && "text-muted-foreground"
            )}
          >
            {status}
          </span>
        </div>
      )
    },
  },
]
