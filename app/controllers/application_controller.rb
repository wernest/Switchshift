class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Angular has a different method for handling csrf attacks than
  # the standard rails way, that's what this is supporting
  after_filter :set_csrf_cookie_for_ng

  # Angular has a different way of handling CSRF attacks, so
  # we add logic to handle that too
  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end


  private

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
end
