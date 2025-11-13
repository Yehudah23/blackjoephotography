// Small event bus using the browser EventTarget API.
// This avoids adding dependencies and works in Vue 3 where $root.$on was removed.
const _bus = new EventTarget();

export const bus = {
  on(eventName, handler) {
    _bus.addEventListener(eventName, handler);
  },
  off(eventName, handler) {
    _bus.removeEventListener(eventName, handler);
  },
  emit(eventName, detail = null) {
    _bus.dispatchEvent(new CustomEvent(eventName, { detail }));
  }
};

export default bus;
