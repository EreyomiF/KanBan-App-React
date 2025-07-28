import React from "react";
import NavBar from "./NavBar";
import AddTask from "./AddTask"; 
import TodoNav from "./TodoNav";
import TimeHeader from "./TimeHeader";
import TodoFooter from "./TodoFooter";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-auto max-w-full">
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="p-4 sm:ml-16 flex-1 flex flex-col mt-14 space-y-4 max-w-full">
          <TodoNav />
          <AddTask />
          <footer>
            <TodoFooter />
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Layout;
