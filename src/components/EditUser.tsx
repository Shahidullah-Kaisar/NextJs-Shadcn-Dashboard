"use client"

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const EditUser = () => {
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription>
                    This action cannot be undone.
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    );
};

export default EditUser;