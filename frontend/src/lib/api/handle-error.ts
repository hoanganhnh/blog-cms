import axios from "axios";

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

const handleError = (error: unknown) => {
  if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
    return {
      status: error.status,
      response: error.response,
    };
  }

  return (error as { response: unknown })!.response as Record<string, unknown>;
};

export default handleError;
