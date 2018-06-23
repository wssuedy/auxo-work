export const state = () => ({
  txt: '1900',
  group: "wss"
})

export const mutations = {
  change(state, argv) {
    state.txt = argv;
  }
}