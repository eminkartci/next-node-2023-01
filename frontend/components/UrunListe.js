import React, { useEffect, useState } from "react";
import Urun from "./Urun.js";
import styles from "../styles/UrunListe.module.css";

function UrunListe() {
  // ! Backend'den ürünleri çekip ekranda göstermek !!
  const [urunListe,setUrunliste] = useState([
    {id: 1, isim: "Elbise", fiyat: 55, gorsel: "albise1.webp"},
    {id: 2, isim: "Bilgisayar", fiyat:10000},
    {id: 3, isim: "Araba", fiyat:350000}
  ]);

  useEffect(()=>{
    const yeniUrunListe = [
      {id: 1, isim: "Elbise", fiyat: 55, gorsel: "albise1.webp"},
      {id: 2, isim: "Bilgisayar", fiyat:10000},
      {id: 3, isim: "Araba", fiyat:350000},
      {id: 4, isim: "Plak", fiyat:320}
    ]

    setUrunliste(yeniUrunListe);
  },[])

  return <div>

    <h2> Ürün Listesi</h2>

    <ul className={styles.container}>
        {urunListe.map(urun => {
          return (<li key={urun.id}><Urun isim={urun.isim} id={urun.id} fiyat={urun.fiyat} gorsel={urun.gorsel}/> </li>);
        })}

    </ul>


  </div>;
}

export default UrunListe;
