import imgStory from '../assets/images/story-img.jpg'

export default function Story(){
    return(
        <>
            <div className="story-wrap-content">
                <div className="container">
                    <h2>Our Story</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="img-story">
                                <img src={imgStory} alt="img-story" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                           <p>
                            D`CoffeeShop didirikan pada tahun 2022 dengan satu tujuan sederhana: 
                            menghadirkan pengalaman ngopi yang hangat, autentik, dan penuh rasa. 
                            Berawal dari sudut kecil kota, kami percaya bahwa secangkir kopi yang 
                            diracik dengan hati bisa menjadi awal dari percakapan, ide, 
                            dan persahabatan yang luar biasa. Kami menggabungkan biji 
                            kopi lokal pilihan, metode seduh modern, dan suasana nyaman 
                            untuk menciptakan tempat yang lebih dari sekadar coffee shop — tempat di mana 
                            setiap orang bisa merasa seperti di rumah. Seiring waktu, D`CoffeeShop terus berkembang. 
                            Tapi semangat kami tetap sama: menyajikan kopi terbaik dan menghadirkan 
                            momen yang bermakna untuk setiap pelanggan yang datang. <br /> <b> D`CoffeeShop – More Than Just Coffee.</b>
                           </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}