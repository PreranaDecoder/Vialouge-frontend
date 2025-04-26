import { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const UserProfileButton: FC<{ firstName?: string }> = ({
  firstName = "V",
}) => {
  return (
    <Button variant="ghost" className="h-10 w-10 p-0">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-emerald-500 text-white">
          {firstName.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </Button>
  );
};
