# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create Employee
User.destroy_all
ProjectPhoto.destroy_all
Project.destroy_all
Employee.destroy_all

user = User.create(username: 'Neil', password: 'nsteen88')

# Create Projects

emp1 = Employee.create(name: "Neil Holsteen", role: "", blurb: "President of Lighthouse Arab World. Neil joined Lighthouse Arab World in 2019 after a successful career in the corporate world. He lives with his wife Lisa in Colorado and has two married children." )
emp2 = Employee.create(name: "Dr. Emad D.", role: "", blurb: "Dr D lives with his family in Lebanon and travels the world interviewing guests about their lives and perspectives. He also is a key strategic leader in the vision for the future of Lighthouse Arab World." )
emp3 = Employee.create(name: "Dave Halverson", role: "", blurb: "Dave has served as the chairman of the board of Lighthouse Arab World since 2013. He is the Associate Pastor of Outreach Ministries at San Gabriel Community Church, in California. Dave and his wife Kristen have four adult children and six grandchildren. " )
emp4 = Employee.create(name: "Phil Wood", role: "", blurb: "Phil has worked as an executive in the oil and gas industry for 38 years. He and his wife Carol live in Colorado and have three married children and nine grandchildren." )
emp5 = Employee.create(name: "Douglas Barnett", role: "", blurb: "Dr. Douglas Barnett spent 30 years working as a development economist in Africa, including ten years in Tunisia where he came to know Dr D. While working, he carried out ministry in the countries he lived in. Today, he is part time instructor for CalBaptist University, works part time in property management, an urban garden project, and serves on the board of a couple of missions, including LHAW and cybermissions.org." )
emp6 = Employee.create(name: "Ken Supernault", role: "", blurb: "Ken has served on the board of Lighthouse Arab World Ministers for 2 years. He is a self employed contractor and has been in business for 35 years. He and his wife Tina have 5 children and soon to be 8 grandchildren." )


pBelight = Project.create(name: 'Belight',
    subtitle: 'Belight is a streaming platform connected to the world\'s social media platforms.', 
    blurb: "Bringing the hope of Jesus to the Arab World through a unique and powerful online streaming platform. Come and engage!", 
    mission_statement: "Our mission is to bring high quality evangelistic content to the Arabic speaking world. We believe now is the time for something different!", 
    about: "Belight is designed to share the hope of the gospel of Jesus Christ in unique and innovative ways, through videos, live events, evangelistic programs, teaching and worship videos. But why build an Arabic streaming platform? Aren't YouTube, Facebook, Instagram and even TikTok enough? We see this as an opportunity to not only consolidate high quality Arabic Christian content into a single location, but to uniquely communicate with an audience that live in a difficult context. While the historic Christian church has functioned with some freedom in Egypt, Jordan, and Lebanon, it is heavily persecuted in most other countries in the Middle East and North Africa. We are building a platform and experience that they can trust, where they can be free to ask questions, engage in discipleship, and grow in their faith. ",
    website: "https://belight.tv/",
    video: "https://player.vimeo.com/video/690513901")

pBelightFm = Project.create(name: 'Belight FM',
    subtitle: 'Sharing God\'s love to a country and region desperately in need of hope', 
    blurb: "The only FM broadcast station in the country of Lebanon, reaching far beyond borders", 
    mission_statement: "Our mission is to bring high quality evangelistic content to the arab-speaking world. We believe now is the time for something different!", 
    about: "Belight FM is the only evangelical FM station in all of Lebanon, broadcasting hope, reconciliation and transformation through the message of Jesus Christ. We have a variety of content from live talk shows to teaching to worship music written and produced in the Arab World. In light of the circumstances that Lebanone and the region are going through and the ongoing difficult news, we want to proclaim that in the midst of this darkness “let there be light!” from the source of light, peace and true joy! We hope that this station will be a cause of blessing and encouragement for all who listen to it!  ",
    website: "https://www.belight.fm/",
    video: "https://player.vimeo.com/video/690526413")

pLighthouseSchool = Project.create(name: 'Lighthouse School of Creative Arts',
    subtitle: 'Reaching the Arab World through Replication',
    blurb: "Reaching the Arab World through Replication",
    mission_statement: "We believe in training Christian Arabs with the gifting and passion to use media to communicate God's love in unique and creative ways, to show the region that there is a better way.", 
    about: "Today, media is defining the general understanding and the worldview of people across the world, and the Middle East is no exception. Equipping an enlightened generation with what's needed to produce quality media is of utmost importance, and this is our tool of choice in LSCA. This training is designed to find passionate local talents, train them, invest in them spiritually, technically and aesthetically to be able to return to their nations with a thorough understanding of the effectiveness of media, holding the keys to delivering God's message of love in the best way possible.",
    website: "",
    video: "https://player.vimeo.com/video/690528560")

pLighthouseCin = Project.create(name: 'Lighthouse Cinema',
    subtitle: 'Breaking down walls of hate and building bridges through Cinema and Documentaries', 
    blurb: "Breaking down walls of hate and building bridges through Cinema and Documentaries", 
    mission_statement: "Christian evangelistic and themed films, documentaries and medium format shows for television that communicate truth to the mind and heart.", 
    about: "We believe that the message of the Gospel of Jesus is more easily accepted through high quality film, documentaries and even television programs. By producing this kind of content, we believe that God has and will break the negative image of Christians, often labeled as apostates. We will see bridges built for Christians in Arab World society that in turn break down barriers of fear and open doors to dialog and freedom.",
    website: "",
    video: "https://player.vimeo.com/video/680225547")

pBeHelp = Project.create(name: 'BeHelp',
    subtitle: 'Lighthouse Arab World ministers to the poor, the needy and the outcast in the name of Jesus Christ.', 
    blurb: "Breaking down walls of hate and building bridges through Cinema and Documentaries", 
    mission_statement: "Just as Jesus ministered to and cared for those in need, Lighthouse Arab World ministers to the poor, the needy, and the outcast in the name of Christ.", 
    about: "The Arab World is known for natural and man-made disasters, violence, blood shed and especially persecution of Christians. Our of our areas of focus and guiding principles is to opportunistically provide food, shelter, medicine, mental health care and spiritual encouragement for those most impacted by these events and circumstances.",
    website: "",
    video: "https://player.vimeo.com/video/690530124")

pWAM = Project.create(name: 'Why Art Matters',
    subtitle: 'Art is God’s fingerprint and Satan’s stolen treasure. ',
    blurb: "Why Art Matters is a semi-annual conference hosted by Lighthouse Arab World and several of its partners to gather Arab Christian Artists to share about how they are using art to communicate the message of the gospel in this difficult region. This includes media and other visual arts, fine arts, music, and poetry. The artists come primarily from the Arab World, but also Europe and North American if their art is directed towards Arabic speakers.", 
    mission_statement: "",
    about: "",
    website: "",
    video: "https://www.youtube.com/watch?v=6bYRXqFrbTE")

# projects = [
#     { name: 'Belight',
#         subtitle: 'Belight is a streaming platform connected to the world\'s social media platforms.', 
#         blurb: "Bringing the hope of Jesus to the Arab World through a unique and powerful online streaming platform. Come and engage!", 
#         mission_statement: "Our mission is to bring high quality evangelistic content to the arab-speaking world. We believe now is the time for something different!", 
#         about: "Belight is designed to share the hope of the gospel of Jesus Christ in unique and innovative ways, through videos, live events, evangelistic programs, teaching and worship videos. But why build an Arabic streaming platform? Aren't YouTube, Facebook, Instagram and even TikTok enough? We see this as an opportunity to not only consolidate high quality Arabic Christian content into a single location, but to uniquely communicate with an audience that live in a difficult context. While the historic Christian church has functioned with some freedom in Egypt, Jordan, and Lebanon, it is heavily persecuted in most other countries in the Middle East and North Africa. We are building a platform and experience that they can trust, where they can be free to ask questions, engage in discipleship, and grow in their faith. ",
#         website: "https://belight.tv/",
#         video: "https://player.vimeo.com/video/690513901"
#     },
#     { name: 'Belight FM',
#         subtitle: 'Sharing God\'s love to a country and region desperately in need of hope', 
#         blurb: "The only FM broadcast station in the country of Lebanon, reaching far beyond borders", 
#         mission_statement: "Our mission is to bring high quality evangelistic content to the arab-speaking world. We believe now is the time for something different!", 
#         about: "Belight FM is the only evangelical FM station in all of Lebanon, broadcasting hope, reconciliation and transformation through the message of Jesus Christ. We have a variety of content from live talk shows to teaching to worship music written and produced in the Arab World. In light of the circumstances that Lebanone and the region are going through and the ongoing difficult news, we want to proclaim that in the midst of this darkness “let there be light!” from the source of light, peace and true joy! We hope that this station will be a cause of blessing and encouragement for all who listen to it!  ",
#         website: "https://www.belight.fm/",
#         video: "https://player.vimeo.com/video/690526413"
#     },
#     { name: 'Lighthouse School of Creative Arts',
#         subtitle: 'Reaching the Arab World through Replication',
#         blurb: "Reaching the Arab World through Replication",
#         mission_statement: "We believe in training Christian Arabs with the gifting and passion to use media to communicate God's love in unique and creative ways, to show the region that there is a better way.", 
#         about: "Today, media is defining the general understanding and the worldview of people across the world, and the Middle East is no exception. Equipping an enlightened generation with what's needed to produce quality media is of utmost importance, and this is our tool of choice in LSCA. This training is designed to find passionate local talents, train them, invest in them spiritually, technically and aesthetically to be able to return to their nations with a thorough understanding of the effectiveness of media, holding the keys to delivering God's message of love in the best way possible.",
#         website: "",
#         video: "https://vimeo.com/690528560"
#     },
#     { name: 'Lighthouse Cinema',
#         subtitle: 'Breaking down walls of hate and building bridges through Cinema and Documentaries', 
#         blurb: "Breaking down walls of hate and building bridges through Cinema and Documentaries", 
#         mission_statement: "Christian evangelistic and themed films, documentaries and medium format shows for television that communicate truth to the mind and heart.", 
#         about: "We believe that the message of the Gospel of Jesus is more easily accepted through high quality film, documentaries and even television programs. By producing this kind of content, we believe that God has and will break the negative image of Christians, often labeled as apostates. We will see bridges built for Christians in Arab World society that in turn break down barriers of fear and open doors to dialog and freedom.",
#         website: "",
#         video: "https://vimeo.com/680225547"
#     },
#     { name: 'BeHelp',
#         subtitle: 'Bringing people together to see how art changes hearts', 
#         blurb: "Breaking down walls of hate and building bridges through Cinema and Documentaries", 
#         mission_statement: "Just as Jesus ministered to and cared for those in need, Lighthouse Arab World ministers to the poor, the needy, and the outcast in the name of Christ.", 
#         about: "Our team chooses to live out what we teach to Christians and the majority people throughout the region. We do this opportunisticaly through our churches and partners.",
#         website: "",
#         video: "https://vimeo.com/690530124"
#     },
# ]

pBelight_photo = pBelight.project_photos.create(title: 'BeLight Photo')
pBelight_photo.photo.attach(io: File.open(Rails.root.join('public', 'images', 'Belight.png')), filename: 'Belight.png')

pBelightFm_photo = pBelightFm.project_photos.create(title: 'BeLightFM Photo')
pBelightFm_photo.photo.attach(io: File.open(Rails.root.join('public', 'images', 'BeLightFM.jpg')), filename: 'BeLightFM.jpg')

pLighthouseSchool_photo = pLighthouseSchool.project_photos.create(title: 'LHCSOA Photo')
pLighthouseSchool_photo.photo.attach(io: File.open(Rails.root.join('public', 'images', 'LighthouseCreativeSchoolOfArts.jpeg')), filename: 'LighthouseCreativeSchoolOfArts.jpeg')

pLighthouseCin_photo = pLighthouseCin.project_photos.create(title: 'LHCinema Photo')
pLighthouseCin_photo.photo.attach(io: File.open(Rails.root.join('public', 'images', 'LighthouseCinema.png')), filename: 'LighthouseCinema.png')

pBeHelp_photo = pBeHelp.project_photos.create(title: 'BeHelp Photo')
pBeHelp_photo.photo.attach(io: File.open(Rails.root.join('public', 'images', 'BeHelp.jpeg')), filename: 'BeHelp.jpeg')

pWAM_photo = pWAM.project_photos.create(title: 'WAM Photo')
pWAM_photo.photo.attach(io: File.open(Rails.root.join('public', 'images', 'WAM.jpeg')), filename: 'WAM.jpeg')


puts "seeded"