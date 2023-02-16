Order.destroy_all
Cart.destroy_all
Purchase.destroy_all
User.destroy_all

AudioFile.destroy_all
Instrumental.destroy_all
Genre.destroy_all
Lease.destroy_all

g1 = Genre.create(name: "Drill")

instrumentals_data = [
  {
    title: "Vile",
    picture: "",
    info: "about this track",
    genre: Genre.first,
    leases: [
      { contract_info: 'mp3 lease, unlimited use', price: 40, contract_file_path: './public/contracts/*mp3 license.pdf', audio_file_path: './public/audio/Vile x train x flemps.mp3' },
      { contract_info: 'wav lease, unlimited use', price: 80, contract_file_path: './public/contracts/*Unlimited License Agreement.pdf', audio_file_path: './public/audio/Vile x train x flemps.mp3' },
      { contract_info: 'exclusive lease, unlimited use', price: 120, contract_file_path: './public/contracts/*Exclusive License Agreement.pdf', audio_file_path: './public/audio/Vile x train x flemps.mp3' }
    ]
  },
  {
    title: "Ritual",
    picture: "",
    info: "about this track",
    genre: Genre.first,
    leases: [
      { contract_info: 'mp3 lease, unlimited use', price: 40, contract_file_path: './public/contracts/*mp3 license.pdf', audio_file_path: './public/audio/Ritual.mp3' },
      { contract_info: 'wav lease, unlimited use', price: 80, contract_file_path: './public/contracts/*Unlimited License Agreement.pdf', audio_file_path: './public/audio/Ritual.mp3' },
      { contract_info: 'exclusive lease, unlimited use', price: 120, contract_file_path: './public/contracts/*Exclusive License Agreement.pdf', audio_file_path: './public/audio/Ritual.mp3' }
    ]
  },
  {
    title: "Idols",
    picture: "",
    info: "about this track",
    genre: Genre.first,
    leases: [
      { contract_info: 'mp3 lease, unlimited use', price: 40, contract_file_path: './public/contracts/*mp3 license.pdf', audio_file_path: './public/audio/khxncollab.mp3' },
      { contract_info: 'wav lease, unlimited use', price: 80, contract_file_path: './public/contracts/*Unlimited License Agreement.pdf', audio_file_path: './public/audio/khxncollab.mp3' },
      { contract_info: 'exclusive lease, unlimited use', price: 120, contract_file_path: './public/contracts/*Exclusive License Agreement.pdf', audio_file_path: './public/audio/khxncollab.mp3' }
    ]
  }
]

instrumentals_data.each do |data|
    instrumental = Instrumental.create(data.slice(:title, :picture, :info, :genre))
    data[:leases].each do |lease_data|
        lease = Lease.create(contract_info: lease_data[:contract_info], price: lease_data[:price])
        lease.contract.attach(io: File.open(lease_data[:contract_file_path]), filename: "#{instrumental.title} license agreement", content_type: "application/pdf")
        audio_file = AudioFile.create(instrumental: instrumental, lease: lease)
        audio_file.file.attach(io: File.open(lease_data[:audio_file_path]), filename: "#{instrumental.title} - #{lease.contract_info}", content_type: 'audio/mp3')
    end
end

puts "seeded ✅:"