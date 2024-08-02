import React, { useState } from 'react'
import '../LandingPage.css';
const Dashboard = () => {
  const users = [
    {id:1, username: "Vanshika", mailId: "vanshika.rbu@gmail.com", Role: "Front-end Developer", JoiningDate: "11/03/2024" },
    { id: 2,username: "Aradhna", mailId: "Aradhna@gmail.com", Role: "Backend Developer", JoiningDate: "20/03/2024" },
    { id: 3,username: "Anjali", mailId: "Anjali@gmail.com", Role: "QA", JoiningDate: "20/01/2024" },
    { id: 4,username: "Ritesh", mailId: "Ritesh@gmail.com", Role: "Bussiness Analyst", JoiningDate: "20/02/2022" },
    { id: 5,username: "Vinayak", mailId: "Vinayak@gmail.com", Role: "Backend developer", JoiningDate: "20/05/2022" },
    { id: 6,username: "Yuvraj", mailId: "Yuvraj@gmail.com", Role: ".net developer", JoiningDate: "7/01/2021" },
    { id: 7,username: "Naitik", mailId: "Naitik@gmail.com", Role: ".net developer", JoiningDate: "7/8/2021" },
    { id: 8,username: "Naman", mailId: "Naman@gmail.com", Role: "Full Stack Developer", JoiningDate: "13/83/2019" },
    { id: 9,username: "Aadhya", mailId: "Naman@gmail.com", Role: "SAP", JoiningDate: "13/83/2019" },
    { id: 10,username: "Naman", mailId: "Aadhya@gmail.com", Role: "HR", JoiningDate: "13/9/2019" },
    { id: 11,username: "Tammana", mailId: "Tammana@gmail.com", Role: "SAP", JoiningDate: "13/10/2019" },
    { id: 12,username: "Riki", mailId: "Riki@gmail.com", Role: "Manager", JoiningDate: "22/01/2014" },
    { id: 13,username: "Naina", mailId: "Naina@gmail.com", Role: "Manager", JoiningDate: "20/01/2016" },
    { id: 14,username: "Arman", mailId: "Arman@gmail.com", Role: ".net developer", JoiningDate: "10/862020" },
    { id: 15,username: "Nikhil", mailId: "Nikhil@gmail.com", Role: "React Developer", JoiningDate: "2/06/2018" },
    { id: 16,username: "Aisha", mailId: "Aisha@gmail.com", Role: "Front-end Developer", JoiningDate: "2/9/2018" },
    { id: 17,username: "Raman", mailId: "@gmail.com", Role: "Bussiness Analyst ", JoiningDate: "12/07/2018" },
    { id: 18,username: "Rohan", mailId: "@gmail.com", Role: "Admin", JoiningDate: "11/06/2017" },
    { id: 19,username: "Eddy", mailId: "@gmail.com", Role: "HR", JoiningDate: "19/05/2016" },
    { id: 20,username: "Akhil", mailId: "@gmail.com", Role: "Mobile Application Developer", JoiningDate: "16/04/2015" },
    { id: 21,username: "Akanksha", mailId: "@gmail.com", Role: "Backend Developer", JoiningDate: "15/03/2014" },
  ]
  // state contains users data
  const [userData, setUserData] = useState(users)
  // state for show modal or not
  const [isModalOpen, setOpenModal] = useState(false);
  // State for storing form data
  const [formData, setformdata] = useState({
    username: '',
    mailId: '',
    Role: '',
    JoiningDate: '',
  })

  const [isModalOpenForEdit, setOpenModalForEdit] = useState(false);

  const openModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  // const openModalForEdit = () => {
  //   setOpenModalForEdit(true);
  // }

  const closeModalForEdit = () => {
    setOpenModalForEdit(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata(prevState => (
      {
        ...prevState, [name]: value
      }
    ))
  }

  const handleFilteredData = (e) => {
    const selected = e.target.value;
    if (selected === 'Role') {
      setUserData(users)
    }
    else {
      const filteredData = users.filter(item => selected === item.Role);
      setUserData(filteredData)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedData = [formData, ...userData];
    setUserData(addedData);
    closeModal();
    setformdata({
      username: '',
      mailId: '',
      Role: '',
      JoiningDate: '',
    })
  }

  const handledeleteOperation = (id) => {
    const deleteData = userData.filter(user => user.id !== id);
    console.log(deleteData)
    setUserData(deleteData);
  }

  const handleEditUser = (data) => {
    console.log(data)
    setOpenModalForEdit(true);
    setformdata(data);
  }
  const handleSubmitForEdit = (e) => {
    e.preventDefault();
    const index = userData.findIndex(user => user.id === formData.id);
    if (index !== -1) {
      userData[index] = formData;
      setUserData(userData);
      setOpenModalForEdit(false);
    }
    closeModalForEdit();
  }

  return (
    <>
      {
        isModalOpen &&
        <div className='modal'>
          <div className='modal-content'>
            <span onClick={closeModal}> &times;</span>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor='username'>username :</label>
              <input type="text" name='username' value={formData.username} onChange={handleChange} />

              <label htmlFor='mailId'>Mail Id</label>
              <input type="email" name="mailId" value={formData.mailId} onChange={handleChange} />

              <label htmlFor='Role'>Role</label>
              <select id='Role' name='Role' value={formData.Role} onChange={handleChange}>
                <option value='Role'>Role</option>
                <option value='Front-end Developer'>Front-end Developer</option>
                <option value='Backend Developer'>Backend Developer</option>
                <option value='QA'>QA</option>
                <option value="Bussiness Analyst">Bussiness Analyst</option>
                <option value="	.net developer">	.net developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="SAP">SAP</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="React Developer">React Developer</option>
                <option value="Admin">Admin</option>
                <option value="Mobile Application Developer">Mobile Application Developer</option>
              </select>

              <label htmlFor='JoiningDate'>Joining Date</label>
              <input type="date" name="JoiningDate" value={formData.JoiningDate} onChange={handleChange} />

              <button type='submit'>Add Data</button>
            </form>

          </div>
        </div>
      }

      {
        isModalOpenForEdit &&
        <div className='modal'>
          <div className='modal-content'>
            <span onClick={closeModalForEdit}> &times;</span>
            <form action="" onSubmit={handleSubmitForEdit}>
              <label htmlFor='username'>username :</label>
              <input type="text" name='username' value={formData.username} onChange={handleChange} />

              <label htmlFor='mailId'>Mail Id</label>
              <input type="email" name="mailId" value={formData.mailId} onChange={handleChange} />

              <label htmlFor='Role'>Role</label>
              <select id='Role' name='Role' value={formData.Role} onChange={handleChange}>
                <option value='Role'>Role</option>
                <option value='Front-end Developer'>Front-end Developer</option>
                <option value='Backend Developer'>Backend Developer</option>
                <option value='QA'>QA</option>
                <option value="Bussiness Analyst">Bussiness Analyst</option>
                <option value="	.net developer">	.net developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="SAP">SAP</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="React Developer">React Developer</option>
                <option value="Admin">Admin</option>
                <option value="Mobile Application Developer">Mobile Application Developer</option>
              </select>

              <label htmlFor='JoiningDate'>Joining Date</label>
              <input type="text" name="JoiningDate" value={formData.JoiningDate} onChange={handleChange} />

              <button type='submit'>Edit data</button>
            </form>

          </div>
        </div>
      }

      <div className='table'>
        <div className='table-row'>
          <h3>User Data</h3>
          <div className='dropdown'>
            <select onChange={(handleFilteredData)}>
              <option value='Role'>Role</option>
              <option value='Front-end Developer'> Front-end Developer </option>
              <option value='Backend Developer'> Backend Developer </option>
              <option value='QA'> QA </option>
              <option value='Bussiness Analyst'> Bussiness Analyst </option>
              <option value='.net developer'> .net developer </option>
              <option value="Full Stack Developer"> Full Stack Developer </option>
              <option value="SAP">SAP</option>
              <option value="HR">HR</option>
              <option value="Manager"> Manager </option>
              <option value="React Developer">React Developer</option>
              <option value="Admin">Admin</option>
              <option value="Mobile Application Developer">Mobile Application Developer</option>
            </select>
          </div>
          <p onClick={openModal}>+</p>

        </div>

        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>User Name</th>
              <th>Mail Id</th>
              <th>Role</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((data, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{data.username}</td>
                  <td>{data.mailId}</td>
                  <td>{data.Role}</td>
                  <td>{data.JoiningDate}</td>
                  <td className='table-data' style={{ display: 'flex', gap: '20px' }}>
                    <button onClick={() =>  handleEditUser(data) }>Edit</button>
                    <button onClick={() =>  handledeleteOperation(index) }>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Dashboard
