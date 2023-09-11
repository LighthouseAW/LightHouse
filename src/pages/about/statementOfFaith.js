import HomeLayout from '../../components/HomeLayout';
import Link from "next/link";
import AboutNav from '../../components/NavBars/AboutNav'

export default function StatementOfFaith() {
    return (
        <HomeLayout>
            <div className='h-screen bg-about bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                {/* <div className="pt-20">
                    <AboutNav />
                </div> */}
                <div className=""></div>
            </div>
            <div className='grid mb-20 items-center justify-center'>
        </div>
        </HomeLayout>
    )
}