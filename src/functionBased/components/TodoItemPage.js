import { useParams } from "react-router-dom";
import React from "react"

export default function TodoItemPage() {
    const { id } = useParams()
    return (<h3>Hi! This is todo item with id:<br/><i>{id}</i></h3>)
}