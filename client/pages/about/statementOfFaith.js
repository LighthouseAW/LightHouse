import HomeLayout from '../../components/Index/HomeLayout';
import Image from "next/image";
import Link from "next/link";
import AboutNav from '../../components/NavBars/AboutNav';
import React, { useState, useEffect } from "react";

export default function StatementOfFaith() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = window.navigator.userAgent;
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);


    const title = "Statement of Faith"
    const subTitle = "Lighthouse Arab World is in the process of revising its Statement of Faith."
    const sub1 = "God"
    const sub2 = "God the Father"
    const sub3 = "God the Son"
    const sub4 = "God the Holy Spirit"
    const sub5 = "Bible"
    const sub6 = "Humanity"
    const sub7 = "Salvation"
    const sub8 = "Church"
    const sub9 = "Consummation"
    const vs1 = "(Genesis 1–2; Exodus 3:14; Isaiah 45:5; Matthew 28:18-20; John 1:1-3, 8:58; Acts 5:3-4)"
    const vs2 = "(Genesis 1:26-28; Psalms 67 and 96; Isaiah 43:10-13; John 3:16-17; Acts 1:8; Romans 8:15-17; Galatians 3:26; 4:6; Ephesians 1:10; 2:4-8)"
    const vs3 = "(Genesis 3:15; John 1:1, 14; Philippians 2:5-11; Colossians 1:15-20; 1 Thessalonians 4:13-5:11)"
    const vs4 = "(John 16:7-11; Acts 1:8; Romans 8:4-16; 1 Corinthians 2:12-13; 6:19; 12:4-7; 12:13; Ephesians 1:13-14; Titus 3:5; 2 Peter 1:21)"
    const vs5 = "(Deuteronomy 32:46-47; Psalm 119; John 10:35; 2 Timothy 3:15-17; 2 Peter 1:3, 20&21)"
    const vs6 = "(Genesis 1:26-28, 3:1-24; Romans 3:23, 5:12, 6:23, 8:7-8; Ephesians 2:1–3; James 2:10; Revelation 20:11-15)"
    const vs7 = "(Matthew 1:18-25; Luke 9:23; John 3:16-18, 36, 7:38-39, 11:25, 14:6; 1 Corinthians 15:1-4; Ephesians 2:1-22)"
    const vs8 = "(Matthew 16:13-19, 18:15-18, 28:18-20; John 17:17; Acts 1:8, 2:1-13, 41-47; Romans 12:3-8; 1 Corinthians 12:12-31; Ephesians 2-3; Colossians 3:16; 1 Peter 2:1-3)"
    const vs9 = "(Isaiah 66:15-24; Daniel 7:13-14, 12:1-3; Matthew 13:47-50, 24:3-51; Revelation 19:11-22:7)"
    const sf1 = "We believe in the God to whom the Bible bears witness: The Lord God, the Creator of the heavens and the earth, the one true God. He is eternally one being and eternally three persons: God the Father, God the Son, and God the Holy Spirit. Each person is equally God while being distinct in personhood from each other. God is uncreated and independent of time and space. He is also present everywhere in the universe and governs it justly for the purpose of his own glory."
    const sf2 = "We believe that God the Father loves the world and gave his Son to be its Savior. He is the Father of all who trust in Jesus Christ for their salvation. He is rightly passionate about his glory and desires and delights in the praise of his glory by the nations. His will is for man to firstly know, then worship, trust, love and obey him. His plan for fulfilling this purpose involves the restoration of creation and man to his original creation purpose and under the headship of Christ. God’s completion of this plan includes the witness of his people in every age."
    const sf3 = "We believe that Jesus is both completely God and completely man. From the time of his conception in his virgin mother Mary when the eternal Son of God took on a complete human nature, he exists forever as the God-man. Jesus is the Messiah promised in the Old Testament and is the only one who has lived a perfectly sinless and godly life. He came to save his people from their sins through his sacrifice on the cross, resurrection from the dead, and ascension into heaven. Jesus inaugurated his kingdom at his first advent, is currently reigning from heaven until the time when, at his second advent, he physically returns as King to fulfill his kingdom, judge his enemies and reign with his redeemed people."
    const sf4 = "We believe that God the Holy Spirit is personal, not simply a force. He is the author of the Scriptures. He convicts the world of sin, righteousness and judgment. He is the agent of regeneration. He indwells, seals and baptizes all believers into Christ. The Holy Spirit enables the believer to understand and obey the Scriptures. He empowers believers for godly living, and he equips them for witness and service."
    const sf5 = "We believe that the Bible is God’s only written message to mankind. God’s Spirit moved the human authors of the Scriptures to convey his message in conjunction with their personalities, cultural settings, and writing styles. Because of its divine-human origins, the Bible perfectly conveys in ordinary language God’s message to people. The Bible is therefore supreme in authority, without error in all it affirms, is the only infallible rule of faith and practice, and is completely sufficient for life and godliness."
    const sf6 = "We believe that God created humans, made in his image as male and female, to know him in worship and represent his image on earth in obedience to His word. Through Adam’s disobedience to God in the Garden of Eden, all humans incurred guilt and have been corrupted by sin which inclines them to do evil. As image bearers of God, who are corrupted by sin, apart from being redeemed by God’s grace we continue live in hostility to him under the rule of the Devil and his demons. The just punishment for breaking God’s commandments is death, both physical and spiritual. It is not possible for guilty people to remove the penalty for their sins through any work of their own, therefore they need the Savior in order to avoid God’s just wrath in eternity and enjoy relationship with him again."
    const sf7 = "We believe that salvation and eternal life come solely through the death, burial, and resurrection of Jesus Christ. The good news is that, while we fail to meet God's just demands, Christ, in His perfect obedience to the law, fulfilled them. The Gospel declares that through His sacrifice on the cross, Christ paid for humanity's sins. God, by raising Christ from the dead, affirmed the sufficiency of this sacrifice. Every repentant sinner who trusts in Jesus experiences complete forgiveness, justification, spiritual rebirth, the indwelling of the Holy Spirit, and adoption into God's family—essentially, being born again into perfect spiritual union with Christ. This new life in Christ leads to ongoing holiness and culminates in the physical resurrection at Christ's return. In summary, we embrace salvation by grace alone, through faith alone, in Christ alone."
    const sf8 = "We believe that everyone who repents and trusts in Jesus becomes a member of his people, the Church. The Church is one spiritual body ruled by Jesus its head. It is manifested in numerous local gatherings. These local churches are characterized by a common worship of God, the pursuit of spiritual growth, and following Christ’s mission in the world. Spiritual growth is accomplished through the preaching of the Bible, prayer, the practice of spiritual gifts in love and holiness, and the observance of baptism and the Lord’s Supper. The mission of the Church is to make disciples of Jesus Christ by the power the Holy Spirit who dwells within each believer to provide guidance and power for obedience to God."
    const sf9 = "We believe in the coming physical return of Jesus to the earth to subdue his enemies and reign with his people in his kingdom. We believe in the eternal punishment of God’s enemies in the Lake of Fire. All those who continue in rebellion against God will experience his just wrath and punishment for their sins. This includes both demons and all nonbelievers.  We also believe in eternal life for God’s people in the new heavens and new earth where God will be glorified and enjoyed forever."
    const lusCov = "We Affirm the "

    return (
        <HomeLayout>
            <div className='flex-grow bg-white bg-cover bg-no-repeat flex flex-col items-center relative'>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-transparent"></div>
                <div className="flex-grow w-5/6 pt-40 pb-20 text-white z-20 relative">
                    <div className="bg-white/50 rounded-lg p-4">
                    <div className="flex justify-between items-center pb-4">
                        <h2 className={`${isMobile ? "text-center text-5xl" : "text-6xl"} text-black  font-bold mb-16`}>{title}</h2>
                        {isMobile ? <></> : <div className="relative">
                        <Image alt="picture" src="/images/SOF.jpeg" width="400" height="400" className="z-20 relative p-2"/>
                            <svg className="z-10 absolute top-0 right-0 mt-8 mr-44  hidden lg:block" width="263" height="250" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="2" height="2" className="text-mustard" fill="black"></rect>
                                            </pattern>
                                        </defs>
                                    <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                            </svg>
                        </div>}
                    </div>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub1}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf1}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs1}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub2}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf2}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs2}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub3}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf3}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs3}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub4}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf4}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs4}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub5}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf5}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs5}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub6}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf6}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs7}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub7}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf7}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs7}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub8}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf8}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs8}</h2>
                    <h2 className={`text-black text-2xl font-bold mb-1`}>{sub9}</h2>
                    <h2 className={`text-black text-xl mb-1`}>{sf9}</h2>
                    <h2 className={`text-black text-l mb-6`}>{vs9}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{subTitle}</h2>
                    <h2 className={`text-black text-xl mb-6`}>{lusCov}<Link className="underline" target="_blank" href="https://lausanne.org/content/covenant/lausanne-covenant">Lausanne Covenant</Link>.</h2>
                    </div>
                    </div>
                </div>
            <div className="bg-color pb-12">
                <div className='z-20 relative'>
                    <div className="flex items-center">
                        <div className=" flex flex-col items-center w-5/6 bg-SOFCall bg-cover bg-no-repeat justify-center m-auto">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-color"></div>
                            <p className='text-white mt-8 text-center text-5xl font-bold pb-10 z-20 relative'>
                                We believe art can show the love of Jesus to everyone
                            </p>
                            <div className="flex items-center justify-center space-x-6">
                            <Link
                                href="/about/staff"
                                className="text-black underline text-center text-2xl font-bold mb-8 z-20 relative"
                                onClick={() => {
                                    setSelectedLink("Home");
                                    setSelectedSubLink("");}}
                                >Learn about our Team →</Link>
                        </div>
                            <p className='text-black mt-2 text-center text-4xl font-bold mb-6 z-20 relative'>
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </HomeLayout>
    )
}
