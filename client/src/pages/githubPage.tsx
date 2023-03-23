import React, { useEffect, useState } from 'react'
import Branch from '../components/branch';
import CommitHistory from '../components/commitHistory';
import Description from '../components/description'
import { CommitType } from '../components/commitHistory';

interface branchType {
    name: string,
    protected: boolean,
    url: string
}

const GithubPage: React.FC = () => {
    const [branches, setBranches] = useState<branchType[]>([])
    const [commits, setCommits] = useState<CommitType[]>([])
 
    const setCommitList = async() => {
        const response = await fetch('http://localhost:3000/github/commits');
        setCommits(await response.json())
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/github/branches');
            setBranches(await response.json());
            setCommitList()
        }
        fetchData();
    },[])
    return (
        <div className='flex  bg-black'>
            {/* <Description text='Hi'/> */}
            <div className='flex flex-col'>
                <div className="grid sm:grid-cols-4 lg:grid-cols-3 ">
                {branches.map((e: branchType) => (<>
                    <Branch name={e.name} protect={e.protected} url={e.url}/>
                </>
                ))}
                </div>
            </div>
            <div className="ml-32 pr-10">
		    <h2 className="text-sm font-bold pb-4">Latest Changes</h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {commits.map((e: CommitType) => (
                    <CommitHistory commit={e.commit} sha={e.sha} node_id={e.node_id} url={e.url} html_url={e.html_url} comments_url={e.comments_url} author={e.author} committer={e.committer}/>
                )) }
            </ol>
	</div>
        </div>
    )
}

export default GithubPage;