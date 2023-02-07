class User < ApplicationRecord
    has_secure_password
    has_many :carts
    has_many :orders, through: :carts

    validates :email, presence: true

    validates :email, uniqueness: :true

    def password=(new_password)
        salt = BCrypt::Engine::generate_salt
        self.password_digest = BCrypt::Engine::hash_secret(new_password, salt)
    end

    def authenticate(password)
        salt = password_digest[0..28]
        return nil unless BCrypt::Engine::hash_secret(password, salt) == self.password_digest
        self
    end
end
