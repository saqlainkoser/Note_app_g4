import React from 'react'

function Note({ title, description, isImportant, date, height }) {
    return (
        <div>
            <div className="note relative">
                <p className='text-[grey]'>Note 1</p>
                <h1 className='text-[#000] text-[20px]'>Website Design </h1>
                <p className='text-[grey] w-[80%] line-clamp-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum minima corporis ab ex nobis in perferendis quisquam expedita voluptates nulla dignissimos fugit amet unde totam, provident numquam dolores, est necessitatibus.</p>
                <div className="noteBottom absolute bottom-5 w-[90%] flex justify-between items-center">
                    <p className='text-[grey]'>2/3/2024</p>
                    <div className="flex items-center gap-1">
                        <img className='w-[30px] h-[30px]' src={require("../images/delete.png")}></img>
                        <img className='w-[30px] h-[30px]' src={require("../images/edit.png")}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note
