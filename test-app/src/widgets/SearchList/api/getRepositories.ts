import {transformRepositories} from "../lib/transformRepositories";
import {instance} from "@/shared/api";

export const getRepositories = async (searchValue: string) => {
  try {
    const {data} = await instance.get(`repositories?q=${searchValue}&per_page=3`);
    const transformedRepositories = transformRepositories(data.items);
    return transformedRepositories;
  } catch (error) {
    return [];
  }
};
