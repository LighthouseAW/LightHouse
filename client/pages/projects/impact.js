import HomeLayout from '../../components/HomeLayout';
import ProjectsNav from '../../components/NavBars/ProjectsNav'
import StatisticsComponent from "../../components/StatisticsComponent"
import Image from "next/image"

export default function Impact() {
    return (
        <HomeLayout>
            <div className='h-screen bg-white bg-cover bg-no-repeat '>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent"></div>
                    {/* <div className="pt-20">
                        <ProjectsNav />
                    </div> */}
                    <div className="flex pt-32 items-center justify-center z-20 relative">
                        <div className="w-1/2 p-12 ">
                        <h1 className="text-2xl font-semibold text-center mb-4 z-20 relative">Ministry Statistics</h1>
                        <div className="relative">
                                <Image alt="picture" src="/images/impact.jpeg" width="700" height="700" />
                                <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent to-color"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 "></div>
                            </div>
                        </div>
                <div className="p-12 w-1/2 flex flex-col items-center justify-center text-white">
                    <div className="items-center justify-center">
                        <StatisticsComponent
                        title="Daily Impact"
                        value="30k"
                        description="People receiving the Gospel Daily"
                        />
                        <StatisticsComponent
                        title="Monthly Impact"
                        value="15+"
                        description="New Followers of Christ each month"
                        />
                        <StatisticsComponent
                        title="Growing connections"
                        value="100+"
                        description="Seekers in follow-up conversations"
                        />
                        <StatisticsComponent
                        title="Training"
                        value="50+"
                        description="Arab Christians training in media and mission"
                        />
                        <StatisticsComponent
                        title="Pre-Evangelism"
                        value="Millions"
                        description="Connected though secular channels"
                        />
                        <StatisticsComponent
                        title="BelightFM"
                        value="500k"
                        description="Listening to Belight FM daily in lebanon and surrounding countries"
                        />
                    </div>
                </div>
                </div></div>
                <div className='grid mb-20 items-center justify-center'>
            </div>
        </HomeLayout>
    )
}