class DrawController < ApplicationController
  def index
    @audio_files = ['stupid_sine.mp3', 'your_childhood_song.mp3']
  end

  def show
    @audio_file = 'your_childhood_song.mp3'
  end

  def circle
    send_file "#{Rails.root}/app/assets/images/circle.png", type: 'image/png', disposition: 'inline'
  end
end
