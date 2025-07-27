import React from "react";
import NavBar from "./NavBar";
import AddTask from "./AddTask"; 
import TodoNav from "./TodoNav";// Make sure to import AddTask if not already
import TimeHeader from "./TimeHeader";
import TodoFooter from "./TodoFooter";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <NavBar />

        {/* Page content */}
        <main className="p-4 sm:ml-16 w-full flex ">
          <div class="p-4 rounded-lg  mt-14">
            <TodoNav className="w-full" />
            <TimeHeader className="w-full" />
            <AddTask className="w-full" />
            <footer className="w-full">
            <TodoFooter className="w-full" />
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
