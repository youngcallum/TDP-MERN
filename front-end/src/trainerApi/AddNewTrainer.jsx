import axios from "axios";
import { useState } from "react";


const AddNewTrainer = ({ getData, fetchData }) => {
    //3 states for each form parameter
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [special, setSpecial] = useState();

    //additional state for ID
    const [id, setId] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:4494/trainers/create", {
            "_id": id,
            "name": name,
            "age": age,
            "specialism": special
        })
            .then((res) => {
                console.log(res);
                setTimeout(() => {
                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
            })
            .catch((err) => alert(err));
    }

    const handleUpdate = (event) => {

        event.preventDefault();

        axios.put("http://localhost:4494/trainers/update/" + id, {
            "_id": id,
            "name": name,
            "age": age,
            "specialism": special
        })
            .then((res) => {
                console.log(res);
                setTimeout(() => {
                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
            })
            .catch((err) => alert(err));
    }

    return (
        <form>
            <h4>Insert Values:</h4>
            <input type="number" placeholder="ID" value={id} onChange={(event) => { setId(event.target.value) }} required />
            <br />
            <input type="text" placeholder="Name" value={name} onChange={(event) => { setName(event.target.value) }} required />
            <br />
            <input type="number" placeholder="Age" value={age} onChange={(event) => { setAge(event.target.value) }} required />
            <br />
            <input type="text" placeholder="Specialism" value={special} onChange={(event) => { setSpecial(event.target.value) }} required />
            <br />
            <h4>Select POST (to add a new trainer)</h4>
            <button className="button button1" onClick={handleSubmit}>POST</button>
            <h4>OR:</h4>
            <h4>Select UPDATE (to update a trainer)</h4>
            <button className="button button2" onClick={handleUpdate}>UPDATE</button>
        </form>
    )

}


export default AddNewTrainer;