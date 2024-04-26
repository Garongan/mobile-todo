import { useState } from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import Banner from "./components/Banner";
import Greet from "./components/Greet";
import NewTodo from "./components/NewTodo";
import NoList from "./components/NoList";
import Todos from "./components/Todos";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    title: z.string(),
});

const HomeScreen = () => {
    const { control, handleSubmit, reset, setValue } = useForm({ mode: "onTouched", schema: zodResolver(schema) });
    const [todos, setTodos] = useState([]);
    const [countIsDone, setCountIsDone] = useState(0);

    const handleNewTodo = (data) => {
        const isExist = todos.find((todo) => todo.id === data.id);
        if (isExist) {
            setTodos((prev) => prev.map((todo) => (todo.id === data.id ? data : todo)));
        } else {
            setTodos([...todos, data]);
        }
        clearForm();
    };

    const clearForm = () => {
        reset();
        Keyboard.dismiss();
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
        setValue("id", valueTodo.id);
        setValue("title", valueTodo.title);
        setValue("status", valueTodo.status);
    };

    return (
        <View style={styles.container}>
            <Greet />
            <Banner total={todos.length} countIsDone={countIsDone} />
            <NewTodo handleSubmit={handleSubmit} handleNewTodo={handleNewTodo} control={control} clearForm={clearForm} />
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
