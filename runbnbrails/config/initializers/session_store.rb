
if Rails.env == 'production'
    Rails.application.config.session_store :cookie_store, key: "_runbnbrails",domain: ""
else
    Rails.application.config.session_store :cookie_store, key: "_runbnbrails"
end


