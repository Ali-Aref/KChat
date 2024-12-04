import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [todo, setTodo] = useState<any>(null);

  const fetchTodo = () => {
		setTodo(null)
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
				//console.log(json)
				setTodo(json)
			});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
			<Button title="Fetch Todo" onPress={fetchTodo} />
      <Text>{JSON.stringify(todo, null, 2)}</Text>
    </View>
  );
}
