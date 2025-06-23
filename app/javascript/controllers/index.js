import { Application } from "@hotwired/stimulus"

import ButtontotopController from "./buttontotop_controller"
import ScrollanimationController from "./scrollanimation_controller"
import CarouseleducationController from "./carouseleducation_controller"
import CarouselijobsController from "./carouselijobs_controller"
import NavbarController from "./navbar_controller"  

const application = Application.start()
application.register("buttontotop", ButtontotopController)
application.register("navbar", NavbarController)
application.register("scrollanimation", ScrollanimationController)
application.register("carouselijobs", CarouselijobsController)
application.register("carouseleducation", CarouseleducationController)
