import React from 'react'

function ContentSectionList({list}) {
    return (
        <ul>
            {
                list.map((line) => {
                    return (
                        <li key={line.command}>
                            <div className="products command">
                                {line.command}
                            </div>
                            <span className="description ">
                                {line.text}
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ContentSectionList