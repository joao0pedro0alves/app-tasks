import {useState} from "react"

import {View, TouchableOpacity, StyleSheet} from "react-native"
import DateTimePicker, {BaseProps} from "@react-native-community/datetimepicker"
import Icon from "react-native-vector-icons/FontAwesome"

import TextInputField from "./TextInputField"
import {formatDate} from "../services/utils"
import global from "../styles/global"

interface DateTimeFieldProps extends BaseProps {
    placeholder?: string
    value: Date
}

function DateTimeField({placeholder, ...props}: DateTimeFieldProps) {
    const [show, setShow] = useState(false)
    const inputValue = formatDate("DD/MM/YYYY", props.value)

    const toggleShow = () => setShow(!show)

    return (
        <>
            <View style={styles.container}>
                <TextInputField
                    placeholder={placeholder}
                    value={inputValue}
                    showSoftInputOnFocus={false}
                />
                <TouchableOpacity onPress={toggleShow} style={styles.icon}>
                    <Icon
                        size={25}
                        name="calendar"
                        color={global.colors.primary}
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

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    icon: {
        position: "absolute",
        justifyContent: "center",
        right: 30,
        top: 0,
        bottom: 0,
    },
})

export default DateTimeField
