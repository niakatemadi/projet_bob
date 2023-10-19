import React ,{useState}from "react"
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'
function CreateUser() {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8080/api/user/createUsername',{nom,prenom,age,email})
        .then(res =>{
            console.log(res);
            navigate('/')
         
        }).catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">

                <form onSubmit={handleSubmit}>
                    <h2>Ajouter un utilisateur</h2>
                    <div className="mb-2">
                        <label htmlFor="">Nom</label>
                        <input type="text" placeholder="Entrer votre nom" className="form-control"
                            onChange={e => setNom(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Prenom</label>
                        <input type="text" placeholder="Entrer votre prenom" className="form-control"
                            onChange={e => setPrenom(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="number" placeholder="Entrer votre age" className="form-control"
                            onChange={e => setAge(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Entrer votre nom" className="form-control"
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Ajouter</button>
                </form>
            </div>

        </div>
    )
}
export default CreateUser;