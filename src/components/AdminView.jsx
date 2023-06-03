import { Outlet } from "react-router-dom";
const AdminView = () =>{
    return (
        <>
            <div className="w-5/6 shadow-lg px-5 py-5 transparent">
                <Outlet/>
                
               </div>
        </>
    )
}

export default AdminView;