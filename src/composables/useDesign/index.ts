import {computed} from "vue";
import {getColor} from "@util/index"
import {VmProps} from "@util/types/global";

export default (props: Partial<VmProps>) => {
    return computed(() => ({
        color: [
            {[`vm-component--primary`]: !props.danger && !props.success && !props.warn && !props.dark && !props.color},
            { 'vm-component--danger' : props.danger },
            { 'vm-component--warn' : props.warn },
            { 'vm-component--success' : props.success }
        ],
        style: {
            '--vm-color': getColor(props.color),
        }
    }))
}
