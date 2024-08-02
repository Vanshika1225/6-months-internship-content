import React, { useEffect, useState } from "react";
import "../App.css";
const APIFetchingUsingFetch = () => {
  const [data, setData] = useState([]);

  const [isError, setIsError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [createData, setCreateData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const [openModalForEdit,setOpenModalForEdit]=useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("There is an error in fetching data");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        setIsError(error.message);
      });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "Post",
      body: JSON.stringify(createData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("There is an error in fetching data");
        }
        return response.json();
      })
      .then((response) => {
        setData([...data, response]);
        closeModal();
        setCreateData({
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
              lat: "",
              lng: "",
            },
          },
          company: {
            name: "",
            catchPhrase: "",
            bs: "",
          },
        });
      })
      .catch((error) => {
        setIsError(error);
      });
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("There is an error in fetching data");
        }
        return response.json();
      })
      .then((json) => {
        setData(data.filter((user) => user.id !== id));
      })
      .catch((error) => [setIsError(error.message)]);
  };

  const handleEditUser = (user) => {
    setCreateData(user);
    setOpenModalForEdit(true);
  };

  const handleSubmitForEdit=(e)=>{
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${createData.id}`,{
      method:'PUT'
    })
    .then((response)=>{
      if(!response.ok){
        throw new Error("Some error occured!")
      }
      return response.json();
    })
    .then((response)=>{
      const index=data.findIndex((user)=>user.id !== createData.id)
      if(index != -1){
        data[index]=createData;
        setCreateData(data);
        setOpenModalForEdit(false);
      }
    })
  }

  return (
    <>
      {isError !== "" && <h3>{isError}</h3>}

      {modalOpen && (
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="formContent">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Enter name ...."
                value={createData.name}
                onChange={(e) => {
                  setCreateData({ ...createData, name: e.target.value });
                }}
              />
            </div>

            <div className="formContent">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                placeholder="Enter username ...."
                value={createData.username}
                onChange={(e) => {
                  setCreateData({ ...createData, username: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="email">email:</label>
              <input
                type="email"
                placeholder="Enter email ...."
                value={createData.email}
                onChange={(e) => {
                  setCreateData({ ...createData, email: e.target.value });
                }}
              />
            </div>

            <div className="formContent">
              <label htmlFor="phone">phone:</label>
              <input
                type="text"
                placeholder="Enter phone ...."
                value={createData.phone}
                onChange={(e) => {
                  setCreateData({ ...createData, phone: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="website">website:</label>
              <input
                type="text"
                placeholder="Enter website ...."
                value={createData.website}
                onChange={(e) => {
                  setCreateData({ ...createData, website: e.target.value });
                }}
              />
            </div>

            <div className="formContent">
              <label htmlFor="name">company name:</label>
              <input
                type="text"
                placeholder="Enter name ...."
                value={createData.company.name}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      name: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="catchPhrase">catchPhrase:</label>
              <input
                type="text"
                placeholder="Enter catchPhrase ...."
                value={createData.company.catchPhrase}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      catchPhrase: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="bs">company bs:</label>
              <input
                type="text"
                placeholder="Enter bs ...."
                value={createData.company.bs}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      bs: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="street">street:</label>
              <input
                type="text"
                placeholder="Enter street ...."
                value={createData.street}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      street: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="suite">suite</label>
              <input
                type="text"
                placeholder="Enter suite ...."
                value={createData.suite}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      suite: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="city">city:</label>
              <input
                type="text"
                placeholder="Enter city ...."
                value={createData.city}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      city: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="zipcode">zipcode</label>
              <input
                type="text"
                placeholder="Enter zipcode ...."
                value={createData.zipcode}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      zipcode: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="lng">lng</label>
              <input
                type="text"
                placeholder="Enter lng ...."
                value={createData.address.geo.lng}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: {
                        ...createData.address.geo,
                        lng: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="lat">lat</label>
              <input
                type="text"
                placeholder="Enter lat ...."
                value={createData.address.geo.lat}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: {
                        ...createData.address.geo,
                        lat: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

      {openModalForEdit && (
        <form onSubmit={handleSubmitForEdit}>
          <div className="form">
            <div className="formContent">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Enter name ...."
                value={createData.name}
                onChange={(e) => {
                  setCreateData({ ...createData, name: e.target.value });
                }}
              />
            </div>

            <div className="formContent">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                placeholder="Enter username ...."
                value={createData.username}
                onChange={(e) => {
                  setCreateData({ ...createData, username: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="email">email:</label>
              <input
                type="email"
                placeholder="Enter email ...."
                value={createData.email}
                onChange={(e) => {
                  setCreateData({ ...createData, email: e.target.value });
                }}
              />
            </div>

            <div className="formContent">
              <label htmlFor="phone">phone:</label>
              <input
                type="text"
                placeholder="Enter phone ...."
                value={createData.phone}
                onChange={(e) => {
                  setCreateData({ ...createData, phone: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="website">website:</label>
              <input
                type="text"
                placeholder="Enter website ...."
                value={createData.website}
                onChange={(e) => {
                  setCreateData({ ...createData, website: e.target.value });
                }}
              />
            </div>

            <div className="formContent">
              <label htmlFor="name">company name:</label>
              <input
                type="text"
                placeholder="Enter name ...."
                value={createData.company.name}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      name: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="catchPhrase">catchPhrase:</label>
              <input
                type="text"
                placeholder="Enter catchPhrase ...."
                value={createData.company.catchPhrase}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      catchPhrase: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="bs">company bs:</label>
              <input
                type="text"
                placeholder="Enter bs ...."
                value={createData.company.bs}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      bs: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="street">street:</label>
              <input
                type="text"
                placeholder="Enter street ...."
                value={createData.address.street}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      street: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="suite">suite</label>
              <input
                type="text"
                placeholder="Enter suite ...."
                value={createData.address.suite}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      suite: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="city">city:</label>
              <input
                type="text"
                placeholder="Enter city ...."
                value={createData.address.city}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      city: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="zipcode">zipcode</label>
              <input
                type="text"
                placeholder="Enter zipcode ...."
                value={createData.address.zipcode}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      zipcode: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="form">
            <div className="formContent">
              <label htmlFor="lng">lng</label>
              <input
                type="text"
                placeholder="Enter lng ...."
                value={createData.address.geo.lng}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: {
                        ...createData.address.geo,
                        lng: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
            <div className="formContent">
              <label htmlFor="lat">lat</label>
              <input
                type="text"
                placeholder="Enter lat ...."
                value={createData.address.geo.lat}
                onChange={(e) => {
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: {
                        ...createData.address.geo,
                        lat: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}


      <p className="add-button" onClick={openModal}>
        +
      </p>

      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Company</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <div>
                    <b>Street:</b> {item.address.street}
                  </div>
                  <div>
                    <b>Suite:</b> {item.address.suite}
                  </div>
                  <div>
                    <b>City:</b> {item.address.city}
                  </div>
                  <div>
                    <b>Zipcode:</b> {item.address.zipcode}
                  </div>
                  <div>
                    <b>long-lat:</b> {item.address.geo.lat}-
                    {item.address.geo.lng}
                  </div>
                </td>
                <td>
                  <div>
                    <b>Name:</b> {item.company.name}
                  </div>
                  <div>
                    <b>Catch-phrase:</b> {item.company.catchPhrase},{" "}
                  </div>
                  <div>
                    <b>BS:</b> {item.company.bs}
                  </div>
                </td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>
                  <button onClick={() => handleEditUser(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default APIFetchingUsingFetch;
