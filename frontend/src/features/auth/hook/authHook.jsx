import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { loginThunk } from "../state/Thunk/authLoginThunk";

export let authHook = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const password = watch("password", "");

    const getStrength = () => {
        if (password.length < 4) return 25;
        if (password.length < 8) return 50;
        if (!/[A-Z]/.test(password)) return 75;
        return 100;
    };

    const onLoginSubmit = (data) => {
        dispatch(loginThunk(data))
        console.log("logged in")
        reset()
    };
    const onRegisterSubmit = (data) => {
        console.log(data);
    };

    return { register, handleSubmit, errors, isSubmitting, password, getStrength, onLoginSubmit, onRegisterSubmit, navigate }
}