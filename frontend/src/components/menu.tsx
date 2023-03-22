import React from 'react'
import { GithubUserType} from '../App'

const Menu: React.FC<GithubUserType>= (data) => {
    const avatar_url  = data?.data?.avatar_url;
    const bio  = data?.data?.bio;
    const login  = data?.data?.login;
    const repos  = data?.data?.public_repos;


    return (
        <div className="hidden sm:block fixed z-10 top-0 pb-3 px-6 w-full lg:flex flex-col justify-between h-screen border-r bg-black transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>

        <div className="mt-8 text-center">
            <img src={avatar_url} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{login}</h5>
            <span className="hidden text-gray-400 lg:block">{bio}</span>
            <span className="hidden text-gray-400 lg:block">Repos {repos}</span>

        </div>

        <ul className="space-y-2 tracking-wide mt-8">
            <li>
                <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                    </svg>
                    <span className="-mr-1 font-medium">Dashboard</span>
                </a>
            </li>
        </ul>
    </div>
</div>
    )
}

export default Menu;