import React, { useEffect, useState } from 'react'
import Cards from '../components/Fragments/Card'
import { Link, useParams } from 'react-router-dom'
import Counter from '../components/Fragments/Counter'
import Pagination from '../components/Fragments/Pagination'
import axios from 'axios'

const Kabardesa = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/posts');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
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
                                    Kabar Desa
                                </p>
                                <div className='flex flex-wrap mt-4'>
                                      {posts.map((produk) => (
                                        <Cards key={produk.id}>
                                        {/* <Cards.Header  image={produk.}/> */}
                                        <Cards.Body title={produk.title}>{produk.body}
                                          </Cards.Body>
                                        <Cards.Footer price={produk.views} 
                                        id={produk.id}/>
                                        </Cards>
                                      ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-5"><Pagination/></div>
    
    </>
  )
}

export default Kabardesa