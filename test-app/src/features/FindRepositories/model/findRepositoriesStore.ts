import {makeAutoObservable} from "mobx";

class FindRepositoriesStore {
  inputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue(value: string) {
    this.inputValue = value;
  }
}

export const findRepositoriesStore = new FindRepositoriesStore();
