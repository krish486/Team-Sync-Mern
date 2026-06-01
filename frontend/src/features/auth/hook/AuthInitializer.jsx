import { useDispatch } from "react-redux"
import { getMeThunk } from "../state/Thunk/authLoginThunk"
import { useEffect } from "react"

export let AuthInitializer = () => {
    let dispatch = useDispatch()

    useEffect(() => {

        (() => {
            dispatch(getMeThunk())
        })()

        console.log("get me api call hui")
    }, [])
}