class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, email, password
  has_many :posts, :comments
end
