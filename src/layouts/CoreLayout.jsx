
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
export default function CoreLayout() { 
    return (
        <div className=' min-h-screen flex flex-col '>
            <header className="text-lg font-bold"><Header /></header>
            <main className="flex-grow max-w-7xl mx-auto"><Outlet/></main>
            <footer>Footer Section</footer>
        </div>
    );
}