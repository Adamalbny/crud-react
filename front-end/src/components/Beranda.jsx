import React from 'react';

function Beranda({bookList}){
    return(
        <div className="container mt-3 w-75">
            <h1 className="text-center">Selamat datang diperpustakaan camp404</h1>
            <div id="catalog">  
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Pengarang</th>
                    <th scope="col">Harga</th>
                    <th scope='col'>Stok</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Beranda;