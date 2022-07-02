import {computed} from "vue";
import {getColor} from "@util/index"
import {VmProps} from "@util/types/global";

export default (props: Partial<VmProps>) => {
    return computed(() => ({
        color: [
            {[`vm-component--primary`]: !props.danger && !props.success && !props.warn && !props.dark && !props.color},
            { 'vm-component--danger' : props.danger },
            { 'vm-component--warn' : props.warn },
            { 'vm-component--success' : props.success },
            { 'vm-component--dark' : props.dark },
            { [`vm-component--is-color`] : props.color || props.primary || props.success || props.warn || props.danger || props.dark },
        ],
        style: {
            '--vm-color': getColor(props.color),
        },
        isColorDark: props.color === 'dark' || props.dark,
        isColor: props.color || props.primary || props.success || props.warn || props.danger || props.dark
    }))
}


// get isColorDark() {
//     return this.color === 'dark' || this.dark || this.componentColor === 'dark'
//   }
//
//   get isColor() {
//     return this.color || this.primary || this.success || this.warn || this.danger || this.dark
//   }
