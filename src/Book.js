import React from 'react'

const Book = (props) => {
    const {img, title, author} = props; // props.book = mengnampilkan property dari book 
    const clickHandler = () => {
        alert('helo');
    }
    const complexExample = () => {
        console.log (author);
    }
    return (
        <article className='book' onMouseOver={()=>{
        console.log(title);
    }}>
        <img src = {img} ></img>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Refrences</button>
        <button type='button' onClick={()=> complexExample(author)}>more complex </button>
    </article>
    );
};

export default Book