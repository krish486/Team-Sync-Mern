import axios from "axios"
export let axiosInstance = axios.create({
    baseURL: "https://api.team-sync.space/api",
    withCredentials: true
})


// Interceptor to handle expired access tokens automatically
axiosInstance.interceptors.response.use(
    // Return successful responses as they are
    (response) => response,

    async (error) => {
        // Store the original request that failed
        const originalReq = error.config;

        // Check if access token expired (401)
        // and ensure we don't create an infinite retry loop
        if (error.response?.status === 401 && !originalReq._retry) {

            // Mark request as already retried
            originalReq._retry = true;

            try {
                // Request a new access token using refresh token
                await axiosInstance.get("/auth/get-accessToken");

                // Retry the original API request with new access token
                return axiosInstance(originalReq);

            } catch (error) {

                // Refresh token is invalid/expired
                // Redirect user to login page
                window.location.href = "/";

                // Reject the promise so calling code can handle the error
                return Promise.reject(error);
            }
        }

        // Reject all other errors normally
        return Promise.reject(error);
    }
);