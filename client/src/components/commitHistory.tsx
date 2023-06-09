import React, { useContext } from 'react';
import { UserContext } from '../context/userContent'

const CommitHistory: React.FC<CommitType> = ({commit, sha}) => {
    const avatar_url = useContext(UserContext).user?.data.avatar_url;
    const colors = ['bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-pink-400', 'bg-blue-400'];
    const getUrl = (sha: string) => {
        return `https://github.com/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/commit/${sha}`
    }
    const getTimeAgo = (dateStr: string) => {
        const date = new Date(dateStr);
        const diff = (new Date().getTime() - date.getTime()) / 1000;
        const hours = Math.floor(diff / 3600);
        if (hours === 0) {
          return 'just now';
        } else if (hours < 24) {
          return `${hours} hour ago`;
        } else {
          return `${date.toLocaleDateString()}`;
        }
      }
    return (
        <li className={`mb-10 ml-4  border-2 border-b-4 border-gray-200 rounded-xl ${colors[Math.floor(Math.random() * colors.length)]}`}>
            <div className="flex items-center space-x-4 p-2 ">
                <img className="w-10 rounded-full" src={avatar_url} alt="Rounded avatar"/>
                <p className="text-sm text-white-400">{commit.author.name}</p>
            </div>
            <p className='flex flex-wrap  justify-center align-middle'>
            <a href={getUrl(sha)}
                className="text-sm font-normal hover:text-white-400 hover:underline">{commit.message}</a></p>
          <div
              className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-green dark:border-white-900 dark:bg-white-700">
          </div>
          <p className="text-sm pb-2">{getTimeAgo(commit.author.date)}</p>
    </li>
    )
}



export interface CommitType {
    sha: string;
    node_id: string;
    commit: {
      author: {
        name: string;
        email: string;
        date: string;
      };
      committer: {
        name: string;
        email: string;
        date: string;
      };
      message: string;
      tree: {
        sha: string;
        url: string;
      };
      url: string;
      comment_count: number;
      verification: {
        verified: boolean;
        reason: string;
        signature: null;
        payload: null;
      };
    };
    url: string;
    html_url: string;
    comments_url: string;
    author: null;
    committer: null;
  }
  
export default CommitHistory