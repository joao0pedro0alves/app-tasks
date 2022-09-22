import moment, { Moment } from "moment"

export const formatDate = (format: string, date: Date | Moment = new Date()) =>
    moment(date).locale("pt-br").format(format)
