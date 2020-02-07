import moment from 'moment'
import 'moment/locale/nl'

const meta = (props) => {
    const today = moment(props.date).startOf('day')
    const isToday = today.isSame(moment().startOf('day'))
    const isTomorrow = today.isSame(moment().startOf('day').add(1, 'days'))
    
    if (isToday) {
        return 'Vandaag'
    }
    if (isTomorrow) {
        return 'Morgen'
    }
    return moment(props.date).locale('nl').format('dd DD MMM')
}

export default meta
