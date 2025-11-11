import { AppSidebar } from "@/component/app-sidebar"
import React from "react"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Routes, Route, useLocation } from "react-router-dom";
import Categories from "./catagory";
import Dashboard from "./dashboard";
import Products from "./products";
import Users from "./user";

export default function Page() {

  const location = useLocation();

  function getPageTitle() {
    switch (location.pathname) {
       case "/dashboard":
        return "Dashboard";
      case "/categories":
        return "Categories";
      case "/products":
        return "Products";
      case "/users":
        return "Users";
      default:
        return "Dashboard";
    }

  }

  

  return (
    <div className="app-container min-h-screen w-full ">
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen bg-transparent">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 text-white" />
              <h2 className=" text-white">{getPageTitle()}</h2>
          </div>
          </header>
              <main className="p-6 text-white">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />

              
            </Routes>
          </main>
          
        
      </SidebarInset>
      </SidebarProvider>
      </div>
  )
}
