import DatePicker from "./date-picker/index.js";
import { processComponentName } from './common/helpers/util';
import createAPI from "./common/helpers/create-api.js";
import BetterScroll from "./better-scroll";

import Button from "./components/button";
import Dialog from "./components/dialog";
import ActionSheet from "./components/action-sheet";
import Checkbox from "./components/checkbox";
import CheckboxGroup from "./components/checkbox-group";
import Checker from "./components/checker";
import Loading from "./components/loading";
import Form from "./components/form";
import Drawer from "./components/drawer";

import Radio from "./components/radio";
import RadioGroup from "./components/radio-group";
import Rate from "./components/rate";
import RecycleList from "./components/recycle-list";
import Scroll from "./components/scroll";
import ScrollNav from "./components/scroll-nav";
import ScrollNavBar from "./components/scroll-nav-bar";
import SegmentPicker from "./components/segment-picker";
import Select from "./components/select";

import Slide from "./components/slide";
import Sticky from "./components/sticky";
import Swipe from "./components/swipe";
import Switch from "./components/switch";
import TabBar from "./components/tab-bar";

import TabPanels from "./components/tab-panels";
import Textarea from "./components/textarea";
import TimePicker from "./components/time-picker";
import Tip from "./components/tip";

import Toast from "./components/toast";
import Toolbar from "./components/toolbar";
import Upload from "./components/upload";
import Validator from "./components/validator";



const components = [
	DatePicker,
	Button,
	Dialog,
	ActionSheet,
	Checkbox,
	CheckboxGroup,
	Checker,
	Loading,
	Form,
    Drawer,
    Radio,
    RadioGroup,
    Rate,
    RecycleList,
    Scroll,
    ScrollNav,
    ScrollNavBar,
    SegmentPicker,
    Select,
    Slide,
    Sticky,
    Swipe,
    Switch,
    TabBar,
    TabPanels,
    Textarea,
    TimePicker,
    Tip,
    Toast,
    Toolbar,
    Upload,
    Validator,
];

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((Component) => {
    // ignore radio
    // if (Component === Radio) {
    //   return
    // }
    Component.install(Vue)
  })
}

const Cubepro = {
  /* eslint-disable no-undef */
//   version: '1.12.20',
  install,
  BScroll: BetterScroll,
  createAPI
}
// console.log(install, "installs");

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
    Cubepro[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default Cubepro;
