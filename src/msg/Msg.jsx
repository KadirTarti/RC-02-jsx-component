import React from 'react';
//^* app.js'te bu import olduğu için buradan silebiliriz

//! src altındaki img dosyasından resim ekleme yöntemi :
import resim2 from "../img/download.jpg"



const Msg = () => {
    //! burası javascript alanı, return altı ise react (jsx) alanı


//retun altına yazılanlar ekrana basılacaklar alanı. fonksiyon, onclik vs yazmak istersek onlar return öncesinde yazılmalı! 
    return (   
    <div>
    
    <h2>Burası Msg sayfasıdır!</h2>
    <p>Hallo REACT</p>
    {/* netten alınan resim: */}
    <img src="https://www.shutterstock.com/image-photo/european-badger-walking-towards-camera-260nw-1951199344.jpg" width='200px' alt="" />
    <img src={resim2} alt="" />

    {/* public klasörüne eklenen resimler alttaki gibi yazılabilir */}
    <img src="../assets/resim.png" width='200px' alt="" />
    </div>
  );
};

export default Msg;