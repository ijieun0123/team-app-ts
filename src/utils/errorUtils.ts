export interface FieldError {
    field: string;
    reason: string;
}

export interface ErrorResponse {
    code: string;
    message: string;
    errors?: FieldError[];
}

export const normalizeErrors = (
    errors: FieldError[] | undefined,
    fieldOrder: string[]
): FieldError[] => {
    if (!errors) return [];

    const map = new Map<string, string>();

    for (const { field, reason } of errors) {
        if (!map.has(field)) {
            map.set(field, reason);
        }
    }

    return fieldOrder
        .filter(field => map.has(field))
        .map(field => ({
            field,
            reason: map.get(field)!,
        }));
};
