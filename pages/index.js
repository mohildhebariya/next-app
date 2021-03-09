import Head from 'next/head'
import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'

export default function Home() {
  let [product, setProducts] = useState([{ name: 'Tshirt', price: 2000 }, { name: 'Jeans', price: 4000 }]);
  let value = 0, price = 0;

  function getData(index) {
    axios.get('products.json').
      then(function (res) {
        console.log(res.data);
        setProducts(res.data);
      })
  }

  // useEffect(()=>{
  //     if(product){
  //         alert("hello")
  //         console.log("At UseEffect", product);
  //     }
  // },[product])

  function changeValue(val) {
    value = val;
    console.log(value);
  }

  function changePrice(val) {
    price = val;
    console.log(price);
  }

  function deletitem(index) {
    alert(index);
    var checked = product;
    checked.splice(index, 1);
    // let [name] = checked
    // let newitem = product.concat({name:"value",price:100});
    // setProducts(newitem);
    // console.log("checked -->",name);
    setProducts(checked);
  }

  function AddNewitem(e) {
    e.preventDefault();
    // let newitem = product.concat({name:e.target.name.value,price:e.target.price.value});
    // let newitem = product.concat({name:value,price:price});
    setProducts([...product, { name: value, price: price }]);
    e.target.name.value = '';
    e.target.price.value = '';
  }

  return (
    <div>
      <button onClick={getData}>Get Student</button>
      <div>
        <h1> Demo App</h1>

        <form onSubmit={AddNewitem}>
          {/* <input type="text" name="name" onChange={e => props.value = e.target.value}></input> */}
          <input type="text" name="name" onChange={e => changeValue(e.target.value)}></input>
          <input type="text" name="price" onChange={e => changePrice(e.target.value)}></input>

          <button >Add Item</button>

        </form>
        {
          product.map(function (val, index) {
            return <div>name : {val.name},Price : {val.price}
              <button onClick={() => { deletitem(index) }} >Delete Item</button>
            </div>
          })
        }
      </div>

      {/* <EcomSep AddNewitem={AddNewitem} product={product} deletitem={deletitem} changeValue={changeValue} changePrice={changePrice} /> */}
    </div>
  );

  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org"> Framework of React the Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.js</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h3>Documentation &rarr;</h3>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h3>Learn &rarr;</h3>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/master/examples"
  //           className={styles.card}>
  //           <h3>Examples &rarr;</h3>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className={styles.card}>
  //           <h3>Deploy &rarr;</h3>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer">
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  //       </a>
  //     </footer>
  //   </div>
  // )
}
