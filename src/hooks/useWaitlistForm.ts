
import { useReducer, useCallback } from 'react';

interface FormState {
  firstName: string;
  gradeLevel: string;
  email: string;
  testType: string;
  isSubmitted: boolean;
  isLoading: boolean;
}

type FormAction = 
  | { type: 'UPDATE_FIELD'; field: keyof FormState; value: string }
  | { type: 'SET_LOADING'; isLoading: boolean }
  | { type: 'SET_SUBMITTED'; isSubmitted: boolean }
  | { type: 'RESET_FORM' };

const initialState: FormState = {
  firstName: "",
  gradeLevel: "",
  email: "",
  testType: "",
  isSubmitted: false,
  isLoading: false
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };
    case 'SET_SUBMITTED':
      return { ...state, isSubmitted: action.isSubmitted };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

export const useWaitlistForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const updateField = useCallback((field: keyof FormState, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', isLoading });
  }, []);

  const setSubmitted = useCallback((isSubmitted: boolean) => {
    dispatch({ type: 'SET_SUBMITTED', isSubmitted });
  }, []);

  const resetForm = useCallback(() => {
    dispatch({ type: 'RESET_FORM' });
  }, []);

  return {
    state,
    updateField,
    setLoading,
    setSubmitted,
    resetForm
  };
};
