// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
    const [ville, setVille] = useState("");
    const [villes, setVilles] = useState([]);

    const ajouterVille = () => {
        if (ville.trim()) {
            setVilles([...villes, ville]);
            setVille("");
        }
    };

    const supprimerVille = (index) => {
        setVilles(villes.filter((_, i) => i !== index));
    };

    return (
        <fieldset className="container mt-5">
            <h2 className="text-center" style={{ color: '#b76e79' }}>To-Do Liste</h2>
            <label htmlFor="ville" style={{ color: '#9caf88' }}>Villes:</label> <br />

            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    value={ville} 
                    onChange={(e) => setVille(e.target.value)} 
                    placeholder="Entrez une ville"
                />
                <button className="btn btn-success" onClick={ajouterVille} style={{ backgroundColor: '#9caf88', color: '#f5f5dc' }}>Ajouter</button>
            </div>

            <ul className="list-group">
                {villes.map((v, i) => (
                    <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                        {v} 
                        <button className="btn btn-danger btn-sm" onClick={() => supprimerVille(i)} >
                            <i className="bi bi-x"></i>
                        </button>
                    </li>
                ))}
            </ul>

           
            <p className="text-center mt-3" style={{ color: '#b76e79' }}>
                Total des villes saisies: {villes.length}
            </p>
        </fieldset>
    );
};

export default Contact;
