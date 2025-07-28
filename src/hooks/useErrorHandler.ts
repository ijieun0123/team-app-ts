import { useState } from "react";
import type { ErrorResponse } from "../utils/errorUtils";
import { normalizeErrors } from "../utils/errorUtils";

export const useErrorHandler = (fieldOrder: string[]) => {
    const [error, setError] = useState<ErrorResponse | null>(null);

    const handleError = (errData: ErrorResponse) => {
        const cleaned = normalizeErrors(errData.errors, fieldOrder);
        setError({ ...errData, errors: cleaned });
    };

    return { error, setError, handleError };
};
