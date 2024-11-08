import React, { useState } from 'react'

function Note({ title, description, isImportant, date, height }) {

    const [isDeleteModel,setisDeleteModel] = useState(false);

    const deleteNote =()=>{
        setisDeleteModel(false)
    }



    return (
        <div>
            <div className="note relative">
                <p className='text-[grey]'>Note 1</p>
                <h1 className='text-[#000] text-[20px]'>Website Design </h1>
                <p className='text-[grey] w-[80%] line-clamp-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum minima corporis ab ex nobis in perferendis quisquam expedita voluptates nulla dignissimos fugit amet unde totam, provident numquam dolores, est necessitatibus.</p>
                <div className="noteBottom absolute bottom-5 w-[90%] flex justify-between items-center">
                    <p className='text-[grey]'>2/3/2024</p>
                    <div className="flex items-center gap-1">
                        <img onClick={()=>setisDeleteModel(true)} className='w-[30px] h-[30px]' src={require("../images/delete.png")}></img>
                        <img className='w-[30px] h-[30px]' src={require("../images/edit.png")}></img>
                    </div>
                </div>
            </div>

            {
                isDeleteModel ? 
                <>
                <div className="deleteNoteModelCon flex items-center justify-center flex-col fixed top-0 left-0 w-screen h-screen  bg-[rgb(0,0,0,.2)] z-[100]">
                    <div className='deleteNoteModelBody relative p-[15px] w-[40vw] h-[25vh] rounded-md bg-[#fff] shadow-lg'>
                        <h3 className='text-2xl'>Delete Note "<span className='text-[#E57F57]'>Web Design</span>"</h3>
                        <p className='m-0 p-0 text-[grey] ' >Do you want to Delete This Noote <br/> Yes / No </p>
                    
                        <div className="flex items-center gap-2 absolute bottom-[5%] w-full ">
                            <button onClick={()=>deleteNote()} className='min-w-[46%] h-12 bg-red-600 text-white border-0 outline-0 cursor-pointer'>Yes</button>
                            <button onClick={()=>deleteNote()}  className='min-w-[46%] h-12 bg-blue-600 text-white border-0 outline-0 cursor-pointer'>No</button>
                        </div>
                    </div>
                </div>
                </>
                : ""
            }


        </div>
    )
}

export default Note
