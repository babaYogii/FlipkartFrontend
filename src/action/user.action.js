import axios from "../helpers/axios"
import { authConstant, userConstants } from "./constants"


export const signup =(user)=>{
    console.log(user)
    
        return async (dispatch)=>{
    
          dispatch({type:userConstants.USER_REGISTER_REQUEST})
    
             const res = await axios.post(`/admin/signup`,
             {
                 ...user
                })
    
                if (res.status===200){
                    const {message}=res.data
                    
                    dispatch({type:userConstants.USER_REGISTER_SUCCESS,payload:{message}})
                }
                 
            else{
              if(res.status===400){
                  dispatch({
                      type:userConstants.USER_REIGISTER_FALIURE,
                      payload:{error:res.data.error}
                  })
              }
            }
        }
    }