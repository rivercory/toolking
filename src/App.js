import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import List from "./pages/List";

function App() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 suit">
                            <li className="menu-title">툴킹</li>
                            <li><Link to="/">홈</Link></li>
                            <li><Link to="/about">소개</Link></li>
                            <li><Link to="/list">툴 목록</Link></li>
                            <li className="menu-title">We are melotalk family</li>
                            <li><a href="https://melotalk.vercel.app">멜로톡</a></li>
                            <li><a href="https://teenagercode.vercel.app">틴에이저코드</a></li>
                            <li><a href="https://devlist-five.vercel.app">데브리스트</a></li>
                            <li><a href="https://governmentplus.vercel.app">정부플러스</a></li>
                            <li><a href="https://toolking.vercel.app">툴킹</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img src="./icons/toolking_transparent.svg" width="32" height="32"/>
                        툴킹
                    </Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                    </button>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/list" element={<List/>}/>
            </Routes>
        </div>
    );
}

export default App;
