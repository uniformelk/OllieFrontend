import AdminBar from '../components/AdminBar';
import AdminView from '../components/AdminView';
const UserLayouth = () =>{
    return (
        <>
            <main className="flex min-h-screen">
                <AdminBar />
                <AdminView/>
            </main>
        </>
    )
};

export default UserLayouth;