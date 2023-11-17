import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

// this hook is for managing when a request is currently loading or resulted in error
const useThunk = thunk => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
}

export { useThunk };