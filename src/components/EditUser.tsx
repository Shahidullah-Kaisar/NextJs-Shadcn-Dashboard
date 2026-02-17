"use client"

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { editUserSchema } from "@/schemas/user.schema";
import * as z from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type EditUserForm = z.infer<typeof editUserSchema>

const EditUser = () => {

    const defaultUserData : EditUserForm = {
        name: "Shahidullah Kaisar",
        email: "shahid@gmail.com",
        phone: "01712345678",
        location: "Dhaka",
        role: "admin"
    }

    const form = useForm<EditUserForm>({
        resolver: zodResolver(editUserSchema),
        defaultValues: defaultUserData,
  })

  function onSubmit(data: EditUserForm) {
    toast.success("User updated successfully")
    console.log(data)
  }

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription asChild>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-2 space-y-4"
                    >
                        <FieldGroup>

                            {/* Name */}
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input {...field} placeholder="Enter name" />
                                    <FieldDescription>
                                        This name will appear publicly.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                                )}
                            />

                            {/* Email */}
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input {...field} placeholder="Enter email" />
                                    <FieldDescription>
                                        Only Admin can see your Email.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                                )}
                            />

                            {/* Phone */}
                            <Controller
                                name="phone"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Phone</FieldLabel>
                                    <Input {...field} placeholder="Enter phone number" />
                                    <FieldDescription>
                                        Only Admin can see your Phone.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                    </Field>
                                )}
                            />

                            {/* Location */}
                            <Controller
                                name="location"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Location</FieldLabel>
                                    <Input {...field} placeholder="Enter location" />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                    </Field>
                                )}
                            />

                            {/* Role */}
                            <Controller
                            name="role"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Role</FieldLabel>

                                    <Select value={field.value} onValueChange={field.onChange} >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectItem value="admin">Admin</SelectItem>
                                            <SelectItem value="user">User</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                            />

                        </FieldGroup>

                        <div className="flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => form.reset(defaultUserData)}
                            >
                                Reset
                            </Button>
                            <Button type="submit">Update</Button>
                        </div>
                    </form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    );
};

export default EditUser;