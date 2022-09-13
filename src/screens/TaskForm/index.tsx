import {useState} from "react"
import {
    Modal,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
} from "react-native"

import {DateField} from "../../components/DateField"
import {TextField} from "../../components/TextField"

import {styles} from "./styles"

const initialState = {
    descr: "Tarefa #01",
    date: new Date(),
}

interface TaskFormProps {
    isVisible: boolean
    onCancel: () => void
    onSave: (data: typeof initialState) => void
}

export function TaskForm({isVisible, onSave, onCancel}: TaskFormProps) {
    const [formValues, setFormValues] = useState({
        ...initialState,
    })

    const handleChangeFormValue = (name: string, newValue: any) => {
        setFormValues((previousValues) => ({
            ...previousValues,
            [name]: newValue,
        }))
    }

    return (
        <Modal
            transparent
            visible={isVisible}
            onRequestClose={onCancel}
            animationType="slide"
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.backdrop}></View>
            </TouchableWithoutFeedback>
            <View style={styles.backdrop}>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>

                    <View style={styles.form}>
                        <TextField
                            placeholder="Informe a descrição..."
                            value={formValues.descr}
                            onChangeText={(newText: string) =>
                                handleChangeFormValue("descr", newText)
                            }
                        />
                        <DateField
                            placeholder="Informe a data de conclusão..."
                            value={formValues.date}
                            onChange={(_, newDate) =>
                                handleChangeFormValue("date", newDate)
                            }
                        />
                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onSave(formValues)}>
                            <Text style={[styles.button, styles.buttonSave]}>
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
