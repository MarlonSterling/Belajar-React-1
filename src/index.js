import React from 'react';
import reactDom from 'react-dom';
import './index.css'; 

import {books} from './books';
import Book from './Book';

// const title ='Rich Dad Poor Dad';
// const author ='Robert T. Kiyosaki';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg';


function BookList() { //! Kalau functuion huruf besar berarti Sebuah Komponen
  return (
    <section className='booklist'>
      {books.map((book)=>{
        return(
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}


// const Title = () => <h1>Rich Dad Poor Dad</h1>;
// const Author = () => <h4 style = {{color:'#617d98', fontSize:'0.75.rem',
// marginTop: '0.25 rem'}}>Robert T. Kiyosaki</h4>; 
//! CSS yang dimasukkan pada JSX akan ditimpa jika ada lagi di CSS

// const Pesan = () => <h1>plss bisa masuk otak </h1> ;
// const Greeting = () => {
//   return React.createElement('h1',{},'hello~ ini susah');
// }


reactDom.render(<BookList/>,document.getElementById('root')); 
//! Pakai closing tag    ^  "/>" jika ada code yang tidak memiliki tanda tsb
