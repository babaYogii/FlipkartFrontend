import { Button } from 'react-bootstrap'
import React,{useEffect,useState} from 'react'
import { Container ,Row,Col,Modal } from 'react-bootstrap'
import Layout from '../../components/layout'
import { useDispatch, useSelector } from 'react-redux'
import {addCategory, getAllCategory} from '../../action'
import Input from '../../components/UI/Input'

const Category = () => {
    const [show, setShow] = useState(false);
    const [newCategory,setnewCategory] = useState('');
    const [categoryImage,setCategoryImage]=useState('');
    const [parentcategoryId,setParentCategoryId]=useState('');
    const category=useSelector(state=>state.category)
    const dispatch=useDispatch();

      useEffect(() => {
        
      dispatch(getAllCategory())
        
      }, [])
// console.log(useSelector(state=> state));
      

const handleClose = () => {
    const form = new FormData();
    
    form.append('name',newCategory);
    form.append('parentId',parentcategoryId);
    form.append('categoryImage',categoryImage);
    dispatch(addCategory(form))
    setShow(false)};
const handleShow = () => setShow(true);


   const rendercategory=(categories)=>{
      let Mycategories=[];
      for( let category of categories){
          Mycategories.push(
              <li key={category.name}>{category.name}
                 {category.children.length>0 ? (<ul>{rendercategory(category.children)}</ul>):null}
              </li>
          )
      }
      return Mycategories;

   }

   const createCategoryList=(categories , options=[])=>{
       for(let category of categories){
           options.push({value:category._id,name:category.name});
           if(category.children.length>0){
               createCategoryList(category.children,options)
           }
        }
return options;
   }

   const handleCategoryImage=(e)=>{
       setCategoryImage(e.target.files[0])
   }

  return (
  <Layout sidebar>
      <Container>
          <Row >
              <Col md={12}>
                  <div style={{display:"flex",justifyContent:"space-between",margin:"1rem"}}>
                  <h3>Category</h3>
                  <Button onClick={handleShow} >Add</Button>
                  </div>
              </Col>
          </Row>
          <Row>
              <Col md={12}>
            <ul>
                {rendercategory(category.categories)}
            </ul>
              </Col>
          </Row>
      </Container>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input
            value={newCategory}
            placeholder='Enter category name'
            onChange={(e)=>setnewCategory(e.target.value)}
            />
          <select className='form-control'
          value={parentcategoryId}
          onChange={(e)=>setParentCategoryId(e.target.value)}
          >
              <option>Select Category</option>
              {
               createCategoryList(category.categories).map(option=>
              <option key={option.value} value={option.value}>{option.name}</option>
)
              }
          </select>

          <input type="file" name="categoryImage" onChange={handleCategoryImage}   />

        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


  </Layout>
    )
}

export default Category