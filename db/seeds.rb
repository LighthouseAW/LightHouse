Order.destroy_all
Cart.destroy_all
Purchase.destroy_all
User.destroy_all

AudioFile.destroy_all
Instrumental.destroy_all
Genre.destroy_all
Lease.destroy_all

g1 = Genre.create(name: "Drill")

instrumentals_data = [  {    title: "Vile",    picture: "",    info: "about this track",    genre: Genre.first,    lease_info: 'mp3 lease, unlimited use',    price: 40,    contract_file_path: './public/contracts/*mp3 license.pdf',    audio_file_path: './public/audio/Vile x train x flemps.mp3'  },  {    title: "Ritual",    picture: "",    info: "about this track",    genre: Genre.first,    lease_info: 'mp3 lease, unlimited use',    price: 40,    contract_file_path: './public/contracts/*mp3 license.pdf',    audio_file_path: './public/audio/Ritual.mp3'  },  {    title: "Idols",    picture: "",    info: "about this track",    genre: Genre.first,    lease_info: 'mp3 lease, unlimited use',    price: 40,    contract_file_path: './public/contracts/*mp3 license.pdf',    audio_file_path: './public/audio/khxncollab.mp3'  }]

instrumentals_data.each do |data|
    instrumental = Instrumental.create(data.slice(:title, :picture, :info, :genre))
    lease = Lease.create(contract_info: data[:lease_info], price: data[:price])
    lease.contract.attach(io: File.open(data[:contract_file_path]), filename: 'mp3 license agreement', content_type: "application/pdf")
    audio_file = AudioFile.create(instrumental: instrumental, lease: lease)
    audio_file.file.attach(io: File.open(data[:audio_file_path]), filename: data[:title], content_type: 'audio/mp3')
end

puts "seeded ✅:"