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
emp3 = Employee.create(name: "Dave Halverson", role: "", blurb: "Dave has served as the chairman of the board of Lighthouse Arab World since 2013. He is the Associate Pastor of Outreach Ministries at San Gabriel Community Church, in California. Dave and his wife Kristen have four adult children and ten grandchildren. " )
emp4 = Employee.create(name: "Phil Wood", role: "", blurb: "Phil has worked as an executive in the oil and gas industry for 38 years. He and his wife Carol live in Colorado and have three married children and nine grandchildren." )
emp5 = Employee.create(name: "Douglas Barnett", role: "", blurb: "Dr. Douglas Barnett spent 30 years working as a development economist in Africa, including ten years in Tunisia where he came to know Dr D. While working, he carried out ministry in the countries he lived in. Today, he is part time instructor for CalBaptist University, works part time in property management, an urban garden project, and serves on the board of a couple of missions, including LHAW and cybermissions.org." )
emp6 = Employee.create(name: "Ken Supernault", role: "", blurb: "Ken has served on the board of Lighthouse Arab World Ministers for 2 years. He is a self employed contractor and has been in business for 35 years. He and his wife Tina have 5 children and soon to be 8 grandchildren." )
emp7 = Employee.create(name: "Daniel Powell", role: "", blurb: "Daniel is the Senior Pastor of New Hope Baptist Church. He, his wife, and five children lived and served in the Middle East for 10 years. He has a passion to see Christ glorified throughout the Middle East.")
emp8 = Employee.create(name: "Richard Rasmussen", role: "", blurb: "Rich is a business law attorney practicing in California for the past 35 years.  He is involved in various ministries, including serving as an elder at his church. Rich and his wife Pam reside in southern California.")

pBelight = Project.create(name: 'Belight Community',
    subtitle: 'Belight is a streaming platform connected to the world\'s social media platforms.', 
    blurb: "Please consider joining this effort to reach across the Arabic world in a unique way.", 
    mission_statement: "Our mission is to bring high quality evangelistic content to the Arabic speaking world. We believe now is the time for something different!", 
    about: "Belight is designed to share the hope of the gospel of Jesus Christ in unique and innovative ways, through videos, live events, evangelistic programs, teaching and worship videos. But why build an Arabic streaming platform? Aren't YouTube, Facebook, Instagram and even TikTok enough? We see this as an opportunity to not only consolidate high quality Arabic Christian content into a single location, but to uniquely communicate with an audience that live in a difficult context. While the historic Christian church has functioned with some freedom in Egypt, Jordan, and Lebanon, it is heavily persecuted in most other countries in the Middle East and North Africa. We are building a platform and experience that they can trust, where they can be free to ask questions, engage in discipleship, and grow in their faith. ",
    website: "https://belight.io/",
    video: "https://player.vimeo.com/video/690513901",
    facebook: "",
    app: "",
    module1: "",
    module2: "",
    module3: "")

pBelightFm = Project.create(name: 'Belight FM 105.7',
    subtitle: 'Sharing God\'s love to a country and region desperately in need of hope', 
    blurb: "Our aim is to build bridges with our listeners regardless of their background through our one and only Jesus.", 
    mission_statement: "A unique opportunity for evangelical voice over Lebanon, our mission is to declare the light of Jesus and shout out loud “LET THERE BE LIGHT” over the darkness and hostile environment we live in. Through our radio station programs, we aim to fill the air of Lebanon with hope faith, and joy. ", 
    about: "We are a 24/7 radio station with a variety of programs including worship, music, Bible teaching from different local churches, and live shows during rush hours; where our listeners can participate, share their inputs, and ask questions. Our radio is also available online through our website and mobile app, where we have listeners from over 80 different countries.",
    website: "https://www.belight.fm/",
    video: "https://www.youtube.com/watch?v=KJR-4rhw6Hk",
    facebook: "https://www.facebook.com/Belight.fm",
    app: "https://belight.fm/downloadApp",
    module1: "",
    module2: "",
    module3: "")

pLighthouseSchool = Project.create(name: 'Media and Mission Training Center',
    subtitle: 'Reaching the Arab World through Replication',
    blurb: "",
    mission_statement: "MMTC (Media and Mission Training Center) combines three interconnected units serving one integrated mission, that of an improved and expanded ability to shepherd those who have come to Christ, or are exploring doing so in this area so hostile to the Gospel.", 
    about: "The three MMTC units are:",
    website: "",
    video: "https://player.vimeo.com/video/690528560",
    facebook: "",
    app: "",
    module1: "The Training Unit is a 3-month intensive creative educational experience that is conducted in three phases (both offline and online) with  participants from the MENA region. This unit teaches students many facets of creative and professional level forms of photography, cinematography, design, lighting, editing and writing. This instruction enables students to return to their home countries in the Middle East and North Africa (MENA) to impact their communities utilizing the power of the arts. At Lighthouse we have seen first hand how Art Opens Hearts! Our flagship in this unit is the successful LSCA (Lighthouse School of Creative Arts) that has been going on steadily for the past three years.",
    module2: "The Discipleship Unit teaches a mobilized systematic method of discipling both in person and online, tailored to meet the needs of our participants. This enables us to respond in various locations as needed. ",
    module3: "The Information Unit is an online data research center, collecting and analyzing data about mission work in the MENA region. This unit serves as a valuable resource to develop strategies advancing the work in the region, creating partnerships between mission organizations, and for the sharing of information.")

pLighthouseCin = Project.create(name: 'Lighthouse Cinema',
    subtitle: 'Breaking down walls of hate and building bridges through Cinema and Documentaries', 
    blurb: "", 
    mission_statement: "", 
    about: "We believe that the message of the Gospel of Jesus is more easily accepted through high quality film, documentaries and even television programs. By producing this kind of content, we believe that God has and will break the negative image of Christians, often labeled as apostates. We will see bridges built for Christians in Arab World society that in turn break down barriers of fear and open doors to dialog and freedom.",
    website: "",
    video: "https://www.youtube.com/watch?v=RpsTu2pku30&feature=youtu.be",
    facebook: "",
    app: "",
    module1: "",
    module2: "",
    module3: "")

pBeHelp = Project.create(name: 'BeHelp',
    subtitle: 'Lighthouse Arab World ministers to the poor, the needy and the outcast in the name of Jesus Christ.', 
    blurb: "", 
    mission_statement: "Just as Jesus ministered to and cared for those in need, Lighthouse Arab World ministers to the poor, the needy, and the outcast in the name of Christ.", 
    about: "The Arab World is known for natural and man-made disasters, violence, blood shed and especially persecution of Christians. Our of our areas of focus and guiding principles is to opportunistically provide food, shelter, medicine, mental health care and spiritual encouragement for those most impacted by these events and circumstances.",
    website: "",
    video: "https://player.vimeo.com/video/690530124",
    facebook: "",
    app: "",
    module1: "",
    module2: "",
    module3: "")

pWAM = Project.create(name: 'Why Art Matters',
    subtitle: 'Art is God’s fingerprint and Satan’s stolen treasure. ',
    blurb: "Why Art Matters is a semi-annual conference hosted by Lighthouse Arab World and several of its partners to gather Arab Christian Artists to share about how they are using art to communicate the message of the gospel in this difficult region. This includes media and other visual arts, fine arts, music, and poetry. The artists come primarily from the Arab World, but also Europe and North American if their art is directed towards Arabic speakers.", 
    mission_statement: "",
    about: "",
    website: "",
    video: "https://www.youtube.com/watch?v=6bYRXqFrbTE",
    facebook: "",
    app: "",
    module1: "",
    module2: "",
    module3: "")

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
