class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, email, password_digest
  has_many :posts
  has_many :comments
end
