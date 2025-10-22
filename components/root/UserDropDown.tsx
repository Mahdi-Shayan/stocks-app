"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useCallback } from "react";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

function UserDropDown() {
  const router = useRouter();

  const handleSignOut = useCallback(async () => {
    router.push("/sign-in");
  }, [router]);

  const user = { name: "ali", email: "ali@example.com" };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex-center gap-3 text-gray-400 hover:text-yellow-500 hover:!bg-transparent"
        >
          <Avatar className="size-8">
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold flex">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base text-gray-400 font-medium">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-3">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="size-8">
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base text-gray-400 font-medium">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="hover:!text-yellow-500 transition-colors"
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block hover:!text-yellow-500" />
          Logout
        </DropdownMenuItem>

        <NavItems className="sm:hidden text-sm font-normal"/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default UserDropDown;
