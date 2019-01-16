
const actions = {

  setData({ commit }, data) {
    if (data) {
      commit('UPDATE_DATA', data);
    }
  }
};

export default actions;
