import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./styles/theme.css";
import i18n from "./i18n";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(fas);

loadFonts();

const app = createApp(App);

// Global helper: $lf(obj, 'field') returns the locale-specific field from a JSON object.
// E.g. $lf(trait, 'label') → trait.label_tr in Turkish, trait.label otherwise.
app.config.globalProperties.$lf = function (obj, field) {
  if (!obj) return "";
  const locale = this.$i18n?.locale;
  if (locale && locale !== "en") {
    const val = obj[field + "_" + locale];
    if (val !== undefined && val !== null && val !== "") return val;
  }
  return obj[field] ?? "";
};

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount("#app");
