import Link from 'next/link'
import Formulario from '../../components/Formulario'


export default function registro() {
    return (
        <>
            <div class="container mx-auto text-center">
                <div class="bg-gray-800 flex justify-start">
                    <div class="text-red-500 p-4 m-2">
                    <Link href="/">eStreet</Link>
                    </div>
                </div>
                <div class="bg-red-500 flex justify-end text-gray-400 ">
                    <div class="bg-red-500 p-4 m-2">
                        Registro Usuario
                    </div>
                    <div class="bg-red-500 p-4 m-2">User1232</div>
                </div>
                <div>
                    <Formulario />
                </div>
            </div>
        </>
    )
}
