import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const create = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

const APIFetching = () => {
  const [data, setData] = useState([]);

  const [isError, setError] = useState("");

  const [isModalOpen, setOpenModal] = useState(false);

  const [isModalOpenForEdit, setOpenModalForEdit] = useState(false);

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

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const closeModalForEdit = () => {
    setOpenModalForEdit(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await create.get("/");
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await create.post("/", createData);
      setData([...data, response.data]);
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
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("Deleting user with ID:", id);
      const confirmDelete = window.confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        await create.delete(`/${id}`);
        setData(data.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditUser = async (user) => {
    setCreateData(user);
    setOpenModalForEdit(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("i m inside editing");
      const response = await create.put(`/${createData.id}`);
      console.log(response);
      const index = data.findIndex((user) => user.id === createData.id);
      if (index !== -1) {
        data[index] = createData;
        setCreateData(data);
        closeModalForEdit();
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      {isError !== "" && <h1>{isError}</h1>}

      {isModalOpen && (
        <form onSubmit={handleSubmit}>
          <h1>Add</h1>
          <div className="form">
            <div className="form-content">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                placeholder="Enter name..."
                name="name"
                value={createData.name}
                onChange={(e) =>
                  setCreateData({ ...createData, name: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="username"> User Name : </label>
              <input
                type="text"
                placeholder="Enter user name..."
                name="username"
                value={createData.username}
                onChange={(e) =>
                  setCreateData({ ...createData, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                placeholder="Enter email..."
                name="email"
                value={createData.email}
                onChange={(e) =>
                  setCreateData({ ...createData, email: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="phone"> Phone : </label>
              <input
                type="text"
                placeholder="Enter Phone..."
                name="phone"
                value={createData.phone}
                onChange={(e) =>
                  setCreateData({ ...createData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="website"> Website : </label>
              <input
                type="text"
                placeholder="Enter website..."
                name="website"
                value={createData.website}
                onChange={(e) =>
                  setCreateData({ ...createData, website: e.target.value })
                }
              />
            </div>

            <div className="form-content">
              <label htmlFor="name"> company name : </label>
              <input
                type="text"
                placeholder="Enter company name..."
                name="name"
                value={createData.company.name}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    company: { ...createData.company, name: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="catchPhrase"> catchPhrase : </label>
              <input
                type="text"
                placeholder="Enter catchPhrase..."
                name="catchPhrase"
                value={createData.company.lat}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      catchPhrase: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="bs"> company bs : </label>
              <input
                type="text"
                placeholder="Enter company bs..."
                name="bs"
                value={createData.company.bs}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    company: { ...createData.company, bs: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="street"> street : </label>
              <input
                type="text"
                placeholder="Enter street..."
                name="street"
                value={createData.address.street}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      street: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="suite"> suite : </label>
              <input
                type="text"
                placeholder="Enter suite..."
                name="suite"
                value={createData.address.suite}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: { ...createData.address, suite: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="city"> city : </label>
              <input
                type="text"
                placeholder="Enter city..."
                name="city"
                value={createData.address.city}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      city: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="zipcode"> zipcode : </label>
              <input
                type="text"
                placeholder="Enter zipcode..."
                name="zipcode"
                value={createData.address.zipcode}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: { ...createData.address, zipcode: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="lat"> lat : </label>
              <input
                type="text"
                placeholder="Enter lat..."
                name="lat"
                value={createData.address.geo.lat}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: { ...createData.address.geo, lat: e.target.value },
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="lng"> lng : </label>
              <input
                type="text"
                placeholder="Enter lng..."
                name="lng"
                value={createData.address.geo.lng}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: { ...createData.address.geo, lng: e.target.value },
                    },
                  })
                }
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

      {isModalOpenForEdit && (
        <form onSubmit={handleEditSubmit}>
          <h2>Edit</h2>
          <div className="form">
            <div className="form-content">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                placeholder="Enter name..."
                name="name"
                value={createData.name}
                onChange={(e) =>
                  setCreateData({ ...createData, name: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="username"> User Name : </label>
              <input
                type="text"
                placeholder="Enter user name..."
                name="username"
                value={createData.username}
                onChange={(e) =>
                  setCreateData({ ...createData, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                placeholder="Enter email..."
                name="email"
                value={createData.email}
                onChange={(e) =>
                  setCreateData({ ...createData, email: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="phone"> Phone : </label>
              <input
                type="text"
                placeholder="Enter Phone..."
                name="phone"
                value={createData.phone}
                onChange={(e) =>
                  setCreateData({ ...createData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="website"> Website : </label>
              <input
                type="text"
                placeholder="Enter website..."
                name="website"
                value={createData.website}
                onChange={(e) =>
                  setCreateData({ ...createData, website: e.target.value })
                }
              />
            </div>

            <div className="form-content">
              <label htmlFor="name"> company name : </label>
              <input
                type="text"
                placeholder="Enter company name..."
                name="name"
                value={createData.company.name}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    company: { ...createData.company, name: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="catchPhrase"> catchPhrase : </label>
              <input
                type="text"
                placeholder="Enter catchPhrase..."
                name="catchPhrase"
                value={createData.company.lat}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    company: {
                      ...createData.company,
                      catchPhrase: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="bs"> company bs : </label>
              <input
                type="text"
                placeholder="Enter company bs..."
                name="bs"
                value={createData.company.bs}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    company: { ...createData.company, bs: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="street"> street : </label>
              <input
                type="text"
                placeholder="Enter street..."
                name="street"
                value={createData.address.street}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      street: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="suite"> suite : </label>
              <input
                type="text"
                placeholder="Enter suite..."
                name="suite"
                value={createData.address.suite}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: { ...createData.address, suite: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="city"> city : </label>
              <input
                type="text"
                placeholder="Enter city..."
                name="city"
                value={createData.address.city}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      city: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="zipcode"> zipcode : </label>
              <input
                type="text"
                placeholder="Enter zipcode..."
                name="zipcode"
                value={createData.address.zipcode}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: { ...createData.address, zipcode: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form">
            <div className="form-content">
              <label htmlFor="lat"> lat : </label>
              <input
                type="text"
                placeholder="Enter lat..."
                name="lat"
                value={createData.address.geo.lat}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: { ...createData.address.geo, lat: e.target.value },
                    },
                  })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="lng"> lng : </label>
              <input
                type="text"
                placeholder="Enter lng..."
                name="lng"
                value={createData.address.geo.lng}
                onChange={(e) =>
                  setCreateData({
                    ...createData,
                    address: {
                      ...createData.address,
                      geo: { ...createData.address.geo, lng: e.target.value },
                    },
                  })
                }
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

      <button className="add-button" onClick={openModal}>
        +
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>Email</th>
            <th>company</th>
            <th>address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
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
    </div>
  );
};

export default APIFetching;
