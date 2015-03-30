Rails.application.routes.draw do
 root 'tasks#home'
 get '/interesting'  => 'tasks#interesting'
end
