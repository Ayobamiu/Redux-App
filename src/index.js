import configureStore from "./practice/configureStore";
import { addBug, assignBugToUser, loadBugs, resolveBug } from "./practice/bugs";

const store = configureStore();

// store.dispatch(addBug({ description: "Test save" }));
store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(assignBugToUser(4, 2));
}, 3000);
