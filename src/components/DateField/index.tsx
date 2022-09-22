import {useState} from "react"
import {View, TouchableOpacity} from "react-native"

import DateTimePicker, {BaseProps} from "@react-native-community/datetimepicker"
import Icon from "react-native-vector-icons/FontAwesome"

import {THEME} from "../../theme"
import {TextField} from "../TextField"

import {styles} from "./styles"
import {formatDate} from "../../services/utils"

interface DateFieldProps extends BaseProps {
    placeholder?: string
    value: Date
}

export function DateField({placeholder, ...props}: DateFieldProps) {
    const [show, setShow] = useState(false)
    const inputValue = formatDate("DD/MM/YYYY", props.value)

    const toggleShow = () => setShow(!show)

    return (
        <>
            <View style={styles.container}>
                <TextField
                    placeholder={placeholder}
                    value={inputValue}
                    showSoftInputOnFocus={false}
                />
                <TouchableOpacity onPress={toggleShow} style={styles.icon}>
                    <Icon
                        size={20}
                        name="calendar"
                        color={THEME.COLORS.PRIMARY}
                    />
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    {...props}
                    mode="date"
                    onChange={(...args) => {
                        setShow(false)
                        if (props.onChange) props.onChange(...args)
                    }}
                />
            )}
        </>
    )
}
