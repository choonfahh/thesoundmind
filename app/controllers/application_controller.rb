class ApplicationController < ActionController::API
  include JSONAPI::ActsAsResourceController
  include JSONAPI::Utils
end
