import { useEffect, useState } from "react";
import Cards from "../components/Fragments/Card";
import axios from "axios";


const Galeri = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            console.log(res.data); // Periksa respons
            // Mengatur state dengan data yang benar
            // setPhotos(res.data); // Tidak perlu akses ke `photos`
            const filteredPhotos = res.data.filter(photo => photo.id >= 1 && photo.id <= 17);
            setPhotos(filteredPhotos); // Mengatur state dengan data yang difilter
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
}, []);
    return (
        <>
        <div className="bg-center bg-cover bg-no-repeat bg-[url('https://asset.kompas.com/crops/T3BK9gGBxjdwRBJzXv9xfeERI3c=/83x0:707x416/750x500/data/photo/2020/08/30/5f4b2fa3709bc.jpg')]">
            <div className="px-4 mx-auto content-start max-w-screen-xl py-24 lg:py-56">
            </div>
        </div>
        <div className="w-full lg:-mt-28 z-50">
                    <div className="container z-10 mx-auto">
                        <div className='flex'>
                            <div className="w-full bg-white p-2 py-5 lg:p-10 mb-5 rounded-md">
                                <p className='font-playwrite text-slate-500 text md font-boldml-2'>
                                </p>
                                <div className="flex flex-wrap">
                                    {photos.length > 0 ? (
                                        photos.map((photo, id) => (
                                            <Cards key={id}>
                                                <Cards.Body image={photo.thumbnailUrl} title={photo.title} /> {/* Menggunakan thumbnailUrl untuk gambar */} {/* Pastikan ini sesuai dengan data */}
                                            </Cards>
                                        ))
                                    ) : (
                                        <p>No photos available</p> // Pesan jika tidak ada foto
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
          
        </>
    );
}

export default Galeri;