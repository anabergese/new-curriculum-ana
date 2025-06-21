import { Application } from "@hotwired/stimulus"

import ButtontotopController from "./buttontotop_controller"
import HelloController from "./hello_controller"
import ScrollanimationController from "./scrollanimation_controller"
//import CarouseleducationController from "./carouseleducation_controller"
//import CarouselijobsController from "./carouselijobs_controller"
import NavbarController from "./navbar_controller"  

const application = Application.start()
application.register("buttontotop", ButtontotopController)
application.register("hello", HelloController)
application.register("scrollanimation", ScrollanimationController)
//application.register("carouseleducation", CarouseleducationController)
//application.register("carouselijobs", CarouselijobsController)
application.register("navbar", NavbarController)
