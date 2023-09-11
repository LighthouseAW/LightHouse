import HomeLayout from '../../components/HomeLayout';
import MissionNav from '../../components/NavBars/MissionNav'

export default function Mission() {

    const title = "Our Values"
    const vt1 = "1. We believe that God loves all"
    const v1 = "God loves and desires that people from all nations be reconciled to himself, including the people of the Arab World. "
    const vt2 = "2. We believe that God has a plan for the Arab World"
    const v2 = "The Arab World is an important part of God's plan of redemption; therefore, we have a passion to reach the Arab heart and mind with the gospel of Jesus."
    const vt3 = "3. We believe that art opens hearts"
    const v3 = "Media and art communicate truth on a deep level, opening closed doors to people’s hearts and minds. "
    const vt4 = "4. We believe in encouraging others to stay"
    const v4 = "Persecution and instability have led many Arab Christians to leave their home countries. We want to encourage them to stay, continuing to be salt and light in their world."
    const vt5 = "5. We believe in the value of the Arab voice"
    const v5 = "Seeing familiar faces and hearing familiar voices gives us credibility with our audience and encourages openness to the message. "
    const vt6 = "6. We believe in replication and mobilization"
    const v6 = "Through teaching others to use media and art to share the love of Jesus, we can replicate and multiply our impact while mobilizing others in the harvest. "
    const vt7 = "7. We believe in partnerships"
    const v7 = "Partnering with others, learning from each other, and encouraging each other, maximizes everyone's strengths and multiplies our impact. "
    const vt8 = "8. We believe in excellence"
    const v8 = "Doing all things as unto the Lord and not unto men demands that we do not settle for mediocre work but continually strive for excellence through the power that God provides, and doing so encourages others to do the same. "
    const vt9 = "9. We believe in the Church"
    const v9 = "The Church is the body of Christ, the visible expression of our risen Savior in the world. Therefore, we will always seek to serve and encourage the church in the region, and our staff will be committed to service and fellowship in a local church. "

    return (
        <HomeLayout>
            <div className='h-screen bg-mission bg-cover bg-no-repeat flex flex-col items-center '>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                {/* <div className="pt-20">
                    <MissionNav />
                </div> */}
                <div className="flex flex-col items-center justify-center w-5/6 pt-80 text-white relative z-20">
                    {/* <p className={` text-6xl font-bold`}>About Us</p> */}
                    <h2 className={`text-black text-6xl font-bold mb-14`}>{title}</h2>
                    <h2 className={`text-black text-4xl font-bold`}>{vt1}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v1}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt2}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v2}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt3}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v3}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt4}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v4}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt5}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v5}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt6}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v6}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt7}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v7}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt8}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v8}</p>
                    <h2 className={`text-black text-4xl font-bold`}>{vt9}</h2>
                    <p className={`text-black py-5 text-2xl mb-2`}>{v9}</p>
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