import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ScheduleQueryButtonProps {
 title: string
 onClick: () => void
}

export function ScheduleQueryButton({ onClick, title }: ScheduleQueryButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonQuerySchedule} onPress={onClick}>
      <Text style={styles.textQuerySchedule}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}