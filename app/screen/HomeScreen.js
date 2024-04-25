import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Banner from "./components/Banner";
import Greet from "./components/Greet";
import NewTodo from "./components/NewTodo";
import NoList from "./components/NoList";
import Todos from "./components/Todos";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    title: z.string(),
});

const HomeScreen = () => {
    const {} = useForm({ mode: "onTouched", schema: zodResolver(schema) });
    const [todos, setTodos] = useState([]);
    const [countIsDone, setCountIsDone] = useState(0);

    const addTodo = (todo) => {
        console.log(todo);
        if (todo.id) {
            setTodos((prev) =>
                prev.map((item) => {
                    if (item.id === todo.id) {
                        return { ...item, title: todo };
                    }
                    return item;
                })
            );
        } else {
            const newTodo = {
                id: new Date().getTime().toString(),
                title: todo,
                status: true,
            };
            setTodos([...todos, newTodo]);
        }
    };

    const changeStatus = (id) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    const nextTodo = { ...todo, status: !todo.status };
                    nextTodo.status ? setCountIsDone((prev) => prev - 1) : setCountIsDone((prev) => prev + 1);
                    return nextTodo;
                }
                return todo;
            })
        );
    };

    const deleteTodo = (id) => {
        Alert.alert("Delete Todo", "Anda Yakin Menghapus Todo Berikut?", [
            {
                text: "No",
                style: "cancel",
            },
            {
                text: "Yes",
                onPress: () => setTodos((prev) => prev.filter((todo) => todo.id !== id)),
            },
        ]);
    };

    const handleSelectedTodo = (id) => {
        const valueTodo = todos.find((item) => item.id === id);
        setTodo(valueTodo);
    };

    return (
        <View style={styles.container}>
            <Greet />
            <Banner done={1} total={todos.length} countIsDone={countIsDone} />
            <NewTodo handleAddTodo={addTodo} todo={todo} setTodo={setTodo} />
            <View style={{ flex: 1 }}>
                {todos.length === 0 ? (
                    <NoList />
                ) : (
                    <Todos todos={todos} changeStatus={changeStatus} handleDelete={deleteTodo} handleSelectedTodo={handleSelectedTodo} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
});

export default HomeScreen;
