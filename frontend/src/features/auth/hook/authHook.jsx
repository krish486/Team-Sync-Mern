import { useForm } from "react-hook-form";

export let authHook = () => {
    const {
        register,
        handleSubmit,
        watch,
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
        console.log(data);
    };
    const onRegisterSubmit = (data) => {
        console.log(data);
    };

    return { register, handleSubmit, errors, isSubmitting, password, getStrength, onLoginSubmit, onRegisterSubmit }
}