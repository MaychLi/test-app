import {Repository} from "@/entities/RepositoryCard";
import {makeAutoObservable} from "mobx";

class FeatureListStore {
  repositories: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFeature(repository: Repository) {
    this.repositories.push(repository);
  }

  removeFeatures() {
    this.repositories = [];
  }
}

export const featureListStore = new FeatureListStore();
