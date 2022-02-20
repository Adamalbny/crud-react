import React, {useState} from 'react';

function ManajemenBuku({bookList, store, update, remove}){

    // Add Buku
    let [inputBook, setInputBook] = useState('');

    function addStok(event){
        setInputBook({...inputBook, stok : event.target.value });
    }
    function addJudul(event){
        setInputBook({...inputBook, judul : event.target.value });
    }
    function addHarga(event){
        setInputBook({...inputBook, harga : event.target.value });
    }
    function addPengarang(event){
        setInputBook({...inputBook, pengarang : event.target.value });
    }
    
    function resetData(){
        setInputBook('');
    }

    function submitAdd(event){
        event.preventDefault();
        store(inputBook);
    }
    // Edit Buku
    function showEdit(book){
    setInputBook(book);
    console.log(book);
    }
    function submitChange(event){
        event.preventDefault();
        update(inputBook);
    }
    // Hapus Buku
    function deleteBook(book){
        remove(book);
    }
    return(
        <div className="container mt-3">
            <button className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">Tambah Buku</button>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Pengarang</th>
                    <th scope="col">Harga</th>
                    <th scope='col'>Stok</th>
                    <th scope='col'>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book, index)=>(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{book.judul}</td>
                        <td>{book.pengarang}</td>
                        <td>Rp. {book.harga}</td>
                        <td>{book.stok}</td>
                        <td>
                            <button className="btn btn-warning me-1" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={()=>showEdit(book)}>Edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteBook(book)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="edit">
            <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Tambah Buku</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div id="add" onSubmit={submitAdd}>
                            <form action="" className="form-row">
                                <div className="col-11">
                                    <input type="text" id='judul' name='judul' className='form-control mx-2 w-100' placeholder='judul' onChange={addJudul}/>
                                </div>
                                <div className="col-11">
                                    <input type="text" id='pengarang' name='pengarang' className='form-control mx-2 mt-2' placeholder='pengarang' onChange={addPengarang} />
                                </div>
                                <div className="col-11">
                                    <input type="text" id='harga' name='harga' className='form-control mx-2 mt-2' placeholder='harga'onChange={addHarga}/>
                                </div>
                                <div className="col-11">
                                    <input type="number" id='stok' name='stok' className='form-control mx-2 mt-2' placeholder='stok'onChange={addStok}/>
                                </div>
                                <div className="modal-footer row justify-content-start">
                                <button type="submit" className="btn btn-primary col-6">Save</button>
                                <button type="reset" className="btn btn-danger col-5" onClick={resetData}>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div id="add" >
            <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Buku</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div id="edit"  onSubmit={submitChange}>
                            <form action="" className="form-row">
                                <div className="col-11">
                                    <input type="text" id='judul' name='judul' className='form-control mx-2 w-100' placeholder='judul' onChange={addJudul} value={inputBook.judul}/>
                                </div>
                                <div className="col-11">
                                    <input type="text" id='pengarang' name='pengarang' className='form-control mx-2 mt-2' placeholder='pengarang' onChange={addPengarang} value={inputBook.pengarang}/>
                                </div>
                                <div className="col-11">
                                    <input type="text" id='harga' name='harga' className='form-control mx-2 mt-2' placeholder='harga' onChange={addHarga} value={inputBook.harga}/>
                                </div>
                                <div className="col-11">
                                    <input type="number" id='stok' name='stok' className='form-control mx-2 mt-2' placeholder='stok' onChange={addStok} value={inputBook.stok}/>
                                </div>
                                <div className="modal-footer row justify-content-start">
                                <button type="submit" className="btn btn-primary col-11" data-bs-dismiss="modal">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div id="books"></div>
        </div>
    );
}

export default ManajemenBuku;