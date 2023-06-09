import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faCoffee } from '@fortawesome/free-solid-svg-icons'

interface branchType {
    name: string,
    protect: boolean,
    url: string
}
const Branch: React.FC<branchType> = ({name, protect, url}) => {
    const validMain = () => {
        if (name === 'main') {
            return 'bg-green-100 text-green-500'
        }
        return 'bg-blue-100 text-blue-500'
    }
    return (
        <div className="flex items-center">
        <div className="p-4 w-full">
            <div className="grid grid-cols-2">
            <div className="col-span-2 sm:col-span-2 md:col-span-3">
                <div className="flex flex-row bg-black shadow-sm rounded p-4">
                <div className={`flex rounded-xl ${validMain()}  p-2`}>
                <FontAwesomeIcon icon={faCodeBranch} />
                <div className="flex flex-col flex-grow ml-4 items-star">
                    <div className="text-lg">{name.toUpperCase()}</div>
                <div className="font-bold text-sm  text-gray-500">Protected: {protect.toString()}</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        </div>
    )
}

export default Branch;