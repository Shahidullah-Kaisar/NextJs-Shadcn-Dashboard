"use client"

const todoListData = [
  {
    id: "todo1",
    label: "Finish dashboard UI design",
  },
  {
    id: "todo2",
    label: "Fix Next.js image configuration issue",
  },
  {
    id: "todo3",
    label: "Complete API integration",
  },
  {
    id: "todo4",
    label: "Optimize database queries",
  },
  {
    id: "todo5",
    label: "Write documentation for the project",
  },
  {
    id: "todo6",
    label: "Refactor reusable components",
  },
  {
    id: "todo7",
    label: "Implement authentication flow",
  },
  {
    id: "todo8",
    label: "Test application on mobile devices",
  },
  {
    id: "todo9",
    label: "Deploy project to production",
  },
  {
    id: "todo10",
    label: "Review code and fix remaining bugs",
  },
  {
    id: "todo11",
    label: "Deploy project to production",
  },
  {
    id: "todo12",
    label: "Review code and fix remaining bugs",
  }
];


import { CalendarIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)

    return (
        <div>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon/>
                        {date ? format(date, "PPP") : <span>Pick a Date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date)=>{
                            setDate(date)
                            setOpen(false)
                        }}
                        className="rounded-lg"
                    />
                </PopoverContent>
            </Popover>
            
            <ScrollArea className="max-h-[400px] overflow-y-auto mt-4">
                {
                    todoListData.map((item=>(
                        <div key={item.id} className="mb-4">
                            <Card className="p-4">
                                <div className="flex gap-2 items-center">
                                    <Checkbox id={item.id}/>
                                    <Label htmlFor="item1" className="text-sm text-muted-foreground">{item.label}</Label>
                                </div>
                            </Card>
                        </div>
                    )))
                }
                
            </ScrollArea>
        </div>
    );
};

export default TodoList;