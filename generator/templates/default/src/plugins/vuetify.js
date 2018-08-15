import Vue from 'vue'
<%_ if (options.useAlaCarte) { _%>
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'
<%_ } else { _%>
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
<%_ } _%>

Vue.use(Vuetify, {
<%_ if (options.useAlaCarte) { _%>
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
<%_ } _%>
<%_ if (options.useTheme) { _%>
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
<%_ } _%>
<%_ if (options.useCustomProperties) { _%>
  customProperties: true,
<%_ } _%>
<%_ if (options.iconFont === 'md') { _%>
  iconfont: 'md',
<%_ } else if (options.iconFont === 'mdi') { _%>
  iconfont: 'mdi',
<%_ } else if (options.iconFont === 'fa') { _%>
  iconfont: 'fa',
<%_ } else if (options.iconFont === 'fa4') { _%>
  iconfont: 'fa4',
<%_ } _%>
})
