class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments

    validates_presence_of :username, :email, :password

    validates :username, uniqueness: { case_sensitive: false }

end
