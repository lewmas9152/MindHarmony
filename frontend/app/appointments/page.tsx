import {
  CalendarIcon,
  CircleCheck,
  CircleUserIcon,
  CircleXIcon,
  Hourglass,
  UserIcon,
} from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const iconMapping = {
  confirmed: <CircleCheck />,
  cancelled: <CircleXIcon />,
  pending: <Hourglass />,
};

const Appointments = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-[#f0f4f9] mt-16">
      <Navbar />
      <div className="flex flex-col items-center w-full px-1 ">
        <Tabs defaultValue="all" className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
          <TabsList
            
            className="fixed top-20 grid w-full sm:w-[80%] mx-auto grid-cols-4  shadow-lg"
          >
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <div className=" w-full sm:w-[70%] mx-auto">
            <TabsContent value="all" className="space-y-3">
              <AppointmentCard icon="pending" />
              <AppointmentCard icon="confirmed" />
              <AppointmentCard icon="cancelled" />
              <AppointmentCard icon="pending" />
              <AppointmentCard icon="pending" />
              <AppointmentCard icon="pending" />
            </TabsContent>
            <TabsContent value="pending" className="space-y-3">
              <AppointmentCard icon="pending" />
              <AppointmentCard icon="pending" />
            </TabsContent>
            <TabsContent value="confirmed" className="space-y-3">
              <AppointmentCard icon="confirmed" />
              <AppointmentCard icon="confirmed" />
              <AppointmentCard icon="confirmed" />
            </TabsContent>
            <TabsContent value="cancelled" className="space-y-3">
              <AppointmentCard icon="cancelled" />
              <AppointmentCard icon="cancelled" />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Appointments;

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Title */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-xl font-bold ">Appointments</h1>
          </div>

          <div className="flex items-center">
            <CircleUserIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

const AppointmentCard = ({ icon }: { icon: string }) => {
  // const Icon= iconMapping[icon];
  return (
    <Card className="space-x-0 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>
            <h2 className="text-xl">Appointment 1</h2>
          </CardTitle>
          <p className="text-lg font-light">Doctor Who</p>
        </div>
        <span className="text-2xl">
          {icon == "pending" ? (
            <Hourglass className="text-blue-500" />
          ) : (
            <CircleCheck className="text-green-500" />
          )}
        </span>
      </CardHeader>
      <CardFooter className="text-sm">
        <p className="flex items-center space-x-1 text-slate-700">
          <span>
            <CalendarIcon />
          </span>
          <span>July 23, 2024</span>
        </p>
      </CardFooter>
    </Card>
  );
};
