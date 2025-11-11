import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";


const API_URL = "https://690e0ef7bd0fefc30a034e3d.mockapi.io/login";


export function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);


    try {
      const response = await axios.post(API_URL, { email, password });

      if (response.status >= (200) && response.status <= (300)) {
        onLoginSuccess(true);
      }
      else {
        setError("Invalid credentials");
      }
      
    } catch (error) {
      setError("Login failed. Please try again.");
      console.error(err);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="w-screen h-screen flex justify-center items-center ">
      <Card className="w-full max-w-sm bg-linear-to-br from-[#141E30] to-[#243B55] text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            POS System Login
          </CardTitle>
          <CardDescription className="text-amber-50">
            Log in to manage sales, inventory, and user accounts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
               {error && <p className="text-sm text-red-300">{error}</p>}
            </div>
          
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            disabled ={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >  {loading ? "Logging in..." : "Login"}
            
          </Button>
        </CardFooter>
      </Card>
      </div>
      </form>
  );
}
