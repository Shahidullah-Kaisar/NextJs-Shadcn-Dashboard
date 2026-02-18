import { DataTable } from "@/components/data-table";
import { columns, User } from "./columns";

const getUsers = async (): Promise<User[]> => {
    return [
        {
            id: "1",
            name: "John Doe",
            email: "john@gmail.com",
            role: "admin",
            status: "active",
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "jane@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "3",
            name: "Michael Brown",
            email: "michael@gmail.com",
            role: "user",
            status: "blocked",
        },
        {
            id: "4",
            name: "Sarah Johnson",
            email: "sarah@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "5",
            name: "David Wilson",
            email: "david@gmail.com",
            role: "admin",
            status: "active",
        },
        {
            id: "6",
            name: "Emily Davis",
            email: "emily@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "7",
            name: "Chris Miller",
            email: "chris@gmail.com",
            role: "user",
            status: "blocked",
        },
        {
            id: "8",
            name: "Olivia Taylor",
            email: "olivia@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "9",
            name: "Daniel Anderson",
            email: "daniel@gmail.com",
            role: "admin",
            status: "active",
        },
        {
            id: "10",
            name: "Sophia Thomas",
            email: "sophia@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "11",
            name: "James Moore",
            email: "james@gmail.com",
            role: "user",
            status: "blocked",
        },
        {
            id: "12",
            name: "Isabella Martin",
            email: "isabella@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "13",
            name: "William Jackson",
            email: "william@gmail.com",
            role: "admin",
            status: "active",
        },
        {
            id: "14",
            name: "Mia White",
            email: "mia@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "15",
            name: "Benjamin Harris",
            email: "benjamin@gmail.com",
            role: "user",
            status: "blocked",
        },
        {
            id: "16",
            name: "Charlotte Clark",
            email: "charlotte@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "17",
            name: "Henry Lewis",
            email: "henry@gmail.com",
            role: "admin",
            status: "active",
        },
        {
            id: "18",
            name: "Amelia Walker",
            email: "amelia@gmail.com",
            role: "user",
            status: "active",
        },
        {
            id: "19",
            name: "Lucas Hall",
            email: "lucas@gmail.com",
            role: "user",
            status: "blocked",
        },
        {
            id: "20",
            name: "Ella Young",
            email: "ella@gmail.com",
            role: "user",
            status: "active",
        },
    ];
};

const UserPage = async () => {
    const data = await getUsers();

    return (
        <div>
            <h1 className="font-semibold mb-4">All Users</h1>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default UserPage;
