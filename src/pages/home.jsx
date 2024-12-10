import React from 'react'
import Cards from '../components/Fragments/Card'
import { Button } from 'flowbite-react'
import Card2 from '../components/Fragments/Card2'




const statistik =[
    {
        judul : 'Warga',
        ket : '1900 Jiwa'
    },
    {
        judul: 'Desa',
        ket : '7 dusun'
    },
    {
        judul: 'Pendidikan',
        ket : '86 Sekolahan'
    },
    {
        judul: 'Kesehatan',
        ket : '2 Pukesmas'
    },
    {
        judul: 'Umum',
        ket : '1 Pasar'
    },
    {
        judul: 'Temapt Ibadah',
        ket : '15 Temapt'
    },
]
const produks = [
    {
      id: 1,
      title:"Specs",
      image:"/img/logo.png",
      nama:" 500000",
      deskripsi:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      tgl:'06 November 2024'
    },
    {
      id: 2,
      title:"nike",
      image:"https://media.istockphoto.com/id/1019886414/id/foto/pemilih-dengan-latar-belakang-bendera-indonesia-ilustrasi-3d.jpg?s=612x612&w=0&k=20&c=Z530Eyys2hHGIqWVUDJWG4Sou_A09qWPrw-upqXNu1s=",
      nama:" 400000",
      deskripsi:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
       tgl:'06 November 2024',
       profile:'/img/profile.jpg'
    },
    {
      id: 3,
      title:"adidas",
      image:"/img/logo.png",
      nama:" 400000",
      deskripsi:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      tgl:'06 November 2024'
    },
    {
      id: 4,
      title:"adidas",
      image:"/img/logo.png",
      nama:" 400000",
      deskripsi:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      tgl:'06 November 2024'
    },
    ]

   
const Home = (props) => {
  return (
  <>
            <div>
                {/* Background */}
                <div className="bg-center bg-cover bg-no-repeat bg-[url('https://asset.kompas.com/crops/T3BK9gGBxjdwRBJzXv9xfeERI3c=/83x0:707x416/750x500/data/photo/2020/08/30/5f4b2fa3709bc.jpg')]">
                    <div className="px-4 mx-auto content-start max-w-screen-xl py-24 lg:py-56">
                        <div className='flex flex-wrap'>
                        <h1 className="w-full mb-6 text-3xl font-playwrite tracking-tight leading-none text-white md:text-5xl lg:text-xl">Selamat Datang di Website Resmi</h1>
                        <p className="w-full mb-8 font-bold font-playwrite text-gray-300 lg:text-5xl sm:px-16">Desa Tambahrejo</p>
                        <p className="w-full mb-6 text-3xl font-playwrite tracking-tight leading-none text-white md:text-5xl lg:text-xl">Kecamatan Bandar, Kabupaten Batang, Jawa Tengah</p>
{/*                         
                            <a href="#" className="inline-flex my-2 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Jelajah
                            </a> */}
                            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                Jelajah
                            </a>  
                        
                        </div>
                    </div>
                </div>

                {/* Statistik */}
                <div className="w-full lg:-mt-28 z-50">
                    <div className="container z-10 mx-auto">
                        <div className='flex'>
                            <div className="w-full bg-white p-2 py-5 lg:p-10 mb-5 rounded-md">
                                <p className='font-playwrite text-slate-500 text md font-boldml-2'>
                                    Stastistik
                                </p>
                                <div className='flex flex-wrap'>
                                    <div className='w-1/2 mt-8 h-1/4 md:w-1/2'> 
                                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kepala Desa</h5>
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Muhammad .... </p>

                                            </div>
                                        </a>   
                                    </div>
                                    <div className='lg:w-[50%] mt-8 md:w-1/2'>  
                                    <button onClick={()=>{}}>
                                        <div className='flex flex-wrap md:h-50'>
                                            {statistik.map((statis)=>(
                                                <Card2 judul={statis.judul} ket={statis.ket}/>                                       
                                            ))
                                        }
                                        </div>
                                    </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* kabar berita */}
               <div className='container mx-auto'>
                    <p className='font-playwrite text-slate-500 text-md font-bold ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" class="w-5 inline m-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path>
                    </svg>
                    Kabar Desa
                    </p>
                    <div className='flex flex-wrap justify-center m-0 mb-5 z-50'>                   
                        {produks.map((berita)=>(
                             <Cards key={berita.id}>
                             <Cards.Header  image={berita.image} className="mt-3" />
                             <Cards.Body title={berita.title}>{berita.deskripsi}
                               </Cards.Body>
                             <Cards.Footer penulis={berita.profile} nama={berita.nama} tgl={berita.tgl}
                             />
                             </Cards>
                        ))}
                    </div>
               </div>

               {/* form pengaduan */}
               <div className='w-full bg-slate-500 py-10'> 
                    <div className='container mx-auto lg:px-0 px-2'>
                        <p className='font-playwrite text-white text-md font-bold mb-2'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 inline'/>
                        Form Pengaduan
                        </p>
                        <p  className='font-playwrite text-white text-sm'>
                            Punya pertanyaan, keluhan, saran maupun kritik untuk desa? Sampaikan melalui formulir berikut.
                        </p>
                        <div className='flex flex-wrap'>
                            <div className='w-1/3 lg:w-60% mt-10'>
                                <img src="data:image/png;base64,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" alt="" className='w-full' />
                            </div>
                            <div className="w-full lg:w-1/2 p-1">
                                <div className='flex flex-wrap p-3'>
                                    <div className='w-1/2 p-2'>
                                        <label for="first_name" className="block mb-2 text-sm font-playwrite font-semibold text-white dark:text-white">Nama</label>
                                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    </div>
                                    <div className='w-1/2 p-2'>
                                        <label for="last_name" className="block mb-2 text-sm font-playwrite font-semibold text-white dark:text-white">Telephone</label>
                                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                </div>
                                <div className='p-4'> 
                                    <label for="message" className="block mb-2 text-sm font-playwrite font-semibold text-white dark:text-white" >Kritik dan Saran</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                                </div>
                                <div className='p-4'>
                                    <Button className='bg-green-500 hover:bg-white hover:text-black'>
                                        Kirim 
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               
            </div>
  </>
            
  )
}

export default Home