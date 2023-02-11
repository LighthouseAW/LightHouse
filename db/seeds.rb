Cart.destroy_all
User.destroy_all
Order.destroy_all
AudioFile.destroy_all
Instrumental.destroy_all
Genre.destroy_all
Lease.destroy_all



g1 = Genre.create(name: "Drill")


i1 = Instrumental.create(title: "Vile", picture: "", info: "about this track", genre: Genre.first)
i1mp3 = AudioFile.create(instrumental_id: i1.id, lease: l1)
i1mp3.file.attach(io: File.open('./public/audio/Vile x train x flemps.mp3'), filename: 'Vile x train x flemps.mp3', content_type: 'audio/mp3')
l1 = Lease.create(contract_info: 'mp3 lease, unlimited use', price: 40)

# i2 = Instrumental.create(title: "Ritual", picture: "", info: "about this track", genre: Genre.first)
# i2mp3 = AudioFile.create(instrumental_id: i2.id, lease: l2)
# i2mp3.file.attach(io: File.open('./public/audio/ritual.mp3'), filename: 'Again.mp3', content_type: 'audio/mp3')
# l2 = Lease.create(contract_info: 'mp3 lease, unlimited use', price: 40)

# i3 = Instrumental.create(title: "Idols", picture: "", info: "about this track", genre: Genre.first)
# i3mp3 = AudioFile.create(instrumental_id: i3.id, lease: l3)
# i3mp3.file.attach(io: File.open('./public/audio/khxncollab.mp3'), filename: 'khxncollab.mp3', content_type: 'audio/mp3')
# l3 = Lease.create(contract_info: 'mp3 lease, unlimited use', price: 40)

puts "seeded ✅:"