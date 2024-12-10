import { Button, Modal } from "flowbite-react"; // Pastikan untuk mengimpor Modal dari flowbite-react
import Card2 from "../components/Fragments/Card2";
import { useState } from "react";
import Sktm from "../components/Fragments/Sktm";

const adm = [
    { id: 1, judul: 'Surat Keterangan Tidak Mampu' },
    { id: 2, judul: 'Surat Pengantar Nikah' },
    { id: 3, judul: 'Surat Keterangan Domisili' },
    { id: 4, judul: 'Surat Keterangan Pindah' },
    { id: 5, judul: 'Pembuatan dan Pembaruan KTP' },
    { id: 5, judul: 'Pembuatan dan Pembaruan KK' },
    { id: 6, judul: 'Pembuatan Akta Kelahiran' },
    { id: 7, judul: 'Pembuatan Akta Kematian' },
];

const Layanan = () => {
    const [selectedJudul, setSelectedJudul] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const openModal = (judul) => {
        setSelectedJudul(judul);
        setIsModalOpen(true);
    };
    const handleFormSubmit = (data) => {
        console.log('Data yang diisi:', data);
        closeModal(); // Tutup modal setelah pengiriman
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJudul(null);
    };

    return (
        <>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('https://asset.kompas.com/crops/T3BK9gGBxjdwRBJzXv9xfeERI3c=/83x0:707x416/750x500/data/photo/2020/08/30/5f4b2fa3709bc.jpg')]">
                <div className="px-4 mx-auto content-start max-w-screen-xl py-24 lg:py-56"></div>
            </div>
            <div className="w-full lg:-mt-28 z-50">
                <div className="container z-10 mx-auto">
                    <div className='flex'>
                        <div className="w-full bg-white p-2 py-5 lg:p-10 mb-5 rounded-md">
                            <p className='font-playwrite text-slate-500 text md font-bold ml-2 mb-4'>
                                Layanan Desa
                            </p>
                            <div className="flex flex-wrap">
                                <div className="w-full border border-b-4 text-xl">
                                    <p className="font-playwrite my-3 m-2">Layanan Administarsi Kepndukdukan</p>
                                    <div className="flex flex-wrap">

                                    {adm.map((statis) => (
                                        <Card2 key={statis.id} judul={statis.judul} onClick={() => openModal(statis.judul)}>
                                            {/* Anda bisa menambahkan konten tambahan di sini jika perlu */}
                                        </Card2>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <Modal show={isModalOpen} onClose={closeModal}>
                    <Modal.Header>{selectedJudul}</Modal.Header>
                    <Modal.Body>
                        {selectedJudul === 'Surat Keterangan Tidak Mampu' && (
                            <Sktm onSubmit={handleFormSubmit} />
                        )}
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={closeModal}>Tutup
                            </Button>
                            </Modal.Footer> */}
                            </Modal>)}
        </>
        )}
        export default Layanan
    