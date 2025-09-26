import { View } from "react-native";
import ListItem, { ListItemProps } from "./Listitem";

type ListProps = {
    items: ListItemProps[];
};

const List: React.FC<ListProps> = ({items}) => 
    <View>
        {items.map(item => (
            <ListItem key={item.name}{...item}/>
            ))}
    </View>


export default List;

