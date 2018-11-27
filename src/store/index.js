import 'es6-promise/auto'
import Vuex from 'vuex'

const isDev = process.env.NODE_ENV === 'development' ? true : false;

import defaultState from "./state/state.js"
import mutations from "./mutations/mutations.js"
import getters from "./getters/getters.js"
import actions from "./actions/actions.js"

const store = () => {
    return new Vuex.Store({
        strict: isDev ? true : false,
        state: defaultState,
        mutations,
        getters ,
        actions,
        modules:{
            a:{
                namespaced:true,
                state:{
                    text:1
                },
                mutations:{
                    updateText(state,text){
                        console.log("a.state:",state)
                        state.text = text;
                    }
                },
                getters:{
                    textPlus(state,getters,rootState){
                        return state.text + rootState.count
                    }
                }
            }
        }
    })
}

export default store
