import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Beranda from './components/Beranda';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import axios from "axios";

function App() {

  const [show, setShow] = useState();
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    retrieveData();
  },[]);

  function retrieveData(){
    axios
      .get("http://localhost:4000/book")
      .then((response)=>{
        setBooks(response.data);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  function storeData(inputBook){
    axios
    .post("http://localhost:4000/book/add", inputBook)
    .then((res)=>{
      setBooks((prevBooks)=>[...prevBooks, inputBook]);
      alert("Buku Judul "+ inputBook.judul +" Telah ditambahkan");
    })
    .catch((error)=>{
      console.log(error.response.data);
    });
  }

  function updateData(inputBook){
    axios
    .put("http://localhost:4000/book/update/"+inputBook._id, inputBook)
    .then((res)=>{
      retrieveData();
      alert("Data Buku "+inputBook.judul+" Berhasil diubah!");
    })
    .catch((error)=>{
      console.log(error.response.data);
    })
  }

  function deleteData(book){
    axios
    .delete("http://localhost:4000/book/delete/" + book._id)
    .then(()=>{
      retrieveData();
      alert("Buku "+book.judul+" Berhasil dihapus!");
    })
    .catch((error)=>{
      console.log(error.response.data);
    })
  }

  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Beranda bookList={books}/>} component={Beranda} exact/>
            <Route path="/books" element={<ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData}/>} />
            <Route path="/profiles" element={<Profile/>} component={Profile}/>
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
