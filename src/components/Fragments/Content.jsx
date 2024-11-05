import { Card } from "flowbite-react"


const Content = () => {
  return (


            <div class="grid grid-cols-3 gap-4 mb-4">
             <Card className="w-full max-w-sm bg-gray-800 md:text-base border-gray-700 rounded-lg shadow">
                <p className=" text-2xl text-white font-medium text-center p-5">
                    Jumlah Penduduk
                </p>
                <p className="text-xl text-white text-center mb-5">
                    150.000 Jiwa
                </p>
             </Card>
             <Card className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
                <p className=" text-3xl text-white font-medium text-center p-5">
                    Jumlah Penduduk
                </p>
                <p className="text-xl text-white text-center mb-5">
                    150.000 Jiwa
                </p>
             </Card>
             <Card className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
                <p className=" text-3xl text-white font-medium text-center p-5">
                    Jumlah Penduduk
                </p>
                <p className="text-xl text-white text-center mb-5">
                    150.000 Jiwa
                </p>
             </Card>
            </div>
  )
}

export default Content