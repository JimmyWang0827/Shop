import Vue from 'vue';
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Aside,
    Header,
    Main,
    Menu,
    MenuItem,
    Submenu,
    MenuItemGroup
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);

Vue.prototype.$message = Message;
