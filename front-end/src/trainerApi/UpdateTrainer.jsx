// import axios from 'axios';
// import {useState} from 'react';


// const handleUpdate= (e)=> {
    
//     e.preventDefault();

//     axios.put("http://localhost:4494/trainers/update" + id,{
//         "_id": id,
//         "name": name,
//         "age": age,
//         "specialism": special
//     })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>alert(error));


// return(
//     <form>
//         <h4> Select UPDATE to update a trainer</h4>
//         <button className="button button 3" onClick={handleUpdate}>UPDATE</button>
//     </form>
// )
// }
// export default UpdateTrainer;