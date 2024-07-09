"use client"
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
import { useState } from "react";
import { Redirect } from "next";
import axios from "axios";

export default function TabsDemo() {
  const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const handleSubmit = async (e:any) => {
      e?.preventDefault();
      
      try {
        const response = await axios.post('https://mindharmony-be9e466ec301.herokuapp.com/user/register/', {
          email,
          username,
          password
        });
        
        // Handle successful response
        console.log('Sign-up successful:', response.data);
        // Redirect('/dashboard')
      } catch (error) {
        // Handle error
        console.error('Sign-up failed:', error);
        // You might want to show an error message to the user
      }
    };

    const handleLogin=async (e:any)=>{
      e?.preventDefault();
      
      try {
        const response = await axios.post('https://mindharmony-be9e466ec301.herokuapp.com/user/login/', {
          username,
          password,
        });
        
        // Handle successful response
        console.log('Sign-in successful:', response.data);
        alert("Signed in successfully.")
        // Redirect('/dashboard')
      } catch (error) {
        
        console.error('Sign-up failed:', error);
        alert("An error occurred while signing in.")
         
      }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8]">
      <Tabs defaultValue="sign-up">
        <TabsList className="grid w-full grid-cols-2 drop-shadow-lg">
          <TabsTrigger value="sign-up">Sign up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        {/* //#region Sign up */}
        <TabsContent value="sign-up">
          <form onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="text">Username</Label>
                  <Input id="username" type="text" placeholder="" value={username} onChange={(e)=> setUsername(e.target.value)} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} required />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col  pt-1">
                <Button type="submit" className="w-full bg-[#2ebbad] ">Sign up</Button>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <TabsList className=" bg-white">
                    <TabsTrigger
                      value="login"
                      className="underline text-[#2ebbad] p-0"
                    >
                      Login
                    </TabsTrigger>
                  </TabsList>
                </div>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        {/* //#region Login */}
        <TabsContent value="login">
          <form onSubmit={handleLogin}>
          <Card className="w-[380px] max-w-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username-login">Email</Label>
                <Input
                  id="username-login"
                  type="text"
                  placeholder=""
                  value={usernameLogin}
                    onChange={(e)=> setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-login">Password</Label>
                <Input id="password-login" type="password" required value={passwordLogin} onChange={(e)=> {setPasswordLogin(e.target.value)}} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-1">
              <Button type="submit" className="w-full bg-[#2ebbad]">Sign in</Button>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                {/* <Link href="#" className="underline">
                  Sign up
                </Link> */}
                <TabsList className="bg-white">
                  <TabsTrigger
                    value="sign-up"
                    className="underline text-[#2ebbad] p-0"
                  >
                    Sign up
                  </TabsTrigger>
                </TabsList>
              </div>
            </CardFooter>
          </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
