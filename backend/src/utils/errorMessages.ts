export const getErrorMessage = (error: unknown): string => {
  let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += "Error: " + error.message;
    }
  return errorMessage;
};