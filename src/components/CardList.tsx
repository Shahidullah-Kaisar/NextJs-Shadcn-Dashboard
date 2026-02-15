import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "AI Image Generation",
    badge: "AI",
    image: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg",
    count: 1200
  },
  {
    id: 2,
    title: "Web Development Basics",
    badge: "Web",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    count: 980
  },
  {
    id: 3,
    title: "React Dashboard UI",
    badge: "React",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    count: 1500
  },
  {
    id: 4,
    title: "Node.js Backend API",
    badge: "Backend",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    count: 860
  },
  {
    id: 5,
    title: "Full Stack Project",
    badge: "Full Stack",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    count: 2100
  },
  {
    id: 6,
    title: "UI/UX Design System",
    badge: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    count: 1340
  }
];

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    count: 1400
  },
  {
    id: 2,
    title: "Course Purchase",
    badge: "Jane Smith",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    count: 800
  },
  {
    id: 3,
    title: "Premium Upgrade",
    badge: "Alex Brown",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    count: 2000
  },
  {
    id: 4,
    title: "Team License",
    badge: "Michael Lee",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    count: 3200
  },
  {
    id: 5,
    title: "Template Purchase",
    badge: "Emily Clark",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    count: 650
  },
  {
    id: 6,
    title: "Annual Plan Upgrade",
    badge: "David Wilson",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    count: 5000
  }
];



const CardList = ({title}:{title: string}) => {

    const list = title === "Popular Content" ? popularContent : latestTransactions

    return (
        <div>
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {
                    list.map(item=>(
                        <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                            <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                                <Image src={item.image} alt={item.title} fill className="object-cover"/>
                            </div>
                            <CardContent className="flex-1 p-0">
                                <CardTitle className="text-sm">{item.title}</CardTitle>
                                <Badge variant="secondary" className="px-5">{item.badge}</Badge>
                            </CardContent>
                            <CardFooter className="p-0">{item.count/1000}K</CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default CardList;