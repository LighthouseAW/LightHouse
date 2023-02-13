class Api::DownloadController < ApplicationController
    def show
        @purchase = Purchase.find(params[:id])
        send_file @purchase.file.path,
            filename: @purchase.file.filename,
            type: @purchase.file.content_type,
            disposition: "attachment"
    end
  end