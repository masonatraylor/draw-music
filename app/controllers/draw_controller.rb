class DrawController < ApplicationController
  def index
  end

  def circle
    send_file "#{Rails.root}/app/assets/images/circle.png", type: 'image/png', disposition: 'inline'
  end
end
