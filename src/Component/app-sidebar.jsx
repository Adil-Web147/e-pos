import React from "react";
import {
  LayoutDashboard,
  Folder,
  Package,
  Users,
} from "lucide-react";

import { NavMain } from "@/component/nav-main";
import { NavUser } from "@/component/nav-users";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";



const data = {
  user: {
    name: "M.Adil",
    email: "m.adil.codes@gmail.com",
    avatar: "/Profile Pic.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: []
    },
    {
      title: "Categories",
       url: "/categories",
      icon: Folder,
      items: []
    },
    {
      title: "Products", 
      url: "/products",
      icon: Package,
      items: []
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
      items: []
    },
  ],
};


const NavBarState = {
  Expanded: "expanded",
  Collapsed: "collapsed",
};
export function AppSidebar(props) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
       {state === NavBarState.Expanded && (
          <>
            <div className="p-4 text-lg font-semibold text-white">POS system</div>
          </>
        )}
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}