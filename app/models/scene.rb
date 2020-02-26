class Scene < ApplicationRecord
  has_a :wave
  has_a :draw
  has_a :audio
end
