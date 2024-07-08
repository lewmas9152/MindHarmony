import { Button } from "@/components/ui/button";
import "../sass/Auth.scss";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function TabsDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Tabs defaultValue="sign-up">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-up">Sign up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        {/* //#region Sign up */}
        <TabsContent value="sign-up">
          <Card className="w-[380px] max-w-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Sign up</CardTitle>

              <CardDescription>
                Enter your email below to sign up.
                {/* Enter your email below to login to your account. */}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col  pt-1">
              <Button className="w-full">Sign up</Button>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <TabsList>
                  <TabsTrigger
                    value="login"
                    className="underline text-black p-0"
                  >
                    Login
                  </TabsTrigger>
                </TabsList>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* //#region Login */}
        <TabsContent value="login">
          <Card className="w-[380px] max-w-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="janedoe@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-1">
              <Button className="w-full">Sign in</Button>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                {/* <Link href="#" className="underline">
                  Sign up
                </Link> */}
                <TabsList>
                  <TabsTrigger
                    value="sign-up"
                    className="underline text-black p-0"
                  >
                    Sign up
                  </TabsTrigger>
                </TabsList>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
