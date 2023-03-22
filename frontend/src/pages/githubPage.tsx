import React, { useEffect, useState } from 'react'
import Branch from '../components/branch';
import Description from '../components/description'

interface branchType {
    name: string,
    protected: boolean,
    url: string
}
const GithubPage: React.FC = () => {
    const [branches, setBranches] = useState<branchType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/github/branches');
            setBranches(await response.json());
        }
        fetchData();
    },[])
    return (
        <div className='flex'>
            {/* <Description text='Hi'/> */}
            <div className='flex flex-col'>
            {branches.map((e: branchType) => (
                <Branch name={e.name} protect={e.protected} url={e.url}/>
            ))}
            </div>
            <div className="ml-32 pr-10">
		<h2 className="text-sm font-bold mt-14">Latest Changes</h2>

		<ol className="relative border-l border-gray-200 dark:border-gray-700">
			{Array.from({ length: 20}).map((e) => (
                <li className="mb-10 ml-4">
				<div
					className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
				</div>
				<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11 hours ago</time>
				<p><a href="#"
						className="mb-4 text-sm font-normal text-gray-500 hover:text-blue-400 hover:underline dark:text-gray-300">Secret
						scanning changes coming to how you opt-in to alert notifications.</a></p>
			</li>
            )) }
		</ol>
	</div>
        </div>
    )
}

export default GithubPage;