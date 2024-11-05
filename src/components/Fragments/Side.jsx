import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const Aside = () => {
  return (
        <Sidebar aria-label="Default sidebar example" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item href="/home" icon={HiChartPie}>
                    Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                    Data Penduduk
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox} label="3">
                    
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                    Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                    Sign Up
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
    
  )
}

export default Aside