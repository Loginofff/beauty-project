"use client"

import React, { useEffect, useState } from "react";
import MasterList from "../../../_components/MasterList";


function Search({ params }) {
  const [masters, setMasters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    { id: 1, name: "Haarschnitt" },
    { id: 2, name: "Maniküre" },
    { id: 3, name: "Kosmetiker" },
    { id: 5, name: "Epilation" },
    { id: 6, name: "Tätowierung" },
    { id: 7, name: "Piercing" },
  ];

  useEffect(() => {
    if (params.cname) {
      const decodedCategoryName = decodeURIComponent(params.cname);
      const category = categories.find(cat => cat.name === decodedCategoryName);
      if (category) {
        getMasters(category.id);
      }
    }
  }, [params.cname]);

  const getMasters = async (categoryId) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/users/by-category/${categoryId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      console.log("Data received from server:", data);  
      setMasters(data);
    } catch (error) {
      console.error("Error fetching masters:", error);
      setError('Failed to fetch masters');
    }
    setLoading(false);
  };

  const MasterCard = ({ master }) => (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", marginBottom: "10px" }}>
      <h2>{master.firstName} {master.lastName}</h2>
      <p>Address: {master.address}</p>
      <p>Categories: {master.categories.map(category => category.name).join(", ")}</p>
    </div>
  );

  return (



    <div>
     
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : masters.length > 0 ? (
          masters.map(master => (
            <MasterCard key={master.id} master={master} />
          ))
        ) : (
          <p>No masters found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
