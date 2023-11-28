import HomeLayout from '../components/Index/HomeLayout';
import Contacto from '../components/Contact';

export default function Contact() {
    return (
        <HomeLayout>
            <div className='h-screen bg-slate-300 bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                    <div className="flex flex-col items-center justify-center pt-20 text-white"></div>
                        <Contacto />
                    </div>
                <div className='grid mb-20 items-center justify-center'>
            </div>
        </HomeLayout>
    )
}