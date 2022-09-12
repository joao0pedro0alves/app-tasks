import moment from "moment"

export const formatDate = (format: string, date = new Date()) =>
    moment(date).locale("pt-br").format(format)
