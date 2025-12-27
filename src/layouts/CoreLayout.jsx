
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
export default function CoreLayout() { 
    return (
        <div className=' min-h-screen flex flex-col relative '>
            <header className="w-full sticky top-0 z-50"><Header /></header>
            <main className="grow "><Outlet/></main>
            <footer>Footer Section</footer>
        </div>
    );
}