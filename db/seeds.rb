# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Cart.destroy_all
User.destroy_all
Order.destroy_all
AudioFile.destroy_all
Instrumental.destroy_all
Genre.destroy_all
Lease.destroy_all


g1 = Genre.create(name: "Drill")

i1 = Instrumental.create(title: "Vile", picture: "", info: "about this track", genre: g1)
i2 = Instrumental.create(title: "Ritual", picture: "", info: "about this track", genre: g1)
i3 = Instrumental.create(title: "Idols", picture: "", info: "about this track", genre: g1)

l1 = Lease.create(contract_info: 'mp3 lease, unlimited use', price: 40)
l2 = Lease.create(contract_info: 'mp3 lease, unlimited use', price: 40)
l3 = Lease.create(contract_info: 'mp3 lease, unlimited use', price: 40)

i1mp3 = AudioFile.create(instrumental_id: i1.id, lease: l1)
i2mp3 = AudioFile.create(instrumental_id: i2.id, lease: l2)
i3mp3 = AudioFile.create(instrumental_id: i3.id, lease: l3)

# i1mp3.file.attach(io: File.open('./public/Vile x train x flemps.mp3'), filename: 'Vile x train x flemps.mp3', content_type: 'audio/mp3')
# i2mp3.file.attach(io: File.open('./public/ritual.mp3'), filename: 'Again.mp3', content_type: 'audio/mp3')
i3mp3.file.attach(io: File.open('./public/audio/khxncollab.mp3'), filename: 'khxncollab.mp3', content_type: 'audio/mp3')

# ian = User.create(email: 'ianholsteen@gmail.com', password: '67508rhys')

# ic = Cart.create(user: ian)

# o1 = Order.create(cart: ic, lease_id: l1.id)

puts "seeded ✅:"