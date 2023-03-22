import React from 'react';


const CommitHistory: React.FC<CommitType> = ({commit, sha}) => {
    const getUrl = (sha: string) => {
        return `https://github.com/Rcalix/full-poc/commit/${sha}`
    }
    const getTimeAgo = (dateStr: string) => {
        const date = new Date(dateStr);
        const diff = (new Date() - date) / 1000;
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
        <li className="mb-10 ml-4  border-2 border-b-4 border-gray-200 rounded-xl hover:bg-green-100">
            <div className="flex items-center space-x-4 p-2 ">
                <img className="w-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>
                <p className="text-sm text-green-400">{commit.author.name}</p>
            </div>
            <p>
            <a href={getUrl(sha)}
                className="text-sm font-normal hover:text-green-400 hover:underline">{commit.message}</a></p>
        <div
            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{getTimeAgo(commit.author.date)}</time>

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
    parents: [
      {
        sha: string;
        url: string;
        html_url: string;
      }
    ];
  }
  
export default CommitHistory