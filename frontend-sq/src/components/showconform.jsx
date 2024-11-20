import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card} from "react-bootstrap";

function showconform() {
  const [complains, setcomplains] = useState([]);

  const getcomplains = async () => {
    const response = await axios.get("http://127.0.0.1:8000/comform/");
    //console.log(response.data)
    setcomplains(response.data);
  };

  useEffect(() => {
    getcomplains();
  }, []);

  return (
    <div className="complain-card-info">
      {complains.map((complain, index) => (
          
          <Card  className="m-2 rounded shadow-lg show" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={complain.attachement} />
            <Card.Body>
              <Card.Title>{complain.complain_title}</Card.Title>
              <Card.Text>{complain.name}</Card.Text>
              <Card.Text>{complain.department}</Card.Text>
              <Card.Text>{complain.session}</Card.Text>
              <Card.Text>{complain.description}</Card.Text>
            </Card.Body>
          </Card>
      ))}
    </div>
  );
}

export default showconform;
