import HomeLayout from '../../components/HomeLayout';
import MissionNav from '../../components/NavBars/MissionNav'

export default function Mission() {
    return (
        <HomeLayout>
            <div className='h-screen bg-mission bg-cover bg-no-repeat flex flex-col items-center '>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                {/* <div className="pt-20">
                    <MissionNav />
                </div> */}
                <div className="flex flex-col items-center justify-center w-5/6 pt-80 text-white relative z-20">
                    {/* <p className={` text-6xl font-bold`}>About Us</p> */}
                    <h2 className={`text-black text-6xl font-bold mb-14`}>Our Values</h2>
                    <h2 className={`text-black text-4xl font-bold`}>1. We believe that God loves all</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>God loves and desires that people from all nations be reconciled to himself, including the people of the Arab World. </p>
                    <h2 className={`text-black text-4xl font-bold`}>2. We believe that God has a plan for the Arab World</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>The Arab World is an important part of God's plan of redemption; therefore, we have a passion to reach the Arab heart and mind with the gospel of Jesus.</p>
                    <h2 className={`text-black text-4xl font-bold`}>3. We believe that art opens hearts</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>Media and art communicate truth on a deep level, opening closed doors to people’s hearts and minds. </p>
                    <h2 className={`text-black text-4xl font-bold`}>4. We believe in encouraging others to stay</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>Persecution and instability have led many Arab Christians to leave their home countries. We want to encourage them to stay, continuing to be salt and light in their world.</p>
                    <h2 className={`text-black text-4xl font-bold`}>5. We believe in the value of the Arab voice</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>Seeing familiar faces and hearing familiar voices gives us credibility with our audience and encourages openness to the message. </p>
                    <h2 className={`text-black text-4xl font-bold`}>6. We believe in replication and mobilization</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>Through teaching others to use media and art to share the love of Jesus, we can replicate and multiply our impact while mobilizing others in the harvest. </p>
                    <h2 className={`text-black text-4xl font-bold`}>7. We believe in partnerships</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>Partnering with others, learning from each other, and encouraging each other, maximizes everyone's strengths and multiplies our impact. </p>
                    <h2 className={`text-black text-4xl font-bold`}>8. We believe in excellence</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>Doing all things as unto the Lord and not unto men demands that we do not settle for mediocre work but continually strive for excellence through the power that God provides, and doing so encourages others to do the same. </p>
                    <h2 className={`text-black text-4xl font-bold`}>9. We believe in the Church</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>The Church is the body of Christ, the visible expression of our risen Savior in the world. Therefore, we will always seek to serve and encourage the church in the region, and our staff will be committed to service and fellowship in a local church. </p>
                </div>
            </div>
            <div className='flex flex-grow bg-color items-center pb-80 justify-center'>
        </div>
        <div className='flex flex-grow bg-color items-center pb-80 justify-center'>
        </div>
        <div className='flex flex-grow bg-color items-center pb-80 justify-center'>
        </div>
        </HomeLayout>
    )
}