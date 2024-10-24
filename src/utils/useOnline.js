import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    function handleOnline() {
        setIsOnline(true);
    }

    function handleOffline() {
        setIsOnline(false);
    }

    console.log("isOnline");

    useEffect(() => {
        window.addEventListener("online", handleOnline);

        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return isOnline;
};

export default useOnline;
