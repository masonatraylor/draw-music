class WavesController < ApplicationController
  def new
    @wave = Wave.new
  end
end
