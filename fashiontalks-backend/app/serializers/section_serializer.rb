class SectionSerializer < ActiveModel::Serializer
  attributes :name, :created_at, :updated_at
  has_many :posts
end
