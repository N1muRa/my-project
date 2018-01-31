import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  channels: '',
  channelIndex: 0,
  channelData: '',
  newDataIndex: '',
  load: true,
  isActive: 0
}

const mutations = {
  add (state) {
    state.count += 1
  },
  addN (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count -= 1
  },
  muChannels (state, channels) {
    state.channels = channels
  },
  muChannelIndex (state, index) {
    state.channelIndex = index
  },
  muGetData (state, data) {
    state.channelData = data
  },
  loading (state, status) {
    state.load = status
  },
  muIsActive (state, index) {
    state.isActive = index
  }
}

const getters = {
  count: function (state) {
    state.count += 100
  }
}

const actions = {
  addAction (context) {
    setTimeout(() => {
      context.commit('reduce')
    }, 1000)
    console.log('我比reduce提前执行')
    context.commit('addN', 10)
  },
  reduceAction ({commit}) {
    commit('reduce')
  },
  channelsAction ({commit, state}) {
    return new Promise((resolve, reject) => {
      this.$http.get('/api/channel').then(res => {
        commit('muChannels', res.data.result)
      })
      resolve()
    })
  },
  getDataAction ({commit, state}, channel) {
    return new Promise((resolve, reject) => {
      this.$http.get('/api/channel/' + channel).then(res => {
        commit('muGetData', res.data.result.list)
        state.load = false
      })
      resolve()
    })
  }
}

export default new Vuex.Store({
  state, mutations, getters, actions
})
