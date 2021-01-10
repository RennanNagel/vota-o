
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery/dist/jquery.min
//= require_tree .
//= require campaigns

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

