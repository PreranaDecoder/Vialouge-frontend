import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import squarrLogo from "@/assets/squarr-logo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen w-full flex">
      <div className="hidden lg:block lg:w-1/2 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center" />
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <Card className="w-full max-w-md border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex justify-center mb-8">
              <img src={squarrLogo} alt="Logo" className="h-8" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-8">
              Login To Your Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 text-base font-medium bg-black hover:bg-black/90"
              >
                Login
              </Button>
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-500">
                  Forgot Password?{" "}
                  <a href="#" className="text-gray-500 hover:text-black">
                    Click Here
                  </a>
                </p>
                <p className="text-xs text-gray-400">
                  By clicking on login, you agree to our{" "}
                  <a href="#" className="text-gray-500 hover:text-black">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gray-500 hover:text-black">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
