import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

const getData = async () : Promise<Payment[]> =>{
    return [
        {
            "id": "728ed521", 
            "amount": 134,
            "status": "pending",
            "username": "John Doe",
            "email": "johndoe@gmail.com"
        },
        {
            "id": "728ed522",
            "amount": 124,
            "status": "success",
            "username": "Jane Doe",
            "email": "janedoe@gmail.com"
        },
        {
            "id": "728ed523",
            "amount": 167,
            "status": "success",
            "username": "Mike Galloway",
            "email": "mikegalloway@gmail.com"
        },
        {
            "id": "728ed524",
            "amount": 89,
            "status": "failed",
            "username": "Sarah Parker",
            "email": "sarahparker@gmail.com"
        },
        {
            "id": "728ed525",
            "amount": 210,
            "status": "pending",
            "username": "David Miller",
            "email": "davidmiller@gmail.com"
        },
        {
            "id": "728ed526",
            "amount": 56,
            "status": "success",
            "username": "Emma Watson",
            "email": "emmawatson@gmail.com"
        },
        {
            "id": "728ed527",
            "amount": 178,
            "status": "failed",
            "username": "Chris Evans",
            "email": "chrisevans@gmail.com"
        },
        {
            "id": "728ed528",
            "amount": 95,
            "status": "pending",
            "username": "Olivia Brown",
            "email": "oliviabrown@gmail.com"
        },
        {
            "id": "728ed529",
            "amount": 302,
            "status": "success",
            "username": "Daniel Smith",
            "email": "danielsmith@gmail.com"
        },
        {
            "id": "728ed530",
            "amount": 141,
            "status": "pending",
            "username": "Sophia Lee",
            "email": "sophialee@gmail.com"
        },
        {
            "id": "728ed531",
            "amount": 220,
            "status": "success",
            "username": "Ryan Cooper",
            "email": "ryancooper@gmail.com"
        },
        {
            "id": "728ed532",
            "amount": 75,
            "status": "pending",
            "username": "Laura Wilson",
            "email": "laurawilson@gmail.com"
        },
        {
            "id": "728ed533",
            "amount": 190,
            "status": "failed",
            "username": "Kevin Hart",
            "email": "kevinhart@gmail.com"
        },
        {
            "id": "728ed534",
            "amount": 128,
            "status": "success",
            "username": "Natalie Portman",
            "email": "natalieportman@gmail.com"
        },
        {
            "id": "728ed535",
            "amount": 64,
            "status": "pending",
            "username": "Andrew Scott",
            "email": "andrewscott@gmail.com"
        },
        {
            "id": "728ed536",
            "amount": 255,
            "status": "success",
            "username": "Jessica Alba",
            "email": "jessicaalba@gmail.com"
        },
        {
            "id": "728ed537",
            "amount": 143,
            "status": "failed",
            "username": "Matthew Lewis",
            "email": "matthewlewis@gmail.com"
        },
        {
            "id": "728ed538",
            "amount": 98,
            "status": "pending",
            "username": "Hannah Kim",
            "email": "hannahkim@gmail.com"
        },
        {
            "id": "728ed539",
            "amount": 310,
            "status": "success",
            "username": "Brian Adams",
            "email": "brianadams@gmail.com"
        },
        {
            "id": "728ed540",
            "amount": 86,
            "status": "pending",
            "username": "Isabella Martinez",
            "email": "isabellamartinez@gmail.com"
        }
    ]
}

const PaymentsPage = async() => {

    const data = await getData();

    return( 
        <div>
            <div className="mb-6 px-4 py-2 bg-secondary rounded-lg">
                <h1 className="font-semibold">All Payments</h1>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    )
};

export default PaymentsPage;