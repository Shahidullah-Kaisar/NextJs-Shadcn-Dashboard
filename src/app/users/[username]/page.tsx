import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Crown, ShieldCheck, Star, UserCheck } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import EditUser from "@/components/EditUser";
import { Button } from "@/components/ui/button";

const SingleUserPage = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboards</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>John Doe</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* Left section */}
                <div className="w-full xl:w-1/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck 
                                    size={36}
                                    className="bg-blue-500/30 rounded-full border-1 border-blue-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">
                                    This user has been Verified by the Admin.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <ShieldCheck 
                                    size={36}
                                    className="bg-green-500/30 rounded-full border-1 border-green-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Secure Account</h1>
                                    <p className="text-sm text-muted-foreground">
                                    This account has enhanced security enabled.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Star 
                                    size={36}
                                    className="bg-yellow-500/30 rounded-full border-1 border-yellow-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Top Rated</h1>
                                    <p className="text-sm text-muted-foreground">
                                    This user is highly rated by the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Crown 
                                    size={36}
                                    className="bg-purple-500/30 rounded-full border-1 border-purple-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Premium User</h1>
                                    <p className="text-sm text-muted-foreground">
                                    This user has an active premium membership.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <UserCheck 
                                    size={36}
                                    className="bg-teal-500/30 rounded-full border-1 border-teal-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Trusted Member</h1>
                                    <p className="text-sm text-muted-foreground">
                                    This user is a trusted member of the platform.
                                    </p>
                                </HoverCardContent>
                            </HoverCard> 
                        </div>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>
                            <Sheet>
                                <SheetTrigger>
                                    <Button>Edit User</Button>
                                </SheetTrigger>
                                <EditUser/>
                            </Sheet>
                        </div>
                        
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={66} />
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span className="text-muted-foreground">Jhon Doe</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span className="text-muted-foreground">abc@gmail.com</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span className="text-muted-foreground">+8801xxxxxxxxxxxxx</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Joining Date: 16-2-2026</p>
                        </div>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transaction"/>
                    </div>
                </div>
                {/* Right section */}
                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
                    <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
                </div>

            </div>
        </div>
    );
};

export default SingleUserPage;