import axios from "axios";
// const url = process.env.REACT_APP_BASE_URL
export const getListEmployeeService = async (query: any) => {
  const response = axios.get(
    `http://localhost:8081/week2/api/employees`
  );
  return response;
};