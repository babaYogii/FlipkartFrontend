import { categoryConstants } from "../action/constants";
import Category from "../container/Category";

const initialState={
    error:null,
    categories:[],
    loading:false

}



const buildnewcategories=(parentId ,categories,category)=>{
    let Mycategories=[];
      for(let cat of categories){


        if( cat._id==parentId){

            Mycategories.push({
                ...cat,
                children:cat.children && cat.children.length>0 ?buildnewcategories(parentId,[...cat.children,{
                    _id:category._id,
                    name:category.name,
                    slug:category.sulg,
                    parentid:category.paretId,
                    children:category.children
                }],category):[]
            })
        }else{
            Mycategories.push({
                ...cat,
                children:cat.children && cat.children.length>0 ?buildnewcategories(parentId,cat.children,category):[]
            })
        }

                
      }
return Mycategories;
    }


export default (state=initialState,action)=>{
      switch(action.type){
          case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
          state={
              ...state,
              categories:action.payload.categories
          }
          break;
      
         case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
             state={
                  ...state,
                  loading:true
             }
             break;
      
         case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const category=action.payload.category;
            const updatedcategories=buildnewcategories(category.parentId,state.categories,category);
            console.log(updatedcategories);

             state={
                  ...state,
                  categories:updatedcategories,
                  loading:false
             }
             break;
         case categoryConstants.ADD_NEW_CATEGORY_FALIURE:
             state={
                  initialState,
             }
             break;


            }
      return state;
}