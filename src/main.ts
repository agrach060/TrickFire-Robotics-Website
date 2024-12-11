import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faEnvelope, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faBars, faEnvelope, faInstagram, faFacebook, faLinkedin, faChevronLeft, faChevronRight, faArrowLeft, faArrowRight)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
