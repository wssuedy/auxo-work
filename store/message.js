export const state = () => ({
  messages: []
});

export const mutations = {
  create(state, message) {
    state.messages.push(message);
  },
  init(state, messages) {
    state.messages = messages;
  }
}