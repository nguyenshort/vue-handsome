import {App, reactive} from "vue"

const VUE_SEXY_COLORS = Symbol.for('vue-sexy-colors')

export default (app: App) => {

    const colors = reactive({
        primary:'#5b3cc4',
        success:'rgb(23, 201, 100)',
        danger:'rgb(242, 19, 93)',
        warning:'rgb(255, 130, 0)',
        dark:'rgb(36, 33, 69)'
    })

    app.provide(VUE_SEXY_COLORS, colors)

}
