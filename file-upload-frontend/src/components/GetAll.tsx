import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export const GetAll = () => {
  // const [response, loading, hasError] = useFetch('http://localhost:5100/api/v1/file');

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    apiFetch();
  }, []);

  const apiFetch = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:5100/api/v1/file")
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setHasError(true);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="list_header">
        <h3>The List</h3>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        <div className="list">
          <div>
            {response?.map((res: any) => {
              return (
                <div>
                  <li key={res.filename}>{res.filename}</li>
                  <img src={res.destination} alt={res.originalname} />
                </div>
              );
            })}
          </div>

          {/* <div>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div> */}
        </div>
      )}
    </>
  );
};
// {
//   "id": 1,
//   "fieldname": "file",
//   "originalname": "IMGDv.jpg",
//   "encoding": "7bit",
//   "mimetype": "image/jpeg",
//   "destination": "/media/yazz/projectvolume/React/file-upload/backend/uploads",
//   "filename": "file-1669959757018IMGDv.jpg",
//   "path": "/media/yazz/projectvolume/React/file-upload/backend/uploads/file-1669959757018IMGDv.jpg",
//   "size": "2108908",
//   "updatedAt": "2022-12-02T05:42:37.000Z",
//   "createdAt": "2022-12-02T05:42:37.000Z",
//   "deletedAt": null
// },
