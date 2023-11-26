import React from 'react'
import './css/todo.css';
import Layout from '../components/layout/Layout'
import { useAuth } from '../components/context/auth'
import { useNavigate } from 'react-router-dom';
import todo from '../assets/Chart-run-cycle.gif';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CircleLoader from '../components/layout/CircleLoader';
const ToDo = () => {
    const [auth,setAuth] = useAuth();
    const naviagate = useNavigate();
    const [todoData,setTodoData] = useState([]);
    const getTodoList = async()=>{
        try {
            const {data} =await axios.get(`https://alphapartical-api-v2-l7kz.onrender.com/api/v1/to-do/get-todo/user/${auth.user?._id}`);
            if(data?.success){
                setTodoData(data?.task?.todo);
            }
        } catch (error) {
            toast.error('Not Getting data')
        }
    }
    const deleteTodoList = async(id)=>{
        try {
            const {data} = axios.delete(`https://alphapartical-api-v2-l7kz.onrender.com/api/v1/to-do/delete-todo/${auth?.user?._id}/${id}`);
            if(data?.success){
                toast.success(data?.massage);
                naviagate('/to-do');
            }
        } catch (error) {
            toast.error('Something Went Wrong!!');
        }
    }
    useEffect(()=>{
        getTodoList();
        console.log(todoData)
    },[auth?.user?._id])
  return (
    <>
      <Layout title='To-Do'>
        {
            auth?.token ? (
            <div className="to-do-withlogin">
                <div className="to-do-withlogin-header">
                    <img src={todo} alt="To-Do"/>
                </div>
                <div className="to-do-withlogin-header-main">
                    <div className="to-do-withlogin-header-inner todo-list">
                        <h3>Your All To Do List</h3>
                        <div className="to-do-login-card">
                            {todoData && todoData.length>0 ? (<>{todoData?.map((item)=>(
                                <div className="to-do-login-card-details">
                                    <p>{item.taskname}</p>
                                    
                                    <DeleteIcon 
                                    onClick={()=>deleteTodoList(item?._id)} 
                                    style={{color:'red'}}/>
                                    
                                    
                                </div>
                            ))}</>):(<CircleLoader/>)}
                        </div>
                    </div>
                    <div className="to-do-withlogin-header-inner todo-from">
                        <h3>Create your To Do</h3>
                    </div>
                </div>
            </div>
        ):
        (<div className="to-do-withoutlogin">
            <button className='to-do-withoutlogin-btn' 
            onClick={()=>naviagate("/login",{state:"/to-do"})}>
                Login to access this section
            </button>
         </div>
        )
        }
       
        
      </Layout>  
    </>
  )
}

export default ToDo;